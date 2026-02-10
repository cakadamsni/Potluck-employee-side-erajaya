
import React, { useState } from 'react';
import { MOCK_EVENTS, MOCK_TIME_SEGMENTS } from '../constants';
import { TimeSegment } from '../types';

interface QueueDetailViewProps {
    onNavigate: (view: any) => void;
    onQueueSuccess: (queueNumber: string, timeSegment: string) => void;
}

const QueueDetailView: React.FC<QueueDetailViewProps> = ({ onNavigate, onQueueSuccess }) => {
    const event = MOCK_EVENTS.find(e => e.eventType === 'Queue' && e.status === 'Aktif') || MOCK_EVENTS.find(e => e.eventType === 'Queue')!;
    const [selectedSegment, setSelectedSegment] = useState<TimeSegment | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showFailModal, setShowFailModal] = useState(false);

    const getQuotaColor = (segment: TimeSegment) => {
        const ratio = segment.remainingQuota / segment.totalQuota;
        if (ratio === 0) return 'red';
        if (ratio <= 0.2) return 'amber';
        if (ratio <= 0.5) return 'blue';
        return 'green';
    };

    const getQuotaLabel = (segment: TimeSegment) => {
        if (segment.remainingQuota === 0) return 'HABIS';
        if (segment.remainingQuota <= 3) return 'HAMPIR HABIS';
        return `${segment.remainingQuota} Tersisa`;
    };

    const handleGrabQueue = () => {
        if (!selectedSegment) return;
        setIsLoading(true);

        // Simulate race condition with 1.5 second delay
        setTimeout(() => {
            setIsLoading(false);
            const isSuccess = Math.random() < 0.7; // 70% chance success

            if (isSuccess) {
                const queueNum = `Q-${String(Math.floor(Math.random() * 999) + 1).padStart(3, '0')}`;
                const segmentLabel = `${selectedSegment.label} (${selectedSegment.startTime} - ${selectedSegment.endTime})`;
                onQueueSuccess(queueNum, segmentLabel);
                onNavigate('queue-success');
            } else {
                setShowFailModal(true);
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-background-light pb-24 font-sans">
            <nav className="bg-white border-b border-slate-200 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('dashboard')}>
                            <span className="material-symbols-outlined text-primary text-3xl">token</span>
                            <span className="font-black text-xl tracking-tight">Erajaya<span className="text-primary">Raffle</span></span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex items-center gap-2 text-sm text-slate-500 font-medium">
                                <span className="material-symbols-outlined">account_circle</span>
                                <span>John Doe (NIK: 123456)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => onNavigate('dashboard')}
                        className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-bold text-sm"
                    >
                        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                        Kembali
                    </button>
                    <div className="h-4 w-px bg-slate-300"></div>
                    <nav className="flex items-center space-x-2 text-sm font-medium">
                        <span className="text-slate-500">Event List</span>
                        <span className="text-slate-300">/</span>
                        <span className="text-slate-900 font-bold">Antrian Event</span>
                    </nav>
                </div>

                {/* Event Info Section */}
                <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row md:justify-between items-start gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-black uppercase">Queue Event</span>
                                <span className="text-slate-400 text-xs flex items-center gap-1 font-bold">
                                    <span className="material-symbols-outlined text-[16px]">public</span> Public Event
                                </span>
                            </div>
                            <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">{event.title}</h1>
                            <p className="text-slate-500 text-sm max-w-2xl">{event.description}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-slate-50/30">
                        {[
                            { label: 'Tanggal Event', value: event.period, icon: 'calendar_month', color: 'text-primary' },
                            { label: 'Pengambilan Barang', value: event.pickupPeriod, icon: 'local_shipping', color: 'text-blue-600' },
                            { label: 'Lokasi', value: event.location, icon: 'location_on', color: 'text-amber-500' },
                            { label: 'Total Kuota', value: `${event.quota} Orang`, icon: 'group', color: 'text-primary' },
                        ].map((stat, idx) => (
                            <div key={idx} className="p-6 flex flex-col gap-1">
                                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{stat.label}</span>
                                <span className="text-slate-900 font-bold flex items-center gap-2 text-sm">
                                    <span className={`material-symbols-outlined ${stat.color} text-[20px]`}>{stat.icon}</span>
                                    {stat.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Time Segment Selection */}
                <div className="mt-4">
                    <h2 className="text-2xl font-black text-slate-900 mb-1">Pilih Segment Waktu</h2>
                    <p className="text-sm text-slate-500 font-medium mb-6">Pilih sesi waktu yang tersedia untuk mendapatkan nomor antrian Anda.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {MOCK_TIME_SEGMENTS.map(segment => {
                            const isAvailable = segment.remainingQuota > 0;
                            const isSelected = selectedSegment?.id === segment.id;
                            const quotaColor = getQuotaColor(segment);
                            const quotaPercent = (segment.remainingQuota / segment.totalQuota) * 100;

                            const colorMap: Record<string, { bg: string; text: string; bar: string; ring: string }> = {
                                red: { bg: 'bg-red-50', text: 'text-red-600', bar: 'bg-red-500', ring: 'ring-red-200' },
                                amber: { bg: 'bg-amber-50', text: 'text-amber-600', bar: 'bg-amber-500', ring: 'ring-amber-200' },
                                blue: { bg: 'bg-blue-50', text: 'text-blue-600', bar: 'bg-blue-500', ring: 'ring-blue-200' },
                                green: { bg: 'bg-green-50', text: 'text-green-600', bar: 'bg-green-500', ring: 'ring-green-200' },
                            };
                            const colors = colorMap[quotaColor];

                            return (
                                <button
                                    key={segment.id}
                                    disabled={!isAvailable}
                                    onClick={() => setSelectedSegment(segment)}
                                    className={`relative group text-left bg-white rounded-2xl border-2 p-6 transition-all duration-300 ${!isAvailable
                                        ? 'border-slate-100 opacity-50 cursor-not-allowed'
                                        : isSelected
                                            ? 'border-primary ring-2 ring-primary/20 shadow-lg shadow-primary/10'
                                            : 'border-slate-200 hover:border-primary/50 hover:shadow-md cursor-pointer'
                                        }`}
                                >
                                    {/* Selected indicator */}
                                    {isSelected && (
                                        <div className="absolute top-4 right-4">
                                            <span className="material-symbols-outlined text-primary text-2xl filled-icon">check_circle</span>
                                        </div>
                                    )}

                                    {/* Habis badge */}
                                    {!isAvailable && (
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">HABIS</span>
                                        </div>
                                    )}

                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`size-12 rounded-xl flex items-center justify-center ${isAvailable ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-400'}`}>
                                            <span className="material-symbols-outlined text-2xl">schedule</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-black text-slate-900">{segment.label}</h3>
                                            <p className="text-sm font-bold text-slate-500">{segment.date}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="material-symbols-outlined text-[18px] text-slate-400">access_time</span>
                                        <span className="text-slate-700 font-bold text-lg">{segment.startTime} - {segment.endTime}</span>
                                    </div>

                                    {/* Quota Progress */}
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Kuota</span>
                                            <span className={`text-xs font-black ${colors.text}`}>{getQuotaLabel(segment)}</span>
                                        </div>
                                        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${colors.bar} rounded-full transition-all duration-500`}
                                                style={{ width: `${quotaPercent}%` }}
                                            ></div>
                                        </div>
                                        <div className="flex items-center justify-between text-xs text-slate-400 font-bold">
                                            <span>{segment.remainingQuota} tersisa</span>
                                            <span>{segment.totalQuota} total</span>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </main>

            {/* Sticky Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600">
                            <span className="material-symbols-outlined">confirmation_number</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Segment Dipilih</span>
                            <span className="text-lg font-black text-slate-900">
                                {selectedSegment ? `${selectedSegment.label} (${selectedSegment.startTime} - ${selectedSegment.endTime})` : 'Belum dipilih'}
                            </span>
                        </div>
                    </div>
                    <button
                        disabled={!selectedSegment || isLoading}
                        onClick={handleGrabQueue}
                        className={`w-full sm:w-auto min-w-[250px] flex items-center justify-center gap-2 font-black py-3.5 px-8 rounded-xl transition-all ${!selectedSegment || isLoading
                            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-purple-600 to-primary text-white shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40 active:scale-[0.98]'
                            }`}
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Mengambil Nomor...</span>
                            </>
                        ) : (
                            <>
                                <span className="material-symbols-outlined text-[20px]">confirmation_number</span>
                                <span>Ambil Nomor Antrian</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Fail Modal - Kuota Habis */}
            {showFailModal && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden animate-scale-in">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 p-8 text-center">
                            <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/20 mb-4">
                                <span className="material-symbols-outlined text-white text-5xl">sentiment_dissatisfied</span>
                            </div>
                            <h3 className="text-white font-black text-2xl tracking-tight">Kuota Habis!</h3>
                        </div>
                        <div className="p-8 text-center">
                            <p className="text-slate-700 font-medium leading-relaxed mb-2">
                                Maaf, kuota untuk segment waktu <b className="text-slate-900">{selectedSegment?.label} ({selectedSegment?.startTime} - {selectedSegment?.endTime})</b> sudah habis.
                            </p>
                            <p className="text-slate-500 text-sm mb-8">
                                Silakan pilih segment waktu lain yang masih tersedia.
                            </p>
                            <button
                                onClick={() => {
                                    setShowFailModal(false);
                                    setSelectedSegment(null);
                                }}
                                className="w-full rounded-xl px-6 py-4 text-sm font-black text-white bg-gradient-to-r from-purple-600 to-primary hover:from-purple-700 hover:to-blue-700 shadow-xl shadow-primary/30 transition-all uppercase tracking-widest flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined text-[20px]">swap_horiz</span>
                                Pilih Segment Lain
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Loading Overlay */}
            {isLoading && (
                <div className="fixed inset-0 z-[55] flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl p-10 text-center max-w-sm mx-4">
                        <div className="relative mb-6">
                            <div className="size-20 mx-auto rounded-full border-4 border-slate-100 border-t-primary animate-spin"></div>
                        </div>
                        <h3 className="text-xl font-black text-slate-900 mb-2">Mengambil Nomor Antrian...</h3>
                        <p className="text-slate-500 text-sm font-medium">Mohon tunggu, kami sedang memproses permintaan Anda.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QueueDetailView;

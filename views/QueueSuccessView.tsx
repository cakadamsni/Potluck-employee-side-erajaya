
import React, { useState } from 'react';
import { MOCK_USER, MOCK_EVENTS } from '../constants';

interface QueueSuccessViewProps {
    onNavigate: (view: any) => void;
    queueNumber: string;
    timeSegment: string;
}

const QueueSuccessView: React.FC<QueueSuccessViewProps> = ({ onNavigate, queueNumber, timeSegment }) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [isPresent, setIsPresent] = useState(false);

    const event = MOCK_EVENTS.find(e => e.eventType === 'Queue' && e.status === 'Aktif') || MOCK_EVENTS.find(e => e.eventType === 'Queue')!;

    const handlePresentClick = () => {
        setShowConfirmModal(true);
    };

    const handleConfirmPresent = () => {
        setIsPresent(true);
        setShowConfirmModal(false);
    };

    const handleCancelPresent = () => {
        setShowConfirmModal(false);
    };

    return (
        <div className="min-h-screen bg-background-light font-sans flex flex-col">
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 h-16 flex items-center justify-between px-6 lg:px-20">
                <div className="flex items-center gap-3">
                    <div className="size-8 rounded bg-primary flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-xl">grid_view</span>
                    </div>
                    <h2 className="text-lg font-black tracking-tight">Erajaya Apple Lottery</h2>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex gap-6 text-sm font-bold text-slate-500 uppercase tracking-widest">
                        <button onClick={() => onNavigate('dashboard')} className="hover:text-primary">Dashboard</button>
                        <button onClick={() => onNavigate('history')} className="hover:text-primary">History</button>
                    </nav>
                    <img src={MOCK_USER.profilePic} className="size-10 rounded-full border-2 border-slate-100" alt="Avatar" />
                </div>
            </header>

            <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-6">
                {/* Success Animation */}
                <div className="text-center space-y-4 mb-10">
                    <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 text-purple-600 shadow-lg shadow-purple-200/50 animate-bounce">
                        <span className="material-symbols-outlined text-5xl filled-icon">confirmation_number</span>
                    </div>
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 uppercase">Nomor Antrian Didapatkan!</h1>
                    <p className="text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
                        Selamat! Anda berhasil mendapatkan nomor antrian. <br />
                        Simpan nomor antrian Anda dan datang sesuai waktu yang telah dipilih.
                    </p>
                </div>

                {/* Queue Ticket */}
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden mb-10">
                    <div className="h-3 w-full bg-gradient-to-r from-purple-600 to-primary"></div>
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        {/* Left Side - Event Info */}
                        <div className="md:col-span-7 p-10 border-b md:border-b-0 md:border-r border-dashed border-slate-200 relative">
                            <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 size-8 rounded-full bg-background-light border-l border-slate-200"></div>

                            <div className="flex items-start justify-between gap-6 mb-4">
                                <div className="flex items-start gap-6">
                                    <img src={event.imageUrl} className="size-32 rounded-2xl object-cover border border-slate-100 flex-shrink-0" alt="Event" />
                                    <div className="space-y-2">
                                        <span className="inline-block px-3 py-1 rounded-lg bg-purple-50 text-purple-600 text-[10px] font-black tracking-widest uppercase">Queue Event</span>
                                        <h3 className="text-2xl font-black text-slate-900 leading-tight">{event.title}</h3>
                                        <div className="space-y-1">
                                            <p className="text-slate-500 font-bold text-sm uppercase flex items-center gap-2">
                                                <span className="material-symbols-outlined text-base">location_on</span>
                                                {event.location}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                <span className="material-symbols-outlined text-sm">calendar_today</span>
                                                {event.period}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {isPresent && (
                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1 shrink-0">
                                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                                        Sudah Absen
                                    </span>
                                )}
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-50">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Detail Antrian</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between bg-purple-50/80 rounded-xl p-4 border border-purple-100">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-purple-600">schedule</span>
                                            <div>
                                                <h5 className="font-bold text-slate-900 text-sm">Segment Waktu</h5>
                                                <p className="text-xs text-slate-500 font-medium">{timeSegment}</p>
                                            </div>
                                        </div>
                                        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-[10px] font-black uppercase">Terkonfirmasi</span>
                                    </div>
                                    <div className="flex items-center justify-between bg-blue-50/80 rounded-xl p-4 border border-blue-100">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-blue-600">inventory_2</span>
                                            <div>
                                                <h5 className="font-bold text-slate-900 text-sm">Pengambilan Barang</h5>
                                                <p className="text-xs text-slate-500 font-medium">{event.pickupPeriod}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Queue Number */}
                        <div className="md:col-span-5 p-10 bg-gradient-to-br from-purple-50/50 to-blue-50/50 flex flex-col items-center justify-center text-center relative">
                            <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 size-8 rounded-full bg-background-light border-r border-slate-200"></div>

                            <div className="mb-8">
                                <p className="text-xs font-black text-purple-600 uppercase tracking-widest mb-3">Nomor Antrian Anda</p>
                                <div className="relative">
                                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary tracking-tighter">
                                        {queueNumber}
                                    </div>
                                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-200/20 to-blue-200/20 blur-xl rounded-full -z-10"></div>
                                </div>
                            </div>

                            <div className="w-full border-t border-slate-200 pt-8">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Detail Pendaftar</h4>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Nama Lengkap</p>
                                        <p className="text-lg font-black text-slate-900">{MOCK_USER.name}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-400 uppercase font-black mb-1">NIK</p>
                                        <p className="text-lg font-black text-slate-900">{MOCK_USER.nik}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Info */}
                <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 flex gap-4 items-start mb-12">
                    <div className="bg-white text-purple-500 rounded-full p-2 shadow-sm shrink-0">
                        <span className="material-symbols-outlined filled-icon">info</span>
                    </div>
                    <div>
                        <h4 className="text-sm font-black text-purple-800 uppercase tracking-widest mb-1">Informasi Penting</h4>
                        <ul className="text-xs text-purple-700/80 leading-relaxed font-bold space-y-1">
                            <li>• Harap datang sesuai dengan segment waktu yang telah dipilih.</li>
                            <li>• Tunjukkan nomor antrian ini saat tiba di lokasi.</li>
                            <li>• Nomor antrian tidak dapat dipindahtangankan.</li>
                            <li>• Jika tidak hadir pada waktu yang ditentukan, nomor antrian akan hangus.</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Actions */}
                <div className="sticky bottom-6 z-40 bg-white/90 backdrop-blur-md border border-slate-200 p-4 rounded-3xl shadow-2xl flex flex-wrap items-center justify-between gap-4">
                    <button
                        onClick={() => onNavigate('dashboard')}
                        className="text-slate-500 hover:text-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-2 px-4 transition-all"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                        Kembali ke Dashboard
                    </button>
                    <div className="flex flex-wrap gap-3">
                        {!isPresent && (
                            <button
                                onClick={handlePresentClick}
                                className="h-12 px-8 rounded-xl bg-green-600 text-white shadow-xl shadow-green-600/30 hover:bg-green-700 font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all transform hover:-translate-y-1"
                            >
                                <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                                Present
                            </button>
                        )}
                        <button className="h-12 px-8 rounded-xl bg-primary text-white shadow-xl shadow-primary/30 hover:bg-blue-700 font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all transform hover:-translate-y-1">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                            Download PDF
                        </button>
                    </div>
                </div>
            </main>

            {/* Confirmation Modal */}
            {showConfirmModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 bg-gradient-to-r from-purple-600 to-primary text-white">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-4xl">info</span>
                                <h3 className="text-xl font-black uppercase tracking-tight">Konfirmasi Kehadiran</h3>
                            </div>
                        </div>
                        <div className="p-8">
                            <p className="text-slate-700 font-medium text-base leading-relaxed mb-6">
                                Dengan menekan tombol "Ya", Anda akan <span className="font-black text-slate-900">terdeteksi sudah absen</span> dan sistem akan mencatat kehadiran Anda untuk pengambilan barang pada segment waktu ini.
                            </p>
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                                <p className="text-xs text-amber-800 font-bold flex items-start gap-2">
                                    <span className="material-symbols-outlined text-[16px] mt-0.5">warning</span>
                                    <span>Pastikan Anda berada di lokasi pengambilan sebelum melakukan absensi.</span>
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={handleCancelPresent}
                                    className="flex-1 h-12 rounded-xl border-2 border-slate-200 text-slate-700 hover:bg-slate-50 font-black text-sm uppercase tracking-widest transition-all"
                                >
                                    Tidak
                                </button>
                                <button
                                    onClick={handleConfirmPresent}
                                    className="flex-1 h-12 rounded-xl bg-green-600 text-white hover:bg-green-700 font-black text-sm uppercase tracking-widest shadow-lg shadow-green-600/30 transition-all transform hover:-translate-y-0.5"
                                >
                                    Ya, Absen Sekarang
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QueueSuccessView;

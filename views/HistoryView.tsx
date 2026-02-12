
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { MOCK_USER, MOCK_HISTORY, MOCK_EVENTS } from '../constants';
import { ViewType } from '../App';

interface HistoryViewProps {
    onNavigate: (view: ViewType) => void;
    onLogout: () => void;
    onQueueDetail: (queueNumber: string, timeSegment: string) => void;
}

const HistoryView: React.FC<HistoryViewProps> = ({ onNavigate, onLogout, onQueueDetail }) => {
    const [filter, setFilter] = useState<'Semua' | 'Menang' | 'Belum Beruntung' | 'Proses' | 'Antrian' | 'Gagal Antrian'>('Semua');
    const [typeFilter, setTypeFilter] = useState<'Semua' | 'Raffle' | 'Queue'>('Semua');

    // Helper function to get event image from MOCK_EVENTS based on event name
    const getEventImage = (eventName: string): string => {
        const event = MOCK_EVENTS.find(e => e.title === eventName);
        return event?.imageUrl || 'https://via.placeholder.com/400x200?text=Event+Image';
    };

    const filteredHistory = MOCK_HISTORY.filter(h => {
        // Exclude Queue events with "Gagal Antrian" status
        if (h.eventType === 'Queue' && h.status === 'Gagal Antrian') {
            return false;
        }

        const statusMatch = filter === 'Semua' || h.status === filter;
        const typeMatch = typeFilter === 'Semua' || h.eventType === typeFilter;
        return statusMatch && typeMatch;
    });

    return (
        <div className="flex h-screen w-full bg-background-light overflow-hidden">
            <Sidebar active="history" onLogout={onLogout} onNavigate={onNavigate} />
            <main className="flex-1 overflow-y-auto no-scrollbar">
                <div className="max-w-6xl mx-auto p-4 md:p-8 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <header className="flex flex-col gap-1">
                            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Riwayat Undian</h1>
                            <p className="text-slate-500 text-sm">Pantau status pendaftaran dan hasil undian Anda.</p>
                        </header>

                        <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-slate-500 hidden md:block">Filter Status</span>
                            <div className="relative group">
                                <select
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value as any)}
                                    className="pl-4 pr-10 py-2.5 rounded-xl text-sm font-bold bg-white text-slate-700 border border-slate-200 hover:border-primary/30 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-primary/10 cursor-pointer appearance-none shadow-sm transition-all min-w-[140px]"
                                >
                                    <option value="Semua">Semua Status</option>
                                    <option value="Menang">Menang</option>
                                    <option value="Belum Beruntung">Belum Beruntung</option>
                                    <option value="Antrian">Antrian</option>
                                    <option value="Gagal Antrian">Gagal Antrian</option>
                                    <option value="Proses">Dalam Proses</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-primary pointer-events-none text-[20px] transition-colors">
                                    expand_more
                                </span>
                            </div>

                            <div className="relative group">
                                <select
                                    value={typeFilter}
                                    onChange={(e) => setTypeFilter(e.target.value as any)}
                                    className="pl-4 pr-10 py-2.5 rounded-xl text-sm font-bold bg-white text-slate-700 border border-slate-200 hover:border-primary/30 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-primary/10 cursor-pointer appearance-none shadow-sm transition-all min-w-[140px]"
                                >
                                    <option value="Semua">Semua Tipe</option>
                                    <option value="Raffle">Raffle</option>
                                    <option value="Queue">Queue</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-primary pointer-events-none text-[20px] transition-colors">
                                    expand_more
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {filteredHistory.length > 0 ? (
                            filteredHistory.map((h) => (
                                <div key={h.id} className="bg-white rounded-2xl border border-slate-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="flex items-start md:items-center gap-4 md:gap-6">
                                        {/* Event Image Thumbnail */}
                                        <div className="relative w-24 h-16 md:w-32 md:h-20 flex-shrink-0 rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                                            <img
                                                src={getEventImage(h.eventName)}
                                                className="w-full h-full object-cover"
                                                alt={h.eventName}
                                            />
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${h.eventType === 'Raffle' ? 'bg-primary/10 text-primary' : 'bg-purple-100 text-purple-600'
                                                    }`}>
                                                    {h.eventType}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 leading-tight">{h.eventName}</h3>
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-slate-500 font-medium">
                                                <span className="flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                                                    {h.eventType === 'Queue' ? `Segment: ${h.timeSegment || '-'}` : `Undian: ${h.drawDate}`}
                                                </span>
                                            </div>
                                            {/* Queue Number Badge */}
                                            {h.eventType === 'Queue' && h.queueNumber && (
                                                <div className="mt-2 inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-lg px-3 py-1.5">
                                                    <span className="material-symbols-outlined text-purple-600 text-[16px]">confirmation_number</span>
                                                    <span className="text-sm font-black text-purple-700">{h.queueNumber}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0">
                                        <div className="text-right">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</p>
                                            <div className="flex items-center gap-2 justify-end">
                                                <span className={`inline-flex px-3 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider ${h.status === 'Menang' ? 'bg-green-100 text-green-700' :
                                                    h.status === 'Belum Beruntung' ? 'bg-red-50 text-red-600' :
                                                        h.status === 'Antrian' ? 'bg-purple-100 text-purple-700' :
                                                            h.status === 'Gagal Antrian' ? 'bg-red-100 text-red-600' :
                                                                'bg-amber-50 text-amber-600'
                                                    }`}>
                                                    {h.status}
                                                </span>
                                                {h.status === 'Menang' && h.isPresent && (
                                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider flex items-center gap-1">
                                                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                                                        Sudah Absen
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => {
                                                if (h.status === 'Menang') onNavigate('winner');
                                                else if (h.status === 'Belum Beruntung') onNavigate('loser');
                                                else if (h.status === 'Antrian' && h.queueNumber && h.timeSegment) {
                                                    onQueueDetail(h.queueNumber, h.timeSegment);
                                                    onNavigate('queue-success');
                                                }
                                            }}
                                            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${h.status === 'Menang'
                                                ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-blue-700'
                                                : h.status === 'Belum Beruntung'
                                                    ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                                    : h.status === 'Antrian'
                                                        ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                                                        : h.status === 'Gagal Antrian'
                                                            ? 'bg-red-50 text-red-400 cursor-not-allowed'
                                                            : 'bg-slate-50 text-slate-400 cursor-default'
                                                }`}
                                            disabled={h.status === 'Proses' || h.status === 'Gagal Antrian'}
                                        >
                                            {h.status === 'Menang' ? 'Lihat Detail' : h.status === 'Belum Beruntung' ? 'Lihat Detail' : h.status === 'Antrian' ? 'Lihat Tiket' : h.status === 'Gagal Antrian' ? 'Gagal' : 'Menunggu'}
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="bg-white rounded-3xl border border-slate-200 p-16 flex flex-col items-center justify-center text-center">
                                <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">search_off</span>
                                <h3 className="text-xl font-bold text-slate-900">Tidak ada riwayat ditemukan</h3>
                                <p className="text-slate-500 max-w-sm">Anda belum memiliki riwayat undian untuk kategori ini.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HistoryView;

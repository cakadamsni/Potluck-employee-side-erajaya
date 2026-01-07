
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { MOCK_USER, MOCK_HISTORY } from '../constants';
import { ViewType } from '../App';

interface HistoryViewProps {
    onNavigate: (view: ViewType) => void;
    onLogout: () => void;
}

const HistoryView: React.FC<HistoryViewProps> = ({ onNavigate, onLogout }) => {
    const [filter, setFilter] = useState<'Semua' | 'Menang' | 'Belum Beruntung' | 'Proses'>('Semua');

    const filteredHistory = filter === 'Semua' 
        ? MOCK_HISTORY 
        : MOCK_HISTORY.filter(h => h.status === filter);

    return (
        <div className="flex h-screen w-full bg-background-light overflow-hidden">
            <Sidebar active="history" onLogout={onLogout} onNavigate={onNavigate} />
            <main className="flex-1 overflow-y-auto no-scrollbar">
                <div className="max-w-6xl mx-auto p-4 md:p-8 flex flex-col gap-6">
                    <header className="flex flex-col gap-2">
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Riwayat Undian</h1>
                        <p className="text-slate-500">Pantau status pendaftaran dan hasil undian Anda.</p>
                    </header>

                    <div className="flex flex-wrap gap-2 items-center bg-white p-2 rounded-2xl border border-slate-200 shadow-sm w-fit">
                        {['Semua', 'Menang', 'Belum Beruntung', 'Proses'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat as any)}
                                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                                    filter === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:bg-slate-50'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {filteredHistory.length > 0 ? (
                            filteredHistory.map((h) => (
                                <div key={h.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className={`p-4 rounded-2xl ${h.status === 'Menang' ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-400'}`}>
                                            <span className="material-symbols-outlined text-3xl filled-icon">
                                                {h.status === 'Menang' ? 'emoji_events' : 'confirmation_number'}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">{h.eventName}</h3>
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-slate-500 font-medium">
                                                <span className="flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                                                    Undian: {h.drawDate}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[18px]">token</span>
                                                    {h.pointsUsed} Points Used
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0">
                                        <div className="text-right">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</p>
                                            <span className={`inline-flex px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                                                h.status === 'Menang' ? 'bg-green-100 text-green-700' : 'bg-red-50 text-red-600'
                                            }`}>
                                                {h.status}
                                            </span>
                                        </div>
                                        <button 
                                            onClick={() => h.status === 'Menang' && onNavigate('winner')}
                                            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                                                h.status === 'Menang' 
                                                ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-blue-700' 
                                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                            }`}
                                        >
                                            {h.status === 'Menang' ? 'Klaim Hadiah' : 'Lihat Detail'}
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

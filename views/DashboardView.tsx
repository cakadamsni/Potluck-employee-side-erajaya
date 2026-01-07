
import React from 'react';
import Sidebar from '../components/Sidebar';
import { MOCK_USER, MOCK_EVENTS, MOCK_HISTORY } from '../constants';
import { ViewType } from '../App';

interface DashboardViewProps {
    onNavigate: (view: ViewType) => void;
    onLogout: () => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ onNavigate, onLogout }) => {
    return (
        <div className="flex h-screen w-full bg-background-light overflow-hidden">
            <Sidebar active="dashboard" onLogout={onLogout} onNavigate={onNavigate} />
            <main className="flex-1 overflow-y-auto no-scrollbar">
                <div className="max-w-6xl mx-auto p-4 md:p-8 flex flex-col gap-6">
                    <header className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Dashboard Utama</h1>
                            <p className="text-slate-500">Selamat datang kembali, {MOCK_USER.name}! 👋</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="size-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <img src={MOCK_USER.profilePic} className="size-10 rounded-full object-cover ring-2 ring-primary/20 cursor-pointer" onClick={() => onNavigate('profile')} alt="Profile" />
                        </div>
                    </header>

                    {/* Points Banner */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <img src={MOCK_USER.profilePic} className="size-20 rounded-full border-4 border-slate-50 shadow-sm" alt="Profile Big" />
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-2xl font-bold text-slate-900">{MOCK_USER.name}</h3>
                                    <span className="bg-amber-100 text-amber-700 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">Gold Member</span>
                                </div>
                                <p className="text-slate-500 text-sm font-medium">NIK: {MOCK_USER.nik} | Divisi: {MOCK_USER.division}</p>
                            </div>
                        </div>
                        <div className="bg-primary/5 p-4 rounded-xl flex flex-col items-start md:items-end border border-primary/10">
                            <span className="text-sm font-semibold text-slate-500">Raffle Points Available</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-black text-primary">{MOCK_USER.points.toLocaleString()}</span>
                                <span className="text-slate-400 font-bold">pts</span>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { label: 'Total Raffle', value: MOCK_USER.raffleJoined, icon: 'confirmation_number', color: 'text-primary', bg: 'bg-primary/10' },
                            { label: 'Menang', value: MOCK_USER.totalWins, icon: 'emoji_events', color: 'text-amber-600', bg: 'bg-amber-50' },
                            { label: 'Event Diikuti', value: MOCK_USER.activeEvents, icon: 'event_available', color: 'text-green-600', bg: 'bg-green-50' },
                            { label: 'Transaksi Selesai', value: 12, icon: 'shopping_bag', color: 'text-blue-600', bg: 'bg-blue-50' },
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start justify-between hover:border-primary/30 transition-all cursor-default group">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">{stat.label}</p>
                                    <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                                </div>
                                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                                    <span className="material-symbols-outlined filled-icon">{stat.icon}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Active Events */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-slate-900">Event Raffle Aktif</h2>
                            <button className="text-sm font-bold text-primary hover:underline">Lihat Semua</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {MOCK_EVENTS.map(event => (
                                <div key={event.id} className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                                    <div className="relative aspect-[21/9] overflow-hidden">
                                        <img src={event.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={event.title} />
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow-sm ${event.status === 'Aktif' ? 'bg-green-500' : 'bg-slate-500'}`}>
                                                {event.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">{event.title}</h3>
                                        <div className="flex flex-col gap-3 pb-6 mb-auto">
                                            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                                                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                                                {event.period}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                                                <span className="material-symbols-outlined text-[18px]">group</span>
                                                1,204 Peserta
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => onNavigate('event-detail')}
                                            className="w-full py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 hover:bg-blue-700 transition-all active:scale-[0.98]"
                                        >
                                            Daftar Sekarang
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* History Table */}
                    <section className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-slate-900">Riwayat Undian Terakhir</h2>
                            <button onClick={() => onNavigate('history')} className="text-sm font-bold text-primary hover:underline">Lihat Semua Riwayat</button>
                        </div>
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden overflow-x-auto">
                            <table className="w-full text-left min-w-[600px]">
                                <thead className="bg-slate-50 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                                    <tr>
                                        <th className="px-6 py-4">Nama Event</th>
                                        <th className="px-6 py-4">Tanggal Undian</th>
                                        <th className="px-6 py-4">Poin Digunakan</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4 text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {MOCK_HISTORY.map(h => (
                                        <tr key={h.id} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-slate-900">{h.eventName}</td>
                                            <td className="px-6 py-4 text-sm text-slate-500">{h.drawDate}</td>
                                            <td className="px-6 py-4 text-sm text-slate-500">{h.pointsUsed} pts</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold ${h.status === 'Menang' ? 'bg-green-100 text-green-700' : 'bg-red-50 text-red-600'}`}>
                                                    {h.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button 
                                                    onClick={() => h.status === 'Menang' ? onNavigate('winner') : onNavigate('history')}
                                                    className="text-sm font-bold text-primary hover:underline"
                                                >
                                                    {h.status === 'Menang' ? 'Klaim Hadiah' : 'Detail'}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default DashboardView;

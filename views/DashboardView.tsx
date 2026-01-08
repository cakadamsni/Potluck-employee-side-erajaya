

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { MOCK_USER, MOCK_EVENTS, MOCK_HISTORY } from '../constants';
import { ViewType } from '../App';

interface DashboardViewProps {
    onNavigate: (view: ViewType) => void;
    onLogout: () => void;
}

type EventFilter = 'Semua' | 'Raffle' | 'Queue';

const DashboardView: React.FC<DashboardViewProps> = ({ onNavigate, onLogout }) => {
    const [selectedFilter, setSelectedFilter] = useState<EventFilter>('Semua');

    // Filter events based on selected filter
    const filteredEvents = selectedFilter === 'Semua'
        ? MOCK_EVENTS
        : MOCK_EVENTS.filter(event => event.eventType === selectedFilter);

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
                                </div>
                                <p className="text-slate-500 text-sm font-medium">NIK: {MOCK_USER.nik}</p>
                            </div>
                        </div>
                    </div>



                    {/* Active Events */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-slate-900">Event Raffle Aktif</h2>
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-medium text-slate-600">Tipe Event</span>
                                <div className="relative">
                                    <select
                                        value={selectedFilter}
                                        onChange={(e) => setSelectedFilter(e.target.value as EventFilter)}
                                        className="px-4 py-2 pr-10 rounded-lg text-sm font-bold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer appearance-none"
                                    >
                                        <option value="Semua">Semua</option>
                                        <option value="Raffle">Raffle</option>
                                        <option value="Queue">Queue</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[20px]">
                                        expand_more
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredEvents.map(event => (
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
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                                        <p className="text-sm text-slate-500 mb-6 line-clamp-2">{event.description}</p>

                                        <div className="flex flex-col gap-3 pb-6 mb-auto border-t border-slate-100 pt-6">
                                            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                                                <span className="material-symbols-outlined text-[18px] text-slate-400">event_note</span>
                                                <span>Booking: {event.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                                                <span className="material-symbols-outlined text-[18px] text-slate-400">alarm</span>
                                                <span>Undian: {event.drawDate}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                                                <span className="material-symbols-outlined text-[18px] text-slate-400">inventory_2</span>
                                                <span>Ambil: {event.pickupPeriod}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                                                <span className="material-symbols-outlined text-[18px] text-slate-400">location_on</span>
                                                <span>{event.location}</span>
                                            </div>

                                        </div>
                                        <button
                                            onClick={() => (event.status !== 'Coming Soon' && event.status !== 'Selesai') && onNavigate('event-detail')}
                                            disabled={event.status === 'Coming Soon' || event.status === 'Selesai'}
                                            className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${event.status === 'Coming Soon' || event.status === 'Selesai'
                                                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                                : 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-blue-700 active:scale-[0.98]'
                                                }`}
                                        >
                                            {event.status === 'Coming Soon' ? 'Segera Hadir' : event.status === 'Selesai' ? 'Event Selesai' : 'Daftar Sekarang'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>


                </div>
            </main>
        </div>
    );
};

export default DashboardView;


import React from 'react';
import { MOCK_USER, MOCK_EVENTS, MOCK_PRODUCTS } from '../constants';
import { Product } from '../types';

interface SuccessViewProps {
    onNavigate: (view: any) => void;
    selectedProducts?: Product[];
}

const SuccessView: React.FC<SuccessViewProps> = ({ onNavigate, selectedProducts = MOCK_PRODUCTS.slice(0, 1) }) => {
    const event = MOCK_EVENTS[0];
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
                        <button onClick={() => onNavigate('dashboard')} className="hover:text-primary">Event Details</button>
                        <button className="hover:text-primary">My Entries</button>
                        <button className="hover:text-primary">FAQ</button>
                    </nav>
                    <img src={MOCK_USER.profilePic} className="size-10 rounded-full border-2 border-slate-100" alt="Avatar" />
                </div>
            </header>

            <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-6">
                <div className="text-center space-y-4 mb-10">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-green-100 text-green-600 shadow-sm animate-bounce">
                        <span className="material-symbols-outlined text-5xl filled-icon">check_circle</span>
                    </div>
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 uppercase">Pendaftaran Berhasil!</h1>
                    <p className="text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
                        Terima kasih, data Anda telah kami terima untuk Erajaya Raffle. <br />
                    </p>Semoga Beruntung.
                </div>

                {/* Digital Ticket */}
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden mb-10">
                    <div className="h-3 w-full bg-gradient-to-r from-primary to-blue-400"></div>
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="md:col-span-7 p-10 border-b md:border-b-0 md:border-r border-dashed border-slate-200 relative">
                            {/* Decorative punches */}
                            <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 size-8 rounded-full bg-background-light border-l border-slate-200"></div>

                            <div className="flex items-start gap-6">
                                <img src={event.imageUrl} className="size-32 rounded-2xl object-cover border border-slate-100 flex-shrink-0" alt="Event" />
                                <div className="space-y-2">
                                    <span className="inline-block px-3 py-1 rounded-lg bg-blue-50 text-primary text-[10px] font-black tracking-widest uppercase">Detail Event</span>
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

                            <div className="mt-8 pt-8 border-t border-slate-50">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Barang yang Dipilih</h4>
                                <div className="space-y-4">
                                    {selectedProducts.map((product, idx) => (
                                        <div key={idx} className="flex items-center justify-between bg-slate-50/80 rounded-xl p-4 border border-slate-100">
                                            <div>
                                                <h5 className="font-bold text-slate-900 text-sm">{product.name}</h5>
                                                <p className="text-xs text-slate-500 font-medium">{product.color}</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Booking Qty</span>
                                                <span className="text-sm font-black text-primary">1 Unit</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                        </div>

                        <div className="md:col-span-5 p-10 bg-slate-50/50 flex flex-col items-center justify-center text-center relative">
                            {/* Decorative punch */}
                            <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 size-8 rounded-full bg-background-light border-r border-slate-200"></div>

                            <div className="mb-8">
                                <p className="text-xs font-black text-primary uppercase tracking-widest mb-2">Nomor Undian Anda</p>
                                <div className="text-3xl font-black text-slate-900 tracking-tighter">#NYS2026-0234</div>
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

                {/* Progress Steps */}
                <div className="bg-blue-50/40 backdrop-blur-sm p-8 rounded-2xl border border-blue-100/50 shadow-sm mb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <span className="material-symbols-outlined text-6xl text-primary">casino</span>
                    </div>
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8 relative z-10">Status Pendaftaran</h3>
                    <div className="relative z-10">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 rounded hidden md:block"></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            {[
                                { label: 'Pendaftaran', status: 'Berhasil • 24 Jan', active: true, done: true, icon: 'how_to_reg' },
                                { label: 'Pengundian', status: '25 Jan 2026', active: false, done: false, icon: 'casino' },
                                { label: 'Pengumuman', status: '01 Feb 2026', active: false, done: false, icon: 'campaign' },
                            ].map((step, idx) => (
                                <div key={idx} className={`flex flex-row md:flex-col items-center gap-4 md:gap-3 ${!step.active ? 'opacity-40' : ''}`}>
                                    <div className={`relative z-10 size-10 rounded-full flex items-center justify-center ring-4 ring-white shadow-md ${step.done ? 'bg-primary text-white' : step.active ? 'bg-blue-100 text-primary border-2 border-primary' : 'bg-slate-100 text-slate-400'}`}>
                                        <span className={`material-symbols-outlined text-lg ${step.active && !step.done ? 'animate-pulse' : ''}`}>{step.icon}</span>
                                    </div>
                                    <div className="flex flex-col md:items-center">
                                        <span className={`text-sm font-black uppercase tracking-tight ${step.active ? 'text-slate-900' : 'text-slate-400'}`}>{step.label}</span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase">{step.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tip Box */}
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex gap-4 items-start mb-12">
                    <div className="bg-white text-amber-500 rounded-full p-2 shadow-sm shrink-0">
                        <span className="material-symbols-outlined filled-icon">lightbulb</span>
                    </div>
                    <div>
                        <h4 className="text-sm font-black text-amber-800 uppercase tracking-widest mb-1">Tips Penting</h4>
                        <p className="text-xs text-amber-700/80 leading-relaxed font-bold uppercase tracking-wide">
                            Anda akan menerima notifikasi jika Anda berhasil terpilih setelah Pengundian dilakukan pada tanggal yang tertera.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-center justify-center pb-12">

                    <button
                        onClick={() => onNavigate('dashboard')}
                        className="w-full md:w-auto order-1 md:order-2 flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-primary text-white shadow-xl shadow-primary/20 font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all transform hover:-translate-y-1"
                    >
                        <span className="material-symbols-outlined text-xl">dashboard</span>
                        Kembali ke Dashboard
                    </button>
                </div>
            </main>
        </div>
    );
};

export default SuccessView;

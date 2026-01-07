
import React from 'react';
import { MOCK_EVENTS, MOCK_PRODUCTS } from '../constants';
import { Product } from '../types';

interface EventDetailViewProps {
    onNavigate: (view: any) => void;
    selectedProducts: Product[];
    onToggleProduct: (product: Product) => void;
}

const EventDetailView: React.FC<EventDetailViewProps> = ({ onNavigate, selectedProducts, onToggleProduct }) => {
    const event = MOCK_EVENTS[0]; // For demo

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
                <nav className="flex items-center space-x-2 text-sm font-medium">
                    <button onClick={() => onNavigate('dashboard')} className="text-slate-500 hover:text-primary">Home</button>
                    <span className="text-slate-300">/</span>
                    <span className="text-slate-500">Event List</span>
                    <span className="text-slate-300">/</span>
                    <span className="text-slate-900 font-bold">Detail Event</span>
                </nav>

                <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row md:justify-between items-start gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-black uppercase">Sedang Berlangsung</span>
                                <span className="text-slate-400 text-xs flex items-center gap-1 font-bold">
                                    <span className="material-symbols-outlined text-[16px]">public</span> Public Event
                                </span>
                            </div>
                            <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">{event.title}</h1>
                            <p className="text-slate-500 text-sm max-w-2xl">{event.description}</p>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-bold transition-all">
                            <span className="material-symbols-outlined text-[18px]">share</span>
                            Share Event
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-slate-50/30">
                        {[
                            { label: 'Periode Event', value: event.period, icon: 'calendar_month', color: 'text-primary' },
                            { label: 'Batas Pendaftaran', value: event.deadline, icon: 'event_busy', color: 'text-red-500' },
                            { label: 'Tanggal Pengundian', value: event.drawDate, icon: 'celebration', color: 'text-amber-500' },
                            { label: 'Maksimal Produk', value: `${event.maxProducts} Produk / Karyawan`, icon: 'shopping_bag', color: 'text-primary' },
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

                    <div className="border-t border-slate-100 p-6">
                        <div className="flex items-center gap-2 text-slate-700 font-bold text-sm mb-2">
                            <span className="material-symbols-outlined text-[20px]">description</span>
                            Syarat & Ketentuan Lengkap
                        </div>
                        <ul className="list-disc pl-7 text-xs text-slate-500 space-y-1 font-medium">
                            <li>Karyawan wajib berstatus tetap (PKWTT).</li>
                            <li>Satu karyawan hanya boleh memenangkan maksimal 1 unit dari semua kategori.</li>
                            <li>Pembayaran dilakukan via potong gaji maksimal 12 bulan.</li>
                        </ul>
                    </div>
                </section>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-4">
                    <div>
                        <h2 className="text-2xl font-black text-slate-900">Daftar Produk</h2>
                        <p className="text-sm text-slate-500 font-medium">Pilih produk yang ingin Anda menangkan.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <div className="relative group w-full sm:w-64">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-slate-400">search</span>
                            </div>
                            <input className="block w-full pl-10 pr-3 py-2.5 border-slate-200 rounded-xl bg-white shadow-sm focus:ring-primary focus:border-primary text-sm" placeholder="Cari produk (e.g. iPhone)" />
                        </div>
                        <div className="flex bg-slate-200 p-1 rounded-xl">
                            {['Semua', 'iPhone', 'MacBook', 'Watch'].map((cat, idx) => (
                                <button key={idx} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${idx === 0 ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}>{cat}</button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {MOCK_PRODUCTS.map(product => {
                        const isSelected = !!selectedProducts.find(p => p.id === product.id);
                        return (
                            <div key={product.id} className={`group bg-white rounded-2xl border flex flex-col h-full overflow-hidden transition-all duration-300 relative ${isSelected ? 'border-primary ring-2 ring-primary/20 shadow-lg' : 'border-slate-200 hover:border-primary/50'}`}>
                                {isSelected && (
                                    <div className="absolute top-3 right-3 z-10 bg-primary text-white p-1 rounded-full shadow-md">
                                        <span className="material-symbols-outlined text-[16px] block">check</span>
                                    </div>
                                )}
                                <div className="h-48 bg-slate-50 flex items-center justify-center p-6 relative">
                                    <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded">HEMAT {product.discountPercent}%</div>
                                    <span className="material-symbols-outlined text-7xl text-slate-300 group-hover:scale-110 transition-transform duration-500">{product.imageUrl}</span>
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <div className="mb-4">
                                        <h3 className="text-lg font-extrabold text-slate-900 leading-tight mb-1">{product.name}</h3>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Warna: {product.color}</p>
                                    </div>
                                    <div className="flex flex-col mb-4">
                                        <span className="text-slate-400 text-xs line-through font-bold">Rp {product.originalPrice.toLocaleString()}</span>
                                        <span className="text-primary font-black text-xl">Rp {product.discountPrice.toLocaleString()}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-[10px] mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <div className="flex flex-col">
                                            <span className="text-slate-400 font-black uppercase">Stok</span>
                                            <span className="font-bold text-slate-900">{product.stock} Unit</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-slate-400 font-black uppercase">Peminat</span>
                                            <span className="font-bold text-slate-900">{product.applicants} Org</span>
                                        </div>
                                        <div className="col-span-2 mt-2 pt-2 border-t border-slate-200 flex items-center justify-between">
                                            <span className="text-slate-400 font-black uppercase">Peluang</span>
                                            <span className={`font-black flex items-center gap-1 ${product.chanceColor === 'green' ? 'text-green-600' : 'text-amber-500'}`}>
                                                <span className="material-symbols-outlined text-[14px]">trending_up</span> {product.chance}
                                            </span>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => onToggleProduct(product)}
                                        className={`mt-auto w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                                            isSelected ? 'bg-primary/10 text-primary border-2 border-primary' : 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-blue-700'
                                        }`}
                                    >
                                        {isSelected ? (
                                            <>
                                                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                                                Terpilih
                                            </>
                                        ) : (
                                            'Pilih Produk'
                                        )}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>

            {/* Sticky Summary */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined">shopping_cart</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Produk Terpilih</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-black text-slate-900">{selectedProducts.length}</span>
                                <span className="text-slate-400 font-bold text-sm">/ {event.maxProducts} Maksimal</span>
                            </div>
                        </div>
                        <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden hidden lg:block">
                            <div className={`h-full bg-primary transition-all duration-500`} style={{ width: `${(selectedProducts.length / event.maxProducts) * 100}%` }}></div>
                        </div>
                    </div>
                    <button 
                        disabled={selectedProducts.length === 0}
                        onClick={() => onNavigate('cart')}
                        className={`w-full sm:w-auto min-w-[220px] flex items-center justify-center gap-2 font-black py-3.5 px-8 rounded-xl transition-all ${
                            selectedProducts.length === 0 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-primary text-white shadow-xl shadow-primary/30 hover:bg-blue-700 active:scale-[0.98]'
                        }`}
                    >
                        <span>Lanjut ke Review</span>
                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventDetailView;

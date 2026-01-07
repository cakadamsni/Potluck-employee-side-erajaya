
import React from 'react';
import { Product } from '../types';
import { MOCK_USER } from '../constants';

interface CartViewProps {
    onNavigate: (view: any) => void;
    selectedProducts: Product[];
    onRemoveProduct: (product: Product) => void;
}

const CartView: React.FC<CartViewProps> = ({ onNavigate, selectedProducts, onRemoveProduct }) => {
    return (
        <div className="min-h-screen bg-background-light font-sans">
            <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-4 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('dashboard')}>
                    <div className="size-8 text-primary">
                        <svg fill="currentColor" viewBox="0 0 48 48"><path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"/></svg>
                    </div>
                    <h2 className="text-xl font-black tracking-tight">Erajaya Raffle</h2>
                </div>
                <div className="flex items-center gap-8">
                    <nav className="hidden md:flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
                        <button onClick={() => onNavigate('dashboard')} className="hover:text-primary transition-colors">Home</button>
                        <button className="text-primary">Event</button>
                        <button className="hover:text-primary transition-colors">History</button>
                    </nav>
                    <img src={MOCK_USER.profilePic} className="size-10 rounded-full border-2 border-slate-100" alt="User" />
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                <nav className="flex items-center gap-2 text-sm font-bold text-slate-400 mb-6">
                    <button onClick={() => onNavigate('dashboard')} className="hover:text-primary">Home</button>
                    <span>/</span>
                    <button onClick={() => onNavigate('event-detail')} className="hover:text-primary">Event</button>
                    <span>/</span>
                    <span className="text-slate-900 font-black">Cart</span>
                </nav>

                <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Konfirmasi Pilihan Anda</h1>
                <p className="text-slate-500 font-medium mb-8">Erajaya Apple Fest 2026 - Periode Januari</p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        {/* Info Pendaftar */}
                        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary filled-icon">badge</span>
                                <h3 className="font-black text-slate-900 uppercase tracking-tight text-sm">Informasi Pendaftar</h3>
                            </div>
                            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                {[
                                    { label: 'Nama Pendaftar', value: MOCK_USER.name },
                                    { label: 'NIK', value: MOCK_USER.nik },
                                    { label: 'Departemen', value: MOCK_USER.division },
                                    { label: 'Lokasi Kerja', value: MOCK_USER.location },
                                ].map((item, idx) => (
                                    <div key={idx}>
                                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">{item.label}</p>
                                        <p className="text-slate-900 font-bold">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cart Items */}
                        <section>
                            <h2 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined">shopping_cart</span>
                                Keranjang Produk ({selectedProducts.length})
                            </h2>
                            <div className="flex flex-col gap-4">
                                {selectedProducts.map(product => (
                                    <div key={product.id} className="flex flex-col sm:flex-row bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                                        <div className="size-32 bg-slate-50 rounded-xl flex-shrink-0 flex items-center justify-center mb-4 sm:mb-0">
                                            <span className="material-symbols-outlined text-5xl text-slate-300">{product.imageUrl}</span>
                                        </div>
                                        <div className="flex-1 sm:ml-6 flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <span className="bg-primary/10 text-primary text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider mb-2 inline-block">Raffle Item</span>
                                                    <h3 className="text-xl font-black text-slate-900 leading-tight">{product.name}</h3>
                                                    <p className="text-sm text-slate-400 font-bold uppercase">{product.color}</p>
                                                </div>
                                                <button 
                                                    onClick={() => onRemoveProduct(product)}
                                                    className="text-slate-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-all"
                                                >
                                                    <span className="material-symbols-outlined">delete</span>
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-slate-100">
                                                <div>
                                                    <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Harga Special</p>
                                                    <p className="font-black text-primary">Rp {product.discountPrice.toLocaleString()}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Stok</p>
                                                    <p className="font-bold text-slate-900">{product.stock} Unit</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Peminat</p>
                                                    <p className="font-bold text-slate-900">{product.applicants} Org</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Peluang</p>
                                                    <p className="font-black text-green-600">{product.chance}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <button 
                                    onClick={() => onNavigate('event-detail')}
                                    className="flex items-center justify-center gap-2 w-full py-6 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all font-black uppercase text-sm"
                                >
                                    <span className="material-symbols-outlined">add</span>
                                    Tambah Produk Lain
                                </button>
                            </div>
                        </section>
                    </div>

                    <aside className="lg:col-span-4">
                        <div className="sticky top-28 flex flex-col gap-6">
                            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                                <div className="bg-primary p-6">
                                    <h3 className="text-white font-black text-xl tracking-tight uppercase">Konfirmasi Akhir</h3>
                                    <p className="text-blue-100 text-sm font-medium">Pastikan data pilihan Anda sudah benar.</p>
                                </div>
                                <div className="p-8 flex flex-col gap-6">
                                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3">
                                        <span className="material-symbols-outlined text-primary">info</span>
                                        <div className="text-xs text-slate-600 leading-relaxed font-medium">
                                            <p className="font-black text-slate-900 mb-1 uppercase tracking-wider">Informasi Penting</p>
                                            <ul className="list-disc pl-4 space-y-1">
                                                <li>Pemenang akan dikenakan <b>potongan gaji</b>.</li>
                                                <li>Produk tidak dapat dipindah tangankan.</li>
                                                <li>Setiap karyawan hanya dapat menang 1 unit.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <label className="flex items-start gap-3 cursor-pointer group">
                                            <input type="checkbox" className="mt-1 h-5 w-5 text-primary focus:ring-primary border-slate-300 rounded" required />
                                            <span className="text-xs text-slate-500 font-bold leading-relaxed group-hover:text-slate-900 transition-colors">Saya menyetujui syarat & ketentuan undian yang berlaku di Erajaya Group.</span>
                                        </label>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Konfirmasi Password</label>
                                            <div className="relative">
                                                <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:ring-primary focus:border-primary transition-all font-bold" type="password" placeholder="Masukkan password Anda" />
                                                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">visibility_off</span>
                                            </div>
                                            <p className="text-[10px] text-slate-400 font-bold">Gunakan password SSO Anda untuk verifikasi.</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 pt-2">
                                        <button 
                                            onClick={() => onNavigate('event-detail')}
                                            className="rounded-xl px-4 py-4 text-xs font-black text-slate-400 hover:bg-slate-50 transition-all uppercase tracking-widest"
                                        >
                                            Batal
                                        </button>
                                        <button 
                                            onClick={() => onNavigate('success')}
                                            className="rounded-xl bg-primary px-4 py-4 text-xs font-black text-white shadow-xl shadow-primary/30 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
                                        >
                                            Daftar Raffle
                                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-[18px]">help</span>
                                Butuh bantuan tentang undian?
                            </button>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default CartView;

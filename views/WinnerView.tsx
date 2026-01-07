
import React from 'react';
import { MOCK_USER } from '../constants';

interface WinnerViewProps {
    onNavigate: (view: any) => void;
}

const WinnerView: React.FC<WinnerViewProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-background-light font-sans flex flex-col">
            <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-3 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-4 text-slate-900">
                    <div className="size-8 text-primary">
                        <svg className="h-full w-full" fill="currentColor" viewBox="0 0 48 48">
                            <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"/>
                        </svg>
                    </div>
                    <h2 className="text-lg font-black tracking-tight uppercase">Erajaya Gadget Lottery</h2>
                </div>
                <div className="flex gap-3">
                    <button className="size-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <button className="size-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors">
                        <span className="material-symbols-outlined">account_circle</span>
                    </button>
                </div>
            </header>

            <main className="flex-1 max-w-6xl mx-auto w-full py-10 px-6">
                <div className="flex flex-col gap-8">
                    {/* Hero Section */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-primary text-white p-12 text-center flex flex-col items-center justify-center gap-6 border border-white/20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50"></div>
                        <div className="relative z-10 animate-bounce">
                            <span className="material-symbols-outlined text-7xl filled-icon">celebration</span>
                        </div>
                        <div className="relative z-10 space-y-3">
                            <h1 className="text-5xl font-black tracking-tighter uppercase leading-tight">Selamat Anda Menang!</h1>
                            <p className="text-lg font-medium text-blue-50 max-w-2xl mx-auto">
                                Selamat! Anda terpilih sebagai pemenang utama undian Gadget Apple Erajaya periode Q4. Silakan cek detail hadiah Anda di bawah ini.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 flex flex-col gap-8">
                            {/* Raffle Info */}
                            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                                <div className="p-6 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">confirmation_number</span>
                                        Detail Undian
                                    </h3>
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Terverifikasi</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                                    {[
                                        { label: 'Event Undian', value: 'Erajaya Apple Q4 Lottery' },
                                        { label: 'Nomor Undian', value: 'LTY-882910' },
                                        { label: 'Pemenang', value: `${MOCK_USER.name} (${MOCK_USER.nik})` },
                                        { label: 'Tanggal Undian', value: '24 Oktober 2026' },
                                    ].map((item, idx) => (
                                        <div key={idx} className="p-6">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                                            <p className="text-lg font-black text-slate-900 tracking-tight">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Prize Details */}
                            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
                                <div className="md:w-2/5 p-8 bg-slate-50/50 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-100">
                                    <div className="bg-white size-56 rounded-3xl shadow-lg border border-slate-100 flex items-center justify-center p-8 group overflow-hidden">
                                        <span className="material-symbols-outlined text-[120px] text-slate-300 group-hover:scale-110 transition-transform duration-700">smartphone</span>
                                    </div>
                                </div>
                                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                                    <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-6">iPhone 15 Pro - 256GB</h3>
                                    <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Warna</p>
                                            <div className="flex items-center gap-2">
                                                <div className="size-4 rounded-full bg-[#bebebe] border border-slate-300 shadow-sm"></div>
                                                <p className="text-sm font-black text-slate-900">Natural Titanium</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Storage</p>
                                            <p className="text-sm font-black text-slate-900">256 GB</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Harga Karyawan</p>
                                            <p className="text-2xl font-black text-primary tracking-tighter">Rp 18.500.000</p>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase">*Harga khusus pemenang</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Garansi</p>
                                            <p className="text-sm font-black text-slate-900 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-green-500 text-[20px]">verified_user</span>
                                                iBox Official 1 Year
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Logistics Column */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden sticky top-28">
                                <div className="p-6 bg-slate-50 border-b border-slate-200">
                                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">event_available</span>
                                        Jadwal Pengambilan
                                    </h3>
                                </div>
                                <div className="p-8 flex flex-col gap-8">
                                    <div className="flex flex-col items-center gap-4 p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Scan saat pengambilan</p>
                                        <div className="bg-white p-3 rounded-2xl shadow-xl">
                                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=WIN-882910" alt="QR WIN" className="size-32 grayscale opacity-90" />
                                        </div>
                                        <p className="text-[10px] font-black text-slate-900 tracking-widest uppercase">Kode: WIN-882910</p>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            { label: 'Tanggal & Waktu', value: 'Jumat, 27 Jan 2026', sub: '10:00 - 15:00 WIB', icon: 'calendar_month' },
                                            { label: 'Lokasi Pengambilan', value: 'Erajaya Plaza, Lt. 3', sub: 'Jl. Bandengan Selatan No. 19-20', icon: 'location_on' },
                                            { label: 'PIC', value: 'Sarah (HR GA)', sub: 'Ext. 2029', icon: 'person' },
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex gap-4">
                                                <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                                                    <span className="material-symbols-outlined">{item.icon}</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                                                    <p className="font-black text-slate-900 text-sm tracking-tight">{item.value}</p>
                                                    <p className="text-xs font-bold text-slate-400">{item.sub}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                                        <p className="text-[10px] font-black text-amber-800 uppercase tracking-widest mb-2 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px]">info</span>
                                            Wajib Dibawa:
                                        </p>
                                        <ul className="text-xs font-bold text-amber-900 list-disc list-inside space-y-1 uppercase tracking-tight">
                                            <li>KTP Asli</li>
                                            <li>ID Card Karyawan</li>
                                            <li>Bukti Pendaftaran</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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
                            <button className="h-12 px-6 rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all">
                                <span className="material-symbols-outlined text-[20px]">calendar_clock</span>
                                Reschedule
                            </button>
                            <button className="h-12 px-6 rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all">
                                <span className="material-symbols-outlined text-[20px] text-green-500">chat</span>
                                Hubungi PIC
                            </button>
                            <button className="h-12 px-8 rounded-xl bg-primary text-white shadow-xl shadow-primary/30 hover:bg-blue-700 font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all transform hover:-translate-y-1">
                                <span className="material-symbols-outlined text-[20px]">download</span>
                                Download PDF
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WinnerView;

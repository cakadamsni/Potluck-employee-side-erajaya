
import React, { useState } from 'react';
import { MOCK_USER } from '../constants';

interface WinnerViewProps {
    onNavigate: (view: any) => void;
}

const WinnerView: React.FC<WinnerViewProps> = ({ onNavigate }) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [isPresent, setIsPresent] = useState(false);

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
            <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-3 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-4 text-slate-900">
                    <div className="size-8 text-primary">
                        <svg className="h-full w-full" fill="currentColor" viewBox="0 0 48 48">
                            <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" />
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
                                    <div className="flex items-center gap-2">
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">Terverifikasi</span>
                                        {isPresent && (
                                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                                                Sudah Absen
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                                    {[
                                        { label: 'Event Undian', value: 'Apple New Year Sale 2026' },
                                        { label: 'Nomor Undian', value: 'LTY-882910' },
                                        { label: 'Nama Karyawan', value: MOCK_USER.name },
                                        { label: 'NIK Karyawan', value: MOCK_USER.nik },

                                    ].map((item, idx) => (
                                        <div key={idx} className="p-6">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                                            <p className="text-lg font-black text-slate-900 tracking-tight">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Prize Details */}
                            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col p-6 gap-6">
                                <h3 className="text-xl font-black text-slate-900 tracking-tight">Hadiah Anda</h3>

                                <div className="group bg-white rounded-2xl border border-slate-200 p-4 flex flex-col md:flex-row items-center gap-4">
                                    <div className="flex-1 w-full md:w-auto">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-lg font-bold text-slate-900 leading-tight">iPhone 15 Pro</h3>
                                        </div>
                                        <p className="text-sm text-slate-500 font-medium">Ini Deskripsi produk (opsional)</p>
                                    </div>

                                    <div className="flex items-center justify-between w-full md:w-auto gap-6 md:gap-12">
                                        <div className="flex flex-col items-end">
                                            <span className="text-[10px] uppercase text-slate-400 font-black">Harga Karyawan</span>
                                            <span className="text-primary font-black text-lg">Rp 18.500.000</span>
                                        </div>

                                        <div className="flex flex-col items-center">
                                            <span className="text-[10px] uppercase text-slate-400 font-black">Jumlah Dimenangkan</span>
                                            <span className="font-bold text-slate-900">1 Unit</span>
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

                                    <div className="space-y-6">
                                        {[
                                            { label: 'Tanggal & Waktu', value: 'Jumat, 02 Februari 2026', sub: '10:00 - 15:00 WIB', icon: 'calendar_month' },
                                            { label: 'Lokasi Pengambilan', value: 'Erajaya Plaza, Lt. 3', sub: 'Jl. Bandengan Selatan No. 19-20', icon: 'location_on' },
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
                </div>
            </main>

            {/* Confirmation Modal */}
            {showConfirmModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 bg-primary text-white">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-4xl">info</span>
                                <h3 className="text-xl font-black uppercase tracking-tight">Konfirmasi Kehadiran</h3>
                            </div>
                        </div>
                        <div className="p-8">
                            <p className="text-slate-700 font-medium text-base leading-relaxed mb-6">
                                Dengan menekan tombol "Ya", Anda akan <span className="font-black text-slate-900">terdeteksi sudah absen</span> dan sistem akan mencatat kehadiran Anda untuk pengambilan hadiah ini.
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

export default WinnerView;

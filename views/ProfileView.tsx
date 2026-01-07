
import React from 'react';
import Sidebar from '../components/Sidebar';
import { MOCK_USER } from '../constants';
import { ViewType } from '../App';

interface ProfileViewProps {
    onNavigate: (view: ViewType) => void;
    onLogout: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ onNavigate, onLogout }) => {
    return (
        <div className="flex h-screen w-full bg-background-light overflow-hidden">
            <Sidebar active="profile" onLogout={onLogout} onNavigate={onNavigate} />
            <main className="flex-1 overflow-y-auto no-scrollbar">
                <div className="max-w-6xl mx-auto p-4 md:p-8 flex flex-col gap-6">
                    <header>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Profil Saya</h1>
                        <p className="text-slate-500">Kelola informasi akun dan preferensi Anda.</p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm text-center flex flex-col items-center">
                                <div className="relative mb-4">
                                    <img src={MOCK_USER.profilePic} className="size-32 rounded-full object-cover border-4 border-slate-50 shadow-lg" alt="Profile Avatar" />
                                    <button className="absolute bottom-0 right-0 size-10 rounded-full bg-primary text-white border-4 border-white flex items-center justify-center shadow-md hover:bg-blue-700 transition-all">
                                        <span className="material-symbols-outlined text-xl">edit</span>
                                    </button>
                                </div>
                                <h2 className="text-2xl font-black text-slate-900">{MOCK_USER.name}</h2>
                                <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">{MOCK_USER.division}</p>
                                <div className="mt-6 pt-6 border-t border-slate-100 w-full grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Poin</p>
                                        <p className="font-black text-primary text-xl">{MOCK_USER.points}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Wins</p>
                                        <p className="font-black text-slate-900 text-xl">{MOCK_USER.totalWins}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 transform group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-8xl">contactless</span>
                                </div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Digital Employee Pass</p>
                                <div className="space-y-4 relative z-10">
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase">Nomor Induk Karyawan</p>
                                        <p className="text-xl font-mono tracking-widest">{MOCK_USER.nik}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase">Email</p>
                                        <p className="text-sm font-semibold">{MOCK_USER.email}</p>
                                    </div>
                                </div>
                                <div className="mt-12 flex justify-between items-end relative z-10">
                                    <div className="flex gap-1">
                                        {[1, 2, 3].map(i => <div key={i} className="h-1.5 w-8 bg-primary rounded-full"></div>)}
                                    </div>
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxwXG4YLXT5pfBmt_knPTje3mrzkjtIhT1K4oe_K2JwcMuRjNfeh3-2C1qsZH0Kq80JnKXwKI7CvPIEAEC-tLC56du9NXQdRrYTRRgrNHhF5-otND1ODPysn5CflxU_BgC05UakAR-48dUJ5oFQQRhormJ0a91D_avANAdU_aNgtkh1smtSZh72yqkFAalIpjFYWJqbMwF-p-z3-p2DSjInvUscY9GI2eu74_Ihha7ejRkxYzDPMbSvuKzPdw04de6RdYmrQKSCBHA" className="h-6 grayscale brightness-200" alt="Logo Small" />
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                                <h3 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-tight flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">person_outline</span>
                                    Informasi Personal
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        { label: 'Nama Lengkap', value: MOCK_USER.name, icon: 'person' },
                                        { label: 'NIK', value: MOCK_USER.nik, icon: 'badge' },
                                        { label: 'Email Zimbra', value: MOCK_USER.email, icon: 'mail' },
                                        { label: 'Departemen', value: MOCK_USER.division, icon: 'business' },
                                        { label: 'Lokasi Penempatan', value: MOCK_USER.location, icon: 'location_on' },
                                        { label: 'Tgl Bergabung', value: '12 Jan 2018', icon: 'calendar_today' },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-primary/30 transition-all">
                                            <div className="size-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                                                <p className="font-bold text-slate-900">{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                                <h3 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-tight flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">settings</span>
                                    Pengaturan Akun
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { label: 'Notifikasi Email', desc: 'Terima hasil undian via email Zimbra.', toggle: true },
                                        { label: 'Keamanan SSO', desc: 'Terakhir diubah 3 bulan lalu.', action: 'Ubah Password' },
                                        { label: 'Privasi Data', desc: 'Atur bagaimana data raffle Anda digunakan.', action: 'Kelola' },
                                    ].map((setting, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-4 border-b border-slate-100 last:border-0">
                                            <div>
                                                <p className="font-bold text-slate-900">{setting.label}</p>
                                                <p className="text-xs text-slate-500">{setting.desc}</p>
                                            </div>
                                            {setting.toggle ? (
                                                <div className="w-12 h-6 bg-primary rounded-full relative p-1 cursor-pointer">
                                                    <div className="size-4 bg-white rounded-full absolute right-1"></div>
                                                </div>
                                            ) : (
                                                <button className="text-sm font-bold text-primary hover:underline">{setting.action}</button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProfileView;

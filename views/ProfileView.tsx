
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
                                    <div className="col-span-full flex items-center justify-between p-4 rounded-2xl bg-red-50 border border-red-100 mt-4">
                                        <div>
                                            <p className="font-bold text-slate-900">Log Out</p>
                                            <p className="text-xs text-slate-500">Keluar dari akun Anda</p>
                                        </div>
                                        <button
                                            onClick={onLogout}
                                            className="px-6 py-2 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors"
                                        >
                                            Log Out
                                        </button>
                                    </div>
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

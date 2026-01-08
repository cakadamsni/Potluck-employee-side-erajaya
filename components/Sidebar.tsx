
import React from 'react';
import { ViewType } from '../App';

interface SidebarProps {
    active: ViewType;
    onLogout: () => void;
    onNavigate: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ active, onLogout, onNavigate }) => {
    const navItems: { id: ViewType; label: string; icon: string }[] = [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'history', label: 'Riwayat Undian', icon: 'history' },
    ];

    return (
        <aside className="hidden lg:flex w-72 flex-col justify-between border-r border-slate-200 bg-white p-6 z-20">
            <div className="flex flex-col gap-8">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('dashboard')}>
                    <div className="size-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                        <span className="material-symbols-outlined text-2xl">redeem</span>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold leading-none tracking-tight">Erajaya Raffle</h1>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Employee Portal</p>
                    </div>
                </div>

                <nav className="flex flex-col gap-2">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold text-sm ${active === item.id ? 'bg-primary/10 text-primary shadow-sm' : 'text-slate-500 hover:bg-slate-50'
                                }`}
                        >
                            <span className={`material-symbols-outlined ${active === item.id ? 'filled-icon' : ''}`}>
                                {item.icon}
                            </span>
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="pt-6 border-t border-slate-100">
                <button
                    onClick={onLogout}
                    className="flex items-center gap-3 px-4 py-3 w-full text-slate-500 hover:text-red-600 transition-colors font-semibold text-sm"
                >
                    <span className="material-symbols-outlined">logout</span>
                    Keluar
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;

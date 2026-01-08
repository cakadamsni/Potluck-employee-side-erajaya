
import React from 'react';

interface LoginViewProps {
    onLogin: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-background-light">
            <header className="w-full bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-8 rounded bg-primary flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-xl">business</span>
                        </div>
                        <h2 className="text-lg font-bold tracking-tight text-slate-900">Erajaya Swasembada Tbk</h2>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-sm font-medium text-slate-500">
                        <a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
                            <span className="material-symbols-outlined text-[18px]">help</span>
                            Butuh Bantuan?
                        </a>
                    </div>
                </div>
            </header>

            <main className="flex-grow flex items-center justify-center p-4 relative">
                <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-slate-100/50"></div>
                </div>

                <div className="w-full max-w-6xl flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden min-h-[600px]">
                    <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative flex-col justify-between p-12 text-white">
                        <div className="absolute inset-0 z-0">
                            <img
                                alt="Apple Raffle Promotion"
                                className="w-full h-full object-cover opacity-80"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-LYlzP622XxW_yXZpzSeHjUsN5XnoFoxMTv5PLIjboQRSTXd5jg6ROUtko-8SJlwpy_P901X4dUMb9FpkNrQ137lKCvlgWV3X2l75oiILy4xld1330cNU60AbihMvlLqdXpX3IlLdYKAh6FUWa6R8TXka2BsQ9QxB-PSWbzgkeKWppFVSjXjac7ecOuoX8rDb1pQJxpNlOw9ERLMc51Yh3GuPAyUcmrAW7v1wEjsiSZ_a4QdgZ2sF2XPR1Zc9GhYbzjKgNPkq53nS"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        </div>
                        <div className="relative z-10 pt-10">
                            <div className="bg-white/20 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-widest">
                                Erajaya Exclusive
                            </div>
                            <h2 className="text-4xl font-extrabold tracking-tight leading-tight mb-4">Win the latest Apple Gadgets</h2>
                            <p className="text-slate-200 text-lg max-w-md leading-relaxed">
                                Kesempatan emas bagi karyawan Erajaya untuk memenangkan produk Apple terbaru melalui sistem undian eksklusif.
                            </p>
                        </div>
                        <div className="relative z-10 flex gap-4 mt-auto">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <img
                                        key={i}
                                        className="h-10 w-10 rounded-full ring-2 ring-slate-800 object-cover"
                                        src={`https://picsum.photos/seed/${i + 50}/100/100`}
                                        alt="Winner Profile"
                                    />
                                ))}
                                <div className="flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-slate-800 bg-white/20 backdrop-blur-sm text-xs font-medium">
                                    +1k
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-sm font-semibold">Join 1,000+ Employees</span>
                                <span className="text-xs text-slate-300">Participating in this season's raffle</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                        <div className="max-w-md mx-auto w-full">
                            <div className="mb-8">
                                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">APPLE RAFFLE SYSTEM</h1>
                                <p className="text-slate-500">Silahkan masuk untuk melanjutkan ke portal undian.</p>
                            </div>
                            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
                                <div className="space-y-1.5">
                                    <label className="block text-sm font-medium text-slate-700">Email Zimbra/LDAP</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">mail</span>
                                        </div>
                                        <input className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all" placeholder="user@erajaya.com" type="email" required />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="block text-sm font-medium text-slate-700">Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <span className="material-symbols-outlined text-[20px]">lock</span>
                                        </div>
                                        <input className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all" placeholder="••••••••" type="password" required />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded" id="remember-me" type="checkbox" />
                                        <label className="ml-2 block text-sm text-slate-600" htmlFor="remember-me">Ingat Saya</label>
                                    </div>
                                    <div className="text-sm">
                                        <a className="font-medium text-primary hover:text-blue-700 transition-colors" href="#">Lupa Password?</a>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <button className="w-full flex justify-center items-center py-3 px-4 rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-blue-700 transition-colors tracking-wide" type="submit">
                                        <span className="material-symbols-outlined mr-2 text-[20px]">login</span>
                                        LOGIN
                                    </button>
                                </div>
                            </form>
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <p className="text-center text-xs text-slate-500 mb-4 font-medium uppercase tracking-wider">Pusat Bantuan</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                                        <span className="material-symbols-outlined text-primary text-[20px]">book_2</span>
                                        Panduan
                                    </button>
                                    <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                                        <span className="material-symbols-outlined text-primary text-[20px]">support_agent</span>
                                        Support IT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="py-6 text-center text-slate-400 text-sm">
                <p>© 2024 Erajaya Swasembada Tbk. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LoginView;

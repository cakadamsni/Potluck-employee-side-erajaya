
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

                </div>
            </header>

            <main className="flex-grow flex items-center justify-center p-4 relative">
                <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-slate-100/50"></div>
                </div>

                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="w-full p-8 sm:p-10 flex flex-col justify-center">
                        <div className="w-full">
                            <div className="mb-8 text-center">
                                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">ERAJAYA POTLUCK</h1>
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

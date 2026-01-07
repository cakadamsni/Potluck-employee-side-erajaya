import React from 'react';

interface LoserViewProps {
    onNavigate: (view: any) => void;
}

const LoserView: React.FC<LoserViewProps> = ({ onNavigate }) => {
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

            <main className="flex-1 max-w-2xl mx-auto w-full py-10 px-6 flex flex-col items-center justify-center text-center">
                <div className="bg-white rounded-3xl shadow-xl p-12 border border-slate-200 w-full flex flex-col items-center gap-8">
                    <div className="size-24 bg-slate-100 rounded-full flex items-center justify-center mb-2">
                        <span className="material-symbols-outlined text-6xl text-slate-400">sentiment_dissatisfied</span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Belum Beruntung</h1>
                        <p className="text-slate-500 font-medium text-lg max-w-md mx-auto">
                            Mohon maaf, Anda belum terpilih sebagai pemenang dalam undian kali ini. Jangan menyerah, masih banyak kesempatan lainnya!
                        </p>
                    </div>



                    <div className="flex flex-col gap-3 w-full max-w-xs">
                        <button
                            onClick={() => onNavigate('dashboard')}
                            className="h-12 w-full rounded-xl bg-primary text-white font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                        >
                            Kembali ke Dashboard
                        </button>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default LoserView;


import React, { useState } from 'react';
import LoginView from './views/LoginView';
import DashboardView from './views/DashboardView';
import EventDetailView from './views/EventDetailView';
import CartView from './views/CartView';
import SuccessView from './views/SuccessView';
import WinnerView from './views/WinnerView';
import HistoryView from './views/HistoryView';
import ProfileView from './views/ProfileView';
import LoserView from './views/LoserView';
import QueueDetailView from './views/QueueDetailView';
import QueueSuccessView from './views/QueueSuccessView';
import NIKModal from './components/NIKModal';
import { Product, NIKStorage } from './types';

export type ViewType = 'login' | 'dashboard' | 'event-detail' | 'cart' | 'success' | 'winner' | 'loser' | 'history' | 'profile' | 'queue-detail' | 'queue-success';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<ViewType>('login');
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [showNIKModal, setShowNIKModal] = useState(false);
    const [userNIK, setUserNIK] = useState<string | null>(null);
    const [queueNumber, setQueueNumber] = useState<string>('');
    const [selectedTimeSegment, setSelectedTimeSegment] = useState<string>('');

    const toggleProductSelection = (product: Product) => {
        if (selectedProducts.find(p => p.id === product.id)) {
            setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
        } else {
            if (selectedProducts.length < 2) {
                setSelectedProducts([...selectedProducts, product]);
            } else {
                alert("Maksimal 2 produk per karyawan.");
            }
        }
    };

    const handleLogin = () => {
        // Cek apakah NIK sudah tersimpan di localStorage
        const storedNIK = localStorage.getItem('erajaya_potluck_nik');

        if (storedNIK) {
            try {
                const nikData: NIKStorage = JSON.parse(storedNIK);
                setUserNIK(nikData.nik);
                setShowNIKModal(false);
            } catch (error) {
                // Jika data corrupt, bersihkan dan minta input ulang
                localStorage.removeItem('erajaya_potluck_nik');
                setShowNIKModal(true);
            }
        } else {
            // NIK belum ada, tampilkan modal
            setShowNIKModal(true);
        }

        setCurrentView('dashboard');
    };
    const handleLogout = () => {
        setCurrentView('login');
        setSelectedProducts([]);
        // NIK tetap tersimpan saat logout, tidak dihapus
    };
    const navigateTo = (view: ViewType) => setCurrentView(view);

    const handleQueueSuccess = (number: string, segment: string) => {
        setQueueNumber(number);
        setSelectedTimeSegment(segment);
    };

    const handleNIKSubmit = (nik: string) => {
        try {
            const nikData: NIKStorage = {
                nik: nik,
                submittedAt: new Date().toISOString(),
                email: 'user@erajaya.com' // TODO: Get from actual login data
            };

            localStorage.setItem('erajaya_potluck_nik', JSON.stringify(nikData));
            setUserNIK(nik);
            setShowNIKModal(false);
        } catch (error) {
            alert('Gagal menyimpan NIK. Silakan coba lagi atau hubungi IT Support.');
        }
    };

    const renderView = () => {
        switch (currentView) {
            case 'login':
                return <LoginView onLogin={handleLogin} />;
            case 'dashboard':
                return <DashboardView onNavigate={navigateTo} onLogout={handleLogout} />;
            case 'event-detail':
                return (
                    <EventDetailView
                        onNavigate={navigateTo}
                        selectedProducts={selectedProducts}
                        onToggleProduct={toggleProductSelection}
                    />
                );
            case 'cart':
                return (
                    <CartView
                        onNavigate={navigateTo}
                        selectedProducts={selectedProducts}
                        onRemoveProduct={toggleProductSelection}
                    />
                );
            case 'success':
                return <SuccessView onNavigate={navigateTo} selectedProducts={selectedProducts} />;
            case 'winner':
                return <WinnerView onNavigate={navigateTo} />;
            case 'loser':
                return <LoserView onNavigate={navigateTo} />;
            case 'queue-detail':
                return <QueueDetailView onNavigate={navigateTo} onQueueSuccess={handleQueueSuccess} />;
            case 'queue-success':
                return <QueueSuccessView onNavigate={navigateTo} queueNumber={queueNumber} timeSegment={selectedTimeSegment} />;
            case 'history':
                return <HistoryView onNavigate={navigateTo} onLogout={handleLogout} onQueueDetail={handleQueueSuccess} />;
            case 'profile':
                return <ProfileView onNavigate={navigateTo} onLogout={handleLogout} />;
            default:
                return <LoginView onLogin={handleLogin} />;
        }
    };

    return (
        <div className="min-h-screen bg-background-light text-slate-900 transition-colors duration-300">
            {renderView()}
            {showNIKModal && currentView === 'dashboard' && (
                <NIKModal onSubmit={handleNIKSubmit} />
            )}
        </div>
    );
};

export default App;


import React, { useState } from 'react';
import LoginView from './views/LoginView';
import DashboardView from './views/DashboardView';
import EventDetailView from './views/EventDetailView';
import CartView from './views/CartView';
import SuccessView from './views/SuccessView';
import WinnerView from './views/WinnerView';
import HistoryView from './views/HistoryView';
import ProfileView from './views/ProfileView';
import { Product } from './types';

export type ViewType = 'login' | 'dashboard' | 'event-detail' | 'cart' | 'success' | 'winner' | 'history' | 'profile';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<ViewType>('login');
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

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

    const handleLogin = () => setCurrentView('dashboard');
    const handleLogout = () => {
        setCurrentView('login');
        setSelectedProducts([]);
    };
    const navigateTo = (view: ViewType) => setCurrentView(view);

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
                return <SuccessView onNavigate={navigateTo} />;
            case 'winner':
                return <WinnerView onNavigate={navigateTo} />;
            case 'history':
                return <HistoryView onNavigate={navigateTo} onLogout={handleLogout} />;
            case 'profile':
                return <ProfileView onNavigate={navigateTo} onLogout={handleLogout} />;
            default:
                return <LoginView onLogin={handleLogin} />;
        }
    };

    return (
        <div className="min-h-screen bg-background-light text-slate-900 transition-colors duration-300">
            {renderView()}
        </div>
    );
};

export default App;

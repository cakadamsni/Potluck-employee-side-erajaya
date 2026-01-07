
export interface Product {
    id: string;
    name: string;
    color: string;
    storage?: string;
    originalPrice: number;
    discountPrice: number;
    discountPercent: number;
    stock: number;
    applicants: number;
    chance: string;
    chanceColor: 'green' | 'red' | 'amber' | 'blue';
    category: 'iPhone' | 'MacBook' | 'Watch' | 'iPad';
    imageUrl: string;
}

export interface RaffleEvent {
    id: string;
    title: string;
    description: string;
    period: string;
    deadline: string;
    drawDate: string;
    pickupPeriod: string;
    location: string;
    quota: number;
    maxProducts: number;
    status: 'Aktif' | 'Coming Soon' | 'Selesai';
    type: 'Public Event' | 'Private Event';
    imageUrl?: string;
}

export interface UserStats {
    raffleJoined: number;
    totalWins: number;
    activeEvents: number;
    points: number;
    name: string;
    nik: string;
    email: string;
    division: string;
    location: string;
    profilePic: string;
}

export interface RaffleHistory {
    id: string;
    eventName: string;
    drawDate: string;
    pointsUsed: number;
    status: 'Menang' | 'Belum Beruntung' | 'Proses';
}

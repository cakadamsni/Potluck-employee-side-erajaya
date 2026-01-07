
import { Product, RaffleEvent, UserStats, RaffleHistory } from './types';

export const MOCK_USER: UserStats = {
    name: "Budi Santoso",
    nik: "19920388",
    email: "budi.santoso@erajaya.com",
    division: "Retail Operations",
    location: "Erajaya Plaza",
    points: 2500,
    raffleJoined: 18,
    totalWins: 2,
    activeEvents: 5,
    profilePic: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxwXG4YLXT5pfBmt_knPTje3mrzkjtIhT1K4oe_K2JwcMuRjNfeh3-2C1qsZH0Kq80JnKXwKI7CvPIEAEC-tLC56du9NXQdRrYTRRgrNHhF5-otND1ODPysn5CflxU_BgC05UakAR-48dUJ5oFQQRhormJ0a91D_avANAdU_aNgtkh1smtSZh72yqkFAalIpjFYWJqbMwF-p-z3-p2DSjInvUscY9GI2eu74_Ihha7ejRkxYzDPMbSvuKzPdw04de6RdYmrQKSCBHA"
};

export const MOCK_PRODUCTS: Product[] = [
    {
        id: "p1",
        name: "iPhone 15 Pro Max 256GB",
        color: "Natural Titanium",
        originalPrice: 24999000,
        discountPrice: 18000000,
        discountPercent: 28,
        stock: 50,
        applicants: 120,
        chance: "Tinggi (~41%)",
        chanceColor: "green",
        category: "iPhone",
        imageUrl: "smartphone"
    },
    {
        id: "p2",
        name: "iPhone 15 Pro 128GB",
        color: "Blue Titanium",
        originalPrice: 20999000,
        discountPrice: 15500000,
        discountPercent: 25,
        stock: 100,
        applicants: 800,
        chance: "Rendah (~12%)",
        chanceColor: "red",
        category: "iPhone",
        imageUrl: "smartphone"
    },
    {
        id: "p3",
        name: "MacBook Air M2 13\"",
        color: "Midnight",
        originalPrice: 19999000,
        discountPrice: 14000000,
        discountPercent: 30,
        stock: 20,
        applicants: 60,
        chance: "Sedang (~33%)",
        chanceColor: "amber",
        category: "MacBook",
        imageUrl: "laptop_mac"
    },
    {
        id: "p4",
        name: "Apple Watch S9 45mm",
        color: "Starlight",
        originalPrice: 7999000,
        discountPrice: 6400000,
        discountPercent: 20,
        stock: 200,
        applicants: 150,
        chance: "Pasti Dapat",
        chanceColor: "green",
        category: "Watch",
        imageUrl: "watch"
    }
];

export const MOCK_EVENTS: RaffleEvent[] = [
    {
        id: "e1",
        title: "Apple New Year Sale 2026",
        description: "Kesempatan eksklusif bagi karyawan untuk mendapatkan produk Apple terbaru dengan harga spesial.",
        period: "1 - 31 Jan 2026",
        deadline: "25 Jan 2026",
        drawDate: "01 Feb 2026",
        maxProducts: 2,
        status: "Aktif",
        type: "Public Event",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeA5z54-EMncKS1Ao43VB7P0oR7NekeBkdzT3BFJMuNmSkkcA0ns-DyimmEJ8vXGczmPere1f0BRzh7WXh7RXryeGt3HyF48XgtC2OFohV5-2Nst-snEhYuIq4bCTWFMxELrFKfQBqJd71L1hYfPAgo_LclSuPbeYjSUERwifevQEgFXZ57RdxfDuh_A6BhF3CdUfrZ5Z-ImCEZquApMDJBuPfExsgSkY29gKos1nnmQszR12XC7u8n6mj-aRVXPYvyO7YdbxmK1G3"
    },
    {
        id: "e2",
        title: "Event Ramadhan Sale",
        description: "Potongan harga fantastis untuk menyambut bulan suci Ramadhan 2026.",
        period: "12 - 18 Okt 2026",
        deadline: "17 Okt 2026",
        drawDate: "20 Okt 2026",
        maxProducts: 1,
        status: "Coming Soon",
        type: "Public Event",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoo5njJX60PBYtA-eOwVB4aha2VX8hd_bvkSk1h6nvM5YQMS5aPy0hm9IZhsUsjyZPdNryTaPsV_HqacSiZ_uxqOcToxw8_b32FiBW6UWfLasB8f2VTvXswwCONxIpHUD1TASbGsafgP5arNt_HaU7a835GyTcmziGLUulc6FwJwTgnDzOj3dAG9IxZjb4mA5r6UaaDWf1YUqWYiX59YInbwvSwwfXfElXNqzBfhAd8-dMxwA5PraENgKMIKs_3-7FCPb2tTqnY6wV"
    }
];

export const MOCK_HISTORY: RaffleHistory[] = [
    { id: "h1", eventName: "Macbook Air M2 2022", drawDate: "15 Sep 2023", pointsUsed: 500, status: "Belum Beruntung" },
    { id: "h2", eventName: "AirPods Pro Gen 2", drawDate: "01 Agu 2023", pointsUsed: 200, status: "Menang" },
    { id: "h3", eventName: "iPhone 14 Plus", drawDate: "12 Jul 2023", pointsUsed: 400, status: "Belum Beruntung" }
];

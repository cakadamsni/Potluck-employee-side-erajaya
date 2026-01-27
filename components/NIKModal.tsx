
import React, { useState } from 'react';

interface NIKModalProps {
    onSubmit: (nik: string) => void;
}

const NIKModal: React.FC<NIKModalProps> = ({ onSubmit }) => {
    const [nik, setNik] = useState('');
    const [error, setError] = useState('');

    const validateNIK = (value: string): boolean => {
        // NIK harus berisi angka saja dan minimal 6 digit, maksimal 20 digit
        const nikRegex = /^\d{6,20}$/;
        return nikRegex.test(value);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Hanya izinkan angka
        const numericValue = value.replace(/\D/g, '');
        setNik(numericValue);

        // Reset error saat user mengetik
        if (error) {
            setError('');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateNIK(nik)) {
            setError('NIK harus berisi angka dan minimal 6 digit. Periksa kembali NIK Anda.');
            return;
        }

        onSubmit(nik);
    };

    const isValid = validateNIK(nik);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-5">
                    <div className="flex items-center gap-3">
                        <div className="size-12 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-3xl">badge</span>
                        </div>
                        <div>
                            <h2 className="text-2xl font-extrabold text-white tracking-tight">NIK WAJIB DIISI</h2>
                            <p className="text-red-100 text-sm mt-0.5">Wajib diisi sebelum melanjutkan</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Warning Alert */}
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                        <div className="flex gap-3">
                            <span className="material-symbols-outlined text-amber-600 text-xl flex-shrink-0">warning</span>
                            <div className="flex-1">
                                <p className="font-bold text-amber-900 text-sm mb-1">PERHATIAN PENTING</p>
                                <p className="text-amber-800 text-sm leading-relaxed">
                                    Masukkan NIK Anda dengan <strong>BENAR</strong>. Data ini diperlukan untuk administrasi pengambilan barang dan <strong>TIDAK DAPAT DIUBAH</strong> setelah disimpan.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Instruction */}
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <p className="text-slate-700 text-sm leading-relaxed">
                            <strong className="text-slate-900">PASTIKAN NIK yang Anda masukkan BENAR.</strong><br />
                            Kesalahan input akan mempengaruhi proses pengambilan barang Anda.
                        </p>
                    </div>

                    {/* NIK Input */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-slate-900">
                            Nomor Induk Karyawan (NIK) <span className="text-red-600">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <span className="material-symbols-outlined text-[20px]">badge</span>
                            </div>
                            <input
                                type="text"
                                value={nik}
                                onChange={handleInputChange}
                                className={`block w-full pl-10 pr-3 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm transition-all ${error ? 'border-red-400 bg-red-50' : 'border-slate-300'
                                    }`}
                                placeholder="Contoh: 123456"
                                required
                                maxLength={20}
                                autoFocus
                            />
                        </div>
                        {error && (
                            <div className="flex items-center gap-2 text-red-600 text-sm mt-2">
                                <span className="material-symbols-outlined text-base">error</span>
                                <p>{error}</p>
                            </div>
                        )}
                        <p className="text-xs text-slate-500 mt-1">
                            Minimal 6 digit, hanya angka
                        </p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={!isValid}
                            className={`w-full flex justify-center items-center py-3.5 px-4 rounded-lg shadow-md text-sm font-bold text-white tracking-wide transition-all ${isValid
                                    ? 'bg-red-600 hover:bg-red-700 hover:shadow-lg active:scale-[0.98]'
                                    : 'bg-slate-300 cursor-not-allowed'
                                }`}
                        >
                            <span className="material-symbols-outlined mr-2 text-[20px]">check_circle</span>
                            KONFIRMASI NIK
                        </button>
                    </div>

                    {/* Footer Note */}
                    <div className="text-center pt-2 border-t border-slate-200">
                        <p className="text-xs text-slate-500">
                            Data NIK Anda akan tersimpan dengan aman untuk keperluan administrasi
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NIKModal;

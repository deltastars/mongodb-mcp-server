
import React, { useState, useEffect } from 'react';
import { useI18n } from './contexts/I18nContext';
import { useToast } from '../ToastContext';
import { FingerprintIcon, XIcon, SparklesIcon } from './contexts/Icons';
import { isDeviceTrusted, trustDevice } from './deviceTrust';

export const SectionAuthModal: React.FC<{
  section: 'gm.portal' | 'accounts' | 'operations' | 'security_hub' | 'warehouse';
  onUnlock: () => void;
  onClose: () => void;
}> = ({ section, onUnlock, onClose }) => {
    const { language } = useI18n();
    const { addToast } = useToast();
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isCheckingFingerprint, setIsCheckingFingerprint] = useState(false);

    // جلب الإعدادات الأمنية المحدثة للإدارة التشغيلية
    const savedAuth = JSON.parse(localStorage.getItem('delta-stars-admin-auth') || '{"password": "12345", "isDefault": true}');
    
    const AUTH_CONFIG = { 
        'gm.portal': { PASS: savedAuth.password, EMAIL: 'gm@deltastars-ksa.com', THEME: 'border-primary' },
        accounts: { PASS: '12345', EMAIL: 'accounts@deltastars-ksa.com', THEME: 'border-green-500' },
        operations: { PASS: '12345', EMAIL: 'ops@deltastars-ksa.com', THEME: 'border-orange-500' },
        warehouse: { PASS: '12345', EMAIL: 'deltastars777@gmail.com', THEME: 'border-yellow-500' },
        security_hub: { PASS: savedAuth.password, EMAIL: 'deltastars777@gmail.com', THEME: 'border-red-500' }
    };
    
    const targetConfig = AUTH_CONFIG[section] || AUTH_CONFIG.warehouse;

    useEffect(() => {
        // نظام "بصمة الجهاز الموثوق" لتسريع الدخول للإدارة
        if (isDeviceTrusted(targetConfig.EMAIL)) {
            setIsCheckingFingerprint(true);
            setTimeout(() => {
                onUnlock();
                addToast(language === 'ar' ? 'تمت مطابقة البصمة الحيوية للجهاز' : 'Device Biometric Matched', 'success');
                setIsCheckingFingerprint(false);
            }, 1800);
        }
    }, [section, onUnlock, addToast, language, targetConfig.EMAIL]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === targetConfig.PASS) {
            onUnlock();
            addToast(language === 'ar' ? 'تم تسجيل الدخول الآمن' : 'Secure Login Success', 'success');
            
            if (!isDeviceTrusted(targetConfig.EMAIL)) {
                if (window.confirm(language === 'ar' ? 'هل تود حفظ هذا الجهاز كـ "جهاز موثوق" لتفعيل الدخول بالبصمة مستقبلاً؟' : 'Trust this device for future biometric login?')) {
                    trustDevice(targetConfig.EMAIL);
                }
            }
        } else {
            setError(language === 'ar' ? 'رمز الأمان غير مطابق' : 'Security token mismatch');
        }
    };

    if (isCheckingFingerprint) {
        return (
            <div className="fixed inset-0 bg-slate-950 z-[250] flex justify-center items-center backdrop-blur-3xl animate-fade-in">
                <div className="text-center text-white">
                    <div className="relative inline-block mb-12">
                        <div className="w-56 h-56 border-4 border-secondary border-t-transparent rounded-full animate-spin shadow-[0_0_100px_rgba(255,146,43,0.3)]"></div>
                        <FingerprintIcon className="w-32 h-32 text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    </div>
                    <h2 className="text-5xl font-black uppercase tracking-[0.4em] mb-4">Recognizing Device</h2>
                    <p className="text-2xl font-bold opacity-30">Delta Secure Link Encrypted</p>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/98 z-[110] flex justify-center items-center p-6 backdrop-blur-3xl animate-fade-in">
            <div className={`bg-white rounded-[4.5rem] shadow-3xl w-full max-w-lg p-16 relative border-t-[25px] ${targetConfig.THEME}`}>
                <button onClick={onClose} className="absolute top-10 end-12 text-gray-300 text-6xl font-black hover:text-black transition-all hover:rotate-90">&times;</button>
                
                <div className="text-center mb-14">
                    <div className="w-28 h-28 bg-gray-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-inner border border-gray-100">
                        <FingerprintIcon className="w-14 h-14 text-slate-800" />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-4">System Guard</h2>
                    <p className="text-sm font-bold text-gray-400">أدخل رمز الـ PIN المخصص للقسم</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10">
                    <input 
                        type="password" 
                        value={password} 
                        placeholder="•••••"
                        onChange={e => { setPassword(e.target.value); setError(''); }} 
                        className="w-full p-8 border-4 border-gray-100 rounded-[2.5rem] focus:border-secondary outline-none font-black text-center text-6xl tracking-[0.5em] bg-gray-50 text-slate-800 shadow-inner" 
                        autoFocus 
                    />
                    
                    {error && (
                        <div className="bg-red-50 text-red-600 p-6 rounded-2xl border-2 border-red-100 text-center font-black animate-bounce">
                            {error}
                        </div>
                    )}

                    <button type="submit" className="w-full bg-slate-900 text-white py-8 rounded-[2.5rem] font-black text-2xl shadow-3xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4">
                        {language === 'ar' ? 'مصادقة الهوية' : 'Authenticate Identity'}
                    </button>
                    
                    <div className="flex items-center justify-center gap-2 opacity-20">
                        <SparklesIcon className="w-4 h-4" />
                        <p className="text-[9px] font-black uppercase tracking-[0.2em]">Delta Stars Enterprise Shield Layer 4.0</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

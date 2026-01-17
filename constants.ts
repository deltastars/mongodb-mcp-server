const getThumb = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

export const COMPANY_INFO = {
    name: "متجر نجوم دلتا للتجارة",
    name_en: "Delta Stars Trading Store",
    slogan: "الجودة والمعايير العالمية.. مباشرة من المزرعة إلى مائدتكم.",
    slogan_en: "Quality and Global Standards.. Straight from the Farm to Your Table.",
    phone: "00966920023204",
    whatsapp: "00966558828009",
    email: "INFO@DELTASTARS-KSA.COM",
    address: "المملكة العربية السعودية، جدة، شارع المنار",
    address_en: "Al Manar Street, Jeddah, Saudi Arabia",
    map_url: "https://maps.app.goo.gl/ED98cFHGW5UJYxjx7",
    website: "https://deltastars-ksa.com/ar/",
    logo_url: getThumb("1-0qvsPmpVVnWdGJHrlJ4rbtecG-i5n4l"),
    category_image: getThumb("1QVbjijPMm_QmQr1PmnVLfEteegEVEREu"),
    wide_banner_url: getThumb("1wK2o57aJXCLzoZtLMzDME7BQbJm4-Z8e"),
    ui_sample_url: "https://i.postimg.cc/DWGhj4Zs/wajht-lshasht-kmbywtr-alwajhat-mntjat-mtjr-deltastars.png",
    computer_display_url: getThumb("1dPm-9vBMqR1Ae9T6VkzlgT2IJf3no-F3"),
    partners_url: getThumb("1ZxOTVQCjdFZBBUY0DxSIH_f3hO4v7AiI"),
    official_video_id: "1aCZA6ZZn2_EG97MeqqRKmof6MvmISVX5",
    bank: {
        name: "البنك العربي - فرع الرحاب",
        name_en: "Arab Bank - Rehab Branch",
        account_name: "شركة نجوم دلتا للتجارة",
        account_name_en: "Delta Stars Trading Company",
        account_number: "0108095516770029",
        iban: "SA4730400108095516770029"
    }
}

export const PARTNERS_LIST = [
    "Hilton hotel", "Waldorf Astoria", "RoseWood hotel", "Voco Hotel", 
    "Holiday Inn hotel", "Centro Jeddah", "Millennium Jeddah", "Hyatt Regency", 
    "Wirgan", "بنده Panda", "الراية Alraya", "Manuel مانويل", "الدمام Duka", 
    "ابراج هايبر ماركت", "أسواق المزرعة", "الخطوط السعودية للطيران"
];

export const DEFAULT_SHOWROOM_ITEMS = [
    { 
        id: 'partners-grid-final', 
        title_ar: 'شركاء النجاح الاستراتيجيين', 
        title_en: 'Strategic Success Partners',
        description_ar: 'نعتز بثقة كبرى الفنادق والهايبر ماركت والخطوط الجوية في المملكة العربية السعودية.',
        description_en: 'We take pride in the trust of major hotels, hypermarkets, and airlines in KSA.',
        image: COMPANY_INFO.partners_url,
        section_ar: 'الشركاء',
        section_en: 'Partners'
    },
    { 
        id: 'dates-lux-final', 
        title_ar: 'قسم التمور الفاخرة', 
        title_en: 'Premium Dates Gallery',
        description_ar: 'أفخر أنواع السكري والخلاص المجهز بأعلى معايير الجودة العالمية.',
        description_en: 'Finest Sukkari and Khalas prepared with global quality standards.',
        image: 'https://i.postimg.cc/tZbKBr8H/1760821306385-120345.png',
        section_ar: 'التمور',
        section_en: 'Dates'
    },
    { 
        id: 'tech-display-1', 
        title_ar: 'حلول التوريد الرقمية', 
        title_en: 'Digital Supply Solutions',
        description_ar: 'نظام إدارة لوجستي متكامل لضمان دقة وسرعة التوريد لكافة العملاء.',
        description_en: 'Integrated logistics management system ensuring delivery precision.',
        image: COMPANY_INFO.computer_display_url,
        section_ar: 'التقنية',
        section_en: 'Technology'
    },
    { 
        id: 'fleet-ready-final', 
        title_ar: 'الأسطول اللوجستي المبرد', 
        title_en: 'Refrigerated Logistics Fleet',
        description_ar: 'أسطول متكامل مجهز بأحدث تقنيات التبريد لضمان وصول المنتجات طازجة.',
        description_en: 'Integrated fleet equipped with latest cooling technologies.',
        image: 'https://i.postimg.cc/f3Y4j4qW/1760821306415-120347.jpg',
        section_ar: 'اللوجستيات',
        section_en: 'Logistics'
    },
    { 
        id: 'quality-assurance-final', 
        title_ar: 'رقابة الجودة الصارمة', 
        title_en: 'Strict Quality Control',
        description_ar: 'فحص وتغليف احترافي يضمن سلامة وجودة كل حبة تصل لعملائنا.',
        description_en: 'Professional inspection and packaging ensuring safety and quality.',
        image: 'https://i.postimg.cc/BLCdkTGL/1760821306773-120426.png',
        section_ar: 'الجودة',
        section_en: 'Quality'
    },
    { 
        id: 'interface-preview', 
        title_ar: 'واجهة تجربة المستخدم', 
        title_en: 'User Experience Interface',
        description_ar: 'تطوير مستمر للواجهات الرقمية لتسهيل عمليات الطلب والمتابعة للشركات.',
        description_en: 'Continuous development of digital interfaces for corporations.',
        image: COMPANY_INFO.ui_sample_url,
        section_ar: 'التقنية',
        section_en: 'Technology'
    }
];

export const SOCIAL_LINKS = {
    facebook: "https://www.facebook.com/share/1DNx4PiyLU/",
    facebook_group: "https://facebook.com/groups/814288629749436/?mibextid=rS40aB7S9Ucbxw6v",
    instagram: "https://www.instagram.com/deltastars7?utm_source=qr&igsh=MWRkZW9qZzZzM3d4dA==",
    snapchat: "https://www.snapchat.com/add/deltastars25?share_id=PN1go6zbu_A&locale=ar-EG",
    tiktok: "https://vm.tiktok.com/ZSH7p6tYpvBof-1se5K/",
    youtube: "https://youtube.com/@deltastars1?si=4oAuDRgASyS4Hu_i",
    telegram: "https://t.me/deltastars1",
    whatsapp_community: "https://chat.whatsapp.com/J1mZCFjYprmFHveSyTjpMw?mode=ems_wa_t",
    linktree: "https://linktr.ee/deltastar6"
}
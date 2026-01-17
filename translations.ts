
export type Translation = { [key: string]: any };

export const translations: { [key: string]: Translation } = {
  ar: {
    common: {
      currency: "ر.س",
      loading: "جاري التحميل...",
      error: "حدث خطأ ما، يرجى المحاولة لاحقاً",
      save: "حفظ التغييرات",
      cancel: "إلغاء",
      delete: "حذف",
      confirm: "تأكيد",
      back: "عودة",
      search: "بحث عن منتج...",
      id: "المعرف",
      status: "الحالة",
      date: "التاريخ",
      amount: "المبلغ",
      actions: "الإجراءات",
      view: "عرض",
      edit: "تعديل",
      all: "الكل",
      ok: "موافق",
      close: "إغلاق",
      add: "إضافة جديد",
      update: "تحديث"
    },
    header: {
      storeName: "متجر نجوم دلتا للتجارة",
      storeTitle: "متجر نجوم دلتا للتجارة | الجودة من المزرعة للمائدة",
      navLinks: {
        home: "الرئيسية",
        products: "سوق المنتجات",
        showroom: "صالة العرض",
        wishlist: "المفضلة",
        dashboard: "الإدارة المركزية",
        vipPortal: "بوابة العملاء",
        trackOrder: "تتبع طلبك"
      }
    },
    home: {
      hero: {
        badge: "المورد المعتمد الأول بالمملكة",
        button: "تسوق الآن",
        vipButton: "بوابة العملاء"
      },
      categories: {
        title: "أقسام المتجر المتخصصة",
        subtitle: "اختر القسم المطلوب للوصول المباشر للمنتجات والأسعار الخاصة"
      },
      partners: {
        title: "نعتز بثقتهم - شركاء النجاح",
        subtitle: "نورد أجود المنتجات الطازجة لكبرى المنشآت الوطنية والعالمية"
      }
    },
    categories: {
      fruits: "فواكه طازجة",
      vegetables: "خضروات",
      herbs: "ورقيات طازجة",
      qassim: "منتجات القصيم",
      dates: "تمور فاخرة",
      packages: "البكجات والتغليف",
      seasonal: "أصناف موسمية",
      nuts: "مكسرات",
      flowers: "ورود وهدايا",
      custom: "طلبات خاصة"
    }
  },
  en: {
    common: {
      currency: "SAR",
      loading: "Loading...",
      header: {
        navLinks: {
          vipPortal: "Customers Portal"
        }
      }
    },
    header: {
      storeName: "Delta Stars Store",
      navLinks: {
        home: "Home",
        products: "Market",
        showroom: "Showroom",
        wishlist: "Wishlist",
        dashboard: "Admin Center",
        vipPortal: "Customers Portal",
        trackOrder: "Track Order"
      }
    },
    home: {
      hero: {
        button: "Shop Now",
        vipButton: "Customers Portal"
      },
      partners: {
        title: "Success Partners",
        subtitle: "Supplying premium products to leading national & global entities"
      }
    }
  }
};

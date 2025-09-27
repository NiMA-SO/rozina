import makeup from "./../../public/menu/makeup.svg";
import skinCare from "./../../public/menu/skin-care.svg";
import hairCare from "./../../public/menu/hair-care.svg";
import personalHygiene from "./../../public/menu/personal-hygiene.svg";
import perfume from "./../../public/menu/perfume.svg";
import appliances from "./../../public/menu/appliances.svg";
import { StaticImageData } from "next/image";

export type NavItem = {
  id: string; // از رشته استفاده می‌کنیم تا ترکیب‌ IDs آسان باشد (مثال: "1-2-3")
  href?: string;
  icon?: string | StaticImageData;
  label: string;
  children?: NavItem[];
};

export const categories: NavItem[] = [
  {
    id: "1",
    href: "/category/makeup",
    icon: makeup,
    label: "لوازم آرایشی",
    children: [
      {
        id: "1-1",
        label: "آرایش ابرو",
        icon: makeup,
        href: "/category/makeup/eyebrow",
        children: [
          { id: "1-1-1", label: "موچین، قیچی و تیغ ابرو" },
          { id: "1-1-2", label: "مداد ابرو" },
          { id: "1-1-3", label: "رنگ ابرو" },
          { id: "1-1-4", label: "ریمل ابرو" },
          { id: "1-1-5", label: "سایه ابرو" },
          { id: "1-1-6", label: "تقویت‌کننده ابرو" },
          { id: "1-1-7", label: "ژل و صابون ابرو" },
        ],
      },
      {
        id: "1-2",
        label: "آرایش چشم",
        icon: makeup,
        href: "/category/makeup/eye",
        children: [
          { id: "1-2-1", label: "مژه مصنوعی" },
          { id: "1-2-2", label: "مداد چشم" },
          { id: "1-2-3", label: "پاک‌کننده چشم" },
          { id: "1-2-4", label: "پرایمر چشم" },
          { id: "1-2-5", label: "خط چشم" },
          { id: "1-2-6", label: "ریمل" },
          { id: "1-2-7", label: "سایه چشم" },
          { id: "1-2-8", label: "فرمژه" },
          { id: "1-2-9", label: "لنز رنگی" },
          { id: "1-2-10", label: "تقویت‌کننده مژه" },
        ],
      },
      {
        id: "1-3",
        label: "آرایش صورت",
        icon: makeup,
        href: "/category/makeup/face",
        children: [
          { id: "1-3-1", label: "برنزر" },
          { id: "1-3-2", label: "پاک‌کننده آرایش" },
          { id: "1-3-3", label: "پرایمر صورت" },
          { id: "1-3-4", label: "پنکیک" },
          { id: "1-3-5", label: "رژگونه" },
          { id: "1-3-6", label: "فیکساتور" },
          { id: "1-3-7", label: "کانسیلر" },
          { id: "1-3-8", label: "کرم‌پودر" },
        ],
      },
      {
        id: "1-4",
        label: "آرایش ناخن",
        icon: makeup,
        href: "/category/makeup/nails",
        children: [
          { id: "1-4-1", label: "مراقبت ناخن" },
          { id: "1-4-2", label: "ناخن مصنوعی و چسب" },
          { id: "1-4-3", label: "سوهان و بافر" },
          { id: "1-4-4", label: "لاک پاک‌کن" },
          { id: "1-4-5", label: "لاک ناخن" },
        ],
      },
      {
        id: "1-5",
        label: "ابزار آرایشی",
        icon: makeup,
        href: "/category/makeup/tools",
        children: [
          { id: "1-5-1", label: "آیینه آرایشی" },
          { id: "1-5-2", label: "براش آرایشی" },
          { id: "1-5-3", label: "سوهان پا" },
          { id: "1-5-4", label: "کیف لوازم آرایش" },
          { id: "1-5-5", label: "چسب" },
          { id: "1-5-6", label: "پد آرایشی" },
        ],
      },
      {
        id: "1-6",
        label: "آرایش لب",
        icon: makeup,
        href: "/category/makeup/lips",
        children: [
          { id: "1-6-1", label: "برق لب" },
          { id: "1-6-2", label: "تینت لب" },
          { id: "1-6-3", label: "حجم‌دهنده لب" },
          { id: "1-6-4", label: "خط لب" },
          { id: "1-6-5", label: "رژلب جامد" },
          { id: "1-6-6", label: "رژلب مایع" },
          { id: "1-6-7", label: "ماسک لب" },
          { id: "1-6-8", label: "بالم و مرطوب‌کننده لب" },
        ],
      },
    ],
  },
  {
    id: "2",
    href: "/category/skin-care",
    icon: skinCare,
    label: "مراقبت پوست",
    children: [
      { id: "2-1", label: "پاکسازی و آماده‌سازی", href: "/shop/skin/cleansers" },
      { id: "2-2", label: "مرطوب‌کننده‌ها و آبرسان‌ها", href: "/shop/skin/moisturizers" },
      { id: "2-3", label: "محافظت (ضد آفتاب)", href: "/shop/skin/suncare" },
      { id: "2-4", label: "سرم‌ها و درمان‌ها", href: "/shop/skin/serums-treatments" },
      { id: "2-5", label: "ضدجوش و کنترل آکنه", href: "/shop/skin/acne" },
      { id: "2-6", label: "چشم و لب", href: "/shop/skin/eyes-lips" },
      { id: "2-7", label: "ماسک‌ها و لایه‌بردار", href: "/shop/skin/masks-exfoliants" },
      { id: "2-8", label: "ترمیم و مراقبت بدن", href: "/shop/skin/repair-body" },
      { id: "2-9", label: "پوشاننده‌ها", href: "/shop/skin/coverage" },
      { id: "2-10", label: "پکیج‌ها", href: "/shop/skin/kits" },
    ],
  },
  {
    id: "3",
    href: "/category/hair-care",
    icon: hairCare,
    label: "مراقبت مو",
    children: [
      { id: "3-1", label: "شامپوها", href: "/shop/hair/shampoos" },
      { id: "3-2", label: "نرم‌کننده‌ها", href: "/shop/hair/conditioners" },
      { id: "3-3", label: "روغن‌ها و تغذیه‌کننده‌ها", href: "/shop/hair/oils-nutrition" },
      { id: "3-4", label: "ماسک‌ها و ترمیم عمیق", href: "/shop/hair/masks" },
      { id: "3-5", label: "درمان‌ها، سرم و تقویت", href: "/shop/hair/treatments-serums" },
      { id: "3-6", label: "مراقبت پوست سر", href: "/shop/hair/scalp-care" },
      { id: "3-7", label: "حجم‌دهنده و درخشان‌کننده", href: "/shop/hair/volume-shine" },
      { id: "3-8", label: "حالت‌دهنده‌ها و فینیشینگ", href: "/shop/hair/styling" },
      { id: "3-9", label: "ابزار و لوازم جانبی", href: "/shop/hair/tools" },
      { id: "3-10", label: "رنگ و درمان‌های شیمیایی", href: "/shop/hair/color" },
      { id: "3-11", label: "پکیج‌ها و روتین‌ها", href: "/shop/hair/kits" },
    ],
  },
  {
    id: "4",
    href: "/category/personal-hygiene",
    icon: personalHygiene,
    label: "لوازم بهداشتی",
    children: [
      { id: "4-1", label: "بهداشت و مراقبت جنسی", href: "/shop/hygiene/sexual-health" },
      { id: "4-2", label: "دستمال مرطوب", href: "/shop/hygiene/wet-wipes" },
      { id: "4-3", label: "محصولات بهداشتی بانوان", href: "/shop/hygiene/feminine-care" },
      { id: "4-4", label: "لوازم بهداشتی کودک", href: "/shop/hygiene/baby-care" },
      { id: "4-5", label: "شامپو و مراقبت مو", href: "/shop/hygiene/hair-care" },
    ],
  },
  { id: "5", href: "/category/perfume", icon: perfume, label: "عطر و ادکلن زنانه" },
  // نمونه برای لوازم برقی اگر خواستید فعالش کنید
  // { id: "6", href: "/category/appliances", icon: appliances, label: "لوازم شخصی برقی" },
];
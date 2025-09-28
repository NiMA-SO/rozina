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
      {
        id: "2-1",
        label: "مراقبت صورت",
        icon: "FaceIcon",
        href: "/shop/skin/face-care",
        children: [
          { id: "2-1-1", label: "کرم روز" },
          { id: "2-1-2", label: "کرم شب" },
          { id: "2-1-3", label: "مرطوب‌کننده" },
          { id: "2-1-4", label: "آبرسان" },
          { id: "2-1-5", label: "روشن‌کننده" },
          { id: "2-1-6", label: "سرم صورت" },
          { id: "2-1-7", label: "سرم پوست" },
          { id: "2-1-8", label: "ضد لک" },
          { id: "2-1-9", label: "ضد چروک" },
          { id: "2-1-10", label: "لیفتینگ" },
          { id: "2-1-11", label: "تقویت کننده پوست" },
          { id: "2-1-12", label: "ضد آکنه" },
          { id: "2-1-13", label: "کرم سفت کننده پوست" },
          { id: "2-1-14", label: "کرم پوشاننده" },
          { id: "2-1-15", label: "کرم و ژل ضد جوش" },
          { id: "2-1-16", label: "کرم تصفیه کننده پوست" },
          { id: "2-1-17", label: "مکمل پوست" },
          { id: "2-1-18", label: "پکیج مراقبت پوست" },
        ],
      },

      {
        id: "2-2",
        label: "پاک‌کننده و شوینده",
        icon: "CleanserIcon",
        href: "/shop/skin/cleansers",
        children: [
          { id: "2-2-1", label: "پاک کننده" },
          { id: "2-2-2", label: "لایه‌بردار" },
          { id: "2-2-3", label: "ماسک ورقه‌ای" },
          { id: "2-2-4", label: "ماسک صورت و بدن" },
        ],
      },

      {
        id: "2-3",
        label: "مراقبت چشم و ابرو",
        icon: "EyeIcon",
        href: "/shop/skin/eyes-eyebrow",
        children: [
          { id: "2-3-1", label: "کرم دور چشم" },
          { id: "2-3-2", label: "ضد پف و تیرگی دور چشم" },
          { id: "2-3-3", label: "محصولات مراقبتی ابرو" },
          { id: "2-3-4", label: "سرم تقویت ابرو / روغن رشد ابرو" },
        ],
      },

      {
        id: "2-4",
        label: "مراقبت بدن",
        icon: "BodyIcon",
        href: "/shop/skin/body-care",
        children: [
          { id: "2-4-1", label: "کرم و لوسیون بدن" },
          { id: "2-4-2", label: "کرم و ژل ترمیم کننده" },
          { id: "2-4-3", label: "ضد درد، سوختگی و التهاب" },
          { id: "2-4-4", label: "کرم بچگانه" },
        ],
      },

      {
        id: "2-5",
        label: "مراقبت لب",
        icon: "LipIcon",
        href: "/shop/skin/lip-care",
        children: [
          { id: "2-5-1", label: "مراقبت لب / بالم لب" },
          { id: "2-5-2", label: "ماسک لب" },
        ],
      },

      {
        id: "2-6",
        label: "مراقبت دست و ناخن",
        icon: "HandIcon",
        href: "/shop/skin/hand-nail-care",
        children: [
          { id: "2-6-1", label: "کرم دست" },
          { id: "2-6-2", label: "محصولات مراقبت ناخن" },
          { id: "2-6-3", label: "کرم و لوسیون (دست/ناخن)" },
        ],
      },

      {
        id: "2-7",
        label: "مراقبت پا",
        icon: "FootIcon",
        href: "/shop/skin/foot-care",
        children: [
          { id: "2-7-1", label: "کرم پا / ترک پا" },
          { id: "2-7-2", label: "ماسک پا" },
        ],
      },
    ],
  },
  {
    id: "3",
    href: "/category/hair-care",
    icon: hairCare,
    label: "مراقبت مو",
    children: [
      {
        id: "3-1",
        label: "شامپو",
        icon: "ShampooIcon",
        href: "/shop/hair/shampoos",
        children: [
          {
            id: "3-1-1",
            label: "شامپو معمولی",
            href: "/shop/hair/shampoos/regular",
          },
          {
            id: "3-1-2",
            label: "شامپو ضد شوره",
            href: "/shop/hair/shampoos/anti-dandruff",
          },
          {
            id: "3-1-3",
            label: "شامپو ضد ریزش",
            href: "/shop/hair/shampoos/anti-hairfall",
          },
          {
            id: "3-1-4",
            label: "شامپو ضد خارش",
            href: "/shop/hair/shampoos/anti-itch",
          },
          {
            id: "3-1-5",
            label: "شامپو ضد موخوره",
            href: "/shop/hair/shampoos/anti-split-ends",
          },
          {
            id: "3-1-6",
            label: "شامپو ضد وز",
            href: "/shop/hair/shampoos/anti-frizz",
          },
        ],
      },
      {
        id: "3-2",
        label: "مراقبت از مو",
        icon: "TreatmentIcon",
        href: "/shop/hair/care",
        children: [
          {
            id: "3-2-1",
            label: "آبرسان مو",
            href: "/shop/hair/care/hydrators",
          },
          {
            id: "3-2-2",
            label: "نرم‌کننده مو",
            href: "/shop/hair/care/conditioners",
          },
          { id: "3-2-3", label: "ماسک مو", href: "/shop/hair/care/masks" },
          { id: "3-2-4", label: "کراتین مو", href: "/shop/hair/care/keratin" },
          {
            id: "3-2-5",
            label: "درمان و تقویت مو",
            href: "/shop/hair/care/treatments",
          },
          {
            id: "3-2-6",
            label: "سرم و اسپری مو (محصولات درمانی)",
            href: "/shop/hair/care/serums-sprays",
          },
          { id: "3-2-7", label: "روغن مو", href: "/shop/hair/care/oils" },
          {
            id: "3-2-8",
            label: "تغذیه‌کننده / تقویت‌کننده",
            href: "/shop/hair/care/nutrition-strength",
          },
          { id: "3-2-9", label: "کرم مو", href: "/shop/hair/care/creams" },
          {
            id: "3-2-10",
            label: "مکمل مو",
            href: "/shop/hair/care/supplements",
          },
        ],
      },
      {
        id: "3-3",
        label: "زیبایی مو",
        icon: "StyleIcon",
        href: "/shop/hair/beauty",
        children: [
          { id: "3-3-1", label: "حجم‌دهنده", href: "/shop/hair/beauty/volume" },
          {
            id: "3-3-2",
            label: "درخشان‌کننده",
            href: "/shop/hair/beauty/shine",
          },
          {
            id: "3-3-3",
            label: "حالت‌دهنده مو",
            href: "/shop/hair/beauty/styling-products",
          },
          {
            id: "3-3-4",
            label: "اسپری حالت‌دهنده / فیکس",
            href: "/shop/hair/beauty/sprays",
          },
          {
            id: "3-3-5",
            label: "رنگ مو",
            href: "/shop/hair/beauty/hair-color",
          },
        ],
      },
      {
        id: "3-4",
        label: "ابزار آرایش و پیرایش",
        icon: "ToolIcon",
        href: "/shop/hair/tools",
        children: [
          { id: "3-4-1", label: "اتو مو", href: "/shop/hair/tools/flat-irons" },
          {
            id: "3-4-2",
            label: "ابزار جانبی مو (برس، کلیپس، کش و ...)",
            href: "/shop/hair/tools/accessories",
          },
          {
            id: "3-4-3",
            label: "ابزار برقی (سشوار، فرکننده و ...)",
            href: "/shop/hair/tools/electric",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    href: "/category/personal-hygiene",
    icon: personalHygiene,
    label: "لوازم بهداشتی",
    children: [
      {
        id: "4-1",
        label: "بهداشت و مراقبت جنسی",
        icon: "ShieldHeartIcon",
        href: "/shop/hygiene/sexual-health",
        children: [
          {
            id: "4-1-1",
            label: "ژل بهداشتی/لُبریکنت",
            href: "/shop/hygiene/sexual-health/gels",
          },
          {
            id: "4-1-2",
            label: "کاندوم",
            href: "/shop/hygiene/sexual-health/condoms",
          },
          {
            id: "4-1-3",
            label: "کاندوم خاردار",
            href: "/shop/hygiene/sexual-health/textured-condoms",
          },
          {
            id: "4-1-4",
            label: "اسپری (محصولات ویژه)",
            href: "/shop/hygiene/sexual-health/sprays",
          },
        ],
      },
      {
        id: "4-2",
        label: "دستمال مرطوب",
        icon: "WipeIcon",
        href: "/shop/hygiene/wet-wipes",
        children: [
          {
            id: "4-2-1",
            label: "دستمال مرطوب آنتی‌باکتریال",
            href: "/shop/hygiene/wet-wipes/antibacterial",
          },
          {
            id: "4-2-2",
            label: "دستمال مرطوب بانوان",
            href: "/shop/hygiene/wet-wipes/feminine",
          },
          {
            id: "4-2-3",
            label: "دستمال مرطوب کودک",
            href: "/shop/hygiene/wet-wipes/baby",
          },
          {
            id: "4-2-4",
            label: "دستمال مرطوب بزرگسالان",
            href: "/shop/hygiene/wet-wipes/adult",
          },
          {
            id: "4-2-5",
            label: "دستمال مرطوب پاک‌کننده آرایش",
            href: "/shop/hygiene/wet-wipes/makeup-remover",
          },
        ],
      },
      {
        id: "4-3",
        label: "محصولات بهداشتی بانوان",
        icon: "FemaleIcon",
        href: "/shop/hygiene/feminine-care",
        children: [
          {
            id: "4-3-1",
            label: "دستمال بانوان",
            href: "/shop/hygiene/feminine-care/wipes",
          },
          {
            id: "4-3-2",
            label: "نوار بهداشتی",
            href: "/shop/hygiene/feminine-care/pads",
          },
          {
            id: "4-3-3",
            label: "تیغ اصلاح زنانه",
            href: "/shop/hygiene/feminine-care/razors",
          },
          {
            id: "4-3-4",
            label: "ژل بهداشتی بانوان",
            href: "/shop/hygiene/feminine-care/intimate-gels",
          },
        ],
      },
      {
        id: "4-4",
        label: "شامپو و مراقبت مو",
        icon: "ShampooIcon",
        href: "/shop/hygiene/hair-care",
        children: [
          {
            id: "4-4-1",
            label: "شامپو",
            href: "/shop/hygiene/hair-care/shampoos",
          },
          {
            id: "4-4-2",
            label: "لوسیون مو",
            href: "/shop/hygiene/hair-care/lotions",
          },
          {
            id: "4-4-3",
            label: "شامپو بچگانه",
            href: "/shop/hygiene/hair-care/baby-shampoos",
          },
          {
            id: "4-4-4",
            label: "سرم و اسپری مو",
            href: "/shop/hygiene/hair-care/serums-sprays",
          },
          {
            id: "4-4-5",
            label: "تقویت‌کننده مو",
            href: "/shop/hygiene/hair-care/strengtheners",
          },
        ],
      },
    ],
  },
  {
    id: "5",
    href: "/category/perfume",
    icon: perfume,
    label: "عطر و ادکلن زنانه",
  },
  // نمونه برای لوازم برقی اگر خواستید فعالش کنید
  // { id: "6", href: "/category/appliances", icon: appliances, label: "لوازم شخصی برقی" },
];

export interface NavSubItem {
  name: string;
  href: string;
  target?: string;
}

export interface NavItem {
  name: string;
  href?: string;
  children?: NavSubItem[];
  target?: string;
}

export const navItems: NavItem[] = [
  {
    name: "Kurullar",
    children: [
      { name: "Düzenleme Kurulu", href: "/duzenleme-kurulu" },
      { name: "Bilim & Danışma Kurulu", href: "/bilim-danisma-kurulu" }
    ]
  },
  { name: "Tam Metin Gönderimi", href: "/tam-metin-gonderimi" },
  {
    name: "Program",
    children: [
      { name: "Yüzyüze", href: "/mestek-26-program.pdf", target: "_blank" },
      { name: "Çevrimiçi", href: "/mestek-26-cevrimici-program.pdf", target: "_blank" }
    ]
  },
  { name: "Katılım Payı", href: "/katilim-payi" },
  { name: "Hakkında", href: "/sempozyum-hakkinda" },
  { name: "Galeri", href: "/galeri" },
  { name: "Ulaşım ve Konaklama", href: "/ulasim-ve-konaklama" },
  { name: "İletişim", href: "/iletisim" }
];

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
  { name: "Katılım Payı", href: "/katilim-payi" },
  { name: "Akademik Teşvik", href: "/gorevlendirme.pdf", target: "_blank" },
  { name: "Ulaşım ve Konaklama", href: "/ulasim-ve-konaklama" },
  { name: "İletişim", href: "/iletisim" }
];

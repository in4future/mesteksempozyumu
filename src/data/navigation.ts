export interface NavSubItem {
  name: string;
  href: string;
}

export interface NavItem {
  name: string;
  href?: string;
  children?: NavSubItem[];
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
  { name: "Yazım Kuralları", href: "/yazim-kurallari" },
  { name: "Katılım Payı", href: "/katilim-payi" },
  { name: "İletişim", href: "/iletisim" }
];

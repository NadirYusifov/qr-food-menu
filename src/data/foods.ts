import type { ReactNode } from "react";

export interface Foods {
  Kateqoriyası: string,
  Tərkibi: ReactNode,
  Ad: string,
}

export const data: Foods[] = [
  {
    Kateqoriyası: "Milli yeməklər",
    Tərkibi: ["Quzu əti", "Düyü", "Soğan", "Şabalıd", "Ərik qurusu"],
    Ad: "Plov"
  },
  {
    Kateqoriyası: "Milli yeməklər",
    Tərkibi: ["Quzu əti", "Kartof", "Soğan", "Pomidor", "Bibər"],
    Ad: "Piti"
  },
  {
    Kateqoriyası: "Şorbalar",
    Tərkibi: ["Mal əti", "Noxud", "Kartof", "Soğan", "Keşniş"],
    Ad: "Bozbaş"
  },
  {
    Kateqoriyası: "Milli yeməklər",
    Tərkibi: ["Quzu əti", "Soğan", "Şabalıd", "Qatıq", "Ədviyyatlar"],
    Ad: "Səbzi qovurma"
  },
  {
    Kateqoriyası: "Xəmir yeməkləri",
    Tərkibi: ["Un", "Mal əti", "Soğan", "Duz", "İstiot"],
    Ad: "Düşbərə"
  },
  {
    Kateqoriyası: "Salatlar",
    Tərkibi: ["Pomidor", "Xiyar", "Soğan", "Göyərti", "Duz"],
    Ad: "Çoban salatı"
  },
  {
    Kateqoriyası: "Fast food",
    Tərkibi: ["Toyuq əti", "Lavaş", "Pomidor", "Xiyar", "Sous"],
    Ad: "Toyuq dönər"
  },
  {
    Kateqoriyası: "Şorbalar",
    Tərkibi: ["Qatıq", "Düyü", "Yumurta", "Un", "Göyərti"],
    Ad: "Dovğa"
  },
  {
    Kateqoriyası: "Xəmir yeməkləri",
    Tərkibi: ["Un", "Qoyun əti", "Soğan", "Duz", "İstiot"],
    Ad: "Qutab"
  },
  {
    Kateqoriyası: "Milli yeməklər",
    Tərkibi: ["Badımcan", "Pomidor", "Bibər", "Sarımsaq", "Duz"],
    Ad: "Badımcan dolması"
  }
]
import type { ReactNode } from "react";

export interface Foods {
  category: string,
  ingedrients: ReactNode,
  name: string,
}

export const data: Foods[] = [
  {
    category: "Milli yeməklər",
    ingedrients: ["Quzu əti", "Düyü", "Soğan", "Şabalıd", "Ərik qurusu"],
    name: "Plov"
  },
  {
    category: "Milli yeməklər",
    ingedrients: ["Quzu əti", "Düyü", "Soğan", "Şabalıd", "Ərik qurusu"],
    name: "Yarpaq dolması"
  },
  {
    category: "Milli yeməklər",
    ingedrients: ["Quzu əti", "Kartof", "Soğan", "Pomidor", "Bibər"],
    name: "Piti"
  },
  {
    category: "Şorbalar",
    ingedrients: ["Mal əti", "Noxud", "Kartof", "Soğan", "Keşniş"],
    name: "Bozbaş"
  },
  {
    category: "Şorbalar",
    ingedrients: ["Mərci", "Kök", "Kartof", "Tomat pastası", "Duz"],
    name: "Mərci"
  },
  {
    category: "Milli yeməklər",
    ingedrients: ["Quzu əti", "Soğan", "Şabalıd", "Qatıq", "Ədviyyatlar"],
    name: "Səbzi qovurma"
  },
  {
    category: "Xəmir yeməkləri",
    ingedrients: ["Un", "Mal əti", "Soğan", "Duz", "İstiot"],
    name: "Düşbərə"
  },
  {
    category: "Salatlar",
    ingedrients: ["Pomidor", "Xiyar", "Soğan", "Göyərti", "Duz"],
    name: "Çoban Salatları"
  },
  {
    category: "Salatlar",
    ingedrients: ["Pomidor", "Xiyar", "Soğan", "Göyərti", "Zeytun yağı"],
    name: "Çoban Salatları"
  },
  {
    category: "Salatlar",
    ingedrients: ["Toyuq filesi", "Kahı", "Parmezan pendiri", "Suxari", "Sezar sousu"],
    name: "Sezar Salatları"
  },
  {
    category: "Salatlar",
    ingedrients: ["Qaynadılmış kartof", "Yumurta", "Noxud", "Turşu xiyar", "Mayonez"],
    name: "Paytaxt Salatları"
  },
  {
    category: "Salatlar",
    ingedrients: ["Pomidor", "Xiyar", "Feta pendiri", "Zeytun", "Soğan"],
    name: "Yunan Salatları"
  },
  {
    category: "Salatlar",
    ingedrients: ["Toyuq filesi", "Qarğıdalı", "Göbələk", "Yumurta", "Mayonez"],
    name: "Toyuqlu Salatlar"
  },
  {
    category: "Salatlar",
    ingedrients: ["Ton balığı", "Kahı", "Pomidor", "Yumurta", "Zeytun"],
    name: "Ton balıqlı Salatlar"
  },
  {
    category: "Salatlar",
    ingedrients: ["Rəngli Bibər", "Mayonez/Zeytun yaği", "Qarıdağlı", "Toyuq filesi","Şüyüd"],
    name: "Vitamin Salatları"
  },
  {
    category: "Dönər",
    ingedrients: ["Mal əti", "Lavaş", "Pomidor", "Xiyar", "Soğan", "Sous"],
    name: "Mal əti lavaş dönər"
  },
  {
    category: "Dönər",
    ingedrients: ["Toyuq əti", "Lavaş", "Pomidor", "Xiyar", "Kahı", "Sarımsaqlı sous"],
    name: "Toyuq lavaş dönər"
  },
  {
    category: "Dönər",
    ingedrients: ["Mal əti", "Çörək", "Pomidor", "Xiyar", "Soğan", "Sous"],
    name: "Mal əti çörək dönər"
  },
  {
    category: "Dönər",
    ingedrients: ["Toyuq əti", "Çörək", "Pomidor", "Kahı", "Mayonez"],
    name: "Toyuq çörək dönər"
  },
  {
    category: "Dönər",
    ingedrients: ["Mal əti", "Düyü", "Kartof fri", "Pomidor", "Sous"],
    name: "Mal əti porsiyon dönər"
  },
  {
    category: "Dönər",
    ingedrients: ["Toyuq əti", "Düyü", "Kartof fri", "Turşu xiyar", "Sous"],
    name: "Toyuq porsiyon dönər"
  },
  {
    category: "Dönər",
    ingedrients: ["Mal əti", "Lavaş", "Kaşar pendiri", "Pomidor", "Sous"],
    name: "Kaşarlı dönər"
  },
  {
    category: "Dönər",
    ingedrients: ["Toyuq əti", "Lavaş", "Kaşar pendiri", "Göbələk", "Sous"],
    name: "Kaşarlı toyuq dönər"
  },
  {
    category: "Dönər",
    ingedrients: ["Mal əti", "Lavaş", "Kartof fri", "Turşu xiyar", "Sous"],
    name: "Kartoflu dönər"
  },
  {
    category: "Dönər",
    ingedrients: ["Mal əti", "Lavaş", "Bekon", "Kaşar pendiri", "BBQ sousu"],
    name: "BBQ dönər"
  },
  {
    category: "Dönər",
    ingedrients: ["Mal əti", "Lavaş", "Pomidor", "Xiyar", "Feta pendiri", "Zeytun"],
    name: "Yunan dönəri"
  },
  {
    category: "Dönər",
    ingedrients: ["Toyuq əti", "Lavaş", "Kartof fri", "Kaşar pendiri", "Mayonez"],
    name: "Mega toyuq dönər"
  },
  {
    category: "Dönər",
    ingedrients: ["Toyuq əti", "Lavaş", "Pomidor", "Qırmızı soğan", "BBQ sousu"],
    name: "BBQ toyuq dönər"
  },
  {
    category: "Şorbalar",
    ingedrients: ["Qatıq", "Düyü", "Yumurta", "Un", "Göyərti"],
    name: "Dovğa"
  },
  {
    category: "Xəmir yeməkləri",
    ingedrients: ["Un", "Qoyun əti", "Soğan", "Duz", "İstiot"],
    name: "Qutab"
  },
  {
    category: "Milli yeməklər",
    ingedrients: ["Badımcan", "Pomidor", "Bibər", "Sarımsaq", "Duz"],
    name: "Badımcan dolması"
  },
  {
    category: "İçkilər",
    ingedrients: ["Qəhvə", "Süd", "Şəkər"],
    name: "Esperesso"
  },
  {
    category: "İçkilər",
    ingedrients: ["Qəhvə", "Süd", "Şəkər"],
    name: "Americano"
  },
  {
    category: "İçkilər",
    ingedrients: ["Qəhvə", "Süd", "Şəkər"],
    name: "Latte"
  },
  {
    category: "İçkilər",
    ingedrients: ["Su"],
    name: "Qazsız su"
  },
  {
    category: "İçkilər",
    ingedrients: ["Su"],
    name: "Qazlı su"
  },
  {
    category: "İçkilər",
    ingedrients: ["Süd", "Duz"],
    name: "Sadə ayran"
  },
  {
    category: "Səhər yeməyi",
    ingedrients: ["Yumurta", "Pomidor", "Bibər", "Duz"],
    name: "Pomidor yumurta"
  },
  {
    category: "Səhər yeməyi",
    ingedrients: ["Yumurta", "Pomidor", "Yaşıl bibər", "Kərə yağı"],
    name: "Pomidor-yumurta"
  },
  {
    category: "Səhər yeməyi",
    ingedrients: ["Yumurta", "Süd", "Duz", "Kərə yağı"],
    name: "Omlet"
  },
  {
    category: "Səhər yeməyi",
    ingedrients: ["Un", "Süd", "Yumurta", "Şəkər"],
    name: "Pankek"
  },
  {
    category: "Səhər yeməyi",
    ingedrients: ["Un", "Süd", "Yumurta", "Duz"],
    name: "Blincik"
  },
  {
    category: "Səhər yeməyi",
    ingedrients: ["Kəsmik", "Yumurta", "Un", "Şəkər"],
    name: "Sırniki"
  },
  {
    category: "Səhər yeməyi",
    ingedrients: ["Kartof", "Yumurta", "Soğan", "Duz"],
    name: "Kartoflu yumurta"
  },
  {
    category: "Səhər yeməyi",
    ingedrients: ["Sosiska", "Yumurta", "Kərə yağı"],
    name: "Sosiska-yumurta"
  },
  {
    category: "Səhər yeməyi",
    ingedrients: ["Lavaş", "Pendir", "Kərə yağı"],
    name: "Pendirli lavaş"
  },
  {
    category: "Səhər yeməyi",
    ingedrients: ["Yumurta", "Süd", "Çörək", "Darçın"],
    name: "Fransız tostu"
  },
  {
    category: "Səhər yeməyi",
    ingedrients: ["Yulaf", "Süd", "Banan", "Bal"],
    name: "Yulaf sıyığı"
  },
  {
    category: "Səhər yeməyi",
    ingedrients: ["Süd", "Düyü", "Şəkər", "Kərə yağı"],
    name: "Südlü düyü sıyığı"
  },
  {
    category: "Səhər yeməyi",
    ingedrients: ["Pendir", "Pomidor", "Çörək", "Oreqano"],
    name: "Pendirli tost"
  },
  {
    category: "Səhər yeməyi",
    ingedrients: ["Göbələk", "Yumurta", "Kərə yağı", "Duz"],
    name: "Göbələkli omlet"
  },
  {
    category: "Səhər yeməyi",
    ingedrients: ["İspanaq", "Yumurta", "Pendir", "Kərə yağı"],
    name: "İspanaqlı omlet"
  },
  {
    category: "Səhər yeməyi",
    ingedrients: ["Kolbasa", "Pendir", "Çörək", "Pomidor"],
    name: "Kolbasalı sendviç"
  },
  {
    category: "Səhər yeməyi",
    ingedrients: ["Bal", "Qaymaq", "Çörək"],
    name: "Bal-qaymaq"
  },
  {
    category: "İçkilər",
    ingedrients: ["Süd", "Su", "Nanə", "Duz"],
    name: "Nanəli ayran"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Un", "Su", "Pendir", "Duz"],
    name: "Marqarita"
  },
  {
    category: "Kabablar",
    ingedrients: ["Quzu əti", "Soğan", "Duz", "İstiot"],
    name: "Tikə Kabablar"
  },
  {
    category: "Kabablar",
    ingedrients: ["Quzu qiyməsi", "Quyruq yağı", "Soğan", "Duz", "İstiot"],
    name: "Lülə Kabablar"
  },
  {
    category: "Kabablar",
    ingedrients: ["Toyuq filesi", "Sarımsaq", "Zeytun yağı", "Paprika"],
    name: "Toyuq Kababları"
  },
  {
    category: "Kabablar",
    ingedrients: ["Quzu qabırğası", "Duz", "İstiot", "Kəklikotu"],
    name: "Qabırğa Kababları"
  },
  {
    category: "Kabablar",
    ingedrients: ["Quzu ciyəri", "Quyruq yağı", "Duz", "İstiot"],
    name: "Ciyər Kababları"
  },
  {
    category: "Kabablar",
    ingedrients: ["Mal əti", "Soğan", "Cəfəri", "Duz", "İstiot"],
    name: "Adana Kababları"
  },
  {
    category: "Kabablar",
    ingedrients: ["Nərə balığı", "Limon", "Zeytun yağı", "Duz"],
    name: "Balıq Kababları"
  },
  {
    category: "Kabablar",
    ingedrients: ["Quzu əti", "Quyruq yağı", "Soğan", "Duz", "İstiot"],
    name: "Şah Kababları"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Pepperoni kolbasası", "Pomidor sousu"],
    name: "Pepperoni"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Göbələk", "Pomidor sousu", "Oreqano"],
    name: "Funghi"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Vetçina", "Göbələk", "Pomidor sousu"],
    name: "Prosciutto e Funghi"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Qorqonzola", "Parmezan", "Rikotta"],
    name: "Four Cheese"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Toyuq filesi", "BBQ sousu", "Qırmızı soğan"],
    name: "BBQ Chicken"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Toyuq filesi", "Göbələk", "Qarğıdalı", "Pomidor sousu"],
    name: "Chicken Deluxe"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Ton balığı", "Qırmızı soğan", "Zeytun"],
    name: "Tuna Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Karides", "Sarımsaq", "Zeytun yağı"],
    name: "Seafood Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Vetçina", "Ananas", "Pomidor sousu"],
    name: "Hawaiian"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Salami", "Zeytun", "Bolqar bibəri"],
    name: "Salami Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Mal əti", "Göbələk", "Qırmızı soğan"],
    name: "Beef Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Acı bibər", "Jalapeno", "Pomidor sousu"],
    name: "Diavola"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Kolbasa", "Göbələk", "Qarğıdalı"],
    name: "Maxi Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Parmezan", "Rokfor pendiri", "Qaymaqlı sous"],
    name: "Quattro Formaggi"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Pomidor", "Zeytun", "Göbələk", "Bibər"],
    name: "Vegetarian Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Toyuq filesi", "Göbələk", "Qaymaqlı sous"],
    name: "Chicken Alfredo"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Bekon", "Kolbasa", "Mal əti"],
    name: "Meat Lovers"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Rikotta", "İspanaq", "Sarımsaq"],
    name: "Spinach Ricotta"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Toyuq filesi", "Qarğıdalı", "BBQ sousu"],
    name: "BBQ Chicken Deluxe"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Sucuk", "Pomidor", "Yaşıl bibər"],
    name: "Turkish Sucuk Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Pastırma", "Pomidor sousu", "Oreqano"],
    name: "Pastırma Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Toyuq filesi", "Ananas", "Qırmızı soğan"],
    name: "Tropical Chicken"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Pomidor", "Feta pendiri", "Zeytun", "Oreqano"],
    name: "Greek Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Hisə verilmiş toyuq", "Göbələk", "Qaymaqlı sous"],
    name: "Smoked Chicken"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Kolbasa", "Jalapeno", "Qırmızı soğan"],
    name: "Spicy Sausage"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Badımcan", "Balqabaq", "Bibər", "Pomidor"],
    name: "Mediterranean Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Qızılbalıq", "Krem pendir", "Şüyüd"],
    name: "Salmon Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Mal əti", "Jalapeno", "BBQ sousu"],
    name: "Texas BBQ"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Göbələk", "Trüfel yağı", "Parmezan"],
    name: "Truffle Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Toyuq filesi", "Bekon", "Ranch sousu"],
    name: "Ranch Chicken"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Qoyun pendiri", "Pomidor", "Reyhan"],
    name: "Caprese Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Kolbasa", "Göbələk", "Zeytun", "Qırmızı bibər"],
    name: "Supreme Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Toyuq filesi", "Brokkoli", "Qaymaqlı sous"],
    name: "Broccoli Chicken"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Pomidor sousu", "Sarımsaq", "Reyhan"],
    name: "Marinara"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Ənginar", "Zeytun", "Göbələk", "Vetçina"],
    name: "Capricciosa"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Qızardılmış badımcan", "Pomidor", "Reyhan"],
    name: "Parmigiana Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Kartof", "Rozmarin", "Zeytun yağı"],
    name: "Potato Rosemary"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Qovrulmuş mal əti", "Göbələk", "Soğan"],
    name: "Roast Beef Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Toyuq filesi", "Pomidor", "Pesto sousu"],
    name: "Pesto Chicken"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Sucuk", "Zeytun", "Acı bibər"],
    name: "Spicy Sucuk"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Göbələk", "İspanaq", "Feta pendiri"],
    name: "Spinach Mushroom"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Toyuq filesi", "Qırmızı bibər", "Qarğıdalı"],
    name: "Mexican Chicken"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Mal əti", "Qırmızı lobya", "Jalapeno"],
    name: "Mexican Beef"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Hisə verilmiş kolbasa", "Turşu xiyar", "Xardal sousu"],
    name: "Smoky Sausage"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Rikotta", "Bal", "Qoz"],
    name: "Honey Cheese Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Alma", "Darçın", "Qoz", "Bal"],
    name: "Apple Dessert Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Şokolad", "Banan", "Çiyələk", "Fındıq"],
    name: "Chocolate Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Nutella", "Banan", "Çiyələk", "Fındıq"],
    name: "Nutella Pizzalar"
  },
  {
    category: "Pizzalar",
    ingedrients: ["Mozzarella pendiri", "Pomidor", "Qara zeytun", "Kapari"],
    name: "Siciliana"
  }
]
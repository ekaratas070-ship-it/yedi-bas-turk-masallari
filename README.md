# Yedi Baş — Türk Masalları Derlemesi

İstanbul Medipol Üniversitesi — Güzel Sanatlar Tasarım ve Mimarlık Fakültesi
Görsel İletişim Tasarımı Bölümü
Programlamaya Giriş (2026–2027 Güz) — Öğr. Gör. Meral Şentürk
Hanife Elanur Karataş — 86230008

## Video

https://www.youtube.com/watch?v=rfmjC4m0ubo

## Proje

Yedi Baş, Türk masal geleneğinden sekiz anlatıyı tek sayfalık bir okuma arayüzünde bir araya getiren bir web sayfası. Kurgu, Türk mitolojisindeki yedi başlı ejderha motifine dayanıyor: ejderhanın yedi başı insan nefsinin yedi kötü huyunu temsil ediyor. Sekizinci anlatı "Hüküm" başlığıyla ayrı tutulmuş ve Tuz Kadar Sevmek masalına ayrılmış.

Metinler Pertev Naili Boratav ve Tahir Alangu derlemelerinden alındı. Sayfa tek bir `index.html` dosyasından oluşuyor; harici CSS, JavaScript, yazı tipi veya CDN isteği yok. Dosya açıldığı anda internetsiz çalışır.

## Masallar

| Baş | Huy | Masal | Kaynak |
|-----|-----|-------|--------|
| 1 | Kibir | Kibirli Padişah Kızı | Alangu, Billur Köşk Masalları |
| 2 | Tamah | Keloğlan ile Köse | Boratav, Zaman Zaman İçinde |
| 3 | Haset | Nardaniye Hanım | Boratav, Zaman Zaman İçinde |
| 4 | Gazap | Üç Nasihat | Boratav, Zaman Zaman İçinde |
| 5 | Zulüm | Keloğlan ve Yedi Başlı Dev | Boratav, Az Gittik Uz Gittik |
| 6 | İftira | Sedef Bacı | Alangu, Billur Köşk Masalları |
| 7 | Vefasızlık | Ak Yılan Masalı | Boratav, Az Gittik Uz Gittik |
| 8 | Hüküm | Tuz Kadar Sevmek | Boratav & Alangu derlemeleri |

## Sayfada Ne Var

- Sol fihrist: sekiz masal, huy etiketiyle listeleniyor.
- Ejderha gravürü: yedi başlı SVG çizim, her baş tıklanabilir ve ilgili masalı okuma paneline getiriyor.
- Okuma paneli: masal başlığı, künye, özet, metin ve kapanış cümlesi.
- Baş sayacı: okunan her masalda "X/7 baş kesildi" güncelleniyor, durum tarayıcıda saklanıyor.
- Huy süzgeci: yedi huy sekmesi, seçilen huya ait masalları listeliyor.
- Okuma kolaylıkları: gece/gündüz tema, A+ / A− yazı boyutu, okuma ilerleme çubuğu.
- Klavye: J/K veya yukarı/aşağı ok ile masallar arasında geçiş, Esc ile paneli kapatma.
- Rastgele masal ve önceki/sonraki düğmeleri.
- Mobilde tek sütun düzen ve yapışkan üst çubuk.

## Teknik Yapı

- HTML, CSS ve JavaScript aynı dosyada; hiçbir kütüphane kullanılmadı.
- Masal metinleri JavaScript içinde bir dizi olarak tutuluyor; seçilen masal bu diziden okunup panele basılıyor.
- Renkler CSS değişkenleriyle tanımlı: çini laciverti `#0E1D2B`, firuze `#1D7885`, mermer beyazı `#F4F7F7`, kökboya kırmızısı `#A62620`, tezhip altını `#C89D42`.
- Yazı tipleri işletim sisteminden seçiliyor, dosyaya gömülü font yok.
- Bölümlerde `aria` etiketleri ve klavye erişimi var.
- Her masalın kendi adresi var (`#masal-adi`), bağlantı paylaşılabilir.

## Çalıştırma

`index.html` dosyasını indirip çift tıklamak yeterli. Sunucu, kurulum veya internet bağlantısı gerekmiyor.

## Dosyalar

- `index.html` — web sayfası
- `vize_raporu.tex` — rapor kaynağı
- `86230008_Hanife_Elanur_Karatas_vize.pdf` — rapor
- `hafta2.png` … `hafta6.png` — haftalık çalışma görüntüleri

## Kaynakça

- Boratav, P. N. (2014). *Zaman Zaman İçinde*. İmge Kitabevi.
- Boratav, P. N. (2015). *Az Gittik Uz Gittik*. İmge Kitabevi.
- Alangu, T. (2016). *Billur Köşk Masalları*. Yapı Kredi Yayınları.
- Eberhard, W. & Boratav, P. N. (1953). *Typen Türkischer Volksmärchen*.

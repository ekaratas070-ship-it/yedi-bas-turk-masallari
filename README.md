# Yedi Baş — Türk Masalları Derlemesi

**İstanbul Medipol Üniversitesi**  
**Güzel Sanatlar Tasarım ve Mimarlık Fakültesi — Görsel İletişim Tasarımı Bölümü**  
**Programlamaya Giriş (2026–2027 Güz) — Vize Projesi**  
**Öğretim Görevlisi:** Meral Şentürk  
**Öğrenci:** Hanife Elanur Karataş (Öğrenci No: 86230008)  

---

## 📺 Proje Tanıtım Videosu
**YouTube Linki:** [https://www.youtube.com/watch?v=rfmjC4m0ubo](https://www.youtube.com/watch?v=rfmjC4m0ubo)

---

## 📌 Proje Özeti ve Tasarım Konsepti
**Yedi Baş**, Türk sözlü anlatı ve masal geleneğinden derlenen sekiz anlatıyı özgün bir görsel kimlik ve etkileşimli bir web arayüzünde buluşturan dijital okuma platformudur. 

Projenin kavramsal omurgası, kadim Türk mitolojisindeki **"Yedi Başlı Ejderha" (Yelmegen)** motifine dayanır. Masallardaki yedi baş; insan nefsinin yedi temel zaafını ve kötü huyunu (*Kibir, Tamah, Haset, Gazap, Zulüm, İftira, Vefasızlık*) simgeler. Sekizinci anlatı ise *"Hüküm"* başlığı altında derlemeyi toparlayan ve sevginin kıymetini özetleyen **Tuz Kadar Sevmek** masalına ayrılmıştır.

Tüm metinler, Türk halk bilimi ve masal araştırmalarının iki büyük ustası **Pertev Naili Boratav** (*Zaman Zaman İçinde*, *Az Gittik Uz Gittik*) ve **Tahir Alangu** (*Billur Köşk Masalları*) kaynaklarından titizlikle seçilmiş ve derlenmiştir.

---

## 🗂️ Modüler Dosya Mimarisi (External / Harici Yapı)
Dersin vize yönergesi doğrultusunda proje; kodun okunabilirliği, sürdürülebilirliği ve web geliştirme standartlarına (*Separation of Concerns*) uygunluğu gözetilerek **üç ayrı harici dosyaya** ayrılmıştır:

```text
├── index.html       # Semantik HTML5 iskeleti, erişilebilirlik (ARIA) ve SVG vektör elemanları
├── style.css        # Tüm görsel stil kuralları, CSS Grid/Flexbox düzeni ve tema değişkenleri
├── script.js        # Veri yapıları (ANLATILAR), sahne gravürleri, filtreler ve etkileşim mantığı
└── README.md        # Proje tanıtım belgesi, katalog, teknik dokümantasyon ve kaynakça
```

1. **`index.html` (İskelet):**
   - `<link rel="stylesheet" href="style.css">` etiketiyle harici CSS dosyasına bağlanır.
   - Sayfa sonundaki `<script src="script.js"></script>` etiketiyle harici JavaScript dosyasını yükler.
   - İçerik; başlık/banner, sol fihrist (menü), sağ okuma odası ve dipnot olmak üzere semantik HTML5 etiketleriyle (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`) yapılandırılmıştır.
   - Ekran okuyucular ve erişilebilirlik için `aria-label`, `role`, `aria-live` etiketleri tam olarak yerleştirilmiştir.

2. **`style.css` (Tasarım ve Biçimlendirme):**
   - `:root` içinde tanımlanan CSS değişkenleriyle renk paleti tek bir merkezden yönetilir.
   - Gündüz ve Gece modları (`html[data-tema="gece"]`) değişkenlerin anlık takasıyla sıfır gecikmeyle çalışır.
   - Ekran genişliğine duyarlı (responsive) iki sütunlu `CSS Grid` ve `Flexbox` mimarisi kurulmuştur. Mobil cihazlarda tek sütunlu pratik kart düzenine otomatik geçer.

3. **`script.js` (Etkileşim ve Veri Mimarisi):**
   - **Gravürler (`SAHNE_GRAVURLERI`):** Her masal için dışarıdan resim çekmeksizin doğrudan kodlanmış inline SVG sahne sembolleri.
   - **Veri Tabanı (`ANLATILAR`):** Sekiz masalın tüm meta verilerini (id, başlık, huy, bedel, özet, metin paragrafları, kaynakça) barındıran nesne dizisi.
   - **Etkileşim Mantığı:** Fihrist filtreleme, rastgele masal seçimi, klavye ile gezinme (J/K kısayolları), okuma ilerleme çubuğu, dinamik yazı boyutu ölçekleme (A+/A-) ve `localStorage` tabanlı baş kesme sayacı.

---

## 📖 Masal Kataloğu ve Mitolojik Karşılıkları

| # | Baş | Temsil Ettiği Huy | Masal Adı | Tematik Bedel / İmtihan | Akademik Kaynak |
|---|:---:|:---|:---|:---|:---|
| 1 | I. Baş | **Kibir** | Kibirli Padişah Kızı | Burnunun dikine gidip taliplerini hor görür; bir çömlekçi kulübesinde tevazuyu öğrenir. | Tahir Alangu, *Billur Köşk Masalları* |
| 2 | II. Baş | **Tamah** | Keloğlan ile Köse | Açgözlü kösenin hilesine karşı aklını ve sabrını kullanarak hakkını alır. | Pertev Naili Boratav, *Zaman Zaman İçinde* |
| 3 | III. Baş | **Haset** | Nardaniye Hanım | Üvey annenin kıskançlığına rağmen sabırla sınanan güzelliğin ve iyiliğin zaferi. | Pertev Naili Boratav, *Zaman Zaman İçinde* |
| 4 | IV. Baş | **Gazap** | Üç Nasihat | Öfkeyle kalkanın zararla oturacağını; bilgelikle sabretmenin hayat kurtardığını anlatır. | Pertev Naili Boratav, *Zaman Zaman İçinde* |
| 5 | V. Baş | **Zulüm** | Keloğlan ve Yedi Başlı Dev | Memlekete korku salan devin zorbalığına karşı zekâ ve cesaretle kazanılan kurtuluş. | Pertev Naili Boratav, *Az Gittik Uz Gittik* |
| 6 | VI. Baş | **İftira** | Sedef Bacı | Masum bir kardeşin uğradığı kara çalmaya karşı sadakat ve sabırla hakikatin ortaya çıkışı. | Tahir Alangu, *Billur Köşk Masalları* |
| 7 | VII. Baş | **Vefasızlık** | Ak Yılan Masalı | İyilik gördüğü varlığa sözünü tutmamanın ve nankörlüğün getirdiği ağır vicdan yükü. | Pertev Naili Boratav, *Az Gittik Uz Gittik* |
| 8 | **Hüküm** | **Kadirşinaslık** | Tuz Kadar Sevmek | Gösterişli lafların değil; tuz gibi hayatın olmazsa olmazı olan sade ve gerçek sevginin değeri. | Boratav & Alangu Derlemeleri Ortak Motif |

---

## 🎨 Görsel İletişim Tasarımı ve Estetik Tercihler

### 1. Renk Paleti (Geleneksel Türk Sanatları)
Sitenin renk kodları doğrudan Selçuklu kündekâri ahşap işçiliği, İznik çinileri ve Anadolu kökboya dokumalarından türetilmiştir:
- **Selçuklu Çini Laciverti (`#0E1D2B` / `#12263A`):** Asaleti, derinliği ve gece göğünü simgeleyen ana zemin ve başlık rengi.
- **Türk Mavisi / Firuze (`#1D7885`):** Geleneksel çinilerdeki canlı turkuaz vurgusu; buton ve aktif eleman rengi.
- **Selçuklu Kündekâri Altını (`#C89D42`):** Yazma eser tezhip altınını temsil eden kenarlık ve çerçeve çizgileri.
- **Anadolu Kökboya Kırmızısı (`#A62620`):** Kilim motiflerindeki uyarıcı ve nefsi simgeleyen vurgu kırmızısı.
- **Mermer Beyazı / İznik Hamuru (`#F4F7F7` / `#E9EFF0`):** Gözü yormayan, okuma konforu sağlayan mat arka plan tonları.

### 2. Sıfır CDN ve %100 Çevrimdışı (Offline-First) İlkesi
Projede hiçbir harici CSS kütüphanesi (Bootstrap, Tailwind vb.), JavaScript framework'ü (React, jQuery vb.) veya web yazı tipi (Google Fonts) **kullanılmamıştır**. 
- Yazı tipleri doğrudan işletim sisteminde yerleşik olarak bulunan yüksek okunurluklu tipografilerden (*Palatino Linotype*, *Georgia*, *Segoe UI*) seçilmiştir.
- Tüm ikonlar, ayraçlar, Selçuklu sekiz köşeli yıldız zemin deseni ve sahne gravürleri vektörel SVG kodlarıyla çizilmiştir.
- Bu sayede proje, **internet bağlantısı olmasa dahi** tek bir tıkla eksiksiz ve hızlı bir biçimde açılır.

### 3. Kullanıcı Deneyimi ve Etkileşim Unsurları
- **İnteraktif Ejderha Gravürü:** Ana sayfada yer alan yedi başlı ejderha SVG çiziminde her baş tıklanabilir düğme olarak kurgulanmıştır; tıklanan baş doğrudan ilgili masalı okuma paneline getirir.
- **Huy Filtreleme Çubuğu:** Üst kısımdaki sekiz düğmeyle masallar istenen temaya göre anında süzülebilir.
- **Okuma Kolaylıkları:** Gece/Gündüz tema anahtarı, metin boyutu ölçekleyici (A- / A+), okuma süresince pencere üstünde dolan okuma ilerleme çubuğu.
- **Klavye Kısayolları:** Masaüstü kullanıcıları için `J` (sonraki masal), `K` (önceki masal) ve `Esc` (masalı kapatıp fihriste odaklanma) tuşları tanımlanmıştır.
- **Kalıcı Baş Kesme Sayacı:** Okunan her masal tarayıcının `localStorage` hafızasında saklanır; sayfa yenilense bile *"X/7 baş kesildi"* durumu kaybolmaz ("Sıfırla" butonuyla temizlenebilir).

---

## 🚀 Projeyi Çalıştırma

Projeyi çalıştırmak için herhangi bir sunucu kurmaya, derlemeye (compile) veya terminal komutu çalıştırmaya gerek yoktur:
1. Proje klasörünü bilgisayarınıza indirin veya klonlayın:
   ```bash
   git clone https://github.com/ekaratas070-ship-it/yedi-bas-turk-masallari.git
   ```
2. Klasör içindeki **`index.html`** dosyasına çift tıklayarak herhangi bir modern internet tarayıcısında (Chrome, Safari, Edge, Firefox) açmanız yeterlidir.

---

## 📦 Proje Dosya Dizini

- `index.html` — Semantik web sayfası iskeleti
- `style.css` — Harici stil ve tema dosyası
- `script.js` — Harici betik, veri tabanı ve etkileşim motoru
- `README.md` — Proje tanıtım ve belgelendirme dosyası
- `vize_raporu.pdf` — Akademik vize proje raporu
- `vize_raporu.tex` — Raporun LaTeX kaynak kodu
- `ekran1.png`, `ekran2.png` — Masaüstü ve mobil arayüz ekran görüntüleri
- `hafta2.png` … `hafta6.png` — 5 haftalık gelişim ve çalışma süreci kanıtları

---

## 📚 Akademik Kaynakça

1. **Boratav, P. N. (2014).** *Zaman Zaman İçinde*. İstanbul: İmge Kitabevi Yayınları.
2. **Boratav, P. N. (2015).** *Az Gittik Uz Gittik*. İstanbul: İmge Kitabevi Yayınları.
3. **Alangu, T. (2016).** *Billur Köşk Masalları*. İstanbul: Yapı Kredi Yayınları.
4. **Eberhard, W. & Boratav, P. N. (1953).** *Typen Türkischer Volksmärchen*. Wiesbaden: Franz Steiner Verlag.
5. **Ögel, B. (2014).** *Türk Mitolojisi* (Cilt 1-2). Ankara: Türk Tarih Kurumu Yayınları.

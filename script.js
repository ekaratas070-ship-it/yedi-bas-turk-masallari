/* ==========================================================================
       JAVASCRIPT BÖLÜM 1: SEKİZ ANLATININ ÇİZİM GRAVÜRLERİ (SVG KODLARI)
       Açıklama: Her hikayenin kendine ait sembolik çizimini (köprü, kepçe,
       sahte kanlı gömlek, yay, kuyu vb.) dışarıdan resim yüklemeden
       doğrudan SVG vektör çizim kodu olarak burada saklıyoruz.
       ========================================================================== */
    const SAHNE_GRAVURLERI = {
      "1-kibir": "<svg viewBox='0 0 200 110' fill='none'><rect x='2' y='2' width='196' height='106' stroke='#12263A' stroke-width='1.5'/><rect x='6' y='6' width='188' height='98' stroke='#C89D42' stroke-width='1'/><polygon points='6,6 16,6 6,16' fill='#A62620'/><polygon points='194,6 184,6 194,16' fill='#A62620'/><path d='M14 88 Q100 32 186 88' stroke='#12263A' stroke-width='2.6'/><path d='M14 96 Q100 42 186 96' stroke='#1D7885' stroke-width='1.8'/><line x1='55' y1='68' x2='55' y2='95' stroke='#12263A' stroke-width='1.6'/><line x1='100' y1='59' x2='100' y2='95' stroke='#12263A' stroke-width='1.8'/><line x1='145' y1='68' x2='145' y2='95' stroke='#12263A' stroke-width='1.6'/><path d='M48 30 L100 12 L152 30 L100 22 Z' fill='#A62620'/><circle cx='100' cy='40' r='5.5' fill='#C89D42' stroke='#12263A' stroke-width='1.4'/><line x1='76' y1='48' x2='124' y2='28' stroke='#1D7885' stroke-width='1.6'/><line x1='124' y1='48' x2='76' y2='28' stroke='#1D7885' stroke-width='1.6'/></svg>",
      "2-tamah": "<svg viewBox='0 0 200 110' fill='none'><rect x='2' y='2' width='196' height='106' stroke='#12263A' stroke-width='1.5'/><rect x='6' y='6' width='188' height='98' stroke='#C89D42' stroke-width='1'/><polygon points='6,6 16,6 6,16' fill='#1D7885'/><polygon points='194,6 184,6 194,16' fill='#1D7885'/><path d='M26 64 A26 26 0 0 0 78 64 Z' fill='#A62620' stroke='#12263A' stroke-width='1.5'/><line x1='76' y1='64' x2='148' y2='22' stroke='#12263A' stroke-width='2.6'/><circle cx='42' cy='46' r='5.5' fill='#C89D42' stroke='#12263A' stroke-width='1.2'/><circle cx='58' cy='40' r='5.5' fill='#C89D42' stroke='#12263A' stroke-width='1.2'/><circle cx='74' cy='46' r='5.5' fill='#C89D42' stroke='#12263A' stroke-width='1.2'/><path d='M122 86 C132 56, 162 56, 172 86 Z' fill='#1D7885' stroke='#12263A' stroke-width='1.5'/><line x1='132' y1='68' x2='162' y2='68' stroke='#C89D42' stroke-width='2'/><path d='M14 94 Q55 86 100 94 T186 94' stroke='#1D7885' stroke-width='1.8'/></svg>",
      "3-haset": "<svg viewBox='0 0 200 110' fill='none'><rect x='2' y='2' width='196' height='106' stroke='#12263A' stroke-width='1.5'/><rect x='6' y='6' width='188' height='98' stroke='#C89D42' stroke-width='1'/><polygon points='6,6 16,6 6,16' fill='#A62620'/><polygon points='194,6 184,6 194,16' fill='#A62620'/><path d='M44 24 L66 16 L82 28 L100 18 L118 28 L134 16 L156 24 L144 46 L128 40 V88 H72 V40 L56 46 Z' stroke='#12263A' stroke-width='1.7'/><polygon points='88,48 104,38 100,58 112,68 90,74 84,58' fill='#A62620'/><circle cx='158' cy='72' r='13' stroke='#C89D42' stroke-width='2.4'/><line x1='24' y1='84' x2='176' y2='24' stroke='#1D7885' stroke-width='2'/><polygon points='176,24 164,24 170,33' fill='#A62620'/></svg>",
      "4-gazap": "<svg viewBox='0 0 200 110' fill='none'><rect x='2' y='2' width='196' height='106' stroke='#12263A' stroke-width='1.5'/><rect x='6' y='6' width='188' height='98' stroke='#C89D42' stroke-width='1'/><polygon points='6,6 16,6 6,16' fill='#1D7885'/><polygon points='194,6 184,6 194,16' fill='#1D7885'/><path d='M52 14 C118 28, 118 82, 52 96' stroke='#12263A' stroke-width='2.8'/><line x1='52' y1='14' x2='52' y2='96' stroke='#C89D42' stroke-width='1.4'/><line x1='26' y1='55' x2='166' y2='55' stroke='#A62620' stroke-width='2.4'/><polygon points='172,55 156,47 156,63' fill='#A62620'/><path d='M12 96 L42 62 L72 96 L108 58 L146 96' stroke='#1D7885' stroke-width='1.6'/><circle cx='146' cy='72' r='3.5' fill='#A62620'/><circle cx='156' cy='78' r='3' fill='#A62620'/></svg>",
      "5-zulum": "<svg viewBox='0 0 200 110' fill='none'><rect x='2' y='2' width='196' height='106' stroke='#12263A' stroke-width='1.5'/><rect x='6' y='6' width='188' height='98' stroke='#C89D42' stroke-width='1'/><polygon points='6,6 16,6 6,16' fill='#A62620'/><polygon points='194,6 184,6 194,16' fill='#A62620'/><path d='M16 96 L56 16 L100 34 L144 16 L184 96' stroke='#12263A' stroke-width='2'/><path d='M58 58 Q100 30 142 58 Q100 86 58 58 Z' fill='#1D7885' stroke='#12263A' stroke-width='1.8'/><circle cx='100' cy='58' r='11' fill='#A62620'/><circle cx='100' cy='58' r='4' fill='#C89D42'/><line x1='100' y1='10' x2='100' y2='96' stroke='#C89D42' stroke-width='2.5'/></svg>",
      "6-iftira": "<svg viewBox='0 0 200 110' fill='none'><rect x='2' y='2' width='196' height='106' stroke='#12263A' stroke-width='1.5'/><rect x='6' y='6' width='188' height='98' stroke='#C89D42' stroke-width='1'/><polygon points='6,6 16,6 6,16' fill='#1D7885'/><polygon points='194,6 184,6 194,16' fill='#1D7885'/><path d='M12 94 L72 24 L124 76 L154 38 L188 94 Z' stroke='#12263A' stroke-width='1.8'/><polygon points='72,24 54,45 90,45' fill='#1D7885'/><path d='M116 32 Q126 20 136 32 Q146 20 156 32' stroke='#A62620' stroke-width='1.8'/><path d='M138 20 Q148 10 158 20 Q168 10 178 20' stroke='#A62620' stroke-width='1.8'/><circle cx='36' cy='30' r='8' fill='#C89D42'/></svg>",
      "7-vefasizlik": "<svg viewBox='0 0 200 110' fill='none'><rect x='2' y='2' width='196' height='106' stroke='#12263A' stroke-width='1.5'/><rect x='6' y='6' width='188' height='98' stroke='#C89D42' stroke-width='1'/><polygon points='6,6 16,6 6,16' fill='#A62620'/><polygon points='194,6 184,6 194,16' fill='#A62620'/><line x1='38' y1='8' x2='38' y2='102' stroke='#1D7885' stroke-width='2'/><line x1='162' y1='8' x2='162' y2='102' stroke='#1D7885' stroke-width='2'/><path d='M62 86 C62 60, 138 68, 138 42 C138 24, 100 28, 100 16' stroke='#A62620' stroke-width='3.5'/><polygon points='100,8 112,20 88,20' fill='#C89D42' stroke='#12263A' stroke-width='1'/><circle cx='100' cy='54' r='4' fill='#1D7885'/><circle cx='100' cy='74' r='4' fill='#C89D42'/></svg>",
      "hukum": "<svg viewBox='0 0 200 110' fill='none'><rect x='2' y='2' width='196' height='106' stroke='#12263A' stroke-width='1.5'/><rect x='6' y='6' width='188' height='98' stroke='#C89D42' stroke-width='1'/><polygon points='6,6 16,6 6,16' fill='#1D7885'/><polygon points='194,6 184,6 194,16' fill='#1D7885'/><line x1='100' y1='14' x2='100' y2='92' stroke='#12263A' stroke-width='2.4'/><line x1='74' y1='92' x2='126' y2='92' stroke='#12263A' stroke-width='2.4'/><line x1='44' y1='34' x2='156' y2='34' stroke='#C89D42' stroke-width='2.2'/><polygon points='44,34 28,66 60,66' fill='#1D7885' stroke='#12263A' stroke-width='1.4'/><polygon points='156,34 140,66 172,66' fill='#A62620' stroke='#12263A' stroke-width='1.4'/><circle cx='156' cy='56' r='6' fill='#C89D42'/></svg>"
    };

    /* ==========================================================================
       JAVASCRIPT BÖLÜM 2: SEKİZ ANLATI VERİ LİSTESİ (ANLATILAR DİZİSİ)
       Açıklama: Sitedeki tüm hikayeler birer JavaScript nesnesi (object)
       olarak bu dizide (array) toplanmıştır.
       Her hikayenin; başlığı, kötü huyu, bedeli, özeti, kapanış hüküm cümlesi,
       kaynakçası ve okuma paragrafları tek tek burada tanımlanır.
       ========================================================================== */
    const ANLATILAR = [
      {
        id: "1-kibir", sira: "01", romen: "I", baslik: "Kibirli Padişah Kızı", tur: "Masal", huy: "Kibir", kim: "Padişahın Mağrur Kızı",
        bedel: "Gelen bütün talipleriyle alay edip burnu Kaf Dağı'nda gezer; sonunda bir çömlekçiye muhtaç olup kibrinin bedelini öder.",
        ozet: "Kendi güzelliğini ve soyunu cihanın üstünde görüp kapısına gelen hükümdarları hor gören kibirli padişah kızı, kaderin cilvesiyle bir çömlekçi kulübesinde sınanarak tevazuya erer.",
        kapanis: "Kibir, sırça köşkte taht kurdursa da; en sonunda insanı çamurdan bir çanağın başında diz çöktürür.",
        kaynak: "Türk Masal Külliyatı (Tahir Alangu, Billur Köşk Masalları / Eberhard-Boratav Tip 900)",
        paragraflar: [
          "Evvel zaman içinde, kalbur saman içinde, develer tellal iken, pireler berber iken; memleketin birinde aklı kıt, kibri dağlardan yüce bir padişah kızı yaşarmış. Kız öyle güzelmiş ki görenlerin aklı başından gider, cemalini gören mecnun olurmuş. Lakin aynaya her baktığında 'Şu koca dünyada bana layık ne bir şehzade var ne de bir padişah' diyerek burnunu Kaf Dağı’na diker, yanına yaklaşan herkesi bir kusur bularak hor görürmüş.",
          "Günün birinde padişah kızına talip olan cümle diyarın şehzadeleri, beyleri ve vezir oğulları için sarayın avlusunda büyük bir meclis kurmuş. Gelen talipler al atlas kaftanlarla sıraya dizilmiş. Kibirli kız kibirle yanlarından geçerken kimine 'Bunun boynu kaz boynu gibi uzun', kimine 'Bunun burnu karga gagası gibi eğri', kimine de 'Bunun yüzü kül çanağı gibi soluk' diyerek cümle cihanı alaya almış. En sonunda tatlı dilli, yağız bir hükümdar oğluna da sakalı sivri diye 'Gaga Sakallı Bey' lakabını takıp kahkahalarla aşağılamış.",
          "Kızının bu hadsiz kibri karşısında padişahın canına tak etmiş. Divanın ortasında gürleyip, 'Mademki kapıma gelen asil talipleri beğenmezsin, andım olsun seni sarayımın kapısına ilk gelen dilenciye veya esnafa eş edeceğim!' diye ferman buyurmuş. Çok geçmeden saray kapısına sırtında küfesiyle topraktan çanak çömlek satan yırtık cübbeli yoksul bir çömlekçi çıkagelmiş. Padişah sözünden dönmemiş; ağlayıp dövünen kibirli kızını bu yoksul çömlekçiye nikahlayıp saraydan dışarı attırmış.",
          "Kibirli sultan, çömlekçinin dumanlı, saz çatılı virane kulübesine varınca gözlerine inanamamış. İpek döşekler yerine kuru hasır, altın tabaklar yerine kara çamurdan kaplar varmış. Kocası ona ekmek parası için çamur yoğurmayı, iğ eğirmeyi ve çarşıda testi satmayı buyurmuş. Sırça sarayın nazlı kızı pazarda çömlek satarken, yoldan geçen atlıların atları çömleklerine çarpıp hepsini tuzla buz etmiş. Çamurlar içinde ağlayan kız, vaktiyle hor gördüğü o insanların rızkının ne zor kazanıldığını, bir lokma ekmeğin kıymetini iliklerine kadar hissetmiş.",
          "Bir gün sarayda büyük bir düğün kurulduğu duyulmuş; meğer o 'Gaga Sakallı' diye alay ettiği hükümdar oğlunun düğünüymüş. Kız, sarayın mutfağına artık çorba ve ekmek istemek için gizlice girip hizmetçilik ederken, meclisin ortasında hükümdar kızı görmüş ve yanına çağırmış. Meğer o yırtık cübbeli çömlekçi, kızın kibrini kırmak için tebdiligezen o hükümdarın ta kendisiymiş! Kibrinden arınıp gözyaşlarıyla başını öne eğen kız, 'Ben nefsimin kibrine kurban olmuştum, asıl zenginlik tahtta değil alçakgönüllülükteymiş' diyerek affını dilemiş; ancak kibrini çamur teknesinde ezdiği gün hakiki huzura ve saadete kavuşmuş."
        ]
      },
      {
        id: "2-tamah", sira: "02", romen: "II", baslik: "Keloğlan ile Köse", tur: "Masal", huy: "Tamah", kim: "Köse",
        bedel: "Kurnazlıkla kandırdığı Keloğlan'ın tuzağına kendi düşer, elindekini kaybeder.",
        ozet: "Elindekine kanaat etmeyip Keloğlan’ın bir avuç rızkına göz diken açgözlü Köse, daha çoğunu kapmak isterken bütün malından ve canından olur.",
        kapanis: "Tamah, başkasının avucundaki bir arpaya uzanırken kendi ambarını ateşe verir.",
        kaynak: "Anadolu Masal Geleneği (Pertev Naili Boratav / Tahir Alangu Derlemeleri)",
        paragraflar: [
          "Bir varmış bir yokmuş, evvel zaman içinde kalbur saman içinde, yaşlı anasıyla kıt kanaat geçinen bir Keloğlan, bir de aynı köyde yedi mahallenin malına göz diken, sakalında üç tel tüy bulunmaz bir Köse varmış. Keloğlan ne vakit tarladan üç ölçek buğday kaldırsa, Köse bir hile bulur, kantarın topuzunu kaydırır, oğlanın elindeki ekmeği yarı yarıya elinden alırmış. Karnı doyar ama gözü doymazmış Köse’nin.",
          "Bir güz günü Keloğlan, evdeki tek cılız öküzünü pazara götürürken yolda Köse önünü kesti. Yanındaki iki hilebaz arkadaşıyla sözleşip Keloğlan’a, 'Bre Keloğlan, bu boynuzu eğri keçiyle nereye gidersin?' diye takıldı. Birincisi keçi dedi, ikincisi keçi dedi, üçüncüsü de keçi deyince saf Keloğlan şaşırdı, koskoca öküzü keçi fiyatına yok pahasına Köse’ye kaptırdı. Köse, öküzü bedavaya kapmanın sevinciyle bıyık altından güldü; tamahı kursağında kabardıkça kabardı.",
          "Gelgelelim Keloğlan bu oyunun altında kalmadı. Ertesi hafta eline aldığı eski bir bakır kepçenin altına gizlice iki altın sıkıştırdı, çarşıda dükkân sahibine önceden para verip anlaşma yaptı. Köse’nin tam yanında kepçeyi kazana vurup 'Açıl kepçem açıl!' dedi, dükkâncı da önüne tepsi tepsi baklava, börek dizdi. Köse bunu görünce gözleri faltaşı gibi açıldı: 'Ulan Keloğlan, bu kepçe para ödemeden yemek mi verir? Sat bunu bana, sana bir kese altın vereyim!' dedi.",
          "Keloğlan nazlandı, 'Aman Köse Ağa, anamın yadigârıdır' dediyse de Köse’nin açgözlülüğü aklını başından almıştı. İki kese altını Keloğlan’ın kucağına sayıp bakır kepçeyi kaptığı gibi konağa koştu, bütün köyün ağalarını ziyafete çağırdı. Sofranın ortasında kepçeyi yere vurup 'Açıl kepçem açıl!' diye bağırdıysa da ne gelen oldu ne giden; konukların önünde rezil rüsva oldu.",
          "Köse öfkeyle Keloğlan’ı bir çuvala tıktı, ırmağa atmaya götürdü. Çuvalı kıyıya bırakıp abdest almaya gittiği sırada Keloğlan çuvalın içinden, 'Zorla padişahın kızını veriyorlar, ben almam!' diye bağırmaya başladı. Oradan geçen zengin bir çoban bunu duyunca, 'Ben girerim!' diyerek Keloğlan’ı çözdü, sürüsünü ona bırakıp çuvala girdi. Köse döndüğünde çuvalı suya fırlattı. Ertesi gün Keloğlan’ı koca bir koyun sürüsüyle görünce şaşkına döndü. Keloğlan, 'Köse Ağa, beni kıyıya yakın attın da ancak bu kadar koyun çıktı; biraz daha derine atsaydın bin koyunla çıkardım!' dedi. Gözünü hırs bürüyen Köse, 'Beni en derine at!' diye kendi ayağıyla çuvala girdi ve tamahının ağırlığıyla ırmağın dibini boyladı."
        ]
      },
      {
        id: "3-haset", sira: "03", romen: "III", baslik: "Nardaniye Hanım", tur: "Masal", huy: "Haset", kim: "Üvey Anne (Hasetçi Kadın)",
        bedel: "Nardaniye'nin duru güzelliğini çekemeyip canına kasteder; hasedinin ateşiyle kendi felaketini hazırlar.",
        ozet: "Sihirli aynaya her gün 'Benden güzeli var mı?' diye soran kibirli üvey anne, Nardaniye Hanım’ın ay gibi parlayan güzelliğini çekemeyip onu dağ başında yok etmek ister.",
        kapanis: "Haset, başkasının kandilini söndürmek için rüzgâr ararken kendi evinin ocağını kül eder.",
        kaynak: "Türk Masal Külliyatı (Pertev Naili Boratav, Zaman Zaman İçinde / Tip 89)",
        paragraflar: [
          "Evvel zaman içinde, kalbur saman içinde; memleketin birinde nar tanesi gibi duru, ay parçası gibi aydınlık yüzlü Nardaniye Hanım adında yetim bir kız ile onun güzelliğini içine sindiremeyen bir üvey anne yaşarmış. Bu üvey anne her sabah kalkar, sandığından çıkardığı tılsımlı bir aynanın karşısına geçer, 'Ayna ayna, söyle bana; şu dünyada benden daha güzel bir hatun var mı?' diye sorarmış. Ayna da yıllarca 'Yoktur sultanım, senden güzeli ne yerde ne göktedir' dermiş.",
          "Gel zaman git zaman Nardaniye Hanım serpilip on dört yaşına basmış; güzelliği öyle bir nur saçarmış ki güneş görse utanır, bulutların ardına saklanırmış. Günlerden bir gün üvey anne yine aynasının karşısına geçip aynı suali sormuş. Ayna bu kez dile gelip, 'Evet hatunum, sen pek güzelsin lakin Nardaniye Hanım senden bin kat daha güzeldir; yüzü ay gibi, yanakları nar içi gibidir' deyivermiş. Bu sözü işiten üvey annenin içine bir kor düşmüş; hasedinden gözleri dönmüş, tırnaklarını bağrına batırıp odasında fır dönmüş.",
          "İçindeki haset yangını aklını başından alan kadın, evin uşağına gizlice bir kese altın verip Nardaniye’yi uzak bir ormana götürmesini, orada canına kıyıp gömleğini kana bulayarak getirmesini emretmiş. Lakin uşak dağ başına vardığında masum Nardaniye’nin gözyaşlarına kıyamamış; bir av hayvanı kesip kanını gömleğe sürmüş, kızı da ıssız dağların eteğinde Allah’a emanet bırakmış. Nardaniye az gitmiş uz gitmiş, dağ başında yiğitlerin terk edilmiş konağına sığınmış ve onların korumasında yaşamaya başlamış.",
          "Saraydaki üvey anne Nardaniye’den kurtulduğunu sanarak neşeyle aynasının karşısına geçmiş. Ayna ise yine, 'Dağ başındaki konakta yaşayan Nardaniye Hanım hâlâ senden bin kat daha güzeldir' cevabını verince kadının hasedi katbekat harlanmış. Cadı kılığına girip dağdaki konağı bulmuş; kapıyı açan masum kıza zehirli bir tılsım vererek onu derin, ölü gibi bir uykuya yatırmış. Konağa dönen yiğitler Nardaniye’nin cansız gibi yatan bedenini görünce dövünmüş, onu billur bir sandukaya koyup ulu bir çınarın dalına emanet etmişler.",
          "O diyardan geçen adil bir şehzade çınarın altındaki billur sandukayı fark etmiş. Nardaniye’nin başındaki zehirli tılsımı çıkarınca kız derin uykusundan uyanmış, başına gelenleri bir bir anlatmış. Şehzade kızı sarayına gelin etmiş ve sarayda büyük bir toy düğün kurulmuş. Düğüne davet edilen üvey anne, tahtta ay gibi parlayan Nardaniye’yi karşısında sapasağlam görünce hasedinden çatlayacak hale gelmiş; kötülüğünün utancıyla divanın ortasında yere yığılmış. İşte haset öyle bir zehirdir ki başkasına hazırladığı kuyunun dibine en nihayetinde sahibini yuvarlar."
        ]
      },
      {
        id: "4-gazap", sira: "04", romen: "IV", baslik: "Üç Nasihat", tur: "Masal", huy: "Gazap", kim: "Gurbetçi Yiğit",
        bedel: "Gurbetten dönünce evinde yabancı sandığı bir delikanlıyı görüp öfkeyle kılıcına sarılır; sabır nasihatini hatırlayıp gazabını yenince öz evladını öldürmekten kurtulur.",
        ozet: "Yıllarca gurbette çalışıp kazandığı üç altın akçeyi bilge bir ihtiyarın verdiği üç hayat nasihatine değişen yoksul yiğit, öfkesine gem vurarak ailesini ve ocağını kurtarır.",
        kapanis: "Gazap, kından sıyrılan kör hançer gibidir; nefis sabır taşını çiğnemezse en sevdiklerinin kanına bulanır.",
        kaynak: "Türk Masal Külliyatı (Pertev Naili Boratav, Zaman Zaman İçinde / Tip 384)",
        paragraflar: [
          "Evvel zaman içinde, kalbur saman içinde; köyünde rızkı dar bir garip yiğit, genç eşini ve kundaktaki yavrusunu geride bırakıp gurbet ellere çalışmaya gitmiş. Bir ustanın yanında tam yirmi yıl boyunca gece gündüz demeden alın teri dökmüş. Yirmi yılın sonunda memleketine dönmek isteyince ustası önüne üç altın akçe koyarak, 'Oğul, istersen bu üç altını al git; istersen bu üç altın yerine sana üç altın kıymetinde nasihat vereyim' demiş. Yiğit bir an düşünmüş, paranın tükenip gideceğini, hikmetin ise can kurtaracağını bilip nasihatleri seçmiş.",
          "Bilge usta ilk altını alıp, 'Kestirme yolu bırakıp bildiğin anayoldan şaşma' demiş. İkinci altını alıp, 'Seni ilgilendirmeyen karanlık işe burnunu sokma' demiş. Üçüncü altını alıp en mühim sırrı fısıldamış: 'İçinde gazap ateşi alevlendiğinde, geceden sabaha dek sakın ola kılıcına sarılma; öfkeni yut, sabahın hayrını bekle.' Üstüne de yiğide yolluk niyetine büyük bir somun ekmek verip 'Bunu da evine varıp ailenle sofraya oturmadıkça sakın kesme' diye tembihlemiş.",
          "Yiğit memleket yoluna düşmüş. Yolda kervancıların saptığı tehlikeli kestirme yola girmeyip anayoldan gitmiş, kervanın eşkıya tarafından soyulduğunu görünce ilk nasihatin hayatını kurtardığını anlamış. Gece kaldığı handa gördüğü garip halleri sorgulamayıp susmuş, ikinci nasihat sayesinde başını beladan korumuş. En nihayetinde yirmi yılın hasretiyle yüreği çarparak bir gece vakti kendi köyüne, virane evinin penceresine varmış.",
          "Pencerenin aralığından içeri baktığında gördüğü manzara karşısında donakalmış. İçeride eşi, yatağın üstünde sırma saçlı genç bir delikanlıyla yan yana oturuyor, kadın delikanlının saçlarını şefkatle okşuyormuş. Bunu gören yiğidin beynine kan sıçramış; yirmi yıllık hasret bir anda cehennemî bir gazaba dönüşmüş. Gözleri kararmış, elini kılıcının kabzasına atmış, 'Bunca yıl beni beklemeyip haneme yabancı er mi aldın!' diye içeri dalıp ikisinin de başını uçurmaya niyetlenmiş.",
          "Tam kapıyı tekmeyle kıracağı an kulağında ustanın o üçüncü nasihati çınlamış: 'Gazabın kabardığında sabaha dek kılıcına sarılma!' Yiğit dişlerini sıkmış, hançerini kınına sokup sabah ezanına kadar samanlıkta titreye titreye nefsini yenmiş. Gün ışıyıp kapıyı çaldığında eşi sevinç gözyaşlarıyla boynuna sarılmış. Yanındaki delikanlıyı göstererek, 'Beyim, işte yirmi yıl önce kundakta bıraktığın öz oğlun!' deyince yiğit dizlerinin üstüne yığılıp hüngür hüngür ağlamış. Bir anlık kör gazaba uysaydı öz evladını doğrayacak olan yiğit, ustanın verdiği ekmeği kesmiş; ekmeğin içinden yirmi yıllık emeği olan altınlar dökülmüş. İşte gazabını sabırla yenen insan hem canını hem de yuvasını kurtarmış."
        ]
      },
      {
        id: "5-zulum", sira: "05", romen: "V", baslik: "Keloğlan ve Yedi Başlı Dev", tur: "Masal", huy: "Zulüm", kim: "Yedi Başlı Dev",
        bedel: "Dağları inleten cüssesi ve zulmüyle köylünün suyunu kesip insan yer; Keloğlan'ın sabrı ve keskin aklıyla mağarasında yok edilir.",
        ozet: "Köyün pınarlarını kurutup her mevsim bir can kurban isteyen yedi başlı zalim dev, kaba kuvvetine ve pençesine güvense de Keloğlan’ın aklı karşısında hezimete uğrar.",
        kapanis: "Zulüm, yedi başlı bir dev olsa da kaba gücün kibrine aldanır; mazlumun aklı zalimin başını kendi ininde ezer.",
        kaynak: "Türk Masal Külliyatı (Pertev Naili Boratav, Az Gittik Uz Gittik / Tip 104)",
        paragraflar: [
          "Evvel zaman içinde, kalbur saman içinde; sarp kayalıkların ardında, kara dağların kovuğunda yaşayan yedi başlı bir dev varmış. Bu dev öyle zalim, öyle merhametsizmiş ki bastığı yer çöker, nefesi ekinleri kavururmuş. Dağdan inen gürül gürül ırmakların önüne koca kayaları yığarak köyün suyunu kesmiş; 'Bana her hafta bir araba buğday, kırk koyun ve bir de taze insan vermezseniz köyünüze bir damla su akıtmam!' diyerek köylülere kan kustururmuş.",
          "Köylüler çaresizlikten inim inim inlerken, sıradaki kurban köyün en kimsesiz yetimi olan ihtiyar ananın oğluna, bizim Keloğlan’a gelmiş. Anacığı dizlerini dövüp saçını başını yolarken, kel kafasını kaşıyan Keloğlan, 'Ağlama anam, kaba kuvvetin zulmü çok olsa da aklın terazisi hepsinden ağırdır; ben o yedi başlı canavara mazlumun ahı neymiş göstereyim' demiş. Çantasına bir kalıp sert yağlı peynir, bir avuç kül ve bir de canlı beyaz güvercin koyup devin inine doğru yola koyulmuş.",
          "Devin mağarasına vardığında yedi baş birden kükreyerek yeri göğü inletmiş: 'Hah! Bana bir lokmalık çelimsiz bir keloğlan mı gönderdiler? Seni tek lokmada yutayım da gör!' demiş. Keloğlan hiç istifini bozmadan gülmüş: 'Yavaş ol ey zalim dev! Cüssene güvenip böbürlenme; benim nefesim taşları ufalar, gücüm senin yedi başını da yerle bir eder!' demiş. Dev inanmayıp yerden koca bir kaya almış, pençesinde öyle bir sıkmış ki taştan tozlar savrulmuş: 'Sen de böyle taş sıkabilir misin?' diye böbürlenmiş.",
          "Keloğlan çantasına el atıp taş gibi sert peyniri çıkarmış, pençesinde sıkıvermiş; peynirin suyu şorıl şorıl akınca dev şaşkına dönmüş: 'Aman, bu herif taştan su çıkarıyor!' diye ürkmüş. Ardından dev yerden bir kaya fırlatmış, kaya göğe çıkıp dakikalar sonra yere düşmüş. Keloğlan ise cebindeki beyaz güvercini çıkarıp kayalıkların arasından göğe fırlatıvermiş; güvercin uçup bulutların ardında kaybolunca, 'Gördün mü zalim? Benim attığım taş yere bile düşmez, göğe karışır!' demiş. Dev korkudan titremeye, Keloğlan’ın heybeti karşısında geri adım atmaya başlamış.",
          "Gece olunca zalim dev Keloğlan’ı uykusunda demir gürz ile ezmek için hain bir plan kurmuş. Lakin Keloğlan yatağına koca bir kütük koyup kendisi kuytu köşeye saklanmış. Dev gece yarısı gelip yatağa yedi başlı gürzüyle yüz kere vurmuş. Sabah olunca Keloğlan’ı gerinerek dimdik karşısında görünce devin aklı başından gitmiş: 'Burası bana dar gelir, bu yiğit beni helak eder' diyerek kaçmaya yeltenmiş. İşte o an Keloğlan mağaranın kilit taşını akılla yerinden oynatarak koca kayaları devin yedi başının üstüne indirmiş; köylünün suyunu açmış. İşte bu masal anlatır ki, zulüm ne kadar korkunç görünse de, zulmün tahtı adaletin ve aklın tek bir hamlesiyle yerle bir olur."
        ]
      },
      {
        id: "6-iftira", sira: "06", romen: "VI", baslik: "Sedef Bacı", tur: "Masal", huy: "İftira", kim: "Kötü Kalpli Dadı ve Kızı",
        bedel: "Sedef Bacı'yı denize atıp padişaha 'Kızın delirdi, çirkinleşti' diye iftira atarlar; hakikat ortaya çıkınca iftiracılar cezalarını çeker.",
        ozet: "Öz kardeşine canını siper eden masum Sedef Bacı’nın talihini kıskanan hilekâr dadı, attığı zehirli iftira ve kurduğu tuzakla masumun ocağını söndürmeye kalkar.",
        kapanis: "İftira, masumun üstüne atılan kara çamurdur; kuruyup döküldüğünde çamuru atanın elleri kara kalır.",
        kaynak: "Türk Masal Külliyatı (Tahir Alangu, Billur Köşk Masalları / Eberhard-Boratav Tip 450)",
        paragraflar: [
          "Evvel zaman içinde, kalbur saman içinde; ana baba yadigârı iki öksüz kardeş yaşarmış: Biri sedef gibi parlayan, dürüst ve güzel kalpli Sedef Bacı, diğeri ise onun gözünden sakındığı küçük erkek kardeşiymiş. Kötü kalpli üvey annenin elinden kaçıp gurbet yollarına düşmüşler. Çölde susuzluktan kavruldukları bir gün küçük kardeş, kurdun bastığı su birikintisinden su içince bir anda ak tüylü, sevimli bir ceylana dönüşüvermiş. Sedef Bacı gözyaşları içinde ceylan kardeşinin boynuna sarılmış, onu bağrına basıp dağ başında bir kulübede besleyip büyütmüş.",
          "Günün birinde o ülkenin genç ve adil padişahı avlanırken ceylanın peşinden kulübeye varmış; Sedef Bacı’nın edebine, masumiyetine ve ceylana gösterdiği merhamete vurulup onu sarayına baş hatun yapmış. Ceylan kardeş de sarayın has bahçesinde gül gibi yaşar olmuş. Lakin sarayda padişahın eski dadısı ile onun çopur yüzlü, fesat kızı varmış. Bu iki hasetçi kadın Sedef Bacı’nın bu saadetini hazmedememiş; 'Bu dağdan gelme kız koca saraya sultan oldu, benim kızıma ise yüz veren yok' diyerek içten içe zehir kaynatmışlar.",
          "Padişah sefere çıktığı bir gün fırsat kollayan dadı, Sedef Bacı’yı hava alma bahanesiyle deniz kıyısındaki yüksek kayalıklara götürmüş. Kızın arkasından sinsice sokulup onu azgın dalgaların içine itivermiş. Ardından kendi çopur kızını ipekli libaslara büründürüp Sedef Bacı’nın yatağına yatırmış. Padişah seferden döndüğünde yatakta yatan kadını görünce şaşırmış; dadı ise hemen zehirli iftirasını savurmuş: 'Devletlim, sultanımızın başına dertler yağdı; içine cinler girdi, çirkinleşti, üstelik her gece bahçedeki ceylanı kesip kanını içmek istiyor!' diyerek masum kıza en ağır karayı çalmış.",
          "Padişah duyduğu iftira karşısında derin bir kedere düşmüş ama gerçeği araştırmadan hüküm vermek istememiş. Bu sırada ceylan kardeş her akşam deniz kıyısına koşar, dalgalara doğru boynunu uzatıp, 'Sedef Bacım, tatlı bacım! Çopur kız yatakta sefa sürer, dadı cellada boynumu biler, nerdesin?' diye melemeye başlarmış. Denizin dibinde bir balığın karnında diri kalan Sedef Bacı ise dalgaların arasından, 'Ceylan kardeşim, ayağımda mercan bağlı, kollarımda yosun sarılı, gelemem!' diye ses verirmiş.",
          "Bir gece ceylanın ardından kıyıya gizlice gelen padişah bu feryadı kendi kulaklarıyla işitmiş. Dalgıçlar salıp Sedef Bacı’yı denizden sağ salim çıkarttırmış. Karşısında nur gibi parlayan hakiki eşini gören padişah, dadının ve kızının attığı çirkin iftiranın aslı astarını çözmüş. İftiracı dadı ile kızı divanın önünde suçlarını bir bir itiraf etmiş ve layık oldukları cezaya çarptırılmışlar. Bu masal da beyan eder ki; iftira bir müddet güneşi karartsa da hakikatin nuru en derin denizlerden bile fışkırıp masumun ak yüzünü ortaya çıkarır."
        ]
      },
      {
        id: "7-vefasizlik", sira: "07", romen: "VII", baslik: "Ak Yılan Masalı", tur: "Masal", huy: "Vefasızlık", kim: "Vefasız Oduncu",
        bedel: "Kendisini açlıktan ve kuyudan kurtaran velinimetine altın hırsıyla balta savurur; dostluğunu, bereketini ve evladını kaybeder.",
        ozet: "Ormanda rastladığı bilge Ak Yılan’ın her gün verdiği altın sikkeyle zenginleşen yoksul oduncu, daha çok altın kapmak hırsıyla yılana pusu kurup vefasızlığının acı bedelini öder.",
        kapanis: "Vefasızlık, ekmeğini yediği kaba hançer saplamaktır; yılanın kuyruğu kopsa da vefasız insanın vicdan yarası asla dikiş tutmaz.",
        kaynak: "Türk Masal Külliyatı (Pertev Naili Boratav, Az Gittik Uz Gittik / Tip 63)",
        paragraflar: [
          "Evvel zaman içinde, kalbur saman içinde; ormanda odun kesip sırtında satarak kıt kanaat geçinen, evinde açlıktan ağlayan çocuklarına ekmek götüremeyen bir yoksul oduncu varmış. Günlerden bir gün ormanın en kuytu yerinde, ulu bir pınarın başında belden aşağısı ak pullarla örtülü, başında zümrüt bir taç taşıyan bilge bir Ak Yılan ile karşılaşmış. Oduncu korkudan titreyip kaçmaya kalkınca, Ak Yılan insan diliyle seslenmiş: 'Korkma ey ademoğlu! Hâlini bilirim, derdine ortak olmak isterim. Sen her gün bana bir çanak taze süt getir, ben de sana rızkın için bir altın sikke vereyim' demiş.",
          "Oduncu sevinçle evine dönmüş. Ertesi gün bir çanak sütü taşın üstüne koymuş; Ak Yılan sütü içip taşın üstüne parıl parıl parlayan bir altın sikke bırakmış. Günler günleri, aylar ayları kovalamış. Oduncu her sabah süt götürüp altını almış; borçlarını ödemiş, konağını yaptırmış, ailesini refaha kavuşturmuş. Ak Yılan ona hem velinimet hem de en sadık dert ortağı olmuş. Lakin oduncunun içinde sinsi bir tamah ve nankörlük filizlenmeye başlamış.",
          "Oduncu bir gün hastalanıp yatağa düşünce oğlunu yanına çağırmış; pınarın başındaki sırrı anlatıp sütü yılana götürmesini tembihlemiş. Ne var ki babasının vefasız huyunu alan oğlan, yılanın her gün tek bir altın vermesini az bulmuş: 'Bu yılanın yuvası muhakkak altın doludur; tek tek bekleyeceğime yılanın başını taşla ezer, inindeki bütün hazineyi bir seferde kaparım!' diyerek pınarın başına gizlice koca bir nacakla varmış.",
          "Ak Yılan sütü içmek için kovuktan çıktığı an, nankör oğlan elindeki nacağı var gücüyle savurmuş. Lakin Ak Yılan çevik davranıp sıçramış; nacak sadece yılanın kuyruğunun ucunu kesmiş. Canı yanan Ak Yılan gazaba gelip zehirli dişiyle oğlanı sokmuş, çocuk oracıkta can vermiş. Akşam olup oğlunun cesedini pınar başında bulan oduncu, dövünüp saçını başını yolmuş ama bu felakete kendi nankörlüğünün ve vefasızlığının sebep olduğunu pekala bilmiş.",
          "Aradan bir yıl geçtikten sonra bereketi kaçan, vicdan azabıyla eriyen ihtiyar oduncu, eline yine bir çanak süt alıp pınarın başına varmış. Ak Yılan’a yalvarıp, 'Gel eski dostluğumuzu yenileyelim, beni affet' demiş. Kovuktan çıkan Ak Yılan başını kederle sallayarak şu tarihi hükmü vermiş: 'Ey vefasız ademoğlu! Sende bu evlat acısı, bende de bu kuyruk yarası varken biz artık dost olamayız. Vefa bir sırça kadehtir; bir kere kırdın mı bin yıl yapıştırsan da su tutmaz!' diyerek kovuğuna çekilmiş ve oduncuyu ömrünün sonuna dek vicdanının karanlığıyla baş başa bırakmış."
        ]
      },
      {
        id: "hukum", sira: "08", romen: "VIII", baslik: "Tuz Kadar Sevmek", tur: "Masal", huy: "Hüküm", kim: "Padişah (ve küçük kızı)",
        bedel: "Kızının sevgisini altına değil tuza benzetmesine öfkelenip onu sürgün eder; tuzsuz sofrada aç kalınca gösterişin değil hakikatin hükmünü anlar.",
        ozet: "Kızının sevgisini altına değil tuza benzetmesine öfkelenip onu sürgün eden kibirli padişah, yıllar sonra tuzsuz bir ziyafet sofrasında aç kalarak gösterişli sözlerin değil, sade hakikatin hükmünü anlar.",
        kapanis: "Hüküm odur ki; sarayların altını ve gümüşü çok olsa da, hakikat ve vefanın tuzu eksikse o sofrada ne insanın karnı doyar ne de nefsi terbiye olur.",
        kaynak: "Anadolu Masal Geleneği (Pertev Naili Boratav / Tahir Alangu Derlemeleri)",
        paragraflar: [
          "Evvel zaman içinde, kalbur saman içinde, develer tellal iken, pireler berber iken; memleketin birinde gücüyle gururlanan, tahtına mağrur bir padişah ile onun canından aziz bildiği üç kızı yaşarmış. Günlerden bir gün padişah, vezirlerini ve beylerini divana toplamış; kızlarının sevgisini cümle aleme göstermek için üçünü de huzuruna çağırmış. Önce büyük kızına dönüp sormuş: 'Söyle bakalım benim ceylan gözlü kızım, sen babanı ne kadar seversin?' Büyük kız boynunu büküp, 'Babacığım, ben seni dünyalar kadar, sarayındaki hazineler dolusu altın kadar severim' demiş. Padişahın göğsü kabarmış, ona altın bir taç bağışlamış.",
          "Sıra ortanca kıza gelmiş. Padişah aynı suali ona da sormuş. Ortanca kız tebessüm edip, 'Devletli babacığım, ben de seni kilerlerdeki, kervanlardaki gümüşler ve elmaslar kadar severim' demiş. Padişahın keyfine diyecek yokmuş; ona da gümüş işlemeli kaftanlar, ipekli kumaşlar buyurmuş. En sonunda gözü gibi sakındığı küçük kızına dönmüş: 'Bre benim nazlı fidanım, ya sen beni ne kadar seversin?' Küçük kız duru bir bakışla babasının gözlerinin içine bakmış, hiç tereddüt etmeden: 'Babacığım, ben seni bir tutam tuz kadar severim' deyivermiş.",
          "Bu sözü duyan padişahın kaşları çatılmış, gazaptan gözleri kan çanağına dönmüş. 'Bre nankör kız! Ablaların beni altınla gümüşle ölçerken sen beni ocak başındaki üç paralık tuzla mı bir tuttun?' diye kükremiş. Kibir ve gazap aklını öyle bir örtmüş ki, kızının ne demek istediğini sormadan cellatlarını çağırmış; kızın sırtındaki libası soydurup onu ıssız, yalçın dağların ardına sürgüne göndermiş. Küçük kız kaderine razı olup az gitmiş uz gitmiş, dere tepe düz gitmiş; en sonunda komşu diyarın adil şehzadesine rast gelmiş. Şehzade kızın edebine, aklına ve duru gönlüne hayran olup onu kendine eş seçmiş.",
          "Aradan yıllar geçmiş, küçük kız gurbet elinde hanım sultan olmuş ama babasının kibrini ve verdiği o haksız hükmü hiç unutmamış. Bir gün komşu hükümdar sıfatıyla ihtiyar padişahı sarayına büyük bir barış ziyafetine davet etmiş. Aşçılara gizlice ferman verip, 'Gelen padişahın önüne konacak bütün etleri, pilavları, çorbaları altın sahanlarda, gümüş kâselerde sunun; lakin hiçbirine tek bir zerre dahi tuz atmayın!' diye emretmiş. Padişah büyük bir debdebe ile sofraya oturmuş. Altın çanağa uzanıp nefis kokulu kebaptan bir lokma almış, yüzünü buruşturup geri bırakmış; gümüş kâsedeki çorbayı tatmış, yutamamış. Sofradaki her yemek göz alıcı imiş ama hiçbirinde ne tat varmış ne lezzet.",
          "Padişah en sonunda dayanamayıp kaşığını fırlatmış: 'Bre ev sahipleri! Bu ne biçim ziyafettir? Altın tabakta zehir mi yedirirsiniz? Bütün aşlarınız tatsız, tuzsuz, boğazdan geçmez!' diye haykırmış. İşte o vakit küçük kız tül peçesini kaldırmış, babasının önüne bir avuç ak tuz koyarak dile gelmiş: 'Ey devletli babam! Vaktiyle beni sarayından kovduran o üç paralık tuzu bugün koca padişah sofrasında arar oldun. Demek ki altınla gümüş ancak göz boyar; insanın canına can katan, aşına lezzet, yuvasına bereket veren asıl hakikat tuz imiş!' Bu sözler karşısında kibrinden ve acele hükmünden utanan padişahın gözünden yaşlar boşanmış; kızının boynuna sarılıp af dilemiş. İşte bu arşivin sekizinci ve son masalı da gösterir ki; insan altın gibi parlayan nefis heveslerine aldanırsa dünyayı ziyan eder; nefsin yedi başını kesip huzura ermek ise ancak hakikatin ve adaletin hükmüne boyun eğmekle mümkündür."
        ]
      }
    ];

    /* ==========================================================================
       JAVASCRIPT BÖLÜM 3: SAYFA DURUMU VE TARAYICI HAFIZASI (LOCALSTORAGE)
       Açıklama: Kullanıcının sitede yaptığı seçimleri saklar:
       - Hangi hikaye seçili?
       - Hangi hikayeler okundu?
       - Yazı boyutu ve gece/gündüz teması nedir?
       Böylece kullanıcı sayfayı yenilese bile okuduğu hikayeler kaybolmaz.
       ========================================================================== */
    const OLCEK_KADEMELERI = [0.92, 1, 1.12];
    let aktifHuyFiltresi = "Tümü";
    let seciliAnlatiId = null;
    let okunanAnlatilar = [];
    let aktifOlcekIndeksi = 1;

    // Tarayıcı hafızasından (localStorage) kayıtlı veriyi okur
    function depodanOku(anahtar, varsayilan) {
      try { return JSON.parse(localStorage.getItem(anahtar)) ?? varsayilan; } catch { return varsayilan; }
    }
    // Verileri tarayıcı hafızasına (localStorage) yazar
    function depoyaYaz(anahtar, deger) {
      try { localStorage.setItem(anahtar, JSON.stringify(deger)); } catch {}
    }

    /* ==========================================================================
       JAVASCRIPT BÖLÜM 4: EJDERHA BAŞLARINI VE MÜHÜRLERİ EKRANA ÇİZME
       Açıklama: 
       1) Sağ üstteki 7 başlı Selçuklu ejderha gravürünün başlarını çizer.
       2) Okunan bir baş varsa onu kırmızı renge çevirir (kesildi damgası).
       3) 'X/7 BAŞ KESİLDİ' sayacını ve altındaki elmas mühürleri günceller.
       ========================================================================== */
    const EJDERHA_KONUMLARI = [
      { x: 54, y: 18 }, { x: 128, y: 14 }, { x: 204, y: 11 }, { x: 280, y: 8 },
      { x: 356, y: 11 }, { x: 432, y: 14 }, { x: 506, y: 18 }
    ];

    function ejderhaVeMuhurleriGuncelle() {
      // 1) Sağ üstteki Selçuklu ejderha gravürünün 7 başını çiz
      const ejderhaKatmani = document.getElementById("ejderha-baslar-katmani");
      ejderhaKatmani.innerHTML = EJDERHA_KONUMLARI.map((k, i) => {
        const a = ANLATILAR[i];
        const sinif = `ejderha-bas-grubu ${okunanAnlatilar.includes(a.id) ? "kesildi" : ""} ${seciliAnlatiId === a.id ? "secili" : ""}`;
        const cx = k.x;
        const cy = k.y + 20;
        // Zarif, küçük ve kıvrımlı Selçuklu Rumî ejderha başı formu
        const kafaYolu = `M ${cx},${cy - 14} C ${cx - 5},${cy - 16} ${cx - 10},${cy - 14} ${cx - 13},${cy - 9} C ${cx - 17},${cy - 4} ${cx - 15},${cy + 1} ${cx - 11},${cy + 4} C ${cx - 13},${cy + 9} ${cx - 9},${cy + 14} ${cx},${cy + 19} C ${cx + 9},${cy + 14} ${cx + 13},${cy + 9} ${cx + 11},${cy + 4} C ${cx + 15},${cy + 1} ${cx + 17},${cy - 4} ${cx + 13},${cy - 9} C ${cx + 10},${cy - 14} ${cx + 5},${cy - 16} ${cx},${cy - 14} Z`;
        const gozler = k.tekGoz
          ? `<circle class="bas-goz" cx="${cx}" cy="${cy - 2}" r="2.8"/>`
          : `<ellipse class="bas-goz" cx="${cx - 5}" cy="${cy - 2}" rx="1.6" ry="2.2"/>
             <ellipse class="bas-goz" cx="${cx + 5}" cy="${cy - 2}" rx="1.6" ry="2.2"/>`;
        return `<g class="${sinif}" data-bas-id="${a.id}" onclick="location.hash='#/bas/${a.id}'">
          <title>${a.sira} · ${a.huy} (${a.baslik})</title>
          <path class="bas-dil" d="M${cx},${cy - 14} Q${cx - 3},${cy - 20} ${cx - 5},${cy - 24} M${cx},${cy - 14} Q${cx + 3},${cy - 20} ${cx + 5},${cy - 24}" stroke-width="1.1"/>
          <path class="bas-cerceve" d="${kafaYolu}"/>
          ${gozler}
          <text class="bas-no" x="${cx}" y="${cy + 10}" text-anchor="middle">${a.romen}</text>
          <text class="bas-isim-etiket" x="${cx}" y="${cy + 30}" text-anchor="middle">${a.huy.toLocaleUpperCase("tr")}</text>
        </g>`;
      }).join("");

      // 2) Yedi Baş elmas mühür dizisini ve sayacı güncelle
      let kesilenSayisi = 0;
      document.getElementById("ust-elmas-dizisi").innerHTML = ANLATILAR.map((a, i) => {
        const okundu = okunanAnlatilar.includes(a.id);
        const aktif = seciliAnlatiId === a.id;
        if (i < 7) {
          if (okundu) kesilenSayisi++;
          return `<button type="button" class="bas-elmas-buton ${okundu ? "okundu" : ""} ${aktif ? "aktif-bas" : ""}" title="${a.sira} · ${a.baslik}" onclick="location.hash='#/bas/${a.id}'">
            <svg viewBox="0 0 16 16" aria-hidden="true"><polygon class="elmas-sekil" points="8,1.5 14.5,8 8,14.5 1.5,8"/></svg>
            <span class="elmas-mini-no">${a.sira}</span>
          </button>`;
        }
        return `<span class="hukum-ayirici-cizgi" aria-hidden="true"></span>
          <button type="button" class="hukum-isareti-buton ${okundu ? "okundu" : ""}" title="08 · Hüküm: ${a.baslik}" onclick="location.hash='#/hukum'">
            <span class="hukum-isareti-cizgi"></span><span class="elmas-mini-no">08</span>
          </button>`;
      }).join("");

      document.getElementById("bas-sayac-metni").textContent = `${kesilenSayisi}/7 BAŞ KESİLDİ`;
    }

    /* ==========================================================================
       JAVASCRIPT BÖLÜM 5: SOL FİHRİSTİ LİSTELEME VE KÖTÜ HUYA GÖRE SÜZME
       Açıklama: Kullanıcı yukarıdan bir huy seçtiğinde (örneğin 'Kibir'),
       ANLATILAR listesini filtreler ve sadece o huya ait hikayeleri sol menüye dizer.
       'Tümü' seçilirse 8 hikayenin tamamını listeler.
       ========================================================================== */
    function filtreleVeListele() {
      const eslesenler = ANLATILAR.filter(a => aktifHuyFiltresi === "Tümü" || a.huy === aktifHuyFiltresi);
      document.getElementById("sonuc-sayaci").textContent = `${eslesenler.length} MASAL GÖSTERİLİYOR`;

      document.getElementById("anlati-listesi").innerHTML = eslesenler.map(a => {
        const okundu = okunanAnlatilar.includes(a.id);
        const aktif = seciliAnlatiId === a.id;
        const adres = a.id === "hukum" ? "#/hukum" : `#/bas/${a.id}`;
        return `<li class="anlati-satiri ${a.id === "hukum" ? "hukum-satiri" : ""} ${okundu ? "okundu" : ""}">
          <a class="anlati-baglantisi" href="${adres}" data-id="${a.id}" ${aktif ? 'aria-current="page"' : ""}>
            <div class="satir-numara-kutusu">
              <span class="satir-tamga">${a.id === "hukum" ? "SON" : "BAŞ"}</span>
              <span class="satir-numara">${a.sira}</span>
            </div>
            <div class="satir-bilgi">
              <span class="satir-baslik">${a.baslik}</span>
              <span class="satir-alt-meta">${a.huy.toLocaleUpperCase("tr")} · ${a.tur.toLocaleUpperCase("tr")}</span>
            </div>
            <span class="satir-okundu-isareti" aria-label="${okundu ? "Okundu" : "Okunmadı"}">
              <svg viewBox="0 0 12 12" aria-hidden="true"><polygon points="6,1 11,6 6,11 1,6"/></svg>
            </span>
          </a>
        </li>`;
      }).join("");
    }

    /* ==========================================================================
       JAVASCRIPT BÖLÜM 6: SEÇİLEN HİKÂYEYİ SAĞ OKUMA PANELİNE YÜKLEME
       Açıklama: Kullanıcı fihristten veya ejderha başından bir hikaye seçtiğinde:
       - Hikayeyi 'okundu' listesine ekler ve hafızaya kaydeder.
       - Başlık, özet, kötü huy fişi ve okuma paragraflarını sağ panele yerleştirir.
       - Önceki / Sonraki hikaye butonlarını çalışır hale getirir.
       - Eğer hiçbir hikaye seçilmemişse giriş kapağını (sekiz levhalı matris) gösterir.
       ========================================================================== */
    function anlatiGoster(id) {
      const indeks = ANLATILAR.findIndex(item => item.id === id);
      const bosDefter = document.getElementById("bos-defter");
      const anlatiGorunumu = document.getElementById("anlati-gorunumu");

      // Geçersiz veya boş hash ise Katalog Kapağını göster
      if (indeks === -1) {
        seciliAnlatiId = null;
        bosDefter.classList.remove("gizli");
        anlatiGorunumu.classList.remove("aktif");
        document.body.classList.remove("mobil-okuma-acik");
        filtreleVeListele();
        ejderhaVeMuhurleriGuncelle();
        document.getElementById("ilerleme-cubugu").style.width = "0%";
        return;
      }

      const a = ANLATILAR[indeks];
      seciliAnlatiId = a.id;
      if (!okunanAnlatilar.includes(a.id)) {
        okunanAnlatilar.push(a.id);
      }

      // Üst bilgi, başlık, arşiv fişi ve paragrafları doldur (dk ve Varak ibaresi olmadan)
      document.getElementById("anlati-ust-meta").textContent = a.id === "hukum"
        ? `HÜKÜM · ${a.tur.toLocaleUpperCase("tr")} · 08/08`
        : `BAŞ ${a.sira} · ${a.tur.toLocaleUpperCase("tr")} · ${a.sira}/08`;
      document.getElementById("anlati-baslik").textContent = a.baslik;
      document.getElementById("anlati-ozet").textContent = a.ozet;
      document.getElementById("fis-huy").textContent = a.huy;
      document.getElementById("fis-kim").textContent = a.kim;
      document.getElementById("fis-bedel").textContent = a.bedel;
      document.getElementById("gravur-altyazi").textContent = `LEVHA ${a.sira} · ${a.huy.toLocaleUpperCase("tr")}`;
      document.getElementById("anlati-ozel-svg").innerHTML = SAHNE_GRAVURLERI[a.id] || "";
      document.getElementById("mobil-cubuk-baslik").textContent = `${a.sira} · ${a.baslik}`;
      document.getElementById("anlati-govde").innerHTML = a.paragraflar.map(p => `<p>${p}</p>`).join("");
      document.getElementById("anlati-kapanis").textContent = a.kapanis;
      document.getElementById("anlati-kaynak").textContent = `Kaynak: ${a.kaynak}`;

      // Önceki / Sonraki Baş düğmeleri
      const oncekiBtn = document.getElementById("btn-onceki-anlati");
      const sonrakiBtn = document.getElementById("btn-sonraki-anlati");
      oncekiBtn.disabled = indeks <= 0;
      sonrakiBtn.disabled = indeks >= ANLATILAR.length - 1;
      oncekiBtn.onclick = () => { const h = ANLATILAR[indeks - 1]; location.hash = h.id === "hukum" ? "#/hukum" : `#/bas/${h.id}`; };
      sonrakiBtn.onclick = () => { const h = ANLATILAR[indeks + 1]; location.hash = h.id === "hukum" ? "#/hukum" : `#/bas/${h.id}`; };

      bosDefter.classList.add("gizli");
      anlatiGorunumu.classList.add("aktif");
      document.body.classList.add("mobil-okuma-acik");
      filtreleVeListele();
      ejderhaVeMuhurleriGuncelle();
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    /* ==========================================================================
       JAVASCRIPT BÖLÜM 7: GECE/GÜNDÜZ MODU, YAZI BOYUTU VE SAYFA LİNKLERİ (HASH)
       Açıklama:
       - temaUygula: Gece/gündüz modunu değiştirir ve hafızaya kaydeder.
       - olcekUygula: A- ve A+ butonlarıyla font boyutunu büyütüp küçültür.
       - hashCozumle: Sayfa linkindeki adrese (#/bas/1-kibir gibi) bakarak
         kullanıcının istediği doğru hikayeyi açar.
       ========================================================================== */
    function temaUygula(tema) {
      const gecerli = tema === "gece" ? "gece" : "gunduz";
      document.documentElement.setAttribute("data-tema", gecerli);
      const btn = document.getElementById("btn-tema");
      btn.setAttribute("aria-pressed", String(gecerli === "gece"));
      btn.textContent = gecerli === "gece" ? "GÜNDÜZ" : "GECE";
      depoyaYaz("yediBas_tema", gecerli);
    }

    function olcekUygula(indeks) {
      aktifOlcekIndeksi = Math.max(0, Math.min(OLCEK_KADEMELERI.length - 1, indeks));
      document.documentElement.style.setProperty("--olcek", String(OLCEK_KADEMELERI[aktifOlcekIndeksi]));
      depoyaYaz("yediBas_olcek", aktifOlcekIndeksi);
    }

    function hashCozumle() {
      const hash = location.hash || "";
      if (hash === "#/hukum") return anlatiGoster("hukum");
      if (hash.startsWith("#/bas/")) return anlatiGoster(decodeURIComponent(hash.replace("#/bas/", "")));
      anlatiGoster(null);
    }

    /* ==========================================================================
       JAVASCRIPT BÖLÜM 8: UYGULAMANIN İLK AÇILIŞI (BAŞLATMA FONKSİYONU)
       Açıklama: Sayfa ilk yüklendiğinde otomatik çalışır:
       - Hafızadaki kayıtlı temayı, yazı boyutunu ve okunan hikayeleri yükler.
       - Giriş kapağındaki 8 adet küçük seçim kartını oluşturur.
       - Filtre sekmelerine, okuma araçlarına ve butonlara tıklama görevi verir.
       - Klavye kısayollarını (Yukarı/Aşağı ok tuşları, J/K ve ESC) dinler.
       ========================================================================== */
    function baslat() {
      // 1. Sayfa her yenilendiğinde okuma sayacını sıfırla (0/7 Baş Kesildi olarak başlar)
      okunanAnlatilar = [];
      try { localStorage.removeItem("yediBas_okunanlar"); } catch {}
      temaUygula(depodanOku("yediBas_tema", "gunduz"));
      olcekUygula(depodanOku("yediBas_olcek", 1));

      // 2. Açılış kapağındaki 8 adet taş baskı seçim kartını oluştur
      document.getElementById("bos-defter-matris").innerHTML = ANLATILAR.map(a => {
        const adres = a.id === "hukum" ? "#/hukum" : `#/bas/${a.id}`;
        return `<button type="button" class="matris-hucre" onclick="location.hash='${adres}'">
          <div class="matris-ust">
            <span class="matris-no">${a.id === "hukum" ? "HÜKÜM" : "BAŞ"} ${a.sira}</span>
            <span class="matris-tur">${a.tur}</span>
          </div>
          <div class="matris-minyaturler" aria-hidden="true">${SAHNE_GRAVURLERI[a.id]}</div>
          <span class="matris-huy">${a.huy}</span>
          <span class="matris-isim">${a.baslik}</span>
        </button>`;
      }).join("");

      // 3. Kötü huy filtreleme sekmelerine tıklama özelliği ver
      document.querySelectorAll("#huy-filtreleri .filtre-sekme").forEach(sekme => {
        sekme.onclick = () => {
          document.querySelectorAll("#huy-filtreleri .filtre-sekme").forEach(s => s.classList.remove("aktif"));
          sekme.classList.add("aktif");
          aktifHuyFiltresi = sekme.dataset.huy;
          filtreleVeListele();
        };
      });

      // 4. Okuma araçları butonlarına tıklama özelliği ver (A-, A+, Gece Modu, Rastgele Baş)
      document.getElementById("btn-yazi-kucult").onclick = () => olcekUygula(aktifOlcekIndeksi - 1);
      document.getElementById("btn-yazi-buyut").onclick = () => olcekUygula(aktifOlcekIndeksi + 1);
      document.getElementById("btn-tema").onclick = () => temaUygula(document.documentElement.getAttribute("data-tema") === "gece" ? "gunduz" : "gece");
      document.getElementById("btn-rastgele-anlati").onclick = () => { location.hash = `#/bas/${ANLATILAR[Math.floor(Math.random() * 7)].id}`; };
      document.getElementById("btn-deftere-don").onclick = () => { location.hash = ""; };

      // 5. Sayfa adresi değiştiğinde, sayfa kaydırıldığında ve klavye tuşlarına basıldığında tepki ver
      window.addEventListener("hashchange", hashCozumle);
      window.addEventListener("scroll", () => {
        const yukseklik = document.documentElement.scrollHeight - window.innerHeight;
        document.getElementById("ilerleme-cubugu").style.width = (!seciliAnlatiId || yukseklik <= 0) ? "0%" : `${Math.min(100, (window.scrollY / yukseklik) * 100)}%`;
      }, { passive: true });

      window.addEventListener("keydown", e => {
        if (e.key === "Escape" && seciliAnlatiId) location.hash = "";
        const ileri = e.key === "ArrowDown" || e.key === "j" || e.key === "J";
        const geri = e.key === "ArrowUp" || e.key === "k" || e.key === "K";
        if (!ileri && !geri) return;
        const baglantilar = Array.from(document.querySelectorAll("#anlati-listesi .anlati-baglantisi"));
        if (!baglantilar.length) return;
        e.preventDefault();
        const mevcut = baglantilar.findIndex(el => el.dataset.id === seciliAnlatiId);
        const yeni = ileri ? (mevcut < baglantilar.length - 1 ? mevcut + 1 : 0) : (mevcut > 0 ? mevcut - 1 : baglantilar.length - 1);
        location.hash = baglantilar[yeni].getAttribute("href");
      });

      hashCozumle();
    }

    document.addEventListener("DOMContentLoaded", baslat);

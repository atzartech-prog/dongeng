/* ==========================================
   Dongeng Anak Nusantara JavaScript Logic
   Includes Story Data, Search, Filter, TTS
   and Interactive Confetti Celebration
   ========================================== */

// 1. Stories Database
const stories = [
    {
        id: "kancil-buaya",
        title: "Kancil dan Buaya",
        category: "Fabel",
        readTime: "3 Menit",
        cover: "assets/kancil_buaya.jpg",
        description: "Kisah Kancil yang cerdik mengelabui kawanan buaya lapar agar bisa menyeberangi sungai untuk memakan buah-buahan segar.",
        pages: [
            "Pada suatu hari, Kancil sedang berjalan-jalan di pinggir hutan. Tiba-tiba, perutnya berbunyi, 'Kruuuuk...' Kancil merasa sangat lapar. Dia melihat pohon buah-buahan yang lebat di seberang sungai. Namun, sungai itu sangat lebar dan arusnya cukup deras.",
            "Kancil pun kebingungan. Bagaimana caranya menyeberang tanpa hanyut? Tiba-tiba, seekor buaya besar muncul dari dalam air. 'Nyam, nyam... Kancil! Kebetulan sekali kamu ke sini. Kami sedang lapar!' seru Buaya itu bersama teman-temannya.",
            "Kancil tidak panik. Ia tersenyum cerdik dan berkata, 'Wahai Buaya yang baik! Aku membawa kabar gembira dari Raja Hutan. Raja ingin membagikan daging segar untuk kalian semua. Tapi, aku harus menghitung jumlah kalian terlebih dahulu!'",
            "'Benarkah itu?' tanya Buaya senang. 'Tentu saja! Sekarang, berbarislah yang rapi dari tepi sungai ini hingga ke seberang sana. Biar aku mudah menghitung kalian!' jawab Kancil dengan meyakinkan.",
            "Mendengar hal itu, kawanan buaya pun berbaris rapi membentuk jembatan. Kancil lalu melompat ke punggung buaya pertama sambil berteriak, 'Satu!'. Lalu melompat ke buaya berikutnya, 'Dua!', 'Tiga!', hingga akhirnya tiba di seberang sungai.",
            "Setelah sampai di seberang, Kancil tertawa riang dan melambaikan tangannya. 'Terima kasih, teman-teman buaya! Kalian sudah membantuku menyeberang sungai. Sebenarnya tidak ada daging segar dari Raja!' Kancil pun berlari gembira menikmati buah-buahan segar, sementara para buaya kesal karena telah tertipu."
        ]
    },
    {
        id: "keong-mas",
        title: "Keong Mas",
        category: "Legenda",
        readTime: "4 Menit",
        cover: "assets/keong_mas.jpg",
        description: "Kisah Putri Galuh Candra Kirana dari Kerajaan Daha yang dikutuk menjadi keong emas oleh penyihir jahat akibat keirian saudaranya.",
        pages: [
            "Dahulu kala di Kerajaan Daha, hiduplah dua putri yang sangat cantik bernama Galuh Candra Kirana dan Dewi Galuh. Candra Kirana bertunangan dengan Pangeran tampan bernama Raden Inu Kertapati. Namun, Dewi Galuh merasa iri dan ingin merebut sang Pangeran.",
            "Dewi Galuh pergi ke penyihir jahat untuk mengutuk Candra Kirana. 'Ubah dia menjadi sesuatu yang menjijikkan!' pinta Dewi Galuh. Dengan sihirnya yang hitam, sang penyihir mengubah Candra Kirana menjadi Keong Mas (keong berwarna emas) lalu membuangnya ke laut.",
            "Kutukan itu hanya akan hilang jika Keong Mas ditemukan oleh tunangannya, Raden Inu Kertapati. Suatu hari, seorang nenek tua yang sedang mencari ikan menemukan Keong Mas yang berkilau indah. Nenek itu membawanya pulang dan meletakkannya di dalam tempayan air.",
            "Keesokan harinya, ketika nenek pulang dari sawah, ia sangat terkejut. Di atas mejanya sudah tersedia berbagai makanan yang sangat lezat dan rumahnya bersih rapi. Kejadian aneh ini terus berulang setiap hari.",
            "Karena penasaran, keesokan harinya sang nenek pura-pura pergi tetapi sebenarnya mengintip dari celah dinding. Ia terkejut melihat Keong Mas berubah menjadi gadis cantik jelita yang langsung memasak di dapur. Nenek pun masuk dan bertanya, 'Siapakah engkau, wahai putri cantik?'",
            "Candra Kirana menceritakan semuanya kepada sang nenek. Sementara itu, Raden Inu Kertapati terus mencari tunangannya hingga akhirnya menyamar menjadi rakyat biasa dan tiba di gubuk nenek tersebut. Begitu melihat Candra Kirana, kutukan pun sirna seketika. Mereka akhirnya kembali ke istana dan hidup bahagia."
        ]
    },
    {
        id: "malin-kundang",
        title: "Malin Kundang",
        category: "Legenda",
        readTime: "4 Menit",
        cover: "assets/malin_kundang.jpg",
        description: "Pesan moral mendalam dari Sumatera Barat tentang Malin Kundang yang dikutuk menjadi batu karena durhaka kepada ibu kandungnya.",
        pages: [
            "Di sebuah desa nelayan di Sumatera Barat, hiduplah Malin Kundang bersama ibunya yang miskin namun sangat menyayanginya. Malin adalah anak yang rajin dan berani. Ketika dewasa, ia memutuskan untuk merantau menaiki kapal besar demi mengubah nasib mereka.",
            "Bertahun-tahun berlalu tanpa kabar. Sang ibu setiap hari menunggu di pantai, memandang ke laut sambil berdoa agar Malin segera pulang. Akhirnya, sebuah kapal besar yang megah berlabuh di pantai. Dari kapal itu turunlah seorang pria kaya raya bersama istrinya yang cantik.",
            "Penduduk berteriak, 'Malin Kundang telah kembali! Dia sudah kaya raya!'. Sang ibu yang mendengar kabar itu langsung berlari ke pantai dengan hati berbunga-bunga. Begitu melihat Malin, ia langsung memeluknya erat, 'Oh Malin, anakku, akhirnya kamu pulang...'",
            "Namun, Malin merasa malu melihat penampilan ibunya yang dekil, tua, dan mengenakan baju compang-camping di hadapan istrinya yang kaya. Malin mendorong ibunya hingga jatuh dan berteriak, 'Perempuan tua tidak tahu diri! Siapa kamu? Ibu kandungku sudah lama meninggal!'",
            "Ibu Malin menangis tersedu-sedu, hatinya hancur berkeping-keping. Dengan sisa tenaganya, ia bersimpuh dan berdoa ke langit, 'Ya Tuhan, jika dia memang benar anakku Malin Kundang, aku memaafkannya. Tetapi jika ia melupakanku, hukumlah dia menjadi batu!'",
            "Seketika itu juga, langit yang cerah berubah menjadi gelap gulita. Badai dahsyat menghantam kapal Malin hingga hancur berkeping-keping. Di tengah gemuruh badai, tubuh Malin perlahan-lahan mengeras dan berubah menjadi batu dalam posisi bersujud memohon ampun."
        ]
    },
    {
        id: "semut-belalang",
        title: "Semut dan Belalang",
        category: "Moral",
        readTime: "3 Menit",
        cover: "assets/semut_belalang.jpg",
        description: "Kisah persahabatan antara semut pekerja keras dan belalang pemalas yang mengajarkan pentingnya bersiap untuk masa depan.",
        pages: [
            "Di sebuah ladang yang hijau di musim panas, seekor Belalang sedang bersenang-senang, bernyanyi, dan bermain biola dengan gembira. Di dekatnya, sekelompok Semut berjalan beriringan dengan susah payah membawa biji jagung yang berat menuju sarang mereka.",
            "'Hei Semut! Mengapa kalian bekerja begitu keras di hari seindah ini? Mari menyanyi dan menari bersamaku!' seru Belalang santai. Semut menjawab, 'Kami sedang mengumpulkan makanan untuk persediaan musim dingin nanti. Sebaiknya kamu juga melakukan hal yang sama.'",
            "Belalang tertawa meremehkan, 'Hahaha! Musim dingin masih sangat lama, teman. Kita punya banyak makanan sekarang. Mengapa harus khawatir?'. Belalang terus bermain musik sedangkan semut kembali bekerja mengumpulkan makanan tanpa lelah.",
            "Bulan-bulan berlalu, dan musim dingin pun tiba. Ladang yang tadinya hijau tertutup oleh salju tebal yang dingin. Semua tumbuhan mati dan tidak ada makanan yang bisa ditemukan di mana pun. Belalang mulai kelaparan dan kedinginan.",
            "Dengan tubuh gemetar, Belalang pergi ke sarang Semut. Di sana, ia melihat para semut hidup dengan hangat dan nyaman, menikmati jagung dan gandum yang telah mereka kumpulkan selama musim panas. Belalang mengetuk pintu dan memohon bantuan.",
            "Melihat Belalang yang kelaparan, Semut yang baik hati membagikan makanannya. Belalang merasa sangat menyesal dan berjanji, 'Terima kasih, Semut. Aku berjanji tidak akan malas lagi dan akan belajar bersiap untuk masa depan.' Sejak saat itu, Belalang bekerja sama dengan Semut."
        ]
    },
    {
        id: "timun-mas",
        title: "Timun Mas",
        category: "Legenda",
        readTime: "4 Menit",
        cover: "assets/timun_mas.jpg",
        description: "Kisah keberanian gadis bernama Timun Mas yang berjuang melarikan diri dari kejaran raksasa jahat Buto Ijo menggunakan bekal ajaib.",
        pages: [
            "Dahulu kala, di sebuah desa terpencil, hiduplah seorang janda tua bernama Mbok Srini. Ia hidup sebatang kara dan sangat mendambakan kehadiran seorang anak. Suatu hari, Mbok Srini berdoa dengan sangat khusyuk di dekat hutan.",
            "Tiba-tiba, bumi bergetar dan muncullah raksasa berwajah menyeramkan bernama Buto Ijo. 'Aku bisa mengabulkan keinginanmu, Mbok Srini! Tapi dengan syarat, saat anak itu berusia 17 tahun, kamu harus menyerahkannya kepadaku untuk kumakan!' kata Buto Ijo. Mbok Srini yang sangat mendambakan anak pun terpaksa menyetujuinya.",
            "Buto Ijo memberikan sebutir biji mentimun ajaib. Mbok Srini menanamnya di ladang. Beberapa waktu kemudian, tumbuhlah buah mentimun yang sangat besar dan berkilau keemasan. Ketika Mbok Srini membelahnya, ia terkejut melihat bayi perempuan yang cantik di dalamnya. Bayi itu diberi nama Timun Mas.",
            "Tahun demi tahun berlalu, Timun Mas tumbuh menjadi gadis yang cantik, cerdas, dan sangat baik budi. Mbok Srini sangat menyayanginya. Namun, seiring berjalannya waktu, Mbok Srini mulai merasa cemas karena usia Timun Mas hampir mendekati 17 tahun.",
            "Sebelum hari kedatangan Buto Ijo tiba, Mbok Srini bermimpi menemui seorang petapa sakti di gunung. Keesokan harinya, ia mengutus Timun Mas menemui petapa itu. Sang petapa memberikan empat kantong kecil berisi biji mentimun, jarum, garam, dan terasi sebagai senjata pelindung diri.",
            "Ketika hari ulang tahun Timun Mas yang ke-17 tiba, Buto Ijo datang menagih janji dengan suara menggelegar. Mbok Srini menyuruh Timun Mas segera berlari lewat pintu belakang. Mengetahui mangsanya kabur, Buto Ijo sangat marah dan segera mengejar Timun Mas dengan langkah kakinya yang besar.",
            "Saat Buto Ijo hampir menangkapnya, Timun Mas melemparkan kantong pertama berisi biji mentimun. Seketika, ladang di sekitarnya berubah menjadi kebun mentimun yang lebat. Buto Ijo yang kelaparan berhenti untuk memakan buah-buah itu, memberi waktu bagi Timun Mas untuk menjauh.",
            "Namun, Buto Ijo kembali mengejar. Timun Mas melempar kantong kedua berisi jarum. Jarum-jarum itu berubah menjadi hutan bambu yang sangat lebat dan berduri tajam. Buto Ijo terluka dan kesulitan melewatinya, tetapi dengan kekuatannya ia berhasil menerobos.",
            "Timun Mas melemparkan kantong ketiga berisi garam. Garam itu seketika mengubah daratan menjadi lautan yang sangat luas dan dalam. Buto Ijo terpaksa berenang bersusah payah menyeberangi lautan tersebut.",
            "Terakhir, saat raksasa itu hampir mendekat lagi, Timun Mas melemparkan kantong keempat berisi terasi. Terasi itu seketika berubah menjadi danau lumpur hisap yang mendidih. Buto Ijo terperosok ke dalamnya dan tenggelam. Timun Mas pun selamat dan hidup bahagia selamanya bersama Mbok Srini."
        ]
    },
    {
        id: "sangkuriang",
        title: "Sangkuriang",
        category: "Legenda",
        readTime: "4 Menit",
        cover: "assets/sangkuriang.jpg",
        description: "Legenda Jawa Barat tentang asal-usul Gunung Tangkuban Perahu yang tercipta dari perahu besar yang ditendang oleh Sangkuriang.",
        pages: [
            "Dahulu kala di Jawa Barat, hiduplah seorang putri cantik bernama Dayang Sumbi. Ia tinggal bersama anjing kesayangannya bernama Tumang, yang sebenarnya adalah titisan dewa. Mereka memiliki seorang putra yang tampan dan gagah bernama Sangkuriang.",
            "Suatu hari, Sangkuriang berburu di hutan ditemani Tumang. Namun, setelah berjam-jam, mereka tidak mendapatkan hasil apa pun. Sangkuriang menyuruh Tumang untuk mengejar seekor babi hutan, namun Tumang menolak. Karena marah, Sangkuriang tidak sengaja membunuh Tumang.",
            "Ketika pulang, Sangkuriang memberikan hati Tumang kepada ibunya untuk dimasak. Setelah memakannya, Dayang Sumbi menanyakan keberadaan Tumang. Sangkuriang akhirnya mengaku. Mendengar hal itu, Dayang Sumbi sangat marah dan memukul kepala Sangkuriang dengan sendok nasi hingga terluka dan mengusirnya pergi.",
            "Bertahun-tahun berlalu, Sangkuriang tumbuh menjadi pemuda yang sangat sakti dan berkelana ke berbagai tempat. Suatu hari, ia kembali ke desa asalnya tanpa menyadari tempat itu. Di sana, ia bertemu dengan seorang wanita yang sangat cantik jelita dan langsung jatuh cinta.",
            "Wanita itu tidak lain adalah Dayang Sumbi, yang telah dianugerahi awet muda oleh para dewa. Dayang Sumbi pun menerima lamaran Sangkuriang. Namun, saat Sangkuriang hendak merapikan rambutnya sebelum pesta pernikahan, Dayang Sumbi melihat bekas luka di kepala pemuda itu.",
            "Dayang Sumbi terkejut karena menyadari bahwa pemuda itu adalah putra kandungnya sendiri yang telah lama hilang. Ia mencoba menjelaskan kebenaran tersebut, tetapi Sangkuriang tidak percaya dan tetap bersikeras untuk menikahinya.",
            "Untuk membatalkan pernikahan tanpa memicu kemarahan, Dayang Sumbi mengajukan dua syarat berat: membendung sungai Citarum dan membuat perahu besar untuk menyeberanginya, semuanya harus selesai dalam waktu satu malam sebelum fajar menyingsing.",
            "Sangkuriang menyanggupinya. Menggunakan kesaktiannya, ia memanggil bala tentara jin untuk membantunya. Sebelum tengah malam, bendungan hampir selesai dan pembuatan perahu raksasa pun hampir rampung. Dayang Sumbi yang cemas mulai berdoa meminta petunjuk dewa.",
            "Dayang Sumbi kemudian membentangkan kain sutra merah di ufuk timur dan menyuruh warga menumbuk padi agar ayam jantan berkokok. Melihat cahaya merah dan mendengar kokok ayam, para jin mengira fajar telah tiba. Mereka ketakutan dan langsung pergi meninggalkan pekerjaan yang belum selesai.",
            "Sangkuriang menyadari bahwa ia telah dikelabui. Sangat marah karena kegagalannya, ia menjebol bendungan yang telah dibuat hingga menyebabkan banjir bandang. Ia lalu menendang perahu besar buatannya hingga terbang jauh dan jatuh tertelungkup, yang kini dikenal sebagai Gunung Tangkuban Perahu."
        ]
    },
    {
        id: "bawang-merah-putih",
        title: "Bawang Merah dan Bawang Putih",
        category: "Moral",
        readTime: "4 Menit",
        cover: "assets/bawang_merah_putih.jpg",
        description: "Kisah tentang Bawang Putih yang baik hati dan Bawang Merah yang serakah, mengajarkan bahwa kebaikan akan selalu membuahkan kebahagiaan.",
        pages: [
            "Di sebuah desa, hiduplah seorang gadis yatim bernama Bawang Putih. Ia tinggal bersama ibu tiri dan saudara tirinya yang bernama Bawang Merah. Bawang Putih selalu diperlakukan layaknya pembantu, disuruh mengerjakan semua pekerjaan rumah tangga dari pagi hingga malam.",
            "Sementara itu, Bawang Merah hidup bermalas-malasan dan selalu dimanjakan oleh ibunya. Suatu hari, saat mencuci pakaian di sungai yang berarus deras, salah satu baju kesayangan ibu tirinya hanyut terbawa arus. Bawang Putih yang takut dihukum pun berjalan menyusuri sungai mencari baju tersebut.",
            "Pencariannya membawanya ke sebuah gubuk tua di dekat hutan yang dihuni oleh seorang nenek. Nenek itu berkata, 'Aku menemukan baju yang kamu cari. Aku akan mengembalikannya, asalkan kamu membantuku membersihkan rumah dan memasak selama seminggu.'",
            "Bawang Putih menyanggupinya dengan senang hati. Ia melayani nenek itu dengan sangat rajin, sopan, dan penuh kasih sayang. Ketika genap seminggu, nenek mengembalikan baju yang hanyut dan menawarkannya sebuah labu sebagai hadiah. Nenek menyodorkan dua labu: satu besar dan satu kecil.",
            "Bawang Putih memilih labu yang kecil karena ia harus berjalan kaki jauh. Sesampainya di rumah, ibu tiri dan Bawang Merah langsung memarahinya karena pulang terlambat. Mereka merebut labu kecil tersebut dan membantingnya ke lantai hingga pecah.",
            "Betapa terkejutnya mereka saat melihat labu itu tidak berisi biji, melainkan penuh dengan perhiasan emas dan berlian yang berkilau indah. Bawang Merah dan ibunya yang serakah langsung merencanakan agar Bawang Merah mendapatkan hadiah yang lebih besar.",
            "Keesokan harinya, Bawang Merah dengan sengaja menghanyutkan baju ke sungai, lalu mendatangi gubuk nenek tersebut. Namun, selama seminggu tinggal di sana, Bawang Merah selalu malas, berbicara kasar, dan menolak bekerja.",
            "Saat waktunya pulang, Bawang Merah meminta hadiah labu besar tanpa malu-malu. Nenek pun memberikannya. Setibanya di rumah, Bawang Merah dan ibunya langsung mengunci diri di kamar agar tidak perlu berbagi dengan Bawang Putih. Mereka dengan tidak sabar membanting labu besar itu.",
            "Bukannya emas permata, dari dalam labu besar itu justru keluar berbagai macam hewan berbisa seperti ular, kalajengking, dan kelabang. Hewan-hewan itu menyerang mereka berdua. Mereka akhirnya menyadari kesalahan mereka dan meminta maaf kepada Bawang Putih atas semua kejahatan mereka selama ini."
        ]
    },
    {
        id: "kancil-siput",
        title: "Kancil dan Siput",
        category: "Fabel",
        readTime: "3 Menit",
        cover: "assets/kancil_siput.jpg",
        description: "Kisah fabel klasik tentang Kancil yang sombong ditantang lomba lari oleh Siput yang cerdik, memberikan pelajaran berharga untuk tidak meremehkan orang lain.",
        pages: [
            "Kancil terkenal sebagai hewan yang sangat cerdik dan lincah di hutan. Namun kesuksesannya mengelabui hewan-hewan lain membuatnya menjadi sangat sombong. Ia sering mengejek hewan-hewan lambat, terutama Siput yang berjalan sangat pelan dengan rumah di punggungnya.",
            "'Hai Siput! Apakah kamu mau ikut lomba lari denganku? Kita lihat siapa yang akan sampai duluan di ujung sungai!' ejek Kancil sambil tertawa. Siput yang merasa harga dirinya terluka menerima tantangan itu dengan tenang. 'Baiklah Kancil, besok pagi kita berlomba,' jawab Siput.",
            "Siput yang cerdas mengumpulkan teman-teman siput lainnya di sepanjang tepian sungai. Ia membuat rencana, 'Besok, berbarislah kalian di sepanjang rute lomba. Jika Kancil berteriak memanggilku, siput yang berada di depannya harus menjawab \"Aku di sini!\".'",
            "Keesokan harinya, perlombaan dimulai. Kancil berlari dengan sangat cepat, meninggalkan Siput jauh di belakang. Setelah berlari cukup jauh, Kancil berteriak sombong, 'Siput, di mana kamu?'. Tiba-tiba terdengar jawaban dari arah depannya, 'Aku di sini, Kancil!'",
            "Kancil terkejut. Ia segera menambah kecepatannya dan berlari lebih kencang lagi. Setelah beberapa saat, ia berteriak lagi, 'Siput, sekarang di mana kamu?'. Dan jawaban kembali terdengar dari depannya, 'Aku di sini, Kancil!'",
            "Kancil semakin panik dan kelelahan. Ia terus berlari sekuat tenaga hingga napasnya terengah-engah, namun setiap kali ia memanggil, Siput selalu terdengar berada di depannya. Akhirnya, Kancil kehabisan napas dan pingsan di dekat garis finish.",
            "Saat Kancil terbangun, Siput sudah berada di garis finish menantinya sambil tersenyum ramah. Kancil menunduk malu dan meminta maaf karena telah meremehkan Siput. Kancil pun berjanji untuk tidak pernah bersikap sombong lagi kepada siapa pun."
        ]
    },
    {
        id: "danau-toba",
        title: "Danau Toba",
        category: "Legenda",
        readTime: "4 Menit",
        cover: "assets/danau_toba.jpg",
        description: "Kisah legenda dari Sumatera Utara tentang asal mula Danau Toba dan Pulau Samosir akibat pelanggaran sumpah seorang pemuda bernama Toba.",
        pages: [
            "Dahulu kala di wilayah Sumatera Utara, hiduplah seorang pemuda yatim piatu bernama Toba. Ia bekerja sebagai petani dan sesekali memancing di sungai untuk memenuhi kebutuhan sehari-harinya.",
            "Suatu hari, Toba memancing dan berhasil menangkap seekor ikan mas yang sangat besar dan berkilau indah. Ketika ia hendak memasaknya, ikan mas itu tiba-tiba berubah menjadi seorang wanita yang sangat cantik jelita.",
            "Wanita cantik itu berterima kasih karena telah membebaskannya dari kutukan dewa. Sebagai balas budi, ia bersedia menjadi istri Toba dengan satu syarat mutlak: Toba tidak boleh pernah mengungkit asal-usulnya yang merupakan seekor ikan. Toba menyetujui syarat tersebut.",
            "Mereka menikah dan hidup bahagia. Beberapa tahun kemudian, mereka dikaruniai seorang anak laki-laki yang diberi nama Samosir. Samosir tumbuh menjadi anak yang sangat aktif, namun ia memiliki nafsu makan yang sangat besar dan agak manja.",
            "Suatu hari, ibu Samosir menyuruhnya mengantarkan bekal makanan untuk ayahnya yang sedang bekerja di ladang. Di tengah perjalanan, Samosir merasa sangat lapar. Ia pun memakan sebagian besar bekal tersebut dan hanya menyisakan sedikit nasi serta lauk sisa.",
            "Ketika Toba menerima bekal yang sudah hampir kosong itu, ia merasa sangat lapar dan lelah setelah bekerja keras seharian. Toba menjadi sangat marah melihat sisa makanan tersebut dan bertanya, 'Mengapa makanannya tinggal sedikit?'",
            "Samosir dengan jujur mengaku telah memakannya karena lapar. Toba yang tersulut emosi lupa akan janjinya dan berteriak murka, 'Dasar anak nakal tidak tahu diuntung! Memang kelakuanmu seperti anak ikan!'",
            "Mendengar ucapan ayahnya, Samosir menangis sedih dan langsung berlari pulang mengadu kepada ibunya. Sang ibu sangat sedih karena Toba telah melanggar janji setianya. Ibu menyuruh Samosir segera berlari ke atas bukit yang tinggi.",
            "Seketika itu juga, langit mendung bergemuruh dahsyat. Hujan sangat lebat turun tanpa henti dan air menyembur deras dari dalam tanah tempat tinggal mereka. Area lembah itu pun tenggelam dengan cepat hingga membentuk sebuah danau yang sangat luas.",
            "Istri Toba melompat kembali ke dalam air dan berubah menjadi ikan mas raksasa. Danau yang terbentuk dinamakan Danau Toba, sedangkan bukit tempat Samosir menyelamatkan diri kini dikenal sebagai Pulau Samosir di tengah danau tersebut."
        ]
    },
    {
        id: "roro-jonggrang",
        title: "Roro Jonggrang",
        category: "Legenda",
        readTime: "4 Menit",
        cover: "assets/roro_jonggrang.jpg",
        description: "Kisah tentang legenda Candi Prambanan di mana Bandung Bondowoso dikelabui oleh Roro Jonggrang dalam pembuatan seribu candi.",
        pages: [
            "Dahulu kala, terdapat Kerajaan Pengging yang dipimpin oleh Bandung Bondowoso, seorang pangeran yang sangat sakti dan kejam. Ia berhasil menaklukkan Kerajaan Prambanan dan menewaskan rajanya, Prabu Baka.",
            "Ketika menduduki istana Prambanan, Bandung Bondowoso melihat putri Prabu Baka yang sangat cantik jelita bernama Roro Jonggrang. Terpikat oleh kecantikannya, Bandung Bondowoso langsung melamarnya untuk dijadikan istri.",
            "Roro Jonggrang merasa sangat sedih dan bingung. Ia membenci pembunuh ayahnya, namun ia juga takut menolak lamaran pria sesakti Bandung Bondowoso. Akhirnya, Roro Jonggrang mengajukan syarat yang hampir mustahil dipenuhi.",
            "'Aku bersedia menjadi istrimu, asalkan kamu bisa membangun seribu candi dan dua sumur yang sangat dalam dalam waktu satu malam saja sebelum matahari terbit,' pinta Roro Jonggrang.",
            "Bandung Bondowoso menyanggupinya. Pada malam hari, ia pergi ke lapangan luas dan bersemedi, memanggil seluruh pasukan jin dan makhluk halus untuk membantunya membangun seribu candi tersebut.",
            "Pasukan jin bekerja dengan kecepatan luar biasa. Batu demi batu ditumpuk hingga ratusan candi berdiri megah dalam waktu singkat. Roro Jonggrang yang mengintip dari kejauhan mulai cemas karena melihat pekerjaan itu hampir selesai.",
            "Melihat waktu baru menunjukkan tengah malam namun candi yang terbangun sudah mencapai 999 buah, Roro Jonggrang segera mengumpulkan para dayang istana. Ia menyuruh mereka membakar jerami di arah timur dan menumbuk lesung kayu.",
            "Suasana malam berubah menjadi terang akibat kobaran api jerami, dan suara tumbukan lesung membuat ayam-ayam jantan berkokok bersahutan. Pasukan jin mengira pagi telah tiba dan sinar matahari akan membakar mereka.",
            "Para jin ketakutan dan langsung pergi melarikan diri ke dalam tanah, meninggalkan pekerjaan mereka yang kurang satu candi lagi. Bandung Bondowoso sangat kesal karena tidak bisa menahan pasukannya pergi.",
            "Ketika pagi tiba, Bandung Bondowoso menghitung jumlah candi dan mendapati jumlahnya hanya 999. Roro Jonggrang berkata, 'Lamaranmu kutolak karena syaratnya tidak terpenuhi!'. Menyadari dirinya dikelabui, Bandung Bondowoso sangat murka dan mengutuk Roro Jonggrang menjadi batu untuk melengkapi candi keseribu."
        ]
    }
];

// 2. Application State
let currentStory = null;
let currentPageIndex = 0;
let activeCategory = "semua";
let voiceRate = 1.0;
let currentUtterance = null;
let isVoicePlaying = false;
let isVoicePaused = false;

// 3. DOM Elements
const homeView = document.getElementById("home-view");
const readerView = document.getElementById("reader-view");
const storiesGrid = document.getElementById("stories-grid");
const categoryFilters = document.getElementById("category-filters");
const searchInput = document.getElementById("search-input");
const btnSearch = document.getElementById("btn-search");

// Reader Elements
const btnBackHome = document.getElementById("btn-back-home");
const readerBadge = document.getElementById("reader-badge");
const readerStoryTitle = document.getElementById("reader-story-title");
const readerIllustration = document.getElementById("reader-illustration");
const storyText = document.getElementById("story-text");
const currentPageSpan = document.getElementById("current-page");
const totalPagesSpan = document.getElementById("total-pages");
const btnPrevPage = document.getElementById("btn-prev-page");
const btnNextPage = document.getElementById("btn-next-page");

// TTS Elements
const btnPlayVoice = document.getElementById("btn-play-voice");
const btnPauseVoice = document.getElementById("btn-pause-voice");
const btnStopVoice = document.getElementById("btn-stop-voice");
const speedSlider = document.getElementById("speed-slider");
const speedLabel = document.getElementById("speed-label");

// Confetti Container
const confettiContainer = document.getElementById("confetti-container");

// 4. Initialize Application
function init() {
    renderStoryCards(stories);
    setupEventListeners();
    setupSpeechSynthesisSupport();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

// 5. Render Story Cards
function renderStoryCards(storyList) {
    storiesGrid.innerHTML = "";
    
    if (storyList.length === 0) {
        storiesGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px; font-weight: 600; color: var(--text-muted);">
                <p style="font-size: 1.5rem; margin-bottom: 10px;">😭 Cerita tidak ditemukan</p>
                <p>Coba cari kata kunci lain yang seru!</p>
            </div>
        `;
        return;
    }

    storyList.forEach(story => {
        const card = document.createElement("article");
        card.className = "story-card";
        
        let categoryClass = story.category.toLowerCase();
        
        card.innerHTML = `
            <div class="story-card-cover">
                <span class="badge ${categoryClass}">${story.category}</span>
                <img src="${story.cover}" alt="Cover ${story.title}" loading="lazy">
            </div>
            <div class="story-card-info">
                <h3 class="story-card-title">${story.title}</h3>
                <p class="story-card-desc">${story.description}</p>
                <div class="story-card-footer">
                    <span class="story-time">⏱️ ${story.readTime}</span>
                    <button class="btn-read" data-id="${story.id}">Baca Yuk! 📖</button>
                </div>
            </div>
        `;
        
        storiesGrid.appendChild(card);
    });

    // Add click events to read buttons
    document.querySelectorAll(".btn-read").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            const selected = stories.find(s => s.id === id);
            if (selected) {
                openStoryReader(selected);
            }
        });
    });
}

// 6. Setup Event Listeners
function setupEventListeners() {
    // Category Filter clicks
    categoryFilters.addEventListener("click", (e) => {
        const target = e.target;
        if (target.classList.contains("filter-btn")) {
            // Remove active class from all
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            target.classList.add("active");
            
            activeCategory = target.getAttribute("data-category");
            filterAndSearchStories();
        }
    });

    // Realtime search
    searchInput.addEventListener("input", filterAndSearchStories);
    btnSearch.addEventListener("click", filterAndSearchStories);

    // Reader Back to Home
    btnBackHome.addEventListener("click", () => {
        stopVoiceReading();
        showView("home-view");
    });

    // Story Navigation
    btnPrevPage.addEventListener("click", () => {
        if (currentPageIndex > 0) {
            stopVoiceReading();
            currentPageIndex--;
            updateReaderPage();
        }
    });

    btnNextPage.addEventListener("click", () => {
        if (currentPageIndex < currentStory.pages.length - 1) {
            stopVoiceReading();
            currentPageIndex++;
            updateReaderPage();
        } else {
            // Reached the end!
            handleStoryCompletion();
        }
    });

    // TTS Buttons
    btnPlayVoice.addEventListener("click", startVoiceReading);
    btnPauseVoice.addEventListener("click", pauseVoiceReading);
    btnStopVoice.addEventListener("click", stopVoiceReading);
    
    // TTS Speed Slider
    speedSlider.addEventListener("input", (e) => {
        voiceRate = parseFloat(e.target.value);
        speedLabel.textContent = `${voiceRate.toFixed(1)}x`;
        
        // If voice is currently playing, adjust rate on the fly (requires stop and restart on some browsers, or updates live)
        if (isVoicePlaying && !isVoicePaused) {
            // To apply speed changes reliably, we stop and play again from the current state
            const currentText = currentStory.pages[currentPageIndex];
            stopVoiceReading();
            // Tiny delay to let stop complete
            setTimeout(() => {
                speakText(currentText);
            }, 100);
        }
    });
}

// 7. Search & Filter helper
function filterAndSearchStories() {
    const query = searchInput.value.toLowerCase().trim();
    
    const filtered = stories.filter(story => {
        const matchesCategory = (activeCategory === "semua" || story.category === activeCategory);
        const matchesQuery = story.title.toLowerCase().includes(query) || 
                             story.description.toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
    });

    renderStoryCards(filtered);
}

// 8. View Navigation
function showView(viewId) {
    document.querySelectorAll(".view-section").forEach(view => {
        view.classList.remove("active");
    });
    document.getElementById(viewId).classList.add("active");
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 9. Open Story Reader
function openStoryReader(story) {
    currentStory = story;
    currentPageIndex = 0;
    
    // Set static values
    readerStoryTitle.textContent = story.title;
    readerIllustration.src = story.cover;
    readerIllustration.alt = `Ilustrasi ${story.title}`;
    
    // Badge Class
    readerBadge.textContent = story.category;
    readerBadge.className = `badge ${story.category.toLowerCase()}`;
    
    totalPagesSpan.textContent = story.pages.length;
    
    // Reset Speech Controls
    resetVoiceButtons();
    
    updateReaderPage();
    showView("reader-view");
}

// 10. Update Reader Page Content
function updateReaderPage() {
    currentPageSpan.textContent = currentPageIndex + 1;
    
    // Set Page Text
    const text = currentStory.pages[currentPageIndex];
    storyText.textContent = text;
    storyText.classList.remove("highlight-sentence");
    
    // Button States
    btnPrevPage.disabled = (currentPageIndex === 0);
    
    // Last page action change
    if (currentPageIndex === currentStory.pages.length - 1) {
        btnNextPage.textContent = "Selesai 🏆";
        btnNextPage.className = "nav-btn next-btn complete-btn";
    } else {
        btnNextPage.textContent = "Lanjut ▶️";
        btnNextPage.className = "nav-btn next-btn";
    }
}

// 11. Speech Synthesis (TTS) Core Logic
function setupSpeechSynthesisSupport() {
    if (!('speechSynthesis' in window)) {
        btnPlayVoice.disabled = true;
        btnPlayVoice.textContent = "🎙️ Tidak Didukung";
        console.warn("Speech Synthesis tidak didukung oleh browser Anda.");
    }
}

function startVoiceReading() {
    if (!currentStory) return;
    
    const textToSpeak = currentStory.pages[currentPageIndex];
    
    if (isVoicePaused) {
        // Resume if paused
        window.speechSynthesis.resume();
        isVoicePaused = false;
        isVoicePlaying = true;
        updateVoiceUIState();
    } else {
        // Start fresh speak
        stopVoiceReading();
        speakText(textToSpeak);
    }
}

function speakText(text) {
    currentUtterance = new SpeechSynthesisUtterance(text);
    
    // Set Indonesian Language
    currentUtterance.lang = "id-ID";
    currentUtterance.rate = voiceRate;
    
    // Try to load Indonesian Voice explicitly if available
    const voices = window.speechSynthesis.getVoices();
    const indVoice = voices.find(voice => voice.lang.includes("id") || voice.name.toLowerCase().includes("indonesia"));
    if (indVoice) {
        currentUtterance.voice = indVoice;
    }
    
    // Utterance Events
    currentUtterance.onstart = () => {
        isVoicePlaying = true;
        isVoicePaused = false;
        updateVoiceUIState();
        storyText.classList.add("highlight-sentence"); // Highlight text box
    };
    
    currentUtterance.onend = () => {
        isVoicePlaying = false;
        isVoicePaused = false;
        resetVoiceButtons();
        storyText.classList.remove("highlight-sentence");
    };
    
    currentUtterance.onerror = (e) => {
        console.error("SpeechSynthesis error:", e);
        isVoicePlaying = false;
        isVoicePaused = false;
        resetVoiceButtons();
        storyText.classList.remove("highlight-sentence");
    };

    window.speechSynthesis.speak(currentUtterance);
}

function pauseVoiceReading() {
    if (isVoicePlaying && !isVoicePaused) {
        window.speechSynthesis.pause();
        isVoicePaused = true;
        updateVoiceUIState();
    }
}

function stopVoiceReading() {
    window.speechSynthesis.cancel();
    isVoicePlaying = false;
    isVoicePaused = false;
    resetVoiceButtons();
    if (storyText) {
        storyText.classList.remove("highlight-sentence");
    }
}

function updateVoiceUIState() {
    btnPlayVoice.disabled = (isVoicePlaying && !isVoicePaused);
    btnPlayVoice.textContent = isVoicePaused ? "🔊 Lanjutkan" : "🔊 Membaca...";
    
    btnPauseVoice.disabled = !isVoicePlaying || isVoicePaused;
    btnStopVoice.disabled = !isVoicePlaying && !isVoicePaused;
}

function resetVoiceButtons() {
    btnPlayVoice.disabled = false;
    btnPlayVoice.textContent = "🔊 Dengarkan";
    
    btnPauseVoice.disabled = true;
    btnStopVoice.disabled = true;
}

// 12. Handle Story Completion (Confetti & Return)
function handleStoryCompletion() {
    celebrateCompletion();
    
    // Show completed alert or visual dialog inside app
    storyText.innerHTML = `
        <div style="text-align: center; animation: pulseLogo 1.5s infinite ease-in-out;">
            <p style="font-size: 3rem; margin-bottom: 10px;">🎉 🏆 🌟</p>
            <p style="font-size: 1.6rem; color: var(--secondary-color); font-weight: bold;">Hebat! Kamu Selesai Membaca!</p>
            <p style="font-size: 1.1rem; color: var(--text-muted); margin-top: 10px;">Kembali ke halaman utama dalam beberapa detik...</p>
        </div>
    `;
    
    btnNextPage.disabled = true;
    btnPrevPage.disabled = true;
    btnPlayVoice.disabled = true;
    
    // Autoclose reading mode after 5 seconds
    setTimeout(() => {
        showHomeViewAfterCelebration();
    }, 5000);
}

function showHomeViewAfterCelebration() {
    showView("home-view");
    // Reload story cards and scroll to top
    renderStoryCards(stories);
}

// 13. Kids Confetti Generation Animation
function celebrateCompletion() {
    const colors = ['#f43f5e', '#3b82f6', '#10b981', '#eab308', '#a855f7', '#ff7849', '#ffc82c'];
    const count = 100;
    
    for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        particle.className = "confetti-particle";
        
        // Random style attributes
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100; // x-position (%)
        const size = Math.random() * 8 + 6; // size (px)
        const duration = Math.random() * 3 + 2; // duration (s)
        const delay = Math.random() * 0.5; // delay (s)
        
        particle.style.left = `${left}vw`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        confettiContainer.appendChild(particle);
        
        // Remove after animation finishes
        setTimeout(() => {
            particle.remove();
        }, (duration + delay) * 1000);
    }
}

// Android Web Speech API workaround for loading voices asynchronously
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        // Trigger voice reload/binding if needed
    };
}

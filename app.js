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

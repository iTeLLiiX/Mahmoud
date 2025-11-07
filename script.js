// ============================================
// DEUTSCH MEISTERN - COMPLETE INTERACTIVE PLATFORM
// With Multi-Language Support & Voice Recording
// ============================================

// ============================================
// TRANSLATION SYSTEM
// ============================================
const translations = {
    de: {
        // Navigation
        'nav-vocab': 'Vokabeln',
        'nav-grammar': 'Grammatik',
        'nav-pronunciation': 'Aussprache',
        'nav-exercises': 'Übungen',
        'nav-flashcards': 'Karten',
        
        // Hero Section
        'hero-badge': 'Premium Lernplattform',
        'hero-title': 'Meistern Sie Deutsch',
        'hero-subtitle-span': 'Von A1 bis C1',
        'hero-desc': 'Strukturiertes, effizientes Lernen mit professioneller Unterstützung. Perfekt für die Vorbereitung auf die C1-Prüfung.',
        'stat-vocab': 'Vokabeln',
        'stat-lessons': 'Lektionen',
        'stat-levels': 'Alle Niveaus',
        'feat-interactive': 'Interaktive Übungen',
        'feat-feedback': 'Sofortiges Feedback',
        'feat-tracking': 'Fortschrittstracking',
        
        // Level Overview
        'level-path': 'Ihr Lernweg',
        'level-title': 'Vom Anfänger zum Profi',
        'level-desc': 'Folgen Sie unserem strukturierten Curriculum von grundlegenden Begrüßungen bis zu komplexen Diskussionen',
        'level-a1-desc': 'Grundlagen',
        'level-a1-1': 'Begrüßungen & Vorstellungen',
        'level-a1-2': 'Zahlen & Datum',
        'level-a1-3': 'Familie & Alltag',
        'level-a1-4': 'Einkaufen & Essen',
        'level-b1-desc': 'Mittelstufe',
        'level-b1-1': 'Arbeit & Beruf',
        'level-b1-2': 'Meinungen äußern',
        'level-b1-3': 'Komplexe Zeitformen',
        'level-b1-4': 'Formelle Kommunikation',
        'level-c1-desc': 'Fortgeschritten',
        'level-c1-1': 'Akademische Sprache',
        'level-c1-2': 'Literatur & Kultur',
        'level-c1-3': 'Debatten führen',
        'level-c1-4': 'Prüfungsvorbereitung',
        'progress-completed': '0% abgeschlossen',
        
        // Vocabulary Section
        'vocab-title': 'Wortschatz aufbauen',
        'vocab-desc': 'Systematisch lernen mit kontextbezogenen Beispielen',
        'lesson-greetings-title': 'Wichtige Begrüßungen & Vorstellungen',
        'duration-15': '15 Min',
        'words-12': '12 Wörter',
        'learning-goal': 'Lernziel',
        'lesson-greetings-goal': 'Lernen Sie die wichtigsten Begrüßungen und Vorstellungsformeln für erste Konversationen. Diese Grundlagen ermöglichen höfliche Umgangsformen in Alltagssituationen.',
        
        // Flashcards
        'flashcards-title': 'Lernkarten',
        'flashcards-heading': 'Schnell wiederholen',
        'flashcards-desc': 'Effektives Lernen mit digitalen Karteikarten',
        'previous': 'Zurück',
        'next': 'Weiter',
        'flashcard-german': 'Deutsch',
        'flashcard-translation': 'Übersetzung',
        'click-to-flip': 'Klicken zum Umdrehen',
        'i-know': 'Kann ich',
        'shuffle': 'Mischen',
        'i-dont-know': 'Noch üben',
        'known': 'Bekannt:',
        'to-review': 'Zu üben:',
        
        // Voice Recording
        'voice-title': 'Aussprache üben',
        'voice-heading': 'Nimm deine Stimme auf',
        'voice-desc': 'Vergleiche deine Aussprache mit der korrekten Aussprache',
        'practice-word': 'Übe dieses Wort:',
        'listen': 'Anhören',
        'start-recording': 'Aufnahme starten',
        'stop-recording': 'Aufnahme stoppen',
        'your-recording': 'Deine Aufnahme:',
        'delete': 'Löschen',
        'next-word': 'Nächstes Wort',
        'tip-1': 'Sprich langsam und deutlich',
        'tip-2': 'Höre zuerst das Original',
        'tip-3': 'Wiederhole mehrmals',
        
        // Custom Audio
        'custom-audio-title': 'Persönliche Audio-Hilfe',
        'custom-audio-desc': 'Lade eigene Audio-Dateien hoch, um mit deiner Stimme zu lernen!',
        'upload-drag': 'Ziehe Audio-Dateien hierher oder klicke zum Hochladen',
        'choose-files': 'Dateien auswählen',
        
        // C1 Preparation
        'c1-prep': 'C1 Vorbereitung',
        'c1-ready': 'Bereit für die C1-Prüfung?',
        'c1-desc': 'Gezieltes Training für alle Prüfungsteile: Leseverstehen, Hörverstehen, Schriftlicher Ausdruck und Mündlicher Ausdruck',
        'c1-feat1': 'Prüfungsstrategien',
        'c1-feat2': 'Musterprüfungen',
        'c1-feat3': 'Zeitmanagement',
        'c1-feat4': 'Bewertungskriterien',
        'c1-open': 'C1 Prüfung starten'
    },
    en: {
        // Navigation
        'nav-vocab': 'Vocabulary',
        'nav-grammar': 'Grammar',
        'nav-pronunciation': 'Pronunciation',
        'nav-exercises': 'Exercises',
        'nav-flashcards': 'Cards',
        
        // Hero Section
        'hero-badge': 'Premium Learning Platform',
        'hero-title': 'Master German',
        'hero-subtitle-span': 'From A1 to C1',
        'hero-desc': 'Structured, efficient learning with professional support. Perfect for preparing for the C1 exam.',
        'stat-vocab': 'Vocabulary',
        'stat-lessons': 'Lessons',
        'stat-levels': 'All Levels',
        'feat-interactive': 'Interactive Exercises',
        'feat-feedback': 'Instant Feedback',
        'feat-tracking': 'Progress Tracking',
        
        // Level Overview
        'level-path': 'Your Learning Path',
        'level-title': 'From Beginner to Expert',
        'level-desc': 'Follow our structured curriculum from basic greetings to complex discussions',
        'level-a1-desc': 'Basics',
        'level-a1-1': 'Greetings & Introductions',
        'level-a1-2': 'Numbers & Dates',
        'level-a1-3': 'Family & Daily Life',
        'level-a1-4': 'Shopping & Food',
        'level-b1-desc': 'Intermediate',
        'level-b1-1': 'Work & Career',
        'level-b1-2': 'Expressing Opinions',
        'level-b1-3': 'Complex Tenses',
        'level-b1-4': 'Formal Communication',
        'level-c1-desc': 'Advanced',
        'level-c1-1': 'Academic Language',
        'level-c1-2': 'Literature & Culture',
        'level-c1-3': 'Leading Debates',
        'level-c1-4': 'Exam Preparation',
        'progress-completed': '0% completed',
        
        // Vocabulary Section
        'vocab-title': 'Build Vocabulary',
        'vocab-desc': 'Learn systematically with context-based examples',
        'lesson-greetings-title': 'Important Greetings & Introductions',
        'duration-15': '15 Min',
        'words-12': '12 Words',
        'learning-goal': 'Learning Goal',
        'lesson-greetings-goal': 'Learn the most important greetings and introduction phrases for first conversations. These basics enable polite manners in everyday situations.',
        
        // Flashcards
        'flashcards-title': 'Flashcards',
        'flashcards-heading': 'Quick Review',
        'flashcards-desc': 'Effective learning with digital flashcards',
        'previous': 'Previous',
        'next': 'Next',
        'flashcard-german': 'German',
        'flashcard-translation': 'Translation',
        'click-to-flip': 'Click to flip',
        'i-know': 'I know it',
        'shuffle': 'Shuffle',
        'i-dont-know': 'Need practice',
        'known': 'Known:',
        'to-review': 'To review:',
        
        // Voice Recording
        'voice-title': 'Practice Pronunciation',
        'voice-heading': 'Record Your Voice',
        'voice-desc': 'Compare your pronunciation with the correct one',
        'practice-word': 'Practice this word:',
        'listen': 'Listen',
        'start-recording': 'Start Recording',
        'stop-recording': 'Stop Recording',
        'your-recording': 'Your recording:',
        'delete': 'Delete',
        'next-word': 'Next Word',
        'tip-1': 'Speak slowly and clearly',
        'tip-2': 'Listen to the original first',
        'tip-3': 'Repeat several times',
        
        // Custom Audio
        'custom-audio-title': 'Personal Audio Help',
        'custom-audio-desc': 'Upload your own audio files to learn with your voice!',
        'upload-drag': 'Drag audio files here or click to upload',
        'choose-files': 'Choose Files',
        
        // C1 Preparation
        'c1-prep': 'C1 Preparation',
        'c1-ready': 'Ready for the C1 Exam?',
        'c1-desc': 'Targeted training for all exam parts: Reading, Listening, Writing and Speaking',
        'c1-feat1': 'Exam Strategies',
        'c1-feat2': 'Practice Tests',
        'c1-feat3': 'Time Management',
        'c1-feat4': 'Grading Criteria',
        'c1-open': 'Start C1 Exam'
    },
    ka: {
        // Navigation
        'nav-vocab': 'ლექსიკა',
        'nav-grammar': 'გრამატიკა',
        'nav-pronunciation': 'გამოთქმა',
        'nav-exercises': 'ვარჯიშები',
        'nav-flashcards': 'ბარათები',
        
        // Hero Section
        'hero-badge': 'პრემიუმ სასწავლო პლატფორმა',
        'hero-title': 'დაეუფლეთ გერმანულს',
        'hero-subtitle-span': 'A1-დან C1-მდე',
        'hero-desc': 'სტრუქტურირებული, ეფექტური სწავლა პროფესიონალური მხარდაჭერით. იდეალურია C1 გამოცდისთვის მომზადებისთვის.',
        'stat-vocab': 'ლექსიკა',
        'stat-lessons': 'გაკვეთილები',
        'stat-levels': 'ყველა დონე',
        'feat-interactive': 'ინტერაქტიული ვარჯიშები',
        'feat-feedback': 'მყისიერი უკუკავშირი',
        'feat-tracking': 'პროგრესის თვალყურის დევნება',
        
        // Level Overview
        'level-path': 'თქვენი სასწავლო გზა',
        'level-title': 'დამწყებიდან პროფესიონალამდე',
        'level-desc': 'მიჰყევით ჩვენს სტრუქტურირებულ კურიკულუმს მარტივი მისალმებიდან კომპლექსურ დისკუსიებამდე',
        'level-a1-desc': 'საფუძვლები',
        'level-a1-1': 'მისალმებები და გაცნობა',
        'level-a1-2': 'რიცხვები და თარიღები',
        'level-a1-3': 'ოჯახი და ყოველდღიური ცხოვრება',
        'level-a1-4': 'შოპინგი და საკვები',
        'level-b1-desc': 'საშუალო დონე',
        'level-b1-1': 'სამუშაო და კარიერა',
        'level-b1-2': 'აზრების გამოხატვა',
        'level-b1-3': 'კომპლექსური დროები',
        'level-b1-4': 'ფორმალური კომუნიკაცია',
        'level-c1-desc': 'მოწინავე',
        'level-c1-1': 'აკადემიური ენა',
        'level-c1-2': 'ლიტერატურა და კულტურა',
        'level-c1-3': 'დებატების წარმართვა',
        'level-c1-4': 'გამოცდისთვის მომზადება',
        'progress-completed': '0% დასრულებულია',
        
        // Vocabulary Section
        'vocab-title': 'ლექსიკის გაფართოება',
        'vocab-desc': 'სწავლობთ სისტემატურად კონტექსტზე დაფუძნებული მაგალითებით',
        'lesson-greetings-title': 'მნიშვნელოვანი მისალმებები და გაცნობა',
        'duration-15': '15 წუთი',
        'words-12': '12 სიტყვა',
        'learning-goal': 'სასწავლო მიზანი',
        'lesson-greetings-goal': 'ისწავლეთ უმნიშვნელოვანესი მისალმებები და გაცნობის ფრაზები პირველი საუბრებისთვის. ეს საფუძვლები იძლევა თავაზიანი ქცევის საშუალებას ყოველდღიურ სიტუაციებში.',
        
        // Flashcards
        'flashcards-title': 'სასწავლო ბარათები',
        'flashcards-heading': 'სწრაფი გამეორება',
        'flashcards-desc': 'ეფექტური სწავლა ციფრული ბარათებით',
        'previous': 'წინა',
        'next': 'შემდეგი',
        'flashcard-german': 'გერმანული',
        'flashcard-translation': 'თარგმანი',
        'click-to-flip': 'დააჭირეთ გადასატრიალებლად',
        'i-know': 'ვიცი',
        'shuffle': 'აურევა',
        'i-dont-know': 'კიდევ ვივარჯიშო',
        'known': 'ცნობილი:',
        'to-review': 'გასასწავლი:',
        
        // Voice Recording
        'voice-title': 'გამოთქმის ვარჯიში',
        'voice-heading': 'ჩაწერეთ თქვენი ხმა',
        'voice-desc': 'შეადარეთ თქვენი გამოთქმა სწორ გამოთქმას',
        'practice-word': 'ივარჯიშეთ ეს სიტყვა:',
        'listen': 'მოსმენა',
        'start-recording': 'ჩაწერის დაწყება',
        'stop-recording': 'ჩაწერის შეწყვეტა',
        'your-recording': 'თქვენი ჩაწერა:',
        'delete': 'წაშლა',
        'next-word': 'შემდეგი სიტყვა',
        'tip-1': 'ილაპარაკეთ ნელა და გარკვევით',
        'tip-2': 'ჯერ მოუსმინეთ ორიგინალს',
        'tip-3': 'გაიმეორეთ რამდენჯერმე',
        
        // Custom Audio
        'custom-audio-title': 'პერსონალური აუდიო დახმარება',
        'custom-audio-desc': 'ატვირთეთ საკუთარი აუდიო ფაილები თქვენი ხმით სასწავლად!',
        'upload-drag': 'გადმოიტანეთ აუდიო ფაილები ან დააჭირეთ ასატვირთად',
        'choose-files': 'ფაილების არჩევა',
        
        // C1 Preparation
        'c1-prep': 'C1 მომზადება',
        'c1-ready': 'მზად ხართ C1 გამოცდისთვის?',
        'c1-desc': 'მიზნობრივი ვარჯიში ყველა გამოცდის ნაწილისთვის: კითხვა, მოსმენა, წერა და საუბარი',
        'c1-feat1': 'გამოცდის სტრატეგიები',
        'c1-feat2': 'სავარჯიშო ტესტები',
        'c1-feat3': 'დროის მართვა',
        'c1-feat4': 'შეფასების კრიტერიუმები',
        'c1-open': 'C1 გამოცდის დაწყება'
    },
    ar: {
        // Navigation
        'nav-vocab': 'المفردات',
        'nav-grammar': 'القواعد',
        'nav-pronunciation': 'النطق',
        'nav-exercises': 'التمارين',
        'nav-tests': 'الاختبارات',
        
        // Hero
        'hero-title': 'تعلم الألمانية - من A1 إلى C2',
        'hero-subtitle': 'منصتك الشاملة لإتقان اللغة الألمانية',
        'hero-desc': 'من المبتدئين إلى المتحدثين الأصليين - كل شيء في مكان واحد',
        
        // Welcome
        'welcome-title': 'مرحباً في منصة تعلم الألمانية!',
        'welcome-text': 'هنا ستجد كل ما تحتاجه لتعلم الألمانية بشكل مثالي. من مستوى A1 إلى C2، مع اختبارات تفاعلية وتمارين ممتعة.',
        
        // Vocabulary
        'vocab-title': 'المفردات الألمانية',
        'vocab-intro': 'تعلم المفردات الألمانية الأساسية مع الأمثلة',
        'vocab-search': 'البحث في المفردات...',
        'vocab-all': 'الكل',
        'vocab-favorites': 'المفضلة',
        
        // Lesson A1.1
        'lesson-a1-1': 'التحيات المهمة',
        'lesson-a1-1-goal': 'تعلم التحيات الألمانية الأساسية',
        'lesson-german': 'الألمانية',
        'lesson-article': 'الأداة/الشكل',
        'lesson-english': 'الإنجليزية',
        'lesson-type': 'النوع',
        
        // Grammar
        'grammar-title': 'القواعد الألمانية',
        'grammar-articles': 'أدوات التعريف: der, die, das',
        'grammar-masc': 'المذكر',
        'grammar-fem': 'المؤنث',
        'grammar-neut': 'المحايد',
        'grammar-plural': 'الجمع',
        
        // Pronunciation
        'pronunciation-title': 'دليل النطق',
        'pronunciation-sounds': 'الأصوات الألمانية المهمة',
        
        // Flashcards
        'flashcards-title': 'البطاقات التعليمية',
        'flashcards-desc': 'تدرب على المفردات بشكل تفاعلي',
        'flashcards-known': 'أعرف هذه',
        'flashcards-unknown': 'لا أعرف',
        'flashcards-next': 'التالي',
        'flashcards-prev': 'السابق',
        'flashcards-shuffle': 'خلط',
        
        // Voice Recording
        'voice-title': 'تسجيل الصوت',
        'voice-desc': 'تدرب على النطق',
        'voice-record': 'تسجيل',
        'voice-stop': 'إيقاف',
        'voice-play': 'تشغيل',
        'voice-delete': 'حذف',
        'voice-next': 'الكلمة التالية',
        
        // Custom Audio
        'custom-audio-title': 'الصوت المخصص',
        'custom-audio-desc': 'ارفع ملفات صوتية من Nico',
        'custom-audio-upload': 'اختر الملف',
        'custom-audio-drop': 'أو اسحب الملف هنا',
        
        // Exercises
        'exercises-title': 'التمارين التفاعلية',
        'exercises-desc': 'تدرب وحسّن مهاراتك',
        
        // Statistics
        'stats-title': 'إحصائياتك',
        'stats-desc': 'تتبع تقدمك',
        'stats-streak': 'أيام متتالية',
        'stats-exercises': 'تمارين مكتملة',
        'stats-vocab': 'مفردات متعلمة',
        'stats-minutes': 'دقائق تعلم',
        
        // Achievements
        'achievements-title': 'الإنجازات',
        'achievements-unlock': 'فتح',
        
        // Footer
        'footer-dedication': 'لماريامي 🇬🇪',
        'footer-quote': 'التعلم هو رحلة، وليس وجهة',
        'footer-from': 'بحب من نيكو 💝',
        
        // C1 Preparation
        'c1-ready': 'هل أنت مستعد لامتحان C1؟',
        'c1-desc': 'تدريب مستهدف لجميع أجزاء الامتحان: الفهم القرائي، الفهم السماعي، التعبير الكتابي والتعبير الشفهي',
        'c1-feat1': 'استراتيجيات الامتحان',
        'c1-feat2': 'نماذج امتحانات',
        'c1-feat3': 'إدارة الوقت',
        'c1-feat4': 'معايير التقييم',
        'c1-open': 'بدء امتحان C1'
    }
};

let currentLanguage = localStorage.getItem('deutschLernenLanguage') || 'de';

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('deutschLernenLanguage', lang);
    
    // RTL support for Arabic
    if (lang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('dir', 'ltr');
    }
    
    // Update all translated elements
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}

// ============================================
// DARK MODE
// ============================================
let isDarkMode = localStorage.getItem('deutschLernenDarkMode') === 'true';

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('deutschLernenDarkMode', isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    const icon = document.querySelector('#themeToggle i');
    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ============================================
// MOBILE MENU
// ============================================
function toggleMobileMenu() {
    const nav = document.getElementById('mainNav');
    const toggle = document.getElementById('mobileMenuToggle');
    nav.classList.toggle('mobile-open');
    toggle.classList.toggle('active');
}

// ============================================
// GLOBAL STATE MANAGEMENT
// ============================================
let totalPoints = 0;
let articleQuestions = [];
let currentArticleQuestion = 0;
let articleScore = 0;
let mcQuestions = [];
let currentMCQuestion = 0;
let mcScore = 0;

// Flashcards
let flashcards = [];
let currentFlashcardIndex = 0;
let knownCards = 0;
let unknownCards = 0;
let isFlipped = false;

// Voice Recording
let mediaRecorder = null;
let audioChunks = [];
let isRecording = false;
let practiceWords = ['Guten Morgen', 'Danke', 'Bitte', 'Hallo', 'Auf Wiedersehen', 'Wie geht es dir?', 'Ich heiße', 'Guten Tag'];
let currentPracticeIndex = 0;

// Article Quiz Data
const articleWords = [
    { word: "Haus", article: "das", translation: "house" },
    { word: "Mutter", article: "die", translation: "mother" },
    { word: "Vater", article: "der", translation: "father" },
    { word: "Kind", article: "das", translation: "child" },
    { word: "Frau", article: "die", translation: "woman" },
    { word: "Mann", article: "der", translation: "man" },
    { word: "Buch", article: "das", translation: "book" },
    { word: "Schule", article: "die", translation: "school" },
    { word: "Tisch", article: "der", translation: "table" },
    { word: "Auto", article: "das", translation: "car" },
    { word: "Tür", article: "die", translation: "door" },
    { word: "Baum", article: "der", translation: "tree" },
    { word: "Fenster", article: "das", translation: "window" },
    { word: "Straße", article: "die", translation: "street" },
    { word: "Garten", article: "der", translation: "garden" }
];

// Multiple Choice Questions
const multipleChoiceQuestions = [
    {
        question: "Wie sagt man 'Good morning' auf Deutsch?",
        options: ["Guten Abend", "Guten Morgen", "Gute Nacht", "Guten Tag"],
        correct: 1
    },
    {
        question: "Was bedeutet 'Danke'?",
        options: ["Please", "Thank you", "Sorry", "Hello"],
        correct: 1
    },
    {
        question: "Welcher Artikel passt zu 'Mutter'?",
        options: ["der", "die", "das", "den"],
        correct: 1
    },
    {
        question: "Was ist die Pluralform von 'Kind'?",
        options: ["Kinds", "Kindern", "Kinder", "Kinde"],
        correct: 2
    },
    {
        question: "Wie sagt man 'Goodbye' formell auf Deutsch?",
        options: ["Tschüss", "Auf Wiedersehen", "Bis bald", "Ciao"],
        correct: 1
    }
];

// Flashcard Data
const flashcardData = [
    { german: "Hallo", english: "Hello", georgian: "გამარჯობა (gamarjoba)" },
    { german: "Danke", english: "Thank you", georgian: "მადლობა (madloba)" },
    { german: "Bitte", english: "Please / You're welcome", georgian: "გთხოვთ (gtkhovt)" },
    { german: "Guten Morgen", english: "Good morning", georgian: "დილა მშვიდობისა (dila mshvidobisa)" },
    { german: "Guten Tag", english: "Good day", georgian: "გაგიმარჯოს (gagimarjos)" },
    { german: "Auf Wiedersehen", english: "Goodbye", georgian: "ნახვამდის (nakhvamdis)" },
    { german: "Tschüss", english: "Bye", georgian: "ნახვამდის (nakhvamdis)" },
    { german: "Ja", english: "Yes", georgian: "დიახ (diakh)" },
    { german: "Nein", english: "No", georgian: "არა (ara)" },
    { german: "Entschuldigung", english: "Excuse me", georgian: "ბოდიში (bodishi)" }
];

// ============================================
// TEXT-TO-SPEECH FUNCTIONALITY
// ============================================
function speakWord(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'de-DE';
        utterance.rate = 0.8;
        utterance.pitch = 1;
        
        const voices = window.speechSynthesis.getVoices();
        const germanVoice = voices.find(voice => voice.lang.startsWith('de'));
        if (germanVoice) {
            utterance.voice = germanVoice;
        }
        
        window.speechSynthesis.speak(utterance);
        
        const audioButtons = document.querySelectorAll('.audio-btn');
        audioButtons.forEach(btn => {
            if (btn.onclick && btn.onclick.toString().includes(text)) {
                btn.classList.add('playing');
                setTimeout(() => btn.classList.remove('playing'), 1000);
            }
        });
    } else {
        alert('Text-to-Speech wird von Ihrem Browser nicht unterstützt.');
    }
}

if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
    };
}

// ============================================
// PROGRESS & POINTS SYSTEM
// ============================================
function updateTotalPoints(points) {
    totalPoints += points;
    const totalPointsEl = document.getElementById('totalPoints');
    if (totalPointsEl) {
        totalPointsEl.textContent = totalPoints;
    }
    saveProgress();
    showPointsAnimation(points);
}

function showPointsAnimation(points) {
    const pointsElement = document.getElementById('totalPoints');
    const parent = pointsElement.parentElement;
    
    const animation = document.createElement('div');
    animation.className = 'points-animation';
    animation.textContent = `+${points}`;
    animation.style.position = 'absolute';
    animation.style.color = '#f7b267';
    animation.style.fontWeight = 'bold';
    animation.style.fontSize = '20px';
    animation.style.animation = 'floatUp 1s ease-out';
    
    parent.style.position = 'relative';
    parent.appendChild(animation);
    
    setTimeout(() => animation.remove(), 1000);
}

function saveProgress() {
    const progress = {
        totalPoints,
        articleScore,
        mcScore,
        knownCards,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('deutschLernenProgress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('deutschLernenProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        totalPoints = progress.totalPoints || 0;
        articleScore = progress.articleScore || 0;
        mcScore = progress.mcScore || 0;
        knownCards = progress.knownCards || 0;
        const totalPointsEl = document.getElementById('totalPoints');
        if (totalPointsEl) {
            totalPointsEl.textContent = totalPoints;
        }
    }
}

// ============================================
// FLASHCARDS
// ============================================
function initFlashcards() {
    flashcards = [...flashcardData];
    currentFlashcardIndex = 0;
    knownCards = 0;
    unknownCards = flashcards.length;
    updateFlashcardDisplay();
}

function updateFlashcardDisplay() {
    if (flashcards.length === 0) {
        initFlashcards();
    }
    
    const card = flashcards[currentFlashcardIndex];
    document.getElementById('flashcardFront').textContent = card.german;
    document.querySelector('.flashcard-back .flashcard-content').innerHTML = `
        <div class="translation-item">🇬🇧 ${card.english}</div>
        <div class="translation-item">🇬🇪 ${card.georgian}</div>
    `;
    
    document.getElementById('currentCard').textContent = currentFlashcardIndex + 1;
    document.getElementById('totalCards').textContent = flashcards.length;
    document.getElementById('knownCount').textContent = knownCards;
    document.getElementById('unknownCount').textContent = unknownCards;
    
    const knownPercent = (knownCards / (knownCards + unknownCards)) * 100;
    document.getElementById('knownProgress').style.width = knownPercent + '%';
    document.getElementById('unknownProgress').style.width = (100 - knownPercent) + '%';
    
    // Reset flip state
    isFlipped = false;
    document.getElementById('flashcard').classList.remove('flipped');
}

function flipFlashcard() {
    isFlipped = !isFlipped;
    document.getElementById('flashcard').classList.toggle('flipped');
}

function nextFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcards.length;
    updateFlashcardDisplay();
}

function previousFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcards.length) % flashcards.length;
    updateFlashcardDisplay();
}

function shuffleFlashcards() {
    flashcards = shuffleArray(flashcards);
    currentFlashcardIndex = 0;
    updateFlashcardDisplay();
}

function markAsKnown() {
    if (unknownCards > 0) {
        knownCards++;
        unknownCards--;
        updateTotalPoints(5);
    }
    nextFlashcard();
}

function markAsUnknown() {
    nextFlashcard();
}

// ============================================
// VOICE RECORDING
// ============================================
async function toggleRecording() {
    if (!isRecording) {
        await startRecording();
    } else {
        stopRecording();
    }
}

async function startRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];
        
        mediaRecorder.ondataavailable = (event) => {
            audioChunks.push(event.data);
        };
        
        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            const audioElement = document.getElementById('recordedAudio');
            audioElement.src = audioUrl;
            document.getElementById('recordedAudioContainer').style.display = 'block';
            
            // Stop all tracks
            stream.getTracks().forEach(track => track.stop());
        };
        
        mediaRecorder.start();
        isRecording = true;
        
        // Update UI
        const btn = document.getElementById('recordBtn');
        btn.innerHTML = '<i class="fa-solid fa-stop"></i> <span data-translate="stop-recording">Aufnahme stoppen</span>';
        btn.classList.add('recording');
        document.getElementById('recorderVisual').classList.add('active');
        document.getElementById('recordingStatus').textContent = '🔴 Aufnahme läuft...';
        
        changeLanguage(currentLanguage);
    } catch (error) {
        console.error('Mikrofon-Zugriff verweigert:', error);
        alert('Bitte erlauben Sie den Zugriff auf das Mikrofon.');
    }
}

function stopRecording() {
    if (mediaRecorder && isRecording) {
        mediaRecorder.stop();
        isRecording = false;
        
        // Update UI
        const btn = document.getElementById('recordBtn');
        btn.innerHTML = '<i class="fa-solid fa-microphone"></i> <span data-translate="start-recording">Aufnahme starten</span>';
        btn.classList.remove('recording');
        document.getElementById('recorderVisual').classList.remove('active');
        document.getElementById('recordingStatus').textContent = '✅ Aufnahme abgeschlossen!';
        
        changeLanguage(currentLanguage);
    }
}

function deleteRecording() {
    document.getElementById('recordedAudio').src = '';
    document.getElementById('recordedAudioContainer').style.display = 'none';
    document.getElementById('recordingStatus').textContent = '';
}

function nextPracticeWord() {
    currentPracticeIndex = (currentPracticeIndex + 1) % practiceWords.length;
    document.getElementById('practiceWord').textContent = practiceWords[currentPracticeIndex];
    deleteRecording();
    updateTotalPoints(10);
}

// ============================================
// CUSTOM AUDIO UPLOAD
// ============================================
function initCustomAudioUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('audioUpload');
    
    // Drag and drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const files = e.dataTransfer.files;
        handleAudioFiles(files);
    });
    
    // File input
    fileInput.addEventListener('change', (e) => {
        handleAudioFiles(e.target.files);
    });
}

function handleAudioFiles(files) {
    const audioList = document.getElementById('customAudioList');
    
    Array.from(files).forEach(file => {
        if (file.type.startsWith('audio/')) {
            const url = URL.createObjectURL(file);
            
            const audioCard = document.createElement('div');
            audioCard.className = 'custom-audio-card';
            audioCard.innerHTML = `
                <div class="audio-card-header">
                    <i class="fa-solid fa-music"></i>
                    <span>${file.name}</span>
                </div>
                <audio controls src="${url}"></audio>
                <button class="btn btn-outline btn-sm" onclick="this.parentElement.remove()">
                    <i class="fa-solid fa-trash"></i> Löschen
                </button>
            `;
            
            audioList.appendChild(audioCard);
            
            // Save to localStorage
            const reader = new FileReader();
            reader.onload = (e) => {
                const customAudios = JSON.parse(localStorage.getItem('customAudios') || '[]');
                customAudios.push({
                    name: file.name,
                    data: e.target.result
                });
                localStorage.setItem('customAudios', JSON.stringify(customAudios));
            };
            reader.readAsDataURL(file);
        }
    });
}

// ============================================
// ARTICLE QUIZ
// ============================================
function initArticleQuiz() {
    articleQuestions = shuffleArray([...articleWords]).slice(0, 10);
    currentArticleQuestion = 0;
    articleScore = 0;
    showArticleQuestion();
}

function showArticleQuestion() {
    if (currentArticleQuestion >= articleQuestions.length) {
        finishArticleQuiz();
        return;
    }
    
    const question = articleQuestions[currentArticleQuestion];
    const quizWordEl = document.getElementById('quizWord');
    const questionNumEl = document.getElementById('articleQuestionNum');
    const feedbackEl = document.getElementById('articleFeedback');
    
    if (!quizWordEl || !questionNumEl || !feedbackEl) return; // Not on quiz page
    
    quizWordEl.textContent = question.word;
    questionNumEl.textContent = currentArticleQuestion + 1;
    feedbackEl.innerHTML = '';
    
    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.classList.remove('correct', 'incorrect');
        btn.disabled = false;
    });
}

function checkArticle(selectedArticle) {
    const question = articleQuestions[currentArticleQuestion];
    const feedbackEl = document.getElementById('articleFeedback');
    const buttons = document.querySelectorAll('.quiz-option');
    
    buttons.forEach(btn => btn.disabled = true);
    
    if (selectedArticle === question.article) {
        articleScore++;
        updateTotalPoints(10);
        incrementExercises(); // Track stats
        feedbackEl.innerHTML = `
            <div class="feedback-correct">
                <i class="fa-solid fa-check-circle"></i>
                <strong>Richtig!</strong> Es heißt "${question.article} ${question.word}" (${question.translation})
            </div>
        `;
        buttons.forEach(btn => {
            if (btn.textContent.trim() === selectedArticle) {
                btn.classList.add('correct');
            }
        });
    } else {
        feedbackEl.innerHTML = `
            <div class="feedback-incorrect">
                <i class="fa-solid fa-times-circle"></i>
                <strong>Falsch!</strong> Die richtige Antwort ist "${question.article} ${question.word}" (${question.translation})
            </div>
        `;
        buttons.forEach(btn => {
            const btnArticle = btn.textContent.trim();
            if (btnArticle === selectedArticle) {
                btn.classList.add('incorrect');
            } else if (btnArticle === question.article) {
                btn.classList.add('correct');
            }
        });
    }
    
    document.getElementById('articleScore').textContent = articleScore;
    
    setTimeout(() => {
        currentArticleQuestion++;
        showArticleQuestion();
    }, 2500);
}

function finishArticleQuiz() {
    const feedbackEl = document.getElementById('articleFeedback');
    const percentage = (articleScore / articleQuestions.length) * 100;
    
    let message = '';
    if (percentage === 100) {
        message = '🏆 Perfekt! Ausgezeichnete Arbeit!';
    } else if (percentage >= 80) {
        message = '🌟 Sehr gut! Fast perfekt!';
    } else if (percentage >= 60) {
        message = '👍 Gut gemacht! Weiter so!';
    } else {
        message = '💪 Übe weiter, du wirst besser!';
    }
    
    feedbackEl.innerHTML = `
        <div class="feedback-complete">
            <h4>${message}</h4>
            <p>Du hast ${articleScore} von ${articleQuestions.length} Fragen richtig beantwortet (${percentage.toFixed(0)}%)</p>
            <button class="btn btn-primary" onclick="initArticleQuiz()">
                <i class="fa-solid fa-rotate"></i>
                Noch einmal
            </button>
        </div>
    `;
    
    document.getElementById('quizWord').textContent = '✓ Abgeschlossen';
    document.querySelectorAll('.quiz-option').forEach(btn => btn.style.display = 'none');
}

// ============================================
// FILL IN THE BLANKS
// ============================================
function checkFillBlanks() {
    const blanks = document.querySelectorAll('.blank-input');
    let correctCount = 0;
    let totalBlanks = blanks.length;
    
    blanks.forEach((blank, index) => {
        const userAnswer = blank.textContent.trim();
        const correctAnswer = blank.dataset.answer;
        
        blank.classList.remove('correct-blank', 'incorrect-blank');
        
        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            blank.classList.add('correct-blank');
            correctCount++;
        } else {
            blank.classList.add('incorrect-blank');
            setTimeout(() => {
                blank.textContent = correctAnswer;
                blank.classList.remove('incorrect-blank');
                blank.classList.add('correct-blank');
            }, 1500);
        }
    });
    
    const points = correctCount * 10;
    updateTotalPoints(points);
    
    const feedbackEl = document.getElementById('fillBlankFeedback');
    const percentage = (correctCount / totalBlanks) * 100;
    
    if (percentage === 100) {
        feedbackEl.innerHTML = `
            <div class="feedback-correct">
                <i class="fa-solid fa-trophy"></i>
                <strong>Perfekt!</strong> Alle ${correctCount} Antworten sind richtig! +${points} Punkte
            </div>
        `;
    } else if (percentage >= 60) {
        feedbackEl.innerHTML = `
            <div class="feedback-partial">
                <i class="fa-solid fa-check-circle"></i>
                <strong>Gut!</strong> ${correctCount} von ${totalBlanks} richtig. +${points} Punkte
            </div>
        `;
    } else {
        feedbackEl.innerHTML = `
            <div class="feedback-incorrect">
                <i class="fa-solid fa-info-circle"></i>
                <strong>Übe weiter!</strong> ${correctCount} von ${totalBlanks} richtig. +${points} Punkte
            </div>
        `;
    }
    
    document.getElementById('fillBlankScore').textContent = correctCount;
}

// ============================================
// MULTIPLE CHOICE QUIZ
// ============================================
function initMCQuiz() {
    mcQuestions = shuffleArray([...multipleChoiceQuestions]);
    currentMCQuestion = 0;
    mcScore = 0;
    showMCQuestion();
}

function showMCQuestion() {
    if (currentMCQuestion >= mcQuestions.length) {
        finishMCQuiz();
        return;
    }
    
    const question = mcQuestions[currentMCQuestion];
    document.getElementById('mcQuestion').textContent = question.question;
    document.getElementById('mcQuestionNum').textContent = currentMCQuestion + 1;
    document.getElementById('mcFeedback').innerHTML = '';
    
    const optionsContainer = document.getElementById('mcOptions');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'mc-option';
        button.onclick = () => checkMCAnswer(index);
        button.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${option}</span>
        `;
        optionsContainer.appendChild(button);
    });
}

function checkMCAnswer(selectedIndex) {
    const question = mcQuestions[currentMCQuestion];
    const feedbackEl = document.getElementById('mcFeedback');
    const buttons = document.querySelectorAll('.mc-option');
    
    buttons.forEach(btn => btn.disabled = true);
    
    if (selectedIndex === question.correct) {
        mcScore++;
        updateTotalPoints(10);
        incrementExercises(); // Track stats
        feedbackEl.innerHTML = `
            <div class="feedback-correct">
                <i class="fa-solid fa-check-circle"></i>
                <strong>Richtig!</strong> Das ist die korrekte Antwort.
            </div>
        `;
        buttons[selectedIndex].classList.add('correct');
    } else {
        feedbackEl.innerHTML = `
            <div class="feedback-incorrect">
                <i class="fa-solid fa-times-circle"></i>
                <strong>Falsch!</strong> Die richtige Antwort ist: ${question.options[question.correct]}
            </div>
        `;
        buttons[selectedIndex].classList.add('incorrect');
        buttons[question.correct].classList.add('correct');
    }
    
    document.getElementById('quizScore').textContent = mcScore;
    
    setTimeout(() => {
        currentMCQuestion++;
        showMCQuestion();
    }, 2500);
}

function finishMCQuiz() {
    const feedbackEl = document.getElementById('mcFeedback');
    const percentage = (mcScore / mcQuestions.length) * 100;
    
    let message = '';
    if (percentage === 100) {
        message = '🏆 Perfekt! Du bist ein Meister!';
    } else if (percentage >= 80) {
        message = '🌟 Ausgezeichnet! Sehr gut gemacht!';
    } else if (percentage >= 60) {
        message = '👍 Gut! Du lernst schnell!';
    } else {
        message = '💪 Bleib dran! Übung macht den Meister!';
    }
    
    feedbackEl.innerHTML = `
        <div class="feedback-complete">
            <h4>${message}</h4>
            <p>Du hast ${mcScore} von ${mcQuestions.length} Fragen richtig beantwortet (${percentage.toFixed(0)}%)</p>
            <button class="btn btn-primary" onclick="initMCQuiz()">
                <i class="fa-solid fa-rotate"></i>
                Noch einmal
            </button>
        </div>
    `;
    
    document.getElementById('mcQuestion').textContent = '✓ Quiz abgeschlossen!';
    document.getElementById('mcOptions').innerHTML = '';
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ============================================
// SMOOTH SCROLLING
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                document.getElementById('mainNav').classList.remove('mobile-open');
                document.getElementById('mobileMenuToggle').classList.remove('active');
            }
        });
    });
});

// ============================================
// SCROLL PROGRESS BAR
// ============================================
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.scroll-progress').style.width = scrolled + '%';
});

// ============================================
// BACK TO TOP BUTTON
// ============================================
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.lesson-card, .level-card, .exercise-card, .pronunciation-card').forEach(el => {
        observer.observe(el);
    });
});

// ============================================
// BLANK INPUT INTERACTION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const blanks = document.querySelectorAll('.blank-input');
    blanks.forEach(blank => {
        blank.addEventListener('focus', function() {
            if (this.textContent === '_____') {
                this.textContent = '';
            }
            this.style.backgroundColor = '#fff3cd';
        });
        
        blank.addEventListener('blur', function() {
            if (this.textContent.trim() === '') {
                this.textContent = '_____';
            }
            this.style.backgroundColor = '';
        });
        
        blank.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                checkFillBlanks();
            }
        });
    });
});

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Deutsch Meistern Platform Initialized');
    
    // Load saved progress
    loadProgress();
    
    // Initialize language
    changeLanguage(currentLanguage);
    
    // Initialize dark mode
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        const icon = document.querySelector('#themeToggle i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    // Initialize quizzes (only if elements exist)
    if (document.getElementById('quizWord')) initArticleQuiz();
    if (document.getElementById('mcQuizContainer')) initMCQuiz();
    if (document.getElementById('flashcard')) initFlashcards();
    if (document.getElementById('customAudioUpload')) initCustomAudioUpload();
    
    // Initialize NEW features
    initFavorites();
    updateStats();
    
    // Load achievements
    achievements.forEach(id => {
        const element = document.querySelector(`[data-achievement="${id}"]`);
        if (element) {
            element.classList.remove('locked');
            element.classList.add('unlocked');
        }
    });
    
    // Event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => changeLanguage(btn.dataset.lang));
    });
    
    document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);
    document.getElementById('mobileMenuToggle').addEventListener('click', toggleMobileMenu);
    
    // Add CSS for animations and new features
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(-30px);
            }
        }
        
        .correct-blank {
            background-color: #d4edda !important;
            border: 2px solid #28a745 !important;
            color: #155724 !important;
        }
        
        .incorrect-blank {
            background-color: #f8d7da !important;
            border: 2px solid #dc3545 !important;
            color: #721c24 !important;
        }
        
        .quiz-option.correct {
            background-color: #d4edda !important;
            border-color: #28a745 !important;
            transform: scale(1.05);
        }
        
        .quiz-option.incorrect {
            background-color: #f8d7da !important;
            border-color: #dc3545 !important;
        }
        
        .mc-option.correct {
            background-color: #d4edda !important;
            border-color: #28a745 !important;
        }
        
        .mc-option.incorrect {
            background-color: #f8d7da !important;
            border-color: #dc3545 !important;
        }
        
        .search-highlight {
            animation: highlightPulse 1s ease;
        }
        
        @keyframes highlightPulse {
            0%, 100% { background-color: transparent; }
            50% { background-color: rgba(247, 178, 103, 0.2); }
        }
    `;
    document.head.appendChild(style);
    
    console.log('✅ All systems ready!');
    console.log(`📊 Total Points: ${totalPoints}`);
    console.log(`🌍 Language: ${currentLanguage}`);
    console.log(`❤️ Favorites: ${favorites.length}`);
    console.log(`🏆 Achievements: ${achievements.length}`);
    console.log(`🔥 Streak: ${stats.streakDays} days`);
});

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    if (e.key === 's' || e.key === 'S') {
        const quizWord = document.getElementById('quizWord');
        if (quizWord && quizWord.textContent !== '✓ Abgeschlossen') {
            speakWord(quizWord.textContent);
        }
    }
    
    // Flashcard navigation
    if (e.key === 'ArrowLeft') {
        const flashcardSection = document.getElementById('flashcards');
        if (flashcardSection && isElementInViewport(flashcardSection)) {
            previousFlashcard();
        }
    }
    
    if (e.key === 'ArrowRight') {
        const flashcardSection = document.getElementById('flashcards');
        if (flashcardSection && isElementInViewport(flashcardSection)) {
            nextFlashcard();
        }
    }
    
    if (e.key === ' ') {
        const flashcard = document.getElementById('flashcard');
        if (flashcard && isElementInViewport(flashcard)) {
            e.preventDefault();
            flipFlashcard();
        }
    }
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============================================
// FEATURE 1: FAVORITES SYSTEM
// ============================================
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function toggleFavorite(word) {
    const index = favorites.indexOf(word);
    const card = document.querySelector(`[data-word="${word}"]`);
    const btn = card?.querySelector('.favorite-btn i');
    
    if (index === -1) {
        // Add to favorites
        favorites.push(word);
        if (btn) {
            btn.classList.remove('fa-regular');
            btn.classList.add('fa-solid');
        }
        showNotification('❤️ Zu Favoriten hinzugefügt!', 'success');
        updateTotalPoints(5);
    } else {
        // Remove from favorites
        favorites.splice(index, 1);
        if (btn) {
            btn.classList.remove('fa-solid');
            btn.classList.add('fa-regular');
        }
        showNotification('💔 Aus Favoriten entfernt', 'info');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesCount();
    updateFavoritesDisplay();
}

function updateFavoritesCount() {
    document.getElementById('favoritesCount').textContent = favorites.length;
}

function updateFavoritesDisplay() {
    const favoritesList = document.getElementById('favoritesList');
    
    if (favorites.length === 0) {
        favoritesList.innerHTML = `
            <div class="empty-state">
                <i class="fa-regular fa-heart"></i>
                <p>Noch keine Favoriten vorhanden</p>
                <small>Klicke auf das Herz bei Vokabeln, um sie hier zu speichern</small>
            </div>
        `;
    } else {
        favoritesList.innerHTML = favorites.map(word => `
            <div class="vocab-card favorite-card" data-word="${word}">
                <div class="vocab-word">
                    <span class="word-german">${word}</span>
                    <div class="vocab-actions">
                        <button class="audio-btn" onclick="speakWord('${word}')">
                            <i class="fa-solid fa-volume-high"></i>
                        </button>
                        <button class="favorite-btn" onclick="toggleFavorite('${word}')">
                            <i class="fa-solid fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function clearAllFavorites() {
    if (confirm('Möchtest du wirklich alle Favoriten löschen?')) {
        favorites = [];
        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateFavoritesCount();
        updateFavoritesDisplay();
        
        // Update all favorite buttons
        document.querySelectorAll('.favorite-btn i').forEach(icon => {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        });
        
        showNotification('🗑️ Alle Favoriten gelöscht', 'info');
    }
}

function filterVocab(type) {
    const allLessons = document.querySelectorAll('.lesson-card');
    const favoritesSection = document.getElementById('favoritesSection');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    document.getElementById(`filter${type.charAt(0).toUpperCase() + type.slice(1)}`).classList.add('active');
    
    if (type === 'favorites') {
        allLessons.forEach(lesson => lesson.style.display = 'none');
        favoritesSection.style.display = 'block';
        updateFavoritesDisplay();
    } else {
        allLessons.forEach(lesson => lesson.style.display = 'block');
        favoritesSection.style.display = 'none';
    }
}

// ============================================
// FEATURE 2: SEARCH FUNCTION
// ============================================
function searchVocab() {
    const searchTerm = document.getElementById('vocabSearch').value.toLowerCase();
    const clearBtn = document.getElementById('searchClear');
    const vocabCards = document.querySelectorAll('.vocab-card');
    const vocabRows = document.querySelectorAll('.vocab-row');
    
    // Show/hide clear button
    clearBtn.style.display = searchTerm ? 'block' : 'none';
    
    let foundCount = 0;
    
    // Search in vocab cards
    vocabCards.forEach(card => {
        const word = card.querySelector('.word-german')?.textContent.toLowerCase() || '';
        const translation = card.querySelector('.translation-en')?.textContent.toLowerCase() || '';
        const georgian = card.querySelector('.translation-ka')?.textContent.toLowerCase() || '';
        
        if (word.includes(searchTerm) || translation.includes(searchTerm) || georgian.includes(searchTerm)) {
            card.style.display = '';
            card.classList.add('search-highlight');
            foundCount++;
        } else {
            card.style.display = 'none';
            card.classList.remove('search-highlight');
        }
    });
    
    // Search in vocab table rows
    vocabRows.forEach(row => {
        const word = row.querySelector('.word-german')?.textContent.toLowerCase() || '';
        const cells = Array.from(row.querySelectorAll('td')).map(td => td.textContent.toLowerCase()).join(' ');
        
        if (word.includes(searchTerm) || cells.includes(searchTerm)) {
            row.style.display = '';
            row.classList.add('search-highlight');
            foundCount++;
        } else {
            row.style.display = 'none';
            row.classList.remove('search-highlight');
        }
    });
    
    // Show notification if no results
    if (searchTerm && foundCount === 0) {
        showNotification('🔍 Keine Ergebnisse gefunden', 'info');
    }
}

function clearSearch() {
    document.getElementById('vocabSearch').value = '';
    searchVocab();
}

// ============================================
// FEATURE 3: NOTES SYSTEM
// ============================================
let notes = JSON.parse(localStorage.getItem('vocabNotes')) || {};

function addNoteToVocab(word) {
    const note = prompt('Füge eine Notiz hinzu:');
    if (note) {
        notes[word] = note;
        localStorage.setItem('vocabNotes', JSON.stringify(notes));
        showNotification('📝 Notiz gespeichert!', 'success');
        displayNote(word);
    }
}

function displayNote(word) {
    const card = document.querySelector(`[data-word="${word}"]`);
    if (card && notes[word]) {
        let noteDisplay = card.querySelector('.note-display');
        if (!noteDisplay) {
            noteDisplay = document.createElement('div');
            noteDisplay.className = 'note-display';
            card.appendChild(noteDisplay);
        }
        noteDisplay.innerHTML = `
            <div class="note-content">
                <i class="fa-solid fa-note-sticky"></i>
                <span>${notes[word]}</span>
                <button onclick="deleteNote('${word}')"><i class="fa-solid fa-times"></i></button>
            </div>
        `;
    }
}

function deleteNote(word) {
    delete notes[word];
    localStorage.setItem('vocabNotes', JSON.stringify(notes));
    const card = document.querySelector(`[data-word="${word}"]`);
    const noteDisplay = card?.querySelector('.note-display');
    if (noteDisplay) {
        noteDisplay.remove();
    }
    showNotification('🗑️ Notiz gelöscht', 'info');
}

// ============================================
// FEATURE 4: PWA INSTALLATION
// ============================================
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('💾 PWA: Install prompt available');
    e.preventDefault();
    deferredPrompt = e;
    showInstallBanner();
});

function showInstallBanner() {
    // Create install banner
    const banner = document.createElement('div');
    banner.className = 'install-banner';
    banner.innerHTML = `
        <div class="install-content">
            <i class="fa-solid fa-download"></i>
            <div class="install-text">
                <strong>Als App installieren</strong>
                <small>Funktioniert offline und schneller!</small>
            </div>
        </div>
        <div class="install-actions">
            <button class="btn btn-primary btn-sm" onclick="installPWA()">
                <i class="fa-solid fa-download"></i>
                Installieren
            </button>
            <button class="btn btn-outline btn-sm" onclick="dismissInstallBanner()">
                <i class="fa-solid fa-times"></i>
            </button>
        </div>
    `;
    document.body.appendChild(banner);
    
    setTimeout(() => banner.classList.add('visible'), 100);
}

async function installPWA() {
    if (!deferredPrompt) {
        showNotification('❌ Installation nicht verfügbar', 'error');
        return;
    }
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
        showNotification('✅ App wird installiert...', 'success');
    }
    
    deferredPrompt = null;
    dismissInstallBanner();
}

function dismissInstallBanner() {
    const banner = document.querySelector('.install-banner');
    if (banner) {
        banner.classList.remove('visible');
        setTimeout(() => banner.remove(), 300);
    }
}

// ============================================
// FEATURE 5: STATISTICS & ACHIEVEMENTS
// ============================================
let stats = JSON.parse(localStorage.getItem('stats')) || {
    streakDays: 0,
    lastVisit: null,
    totalExercises: 0,
    vocabLearned: 0,
    totalMinutes: 0,
    weeklyData: [0, 0, 0, 0, 0, 0, 0],
    startDate: new Date().toISOString()
};

let achievements = JSON.parse(localStorage.getItem('achievements')) || [];

function updateStats() {
    // Update streak
    updateStreak();
    
    // Update displays
    document.getElementById('streakDays').textContent = stats.streakDays;
    document.getElementById('totalExercises').textContent = stats.totalExercises;
    document.getElementById('vocabLearned').textContent = stats.vocabLearned;
    document.getElementById('totalMinutes').textContent = stats.totalMinutes;
    
    // Update weekly chart
    updateWeeklyChart();
    
    // Check achievements
    checkAchievements();
}

function updateStreak() {
    const today = new Date().toDateString();
    const lastVisit = stats.lastVisit ? new Date(stats.lastVisit).toDateString() : null;
    
    if (lastVisit !== today) {
        if (lastVisit === new Date(Date.now() - 86400000).toDateString()) {
            // Consecutive day
            stats.streakDays++;
        } else if (!lastVisit) {
            // First visit
            stats.streakDays = 1;
        } else {
            // Streak broken
            stats.streakDays = 1;
        }
        stats.lastVisit = new Date().toISOString();
        saveStats();
    }
}

function incrementExercises() {
    stats.totalExercises++;
    updateWeeklyData();
    saveStats();
    updateStats();
}

function incrementVocabLearned() {
    stats.vocabLearned++;
    saveStats();
    updateStats();
}

function addLearningTime(minutes) {
    stats.totalMinutes += minutes;
    saveStats();
    updateStats();
}

function updateWeeklyData() {
    const today = new Date().getDay();
    stats.weeklyData[today]++;
    saveStats();
}

function saveStats() {
    localStorage.setItem('stats', JSON.stringify(stats));
}

function updateWeeklyChart() {
    const ctx = document.getElementById('progressChart');
    if (!ctx) return;
    
    // Destroy existing chart if exists
    if (window.weeklyChart) {
        window.weeklyChart.destroy();
    }
    
    const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    
    window.weeklyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: days,
            datasets: [{
                label: 'Übungen diese Woche',
                data: stats.weeklyData,
                backgroundColor: 'rgba(247, 178, 103, 0.5)',
                borderColor: '#f7b267',
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

function checkAchievements() {
    const achievementChecks = [
        { id: 'first-word', condition: stats.vocabLearned >= 1, title: '🌟 Erstes Wort gelernt!' },
        { id: '10-words', condition: stats.vocabLearned >= 10, title: '📚 10 Vokabeln gemeistert!' },
        { id: '50-words', condition: stats.vocabLearned >= 50, title: '🎓 50 Vokabeln! Wow!' },
        { id: '7-day-streak', condition: stats.streakDays >= 7, title: '🔥 7 Tage am Stück! Toll!' },
        { id: 'perfect-quiz', condition: articleScore === 10 || mcScore === 5, title: '🏆 Perfektes Quiz!' },
        { id: '100-points', condition: totalPoints >= 100, title: '👑 100 Punkte erreicht!' }
    ];
    
    achievementChecks.forEach(check => {
        if (check.condition && !achievements.includes(check.id)) {
            unlockAchievement(check.id, check.title);
        }
    });
}

function unlockAchievement(id, title) {
    achievements.push(id);
    localStorage.setItem('achievements', JSON.stringify(achievements));
    
    const element = document.querySelector(`[data-achievement="${id}"]`);
    if (element) {
        element.classList.remove('locked');
        element.classList.add('unlocked');
    }
    
    // Show celebration
    showAchievementPopup(title);
    updateTotalPoints(25);
}

function showAchievementPopup(title) {
    const popup = document.createElement('div');
    popup.className = 'achievement-popup';
    popup.innerHTML = `
        <div class="achievement-popup-content">
            <i class="fa-solid fa-trophy"></i>
            <h3>Neue Errungenschaft!</h3>
            <p>${title}</p>
        </div>
    `;
    document.body.appendChild(popup);
    
    setTimeout(() => popup.classList.add('visible'), 100);
    setTimeout(() => {
        popup.classList.remove('visible');
        setTimeout(() => popup.remove(), 300);
    }, 3000);
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-circle'
    };
    
    notification.innerHTML = `
        <i class="fa-solid ${icons[type]}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('visible'), 100);
    
    setTimeout(() => {
        notification.classList.remove('visible');
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// Stats are now integrated directly in the original functions above
// No need to override them here

// ============================================
// LOAD FAVORITES ON START
// ============================================
function initFavorites() {
    updateFavoritesCount();
    
    // Mark favorite buttons
    document.querySelectorAll('.vocab-card[data-word]').forEach(card => {
        const word = card.dataset.word;
        if (favorites.includes(word)) {
            const btn = card.querySelector('.favorite-btn i');
            if (btn) {
                btn.classList.remove('fa-regular');
                btn.classList.add('fa-solid');
            }
        }
    });
}

// ============================================
// EXPORT FUNCTIONS FOR GLOBAL ACCESS
// ============================================
window.speakWord = speakWord;
window.checkArticle = checkArticle;
window.checkFillBlanks = checkFillBlanks;
window.checkMCAnswer = checkMCAnswer;
window.initArticleQuiz = initArticleQuiz;
window.initMCQuiz = initMCQuiz;
window.flipFlashcard = flipFlashcard;
window.nextFlashcard = nextFlashcard;
window.previousFlashcard = previousFlashcard;
window.shuffleFlashcards = shuffleFlashcards;
window.markAsKnown = markAsKnown;
window.markAsUnknown = markAsUnknown;
window.toggleRecording = toggleRecording;
window.deleteRecording = deleteRecording;
window.nextPracticeWord = nextPracticeWord;
window.changeLanguage = changeLanguage;
window.toggleDarkMode = toggleDarkMode;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleFavorite = toggleFavorite;
window.clearAllFavorites = clearAllFavorites;
window.filterVocab = filterVocab;
window.searchVocab = searchVocab;
window.clearSearch = clearSearch;
window.addNoteToVocab = addNoteToVocab;
window.deleteNote = deleteNote;
window.installPWA = installPWA;
window.dismissInstallBanner = dismissInstallBanner;

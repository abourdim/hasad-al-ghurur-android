/* حصاد الغرور — THE HARVEST OF ARROGANCE — app.js v1.0 */
/* Based on "Hasad Al-Ghurur" by Sheikh Mohammed al-Ghazali (1917-1996) */
/* Written after the 1967 defeat — Dar Al-Qalam Damascus */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'حصاد الغرور',
    splashSub: 'دروس تاريخية في التواضع ومواجهة الهزيمة',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة آل عمران ١٣٩',
    tabHome: 'الرئيسية', tabLessons: 'الدروس', tabHistory: 'التاريخ',
    tabQuiz: 'اختبار', tabMeter: 'التقييم', tabAbout: 'الكتاب',
    lessonsTitle: 'دروس من حصاد الغرور',
    lessonsDesc: '٢٠ درساً تاريخياً عن التواضع والغرور وعواقب البعد عن الله',
    historyTitle: 'مشاهد تاريخية',
    historyDesc: 'أمم سقطت بالغرور ونهضت بالتواضع — عبر التاريخ الإسلامي',
    quizTitle: 'من يريد أن يكون عالماً؟',
    quizDesc: 'اختبر معرفتك بالتاريخ والتواضع — ١٥ سؤالاً بصيغة المسابقات',
    meterTitle: 'مقياس التواضع',
    meterDesc: 'قيّم نفسك بصدق — هل أنت متواضع حقاً؟',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية التواضع',
    resetBtn: 'إعادة التقييم',
    submitQuiz: 'تحقق من الإجابة',
    dailyLabel: '🌾 حكمة اليوم',
    searchPlaceholder: 'ابحث في الدروس...',
    share: 'مشاركة',
    verse: 'الآية',
    chapter: 'الفصل',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    badgesLabel: 'الأوسمة',
    streakMsg: 'يوم متتالي!',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: 'استخارة',
    lifelineSheikh: 'اسأل الشيخ',
    correct: 'صحيح! أحسنت!',
    wrong: 'خطأ! الإجابة الصحيحة: ',
    quizComplete: 'أكملت الاختبار!',
    scoreLabel: 'النتيجة',
    quizAgain: 'أعد الاختبار',
    meterResult: 'نتيجة التقييم',
    splashFeatures: [
      '٢٠ درساً من كتاب حصاد الغرور',
      'مشاهد تاريخية — أمم سقطت ونهضت',
      'اختبار "من يريد أن يكون عالماً؟"',
      'مقياس التواضع — قيّم نفسك'
    ],
  },
  en: {
    appTitle: 'The Harvest of Arrogance',
    splashSub: 'Historical lessons on humility and facing defeat',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Aal-Imran 3:139',
    tabHome: 'Home', tabLessons: 'Lessons', tabHistory: 'History',
    tabQuiz: 'Quiz', tabMeter: 'Meter', tabAbout: 'Book',
    lessonsTitle: 'Lessons from the Harvest of Arrogance',
    lessonsDesc: '20 historical lessons on humility, arrogance, and the consequences of straying from God',
    historyTitle: 'Historical Scenes',
    historyDesc: 'Nations that fell through arrogance and rose through humility — across Islamic history',
    quizTitle: 'Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of history and humility — 15 questions in quiz format',
    meterTitle: 'Humility Meter',
    meterDesc: 'Assess yourself honestly — are you truly humble?',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Humility',
    resetBtn: 'Retake Assessment',
    submitQuiz: 'Check Answer',
    dailyLabel: '🌾 Today\'s Wisdom',
    searchPlaceholder: 'Search lessons...',
    share: 'Share',
    verse: 'Verse',
    chapter: 'Chapter',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    badgesLabel: 'Badges',
    streakMsg: 'day streak!',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: 'Guidance',
    lifelineSheikh: 'Ask the Sheikh',
    correct: 'Correct! Well done!',
    wrong: 'Wrong! The correct answer: ',
    quizComplete: 'Quiz Complete!',
    scoreLabel: 'Score',
    quizAgain: 'Retake Quiz',
    meterResult: 'Assessment Result',
    splashFeatures: [
      '20 lessons from The Harvest of Arrogance',
      'Historical scenes — nations that fell and rose',
      '"Who Wants to Be a Scholar?" quiz',
      'Humility Meter — assess yourself'
    ],
  },
  fr: {
    appTitle: 'La Moisson de l\'Orgueil',
    splashSub: 'Lecons historiques sur l\'humilite et la defaite',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Aal-Imran 3:139',
    tabHome: 'Accueil', tabLessons: 'Lecons', tabHistory: 'Histoire',
    tabQuiz: 'Quiz', tabMeter: 'Evaluation', tabAbout: 'Livre',
    lessonsTitle: 'Lecons de la Moisson de l\'Orgueil',
    lessonsDesc: '20 lecons historiques sur l\'humilite, l\'orgueil et les consequences de l\'eloignement de Dieu',
    historyTitle: 'Scenes Historiques',
    historyDesc: 'Des nations tombees par l\'orgueil et relevees par l\'humilite — a travers l\'histoire islamique',
    quizTitle: 'Qui Veut Etre Savant ?',
    quizDesc: 'Testez vos connaissances en histoire et humilite — 15 questions en format quiz',
    meterTitle: 'Metre d\'Humilite',
    meterDesc: 'Evaluez-vous honnetement — etes-vous vraiment humble ?',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour l\'Humilite',
    resetBtn: 'Refaire l\'Evaluation',
    submitQuiz: 'Verifier la Reponse',
    dailyLabel: '🌾 Sagesse du Jour',
    searchPlaceholder: 'Rechercher les lecons...',
    share: 'Partager',
    verse: 'Verset',
    chapter: 'Chapitre',
    xpLabel: 'Points d\'Experience',
    levelLabel: 'Niveau',
    badgesLabel: 'Badges',
    streakMsg: 'jours consecutifs !',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: 'Guidance',
    lifelineSheikh: 'Demander au Cheikh',
    correct: 'Correct ! Bravo !',
    wrong: 'Faux ! La bonne reponse : ',
    quizComplete: 'Quiz Termine !',
    scoreLabel: 'Score',
    quizAgain: 'Refaire le Quiz',
    meterResult: 'Resultat de l\'Evaluation',
    splashFeatures: [
      '20 lecons de La Moisson de l\'Orgueil',
      'Scenes historiques — nations tombees et relevees',
      'Quiz « Qui Veut Etre Savant ? »',
      'Metre d\'Humilite — evaluez-vous'
    ],
  }
};

// ═══════════════ LESSONS DATA (20 lessons from the book) ═══════════════
const LESSONS = [
  {
    id:1, emoji:'🏛️',
    ar:{title:'الغرور يسبق السقوط',desc:'كتب الغزالي هذا الكتاب بعد هزيمة ١٩٦٧. يرى أن الهزيمة عقوبة إلهية على غرور الدولة الناصرية التي ابتعدت عن الله. الحلول المادية والعسكرية ستفشل ما لم يسبقها الإصلاح الروحي والأخلاقي.',verse:'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ',verseRef:'آل عمران: ١٣٩',action:'راجع نفسك: هل تعتمد على الله أم على قوتك فقط؟'},
    en:{title:'Arrogance Precedes the Fall',desc:'Al-Ghazali sees: A nation that prides itself on its strength while forgetting God will inevitably fall. The 1967 defeat was not a surprise — it was the natural result of years of arrogance and straying from divine guidance.',verse:'Do not weaken and do not grieve, for you will be superior if you are believers',verseRef:'Aal-Imran: 139',action:'Reflect: do you rely on God or only on your own strength?'},
    fr:{title:'L\'Orgueil Precede la Chute',desc:'Al-Ghazali voit: Une nation qui s\'enorgueillit de sa force en oubliant Dieu tombera inevitablement. La defaite de 1967 n\'etait pas une surprise — c\'etait le resultat naturel d\'annees d\'orgueil.',verse:'Ne faiblissez pas et ne vous affligez pas, car vous etes les plus eleves si vous etes croyants',verseRef:'Aal-Imran: 139',action:'Reflechissez : comptez-vous sur Dieu ou seulement sur votre force ?'}
  },
  {
    id:2, emoji:'🪞',
    ar:{title:'محاسبة النفس بعد الهزيمة',desc:'يرى الغزالي: الهزيمة ليست نهاية العالم بل فرصة للمراجعة. الأمم العظيمة تتعلم من هزائمها وتنهض أقوى. لكن الغرور يمنع الإنسان من رؤية أخطائه.',verse:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',verseRef:'الرعد: ١١',action:'اكتب ثلاثة أخطاء ارتكبتها مؤخراً — واعترف بها بصدق'},
    en:{title:'Self-Accountability After Defeat',desc:'Al-Ghazali sees: Defeat is not the end but an opportunity for review. Great nations learn from their defeats and rise stronger. But arrogance prevents a person from seeing their own mistakes.',verse:'Indeed, God will not change the condition of a people until they change what is in themselves',verseRef:'Ar-Ra\'d: 11',action:'Write three recent mistakes you made — acknowledge them honestly'},
    fr:{title:'L\'Examen de Conscience Apres la Defaite',desc:'Al-Ghazali voit: La defaite n\'est pas la fin mais une opportunite de revision. Les grandes nations apprennent de leurs defaites. Mais l\'orgueil empeche de voir ses erreurs.',verse:'Dieu ne change pas la condition d\'un peuple tant qu\'il ne change pas ce qui est en lui-meme',verseRef:'Ar-Ra\'d: 11',action:'Ecrivez trois erreurs recentes — reconnaissez-les honnetement'}
  },
  {
    id:3, emoji:'⚔️',
    ar:{title:'دروس من بدر وأحد',desc:'يرى الغزالي: في بدر انتصر المسلمون وهم قلة لأنهم اعتمدوا على الله بتواضع. في أحد تعرضوا لخسارة عندما اغتر بعضهم بالنصر وخالفوا أمر النبي. التواضع ينتصر والغرور يُهزم.',verse:'وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ وَأَنتُمْ أَذِلَّةٌ',verseRef:'آل عمران: ١٢٣',action:'تذكر نجاحاً حققته — هل شكرت الله عليه أم نسبته لنفسك؟'},
    en:{title:'Lessons from Badr and Uhud',desc:'Al-Ghazali sees: At Badr, Muslims won despite being outnumbered because they relied on God with humility. At Uhud, they suffered loss when some became overconfident and disobeyed the Prophet. Humility wins; arrogance loses.',verse:'God had already helped you at Badr when you were weak',verseRef:'Aal-Imran: 123',action:'Recall a success — did you thank God or credit yourself?'},
    fr:{title:'Lecons de Badr et Ouhoud',desc:'Al-Ghazali voit: A Badr, les musulmans ont vaincu malgre leur petit nombre car ils comptaient sur Dieu avec humilite. A Ouhoud, ils ont subi des pertes quand certains sont devenus arrogants.',verse:'Dieu vous a deja secourus a Badr alors que vous etiez faibles',verseRef:'Aal-Imran: 123',action:'Rappelez-vous un succes — avez-vous remercie Dieu ou vous en etes-vous attribue le merite ?'}
  },
  {
    id:4, emoji:'🌍',
    ar:{title:'الأندلس — حضارة أسقطها الغرور',desc:'يرى الغزالي: حكم المسلمون الأندلس ٨٠٠ سنة وبنوا حضارة عظيمة. لكنهم سقطوا عندما انشغلوا بالترف والصراعات الداخلية ونسوا رسالتهم. الغرور حوّل القوة إلى ضعف.',verse:'',verseRef:'',action:'ابحث عن مظاهر الغرور في حياتك اليومية — وتخلص منها'},
    en:{title:'Al-Andalus — A Civilization Felled by Arrogance',desc:'Al-Ghazali sees: Muslims ruled Al-Andalus for 800 years and built a great civilization. But they fell when they became preoccupied with luxury, internal conflicts, and forgot their mission. Arrogance turned strength into weakness.',verse:'',verseRef:'',action:'Look for signs of arrogance in your daily life — and eliminate them'},
    fr:{title:'Al-Andalus — Une Civilisation Abattue par l\'Orgueil',desc:'Al-Ghazali voit: Les musulmans ont gouverne Al-Andalus pendant 800 ans et bati une grande civilisation. Mais ils sont tombes quand ils se sont perdus dans le luxe et les conflits internes.',verse:'',verseRef:'',action:'Cherchez les signes d\'orgueil dans votre quotidien — et eliminez-les'}
  },
  {
    id:5, emoji:'🏗️',
    ar:{title:'البناء يحتاج تواضعاً',desc:'يرى الغزالي: لا يمكن بناء أمة عظيمة بالغرور. البناء الحقيقي يحتاج تواضعاً أمام الله وأمام الحقيقة. الشعوب التي تبني مستقبلها تعترف بأخطائها أولاً.',verse:'تِلْكَ الدَّارُ الْآخِرَةُ نَجْعَلُهَا لِلَّذِينَ لَا يُرِيدُونَ عُلُوًّا فِي الْأَرْضِ وَلَا فَسَادًا',verseRef:'القصص: ٨٣',action:'حدد مجالاً في حياتك تحتاج فيه للتواضع — وابدأ اليوم'},
    en:{title:'Building Requires Humility',desc:'Al-Ghazali sees: No great nation can be built on arrogance. True building requires humility before God and before truth. Nations that build their future first acknowledge their mistakes.',verse:'That is the Home of the Hereafter — We assign it to those who do not seek superiority on earth nor corruption',verseRef:'Al-Qasas: 83',action:'Identify an area in your life where you need more humility — start today'},
    fr:{title:'Construire Necessite l\'Humilite',desc:'Al-Ghazali voit: Aucune grande nation ne peut etre batie sur l\'orgueil. La vraie construction necessite l\'humilite devant Dieu et devant la verite.',verse:'C\'est la Demeure de l\'Au-dela que Nous reservons a ceux qui ne recherchent ni superiorite ni corruption sur terre',verseRef:'Al-Qasas: 83',action:'Identifiez un domaine ou vous avez besoin d\'humilite — commencez aujourd\'hui'}
  },
  {
    id:6, emoji:'📖',
    ar:{title:'الإسلام في إندونيسيا — نموذج التواضع',desc:'يرى الغزالي: وصل الإسلام إلى إندونيسيا بلا جيوش ولا فتوحات — وصل بالتجار المتواضعين والدعاة الصادقين. أكبر دولة إسلامية في العالم بُنيت بالأخلاق لا بالسيف.',verse:'',verseRef:'',action:'كيف يمكنك نشر الخير حولك بالتواضع والقدوة الحسنة؟'},
    en:{title:'Islam in Indonesia — A Model of Humility',desc:'Al-Ghazali sees: Islam reached Indonesia without armies or conquests — it arrived through humble merchants and sincere preachers. The world\'s largest Muslim nation was built by character, not by the sword.',verse:'',verseRef:'',action:'How can you spread goodness around you through humility and good example?'},
    fr:{title:'L\'Islam en Indonesie — Un Modele d\'Humilite',desc:'Al-Ghazali voit: L\'Islam est arrive en Indonesie sans armees ni conquetes — par des marchands humbles et des predicateurs sinceres. La plus grande nation musulmane fut batie par le caractere, pas par l\'epee.',verse:'',verseRef:'',action:'Comment pouvez-vous repandre le bien par l\'humilite et le bon exemple ?'}
  },
  {
    id:7, emoji:'👑',
    ar:{title:'فرعون — رمز الغرور المطلق',desc:'فرعون هو النموذج القرآني الأول للغرور. قال "أنا ربكم الأعلى" فكان مصيره الغرق والهلاك. كل من يتكبر على الله ينتهي مثل فرعون.',verse:'فَأَخَذَهُ اللَّهُ نَكَالَ الْآخِرَةِ وَالْأُولَىٰ',verseRef:'النازعات: ٢٥',action:'تأمل: هل تتصرف أحياناً وكأنك لا تحتاج لأحد؟'},
    en:{title:'Pharaoh — The Ultimate Symbol of Arrogance',desc:'Pharaoh is the Quran\'s prime example of arrogance. He said "I am your supreme lord" and his fate was drowning and destruction. Everyone who becomes arrogant before God ends like Pharaoh.',verse:'So God seized him as an exemplary punishment for the last and the first',verseRef:'An-Nazi\'at: 25',action:'Reflect: do you sometimes act as if you need no one?'},
    fr:{title:'Pharaon — Le Symbole Ultime de l\'Orgueil',desc:'Pharaon est le premier exemple coranique de l\'orgueil. Il dit « Je suis votre seigneur supreme » et son destin fut la noyade et la destruction.',verse:'Dieu le saisit comme un chatiment exemplaire pour les derniers et les premiers',verseRef:'An-Nazi\'at: 25',action:'Reflechissez : agissez-vous parfois comme si vous n\'aviez besoin de personne ?'}
  },
  {
    id:8, emoji:'🕊️',
    ar:{title:'التواضع سلاح المؤمن',desc:'التواضع ليس ضعفاً بل قوة. المتواضع يرى الحقيقة بوضوح لأنه لا يغطيها بغروره. النبي محمد صلى الله عليه وسلم كان أعظم الناس وأشدهم تواضعاً.',verse:'وَعِبَادُ الرَّحْمَنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا',verseRef:'الفرقان: ٦٣',action:'تواضع لشخص واحد اليوم — اعتذر أو اطلب المساعدة'},
    en:{title:'Humility Is the Believer\'s Weapon',desc:'Humility is not weakness but strength. The humble person sees truth clearly because arrogance doesn\'t cloud their vision. Prophet Muhammad was the greatest of people and the most humble.',verse:'The servants of the Most Merciful are those who walk upon the earth in humility',verseRef:'Al-Furqan: 63',action:'Show humility to one person today — apologize or ask for help'},
    fr:{title:'L\'Humilite Est l\'Arme du Croyant',desc:'L\'humilite n\'est pas une faiblesse mais une force. L\'humble voit la verite clairement car l\'orgueil ne voile pas sa vision.',verse:'Les serviteurs du Tout-Misericordieux sont ceux qui marchent humblement sur terre',verseRef:'Al-Furqan: 63',action:'Montrez de l\'humilite envers une personne aujourd\'hui'}
  },
  {
    id:9, emoji:'⚡',
    ar:{title:'النكسة — صدمة اليقظة',desc:'هزيمة ١٩٦٧ كانت صدمة مؤلمة لكنها كانت ضرورية لإيقاظ الأمة من غفلتها. الشيخ الغزالي رأى فيها فرصة للمراجعة الشاملة والعودة إلى الإسلام الحقيقي.',verse:'',verseRef:'',action:'حوّل فشلاً حديثاً إلى درس — ماذا تعلمت منه؟'},
    en:{title:'The Naksa — A Wake-Up Shock',desc:'The 1967 defeat was a painful shock but a necessary one to wake the nation from its slumber. Sheikh al-Ghazali saw it as an opportunity for comprehensive review and a return to authentic Islam.',verse:'',verseRef:'',action:'Turn a recent failure into a lesson — what did you learn from it?'},
    fr:{title:'La Naksa — Un Choc de Reveil',desc:'La defaite de 1967 fut un choc douloureux mais necessaire pour reveiller la nation de sa torpeur. Le Sheikh al-Ghazali y vit une opportunite de revision complete.',verse:'',verseRef:'',action:'Transformez un echec recent en lecon — qu\'en avez-vous appris ?'}
  },
  {
    id:10, emoji:'🛡️',
    ar:{title:'الغزو الثقافي يضعف الأمة',desc:'الغرور ليس فقط عسكرياً بل ثقافي أيضاً. عندما تقلد أمة أمة أخرى بلا وعي، تفقد هويتها وتصبح ضعيفة من الداخل. القوة الحقيقية في الأصالة والتمسك بالقيم.',verse:'',verseRef:'',action:'حدد شيئاً في ثقافتك أنت فخور به — وشاركه مع الآخرين'},
    en:{title:'Cultural Invasion Weakens the Nation',desc:'Arrogance is not only military but also cultural. When a nation blindly imitates another, it loses its identity and becomes weak from within. True strength lies in authenticity and holding to values.',verse:'',verseRef:'',action:'Identify something in your culture you are proud of — share it with others'},
    fr:{title:'L\'Invasion Culturelle Affaiblit la Nation',desc:'L\'orgueil n\'est pas seulement militaire mais aussi culturel. Quand une nation imite aveuglementune autre, elle perd son identite et s\'affaiblit de l\'interieur.',verse:'',verseRef:'',action:'Identifiez quelque chose de votre culture dont vous etes fier — partagez-le'}
  },
  {
    id:11, emoji:'🌱',
    ar:{title:'الجيل الجديد يحمل الأمانة',desc:'الغزالي يدعو لبناء جيل جديد يحمل أمانة الإسلام — جيل يجمع بين العلم والإيمان، بين القوة والتواضع، بين الحداثة والأصالة.',verse:'كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ',verseRef:'آل عمران: ١١٠',action:'علّم شخصاً أصغر منك درساً واحداً من هذا الكتاب'},
    en:{title:'A New Generation Carries the Trust',desc:'Al-Ghazali calls for building a new generation that carries Islam\'s trust — a generation combining knowledge and faith, strength and humility, modernity and authenticity.',verse:'You are the best nation produced for mankind',verseRef:'Aal-Imran: 110',action:'Teach someone younger than you one lesson from this book'},
    fr:{title:'Une Nouvelle Generation Porte le Depot',desc:'Al-Ghazali appelle a construire une nouvelle generation portant le depot de l\'Islam — une generation combinant savoir et foi, force et humilite.',verse:'Vous etes la meilleure communaute suscitee pour les hommes',verseRef:'Aal-Imran: 110',action:'Enseignez a quelqu\'un de plus jeune une lecon de ce livre'}
  },
  {
    id:12, emoji:'🏔️',
    ar:{title:'الدول الإسلامية سقطت ونهضت',desc:'التاريخ الإسلامي مليء بالأمم التي سقطت ثم نهضت. الدولة الأموية سقطت فقامت العباسية. بغداد دُمرت فنهضت مصر والشام. السقوط ليس نهاية — بل بداية جديدة للمتواضعين.',verse:'وَتِلْكَ الْأَيَّامُ نُدَاوِلُهَا بَيْنَ النَّاسِ',verseRef:'آل عمران: ١٤٠',action:'لا تيأس من أي هزيمة — خطط للنهوض بتواضع'},
    en:{title:'Islamic States Fell and Rose Again',desc:'Islamic history is full of nations that fell and then rose. The Umayyads fell and the Abbasids rose. Baghdad was destroyed but Egypt and Syria rose. Falling is not the end — it is a new beginning for the humble.',verse:'And these days We alternate among the people',verseRef:'Aal-Imran: 140',action:'Don\'t despair from any defeat — plan your rise with humility'},
    fr:{title:'Les Etats Islamiques Sont Tombes et Se Sont Releves',desc:'L\'histoire islamique est remplie de nations tombees puis relevees. Les Omeyyades sont tombes et les Abbassides se sont leves. La chute n\'est pas la fin — c\'est un nouveau depart pour les humbles.',verse:'Nous alternons ces jours entre les hommes',verseRef:'Aal-Imran: 140',action:'Ne desesperez pas — planifiez votre relevement avec humilite'}
  },
  {
    id:13, emoji:'🤝',
    ar:{title:'سياسات ناصر — دروس في الحكم',desc:'الغزالي ينتقد بعض سياسات ناصر الثقافية والسياسية التي ساهمت في الهزيمة — ليس كرهاً بل حباً للأمة. النقد البنّاء تواضع، والتبرير الأعمى غرور.',verse:'',verseRef:'',action:'تقبّل النقد البنّاء من حولك بدلاً من الدفاع عن نفسك'},
    en:{title:'Nasser\'s Policies — Lessons in Governance',desc:'Al-Ghazali critiques some of Nasser\'s cultural and political policies that contributed to the defeat — not out of hatred but out of love for the nation. Constructive criticism is humility; blind justification is arrogance.',verse:'',verseRef:'',action:'Accept constructive criticism from those around you instead of defending yourself'},
    fr:{title:'Les Politiques de Nasser — Lecons de Gouvernance',desc:'Al-Ghazali critique certaines politiques culturelles et politiques de Nasser qui ont contribue a la defaite — non par haine mais par amour de la nation. La critique constructive est humilite.',verse:'',verseRef:'',action:'Acceptez la critique constructive de votre entourage au lieu de vous defendre'}
  },
  {
    id:14, emoji:'📚',
    ar:{title:'العلم بلا إيمان خطر',desc:'الغرور العلمي أخطر من الغرور العسكري. الأمم التي تعتمد على العلم وحده بدون إيمان تنتج تكنولوجيا بلا أخلاق — وهذا يقود إلى الدمار.',verse:'',verseRef:'',action:'اربط كل علم تتعلمه بنية نافعة للمجتمع'},
    en:{title:'Knowledge Without Faith Is Dangerous',desc:'Scientific arrogance is more dangerous than military arrogance. Nations that rely on science alone without faith produce technology without ethics — and this leads to destruction.',verse:'',verseRef:'',action:'Connect every knowledge you gain to a beneficial intention for society'},
    fr:{title:'Le Savoir Sans Foi Est Dangereux',desc:'L\'arrogance scientifique est plus dangereuse que l\'arrogance militaire. Les nations qui ne comptent que sur la science sans foi produisent une technologie sans ethique.',verse:'',verseRef:'',action:'Reliez chaque savoir acquis a une intention benefique pour la societe'}
  },
  {
    id:15, emoji:'🕌',
    ar:{title:'العودة إلى الإسلام الأصيل',desc:'الحل عند الغزالي ليس في التشدد ولا في التساهل بل في الإسلام الأصيل المتوازن. إسلام يجمع بين العبادة والعمل، بين الإيمان والعقل، بين القوة والرحمة.',verse:'وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا',verseRef:'البقرة: ١٤٣',action:'تعلّم شيئاً جديداً عن الإسلام اليوم — من مصدر موثوق'},
    en:{title:'Return to Authentic Islam',desc:'Al-Ghazali\'s solution is neither extremism nor laxity but balanced, authentic Islam. An Islam that combines worship and work, faith and reason, strength and mercy.',verse:'And thus We made you a moderate nation',verseRef:'Al-Baqarah: 143',action:'Learn something new about Islam today — from a trusted source'},
    fr:{title:'Le Retour a l\'Islam Authentique',desc:'La solution selon al-Ghazali n\'est ni l\'extremisme ni le laxisme mais l\'Islam authentique et equilibre. Un Islam combinant adoration et travail, foi et raison.',verse:'Et ainsi Nous avons fait de vous une communaute du juste milieu',verseRef:'Al-Baqarah: 143',action:'Apprenez quelque chose de nouveau sur l\'Islam aujourd\'hui — d\'une source fiable'}
  },
  {
    id:16, emoji:'🗺️',
    ar:{title:'فلسطين — الجرح والأمل',desc:'احتلال فلسطين هو نتيجة مباشرة لضعف الأمة وغرورها. لكن الأمل موجود — فكل احتلال في التاريخ انتهى. المطلوب هو جيل يحمل القضية بإيمان وتواضع.',verse:'',verseRef:'',action:'ادعُ لفلسطين وتعلم عن تاريخها — المعرفة قوة'},
    en:{title:'Palestine — The Wound and the Hope',desc:'The occupation of Palestine is a direct result of the nation\'s weakness and arrogance. But hope exists — every occupation in history has ended. What is needed is a generation that carries the cause with faith and humility.',verse:'',verseRef:'',action:'Pray for Palestine and learn about its history — knowledge is power'},
    fr:{title:'La Palestine — La Blessure et l\'Espoir',desc:'L\'occupation de la Palestine est un resultat direct de la faiblesse et de l\'orgueil de la nation. Mais l\'espoir existe — toute occupation dans l\'histoire a pris fin.',verse:'',verseRef:'',action:'Priez pour la Palestine et apprenez son histoire — le savoir est une force'}
  },
  {
    id:17, emoji:'💎',
    ar:{title:'الصبر مفتاح النصر',desc:'كل نصر في التاريخ الإسلامي جاء بعد صبر طويل. المسلمون الأوائل صبروا ١٣ سنة في مكة قبل أن ينتصروا. الصبر تواضع أمام إرادة الله.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَابِطُوا',verseRef:'آل عمران: ٢٠٠',action:'مارس الصبر في موقف صعب هذا الأسبوع'},
    en:{title:'Patience Is the Key to Victory',desc:'Every victory in Islamic history came after long patience. The early Muslims endured 13 years in Mecca before they prevailed. Patience is humility before God\'s will.',verse:'O you who believe, be patient and endure and remain stationed',verseRef:'Aal-Imran: 200',action:'Practice patience in a difficult situation this week'},
    fr:{title:'La Patience Est la Cle de la Victoire',desc:'Chaque victoire dans l\'histoire islamique est venue apres une longue patience. Les premiers musulmans ont endure 13 ans a La Mecque avant de prevaloir.',verse:'O vous qui croyez, soyez patients, endurants et tenez ferme',verseRef:'Aal-Imran: 200',action:'Pratiquez la patience dans une situation difficile cette semaine'}
  },
  {
    id:18, emoji:'🔥',
    ar:{title:'الغرور يحرق صاحبه',desc:'إبليس هو أول من رفض التواضع — قال "أنا خير منه" فطُرد من رحمة الله. كل غرور هو تكرار لخطيئة إبليس الأولى.',verse:'قَالَ أَنَا خَيْرٌ مِّنْهُ خَلَقْتَنِي مِن نَّارٍ وَخَلَقْتَهُ مِن طِينٍ',verseRef:'الأعراف: ١٢',action:'عندما تشعر بالتفوق على غيرك — تذكر أن هذا هو أصل خطيئة إبليس'},
    en:{title:'Arrogance Burns Its Owner',desc:'Iblis (Satan) was the first to refuse humility — he said "I am better than him" and was expelled from God\'s mercy. Every act of arrogance repeats the original sin of Iblis.',verse:'He said: I am better than him. You created me from fire and him from clay',verseRef:'Al-A\'raf: 12',action:'When you feel superior to others — remember this is the origin of Iblis\'s sin'},
    fr:{title:'L\'Orgueil Brule Son Porteur',desc:'Iblis fut le premier a refuser l\'humilite — il dit « je suis meilleur que lui » et fut expulse de la misericorde de Dieu. Chaque orgueil repete le peche originel d\'Iblis.',verse:'Il dit : je suis meilleur que lui. Tu m\'as cree de feu et lui d\'argile',verseRef:'Al-A\'raf: 12',action:'Quand vous vous sentez superieur — rappelez-vous que c\'est l\'origine du peche d\'Iblis'}
  },
  {
    id:19, emoji:'🌊',
    ar:{title:'قوم نوح — الغرق في الغرور',desc:'قوم نوح اغتروا بقوتهم ورفضوا دعوة نبيهم لمئات السنين. فكان عقابهم الطوفان الذي أغرق كل شيء. الغرور يغرق صاحبه حرفياً ومجازياً.',verse:'',verseRef:'',action:'استمع لنصيحة صادقة من شخص تثق به — بدلاً من تجاهلها'},
    en:{title:'The People of Noah — Drowning in Arrogance',desc:'Noah\'s people were arrogant in their strength and rejected their prophet\'s call for hundreds of years. Their punishment was the flood that drowned everything. Arrogance drowns its owner literally and figuratively.',verse:'',verseRef:'',action:'Listen to honest advice from someone you trust — instead of ignoring it'},
    fr:{title:'Le Peuple de Noe — Noye dans l\'Orgueil',desc:'Le peuple de Noe etait arrogant dans sa force et a rejete l\'appel de son prophete pendant des siecles. Leur punition fut le deluge. L\'orgueil noie son porteur litteralement et figurativement.',verse:'',verseRef:'',action:'Ecoutez un conseil honnete de quelqu\'un en qui vous avez confiance'}
  },
  {
    id:20, emoji:'🌟',
    ar:{title:'التواضع طريق العظمة',desc:'خلاصة الكتاب: العظمة الحقيقية في التواضع. الأمم العظيمة تُبنى بالتواضع وتسقط بالغرور. كل فرد يبدأ بنفسه — التغيير يبدأ من الداخل.',verse:'وَاخْفِضْ جَنَاحَكَ لِمَنِ اتَّبَعَكَ مِنَ الْمُؤْمِنِينَ',verseRef:'الشعراء: ٢١٥',action:'ابدأ رحلة التواضع اليوم — كن أول من يسلّم، وأول من يعتذر'},
    en:{title:'Humility Is the Path to Greatness',desc:'The book\'s conclusion: true greatness lies in humility. Great nations are built through humility and fall through arrogance. Every individual starts with themselves — change begins from within.',verse:'And lower your wing to those who follow you of the believers',verseRef:'Ash-Shu\'ara: 215',action:'Start your humility journey today — be the first to greet and the first to apologize'},
    fr:{title:'L\'Humilite Est le Chemin de la Grandeur',desc:'La conclusion du livre : la vraie grandeur reside dans l\'humilite. Les grandes nations se construisent par l\'humilite et tombent par l\'orgueil. Chaque individu commence par lui-meme.',verse:'Et abaisse ton aile pour ceux des croyants qui te suivent',verseRef:'Ash-Shu\'ara: 215',action:'Commencez votre parcours d\'humilite aujourd\'hui — soyez le premier a saluer et a vous excuser'}
  }
];

// ═══════════════ HISTORY SCENES DATA ═══════════════
const HISTORY_DATA = [
  {
    emoji:'🏛️', period:'632-661',
    ar:{title:'الخلفاء الراشدون — قمة التواضع',story:'أبو بكر يقول "وُلّيت عليكم ولست بخيركم". عمر يمشي في الأسواق ويحمل الطعام للفقراء بنفسه. أعظم حكام الأرض كانوا أشدهم تواضعاً.'},
    en:{title:'The Rightly Guided Caliphs — Peak of Humility',story:'Abu Bakr says "I have been appointed over you though I am not the best among you." Umar walks the markets carrying food to the poor himself. The greatest rulers on earth were the most humble.'},
    fr:{title:'Les Califes Bien-Guides — Sommet de l\'Humilite',story:'Abu Bakr dit « J\'ai ete designe sur vous bien que je ne sois pas le meilleur d\'entre vous ». Omar marchait dans les marches portant de la nourriture aux pauvres.'}
  },
  {
    emoji:'⭐', period:'661-750',
    ar:{title:'الأمويون — من الفتوحات إلى الترف',story:'الدولة الأموية فتحت أراضي واسعة لكن بعض حكامها اغتروا بالسلطة والترف. عمر بن عبد العزيز كان الاستثناء — أعاد التواضع فأصلح الدولة في سنتين فقط.'},
    en:{title:'The Umayyads — From Conquests to Luxury',story:'The Umayyad state conquered vast lands but some rulers became arrogant with power and luxury. Umar ibn Abd al-Aziz was the exception — he restored humility and reformed the state in just two years.'},
    fr:{title:'Les Omeyyades — Des Conquetes au Luxe',story:'L\'Etat omeyyade a conquis de vastes territoires mais certains dirigeants sont devenus arrogants. Omar ibn Abd al-Aziz fut l\'exception — il restaura l\'humilite et reforma l\'Etat en deux ans.'}
  },
  {
    emoji:'📖', period:'750-1258',
    ar:{title:'العباسيون — العلم والسقوط',story:'الدولة العباسية بنت بيت الحكمة وأعظم حضارة علمية. لكن الترف والصراعات الداخلية أضعفتها حتى سقطت بغداد على يد المغول عام ١٢٥٨.'},
    en:{title:'The Abbasids — Knowledge and Fall',story:'The Abbasid state built the House of Wisdom and the greatest scientific civilization. But luxury and internal conflicts weakened it until Baghdad fell to the Mongols in 1258.'},
    fr:{title:'Les Abbassides — Le Savoir et la Chute',story:'L\'Etat abbasside a bati la Maison de la Sagesse et la plus grande civilisation scientifique. Mais le luxe et les conflits l\'ont affaibli jusqu\'a la chute de Bagdad en 1258.'}
  },
  {
    emoji:'🌙', period:'1299-1922',
    ar:{title:'العثمانيون — ٦٠٠ سنة من الصعود والهبوط',story:'بدأت الدولة العثمانية بقادة متواضعين ففتحوا القسطنطينية. لكن الغرور تسلل إلى الحكام اللاحقين فضعفت الدولة وسقطت بعد الحرب العالمية الأولى.'},
    en:{title:'The Ottomans — 600 Years of Rise and Fall',story:'The Ottoman state began with humble leaders who conquered Constantinople. But arrogance crept into later rulers, weakening the state until it fell after World War I.'},
    fr:{title:'Les Ottomans — 600 Ans de Montee et de Chute',story:'L\'Etat ottoman a commence avec des dirigeants humbles qui ont conquis Constantinople. Mais l\'orgueil s\'est infiltre chez les dirigeants suivants, affaiblissant l\'Etat.'}
  },
  {
    emoji:'🌍', period:'711-1492',
    ar:{title:'الأندلس — ٨٠٠ سنة من المجد والسقوط',story:'حضارة الأندلس أنارت العالم بالعلم والفن. لكن ملوك الطوائف اغتروا وتفرقوا. سقطت غرناطة عام ١٤٩٢ وطُرد المسلمون. درس لا يُنسى في الغرور.'},
    en:{title:'Al-Andalus — 800 Years of Glory and Fall',story:'The civilization of Al-Andalus illuminated the world with knowledge and art. But the Taifa kings became arrogant and divided. Granada fell in 1492 and Muslims were expelled. An unforgettable lesson in arrogance.'},
    fr:{title:'Al-Andalus — 800 Ans de Gloire et de Chute',story:'La civilisation d\'Al-Andalus a illumine le monde par le savoir et l\'art. Mais les rois de Taifa sont devenus arrogants et divises. Grenade est tombee en 1492.'}
  },
  {
    emoji:'⚔️', period:'1187',
    ar:{title:'صلاح الدين — التواضع يحرر القدس',story:'صلاح الدين الأيوبي حرر القدس من الصليبيين عام ١١٨٧. كان متواضعاً شديد التقوى. عندما دخل القدس لم يقتل أسيراً واحداً — التواضع أقوى من الانتقام.'},
    en:{title:'Saladin — Humility Liberates Jerusalem',story:'Saladin liberated Jerusalem from the Crusaders in 1187. He was humble and deeply devout. When he entered Jerusalem, he did not kill a single captive — humility is stronger than revenge.'},
    fr:{title:'Saladin — L\'Humilite Libere Jerusalem',story:'Saladin a libere Jerusalem des Croises en 1187. Il etait humble et profondement pieux. A son entree a Jerusalem, il n\'a tue aucun captif — l\'humilite est plus forte que la vengeance.'}
  }
];

// ═══════════════ QUIZ DATA (15 questions — "Who Wants to Be a Scholar?" format) ═══════════════
const QUIZ_DATA = [
  {
    ar:{q:'ما السبب الرئيسي لهزيمة ١٩٦٧ حسب الشيخ الغزالي؟',opts:['ضعف الأسلحة','الغرور والبعد عن الله','قوة العدو','سوء الحظ'],correct:1,hint:'الغزالي ربط الهزيمة بأسباب روحية وأخلاقية'},
    en:{q:'What is the main reason for the 1967 defeat according to Sheikh al-Ghazali?',opts:['Weak weapons','Arrogance and distance from God','Enemy strength','Bad luck'],correct:1,hint:'Al-Ghazali linked the defeat to spiritual and moral causes'},
    fr:{q:'Quelle est la cause principale de la defaite de 1967 selon le Sheikh al-Ghazali ?',opts:['Armes faibles','Orgueil et eloignement de Dieu','Force ennemie','Malchance'],correct:1,hint:'Al-Ghazali a lie la defaite a des causes spirituelles et morales'}
  },
  {
    ar:{q:'من هو النموذج القرآني الأول للغرور؟',opts:['قارون','فرعون','هامان','أبو لهب'],correct:1,hint:'قال "أنا ربكم الأعلى"'},
    en:{q:'Who is the Quran\'s prime example of arrogance?',opts:['Qarun','Pharaoh','Haman','Abu Lahab'],correct:1,hint:'He said "I am your supreme lord"'},
    fr:{q:'Qui est le premier exemple coranique d\'orgueil ?',opts:['Qarun','Pharaon','Haman','Abu Lahab'],correct:1,hint:'Il a dit « Je suis votre seigneur supreme »'}
  },
  {
    ar:{q:'كم سنة حكم المسلمون الأندلس؟',opts:['٤٠٠ سنة','٦٠٠ سنة','٨٠٠ سنة','١٠٠٠ سنة'],correct:2,hint:'من ٧١١ إلى ١٤٩٢'},
    en:{q:'How many years did Muslims rule Al-Andalus?',opts:['400 years','600 years','800 years','1000 years'],correct:2,hint:'From 711 to 1492'},
    fr:{q:'Combien d\'annees les musulmans ont-ils gouverne Al-Andalus ?',opts:['400 ans','600 ans','800 ans','1000 ans'],correct:2,hint:'De 711 a 1492'}
  },
  {
    ar:{q:'من حرر القدس من الصليبيين عام ١١٨٧؟',opts:['عمر بن الخطاب','صلاح الدين الأيوبي','محمد الفاتح','خالد بن الوليد'],correct:1,hint:'قائد متواضع وشديد التقوى'},
    en:{q:'Who liberated Jerusalem from the Crusaders in 1187?',opts:['Umar ibn al-Khattab','Saladin','Mehmed the Conqueror','Khalid ibn al-Walid'],correct:1,hint:'A humble and deeply devout leader'},
    fr:{q:'Qui a libere Jerusalem des Croises en 1187 ?',opts:['Omar ibn al-Khattab','Saladin','Mehmed le Conquerant','Khalid ibn al-Walid'],correct:1,hint:'Un dirigeant humble et pieux'}
  },
  {
    ar:{q:'ما أول خطيئة في التاريخ حسب القرآن؟',opts:['الكذب','السرقة','الغرور والكبر','الحسد'],correct:2,hint:'إبليس رفض السجود لآدم'},
    en:{q:'What was the first sin in history according to the Quran?',opts:['Lying','Stealing','Arrogance and pride','Envy'],correct:2,hint:'Iblis refused to prostrate to Adam'},
    fr:{q:'Quel fut le premier peche dans l\'histoire selon le Coran ?',opts:['Le mensonge','Le vol','L\'orgueil et la fierte','L\'envie'],correct:2,hint:'Iblis a refuse de se prosterner devant Adam'}
  },
  {
    ar:{q:'كيف وصل الإسلام إلى إندونيسيا؟',opts:['بالجيوش','بالتجار والدعاة','بالفتوحات البحرية','بالاستعمار'],correct:1,hint:'بالتواضع والأخلاق لا بالسيف'},
    en:{q:'How did Islam reach Indonesia?',opts:['By armies','By merchants and preachers','By naval conquests','By colonization'],correct:1,hint:'Through humility and character, not the sword'},
    fr:{q:'Comment l\'Islam est-il arrive en Indonesie ?',opts:['Par les armees','Par les marchands et predicateurs','Par les conquetes navales','Par la colonisation'],correct:1,hint:'Par l\'humilite et le caractere, pas par l\'epee'}
  },
  {
    ar:{q:'ما الآية التي تصف عباد الرحمن؟',opts:['"يمشون على الأرض هوناً"','"خير أمة أخرجت للناس"','"ولا تهنوا ولا تحزنوا"','"اصبروا وصابروا"'],correct:0,hint:'سورة الفرقان الآية ٦٣'},
    en:{q:'Which verse describes the servants of the Most Merciful?',opts:['"Walk upon the earth in humility"','"Best nation for mankind"','"Do not weaken or grieve"','"Be patient and endure"'],correct:0,hint:'Surah Al-Furqan verse 63'},
    fr:{q:'Quel verset decrit les serviteurs du Tout-Misericordieux ?',opts:['"Marchent humblement sur terre"','"Meilleure communaute"','"Ne faiblissez pas"','"Soyez patients"'],correct:0,hint:'Sourate Al-Furqan verset 63'}
  },
  {
    ar:{q:'أين درّس الشيخ محمد الغزالي في الجزائر؟',opts:['جامعة الجزائر','جامعة وهران','جامعة الأمير عبد القادر بقسنطينة','جامعة تلمسان'],correct:2,hint:'في مدينة قسنطينة'},
    en:{q:'Where did Sheikh al-Ghazali teach in Algeria?',opts:['University of Algiers','University of Oran','University of Emir Abdelkader, Constantine','University of Tlemcen'],correct:2,hint:'In the city of Constantine'},
    fr:{q:'Ou le Sheikh al-Ghazali a-t-il enseigne en Algerie ?',opts:['Universite d\'Alger','Universite d\'Oran','Universite Emir Abdelkader, Constantine','Universite de Tlemcen'],correct:2,hint:'Dans la ville de Constantine'}
  },
  {
    ar:{q:'من هو الخليفة الذي أصلح الدولة الأموية بالتواضع؟',opts:['معاوية بن أبي سفيان','عمر بن عبد العزيز','الوليد بن عبد الملك','هشام بن عبد الملك'],correct:1,hint:'لُقّب بخامس الخلفاء الراشدين'},
    en:{q:'Which caliph reformed the Umayyad state through humility?',opts:['Muawiyah','Umar ibn Abd al-Aziz','Al-Walid','Hisham'],correct:1,hint:'Known as the fifth Rightly Guided Caliph'},
    fr:{q:'Quel calife a reforme l\'Etat omeyyade par l\'humilite ?',opts:['Muawiya','Omar ibn Abd al-Aziz','Al-Walid','Hicham'],correct:1,hint:'Connu comme le cinquieme Calife Bien-Guide'}
  },
  {
    ar:{q:'متى سقطت بغداد على يد المغول؟',opts:['١٠٩٩','١١٨٧','١٢٥٨','١٤٩٢'],correct:2,hint:'منتصف القرن الثالث عشر'},
    en:{q:'When did Baghdad fall to the Mongols?',opts:['1099','1187','1258','1492'],correct:2,hint:'Mid-13th century'},
    fr:{q:'Quand Bagdad est-elle tombee aux mains des Mongols ?',opts:['1099','1187','1258','1492'],correct:2,hint:'Milieu du 13e siecle'}
  },
  {
    ar:{q:'ما الفرق بين معركتي بدر وأحد حسب الكتاب؟',opts:['التسليح','التواضع مقابل الغرور','العدد','الموقع الجغرافي'],correct:1,hint:'في بدر كانوا متواضعين وفي أحد اغتر بعضهم'},
    en:{q:'What was the difference between Badr and Uhud according to the book?',opts:['Weaponry','Humility vs arrogance','Numbers','Geography'],correct:1,hint:'At Badr they were humble; at Uhud some became arrogant'},
    fr:{q:'Quelle etait la difference entre Badr et Ouhoud selon le livre ?',opts:['L\'armement','Humilite vs orgueil','Les nombres','La geographie'],correct:1,hint:'A Badr ils etaient humbles; a Ouhoud certains sont devenus arrogants'}
  },
  {
    ar:{q:'ما اسم ناشر كتاب "حصاد الغرور"؟',opts:['دار نهضة مصر','دار الشروق','دار القلم دمشق','دار المعارف'],correct:2,hint:'دار نشر سورية'},
    en:{q:'Who is the publisher of "The Harvest of Arrogance"?',opts:['Dar Nahdet Misr','Dar Al-Shorouk','Dar Al-Qalam Damascus','Dar Al-Maarif'],correct:2,hint:'A Syrian publishing house'},
    fr:{q:'Quel est l\'editeur de « La Moisson de l\'Orgueil » ?',opts:['Dar Nahdet Misr','Dar Al-Shorouk','Dar Al-Qalam Damas','Dar Al-Maarif'],correct:2,hint:'Une maison d\'edition syrienne'}
  },
  {
    ar:{q:'ماذا قال أبو بكر الصديق عندما تولى الخلافة؟',opts:['"أنا أفضلكم"','"وُلّيت عليكم ولست بخيركم"','"أطيعوني بلا سؤال"','"أنا خليفة الله"'],correct:1,hint:'قمة التواضع في القيادة'},
    en:{q:'What did Abu Bakr say when he became Caliph?',opts:['"I am the best among you"','"I have been appointed over you though I am not the best"','"Obey me without question"','"I am God\'s Caliph"'],correct:1,hint:'The peak of humility in leadership'},
    fr:{q:'Qu\'a dit Abu Bakr quand il est devenu Calife ?',opts:['"Je suis le meilleur"','"J\'ai ete designe sur vous bien que je ne sois pas le meilleur"','"Obeissez-moi sans question"','"Je suis le Calife de Dieu"'],correct:1,hint:'Le sommet de l\'humilite dans le leadership'}
  },
  {
    ar:{q:'ما هي الأمة الوسط التي يدعو إليها القرآن؟',opts:['أمة بلا دين','أمة تجمع القوة والرحمة','أمة عسكرية فقط','أمة منعزلة'],correct:1,hint:'سورة البقرة — الوسطية والتوازن'},
    en:{q:'What is the "moderate nation" the Quran calls for?',opts:['A nation without religion','A nation combining strength and mercy','A purely military nation','An isolated nation'],correct:1,hint:'Surah Al-Baqarah — moderation and balance'},
    fr:{q:'Qu\'est-ce que la « communaute du juste milieu » selon le Coran ?',opts:['Une nation sans religion','Une nation combinant force et misericorde','Une nation purement militaire','Une nation isolee'],correct:1,hint:'Sourate Al-Baqarah — moderation et equilibre'}
  },
  {
    ar:{q:'كم كتاباً ألّف الشيخ محمد الغزالي تقريباً؟',opts:['أكثر من ٣٠','أكثر من ٥٠','أكثر من ٩٤','أكثر من ١٥٠'],correct:2,hint:'عالم غزير الإنتاج'},
    en:{q:'Approximately how many books did Sheikh al-Ghazali author?',opts:['More than 30','More than 50','More than 94','More than 150'],correct:2,hint:'A prolific scholar'},
    fr:{q:'Combien de livres le Sheikh al-Ghazali a-t-il ecrits environ ?',opts:['Plus de 30','Plus de 50','Plus de 94','Plus de 150'],correct:2,hint:'Un savant prolifique'}
  }
];

// ═══════════════ HUMILITY METER DATA ═══════════════
const METER_QUESTIONS = [
  {ar:'هل تعتذر عندما تخطئ — حتى لمن هو أصغر منك؟',en:'Do you apologize when you are wrong — even to someone younger?',fr:'Vous excusez-vous quand vous avez tort — meme envers plus jeune ?'},
  {ar:'هل تستمع لنصائح الآخرين بصدر مفتوح؟',en:'Do you listen to others\' advice with an open heart?',fr:'Ecoutez-vous les conseils des autres avec un coeur ouvert ?'},
  {ar:'هل تشكر الله على نجاحاتك بدلاً من نسبها لنفسك فقط؟',en:'Do you thank God for your successes instead of just crediting yourself?',fr:'Remerciez-vous Dieu pour vos succes au lieu de vous en attribuer le merite ?'},
  {ar:'هل تقبل النقد البنّاء دون غضب؟',en:'Do you accept constructive criticism without anger?',fr:'Acceptez-vous la critique constructive sans colere ?'},
  {ar:'هل تعامل كل الناس باحترام بغض النظر عن مكانتهم؟',en:'Do you treat all people with respect regardless of their status?',fr:'Traitez-vous tout le monde avec respect quel que soit son statut ?'},
  {ar:'هل تطلب المساعدة عندما تحتاجها — أم تعتبرها ضعفاً؟',en:'Do you ask for help when needed — or do you see it as weakness?',fr:'Demandez-vous de l\'aide quand necessaire — ou le voyez-vous comme une faiblesse ?'},
  {ar:'هل تفرح لنجاح غيرك بصدق؟',en:'Do you genuinely rejoice at others\' success?',fr:'Vous rejouissez-vous sincerement du succes des autres ?'},
  {ar:'هل تعترف بجهل عندما لا تعرف شيئاً؟',en:'Do you admit ignorance when you don\'t know something?',fr:'Admettez-vous votre ignorance quand vous ne savez pas ?'},
  {ar:'هل تسلّم أولاً وتبتسم في وجه من تلقاه؟',en:'Do you greet first and smile at those you meet?',fr:'Saluez-vous en premier et souriez-vous a ceux que vous rencontrez ?'},
  {ar:'هل تراجع نفسك يومياً وتسأل: أين أخطأت اليوم؟',en:'Do you review yourself daily asking: where did I err today?',fr:'Vous examinez-vous quotidiennement en demandant : ou ai-je erre aujourd\'hui ?'}
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {
    ar:{label:'دعاء التواضع',text:'اللَّهُمَّ اجْعَلْنِي صَغِيرًا فِي نَفْسِي عَظِيمًا عِنْدَكَ',tr:'Make me small in my own eyes and great in Your sight'},
    en:{label:'Dua for Humility',text:'اللَّهُمَّ اجْعَلْنِي صَغِيرًا فِي نَفْسِي عَظِيمًا عِنْدَكَ',tr:'O God, make me small in my own eyes and great in Your sight'},
    fr:{label:'Dua pour l\'Humilite',text:'اللَّهُمَّ اجْعَلْنِي صَغِيرًا فِي نَفْسِي عَظِيمًا عِنْدَكَ',tr:'O Dieu, fais-moi petit a mes propres yeux et grand aupres de Toi'}
  },
  {
    ar:{label:'دعاء الحفظ من الكبر',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكِبْرِ',tr:'O God I seek refuge in You from arrogance'},
    en:{label:'Dua Against Arrogance',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكِبْرِ',tr:'O God, I seek refuge in You from arrogance'},
    fr:{label:'Dua Contre l\'Orgueil',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكِبْرِ',tr:'O Dieu, je cherche refuge aupres de Toi contre l\'orgueil'}
  },
  {
    ar:{label:'دعاء الشكر',text:'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',tr:'Help me remember, thank, and worship You well'},
    en:{label:'Dua for Gratitude',text:'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',tr:'O God, help me remember You, thank You, and worship You well'},
    fr:{label:'Dua pour la Gratitude',text:'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',tr:'O Dieu, aide-moi a Te rappeler, Te remercier et bien T\'adorer'}
  },
  {
    ar:{label:'دعاء طلب العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir'}
  },
  {
    ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Pour upon us patience, make our feet firm, and support us'},
    en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, pour upon us patience, make our feet firm, and help us'},
    fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, donne-nous patience, affermis nos pas et aide-nous'}
  },
  {
    ar:{label:'دعاء الاستغفار',text:'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ',tr:'My Lord forgive me and accept my repentance'},
    en:{label:'Dua for Forgiveness',text:'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ',tr:'My Lord, forgive me and accept my repentance, You are the Accepting of Repentance'},
    fr:{label:'Dua pour le Pardon',text:'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ',tr:'Seigneur, pardonne-moi et accepte mon repentir'}
  }
];

// ═══════════════ XP & BADGES SYSTEM ═══════════════
const BADGES = [
  {id:'beginner',emoji:'🌟',ar:'مبتدئ',en:'Beginner',fr:'Debutant',condition:'Open the app'},
  {id:'reader',emoji:'📖',ar:'قارئ',en:'Reader',fr:'Lecteur',condition:'Read 10 cards'},
  {id:'scholar',emoji:'🧠',ar:'عالم',en:'Scholar',fr:'Savant',condition:'Complete all quizzes'},
  {id:'persistent',emoji:'🔥',ar:'مثابر',en:'Persistent',fr:'Perseverant',condition:'7-day streak'},
  {id:'expert',emoji:'🏆',ar:'خبير',en:'Expert',fr:'Expert',condition:'100% on any quiz'},
  {id:'humble',emoji:'🕊️',ar:'متواضع',en:'Humble',fr:'Humble',condition:'Score 90%+ on Humility Meter'}
];

function getXP() { return parseInt(localStorage.getItem('hg-xp') || '0'); }
function addXP(n) {
  const xp = getXP() + n;
  localStorage.setItem('hg-xp', xp);
  updateXPDisplay();
  return xp;
}
function getLevel() { return Math.floor(getXP() / 100) + 1; }
function getEarnedBadges() { return JSON.parse(localStorage.getItem('hg-badges') || '[]'); }
function earnBadge(id) {
  const badges = getEarnedBadges();
  if (!badges.includes(id)) {
    badges.push(id);
    localStorage.setItem('hg-badges', JSON.stringify(badges));
    const badge = BADGES.find(b => b.id === id);
    if (badge) {
      showToast(`${badge.emoji} ${badge[lang]}!`);
      playSound('badge');
    }
  }
}
function updateXPDisplay() {
  const el = document.getElementById('xpDisplay');
  if (el) {
    const xp = getXP();
    const level = getLevel();
    const pct = (xp % 100);
    el.innerHTML = `<div class="xp-bar-wrap"><div class="xp-bar-fill" style="width:${pct}%"></div></div><span class="xp-text">${T[lang].xpLabel}: ${xp} | ${T[lang].levelLabel} ${level}</span>`;
  }
}
function getStreak() {
  const d = JSON.parse(localStorage.getItem('hg-streak') || '{"count":0,"lastDate":""}');
  return d.count;
}
function updateStreak() {
  const today = new Date().toDateString();
  let d = JSON.parse(localStorage.getItem('hg-streak') || '{"count":0,"lastDate":""}');
  if (d.lastDate === today) return;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (d.lastDate === yesterday.toDateString()) { d.count++; }
  else if (d.lastDate !== today) { d.count = 1; }
  d.lastDate = today;
  localStorage.setItem('hg-streak', JSON.stringify(d));
  if (d.count >= 7) earnBadge('persistent');
}

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('hg-lang') || 'ar';
let theme = localStorage.getItem('hg-theme') || 'ember';
const themes = ['ember','night','desert'];
const themeIcons = ['🌾','🌙','🏜️'];
const themeNames = { ember:'🌾 Ember', night:'🌙 Night', desert:'🏜️ Desert' };
let currentLessonIdx = -1;
let quizState = { current:0, score:0, answered:false, lifelines:{fifty:true,hint:true,sheikh:true} };
let cardsRead = JSON.parse(localStorage.getItem('hg-cardsRead') || '[]');

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initSplash();
  initTabs();
  initScrollTop();
  renderHome();
  renderLessons();
  renderHistory();
  renderQuiz();
  renderMeter();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
  earnBadge('beginner');
  updateStreak();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    const features = T[lang].splashFeatures;
    featuresEl.innerHTML = features.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('hg-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabLessons', t.tabLessons); set('tabHistory', t.tabHistory);
  set('tabQuiz', t.tabQuiz); set('tabMeter', t.tabMeter); set('tabAbout', t.tabAbout);
  set('lessonsTitle', t.lessonsTitle); set('lessonsDesc', t.lessonsDesc);
  set('historyTitle', t.historyTitle); set('historyDesc', t.historyDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('meterTitle', t.meterTitle); set('meterDesc', t.meterDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  renderHome(); renderLessons(); renderHistory(); renderQuiz(); renderMeter(); renderAbout(); renderHelp(); renderDuas();
  updateXPDisplay();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('hg-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % LESSONS.length;
  const p = LESSONS[dayIdx];
  const pd = p[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${pd.title}</div>
    <div class="daily-body">${pd.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=lessons]').click()">${t.tabLessons} &#8594;</div>
  `;
  // XP display
  updateXPDisplay();
  // Badges display
  const earned = getEarnedBadges();
  const badgesHtml = BADGES.map(b => `<span class="badge-item ${earned.includes(b.id)?'earned':''}" title="${b[lang]}">${b.emoji}</span>`).join('');
  (document.getElementById('badgesDisplay')||{}).innerHTML= `<div class="badges-label">${t.badgesLabel}</div><div class="badges-row">${badgesHtml}</div>`;
  // Streak
  const streak = getStreak();
  const streakHtml = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : '';
  (document.getElementById('streakDisplay')||{}).innerHTML= streakHtml;
  // Home grid
  const sections = [
    {icon:'📜',tab:'lessons',title:t.tabLessons,desc:lang==='ar'?'٢٠ درساً تاريخياً':lang==='fr'?'20 lecons historiques':'20 historical lessons'},
    {icon:'🏛️',tab:'history',title:t.tabHistory,desc:lang==='ar'?'أمم سقطت ونهضت':lang==='fr'?'Nations tombees et relevees':'Nations fell and rose'},
    {icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'من يريد أن يكون عالماً؟':lang==='fr'?'Qui Veut Etre Savant ?':'Who Wants to Be a Scholar?'},
    {icon:'📊',tab:'meter',title:t.tabMeter,desc:lang==='ar'?'قيّم تواضعك':lang==='fr'?'Evaluez votre humilite':'Assess your humility'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  (document.getElementById('homeGrid')||{}).innerHTML= sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: LESSONS ═══════════════
function renderLessons() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="lessonsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterLessons(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = LESSONS.map((p, i) => {
    const d = p[lang];
    const isRead = cardsRead.includes(p.id);
    return `
    <div class="principle-card scroll-reveal ${isRead?'card-read':''}" id="lesson-${p.id}" data-search="${d.title.toLowerCase()}">
      <div class="principle-head" onclick="toggleLesson(${p.id})">
        <span class="principle-num">${p.id}</span>
        <span class="principle-emoji">${p.emoji}</span>
        <span class="principle-title">${d.title}</span>
        <span class="principle-chev">&#9660;</span>
      </div>
      <div class="principle-body">
        <div class="principle-inner">
          <p class="principle-desc">${d.desc}</p>
          ${d.verse ? `<div class="verse-box"><div class="verse-arabic">${d.verse}</div><div class="verse-ref">${d.verseRef}</div></div>` : ''}
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareLesson(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  (document.getElementById('lessonsContainer')||{}).innerHTML= searchBar + cards;
}

function toggleLesson(id) {
  const card = document.getElementById('lesson-' + id);
  if (card) {
    card.classList.toggle('open');
    playSound('click');
    // Mark as read + XP
    if (!cardsRead.includes(id)) {
      cardsRead.push(id);
      localStorage.setItem('hg-cardsRead', JSON.stringify(cardsRead));
      addXP(10);
      card.classList.add('card-read');
      if (cardsRead.length >= 10) earnBadge('reader');
    }
  }
}

function filterLessons(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.principle-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.principle-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

async function shareLesson(idx) {
  const p = LESSONS[idx];
  const d = p[lang];
  const text = `${p.emoji} ${d.title}\n\n${d.desc}\n\n💡 ${d.action}\n\n— حصاد الغرور | The Harvest of Arrogance`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try {
      await navigator.clipboard.writeText(text);
      showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copie !' : 'Copied!');
    } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: HISTORY ═══════════════
function renderHistory() {
  (document.getElementById('historyContainer')||{}).innerHTML= HISTORY_DATA.map(h => {
    const d = h[lang];
    return `
    <div class="history-card scroll-reveal">
      <div class="history-period">${h.period}</div>
      <div class="history-header">
        <span class="history-emoji">${h.emoji}</span>
        <span class="history-title">${d.title}</span>
      </div>
      <div class="history-story">${d.story}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: QUIZ ("Who Wants to Be a Scholar?") ═══════════════
function renderQuiz() {
  quizState = { current:0, score:0, answered:false, lifelines:{fifty:true,hint:true,sheikh:true} };
  const t = T[lang];
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  if (result) result.classList.add('hidden');

  if (quizState.current >= QUIZ_DATA.length) {
    const pct = Math.round(quizState.score / QUIZ_DATA.length * 100);
    let emoji, title;
    if (pct >= 80) { emoji='🏆'; title=lang==='ar'?'ممتاز!':lang==='fr'?'Excellent !':'Excellent!'; }
    else if (pct >= 50) { emoji='🌟'; title=lang==='ar'?'جيد':lang==='fr'?'Bien':'Good'; }
    else { emoji='📚'; title=lang==='ar'?'حاول مجدداً':lang==='fr'?'Reessayez':'Try again'; }
    if (pct === 100) earnBadge('expert');
    earnBadge('scholar');
    addXP(20);
    container.innerHTML = `
      <div class="quiz-result-final">
        <div class="qr-emoji">${emoji}</div>
        <div class="qr-score">${pct}%</div>
        <div class="qr-title">${title}</div>
        <div class="qr-desc">${t.scoreLabel}: ${quizState.score}/${QUIZ_DATA.length}</div>
        <button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${t.quizAgain}</button>
      </div>`;
    return;
  }

  const qData = QUIZ_DATA[quizState.current];
  const q = qData[lang];
  quizState.answered = false;

  container.innerHTML = `
    <div class="quiz-progress">${quizState.current + 1} / ${QUIZ_DATA.length}</div>
    <div class="quiz-lifelines">
      <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>📖 ${t.lifeline5050}</button>
      <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>🤲 ${t.lifelineHint}</button>
      <button class="lifeline-btn ${quizState.lifelines.sheikh?'':'used'}" onclick="useSheikh()" ${quizState.lifelines.sheikh?'':'disabled'}>📞 ${t.lifelineSheikh}</button>
    </div>
    <div class="quiz-question-card">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="selectQuizAnswer(${i})">${opt}</button>`).join('')}
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
      <div id="quizHint" class="quiz-hint hidden"></div>
    </div>`;
}

function selectQuizAnswer(idx) {
  if (quizState.answered) return;
  quizState.answered = true;
  const qData = QUIZ_DATA[quizState.current];
  const q = qData[lang];
  const correct = q.correct;
  const t = T[lang];
  addXP(5);

  document.querySelectorAll('.quiz-opt').forEach((btn, i) => {
    if (i === correct) btn.classList.add('correct');
    if (i === idx && i !== correct) btn.classList.add('wrong');
    btn.disabled = true;
  });

  const feedback = document.getElementById('quizFeedback');
  if (idx === correct) {
    quizState.score++;
    feedback.innerHTML = `<span class="feedback-correct">${t.correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="feedback-wrong">${t.wrong} ${q.opts[correct]}</span>`;
    playSound('click');
  }
  feedback.classList.remove('hidden');

  setTimeout(() => {
    quizState.current++;
    renderQuizQuestion();
  }, 2000);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty || quizState.answered) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ_DATA[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  // Remove 2 random wrong answers
  const toRemove = wrongIdxs.sort(() => Math.random()-0.5).slice(0, 2);
  toRemove.forEach(i => {
    const btn = document.getElementById('qopt-' + i);
    if (btn) { btn.style.opacity = '0.3'; btn.disabled = true; }
  });
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint || quizState.answered) return;
  quizState.lifelines.hint = false;
  const q = QUIZ_DATA[quizState.current][lang];
  // Highlight the correct answer subtly
  const btn = document.getElementById('qopt-' + q.correct);
  if (btn) btn.classList.add('hint-glow');
  document.querySelectorAll('.lifeline-btn')[1].classList.add('used');
  playSound('click');
}

function useSheikh() {
  if (!quizState.lifelines.sheikh || quizState.answered) return;
  quizState.lifelines.sheikh = false;
  const q = QUIZ_DATA[quizState.current][lang];
  const hintEl = document.getElementById('quizHint');
  if (hintEl) {
    hintEl.textContent = '📞 ' + q.hint;
    hintEl.classList.remove('hidden');
  }
  document.querySelectorAll('.lifeline-btn')[2].classList.add('used');
  playSound('click');
}

// ═══════════════ RENDER: HUMILITY METER ═══════════════
function renderMeter() {
  const t = T[lang];
  const container = document.getElementById('meterContainer');
  if (!container) return;
  container.innerHTML = METER_QUESTIONS.map((q, i) => `
    <div class="meter-question scroll-reveal" id="meter-q-${i}">
      <div class="meter-q-text">${i+1}. ${q[lang]}</div>
      <div class="meter-options">
        <button class="meter-opt" onclick="selectMeterOpt(${i},2)">${lang==='ar'?'دائماً':lang==='fr'?'Toujours':'Always'}</button>
        <button class="meter-opt" onclick="selectMeterOpt(${i},1)">${lang==='ar'?'أحياناً':lang==='fr'?'Parfois':'Sometimes'}</button>
        <button class="meter-opt" onclick="selectMeterOpt(${i},0)">${lang==='ar'?'نادراً':lang==='fr'?'Rarement':'Rarely'}</button>
      </div>
    </div>
  `).join('') + `<button class="quiz-submit" onclick="submitMeter()">${t.submitQuiz}</button>`;
  document.getElementById('meterResult').classList.add('hidden');
  window._meterAnswers = {};
}

function selectMeterOpt(qi, val) {
  window._meterAnswers[qi] = val;
  const opts = document.querySelectorAll(`#meter-q-${qi} .meter-opt`);
  opts.forEach((o, oi) => {
    const optVal = [2,1,0][oi];
    o.classList.toggle('selected', optVal === val);
  });
  playSound('click');
}

function submitMeter() {
  const answers = window._meterAnswers || {};
  if (Object.keys(answers).length < METER_QUESTIONS.length) {
    showToast(lang==='ar'?'أجب على جميع الأسئلة':lang==='fr'?'Repondez a toutes les questions':'Answer all questions');
    return;
  }
  let score = 0;
  Object.values(answers).forEach(v => score += v);
  const max = METER_QUESTIONS.length * 2;
  const pct = Math.round(score / max * 100);
  let emoji, title, desc, meterClass;
  if (pct >= 80) {
    emoji='🕊️'; meterClass='meter-high';
    title = lang==='ar'?'متواضع جداً!':lang==='fr'?'Tres humble !':'Very Humble!';
    desc = lang==='ar'?'أنت تمتلك قلباً متواضعاً. استمر وكن قدوة للآخرين.':lang==='fr'?'Vous avez un coeur humble. Continuez et soyez un exemple.':'You have a humble heart. Keep going and be an example to others.';
    if (pct >= 90) earnBadge('humble');
  } else if (pct >= 50) {
    emoji='🌱'; meterClass='meter-mid';
    title = lang==='ar'?'على الطريق':lang==='fr'?'En chemin':'On the Path';
    desc = lang==='ar'?'تحتاج لمزيد من العمل على التواضع. راجع الدروس وطبّقها.':lang==='fr'?'Vous avez besoin de plus de travail sur l\'humilite.':'You need more work on humility. Review the lessons and apply them.';
  } else {
    emoji='⚠️'; meterClass='meter-low';
    title = lang==='ar'?'تحذير!':lang==='fr'?'Attention !':'Warning!';
    desc = lang==='ar'?'الغرور يتسلل إليك! عد إلى الدروس وابدأ رحلة التواضع الآن.':lang==='fr'?'L\'orgueil s\'infiltre ! Revenez aux lecons et commencez votre parcours d\'humilite.':'Arrogance is creeping in! Return to the lessons and start your humility journey now.';
  }
  addXP(20);
  const result = document.getElementById('meterResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="meter-result-card ${meterClass}">
      <div class="qr-emoji">${emoji}</div>
      <div class="meter-gauge"><div class="meter-gauge-fill" style="width:${pct}%"></div></div>
      <div class="qr-score">${pct}%</div>
      <div class="qr-title">${title}</div>
      <div class="qr-desc">${desc}</div>
      <button class="quiz-submit" onclick="renderMeter()" style="margin-top:16px">${T[lang].resetBtn}</button>
    </div>
  `;
  result.scrollIntoView({ behavior: 'smooth' });
  playSound('success');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"حصاد الغرور" كتبه الشيخ الغزالي بعد هزيمة ١٩٦٧ (النكسة). يحلل أسباب الهزيمة الروحية والأخلاقية والسياسية. يستعرض كيف أن الغرور والبعد عن الله أدى إلى السقوط، ويدعو إلى جيل جديد يحمل أمانة الإسلام بتواضع وقوة. يتناول التاريخ الإسلامي والأندلس وإندونيسيا والغزو الثقافي وفلسطين. صدر عن دار القلم دمشق.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "حصاد الغرور" — الشيخ محمد الغزالي — دار القلم دمشق','القرآن الكريم','صحيح البخاري ومسلم','كتب التاريخ الإسلامي'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, and defending women\'s rights in Islam.',
      bookTitle: 'About the Book',
      bookDesc: '"The Harvest of Arrogance" was written by Sheikh al-Ghazali after the 1967 defeat (the Naksa). It analyzes the spiritual, moral, and political causes of the defeat. It explores how arrogance and distance from God led to the fall, and calls for a new generation to carry Islam\'s trust with humility and strength. It covers Islamic history, Al-Andalus, Indonesia, cultural invasion, and Palestine. Published by Dar Al-Qalam Damascus.',
      sourcesTitle: 'Sources',
      sources: ['"The Harvest of Arrogance" (Hasad Al-Ghurur) — Sheikh Mohammed al-Ghazali — Dar Al-Qalam Damascus','The Holy Quran','Sahih al-Bukhari and Muslim','Islamic history books'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme « Le Litteraire de la Predication ». Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '« La Moisson de l\'Orgueil » fut ecrit par le Sheikh al-Ghazali apres la defaite de 1967 (la Naksa). Il analyse les causes spirituelles, morales et politiques de la defaite. Il explore comment l\'orgueil et l\'eloignement de Dieu ont mene a la chute, et appelle une nouvelle generation. Publie par Dar Al-Qalam Damas.',
      sourcesTitle: 'Sources',
      sources: ['« La Moisson de l\'Orgueil » — Sheikh Mohammed al-Ghazali — Dar Al-Qalam Damas','Le Saint Coran','Sahih al-Bukhari et Muslim','Livres d\'histoire islamique'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "حصاد الغرور" للشيخ محمد الغزالي — دار القلم دمشق، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ درساً، ٦ مشاهد تاريخية، اختبار بصيغة المسابقات، مقياس التواضع، نظام نقاط وأوسمة.'},
      {title:'⌨️ اختصارات',body:'استخدم الأسهم (يمين/يسار) للتنقل بين الدروس. اضغط Escape لإغلاق اللوحات.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/hasad-al-ghurur'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"The Harvest of Arrogance" by Sheikh Mohammed al-Ghazali — Dar Al-Qalam Damascus, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 lessons, 6 historical scenes, "Who Wants to Be a Scholar?" quiz, Humility Meter, XP & badges system.'},
      {title:'⌨️ Shortcuts',body:'Use arrow keys (left/right) to navigate between lessons. Press Escape to close panels.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/hasad-al-ghurur'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'« La Moisson de l\'Orgueil » par Sheikh Mohammed al-Ghazali — Dar Al-Qalam Damas, le Saint Coran, la Sunnah Prophetique.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 20 lecons, 6 scenes historiques, quiz, metre d\'humilite, systeme de points et badges.'},
      {title:'⌨️ Raccourcis',body:'Utilisez les fleches (gauche/droite) pour naviguer. Echap pour fermer les panneaux.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/hasad-al-ghurur'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `
    <div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  window._scrollObserver = observer;
  function observeAll() {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el));
  }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => setTimeout(observeAll, 100));
  });
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const helpPanel = document.getElementById('helpPanel');
      if (!helpPanel.classList.contains('hidden')) { toggleHelp(); return; }
      const duaPanel = document.getElementById('duaPanel');
      if (!duaPanel.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.principle-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const lessonsPanel = document.getElementById('panel-lessons');
      if (!lessonsPanel || !lessonsPanel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'lessonsSearch') return;
      e.preventDefault();
      const cards = document.querySelectorAll('.principle-card');
      const visibleCards = Array.from(cards).filter(c => c.style.display !== 'none');
      if (visibleCards.length === 0) return;
      if (currentLessonIdx >= 0 && currentLessonIdx < visibleCards.length) {
        visibleCards[currentLessonIdx].classList.remove('open');
      }
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentLessonIdx = Math.max(0, Math.min(visibleCards.length - 1, currentLessonIdx + dir));
      visibleCards[currentLessonIdx].classList.add('open');
      visibleCards[currentLessonIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() {
  document.getElementById('helpPanel').classList.toggle('hidden');
  playSound('click');
}
function toggleDuaPanel() {
  document.getElementById('duaPanel').classList.toggle('hidden');
  playSound('click');
}
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if (btn) btn.classList.toggle('visible', window.scrollY > 300);
  });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    else if (type === 'badge') { osc.frequency.value = 660; osc.type = 'sine'; gain.gain.value = 0.07; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.12);
  } catch(e) {}
}


// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 حصاد الغرور — الشيخ محمد الغزالي','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء','⭐ اكتشف كنوز الكتاب'],
    en: ['📖 Harvest of Arrogance — Sheikh Mohammed Al-Ghazali','🏆 Earn points and badges','🌟 Try the Young Explorer mode','🤲 Remember to make dua','⭐ Discover the book\'s treasures'],
    fr: ['📖 Récolte de l\'Orgueil — Cheikh Mohammed Al-Ghazali','🏆 Gagnez des points et des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas le dua','⭐ Découvrez les trésors du livre']
  };
  const curLang = (typeof lang !== 'undefined' && lang) || document.documentElement.lang || 'ar';
  const items = tips[curLang] || tips.ar;
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  if (!ticker) return;
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// Auto-start ticker
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderTicker);
} else {
  renderTicker();
}

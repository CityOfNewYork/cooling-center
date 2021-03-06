import Translate from "nyc-lib/nyc/lang/Translate"

const ccLanguages = ['en', 'ar', 'bn', 'zh', 'fr', 'ht', 'ko', 'pl', 'ru', 'es', 'ur']
const languages = {}

ccLanguages.forEach(lang => {
	languages[lang] = Translate.DEFAULT_LANGUAGES[lang]
})

const messages = {}

messages.en = {
	cc_title: "Cooling Center Finder",
	btn_cooling_centers: "Cooling Centers",
	panel_note: '<p>New York City opens cooling centers in air-conditioned public facilities for those experiencing physical discomfort in a heat wave.</p><p>To find a cooling center, simply type your address or intersection into the search field on the upper-left corner of the map and then hit "Enter"; or zoom and pan the map to your neighborhood location.</p><p>To search or view only accessible centers, click the Accessible Only button below; click All Centers to switch back all centers search or view status.</p><p><b>NOTE:</b> Please check this site daily. Cooling centers may change hours of operation. </p><p><a href="http://www1.nyc.gov/site/em/ready/extreme-heat.page" target="_blank">Learn more about ways to stay cool</a>.</p>',
	acc_all: "All Centers",
	acc_only: "Accessible Only",
	btn_legend: "Legend",
	legend_comm: "Community Center",
	legend_senior: "Senior Center",
	legend_cornerstone: "Cornerstone Program",
	legend_library: "Library",
	legend_school: "School",
	legend_other: "Other",
	pop_name: "Name",
	pop_type: "Facility Type",
	pop_address: "Address",
	pop_phone: "Phone",
	pop_hours: "Hours",
	pop_extended: "Extended Hours",
	pop_access: "Wheelchair Accessible",
  day: "Day",
	opens: "Opens",
	closes: "Closes",
	closed: "Closed",
	sunday:	"Sunday",
	monday: "Monday",
	tuesday: "Tuesday",
	wednesday:"Wednesday",
	thursday: "Thursday",	
	friday: "Friday",
	saturday: "Saturday",
	msg_extended: 'Hours may be extended during a heat emergency',
	'msg-vw-list': 'View Cooling Center list'
}
messages.zh = {
	cc_title: "尋找紐約市避暑中心",
	btn_cooling_centers: '避暑中心',
	panel_note: '<p>紐約市在設有空調的公共設施中為那些在熱浪中感到不適的人們開設避暑中心。</p><p>若要尋找一個避暑中心，只需在地圖左上角的搜索框中輸入您的地址或街道交叉點，再按下"Enter"鍵，或放大和平移地圖到您的鄰里位置。</p><p>若要搜尋或查詢有輪椅通道的中心，請按下方的「僅限有輪椅通道」按鈕；點選「所有的中心」切換回所有中心的搜尋或查詢狀態。</p><p><b>注意：</b> 請每天查閲此網站。避暑中心開放時間可能會更改。</p><p><a href="http://www1.nyc.gov/site/em/ready/extreme-heat.page" target="_blank">詳細了解如何保持涼爽的各種方式</a>。</p>',
	acc_all: "所有中心",
	acc_only: "只顯示無障礙設施",
	btn_legend: '說明',
	legend_comm: "社區中心",
	legend_senior: "老年人中心",
	legend_cornerstone: "Cornerstone計畫 ",
	legend_library: "圖書館",
	legend_school: "學校",
	legend_other: "其他",
	pop_name: "設施名稱",
	pop_type: "設施種類",
	pop_address: "地址",
	pop_phone: "電話號碼",
	pop_hours: "開放時間",
	pop_extended: "加開時間",
	pop_access: "無障礙設施",
	day: "日期",
	opens: "開放時間",
	closes: "關門時間",
	closed: "沒有開放",
	sunday:    "星期天",
	monday: "星期一",
	tuesday: "星期二",
	wednesday:"星期三",
	thursday: "星期四",    
	friday: "星期五",
	saturday: "星期六",
	msg_extended: "高溫緊急情況下開放時間可能會延長",
	'msg-vw-list': '查看所有避暑中心'
}
messages.fr = {
	cc_title: "Centres de rafraîchissement",
	btn_cooling_centers: 'Centres de<br>rafraîchissement',
	panel_note: "<p>La ville de New York ouvre des centres de rafraîchissement dans des établissements publics climatisés pour les personnes éprouvant une gêne physique lors de canicule.</p><p>Pour trouver un centre de rafraîchissement, tapez simplement votre adresse ou intersection de rues dans le champ de recherche du coin supérieur gauche de la carte, puis appuyez sur \"Enter\" (Entrer) ; ou effectuez un zoom et déplacez la carte vers votre quartier. </p><p>Pour rechercher ou afficher uniquement les centres accessibles aux fauteuils roulants, cliquez sur le bouton Accès handicapé ci-dessous ; cliquez sur Tous les centres pour revenir à la recherche de tous les centres ou afficher le statut. </p><p><b>REMARQUE :</b> Revenez sur ce site quotidiennement. Les centres de rafraîchissement peuvent changer d'heures d’ouverture. </p><p><a href='http://www1.nyc.gov/site/em/ready/extreme-heat.page' target='_blank'>En savoir plus sur les moyens de rester au frais.</a></p>",
	acc_all: "Tous les centres",
	acc_only: "Accès handicapé", 
	btn_legend: 'Légende',
	legend_comm: "Centre communautaire",
	legend_senior: "Centre pour personnes âgées",    
	legend_cornerstone: "Programme Cornerstone",
	legend_library: "Bibliothèque",
	legend_school: "École",
	legend_other: "Autre",
	pop_name: "Nom ",
	pop_type: "Type d’établissement ",
	pop_address: "Adresse ",
	pop_phone: "Téléphone ",
	pop_hours: "Heures ",
	pop_extended: "Horaires prolongés ",
	pop_access: "Accessible aux fauteuils roulants ",
	day: "Jour",
	opens: "Ouvre à",
	closes: "Ferme à",
	closed: "Fermé",
	sunday: "Dimanche",
	monday: "Lundi",
	tuesday: "Mardi",
	wednesday:"Mercredi",
	thursday: "Jeudi",    
	friday: "Vendredi",
	saturday: "Samedi",
	msg_extended: "Les horaires peuvent être prolongés en cas de canicule",
	"msg-vw-list": "Voir la liste des centres de rafraîchissement"
}
messages.ar = {
	cc_title: "الباحث عن مركز تبريد في مدينة نيويورك",
	btn_cooling_centers: "مراكز التبريد",
	panel_note: 'تفتح مدينة نيويورك مراكز تبريد في المرافق العامة المكيفة لاستخدامها من طرف من يتضايقون من موجة الحر.<p>للعثور على مركز تبريد، ما عليك سوى كتابة عنوانك أو  أسم  أقرب تقاطع  في حقل البحث في الزاوية العلوية اليسرى من الخريطة ثم الضغط على \"إدخال\" ؛ أو تكبير الخريطة وتحريكها إلى موقع منطقتك.</p><p>للبحث او لعرض المراكز المتاحة فقط، انقر على زر المتاح فقط؛ انقر على زر جميع المراكز للعودة الى مكان البحث العام او الى حالة العرض.</p><p>ملاحظة: يرجى مراجعة الموقع يوميا. قد تغير مراكز التبريد ساعات العمل.</p><p><a href=\"http://www1.nyc.gov/site/em/ready/extreme-heat.page\" target=\"_blank\">تعرف على المزيد لكي تنعم بمكان بارد.<a></p>',
	acc_all: "كافة المراكز", 
	acc_only: "المراكز المتاحة فقط",
	btn_legend: "مفتاح الخريطة",
	legend_comm: "مركز مجتمعي ",
	legend_senior: "مركز لكبار السن", 
	legend_cornerstone: "يرنامج Cornerstone",
	legend_library: "مكتبة",
	legend_school: "مدرسة",
	legend_other: "آخر",
	pop_name: "الاسم",
	pop_type: "نوع المرفق",
	pop_address: "العنوان",
	pop_phone: "الهاتف",
	pop_hours: "ساعات العمل",
	pop_extended: "ساعات العمل الممتدة",
	pop_access: "متاح بالكرسي المتحرك",
	day: "يوم",
	opens: "يفتح",
	closes: "يغلق",
	closed: "مغلق",
	sunday:    "الأحد",
	monday: "الأثنين",
	tuesday: "الثلاثاء",
	wednesday:"الأربعاء",
	thursday: "الخميس",    
	friday: "الجمعة",
	saturday: "السبت",
	msg_extended: "قد تمدد ساعات العمل أثناء طوارئ ارتفاع درجات الحرارة",
	"msg-vw-list": "شاهد قائمة مراكز التبريد"
}

messages.bn = {
	cc_title: "কুলিং সেন্টার ফাইন্ডার",
	btn_cooling_centers: 'কুলিং সেন্টার',
	panel_note: 'তাপদাহে শারীরিক অস্বাচ্ছন্দ্যের শিকার হওয়া ব্যক্তিদের জন্য নিউ ইয়র্ক সিটি শীতাতপ নিয়ন্ত্রিত সরকারি স্থাপনাগুলোতে কুলিং সেন্টার খুলে থাকে৷<p>একটি কুলিং সেন্টার খুঁজে বের করতে, মানচিত্রের উপরে বাম কোণে অনুসন্ধানের ঘরে আপনার ঠিকানা বা ইন্টারসেকশনের নাম লিখুন এবং “Enter” চাপুন; অথবা মানচিত্রে আপনার মহল্লার অবস্থানের জায়গায় জুম ও প্যান করুন৷</p><p>শুধু হুইলচেয়ার প্রবেশযোগ্য সেন্টারগুলো খুঁজতে, নিচের “শুধু হুইলচেয়ার প্রবেশযোগ্য” (“Accessible Only”) বাটনে ক্লিক করুন; সব কেন্দ্র খোঁজার জন্য ফিরে যেতে বা স্ট্যাটাস দেখতে “সব সেন্টার” (“All Centers”) অপশনে ক্লিক করুন৷</p><p><b>দ্রষ্টব্য:</b> অনুগ্রহ করে এই সাইট প্রতিদিন চেক করুন৷ কুলিং সেন্টারগুলো খোলা থাকার সময়সূচি পরিবর্তিত হতে পারে৷</p><p><a href=\"http://www1.nyc.gov/site/em/ready/extreme-heat.page\" target=\"_blank\">ঠাণ্ডা থাকার উপায়গুলো সম্পর্কে আরো জানুন৷</a></p>',
	acc_all: "সব সেন্টার",
	acc_only: "শুধু হুইলচেয়ার প্রবেশযোগ্য",
	btn_legend: 'ব্যাখ্যা',
	legend_comm: "কমিউনিটি সেন্টার",
	legend_senior: "সিনিয়র সেন্টার",
	legend_cornerstone: "Cornerstone কর্মসূচি",
	legend_library: "লাইব্রেরি",
	legend_school: "স্কুল",
	legend_other: "অন্যান্য",
	pop_name: "নাম",
	pop_type: "কেন্দ্রের ধরন",
	pop_address: "ঠিকানা",
	pop_phone: "ফোন",
	pop_hours: "সময়সূচি",
	pop_extended: "সম্প্রসারিত সময়সূচি",
	pop_access: "হুইলচেয়ার প্রবেশযোগ্য",
	day: "দিন",
	opens: "খোলা",
	closes: "বন্ধ",
	closed: "বন্ধ",
	sunday: "রবিবার",
	monday: "সোমবার",
	tuesday: "মঙ্গলবার",
	wednesday:"বুধবার",
	thursday: "বৃহস্পতিবার",    
	friday: "শুক্রবার",
	saturday: "শনিবার",
	msg_extended: "তাপ সংক্রান্ত জরুরি পরিস্থিতিতে সময় বাড়ানো হতে পারে",
	"msg-vw-list": "কুলিং সেন্টারগুলোর তালিকা দেখুন"
}
messages.ht = {
	cc_title: "Zouti pou Chèche Sant Refwadisman",
	btn_cooling_centers: 'Sant Refwadisman',
	panel_note: '<p>Vil New York ap louvri sant refwadisman nan etablisman piblik ki gen klimatizè pou moun ki santi malèz fizik pandan yon kout chalè.</p><p>Pou jwenn yon sant refwadisman, tou senpleman tape adrès ou oswa entèseksyon nan chan rechèch la sou kwen anwo a goch nan kat la epi frape "Enter" (Antre); oswa zoume epi panche kote katye ou ye a.<p>Pou chèche oswa wè sant ki aksesib sèlman, klike sou bouton Sèlman Aksesib ki anba a; klike sou Tout Sant pou retounen chèche tout sant yo oswa pou gade kondisyon yo.</p><p><b>NÒT:</b> Tanpri tcheke sit sa a chak jou. Sant refwadisman yo ka chanje orè fonksyonman yo.</p><p><a href="http://www1.nyc.gov/site/em/ready/extreme-heat.page" target="_blank">Jwenn plis enfòmasyon sou fason pou rete fre.</a></p>',
	acc_all: "Tout Sant yo",
	acc_only: "Aksesib Sèlman",
	btn_legend: 'Lejann',
	legend_comm: "Sant Kominotè",
	legend_senior: "Sant pou Moun Aje",
  legend_cornerstone: "Pwogram Cornerstone",
	legend_library: "Bibliyotèk",
	legend_school: "Lekòl",
	legend_other: "Lòt",
	pop_name: "Non",
	pop_type: "Kalite Etablisman",
	pop_address: "Adrès",
	pop_phone: "Telefòn",
	pop_hours: "Orè Fonksyonman",
	pop_extended: "Orè Pwolonje",
	pop_access: "Aksesib pou Chèz-Woulant",
	day: "Jou",
	opens: "Ouvri",
	closes: "Fèmen",
	closed: "Fèmen",
	sunday:	"Dimanch",
	monday: "Lendi",
	tuesday: "Madi",
	wednesday: "Mèkredi",
	thursday: "Jedi",	
	friday: "Vandredi",
	saturday: "Samdi",
	msg_extended: 'Èdtan yo ka pwolonje pandan yon ijans chalè.',
	"msg-vw-list": "Gade lis Sant Refwadisman yo"
}
messages.ko = {
	cc_title: "뉴욕시 쿨링 센터 검색",
	btn_cooling_centers: '쿨링 센터',
	panel_note: '<p>뉴욕시는 폭염 중에 신체적인 불편을 겪는 분들에게 냉방시설이 된 공공시설 내에 쿨링 센터를 운영하고 있습니다.</p><p>쿨링 센터를 찾으시려면 주소 또는 교차로를 지도의 왼쪽 상단에 위치한 검색창에 입력한 후 ‘Enter’(엔터)’를 누르시기 바랍니다. 또는 귀하 인근으로 지도를 확대하거나 축소하여 찾으시기 바랍니다.</p><p>장애인이 접근 가능한 센터만을 검색하려면 아래 장애인 아이콘이 있는 ‘이용 가능 센터’ 버튼을 누르십시오. 다시 모든 센터를 검색하거나 상태 보기로 돌아가시려면 ‘전 센터’를 클릭하시기 바랍니다.</p><p><b>주의:</b> 본 사이트를 매일 확인하시기 바랍니다. 쿨링 센터의 운영 시간이 바뀔 수 있습니다.</p><p><a href="http://www1.nyc.gov/site/em/ready/extreme-heat.page" target="_blank">더위를 피할 수 있는 방법</a></p>',
	acc_all: "전 센터",
	acc_only: "이용 가능 센터",
	legend_cornerstone: "Cornerstone 프로그램",
	btn_legend: '범례',
	legend_comm: "커뮤니티 센터",
	legend_senior: "노인 센터",
	legend_library: "도서관",
	legend_school: "학교",
	legend_other: "기타",
	pop_name: "시설명",
	pop_type: "시설 종류",
	pop_address: "주소",
	pop_phone: "전화번호",
	pop_hours: "운영 시간",
	pop_extended: "연장 운영 시간",
	pop_access: "휠체어 이용 가능",
	day: "요일",
	opens: "개관",
	closes: "폐관",
	closed: "휴관",
	sunday: "일요일",
	monday: "월요일",
	tuesday: "화요일",
	wednesday:"수요일",
	thursday: "목요일",    
	friday: "금요일",
	saturday: "토요일",
	msg_extended: "폭염 비상시에는 운영 시간 변경 가능",
	"msg-no": "없음",
	"msg-vw-list": "쿨링 센터 목록 보기"
}
messages.pl = {
	cc_title: "Znajdź centrum chłodzenia",
	btn_cooling_centers: 'Centra chłodzenia',
	panel_note: "<p>Miasto Nowy Jork otwiera centra chłodzenia w klimatyzowanych obiektach publicznych dla osób doświadczających trudności fizycznych podczas fali upałów.</p><p>W celu znalezienia centrum chłodzenia, należy po prostu wpisać adres lub skrzyżowanie w pole wyszukiwania w lewym górnym rogu mapy i nacisnąć “Enter” lub powiększyć mapę wokół własnej lokalizacji.</p><p>W celu wyszukiwania lub sprawdzenia tylko centrów dostępnych dla osób niepełnosprawnych naciśnij  poniższy przycisk \"Tylko centra dostępne dla osób niepełnosprawnych\", naciśnij \"Wszystkie centra\", żeby wrócić do wyszukiwania wszystkich centrów lub sprawdzenia statusu.</p><p><a href=\"http://www1.nyc.gov/site/em/ready/extreme-heat.page\" target=\"_blank\">Dowiedzcie się więcej o tym, jak się chłodzić</a>.</p>",
	acc_all: "Wszystkie centra",
	acc_only: "Tylko dostępne dla wózków",
	btn_legend: 'Legenda',
	legend_comm: "Ośrodek społeczno-kulturalny",
	legend_senior: "Ośrodek dla emerytów",
	legend_cornerstone: "Program Środowiskowy",
	legend_library: "Biblioteka",
	legend_school: "Szkoła",
	legend_other: "Inne",
	pop_name: "Imię i nazwisko",
	pop_type: "Rodzaj obiektu",
	pop_address: "Adres",
	pop_phone: "Numer telefonu",
	pop_hours: "Godziny otwarcia",
	pop_extended: "Przedłużone godziny otwarcia",
	pop_access: "Dostępne dla wózków inwalidzkich",
  day: "Dzień",
	opens: "Otwarte",
	closes: "Zamknięte",
	closed: "Zamknięte",
	sunday:	"niedziela",
	monday: "poniedziałek",
	tuesday: "wtorek",
	wednesday:"środa",
	thursday: "czwartek",	
	friday: "piątek",
	saturday: "sobota",
	msg_extended: "Godziny otwarcia mogą być przedłużone w czasie zagrażających zdrowiu temperatur.",
	"msg-vw-list": "Zobacz listę centrów chłodzenia"
}
messages.ru = {
	cc_title: "Поиск центров охлаждения",
	btn_cooling_centers: 'Центры<br>охлаждения',
	panel_note: '<p>В Нью-Йорке работают центры охлаждения в кондиционированных общественных зданиях для тех, кто испытывает физический дискомфорт в период сильной жары. </p><p>Чтобы найти центр охлаждения, введите ваш адрес или перекресток в поисковую строку в верхнем левом углу карты и нажмите клавишу ввода; либо увеличьте изображение и найдите на карте ваш район.</p><p>Для поиска или просмотра только тех центров, которые доступны для лиц с физическими недостатками, нажмите ниже кнопку «Только доступные»; чтобы вернуться к поиску или просмотру всех центров, нажмите кнопку «Все центры».</p><p><strong>ПРИМЕЧАНИЕ:</strong> Проверяйте этот сайт ежедневно. Часы работы центров охлаждения могут измениться. <p><a href="http://www1.nyc.gov/site/em/ready/extreme-heat.page" target="_blank">Узнайте о том, как избежать перегревания</a>.</p>',
	acc_all: "Все центры",
	acc_only: "Только доступные",
	btn_legend: 'Легенда',
	legend_note: "Прежде чем отправиться в центр охлаждения, позвоните и уточните часы его работы.",
	legend_searched: "Адрес, указанный для поиска",
	legend_comm: "Общественный центр",
	legend_senior: "Центр для пожилых",
	legend_cornerstone: "Программа Cornerstone",
	legend_library: "Библиотека",
	legend_school: "Школа",
	legend_other: "Другой",
	pop_name: "Ф.И.О.",
	pop_type: "Тип учреждения",
	pop_address: "Адрес",
	pop_phone: "Телефон",
	pop_hours: "Часы работы",
	pop_extended: "Продленные часы работы",
	pop_access: "Доступ для инвалидных колясок",
	day: "День",
	opens: "Открыто",
	closes: "Закрыто",
	closed: "Закрыто",
	sunday:	"воскресенье",
	monday: "понедельник",
	tuesday: "вторник",
	wednesday: "среда",
	thursday: "четверг",	
	friday: "пятница",
	saturday: "суббота",
	msg_extended: "в случае экстремальной жары часы могут быть продлены",
	"msg-vw-list": "Смотреть список центров охлаждения"
}
messages.es = {
	cc_title: "Directorio de centros de enfriamiento",
	btn_cooling_centers: 'Centros de<br>enfriamiento',
	panel_note: '<p>La Ciudad de Nueva York abre centros de enfriamiento en instalaciones públicas con aire acondicionado, para quienes experimenten molestias físicas durante una ola de calor. </p><p>Para encontrar un centro de enfriamiento, simplemente escriba su dirección o intersección en el campo de búsqueda en la esquina superior izquierda del mapa y luego presione &ldquo;Enter&rdquo;; o amplíe y explore el mapa correspondiente a su vecindario.</p><p>Para buscar o ver solamente los centros con acceso para personas con discapacidades, haga clic más abajo en el botón &ldquo;Solo centros accesibles&rdquo; para personas con discapacidades; haga clic en &ldquo;Todos los centros&rdquo; para volver a la búsqueda de todos los centros o ver el estado.</p><p><strong>NOTA:</strong> Por favor, revise este sitio diariamente. Los horarios de operación de los centros de enfriamiento pueden cambiar. </p><p><a href=\"http://www1.nyc.gov/site/em/ready/extreme-heat.page\" target=\"_blank\">Obtenga más información sobre formas de mantenerse fresco</a>.</p>',
	acc_all: "Todos los centros",
	acc_only: "Solo centros accesibles",
	btn_legend: 'Leyenda',
	legend_comm: "Centro comunitario",
	legend_senior: "Centro para personas mayores",
  legend_cornerstone: "Programa Cornerstone",
	legend_library: "Biblioteca",
	legend_school: "Escuela",
	legend_other: "Otro",
	pop_name: "Nombre",
	pop_type: "Tipo de instalación",
	pop_address: "Dirección",
	pop_phone: "Teléfono",
	pop_hours: "Horario",
	pop_extended: "Horario extendido",
	pop_access: "Acceso para sillas de ruedas",
	day: "Día",
	opens: "Abierto",
	closes: "Cerrado",
	closed: "Cerrado",
	sunday:	"Domingo",
	monday: "Lunes",
	tuesday: "Martes",
	wednesday:"Miércoles",
	thursday: "Jueves",	
	friday: "Viernes",
	saturday: "Sábado",
	msg_extended: "El horario puede extenderse durante una emergencia de calor.",
	"msg-vw-list": "Ver lista de centros de enfriamiento"
}
messages.ur = {
	cc_title: "کولنگ سینٹر  تلاش کرنے کا ذریعہ",
	btn_cooling_centers: 'کولنگ سینٹر (ٹھنڈا رہنے کے مراکز)',
	panel_note: 'نیو یارک شہر گرمی کی لہر میں جسمانی تکلیف کا سامنا کرنے والے افراد کے لئے ایئر کنڈیشنڈ والی عوامی سہولیات میں کولنگ سینٹر کھولتا ہے۔<p>کولنگ سینٹر کو تلاش کرنے کے لئے، بس نقشے کے اوپری بائیں کونے پر تلاش کی جگہ میں اپنے ایڈریس یا انٹرسیکشن کو ٹائپ کریں اور پھر "اینٹر" دبائیں؛ یا نقشہ کو اپنا علاقہ دیکھنے کے لئے زوم اور پین کریں۔</p><p>صرف قابل رسائی مراکز تلاش کرنے یا دیکھنے کے لئے ذیل میں صرف قابل رسائی بٹن پر کلک کریں؛ تمام مراکز کو دوبارہ تلاش کرنے اور دیکھنےکیلئے "تمام مراکز" پر کلک کریں۔</p><p>نوٹ: براہ مہربانی اس سائٹ کو روزانہ ملاحظہ کریں۔ کولنگ سینٹر اوقات کار تبدیل کر سکتے ہیں۔</p><p><a href="http://www1.nyc.gov/site/em/ready/extreme-heat.page" target="_blank">ٹھنڈا رہنے کے طریقوں کے بارے میں مزید معلومات حاصل کریں۔۔</a></p>',
	acc_all: "تمام مراکز",
	acc_only: "معذور افراد کیلئے",
	btn_legend: 'علامات',
	legend_comm: "کمیونٹی سینٹر",
	legend_senior: "سینئیر سینٹر",
  legend_cornerstone: "Cornerstone پروگرام",
	legend_library: "لائبریری",
	legend_school: "سکول",
	legend_other: "دیگر",
	pop_name: "نام",
	pop_type: "سہولیات کی نوعیت",
	pop_address: 'پتا',
	pop_phone: 'فون',
	pop_hours: "اوقات",
	pop_extended: "توسیع شدہ اوقات",
	pop_access: "وہیل چیئر قابل رسائی",
	day: "دن",
	opens: "کھولو",
	closes: "بند",
	closed: "بند",
	sunday:	"اتوار",
	monday: "پیر",
	tuesday: "منگل",
	wednesday: "بدھ",
	thursday: "جمعرات",	
	friday: "جمعہ",
	saturday: "ہفتہ",
	msg_extended: 'شدید گرمی کے دوران اوقات میں توسیع کی جاسکتی ہے',
	"msg-vw-list": "کولنگ سینٹرز کی فہرست دیکھئیے"
}

export default {messages, languages}
// =========================================================================
// TRATTORIA PARADISICULO - MESSINA (ME)
// Interactive Digital Menu & Table Experience Engine
// Client WhatsApp: +39 340 126 7943
// =========================================================================

const PARADISICULO_WHATSAPP = "393401267943";

const menuData = [
  // --- GLI ANTIPASTI DI MARE & TERRA ---
  {
    id: 1,
    category: "antipasti",
    diet: ["pesce", "tradizionale"],
    title: {
      it: "Pepata di Cozze al Limone Intermezzo",
      en: "Messinese Peppered Mussels"
    },
    desc: {
      it: "Cozze freschissime aperte a fiamma viva in padella con abbondante pepe nero macinato al momento, spicchi di limone messinese, aglio dolce e prezzemolo fresco. Servite con fette di pane casereccio abbrustolito.",
      en: "Fresh local mussels sautéed with freshly ground black pepper, fresh Sicilian lemon, sweet garlic and parsley. Served with toasted rustic bread."
    },
    priceVal: 9.00,
    priceStr: "€ 9.00",
    badge: { it: "Fresco di Giornata", en: "Fresh Catch" },
    allergens: { it: "Molluschi, Glutine", en: "Molluscs, Gluten" },
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "antipasti",
    diet: ["pesce", "tradizionale"],
    title: {
      it: "Sarde a Beccafico alla Messinese",
      en: "Messinese Style Stuffed Sardines"
    },
    desc: {
      it: "Sarde freschissime aperte a libro, farcite con pangrattato tostato aromatizzato, pinoli, uva sultanina, alloro fresco e succo d'arancia nostrana. Cotte al forno con delicatezza e profumo d'agrumi.",
      en: "Fresh sardines rolled with toasted breadcrumbs, pine nuts, sultanas, fresh bay leaf and citrus zest, gently baked to golden perfection."
    },
    priceVal: 10.00,
    priceStr: "€ 10.00",
    badge: { it: "Tradizione Storica", en: "Traditional" },
    allergens: { it: "Pesce, Glutine, Frutta a guscio", en: "Fish, Gluten, Tree Nuts" },
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "antipasti",
    diet: ["pesce"],
    title: {
      it: "Polpo Verace con Patate Nostrane",
      en: "Octopus & Potato Salad"
    },
    desc: {
      it: "Polpo tenerissimo lessato a regola d'arte unito a patate cotte al vapore, sedano croccante, prezzemolo fresco e condito con emulsione di olio extravergine d'oliva dei colli messinesi e limone.",
      en: "Tender local octopus tossed with steamed potatoes, crunchy celery, fresh parsley and an emulsion of Sicilian extra virgin olive oil and lemon."
    },
    priceVal: 12.00,
    priceStr: "€ 12.00",
    badge: { it: "Tenerissimo", en: "Extra Tender" },
    allergens: { it: "Molluschi, Sedano", en: "Molluscs, Celery" },
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    category: "antipasti",
    diet: ["tradizionale"],
    title: {
      it: "Caponata Messinese con Mandorle Tostate",
      en: "Messinese Caponata with Toasted Almonds"
    },
    desc: {
      it: "Melanzane fritte a cubetti dorati, sedano, cipolla stufata, olive verdi in salamoia, capperi di Salina e la tipica glassatura agrodolce della tradizione, completata con scaglie di mandorle tostate.",
      en: "Golden fried eggplants, celery, stewed onion, green olives, Salina capers in sweet-and-sour glaze topped with toasted Sicilian almonds."
    },
    priceVal: 7.50,
    priceStr: "€ 7.50",
    badge: { it: "Ricetta di Casa", en: "Homestyle" },
    allergens: { it: "Sedano, Frutta a guscio", en: "Celery, Tree Nuts" },
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    category: "antipasti",
    diet: ["pesce"],
    title: {
      it: "Carpaccio di Spada agli Agrumi dello Stretto",
      en: "Citrus Cured Swordfish Carpaccio"
    },
    desc: {
      it: "Sottilissime lamelle di pescespada fresco dello Stretto marinate a freddo con succo d'arancia, limone di Sicilia, bacche di pepe rosa e fili d'erba cipollina fresca.",
      en: "Thin slices of fresh Strait swordfish cold-marinated in orange and lemon juices, pink peppercorns and garden chives."
    },
    priceVal: 13.00,
    priceStr: "€ 13.00",
    badge: { it: "Pesce Spada Locale", en: "Local Catch" },
    allergens: { it: "Pesce", en: "Fish" },
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    category: "antipasti",
    diet: ["carne", "tradizionale"],
    title: {
      it: "Tagliere dei Monti Nebrodi",
      en: "Nebrodi Mountains Artisanal Board"
    },
    desc: {
      it: "Selezione di salumi e formaggi del territorio: Salame di Suino Nero dei Nebrodi, Provola dolce dei Nebrodi, Pecorino Primo Sale pepato e olive cunzate nostrane con confettura di fichi.",
      en: "Selection of artisanal cold cuts and cheeses: Black Swine salami from Nebrodi, aged provola, pecorino cheese and spiced Sicilian olives."
    },
    priceVal: 12.00,
    priceStr: "€ 12.00",
    badge: { it: "Suino Nero", en: "Nebrodi DOP" },
    allergens: { it: "Lattosio", en: "Dairy" },
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80"
  },

  // --- I PRIMI PIATTI TRADIZIONALI ---
  {
    id: 7,
    category: "primi",
    diet: ["pesce", "tradizionale"],
    title: {
      it: "Calamarata Pescespada e Melanzane",
      en: "Calamarata with Swordfish & Eggplants"
    },
    desc: {
      it: "Pasta trafilata al bronzo avvolta da tocchetti di pescespada fresco dello Stretto, cubetti di melanzana dorata fritta, pomodorini ciliegini dolci e una cascata di mentuccia selvatica fresca.",
      en: "Bronze-die Calamarata pasta with fresh Strait swordfish chunks, golden fried eggplant, sweet cherry tomatoes and fresh garden mint."
    },
    priceVal: 13.50,
    priceStr: "€ 13.50",
    badge: { it: "Il Più Amato", en: "Most Loved" },
    allergens: { it: "Glutine, Pesce", en: "Gluten, Fish" },
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    category: "primi",
    diet: ["pesce", "tradizionale"],
    title: {
      it: "Spaghetti alla Ghiotta di Stocco",
      en: "Spaghetti with Stocco alla Ghiotta Sauce"
    },
    desc: {
      it: "Il leggendario sugo messinese dello stocco incontra gli spaghetti: sugo denso e ricco di pomodoro, capperi di Salina, olive verdi e patate sfatte che donano cremosità senza eguali.",
      en: "The historic Messinese ghiotta sauce hugging bronze spaghetti: rich tomato reduction with stockfish juices, Salina capers, green olives and melted potatoes."
    },
    priceVal: 14.00,
    priceStr: "€ 14.00",
    badge: { it: "Pura Tradizione", en: "Pure Tradition" },
    allergens: { it: "Glutine, Pesce, Sedano", en: "Gluten, Fish, Celery" },
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    category: "primi",
    diet: ["pesce"],
    title: {
      it: "Spaghetti alle Vongole Veraci e Bottarga",
      en: "Spaghetti with Clams & Tuna Bottarga"
    },
    desc: {
      it: "Vongole veraci aperte all'istante con olio extravergine, aglio in camicia e gambi di prezzemolo, sfumate con vino bianco Grillo e completate con grattugiata generosa di bottarga di tonno rosso.",
      en: "Fresh clams gently opened with olive oil, garlic and white wine, finished with freshly grated red tuna bottarga for an intense marine aroma."
    },
    priceVal: 15.00,
    priceStr: "€ 15.00",
    badge: { it: "Bottarga di Tonno", en: "Tuna Bottarga" },
    allergens: { it: "Glutine, Molluschi, Pesce", en: "Gluten, Molluscs, Fish" },
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    category: "primi",
    diet: ["pesce", "tradizionale"],
    title: {
      it: "Caserecce con le Sarde e Finocchietto",
      en: "Caserecce with Sardines & Wild Fennel"
    },
    desc: {
      it: "Sarde freschissime pulite a mano, finocchietto selvatico dei monti peloritani, pinoli, uvetta passolina, zafferano naturale e rifinite con mollica atturrata croccante e dorata.",
      en: "Hand-cleaned fresh sardines, wild Peloritani mountain fennel, pine nuts, currants, saffron and crowned with crispy toasted breadcrumbs."
    },
    priceVal: 12.50,
    priceStr: "€ 12.50",
    badge: { it: "Finocchietto Nostrano", en: "Wild Fennel" },
    allergens: { it: "Glutine, Pesce, Frutta a guscio", en: "Gluten, Fish, Tree Nuts" },
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    category: "primi",
    diet: ["tradizionale"],
    title: {
      it: "Gnocchetti di Patate alla Norma di Casa",
      en: "Homestyle Gnocchi alla Norma"
    },
    desc: {
      it: "Gnocchetti freschi di patate conditi con sugo lento di pomodoro San Marzano, melanzane nostrane fritte al momento, basilico fresco e abbondante ricotta salata siciliana a scaglie.",
      en: "Fresh potato gnocchi with slow-cooked San Marzano tomato sauce, freshly fried eggplant, fresh basil and abundant aged salted ricotta cheese."
    },
    priceVal: 11.00,
    priceStr: "€ 11.00",
    badge: { it: "Ricotta Salata DOP", en: "Salted Ricotta" },
    allergens: { it: "Glutine, Lattosio", en: "Gluten, Dairy" },
    image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?auto=format&fit=crop&w=800&q=80"
  },

  // --- SECONDI DI PESCE & CARNI ---
  {
    id: 12,
    category: "secondi",
    diet: ["pesce", "tradizionale"],
    title: {
      it: "Pesce Stocco alla Ghiotta Messinese",
      en: "Traditional Messinese Stocco alla Ghiotta"
    },
    desc: {
      it: "Il re indiscusso della tavola messinese: tranci selezionati di stoccafisso cotti lentamente per ore in terracotta con patate dolci, pomodoro corposo, cipolle stufate, capperi di Salina, olive verdi e bianche, sedano ed abbondante Olio EVO. Sapore ineguagliabile.",
      en: "The historic symbol of Messina: prime stockfish simmered for hours in clay pots with potatoes, rich tomato, stewed onion, Salina capers, green and white olives, celery and rich olive oil."
    },
    priceVal: 16.00,
    priceStr: "€ 16.00",
    badge: { it: "Piatto Simbolo", en: "Signature Dish" },
    allergens: { it: "Pesce, Sedano", en: "Fish, Celery" },
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    category: "secondi",
    diet: ["pesce", "tradizionale"],
    title: {
      it: "Involtini di Pescespada dello Stretto alla Brace",
      en: "Grilled Swordfish Rolls with Bay Leaf"
    },
    desc: {
      it: "Fettine sottilissime di pescespada freschissimo farcite con mollica condita agli aromi, caciocavallo filante, capperi e prezzemolo, infilzate nello spiedo con foglie di alloro e dorate sulla brace.",
      en: "Thin slices of fresh swordfish stuffed with seasoned breadcrumbs, melted caciocavallo cheese, capers and parsley, grilled on skewers with aromatic bay leaves."
    },
    priceVal: 15.00,
    priceStr: "€ 15.00",
    badge: { it: "Cottura alla Brace", en: "Charcoal Grilled" },
    allergens: { it: "Pesce, Glutine, Lattosio", en: "Fish, Gluten, Dairy" },
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    category: "secondi",
    diet: ["pesce"],
    title: {
      it: "Involtini di Spatola in Crosta di Pistacchio",
      en: "Silver Scabbardfish in Pistachio Crust"
    },
    desc: {
      it: "Filetti del prelibato pesce sciabola locale dello Stretto, arrotolati con cuore morbido di panure aromatica e gratinati al forno con croccante granella di pistacchio di Bronte DOP.",
      en: "Delicate Strait silver scabbardfish fillets rolled with herb filling and baked with a crunchy Bronte DOP pistachio crust."
    },
    priceVal: 14.00,
    priceStr: "€ 14.00",
    badge: { it: "Pistacchio di Bronte", en: "Bronte Pistachio" },
    allergens: { it: "Pesce, Glutine, Frutta a guscio", en: "Fish, Gluten, Tree Nuts" },
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    category: "secondi",
    diet: ["pesce"],
    title: {
      it: "Frittura Mista di Paranza e Calamari",
      en: "Crispy Strait Mixed Fried Seafood"
    },
    desc: {
      it: "Calamaretti teneri, gamberi di nassa e pesciolini freschi dello Stretto infarinati e fritti all'istante in olio bollente. Servita croccante, asciutta e accompagnata da spicchi di limone.",
      en: "Tender calamari, gulf prawns and small local fish lightly dusted in flour and flash-fried to golden crunchiness. Served with fresh lemon wedges."
    },
    priceVal: 15.00,
    priceStr: "€ 15.00",
    badge: { it: "Croccante & Asciutta", en: "Golden Crisp" },
    allergens: { it: "Pesce, Molluschi, Crostacei, Glutine", en: "Fish, Molluscs, Crustaceans, Gluten" },
    image: "https://images.unsplash.com/photo-1579631542720-3a87824fff86?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 16,
    category: "secondi",
    diet: ["carne", "tradizionale"],
    title: {
      it: "Braciole Messinesi di Vitello alla Brace",
      en: "Traditional Messinese Veal Braciole"
    },
    desc: {
      it: "Il grande classico messinese di carne: involtini di carpaccio di vitello farciti con pangrattato aromatizzato, aglio, prezzemolo e provola dei Nebrodi filante, cotti alla griglia con foglie di alloro.",
      en: "Messina's iconic meat specialty: tender veal rolls stuffed with seasoned breadcrumbs, Nebrodi provola cheese and fresh parsley, grilled over open coals with bay leaves."
    },
    priceVal: 13.00,
    priceStr: "€ 13.00",
    badge: { it: "Carne ai Carboni", en: "Flame Grilled" },
    allergens: { it: "Glutine, Lattosio", en: "Gluten, Dairy" },
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80"
  },

  // --- I DOLCI CASERECCI ---
  {
    id: 17,
    category: "dolci",
    diet: ["dolci", "tradizionale"],
    title: {
      it: "Biancomangiare alle Mandorle di Avola",
      en: "Avola Almond Biancomangiare Pudding"
    },
    desc: {
      it: "Antichissimo dessert siciliano preparato con latte di mandorle artigianale, un tocco di cannella e servito con una vellutata coulis di more di rovo e lamponi freschi.",
      en: "Ancient delicate Sicilian dessert crafted with handmade almond milk, scented with cinnamon and served with fresh blackberry coulis."
    },
    priceVal: 5.00,
    priceStr: "€ 5.00",
    badge: { it: "Della Tradizione", en: "Ancient Recipe" },
    allergens: { it: "Frutta a guscio", en: "Tree Nuts" },
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 18,
    category: "dolci",
    diet: ["dolci", "tradizionale"],
    title: {
      it: "Cannolo Tradizionale Scomposto con Ricotta Fresca",
      en: "Deconstructed Cannolo with Sheep Ricotta"
    },
    desc: {
      it: "Cialda fritta artigianale croccante al cacao e vino rosso, crema setosa di pura ricotta di pecora lavorata con gocce di cioccolato modicano e finitura con pistacchio tostato.",
      en: "Crisp artisanal cocoa waffle shell with sweet fresh sheep ricotta cream, Modica dark chocolate drops and crushed pistachios."
    },
    priceVal: 5.00,
    priceStr: "€ 5.00",
    badge: { it: "Ricotta Freschissima", en: "Fresh Ricotta" },
    allergens: { it: "Glutine, Lattosio, Frutta a guscio", en: "Gluten, Dairy, Tree Nuts" },
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 19,
    category: "dolci",
    diet: ["dolci"],
    title: {
      it: "Tiramisù Casalingo della Trattoria di Lilla",
      en: "Lilla's Homestyle Tiramisù"
    },
    desc: {
      it: "Preparato espresso ogni mattina: savoiardi inzuppati nel caffè espresso moka, crema al mascarpone montata a mano soffice come una nuvola e spolverata generosa di cacao amaro.",
      en: "Prepared freshly every morning: ladyfingers soaked in moka espresso, airy whipped mascarpone cream and Dutch bitter cocoa powder."
    },
    priceVal: 5.50,
    priceStr: "€ 5.50",
    badge: { it: "Fatto a Mano", en: "Handmade" },
    allergens: { it: "Glutine, Lattosio, Uova", en: "Gluten, Dairy, Eggs" },
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 20,
    category: "dolci",
    diet: ["dolci", "tradizionale"],
    title: {
      it: "Parfait di Mandorle con Cioccolato Caldo",
      en: "Almond Parfait with Warm Dark Chocolate"
    },
    desc: {
      it: "Semifreddo artigianale alle mandorle tostate e pralinate nel caramello, servito al tavolo con una colata fumante di cioccolato fondente 70%.",
      en: "Velvety almond semifreddo with caramelized toasted almonds, drenched at the table in warm 70% dark chocolate."
    },
    priceVal: 6.00,
    priceStr: "€ 6.00",
    badge: { it: "Goloso", en: "Decadent" },
    allergens: { it: "Lattosio, Frutta a guscio, Uova", en: "Dairy, Tree Nuts, Eggs" },
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  },

  // --- CANTINA & BEVANDE ---
  {
    id: 21,
    category: "bevande",
    diet: ["pesce"],
    title: {
      it: "Grillo di Sicilia D.O.C. (Bottiglia 75cl)",
      en: "Grillo di Sicilia D.O.C. (75cl Bottle)"
    },
    desc: {
      it: "Vino bianco autoctono siciliano, fresco, minerale e sapido, con sentori di fiori d'arancio, pompelmo giallo e note saline dello Ionio. Ideale compagno per lo stocco e i primi di pesce.",
      en: "Native Sicilian white wine, crisp, mineral and savory with notes of orange blossom and citrus. Ideal companion for seafood and ghiotta."
    },
    priceVal: 18.00,
    priceStr: "€ 18.00",
    badge: { it: "Selezione Trattoria", en: "House Selection" },
    allergens: { it: "Solfiti", en: "Sulfites" },
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 22,
    category: "bevande",
    diet: ["tradizionale"],
    title: {
      it: "Nero d'Avola D.O.C. dei Nebrodi (Bottiglia 75cl)",
      en: "Nero d'Avola D.O.C. (75cl Bottle)"
    },
    desc: {
      it: "Rosso rubino intenso, bouquet profondo di marasca, ciliegia matura, carruba e spezie mediterranee. Tannino morbido e avvolgente, perfetto per le braciole e i piatti saporiti di carne.",
      en: "Ruby red, rich bouquet of wild cherries, carob and Mediterranean spices. Velvety tannins, perfect for meat braciole and hearty dishes."
    },
    priceVal: 20.00,
    priceStr: "€ 20.00",
    badge: { it: "Corposo & Nobile", en: "Full Bodied" },
    allergens: { it: "Solfiti", en: "Sulfites" },
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80"
  }
];

// App State
let currentLang = "it";
let activeCategory = "all";
let searchQuery = "";
let selectedTable = "Tavolo 1";
const cart = {}; // id -> count

// DOM Elements
const menuGrid = document.getElementById("menu-grid");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("menu-search");
const searchClearBtn = document.getElementById("search-clear-btn");
const categoryTabs = document.getElementById("category-tabs");

// Floating Bar & Tray Sheet
const floatingOrderBar = document.getElementById("floating-order-bar");
const openTrayBtn = document.getElementById("open-tray-btn");
const btnViewTray = document.getElementById("btn-view-tray");
const trayModal = document.getElementById("tray-modal");
const closeTrayBtn = document.getElementById("close-tray-btn");
const closeTrayBackdrop = document.getElementById("close-tray-backdrop");
const trayTableLabel = document.getElementById("tray-table-label");
const trayItemsContainer = document.getElementById("tray-items-container");
const modalTrayTotal = document.getElementById("modal-tray-total");
const trayItemCount = document.getElementById("tray-item-count");
const trayTotalPrice = document.getElementById("tray-total-price");
const trayItemsSummary = document.getElementById("tray-items-summary");
const btnSendWa = document.getElementById("btn-send-whatsapp-order");

// QR Stand Simulator Elements
const qrModal = document.getElementById("qr-modal");
const qrModalBtn = document.getElementById("qr-modal-btn");
const qrModalClose = document.getElementById("qr-modal-close");
const qrModalBackdrop = document.getElementById("qr-modal-backdrop");
const btnModalCloseAction = document.getElementById("btn-modal-close-action");
const btnTestQrDemo = document.getElementById("btn-test-qr-demo");
const dynamicTableQr = document.getElementById("dynamic-table-qr");
const modalQrImage = document.getElementById("modal-qr-image");
const standCurrentTable = document.getElementById("stand-current-table");
const modalQrIndicator = document.getElementById("modal-qr-table-indicator");

// Lightbox Elements
const imgLightbox = document.getElementById("img-lightbox");
const lightboxBackdrop = document.getElementById("lightbox-backdrop");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxPrice = document.getElementById("lightbox-price");
const lightboxDesc = document.getElementById("lightbox-desc");
const lightboxAllergens = document.getElementById("lightbox-allergens");
const lightboxAddBtn = document.getElementById("lightbox-add-btn");
let activeLightboxItemId = null;

// Live Opening Hours Checking
function updateLiveStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 1 is Monday
  const hours = now.getHours();
  const mins = now.getMinutes();
  const currentDec = hours + (mins / 60);

  const announcementText = document.getElementById("announcement-text");

  // Monday is day 1 (Closed)
  if (day === 1) {
    if (announcementText) {
      announcementText.innerHTML = `🔒 <strong>Oggi Lunedì Chiuso per Riposo</strong> • Riapriamo Martedì a Pranzo dalle 12:30 • Trattoria ParadiSiculo`;
    }
    return;
  }

  // Lunch: 12:30 - 15:30 (Tuesday - Sunday)
  const isLunchOpen = currentDec >= 12.5 && currentDec <= 15.5;

  // Dinner: 19:30 - 23:30 (Tuesday - Saturday)
  const isDinnerOpen = (day !== 0) && (currentDec >= 19.5 && currentDec <= 23.5);

  if (isLunchOpen) {
    if (announcementText) {
      announcementText.innerHTML = `🟢 <strong>Aperto Ora per Pranzo (12:30–15:30)</strong> • Pescato Fresco & Stocco alla Ghiotta • Via Ghibellina 154, Messina`;
    }
  } else if (isDinnerOpen) {
    if (announcementText) {
      announcementText.innerHTML = `🟢 <strong>Aperto Ora per Cena (19:30–23:30)</strong> • Cucina Tipica Messinese • Prenotazioni & Asporto via WhatsApp`;
    }
  } else {
    let nextOpening = "Apre alle 12:30";
    if (currentDec > 15.5 && currentDec < 19.5 && day !== 0) {
      nextOpening = "Apre stasera alle 19:30";
    }
    if (announcementText) {
      announcementText.innerHTML = `🕒 <strong>Trattoria ParadiSiculo</strong> • Pranzo 12:30–15:30 • Cena 19:30–23:30 (${nextOpening}) • Messina Centro`;
    }
  }
}

// Render Menu Cards
function renderMenu() {
  if (!menuGrid) return;
  menuGrid.innerHTML = "";

  const query = searchQuery.trim().toLowerCase();

  const filtered = menuData.filter(item => {
    // Category match
    if (activeCategory !== "all" && item.category !== activeCategory) {
      return false;
    }

    // Search query match
    if (query) {
      const title = item.title[currentLang].toLowerCase();
      const desc = item.desc[currentLang].toLowerCase();
      const badge = item.badge ? item.badge[currentLang].toLowerCase() : "";
      if (!title.includes(query) && !desc.includes(query) && !badge.includes(query)) {
        return false;
      }
    }

    return true;
  });

  if (filtered.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    return;
  } else {
    if (emptyState) emptyState.style.display = "none";
  }

  filtered.forEach(item => {
    const card = document.createElement("article");
    card.className = "dish-card";
    card.setAttribute("data-id", item.id);

    const countInCart = cart[item.id] || 0;

    card.innerHTML = `
      <div class="dish-media" onclick="openLightbox(${item.id})">
        <img src="${item.image}" alt="${item.title[currentLang]}" loading="lazy" class="dish-img" onerror="this.src='https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'">
        ${item.badge ? `<span class="dish-badge-pill">${item.badge[currentLang]}</span>` : ""}
        <span class="dish-price-tag">${item.priceStr}</span>
        <div class="dish-zoom-hint" title="Visualizza foto ingrandita">🔍</div>
      </div>
      <div class="dish-body">
        <div>
          <h3 class="dish-title">${item.title[currentLang]}</h3>
          <p class="dish-description">${item.desc[currentLang]}</p>
        </div>
        
        <div class="dish-meta-bottom">
          <div class="dish-allergens-tag">
            <strong>Allergeni:</strong> ${item.allergens[currentLang]}
          </div>

          <div class="dish-action-group">
            ${countInCart > 0 ? `
              <div class="dish-qty-ctrls">
                <button class="qty-btn" onclick="updateItemQty(${item.id}, -1)" title="Diminuisci">-</button>
                <span class="qty-display">${countInCart}</span>
                <button class="qty-btn" onclick="updateItemQty(${item.id}, 1)" title="Aumenta">+</button>
              </div>
            ` : `
              <button class="btn-add-tray" onclick="updateItemQty(${item.id}, 1)">
                <span>+ Aggiungi</span>
              </button>
            `}
          </div>
        </div>
      </div>
    `;

    menuGrid.appendChild(card);
  });
}

// Lightbox Open / Close
window.openLightbox = function(id) {
  const item = menuData.find(m => m.id === id);
  if (!item || !imgLightbox) return;
  activeLightboxItemId = id;

  lightboxImg.src = item.image;
  lightboxTitle.innerText = item.title[currentLang];
  lightboxPrice.innerText = item.priceStr;
  lightboxDesc.innerText = item.desc[currentLang];
  lightboxAllergens.innerHTML = `<strong>Allergeni:</strong> ${item.allergens[currentLang]}`;

  const inCart = cart[id] || 0;
  lightboxAddBtn.innerText = inCart > 0 ? `Aggiunto (${inCart}) • Aggiungi ancora` : `Aggiungi al Tavolo (${item.priceStr})`;

  imgLightbox.classList.add("active");
};

function closeLightbox() {
  if (imgLightbox) imgLightbox.classList.remove("active");
}

if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);

if (lightboxAddBtn) {
  lightboxAddBtn.addEventListener("click", () => {
    if (activeLightboxItemId) {
      updateItemQty(activeLightboxItemId, 1);
      const inCart = cart[activeLightboxItemId] || 0;
      lightboxAddBtn.innerText = `Aggiunto (${inCart}) • Aggiungi ancora`;
    }
  });
}

// Update Cart Quantity
window.updateItemQty = function(id, delta) {
  const current = cart[id] || 0;
  const next = current + delta;

  if (next <= 0) {
    delete cart[id];
  } else {
    cart[id] = next;
  }

  updateTrayUI();
  renderMenu();
};

// Update Tray Bottom Sheet
function updateTrayUI() {
  const itemIds = Object.keys(cart);
  let totalCount = 0;
  let totalPrice = 0;

  itemIds.forEach(idStr => {
    const id = parseInt(idStr, 10);
    const qty = cart[id];
    const item = menuData.find(m => m.id === id);
    if (item) {
      totalCount += qty;
      totalPrice += (item.priceVal * qty);
    }
  });

  if (totalCount > 0) {
    if (floatingOrderBar) floatingOrderBar.classList.add("visible");
    if (trayItemCount) trayItemCount.innerText = totalCount;
    if (trayTotalPrice) trayTotalPrice.innerText = `€ ${totalPrice.toFixed(2)}`;
    if (modalTrayTotal) modalTrayTotal.innerText = `€ ${totalPrice.toFixed(2)}`;

    // Build brief summary
    const summaryItems = itemIds.map(idStr => {
      const id = parseInt(idStr, 10);
      const item = menuData.find(m => m.id === id);
      return `${cart[id]}x ${item.title[currentLang]}`;
    });
    if (trayItemsSummary) {
      trayItemsSummary.innerText = `${selectedTable} • ` + summaryItems.slice(0, 2).join(", ") + (summaryItems.length > 2 ? ` e altri ${summaryItems.length - 2}...` : "");
    }
  } else {
    if (floatingOrderBar) floatingOrderBar.classList.remove("visible");
    closeTraySheet();
  }

  renderTraySheetItems();
}

function renderTraySheetItems() {
  if (!trayItemsContainer) return;
  trayItemsContainer.innerHTML = "";
  const itemIds = Object.keys(cart);

  if (itemIds.length === 0) {
    trayItemsContainer.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 30px;">Nessuna portata ancora selezionata.</p>`;
    return;
  }

  itemIds.forEach(idStr => {
    const id = parseInt(idStr, 10);
    const qty = cart[id];
    const item = menuData.find(m => m.id === id);
    if (!item) return;

    const row = document.createElement("div");
    row.className = "tray-item-row";
    row.innerHTML = `
      <div class="tray-item-info">
        <strong>${item.title[currentLang]}</strong>
        <span>€ ${(item.priceVal * qty).toFixed(2)} (${item.priceStr} cad.)</span>
      </div>
      <div class="tray-item-actions">
        <div class="dish-qty-ctrls">
          <button class="qty-btn" onclick="updateItemQty(${item.id}, -1)">-</button>
          <span class="qty-display">${qty}</span>
          <button class="qty-btn" onclick="updateItemQty(${item.id}, 1)">+</button>
        </div>
        <button class="tray-remove-btn" onclick="removeItemCompletely(${item.id})">Elimina</button>
      </div>
    `;
    trayItemsContainer.appendChild(row);
  });
}

window.removeItemCompletely = function(id) {
  delete cart[id];
  updateTrayUI();
  renderMenu();
};

function openTraySheet() {
  if (trayModal) {
    trayModal.classList.add("active");
    if (trayTableLabel) trayTableLabel.innerText = `${selectedTable} • Trattoria ParadiSiculo`;
    renderTraySheetItems();
  }
}

function closeTraySheet() {
  if (trayModal) trayModal.classList.remove("active");
}

if (openTrayBtn) openTrayBtn.addEventListener("click", openTraySheet);
if (btnViewTray) btnViewTray.addEventListener("click", openTraySheet);
if (closeTrayBtn) closeTrayBtn.addEventListener("click", closeTraySheet);
if (closeTrayBackdrop) closeTrayBackdrop.addEventListener("click", closeTraySheet);

// Generate & Send WhatsApp Order
if (btnSendWa) {
  btnSendWa.addEventListener("click", () => {
    const itemIds = Object.keys(cart);
    if (itemIds.length === 0) return;

    let total = 0;
    let message = `Buongiorno Trattoria ParadiSiculo! Vorrei inoltrare la seguente comanda dal Menù Digitale:\n\n`;
    message += `📍 Postazione / Servizio: *${selectedTable}*\n`;
    message += `------------------------------------\n`;

    itemIds.forEach(idStr => {
      const id = parseInt(idStr, 10);
      const qty = cart[id];
      const item = menuData.find(m => m.id === id);
      if (item) {
        const subtotal = item.priceVal * qty;
        total += subtotal;
        message += `▪️ *${qty}x* ${item.title[currentLang]} (€ ${subtotal.toFixed(2)})\n`;
      }
    });

    message += `------------------------------------\n`;
    message += `💰 *Totale Stimato: € ${total.toFixed(2)}*\n\n`;
    message += `Attendiamo conferma dalla cucina di Lilla. Grazie mille!`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${PARADISICULO_WHATSAPP}?text=${encoded}`;
    window.open(waUrl, "_blank");
  });
}

// Direct Booking Form Handler
const btnSubmitBooking = document.getElementById("btn-submit-booking");
if (btnSubmitBooking) {
  btnSubmitBooking.addEventListener("click", () => {
    const name = document.getElementById("book-name").value.trim() || "Cliente";
    const phone = document.getElementById("book-phone").value.trim() || "Non indicato";
    const date = document.getElementById("book-date").value || "Prima data disponibile";
    const service = document.getElementById("book-service").value;
    const guests = document.getElementById("book-guests").value;

    let msg = `Buongiorno Trattoria ParadiSiculo, vorrei richiedere la prenotazione di un tavolo:\n\n`;
    msg += `👤 *Nome:* ${name}\n`;
    msg += `📞 *Telefono:* ${phone}\n`;
    msg += `📅 *Data richiesta:* ${date}\n`;
    msg += `🕒 *Turno:* ${service}\n`;
    msg += `👥 *Ospiti:* ${guests}\n\n`;
    msg += `Resto in attesa della vostra conferma di disponibilità. Grazie!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${PARADISICULO_WHATSAPP}?text=${encoded}`, "_blank");
  });
}

// Table Selector Chips
document.querySelectorAll(".table-chip").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".table-chip").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedTable = btn.getAttribute("data-table");
    
    // Update Stand Display
    if (standCurrentTable) standCurrentTable.innerText = selectedTable.toUpperCase();
    if (modalQrIndicator) modalQrIndicator.innerText = `Menù Digitale configurato per: ${selectedTable}`;

    // Update QR Codes with table hash
    const tableParam = encodeURIComponent(selectedTable);
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=https%3A%2F%2Fmanuuudev.github.io%2Fdemo-ristorante-sicilia%2F%23table%3D${tableParam}&color=08090D&bgcolor=FFFFFF&margin=8`;
    if (dynamicTableQr) dynamicTableQr.src = qrUrl;
    if (modalQrImage) modalQrImage.src = qrUrl;

    updateTrayUI();
  });
});

// Category Pills
if (categoryTabs) {
  categoryTabs.querySelectorAll(".cat-pill").forEach(tab => {
    tab.addEventListener("click", () => {
      categoryTabs.querySelectorAll(".cat-pill").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.getAttribute("data-category");
      renderMenu();
    });
  });
}

// Search Input
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    if (searchClearBtn) {
      searchClearBtn.style.display = searchQuery.length > 0 ? "block" : "none";
    }
    renderMenu();
  });
}

if (searchClearBtn) {
  searchClearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    searchClearBtn.style.display = "none";
    renderMenu();
  });
}

const btnReset = document.getElementById("btn-reset-filters");
if (btnReset) {
  btnReset.addEventListener("click", () => {
    activeCategory = "all";
    searchQuery = "";
    if (searchInput) searchInput.value = "";
    if (searchClearBtn) searchClearBtn.style.display = "none";

    document.querySelectorAll(".cat-pill").forEach(t => t.classList.toggle("active", t.getAttribute("data-category") === "all"));
    renderMenu();
  });
}

// Language Switcher
const langIt = document.getElementById("lang-it");
const langEn = document.getElementById("lang-en");

function setLanguage(lang) {
  currentLang = lang;
  if (langIt) langIt.classList.toggle("active", lang === "it");
  if (langEn) langEn.classList.toggle("active", lang === "en");
  renderMenu();
  updateTrayUI();
}

if (langIt) langIt.addEventListener("click", () => setLanguage("it"));
if (langEn) langEn.addEventListener("click", () => setLanguage("en"));

// QR Code Modal Simulator Logic
function openQrModal() {
  if (qrModal) qrModal.classList.add("active");
}
function closeQrModal() {
  if (qrModal) qrModal.classList.remove("active");
}

if (qrModalBtn) qrModalBtn.addEventListener("click", openQrModal);
if (btnTestQrDemo) btnTestQrDemo.addEventListener("click", openQrModal);
if (qrModalClose) qrModalClose.addEventListener("click", closeQrModal);
if (qrModalBackdrop) qrModalBackdrop.addEventListener("click", closeQrModal);
if (btnModalCloseAction) btnModalCloseAction.addEventListener("click", closeQrModal);

// Initial Boot
document.addEventListener("DOMContentLoaded", () => {
  updateLiveStatus();
  renderMenu();
  updateTrayUI();
  setInterval(updateLiveStatus, 60000);
});

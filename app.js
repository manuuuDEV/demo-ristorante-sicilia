// =========================================================================
// KALÒ PIZZA & LOUNGE BAR - GIARDINI NAXOS (ME)
// Interactive Digital Menu & Table Experience Engine
// Client WhatsApp: +39 339 2185191
// =========================================================================

const KALO_WHATSAPP = "393392185191";

const menuData = [
  // --- PIZZE GOURMET ---
  {
    id: 1,
    category: "pizze-gourmet",
    title: {
      it: "Oro di Naxos (Pistacchio & Burrata)",
      en: "Naxos Gold (Pistachio & Burrata)"
    },
    desc: {
      it: "Fior di latte campano fresco, fette di Mortadella Bologna I.G.P., generosa stracciatella di bufala, pesto puro di pistacchio di Bronte e granella tostata.",
      en: "Fresh Campania fior di latte, Bologna I.G.P. mortadella slices, generous buffalo stracciatella, pure Bronte pistachio pesto and toasted nuts."
    },
    priceVal: 14.50,
    priceStr: "€ 14.50",
    badge: { it: "Signature Kalò", en: "Kalò Signature" },
    allergens: { it: "Glutine, Lattosio, Frutta a guscio", en: "Gluten, Dairy, Tree Nuts" },
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "pizze-gourmet",
    title: {
      it: "Etna Fumante (Tartufo & Porcini)",
      en: "Smoky Etna (Truffle & Porcini)"
    },
    desc: {
      it: "Crema vellutata di porcini freschi dell'Etna, fior di latte, salsiccia a punta di coltello, perle di tartufo nero estivo e fonduta di caciocavallo ragusano DOP.",
      en: "Silky Mount Etna porcini cream, fior di latte, artisan knife-cut sausage, black summer truffle pearls and melted Ragusano DOP caciocavallo."
    },
    priceVal: 15.00,
    priceStr: "€ 15.00",
    badge: { it: "Specialità Gourmet", en: "Gourmet Specialty" },
    allergens: { it: "Glutine, Lattosio", en: "Gluten, Dairy" },
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "pizze-gourmet",
    title: {
      it: "Regina di Sicilia (Tonno & Cipolla Caramellata)",
      en: "Queen of Sicily (Tuna & Caramelized Onion)"
    },
    desc: {
      it: "Filetti di tonno rosso del Mediterraneo, cipolla rossa caramellata di Tropea, datterino giallo campano, capperi di Salina e origano selvatico di montagna.",
      en: "Mediterranean red tuna fillets, sweet Tropea caramelized red onion, yellow date tomatoes, Salina capers and wild mountain oregano."
    },
    priceVal: 14.00,
    priceStr: "€ 14.00",
    badge: { it: "Pescato Locale", en: "Local Catch" },
    allergens: { it: "Glutine, Pesce", en: "Gluten, Fish" },
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    category: "pizze-gourmet",
    title: {
      it: "La Taormina Spianata & 'Nduja",
      en: "Taormina Spianata & 'Nduja"
    },
    desc: {
      it: "Base fiordilatte con 'nduja di Spilinga sciolta in cottura, spianata piccante calabra, bocconcini di mozzarella di bufala a crudo e gocce di miele all'arancia.",
      en: "Fior di latte base with fiery Spilinga 'nduja, spicy Calabrian spianata salami, fresh cold buffalo mozzarella and orange blossom honey drops."
    },
    priceVal: 13.50,
    priceStr: "€ 13.50",
    badge: { it: "Gusto Intenso", en: "Bold & Spicy" },
    allergens: { it: "Glutine, Lattosio", en: "Gluten, Dairy" },
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80"
  },

  // --- PIZZE CLASSICHE ---
  {
    id: 5,
    category: "pizze-classiche",
    title: {
      it: "Margherita Verace Napoletana D.O.P.",
      en: "Authentic Neapolitan Margherita D.O.P."
    },
    desc: {
      it: "Pomodoro San Marzano dell'Agro Sarnese D.O.P., mozzarella di bufala campana fresca, foglie di basilico genovese ed olio extravergine d'oliva siciliano.",
      en: "San Marzano D.O.P. tomato sauce, fresh buffalo mozzarella from Campania, aromatic basil leaves and Sicilian extra virgin olive oil."
    },
    priceVal: 9.50,
    priceStr: "€ 9.50",
    badge: { it: "Lievitazione 48h", en: "48h Proofed" },
    allergens: { it: "Glutine, Lattosio", en: "Gluten, Dairy" },
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    category: "pizze-classiche",
    title: {
      it: "Marinara ai Quattro Pomodori",
      en: "Four-Tomato Marinara"
    },
    desc: {
      it: "Pomodoro San Marzano, datterino rosso dolce, datterino giallo del Vesuvio, fettine d'aglio rosso di Nubia, origano selvatico e olio EVO.",
      en: "San Marzano sauce, sweet red & yellow Vesuvian date tomatoes, Nubia red garlic slivers, fragrant wild oregano and premium EVOO."
    },
    priceVal: 8.00,
    priceStr: "€ 8.00",
    badge: { it: "100% Vegetale", en: "Plant-Based" },
    allergens: { it: "Glutine", en: "Gluten" },
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    category: "pizze-classiche",
    title: {
      it: "Diavola Artigianale",
      en: "Artisanal Spicy Diavola"
    },
    desc: {
      it: "Pomodoro San Marzano D.O.P., fior di latte campano, salame piccante a grana fine stagionato a regola d'arte e peperoncino calabrese fresco.",
      en: "San Marzano D.O.P. tomato, fior di latte mozzarella, artisanal spicy dry-cured salami and fresh chili flakes."
    },
    priceVal: 10.50,
    priceStr: "€ 10.50",
    badge: { it: "Tradizionale", en: "Traditional" },
    allergens: { it: "Glutine, Lattosio", en: "Gluten, Dairy" },
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    category: "pizze-classiche",
    title: {
      it: "Capricciosa Naxiota",
      en: "Naxos Capricciosa"
    },
    desc: {
      it: "Pomodoro, fior di latte, prosciutto cotto alta qualità senza polifosfati, funghi freschi champignon saltati, carciofini alla brace e olive Nocellara del Belice.",
      en: "Tomato sauce, mozzarella, high-quality ham, sautéed champignon mushrooms, fire-roasted artichokes and Nocellara olives."
    },
    priceVal: 11.50,
    priceStr: "€ 11.50",
    badge: { it: "Ricca & Rustica", en: "Rich & Classic" },
    allergens: { it: "Glutine, Lattosio", en: "Gluten, Dairy" },
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=80"
  },

  // --- SFIZI & FRITTI ---
  {
    id: 9,
    category: "sfizi-fritti",
    title: {
      it: "Tris di Montanarine Napoletane Fritte",
      en: "Trio of Fried Neapolitan Montanarine"
    },
    desc: {
      it: "Tre pizzette fritte soffici: 1) Pomodoro cotto e ricotta salata siciliana; 2) Mortadella e pesto di pistacchio; 3) Stracciatella e alici di Cetara.",
      en: "Three airy fried mini-pizzas: 1) Slow tomato sauce & salted ricotta; 2) Mortadella & pistachio pesto; 3) Stracciatella & Cetara anchovies."
    },
    priceVal: 9.00,
    priceStr: "€ 9.00",
    badge: { it: "Imperdibile", en: "Must Try" },
    allergens: { it: "Glutine, Lattosio, Pesce, Frutta a guscio", en: "Gluten, Dairy, Fish, Tree Nuts" },
    image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    category: "sfizi-fritti",
    title: {
      it: "Arancinetti Gourmet dello Stretto (4 pz)",
      en: "Gourmet Sicilian Mini Arancini (4 pcs)"
    },
    desc: {
      it: "Degustazione di arancini artigianali dorati: 2 con ragù tradizionale di vitello e piselli, 2 con pistacchio di Bronte e provola affumicata dei Nebrodi.",
      en: "Crispy hand-rolled arancini: 2 with traditional beef ragù and peas, 2 with rich Bronte pistachio cream and smoked Nebrodi provola."
    },
    priceVal: 7.50,
    priceStr: "€ 7.50",
    badge: { it: "Fatto a Mano", en: "Handcrafted" },
    allergens: { it: "Glutine, Lattosio, Frutta a guscio", en: "Gluten, Dairy, Tree Nuts" },
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    category: "sfizi-fritti",
    title: {
      it: "Frittatina di Pasta alla Sorrentina",
      en: "Sorrento Crispy Pasta Frittatina"
    },
    desc: {
      it: "Bucatini trafilati al bronzo mantecati con besciamella profumata alla noce moscata, provola dolce filante, guanciale croccante e panatura dorata.",
      en: "Bronze-die bucatini wrapped in silky nutmeg béchamel, stringy smoked provola cheese and crispy cured pork cheek in a golden crunch crust."
    },
    priceVal: 6.50,
    priceStr: "€ 6.50",
    badge: { it: "Street Food D.O.C.", en: "Authentic Street Food" },
    allergens: { it: "Glutine, Lattosio", en: "Gluten, Dairy" },
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },

  // --- LOUNGE & COCKTAILS ---
  {
    id: 12,
    category: "lounge-cocktails",
    title: {
      it: "Kalò Smoked Negroni",
      en: "Kalò Smoked Negroni"
    },
    desc: {
      it: "Gin siciliano all'arancia rossa IGP, Campari infuso con rosmarino dell'Etna, Vermouth rosso piemontese, affumicatura espressa con trucioli d'ulivo.",
      en: "Sicilian blood orange gin, Campari infused with Etna rosemary, red Vermouth, served with olive wood table smoke."
    },
    priceVal: 10.00,
    priceStr: "€ 10.00",
    badge: { it: "Signature Mixology", en: "Signature Cocktail" },
    allergens: { it: "Alcol 22% Vol.", en: "Alcohol 22% Vol." },
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    category: "lounge-cocktails",
    title: {
      it: "Naxos Sunset Spritz",
      en: "Naxos Sunset Spritz"
    },
    desc: {
      it: "Aperol, Italicus rosolio di bergamotto, Prosecco Superiore di Valdobbiadene DOCG, splash di soda agli agrumi di Sicilia, mentuccia e arancia essiccata.",
      en: "Aperol, Italicus bergamot liqueur, Valdobbiadene DOCG Prosecco, splash of Sicilian citrus soda, fresh mint and dehydrated orange slice."
    },
    priceVal: 8.50,
    priceStr: "€ 8.50",
    badge: { it: "Aperitivo Iconico", en: "Iconic Aperitivo" },
    allergens: { it: "Alcol 11% Vol.", en: "Alcohol 11% Vol." },
    image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    category: "lounge-cocktails",
    title: {
      it: "Etna Mule Rinfrescante",
      en: "Mount Etna Refreshing Mule"
    },
    desc: {
      it: "Vodka premium, succo di lime fresco spremuto, ginger beer speziata artigianale e cordiale al fico d'India siciliano con rametto di menta fresca.",
      en: "Premium vodka, fresh pressed lime juice, artisanal spicy ginger beer and Sicilian prickly pear cordial garnished with fresh mint."
    },
    priceVal: 9.50,
    priceStr: "€ 9.50",
    badge: { it: "Fresco & Aromatico", en: "Crisp & Fresh" },
    allergens: { it: "Alcol 14% Vol.", en: "Alcohol 14% Vol." },
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    category: "lounge-cocktails",
    title: {
      it: "Birra Artigianale dello Stretto alla Spina (0.40L)",
      en: "Artisanal Craft Beer on Tap (0.40L)"
    },
    desc: {
      it: "Bionda non pastorizzata né filtrata prodotta in Sicilia, con profumo delicato di malto d'orzo, luppoli nobili e note floreali.",
      en: "Unfiltered, unpasteurized Sicilian craft lager, delicate aromas of selected barley malts, noble hops and refreshing floral finish."
    },
    priceVal: 6.00,
    priceStr: "€ 6.00",
    badge: { it: "Artigianale Locale", en: "Local Craft" },
    allergens: { it: "Glutine, Alcol 5.2% Vol.", en: "Gluten, Alcohol 5.2% Vol." },
    image: "https://images.unsplash.com/photo-1608270190807-6c07aa4c4ff0?auto=format&fit=crop&w=800&q=80"
  },

  // --- DESSERT ARTIGIANALI ---
  {
    id: 16,
    category: "dessert",
    title: {
      it: "Cannolo Scomposto con Ricotta dei Nebrodi",
      en: "Deconstructed Cannolo with Nebrodi Ricotta"
    },
    desc: {
      it: "Cialda fritta artigianale allo strutto spezzettata, mousse vellutata di pura ricotta dolce di pecora, perle di cioccolato di Modica IGP e pistacchio di Bronte.",
      en: "Crispy artisan cannolo waffle pieces layered with sweet sheep's milk ricotta mousse, Modica chocolate pearls and toasted Bronte pistachios."
    },
    priceVal: 6.00,
    priceStr: "€ 6.00",
    badge: { it: "Fatto al Momento", en: "Freshly Made" },
    allergens: { it: "Glutine, Lattosio, Frutta a guscio", en: "Gluten, Dairy, Tree Nuts" },
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 17,
    category: "dessert",
    title: {
      it: "Babà al Rum Invecchiato & Crema Pasticcera",
      en: "Aged Rum Babà with Pastry Cream"
    },
    desc: {
      it: "Lievitato soffice secondo la ricetta partenopea, imbevuto di rum ambrato caraibico invecchiato, ciuffo di crema chantilly e amarena Fabbri.",
      en: "Traditional Neapolitan sponge soaked in aged Caribbean amber rum, topped with delicate chantilly cream and glazed wild black cherry."
    },
    priceVal: 6.50,
    priceStr: "€ 6.50",
    badge: { it: "Tradizione Pura", en: "Classic Neapolitan" },
    allergens: { it: "Glutine, Lattosio, Uova, Alcol", en: "Gluten, Dairy, Eggs, Alcohol" },
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 18,
    category: "dessert",
    title: {
      it: "Tiramisù Morbido al Pistacchio di Bronte",
      en: "Soft Pistachio Tiramisù"
    },
    desc: {
      it: "Savoiardi sardi bagnati al caffè espresso arabica, soffice crema al mascarpone montata a freddo e cascata di crema spalmabile al pistacchio.",
      en: "Sardinian ladyfingers dipped in rich espresso, fluffy fresh mascarpone cream and warm decadent Bronte pistachio drizzle."
    },
    priceVal: 6.50,
    priceStr: "€ 6.50",
    badge: { it: "Il Più Amato", en: "Guest Favorite" },
    allergens: { it: "Glutine, Lattosio, Uova, Frutta a guscio", en: "Gluten, Dairy, Eggs, Tree Nuts" },
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80"
  }
];

// App State
let currentLang = 'it';
let activeCategory = 'all';
let currentTable = 'Tavolo 08';
const cart = {}; // dishId: quantity

// DOM References
const menuGrid = document.getElementById('menu-grid');
const searchInput = document.getElementById('menu-search');
const clearSearchBtn = document.getElementById('clear-search');
const categoryBar = document.getElementById('category-bar');
const catPills = document.querySelectorAll('.cat-pill');
const tableChips = document.querySelectorAll('.table-chip');

// Floating Order Bar & Tray
const floatingBar = document.getElementById('floating-bar');
const orderCountBadge = document.getElementById('order-count');
const orderTotalPriceEl = document.getElementById('order-total-price');
const openTrayBtn = document.getElementById('open-tray-btn');
const trayModal = document.getElementById('tray-modal');
const trayBackdrop = document.getElementById('tray-backdrop');
const closeTrayBtn = document.getElementById('close-tray');
const trayItemsList = document.getElementById('tray-items');
const trayTotalVal = document.getElementById('tray-total-val');
const sendTrayWaBtn = document.getElementById('send-tray-whatsapp');
const trayCurrentTableEl = document.getElementById('tray-current-table');
const mockupTableLabel = document.getElementById('mockup-table-label');

// QR Simulation Modal
const qrDialog = document.getElementById('qr-dialog');
const qrModalBtn = document.getElementById('qr-modal-btn');
const dialogCloseBtn = document.getElementById('dialog-close');
const btnTestQrStand = document.getElementById('btn-test-qr-stand');

// Lightbox Modal
const imgLightbox = document.getElementById('img-lightbox');
const lightboxBackdrop = document.getElementById('lightbox-backdrop');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxBadge = document.getElementById('lightbox-badge');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');
const lightboxPrice = document.getElementById('lightbox-price');
const lightboxAddBtn = document.getElementById('lightbox-add-btn');
let currentLightboxDishId = null;

// Reservation Form
const bookingForm = document.getElementById('booking-form');

// Language Switch
const langItBtn = document.getElementById('lang-it');
const langEnBtn = document.getElementById('lang-en');

// =========================================================================
// RENDER MENU CARDS
// =========================================================================
function renderMenu() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  menuGrid.innerHTML = '';

  const filteredDishes = menuData.filter(dish => {
    const matchesCategory = activeCategory === 'all' || dish.category === activeCategory;
    const title = dish.title[currentLang].toLowerCase();
    const desc = dish.desc[currentLang].toLowerCase();
    const matchesSearch = title.includes(searchTerm) || desc.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  if (filteredDishes.length === 0) {
    menuGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 8px;">Nessun piatto trovato per "<strong>${escapeHtml(searchTerm)}</strong>"</p>
        <span style="font-size: 0.9rem; color: var(--text-dim);">Prova a cercare un altro ingrediente o seleziona una categoria sopra.</span>
      </div>
    `;
    return;
  }

  filteredDishes.forEach(dish => {
    const qty = cart[dish.id] || 0;
    const card = document.createElement('div');
    card.className = 'dish-card';
    card.setAttribute('data-id', dish.id);

    card.innerHTML = `
      <div class="dish-media" onclick="openLightbox(${dish.id})">
        <img src="${dish.image}" alt="${dish.title[currentLang]}" class="dish-img" loading="lazy">
        <span class="dish-badge-pill">${dish.badge[currentLang]}</span>
        <span class="dish-price-tag">${dish.priceStr}</span>
        <div class="dish-zoom-hint" title="Ingrandisci foto">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
        </div>
      </div>
      <div class="dish-body">
        <div>
          <h3 class="dish-title">${dish.title[currentLang]}</h3>
          <p class="dish-description">${dish.desc[currentLang]}</p>
        </div>
        <div class="dish-meta-bottom">
          <span class="dish-allergens-tag">Allergeni: ${dish.allergens[currentLang]}</span>
          <div class="dish-action-group" id="action-group-${dish.id}">
            ${renderActionGroup(dish.id, qty)}
          </div>
        </div>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

function renderActionGroup(dishId, qty) {
  if (qty > 0) {
    return `
      <div class="dish-qty-ctrls">
        <button class="qty-btn" onclick="modifyQty(${dishId}, -1)" title="Diminuisci">−</button>
        <span class="qty-display">${qty}</span>
        <button class="qty-btn" onclick="modifyQty(${dishId}, 1)" title="Aumenta">+</button>
      </div>
    `;
  } else {
    return `
      <button class="btn-add-tray" onclick="modifyQty(${dishId}, 1)">
        <span>+ Aggiungi</span>
      </button>
    `;
  }
}

// Modify Cart Quantity
function modifyQty(dishId, delta) {
  const current = cart[dishId] || 0;
  const next = current + delta;
  if (next <= 0) {
    delete cart[dishId];
  } else {
    cart[dishId] = next;
  }

  // Update card UI locally
  const group = document.getElementById(`action-group-${dishId}`);
  if (group) {
    group.innerHTML = renderActionGroup(dishId, cart[dishId] || 0);
  }

  updateFloatingBar();
  renderTrayItems();
}

// =========================================================================
// FLOATING BAR & TRAY LOGIC
// =========================================================================
function updateFloatingBar() {
  const itemKeys = Object.keys(cart);
  let totalCount = 0;
  let totalPrice = 0;

  itemKeys.forEach(id => {
    const qty = cart[id];
    const dish = menuData.find(d => d.id === parseInt(id));
    if (dish && qty > 0) {
      totalCount += qty;
      totalPrice += (dish.priceVal * qty);
    }
  });

  orderCountBadge.textContent = totalCount;

  if (totalCount > 0) {
    orderTotalPriceEl.innerHTML = `<strong>€ ${totalPrice.toFixed(2)}</strong> stimato • Tocca per visualizzare`;
    floatingBar.classList.add('visible');
  } else {
    orderTotalPriceEl.textContent = currentLang === 'it' ? "Tocca i piatti per comporre l'ordine" : "Tap items to start order";
    floatingBar.classList.remove('visible');
    trayModal.classList.remove('active');
  }

  trayTotalVal.textContent = `€ ${totalPrice.toFixed(2)}`;
}

function renderTrayItems() {
  const itemKeys = Object.keys(cart);
  if (itemKeys.length === 0) {
    trayItemsList.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 6px;">Nessuna portata ancora selezionata.</p>
        <span style="font-size: 0.85rem; color: var(--text-dim);">Sfoglia la carta e premi "+ Aggiungi" sui piatti per comporre il tuo ordine!</span>
      </div>
    `;
    trayTotalVal.textContent = "€ 0.00";
    return;
  }

  let html = '';
  let totalPrice = 0;

  itemKeys.forEach(id => {
    const qty = cart[id];
    const dish = menuData.find(d => d.id === parseInt(id));
    if (dish && qty > 0) {
      const lineTotal = dish.priceVal * qty;
      totalPrice += lineTotal;
      html += `
        <div class="tray-item-row">
          <div class="tray-item-info">
            <strong>${dish.title[currentLang]}</strong>
            <span>${qty}x (€ ${dish.priceVal.toFixed(2)}) = <strong>€ ${lineTotal.toFixed(2)}</strong></span>
          </div>
          <div class="tray-item-actions">
            <div class="dish-qty-ctrls" style="transform: scale(0.9);">
              <button class="qty-btn" onclick="modifyQty(${dish.id}, -1)">−</button>
              <span class="qty-display">${qty}</span>
              <button class="qty-btn" onclick="modifyQty(${dish.id}, 1)">+</button>
            </div>
            <button class="tray-remove-btn" onclick="modifyQty(${dish.id}, -${qty})">Rimuovi</button>
          </div>
        </div>
      `;
    }
  });

  trayItemsList.innerHTML = html;
  trayTotalVal.textContent = `€ ${totalPrice.toFixed(2)}`;
}

// Open / Close Tray
openTrayBtn.addEventListener('click', () => {
  renderTrayItems();
  trayCurrentTableEl.textContent = `${currentTable} • Kalò Pizza & Lounge Bar`;
  trayModal.classList.add('active');
});

const trayTriggerSummary = document.getElementById('tray-trigger-summary');
if (trayTriggerSummary) {
  trayTriggerSummary.addEventListener('click', () => {
    renderTrayItems();
    trayCurrentTableEl.textContent = `${currentTable} • Kalò Pizza & Lounge Bar`;
    trayModal.classList.add('active');
  });
}

closeTrayBtn.addEventListener('click', () => {
  trayModal.classList.remove('active');
});

trayBackdrop.addEventListener('click', () => {
  trayModal.classList.remove('active');
});

// Send Tray WhatsApp Order
sendTrayWaBtn.addEventListener('click', () => {
  const itemKeys = Object.keys(cart);
  if (itemKeys.length === 0) {
    alert("Seleziona almeno un piatto prima di inviare l'ordine!");
    return;
  }

  let itemsText = '';
  let grandTotal = 0;

  itemKeys.forEach(id => {
    const qty = cart[id];
    const dish = menuData.find(d => d.id === parseInt(id));
    if (dish && qty > 0) {
      const lineTotal = dish.priceVal * qty;
      grandTotal += lineTotal;
      itemsText += `• ${qty}x ${dish.title[currentLang]} (€ ${dish.priceVal.toFixed(2)}) = € ${lineTotal.toFixed(2)}\n`;
    }
  });

  const message = 
`Buonasera Kalò Pizza & Lounge Bar! 🍕🍸
Vorrei inviare la seguente comanda per *${currentTable}*:

${itemsText}
💰 *Totale Stimato: € ${grandTotal.toFixed(2)}*

Posizione: Via Stracina 16, Giardini Naxos (ME)
Richiesta inviata tramite il Menù Digitale Interattivo.`;

  const waUrl = `https://wa.me/${KALO_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
});

// =========================================================================
// TABLE SELECTOR CHIPS
// =========================================================================
tableChips.forEach(chip => {
  chip.addEventListener('click', () => {
    tableChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentTable = chip.getAttribute('data-table');
    if (mockupTableLabel) {
      mockupTableLabel.textContent = currentTable.toUpperCase();
    }
    if (trayCurrentTableEl) {
      trayCurrentTableEl.textContent = `${currentTable} • Kalò Pizza & Lounge Bar`;
    }
  });
});

// =========================================================================
// CATEGORY FILTERS & SEARCH
// =========================================================================
catPills.forEach(pill => {
  pill.addEventListener('click', () => {
    catPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    activeCategory = pill.getAttribute('data-cat');
    renderMenu();
  });
});

searchInput.addEventListener('input', () => {
  if (searchInput.value.trim().length > 0) {
    clearSearchBtn.style.display = 'block';
  } else {
    clearSearchBtn.style.display = 'none';
  }
  renderMenu();
});

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  clearSearchBtn.style.display = 'none';
  renderMenu();
});

// =========================================================================
// LIGHTBOX FULLSCREEN IMAGE PREVIEW
// =========================================================================
window.openLightbox = function(dishId) {
  const dish = menuData.find(d => d.id === dishId);
  if (!dish) return;

  currentLightboxDishId = dishId;
  lightboxImg.src = dish.image;
  lightboxBadge.textContent = dish.badge[currentLang];
  lightboxTitle.textContent = dish.title[currentLang];
  lightboxDesc.textContent = dish.desc[currentLang];
  lightboxPrice.textContent = dish.priceStr;

  const currentQty = cart[dishId] || 0;
  lightboxAddBtn.textContent = currentQty > 0 ? `Nel Carrello (${currentQty}) +1` : `+ Aggiungi all'Ordine`;

  imgLightbox.classList.add('active');
};

lightboxClose.addEventListener('click', () => {
  imgLightbox.classList.remove('active');
});

lightboxBackdrop.addEventListener('click', () => {
  imgLightbox.classList.remove('active');
});

lightboxAddBtn.addEventListener('click', () => {
  if (currentLightboxDishId) {
    modifyQty(currentLightboxDishId, 1);
    const newQty = cart[currentLightboxDishId] || 0;
    lightboxAddBtn.textContent = `Nel Carrello (${newQty}) +1`;
  }
});

// =========================================================================
// QR MODAL SIMULATION
// =========================================================================
qrModalBtn.addEventListener('click', () => {
  qrDialog.classList.add('active');
});

if (btnTestQrStand) {
  btnTestQrStand.addEventListener('click', () => {
    qrDialog.classList.add('active');
  });
}

dialogCloseBtn.addEventListener('click', () => {
  qrDialog.classList.remove('active');
});

qrDialog.addEventListener('click', (e) => {
  if (e.target === qrDialog) {
    qrDialog.classList.remove('active');
  }
});

// =========================================================================
// RESERVATION FORM WHATSAPP
// =========================================================================
bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('b-name').value.trim();
  const date = document.getElementById('b-date').value;
  const time = document.getElementById('b-time').value;
  const guests = document.getElementById('b-guests').value;
  const phone = document.getElementById('b-phone').value.trim();
  const notes = document.getElementById('b-notes').value.trim();

  // Check if chosen day is Wednesday (day 3)
  if (date) {
    const selectedDate = new Date(date);
    if (selectedDate.getDay() === 3) {
      const proceed = confirm(
        "Nota: Il mercoledì la sala è chiusa al pubblico per riposo settimanale.\n" +
        "Sono attivi i servizi di Asporto e Domicilio dalle 17:30 alle 22:00.\n\n" +
        "Vuoi comunque inviare il messaggio di richiesta su WhatsApp?"
      );
      if (!proceed) return;
    }
  }

  const msg = 
`Buonasera Kalò Pizza & Lounge Bar!
Desidero richiedere la prenotazione di un tavolo:

👤 *Nome:* ${name}
📅 *Data:* ${date}
⏰ *Orario:* ${time} (Sala: Gio-Mar 19:00 - 23:00)
👥 *Ospiti:* ${guests}
📞 *Cellulare:* ${phone}
${notes ? `📝 *Note particolari:* ${notes}` : ''}

Attendo gentile conferma di disponibilità. Grazie!`;

  const waUrl = `https://wa.me/${KALO_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
});

// Auto-fill today's date into the booking date picker
const dateInput = document.getElementById('b-date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.value = today;
  dateInput.min = today;
}

// =========================================================================
// BILINGUAL LANGUAGE SWITCH (IT / EN)
// =========================================================================
langItBtn.addEventListener('click', () => {
  setLanguage('it');
});

langEnBtn.addEventListener('click', () => {
  setLanguage('en');
});

function setLanguage(lang) {
  currentLang = lang;
  if (lang === 'it') {
    langItBtn.classList.add('active');
    langEnBtn.classList.remove('active');

    document.getElementById('announcement-text').textContent = "🛵 Domicilio & Asporto 17:30–22:00 • 🍕 Sala 19:00–23:00 (Mercoledì Chiuso) • Giardini Naxos";
    document.getElementById('nav-menu').textContent = "Menù Digitale";
    document.getElementById('nav-qr').textContent = "QR al Tavolo";
    document.getElementById('nav-lounge').textContent = "Lounge Bar";
    document.getElementById('nav-booking').textContent = "Prenotazioni";
    document.getElementById('btn-qr-label').textContent = "QR Tavolo";
    document.getElementById('btn-nav-reserve').querySelector('span').textContent = "Prenota Tavolo";

    document.getElementById('hero-title').innerHTML = `La Vera Pizza Napoletana <br><span class="gold-gradient">incontra l'Arte del Lounge.</span>`;
    document.getElementById('hero-desc').textContent = "Farine biologiche selezionate, lievitazione naturale di 48 ore a temperatura controllata e pomodoro San Marzano D.O.P. per una leggerezza senza pari, accompagnati dalla mixology d'autore affacciata sulla costa di Naxos.";
    document.getElementById('hero-btn-menu').querySelector('span').textContent = "Esplora la Carta Digitale";

    document.getElementById('menu-pretitle').textContent = "ESPERIENZA SMARTPHONE & TAVOLO";
    document.getElementById('menu-main-title').textContent = "Il Menù Digitale Kalò";
    document.getElementById('menu-main-desc').textContent = "Fotografie ad alta definizione, allergeni dettagliati, ingredienti D.O.P. e selezione portate istantanea con invio diretto via WhatsApp.";
    document.getElementById('menu-search').placeholder = "Cerca pizza, cocktail o ingrediente (es. 'Pistacchio', 'Bufala', 'Negroni')...";

    document.getElementById('order-bar-title').textContent = "Selezione Portate al Tavolo";
    document.getElementById('open-tray-btn').textContent = "Vedi Ordine";
    document.getElementById('tray-title-text').textContent = "La Tua Selezione al Tavolo";
    document.getElementById('tray-total-label').textContent = "Totale Stimato:";
    document.getElementById('tray-btn-text').textContent = "Invia Ordine su WhatsApp al Locale";

  } else {
    langEnBtn.classList.add('active');
    langItBtn.classList.remove('active');

    document.getElementById('announcement-text').textContent = "🛵 Delivery & Takeaway 5:30–10:00 PM • 🍕 Dining 7:00–11:00 PM (Closed Wed) • Giardini Naxos";
    document.getElementById('nav-menu').textContent = "Digital Menu";
    document.getElementById('nav-qr').textContent = "Table QR";
    document.getElementById('nav-lounge').textContent = "Lounge Bar";
    document.getElementById('nav-booking').textContent = "Reservations";
    document.getElementById('btn-qr-label').textContent = "Table QR";
    document.getElementById('btn-nav-reserve').querySelector('span').textContent = "Book Table";

    document.getElementById('hero-title').innerHTML = `Authentic Neapolitan Pizza <br><span class="gold-gradient">meets the Art of Cocktail Lounge.</span>`;
    document.getElementById('hero-desc').textContent = "Selected organic flours, 48-hour natural proofing, and San Marzano D.O.P. tomatoes for unmatched airy digestibility, paired with signature mixology along the Naxos coast.";
    document.getElementById('hero-btn-menu').querySelector('span').textContent = "Explore Digital Menu";

    document.getElementById('menu-pretitle').textContent = "SMARTPHONE & TABLE EXPERIENCE";
    document.getElementById('menu-main-title').textContent = "Kalò Digital Menu";
    document.getElementById('menu-main-desc').textContent = "High-definition photography, allergen guides, D.O.P. certified ingredients, and instant WhatsApp table ordering.";
    document.getElementById('menu-search').placeholder = "Search pizza, cocktail or ingredient (e.g. 'Pistachio', 'Burrata', 'Negroni')...";

    document.getElementById('order-bar-title').textContent = "Your Table Selection";
    document.getElementById('open-tray-btn').textContent = "View Order";
    document.getElementById('tray-title-text').textContent = "Your Selected Dishes";
    document.getElementById('tray-total-label').textContent = "Estimated Total:";
    document.getElementById('tray-btn-text').textContent = "Send Order via WhatsApp to Staff";
  }

  renderMenu();
  updateFloatingBar();
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// Initial Render
renderMenu();
updateFloatingBar();
console.log("Kalò Pizza & Lounge Bar digital engine initialized successfully.");

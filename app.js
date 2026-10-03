// Menu Data for Restaurant & Pizza Demo
const menuData = [
  {
    id: 1,
    category: "antipasti",
    title: { it: "Tris di Montanare Fritte", en: "Fried Montanare Trio" },
    desc: {
      it: "Mini pizze fritte con pomodoro San Marzano, parmigiano reggiano 24 mesi e basilico fresco.",
      en: "Crispy fried mini pizzas with San Marzano tomato, 24m aged Parmesan, and fresh basil."
    },
    price: "€ 7.50",
    badge: "Specialità",
    allergens: "Glutine, Lattosio"
  },
  {
    id: 2,
    category: "antipasti",
    title: { it: "Tagliere di Salumi e Formaggi dei Nebrodi", en: "Nebrodi Charcuterie & Cheese Board" },
    desc: {
      it: "Prosciutto crudo di suino nero dei Nebrodi, provola fresca dei monti, pecorino e focaccina calda.",
      en: "Artisanal Black Pig cured ham from Nebrodi, mountain provola cheese, and warm focaccia."
    },
    price: "€ 14.00",
    badge: "Km Zero",
    allergens: "Lattosio, Glutine"
  },
  {
    id: 3,
    category: "pizze",
    title: { it: "Regina Margherita Verace D.O.P.", en: "Authentic Neapolitan Margherita" },
    desc: {
      it: "Pomodoro San Marzano dell'Agro Sarnese-Nocerino D.O.P., mozzarella di bufala campana e basilico.",
      en: "D.O.P. San Marzano tomatoes, fresh Buffalo mozzarella from Campania, EVOO, and fresh basil."
    },
    price: "€ 9.00",
    badge: "Classico",
    allergens: "Glutine, Lattosio"
  },
  {
    id: 4,
    category: "pizze",
    title: { it: "Pistacchiosa & Mortadella", en: "Pistachio & Mortadella Gourmet Pizza" },
    desc: {
      it: "Fior di latte, mortadella artigianale di Bologna, stracciatella pugliese e pesto puro di pistacchio di Bronte.",
      en: "Fior di latte, artisanal mortadella, creamy buffalo stracciatella, pure Bronte pistachio pesto."
    },
    price: "€ 13.50",
    badge: "Top Seller",
    allergens: "Glutine, Lattosio, Frutta a guscio"
  },
  {
    id: 5,
    category: "pizze",
    title: { it: "Naxos Piccante", en: "Spicy Naxos Pizza" },
    desc: {
      it: "Pomodoro bio, mozzarella, salame piccante locale, nduja calabrese e cipolla rossa caramellata.",
      en: "Organic tomato, mozzarella, spicy artisan salami, Calabrian nduja, and caramelized red onion."
    },
    price: "€ 11.50",
    badge: "Piccante",
    allergens: "Glutine, Lattosio"
  },
  {
    id: 6,
    category: "primi",
    title: { it: "Busiate con Gambero Rosso e Pistacchio", en: "Busiate with Red Prawns & Pistachio" },
    desc: {
      it: "Pasta tipica trafilata al bronzo, tartare di gambero rosso e crema vellutata di pistacchio di Bronte.",
      en: "Bronze-die Sicilian pasta, red prawn tartare, and velvety Bronte pistachio cream."
    },
    price: "€ 16.50",
    badge: "Pescato Locale",
    allergens: "Glutine, Crostacei, Frutta a guscio"
  },
  {
    id: 7,
    category: "dolci",
    title: { it: "Cannolo Siciliano Espresso", en: "Freshly Filled Sicilian Cannolo" },
    desc: {
      it: "Cialda artigianale croccante riempita al momento con pura ricotta zuccherata di pecora e gocce di cioccolato.",
      en: "Crisp artisanal shell filled on the spot with sweet sheep's ricotta and dark chocolate chips."
    },
    price: "€ 4.50",
    badge: "Fatto in Casa",
    allergens: "Glutine, Lattosio"
  }
];

let currentLang = 'it';
let activeCategory = 'all';

const menuGrid = document.getElementById('menu-grid');
const searchInput = document.getElementById('menu-search');
const categoryPills = document.querySelectorAll('.pill-btn');
const qrModal = document.getElementById('qr-modal');
const qrModalBtn = document.getElementById('qr-modal-btn');
const modalClose = document.getElementById('modal-close');
const resForm = document.getElementById('reservation-form');
const langIt = document.getElementById('lang-it');
const langEn = document.getElementById('lang-en');

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
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p>Nessuna proposta trovata con i filtri selezionati.</p>
      </div>
    `;
    return;
  }

  filteredDishes.forEach(dish => {
    const card = document.createElement('div');
    card.className = 'dish-card';
    card.innerHTML = `
      <div>
        <div class="dish-header">
          <h3 class="dish-title">${dish.title[currentLang]}</h3>
          <span class="dish-price">${dish.price}</span>
        </div>
        <p class="dish-desc">${dish.desc[currentLang]}</p>
      </div>
      <div class="dish-footer">
        <span class="dish-badge">${dish.badge}</span>
        <span class="dish-allergens">${dish.allergens}</span>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

categoryPills.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryPills.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.getAttribute('data-category');
    renderMenu();
  });
});

searchInput.addEventListener('input', renderMenu);

langIt.addEventListener('click', () => {
  currentLang = 'it';
  langIt.classList.add('active');
  langEn.classList.remove('active');
  renderMenu();
});

langEn.addEventListener('click', () => {
  currentLang = 'en';
  langEn.classList.add('active');
  langIt.classList.remove('active');
  renderMenu();
});

qrModalBtn.addEventListener('click', () => {
  qrModal.classList.add('active');
});

modalClose.addEventListener('click', () => {
  qrModal.classList.remove('active');
});

qrModal.addEventListener('click', (e) => {
  if (e.target === qrModal) {
    qrModal.classList.remove('active');
  }
});

resForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('res-name').value;
  const date = document.getElementById('res-date').value;
  const time = document.getElementById('res-time').value;
  const guests = document.getElementById('res-guests').value;
  const phone = document.getElementById('res-phone').value;
  const notes = document.getElementById('res-notes').value;

  const msg = `Salve! Vorrei richiedere la prenotazione di un tavolo:\n` +
    `👤 Nome: ${name}\n` +
    `📅 Data: ${date}\n` +
    `⏰ Orario: ${time}\n` +
    `👥 Persone: ${guests}\n` +
    `📞 Recapito: ${phone}\n` +
    (notes ? `📝 Note: ${notes}` : '');

  const waUrl = `https://wa.me/393392185191?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
});

renderMenu();

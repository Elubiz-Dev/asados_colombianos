/**
 * Asados Colombianos - Lógica de la Aplicación y Carta Digital
 */

document.addEventListener("DOMContentLoaded", () => {
  // Estado de la aplicación
  const state = {
    activeCategory: "todos",
    viewMode: "cards", // 'cards' | 'carta' | 'galeria'
    searchTerm: "",
    cart: [],
    selectedPhone: RESTAURANT_INFO.phones[0].number,
    selectedItemForModal: null,
    videoMuted: true
  };

  // Referencias al DOM
  const elements = {
    categoryTabs: document.getElementById("categoryTabs"),
    menuGrid: document.getElementById("menuGrid"),
    cartaView: document.getElementById("cartaView"),
    galeriaView: document.getElementById("galeriaView"),
    viewModeBtns: document.querySelectorAll("[data-view-mode]"),
    searchInput: document.getElementById("searchInput"),
    clearSearchBtn: document.getElementById("clearSearchBtn"),
    cartCountBadges: document.querySelectorAll(".cart-count-badge"),
    cartTotalDisplay: document.getElementById("cartTotalDisplay"),
    cartDrawer: document.getElementById("cartDrawer"),
    cartDrawerBackdrop: document.getElementById("cartDrawerBackdrop"),
    cartItemsList: document.getElementById("cartItemsList"),
    cartEmptyState: document.getElementById("cartEmptyState"),
    cartFilledState: document.getElementById("cartFilledState"),
    cartDrawerTotal: document.getElementById("cartDrawerTotal"),
    openCartBtns: document.querySelectorAll(".open-cart-btn"),
    closeCartBtn: document.getElementById("closeCartBtn"),
    checkoutWhatsappBtn: document.getElementById("checkoutWhatsappBtn"),
    clientNameInput: document.getElementById("clientName"),
    clientAddressInput: document.getElementById("clientAddress"),
    clientNotesInput: document.getElementById("clientNotes"),
    phoneSelector: document.getElementById("phoneSelector"),
    
    // Lightbox modal
    lightboxModal: document.getElementById("lightboxModal"),
    lightboxBackdrop: document.getElementById("lightboxBackdrop"),
    closeLightboxBtn: document.getElementById("closeLightboxBtn"),
    lightboxImage: document.getElementById("lightboxImage"),
    lightboxTitle: document.getElementById("lightboxTitle"),
    lightboxCategory: document.getElementById("lightboxCategory"),
    lightboxBadge: document.getElementById("lightboxBadge"),
    lightboxDesc: document.getElementById("lightboxDesc"),
    lightboxAccompaniments: document.getElementById("lightboxAccompaniments"),
    lightboxPortionsContainer: document.getElementById("lightboxPortionsContainer"),
    lightboxPortionsSelect: document.getElementById("lightboxPortionsSelect"),
    lightboxPrice: document.getElementById("lightboxPrice"),
    lightboxAddToCartBtn: document.getElementById("lightboxAddToCartBtn"),
    lightboxDirectWaBtn: document.getElementById("lightboxDirectWaBtn"),

    // Video
    heroVideo: document.getElementById("heroVideo"),
    videoSoundToggle: document.getElementById("videoSoundToggle"),
    videoPlayToggle: document.getElementById("videoPlayToggle")
  };

  // Formateador de moneda COP
  const formatCOP = (val) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0
    }).format(val);
  };

  // Inicialización
  function init() {
    renderCategoryTabs();
    renderPhoneSelectors();
    renderMenu();
    renderCartaTable();
    renderGaleria();
    setupEventListeners();
    setupVideoControls();
    loadCartFromStorage();
    updateCartUI();
  }

  // Renderizar Tabs de Categorías
  function renderCategoryTabs() {
    if (!elements.categoryTabs) return;
    elements.categoryTabs.innerHTML = CATEGORIES.map(cat => `
      <button 
        type="button" 
        class="category-chip ${cat.id === state.activeCategory ? 'active' : ''}" 
        data-cat-id="${cat.id}">
        <span class="chip-icon">${cat.icon}</span>
        <span class="chip-name">${cat.name}</span>
      </button>
    `).join("");

    elements.categoryTabs.querySelectorAll(".category-chip").forEach(btn => {
      btn.addEventListener("click", () => {
        state.activeCategory = btn.dataset.catId;
        elements.categoryTabs.querySelectorAll(".category-chip").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderMenu();
      });
    });
  }

  // Renderizar Selectores de Teléfonos
  function renderPhoneSelectors() {
    if (elements.phoneSelector) {
      elements.phoneSelector.innerHTML = RESTAURANT_INFO.phones.map((phone, idx) => `
        <option value="${phone.number}" ${idx === 0 ? "selected" : ""}>
          Línea WhatsApp ${idx + 1}: ${phone.display}
        </option>
      `).join("");

      elements.phoneSelector.addEventListener("change", (e) => {
        state.selectedPhone = e.target.value;
      });
    }

    // Direct phone buttons in header/footer
    const phonePillsContainer = document.getElementById("domiciliosPhoneGrid");
    if (phonePillsContainer) {
      phonePillsContainer.innerHTML = RESTAURANT_INFO.phones.map((phone, idx) => `
        <a href="https://wa.me/57${phone.number}?text=${encodeURIComponent('¡Hola Asados Colombianos! Quisiera hacer una consulta o pedido a domicilio.')}" 
           target="_blank" 
           rel="noopener noreferrer"
           class="phone-action-card">
          <div class="phone-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </div>
          <div class="phone-card-content">
            <span class="phone-label">Línea ${idx + 1}</span>
            <span class="phone-val">${phone.display}</span>
            <span class="phone-hint">Toca para pedir por WhatsApp</span>
          </div>
        </a>
      `).join("");
    }
  }

  // Filtrado de ítems
  function getFilteredItems() {
    return MENU_ITEMS.filter(item => {
      const matchesCategory = state.activeCategory === "todos" || item.category === state.activeCategory;
      const term = state.searchTerm.toLowerCase().trim();
      const matchesSearch = !term || 
        item.name.toLowerCase().includes(term) || 
        item.description.toLowerCase().includes(term) || 
        (item.accompaniments && item.accompaniments.some(acc => acc.toLowerCase().includes(term)));
      return matchesCategory && matchesSearch;
    });
  }

  // Renderizar Menú de Tarjetas Visuales
  function renderMenu() {
    if (!elements.menuGrid) return;
    const items = getFilteredItems();

    if (items.length === 0) {
      elements.menuGrid.innerHTML = `
        <div class="empty-results col-span-full">
          <div class="empty-icon">🔍</div>
          <h3>No encontramos platos con "${state.searchTerm}"</h3>
          <p>Prueba buscando con otro término o seleccionando una categoría diferente.</p>
          <button type="button" class="btn btn-secondary mt-4" id="resetFilterBtn">Ver todos los platos</button>
        </div>
      `;
      const resetBtn = document.getElementById("resetFilterBtn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          state.searchTerm = "";
          state.activeCategory = "todos";
          if (elements.searchInput) elements.searchInput.value = "";
          renderCategoryTabs();
          renderMenu();
        });
      }
      return;
    }

    elements.menuGrid.innerHTML = items.map(item => {
      const hasImage = Boolean(item.cardImage);
      const isPromoWithFlyer = Boolean(item.fullFlyer);
      const startingPrice = item.hasPortions ? item.portions[0].price : item.defaultPrice;

      return `
        <article class="dish-card" data-item-id="${item.id}">
          <div class="dish-card-media ${!hasImage ? 'no-image-fallback' : ''}">
            ${hasImage ? `
              <img 
                src="${item.cardImage}" 
                alt="${item.name}" 
                loading="lazy"
                class="dish-card-img"
              />
              <div class="dish-card-overlay">
                ${isPromoWithFlyer ? `
                  <button type="button" class="btn-view-flyer" data-flyer-id="${item.id}" title="Ver foto y volante original completo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <span>Ver Volante Original</span>
                  </button>
                ` : ''}
              </div>
            ` : `
              <div class="dish-no-img-placeholder">
                <span class="no-img-icon">🍗</span>
                <span class="no-img-text">Asados Colombianos</span>
              </div>
            `}
            ${item.badge ? `<span class="dish-badge">${item.badge}</span>` : ''}
          </div>

          <div class="dish-card-body">
            <header class="dish-card-header">
              <h3 class="dish-title">${item.name}</h3>
              <p class="dish-desc">${item.description}</p>
            </header>

            ${item.accompaniments && item.accompaniments.length > 0 ? `
              <div class="dish-accompaniments">
                <span class="acc-label">Acompañado con:</span>
                <div class="acc-tags">
                  ${item.accompaniments.map(acc => `<span class="acc-tag">✓ ${acc}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            ${item.note ? `
              <div class="dish-note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>${item.note}</span>
              </div>
            ` : ''}

            <!-- Selector de Porciones si aplica -->
            ${item.hasPortions ? `
              <div class="portion-selector-group">
                <label for="portion-${item.id}" class="portion-label">Elige la porción:</label>
                <select id="portion-${item.id}" class="portion-select" data-dish-select="${item.id}">
                  ${item.portions.map((p, idx) => `
                    <option value="${idx}" ${idx === 0 ? 'selected' : ''}>
                      ${p.name} - ${formatCOP(p.price)}
                    </option>
                  `).join('')}
                </select>
              </div>
            ` : ''}

            <!-- Selector de Opciones adicionales si aplica (Ejecutivo / Caldo) -->
            ${item.options && item.options.length > 0 ? `
              <div class="options-selector-group">
                ${item.options.map((opt, optIdx) => `
                  <label for="opt-${item.id}-${optIdx}" class="portion-label">${opt.name}:</label>
                  <select id="opt-${item.id}-${optIdx}" class="option-select" data-dish-option="${item.id}">
                    ${opt.choices.map((choice, cIdx) => `
                      <option value="${choice}" ${cIdx === 0 ? 'selected' : ''}>${choice}</option>
                    `).join('')}
                  </select>
                `).join('')}
              </div>
            ` : ''}

            <footer class="dish-card-footer">
              <div class="dish-price-box">
                <span class="price-prefix">${item.hasPortions ? 'Desde' : 'Precio'}</span>
                <span class="dish-price" id="price-display-${item.id}">${formatCOP(startingPrice)}</span>
              </div>

              <div class="dish-actions">
                <button 
                  type="button" 
                  class="btn-add-cart" 
                  data-add-item="${item.id}" 
                  title="Agregar al pedido">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  <span>Pedir</span>
                </button>
              </div>
            </footer>
          </div>
        </article>
      `;
    }).join('');

    // Listener para selectores de porción (cambio dinámico de precio)
    elements.menuGrid.querySelectorAll(".portion-select").forEach(select => {
      select.addEventListener("change", (e) => {
        const itemId = e.target.dataset.dishSelect;
        const item = MENU_ITEMS.find(i => i.id === itemId);
        if (item && item.hasPortions) {
          const selectedPortion = item.portions[parseInt(e.target.value, 10)];
          const priceDisplay = document.getElementById(`price-display-${itemId}`);
          if (priceDisplay) {
            priceDisplay.textContent = formatCOP(selectedPortion.price);
          }
        }
      });
    });

    // Listener para abrir el volante original / lightbox
    elements.menuGrid.querySelectorAll("[data-flyer-id]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const itemId = btn.dataset.flyerId;
        openLightbox(itemId);
      });
    });

    // Listener para agregar al carrito
    elements.menuGrid.querySelectorAll("[data-add-item]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const itemId = btn.dataset.addItem;
        const item = MENU_ITEMS.find(i => i.id === itemId);
        if (!item) return;

        let portionName = null;
        let price = item.defaultPrice;

        if (item.hasPortions) {
          const select = document.getElementById(`portion-${itemId}`);
          const pIdx = select ? parseInt(select.value, 10) : 0;
          const portion = item.portions[pIdx] || item.portions[0];
          portionName = portion.name;
          price = portion.price;
        }

        let customOption = null;
        if (item.options && item.options.length > 0) {
          const optSelect = elements.menuGrid.querySelector(`[data-dish-option="${itemId}"]`);
          if (optSelect) customOption = optSelect.value;
        }

        addToCart({
          itemId: item.id,
          name: item.name,
          portionName: portionName,
          customOption: customOption,
          price: price,
          image: item.cardImage || item.fullFlyer
        });

        // Feedback visual
        btn.classList.add("added");
        const originalText = btn.innerHTML;
        btn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>¡Agregado!</span>
        `;
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove("added");
        }, 1200);
      });
    });
  }

  // Renderizar Carta Tradicional en Formato Restaurante
  function renderCartaTable() {
    if (!elements.cartaView) return;
    const categoriesToGroup = [
      { id: "pollo", title: "🍗 Especialidades de Pollo al Carbón & Broaster" },
      { id: "carnes", title: "🥩 Cortes de Carne al Carbón & Costillas BBQ" },
      { id: "alitas", title: "✨ Alitas Doradas & Snacks" },
      { id: "ejecutivos", title: "🍱 Almuerzo Ejecutivo Completo" },
      { id: "sopas", title: "🍲 Sopas & Tradición Colombiana" },
      { id: "platos", title: "🍛 Platos Típicos & Arroces" },
      { id: "adicionales", title: "🍟 Acompañamientos & Porciones" },
      { id: "bebidas", title: "🥤 Bebidas & Refrescos" }
    ];

    elements.cartaView.innerHTML = `
      <div class="carta-paper-container">
        <header class="carta-paper-header">
          <img src="${RESTAURANT_INFO.logo}" alt="Logo Asados Colombianos" class="carta-logo-stamp" />
          <h2 class="carta-paper-title">${RESTAURANT_INFO.name}</h2>
          <p class="carta-paper-slogan">${RESTAURANT_INFO.slogan} • Carta Oficial de Precios</p>
          <div class="carta-gold-divider"></div>
        </header>

        <div class="carta-columns-layout">
          ${categoriesToGroup.map(cat => {
            const items = MENU_ITEMS.filter(i => i.category === cat.id);
            if (items.length === 0) return '';

            return `
              <div class="carta-section-block">
                <h3 class="carta-section-heading">${cat.title}</h3>
                <ul class="carta-item-list">
                  ${items.map(item => `
                    <li class="carta-item-row">
                      <div class="carta-item-main">
                        <div class="carta-item-title-line">
                          <span class="carta-item-name">${item.name}</span>
                          <span class="carta-item-dots"></span>
                          <span class="carta-item-price">${formatCOP(item.hasPortions ? item.portions[0].price : item.defaultPrice)}</span>
                        </div>
                        <p class="carta-item-desc">${item.description}</p>
                        ${item.accompaniments ? `
                          <span class="carta-item-acc">Incluye: ${item.accompaniments.join(', ')}</span>
                        ` : ''}
                        ${item.hasPortions ? `
                          <div class="carta-portions-sublist">
                            ${item.portions.map(p => `
                              <div class="carta-portion-pill">
                                <span>${p.name}: <strong>${formatCOP(p.price)}</strong></span>
                              </div>
                            `).join('')}
                          </div>
                        ` : ''}
                      </div>
                      <div class="carta-item-action">
                        <button type="button" class="btn-carta-quick-add" data-carta-add="${item.id}">
                          + Pedir
                        </button>
                      </div>
                    </li>
                  `).join('')}
                </ul>
              </div>
            `;
          }).join('')}
        </div>

        <footer class="carta-paper-footer">
          <p>🛵 Domicilios Rápidos: 310-631-2148 / 316-233-4974 / 318-288-5605 / 311-244-7905</p>
          <p class="carta-subnote">Precios en pesos colombianos (COP). Calidad, sabor y tradición garantizada en cada plato.</p>
        </footer>
      </div>
    `;

    // Listeners para botones de la carta tradicional
    elements.cartaView.querySelectorAll("[data-carta-add]").forEach(btn => {
      btn.addEventListener("click", () => {
        const itemId = btn.dataset.cartaAdd;
        const item = MENU_ITEMS.find(i => i.id === itemId);
        if (!item) return;

        const portion = item.hasPortions ? item.portions[0] : null;
        addToCart({
          itemId: item.id,
          name: item.name,
          portionName: portion ? portion.name : null,
          customOption: null,
          price: portion ? portion.price : item.defaultPrice,
          image: item.cardImage || item.fullFlyer
        });
        openCartDrawer();
      });
    });
  }

  // Renderizar Galería Fotográfica de Volantes Originales
  function renderGaleria() {
    if (!elements.galeriaView) return;

    // Lista de volantes originales completos
    const flyers = [
      {
        id: "pollo-asado",
        title: "Pollo Asado Tradicional",
        desc: "Pollo Asado + Maduro + Papas Saladas + Arepa + Ají",
        src: "assets/images/pollo-asado.jpg",
        tag: "Especialidad al Carbón"
      },
      {
        id: "pollo-broaster",
        title: "Pollo Broaster",
        desc: "Pollo Broaster + Yuca + Papas Francesas + Arepa + Salsas",
        src: "assets/images/pollo-broaster.jpg",
        tag: "Crocante & Dorado"
      },
      {
        id: "churrasco",
        title: "Churrasco",
        desc: "100% Carne de res + Papas a la francesa + Yuquitas + Salsas",
        src: "assets/images/churrasco.jpg",
        tag: "Corte 100% Res"
      },
      {
        id: "costillas-bbq",
        title: "Costillas BBQ",
        desc: "Costillas bañadas en BBQ + Papas a la francesa + Yuca",
        src: "assets/images/costillas-bbq.jpg",
        tag: "Glaseado BBQ"
      },
      {
        id: "alitas-bbq",
        title: "Alitas BBQ",
        desc: "Alitas doradas BBQ + Papas a la francesa + Yuca",
        src: "assets/images/alitas-bbq.jpg",
        tag: "Alitas Crocantes"
      },
      {
        id: "pechuga-plancha",
        title: "Pechuga a la Plancha",
        desc: "Pechuga a la Plancha + Francesa + Yuquitas + Salsas",
        src: "assets/images/pechuga-plancha.jpg",
        tag: "A la Plancha"
      },
      {
        id: "arroz-con-pollo",
        title: "Arroz con Pollo",
        desc: "El mejor arroz con pollo de la ciudad + Francesa + Yuquitas + Salsas",
        src: "assets/images/arroz-con-pollo.jpg",
        tag: "Plato Típico"
      },
      {
        id: "caldo-costilla",
        title: "Caldo de Costilla",
        desc: "Caldo de Costilla con Arepa o Arroz",
        src: "assets/images/caldo-costilla.jpg",
        tag: "Sopa Tradicional"
      },
      {
        id: "ejecutivo-combo",
        title: "Ejecutivo + 1/4 Pollo",
        desc: "Sopa del día, fríjol, arroz, 1/4 de pollo, ensalada, papitas y limonada",
        src: "assets/images/ejecutivo-combo.jpg",
        tag: "Almuerzo Completo"
      },
      {
        id: "domicilios",
        title: "Volante de Domicilios",
        desc: "Líneas de WhatsApp: 310-631-2148 / 316-233-4974 / 318-288-5605 / 311-244-7905",
        src: "assets/images/domicilios.jpg",
        tag: "Líneas de Pedido"
      },
      {
        id: "banner",
        title: "Asadero & Restaurante",
        desc: "Parrilla completa: Pollo asado, broaster, churrasco y pechuga",
        src: "assets/images/banner-asadero.jpg",
        tag: "Banner Oficial"
      }
    ];

    elements.galeriaView.innerHTML = `
      <div class="galeria-intro">
        <h3>Fotos y Volantes Originales del Asadero</h3>
        <p>Disfruta las piezas gráficas completas de nuestra carta. Toca cualquiera para verla en pantalla completa o pedirla directamente.</p>
      </div>

      <div class="galeria-grid">
        ${flyers.map(f => `
          <div class="galeria-card" data-open-flyer="${f.id}" data-flyer-src="${f.src}" data-flyer-title="${f.title}">
            <div class="galeria-card-img-wrap">
              <img src="${f.src}" alt="${f.title}" loading="lazy" class="galeria-img" />
              <div class="galeria-hover-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 3h6v6"></path>
                  <path d="M9 21H3v-6"></path>
                  <path d="M21 3l-7 7"></path>
                  <path d="M3 21l7-7"></path>
                </svg>
                <span>Ampliar Volante</span>
              </div>
            </div>
            <div class="galeria-card-info">
              <span class="galeria-tag">${f.tag}</span>
              <h4 class="galeria-card-title">${f.title}</h4>
              <p class="galeria-card-desc">${f.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Listeners para la galería
    elements.galeriaView.querySelectorAll("[data-open-flyer]").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.dataset.openFlyer;
        const matchingDish = MENU_ITEMS.find(m => m.id === id);
        if (matchingDish) {
          openLightbox(matchingDish.id);
        } else {
          // Si es domicilios o banner sin plato específico
          const src = card.dataset.flyerSrc;
          const title = card.dataset.flyerTitle;
          openGenericLightbox(src, title);
        }
      });
    });
  }

  // Lightbox Modal para Volante Original y Pedido
  function openLightbox(itemId) {
    const item = MENU_ITEMS.find(i => i.id === itemId);
    if (!item) return;

    state.selectedItemForModal = item;
    const flyerSrc = item.fullFlyer || item.cardImage;

    elements.lightboxImage.src = flyerSrc;
    elements.lightboxImage.alt = item.name;
    elements.lightboxTitle.textContent = item.name;
    elements.lightboxCategory.textContent = CATEGORIES.find(c => c.id === item.category)?.name || "Especialidad";
    elements.lightboxBadge.textContent = item.badge || "Recomendado";
    elements.lightboxDesc.textContent = item.description;

    // Acompañamientos
    if (elements.lightboxAccompaniments) {
      if (item.accompaniments && item.accompaniments.length > 0) {
        elements.lightboxAccompaniments.innerHTML = `
          <h4>Acompañado de:</h4>
          <div class="acc-tags">
            ${item.accompaniments.map(acc => `<span class="acc-tag">✓ ${acc}</span>`).join('')}
          </div>
        `;
        elements.lightboxAccompaniments.style.display = "block";
      } else {
        elements.lightboxAccompaniments.style.display = "none";
      }
    }

    // Porciones
    if (item.hasPortions) {
      elements.lightboxPortionsContainer.style.display = "block";
      elements.lightboxPortionsSelect.innerHTML = item.portions.map((p, idx) => `
        <option value="${idx}">${p.name} - ${formatCOP(p.price)}</option>
      `).join('');

      elements.lightboxPrice.textContent = formatCOP(item.portions[0].price);

      elements.lightboxPortionsSelect.onchange = (e) => {
        const pIdx = parseInt(e.target.value, 10);
        elements.lightboxPrice.textContent = formatCOP(item.portions[pIdx].price);
      };
    } else {
      elements.lightboxPortionsContainer.style.display = "none";
      elements.lightboxPrice.textContent = formatCOP(item.defaultPrice);
    }

    // Botón Agregar al Carrito desde Modal
    elements.lightboxAddToCartBtn.onclick = () => {
      let portionName = null;
      let price = item.defaultPrice;

      if (item.hasPortions) {
        const pIdx = parseInt(elements.lightboxPortionsSelect.value, 10);
        const p = item.portions[pIdx];
        portionName = p.name;
        price = p.price;
      }

      addToCart({
        itemId: item.id,
        name: item.name,
        portionName: portionName,
        customOption: null,
        price: price,
        image: flyerSrc
      });

      closeLightbox();
      openCartDrawer();
    };

    // Botón Pedir directo por WhatsApp desde Modal
    elements.lightboxDirectWaBtn.onclick = () => {
      let portionText = "";
      let price = item.defaultPrice;
      if (item.hasPortions) {
        const pIdx = parseInt(elements.lightboxPortionsSelect.value, 10);
        const p = item.portions[pIdx];
        portionText = ` (${p.name})`;
        price = p.price;
      }

      const msg = `¡Hola Asados Colombianos! Quisiera ordenar a domicilio:\n\n🍗 *${item.name}${portionText}*\n💰 Precio: ${formatCOP(price)}\n\n¿Me indican por favor el tiempo de entrega a mi dirección?`;
      window.open(`https://wa.me/57${state.selectedPhone}?text=${encodeURIComponent(msg)}`, "_blank");
    };

    elements.lightboxModal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  // Lightbox genérico para imágenes informativas (Domicilios, Banner)
  function openGenericLightbox(src, title) {
    elements.lightboxImage.src = src;
    elements.lightboxImage.alt = title;
    elements.lightboxTitle.textContent = title;
    elements.lightboxCategory.textContent = "Información del Restaurante";
    elements.lightboxBadge.textContent = "Oficial";
    elements.lightboxDesc.textContent = "Consulta aquí los detalles de contacto, líneas directas de domicilio y promociones.";
    elements.lightboxAccompaniments.style.display = "none";
    elements.lightboxPortionsContainer.style.display = "none";
    elements.lightboxPrice.textContent = "";

    elements.lightboxAddToCartBtn.style.display = "none";
    elements.lightboxDirectWaBtn.textContent = "💬 Contactar por WhatsApp";
    elements.lightboxDirectWaBtn.onclick = () => {
      const msg = "¡Hola Asados Colombianos! Vi su volante de domicilios y quisiera hacer un pedido.";
      window.open(`https://wa.me/57${state.selectedPhone}?text=${encodeURIComponent(msg)}`, "_blank");
    };

    elements.lightboxModal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    elements.lightboxModal.classList.remove("open");
    document.body.style.overflow = "";
    elements.lightboxAddToCartBtn.style.display = "";
    elements.lightboxDirectWaBtn.textContent = "💬 Pedir Directo por WhatsApp";
  }

  // Sistema de Carrito / Pedido
  function addToCart(item) {
    const existingIndex = state.cart.findIndex(i => 
      i.itemId === item.itemId && 
      i.portionName === item.portionName && 
      i.customOption === item.customOption
    );

    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += 1;
    } else {
      state.cart.push({
        ...item,
        quantity: 1,
        id: Date.now() + Math.random().toString(36).substr(2, 4)
      });
    }

    saveCartToStorage();
    updateCartUI();
  }

  function updateQuantity(cartItemId, delta) {
    const item = state.cart.find(i => i.id === cartItemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      state.cart = state.cart.filter(i => i.id !== cartItemId);
    }

    saveCartToStorage();
    updateCartUI();
  }

  function removeFromCart(cartItemId) {
    state.cart = state.cart.filter(i => i.id !== cartItemId);
    saveCartToStorage();
    updateCartUI();
  }

  function clearCart() {
    state.cart = [];
    saveCartToStorage();
    updateCartUI();
  }

  function getCartSubtotal() {
    return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  function getCartTotalCount() {
    return state.cart.reduce((count, item) => count + item.quantity, 0);
  }

  function updateCartUI() {
    const count = getCartTotalCount();
    const total = getCartSubtotal();

    // Actualizar badges
    elements.cartCountBadges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? "inline-flex" : "none";
    });

    if (elements.cartTotalDisplay) {
      elements.cartTotalDisplay.textContent = formatCOP(total);
    }
    if (elements.cartDrawerTotal) {
      elements.cartDrawerTotal.textContent = formatCOP(total);
    }

    // Renderizar lista en Drawer
    if (state.cart.length === 0) {
      if (elements.cartEmptyState) elements.cartEmptyState.style.display = "flex";
      if (elements.cartFilledState) elements.cartFilledState.style.display = "none";
    } else {
      if (elements.cartEmptyState) elements.cartEmptyState.style.display = "none";
      if (elements.cartFilledState) elements.cartFilledState.style.display = "block";

      if (elements.cartItemsList) {
        elements.cartItemsList.innerHTML = state.cart.map(item => `
          <div class="cart-item-card">
            ${item.image ? `
              <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" />
            ` : `
              <div class="cart-item-thumb-placeholder">🍗</div>
            `}
            <div class="cart-item-details">
              <h4 class="cart-item-title">${item.name}</h4>
              ${item.portionName ? `<span class="cart-item-portion">${item.portionName}</span>` : ''}
              ${item.customOption ? `<span class="cart-item-option">Elección: ${item.customOption}</span>` : ''}
              <span class="cart-item-unit-price">${formatCOP(item.price)} c/u</span>
            </div>
            <div class="cart-item-controls">
              <div class="qty-stepper">
                <button type="button" class="btn-qty" data-qty-dec="${item.id}">-</button>
                <span class="qty-num">${item.quantity}</span>
                <button type="button" class="btn-qty" data-qty-inc="${item.id}">+</button>
              </div>
              <span class="cart-item-subtotal">${formatCOP(item.price * item.quantity)}</span>
              <button type="button" class="btn-remove-item" data-remove-item="${item.id}" title="Eliminar plato">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </div>
        `).join('');

        // Listeners en el drawer
        elements.cartItemsList.querySelectorAll("[data-qty-dec]").forEach(btn => {
          btn.addEventListener("click", () => updateQuantity(btn.dataset.qtyDec, -1));
        });
        elements.cartItemsList.querySelectorAll("[data-qty-inc]").forEach(btn => {
          btn.addEventListener("click", () => updateQuantity(btn.dataset.qtyInc, 1));
        });
        elements.cartItemsList.querySelectorAll("[data-remove-item]").forEach(btn => {
          btn.addEventListener("click", () => removeFromCart(btn.dataset.removeItem));
        });
      }
    }
  }

  function openCartDrawer() {
    if (!elements.cartDrawer) return;
    elements.cartDrawer.classList.add("open");
    if (elements.cartDrawerBackdrop) elements.cartDrawerBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeCartDrawer() {
    if (!elements.cartDrawer) return;
    elements.cartDrawer.classList.remove("open");
    if (elements.cartDrawerBackdrop) elements.cartDrawerBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  // Generar y Enviar Pedido por WhatsApp
  function checkoutViaWhatsApp() {
    if (state.cart.length === 0) {
      alert("Por favor agrega al menos un plato a tu pedido antes de continuar.");
      return;
    }

    const name = elements.clientNameInput ? elements.clientNameInput.value.trim() : "";
    const address = elements.clientAddressInput ? elements.clientAddressInput.value.trim() : "";
    const notes = elements.clientNotesInput ? elements.clientNotesInput.value.trim() : "";
    const phone = state.selectedPhone || RESTAURANT_INFO.phones[0].number;

    let message = `¡Hola *Asados Colombianos*! 🔥🍗\n`;
    message += `Deseo realizar el siguiente pedido a domicilio:\n\n`;

    state.cart.forEach((item, idx) => {
      message += `${idx + 1}. *${item.quantity}x ${item.name}*`;
      if (item.portionName) message += ` (${item.portionName})`;
      if (item.customOption) message += ` [${item.customOption}]`;
      message += ` — ${formatCOP(item.price * item.quantity)}\n`;
    });

    const total = getCartSubtotal();
    message += `\n💰 *VALOR ESTIMADO:* ${formatCOP(total)} COP\n`;
    message += `──────────────────\n`;
    message += `📍 *DATOS DE ENTREGA:*\n`;
    message += `• *Cliente:* ${name || "Cliente Asados Colombianos"}\n`;
    message += `• *Dirección:* ${address || "A convenir por WhatsApp"}\n`;
    if (notes) {
      message += `• *Indicaciones especiales:* ${notes}\n`;
    }
    message += `──────────────────\n`;
    message += `¿Me confirman la recepción del pedido y el tiempo aproximado de llegada? ¡Muchas gracias!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/57${phone}?text=${encoded}`;

    window.open(whatsappUrl, "_blank");
  }

  // Almacenamiento local del carrito
  function saveCartToStorage() {
    try {
      localStorage.setItem("asados_colombianos_cart", JSON.stringify(state.cart));
    } catch (e) {
      console.warn("No se pudo guardar el carrito en almacenamiento local", e);
    }
  }

  function loadCartFromStorage() {
    try {
      const saved = localStorage.getItem("asados_colombianos_cart");
      if (saved) {
        state.cart = JSON.parse(saved);
      }
    } catch (e) {
      console.warn("No se pudo cargar el carrito", e);
      state.cart = [];
    }
  }

  // Controladores del Video
  function setupVideoControls() {
    if (!elements.heroVideo) return;

    if (elements.videoSoundToggle) {
      elements.videoSoundToggle.addEventListener("click", () => {
        state.videoMuted = !state.videoMuted;
        elements.heroVideo.muted = state.videoMuted;
        
        elements.videoSoundToggle.innerHTML = state.videoMuted ? `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="1" y1="1" x2="23" y2="23"></line>
            <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
            <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
            <line x1="12" y1="19" x2="12" y2="23"></line>
            <line x1="8" y1="23" x2="16" y2="23"></line>
          </svg>
          <span>Activar Sonido</span>
        ` : `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
          <span>Silenciar</span>
        `;
      });
    }

    if (elements.videoPlayToggle) {
      elements.videoPlayToggle.addEventListener("click", () => {
        if (elements.heroVideo.paused) {
          elements.heroVideo.play();
          elements.videoPlayToggle.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
            <span>Pausar</span>
          `;
        } else {
          elements.heroVideo.pause();
          elements.videoPlayToggle.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>Reproducir</span>
          `;
        }
      });
    }
  }

  // Configuración de Eventos Generales
  function setupEventListeners() {
    // Alternar vistas: Tarjetas | Carta Digital | Galería
    elements.viewModeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const mode = btn.dataset.viewMode;
        state.viewMode = mode;
        elements.viewModeBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        if (mode === "cards") {
          elements.menuGrid.style.display = "grid";
          elements.cartaView.style.display = "none";
          elements.galeriaView.style.display = "none";
        } else if (mode === "carta") {
          elements.menuGrid.style.display = "none";
          elements.cartaView.style.display = "block";
          elements.galeriaView.style.display = "none";
        } else if (mode === "galeria") {
          elements.menuGrid.style.display = "none";
          elements.cartaView.style.display = "none";
          elements.galeriaView.style.display = "block";
        }
      });
    });

    // Búsqueda en vivo
    if (elements.searchInput) {
      elements.searchInput.addEventListener("input", (e) => {
        state.searchTerm = e.target.value;
        if (elements.clearSearchBtn) {
          elements.clearSearchBtn.style.display = state.searchTerm ? "block" : "none";
        }
        renderMenu();
      });
    }

    if (elements.clearSearchBtn) {
      elements.clearSearchBtn.addEventListener("click", () => {
        state.searchTerm = "";
        elements.searchInput.value = "";
        elements.clearSearchBtn.style.display = "none";
        renderMenu();
      });
    }

    // Modal de Carrito / Drawer
    elements.openCartBtns.forEach(btn => {
      btn.addEventListener("click", openCartDrawer);
    });

    if (elements.closeCartBtn) elements.closeCartBtn.addEventListener("click", closeCartDrawer);
    if (elements.cartDrawerBackdrop) elements.cartDrawerBackdrop.addEventListener("click", closeCartDrawer);

    // Botón de checkout por WhatsApp
    if (elements.checkoutWhatsappBtn) {
      elements.checkoutWhatsappBtn.addEventListener("click", checkoutViaWhatsApp);
    }

    // Modal Lightbox
    if (elements.closeLightboxBtn) elements.closeLightboxBtn.addEventListener("click", closeLightbox);
    if (elements.lightboxBackdrop) elements.lightboxBackdrop.addEventListener("click", closeLightbox);

    // Cerrar modales con Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeLightbox();
        closeCartDrawer();
      }
    });

    // Mobile nav toggle
    const mobileMenuToggle = document.getElementById("mobileMenuToggle");
    const navLinks = document.getElementById("navLinks");
    if (mobileMenuToggle && navLinks) {
      mobileMenuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });

      navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("open");
        });
      });
    }

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href");
        if (targetId && targetId !== "#") {
          const target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      });
    });
  }

  // Iniciar
  init();
});


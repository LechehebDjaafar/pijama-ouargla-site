/* =====================================================
   Pijama Ouargla — landing page behaviour
   1) CONFIG  → edit contacts / images here
   2) I18N    → Arabic / French / English text
   3) Logic   → language, dark mode, gallery, lightbox,
                reels, menu, contact form, motion
   ===================================================== */
(() => {
  'use strict';

  /* ---------------------------------------------------
     1) CONFIG — the only place to edit
     --------------------------------------------------- */
  const CONFIG = {
    phoneDisplay: '0656 33 83 43',
    phoneIntl: '213656338343',            // used for tel: and WhatsApp (country code, no +)
    email: 'contact@pijama-ouargla.example', // TODO: replace with the shop's real e-mail
    facebook: 'https://www.facebook.com/p/Pijama-ouargla-100042713354193/',
    instagram: 'https://www.instagram.com/pijama_ouargla/',
    mapsQuery: 'X87G+F5C Ouargla',

    // Gallery: files go in images/gallery/01.jpg, 02.jpg ... (one category per photo)
    // categories: 'sets' | 'tracks' | 'tops'
    // (the 15 photos below are temporary crops from the Google Maps screenshot: replace them with the shop's originals,
    //  keep the same names; add more by extending this list and adding 16.jpg, 17.jpg ...)
    gallery: [
      'sets', 'sets', 'sets', 'sets', 'sets',
      'tops', 'tracks', 'tracks', 'tracks', 'sets',
      'tops', 'tops', 'tops', 'tops', 'tops'
    ],

    // Reels / videos: put a thumbnail in images/reels/ and the direct link of each reel/video.
    // platform: 'instagram' | 'facebook'
    reels: [
      { platform: 'instagram', url: 'https://www.instagram.com/pijama_ouargla/', thumb: 'images/reels/01.jpg' },
      { platform: 'instagram', url: 'https://www.instagram.com/pijama_ouargla/', thumb: 'images/reels/02.jpg' },
      { platform: 'facebook',  url: 'https://www.facebook.com/p/Pijama-ouargla-100042713354193/', thumb: 'images/reels/03.jpg' },
      { platform: 'facebook',  url: 'https://www.facebook.com/p/Pijama-ouargla-100042713354193/', thumb: 'images/reels/04.jpg' }
    ]
  };

  /* ---------------------------------------------------
     2) I18N
     --------------------------------------------------- */
  const I18N = {
    ar: {
      title: 'بيجامة ورقلة — ملابس نسائية تركية مستورة | Pijama Ouargla',
      desc: 'بيجامة ورقلة: محل ملابس نسائية تركية مستورة في سوق لحجر بولاية ورقلة. توصيل إلى 58 ولاية والدفع عند الاستلام. للطلب: 0656 33 83 43.',
      skip: 'تخطَّ إلى المحتوى',
      announce: 'التوصيل إلى 58 ولاية · الدفع عند الاستلام · للطلب: 0656 33 83 43',
      nav_about: 'من نحن', nav_gallery: 'المعرض', nav_videos: 'الفيديوهات', nav_reviews: 'الآراء', nav_location: 'الموقع', nav_contact: 'تواصل',
      menu: 'القائمة', close: 'إغلاق', prev: 'السابق', next: 'التالي',
      theme_to_dark: 'الوضع الداكن', theme_to_light: 'الوضع الفاتح',
      hero_kicker: 'ملابس نسائية تركية مستورة',
      wm1: 'بيجامة', wm2: 'ورقلة',
      hero_sub: 'محل لبيع الملابس التركية الفاخرة — سوق لحجر، ورقلة',
      cta_order: 'اطلب عبر واتساب', cta_call: 'اتصل بنا', cta_gallery: 'تصفّح المعرض',
      tk1: 'أزياء تركية فاخرة', tk2: 'توصيل إلى 58 ولاية', tk3: 'الدفع عند الاستلام', tk4: 'سوق لحجر · ورقلة',
      intro: 'محل متخصص في الملابس النسائية المستورة من تركيا، يقع في سوق لحجر بولاية ورقلة. بيجامات ومجموعات تريكو وبدلات رياضية بأقمشة فاخرة وتفاصيل أنيقة، مع توصيل إلى 58 ولاية ودفع عند الاستلام.',
      find_out: 'اكتشف المجموعة',
      stat1: 'متابع على فيسبوك', stat2: 'ولاية يصلها التوصيل', stat3: 'منشور على إنستغرام', stat4: 'تقييم على خرائط جوجل',
      feat_title: 'لماذا بيجامة ورقلة',
      f1_t: 'أزياء تركية فاخرة', f1_d: 'ملابس نسائية مستورة من تركيا بتصاميم عصرية وأقمشة فاخرة، للبيت وللخروج.',
      f2_t: 'توصيل إلى 58 ولاية', f2_d: 'نوصل طلبك أينما كنت في الجزائر، من ورقلة إلى أي ولاية.',
      f3_t: 'الدفع عند الاستلام', f3_d: 'تدفع عند وصول طلبك إليك، دون دفع مسبق.',
      gal_title: 'المعرض', gal_hint: 'اضغط على أي صورة لتكبيرها',
      flt_all: 'الكل', flt_sets: 'مجموعات', flt_tracks: 'بدلات رياضية', flt_tops: 'قمصان وسترات',
      cat_sets: 'مجموعة', cat_tracks: 'بدلة رياضية', cat_tops: 'قميص / سترة', ref: 'رقم',
      vid_title: 'الفيديوهات والريلز', vid_hint: 'شاهد القطع على الواقع على إنستغرام وفيسبوك',
      reel: 'ريل', watch_instagram: 'شاهد على إنستغرام', watch_facebook: 'شاهد على فيسبوك',
      rev_title: 'آراء الزبائن', rev_count: 'من مراجعتين على خرائط جوجل', rev_cta: 'اكتب مراجعتك',
      rev_nocomment: 'تقييم 5/5 بدون تعليق',
      loc_title: 'الموقع', loc_addr_l: 'العنوان', loc_addr: 'سوق لحجر، ورقلة',
      loc_code_l: 'الرمز على الخرائط', loc_hours_l: 'ساعات العمل', loc_hours: 'مفتوح · يغلق عند الساعة 7:00 م',
      loc_phone_l: 'الهاتف', loc_dir: 'احصل على الاتجاهات', loc_open: 'افتح في خرائط جوجل',
      ct_title: 'اطلب عرضاً', ct_hint: 'اترك بياناتك وما تريده، وسنرد عليك في أقرب وقت.',
      ct_name: 'الاسم', ct_phone: 'رقم الهاتف', ct_msg: 'ما الذي تبحث عنه؟',
      ct_msg_ph: 'مثال: مجموعة تريكو بني، مقاس M، التوصيل إلى وهران',
      ct_err: 'يرجى ملء جميع الحقول.',
      ct_wa: 'أرسل عبر واتساب', ct_mail: 'أرسل عبر البريد',
      ct_direct: 'أو تواصل مباشرة', ct_call: 'اتصل', ct_email: 'البريد الإلكتروني',
      tile_wa: 'راسلنا مباشرة', tile_fb: '115 ألف متابع',
      toast_wa: 'جارٍ فتح واتساب…', toast_mail: 'جارٍ فتح البريد…',
      ft_note: '© 2026 بيجامة ورقلة — سوق لحجر، ورقلة',
      ft_credit: 'تصميم تجريبي: Djaafar',
      float_t: 'اطلب عبر واتساب', mbar_offer: 'اطلب عرضاً',
      wa_msg: (n, p, m) => `السلام عليكم، أنا ${n}.\nأريد طلب عرض / الاستفسار عن:\n${m}\nهاتفي: ${p}`,
      mail_subject: 'طلب عرض من الموقع'
    },

    fr: {
      title: 'Pijama Ouargla — Mode féminine turque pudique à Ouargla',
      desc: 'Pijama Ouargla : boutique de mode féminine turque pudique au souk Lahjar, Ouargla. Livraison dans les 58 wilayas, paiement à la livraison. Commandes : 0656 33 83 43.',
      skip: 'Aller au contenu',
      announce: 'Livraison dans les 58 wilayas · Paiement à la livraison · Commandes : 0656 33 83 43',
      nav_about: 'À propos', nav_gallery: 'Galerie', nav_videos: 'Vidéos', nav_reviews: 'Avis', nav_location: 'Adresse', nav_contact: 'Contact',
      menu: 'Menu', close: 'Fermer', prev: 'Précédent', next: 'Suivant',
      theme_to_dark: 'Mode sombre', theme_to_light: 'Mode clair',
      hero_kicker: 'Mode féminine turque pudique',
      wm1: 'Pijama', wm2: 'Ouargla',
      hero_sub: 'Boutique de vêtements turcs haut de gamme — souk Lahjar, Ouargla',
      cta_order: 'Commander sur WhatsApp', cta_call: 'Appeler', cta_gallery: 'Voir la galerie',
      tk1: 'Mode turque haut de gamme', tk2: 'Livraison dans 58 wilayas', tk3: 'Paiement à la livraison', tk4: 'Souk Lahjar · Ouargla',
      intro: 'Une boutique spécialisée dans la mode féminine pudique importée de Turquie, au souk Lahjar à Ouargla. Pyjamas, ensembles en maille et survêtements aux tissus raffinés et aux détails soignés, avec livraison dans les 58 wilayas et paiement à la livraison.',
      find_out: 'Découvrir la collection',
      stat1: 'abonnés sur Facebook', stat2: 'wilayas livrées', stat3: 'publications sur Instagram', stat4: 'note sur Google Maps',
      feat_title: 'Pourquoi Pijama Ouargla',
      f1_t: 'Mode turque haut de gamme', f1_d: 'Des vêtements féminins pudiques venus de Turquie, aux coupes modernes et aux tissus raffinés, pour la maison comme pour sortir.',
      f2_t: 'Livraison dans 58 wilayas', f2_d: 'Nous livrons votre commande partout en Algérie, depuis Ouargla.',
      f3_t: 'Paiement à la livraison', f3_d: 'Vous payez à la réception de votre commande, sans paiement à l’avance.',
      gal_title: 'Galerie', gal_hint: 'Touchez une photo pour l’agrandir',
      flt_all: 'Tout', flt_sets: 'Ensembles', flt_tracks: 'Survêtements', flt_tops: 'Hauts',
      cat_sets: 'Ensemble', cat_tracks: 'Survêtement', cat_tops: 'Haut', ref: 'Réf.',
      vid_title: 'Vidéos & Reels', vid_hint: 'Découvrez les pièces en vidéo sur Instagram et Facebook',
      reel: 'Reel', watch_instagram: 'Voir sur Instagram', watch_facebook: 'Voir sur Facebook',
      rev_title: 'Avis clients', rev_count: 'sur 2 avis Google Maps', rev_cta: 'Laisser un avis',
      rev_nocomment: 'Note 5/5 sans commentaire',
      loc_title: 'Adresse', loc_addr_l: 'Adresse', loc_addr: 'Souk Lahjar, Ouargla',
      loc_code_l: 'Code Plus (Maps)', loc_hours_l: 'Horaires', loc_hours: 'Ouvert · ferme à 19h00',
      loc_phone_l: 'Téléphone', loc_dir: 'Itinéraire', loc_open: 'Ouvrir dans Google Maps',
      ct_title: 'Demander une offre', ct_hint: 'Laissez vos coordonnées et ce que vous cherchez, nous vous répondons rapidement.',
      ct_name: 'Nom', ct_phone: 'Téléphone', ct_msg: 'Que recherchez-vous ?',
      ct_msg_ph: 'Ex. : ensemble en maille marron, taille M, livraison à Oran',
      ct_err: 'Merci de remplir tous les champs.',
      ct_wa: 'Envoyer par WhatsApp', ct_mail: 'Envoyer par e-mail',
      ct_direct: 'Ou contactez-nous directement', ct_call: 'Appeler', ct_email: 'E-mail',
      tile_wa: 'Écrivez-nous directement', tile_fb: '115 k abonnés',
      toast_wa: 'Ouverture de WhatsApp…', toast_mail: 'Ouverture de la messagerie…',
      ft_note: '© 2026 Pijama Ouargla — souk Lahjar, Ouargla',
      ft_credit: 'Maquette de démonstration : Djaafar',
      float_t: 'Commander sur WhatsApp', mbar_offer: 'Offre',
      wa_msg: (n, p, m) => `Bonjour, je suis ${n}.\nJe souhaite une offre / des renseignements sur :\n${m}\nMon téléphone : ${p}`,
      mail_subject: 'Demande d’offre depuis le site'
    },

    en: {
      title: 'Pijama Ouargla — Modest Turkish womenswear in Ouargla',
      desc: 'Pijama Ouargla: modest Turkish womenswear at Souk Lahjar, Ouargla, Algeria. Delivery to all 58 wilayas, cash on delivery. Orders: 0656 33 83 43.',
      skip: 'Skip to content',
      announce: 'Delivery to all 58 wilayas · Cash on delivery · Orders: 0656 33 83 43',
      nav_about: 'About', nav_gallery: 'Gallery', nav_videos: 'Videos', nav_reviews: 'Reviews', nav_location: 'Location', nav_contact: 'Contact',
      menu: 'Menu', close: 'Close', prev: 'Previous', next: 'Next',
      theme_to_dark: 'Dark mode', theme_to_light: 'Light mode',
      hero_kicker: 'Modest Turkish womenswear',
      wm1: 'Pijama', wm2: 'Ouargla',
      hero_sub: 'Premium Turkish clothing store — Souk Lahjar, Ouargla',
      cta_order: 'Order on WhatsApp', cta_call: 'Call us', cta_gallery: 'View the gallery',
      tk1: 'Premium Turkish fashion', tk2: 'Delivery to 58 wilayas', tk3: 'Cash on delivery', tk4: 'Souk Lahjar · Ouargla',
      intro: 'A store specialising in modest womenswear imported from Turkey, located at Souk Lahjar in Ouargla. Pyjamas, knit sets and tracksuits in refined fabrics with elegant details — delivered to all 58 wilayas, with cash on delivery.',
      find_out: 'Discover the collection',
      stat1: 'Facebook followers', stat2: 'wilayas delivered to', stat3: 'Instagram posts', stat4: 'rating on Google Maps',
      feat_title: 'Why Pijama Ouargla',
      f1_t: 'Premium Turkish fashion', f1_d: 'Modest womenswear from Turkey with modern cuts and refined fabrics, for home and for going out.',
      f2_t: 'Delivery to 58 wilayas', f2_d: 'We ship your order anywhere in Algeria, straight from Ouargla.',
      f3_t: 'Cash on delivery', f3_d: 'You pay when your order arrives, with no advance payment.',
      gal_title: 'Gallery', gal_hint: 'Tap any photo to enlarge it',
      flt_all: 'All', flt_sets: 'Sets', flt_tracks: 'Tracksuits', flt_tops: 'Tops',
      cat_sets: 'Set', cat_tracks: 'Tracksuit', cat_tops: 'Top', ref: 'Ref.',
      vid_title: 'Videos & Reels', vid_hint: 'See the pieces on video on Instagram and Facebook',
      reel: 'Reel', watch_instagram: 'Watch on Instagram', watch_facebook: 'Watch on Facebook',
      rev_title: 'Customer reviews', rev_count: 'from 2 Google Maps reviews', rev_cta: 'Write a review',
      rev_nocomment: 'Rated 5/5, no comment',
      loc_title: 'Location', loc_addr_l: 'Address', loc_addr: 'Souk Lahjar, Ouargla',
      loc_code_l: 'Maps plus code', loc_hours_l: 'Opening hours', loc_hours: 'Open · closes at 7:00 PM',
      loc_phone_l: 'Phone', loc_dir: 'Get directions', loc_open: 'Open in Google Maps',
      ct_title: 'Request an offer', ct_hint: 'Leave your details and what you are looking for, and we will get back to you soon.',
      ct_name: 'Name', ct_phone: 'Phone number', ct_msg: 'What are you looking for?',
      ct_msg_ph: 'e.g. brown knit set, size M, delivery to Oran',
      ct_err: 'Please fill in all fields.',
      ct_wa: 'Send via WhatsApp', ct_mail: 'Send via e-mail',
      ct_direct: 'Or get in touch directly', ct_call: 'Call', ct_email: 'E-mail',
      tile_wa: 'Message us directly', tile_fb: '115K followers',
      toast_wa: 'Opening WhatsApp…', toast_mail: 'Opening your mail app…',
      ft_note: '© 2026 Pijama Ouargla — Souk Lahjar, Ouargla',
      ft_credit: 'Demo design: Djaafar',
      float_t: 'Order on WhatsApp', mbar_offer: 'Offer',
      wa_msg: (n, p, m) => `Hello, my name is ${n}.\nI would like an offer / more information about:\n${m}\nMy phone: ${p}`,
      mail_subject: 'Offer request from the website'
    }
  };

  /* ---------------------------------------------------
     3) Logic
     --------------------------------------------------- */
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;
  root.classList.add('js-ok');                       // enables the reveal / intro animations in CSS
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };

  let lang = I18N[root.lang] ? root.lang : 'ar';
  const t = (k) => (I18N[lang][k] !== undefined ? I18N[lang][k] : I18N.en[k]);
  const pad = (n) => String(n).padStart(2, '0');
  const ico = (name, cls = '') => `<svg class="ico ${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;

  /* ---- View transition helper (language cross-fade / theme reveal) ---- */
  const canVT = typeof document.startViewTransition === 'function' && !reduce;

  /* ---- Contact links ---- */
  const waUrl = (text) => `https://wa.me/${CONFIG.phoneIntl}${text ? '?text=' + encodeURIComponent(text) : ''}`;
  const mapsEnc = encodeURIComponent(CONFIG.mapsQuery);
  const LINKS = {
    wa: waUrl(),
    tel: `tel:+${CONFIG.phoneIntl}`,
    mail: `mailto:${CONFIG.email}`,
    fb: CONFIG.facebook,
    ig: CONFIG.instagram,
    maps: `https://www.google.com/maps/search/?api=1&query=${mapsEnc}`,
    dir: `https://www.google.com/maps/dir/?api=1&destination=${mapsEnc}`
  };
  $$('[data-link]').forEach((a) => { const u = LINKS[a.dataset.link]; if (u) a.href = u; });
  $$('[data-fill="email"]').forEach((el) => { el.textContent = CONFIG.email; });

  /* ---- Language ---- */
  function applyLang(l, save) {
    if (!I18N[l]) l = 'ar';
    lang = l;
    root.lang = l;
    root.dir = l === 'ar' ? 'rtl' : 'ltr';
    if (save) store.set('po-lang', l);

    document.title = t('title');
    const md = $('meta[name="description"]'); if (md) md.content = t('desc');

    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-ph]').forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    $$('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));

    updateThemeLabel();
    renderFilters();
    updateCaptions();
    renderReels();
    buildTicker();
    if (!$('#lb').hidden) updateLightbox(true);
  }
  function setLang(l) {
    if (l === lang) return;
    if (canVT) document.startViewTransition(() => applyLang(l, true));
    else applyLang(l, true);
  }

  /* ---- Theme (dark mode) ---- */
  const metaTheme = $('meta[name="theme-color"]');
  function applyTheme(th, save) {
    root.dataset.theme = th;
    if (save) store.set('po-theme', th);
    if (metaTheme) metaTheme.content = th === 'dark' ? '#14120e' : '#f4f1e4';
    updateThemeLabel();
  }
  function updateThemeLabel() {
    const label = root.dataset.theme === 'dark' ? t('theme_to_light') : t('theme_to_dark');
    $$('.js-theme-label').forEach((el) => { el.textContent = label; });
    const b = $('.theme-btn'); if (b) b.setAttribute('aria-label', label);
  }
  function toggleTheme(btn) {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    const run = () => applyTheme(next, true);
    if (!canVT) { run(); return; }
    const r = btn.getBoundingClientRect();
    const x = r.left + r.width / 2, y = r.top + r.height / 2;
    const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    root.classList.add('vt-theme');                  // expanding circle from the button
    const vt = document.startViewTransition(run);
    vt.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
        { duration: 750, easing: 'cubic-bezier(.4,0,.2,1)', pseudoElement: '::view-transition-new(root)' }
      );
    }).catch(() => {});
    vt.finished.finally(() => root.classList.remove('vt-theme'));
  }
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener && mq.addEventListener('change', (e) => {
    if (!store.get('po-theme')) applyTheme(e.matches ? 'dark' : 'light', false);
  });

  /* ---- Toast ---- */
  const toastEl = $('#toast');
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2600);
  }

  /* ---- Gallery ---- */
  const grid = $('#grid');
  const filtersEl = $('#filters');
  let activeFilter = 'all';
  const CATS = ['all', 'sets', 'tracks', 'tops'];

  function buildGallery() {
    CONFIG.gallery.forEach((cat, i) => {
      const fig = document.createElement('figure');
      fig.className = 'card rv';
      fig.style.setProperty('--i', i % 5);
      fig.dataset.cat = cat;
      fig.dataset.idx = i;
      const src = `images/gallery/${pad(i + 1)}.jpg`;
      fig.innerHTML =
        `<button type="button" class="card__btn" data-open="${i}">` +
        `<span class="card__ph">${pad(i + 1)}</span>` +
        `<img src="${src}" alt="" width="600" height="800" loading="lazy" decoding="async">` +
        `<span class="card__zoom">${ico('expand')}</span>` +
        `</button>` +
        `<figcaption><b>Pijama Ouargla</b><span data-cap></span></figcaption>`;
      const img = $('img', fig);
      img.addEventListener('error', () => img.remove());
      grid.appendChild(fig);
    });
  }
  function capText(i) { return `${t('cat_' + CONFIG.gallery[i])} · ${t('ref')} ${pad(i + 1)}`; }
  function updateCaptions() {
    $$('.card', grid).forEach((fig) => {
      const i = +fig.dataset.idx;
      $('[data-cap]', fig).textContent = capText(i);
      $('.card__btn', fig).setAttribute('aria-label', capText(i));
    });
  }
  function renderFilters() {
    filtersEl.innerHTML = '';
    CATS.forEach((c) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.dataset.filter = c;
      b.textContent = t('flt_' + c);
      b.setAttribute('aria-pressed', String(c === activeFilter));
      filtersEl.appendChild(b);
    });
  }
  function applyFilter(c) {
    activeFilter = c;
    let k = 0;
    $$('.card', grid).forEach((fig) => {
      const show = c === 'all' || fig.dataset.cat === c;
      fig.hidden = !show;
      if (show) {                                    // re-trigger the pop-in, staggered
        fig.classList.add('in');
        fig.classList.remove('pop');
        void fig.offsetWidth;
        fig.style.setProperty('--k', k++);
        fig.classList.add('pop');
      }
    });
    $$('button', filtersEl).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === c)));
  }
  const visibleIdx = () => $$('.card', grid).filter((f) => !f.hidden).map((f) => +f.dataset.idx);

  /* ---- Lightbox ---- */
  const lb = $('#lb'), lbImg = $('#lbImg'), lbCap = $('#lbCap'), lbCount = $('#lbCount'), lbPh = $('#lbPh');
  let lbList = [], lbPos = 0, lastFocus = null, lbTimer;

  function updateLightbox(instant) {
    const i = lbList[lbPos];
    const paint = () => {
      lbPh.textContent = pad(i + 1);
      lbImg.style.visibility = 'visible';
      lbImg.onerror = () => { lbImg.style.visibility = 'hidden'; };
      lbImg.src = `images/gallery/${pad(i + 1)}.jpg`;
      lbImg.alt = capText(i);
      lbImg.classList.remove('is-out');
    };
    lbCap.textContent = capText(i);
    lbCount.textContent = `${lbPos + 1} / ${lbList.length}`;
    clearTimeout(lbTimer);
    if (instant || reduce) paint();
    else { lbImg.classList.add('is-out'); lbTimer = setTimeout(paint, 170); }
  }
  function openLightbox(i) {
    lbList = visibleIdx();
    lbPos = Math.max(0, lbList.indexOf(i));
    lastFocus = document.activeElement;
    lb.hidden = false;
    document.body.classList.add('no-scroll');
    updateLightbox(true);
    $('.lb__x', lb).focus();
  }
  function closeLightbox() {
    lb.hidden = true;
    document.body.classList.remove('no-scroll');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function stepLightbox(d) {
    lbPos = (lbPos + d + lbList.length) % lbList.length;
    updateLightbox(false);
  }

  grid.addEventListener('click', (e) => {
    const b = e.target.closest('[data-open]');
    if (b) openLightbox(+b.dataset.open);
  });
  filtersEl.addEventListener('click', (e) => {
    const b = e.target.closest('[data-filter]');
    if (b) applyFilter(b.dataset.filter);
  });
  lb.addEventListener('click', (e) => {
    const a = e.target.closest('[data-lb]');
    if (a) {
      const k = a.dataset.lb;
      if (k === 'close') closeLightbox();
      else stepLightbox(k === 'next' ? 1 : -1);
    } else if (e.target === lb) closeLightbox();
  });
  let touchX = null;
  lb.addEventListener('touchstart', (e) => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) < 50) return;
    // LTR: swipe left = next · RTL: swipe right = next
    const next = root.dir === 'rtl' ? dx > 0 : dx < 0;
    stepLightbox(next ? 1 : -1);
  }, { passive: true });

  /* ---- Reels ---- */
  const reelsEl = $('#reels');
  function renderReels() {
    reelsEl.innerHTML = '';
    CONFIG.reels.forEach((r, i) => {
      const a = document.createElement('a');
      a.className = 'reel rv in';                    // already visible: re-rendered on language change
      a.style.setProperty('--i', i);
      a.href = r.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.innerHTML =
        `<div class="reel__thumb"><span class="reel__ph">${t('reel')} ${pad(i + 1)}</span>` +
        `<img src="${r.thumb}" alt="" loading="lazy" decoding="async">` +
        `<span class="reel__plat">${ico(r.platform)}</span>` +
        `<span class="reel__play"><span>${ico('play', 'ico--fill')}</span></span></div>` +
        `<div class="reel__meta"><b>${t('reel')} ${pad(i + 1)}</b><u>${t('watch_' + r.platform)}</u></div>`;
      const img = $('img', a);
      img.addEventListener('error', () => img.remove());
      reelsEl.appendChild(a);
    });
  }

  /* ---- Ticker (seamless loop, rebuilt per language) ---- */
  const tickerTrack = $('#tickerTrack'), tickerGroup = $('#tickerGroup');
  function buildTicker() {
    if (!tickerTrack) return;
    $$('.ticker__group.clone', tickerTrack).forEach((n) => n.remove());
    const w = tickerGroup.offsetWidth;
    if (!w) return;
    const perHalf = Math.max(1, Math.ceil(window.innerWidth / w) + 1);
    for (let i = 0; i < perHalf * 2 - 1; i++) {
      const c = tickerGroup.cloneNode(true);
      c.removeAttribute('id');
      c.classList.add('clone');
      $$('[data-i18n]', c).forEach((el) => el.removeAttribute('data-i18n'));
      tickerTrack.appendChild(c);
    }
    tickerTrack.style.setProperty('--tick-dur', Math.round((w * perHalf) / 55) + 's');   // ~55px per second
  }

  /* ---- Header: transparent over hero, solid after ---- */
  const hdr = $('#hdr'), hero = $('.hero'), heroBg = $('#heroBg'), progress = $('#progress');
  let ticking = false;
  function onScroll() {
    ticking = false;
    const y = window.scrollY;
    hdr.classList.toggle('on-hero', hero.getBoundingClientRect().bottom > hdr.offsetHeight);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.setProperty('--p', max > 0 ? Math.min(1, y / max).toFixed(4) : 0);
    if (!reduce && y < window.innerHeight * 1.3) heroBg.style.setProperty('--py', (y * 0.22).toFixed(1) + 'px');
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  let rsz;
  window.addEventListener('resize', () => { onScroll(); clearTimeout(rsz); rsz = setTimeout(buildTicker, 200); });

  /* ---- Mobile menu ---- */
  const menu = $('#menu'), menuBtn = $('.menu-btn');
  function setMenu(open) {
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    document.body.classList.toggle('no-scroll', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.dataset.i18nAria = open ? 'close' : 'menu';
    menuBtn.setAttribute('aria-label', t(open ? 'close' : 'menu'));
  }
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  window.matchMedia('(min-width: 900px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* ---- Global clicks ---- */
  document.addEventListener('click', (e) => {
    const lg = e.target.closest('[data-lang]');
    if (lg) { setLang(lg.dataset.lang); return; }
    const act = e.target.closest('[data-action]');
    if (!act) return;
    if (act.dataset.action === 'theme') toggleTheme(act);
    if (act.dataset.action === 'menu') setMenu(menu.hidden);
  });

  /* ---- Keyboard ---- */
  document.addEventListener('keydown', (e) => {
    if (!lb.hidden) {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') stepLightbox(root.dir === 'rtl' ? -1 : 1);
      else if (e.key === 'ArrowLeft') stepLightbox(root.dir === 'rtl' ? 1 : -1);
      else if (e.key === 'Tab') {
        const f = $$('button', lb);
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    } else if (e.key === 'Escape' && !menu.hidden) setMenu(false);
  });

  /* ---- Contact form → WhatsApp / e-mail ---- */
  const form = $('#form'), formErr = $('#formErr');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const msg = form.msg.value.trim();
    let ok = true;
    [['name', name], ['phone', phone], ['msg', msg]].forEach(([k, v]) => {
      const bad = !v;
      const f = form[k].closest('.field');
      f.classList.remove('bad');
      if (bad) { void f.offsetWidth; f.classList.add('bad'); }
      form[k].setAttribute('aria-invalid', String(bad));
      if (bad) ok = false;
    });
    formErr.hidden = ok;
    if (!ok) { const first = [form.name, form.phone, form.msg].find((f) => !f.value.trim()); first && first.focus(); return; }

    const text = I18N[lang].wa_msg(name, phone, msg);
    const via = (e.submitter && e.submitter.dataset.send) || 'wa';
    if (via === 'mail') {
      toast(t('toast_mail'));
      location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(t('mail_subject'))}&body=${encodeURIComponent(text)}`;
    } else {
      toast(t('toast_wa'));
      window.open(waUrl(text), '_blank', 'noopener');
    }
  });

  /* ---- Reveal on scroll + count-up + active nav ---- */
  function countUp(el) {
    const to = parseFloat(el.dataset.to), dec = +(el.dataset.dec || 0);
    const sep = el.dataset.sep || '', suf = el.dataset.suffix || '';
    const fmt = (v) => {
      let s = v.toFixed(dec);
      if (sep) s = s.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
      return s + suf;
    };
    if (reduce) { el.textContent = fmt(to); return; }
    const dur = 1700, t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      el.textContent = fmt(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  function setupObservers() {
    const rv = $$('.rv');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.classList.add('in');
          const n = $('[data-count]', en.target);
          if (n && !n.dataset.done) { n.dataset.done = '1'; countUp(n); }
          io.unobserve(en.target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      rv.forEach((el) => io.observe(el));

      const links = new Map($$('[data-nav]').map((a) => [a.dataset.nav, a]));
      const so = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          links.forEach((a) => a.classList.remove('active'));
          const a = links.get(en.target.id); if (a) a.classList.add('active');
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      links.forEach((_, id) => { const s = document.getElementById(id); if (s) so.observe(s); });
    } else {
      rv.forEach((el) => el.classList.add('in'));
      $$('[data-count]').forEach(countUp);
    }
  }

  /* ---- Preloader → hero intro ---- */
  const pre = $('#pre');
  function finishLoading() {
    root.classList.add('ready');
    setTimeout(() => { root.classList.remove('loading'); if (pre) pre.remove(); }, 950);
  }
  function startPage() {
    try { sessionStorage.setItem('po-seen', '1'); } catch (e) { /* ignore */ }
    if (!root.classList.contains('loading')) { root.classList.add('ready'); if (pre) pre.remove(); return; }
    const minWait = new Promise((r) => setTimeout(r, 1600));
    const loaded = new Promise((r) => (document.readyState === 'complete' ? r() : window.addEventListener('load', r, { once: true })));
    Promise.all([minWait, loaded]).then(() => {
      pre.classList.add('out');
      setTimeout(finishLoading, 380);               // hero text starts rising while the curtain lifts
    });
  }

  /* ---- Init ---- */
  buildGallery();
  applyTheme(root.dataset.theme === 'dark' ? 'dark' : 'light', false);
  applyLang(lang, false);
  setupObservers();
  onScroll();
  startPage();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(buildTicker);
})();

Comment utiliser ca /**
 * KLYX — Système multilingue (Arabe / Français)
 * ─────────────────────────────────────────────
 * Comment utiliser :
 *   Ajoutez simplement cette ligne AVANT </body> dans index.html :
 *   <script src="i18n.js"></script>
 *
 * Ce fichier ne modifie RIEN dans index.html.
 * Il injecte le bouton de langue et gère la traduction.
 */

(function () {

  /* ═══════════════════════════════════════════════════
     1. DICTIONNAIRE
  ═══════════════════════════════════════════════════ */
  const translations = {
    ar: {
      /* <title> */
      pageTitle: "KLYX — حلول NFC الذكية",

      /* NAV */
      navHow: "كيف يعمل",
      navProducts: "المنتجات",
      navFeatures: "المميزات",
      navOrder: "اطلب الآن",

      /* HERO */
      heroPill: "تقنية NFC الذكية — الجيل الجديد",
      heroH1: "KLYX —<br>حلول ذكية<br><span class=\"grad-text\">بدون تلامس</span>",
      heroSub: "حلول رقمية للأعمال الحديثة باستخدام NFC",
      heroSub2: "بسّط تواصلك وخلي تجربتك أسرع وأكثر احترافية",
      heroBtn1: "اكتشف المنتجات",
      heroBtn2: "المميزات",
      heroHint: "قرّب بطاقتك من الهاتف",
      heroCardLabel: "بطاقتك الذكية",
      heroScroll: "اسكرول",

      /* HOW */
      howPill: "⚡ كيف يعمل",
      howTitle: "ثلاث خطوات نحو <span class=\"grad-text\">هوية بلا حدود</span>",
      step1Title: "خصّص ملفك الشخصي",
      step1Desc: "أعدّ مساحتك الرقمية — صورتك، روابطك، معلومات التواصل، وكل ما يمثلك.",
      step2Title: "قرّب بطاقتك من الهاتف",
      step2Desc: "قرّب بطاقة Klyx أو مفتاحك NFC من هاتف أي شخص. بدون تطبيق — يشتغل مباشرة على iOS و Android.",
      step3Title: "ملفك يفتح فوراً",
      step3Desc: "صفحة أنيقة ومهنية تظهر في ثانية — معلومات التواصل، الروابط، الشبكات. الانطباع المثالي في كل لقاء.",

      /* FEATURES */
      featPill: "✦ المميزات",
      featTitle: "كل اللي تحتاجه<br><span class=\"grad-text\">في بطاقة واحدة</span>",
      feat1Title: "بطاقات NFC ذكية",
      feat1Desc: "تقنية NFC مدمجة — تشتغل مع كل الهواتف الحديثة بدون إعداد",
      feat2Title: "مشاركة فورية بدون تطبيقات",
      feat2Desc: "لا تحميل، لا QR ، لا تأخير — قط قرب وكهو",
      feat3Title: "تخصيص كامل لبيزنسك",
      feat3Desc: "غير ملفك في أي وقت من خلال الاتصال بينا — بدون بطاقة جديدة",
      feat4Title: "تجربة عصرية لعملائك",
      feat4Desc: "اترك انطباعاً احترافياً يُعبّر عن مستواك الحقيقي",
      feat5Title: "تحكم كامل في بياناتك",
      feat5Desc: "أنت من يقرر ما يُعرض — خصوصيتك محفوظة دائماً",
      fpRole: "مدير تجاري",

      /* PRODUCTS */
      prodPill: "🛍 منتجاتنا",
      prodTitle: "اختار <span class=\"grad-text\">المنتج</span> المناسب",
      prodFeature1: "سرعة",
      prodFeature1Sub: "في الاستخدام",
      prodFeature2: "تصميم",
      prodFeature2Sub: "فاخر",
      prodFeature3: "مناسب",
      prodFeature3Sub: "لكل الأنشطة",
      prod1Badge: "⭐ الأكثر طلباً",
      prod1Name: "Klyx Card — بطاقة NFC",
      prod1Desc: "بطاقة العمل المُعاد اختراعها. حجم قياسي، فاخر، شريحة NFC مدمجة. دائمة، أنيقة، لا تُنسى.",
      prod1Sub: "للبطاقة الواحدة — شحن مجاني",
      prod2Name: "Klyx حامل المفاتيح — porte-clé NFC",
      prod2Desc: "دايماً معاك. حامل المفاتيح NFC صغير يرافق يومياتك — خفيف، عملي، واحترافي في نفس الوقت.",
      prod2Sub: "للقطعة الواحدة — شحن مجاني",
      prod3Badge: "⭐ للمحلات",
      prod3Name: "Klyx Stand — Google Review",
      prod3Desc: "أداة احترافية لمحلك أو مطعمك. زبونك يقرب هاتفه أو يسكن QR — مباشرة لصفحة Google Review تاعك.",
      prod3Sub: "للقطعة — شحن مجاني",
      prod4Name: "Klyx Menu — منيو NFC دائري",
      prod4Desc: "منيو رقمي للمطاعم والمقاهي والبارات. تاغ NFC دائري من الإيبوكسي يوضع على الطاولة — زبونك يقرب هاتفه أو يسكن QR وينفتحله المنيو فوراً. بدون ورق، بدون تطبيق.",
      prod4Sub: "للقطعة — مقاوم للماء والخدش",
      tag1: "🍽 مطاعم",
      tag2: "☕ مقاهي",
      tag3: "🍹 بارات",
      orderBtn: "🛒 اطلب الآن",

      /* STATS */
      stat1: "عميل راضي",
      stat2: "وقت الفتح",
      stat3: "متوافق iOS & Android",

      /* CTA */
      ctaTitle: "مستعد تترك <span class=\"grad-text\">انطباع لا يُنسى؟</span>",
      ctaDesc: "انضم لمئات المحترفين اللي يتواصلوا بطريقة مختلفة",
      ctaBtn1: "اطلب بطاقتك الآن",
      ctaBtn2: "تعرف على الباقات",

      /* CONTACT */
      contactFollow: "تابعنا علي",
      contactUs: "تواصل معنا",

      /* FOOTER */
      footerCopy: "© 2026 Klyx. جميع الحقوق محفوظة.",

      /* MODAL */
      modalTitle: "🛒 اطلب المنتج",
      modalName: "الاسم الكامل",
      modalPhone: "رقم الهاتف",
      modalCity: "المدينة",
      modalQty: "الكمية",
      modalSend: "إرسال الطلب عبر WhatsApp ✉",
      modalNote: "سيتم إرسال طلبك مباشرة إلى WhatsApp",
      modalValidation: "من فضلك أدخل الاسم ورقم الهاتف",
      waProduct: "المنتج",
      waName: "الاسم",
      waPhone: "الهاتف",
      waCity: "المدينة",
      waQty: "الكمية",
      waHeader: "🛒 طلب جديد KLYX",
    },

    fr: {
      /* <title> */
      pageTitle: "KLYX — Solutions NFC Intelligentes",

      /* NAV */
      navHow: "Comment ça marche",
      navProducts: "Produits",
      navFeatures: "Fonctionnalités",
      navOrder: "Commander",

      /* HERO */
      heroPill: "Technologie NFC — Nouvelle Génération",
      heroH1: "KLYX —<br>Solutions intelligentes<br><span class=\"grad-text\">sans contact</span>",
      heroSub: "Solutions numériques pour les entreprises modernes avec NFC",
      heroSub2: "Simplifiez vos échanges et offrez une expérience plus rapide et professionnelle",
      heroBtn1: "Découvrir les produits",
      heroBtn2: "Fonctionnalités",
      heroHint: "Approchez votre carte du téléphone",
      heroCardLabel: "Votre carte intelligente",
      heroScroll: "Défiler",

      /* HOW */
      howPill: "⚡ Comment ça marche",
      howTitle: "Trois étapes vers <span class=\"grad-text\">une identité sans limites</span>",
      step1Title: "Personnalisez votre profil",
      step1Desc: "Configurez votre espace numérique — photo, liens, coordonnées et tout ce qui vous représente.",
      step2Title: "Approchez votre carte du téléphone",
      step2Desc: "Approchez votre carte Klyx ou votre porte-clé NFC de n'importe quel téléphone. Sans app — fonctionne directement sur iOS et Android.",
      step3Title: "Votre profil s'ouvre instantanément",
      step3Desc: "Une page élégante et professionnelle apparaît en une seconde — coordonnées, liens, réseaux. L'impression parfaite à chaque rencontre.",

      /* FEATURES */
      featPill: "✦ Fonctionnalités",
      featTitle: "Tout ce dont vous avez besoin<br><span class=\"grad-text\">en une seule carte</span>",
      feat1Title: "Cartes NFC intelligentes",
      feat1Desc: "Technologie NFC intégrée — compatible avec tous les smartphones modernes sans configuration",
      feat2Title: "Partage instantané sans application",
      feat2Desc: "Pas de téléchargement, pas de QR, pas d'attente — approchez et c'est fait",
      feat3Title: "Personnalisation complète",
      feat3Desc: "Modifiez votre profil à tout moment en nous contactant — sans nouvelle carte",
      feat4Title: "Expérience moderne pour vos clients",
      feat4Desc: "Laissez une impression professionnelle qui reflète votre vrai niveau",
      feat5Title: "Contrôle total de vos données",
      feat5Desc: "Vous décidez ce qui s'affiche — votre confidentialité est toujours protégée",
      fpRole: "Directeur commercial",

      /* PRODUCTS */
      prodPill: "🛍 Nos produits",
      prodTitle: "Choisissez le <span class=\"grad-text\">produit</span> adapté",
      prodFeature1: "Rapidité",
      prodFeature1Sub: "d'utilisation",
      prodFeature2: "Design",
      prodFeature2Sub: "premium",
      prodFeature3: "Adapté",
      prodFeature3Sub: "à tous les métiers",
      prod1Badge: "⭐ Le plus demandé",
      prod1Name: "Klyx Card — Carte NFC",
      prod1Desc: "La carte de visite réinventée. Format standard, premium, puce NFC intégrée. Durable, élégante, inoubliable.",
      prod1Sub: "Par carte — Livraison gratuite",
      prod2Name: "Klyx Key — Porte-clé NFC",
      prod2Desc: "Toujours avec vous. Un petit porte-clé NFC qui accompagne votre quotidien — léger, pratique et professionnel à la fois.",
      prod2Sub: "Par pièce — Livraison gratuite",
      prod3Badge: "⭐ Pour les commerces",
      prod3Name: "Klyx Stand — Google Review",
      prod3Desc: "Un outil professionnel pour votre commerce ou restaurant. Votre client approche son téléphone ou scanne le QR — directement vers votre page Google Review.",
      prod3Sub: "Par pièce — Livraison gratuite",
      prod4Name: "Klyx Menu — Menu NFC rond",
      prod4Desc: "Menu numérique pour restaurants, cafés et bars. Tag NFC rond en époxy posé sur la table — votre client approche son téléphone ou scanne le QR et le menu s'ouvre immédiatement. Sans papier, sans application.",
      prod4Sub: "Par pièce — Résistant à l'eau et aux rayures",
      tag1: "🍽 Restaurants",
      tag2: "☕ Cafés",
      tag3: "🍹 Bars",
      orderBtn: "🛒 Commander",

      /* STATS */
      stat1: "clients satisfaits",
      stat2: "temps d'ouverture",
      stat3: "Compatible iOS & Android",

      /* CTA */
      ctaTitle: "Prêt à laisser une <span class=\"grad-text\">impression inoubliable ?</span>",
      ctaDesc: "Rejoignez des centaines de professionnels qui se connectent différemment",
      ctaBtn1: "Commander votre carte",
      ctaBtn2: "Voir les offres",

      /* CONTACT */
      contactFollow: "Suivez-nous sur",
      contactUs: "Contactez-nous",

      /* FOOTER */
      footerCopy: "© 2026 Klyx. Tous droits réservés.",

      /* MODAL */
      modalTitle: "🛒 Commander le produit",
      modalName: "Nom complet",
      modalPhone: "Numéro de téléphone",
      modalCity: "Ville",
      modalQty: "Quantité",
      modalSend: "Envoyer la commande via WhatsApp ✉",
      modalNote: "Votre commande sera envoyée directement sur WhatsApp",
      modalValidation: "Veuillez entrer votre nom et numéro de téléphone",
      waProduct: "Produit",
      waName: "Nom",
      waPhone: "Téléphone",
      waCity: "Ville",
      waQty: "Quantité",
      waHeader: "🛒 Nouvelle commande KLYX",
    }
  };

  /* ═══════════════════════════════════════════════════
     2. ÉTAT INITIAL
  ═══════════════════════════════════════════════════ */
  let currentLang = localStorage.getItem("klyx_lang") || "ar";

  /* ═══════════════════════════════════════════════════
     3. BOUTON DE LANGUE (injecté dans la nav)
  ═══════════════════════════════════════════════════ */
  function injectLangButton() {
    const style = document.createElement("style");
    style.textContent = `
      #klyx-lang-switcher {
        display: flex;
        align-items: center;
        gap: 4px;
        background: rgba(124,58,237,.07);
        border: 1.5px solid rgba(124,58,237,.22);
        border-radius: 50px;
        padding: 4px 6px;
        cursor: none;
        transition: box-shadow .2s, border-color .2s;
        margin-right: 10px;
      }
      #klyx-lang-switcher:hover {
        border-color: rgba(124,58,237,.5);
        box-shadow: 0 4px 14px rgba(124,58,237,.18);
      }
      .klyx-lang-btn {
        font-family: 'Syne', sans-serif;
        font-weight: 800;
        font-size: .72rem;
        letter-spacing: .05em;
        border: none;
        background: transparent;
        padding: 4px 10px;
        border-radius: 50px;
        cursor: none;
        transition: background .25s, color .25s;
        color: var(--text-soft);
      }
      .klyx-lang-btn.active {
        background: var(--grad);
        color: white;
        box-shadow: 0 2px 10px rgba(124,58,237,.35);
      }
      .klyx-lang-btn:hover:not(.active) {
        color: var(--purple);
      }
    `;
    document.head.appendChild(style);

    const switcher = document.createElement("div");
    switcher.id = "klyx-lang-switcher";
    switcher.innerHTML = `
      <button class="klyx-lang-btn" data-lang="ar" id="btn-ar">العربية</button>
      <button class="klyx-lang-btn" data-lang="fr" id="btn-fr">Français</button>
    `;

    // Insérer avant le logo dans la nav
    const nav = document.querySelector("nav");
    if (nav) nav.insertBefore(switcher, nav.firstChild);

    switcher.querySelectorAll(".klyx-lang-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        setLang(btn.dataset.lang);
      });
      // cursor hover effect
      btn.addEventListener("mouseenter", () => {
        document.getElementById("cur")?.classList.add("big");
        document.getElementById("ring")?.classList.add("big");
      });
      btn.addEventListener("mouseleave", () => {
        document.getElementById("cur")?.classList.remove("big");
        document.getElementById("ring")?.classList.remove("big");
      });
    });
  }

  /* ═══════════════════════════════════════════════════
     4. APPLIQUER LA LANGUE
  ═══════════════════════════════════════════════════ */
  function applyLang(lang) {
    const t = translations[lang];
    const isRTL = lang === "ar";

    // Direction & lang attribute
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";

    // Police : Tajawal pour AR, Outfit pour FR
    if (!isRTL) {
      if (!document.getElementById("klyx-fr-font")) {
        const link = document.createElement("link");
        link.id = "klyx-fr-font";
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;800&display=swap";
        document.head.appendChild(link);
      }
      document.body.style.fontFamily = "'Outfit', sans-serif";
    } else {
      document.body.style.fontFamily = "'Tajawal', sans-serif";
    }

    // Titre de la page
    document.title = t.pageTitle;

    // Boutons actifs
    document.querySelectorAll(".klyx-lang-btn").forEach(b => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });

    /* ── HELPERS ── */
    const setText = (selector, key, html = false) => {
      const el = document.querySelector(selector);
      if (!el || !t[key]) return;
      html ? (el.innerHTML = t[key]) : (el.textContent = t[key]);
    };
    const setAll = (selector, key, html = false) => {
      document.querySelectorAll(selector).forEach(el => {
        if (t[key]) html ? (el.innerHTML = t[key]) : (el.textContent = t[key]);
      });
    };
    const setAttr = (selector, attr, key) => {
      const el = document.querySelector(selector);
      if (el && t[key]) el.setAttribute(attr, t[key]);
    };

    /* ── NAV ── */
    const navLinks = document.querySelectorAll("nav ul li a");
    if (navLinks.length >= 4) {
      navLinks[0].textContent = t.navHow;
      navLinks[1].textContent = t.navProducts;
      navLinks[2].textContent = t.navFeatures;
      navLinks[3].textContent = t.navOrder;
    }

    /* ── HERO ── */
    const pill = document.querySelector(".pill");
    if (pill) {
      const dot = pill.querySelector(".dot");
      pill.innerHTML = "";
      if (dot) pill.appendChild(dot);
      pill.appendChild(document.createTextNode(" " + t.heroPill));
    }
    const h1 = document.querySelector("h1");
    if (h1) h1.innerHTML = t.heroH1;

    const heroSubs = document.querySelectorAll(".hero-sub, .hero-sub2");
    if (heroSubs[0]) heroSubs[0].textContent = t.heroSub;
    if (heroSubs[1]) heroSubs[1].textContent = t.heroSub2;

    const heroActions = document.querySelector(".hero .actions");
    if (heroActions) {
      const btns = heroActions.querySelectorAll("button, a");
      if (btns[0]) btns[0].textContent = t.heroBtn1;
      if (btns[1]) btns[1].textContent = t.heroBtn2;
    }

    const hintTxt = document.querySelector(".hint-txt");
    if (hintTxt) hintTxt.textContent = t.heroHint;

    const cardLabel = document.querySelector(".card-label");
    if (cardLabel) cardLabel.textContent = t.heroCardLabel;

    const shint = document.querySelector(".shint");
    if (shint) {
      const sl = shint.querySelector(".sl");
      shint.innerHTML = "";
      if (sl) shint.appendChild(sl);
      shint.appendChild(document.createTextNode(" " + t.heroScroll));
    }

    /* ── HOW ── */
    const howSection = document.querySelector(".how");
    if (howSection) {
      const howPill = howSection.querySelector(".section-pill");
      if (howPill) howPill.textContent = t.howPill;

      const howTitle = howSection.querySelector(".sec-title");
      if (howTitle) howTitle.innerHTML = t.howTitle;

      const steps = howSection.querySelectorAll(".step");
      const stepData = [
        { title: t.step1Title, desc: t.step1Desc },
        { title: t.step2Title, desc: t.step2Desc },
        { title: t.step3Title, desc: t.step3Desc },
      ];
      steps.forEach((step, i) => {
        const h3 = step.querySelector("h3");
        const p = step.querySelector("p");
        if (h3 && stepData[i]) h3.textContent = stepData[i].title;
        if (p && stepData[i]) p.textContent = stepData[i].desc;
      });
    }

    /* ── FEATURES ── */
    const featSection = document.querySelector(".features");
    if (featSection) {
      const featPill = featSection.querySelector(".section-pill");
      if (featPill) featPill.textContent = t.featPill;

      const featTitle = featSection.querySelector(".sec-title");
      if (featTitle) featTitle.innerHTML = t.featTitle;

      const items = featSection.querySelectorAll(".feat-item");
      const featData = [
        { title: t.feat1Title, desc: t.feat1Desc },
        { title: t.feat2Title, desc: t.feat2Desc },
        { title: t.feat3Title, desc: t.feat3Desc },
        { title: t.feat4Title, desc: t.feat4Desc },
        { title: t.feat5Title, desc: t.feat5Desc },
      ];
      items.forEach((item, i) => {
        const h4 = item.querySelector("h4");
        const p = item.querySelector("p");
        if (h4 && featData[i]) h4.textContent = featData[i].title;
        if (p && featData[i]) p.textContent = featData[i].desc;
      });

      const fpRole = featSection.querySelector(".fp-role");
      if (fpRole) fpRole.textContent = t.fpRole;
    }

    /* ── PRODUCTS ── */
    const prodSection = document.querySelector(".products");
    if (prodSection) {
      const prodPill = prodSection.querySelector(".section-pill");
      if (prodPill) prodPill.textContent = t.prodPill;

      const prodTitle = prodSection.querySelector(".sec-title");
      if (prodTitle) prodTitle.innerHTML = t.prodTitle;

      // Feature icons bar
      const featureBoxes = prodSection.querySelectorAll("[style*='text-align:center']");
      const featureData = [
        { label: t.prodFeature1, sub: t.prodFeature1Sub },
        { label: t.prodFeature2, sub: t.prodFeature2Sub },
        { label: t.prodFeature3, sub: t.prodFeature3Sub },
      ];
      featureBoxes.forEach((box, i) => {
        const divs = box.querySelectorAll("div");
        // divs[0] = emoji, divs[1] = label, divs[2] = sub
        if (divs[1] && featureData[i]) divs[1].textContent = featureData[i].label;
        if (divs[2] && featureData[i]) divs[2].textContent = featureData[i].sub;
      });

      // Product cards
      const cards = prodSection.querySelectorAll(".prod-card");
      const cardData = [
        {
          badge: t.prod1Badge,
          name: t.prod1Name,
          desc: t.prod1Desc,
          sub: t.prod1Sub,
          orderArg: `${t.prod1Name} (49 TND)`,
        },
        {
          badge: null,
          name: t.prod2Name,
          desc: t.prod2Desc,
          sub: t.prod2Sub,
          orderArg: `${t.prod2Name} (39 TND)`,
        },
        {
          badge: t.prod3Badge,
          name: t.prod3Name,
          desc: t.prod3Desc,
          sub: t.prod3Sub,
          orderArg: `${t.prod3Name} (79 TND)`,
        },
        {
          badge: null,
          name: t.prod4Name,
          desc: t.prod4Desc,
          sub: t.prod4Sub,
          orderArg: `${t.prod4Name} (29 TND)`,
        },
      ];

      cards.forEach((card, i) => {
        const badge = card.querySelector(".prod-badge");
        if (badge && cardData[i]?.badge) badge.textContent = cardData[i].badge;

        const name = card.querySelector(".prod-name");
        if (name && cardData[i]) name.textContent = cardData[i].name;

        const desc = card.querySelector(".prod-desc");
        if (desc && cardData[i]) desc.textContent = cardData[i].desc;

        const sub = card.querySelector(".prod-sub");
        if (sub && cardData[i]) sub.textContent = cardData[i].sub;

        const btn = card.querySelector(".prod-order-btn");
        if (btn && cardData[i]) {
          btn.textContent = t.orderBtn;
          const arg = cardData[i].orderArg;
          btn.onclick = () => window.openOrder && window.openOrder(arg);
        }
      });

      // Tags on card 4
      const tagEls = prodSection.querySelectorAll(".prod-card:last-child span[style]");
      const tagKeys = [t.tag1, t.tag2, t.tag3];
      tagEls.forEach((tag, i) => { if (tagKeys[i]) tag.textContent = tagKeys[i]; });
    }

    /* ── STATS ── */
    const statLabels = document.querySelectorAll(".stat-l");
    const statData = [t.stat1, t.stat2, t.stat3];
    statLabels.forEach((el, i) => { if (statData[i]) el.textContent = statData[i]; });

    /* ── CTA ── */
    const ctaSection = document.querySelector(".cta");
    if (ctaSection) {
      const ctaH2 = ctaSection.querySelector("h2");
      if (ctaH2) ctaH2.innerHTML = t.ctaTitle;

      const ctaP = ctaSection.querySelector("p");
      if (ctaP) ctaP.textContent = t.ctaDesc;

      const ctaBtns = ctaSection.querySelectorAll("button, a");
      if (ctaBtns[0]) ctaBtns[0].textContent = t.ctaBtn1;
      if (ctaBtns[1]) ctaBtns[1].textContent = t.ctaBtn2;
    }

    /* ── CONTACT ── */
    const clabels = document.querySelectorAll(".clabel");
    if (clabels[0]) clabels[0].textContent = t.contactFollow;
    if (clabels[1]) clabels[1].textContent = t.contactUs;

    /* ── FOOTER ── */
    const fCopy = document.querySelector(".f-copy");
    if (fCopy) fCopy.textContent = t.footerCopy;

    /* ── MODAL ── */
    const modalTitle = document.querySelector(".modal-title");
    if (modalTitle) modalTitle.textContent = t.modalTitle;

    setAttr("#name", "placeholder", "modalName");
    setAttr("#phone", "placeholder", "modalPhone");
    setAttr("#city", "placeholder", "modalCity");
    setAttr("#qty", "placeholder", "modalQty");

    const modalSend = document.querySelector(".modal-send");
    if (modalSend) modalSend.textContent = t.modalSend;

    const modalNote = document.querySelector(".modal-note");
    if (modalNote) modalNote.textContent = t.modalNote;

    /* ── Patch sendOrder pour WhatsApp ── */
    window.sendOrder = function () {
      const name  = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const city  = document.getElementById("city").value.trim();
      const qty   = document.getElementById("qty").value.trim();
      const currentProduct = window._klyxCurrentProduct || "";

      if (!name || !phone) {
        alert(t.modalValidation);
        return;
      }

      const msg =
`${t.waHeader}
━━━━━━━━━━━━━━━
📦 ${t.waProduct}: ${currentProduct}
👤 ${t.waName}: ${name}
📞 ${t.waPhone}: ${phone}
🏙 ${t.waCity}: ${city}
🔢 ${t.waQty}: ${qty}
━━━━━━━━━━━━━━━`;

      const wa = "https://wa.me/21629691046?text=" + encodeURIComponent(msg);
      window.open(wa, "_blank");
      window.closeModal && window.closeModal();
    };
  }

  /* ═══════════════════════════════════════════════════
     5. PATCH openOrder pour capturer le produit
  ═══════════════════════════════════════════════════ */
  function patchOpenOrder() {
    const original = window.openOrder;
    window.openOrder = function (product) {
      window._klyxCurrentProduct = product;
      original && original(product);
    };
  }

  /* ═══════════════════════════════════════════════════
     6. CHANGER DE LANGUE
  ═══════════════════════════════════════════════════ */
  function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem("klyx_lang", lang);
    applyLang(lang);
  }

  /* ═══════════════════════════════════════════════════
     7. INITIALISATION
  ═══════════════════════════════════════════════════ */
  function init() {
    injectLangButton();
    patchOpenOrder();
    applyLang(currentLang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();

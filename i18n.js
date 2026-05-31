(function () {
  /* ══════════════════════════════════════════════
     KLYX THEME SYSTEM
     ══════════════════════════════════════════════ */
  var KLYX_THEMES = {
    purple: {
      primary:'#7c3aed', secondary:'#3b82f6', accent:'#06b6d4',
      grad:'linear-gradient(135deg,#7c3aed 0%,#3b82f6 50%,#06b6d4 100%)',
      glow:'rgba(124,58,237,.4)',
      bg1:'#0d0820', bg2:'#12082e', bg3:'#0a1628'
    },
    dark: {
      primary:'#a855f7', secondary:'#ec4899', accent:'#f43f5e',
      grad:'linear-gradient(135deg,#a855f7 0%,#ec4899 50%,#f43f5e 100%)',
      glow:'rgba(168,85,247,.4)',
      bg1:'#1a0520', bg2:'#2d0a2e', bg3:'#1a0518'
    },
    blue: {
      primary:'#00d4ff', secondary:'#0070f3', accent:'#7928ca',
      grad:'linear-gradient(135deg,#00d4ff 0%,#0070f3 50%,#7928ca 100%)',
      glow:'rgba(0,112,243,.4)',
      bg1:'#020b18', bg2:'#041428', bg3:'#060a20'
    },
    gold: {
      primary:'#fbbf24', secondary:'#f59e0b', accent:'#d97706',
      grad:'linear-gradient(135deg,#fbbf24 0%,#f59e0b 50%,#d97706 100%)',
      glow:'rgba(251,191,36,.35)',
      bg1:'#1a1200', bg2:'#2a1e00', bg3:'#180f00'
    },
    white: {
      primary:'#6366f1', secondary:'#8b5cf6', accent:'#a78bfa',
      grad:'linear-gradient(135deg,#6366f1 0%,#8b5cf6 100%)',
      glow:'rgba(99,102,241,.3)',
      bg1:'#0f0f1a', bg2:'#1a1a2e', bg3:'#0a0a18'
    }
  };

  // Expose themes globally so card.html can use them
  window.KLYX_THEMES = KLYX_THEMES;

  var _themeStorageKey = 'klyxCardTheme';
  var _currentTheme = 'purple';

  function applyThemeToCss(key) {
    var th = KLYX_THEMES[key] || KLYX_THEMES.purple;
    var r = document.documentElement;
    r.style.setProperty('--card-primary',   th.primary);
    r.style.setProperty('--card-secondary', th.secondary);
    r.style.setProperty('--card-accent',    th.accent);
    r.style.setProperty('--card-grad',      th.grad);
    r.style.setProperty('--card-glow',      th.glow);
    r.style.setProperty('--card-bg1',       th.bg1);
    r.style.setProperty('--card-bg2',       th.bg2);
    r.style.setProperty('--card-bg3',       th.bg3);

    // Update theme buttons active state
    document.querySelectorAll('[data-theme]').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-theme') === key);
    });

    // Dispatch event so pages can react
    document.dispatchEvent(new CustomEvent('klyxThemeChanged', { detail: { theme: key } }));
  }

  window.KlyxTheme = {
    current: _currentTheme,

    init: function(storageKey) {
      if (storageKey) _themeStorageKey = storageKey;
      try {
        var saved = localStorage.getItem(_themeStorageKey);
        _currentTheme = (saved && KLYX_THEMES[saved]) ? saved : 'purple';
      } catch(e) {
        _currentTheme = 'purple';
      }
      window.KlyxTheme.current = _currentTheme;
      applyThemeToCss(_currentTheme);
    },

    set: function(key) {
      if (!KLYX_THEMES[key]) return;
      _currentTheme = key;
      window.KlyxTheme.current = key;
      try { localStorage.setItem(_themeStorageKey, key); } catch(e) {}
      applyThemeToCss(key);
    },

    get: function() {
      return _currentTheme;
    }
  };

  /* ══════════════════════════════════════════════
     KLYX I18N SYSTEM
     ══════════════════════════════════════════════ */
  const translations = {
    ar: {
      // NAV
      nav_how: "كيف يعمل",
      nav_products: "المنتجات",
      nav_features: "المميزات",
      nav_space: "مساحتي",
      nav_order: "اطلب الآن",

      // HERO
      hero_pill: "تقنية NFC الذكية — الجيل الجديد",
      hero_h1_line1: "KLYX —",
      hero_h1_line2: "حلول ذكية",
      hero_h1_grad: "بدون تلامس",
      hero_sub1: "حلول رقمية للأعمال الحديثة باستخدام NFC",
      hero_sub2: "بسّط تواصلك وخلي تجربتك أسرع وأكثر احترافية",
      hero_btn_products: "اكتشف المنتجات",
      hero_btn_features: "المميزات",
      hero_scroll: "اسكرول",
      hero_phone_hint: "قرّب بطاقتك من الهاتف",
      hero_card_label: "بطاقتك الذكية",

      // HOW IT WORKS
      how_pill: "⚡ كيف يعمل",
      how_title: "ثلاث خطوات نحو",
      how_title_grad: "هوية بلا حدود",
      step1_title: "خصّص ملفك الشخصي",
      step1_desc: "أعدّ مساحتك الرقمية — صورتك، روابطك، معلومات التواصل، وكل ما يمثلك.",
      step2_title: "قرّب بطاقتك من الهاتف",
      step2_desc: "قرّب بطاقة Klyx أو مفتاحك NFC من هاتف أي شخص. بدون تطبيق — يشتغل مباشرة على iOS و Android.",
      step3_title: "ملفك يفتح فوراً",
      step3_desc: "صفحة أنيقة ومهنية تظهر في ثانية — معلومات التواصل، الروابط، الشبكات. الانطباع المثالي في كل لقاء.",

      // FEATURES
      feat_pill: "✦ المميزات",
      feat_title: "كل اللي تحتاجه",
      feat_title_grad: "في بطاقة واحدة",
      feat1_title: "بطاقات NFC ذكية",
      feat1_desc: "تقنية NFC مدمجة — تشتغل مع كل الهواتف الحديثة بدون إعداد",
      feat2_title: "مشاركة فورية بدون تطبيقات",
      feat2_desc: "لا تحميل، لا QR ، لا تأخير — قط قرب وكهو",
      feat3_title: "تخصيص كامل لبيزنسك",
      feat3_desc: "غير ملفك في أي وقت من خلال الاتصال بينا — بدون بطاقة جديدة",
      feat4_title: "تجربة عصرية لعملائك",
      feat4_desc: "اترك انطباعاً احترافياً يُعبّر عن مستواك الحقيقي",
      feat5_title: "تحكم كامل في بياناتك",
      feat5_desc: "أنت من يقرر ما يُعرض — خصوصيتك محفوظة دائماً",
      feat_phone_name: "أمين",
      feat_phone_role: "مدير تجاري",
      feat_phone_site: "SITE WEB",

      // PRODUCTS
      prod_pill: "🛍 منتجاتنا",
      prod_title: "اختار",
      prod_title_grad: "المنتج",
      prod_title2: " المناسب",
      prod_speed: "سرعة",
      prod_speed_sub: "في الاستخدام",
      prod_design: "تصميم",
      prod_design_sub: "فاخر",
      prod_fit: "مناسب",
      prod_fit_sub: "لكل الأنشطة",
      prod_badge_popular: "⭐ الأكثر طلباً",
      prod_badge_shops: "⭐ للمحلات",
      prod1_name: "Klyx Card — بطاقة NFC",
      prod1_desc: "بطاقة العمل المُعاد اختراعها. حجم قياسي، فاخر، شريحة NFC مدمجة. دائمة، أنيقة، لا تُنسى.",
      prod1_price: "27 TND",
      prod1_sub: "للبطاقة الواحدة — شحن مجاني",
      prod2_name: "Klyx حامل المفاتيح — porte-clé NFC",
      prod2_desc: "دايماً معاك. حامل المفاتيح NFC صغير يرافق يومياتك — خفيف، عملي، واحترافي في نفس الوقت.",
      prod2_price: "25 TND",
      prod2_sub: "للقطعة الواحدة — شحن مجاني",
      prod3_name: "Klyx Stand — Google Review",
      prod3_desc: "أداة احترافية لمحلك أو مطعمك. زبونك يقرب هاتفه أو يسكن QR — مباشرة لصفحة Google Review تاعك.",
      prod3_price: "79 TND",
      prod3_sub: "للقطعة — شحن مجاني",
      prod4_name: "Klyx Menu — منيو NFC دائري",
      prod4_desc: "منيو رقمي للمطاعم والمقاهي والبارات. تاغ NFC دائري من الإيبوكسي يوضع على الطاولة — زبونك يقرب هاتفه أو يسكن QR وينفتحله المنيو فوراً. بدون ورق، بدون تطبيق.",
      prod4_price: "29 TND",
      prod4_sub: "للقطعة — مقاوم للماء والخدش",
      prod_tag_resto: "🍽 مطاعم",
      prod_tag_cafe: "☕ مقاهي",
      prod_tag_bar: "🍹 بارات",
      prod_order_btn: "🛒 اطلب الآن",

      // STATS
      stat1_val: "90+",
      stat1_label: "عميل راضي",
      stat2_val: "0.8s",
      stat2_label: "وقت الفتح",
      stat3_val: "100%",
      stat3_label: "متوافق iOS & Android",

      // CTA
      cta_title: "مستعد تترك",
      cta_title_grad: "انطباع لا يُنسى؟",
      cta_sub: "انضم لمئات المحترفين اللي يتواصلوا بطريقة مختلفة",
      cta_btn_order: "اطلب بطاقتك الآن",
      cta_btn_products: "تعرف على الباقات",

      // CONTACT
      contact_follow: "تابعنا علي",
      contact_reach: "تواصل معنا",

      // FOOTER
      footer_copy: "© 2026 Klyx. جميع الحقوق محفوظة.",

      // MODAL
      modal_title: "🛒 اطلب المنتج",
      modal_name: "الاسم الكامل",
      modal_phone: "رقم الهاتف",
      modal_city: "العنوان / المدينة",
      modal_qty: "الكمية",
      modal_btn_nfc: "متابعة — إنشاء بطاقتك الرقمية ←",
      modal_btn_simple: "إرسال الطلب عبر واتساب ←",
      modal_note_nfc: "ستنتقل لإنشاء بطاقتك الرقمية الشخصية",
      modal_note_simple: "سيتم توجيهك مباشرة للواتساب",
      modal_login: "لديك حساب بالفعل؟ تسجيل الدخول ←",
      modal_err: "من فضلك أدخل الاسم ورقم الهاتف",
      lang_label: "اللغة",

      // DASHBOARD
      dash_greeting: "مرحباً بك في مساحتك الشخصية ✨",
      dash_copy: "📋 نسخ الرابط",
      dash_copied: "✓ تم النسخ!",
      dash_title: "تعديل ",
      dash_title_grad: "بطاقتك الرقمية",
      dash_sub: "التغييرات تنعكس فوراً على بطاقتك العامة",
      dash_logo: "🖼 الصورة / الشعار",
      dash_upload_text: "📸 تغيير الصورة أو الشعار",
      dash_personal: "👤 المعلومات الشخصية",
      dash_contact: "📞 معلومات التواصل",
      dash_social: "🔗 التواصل الاجتماعي",
      dash_theme: "🎨 لون البطاقة",
      dash_save: "💾 حفظ التغييرات",
      dash_saved: "✓ تم حفظ التغييرات بنجاح",
      dash_preview: "✨ بطاقتك الرقمية الحالية",
      dash_link_label: "🔗 رابطك العام",
      dash_open_card: "فتح البطاقة العامة ↗",
      dash_view: "🔗 بطاقتي",
      dash_logout: "خروج",

      // CARD PAGE
      card_call: "اتصل بي",
      card_wa: "واتساب",
      card_email: "البريد الإلكتروني",
      card_website: "الموقع الإلكتروني",
      card_badge: "بطاقة KLYX الرقمية",
      card_save: "💾 حفظ في جهات الاتصال",
      card_share: "مشاركة",
      card_shared: "تم النسخ!",
      card_footer: "بُنيت بـ ❤ بواسطة",
      card_get: "احصل على بطاقتك",

      // CREATE CARD
      step_order: "الطلب",
      step_card: "البطاقة الرقمية",
      step_payment: "الدفع",
      cc_step: "الخطوة 2 من 3",
      cc_title: "أنشئ ",
      cc_title_grad: "بطاقتك الرقمية",
      cc_sub: "بطاقتك الرقمية ستظهر عند المسح بالـ NFC أو الـ QR",
      cc_logo_label: "🖼 الصورة / الشعار",
      cc_logo_text: "ارفع صورتك أو شعار شركتك",
      cc_logo_hint: "PNG, JPG أو SVG — حتى 2MB",
      cc_logo_done: "✓ تم رفع الصورة",
      cc_personal: "👤 المعلومات الشخصية",
      cc_name: "الاسم الكامل",
      cc_name_ph: "مثال: أحمد بن علي",
      cc_job: "المسمى الوظيفي",
      cc_job_ph: "مثال: مصمم جرافيك",
      cc_contact: "📞 وسائل التواصل",
      cc_phone_ph: "+216 XX XXX XXX",
      cc_email_ph: "you@example.com",
      cc_website_ph: "www.yoursite.com",
      cc_social: "🔗 وسائل التواصل الاجتماعي",
      cc_all_optional: "— كل الحقول اختيارية",
      cc_theme: "🎨 لون بطاقتك",
      cc_preview_label: "✨ معاينة بطاقتك الرقمية",
      cc_badge: "بطاقة KLYX الرقمية",
      cc_btn_continue: "المتابعة إلى الدفع ←",
      cc_btn_save: "💾 حفظ والمتابعة لاحقاً",
      cc_err: "من فضلك أدخل اسمك الكامل",
      cc_draft_saved: "تم حفظ المسودة!",

      // PAYMENT
      pay_step: "الخطوة 3 من 3 — الأخيرة",
      pay_title: "الدفع",
      pay_title2: " وإنشاء حسابك",
      pay_sub: "بعد الدفع سيتم إنشاء حسابك تلقائياً",
      pay_account: "🔐 بيانات الدخول لحسابك",
      pay_email_label: "البريد الإلكتروني",
      pay_pwd: "كلمة المرور",
      pay_pwd2: "تأكيد كلمة المرور",
      pay_method: "💳 طريقة الدفع",
      pay_cod: "الدفع عند الاستلام",
      pay_cod_desc: "ادفع عند وصول المنتج",
      pay_bank: "تحويل بنكي",
      pay_bank_desc: "تحويل مسبق — نؤكد بعد التحقق",
      pay_bank_info: "🏦 معلومات الحساب البنكي",
      pay_bank_name: "اسم البنك",
      pay_bank_iban: "الرقم الحسابي / RIB",
      pay_bank_holder: "اسم صاحب الحساب",
      pay_bank_copy: "نسخ",
      pay_bank_copied: "✓ تم!",
      pay_bank_inst_text: "قم بتحويل المبلغ وأرسل لنا إثبات الدفع عبر WhatsApp أو البريد الإلكتروني",
      pay_delivery: "📦 معلومات التوصيل",
      pay_address: "العنوان الكامل",
      pay_address_ph: "الشارع، الحي، المدينة",
      pay_city: "المدينة",
      pay_city_ph: "تونس، صفاقس...",
      pay_notes: "ملاحظات (اختياري)",
      pay_notes_ph: "تعليمات التوصيل...",
      pay_confirm_btn: "✓ تأكيد الطلب وإنشاء الحساب",
      pay_secure: "بياناتك محمية تماماً",
      pay_summary: "ملخص طلبك",
      pay_product: "المنتج المختار",
      pay_qty_label: "الكمية",
      pay_total: "المجموع",
      pay_err_email: "الرجاء إدخال بريدك الإلكتروني",
      pay_err_pwd: "كلمة المرور يجب أن تكون 6 أحرف على الأقل",
      pay_err_match: "كلمتا المرور غير متطابقتين",
      pay_err_address: "الرجاء إدخال عنوان التوصيل",
      pay_includes: ["بطاقة NFC فاخرة", "صفحة رقمية شخصية", "شحن مجاني", "دعم فني مجاني"],

      // SUCCESS
      success_icon: "🎉",
      success_title: "تم إنشاء حسابك!",
      success_sub: "تم استلام طلبك بنجاح. إليك بيانات دخولك",
      success_creds_title: "🔐 بيانات الدخول",
      success_email_label: "البريد الإلكتروني",
      success_pwd_label: "كلمة المرور",
      success_url_label: "رابطك الشخصي",
      success_wa_note: "سنتواصل معك قريباً لتأكيد الطلب",
      success_btn: "ادخل على مساحتي ←",

      // THEMES
      theme_purple: "بنفسجي",
      theme_dark: "داكن",
      theme_blue: "أزرق",
      theme_gold: "ذهبي",
      theme_white: "أبيض",

      // FIELDS
      field_name: "الاسم",
      field_job: "المسمى الوظيفي",
      field_phone: "📱 الهاتف",
      field_wa: "💬 واتساب",
      field_email: "✉️ البريد",
      field_website: "🌐 الموقع",
      field_ig: "📸 Instagram",
      field_fb: "👥 Facebook",
      field_li: "💼 LinkedIn",
      field_tt: "🎵 TikTok",
      field_tw: "𝕏 Twitter / X",
      field_yt: "▶️ YouTube",
      field_sc: "👻 Snapchat",
      field_tg: "✈️ Telegram",
      field_gh: "🐙 GitHub",
      field_be: "🅱 Behance",

      // LOGIN
      login_tagline: "مساحتك الرقمية الخاصة",
      login_title: "أهلاً بعودتك 👋",
      login_sub: "ادخل على حسابك لإدارة بطاقتك الرقمية",
      login_err: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
      login_err_empty: "يرجى إدخال البريد الإلكتروني وكلمة المرور",
      login_err_nouser: "لا يوجد حساب بهذا البريد الإلكتروني",
      login_attempts_left: "محاولات متبقية",
      login_email: "البريد الإلكتروني",
      login_pwd: "كلمة المرور",
      login_btn: "تسجيل الدخول",
      login_no_account: "ليس لديك حساب؟",
      login_no_account_link: " اطلب بطاقتك الآن ←",

      // PASSWORD STRENGTH
      pwd_weak: "ضعيفة",
      pwd_fair: "متوسطة",
      pwd_good: "جيدة",
      pwd_strong: "قوية",
    },

    fr: {
      nav_how: "Comment ça marche",
      nav_products: "Produits",
      nav_features: "Fonctionnalités",
      nav_space: "Mon espace",
      nav_order: "Commander",
      hero_pill: "Technologie NFC — La nouvelle génération",
      hero_h1_line1: "KLYX —",
      hero_h1_line2: "Solutions intelligentes",
      hero_h1_grad: "sans contact",
      hero_sub1: "Solutions numériques pour les entreprises modernes via NFC",
      hero_sub2: "Simplifiez vos échanges et impressionnez à chaque rencontre",
      hero_btn_products: "Découvrir les produits",
      hero_btn_features: "Fonctionnalités",
      hero_scroll: "Défiler",
      hero_phone_hint: "Approchez votre carte du téléphone",
      hero_card_label: "Votre carte intelligente",
      how_pill: "⚡ Comment ça marche",
      how_title: "Trois étapes vers",
      how_title_grad: "une identité sans limites",
      step1_title: "Personnalisez votre profil",
      step1_desc: "Configurez votre espace numérique — photo, liens, coordonnées et tout ce qui vous représente.",
      step2_title: "Approchez votre carte du téléphone",
      step2_desc: "Approchez votre carte Klyx ou porte-clé NFC de n'importe quel smartphone. Sans app — compatible iOS et Android.",
      step3_title: "Votre profil s'ouvre instantanément",
      step3_desc: "Une page élégante et professionnelle apparaît en une seconde — coordonnées, liens, réseaux. L'impression parfaite à chaque rencontre.",
      feat_pill: "✦ Fonctionnalités",
      feat_title: "Tout ce dont vous avez besoin",
      feat_title_grad: "en une seule carte",
      feat1_title: "Cartes NFC intelligentes",
      feat1_desc: "Technologie NFC intégrée — fonctionne avec tous les smartphones modernes sans configuration",
      feat2_title: "Partage instantané sans application",
      feat2_desc: "Pas de téléchargement, pas de QR, pas d'attente — approchez et c'est parti",
      feat3_title: "Personnalisation complète pour votre business",
      feat3_desc: "Modifiez votre profil à tout moment en nous contactant — sans nouvelle carte",
      feat4_title: "Expérience moderne pour vos clients",
      feat4_desc: "Laissez une impression professionnelle qui reflète votre vrai niveau",
      feat5_title: "Contrôle total de vos données",
      feat5_desc: "Vous décidez ce qui s'affiche — votre confidentialité est toujours protégée",
      feat_phone_name: "Amine",
      feat_phone_role: "Directeur commercial",
      feat_phone_site: "SITE WEB",
      prod_pill: "🛍 Nos produits",
      prod_title: "Choisissez",
      prod_title_grad: "le produit",
      prod_title2: " qui vous convient",
      prod_speed: "Rapidité",
      prod_speed_sub: "d'utilisation",
      prod_design: "Design",
      prod_design_sub: "premium",
      prod_fit: "Adapté",
      prod_fit_sub: "à tous les secteurs",
      prod_badge_popular: "⭐ Le plus demandé",
      prod_badge_shops: "⭐ Pour les commerces",
      prod1_name: "Klyx Card — Carte NFC",
      prod1_desc: "La carte de visite réinventée. Format standard, premium, puce NFC intégrée. Durable, élégante, inoubliable.",
      prod1_price: "27 TND",
      prod1_sub: "par carte — livraison gratuite",
      prod2_name: "Klyx Key — Porte-clé NFC",
      prod2_desc: "Toujours avec vous. Un petit porte-clé NFC qui accompagne votre quotidien — léger, pratique et professionnel.",
      prod2_price: "25 TND",
      prod2_sub: "par pièce — livraison gratuite",
      prod3_name: "Klyx Stand — Google Review",
      prod3_desc: "Un outil professionnel pour votre commerce ou restaurant. Votre client approche son téléphone ou scanne le QR — directement vers votre page Google Review.",
      prod3_price: "79 TND",
      prod3_sub: "par pièce — livraison gratuite",
      prod4_name: "Klyx Menu — Menu NFC rond",
      prod4_desc: "Menu numérique pour restaurants, cafés et bars. Un tag NFC époxy rond posé sur la table — votre client approche son téléphone ou scanne le QR et le menu s'ouvre instantanément. Sans papier, sans application.",
      prod4_price: "29 TND",
      prod4_sub: "par pièce — résistant eau et rayures",
      prod_tag_resto: "🍽 Restaurants",
      prod_tag_cafe: "☕ Cafés",
      prod_tag_bar: "🍹 Bars",
      prod_order_btn: "🛒 Commander",
      stat1_val: "90+",
      stat1_label: "clients satisfaits",
      stat2_val: "0.8s",
      stat2_label: "temps d'ouverture",
      stat3_val: "100%",
      stat3_label: "compatible iOS & Android",
      cta_title: "Prêt à laisser",
      cta_title_grad: "une impression inoubliable ?",
      cta_sub: "Rejoignez des centaines de professionnels qui communiquent différemment",
      cta_btn_order: "Commandez votre carte",
      cta_btn_products: "Voir les formules",
      contact_follow: "Suivez-nous sur",
      contact_reach: "Contactez-nous",
      footer_copy: "© 2026 Klyx. Tous droits réservés.",
      modal_title: "🛒 Commander",
      modal_name: "Nom complet",
      modal_phone: "Numéro de téléphone",
      modal_city: "Adresse / Ville",
      modal_qty: "Quantité",
      modal_btn_nfc: "Continuer — Créer ma carte numérique →",
      modal_btn_simple: "Envoyer la commande via WhatsApp →",
      modal_note_nfc: "Vous serez redirigé pour créer votre carte personnelle",
      modal_note_simple: "Vous serez redirigé vers WhatsApp",
      modal_login: "Déjà un compte ? Se connecter →",
      modal_err: "Veuillez saisir votre nom et numéro de téléphone",
      lang_label: "Langue",
      dash_greeting: "Bienvenue dans votre espace personnel ✨",
      dash_copy: "📋 Copier le lien",
      dash_copied: "✓ Copié !",
      dash_title: "Modifier ",
      dash_title_grad: "votre carte digitale",
      dash_sub: "Les modifications se reflètent instantanément sur votre carte publique",
      dash_logo: "🖼 Photo / Logo",
      dash_upload_text: "📸 Changer la photo ou le logo",
      dash_personal: "👤 Informations personnelles",
      dash_contact: "📞 Coordonnées",
      dash_social: "🔗 Réseaux sociaux",
      dash_theme: "🎨 Couleur de la carte",
      dash_save: "💾 Enregistrer les modifications",
      dash_saved: "✓ Modifications enregistrées avec succès",
      dash_preview: "✨ Votre carte digitale actuelle",
      dash_link_label: "🔗 Votre lien public",
      dash_open_card: "Ouvrir la carte publique ↗",
      dash_view: "🔗 Ma carte",
      dash_logout: "Déconnexion",
      card_call: "Appeler",
      card_wa: "WhatsApp",
      card_email: "E-mail",
      card_website: "Site web",
      card_badge: "Carte digitale KLYX",
      card_save: "💾 Enregistrer le contact",
      card_share: "Partager",
      card_shared: "Lien copié !",
      card_footer: "Créé avec ❤ par",
      card_get: "Obtenez votre carte",
      step_order: "Commande",
      step_card: "Carte digitale",
      step_payment: "Paiement",
      cc_step: "Étape 2 sur 3",
      cc_title: "Créez ",
      cc_title_grad: "votre carte digitale",
      cc_sub: "Votre carte s'affichera lors du scan NFC ou QR",
      cc_logo_label: "🖼 Photo / Logo",
      cc_logo_text: "Importez votre photo ou logo d'entreprise",
      cc_logo_hint: "PNG, JPG ou SVG — 2MB max",
      cc_logo_done: "✓ Image importée",
      cc_personal: "👤 Informations personnelles",
      cc_name: "Nom complet",
      cc_name_ph: "Ex : Jean Dupont",
      cc_job: "Titre professionnel",
      cc_job_ph: "Ex : Designer graphique",
      cc_contact: "📞 Coordonnées",
      cc_phone_ph: "+216 XX XXX XXX",
      cc_email_ph: "you@example.com",
      cc_website_ph: "www.yoursite.com",
      cc_social: "🔗 Réseaux sociaux",
      cc_all_optional: "— tous les champs sont optionnels",
      cc_theme: "🎨 Couleur de votre carte",
      cc_preview_label: "✨ Aperçu de votre carte digitale",
      cc_badge: "Carte digitale KLYX",
      cc_btn_continue: "Continuer vers le paiement →",
      cc_btn_save: "💾 Sauvegarder et continuer plus tard",
      cc_err: "Veuillez entrer votre nom complet",
      cc_draft_saved: "Brouillon sauvegardé !",
      pay_step: "Étape 3 sur 3 — Dernière étape",
      pay_title: "Paiement",
      pay_title2: " et création de compte",
      pay_sub: "Votre compte sera créé automatiquement après le paiement",
      pay_account: "🔐 Identifiants de votre compte",
      pay_email_label: "Adresse e-mail",
      pay_pwd: "Mot de passe",
      pay_pwd2: "Confirmer le mot de passe",
      pay_method: "💳 Mode de paiement",
      pay_cod: "Paiement à la livraison",
      pay_cod_desc: "Payez à la réception du produit",
      pay_bank: "Virement bancaire",
      pay_bank_desc: "Virement à l'avance — confirmé après vérification",
      pay_bank_info: "🏦 Informations bancaires",
      pay_bank_name: "Nom de la banque",
      pay_bank_iban: "RIB / Numéro de compte",
      pay_bank_holder: "Titulaire du compte",
      pay_bank_copy: "Copier",
      pay_bank_copied: "✓ Copié !",
      pay_bank_inst_text: "Effectuez le virement et envoyez-nous la preuve de paiement via WhatsApp ou e-mail",
      pay_delivery: "📦 Informations de livraison",
      pay_address: "Adresse complète",
      pay_address_ph: "Rue, quartier, ville",
      pay_city: "Ville",
      pay_city_ph: "Tunis, Sfax...",
      pay_notes: "Notes (optionnel)",
      pay_notes_ph: "Instructions de livraison...",
      pay_confirm_btn: "✓ Confirmer la commande et créer le compte",
      pay_secure: "Vos données sont entièrement protégées",
      pay_summary: "Récapitulatif de votre commande",
      pay_product: "Produit sélectionné",
      pay_qty_label: "Quantité",
      pay_total: "Total",
      pay_err_email: "Veuillez saisir votre adresse e-mail",
      pay_err_pwd: "Le mot de passe doit contenir au moins 6 caractères",
      pay_err_match: "Les mots de passe ne correspondent pas",
      pay_err_address: "Veuillez saisir votre adresse de livraison",
      pay_includes: ["Carte NFC premium", "Page digitale personnelle", "Livraison gratuite", "Support technique gratuit"],
      success_icon: "🎉",
      success_title: "Compte créé !",
      success_sub: "Votre commande a bien été reçue. Voici vos identifiants",
      success_creds_title: "🔐 Identifiants de connexion",
      success_email_label: "E-mail",
      success_pwd_label: "Mot de passe",
      success_url_label: "Votre lien personnel",
      success_wa_note: "Nous vous contacterons bientôt pour confirmer la commande",
      success_btn: "Accéder à mon espace →",
      theme_purple: "Violet",
      theme_dark: "Sombre",
      theme_blue: "Bleu",
      theme_gold: "Doré",
      theme_white: "Blanc",
      field_name: "Nom",
      field_job: "Titre professionnel",
      field_phone: "📱 Téléphone",
      field_wa: "💬 WhatsApp",
      field_email: "✉️ E-mail",
      field_website: "🌐 Site web",
      field_ig: "📸 Instagram",
      field_fb: "👥 Facebook",
      field_li: "💼 LinkedIn",
      field_tt: "🎵 TikTok",
      field_tw: "𝕏 Twitter / X",
      field_yt: "▶️ YouTube",
      field_sc: "👻 Snapchat",
      field_tg: "✈️ Telegram",
      field_gh: "🐙 GitHub",
      field_be: "🅱 Behance",
      login_tagline: "Votre espace numérique personnel",
      login_title: "Bon retour 👋",
      login_sub: "Connectez-vous pour gérer votre carte digitale",
      login_err: "E-mail ou mot de passe incorrect",
      login_err_empty: "Veuillez saisir votre e-mail et mot de passe",
      login_err_nouser: "Aucun compte trouvé avec cet e-mail",
      login_attempts_left: "tentatives restantes",
      login_email: "Adresse e-mail",
      login_pwd: "Mot de passe",
      login_btn: "Se connecter",
      login_no_account: "Pas encore de compte ?",
      login_no_account_link: " Commandez votre carte →",
      pwd_weak: "Faible",
      pwd_fair: "Moyen",
      pwd_good: "Bien",
      pwd_strong: "Fort",
    },

    en: {
      nav_how: "How it works",
      nav_products: "Products",
      nav_features: "Features",
      nav_space: "My space",
      nav_order: "Order now",
      hero_pill: "Smart NFC Technology — The next generation",
      hero_h1_line1: "KLYX —",
      hero_h1_line2: "Smart solutions",
      hero_h1_grad: "without contact",
      hero_sub1: "Digital solutions for modern businesses using NFC",
      hero_sub2: "Simplify your networking and make every interaction more professional",
      hero_btn_products: "Explore products",
      hero_btn_features: "Features",
      hero_scroll: "Scroll",
      hero_phone_hint: "Tap your card on any phone",
      hero_card_label: "Your smart card",
      how_pill: "⚡ How it works",
      how_title: "Three steps to",
      how_title_grad: "a limitless identity",
      step1_title: "Customize your profile",
      step1_desc: "Set up your digital space — photo, links, contact info, and everything that represents you.",
      step2_title: "Tap your card on any phone",
      step2_desc: "Bring your Klyx card or NFC keychain near anyone's phone. No app needed — works instantly on iOS and Android.",
      step3_title: "Your profile opens instantly",
      step3_desc: "A sleek, professional page appears in seconds — contact details, links, social networks. The perfect impression every time.",
      feat_pill: "✦ Features",
      feat_title: "Everything you need",
      feat_title_grad: "in one card",
      feat1_title: "Smart NFC cards",
      feat1_desc: "Built-in NFC technology — works with all modern smartphones with zero setup",
      feat2_title: "Instant sharing, no apps",
      feat2_desc: "No download, no QR scanning, no delay — just tap and go",
      feat3_title: "Full customization for your business",
      feat3_desc: "Update your profile anytime by contacting us — no new card needed",
      feat4_title: "Modern experience for your clients",
      feat4_desc: "Leave a professional impression that truly reflects your level",
      feat5_title: "Full control over your data",
      feat5_desc: "You decide what's shown — your privacy is always protected",
      feat_phone_name: "Amine",
      feat_phone_role: "Sales Manager",
      feat_phone_site: "WEBSITE",
      prod_pill: "🛍 Our products",
      prod_title: "Choose",
      prod_title_grad: "the product",
      prod_title2: " that fits you",
      prod_speed: "Speed",
      prod_speed_sub: "of use",
      prod_design: "Premium",
      prod_design_sub: "design",
      prod_fit: "Suitable",
      prod_fit_sub: "for all businesses",
      prod_badge_popular: "⭐ Most popular",
      prod_badge_shops: "⭐ For businesses",
      prod1_name: "Klyx Card — NFC Business Card",
      prod1_desc: "The business card reinvented. Standard size, premium quality, built-in NFC chip. Durable, elegant, unforgettable.",
      prod1_price: "27 TND",
      prod1_sub: "per card — free shipping",
      prod2_name: "Klyx Key — NFC Keychain",
      prod2_desc: "Always with you. A compact NFC keychain for your daily life — lightweight, practical, and professional.",
      prod2_price: "25 TND",
      prod2_sub: "per piece — free shipping",
      prod3_name: "Klyx Stand — Google Review",
      prod3_desc: "A professional tool for your shop or restaurant. Customers tap their phone or scan the QR — directly to your Google Review page.",
      prod3_price: "79 TND",
      prod3_sub: "per piece — free shipping",
      prod4_name: "Klyx Menu — Round NFC Menu",
      prod4_desc: "Digital menu for restaurants, cafés and bars. A round epoxy NFC tag placed on the table — customers tap or scan and the menu opens instantly. No paper, no app.",
      prod4_price: "29 TND",
      prod4_sub: "per piece — waterproof & scratch-resistant",
      prod_tag_resto: "🍽 Restaurants",
      prod_tag_cafe: "☕ Cafés",
      prod_tag_bar: "🍹 Bars",
      prod_order_btn: "🛒 Order now",
      stat1_val: "90+",
      stat1_label: "happy clients",
      stat2_val: "0.8s",
      stat2_label: "opening time",
      stat3_val: "100%",
      stat3_label: "iOS & Android compatible",
      cta_title: "Ready to leave",
      cta_title_grad: "an unforgettable impression?",
      cta_sub: "Join hundreds of professionals who network differently",
      cta_btn_order: "Order your card now",
      cta_btn_products: "See all plans",
      contact_follow: "Follow us on",
      contact_reach: "Contact us",
      footer_copy: "© 2026 Klyx. All rights reserved.",
      modal_title: "🛒 Order",
      modal_name: "Full name",
      modal_phone: "Phone number",
      modal_city: "Address / City",
      modal_qty: "Quantity",
      modal_btn_nfc: "Continue — Create my digital card →",
      modal_btn_simple: "Send order via WhatsApp →",
      modal_note_nfc: "You'll be redirected to create your personal card",
      modal_note_simple: "You'll be redirected to WhatsApp",
      modal_login: "Already have an account? Log in →",
      modal_err: "Please enter your name and phone number",
      lang_label: "Language",
      dash_greeting: "Welcome to your personal space ✨",
      dash_copy: "📋 Copy link",
      dash_copied: "✓ Copied!",
      dash_title: "Edit ",
      dash_title_grad: "your digital card",
      dash_sub: "Changes reflect instantly on your public card",
      dash_logo: "🖼 Photo / Logo",
      dash_upload_text: "📸 Change photo or logo",
      dash_personal: "👤 Personal information",
      dash_contact: "📞 Contact details",
      dash_social: "🔗 Social media",
      dash_theme: "🎨 Card color",
      dash_save: "💾 Save changes",
      dash_saved: "✓ Changes saved successfully",
      dash_preview: "✨ Your current digital card",
      dash_link_label: "🔗 Your public link",
      dash_open_card: "Open public card ↗",
      dash_view: "🔗 My card",
      dash_logout: "Log out",
      card_call: "Call me",
      card_wa: "WhatsApp",
      card_email: "Email",
      card_website: "Website",
      card_badge: "KLYX Digital Card",
      card_save: "💾 Save to contacts",
      card_share: "Share",
      card_shared: "Link copied!",
      card_footer: "Built with ❤ by",
      card_get: "Get your card",
      step_order: "Order",
      step_card: "Digital Card",
      step_payment: "Payment",
      cc_step: "Step 2 of 3",
      cc_title: "Create ",
      cc_title_grad: "your digital card",
      cc_sub: "Your card will appear when scanned via NFC or QR",
      cc_logo_label: "🖼 Photo / Logo",
      cc_logo_text: "Upload your photo or company logo",
      cc_logo_hint: "PNG, JPG or SVG — up to 2MB",
      cc_logo_done: "✓ Image uploaded",
      cc_personal: "👤 Personal information",
      cc_name: "Full name",
      cc_name_ph: "e.g. John Smith",
      cc_job: "Job title",
      cc_job_ph: "e.g. Graphic Designer",
      cc_contact: "📞 Contact details",
      cc_phone_ph: "+216 XX XXX XXX",
      cc_email_ph: "you@example.com",
      cc_website_ph: "www.yoursite.com",
      cc_social: "🔗 Social media",
      cc_all_optional: "— all fields are optional",
      cc_theme: "🎨 Your card color",
      cc_preview_label: "✨ Preview your digital card",
      cc_badge: "KLYX Digital Card",
      cc_btn_continue: "Continue to payment →",
      cc_btn_save: "💾 Save and continue later",
      cc_err: "Please enter your full name",
      cc_draft_saved: "Draft saved!",
      pay_step: "Step 3 of 3 — Last step",
      pay_title: "Payment",
      pay_title2: " & account creation",
      pay_sub: "Your account will be created automatically after payment",
      pay_account: "🔐 Your account credentials",
      pay_email_label: "Email address",
      pay_pwd: "Password",
      pay_pwd2: "Confirm password",
      pay_method: "💳 Payment method",
      pay_cod: "Cash on delivery",
      pay_cod_desc: "Pay when you receive the product",
      pay_bank: "Bank transfer",
      pay_bank_desc: "Transfer in advance — confirmed after verification",
      pay_bank_info: "🏦 Bank account details",
      pay_bank_name: "Bank name",
      pay_bank_iban: "Account number / RIB",
      pay_bank_holder: "Account holder",
      pay_bank_copy: "Copy",
      pay_bank_copied: "✓ Copied!",
      pay_bank_inst_text: "Transfer the amount and send us proof of payment via WhatsApp or email",
      pay_delivery: "📦 Delivery information",
      pay_address: "Full address",
      pay_address_ph: "Street, district, city",
      pay_city: "City",
      pay_city_ph: "Tunis, Sfax...",
      pay_notes: "Notes (optional)",
      pay_notes_ph: "Delivery instructions...",
      pay_confirm_btn: "✓ Confirm order & create account",
      pay_secure: "Your data is fully protected",
      pay_summary: "Order summary",
      pay_product: "Selected product",
      pay_qty_label: "Quantity",
      pay_total: "Total",
      pay_err_email: "Please enter your email address",
      pay_err_pwd: "Password must be at least 6 characters",
      pay_err_match: "Passwords do not match",
      pay_err_address: "Please enter your delivery address",
      pay_includes: ["Premium NFC card", "Personal digital page", "Free shipping", "Free technical support"],
      success_icon: "🎉",
      success_title: "Account created!",
      success_sub: "Your order was received successfully. Here are your login details",
      success_creds_title: "🔐 Login credentials",
      success_email_label: "Email",
      success_pwd_label: "Password",
      success_url_label: "Your personal link",
      success_wa_note: "We'll contact you soon to confirm your order",
      success_btn: "Go to my space →",
      theme_purple: "Purple",
      theme_dark: "Dark",
      theme_blue: "Blue",
      theme_gold: "Gold",
      theme_white: "White",
      field_name: "Name",
      field_job: "Job title",
      field_phone: "📱 Phone",
      field_wa: "💬 WhatsApp",
      field_email: "✉️ Email",
      field_website: "🌐 Website",
      field_ig: "📸 Instagram",
      field_fb: "👥 Facebook",
      field_li: "💼 LinkedIn",
      field_tt: "🎵 TikTok",
      field_tw: "𝕏 Twitter / X",
      field_yt: "▶️ YouTube",
      field_sc: "👻 Snapchat",
      field_tg: "✈️ Telegram",
      field_gh: "🐙 GitHub",
      field_be: "🅱 Behance",
      login_tagline: "Your personal digital space",
      login_title: "Welcome back 👋",
      login_sub: "Sign in to manage your digital card",
      login_err: "Incorrect email or password",
      login_err_empty: "Please enter your email and password",
      login_err_nouser: "No account found with this email",
      login_attempts_left: "attempts remaining",
      login_email: "Email address",
      login_pwd: "Password",
      login_btn: "Sign in",
      login_no_account: "Don't have an account?",
      login_no_account_link: " Order your card now →",
      pwd_weak: "Weak",
      pwd_fair: "Fair",
      pwd_good: "Good",
      pwd_strong: "Strong",
    },
  };

  const RTL_LANGS = ["ar"];
  let current = localStorage.getItem("klyx_lang") || "ar";

  function t(key) {
    return (translations[current] && translations[current][key]) ||
           (translations["ar"] && translations["ar"][key]) ||
           key;
  }

  function apply() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });

    if (RTL_LANGS.includes(current)) {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", current);
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", current);
    }

    document.querySelectorAll(".klyx-lang-btn, .lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.lang === current);
    });

    document.dispatchEvent(new CustomEvent("klyxLangChanged", { detail: { lang: current } }));
  }

  function set(lang) {
    if (!translations[lang]) return;
    current = lang;
    localStorage.setItem("klyx_lang", lang);
    window.KlyxI18n.current = current;
    apply();
  }

  function setLang(lang) { set(lang); }

  function init() {
    current = localStorage.getItem("klyx_lang") || "ar";
    window.KlyxI18n.current = current;
    apply();
  }

  function injectSwitcher() {
    if (document.getElementById("klyx-lang-switcher")) return;
    const nav = document.querySelector("nav");
    if (!nav) return;

    const switcher = document.createElement("div");
    switcher.id = "klyx-lang-switcher";
    switcher.style.cssText = "display:flex;align-items:center;gap:6px;margin-right:18px;";

    ["ar", "fr", "en"].forEach(function (lang) {
      const btn = document.createElement("button");
      btn.className = "klyx-lang-btn";
      btn.dataset.lang = lang;
      btn.textContent = lang === "ar" ? "ع" : lang.toUpperCase();
      btn.style.cssText =
        "background:transparent;border:1.5px solid rgba(124,58,237,.25);" +
        "color:#7c3aed;font-family:'Tajawal',sans-serif;font-weight:700;" +
        "font-size:.72rem;padding:4px 11px;border-radius:50px;cursor:pointer;" +
        "transition:background .2s,color .2s,border-color .2s;";
      btn.addEventListener("click", function () { set(lang); });
      switcher.appendChild(btn);
    });

    const style = document.createElement("style");
    style.textContent =
      ".klyx-lang-btn.active,.lang-btn.active{background:linear-gradient(135deg,#7c3aed,#3b82f6,#06b6d4)!important;" +
      "color:#fff!important;border-color:transparent!important;}";
    document.head.appendChild(style);

    const ul = nav.querySelector("ul");
    if (ul) nav.insertBefore(switcher, ul);
    else nav.appendChild(switcher);
  }

  window.KlyxI18n = {
    current: current,
    t: t,
    apply: apply,
    set: set,
    setLang: setLang,
    init: init,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      injectSwitcher();
      apply();
    });
  } else {
    injectSwitcher();
    apply();
  }
})();

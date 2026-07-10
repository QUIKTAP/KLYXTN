(function () {
  const translations = {
    ar: {
      nav_how: "كيف يعمل",
      nav_products: "المنتجات",
      nav_features: "المميزات",
      nav_space: "مساحتي",
      nav_order: "اطلب الآن",
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

      nav_b2b: "الشركات",
      b2b_nav_solutions: "الحلول",
      b2b_nav_pricing: "الأسعار",
      b2b_nav_quote: "اطلب عرض سعر",
      b2b_nav_back: "العودة للموقع",

      b2b_pill: "🏢 حلول للشركات",
      b2b_hero_title1: "KLYX للأعمال —",
      b2b_hero_title_grad: "جهّز فريقك بتقنية NFC",
      b2b_hero_sub: "حلول NFC مخصصة للفنادق، المطاعم، المحلات، والفعاليات — بأسعار تفضيلية للكميات.",
      b2b_hero_sub2: "من بطاقات الأعمال إلى منيوهات المطاعم الذكية، نجهّز فريقك بحلول تواصل احترافية وسريعة.",
      b2b_hero_btn1: "شاهد عروضنا",
      b2b_hero_btn2: "اطلب عرض سعر",

      b2b_stat1_n: "15+",
      b2b_stat1_l: "شركة تثق بينا",
      b2b_stat2_n: "-30%",
      b2b_stat2_l: "توفير عند الشراء بالجملة",
      b2b_stat3_n: "48h",
      b2b_stat3_l: "توصيل سريع لكل تونس",

      b2b_sectors_pill: "🏭 قطاعات النشاط",
      b2b_sectors_title: "حلول ذكية لكل",
      b2b_sectors_title_grad: "نشاط تجاري",

      b2b_sec_hotel_title: "فنادق وإقامات",
      b2b_sec_hotel_desc: "بطاقات NFC لفريق الاستقبال والمبيعات، مع إمكانية ربطها بصفحة تقييم Google لتحسين تصنيف فندقك.",
      b2b_sec_hotel_tag1: "🛎 استقبال",
      b2b_sec_hotel_tag2: "⭐ تقييمات Google",
      b2b_sec_hotel_tag3: "🤝 مبيعات",

      b2b_sec_resto_title: "مطاعم ومقاهي",
      b2b_sec_resto_desc: "منيو NFC دائري لكل طاولة، بالإضافة لبطاقات الفريق وأداة تقييم Google لزيادة عدد التقييمات الإيجابية.",
      b2b_sec_resto_tag1: "📋 منيو رقمي",
      b2b_sec_resto_tag2: "⭐ تقييمات",
      b2b_sec_resto_tag3: "👥 فريق الخدمة",

      b2b_sec_retail_title: "محلات وبوتيكات",
      b2b_sec_retail_desc: "بطاقات NFC لفريق البيع لتسهيل تبادل معلومات التواصل مع الزبائن، مع أداة تقييم Google عند الكاشير.",
      b2b_sec_retail_tag1: "🛍 بيع",
      b2b_sec_retail_tag2: "💳 كاشير",
      b2b_sec_retail_tag3: "📲 تواصل سريع",

      b2b_sec_events_title: "فعاليات ومعارض",
      b2b_sec_events_desc: "زوّد فريقك بمفاتيح NFC عملية لتبادل جهات الاتصال بسرعة مع الزوار خلال المعارض والفعاليات.",
      b2b_sec_events_tag1: "🎪 معارض",
      b2b_sec_events_tag2: "🔑 مفاتيح NFC",
      b2b_sec_events_tag3: "⚡ تبادل سريع",

      b2b_pricing_pill: "💼 باقات الشركات",
      b2b_pricing_title: "اختر",
      b2b_pricing_title_grad: "الباقة المناسبة",
      b2b_pricing_sub: "كل الباقات تشمل التخصيص بشعار شركتك ودعم فني كامل.",

      b2b_tier_starter_name: "Starter",
      b2b_tier_starter_range: "10 إلى 24 قطعة",
      b2b_tier_starter_note: "مثالية للفرق الصغيرة",
      b2b_tier_starter_f1: "✓ تخصيص بشعار الشركة",
      b2b_tier_starter_f2: "✓ بطاقة رقمية لكل موظف",
      b2b_tier_starter_f3: "✓ توصيل مجاني",
      b2b_tier_starter_f4: "✓ دعم فني عبر واتساب",
      b2b_tier_starter_btn: "اطلب هذه الباقة",

      b2b_tier_business_badge: "⭐ الأكثر طلباً",
      b2b_tier_business_name: "Business",
      b2b_tier_business_range: "25 إلى 49 قطعة",
      b2b_tier_business_note: "الأنسب للشركات المتوسطة",
      b2b_tier_business_f1: "✓ كل مميزات Starter",
      b2b_tier_business_f2: "✓ تصميم بطاقة موحّد للفريق",
      b2b_tier_business_f3: "✓ لوحة تحكم مركزية للفريق",
      b2b_tier_business_f4: "✓ توصيل سريع (48 ساعة)",
      b2b_tier_business_f5: "✓ دعم فني ذو أولوية",
      b2b_tier_business_btn: "اطلب هذه الباقة",

      b2b_tier_enterprise_name: "Enterprise",
      b2b_tier_enterprise_range: "+50 قطعة",
      b2b_tier_enterprise_price: "على السعر",
      b2b_tier_enterprise_note: "حلول مخصصة بالكامل",
      b2b_tier_enterprise_f1: "✓ كل مميزات Business",
      b2b_tier_enterprise_f2: "✓ مدير حساب مخصص",
      b2b_tier_enterprise_f3: "✓ فوترة مجمّعة",
      b2b_tier_enterprise_f4: "✓ تكامل مع أنظمتكم الداخلية",
      b2b_tier_enterprise_btn: "تواصل معنا",

      b2b_unit_label: "/ للقطعة",

      b2b_benefits_pill: "✦ لماذا KLYX Business",
      b2b_benefits_title: "شريك موثوق",
      b2b_benefits_title_grad: "لنمو أعمالكم",

      b2b_benefit1_title: "تخصيص كامل للعلامة التجارية",
      b2b_benefit1_desc: "شعارك وألوانك على كل بطاقة، بدون تكلفة إضافية.",
      b2b_benefit2_title: "مدير حساب مخصص",
      b2b_benefit2_desc: "شخص واحد يتابع طلبكم من البداية للنهاية.",
      b2b_benefit3_title: "فوترة مجمّعة",
      b2b_benefit3_desc: "فاتورة واحدة لكل الطلبية، تسهيلاً لمحاسبتكم.",
      b2b_benefit4_title: "توصيل سريع",
      b2b_benefit4_desc: "نلتزم بمواعيد التسليم حتى للكميات الكبيرة.",
      b2b_benefit5_title: "تصميم مرن",
      b2b_benefit5_desc: "نتأقلم مع هوية شركتكم البصرية بالكامل.",
      b2b_benefit6_title: "دعم فني مستمر",
      b2b_benefit6_desc: "فريقنا معكم حتى بعد التسليم لأي تعديل أو مساعدة.",

      b2b_quote_pill: "📩 اطلب عرض سعر",
      b2b_quote_title: "أخبرنا عن",
      b2b_quote_title_grad: "احتياجات شركتكم",
      b2b_quote_sub: "املأ النموذج وسنرسل لكم عرض سعر مفصّل خلال وقت قصير.",

      b2b_quote_field_company: "اسم الشركة",
      b2b_quote_field_contact: "اسم المسؤول عن التواصل",
      b2b_quote_field_phone: "رقم الهاتف",
      b2b_quote_field_email: "البريد الإلكتروني",
      b2b_quote_field_sector: "قطاع النشاط",
      b2b_quote_sector_ph: "اختر القطاع",
      b2b_quote_sector_hotel: "فندقة وإقامة",
      b2b_quote_sector_resto: "مطاعم ومقاهي",
      b2b_quote_sector_retail: "تجارة وبيع بالتجزئة",
      b2b_quote_sector_events: "فعاليات ومعارض",
      b2b_quote_sector_other: "أخرى",

      b2b_quote_field_product: "المنتج المهتم به",
      b2b_quote_product_ph: "اختر المنتج",
      b2b_quote_product_card: "بطاقات NFC",
      b2b_quote_product_key: "مفاتيح NFC",
      b2b_quote_product_stand: "أداة تقييم Google",
      b2b_quote_product_menu: "منيو NFC",
      b2b_quote_product_mix: "مزيج من المنتجات",

      b2b_quote_field_qty: "الكمية التقريبية",
      b2b_quote_field_message: "تفاصيل إضافية (اختياري)",
      b2b_quote_message_ph: "أخبرنا أكثر عن احتياجاتكم...",

      b2b_quote_btn: "إرسال الطلب عبر واتساب ←",
      b2b_quote_note: "سنتواصل معكم خلال 24 ساعة",
      b2b_quote_err: "من فضلك أدخل اسم الشركة ورقم الهاتف",

      b2b_footer_copy: "© 2026 Klyx Business. جميع الحقوق محفوظة.",
    },
    fr: {
      nav_how: "Comment ça marche",
      nav_products: "Produits",
      nav_features: "Fonctionnalités",
      nav_space: "Mon espace",
      nav_order: "Commander",
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

      nav_b2b: "B2B",
      b2b_nav_solutions: "Solutions",
      b2b_nav_pricing: "Tarifs",
      b2b_nav_quote: "Devis",
      b2b_nav_back: "Retour au site",

      b2b_pill: "🏢 Solutions Entreprises",
      b2b_hero_title1: "KLYX Business —",
      b2b_hero_title_grad: "équipez votre équipe avec le NFC",
      b2b_hero_sub: "Des solutions NFC sur mesure pour hôtels, restaurants, boutiques et événements — avec des tarifs préférentiels sur le volume.",
      b2b_hero_sub2: "Des cartes de visite aux menus digitaux, équipez votre équipe d'outils de communication professionnels et rapides.",
      b2b_hero_btn1: "Voir nos offres",
      b2b_hero_btn2: "Demander un devis",

      b2b_stat1_n: "15+",
      b2b_stat1_l: "Entreprises nous font confiance",
      b2b_stat2_n: "-30%",
      b2b_stat2_l: "d'économie sur le volume",
      b2b_stat3_n: "48h",
      b2b_stat3_l: "Livraison rapide partout en Tunisie",

      b2b_sectors_pill: "🏭 Secteurs d'activité",
      b2b_sectors_title: "Des solutions intelligentes pour",
      b2b_sectors_title_grad: "chaque secteur",

      b2b_sec_hotel_title: "Hôtels & Hébergement",
      b2b_sec_hotel_desc: "Cartes NFC pour votre équipe de réception et de vente, avec la possibilité de les relier à votre page d'avis Google pour améliorer votre classement.",
      b2b_sec_hotel_tag1: "🛎 Réception",
      b2b_sec_hotel_tag2: "⭐ Avis Google",
      b2b_sec_hotel_tag3: "🤝 Vente",

      b2b_sec_resto_title: "Restaurants & Cafés",
      b2b_sec_resto_desc: "Menu NFC circulaire pour chaque table, cartes pour votre équipe, et outil d'avis Google pour multiplier vos avis positifs.",
      b2b_sec_resto_tag1: "📋 Menu digital",
      b2b_sec_resto_tag2: "⭐ Avis clients",
      b2b_sec_resto_tag3: "👥 Équipe",

      b2b_sec_retail_title: "Boutiques & Commerces",
      b2b_sec_retail_desc: "Cartes NFC pour votre équipe de vente afin de faciliter l'échange de contacts, avec un outil d'avis Google à la caisse.",
      b2b_sec_retail_tag1: "🛍 Vente",
      b2b_sec_retail_tag2: "💳 Caisse",
      b2b_sec_retail_tag3: "📲 Contact rapide",

      b2b_sec_events_title: "Événements & Salons",
      b2b_sec_events_desc: "Équipez votre équipe de porte-clés NFC pratiques pour échanger rapidement vos contacts avec les visiteurs lors de salons et événements.",
      b2b_sec_events_tag1: "🎪 Salons",
      b2b_sec_events_tag2: "🔑 Porte-clés NFC",
      b2b_sec_events_tag3: "⚡ Échange rapide",

      b2b_pricing_pill: "💼 Packs entreprises",
      b2b_pricing_title: "Choisissez votre",
      b2b_pricing_title_grad: "pack adapté",
      b2b_pricing_sub: "Tous les packs incluent la personnalisation avec votre logo et un support complet.",

      b2b_tier_starter_name: "Starter",
      b2b_tier_starter_range: "10 à 24 unités",
      b2b_tier_starter_note: "Idéal pour les petites équipes",
      b2b_tier_starter_f1: "✓ Personnalisation avec votre logo",
      b2b_tier_starter_f2: "✓ Une carte digitale par employé",
      b2b_tier_starter_f3: "✓ Livraison gratuite",
      b2b_tier_starter_f4: "✓ Support via WhatsApp",
      b2b_tier_starter_btn: "Demander ce pack",

      b2b_tier_business_badge: "⭐ Le plus demandé",
      b2b_tier_business_name: "Business",
      b2b_tier_business_range: "25 à 49 unités",
      b2b_tier_business_note: "Idéal pour les moyennes entreprises",
      b2b_tier_business_f1: "✓ Tous les avantages Starter",
      b2b_tier_business_f2: "✓ Design de carte harmonisé pour l'équipe",
      b2b_tier_business_f3: "✓ Tableau de bord centralisé",
      b2b_tier_business_f4: "✓ Livraison rapide (48h)",
      b2b_tier_business_f5: "✓ Support prioritaire",
      b2b_tier_business_btn: "Demander ce pack",

      b2b_tier_enterprise_name: "Enterprise",
      b2b_tier_enterprise_range: "50+ unités",
      b2b_tier_enterprise_price: "Sur devis",
      b2b_tier_enterprise_note: "Solutions entièrement sur mesure",
      b2b_tier_enterprise_f1: "✓ Tous les avantages Business",
      b2b_tier_enterprise_f2: "✓ Gestionnaire de compte dédié",
      b2b_tier_enterprise_f3: "✓ Facturation groupée",
      b2b_tier_enterprise_f4: "✓ Intégration à vos outils internes",
      b2b_tier_enterprise_btn: "Nous contacter",

      b2b_unit_label: "/ unité",

      b2b_benefits_pill: "✦ Pourquoi KLYX Business",
      b2b_benefits_title: "Un partenaire de confiance",
      b2b_benefits_title_grad: "pour votre croissance",

      b2b_benefit1_title: "Personnalisation complète de la marque",
      b2b_benefit1_desc: "Votre logo et vos couleurs sur chaque carte, sans frais supplémentaires.",
      b2b_benefit2_title: "Gestionnaire de compte dédié",
      b2b_benefit2_desc: "Une seule personne suit votre commande du début à la fin.",
      b2b_benefit3_title: "Facturation groupée",
      b2b_benefit3_desc: "Une seule facture pour toute la commande, pour simplifier votre comptabilité.",
      b2b_benefit4_title: "Livraison rapide",
      b2b_benefit4_desc: "Nous respectons les délais même pour les grandes quantités.",
      b2b_benefit5_title: "Design flexible",
      b2b_benefit5_desc: "Nous nous adaptons entièrement à votre identité visuelle.",
      b2b_benefit6_title: "Support continu",
      b2b_benefit6_desc: "Notre équipe reste disponible après la livraison pour toute modification.",

      b2b_quote_pill: "📩 Demander un devis",
      b2b_quote_title: "Parlez-nous de",
      b2b_quote_title_grad: "vos besoins",
      b2b_quote_sub: "Remplissez le formulaire et nous vous enverrons un devis détaillé rapidement.",

      b2b_quote_field_company: "Nom de l'entreprise",
      b2b_quote_field_contact: "Nom du contact",
      b2b_quote_field_phone: "Numéro de téléphone",
      b2b_quote_field_email: "Adresse e-mail",
      b2b_quote_field_sector: "Secteur d'activité",
      b2b_quote_sector_ph: "Choisissez un secteur",
      b2b_quote_sector_hotel: "Hôtellerie",
      b2b_quote_sector_resto: "Restaurants & Cafés",
      b2b_quote_sector_retail: "Commerce & Retail",
      b2b_quote_sector_events: "Événements & Salons",
      b2b_quote_sector_other: "Autre",

      b2b_quote_field_product: "Produit qui vous intéresse",
      b2b_quote_product_ph: "Choisissez un produit",
      b2b_quote_product_card: "Cartes NFC",
      b2b_quote_product_key: "Porte-clés NFC",
      b2b_quote_product_stand: "Stand avis Google",
      b2b_quote_product_menu: "Menu NFC",
      b2b_quote_product_mix: "Mix de produits",

      b2b_quote_field_qty: "Quantité estimée",
      b2b_quote_field_message: "Détails supplémentaires (optionnel)",
      b2b_quote_message_ph: "Parlez-nous davantage de vos besoins...",

      b2b_quote_btn: "Envoyer via WhatsApp →",
      b2b_quote_note: "Nous vous répondrons sous 24h",
      b2b_quote_err: "Veuillez indiquer le nom de l'entreprise et le téléphone",

      b2b_footer_copy: "© 2026 Klyx Business. Tous droits réservés.",
    },
    en: {
      nav_how: "How it works",
      nav_products: "Products",
      nav_features: "Features",
      nav_space: "My space",
      nav_order: "Order now",
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

      nav_b2b: "B2B",
      b2b_nav_solutions: "Solutions",
      b2b_nav_pricing: "Pricing",
      b2b_nav_quote: "Get a Quote",
      b2b_nav_back: "Back to site",

      b2b_pill: "🏢 Business Solutions",
      b2b_hero_title1: "KLYX Business —",
      b2b_hero_title_grad: "equip your team with NFC",
      b2b_hero_sub: "Tailored NFC solutions for hotels, restaurants, retail shops and events — with volume discounts.",
      b2b_hero_sub2: "From business cards to smart restaurant menus, equip your team with fast, professional communication tools.",
      b2b_hero_btn1: "View our offers",
      b2b_hero_btn2: "Request a quote",

      b2b_stat1_n: "15+",
      b2b_stat1_l: "Businesses trust us",
      b2b_stat2_n: "-30%",
      b2b_stat2_l: "savings on volume orders",
      b2b_stat3_n: "48h",
      b2b_stat3_l: "fast delivery across Tunisia",

      b2b_sectors_pill: "🏭 Industries",
      b2b_sectors_title: "Smart solutions for every",
      b2b_sectors_title_grad: "industry",

      b2b_sec_hotel_title: "Hotels & Hospitality",
      b2b_sec_hotel_desc: "NFC cards for your front-desk and sales teams, with the option to link them to your Google review page to boost your rating.",
      b2b_sec_hotel_tag1: "🛎 Front desk",
      b2b_sec_hotel_tag2: "⭐ Google reviews",
      b2b_sec_hotel_tag3: "🤝 Sales",

      b2b_sec_resto_title: "Restaurants & Cafés",
      b2b_sec_resto_desc: "Round NFC menu tags for every table, cards for your staff, and a Google review tool to multiply your positive reviews.",
      b2b_sec_resto_tag1: "📋 Digital menu",
      b2b_sec_resto_tag2: "⭐ Reviews",
      b2b_sec_resto_tag3: "👥 Staff",

      b2b_sec_retail_title: "Retail & Boutiques",
      b2b_sec_retail_desc: "NFC cards for your sales team to make exchanging contacts easier, plus a Google review tool at checkout.",
      b2b_sec_retail_tag1: "🛍 Sales",
      b2b_sec_retail_tag2: "💳 Checkout",
      b2b_sec_retail_tag3: "📲 Quick contact",

      b2b_sec_events_title: "Events & Trade Shows",
      b2b_sec_events_desc: "Equip your team with practical NFC keychains to quickly exchange contacts with visitors at trade shows and events.",
      b2b_sec_events_tag1: "🎪 Trade shows",
      b2b_sec_events_tag2: "🔑 NFC keychains",
      b2b_sec_events_tag3: "⚡ Quick exchange",

      b2b_pricing_pill: "💼 Business packs",
      b2b_pricing_title: "Choose the",
      b2b_pricing_title_grad: "right pack",
      b2b_pricing_sub: "All packs include logo customization and full support.",

      b2b_tier_starter_name: "Starter",
      b2b_tier_starter_range: "10 to 24 units",
      b2b_tier_starter_note: "Ideal for small teams",
      b2b_tier_starter_f1: "✓ Customization with your logo",
      b2b_tier_starter_f2: "✓ One digital card per employee",
      b2b_tier_starter_f3: "✓ Free delivery",
      b2b_tier_starter_f4: "✓ WhatsApp support",
      b2b_tier_starter_btn: "Request this pack",

      b2b_tier_business_badge: "⭐ Most popular",
      b2b_tier_business_name: "Business",
      b2b_tier_business_range: "25 to 49 units",
      b2b_tier_business_note: "Ideal for mid-sized companies",
      b2b_tier_business_f1: "✓ Everything in Starter",
      b2b_tier_business_f2: "✓ Unified card design for the team",
      b2b_tier_business_f3: "✓ Centralized team dashboard",
      b2b_tier_business_f4: "✓ Fast delivery (48h)",
      b2b_tier_business_f5: "✓ Priority support",
      b2b_tier_business_btn: "Request this pack",

      b2b_tier_enterprise_name: "Enterprise",
      b2b_tier_enterprise_range: "50+ units",
      b2b_tier_enterprise_price: "Custom quote",
      b2b_tier_enterprise_note: "Fully tailored solutions",
      b2b_tier_enterprise_f1: "✓ Everything in Business",
      b2b_tier_enterprise_f2: "✓ Dedicated account manager",
      b2b_tier_enterprise_f3: "✓ Grouped invoicing",
      b2b_tier_enterprise_f4: "✓ Integration with your internal tools",
      b2b_tier_enterprise_btn: "Contact us",

      b2b_unit_label: "/ unit",

      b2b_benefits_pill: "✦ Why KLYX Business",
      b2b_benefits_title: "A trusted partner",
      b2b_benefits_title_grad: "for your growth",

      b2b_benefit1_title: "Full brand customization",
      b2b_benefit1_desc: "Your logo and colors on every card, at no extra cost.",
      b2b_benefit2_title: "Dedicated account manager",
      b2b_benefit2_desc: "One person follows your order from start to finish.",
      b2b_benefit3_title: "Grouped invoicing",
      b2b_benefit3_desc: "One single invoice for the whole order, simplifying your accounting.",
      b2b_benefit4_title: "Fast delivery",
      b2b_benefit4_desc: "We keep our deadlines even for large quantities.",
      b2b_benefit5_title: "Flexible design",
      b2b_benefit5_desc: "We fully adapt to your visual identity.",
      b2b_benefit6_title: "Ongoing support",
      b2b_benefit6_desc: "Our team stays available after delivery for any changes.",

      b2b_quote_pill: "📩 Request a quote",
      b2b_quote_title: "Tell us about",
      b2b_quote_title_grad: "your needs",
      b2b_quote_sub: "Fill out the form and we'll send you a detailed quote shortly.",

      b2b_quote_field_company: "Company name",
      b2b_quote_field_contact: "Contact name",
      b2b_quote_field_phone: "Phone number",
      b2b_quote_field_email: "Email address",
      b2b_quote_field_sector: "Industry",
      b2b_quote_sector_ph: "Choose an industry",
      b2b_quote_sector_hotel: "Hospitality",
      b2b_quote_sector_resto: "Restaurants & Cafés",
      b2b_quote_sector_retail: "Retail",
      b2b_quote_sector_events: "Events & Trade Shows",
      b2b_quote_sector_other: "Other",

      b2b_quote_field_product: "Product of interest",
      b2b_quote_product_ph: "Choose a product",
      b2b_quote_product_card: "NFC Cards",
      b2b_quote_product_key: "NFC Keychains",
      b2b_quote_product_stand: "Google Review Stand",
      b2b_quote_product_menu: "NFC Menu",
      b2b_quote_product_mix: "Mix of products",

      b2b_quote_field_qty: "Estimated quantity",
      b2b_quote_field_message: "Additional details (optional)",
      b2b_quote_message_ph: "Tell us more about your needs...",

      b2b_quote_btn: "Send via WhatsApp →",
      b2b_quote_note: "We'll get back to you within 24h",
      b2b_quote_err: "Please enter the company name and phone number",

      b2b_footer_copy: "© 2026 Klyx Business. All rights reserved.",
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
    // Update all elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });

    // RTL / LTR direction
    if (RTL_LANGS.includes(current)) {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", current);
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", current);
    }

    // Update switcher active state
    document.querySelectorAll(".klyx-lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.lang === current);
    });
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.lang === current);
    });
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    current = lang;
    window.KlyxI18n.current = lang;
    localStorage.setItem("klyx_lang", lang);
    apply();
    document.dispatchEvent(new CustomEvent("klyxLangChanged", { detail: { lang: lang } }));
  }

  function injectSwitcher() {
    // Avoid double-inject
    if (document.getElementById("klyx-lang-switcher")) return;

    const nav = document.querySelector("nav");
    if (!nav) return;

    const switcher = document.createElement("div");
    switcher.id = "klyx-lang-switcher";
    switcher.style.cssText =
      "display:flex;align-items:center;gap:6px;margin-right:18px;";

    ["ar", "fr", "en"].forEach(function (lang) {
      const btn = document.createElement("button");
      btn.className = "klyx-lang-btn";
      btn.dataset.lang = lang;
      btn.textContent = lang.toUpperCase();
      btn.style.cssText =
        "background:transparent;border:1.5px solid rgba(124,58,237,.25);" +
        "color:#7c3aed;font-family:'Tajawal',sans-serif;font-weight:700;" +
        "font-size:.72rem;padding:4px 11px;border-radius:50px;cursor:pointer;" +
        "transition:background .2s,color .2s,border-color .2s;";
      btn.addEventListener("mouseenter", function () {
        if (btn.dataset.lang !== current) {
          btn.style.background = "rgba(124,58,237,.08)";
        }
      });
      btn.addEventListener("mouseleave", function () {
        if (btn.dataset.lang !== current) {
          btn.style.background = "transparent";
        }
      });
      btn.addEventListener("click", function () {
        setLang(lang);
      });
      switcher.appendChild(btn);
    });

    // Active style via JS
    const style = document.createElement("style");
    style.textContent =
      ".klyx-lang-btn.active{background:linear-gradient(135deg,#7c3aed,#3b82f6,#06b6d4)!important;" +
      "color:#fff!important;border-color:transparent!important;}";
    document.head.appendChild(style);

    // Insert before ul in nav
    const ul = nav.querySelector("ul");
    if (ul) {
      nav.insertBefore(switcher, ul);
    } else {
      nav.appendChild(switcher);
    }
  }

  function init() {
    injectSwitcher();
    apply();
  }

  // Public API
  window.KlyxI18n = {
    current: current,
    t: t,
    apply: apply,
    setLang: setLang,
    set: setLang,
    init: init,
  };

  // Wait for DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      init();
    });
  } else {
    init();
  }
})();

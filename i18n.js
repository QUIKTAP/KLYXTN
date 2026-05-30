/**
 * KLYX — i18n + Theme System v2
 * Fixed: XSS in t(), safe DOM updates, proper encapsulation
 */
(function () {
  'use strict';

  /* ═══════════════ TRANSLATIONS ═══════════════ */
  var translations = {
    ar: {
      nav_how:'كيف يعمل',nav_products:'المنتجات',nav_features:'المميزات',
      nav_space:'مساحتي',nav_order:'اطلب الآن',
      modal_title:'🛒 اطلب المنتج',modal_name:'الاسم الكامل',
      modal_phone:'رقم الهاتف',modal_city:'العنوان / المدينة',
      modal_qty:'الكمية',modal_btn_nfc:'متابعة — إنشاء بطاقتك الرقمية ←',
      modal_btn_simple:'إرسال الطلب عبر واتساب ←',
      modal_note_nfc:'ستنتقل لإنشاء بطاقتك الرقمية الشخصية',
      modal_note_simple:'سيتم توجيهك مباشرة للواتساب',
      modal_login:'لديك حساب بالفعل؟ تسجيل الدخول ←',
      modal_err:'من فضلك أدخل الاسم ورقم الهاتف',
      field_name:'الاسم الكامل',field_job:'المسمى الوظيفي',
      field_phone:'📱 الهاتف',field_wa:'💬 واتساب',
      field_email:'✉️ البريد الإلكتروني',field_website:'🌐 الموقع',
      field_ig:'📸 Instagram',field_fb:'👥 Facebook',
      field_li:'💼 LinkedIn',field_tt:'🎵 TikTok',
      field_tw:'𝕏 Twitter / X',field_yt:'▶️ YouTube',
      field_sc:'👻 Snapchat',field_tg:'✈️ Telegram',
      field_gh:'🐙 GitHub',field_be:'🅱 Behance',
      card_badge:'بطاقة KLYX الرقمية',card_save:'💾 حفظ في جهات الاتصال',
      card_share:'مشاركة',card_shared:'تم النسخ!',card_call:'اتصال',
      card_wa:'واتساب',card_email:'البريد الإلكتروني',
      card_website:'الموقع الإلكتروني',card_footer:'بُنيت بـ ❤ بواسطة',
      card_get:'احصل على بطاقتك',
      dash_greeting:'مرحباً بك في مساحتك الشخصية ✨',
      dash_title:'تعديل ',dash_title_grad:'بطاقتك الرقمية',
      dash_sub:'التغييرات تنعكس فوراً على بطاقتك العامة',
      dash_logo:'🖼 الصورة / الشعار',dash_upload_text:'📸 تغيير الصورة أو الشعار',
      dash_personal:'👤 المعلومات الشخصية',dash_contact:'📞 معلومات التواصل',
      dash_social:'🔗 التواصل الاجتماعي',dash_theme:'🎨 لون البطاقة',
      dash_save:'💾 حفظ التغييرات',dash_saved:'✓ تم حفظ التغييرات بنجاح',
      dash_preview:'✨ بطاقتك الرقمية الحالية',dash_view:'🔗 بطاقتي',
      dash_logout:'خروج',dash_copy:'📋 نسخ الرابط',dash_copied:'✓ تم النسخ!',
      dash_link_label:'🔗 رابطك العام',dash_open_card:'فتح البطاقة العامة ↗',
      theme_purple:'بنفسجي',theme_dark:'داكن',theme_blue:'أزرق',
      theme_gold:'ذهبي',theme_white:'فضي',
      cc_step:'الخطوة 2 من 3',cc_title:'أنشئ ',cc_title_grad:'بطاقتك الرقمية',
      cc_sub:'بطاقتك الرقمية ستظهر عند المسح بالـ NFC أو الـ QR',
      cc_logo_label:'🖼 الصورة / الشعار',cc_logo_text:'ارفع صورتك أو شعار شركتك',
      cc_logo_hint:'PNG, JPG أو SVG — حتى 2MB',cc_logo_done:'✓ تم رفع الصورة',
      cc_personal:'👤 المعلومات الشخصية',cc_name:'الاسم الكامل',
      cc_name_ph:'مثال: أحمد بن علي',cc_job:'المسمى الوظيفي',
      cc_job_ph:'مثال: مصمم جرافيك',cc_contact:'📞 وسائل التواصل',
      cc_phone_ph:'+216 XX XXX XXX',cc_email_ph:'you@example.com',
      cc_website_ph:'www.yoursite.com',cc_social:'🔗 وسائل التواصل الاجتماعي',
      cc_all_optional:'— كل الحقول اختيارية',cc_theme:'🎨 لون بطاقتك',
      cc_preview_label:'✨ معاينة بطاقتك الرقمية',cc_badge:'بطاقة KLYX الرقمية',
      cc_btn_continue:'المتابعة إلى الدفع ←',cc_btn_save:'💾 حفظ والمتابعة لاحقاً',
      cc_err:'من فضلك أدخل اسمك الكامل',cc_draft_saved:'تم حفظ المسودة!',
      step_order:'الطلب',step_card:'البطاقة الرقمية',step_payment:'الدفع',
      pay_step:'الخطوة 3 من 3 — الأخيرة',pay_title:'الدفع',
      pay_title2:' وإنشاء حسابك',pay_sub:'بعد الدفع سيتم إنشاء حسابك تلقائياً',
      pay_account:'🔐 بيانات الدخول لحسابك',pay_email_label:'البريد الإلكتروني',
      pay_pwd:'كلمة المرور',pay_pwd2:'تأكيد كلمة المرور',
      pay_method:'💳 طريقة الدفع',pay_cod:'الدفع عند الاستلام',
      pay_cod_desc:'ادفع عند وصول المنتج',pay_bank:'تحويل بنكي',
      pay_bank_desc:'تحويل مسبق — نؤكد بعد التحقق',
      pay_bank_info:'🏦 معلومات الحساب البنكي',pay_bank_name:'اسم البنك',
      pay_bank_iban:'الرقم الحسابي / RIB',pay_bank_holder:'اسم صاحب الحساب',
      pay_bank_copy:'نسخ',pay_bank_copied:'✓ تم!',
      pay_bank_inst_text:'قم بتحويل المبلغ وأرسل لنا إثبات الدفع عبر WhatsApp أو البريد الإلكتروني',
      pay_delivery:'📦 معلومات التوصيل',pay_address:'العنوان الكامل',
      pay_address_ph:'الشارع، الحي، المدينة',pay_city:'المدينة',
      pay_city_ph:'تونس، صفاقس...',pay_notes:'ملاحظات (اختياري)',
      pay_notes_ph:'تعليمات التوصيل...',
      pay_confirm_btn:'✓ تأكيد الطلب وإنشاء الحساب',
      pay_secure:'بياناتك محمية تماماً',pay_summary:'ملخص طلبك',
      pay_product:'المنتج المختار',pay_qty_label:'الكمية',pay_total:'المجموع',
      pay_includes:['بطاقة NFC عالية الجودة','بطاقتك الرقمية الشخصية','شحن مجاني داخل تونس','دعم فني مجاني لمدة سنة'],
      pay_err_email:'من فضلك أدخل بريدك الإلكتروني',
      pay_err_pwd:'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
      pay_err_match:'كلمتا المرور غير متطابقتين',
      pay_err_address:'من فضلك أدخل عنوان التوصيل',
      success_icon:'🎉',success_title:'تم إنشاء حسابك!',
      success_sub:'تم استلام طلبك بنجاح. إليك بيانات دخولك',
      success_creds_title:'🔐 بيانات الدخول',success_email_label:'البريد الإلكتروني',
      success_pwd_label:'كلمة المرور',success_url_label:'رابطك الشخصي',
      success_wa_note:'سنتواصل معك قريباً لتأكيد الطلب',success_btn:'ادخل على مساحتي ←',
      login_tagline:'مساحتك الرقمية الخاصة',login_title:'أهلاً بعودتك 👋',
      login_sub:'ادخل على حسابك لإدارة بطاقتك الرقمية',
      login_email:'البريد الإلكتروني',login_pwd:'كلمة المرور',login_btn:'تسجيل الدخول',
      login_err:'البريد الإلكتروني أو كلمة المرور غير صحيحة',
      login_err_empty:'من فضلك أدخل البريد وكلمة المرور',
      login_err_nouser:'لا يوجد حساب بهذا البريد الإلكتروني',
      login_no_account:'ليس لديك حساب؟',login_no_account_link:'اطلب بطاقتك الآن ←',
      lang_label:'اللغة',
    },
    fr: {
      nav_how:'Comment ça marche',nav_products:'Produits',nav_features:'Fonctionnalités',
      nav_space:'Mon espace',nav_order:'Commander',
      modal_title:'🛒 Commander',modal_name:'Nom complet',
      modal_phone:'Numéro de téléphone',modal_city:'Adresse / Ville',
      modal_qty:'Quantité',modal_btn_nfc:'Continuer — Créer ma carte numérique →',
      modal_btn_simple:'Envoyer la commande via WhatsApp →',
      modal_note_nfc:'Vous serez redirigé pour créer votre carte personnelle',
      modal_note_simple:'Vous serez redirigé vers WhatsApp',
      modal_login:'Déjà un compte ? Se connecter →',
      modal_err:'Veuillez saisir votre nom et numéro de téléphone',
      field_name:'Nom complet',field_job:'Titre / Poste',field_phone:'📱 Téléphone',
      field_wa:'💬 WhatsApp',field_email:'✉️ E-mail',field_website:'🌐 Site web',
      field_ig:'📸 Instagram',field_fb:'👥 Facebook',field_li:'💼 LinkedIn',
      field_tt:'🎵 TikTok',field_tw:'𝕏 Twitter / X',field_yt:'▶️ YouTube',
      field_sc:'👻 Snapchat',field_tg:'✈️ Telegram',field_gh:'🐙 GitHub',field_be:'🅱 Behance',
      card_badge:'Carte numérique KLYX',card_save:'💾 Enregistrer le contact',
      card_share:'Partager',card_shared:'Lien copié !',card_call:'Appeler',
      card_wa:'WhatsApp',card_email:'E-mail',card_website:'Site web',
      card_footer:'Créé avec ❤ par',card_get:'Obtenir ma carte',
      dash_greeting:'Bienvenue dans votre espace personnel ✨',
      dash_title:'Modifier ',dash_title_grad:'votre carte numérique',
      dash_sub:'Les modifications se reflètent instantanément sur votre carte publique',
      dash_logo:'🖼 Photo / Logo',dash_upload_text:'📸 Changer la photo ou le logo',
      dash_personal:'👤 Informations personnelles',dash_contact:'📞 Coordonnées',
      dash_social:'🔗 Réseaux sociaux',dash_theme:'🎨 Couleur de la carte',
      dash_save:'💾 Enregistrer les modifications',dash_saved:'✓ Modifications enregistrées avec succès',
      dash_preview:'✨ Aperçu de votre carte',dash_view:'🔗 Ma carte',
      dash_logout:'Déconnexion',dash_copy:'📋 Copier le lien',dash_copied:'✓ Copié !',
      dash_link_label:'🔗 Votre lien public',dash_open_card:'Ouvrir la carte publique ↗',
      theme_purple:'Violet',theme_dark:'Sombre',theme_blue:'Bleu',theme_gold:'Or',theme_white:'Argent',
      cc_step:'Étape 2 sur 3',cc_title:'Créez ',cc_title_grad:'votre carte numérique',
      cc_sub:"Votre carte s'affichera lors d'un scan NFC ou QR",
      cc_logo_label:'🖼 Photo / Logo',cc_logo_text:"Importez votre photo ou logo d'entreprise",
      cc_logo_hint:'PNG, JPG ou SVG — 2 Mo max',cc_logo_done:'✓ Image importée',
      cc_personal:'👤 Informations personnelles',cc_name:'Nom complet',
      cc_name_ph:'Ex : Ahmed Ben Ali',cc_job:'Titre / Poste',cc_job_ph:'Ex : Designer graphique',
      cc_contact:'📞 Coordonnées',cc_phone_ph:'+216 XX XXX XXX',
      cc_email_ph:'you@example.com',cc_website_ph:'www.votresite.com',
      cc_social:'🔗 Réseaux sociaux',cc_all_optional:'— Tous les champs sont optionnels',
      cc_theme:'🎨 Couleur de votre carte',cc_preview_label:'✨ Aperçu de votre carte',
      cc_badge:'Carte numérique KLYX',cc_btn_continue:'Continuer vers le paiement →',
      cc_btn_save:'💾 Sauvegarder et continuer plus tard',
      cc_err:'Veuillez saisir votre nom complet',cc_draft_saved:'Brouillon sauvegardé !',
      step_order:'Commande',step_card:'Carte numérique',step_payment:'Paiement',
      pay_step:'Étape 3 sur 3 — Dernière',pay_title:'Paiement',
      pay_title2:' et création de compte',pay_sub:'Votre compte sera créé automatiquement après le paiement',
      pay_account:'🔐 Identifiants de connexion',pay_email_label:'Adresse e-mail',
      pay_pwd:'Mot de passe',pay_pwd2:'Confirmer le mot de passe',
      pay_method:'💳 Mode de paiement',pay_cod:'Paiement à la livraison',
      pay_cod_desc:'Payez à la réception du produit',pay_bank:'Virement bancaire',
      pay_bank_desc:'Virement anticipé — confirmation après vérification',
      pay_bank_info:'🏦 Coordonnées bancaires',pay_bank_name:'Nom de la banque',
      pay_bank_iban:'Numéro de compte / RIB',pay_bank_holder:'Titulaire du compte',
      pay_bank_copy:'Copier',pay_bank_copied:'✓ Copié !',
      pay_bank_inst_text:'Effectuez le virement et envoyez-nous la preuve de paiement via WhatsApp ou e-mail',
      pay_delivery:'📦 Informations de livraison',pay_address:'Adresse complète',
      pay_address_ph:'Rue, quartier, ville',pay_city:'Ville',pay_city_ph:'Tunis, Sfax...',
      pay_notes:'Notes (optionnel)',pay_notes_ph:'Instructions de livraison...',
      pay_confirm_btn:'✓ Confirmer la commande et créer le compte',
      pay_secure:'Vos données sont totalement protégées',pay_summary:'Récapitulatif',
      pay_product:'Produit choisi',pay_qty_label:'Quantité',pay_total:'Total',
      pay_includes:['Carte NFC premium','Carte numérique personnalisée','Livraison gratuite en Tunisie','Support gratuit pendant 1 an'],
      pay_err_email:'Veuillez saisir votre adresse e-mail',
      pay_err_pwd:'Le mot de passe doit contenir au moins 6 caractères',
      pay_err_match:'Les mots de passe ne correspondent pas',
      pay_err_address:'Veuillez saisir votre adresse de livraison',
      success_icon:'🎉',success_title:'Compte créé avec succès !',
      success_sub:'Votre commande a bien été reçue. Voici vos identifiants',
      success_creds_title:'🔐 Identifiants',success_email_label:'E-mail',
      success_pwd_label:'Mot de passe',success_url_label:'Votre lien personnel',
      success_wa_note:'Nous vous contacterons prochainement pour confirmer la commande',
      success_btn:'Accéder à mon espace →',
      login_tagline:'Votre espace numérique personnel',login_title:'Content de vous revoir 👋',
      login_sub:'Connectez-vous pour gérer votre carte numérique',
      login_email:'Adresse e-mail',login_pwd:'Mot de passe',login_btn:'Se connecter',
      login_err:'E-mail ou mot de passe incorrect',
      login_err_empty:'Veuillez saisir votre e-mail et votre mot de passe',
      login_err_nouser:'Aucun compte trouvé avec cet e-mail',
      login_no_account:'Pas encore de compte ?',login_no_account_link:'Commander ma carte →',
      lang_label:'Langue',
    },
    en: {
      nav_how:'How it works',nav_products:'Products',nav_features:'Features',
      nav_space:'My space',nav_order:'Order now',
      modal_title:'🛒 Order',modal_name:'Full name',modal_phone:'Phone number',
      modal_city:'Address / City',modal_qty:'Quantity',
      modal_btn_nfc:'Continue — Create my digital card →',
      modal_btn_simple:'Send order via WhatsApp →',
      modal_note_nfc:"You'll be redirected to create your personal card",
      modal_note_simple:"You'll be redirected to WhatsApp",
      modal_login:'Already have an account? Log in →',
      modal_err:'Please enter your name and phone number',
      field_name:'Full name',field_job:'Job title',field_phone:'📱 Phone',
      field_wa:'💬 WhatsApp',field_email:'✉️ Email',field_website:'🌐 Website',
      field_ig:'📸 Instagram',field_fb:'👥 Facebook',field_li:'💼 LinkedIn',
      field_tt:'🎵 TikTok',field_tw:'𝕏 Twitter / X',field_yt:'▶️ YouTube',
      field_sc:'👻 Snapchat',field_tg:'✈️ Telegram',field_gh:'🐙 GitHub',field_be:'🅱 Behance',
      card_badge:'KLYX Digital Card',card_save:'💾 Save Contact',
      card_share:'Share',card_shared:'Link copied!',card_call:'Call',
      card_wa:'WhatsApp',card_email:'Email',card_website:'Website',
      card_footer:'Built with ❤ by',card_get:'Get your card',
      dash_greeting:'Welcome to your personal space ✨',
      dash_title:'Edit your ',dash_title_grad:'digital card',
      dash_sub:'Changes reflect instantly on your public card',
      dash_logo:'🖼 Photo / Logo',dash_upload_text:'📸 Change photo or logo',
      dash_personal:'👤 Personal information',dash_contact:'📞 Contact details',
      dash_social:'🔗 Social media',dash_theme:'🎨 Card colour',
      dash_save:'💾 Save changes',dash_saved:'✓ Changes saved successfully',
      dash_preview:'✨ Your current digital card',dash_view:'🔗 My card',
      dash_logout:'Log out',dash_copy:'📋 Copy link',dash_copied:'✓ Copied!',
      dash_link_label:'🔗 Your public link',dash_open_card:'Open public card ↗',
      theme_purple:'Purple',theme_dark:'Dark',theme_blue:'Blue',theme_gold:'Gold',theme_white:'Silver',
      cc_step:'Step 2 of 3',cc_title:'Create your ',cc_title_grad:'digital card',
      cc_sub:'Your card will appear when scanned via NFC or QR',
      cc_logo_label:'🖼 Photo / Logo',cc_logo_text:'Upload your photo or company logo',
      cc_logo_hint:'PNG, JPG or SVG — max 2 MB',cc_logo_done:'✓ Image uploaded',
      cc_personal:'👤 Personal information',cc_name:'Full name',cc_name_ph:'e.g. Ahmed Ben Ali',
      cc_job:'Job title',cc_job_ph:'e.g. Graphic Designer',cc_contact:'📞 Contact details',
      cc_phone_ph:'+216 XX XXX XXX',cc_email_ph:'you@example.com',cc_website_ph:'www.yoursite.com',
      cc_social:'🔗 Social media',cc_all_optional:'— All fields are optional',
      cc_theme:'🎨 Card colour',cc_preview_label:'✨ Digital card preview',
      cc_badge:'KLYX Digital Card',cc_btn_continue:'Continue to payment →',
      cc_btn_save:'💾 Save and continue later',
      cc_err:'Please enter your full name',cc_draft_saved:'Draft saved!',
      step_order:'Order',step_card:'Digital card',step_payment:'Payment',
      pay_step:'Step 3 of 3 — Final',pay_title:'Payment',
      pay_title2:' & account creation',pay_sub:'Your account will be created automatically after payment',
      pay_account:'🔐 Login credentials',pay_email_label:'Email address',
      pay_pwd:'Password',pay_pwd2:'Confirm password',pay_method:'💳 Payment method',
      pay_cod:'Cash on delivery',pay_cod_desc:'Pay when the product arrives',
      pay_bank:'Bank transfer',pay_bank_desc:'Transfer in advance — confirmed after verification',
      pay_bank_info:'🏦 Bank account details',pay_bank_name:'Bank name',
      pay_bank_iban:'Account number / RIB',pay_bank_holder:'Account holder',
      pay_bank_copy:'Copy',pay_bank_copied:'✓ Copied!',
      pay_bank_inst_text:'Transfer the amount and send us proof of payment via WhatsApp or email',
      pay_delivery:'📦 Delivery information',pay_address:'Full address',
      pay_address_ph:'Street, neighbourhood, city',pay_city:'City',pay_city_ph:'Tunis, Sfax...',
      pay_notes:'Notes (optional)',pay_notes_ph:'Delivery instructions...',
      pay_confirm_btn:'✓ Confirm order & create account',
      pay_secure:'Your data is fully protected',pay_summary:'Order summary',
      pay_product:'Selected product',pay_qty_label:'Quantity',pay_total:'Total',
      pay_includes:['Premium NFC card','Personal digital card','Free shipping in Tunisia','Free support for 1 year'],
      pay_err_email:'Please enter your email address',
      pay_err_pwd:'Password must be at least 6 characters',
      pay_err_match:'Passwords do not match',
      pay_err_address:'Please enter your delivery address',
      success_icon:'🎉',success_title:'Account created!',
      success_sub:'Your order has been received. Here are your login details',
      success_creds_title:'🔐 Login details',success_email_label:'Email',
      success_pwd_label:'Password',success_url_label:'Your personal link',
      success_wa_note:"We'll contact you soon to confirm your order",success_btn:'Go to my space →',
      login_tagline:'Your personal digital space',login_title:'Welcome back 👋',
      login_sub:'Log in to manage your digital card',
      login_email:'Email address',login_pwd:'Password',login_btn:'Log in',
      login_err:'Incorrect email or password',
      login_err_empty:'Please enter your email and password',
      login_err_nouser:'No account found with this email',
      login_no_account:"Don't have an account?",login_no_account_link:'Order your card now →',
      lang_label:'Language',
    },
  };

  /* ═══════════════ SANITIZATION ═══════════════ */
  /**
   * Safely escape a string for use as text content.
   * Returns a plain string safe to assign via .textContent.
   * NEVER use this with innerHTML — always use textContent.
   */
  function sanitize(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#x27;');
  }

  /* ═══════════════ LANGUAGE ENGINE ═══════════════ */
  var RTL_LANGS = ['ar'];
  var _current = (function(){
    try { return localStorage.getItem('klyx_lang') || 'ar'; } catch(e){ return 'ar'; }
  })();

  function t(key) {
    var lang = translations[_current];
    if (lang && lang[key] !== undefined) return lang[key];
    var ar = translations['ar'];
    if (ar && ar[key] !== undefined) return ar[key];
    return key;
  }

  function apply() {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (Array.isArray(val)) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val; // placeholder is safe
      } else {
        el.textContent = val; // textContent is always XSS-safe
      }
    });

    var isRTL = RTL_LANGS.indexOf(_current) !== -1;
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', _current);

    document.querySelectorAll('[data-lang]').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === _current);
    });
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    _current = lang;
    try { localStorage.setItem('klyx_lang', lang); } catch(e){}
    apply();
    document.dispatchEvent(new CustomEvent('klyxLangChanged', { detail: { lang: lang } }));
  }

  /* ═══════════════ THEME SYSTEM ═══════════════ */
  var KLYX_THEMES = {
    purple:{primary:'#7c3aed',secondary:'#3b82f6',accent:'#06b6d4',
      grad:'linear-gradient(135deg,#7c3aed 0%,#3b82f6 50%,#06b6d4 100%)',
      glow:'rgba(124,58,237,.42)',bg1:'#0d0820',bg2:'#12082e',bg3:'#0a1628'},
    dark:{primary:'#a855f7',secondary:'#ec4899',accent:'#f43f5e',
      grad:'linear-gradient(135deg,#a855f7 0%,#ec4899 50%,#f43f5e 100%)',
      glow:'rgba(168,85,247,.42)',bg1:'#0a0015',bg2:'#150020',bg3:'#08000f'},
    blue:{primary:'#0070f3',secondary:'#00d4ff',accent:'#7928ca',
      grad:'linear-gradient(135deg,#00d4ff 0%,#0070f3 50%,#7928ca 100%)',
      glow:'rgba(0,112,243,.42)',bg1:'#020c1b',bg2:'#0a1628',bg3:'#030b18'},
    gold:{primary:'#fbbf24',secondary:'#f59e0b',accent:'#d97706',
      grad:'linear-gradient(135deg,#fbbf24 0%,#f59e0b 50%,#d97706 100%)',
      glow:'rgba(251,191,36,.38)',bg1:'#1a1200',bg2:'#2a1e00',bg3:'#110d00'},
    white:{primary:'#6366f1',secondary:'#8b5cf6',accent:'#a78bfa',
      grad:'linear-gradient(135deg,#6366f1 0%,#8b5cf6 100%)',
      glow:'rgba(99,102,241,.42)',bg1:'#0f0e24',bg2:'#181730',bg3:'#0a0920'},
  };

  var _currentTheme = (function(){
    try { return localStorage.getItem('klyxCardTheme') || 'purple'; } catch(e){ return 'purple'; }
  })();

  function applyThemeVars(key) {
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
    if (document.body) {
      document.body.style.background =
        'linear-gradient(160deg,' + th.bg1 + ',' + th.bg2 + ',' + th.bg3 + ')';
    }
    var blob = document.querySelector('.blob.b1');
    if (blob) {
      blob.style.background =
        'radial-gradient(circle,' + th.glow + ',transparent 70%)';
    }
  }

  /* ═══════════════ EXPORTS ═══════════════ */
  window.KlyxI18n = {
    get current() { return _current; },
    t:     t,
    apply: apply,
    init:  function() { apply(); },
    set:   setLang,
  };

  window.KLYX_THEMES = KLYX_THEMES;

  window.KlyxTheme = {
    get current() { return _currentTheme; },
    init: function(storageKey) {
      var key;
      try { key = localStorage.getItem(storageKey || 'klyxCardTheme') || 'purple'; } catch(e){ key = 'purple'; }
      _currentTheme = key;
      applyThemeVars(key);
    },
    set: function(key) {
      if (!KLYX_THEMES[key]) return;
      _currentTheme = key;
      try { localStorage.setItem('klyxCardTheme', key); } catch(e){}
      applyThemeVars(key);
      document.querySelectorAll('[data-theme]').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.theme === key);
      });
      document.dispatchEvent(new CustomEvent('klyxThemeChanged', { detail: { theme: key } }));
    },
  };

  /* ═══════════════ AUTO-INIT ═══════════════ */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { apply(); });
  } else {
    apply();
  }

})();

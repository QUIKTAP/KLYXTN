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
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    current = lang;
    localStorage.setItem("klyx_lang", lang);
    apply();
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

  // Public API
  window.KlyxI18n = {
    current: current,
    t: t,
    apply: apply,
    setLang: setLang,
  };

  // Wait for DOM
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

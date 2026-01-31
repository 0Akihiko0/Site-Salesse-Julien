function initCookies() {
    const style = document.createElement('style');
    style.innerHTML = `
/* =====================================================
   1. ICÔNE COOKIE (NE PAS TOUCHER)
   ===================================================== */
#tarteaucitronIcon {
    background: none !important;
    bottom: 40px !important;
    left: 30px !important;
    width: 80px !important;
    height: 80px !important;
    z-index: 999999 !important;
}
#tarteaucitronIcon img {
    content: url('cookiesicon.png');
    width: 100% !important;
    filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.4)) !important;
}

/* =====================================================
   2. BARRE DU BAS (OK)
   ===================================================== */
#tarteaucitronAlertBig {
    background-color: #0e1117 !important;
    border-top: 2px solid #00ffff !important;
}
#tarteaucitronDisclaimerAlert,
#tarteaucitronDisclaimerAlert span {
    color: #ffffff !important;
}
#tarteaucitronCloseAlert,
.tarteaucitronAllow {
    background-color: #00ffff !important;
    color: #000000 !important;
    border-radius: 9999px !important;
    font-weight: bold !important;
}
#tarteaucitronPersonalize,
.tarteaucitronDeny {
    background-color: #1f2937 !important;
    color: #ffffff !important;
    border: 1px solid #4b5563 !important;
    border-radius: 9999px !important;
}

/* =====================================================
   3. MODALE (STRUCTURE)
   ===================================================== */
#tarteaucitron,
#tarteaucitron .tarteaucitronBorder {
    background-color: #0e1117 !important;
    border: 2px solid #00ffff !important;
}

/* Boutons principaux */
#tarteaucitronRoot #tarteaucitron .tarteaucitronAllow,
#tarteaucitronRoot #tarteaucitron #tarteaucitronPersonalize {
    color: #000000 !important;
    background-color: #00ffff !important;
}

/* =====================================================
   4. BLOCS INTERNES
   ===================================================== */
#tarteaucitronMessages,
#tarteaucitronInfoBoxADCC,
#tarteaucitronDisclaimer,
.tarteaucitronMainLineOffset,
#tarteaucitronServices_mandatory {
    background-color: #161b22 !important;
    background: #161b22 !important;
    border: 1px solid #1f2937 !important;
}
#tarteaucitronMessages *,
#tarteaucitronInfoBoxADCC *,
#tarteaucitronDisclaimer * {
    color: #ffffff !important;
}

/* =====================================================
   5. FIX DU BLOC BLANC PRINCIPAL
   ===================================================== */
#tarteaucitronInfo {
    background-color: #161b22 !important;
    background: #161b22 !important;
    color: #ffffff !important;
    border: 1px solid #1f2937 !important;
}
#tarteaucitronInfo * {
    color: #ffffff !important;
}

/* =====================================================
   6. BOUTON POLITIQUE DE CONFIDENTIALITÉ
   ===================================================== */
#tarteaucitronPrivacyUrlDialog {
    background-color: #1f2937 !important;
    color: #ffffff !important;
    border: 1px solid #4b5563 !important;
    border-radius: 9999px !important;
    padding: 8px 16px !important;
}
#tarteaucitronPrivacyUrlDialog:hover {
    background-color: #374151 !important;
}

/* =====================================================
   7. FIX FINAL : FOND BLANC DU CONTENEUR ENREGISTRER
   ===================================================== */
#tarteaucitronSave {
    background-color: #0e1117 !important;
    background: #0e1117 !important;
}

/* Bouton ENREGISTRER */
#tarteaucitronSaveButton {
    background-color: #161b22 !important;
    color: #00ffff !important;
    border: 1px solid #00ffff !important;
    background-image: none !important;
    box-shadow: none !important;
    text-shadow: none !important;
}

/* =====================================================
   8. LIENS
   ===================================================== */
#tarteaucitronPrivacyUrl,
#tarteaucitronDisclaimer a,
#tarteaucitronMessages a,
.tarteaucitronMainLineOffset a {
    color: #00ffff !important;
    text-decoration: underline !important;
}

/* =====================================================
   9. LIGNES DE SERVICES
   ===================================================== */
.tarteaucitronLine {
    background-color: #161b22 !important;
    border-bottom: 1px solid #1f2937 !important;
}
.tarteaucitronLine *,
.tarteaucitronName {
    color: #ffffff !important;
}

/* =====================================================
   10. STYLE DES CARTES (FIX INTERACTIVITÉ)
   ===================================================== */
.custommaps_embed {
    background-color: #161b22 !important;
    min-height: 256px;
}
/* Force l'iframe à être interactive */
.custommaps_embed iframe {
    width: 100% !important;
    height: 100% !important;
    border: none !important;
    pointer-events: auto !important;
}
`;
    document.head.appendChild(style);

    tarteaucitron.init({
        privacyUrl: "politique-de-confidentialite.html",
        hashtag: "#tarteaucitron",
        cookieName: "tarteaucitron",
        orientation: "bottom",
        groupServices: false,
        showIcon: true,
        iconPosition: "BottomLeft",
        adblocker: false,
        DenyAllCta: true,
        AcceptAllCta: true,
        highPrivacy: true,
        handleBrowserRequests: false,
        removeCredit: true,
    });

    // --- SERVICE PERSONNALISÉ (AVEC FIX SCROLL/ZOOM) ---
    tarteaucitron.services.custommaps = {
        "key": "custommaps",
        "type": "other",
        "name": "Cartes Google Maps",
        "uri": "https://policies.google.com/privacy",
        "needConsent": true,
        "cookies": [],
        "js": function () {
            "use strict";
            tarteaucitron.fallback(['custommaps_embed'], function (x) {
                var url = x.getAttribute("data-url");
                // "scrolling" passé à "yes" pour permettre le zoom/mouvement
                return '<iframe src="' + url + '" frameborder="0" scrolling="yes" allowfullscreen></iframe>';
            });
        }
    };

    // --- SERVICE PERSONNALISÉ SPLINE ---
    tarteaucitron.services.spline = {
        "key": "spline",
        "type": "other",
        "name": "Animations 3D Spline",
        "uri": "https://spline.design/privacy",
        "needConsent": true,
        "cookies": [],
        "js": function () {
            "use strict";
            const container = document.getElementById('spline-container');
            if (container) {
                const url = container.getAttribute('data-spline-url');
                const script = document.createElement('script');
                script.type = 'module';
                script.src = 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js';
                script.onload = () => {
                    container.innerHTML = `<spline-viewer url="${url}"></spline-viewer>`;
                };
                document.head.appendChild(script);
            }
        }
    };

// Configuration Google Analytics 4
    tarteaucitron.user.gtagUa = 'G-SYGFFHLSDC'; // Remplace par ton ID
    
    // Ajout de la configuration pour l'anonymisation
    tarteaucitron.user.gtagMore = function () {
        gtag('config', tarteaucitron.user.gtagUa, { 'anonymize_ip': true });
    };

    (tarteaucitron.job = tarteaucitron.job || []).push('gtag');
    (tarteaucitron.job = tarteaucitron.job || []).push('custommaps');
    (tarteaucitron.job = tarteaucitron.job || []).push('spline');
}


initCookies();

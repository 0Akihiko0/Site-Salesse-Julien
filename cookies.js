function initCookies() {
    const style = document.createElement('style');
    style.innerHTML = `
/* =====================================================
   1. ICÔNE COOKIE (DROITE ET CARRÉE)
   ===================================================== */
#tarteaucitronIcon {
    background: none !important;
    bottom: 30px !important;
    right: 30px !important; 
    left: auto !important;
    width: 70px !important;
    height: 70px !important;
    z-index: 999999 !important;
}
#tarteaucitronIcon img {
    content: url('cookiesicon.png');
    width: 100% !important;
    height: 100% !important;
    object-fit: contain !important;
}

/* =====================================================
   2. BARRE DU BAS
   ===================================================== */
#tarteaucitronAlertBig {
    background-color: #0a0a0a !important; 
    border-top: 2px solid #ffffff !important; 
}
#tarteaucitronDisclaimerAlert,
#tarteaucitronDisclaimerAlert span {
    color: #ffffff !important;
}
#tarteaucitronCloseAlert,
.tarteaucitronAllow {
    background-color: #ffffff !important; 
    color: #000000 !important;
    border-radius: 9999px !important;
    font-weight: bold !important;
}
#tarteaucitronPersonalize,
.tarteaucitronDeny {
    background-color: #1a1a1a !important;
    color: #ffffff !important;
    border: 1px solid #ffffff !important; 
    border-radius: 9999px !important;
}

/* =====================================================
   3. MODALE (STRUCTURE)
   ===================================================== */
#tarteaucitron,
#tarteaucitron .tarteaucitronBorder {
    background-color: #0a0a0a !important;
    border: 2px solid #ffffff !important;
}

/* BOUTON FERMER : RECTANGLE ARRONDI EN HAUT À DROITE */
#tarteaucitronClosePanel {
    background-color: #1a1a1a !important;
    color: #ffffff !important;
    border: 1px solid #ffffff !important;
    border-radius: 5px !important; 
    padding: 8px 15px !important;
    font-size: 14px !important;
    font-weight: bold !important;
    text-transform: uppercase !important;
    
    /* Positionnement en haut à droite sans casser le scroll */
    display: block !important;
    float: right !important;
    position: sticky !important;
    top: 15px !important;
    right: 15px !important;
    margin: 10px !important;
    
    cursor: pointer !important;
    height: auto !important;
    line-height: normal !important;
    z-index: 10000 !important;
}

/* Nettoyage du float pour les blocs suivants */
#tarteaucitronServices {
    clear: both !important;
}

#tarteaucitronRoot #tarteaucitron .tarteaucitronAllow,
#tarteaucitronRoot #tarteaucitron #tarteaucitronPersonalize {
    color: #000000 !important;
    background-color: #ffffff !important;
}

/* =====================================================
   4. BLOCS INTERNES
   ===================================================== */
#tarteaucitronMessages,
#tarteaucitronInfoBoxADCC,
#tarteaucitronDisclaimer,
.tarteaucitronMainLineOffset,
#tarteaucitronServices_mandatory {
    background-color: #111111 !important;
    background: #111111 !important;
    border: 1px solid #333333 !important;
}
#tarteaucitronMessages *,
#tarteaucitronInfoBoxADCC *,
#tarteaucitronDisclaimer * {
    color: #ffffff !important;
}

#tarteaucitronInfo {
    background-color: #111111 !important;
    background: #111111 !important;
    color: #ffffff !important;
    border: 1px solid #333333 !important;
}
#tarteaucitronInfo * {
    color: #ffffff !important;
}

#tarteaucitronPrivacyUrlDialog {
    background-color: #1a1a1a !important;
    color: #ffffff !important;
    border: 1px solid #ffffff !important;
    border-radius: 9999px !important;
    padding: 8px 16px !important;
}

#tarteaucitronSave {
    background-color: #0a0a0a !important;
}

#tarteaucitronSaveButton {
    background-color: #ffffff !important;
    color: #000000 !important;
    border: 1px solid #ffffff !important;
    background-image: none !important;
    box-shadow: none !important;
    text-shadow: none !important;
}

#tarteaucitronPrivacyUrl,
#tarteaucitronDisclaimer a,
#tarteaucitronMessages a,
.tarteaucitronMainLineOffset a {
    color: #ffffff !important;
    text-decoration: underline !important;
}

.tarteaucitronLine {
    background-color: #111111 !important;
    border-bottom: 1px solid #333333 !important;
}
.tarteaucitronLine *,
.tarteaucitronName {
    color: #ffffff !important;
}

.custommaps_embed {
    background-color: #111111 !important;
    min-height: 256px;
}
.custommaps_embed iframe {
    width: 100% !important;
    height: 100% !important;
    border: none !important;
    pointer-events: auto !important;
}

/* AJOUT : MASQUER L'ICONE FLOTTANTE SUR MOBILE UNIQUEMENT */
@media (max-width: 768px) {
    #tarteaucitronIcon { display: none !important; }
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
        iconPosition: "BottomRight",
        adblocker: false,
        DenyAllCta: true,
        AcceptAllCta: true,
        highPrivacy: true,
        handleBrowserRequests: false,
        removeCredit: true,
    });

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
                return '<iframe src="' + url + '" frameborder="0" scrolling="yes" allowfullscreen></iframe>';
            });
        }
    };

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

// --- CLOUDFLARE TURNSTILE ---
tarteaucitron.services.turnstile = {
    "key": "turnstile",
    "type": "api",
    "name": "Protection Anti-spam",
    "uri": "https://www.cloudflare.com/privacypolicy/",
    "needConsent": true,
    "cookies": [],
    "js": function () {
        "use strict";
        // On charge le script
        tarteaucitron.addScript('https://challenges.cloudflare.com/turnstile/v0/api.js');
        
        // On force la suppression du message de fallback après un court délai
        setTimeout(() => {
            const containers = document.querySelectorAll('.turnstile-container');
            containers.forEach(container => {
                // On ne garde que le widget injecté par Cloudflare
                if (container.querySelector('iframe')) {
                     container.innerHTML = ''; // On vide pour laisser Turnstile se ré-injecter proprement
                }
            });
        }, 500);
    },
    "fallback": function () {
        "use strict";
        tarteaucitron.fallback(['turnstile-container'], function (elem) {
            elem.style.backgroundColor = '#111';
            elem.style.color = '#fff';
            elem.style.padding = '20px';
            elem.style.borderRadius = '15px';
            elem.style.textAlign = 'center';
            elem.style.border = '1px dashed #333';
            return '<p style="margin-bottom:10px;">Veuillez autoriser la protection pour envoyer.</p>' + tarteaucitron.engage('turnstile');
        });
    }
};
    // Écouteur pour recharger la page après acceptation des cookies
document.addEventListener("tac.close_panel", function () {
    // On vérifie si le cookie turnstile est maintenant accepté
    if (tarteaucitron.state.turnstile === true) {
        // On recharge la page proprement pour activer le captcha
        location.reload();
    }
});
    
    tarteaucitron.user.gtagUa = 'G-SYGFFHLSDC';
    tarteaucitron.user.gtagMore = function () {
        gtag('config', tarteaucitron.user.gtagUa, { 'anonymize_ip': true });
    };

    // --- ACTIVATION DES JOBS ---
    // Note : on a retiré hcaptcha et web3forms pour ne garder que turnstile
    (tarteaucitron.job = tarteaucitron.job || []).push('gtag', 'custommaps', 'spline', 'turnstile');
}

initCookies();



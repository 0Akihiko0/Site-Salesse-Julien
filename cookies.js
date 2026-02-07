<!DOCTYPE html>
<html>
<head>
    <title>Test Intégration Totale - Sans CSS</title>
    
    <script src="tarteaucitron/tarteaucitron.js"></script>
    <script src="cookies.js"></script>
</head>
<body>

    <h1>Formulaire de Test (Brut)</h1>

    <form action="https://api.web3forms.com/submit" method="POST" id="contact-form">
        
        <input type="hidden" name="access_key" value="dfb35cd0-342b-477a-ace9-dd0e64015220">
        
        <input type="text" name="name" placeholder="Nom" required><br><br>
        <input type="email" name="email" placeholder="Email" required><br><br>
        <textarea name="message" placeholder="Message" required></textarea><br><br>
        
        <div class="h-captcha" data-captcha="true"></div><br><br>
        
        <button type="submit">Envoyer le formulaire</button>
    </form>

    <script type="text/plain" 
            data-tarteaucitron-src="https://web3forms.com/client/script.js" 
            data-tarteaucitron-service="web3forms" 
            async defer></script>

    <script>
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(e) {
        // On cherche la réponse injectée par hCaptcha
        const hCaptcha = form.querySelector('textarea[name="h-captcha-response"]')?.value;

        if (!hCaptcha) {
            e.preventDefault();
            alert("Veuillez accepter les cookies Web3Forms et cocher le captcha.");
        }
    });
    </script>

</body>
</html>

document.addEventListener('DOMContentLoaded', function() {
    const inscriptionForm = document.querySelector('#inscriptionForm');
    const connexionForm = document.querySelector('#connexionForm');
    const participerButton = document.querySelector('#participerButton');
    const pseudoUtilisateur = document.querySelector('#pseudoUtilisateur');
    const creditsUtilisateur = document.querySelector('#creditsUtilisateur');

    // Logique pour l'inscription
    if (inscriptionForm) {
        inscriptionForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const pseudo = document.querySelector('#pseudo').value;
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;

            // Simuler l'inscription de l'utilisateur
            localStorage.setItem('user', JSON.stringify({ pseudo, email, password, credits: 20 }));
            alert('Inscription réussie ! Vous avez 20 crédits.');
            window.location.href = 'connexion.html';
        });
    }

    // Logique pour la connexion
    if (connexionForm) {
        connexionForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const email = document.querySelector('#emailConnexion').value;
            const password = document.querySelector('#passwordConnexion').value;
            const user = JSON.parse(localStorage.getItem('user'));

            if (user && user.email === email && user.password === password) {
                alert('Connexion réussie !');
                window.location.href = 'index.html';
            } else {
                alert('Identifiants incorrects.');
            }
        });
    }

    // Logique pour la participation à un covoiturage
    if (participerButton) {
        participerButton.addEventListener('click', function() {
            const user = JSON.parse(localStorage.getItem('user'));

            if (!user) {
                alert('Vous devez être connecté pour participer à un covoiturage.');
                window.location.href = 'connexion.html';
                return;
            }

            if (user.credits <= 0) {
                alert('Vous n\'avez pas assez de crédits pour participer à ce covoiturage.');
                return;
            }

            const confirmation = confirm('Êtes-vous sûr de vouloir utiliser 1 crédit pour participer à ce covoiturage ?');

            if (confirmation) {
                user.credits -= 1;
                localStorage.setItem('user', JSON.stringify(user));
                alert('Vous avez participé avec succès à ce covoiturage. Vos crédits restants : ' + user.credits);
            }
        });
    }

    // Afficher les informations utilisateur dans l'espace utilisateur
    if (pseudoUtilisateur && creditsUtilisateur) {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            pseudoUtilisateur.textContent = user.pseudo;
            creditsUtilisateur.textContent = user.credits;
        } else {
            alert('Vous devez être connecté pour accéder à l\'espace utilisateur.');
            window.location.href = 'connexion.html';
        }
    }
});

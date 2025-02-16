document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('#rechercheAccueil form');
    const resultSection = document.querySelector('#resultatsCovoiturages');

    const filtreEcologique = document.querySelector('#filtreEcologique');
    const filtrePrixMax = document.querySelector('#filtrePrixMax');
    const filtreDureeMax = document.querySelector('#filtreDureeMax');
    const filtreNoteMin = document.querySelector('#filtreNoteMin');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Simuler les résultats de la recherche
        const results = [
            {
                pseudo: 'Driver1',
                photo: 'images/driver1.jpg',
                note: 4.5,
                nb_place: 2,
                prix: 10,
                date: '2025-02-14',
                heure_depart: '08:00',
                heure_arrivee: '10:00',
                voyage_ecologique: true
            },
            {
                pseudo: 'Driver2',
                photo: 'images/driver2.jpg',
                note: 4.2,
                nb_place: 1,
                prix: 8,
                date: '2025-02-14',
                heure_depart: '09:00',
                heure_arrivee: '11:00',
                voyage_ecologique: false
            }
        ];

        displayResults(results);
    });

    function displayResults(results) {
        resultSection.innerHTML = '';
        results.forEach(result => {
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('result-item');
            
            resultDiv.innerHTML = `
                <img src="${result.photo}" alt="${result.pseudo}">
                <p>Pseudo: ${result.pseudo}</p>
                <p>Note: ${result.note}</p>
                <p>Nombre de places restantes: ${result.nb_place}</p>
                <p>Prix: ${result.prix}€</p>
                <p>Date: ${result.date}</p>
                <p>Heure de départ: ${result.heure_depart}</p>
                <p>Heure d'arrivée: ${result.heure_arrivee}</p>
                <p>Voyage écologique: ${result.voyage_ecologique ? 'Oui' : 'Non'}</p>
                <button>Détails</button>
            `;

            resultSection.appendChild(resultDiv);
        });
    }

    window.appliquerFiltres = function() {
        const results = [
            {
                pseudo: 'Driver1',
                photo: 'images/driver1.jpg',
                note: 4.5,
                nb_place: 2,
                prix: 10,
                date: '2025-02-14',
                heure_depart: '08:00',
                heure_arrivee: '10:00',
                voyage_ecologique: true
            },
            {
                pseudo: 'Driver2',
                photo: 'images/driver2.jpg',
                note: 4.2,
                nb_place: 1,
                prix: 8,
                date: '2025-02-14',
                heure_depart: '09:00',
                heure_arrivee: '11:00',
                voyage_ecologique: false
            }
        ];

        const filtres = {
            ecologique: filtreEcologique.checked,
            prixMax: filtrePrixMax.value,
            dureeMax: filtreDureeMax.value,
            noteMin: filtreNoteMin.value
        };

        const filteredResults = results.filter(result => {
            return (!filtres.ecologique || result.voyage_ecologique) &&
                   (!filtres.prixMax || result.prix <= filtres.prixMax) &&
                   (!filtres.dureeMax || calculateDuration(result.heure_depart, result.heure_arrivee) <= filtres.dureeMax) &&
                   (!filtres.noteMin || result.note >= filtres.noteMin);
        });

        displayResults(filteredResults);
    };

    function calculateDuration(start, end) {
        const startTime = new Date(`1970-01-01T${start}:00`);
        const endTime = new Date(`1970-01-01T${end}:00`);
        return (endTime - startTime) / (1000 * 60 * 60); // Durée en heures
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const inscriptionForm = document.querySelector('#inscriptionForm');
    const connexionForm = document.querySelector('#connexionForm');
    const participerButton = document.querySelector('#participerButton');

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
});

document.addEventListener('DOMContentLoaded', function() {
    const inscriptionForm = document.querySelector('#inscriptionForm');
    const connexionForm = document.querySelector('#connexionForm');
    const participerButton = document.querySelector('#participerButton');
    const pseudoUtilisateur = document.querySelector('#pseudoUtilisateur');
    const creditsUtilisateur = document.querySelector('#creditsUtilisateur');

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

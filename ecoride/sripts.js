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

document.addEventListener('DOMContentLoaded', function() {
    // Code existant...
    
    const voyageForm = document.querySelector('#voyageForm');

    if (voyageForm) {
        voyageForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const adresseDepart = document.querySelector('#adresseDepart').value;
            const adresseArrivee = document.querySelector('#adresseArrivee').value;
            const dateVoyage = document.querySelector('#dateVoyage').value;
            const heureDepart = document.querySelector('#heureDepart').value;
            const heureArrivee = document.querySelector('#heureArrivee').value;
            const prixVoyage = document.querySelector('#prixVoyage').value;
            const placesDisponibles = document.querySelector('#placesDisponibles').value;

            const nouveauVoyage = {
                adresseDepart,
                adresseArrivee,
                dateVoyage,
                heureDepart,
                heureArrivee,
                prixVoyage,
                placesDisponibles
            };

            const voyages = JSON.parse(localStorage.getItem('voyages')) || [];
            voyages.push(nouveauVoyage);
            localStorage.setItem('voyages', JSON.stringify(voyages));
            afficherVoyages();
            alert('Voyage ajouté avec succès.');
        });
    }

    function afficherVoyages() {
        const voyages = JSON.parse(localStorage.getItem('voyages')) || [];
        const voyagesDiv = document.querySelector('#listeVoyages');
        voyagesDiv.innerHTML = '';

        voyages.forEach(voyage => {
            const voyageDiv = document.createElement('div');
            voyageDiv.classList.add('voyage-item');
            voyageDiv.textContent = `Départ : ${voyage.adresseDepart}, Arrivée : ${voyage.adresseArrivee}, Date : ${voyage.dateVoyage}, Heure de départ : ${voyage.heureDepart}, Heure d'arrivée : ${voyage.heureArrivee}, Prix : ${voyage.prixVoyage}€, Places disponibles : ${voyage.placesDisponibles}`;
            voyagesDiv.appendChild(voyageDiv);
        });
    }

    // Appeler afficherVoyages au chargement de la page
    if (document.querySelector('#listeVoyages')) {
        afficherVoyages();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Code existant...

    function afficherHistorique() {
        const voyages = JSON.parse(localStorage.getItem('voyages')) || [];
        const historiqueDiv = document.querySelector('#listeHistorique');
        historiqueDiv.innerHTML = '';

        voyages.forEach(voyage => {
            const voyageDiv = document.createElement('div');
            voyageDiv.classList.add('historique-item');
            voyageDiv.textContent = `Départ : ${voyage.adresseDepart}, Arrivée : ${voyage.adresseArrivee}, Date : ${voyage.dateVoyage}, Heure de départ : ${voyage.heureDepart}, Heure d'arrivée : ${voyage.heureArrivee}, Prix : ${voyage.prixVoyage}€, Places disponibles : ${voyage.placesDisponibles}`;
            historiqueDiv.appendChild(voyageDiv);
        });
    }

    // Appeler afficherHistorique au chargement de la page
    if (document.querySelector('#listeHistorique')) {
        afficherHistorique();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const inscriptionForm = document.querySelector('#inscriptionForm');
    const connexionForm = document.querySelector('#connexionForm');
    const participerButton = document.querySelector('#participerButton');
    const pseudoUtilisateur = document.querySelector('#pseudoUtilisateur');
    const creditsUtilisateur = document.querySelector('#creditsUtilisateur');
    const ajouterCovoiturageButton = document.querySelector('#ajouterCovoiturageButton');
    const listeCovoiturages = document.querySelector('#listeCovoiturages');
    const listeDemarrerCovoiturages = document.querySelector('#listeDemarrerCovoiturages');
    const listeArreterCovoiturages = document.querySelector('#listeArreterCovoiturages');

    // Code existant pour l'inscription, la connexion et la participation à un covoiturage...

    const voyageForm = document.querySelector('#voyageForm');

    if (voyageForm) {
        voyageForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const adresseDepart = document.querySelector('#adresseDepart').value;
            const adresseArrivee = document.querySelector('#adresseArrivee').value;
            const dateVoyage = document.querySelector('#dateVoyage').value;
            const heureDepart = document.querySelector('#heureDepart').value;
            const heureArrivee = document.querySelector('#heureArrivee').value;
            const prixVoyage = document.querySelector('#prixVoyage').value;
            const placesDisponibles = document.querySelector('#placesDisponibles').value;

            const nouveauVoyage = {
                adresseDepart,
                adresseArrivee,
                dateVoyage,
                heureDepart,
                heureArrivee,
                prixVoyage,
                placesDisponibles,
                status: 'à démarrer' // Nouveau statut pour indiquer l'état du voyage
            };

            const voyages = JSON.parse(localStorage.getItem('voyages')) || [];
            voyages.push(nouveauVoyage);
            localStorage.setItem('voyages', JSON.stringify(voyages));
            afficherVoyages();
            alert('Voyage ajouté avec succès.');
        });
    }

    function afficherVoyages() {
        const voyages = JSON.parse(localStorage.getItem('voyages')) || [];
        const voyagesDiv = document.querySelector('#listeVoyages');
        voyagesDiv.innerHTML = '';

        voyages.forEach(voyage => {
            const voyageDiv = document.createElement('div');
            voyageDiv.classList.add('voyage-item');
            voyageDiv.textContent = `Départ : ${voyage.adresseDepart}, Arrivée : ${voyage.adresseArrivee}, Date : ${voyage.dateVoyage}, Heure de départ : ${voyage.heureDepart}, Heure d'arrivée : ${voyage.heureArrivee}, Prix : ${voyage.prixVoyage}€, Places disponibles : ${voyage.placesDisponibles}, Statut : ${voyage.status}`;
            voyagesDiv.appendChild(voyageDiv);
        });
    }

    function afficherDemarrerCovoiturages() {
        const voyages = JSON.parse(localStorage.getItem('voyages')) || [];
        listeDemarrerCovoiturages.innerHTML = '';

        voyages.forEach(voyage => {
            if (voyage.status === 'à démarrer') {
                const voyageDiv = document.createElement('div');
                voyageDiv.classList.add('demarrer-item');
                voyageDiv.innerHTML = `
                    <p>Départ : ${voyage.adresseDepart}, Arrivée : ${voyage.adresseArrivee}, Date : ${voyage.dateVoyage}, Heure de départ : ${voyage.heureDepart}, Heure d'arrivée : ${voyage.heureArrivee}, Prix : ${voyage.prixVoyage}€, Places disponibles : ${voyage.placesDisponibles}</p>
                    <button class="demarrerButton">Démarrer</button>
                `;
                voyageDiv.querySelector('.demarrerButton').addEventListener('click', function() {
                    voyage.status = 'en cours';
                    localStorage.setItem('voyages', JSON.stringify(voyages));
                    afficherDemarrerCovoiturages();
                    afficherArreterCovoiturages();
                });
                listeDemarrerCovoiturages.appendChild(voyageDiv);
            }
        });
    }

    function afficherArreterCovoiturages() {
        const voyages = JSON.parse(localStorage.getItem('voyages')) || [];
        listeArreterCovoiturages.innerHTML = '';

        voyages.forEach(voyage => {
            if (voyage.status === 'en cours') {
                const voyageDiv = document.createElement('div');
                voyageDiv.classList.add('arreter-item');
                voyageDiv.innerHTML = `
                    <p>Départ : ${voyage.adresseDepart}, Arrivée : ${voyage.adresseArrivee}, Date : ${voyage.dateVoyage}, Heure de départ : ${voyage.heureDepart}, Heure d'arrivée : ${voyage.heureArrivee}, Prix : ${voyage.prixVoyage}€, Places disponibles : ${voyage.placesDisponibles}</p>
                    <button class="arreterButton">Arrêter</button>
                `;
                voyageDiv.querySelector('.arreterButton').addEventListener('click', function() {
                    voyage.status = 'terminé';
                    localStorage.setItem('voyages', JSON.stringify(voyages));
                    afficherArreterCovoiturages();
                });
                listeArreterCovoiturages.appendChild(voyageDiv);
            }
        });
    }

    // Appeler afficherVoyages, afficherDemarrerCovoiturages, et afficherArreterCovoiturages au chargement de la page
    if (document.querySelector('#listeVoyages')) {
        afficherVoyages();
    }
    if (document.querySelector('#listeDemarrerCovoiturages')) {
        afficherDemarrerCovoiturages();
    }
    if (document.querySelector('#listeArreterCovoiturages')) {
        afficherArreterCovoiturages();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const inscriptionForm = document.querySelector('#inscriptionForm');
    const connexionForm = document.querySelector('#connexionForm');
    const participerButton = document.querySelector('#participerButton');
    const pseudoUtilisateur = document.querySelector('#pseudoUtilisateur');
    const creditsUtilisateur = document.querySelector('#creditsUtilisateur');
    const ajouterCovoiturageButton = document.querySelector('#ajouterCovoiturageButton');
    const listeCovoiturages = document.querySelector('#listeCovoiturages');
    const listeDemarrerCovoiturages = document.querySelector('#listeDemarrerCovoiturages');
    const listeArreterCovoiturages = document.querySelector('#listeArreterCovoiturages');
    const listeAvis = document.querySelector('#listeAvis');
    const listeProblemes = document.querySelector('#listeProblemes');

    // Code existant pour l'inscription, la connexion et la participation à un covoiturage...

    const voyageForm = document.querySelector('#voyageForm');

    if (voyageForm) {
        voyageForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const adresseDepart = document.querySelector('#adresseDepart').value;
            const adresseArrivee = document.querySelector('#adresseArrivee').value;
            const dateVoyage = document.querySelector('#dateVoyage').value;
            const heureDepart = document.querySelector('#heureDepart').value;
            const heureArrivee = document.querySelector('#heureArrivee').value;
            const prixVoyage = document.querySelector('#prixVoyage').value;
            const placesDisponibles = document.querySelector('#placesDisponibles').value;

            const nouveauVoyage = {
                adresseDepart,
                adresseArrivee,
                dateVoyage,
                heureDepart,
                heureArrivee,
                prixVoyage,
                placesDisponibles,
                status: 'à démarrer' // Nouveau statut pour indiquer l'état du voyage
            };

            const voyages = JSON.parse(localStorage.getItem('voyages')) || [];
            voyages.push(nouveauVoyage);
            localStorage.setItem('voyages', JSON.stringify(voyages));
            afficherVoyages();
            alert('Voyage ajouté avec succès.');
        });
    }

    function afficherVoyages() {
        const voyages = JSON.parse(localStorage.getItem('voyages')) || [];
        const voyagesDiv = document.querySelector('#listeVoyages');
        voyagesDiv.innerHTML = '';

        voyages.forEach(voyage => {
            const voyageDiv = document.createElement('div');
            voyageDiv.classList.add('voyage-item');
            voyageDiv.textContent = `Départ : ${voyage.adresseDepart}, Arrivée : ${voyage.adresseArrivee}, Date : ${voyage.dateVoyage}, Heure de départ : ${voyage.heureDepart}, Heure d'arrivée : ${voyage.heureArrivee}, Prix : ${voyage.prixVoyage}€, Places disponibles : ${voyage.placesDisponibles}, Statut : ${voyage.status}`;
            voyagesDiv.appendChild(voyageDiv);
        });
    }

    function afficherDemarrerCovoiturages() {
        const voyages = JSON.parse(localStorage.getItem('voyages')) || [];
        listeDemarrerCovoiturages.innerHTML = '';

        voyages.forEach(voyage => {
            if (voyage.status === 'à démarrer') {
                const voyageDiv = document.createElement('div');
                voyageDiv.classList.add('demarrer-item');
                voyageDiv.innerHTML = `
                    <p>Départ : ${voyage.adresseDepart}, Arrivée : ${voyage.adresseArrivee}, Date : ${voyage.dateVoyage}, Heure de départ : ${voyage.heureDepart}, Heure d'arrivée : ${voyage.heureArrivee}, Prix : ${voyage.prixVoyage}€, Places disponibles : ${voyage.placesDisponibles}</p>
                    <button class="demarrerButton">Démarrer</button>
                `;
                voyageDiv.querySelector('.demarrerButton').addEventListener('click', function() {
                    voyage.status = 'en cours';
                    localStorage.setItem('voyages', JSON.stringify(voyages));
                    afficherDemarrerCovoiturages();
                    afficherArreterCovoiturages();
                });
                listeDemarrerCovoiturages.appendChild(voyageDiv);
            }
        });
    }

    function afficherArreterCovoiturages() {
        const voyages = JSON.parse(localStorage.getItem('voyages')) || [];
        listeArreterCovoiturages.innerHTML = '';

        voyages.forEach(voyage => {
            if (voyage.status === 'en cours') {
                const voyageDiv = document.createElement('div');
                voyageDiv.classList.add('arreter-item');
                voyageDiv.innerHTML = `
                    <p>Départ : ${voyage.adresseDepart}, Arrivée : ${voyage.adresseArrivee}, Date : ${voyage.dateVoyage}, Heure de départ : ${voyage.heureDepart}, Heure d'arrivée : ${voyage.heureArrivee}, Prix : ${voyage.prixVoyage}€, Places disponibles : ${voyage.placesDisponibles}</p>
                    <button class="arreterButton">Arrêter</button>
                `;
                voyageDiv.querySelector('.arreterButton').addEventListener('click', function() {
                    voyage.status = 'terminé';
                    localStorage.setItem('voyages', JSON.stringify(voyages));
                    afficherArreterCovoiturages();
                });
                listeArreterCovoiturages.appendChild(voyageDiv);
            }
        });
    }

    function afficherAvis() {
        const avis = JSON.parse(localStorage.getItem('avis')) || [];
        listeAvis.innerHTML = '';

        avis.forEach(singleAvis => {
            const avisDiv = document.createElement('div');
            avisDiv.classList.add('avis-item');
            avisDiv.innerHTML = `
                <p>Commentaire : ${singleAvis.commentaire}, Note : ${singleAvis.note}</p>
                <button class="validerButton">Valider</button>
                <button class="refuserButton">Refuser</button>
            `;
            avisDiv.querySelector('.validerButton').addEventListener('click', function() {
                singleAvis.status = 'validé';
                localStorage.setItem('avis', JSON.stringify(avis));
                afficherAvis();
            });
            avisDiv.querySelector('.refuserButton').addEventListener('click', function() {
                singleAvis.status = 'refusé';
                localStorage.setItem('avis', JSON.stringify(avis));
                afficherAvis();
            });
            listeAvis.appendChild(avisDiv);
        });
    }

    function afficherProblemes() {
        const problemes = JSON.parse(localStorage.getItem('problemes')) || [];
        listeProblemes.innerHTML = '';

        problemes.forEach(probleme => {
            const problemeDiv = document.createElement('div');
            problemeDiv.classList.add('probleme-item');
            problemeDiv.innerHTML = `
                <p>Numéro : ${probleme.numero}, Pseudo : ${probleme.pseudo}, Email : ${probleme.email}, Départ : ${probleme.depart}, Arrivée : ${probleme.arrivee}, Date : ${probleme.date}</p>
                <p>Description : ${probleme.description}</p>
            `;
            listeProblemes.appendChild(problemeDiv);
        });
    }

    // Appeler afficherVoyages, afficherDemarrerCovoiturages, afficherArreterCovoiturages, afficherAvis, et afficherProblemes au chargement de la page
    if (document.querySelector('#listeVoyages')) {
        afficherVoyages();
    }
    if (document.querySelector('#listeDemarrerCovoiturages')) {
        afficherDemarrerCovoiturages();
    }
    if (document.querySelector('#listeArreterCovoiturages')) {
        afficherArreterCovoiturages();
    }
    if (document.querySelector('#listeAvis')) {
        afficherAvis();
    }
    if (document.querySelector('#listeProblemes')) {
        afficherProblemes();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const inscriptionForm = document.querySelector('#inscriptionForm');
    const connexionForm = document.querySelector('#connexionForm');
    const participerButton = document.querySelector('#participerButton');
    const pseudoUtilisateur = document.querySelector('#pseudoUtilisateur');
    const creditsUtilisateur = document.querySelector('#creditsUtilisateur');
    const ajouterCovoiturageButton = document.querySelector('#ajouterCovoiturageButton');
    const listeCovoiturages = document.querySelector('#listeCovoiturages');
    const listeDemarrerCovoiturages = document.querySelector('#listeDemarrerCovoiturages');
    const listeArreterCovoiturages = document.querySelector('#listeArreterCovoiturages');
    const listeAvis = document.querySelector('#listeAvis');
    const listeProblemes = document.querySelector('#listeProblemes');

    // Code existant pour l'inscription, la connexion et la participation à un covoiturage...

    const voyageForm = document.querySelector('#voyageForm');

    if (voyageForm) {
        voyageForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const adresseDepart = document.querySelector('#adresseDepart').value;
            const adresseArrivee = document.querySelector('#adresseArrivee').value;
            const dateVoyage = document.querySelector('#dateVoyage').value;
            const heureDepart = document.querySelector('#heureDepart').value;
            const heureArrivee = document.querySelector('#heureArrivee').value;
            const prixVoyage = document.querySelector('#prixVoyage').value;
            const placesDisponibles = document.querySelector('#placesDisponibles').value;

            const nouveauVoyage = {
                adresseDepart,
                adresseArrivee,
                dateVoyage,
                heureDepart,
                heureArrivee,
                prixVoyage,
                placesDisponibles,
                status: 'à démarrer' // Nouveau statut pour indiquer l'état du voyage
            };

            const voyages = JSON.parse(localStorage.getItem('voyages')) || [];
            voyages.push(nouveauVoyage);
            localStorage.setItem('voyages', JSON.stringify(voyages));
            afficherVoyages();
            alert('Voyage ajouté avec succès.');
        });
    }

    function afficherVoyages() {
        const voyages = JSON.parse(localStorage.getItem('voyages')) || [];
        const voyagesDiv = document.querySelector('#listeVoyages');
        voyagesDiv.innerHTML = '';

        voyages.forEach(voyage => {
            const voyageDiv = document.createElement('div');
            voyageDiv.classList.add('voyage-item');
            voyageDiv.textContent = `Départ : ${voyage.adresseDepart}, Arrivée : ${voyage.adresseArrivee}, Date : ${voyage.dateVoyage}, Heure de départ : ${voyage.heureDepart}, Heure d'arrivée : ${voyage.heureArrivee}, Prix : ${voyage.prixVoyage}€, Places disponibles : ${voyage.placesDisponibles}, Statut : ${voyage.status}`;
            voyagesDiv.appendChild(voyageDiv);
        });
    }

    function afficherDemarrerCovoiturages() {
        const voyages = JSON.parse(localStorage.getItem('voyages')) || [];
        listeDemarrerCovoiturages.innerHTML = '';

        voyages.forEach(voyage => {
            if (voyage.status === 'à démarrer') {
                const voyageDiv = document.createElement('div');
                voyageDiv.classList.add('demarrer-item');
                voyageDiv.innerHTML = `
                    <p>Départ : ${voyage.adresseDepart}, Arrivée : ${voyage.adresseArrivee}, Date : ${voyage.dateVoyage}, Heure de départ : ${voyage.heureDepart}, Heure d'arrivée : ${voyage.heureArrivee}, Prix : ${voyage.prixVoyage}€, Places disponibles : ${voyage.placesDisponibles}</p>
                    <button class="demarrerButton">Démarrer</button>
                `;
                voyageDiv.querySelector('.demarrerButton').addEventListener('click', function() {
                    voyage.status = 'en cours';
                    localStorage.setItem('voyages', JSON.stringify(voyages));
                    afficherDemarrerCovoiturages();
                    afficherArreterCovoiturages();
                });
                listeDemarrerCovoiturages.appendChild(voyageDiv);
            }
        });
    }

    function afficherArreterCovoiturages() {
        const voyages = JSON.parse(localStorage.getItem('voyages')) || [];
        listeArreterCovoiturages.innerHTML = '';

        voyages.forEach(voyage => {
            if (voyage.status === 'en cours') {
                const voyageDiv = document.createElement('div');
                voyageDiv.classList.add('arreter-item');
                voyageDiv.innerHTML = `
                    <p>Départ : ${voyage.adresseDepart}, Arrivée : ${voyage.adresseArrivee}, Date : ${voyage.dateVoyage}, Heure de départ : ${voyage.heureDepart}, Heure d'arrivée : ${voyage.heureArrivee}, Prix : ${voyage.prixVoyage}€, Places disponibles : ${voyage.placesDisponibles}</p>
                    <button class="arreterButton">Arrêter</button>
                `;
                voyageDiv.querySelector('.arreterButton').addEventListener('click', function() {
                    voyage.status = 'terminé';
                    localStorage.setItem('voyages', JSON.stringify(voyages));
                    afficherArreterCovoiturages();
                });
                listeArreterCovoiturages.appendChild(voyageDiv);
            }
        });
    }

    function afficherAvis() {
        const avis = JSON.parse(localStorage.getItem('avis')) || [];
        listeAvis.innerHTML = '';

        avis.forEach(singleAvis => {
            const avisDiv = document.createElement('div');
            avisDiv.classList.add('avis-item');
            avisDiv.innerHTML = `
                <p>Commentaire : ${singleAvis.commentaire}, Note : ${singleAvis.note}</p>
                <button class="validerButton">Valider</button>
                <button class="refuserButton">Refuser</button>
            `;
            avisDiv.querySelector('.validerButton').addEventListener('click', function() {
                singleAvis.valide = true;
                localStorage.setItem('avis', JSON.stringify(avis));
                afficherAvis();
            });
            avisDiv.querySelector('.refuserButton').addEventListener('click', function() {
                avis.splice(avis.indexOf(singleAvis), 1);
                localStorage.setItem('avis', JSON.stringify(avis));
                afficherAvis();
            });
            listeAvis.appendChild(avisDiv);
        });
    }

    function afficherProblemes() {
        const problemes = JSON.parse(localStorage.getItem('problemes')) || [];
        listeProblemes.innerHTML = '';

        problemes.forEach(probleme => {
            const problemeDiv = document.createElement('div');
            problemeDiv.classList.add('probleme-item');
            problemeDiv.innerHTML = `
                <p>Covoiturage ID : ${probleme.covoiturageId}</p>
                <p>Pseudo Passager : ${probleme.pseudoPassager}, Email Passager : ${probleme.emailPassager}</p>
                <p>Pseudo Chauffeur : ${probleme.pseudoChauffeur}, Email Chauffeur : ${probleme.emailChauffeur}</p>
                <p>Description : ${probleme.description}</p>
                <p>Date de départ : ${probleme.dateDepart}, Lieu de départ : ${probleme.lieuDepart}</p>
                <p>Date d'arrivée : ${probleme.dateArrivee}, Lieu d'arrivée : ${probleme.lieuArrivee}</p>
            `;
            listeProblemes.appendChild(problemeDiv);
        });
    }

    // Appeler les fonctions afficherAvis et afficherProblemes au chargement de la page de l'espace employé
    if (listeAvis) {
        afficherAvis();
    }
    if (listeProblemes) {
        afficherProblemes();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const inscriptionForm = document.querySelector('#inscriptionForm');
    const connexionForm = document.querySelector('#connexionForm');
    const participerButton = document.querySelector('#participerButton');
    const pseudoUtilisateur = document.querySelector('#pseudoUtilisateur');
    const creditsUtilisateur = document.querySelector('#creditsUtilisateur');
    const ajouterCovoiturageButton = document.querySelector('#ajouterCovoiturageButton');
    const listeCovoiturages = document.querySelector('#listeCovoiturages');
    const listeDemarrerCovoiturages = document.querySelector('#listeDemarrerCovoiturages');
    const listeArreterCovoiturages = document.querySelector('#listeArreterCovoiturages');
    const listeAvis = document.querySelector('#listeAvis');
    const listeProblemes = document.querySelector('#listeProblemes');
    const listeEmployes = document.querySelector('#listeEmployes');
    const graphiqueCovoiturages = document.querySelector('#graphiqueCovoiturages');
    const graphiqueCredits = document.querySelector('#graphiqueCredits');
    const totalCredits = document.querySelector('#totalCredits');

    // Code existant pour l'inscription, la connexion et la participation à un covoiturage...

    function afficherEmployes() {
        const employes = JSON.parse(localStorage.getItem('employes')) || [];
        listeEmployes.innerHTML = '';

        employes.forEach(employe => {
            const employeDiv = document.createElement('div');
            employeDiv.classList.add('employe-item');
            employeDiv.innerHTML = `
                <p>Pseudo : ${employe.pseudo}, Email : ${employe.email}</p>
                <button class="suspendreButton">Suspendre</button>
            `;
            employeDiv.querySelector('.suspendreButton').addEventListener('click', function() {
                employe.suspendu = !employe.suspendu;
                localStorage.setItem('employes', JSON.stringify(employes));
                afficherEmployes();
            });
            listeEmployes.appendChild(employeDiv);
        });
    }

    function afficherGraphiqueCovoiturages() {
        const voyages = JSON.parse(localStorage.getItem('voyages')) || [];
        const data = voyages.reduce((acc, voyage) => {
            const date = voyage.dateVoyage;
            acc[date] = (acc[date] || 0) + 1;
            return acc;
        }, {});

        const ctx = document.createElement('canvas');
        graphiqueCovoiturages.appendChild(ctx);

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    label: 'Nombre de covoiturages par jour',
                    data: Object.values(data),
                    borderColor: 'green',
                    fill: false
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Nombre de covoiturages'
                        }
                    }
                }
            }
        });
    }

    function afficherGraphiqueCredits() {
        const voyages = JSON.parse(localStorage.getItem('voyages')) || [];
        const data = voyages.reduce((acc, voyage) => {
            const date = voyage.dateVoyage;
            acc[date] = (acc[date] || 0) + 2; // Chaque voyage rapporte 2 crédits à la plateforme
            return acc;
        }, {});

        const ctx = document.createElement('canvas');
        graphiqueCredits.appendChild(ctx);

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    label: 'Crédits gagnés par jour',
                    data: Object.values(data),
                    borderColor: 'blue',
                    fill: false
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Crédits gagnés'
                        }
                    }
                }
            }
        });
    }

    function calculerTotalCredits() {
        const voyages = JSON.parse(localStorage.getItem('voyages')) || [];
        const total = voyages.reduce((acc, voyage) => acc + 2, 0); // Chaque voyage rapporte 2 crédits à la plateforme
        totalCredits.textContent = total;
    }

    // Appeler les fonctions afficherEmployes, afficherGraphiqueCovoiturages, afficherGraphiqueCredits et calculerTotalCredits au chargement de la page de l'espace administrateur
    if (listeEmployes) {
        afficherEmployes();
    }
    if (graphiqueCovoiturages) {
        afficherGraphiqueCovoiturages();
    }
    if (graphiqueCredits) {
        afficherGraphiqueCredits();
    }
    if (totalCredits) {
        calculerTotalCredits();
    }
});


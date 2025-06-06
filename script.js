/* Blog */ 

// Script pour afficher dynamiquement des articles sur blog.html
document.addEventListener("DOMContentLoaded", function () {
  const articles = [
    {
      title: "Nouveau décret 2025 sur la HVE : ce qu’il faut savoir",
      date: "19 mai 2025",
      content:
        "Le nouveau décret introduit un renforcement des indicateurs biodiversité. Voici un résumé des principales évolutions réglementaires...",
    },
    {
      title: "3 conseils pour réussir son audit HVE",
      date: "14 mai 2025",
      content:
        "Anticipez l’audit avec un auto-diagnostic, structurez vos preuves, et impliquez votre équipe. Découvrez nos conseils pratiques.",
    },
    {
      title: "Zoom sur une ferme certifiée HVE en Gironde",
      date: "10 mai 2025",
      content:
        "La Ferme des Vignes Vives a obtenu la certification HVE niveau 3 grâce à des pratiques innovantes. Rencontre avec Marc, son exploitant.",
    },
  ];

  const container = document.getElementById("articles-container");

  if (container) {
    articles.forEach((article) => {
      const div = document.createElement("div");
      div.className = "article-card";
      div.innerHTML = `
        <h3>${article.title}</h3>
        <small>${article.date}</small>
        <p>${article.content}</p>
        <hr>
      `;
      container.appendChild(div);
    });
  }
});

// Confirmation d’envoi de message
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const confirmation = document.getElementById("confirmation-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le vrai envoi

    // Affiche le message
    confirmation.classList.add("visible");

    // Réinitialise le formulaire
    form.reset();

    // Masque le message après 5 secondes
    setTimeout(() => {
      confirmation.classList.remove("visible");
    }, 5000);
  });
});





/* Acceuil */ 

  const compteurEl = document.getElementById("compteur-hve");
  const sectionIntro = document.getElementById("section-intro");
  let aDejaAnime = false;

  function animeCompteur() {
    const cible = 39772;
    let compteur = 0;

    function incrementer() {
      const incrément = Math.ceil((cible - compteur) / 12);
      if (compteur < cible) {
        compteur += incrément;
        compteurEl.textContent = compteur;
        setTimeout(incrementer, 30);
      } else {
        compteurEl.textContent = cible;
      }
    }

    incrementer();
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !aDejaAnime) {
        animeCompteur();
        aDejaAnime = true;
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(sectionIntro);

/* Message contacte*/
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const confirmation = document.getElementById("confirmation-message");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Empêche l'envoi réel

      // Affiche le message de confirmation
      confirmation.classList.add("visible");

      // Vide le formulaire
      form.reset();

      // Masque le message après 5 secondes
      setTimeout(() => {
        confirmation.classList.remove("visible");
      }, 5000);
    });
  });

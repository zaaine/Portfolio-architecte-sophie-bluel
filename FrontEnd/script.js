// stockage des données API dans le local storage
let mesprojets = window.localStorage.getItem("works");
let mescategories = window.localStorage.getItem("categories");
let usersLogin = window.localStorage.getItem("data");
let token = window.localStorage.getItem("token");

/* ************************************************************ */
// récupération de la galery via API - via works
/* ************************************************************ */

fetch("http://localhost:5678/api/works")
  .then((response) => {
    return response.json();
  })
  .then((works) => {
    genererGallery(works);
    const mesprojets = JSON.stringify(works);
    window.localStorage.setItem("works", mesprojets);
  });

/* ************************************************************ */
//   récupération du chemin categories
/* ************************************************************ */

fetch("http://localhost:5678/api/categories")
  .then((response2) => {
    return response2.json();
  })
  .then((categories) => {
    const mescategories = JSON.stringify(categories);
    window.localStorage.setItem("categories", mescategories);
  });

/* ************************************************************ */
// génération de la gallery via Works
/* ************************************************************ */

function genererGallery(works) {
  const portfolio = document.querySelector("#portfolio");
  const gallery = document.querySelector(".gallery");
  portfolio.appendChild(gallery);

  gallery.innerHTML = "";

  /* ************************************************************************************* */
  //   création d'une boucle pour recupérer l'objet travaux et l'afficher dans la galerie
  /* *************************************************************************************** */

  for (const projets of works) {
    const projet = document.createElement("figure");

    const imageElement = document.createElement("img");
    imageElement.src = projets.imageUrl;

    const titleElement = document.createElement("figcaption");
    titleElement.innerText = projets.title;

    projet.setAttribute("data-id", projets.id);
    projet.setAttribute("category-id", projets.categoryId);

    gallery.appendChild(projet);
    projet.appendChild(imageElement);
    projet.appendChild(titleElement);
  }
}

/* ************************************************************ */
// Gestion des boutons de filtrage avec la classe 'filtred'
/* ************************************************************ */
const boutonsAtion = document.querySelectorAll(".containerBtn button");

for (let i = 0; i < boutonsAtion.length; i++) {
  boutonsAtion[i].addEventListener("click", (event) => {
    // Supprimer la classe 'filtred' des autres boutons
    const filtresHS = document.querySelectorAll(".containerBtn button.filtred");
    for (let j = 0; j < filtresHS.length; j++) {
      filtresHS[j].classList.remove("filtred");
    }

    // Ajouter la classe 'filtred' au bouton cliqué
    event.target.classList.add("filtred");

    // Appliquer le filtre correspondant
    const categoryId = event.target.getAttribute("data-category-id");
    filtrerProjets(categoryId); // Filtrer en fonction de la catégorie
  });
}

/* ************************************************************ */
// Fonction de filtrage générique par catégorie
/* ************************************************************ */
function filtrerProjets(categoryId) {
  const tousProjets = document.querySelectorAll(".gallery figure");

  tousProjets.forEach((projet) => {
    const projetCategoryId = projet.getAttribute("category-id");

    // Si categoryId est "0" (Tous), afficher tous les projets
    if (categoryId === "0" || projetCategoryId === categoryId) {
      projet.style.display = "block";
    } else {
      projet.style.display = "none";
    }
  });
}

/* ************************************************************ */
// Associer les événements des boutons à leur filtre respectif
/* ************************************************************ */
document.getElementById("btnFiltreTous").setAttribute("data-category-id", "0");
document
  .getElementById("btnFiltreObjets")
  .setAttribute("data-category-id", "1");
document
  .getElementById("btnFiltreAppartements")
  .setAttribute("data-category-id", "2");
document
  .getElementById("btnFiltreHotelR")
  .setAttribute("data-category-id", "3");

/* ************************************************************ */
// fonction qui va gerer le login et le logout de l'utilisateur
/* ************************************************************ */

function isconnected(gestionLogin) {
  if (localStorage.token) {
    let login = document.getElementById("login");
    let logout = document.getElementById("logout");

    login.style.display = "none";
    logout.style.display = "block";

    let isconnectedTomodify = document.querySelector(".isconnectedTomodify");
    isconnectedTomodify.style.display = "block";

    let editionView = document.querySelector(".vuEdition");
    editionView.style.display = "block";

    let containerBtn = document.querySelector(".containerBtn");
    containerBtn.style.display = "none";

    logout.addEventListener("click", () => {
      login.style.display = "block";
      logout.style.display = "none";
      editionView.style.display = "none";
      containerBtn.style.display = "block";
      localStorage.removeItem("token");

      const modal = document.querySelector(".modal");
      modal.style.display = "none";
    });
  }
}

isconnected();

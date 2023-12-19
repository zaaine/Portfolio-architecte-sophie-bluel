let mesprojets = window.localStorage.getItem("works");
let mescategories = window.localStorage.getItem("categories");

// récupération de la galery via API
fetch("http://localhost:5678/api/works")
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then((works) => {
    // console.table(works);
    genererGallery(works);
    const mesprojets = JSON.stringify(works);
    window.localStorage.setItem("works", mesprojets);
  });

//   récupération du chemin categories
fetch("http://localhost:5678/api/categories")
  .then((response2) => {
    // console.log(response);
    return response2.json();
  })
  .then((categories) => {
    // console.table(category);
    // genererGallery(works);
    const mescategories = JSON.stringify(categories);
    window.localStorage.setItem("categories", mescategories);
  });

// génération de la gallery via Works
function genererGallery(works) {
  // récupération de l'élément du DOM pour accueillir les travaux
  const portfolio = document.querySelector("#portfolio");
  const gallery = document.querySelector(".gallery");
  portfolio.appendChild(gallery);
  //   console.log(works);

  //   création d'une boucle pour recupérer l'objet travaux et l'afficher dans la galerie

  for (const projets of works) {
    // console.log( projets);
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

// Gestion des boutons Gallery pour filtrage des projets

// le boutons clické va afficher la class filtred
const boutonsAtion = document.querySelectorAll(".containerBtn button");
for (i = 0; i < boutonsAtion.length; i++) {
  boutonsAtion[i].addEventListener("click", (event) => {
    const filtresHS = document.querySelectorAll(".containerBtn button.filtred");
    for (j = 0; j < filtresHS.length; j++) {
      filtresHS[j].classList.remove("filtred");
    }

    event.target.classList.add("filtred");

    // console.log(event.target);
  });
}

// fonctionnalité filtre tous

const filtreTous = document.getElementById("btnFiltreTous");
filtreTous.addEventListener("click", tousFiltre);

function tousFiltre() {
  const tousprojets = document.querySelectorAll(".gallery figure ");
  tousprojets.forEach((projets) => {
    const categoryId = projets.getAttribute("category-id");

    if (categoryId >= "0") {
      projets.style.display = "block";
    } else {
      projets.style.display = "none";
    }
  });
}

// fonctionnalité filtre objet

const filtreObjet = document.getElementById("btnFiltreObjets");
filtreObjet.addEventListener("click", objetfiltre);

function objetfiltre() {
  const projetsObjet = document.querySelectorAll(".gallery figure ");
  projetsObjet.forEach((projetObjet) => {
    const categoryId = projetObjet.getAttribute("category-id");
    // console.log(categoryId);
    if (categoryId === "1") {
      projetObjet.style.display = "block";
    } else {
      projetObjet.style.display = "none";
    }
  });
}

// fonction filtre Appartements

const filtreAppartement = document.getElementById("btnFiltreAppartements");
filtreAppartement.addEventListener("click", appartementfiltre);

function appartementfiltre() {
  const projetAppartements = document.querySelectorAll(".gallery figure");
  projetAppartements.forEach((projetAppartement) => {
    const categoryId = projetAppartement.getAttribute("category-id");

    if (categoryId === "2") {
      projetAppartement.style.display = "block";
    } else {
      projetAppartement.style.display = "none";
    }
  });
}

// fonction filtre hôtel & restaurant

const filtreHotelRestaurant = document.getElementById("btnFiltreHotelR");
filtreHotelRestaurant.addEventListener("click", hotelEtRestaurantFiltre);

function hotelEtRestaurantFiltre() {
  const projetsHotelRest = document.querySelectorAll(".gallery figure");
  projetsHotelRest.forEach((projethotelRest) => {
    const categoryId = projethotelRest.getAttribute("category-id");

    if (categoryId === "3") {
      projethotelRest.style.display = "block";
    } else {
      projethotelRest.style.display = "none";
    }
  });
}

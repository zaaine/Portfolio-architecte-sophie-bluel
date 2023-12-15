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

    console.log(event.target);
  });
}

// test 1
// test fonction filtre
// function filtreGallery(genererGallery) {
//   const boutonsActionfiltre = boutonsAtion;
//   const worksofcategories = works;
//   console.log(boutonsActionfiltre);
//   console.log(worksofcategories);
//   boutonsActionfiltre.addEventListener("click", (event) => {
//     for (k = 0; k < worksofcategories.length; k++) {
//       boutonsActionfiltre[0].filter(worksofcategories);
//       boutonsActionfiltre[1].filter(worksofcategories.categoryId[1]);
//       boutonsActionfiltre[2].filter(worksofcategories.categoryId[2]);
//       boutonsActionfiltre[3].filter(worksofcategories.categoryId[3]);
//     }
//     return document.querySelector(".figure").innerHTML="";
//     genererGallery(filtreGallery)

//   });
// }

// filtreGallery(genererGallery);

// test 2 :
// function galleryFiltred (works) {

//     const buttonFiltreObjet = boutonsAtion
//     const worksfiltred = mescategories;
//     buttonFiltreObjet.addEventListener("click", (event) => {
//         for (k = 1 ; k <buttonFiltreObjet.length; k++)
//         for (l = 0 ; l <worksfiltred.length; l++)

//     if(event.target[k] === worksfiltred[l]  ){
//         return works.category.name === worksfiltred.name
//     } else {
//         console.log("erreur affichage gallery")
//     }
//     document.querySelector(".figure").innerHTML="";
//     genererGallery(galleryFiltred)

// });

// }

// galleryFiltred (works)

// test 3

// function objetfiltre (works) {

//     const objet = document.querySelector(".btnFiltreObjets");

//     objet.addEventListener("click", (event) => {
//         const objetfiltred = works.filter(function (projet){
//             return projet.categoryId = 2;
//         })
//         document.querySelector(".gallery").innerHTML="";
//         genererGallery(objetfiltred)

//     } );
// }

// objetfiltre(works)

// test 4

// const objet = document.querySelector(".btnFiltreObjets");
// objet.addEventListener("click", (event) =>{
//     const listeObjet = mesprojets;
//     for ( let l=0 ; l<listeObjet.length ; l++){
//         for (let m= 0; m<listeObjet.length; m++){
//             return listeObjet[m].name = "Objets"
//         }
//     }
// })

// console.log(listeObjet[m] );
// console.log(listeObjet);

test 5

console.log(mesprojets);
const boutonObjet = document.querySelector(".btnFiltreObjets");
boutonObjet.addEventListener("click", function () {
  const objetFiltrees = mesprojets.filter(obj => obj.categoryId === 2);
  console.log(objetFiltrees);

  document.querySelector(".gallery").innerHTML = "";
  genererGallery(objetFiltrees);
});


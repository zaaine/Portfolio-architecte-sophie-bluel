
fetch("http://localhost:5678/api/works")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((works) => {
    console.table(works);

    genererGallery(works);
  });


// Création des sections dynamique de la page

// // section introduction
const sectionIntroduction = document.querySelector("#introduction article");
// // sectionIntroduction.classList.add("introduction","article")


// const introTitle = document.querySelector(".introTitle");
// introTitle.innerText = "Designer d'espace";
// // introTitle.classList.add("introduction", "h2")
// sectionIntroduction.appendChild(introTitle)
// // image ne s'affiche pas encore !!

const figure = document.querySelector("#introduction figure")

const imgSophieBluel = document.createElement("img");
imgSophieBluel.setAttribute("src", "assets/images/sophie-bluel.png");
imgSophieBluel.setAttribute("alt", "photo portrait sophie-bluel");
figure.appendChild(imgSophieBluel);
// imgSophieBluel.classList.add("introduction", "img","figure");


const pIntroduction = document.createElement("p");
pIntroduction.innerHTML = `<p>Je raconte votre histoire, je valorise vos idées. Je vous accompagne de la conception à la livraison finale du chantier.</p>
    <p>Chaque projet sera étudié en commun, de façon à mettre en valeur les volumes, les matières et les couleurs dans le respect de l’esprit des lieux et le choix adapté des matériaux. Le suivi du chantier sera assuré dans le souci du détail, le respect du planning et du budget.</p>
    <p>En cas de besoin, une équipe pluridisciplinaire peut-être constituée : architecte DPLG, décorateur(trice)</p>`;
    sectionIntroduction.appendChild(pIntroduction);
    pIntroduction.classList.add("introduction", "p");




// section Contact
const contactTitle = document.querySelector(".contactTitle");
contactTitle.innerText = "Contact";
const pContact = document.createElement("p");
pContact.innerHTML = `<p> Vous avez un projet ? Discutons-en !</p>`;
// pContact.classList.add("p");
contactTitle.appendChild(pContact);

function genererGallery(works) {
  // récupération de l'élément du DOM pour accueillir les travaux
  const portfolio = document.querySelector("#portfolio");
  const gallery = document.createElement("div")
  console.log(gallery);
  gallery.classList.add("gallery") ;

  //   création d'une boucle pour recupérer l'objet travaux et l'afficher dans la galerie

  //   for (const projets of works){
  //   console.log( "Projet");
  // }

  for (let i = 0; i < works.length; i++) {
    console.log(works);

    const article = works[i];
    
    // Récupération de l'élément du DOM qui accueillera les projets
    // Création section Mes projets
    const mesProjets = document.querySelector(".mesProjets");
    mesProjets.innerText = "Mes Projets";
    
    // création d'une balise figure dédié à un projet
    const workElement = document.createElement("article");
    workElement.dataset.id = article.id;
    mesProjets.appendChild(workElement)
    // const workElement = works[i];

    // Création des balises pour accuellir les elements de l'objet
    const imageElement = document.createElement("img");
    imageElement.src = article.imageUrl;
    imageElement.classList.add("img");
    imageElement.setAttribute("alt", article.name);

    const titleElement = document.createElement("div");
    titleElement.innerText = article.title;

    const nameElement = document.createElement("div");
    nameElement.innerText = article.category.name;

    const categoryId = document.createElement("div");
    categoryId.innerText = article.categoryId;

    // rattachement de la balise à la section porfolio dans division gallery
    // document.body.appendChild(portfolio)
    
    gallery.appenchild(workElement);
    workElement.appenchild(imageElement);
    workElement.appendChild(titleElement);
    workElement.appendChild(nameElement);

  }
  
}


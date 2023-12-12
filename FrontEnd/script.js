
function getFetchWorks(url) {
  fetch(url)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((works) => {
      console.log(works);

      genererGallery(works);
    });
}

getFetchWorks("http://localhost:5678/api/works");

//   création des elements titres de la page
const sectionIntroduction = document.querySelector("#introduction");

const introTitle = document.querySelector(".introTitle");
introTitle.innerText = "Designer d'espace";

const pIntroduction = document.createElement("p");
pIntroduction.innerHTML = `<p>Je raconte votre histoire, je valorise vos idées. Je vous accompagne de la conception à la livraison finale du chantier.</p>
    <p>Chaque projet sera étudié en commun, de façon à mettre en valeur les volumes, les matières et les couleurs dans le respect de l’esprit des lieux et le choix adapté des matériaux. Le suivi du chantier sera assuré dans le souci du détail, le respect du planning et du budget.</p>
    <p>En cas de besoin, une équipe pluridisciplinaire peut-être constituée : architecte DPLG, décorateur(trice)</p>`;
sectionIntroduction.appendChild(pIntroduction);
pIntroduction.classList("p");

// image ne s'affiche pas encore !!!
const imgSophieBluel = document.createElement("img");
imgSophieBluel.setAttribute("src", "./assets/images/sophie-bluel.png")
imgSophieBluel.setAttribute("alt", "photo portrait sophie-bluel")
imgSophieBluel.classList("img");
sectionIntroduction.appendChild(imgSophieBluel);
console.log(imgSophieBluel);

const mesProjets = document.querySelector(".mesProjets");
mesProjets.innerText = "Mes Projets";

const contactTitle = document.querySelector(".contactTitle");
contactTitle.innerText = "Contact";
const pContact = document.createElement("p");
pContact.innerHTML = `<p> Vous avez un projet ? Discutons-en !</p>`;
pContact.classList("p");
contactTitle.appendChild(pContact);

function genererGallery(works) {
  // récupération de l'élément du DOM pour accueillir les travaux
  const portfolio = document.querySelector("#portfolio");
  const gallery = document.querySelector(".gallery");
  gallery.classList = "gallery";

  for (let i = 0; i < works.length; i++) {
    //   const work = works;

    console.log(works);

    // création d'une balise figure dédié à un projet
    workElement = document.createElement("figure");
    workElement.dataset.id = works[i].id;
    // const workElement = works[i];

    // Création des balises
    const imageElement = document.createElement("img");
    imageElement.src = workElement.imageUrl;
    imageElement.classList("gallery");
    imageElement.setAttribute("alt", workElement.name);

    const titleElement = document.createElement("figcaption");
    titleElement.innerText = workElement.title;

    const nameElement = document.createElement("figcaption");
    nameElement.innerText = workElement.name;

    // rattachement de la balise à la section porfolio dans division gallery
    // document.body.appendChild(portfolio)
    portfolio.appenchild(gallery);
    gallery.appenchild(workElement);
    workElement.appenchild(imageElement);
    workElement.appendChild(titleElement);
    workElement.appendChild(nameElement);
  }
}
genererGallery(works);

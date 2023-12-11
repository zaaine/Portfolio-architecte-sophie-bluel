
// Récupération des docs éventuellement stockées dans le localStorage
// let categories = window.localStorage.getItem("categories");
let works = window.localStorage.getItem("works");

// Récupération de la documentation depuis Architect API
if (categories === null){
    const reponse = await fetch ("http://localhost:5678/api/categories")
    categories = await reponse.json();
    // transoformation des documents en JSON
    const valeursCategorie = JSON.stringify(categories)
    // stockage des informations dans le localStorage
    // window.localStorage.setItem("categories",valeursCategorie);
}else{
    docs = JSON.parse(categories);
}

if (works === null){
    const reponse = await fetch ("http://localhost:5678/api/works")
    works = await reponse.json();
    // transoformation des documents en JSON
    const valeursworks = JSON.stringify(works)
    // stockage des informations dans le localStorage
    window.localStorage.setItem("works",valeursworks);
}else{
    works = JSON.parse(works);
}


function genererGallery (works){

    for (let i=0; i < works.length; i++){

        const work = works[i];

        // récupération de l'élément du DOM pour accueillir les travaux
        const portfolio = document.querySelector("#portfolio");
        const gallery = document.querySelector(".gallery")
        gallery.classList.add("gallery")

            
        console.log(gallery);

        
        // création d'une balise figure dédié à un projet
        const workElement = document.createElement("figure");
        workElement.dataset.id = works[i].id;

        // Création des balises
        const imageElement = document.createElement("img")
        imageElement.src = works.imageUrl;
        imageElement.classList.add('gallery img')

        const titleElement = document.createElement("figcaption")
        titleElement.innerText=work.title

        const nameElement = document.createElement("figcaption")
        nameElement.innerText=work.name

        // rattachement de la balise à la section porfolio dans division gallery
        portfolio.appenchild(gallery)
        gallery.appenchild(workElement)
        workElement.appenchild(imageElement)
        workElement.appendChild(titleElement)
        workElement.appendChild(nameElement)
    }

}
    
function genererGallery(works);




for (let i = 0; i<categories.length;i++){
    const id=categories[i].id;
    const categories= window.localStorage.getItem(`categories[data-id="${id}"]`);

}
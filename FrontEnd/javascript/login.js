// Gestion de la page login.html

// mise en place d'une regle de conformité du champs à remplir
// *** Cette fonction valide la présence d'un mail au bon format

function validerEmail(baliseEmail) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (!emailRegExp.test(baliseEmail)) {
    throw new Error("L'email n'est pas valide.");
    let message = "L'email n'est pas valide.";
    // afficherMessageErreur(message)
    
  }
}

// cette fonction verifie que le mot de passe contient plus de 4 caractères

function validerPassword(balisePassword) {
  let passwordRegExp = new RegExp("[A-Za-z0-9._-]");
  if (!passwordRegExp.test(balisePassword) < 4) {
    throw new Error("Le mot de passe est incorrect.");
    let message = "Le mot de passe est incorrect.";
    // afficherMessageErreur(message)
    // console.log(message);
  }
}

// Cette fonction va afficher un message d'erreur correspondant

function afficherMessageErreur(message) {
  let spanErreurMessage = document.querySelector(".spanErreurMessage");

  if (!spanErreurMessage) {
    spanErreurMessage.innerText = `${message}`;
    spanErreurMessage.style.color = "red"
    
  }
}



// cette fonction va gerer les informations du formulaire et du submit

function gestionLogin(validerEmail,validerPassword) {
  // Gestion du submit "connection "sur le formulaire

  let btnConnection = document.querySelector(".input_connection");
  btnConnection.addEventListener("submit", (event) => {
    event.preventDefault();
    
 });

  try {
    const email = document.getElementById("email");
    let baliseEmail = email.value;
    validerEmail(baliseEmail);

    const password = document.getElementById("password");
    let balisePassword = password.value;
    validerPassword(balisePassword);

  } catch (erreur) {
    afficherMessageErreur();
    console.log("Le formulaire est ko");
  }

}

gestionLogin();

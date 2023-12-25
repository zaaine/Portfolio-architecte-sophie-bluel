// Gestion de la page login.html

// mise en place d'une regle de conformité du champs à remplir
// *** Cette fonction valide la présence d'un mail au bon format

function validerEmail() {
  const email = document.getElementById("email");
  const labelEmail = document.querySelector(" label[for=Email] ");

  email.addEventListener("change", (event) => {
    // let baliseEmail = email.value;
    let baliseEmail = email.value;
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
    if (!emailRegExp.test(baliseEmail)) {
      console.log("L'email n'est pas valide.");
      labelEmail.style.color = "red";
      message = "L'email n'est pas valide.";
      afficherMessageErreur(message);
    } else {
      labelEmail.style.color = "green";
    }
  });
}

validerEmail();
// cette fonction verifie que le mot de passe contient plus de 4 caractères
// ***** Il faut retirer la fonction affichermessageErreur quand le else est ok

function validerPassword() {
  const password = document.getElementById("password");
  const labelPassword = document.querySelector(" label[for=password] ");

  password.addEventListener("change", (event) => {
    let balisePassword = password.value;
    let passwordRegExp = new RegExp("[a-z0-9._-]{6}");

    if (!passwordRegExp.test(balisePassword)) {
      console.log("mot de passe ko ");
      labelPassword.style.color = "red";
      message = "Le mot de passe est erroné";
      afficherMessageErreur(message);
    } else {
      console.log("mot de passe ok");
      labelPassword.style.color = "green";
    }
  });
}

validerPassword();
// Cette fonction va afficher un message d'erreur correspondant

function afficherMessageErreur() {
  let spanErreurMessage = document.querySelector(".spanErreurMessage");
  let textErreur = document.querySelector(".textErreur");
  textErreur = document.createElement("p");
  spanErreurMessage.append(textErreur);
  textErreur.innerText = message;
  textErreur.style.color = "red";
}

// cette fonction va gerer les informations du formulaire et du submit

function gestionLogin(validerEmail, validerPassword) {
  // Gestion du submit "connection "sur le formulaire

  let btnConnection = document.querySelector(".input_connection");
  let usersLogin = {
    email: document.getElementById("email"),
    password: document.getElementById("password"),
  };

  btnConnection.addEventListener("submit", (event) => {
    event.preventDefault();
    if (
      !emailRegExp.test(baliseEmail) &&
      !passwordRegExp.test(balisePassword)
    ) {
      console.log("formulaire ok");
    } else {
      console.log("formulaire kO");
    }
  });
}

gestionLogin(validerEmail, validerPassword)

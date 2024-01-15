function loginUser() {

  var email = document.getElementById("correo").value;
  var password = document.getElementById("contrasena").value;


  console.log(`Correo: ${email}, contraseña: ${password}`);

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((success) => {
      console.log('Succesfully signed in')
    }).catch((error) => {
      console.log('Error')
    });
}


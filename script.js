const firebaseConfig = {
    apiKey: "AIzaSyARIyqxCe-FjLsysN6UBdd0GssrI5CIEu8",
    authDomain: "datos-de-formulario-95cf9.firebaseapp.com",
    projectId: "datos-de-formulario-95cf9",
    storageBucket: "datos-de-formulario-95cf9.firebasestorage.app",
    messagingSenderId: "433439016656",
    appId: "1:433439016656:web:b6045d4797db67834140d5",
    measurementId: "G-X5NJMR0SPT"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

document.getElementById('formulario').addEventListener('submit',(event) => {
    event.preventDefault();

    // validar campo nombre
    let entradaNombre = document.getElementById('name');
    let errorNombre = document.getElementById('nameError');

    if(entradaNombre.value.trim() === ""){
        errorNombre.textContent = 'Por favor, introduci tu nombre';
        errorNombre.classList.add('error-message');
    }else{
        errorNombre.textContent = '';
        errorNombre.classList.remove('error-message');   
    }

    // validar correo electronico
    let emailEntrada = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/; // patron de validacion
    if(!emailPattern.test(emailEntrada.value)){
        emailError.textContent = 'Por favor, introduci un mail valido';
        emailError.classList.add('error-message');
    }else{
        emailError.textContent = '';
        emailError.classList.remove('error-message');   
    }
    // validar la contraseña
    let contrasenaEntrada = document.getElementById('password');
    let contrasenaError = document.getElementById('passwordError');
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
    if(!contrasenaPattern.test(contrasenaEntrada.value)){
        contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres, numeros, mayusculas y minusculas, y caracteres\
        especiales';
        contrasenaError.classList.add('error-message');
    }else{
        contrasenaError.textContent = '';
        contrasenaError.classList.remove('error-message');   
    }

    // Si todos los campos son validos, enviar el formulario
    if(!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent){
        // BACKEND que reciba la informacion

        db.collection("users").add({
            nombre: entradaNombre.value,
            email: emailEntrada.value,
            password: contrasenaEntrada.value,
        })
        .then((docRef) => {
            alert('El formulario se ha enviado con exito', docRef.id);
            document.getElementById('formulario').reset() 
        })
        .catch((error) => {
            alert(error);
        });
    }
})
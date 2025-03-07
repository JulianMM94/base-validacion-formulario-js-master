document.getElementById('formulario').addEventListener('submit'),(event) => {
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
    if(contrasenaEntrada.value.lenght < 8 ){
        contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres';
        contrasenaError.classList.add('error-message');
    }else{
        contrasenaError.textContent = '';
        contrasenaError.classList.remove('error-message');   
    }

    // Si todos los campos son validos, enviar el formulario
    if(!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent){
        // BACKEND que reciba la informacion
        alert('El formulario se ha enviado con exito')
        document.getElementById('formulario').reset() 
    }
}
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const formulario = document.querySelector("form");
/* console.log(formulario); */

const inputs = document.querySelectorAll("input");
/* console.log(inputs); */



//+++++++++++++++++++++++++++++++ERRORES++++++++++++++++++++++++++++++++

const $errorNombre = document.querySelector("#errorNombre");
const $errorApellido = document.querySelector("#errorApellido");
const $errorEmail = document.querySelector("#errorEmail");
const $errorPassword = document.querySelector("#errorPassword");
const $errorTelefono = document.querySelector("#errorTelefono");

const statusInf = {
	nombre: false,
	apellido: false,
	email: false,
	password: false,
	telefono: false
};






inputs.forEach((inp)=>{
/* 	console.log(inp); */
	inp.addEventListener("keyup",(e)=>{
		console.log(e.target.name)

		switch(e.target.name){
			case "nombre":
				//console.log(e.target.value);
				if(expresiones.nombre.test(e.target.value)){
					$errorNombre.textContent = "";
					statusInfInf.nombre = true;
				}
					else{
						console.log("Nombre incorrecto")
						$errorNombre.textContent = "Error";
						statusInfInf.nombre = false;
					};
				break
			case "apellido":
				if(expresiones.nombre.test(e.target.value)){
					$errorApellido.textContent = "";
					statusInfInf.apellido = true;
				}
					else{
						$errorApellido.textContent = "Error";
						statusInfInf.apellido = false;
					};
				break
			case "email":
				if(expresiones.email.test(e.target.value)){
					$errorEmail.textContent = "";
					statusInfInf.email = true;
				}
					else{
						$errorEmail.textContent = "Error"
						statusInfInf.email = false;
					};
				break
			case "password":
				if(expresiones.password.test(e.target.value)){
					$errorEmail.textContent = "";
					statusInfInf.password = true;
				}
					else{
						$errorPassword.textContent = "Error"
						statusInfInf.password = false;
					};
				break
			case "telefono":
				if(expresiones.telefono.test(e.target.value)){
					$errorTelefono.textContent = "";
					statusInfInf.telefono = true;
				}
					else{
						$errorTelefono.textContent = "Error";
						statusInfInf.telefono = false;
					};
				break

		}

	})
})

formulario.addEventListener("submit",(e)=>{
	e.preventDefault();

	const check = document.querySelector("#terminos").checked

	if(!Object.values(statusInf).includes(false) && check == true){
	console.log("Enviado");
	document.querySelector(".alert-danger").style.display = "none";
	
	const datos = Object.fromEntries(
		new FormData(e.target)
	)
	console.log(datos)

	}
	else{
		console.log("No enviado");
		document.querySelector(".alert-danger").style.display = "block";
	}

})

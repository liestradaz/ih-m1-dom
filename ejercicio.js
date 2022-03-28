//Objetivo: Obtener todos los datos del campo de texto y mostrarlos en una etiqueta nueva, al momento de que le de click enviar

//1. Seleccion
const form = document.getElementById("formulario")
//const form = document.querySelector("#formulario") //como css ".","#"

const button = document.getElementById("enviar")

const results = document.getElementById("resultados")

//-------Seleccion formulario 2
const form2 = document.getElementById("formulario-2")
const button2 = document.getElementById("enviar2")

//2. Manipulacion

//A. Eventos
button.addEventListener("click", (event) => {
    //console.log(event)

    //1.Evita la recarga de pagina. Usualmente va al inicio de la funcion
    event.preventDefault()

    //2. Obtener todos los datos en variables
    //-> [selector].[nombre del campo del texto].[value]
    const name = form.nombre.value
    const email = form.email.value
    const birthDate = form.birthDate.value

    const dessert = form.dessert.checked
    

    let dessertIsCheckedMessage

    if(dessert){
        dessertIsCheckedMessage = "El usuario SI selecciono el helado"
    } else{
        dessertIsCheckedMessage = "El usuario NO selecciono el helado"
    }

    const selectedIndex = form.decisions.selectedIndex   
    const selectedOption = form.decisions.options[selectedIndex]
    const selectedOptionText = selectedOption.text
    
    return results.innerHTML = `
	 		<h1>Datos de envío</h1>
	 		<p>El nombre es: ${name}</p>
		 	<p>El email es: ${email}</p>
		 	<p>El cumpleaños es: ${birthDate}</p>
		 	<p>${dessertIsCheckedMessage}</p>
		 	<p>El número elegido fue: ${selectedOptionText}</p>
             `
})

//------Formulario 2 - Ejercicio por mi
button2.addEventListener("click", (event) => {
    console.log(event)
    event.preventDefault()


    const name2 = form2.nombre2.value
    const email2 = form2.email2.value
    const birtDate2 = form2.birthDate2.value

    const registro = form2.registro.checked
    

    let registroIsCheckedMessage

    if(registro){
        registroIsCheckedMessage = "El usuario SI selecciono el registro"
    } else{
        registroIsCheckedMessage = "El usuario NO selecciono el registro"
    }

    const selectedIndex2 = form2.decisions2.selectedIndex   
    const selectedOption2 = form2.decisions2.options[selectedIndex2]
    const selectedOptionText2 = selectedOption2.text
    
    console.log(selectedOptionText2)
    
    console.log("Enviando datos...")

})


//1. Seleccion
const calculatePricesBtn = document.getElementById("calculatePricesBtn")
const multipleProducts = document.querySelectorAll(".product")
const result = document.querySelector("#result span")

//2. Manipulacion
const calculateAll = () => {
    //Establecer un valor inicial con 0
    let totalValue = 0

    //Realizar un ciclo por cada fila(por cada producto)
    for(let i=0; i < multipleProducts.length; i++){
        totalValue += updateSubtotal(multipleProducts[i])
    }

    //Pintar el valor en el area de total
    result.innerHTML = totalValue

}

const updateSubtotal = (singleProduct) => {
    console.log("singlePr", singleProduct)

    //Captural el precio de singleProduct
    const price = singleProduct.querySelector(".price span").innerHTML

    //Captural la cantidad de singleproduct
    const quantity = singleProduct.querySelector(".quantity input").value

    //Multiplicar el precio*cantidad. este es el total
    const subtotal = price * quantity

    //Pintar el resultado
    singleProduct.querySelector(".subtotal span").innerHTML = subtotal
    //Retornamos el valor
    return subtotal
}

//Selecciona todo el proyecto web de un sitio
window.addEventListener("load", () => {
    console.log("La pagina cargo")
    //Listar todos los eventos disponibles de la aplicacion
    calculatePricesBtn.addEventListener("click", () => {
        calculateAll()
    } )
}) 

let ammount = document.getElementById("ammount")
let totalBtn = document.getElementById("total-btn")
let borrarBtn = document.getElementById("borrar-btn")

totalBtn.addEventListener("click", function(){
    let cantidad = document.getElementById("cantidad").value
    let index = document.getElementById("seleccion").selectedIndex
    let descuento = 0
    console.log(index)
    if(index === 0){
        descuento = (200 - (200*0.8)) * cantidad
    }
    else if(index === 1){
        descuento = (200 - (200 * 0.5)) * cantidad
    }
    else{
        descuento = (200 - (200 * 0.15)) * cantidad
    }
    ammount.textContent = ` ${descuento}`
})
borrarBtn.addEventListener("click", function(){
    document.getElementById("form").reset()
    ammount.textContent = ` 0`
}) 


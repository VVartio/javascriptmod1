
const trigger = document.querySelector("#trigger");
const target = document.querySelector("#target")

    trigger.addEventListener("mouseover", ()=> {
        target.setAttribute("src", "img/picB.jpg")
})
    trigger.addEventListener("mouseout", ()=> {
        target.setAttribute("src", "img/picA.jpg")
})
let button = document.querySelectorAll(".button")
let body = document.querySelector("body")

button.forEach(btn => {

    btn.addEventListener("click", function (e) {
        console.log(e.target.id)
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id
        }
        else{
            alert("Invalid Color")
        }

    })

});

console.log(button)
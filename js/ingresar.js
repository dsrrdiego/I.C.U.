document.querySelector("#ingresar").addEventListener('click',ingresar);

let inputs=document.querySelectorAll(".form-input")
function ingresar(){
    console.log(inputs);
    if (inputs[0].value=="admin" && inputs[1].value=="admin"){
        window.location.href = 'campanas2.html';
    }else{
        //hacer que muestre algo
    }
}
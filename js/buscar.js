let input=document.querySelector("#input-buscar");
input.addEventListener("input",buscar);


let cards=document.querySelectorAll(".card");


function buscar(){
    for (let card of cards){
        if (card.id.includes(input.value)){
            card.style="display:flex";
        }else{
            card.style="display:none";
        }
    }
}
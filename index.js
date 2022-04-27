const result = document.querySelector(".result")
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increaseByFive = document.querySelector(".increase-5");
const decreaseByFive = document.querySelector(".decrease-5");

increase.addEventListener("click", function(){
    result.innerHTML++;
    color();
});

reset.addEventListener("click", function(){
    result.innerHTML = "0";
    color();
});

decrease.addEventListener("click", function(){
    result.innerHTML--;
    color();
});


function color() {
    // Less than 0
    if(result.innerHTML < 0){
        result.style.color = "red";
    }

    if(result.innerHTML > 0){
        result.style.color = "green";
    }

    if(result.innerHTML === "0" ){
        result.style.color = "white";
    }
}

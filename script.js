// let p = document.querySelector("h1");

// p.innerHTML = "From JS";
// // p.style.backgroundColor = 'red' ;
// p.classList= ("green_box")

// const paragraphs_list = document.querySelectorAll("h1");

// for (let i= 0 ; i < paragraphs_list.length; i++){
//     paragraphs_list[i].innerHTML ='varskvlavebi ubeebshi chaibargo';
// }

// const switchBitch = document.querySelectorAll(".targo");

// for(let i = 0; i < switchBitch.length ; i++){
//     switchBitch[i].innerHTML = '<i>Every night in my dreams</i>';
// }



// let counter = document.getElementById("number");

// let count = 0;
// counter.innerHTML = count;

// function goUpBaby(){
// count += 1;
// counter.innerHTML = count;
// }

// function goDownBaby(){
//     if(count>0){
//     count -= 1; 
//     counter.innerHTML = count;}
// }


// function increaseBy(num){
//     count *= num;
//     counter.innerHTML = count;
// }


// function reset(){
//     count = 0;
//     counter.innerHTML = count;
// }






// NEED TO FINISH VERY INTERESTING WORK 
//  STOPPED AT LECTURE 31 / 57:00 


// const decreaseBTN = document.getElementById("decrease")
// const increaseBTN = document.getElementById("increase")
// const increaseTwiceBTN = document.getElementById("increaseTwice")
// const resetBTN = document.getElementById("reset");
// const counterParagraph = document.getElementById("number");

// let count = 0;
// counterParagraph.innerHTML = count ;

// increaseBTN.addEventListener("click", function(){
//     count += 1;
//     counterParagraph.innerHTML = count ;
// })

// decreaseBTN.addEventListener("click", function(){
//     if(count>0){
//     count -= 1;
//     counterParagraph.innerHTML = count ;
// }})

// increaseTwiceBTN.addEventListener("click", function(){
//     count += 2;
//     counterParagraph.innerHTML = count ;
// })

// resetBTN.addEventListener("click", function(){
//     count = 0;
//     counterParagraph.innerHTML = count ;
// })

const boxBox = document.getElementById("box")
const greenBTN = document.getElementById("green");
const whiteBTN = document.getElementById("white");
const purpleBTN = document.getElementById("purple");

function buttonToGreen(){
    boxBox.style.background = "green";
}

greenBTN.addEventListener("click", () => buttonToGreen());

whiteBTN.addEventListener("click" ,function(){
    boxBox.style.backgroundColor = "white";
})

purpleBTN.addEventListener("click" ,function(){
    boxBox.style.backgroundColor = "purple";
})




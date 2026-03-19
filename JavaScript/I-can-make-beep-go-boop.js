// How to join two string and rendering after 5 seconds

let a="I can make beep";
let b=" Go BOOM!";

function showAfter5Second(){
    setTimeout(()=>{
        console.log(a+b)
    },5000)
}

showAfter5Second();
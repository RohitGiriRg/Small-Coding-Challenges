// W.A.P to join two string and rendering the second string after 5 seconds

let a="I can make beep";
let b="Go boom!";

console.log(a);
showAfter5Second();

function showAfter5Second(){
    setTimeout(()=>{
        let result = " " + b;
        console.log(result)
    },5000)
}

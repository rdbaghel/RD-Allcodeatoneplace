let store ='';

function calculate(arg){
    store = store + arg;
    console.log(store);
    let output = document.getElementById('ans');
    output.innerHTML = store;
}

function final(){
    console.log(eval(store));//here eval is not a random var it has important role to play by itself in calculating.
    let output = document.getElementById('ans');
    // output.innerHTML = store;
    output.innerHTML= store + '=' + eval(store);
    
}
function del(){
    store =store.slice (0,store.length-1);
    document.getElementById('ans').innerHTML=store
}
function ac(){
    store ='';
    document.getElementById('ans').innerHTML=store
}
function cube(){
    store =store*store*store ;
    document.getElementById('ans').innerHTML=store;
}
function square(){
    store=store*store;
    document.getElementById('ans').innerHTML=store
}

//arow
//for lorem
const change = ()=>{
    let lorem = document.getElementById('lorem');
    let output= "<h1><center>hello</center></h1>";
    lorem.innerHTML= output; //why we use that and how does it works?
    lorem.textContent= output;

}
async function login(){


let data = await fetch('http://localhost:3000/registration'); 
let response = await data.json();

let username = document.querySelector('#username').value;
let password = document.querySelector ('#password').value;


let filterdata = response.filter(items => items.username === username && items.password === password)
window.localStorage.setItem('information',JSON.stringify(filterdata))
console.log(filterdata)

if(filterdata.length >= 1){
window.alert ("successfully login");
window.open ("dashboard.html")
}
else {
  window.alert("Username or password is incorrect. Please register first.");
  window.location.href = "apidata.html";
}

  
}
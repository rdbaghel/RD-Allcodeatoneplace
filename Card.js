let arr=[
    {
    "id":1,
    "pname":"strabrery cake",
    "pprice":50,
    "pimage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzTWtCR59Uz6b9iSdF9DT7L371ijtpUpb9A&s",
    "prate":"⭐⭐⭐⭐",
    "pdiscount":50,
    "pbrand":"sweeties",
    },
    {
        "id":2,
        "pname":"blackforest cake",
        "pprice":100,
        "pimage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiSVAlDXCSzcy9c9rjc8C5elTjLF2QM8y6ew&s",
        "prate":"⭐⭐⭐⭐⭐",
        "pdiscount":70,
        "pbrand":"sweeties2",
    },
    {
        "id":3,
        "pname":"blackforest cake",
        "pprice":100,
        "pimage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFWy6hN0Q6ec804eAkP2REkFsr3KJ-gxCw1Q&s",
        "prate":"⭐⭐⭐⭐⭐",
        "pdiscount":70,
        "pbrand":"sweeties2",
    },
   

];
let  store=document.querySelector("#output");
store.innerHTML=arr.map(p=>` <div id="card">
        <img src="${p.pimage}" width="200px" alt="">
        <div>${p.pname}</div>
        <div>${p.prate}</div>
        <div>${p.pprice}</div>
        <div>${p.pdiscount}</div>
        <div>${p.pbrand}</div>
    </div>`).join("")



console.log(arr[1].pname);
console.log(arr[0].id);

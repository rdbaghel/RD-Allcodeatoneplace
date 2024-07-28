let select = document.querySelector('.btn');
select.addEventListener('click',function show(){// used at the place of event like onmouseenter,onclick etc.
    let age = document.querySelector('.age').value;
    let name = document.querySelector('.name').value;
    let phone = document.querySelector('.phone').value;
    let gmail = document.querySelector('.gmail').value;
    console.log(age);

if(age<=18){
  window.alert('not eligible')
}
else if(age>18){
 window.alert('eligible')
}
else{
    ('not recognized')
}
})
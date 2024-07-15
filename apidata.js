function sub(){
    let id = document.querySelector('#id').value;
    let nam = document.querySelector('#name').value;
    let username = document.querySelector('#uname').value;
    let mobile = document.querySelector('#mobile').value;
    let password = document.querySelector('#pass').value;
    let cpassword = document.querySelector('#cpass').value;

    // console.log(id,nam,username,mobile,password,password_again);

    let obj = {
      "id":id,
      "name":nam,
      "username":username,
      "mobile":mobile,
      "pass":password,
      "cpass":cpassword
    }
      fetch('http://localhost:3000/signup',
    {
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(obj)

    })
    .then(response => response.json())
    .then(signup => console.log(signup));
}

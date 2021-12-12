//redirect to home page if user is logged in
window.onload = () => {
  if(sessionStorage.user){
    user = JSON.parse(sessionStorage.user);
    if(compareToken(user.authToken, user.email)){
      location.replace('/');
    }
  }
}


const loader = document.querySelector('.loader');

const submitBtn = document.querySelector(".submit");
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password')
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-and-cond') || null;


submitBtn.addEventListener("click", () => {
  if(name != null){
      if(name.value.length < 3){
      showAlert('name must be at least 3 characters')
    } else if(!email.value.length){
      showAlert('enter your email address');
    } else if(password.value.length < 4){
      showAlert('password should be at least 4 characters');
    } else if(!number.value.length){
      showAlert("enter your phone number");
    } else if(!Number(number.value)|| number.value.length<10){
      showAlert("invalid number input")
    } else if(!tac.checked){
      showAlert("please check the check box")
    } else{
      loader.style.display = 'block';
      sendData('/signup', {
        name:name.value,
        email:email.value,
        password:password.value,
        number:number.value,
        tac:tac.checked,
        seller:false
      })
    }
  } else{
    if (!email.value.length || !password.value.length){
      showAlert('fill all the inputs');
    } else {
      loader.style.display = 'block';
      sendData('/login', {
        email:email.value,
        password:password.value
      })
    }
  }
})

// //send data
// const sendData = (path,data) => {
//   fetch(path, {
//     method:'post',
//     headers: new Headers({'Content-Type': 'application/json'}),
//     body: JSON.stringify(data)
//   }).then((res) => res.json())
//   .then(response => {
//     processData(response);
//   })
// }


// const processData =(data) => {
//   loader.style.display = null;
//   if(data.alert){
//     showAlert(data.alert);
//   } else if(data.name){
//     data.authToken = generateToken(data.email);
//     sessionStorage.user = JSON.stringify(data);
//     location.replace('/');
//   }
// }

// const showAlert = (msg) => {
//   let alertBox = document.querySelector('.alert-box');
//   let alertMsg = document.querySelector('.alert-msg');
//   alertMsg.innerHTML = msg;
//   alertBox.classList.add('show');
//   setTimeout(() =>{
//     alertBox.classList.remove('show');
//   }, 3000);

// }
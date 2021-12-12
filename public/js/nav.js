const createNav = () =>{
  let nav = document.querySelector('.navbar');

  nav.innerHTML = `
    <div class="nav">
    <a href="/">
    <img src="../img/dark-logo.png" class="brand-logo" alt="">
    </a>
    <div class="nav-items">
      <div class="search">
        <input type="text" class="search-box" placeholder="Search">
        <button class='search-btn'>search</button>
      </div>
      <a>
        <img src="../img/user.png" id='user-img' alt="">
        <div class='login-logout-popup hide'>
          <p class='account-info'></p>
          <button class='btn' id='user-btn'>Log out</button>
        </div>
      </a>
      <a href="/cart"><img src="../img/cart.png" alt=""></a>
    </div>
  </div>
  <ul class='links-container'>
    <li class="link-item"><a href="/" class="link">Home</a></li>
    <li class="link-item"><a href="/get-products" class="link">Women</a></li>
    <li class="link-item"><a href="" class="link">Men</a></li>
    <li class="link-item"><a href="" class="link">Kids</a></li>
    <li class="link-item"><a href="/seller" class="link">Seller</a></li>
  </ul>
`;
}

createNav();

const userImageButton = document.querySelector('#user-img');
const userPop = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
  userPop.classList.toggle('hide');
})

window.onload = () => {
  let user = JSON.parse(sessionStorage.user || null);
  if(user != null) {
    popuptext.innerHTML =`welcome, ${user.name}`;
    actionBtn.innerHTML = 'Log out';
    actionBtn.addEventListener('click', () => {
      sessionStorage.clear();
      location.reload();
    })
  } else{
    popuptext.innerHTML ='login to place order';
    actionBtn.innerHTML='login';
    actionBtn.addEventListener('click', () => {
      location.href = '/login';
    })
  }
}

//search

const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector('.search-box');
searchBtn.addEventListener('click', () => {
  if(searchBox.value.length){
    location.href = `/search/${searchBox.value}`
  }
})
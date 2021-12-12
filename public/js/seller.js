let loader = document.querySelector('.loader');
let user = JSON.parse(sessionStorage.user || null);

const becomeSellerElement = document.querySelector('.become-seller');
const productListingElement = document.querySelector('.product-listing');
const applyForm = document.querySelector('.apply-form');
const showApplyFormBtn= document.querySelector('#apply-btn');

window.onload = () =>{
	if (user){
		if(compareToken(user.authToken, user.email)){
			if(!user.seller){
				becomeSellerElement.classList.remove('hide');
			}else{
				loader.style.display = 'block';
				setupProduct();
			}
		}else {
			location.replace('/login');
		}
	} else {
		location.replace('/login');
	}
}

showApplyFormBtn.addEventListener('click',()=>{
	becomeSellerElement.classList.add('hide');
	applyForm.classList.remove('hide');
})

//form submission

const applyFormBtn = document.querySelector('.submit-btn');
const businessName = document.querySelector('#business-name');
const address = document.querySelector('#business-address');
const about =document.querySelector('#about');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');



applyFormBtn.addEventListener('click', () => {
	if(!businessName.value.length || !address.value.length || !number.value.length || !about.value.length) {
		showAlert('fill all the inputs');
	} else if(!tac.checked) {
		showAlert('check the button');
	} else{
		//making server request
		loader.style.display = 'block';
		sendData('/seller', { 
			name: businessName.value, 
			address: address.value, 
			about: about.value, 
			number: number.value, 
			tac: tac.checked,
			email: JSON.parse(sessionStorage.user).email
		})
	}
})


const setupProduct = () =>{
	fetch('/get-products', {
		method: 'post',
		headers: new Headers({"Content-Type": "application/json"}),
		body: JSON.stringify({email: user.email})
	})
	.then(res =>res.json())
	.then(data => {
		loader.style.display = null;
		productListingElement.classList.remove('hide');
		if(data === ""){
			let emptySvg = document.querySelector('.no-product-image');
			emptySvg.style.remove('hide');
		} else{
			data.forEach(product => createProduct(product));
		}
	})
}
const createFooter = ()=> {
  let footer = document.querySelector('footer');
  footer.innerHTML =`
  <div class='footer-content'>
			<img src="../img/light-logo.png" class="logo" alt="">
			<div class="footer-ul-content">
				<ul class="category">
					<li class="category-title">Men</li>
					<li><a href="" class='footer-link'>t-shirts</a></li>
					<li><a href="" class='footer-link'>sweatshirts</a></li>
					<li><a href="" class='footer-link'>shirts</a></li>
					<li><a href="" class='footer-link'>jeans</a></li>
					<li><a href="" class='footer-link'>trousers</a></li>
					<li><a href="" class='footer-link'>shoes</a></li>
					<li><a href="" class='footer-link'>casuals</a></li>
					<li><a href="" class='footer-link'>formals</a></li>
					<li><a href="" class='footer-link'>sports</a></li>
				</ul>
				<ul class="category">
					<li class="category-title">Women</li>
					<li><a href="" class='footer-link'>t-shirts</a></li>
					<li><a href="" class='footer-link'>sweatshirts</a></li>
					<li><a href="" class='footer-link'>shirts</a></li>
					<li><a href="" class='footer-link'>jeans</a></li>
					<li><a href="" class='footer-link'>trousers</a></li>
					<li><a href="" class='footer-link'>shoes</a></li>
					<li><a href="" class='footer-link'>casuals</a></li>
					<li><a href="" class='footer-link'>formals</a></li>
					<li><a href="" class='footer-link'>sports</a></li>
				</ul>
			</div>
		</div>
		<p class="footer-title">about company</p>
			<p class='info'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Reiciendis aliquid, nulla porro quasi recusandae ratione consectetur,
				laborum itaque laudantium veritatis dolorum ipsa distinctio eaque similique,
				snemo tenetur modi quis commodi.</p>
			<p class="info">support emails - help@daulet.com,
				customer-support@daulet.com</p>
			<p class="info"> telephone number - 010-1000-1111, 02-124-5478</p>
			<div class="footer-social">
				<div>
					<a href="" class="social-link">terms & conditions</a>
					<a href="" class="social-link">Privacy Policy</a>
				</div>
				<div>
					<a href="" class="social-link">Instagram</a>
					<a href="" class="social-link">Facebook</a>
				</div>
			</div>
			<p class="footer-credit">Clothing, Best Online shop</p>
  `;
}

createFooter();
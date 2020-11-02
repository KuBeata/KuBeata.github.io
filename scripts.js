const burger = document.querySelector('.js-hamburger');
const nav = document.querySelector('.js-navigation');
const links = document.querySelectorAll("a");

burger.addEventListener('click', () => {
  const isActive = burger.classList.contains('active');
  if (isActive) {
      burger.classList.remove('active');
  } else{
      burger.classList.add('active');
  }
    
})


links.forEach(link => link.addEventListener("click", clickHandler));

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
      top: offsetTop,
      behavior: "smooth"
  })
}

const mybutton = document.getElementById("myBtn");

window.onscroll = () => scrollFunction();

function scrollFunction() {
  if (document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({top: 0, behavior: "smooth"});
}
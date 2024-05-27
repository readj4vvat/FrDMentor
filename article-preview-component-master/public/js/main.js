const articleFooter = document.querySelector('.article__footer');
const shareBtn = document.querySelector('.article__footer__btn')
shareBtn.addEventListener("click", (e) => {

  console.log("clicked")
  e.preventDefault()
  articleFooter.classList.toggle('article__footer--active')
})

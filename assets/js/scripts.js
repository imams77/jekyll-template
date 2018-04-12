// example
$(document).ready(() => {
  $('.example').addClass('active')
  setTimeout(() => {
    $('p').addClass('active')
  }, 1500)
  setTimeout(() => {
    $('.copy').addClass('active')
  }, 2300)
})
//
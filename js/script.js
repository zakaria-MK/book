$(document).ready(function () {

  $('.humberger-menu').click(function () {
    $('.navigation').toggleClass('change');
  })
  
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    console.log(position);
    if (position >= 200) {
      $('.line1').addClass('fromleft');
      $('.line2').addClass('fromright');
    } else {
      $('.line1').removeClass('fromleft');
      $('.line2').removeClass('fromright');
    }
  })

  $('.writters').click(function (event) {
    
    if (event.target.id.split('-')[0] === 'button') {
      $('#book-1').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book1.jpg');
      $('#book-2').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book2.jpg');
    }
  })
})
/*********Owl-carousel Function to customize plugin ************** */
$(document).ready(function () {
  $(".owl-one").owlCarousel({
    loop: true,
    items: 3,
    rtl: true,
    dots: false,
    margin: -20,
    autoplay: true,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });
  $(".owl-two").owlCarousel({
    loop: true,
    rtl: true,
    dots: false,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 4,
        nav: true,
        loop: true,
      },
    },
  });
});

/**********wow js init************** */

new WOW().init();



// Get all  buttons element  inside the Parent container
let numbersbutton = document.querySelectorAll(".numberbutton");

// Get the container element for ourworks cards
let cardsitem = document.querySelectorAll(".OurWorks-Cards, .articles-cards");


//loop through the buttons and add the active class by click on current button

for (let i = 0; i < numbersbutton.length; i++) {
  /*********active button Function*************/
  numbersbutton[i].addEventListener("click", function () {
    // get current element that have active class
    let current = document.querySelectorAll(".active");

    //loop through current element that has a active class
    for (let j = 0; j < current.length; j++) {
      //we get the current element that has a active class for remove it through the loop and add the active class to button that we clicked on it by the first loop (parent loop)
      current[j].classList.remove("active");
    }
    // here we add active class on button that we are clicked in
    this.classList.add("active"); // this refers to numbersbutton[i]

    //loop on ourworkitem
    for (let b = 0; b < cardsitem.length; b++) {
      cardsitem[b].classList.add("delete"); 
    }
 
    cardsitem[i].classList.remove("delete"); 
 
  });
}

$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});


//click on next and prev buttons  
$('.bi-arrow-right-square-fill').click(function() {

  $('.active').prev().trigger('click');
});
$('.bi-arrow-left-square-fill').click(function() {

  $('.active').next().trigger('click');
});
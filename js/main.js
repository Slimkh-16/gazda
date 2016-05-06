// preload
window.onload = function() {
  var body = document.body;
  setTimeout(function(){
    classie.add( body, 'onload');
  },2000);
  setTimeout(function(){
    document.querySelector('.preloader-container').style.display = "none"
  },3500);
  // testi();
  if(window.innerWidth > 992) {
    heightEL();
    heightBox();
    heighSh();
  }
  if(window.innerWidth > 767) {
    heightTable(); 
  }
  // header stick
  var bodyTop = document.body.scrollTop;
  if(bodyTop > 400) {
    document.querySelector('.mobile-header').classList.add('visible');
  } else {
    document.querySelector('.mobile-header').classList.remove('visible');
  }
  // header stick
  testi();
}
// testimonials
function testi() {
  var tesI =  document.querySelectorAll('.testimonials__info');
  var tesH = 0;
  var butt_tst = 0;
    for (var i = 0; i < tesI.length; ++i) {
      tesH = tesI[i].clientHeight;
      if (tesH > 160){
        tesI[i].parentNode.lastElementChild.style.display = "block";
      } else {
        tesI[i].classList.add('no-vv')
      }
    }
}
// testimonials
window.onresize = function() {
  if(window.outerWidth > 992) {
    heightEL();
    heightBox();
    heighSh();
  }
  if(window.outerWidth > 767) {
    heightTable(); 
  }
}
// preload
// top navigation
document.querySelector('.js_top_nav').onclick = function() {
  var topNav = document.querySelector('.top-nav-drop'),
      buttNav = this;
  classie.toggleClass( buttNav, 'active-nav');
  classie.toggleClass( topNav, 'active-nav');
}
// top navigation
// top navigation close
document.querySelector('.js_close_top_nav').onclick = function() {
  var topNav = document.querySelector('.top-nav-drop'),
      buttNav = document.querySelector('.js_top_nav');
  buttNav.classList.remove('active-nav');
  topNav.classList.remove('active-nav');
}
// top navigation close
// phone drop
document.querySelector('.js_phone-box').onclick = function() {
  var phoneDrop = document.querySelector('.phone-box__drop'),
      phoneButt = this;
  classie.toggleClass( phoneDrop, 'active-drop');
  classie.toggleClass( phoneButt, 'active-drop');
}
document.onclick = function() {
  if ($(event.target).closest(".js_phone-box,.phone-box__drop").length) {
    return
  }
  document.querySelector('.phone-box__drop').classList.remove('active-drop');
  document.querySelector('.js_phone-box').classList.remove('active-drop');
  event.stopPropagation();
}
// $(document).on('click',function(event) {
//   if ($(event.target).closest(".drop,.js-drop").length) {
//     return
//   }
//   $('.drop').slideUp();
//   event.stopPropagation();
// });
// phone drop
// search
function onFocus() {
  document.querySelector('.search_input').focus();
}
document.querySelector('.js_search').onclick = function() {
  var searchCont = document.querySelector('.search-container'),
      searchInput = searchCont.getElementsByTagName('input');
  document.body.classList.add('noscroll');
  classie.add( searchCont, 'active-search');
  setTimeout(function(){
    onFocus();
  },2000)
}
document.querySelector('.js_cl_search').onclick = function() {
  var searchCont = document.querySelector('.search-container');
  document.body.classList.remove('noscroll');
  classie.remove( searchCont, 'active-search');
}
document.onkeydown = function(evt) {
  if (evt.keyCode == 27) {
    var searchCont = document.querySelector('.search-container');
    document.body.classList.remove('noscroll');
    classie.remove( searchCont, 'active-search');
    $('.modal').modal('hide');
  }
}
// search
// height block
function heightEL(){
  var elH = document.getElementsByClassName("nav-item__holder");
  var maxHeight = 0;
  for (var i = 0; i < elH.length; ++i) {
    elH[i].style.height = "";
    if (maxHeight < elH[i].clientHeight) {
      maxHeight = elH[i].clientHeight; 
    }
  }
  for (var i = 0; i < elH.length; ++i) {
    elH[i].style.height = maxHeight + "px";
  }
}
function heightBox(){
  var boxEl = document.getElementsByClassName("box-item");
  var maxH = 0;
  for (var i = 0; i < boxEl.length; ++i) {
    boxEl[i].style.height = "";
    if (maxH < boxEl[i].clientHeight) {
      maxH = boxEl[i].clientHeight; 
    }
  }
  for (var i = 0; i < boxEl.length; ++i) {
    boxEl[i].style.height = maxH + "px";
  }
}
function heighSh(){
  var boxSh = document.getElementsByClassName("payment-item__info");
  var maxSh = 0;
  for (var i = 0; i < boxSh.length; ++i) {
    // boxSh[i].removeAttribute("style");
    boxSh[i].style.height = "";
    if (maxSh < boxSh[i].offsetHeight) {
      maxSh = boxSh[i].offsetHeight; 
    }
  }
  for (var i = 0; i < boxSh.length; ++i) {
    boxSh[i].style.height = maxSh + "px";
  }
}
function heightTable(){
  var elT = document.getElementsByClassName("post-item__info"),
      elI = document.getElementsByClassName("post-item__img");
  var maxHT = 0;
  for (var i = 0; i < elT.length; ++i) {
    elT[i].style.height = "";
    elI[i].style.height = "";
    if (maxHT < elT[i].clientHeight) {
      maxHT = elT[i].clientHeight; 
    }
  }
  for (var i = 0; i < elT.length; ++i) {
    elT[i].style.height = maxHT + "px";
    elI[i].style.height = maxHT + "px";
  }
}
// height block
// input animation
(function() {
  if (!String.prototype.trim) {
    (function() {
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
        return this.replace(rtrim, '');
      };
    })();
  }

  [].slice.call( document.querySelectorAll( '.input-anim' ) ).forEach( function( inputEl ) {
    if( inputEl.value.trim() !== '' ) {
      classie.add( inputEl.parentNode, 'input--filled' );
    }

    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  } );

  function onInputFocus( ev ) {
    classie.add( ev.target.parentNode, 'input--filled' );
  }
  function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' ) {
      classie.remove( ev.target.parentNode, 'input--filled' );
    }
  }
})();
// input animation
// swiper slider
var swiper = new Swiper('.arcticle-slider-post', {
    nextButton: '.slider-button-post-next',
    prevButton: '.slider-button-post-prev',
    // spaceBetween: 30,
    loop: true
});
var swiper = new Swiper('.arcticle-slider-news', {
    nextButton: '.slider-button-news-next',
    prevButton: '.slider-button-news-prev',
    // spaceBetween: 30,
    loop: true
});
var swiper = new Swiper('.sertificat-slider', {
    slidesPerView: 5,
    spaceBetween: 40,
    breakpoints: {
       1300: {
           slidesPerView: 4,
           spaceBetween: 30
       },
       768: {
           slidesPerView: 3,
           spaceBetween: 20
       },
       640: {
           slidesPerView: 2,
           spaceBetween: 10
       },
       450: {
           slidesPerView: 1,
           spaceBetween: 0
       }
    },
    loop: false,
    nextButton: '.sertificat-slider-next',
    prevButton: '.sertificat-slider-prev',
});
var swiper = new Swiper('.gallery-slider', {
    nextButton: '.gallery-slider-next',
    prevButton: '.gallery-slider-prev',
    spaceBetween: 4,
    loop: true
});
var swiper = new Swiper('.slider-pr', {
    slidesPerView: 5,
    spaceBetween: 0,
    breakpoints: {
       1300: {
           slidesPerView: 4,
           spaceBetween: 0
       },
       768: {
           slidesPerView: 3,
           spaceBetween: 0
       },
       640: {
           slidesPerView: 2,
           spaceBetween: 0
       },
       450: {
           slidesPerView: 1,
           spaceBetween: 0
       }
    },
    loop: false,
    nextButton: '.slider-pr-next',
    prevButton: '.slider-pr-prev',
});
// swiper slider
// header stick
var offTopheader = document.querySelector('.bottom-header').offsetTop,
    heightHeaderB = document.querySelector('.bottom-header').clientHeight;
window.onscroll = function() {
  var bodyTop = document.body.scrollTop;
  if(bodyTop > 400) {
    document.querySelector('.mobile-header').classList.add('visible');
  } else {
    document.querySelector('.mobile-header').classList.remove('visible');
  }
  if(bodyTop > offTopheader && window.innerWidth > 992) {
    document.querySelector('.bottom-header').classList.add('fix');
    document.getElementById('wrapper').style.paddingTop = heightHeaderB + 'px'
  } else {
    document.querySelector('.bottom-header').classList.remove('fix');
    document.getElementById('wrapper').style.paddingTop = 0;
  }
  if(bodyTop > 800) {
    document.querySelector('.js_to_top').classList.add('visible');
  }else {
    document.querySelector('.js_to_top').classList.remove('visible');
  }
};
function goTop() {
  window.scrollBy(0,-70);
  if (window.pageYOffset > 0) {
    requestAnimationFrame(goTop);
  }
};
document.querySelector('.js_to_top').onclick = function(){
  goTop();
}
// header stick
$(window).load(function(){
  $('.nav-top').mmenu({
    extensions  : [ 'effect-slide-menu', 'pageshadow' ],
    searchfield : false,
    counters  : true, 
    navbars   : [
      {
        position  : 'top',
        // content   : [ 'searchfield' ]
      }, {
        position  : 'top',
        content   : [
          'prev',
          
          'close'
          ]
        },
      ]
    });
});
$(document).ready(function() {
  // testi
  $('.js_more').on('click',function(){
    $(this).parents('.testimonials-item').find('.testimonials__info').addClass('full-tst');
    $(this).hide();
  })
  // autocolumn
  $('.top-nav-drop ul').autocolumnlist({
      columns: 3
  });
  $('.contact-list ul').autocolumnlist({
      columns: 2
  });
  // autocolumn
  // mask
  $('input[data-validate="phone"]').mask("+3(999)999 99 99");   
  // mask
  // slider revolution
  $('.rev_slider').revolution(
    {
      delay:8000,
      startwidth:1900,
      startheight:690,
      hideThumbs:0,
      fullWidth:"on",
      forceFullWidth:"on",
      navigationType:"bullet",            
      navigationArrows:"verticalcentered",            
      navigationStyle:"square-old",        
      navOffsetHorizontal:100,
      navOffsetVertical:10,   
      touchenabled:"on",         
      onHoverStop:"on",                  
      shadow:0  
  });
  // slider revolution
  if($.browser.mozilla){
    if($.browser.version < '30'){
      alert('Обновите брaузер')
    }
  }
  // timer
  var clock = $('.your-clock').FlipClock(3600 * 24 * 3, {
    clockFace: 'DailyCounter',
    countdown: true,
    showSeconds: false,
    language:'Russian'
  });
  $('.map-box__item').on('click', function() {
    if ($(this).hasClass('open')) {
        $('.map-box__item').removeClass('open');
        $(this).removeClass('open');
        $('.map-box__hidden').slideUp();
    } else {
        $('.map-box__hidden').slideUp();
        $('.map-box__item').removeClass('open');
        $(this).addClass('open');
        $(this).find('.map-box__hidden').slideDown();
    }
    return false
  });
  // validate form
  $('.js_validate button[type="submit"]').on("click", function(){
    return validate($(this).parent(".js_validate"));
  }); 
  // validate form
  // map google
  $(window).load(function(){
    if ($('#map_1').length) {
    var latX = 50.471141,
        latY = 30.450782;
      initialize(latX, latY);
    }
  })
  $('.map-box__head').on('click', function(){
    var latX = $(this).attr('data-x');
    var latY = $(this).attr('data-y');
    initialize(latX, latY);
  });
  var stylesArray2 = 
    [
      {
        "featureType": "water",
        "stylers": [{
            "color": "#66C9FA"
          }, {
              "visibility": "on"
          }]
        },
        {
            "featureType": "landscape",
          "stylers": [{
              "color": "#f2f2f2"
          }]
        }, {
          "featureType": "road",
          "stylers": [{
              "saturation": -100
            }, {
                "lightness": 45
          }]
        }, {
          "featureType": "road.highway",
          "stylers": [{
              "visibility": "simplified"
          }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#444444"
            }]
        }, {
            "featureType": "transit",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "visibility": "off"
            }]
      }];
  function initialize(latX, latY) {
    var myLatlng = new google.maps.LatLng(latX, latY);
    var mapOptions = {
      zoom: 15,
      center: myLatlng,
      scrollwheel: false,
      disableDefaultUI: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles:stylesArray2
    };
    var map = new google.maps.Map(document.getElementById('map_1'), mapOptions);
    var markers = [
      {latLng:[50.471141, 30.450782]},
      {latLng:[50.433508, 30.622699]},
      {latLng:[50.427166, 30.594889]},
      {latLng:[50.441380, 30.536181]},
    ];
    for(i in markers) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(markers[i].latLng[0],markers[i].latLng[1]),
        map: map,
        icon: 'images/marker.png'
      });
    }
  };
  // map google
  $('input, textarea').placeholder();
  // modal
  $(".modal").on("show.bs.modal", function(){
        var $bodyWidth = $("body").width();
    $("body").css({'overflow-y': "hidden"});//.css({'padding-right': ($("body").width()-$bodyWidth)});
  });
  $(".modal").on("hidden.bs.modal", function(){
    $("body").css({'padding-right': "0",'overflow-y': "auto"});
  });
  // modal
});
// validate form
function validate(form){
    var error_class = "error";
    var norma_class = "pass";
    var item        = form.find("[required]");
    var e           = 0;
    var reg         = undefined;
    var pass        = form.find('.password').val();
    var pass_1      = form.find('.password_1').val();
    var email       = false;
    var password    = false;
    var phone       = false;
    function mark (object, expression) {
        if (expression) {
            object.parent('div').addClass(error_class).removeClass(norma_class).find('.error_text').show();
            e++;
        } else
            object.parent('div').addClass(norma_class).removeClass(error_class).find('.error_text').hide();
    }
    form.find("[required]").each(function(){
        switch($(this).attr("data-validate")) {
            case undefined:
                mark ($(this), $.trim($(this).val()).length === 0);
            break;
            case "email":
                email = true;
                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                email = false;
            break;
            case "phone":
                phone = true;
                reg = /[0-9 -()+]{10}$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                phone = false;
            break;
            case "pass":
                password = true;
                reg = /^[a-zA-Z0-9_-]{6,}$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                password = false;
            break;
            case "pass1":
                mark ($(this), (pass_1 !== pass || $.trim($(this).val()).length === 0));
            break;
            default:
                reg = new RegExp($(this).attr("data-validate"), "g");
                mark ($(this), !reg.test($.trim($(this).val())));
            break
        }
    })
    $('.js_valid_radio').each(function(){
        var inp = $(this).find('input.required');
        var rezalt = 0;
        for (var i = 0; i < inp.length; i++) {
            if ($(inp[i]).is(':checked') === true) {
                rezalt = 1;
                break;
            } else {
                rezalt = 0;
            }
        }
        if (rezalt === 0) {
           $(this).addClass(error_class).removeClass(norma_class);
            e=1;
        } else {
            $(this).addClass(norma_class).removeClass(error_class);
        }
    })
    if (e == 0) {
     return true;
    }
    else {
        form.find("."+error_class+" input:first").focus();
        return false;
    }
}
// validate form 
/*! http://mths.be/placeholder v2.0.7 by @mathias */
$(function(window, document, $) {

 // Opera Mini v7 doesn t support placeholder although its DOM seems to indicate so
 var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
 var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
 var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
 var prototype = $.fn;
 var valHooks = $.valHooks;
 var propHooks = $.propHooks;
 var hooks;
 var placeholder;

 if (isInputSupported && isTextareaSupported) {

  placeholder = prototype.placeholder = function() {
   return this;
  };

  placeholder.input = placeholder.textarea = true;

 } else {

  placeholder = prototype.placeholder = function() {
   var $this = this;
   $this
    .filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
    .not('.placeholder')
    .bind({
     'focus.placeholder': clearPlaceholder,
     'blur.placeholder': setPlaceholder
    })
    .data('placeholder-enabled', true)
    .trigger('blur.placeholder');
   return $this;
  };

  placeholder.input = isInputSupported;
  placeholder.textarea = isTextareaSupported;

  hooks = {
   'get': function(element) {
    var $element = $(element);

    var $passwordInput = $element.data('placeholder-password');
    if ($passwordInput) {
     return $passwordInput[0].value;
    }

    return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
   },
   'set': function(element, value) {
    var $element = $(element);

    var $passwordInput = $element.data('placeholder-password');
    if ($passwordInput) {
     return $passwordInput[0].value = value;
    }

    if (!$element.data('placeholder-enabled')) {
     return element.value = value;
    }
    if (value == '') {
     element.value = value;
     // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
     if (element != safeActiveElement()) {
      // We can't use `triggerHandler` here because of dummy text/password inputs :(
      setPlaceholder.call(element);
     }
    } else if ($element.hasClass('placeholder')) {
     clearPlaceholder.call(element, true, value) || (element.value = value);
    } else {
     element.value = value;
    }
    // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
    return $element;
   }
  };

  if (!isInputSupported) {
   valHooks.input = hooks;
   propHooks.value = hooks;
  }
  if (!isTextareaSupported) {
   valHooks.textarea = hooks;
   propHooks.value = hooks;
  }

  $(function() {
   // Look for forms
   $(document).delegate('form', 'submit.placeholder', function() {
    // Clear the placeholder values so they don't get submitted
    var $inputs = $('.placeholder', this).each(clearPlaceholder);
    setTimeout(function() {
     $inputs.each(setPlaceholder);
    }, 10);
   });
  });

  // Clear placeholder values upon page reload
  $(window).bind('beforeunload.placeholder', function() {
   $('.placeholder').each(function() {
    this.value = '';
   });
  });

 }

 function args(elem) {
  // Return an object of element attributes
  var newAttrs = {};
  var rinlinejQuery = /^jQuery\d+$/;
  $.each(elem.attributes, function(i, attr) {
   if (attr.specified && !rinlinejQuery.test(attr.name)) {
    newAttrs[attr.name] = attr.value;
   }
  });
  return newAttrs;
 }

 function clearPlaceholder(event, value) {
  var input = this;
  var $input = $(input);
  if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
   if ($input.data('placeholder-password')) {
    $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
    // If `clearPlaceholder` was called from `$.valHooks.input.set`
    if (event === true) {
     return $input[0].value = value;
    }
    $input.focus();
   } else {
    input.value = '';
    $input.removeClass('placeholder');
    input == safeActiveElement() && input.select();
   }
  }
 }

 function setPlaceholder() {
  var $replacement;
  var input = this;
  var $input = $(input);
  var id = this.id;
  if (input.value == '') {
   if (input.type == 'password') {
    if (!$input.data('placeholder-textinput')) {
     try {
      $replacement = $input.clone().attr({ 'type': 'text' });
     } catch(e) {
      $replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
     }
     $replacement
      .removeAttr('name')
      .data({
       'placeholder-password': $input,
       'placeholder-id': id
      })
      .bind('focus.placeholder', clearPlaceholder);
     $input
      .data({
       'placeholder-textinput': $replacement,
       'placeholder-id': id
      })
      .before($replacement);
    }
    $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
    // Note: `$input[0] != input` now!
   }
   $input.addClass('placeholder');
   $input[0].value = $input.attr('placeholder');
  } else {
   $input.removeClass('placeholder');
  }
 }

 function safeActiveElement() {
  // Avoid IE9 `document.activeElement` of death
  // https://github.com/mathiasbynens/jquery-placeholder/pull/99
  try {
   return document.activeElement;
  } catch (err) {}
 }
 

}(this, document, jQuery));



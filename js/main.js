$(document).ready(function() {
    $('.offer__box__slider').slick({
        slidesToShow: 1,
        autoplay: true,
        dots: true,
        arrows: false,
    });

    $('.start').on('click', function (e) {
      e.preventDefault();
      $('.quiz--start').toggleClass('quiz--open');
      $('body').toggleClass('body--fixed');
    });

    $('.quiz__close').on('click', function (e) {
      e.preventDefault();
      $('.quiz').removeClass('quiz--open');
      $('body').removeClass('body--fixed');
    });

    $('.offer__box__link').click(function (e) {
        e.preventDefault();
        let elem = e.target;
        let id = '1' + elem.getAttribute('id');
        $('.offer__box__content').removeClass('offer__box__content--active');
        $('.offer__box__link').removeClass('offer__box__link--active');
        jQuery("#"+id).addClass('offer__box__content--active');
        let idElem = elem.getAttribute('id');
        jQuery("#"+idElem).addClass('offer__box__link--active');
	  });

    $('.open--modal').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal--open')
      $('body').addClass('body--fixed')
    })

    $('.modal__close').click(function (e) {
      e.preventDefault();
      $('.modal').removeClass('modal--open')
      $('body').removeClass('body--fixed')
    })

    $('.click-next-galery').click(function (e) {
        e.preventDefault();
        let elem = e.target;
        let id = '1' + elem.getAttribute('id');
        $('.gallery__box').removeClass('gallery__box--active');
        console.log(id)
        jQuery("#"+id).addClass('gallery__box--active');
    })

    const questionMap = new Map(
      [
          ['1', 'Określenie rodzaju kuchni'],
          ['2', 'Jaki styl we wnętrzach preferujesz?'],
          ['3', 'Jaki materiał planowany na meble?'],
          ['4', 'Jaki kolor?'],
          ['5', 'Ile metrów w pokoju, w którym planowane są meble'],
          ['6', 'Jaki jest budżet?'],
          ['7', 'Jakie są terminy realizacji projektu?']
      ]
    );

    let question1Answer = '';
    let nextQuestion = '';
    $('.quiz__send').click(function(e) {
      e.preventDefault();
      let btn = e.target;
      let id = btn.getAttribute('id');
      let answer = '';
      let question = questionMap.get(id);
      let numberQuestion;
      let newHtml = '';
      if(id < 5){
        let checkboxes = document.getElementsByName('answer'+id);
        for (let i= 0; i<checkboxes.length; i++)
        {
          if (checkboxes[i].checked === true)
            {
              answer = checkboxes[i].value;
            }
        }
      }
      if(id > 4){
        answer = document.getElementById('answer'+id).value;
      }
      
      question1Answer = question1Answer + question + ': ' + answer + '<br/>';
      numberQuestion = parseInt(id) + 1;
      numberQuestion = '' + numberQuestion;
      nextQuestion = questionMap.get(numberQuestion);
      if(numberQuestion == 2) {
        newHtml = newHtml + '<div class="quiz__answer__items quiz__answer__items--bg quiz__answer__items--bg-one"> <div class="quiz__answer__items__footer quiz__answer__items__footer--bg"> <input class="radio" type="radio" id="radio21" name="answer2" value="Skandynawski"> <label class="quiz__answer__radio--img-label" for="radio21">Skandynawski</label> </div> </div> <div class="quiz__answer__items quiz__answer__items--bg quiz__answer__items--bg-two"> <div class="quiz__answer__items__footer quiz__answer__items__footer--bg"> <input class="radio" type="radio" id="radio22" name="answer2" value="loft"> <label class="quiz__answer__radio--img-label" for="radio22">loft</label> </div> </div> <div class="quiz__answer__items quiz__answer__items--bg quiz__answer__items--bg-three"> <div class="quiz__answer__items__footer quiz__answer__items__footer--bg"> <input class="radio" type="radio" id="radio23" name="answer2" value="Klasiczny"> <label class="quiz__answer__radio--img-label" for="radio23">Klasiczny</label> </div> </div> <div class="quiz__answer__items quiz__answer__items--bg quiz__answer__items--bg-four"> <div class="quiz__answer__items__footer quiz__answer__items__footer--bg"> <input class="radio" type="radio" id="radio24" name="answer2" value="Bezpośrednio"> <label class="quiz__answer__radio--img-label" for="radio24">Bezpośrednio</label> </div> </div>';
      }
      if(numberQuestion == 3) {
        $('.quiz__answer__box').addClass('quiz__answer__box--three-columns')
        newHtml = newHtml + '<div class="quiz__answer__items quiz__answer__items--bg quiz__answer__items--bg-one-material"> <div class="quiz__answer__items__footer quiz__answer__items__footer--bg"> <input class="radio" type="radio" id="radio31" name="answer3" value="Plyty laminowane"> <label class="quiz__answer__radio--img-label" for="radio31">Plyty laminowane</label> </div> </div> <div class="quiz__answer__items quiz__answer__items--bg quiz__answer__items--bg-two-material"> <div class="quiz__answer__items__footer quiz__answer__items__footer--bg"> <input class="radio" type="radio" id="radio32" name="answer3" value="Plyty lakierowany mdf"> <label class="quiz__answer__radio--img-label" for="radio32">Plyty lakierowany mdf</label> </div> </div> <div class="quiz__answer__items quiz__answer__items--bg quiz__answer__items--bg-three-material"> <div class="quiz__answer__items__footer quiz__answer__items__footer--bg"> <input class="radio" type="radio" id="radio33" name="answer3" value="Plyty fornirowane"> <label class="quiz__answer__radio--img-label" for="radio33">Plyty fornirowane</label> </div> </div>';
      }
      if(numberQuestion == 4) {
        $('.quiz__answer__box').removeClass('quiz__answer__box--three-columns')
        $('.quiz__answer__box').addClass('quiz__answer__box--one-columns')
        newHtml = newHtml + '<div class="quiz__answer__items quiz__answer__items--hnull"> <div class="quiz__answer__items__footer"> <input class="radio" type="radio" id="radio41" name="answer4" value="Plyty laminowane"> <label class="quiz__answer__radio--img-label" for="radio41">Plyty laminowane</label> </div> </div> <div class="quiz__answer__items quiz__answer__items--hnull"> <div class="quiz__answer__items__footer"> <input class="radio" type="radio" id="radio42" name="answer4" value="Plyty lakierowany mdf"> <label class="quiz__answer__radio--img-label" for="radio42">Plyty lakierowany mdf</label> </div> </div>';
      }
      if(numberQuestion == 5) {
        newHtml = newHtml + '<div class="quiz__answer__items quiz__answer__items--hnull"> <div class="quiz__answer__items__footer quiz__answer__items__footer--input"> <input class="quiz__answer__input" type="input" name="answer5" id="answer5" placeholder="Swoj wariant:"> </div> </div>';
      }
      if(numberQuestion == 6) {
        newHtml = newHtml + '<div class="quiz__answer__items quiz__answer__items--hnull"> <div class="quiz__answer__items__footer quiz__answer__items__footer--input"> <input class="quiz__answer__input" type="input" name="answer6" id="answer6" placeholder="Swoj wariant:"> </div> </div> <div class="warning"> <div class="warning__img"> <img src="img/warning.png" alt=""> </div> <p>Cena konieczna zależy od wybranych materiałów i akceptuje się podczas spotkania</p> </div>';
      }
      if(numberQuestion == 7) {
        newHtml = newHtml + '<div class="quiz__answer__items quiz__answer__items--hnull"> <div class="quiz__answer__items__footer quiz__answer__items__footer--input"> <input class="quiz__answer__input" type="input" name="answer7" id="answer7" placeholder="Swoj wariant:"> </div> </div>';
      }
      if(numberQuestion == 8){
        $('.quiz--start').toggleClass('quiz--open');
        $('.quiz--finish').toggleClass('quiz--open');
        return false;
      }
      if(numberQuestion < 8) {
        $(".quiz__question__title").html(nextQuestion);
        $(".quiz__question__number").html('Pytanie '+numberQuestion+' z 7');
        $(".quiz__send--id").attr("id", numberQuestion);
        $(".quiz__answer__box").html(newHtml);
      }
    })

    /* Ajax Quiz Send*/
    $('#quiz-send').click(function(e){
      e.preventDefault();
      x = document.getElementById('quizname').value;
      if (x === "") {
          document.getElementById('quiz-error').textContent = "Wpisz swoje imię";
          return false;
      }
      x =  document.getElementById('quizemail').value;
        if (x === "") {
            document.getElementById('quiz-error').textContent = "Wprowadź swój email";
            return false;
        } else {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(x)){
                document.getElementById('quiz-error').textContent = "Niepoprawny email";
                return false;
            }
      }
      x = document.getElementById('quizphone').value;
      if (x === "") {
          document.getElementById('quiz-error').textContent = "Wprowadź swój numer telefonu";
          return false;
      } else {
              let re = /^\+48[0-9]{9}$/g;
              if(!re.test(x)){
                  document.getElementById('quiz-error').textContent = "Wprowadź swój numer telefonu w formacie +48ХХХХХХХХХXX";
              return false;
          }
      }
      $('#quiz-error').removeClass("error");
      document.getElementById('quiz-error').textContent = "Wysyłanie...";
      data = new FormData();
      data.append( 'firstname', $('input[name=quizname]').val());
      data.append( 'phone', $('input[name=quizphone]').val());
      data.append( 'email', $('input[name=quizemail]').val());
      data.append( 'answer', question1Answer);
      const uploadField = document.getElementById("file");
      if(uploadField.files.length >= 6){
          document.getElementById('quiz-error').textContent = "Zabrania się przesyłania więcej niż 5 plików";
          return false;
      }
      if(uploadField.files.length >=1){
          for (let i = 0; i < uploadField.files.length; i++){ 
              if(uploadField.files[i].size > 1048576){
                  document.getElementById('quiz-error').textContent = "Rozmiar pliku nie może przekraczać 1 MB";
                  return false;
              }
              if ( /\.(jpe?g|png|PNG|gif|tif|doc|docx|xls|xlsx|csv|pdf|txt|zip|rar)$/i.test(uploadField.files[i].name) === false ){
                  document.getElementById('quiz-error').textContent = "Nieprawidłowy format pliku"; 
                  return false;
              }
              data.append('file[]', document.getElementById('file').files[i] );
          }
      }
      $.ajax({
        url: './quiz-mail.php',
        type: "POST",
        data: data,
              processData: false,
              contentType: false,
        success: function() {
          $('#quiz-form').trigger('reset');
          $('#quiz-error').text("Twoja wiadomość została wysłana!");
          setTimeout(function () {
            $('#quiz-error').text("").addClass("error");
          }, 2000);
        },
        error: function (jqXHR) {
          $('#quiz-error').text(jqXHR);
        }
      });
    });


    /* Ajax Footer Form*/
      $('#send').click(function(e){
        e.preventDefault();
        x = document.getElementById('firstname').value;
        if (x === "") {
            document.getElementById('status').textContent = "Wpisz swoje imię";
            return false;
        }
        x =  document.getElementById('email').value;
        if (x === "") {
            document.getElementById('quiz-error').textContent = "Wprowadź swój email";
            return false;
        } else {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(x)){
                document.getElementById('status').textContent = "Niepoprawny email";
                return false;
            }
        }
        x = document.getElementById('phone').value;
        if (x === "") {
            document.getElementById('status').textContent = "Wprowadź swój numer telefonu";
            return false;
        } else {
                let re = /^\+48[0-9]{9}$/g;
                if(!re.test(x)){
                    document.getElementById('status').textContent = "Wprowadź swój numer telefonu w formacie +48ХХХХХХХХХXX";
                return false;
            }
        }
        $('#status').removeClass("quiz--error");
        document.getElementById('status').textContent = "Wysyłanie...";
        const FormData = {
            'firstname': $('input[name=firstname]').val(),
            'phone': $('input[name=phone]').val(),
            'email': $('input[name=email]').val(),
        };
          $.ajax({
            url: './mail.php',
            type: "POST",
            data: FormData,
            success: function() {
              $('#form-footer').trigger('reset');
              $('#status').text("Twoja wiadomość została wysłana!");
              setTimeout(function () {
                $('#status').text("").addClass("quiz--error");
              }, 2000);
            },
            error: function (jqXHR) {
              $('#status').text(jqXHR);
            }
          });
        });

    $('.scrollto a').on('click', function scroll(e) {
		e.preventDefault();
		let href = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(href).offset().top - 95
		}, {
			duration: 370,
			easing: "linear"
		});
    $('.menu__list').removeClass('menu__list--active');
    $('body').removeClass('body--fixed')
		return false;
	});

    $('.work__box__link__head').click(function (e) {
        e.preventDefault();
        let elem = e.target;
		let id = '1' + elem.getAttribute('id');
		jQuery("#"+id).toggleClass('work__box__link__content--active');
	});

    $('.reviews__box').slick({
		mobileFirst: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		rows: 1,
		arrows: true,
		dots: false,
		autoplay: true,
		infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          dots: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 280,
        settings: {
          dots: false,
          slidesToShow: 1
        }
      }
    ]
	});
})
function openMenu(event) {
  event.preventDefault()
  const listMenu = document.querySelector('.menu__list');
  listMenu.classList.toggle('menu__list--active');
  $('body').toggleClass('body--fixed');
}
window.onscroll = function() {fixHeader()}

let header = document.querySelector('.header')
let sticky = header.offsetTop
let bodyTop = document.querySelector('body')

function fixHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header--sticky")
    bodyTop.classList.add("body--top")
  } else {
    header.classList.remove("header--sticky")
    bodyTop.classList.remove("body--top")
  }
}
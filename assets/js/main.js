$(document).ready(function () {

	// STICKY MENU //
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$("header").addClass('sticky-menu');
		} else {
			$("header").removeClass('sticky-menu');
		}
	});


	// SHOW & HIDE MENU //
	$(".menu-btn").click(function () {
		$(".main-menu").toggleClass("main-menu-show");
	});


	// COUNT UP
	$(".counter").counterUp({
		delay: 10,
		time: 2500
	});

	// WOW JS 
	new WOW().init();
	
	
	// LANGUAGE SELECT FORM
	$('.main-select').each(function () {
		var $this = $(this),
			numberOfOptions = $(this).children('.option').length;

		$this.addClass('select-hidden');
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('.option').eq(0).text());

		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('.option').eq(i).text(),
				rel: $this.children('.option').eq(i).val()
			}).appendTo($list);
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function (e) {
			e.stopPropagation();
			$('div.select-styled.active').not(this).each(function () {
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});

		$listItems.click(function (e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
			//console.log($this.val());
		});

		$(document).click(function () {
			$styledSelect.removeClass('active');
			$list.hide();
		});

	});

});




// HUMBURGER MENU ICON
    function myFunction(x) {
      x.classList.toggle('change');
    }

    // BACK TO TOP BUTTON
    var mybutton = document.getElementById('up__btn');

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.opacity = '1';
      } else {
        mybutton.style.opacity = '0';
      }
    }
    mybutton.addEventListener('click', topFunction);
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    /* const videoToggle = document.querySelectorAll('.video-play');

          function toggleVideoOpen() {
            const dataID = this.dataset.id;
            const video = document.querySelector(`.video[data-id="${dataID}"]`);
          }

          videoToggle.forEach((button) =>
            button.addEventListener('click', toggleVideoOpen)
          );
     */

    const videoSlider = document.querySelectorAll('.video-slide');

    let isPlaying = false;
    videoSlider.forEach((slide) => {
      slide.addEventListener('click', function (e) {
        let playButton = e.target.closest('.video-play');
        if (!playButton) return;

        let video = document.querySelector(
          `.video[data-id="${playButton.dataset.id}"]`
        );

        let videos = document.querySelectorAll('.video');

        videos.forEach((video) => {
          video.pause();
        });

        if (!isPlaying) {
          video.play();
          playButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
        <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
      </svg>`;
          isPlaying = true;
        } else {
          video.pause();
          playButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
      </svg>`;
          isPlaying = false;
        }
      });
    });

    // SLIDER
    var swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 2000,
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
      },
    });

    swiper.on('slideChange', function () {
      let videos = document.querySelectorAll('.video');

      videos.forEach((video) => {
        video.pause();
      });

      const playButtons = document.querySelectorAll('.video-play');

      playButtons.forEach(
        (playButton) =>
        (playButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
      </svg>`)
      );
    });
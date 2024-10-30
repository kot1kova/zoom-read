gsap.registerPlugin(ScrollTrigger)



// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
//   console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// 
// 
// 
const { innerHeight } = window

var elementOne = document.getElementById('element-one')

var parallaxInstance = new Parallax(elementOne, {
	relativeInput: true,
	pointerEvents: false,
})

var sceneOne = document.getElementById('scene-one')

var parallaxInstance = new Parallax(sceneOne, {
	relativeInput: true,
	pointerEvents: false,
})

var sceneTwo = document.getElementById('scene-two')

var parallaxInstance = new Parallax(sceneTwo, {
	relativeInput: true,
	pointerEvents: false,
})
var sceneLight1 = document.getElementById('scene-light')

var parallaxInstance = new Parallax(sceneLight1, {
	relativeInput: true,
	pointerEvents: false,
})

var sceneThree = document.getElementById('scene-three')

var parallaxInstance = new Parallax(sceneThree, {
	relativeInput: true,
	pointerEvents: false,
})


var sceneFooter = document.getElementById('scene-footer')

var parallaxInstance = new Parallax(sceneFooter, {
	relativeInput: true,
	pointerEvents: false,
})

// ===========================================
// ===========================================
// ===========================================
// ===========================================

gsap.to('.zoom__item', {
	scale: 13,
	ease: 'power2.inOut',
	// rotationX: 100,
	rotationZ: -200, 
	scrollTrigger: {
		trigger: '#zoom',
		start: 'top top',
		end: 'bottom bottom',
		pin: true,
		end: `+=${innerHeight * 2.2}`,
		scrub: 3,
		// rotation: -200,

		onLeave: () => gsap.to(zoom__item, { opacity: 0, duration: 0.2 }),
		onEnterBack: () => gsap.to(zoom__item, { opacity: 1, duration: 1 }),
		// markers: true,
	},
})

let timeline = gsap.timeline({
	scrollTrigger: {
		trigger: '#zoom',
		start: 'top +=30px',
		end: `+=${innerHeight * 1.5}`,
		// rotation: -200,

		// pin: true,
		scrub: 5,
		//   markers: true,  // Включить для отладки
	},
})

gsap.utils.toArray('.card').forEach((card, i) => {
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: card,
			start: 'top top',
			end: 'bottom +=420px',
			scrub: 5,
			pin: true,
			pinSpacing: false,
			// markers: true,
			onLeave: () => gsap.to(card, { opacity: 0, duration: 1, scale: 0.4 }),
			onEnterBack: () => gsap.to(card, { opacity: 1, duration: 1, scale: 1 }),
		},
	})

})

timeline.fromTo(
	'.zoom__info',

	{ opacity: 0, scale: 0.1 },
	{
		scrub: 5,
		opacity: 1,
		scale: 2,
		duration: 340,
		ease: 'power2.inOut', // Плавная анимация
	}
)

timeline.to('.zoom__info', {
	//   markers: true,
	scrub: 5,
	opacity: 0, // Исчезновение элемента
	scale: 4, // Элемент продолжает увеличиваться
	duration: 180, // Время на исчезновение
	ease: 'power2.inOut', // Плавная анимация
})

function animateCounters() {
	const counters = document.querySelectorAll('.stats__numb')

	counters.forEach(counter => {
		const target = +counter.getAttribute('data-target')

		// Создаем внутренний элемент для анимации, оставляя <span> неизменным
		const numText = document.createElement('span')
		numText.classList.add('num-text')
		numText.innerText = '0'
		counter.prepend(numText) // Вставляем <span> перед плюсом

		gsap.fromTo(
			numText,
			{ innerText: 0 },
			{
				innerText: target,
				duration: 3,
				scrollTrigger: {
					trigger: counter,
					start: 'top 80%',
					toggleActions: 'play none none none',
				},
				snap: { innerText: 1 },
				ease: 'power1.out',
				onUpdate: function () {
					numText.innerText = Math.ceil(numText.innerText)
				},
			}
		)
	})
}

// Запуск анимации при скролле к блоку
animateCounters()

var swiper = new Swiper(".review-slider", {
	loop: true,
	slidesPerView: 1,
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		375: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		1024: {
			slidesPerView: 1,
			spaceBetween: 30,
		},

	},
	navigation: {
	  nextEl: ".custom-next",
	},
  });



  gsap.to(".project__project-slow", {
	  y: -1200, 
	  scrollTrigger: {
		  trigger: ".project__wrapper",
		  start: "top top",
		  end: "bottom bottom",
		  scrub: true,
	  },
  });
  
  gsap.to(".project__project-medium", {
	  y: -500,
	  scrollTrigger: {
		  trigger: ".project__wrapper",
		  start: "top top",
		  end: "bottom bottom",
		  scrub: true,
		//   markers: true,

	  },
  });
// 
// 

// gsap.to(".banner__img", {
// 	y: -100,
// 	scrollTrigger: {
// 	  trigger: ".banner",
// 	  start: "top +=80%",
// 	  end: "bottom top",
// 	  scrub: true,
// 		//   markers: true,

// 	}
//   });


//   gsap.to(".banner__img-two", {
// 	y: -150,
// 	scrollTrigger: {
// 	  trigger: ".review__text",
// 	  start: "top +=80%",
// 	  end: "200% center",
// 	  scrub: true,
// 	//   markers: true,

// 	}
//   });


function setupScrollAnimations() {

    // Настройки для десктопа
    if (window.innerWidth > 768) {
        gsap.to(".project__project-slow", {
            y: -700,
            scrollTrigger: {
                trigger: ".project__wrapper",
                start: "top +=180px",
                end: "bottom top",
                scrub: true
            }
        });

        gsap.to(".project__project-medium", {
            y: -300,
            scrollTrigger: {
                trigger: ".project__wrapper",
                start: "top +=180px",
                end: "bottom top",
                scrub: true
            }
        });

     

    // Настройки для мобильных устройств
    } else {
        gsap.to(".project__project-slow", {
            y: -250, // Сниженная скорость на мобильных
            scrollTrigger: {
                trigger: ".project__wrapper",
                start: "top +=180px",
                end: "bottom top",
                scrub: true,
		//   markers: true,
				

            }
        });

        gsap.to(".project__project-medium", {
            y: -120,
            scrollTrigger: {
                trigger: ".project__wrapper",
                start: "top +=180px",
                end: "bottom top",
                scrub: true
            }
        });
    }
}

// Вызов функции для установки анимаций
setupScrollAnimations();

// Пересчёт анимаций при изменении размера экрана
window.addEventListener('resize', setupScrollAnimations);
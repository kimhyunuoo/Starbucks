// HEADER - BADGES BLUE
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector('#to-top')

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      gsap.to(toTopEl, .2, {
        x : 0
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      gsap.to(toTopEl, .2, {
        x : 100 
      });
    }
  }, 300)
);
toTopEl.addEventListener('click' , function() {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})


// VISUAL SECTION ANIMATION
const fadeEls = document.querySelectorAll(".visual .fade-in")
fadeEls.forEach(function(fadeEl, index) {
  /* 
  gsap.to(요소 , 지속시간 , {option})
  gsap 기능에 delay, opacity display 등등 많은 기능들이 들어 있음
  fadein을 복수로 사용하고 그것을 foreach로 각각 사용 
  함수 내부에 그것을 단수인 fadein 과 복수형태의 fade를 index 매개변수로 받아서 
  gsap 내부에서 사용 
  fadein (단수) : 각각의 css class를 잡을때 사용 매개변수 
  index : fadein을 numbering으로 사용한 매개변수를 delay에 사용
  */
  gsap.to(fadeEl, 1, {
    opacity : 1,
    delay : (index + 1) * .7
  });
});

//NOTICE LINE SWIPER SECTION
  
// 스와이퍼라는 생성자 함수 생성  // new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: "vertical",  //슬라이드에 방향 기본값 : horizontal
  autoplay : true, // 슬라이드의 반복적 재생
  loop : true // 슬라이드의 반복 재생의 반복
});

// PROMOTION SECTION SWIPER
new Swiper('.promotion .swiper-container', {
  slidesPerView : 3, //슬라이드가 보여질 갯수 
  spaceBetween : 10, // 슬라이드 사이의 간격
  centeredSlides : true, 
  loop : true, // 반복적인 재생 
  autoplay : {
    delay : 5000
  },
  pagination : {
    el : '.promotion .swiper-pagination',//page 번호 요소 선택자
    clickable : true
  },
  navigation : {
    prevEl : ".promotion .swiper-prev",
    nextEl : ".promotion .swiper-next"
  }
});
new Swiper('.awards .swiper-container', {
  autoplay : true,
  loop : true,
  spaceBetween : 30,
  slidesPerView : 5,  // 한번에 몇개의 내용을 보여줄지 지정
  navigation : {
    prevEl : ".awards .swiper-prev",
    nextEl : ".awards .swiper-next"
  }
})
// TOGGLE PROMOTION BUTTON
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle_promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click" , function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
})

// floating section

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay , size) {
  gsap.to(
    selector, // 선택자
    
    random(1.5, 2.5), //지속시간 :: 함수를 만들어서 랜덤한 지속시간 부여
    
    {  // 옵션
    y: size, // 매개변수를 명확한 size로 만들어서 축에 크기에 작성
    repeat : -1, // 반복적 재생
    yoyo : true,//  반복 재생 되는걸 부드럽게 애니메이션 처리
    ease: "power1.inOut", // 타이밍 함수를 표현해서 제어 가능
    delay : random(0, delay) // random 값과 동일 min / max를 사용
  })
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// 3D animation
// scroll magic
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      //보여짐 여부를 감시할 요소를 적용
      triggerElement: spyEl,
      // 뷰포트 상에 훅을 걸어서 보여짐 
      triggerHook : .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
});
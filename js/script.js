
//  swiper
 const swiper1 = new Swiper('.swap1', {
      slidesPerView: 3,
      loop: true,
      direction: getDirection(),
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 70 ? 'vertical' : 'horizontal';

      return direction;
    }

const swiper2 = new Swiper('.swap2', {
    // パラメータの指定
    loop: true,

    // ページネーション
    pagination: {
      el: '.swiper-pagination',
    },

    // 左右のボタン
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

/* スクロールで要素を上にフェードする（jQuery不要） */
(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_up , .scroll_left , .scroll_right');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      var elm = scrollAnimationElm[i];
      if (window.innerHeight > elm.getBoundingClientRect().top + triggerMargin) {
        elm.classList.add('on');
      } else {
        elm.classList.remove('on');
      }
    }
  };

  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
  window.addEventListener('resize', scrollAnimationFunc);
})();


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


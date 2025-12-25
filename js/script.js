
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
          this.changeDirection(getDirection());
        },
      },
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = windowWidth <= 768 ? 'vertical' : 'horizontal';

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
  var scrollAnimationElm = document.querySelectorAll('.scroll_up');
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

/* ヘッダーを読み込み時にフェードインさせる */
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;

  // 初期スタイルを設定（JSで行うことで追加のCSS編集を不要にする）
  header.style.opacity = '0';
  header.style.transform = 'translateY(-20px)';
  header.style.transition = 'opacity 600ms ease, transform 600ms ease';

  var showHeader = function () {
    // repaint を確実に行ってからスタイルを変更
    requestAnimationFrame(function () {
      header.style.opacity = '1';
      header.style.transform = 'translateY(0)';
    });
  };

  // load と DOMContentLoaded の両方に対応
  if (document.readyState === 'complete') {
    showHeader();
  } else {
    window.addEventListener('load', showHeader);
  }
})();

/* iOS 判定: iPhone / iPad のときに <html> に .ios を付与する */
(function () {
  try {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (isIOS) {
      document.documentElement.classList.add('ios');
    }
  } catch (e) {
    // fail silently
  }
})();


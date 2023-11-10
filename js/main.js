//ウィンドウ幅を取得
function getWindowWidth() {
  return window.innerWidth;
}

// ウィンドウの幅に応じてハンバーガーメニューを制御する関数
function controlHamburgerMenu() {
  if (getWindowWidth() < 768) {
    $(".hamburger-menu").removeClass("hamburger-menu--active");
  } else {
    $(".hamburger-menu").addClass("hamburger-menu--active");
  }
}

// 初期表示時とウィンドウのリサイズ時に制御関数を実行
$(document).ready(function () {
  controlHamburgerMenu();
  $(window).on('resize', controlHamburgerMenu);
});

//ハンバーガーボタン
$(document).ready(function () {
  $(".hamburger-button").on("click", function () {
    $(".hamburger-menu").toggleClass("hamburger-menu--active");
  })
});

//現在のリンクを停止
$(document).ready(function () {
  // 現在のページのURLを取得
  var currentURL = window.location.href;

  // 各リンクに対して処理
  $('.hamburger-menu__list a').each(function () {
    // リンクのhref属性を取得
    var linkHref = $(this).attr('href');

    // 相対パスを絶対パスに変換
    var absoluteLink = new URL(linkHref, currentURL).href;

    // もし現在のページのURLがリンクのURLで始まるなら
    if (currentURL.startsWith(absoluteLink)) {
      // リンクにdisabledクラスを追加し、クリックできなくする
      $(this).addClass('hamburger-menu__link--disabled');
    }
  });
});
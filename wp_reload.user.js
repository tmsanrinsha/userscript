// ==UserScript==
// @name        wp_reload
// @namespace   http://sanrinsha.lolipop.jp/
// @description WordPressをIt's All text!で編集して、textareaが変化したら、プレビューボタンをクリックするユーザースクリプト
// @version     1.0
// ==/UserScript==

(function() {
    var ta = document.getElementById("content");
    ta.addEventListener("change", function() {
        // It's All Text!によってtextareaのchangeイベントが発火したのかどうかをtextareaのbackground-colorで判定
        // background-colorの変化にタイムラグがあるため100ミリ秒待つ
        setTimeout(function() {
            if(ta.style.backgroundColor) {
                // このclickはIE,Firefoxでしか使えないので注意
                // http://yakinikunotare.boo.jp/orebase2/javascript/fire_click_event
                document.getElementById('post-preview').click();
            }
        }, 100);
    }, false);
})();

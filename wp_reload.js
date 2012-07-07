// ==UserScript==
// @name        wp_reload
// @namespace   http://sanrinsha.lolipop.jp/
// @include     http://sanrinsha.lolipop.jp/wp/wp-admin/post.php?post=*
// @version     1.0
// ==/UserScript==

(function() {
    var ta = document.getElementById("content");
    ta.addEventListener("change", function() {
        setTimeout(function() {
            if(ta.style.backgroundColor) {
                document.getElementById('post-preview').click();
            }
        }, 100);
    }, false);
})();

// ==UserScript==
// @name         Expand All PR Comments
// @description  Expand all GitHub PR comments including outdated ones.
// @author       skyjia
// @oujs:author  skyjia
// @namespace    https://github.com/skyjia
// @version      0.1.4
// @homepageURL  https://github.com/skyjia/expand-pr-comments/
// @supportURL   https://github.com/skyjia/expand-pr-comments/issues
// @updateURL    https://raw.githubusercontent.com/skyjia/expand-pr-comments/master/src/openuserjs.meta.js
// @include      /^https://github\.com/(\w|-)+/(\w|-)+/(pull|issues)/\d+/
// @run-at       document-body
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    'use strict';
    var expandAllComments = function () {
        Array.from(document.getElementsByClassName('js-comment-container')).forEach(l => l.setAttribute('open',''));
        Array.from(document.getElementsByClassName('Details-element')).forEach(l => l.setAttribute('open',''));
        var loadMoreBtn = Array.from(document.getElementsByClassName('ajax-pagination-btn'));
        if (loadMoreBtn.length > 0){
            loadMoreBtn.forEach(l => l.click());
            setTimeout(expandAllComments, 500);
        }
    };

    // Added a button in PR's action bar.
    var actionBar = document.getElementsByClassName('gh-header-actions')[0];
    if (actionBar) {
        var btnExpandAll = document.createElement('button');
        btnExpandAll.type='button';
        btnExpandAll.className="btn btn-sm";
        btnExpandAll.innerHTML='Expand All Comments';
        actionBar.appendChild(btnExpandAll);
        btnExpandAll.onclick = function () {
            expandAllComments();
        };
    }
})();


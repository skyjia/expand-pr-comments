// ==UserScript==
// @name         Expand All PR Comments
// @description  Expand all GitHub PR comments including outdated comments.
// @author       skyjia
// @namespace    https://github.com/skyjia
// @version      0.1
// @updateURL    https://github.com/skyjia/expand-pr-comments/blob/master/src/expand-pr-comments.js
// @downloadURL  https://github.com/skyjia/expand-pr-comments/blob/master/src/expand-pr-comments.js
// @homepageURL  https://github.com/skyjia/expand-pr-comments/
// @supportURL   https://github.com/skyjia/expand-pr-comments/issues
// @include      /^https://github\.com/(\w|-)+/(\w|-)+/pull/\d+/
// @run-at       document-body
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var expandAllComments = function () {
        Array.from(document.getElementsByClassName('outdated-comment')).forEach(l => l.classList.add('open'));
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

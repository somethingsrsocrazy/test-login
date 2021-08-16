// ==UserScript==
// @name         Erp auto login
// @version      1.0.2
// @namespace    https://newerp.kluniversity.in/
// @author       sandeep from kl
// @description  Auto login
// @updateURL    https://github.com/somethingsrsocrazy/test-login/raw/main/test.user.js
// @downloadURL  https://github.com/somethingsrsocrazy/test-login/raw/main/test.user.js
// @match        https://newerp.kluniversity.in/index.php
// @require      https://unpkg.com/tesseract.js@v2.1.1/dist/tesseract.min.js
// @require      https://cdn.jsdelivr.net/gh/somethingsrsocrazy/test-login@v1.0.0/test.js
// ==/UserScript==

// ------------- Change username&password Below -----------

var username = "**********";
var password = "**********";

// ------------- Change username&password Above -----------

// ========================================================

// ------------- do not modific the below area ------------
    var id = document.querySelector("#navbar2 > ul > li:nth-child(3) > a").click()
    function UandP() {
        document.getElementById("loginform-username").value = username;
        document.getElementById("loginform-password").value = password;
    }
    setTimeout(function() {
        UandP();
    }, 1500);
// ------------- do not modific the above area ------------

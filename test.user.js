// ==UserScript==
// @name         Erp auto login
// @version      1.0.3
// @namespace    https://newerp.kluniversity.in/
// @author       sandeep from kl
// @description  Auto login
// @match        https://newerp.kluniversity.in/
// @match        https://newerp.kluniversity.in/index.php
// @require      https://unpkg.com/tesseract.js@v2.1.1/dist/tesseract.min.js
// @require      https://raw.githubusercontent.com/somethingsrsocrazy/test-login/main/test.js
// @updateURL    https://github.com/somethingsrsocrazy/test-login/raw/main/test.user.js
// @downloadURL  https://github.com/somethingsrsocrazy/test-login/raw/main/test.user.js
// ==/UserScript==


// ------------- Change username&password Below -----------

var username = "**********";
var password = "**********";

// ------------- Change username&password Above -----------
// ========================================================
// ------------- Do not Change the Below ------------------

var loginclick = document.querySelector("#navbar2 > ul > li:nth-child(3) > a").click()
setTimeout(function() {UandP();}, 500);
setTimeout(function() {solver();}, 1000);

// ------------- Do not Change the Above ------------------

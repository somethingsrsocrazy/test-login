// ==UserScript==
// @name         Erp auto login
// @version      1.0.4
// @namespace    https://newerp.kluniversity.in/
// @author       sandeep from kl-BCA
// @description  Auto login
// @match        https://newerp.kluniversity.in/
// @match        https://newerp.kluniversity.in/index.php
// @require      https://unpkg.com/tesseract.js@2.1.1/dist/tesseract.min.js
// @require      https://unpkg.com/tesseract.js@2.1.1/dist/worker.min.js
// @require      https://unpkg.com/tesseract.js-core@2.2.0/tesseract-core.wasm.js
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

var loginclick = document.querySelector("#mobile_bg > div:nth-child(1) > div:nth-child(1) > div > div > div > a:nth-child(1)").click()
setTimeout(function() {UandP();progress_bar();}, 500);
setTimeout(function() {solver();}, 1000);

// ------------- Do not Change the Above ------------------

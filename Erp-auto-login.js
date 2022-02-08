
function UandP() {
    document.getElementById("loginform-username").value = username;
    document.getElementById("loginform-password").value = password;
}

// ------------- Do not Change the code ------------------


function solver() {

    // ------------- import Tesseract and creat worker && Scheduler ------------------

    const {
        createWorker,
        createScheduler
    } = Tesseract;

    const scheduler = createScheduler();

    (async () => {
        const start = new Date();
        for (let i = 0; i < 3; i++) {
            const w = createWorker({
                logger: m => console.log(m)
             });
            await w.load();
            await w.loadLanguage('eng');
            await w.initialize('eng');
            scheduler.addWorker(w);
        }
        // ------------- insert captcha js path location ------------------

        var image = document.getElementById("loginform-captcha-image");

        // ------------- set the number in array to do multipile recognization's  ------------------

        const rets = await Promise.all(Array(40).fill(0).map(() => (scheduler.addJob('recognize', image, {
            tessedit_pageseg_mode: 'PSM_SPARSE_TEXT'
        }))));
        var finalresult = rets.map(r => r.data.text.replaceAll(' ', '').toLowerCase());
        console.log(finalresult);

        // ------------- use this to find_duplicates_in_the above final result array with cout of the result which is repeted ------------------

        find_duplicate_in_array(finalresult);

        // ------------- find_the coman and repeted result above final result array and remove dupilicates  ------------------

        var duplicates = finalresult.reduce(function(acc, el, i, arr) {
            if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
            return acc;
        }, []);
        console.log(duplicates);


        // ------------- find_the most coman repeted result from the above final result array and remove exes  ------------------

        var mf = 1;
        var m = 0;
        var max_acc;
        for (var i = 0; i < finalresult.length; i++) {
            for (var j = i; j < finalresult.length; j++) {
                if (finalresult[i] == finalresult[j]){
                    m++;}
                if (mf < m) {
                    mf = m;
                    max_acc = finalresult[i];
                }
            }
            m = 0;
        }
        console.log(max_acc + "( " + mf + "times)");
        var result = document.getElementById("loginform-captcha");

        // ------------- insert the result js path location and post the results in the web page  ------------------

        if (document.querySelector("#login-form > div.form-group.field-loginform-captcha.has-error > div.help-block") == null) {
            result.value = max_acc;
            for (var k = 0; k < duplicates.length; k++) {
                if (duplicates[k] === max_acc) {
                    duplicates.splice(k, 1);
                }
            }
            console.log(duplicates);
      //      document.querySelector("#login-form > div.text-center > button").click();
            if (document.querySelector("#login-form > div.form-group.field-loginform-captcha.has-error > div") !== null) {
                console.log("invalid captcha enterd");
                var interval = 1000; // how much time should the delay between two iterations be (in milliseconds)?
                duplicates.forEach(function(item, index) {
                    setTimeout(function() {
                        console.log(item);
                        result.value = item;
                        document.querySelector("#login-form > div.text-center > button").click();
                    }, index * interval);
                });
            }
        }

        console.log(`Total execution time=${(new Date() - start) / 1000}s`);
        // ------------- now terminate all the sheduler for power saving ------------------

        await scheduler.terminate();
    })();
    // ------------- dependency function dont delete and dont change the code -------------

    function find_duplicate_in_array(array) {
        const count = {}
        const result = []

        array.forEach(item => {
            if (count[item]) {
                count[item] += 1
                return
            }
            count[item] = 1
        })

        for (let prop in count) {
            if (count[prop] >= 2) {
                result.push(prop)
            }
        }

        console.log(count)
        return result;

    }
    // ------------- dependency function dont delet and dont change the code -------------
}

function progress_bar() {
    var old_el = document.querySelector("#login-form > div.form-group.field-loginform-captcha");
    var new_bar = document.createElement("div");
    new_bar.id = 'myProgress';
    new_bar.style.width = '100%';
    new_bar.style.backgroundColor = '#ddd'
    old_el.appendChild(new_bar);
        var newbar_old = document.querySelector("#myProgress");
        var my_bar = document.createElement("div");
        my_bar.id = 'myBar';
        my_bar.style.width = '1%';
        my_bar.style.height = '10px';
        my_bar.style.backgroundColor = '#04AA6D';
        newbar_old.appendChild(my_bar);
    move()
}

function move() {
    var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.querySelector("#myBar");
    var width = 1;
    var id = setInterval(frame, 70);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

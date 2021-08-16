function do(){
  const { createWorker, createScheduler } = Tesseract;

const scheduler = createScheduler();

(async () => {
  for (let i = 0; i < 4; i++) {
   const w = createWorker({
            logger: m => console.log(m)
   });
    await w.load();
    await w.loadLanguage('eng');
    await w.initialize('eng');
    scheduler.addWorker(w);
  }
    var image = captchaimage;
    const rets = await Promise.all(Array(40).fill(0).map(() => (scheduler.addJob('recognize',image))));
    var finalresult = rets.map(r => r.data.text.replaceAll(' ', '').toLowerCase());
      console.log(finalresult);
      find_duplicate_in_array(finalresult);
       var duplicates = finalresult.reduce(function(acc, el, i, arr) {
            if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
            return acc;
        }, []);
      console.log(duplicates);
        var mf = 1;
        var m = 0;
        var item;
        for (var i = 0; i < finalresult.length; i++) {
            for (var j = i; j < finalresult.length; j++) {
                if (finalresult[i] == finalresult[j])
                    m++;
                if (mf < m) {
                    mf = m;
                    item = finalresult[i];
                }
            }
            m = 0;
        }
        console.log(item +"( " + mf + "times)");
    var result = document.getElementById("loginform-captcha");
        result.value = item;
await scheduler.terminate();

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

}}

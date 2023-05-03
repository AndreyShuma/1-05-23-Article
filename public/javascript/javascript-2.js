const arctical = document.querySelector('.arctical');
const resultInput = document.querySelector('input[type="text"]');
const resultTextarea = document.querySelector('textarea[name="arctic"]');
const resultBTN = document.querySelector('input[type="submit"]');

const render = async () => {
    const result = await axios('main2/name');
    console.log('result', result.data);
    const arrMap = result.data.map( (item) => {
        let htmlRender = `
            <div>
                <div class="up" data-head="arcTitle">${item.head}</div>
                <div class="down" data-body="arc">${item.body}</div>
            </div>`;
        return htmlRender;
    }).join('');

    arctical.innerHTML = arrMap;
};

render();

resultBTN.addEventListener('click', (ev) => {
    const getInput = resultInput.value;
    const getTextarea = resultTextarea.value;
    // console.log('>>>>', getInput, getTextarea);
    const run = async () => {
        let resultServer = await axios.post('/main2/name2', {head:getInput, body: getTextarea});
        console.log('resultServer', resultServer.data);
        const resultServerArray = resultServer.data.map((item) => {
            let htmlRender = `
                <div>
                    <div class="up" data-head="arcTitle">${item.head}</div>
                    <div class="down" data-body="arc">${item.body}</div>
                </div>`;
            return htmlRender;
        }).join('');
        
        arctical.innerHTML = resultServerArray;
    };
    resultInput.value = '';
    resultTextarea.value = '';
    run();
});
arctical.addEventListener('click', (ev) => {
    let clickTarget = ev.target;
    console.log(ev);

    if('arcTitle' == ev.target.dataset.head ) { 
        let a = ev.target;
        // ev.target.classList.add('active');
        // console.log(a.nextSibling);
        console.log(a.nextElementSibling.classList.toggle('active'));
        // console.log(a.parentNode);
    }

});
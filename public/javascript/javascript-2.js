const arctical = document.querySelector('.arctical');
const resultInput = document.querySelector('input[type="text"]');
const resultTextarea = document.querySelector('textarea[name="arctic"]');
const resultBTN = document.querySelector('input[type="submit"]');

// складємо функцію яка відобразить дані статтей з серверу
const render = async () => {
    // отримуємо дані з серверу
    const result = await axios.get('main2/name');
    //отримуємо результат даних від серверу по роуту /name
    console.log('result', result.data);
    const arrMap = result.data.map( (item) => {
        let htmlRender = `
            <div class="article-pearent">
                <div class="up" data-head="arcTitle">${item.head}</div>
                <div class="down" data-body="arc">${item.body}</div>
            </div>`;
        return htmlRender;
    }).join('');
    // добавляємо наші дані на сторінку HTML
    arctical.innerHTML = arrMap;
};

render();
// робимо прослухування кнопки та відсилаємо відповіду інформацію до сервера і потім отримуємо нові данні уже з урахуванням збереженої та відображуємо на екрані
resultBTN.addEventListener('click', (ev) => {
    // складаємо змінні з результатами які вводяться користувачем
    const getInput = resultInput.value;
    const getTextarea = resultTextarea.value;

    const run = async () => {
        let resultServer = await axios.post('/main2/name2', {head:getInput, body: getTextarea});
        //отримуємо результат даних від серверу по роуту /name2
        console.log('resultServer', resultServer.data);
        // робимо масив для відображення всіх елементів масиву на екрані
        const resultServerArray = resultServer.data.map((item) => {
            let htmlRender = `
                <div class="article-pearent">
                    <div class="up" data-head="arcTitle">${item.head}</div>
                    <div class="down" data-body="arc"><p>${item.body}<p></div>
                </div>`;
            return htmlRender;
        }).join('');
        // добавляємо наші дані на сторінку HTML
        arctical.innerHTML = resultServerArray;
    };
    // очищаємо поля для нового введеня даних
    resultInput.value = '';
    resultTextarea.value = '';
    run();
});

// складаємо функцію яка реагує на весь блок з статтями та звужуємо зону клікабельності до заголовків статтей
arctical.addEventListener('click', (ev) => {
    let a = ev.target;
    // Отримуємо масив елементів з вмістом статті
    const nodeArticle =Array.from(arctical.querySelectorAll('.down')) ;

    // if(ev.target.nextElementSibling.className == 'down active') {a.nextElementSibling.classList.remove('active')}
    // console.log(ev.target.nextElementSibling.className);
    //Звіряємо чи клік відбувся на необхіднії заголовці статті
    if(a.parentNode.classList.contains('article-pearent')) {
        // console.log(a.nextElementSibling);

        //пербираємо масив всіх статтей та видялємо із усіх елементів клас active, щоб були всі тексти статтів скритті, а потім додємо цей класс до елементу на який відбувся клік
        nodeArticle.forEach((item) => {
            if( item.classList.contains('active')) {
                item.classList.remove('active')
                console.log('Видаляємо класс >>>>> active >>> з усіх елементів масиву');
                }
            // добавляємо класс active для тексту статті, active стилізуємо в CSS і він відповідно з'являється на екрані
            a.nextElementSibling.classList.add('active');
 
            
        });
    }
});
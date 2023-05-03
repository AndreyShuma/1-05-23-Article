
const arctical = document.querySelector('.arctical');
const inputText = document.querySelector('input[type="text"]');
const inputButton = document.querySelector('input[type="submit"]');
const textArea = document.querySelector('textarea[name="arctic"]');


const run = async () => {
    const databackend = await axios.get('/main/arcticalGET', {params: {a:10}});
    console.log('Start axios >>>>');
    console.log(databackend.data);

    const result = databackend.data.map( (item) => {
        let first = `<div class="first">
        <h4 class="two">${item.head}</h4>
        <!-- <p class="three">${item.body}</p>-->

        </div>`;
        return first
    }).join('');

    
    inputButton.addEventListener('click', async () => {
        let dataInput = await axios.post('/main/input', {
            name:'НА СЕРВЕР з фронта до бекекнду  <<FRONT>>>',
            inputText : inputText.value,
            textArea : textArea.value
        });
        
        console.log('dataInput FRONT', dataInput);
        console.log('inputText FRONT >>>>', inputText.value);
        console.log('textArea FRONT >>>>', textArea.value);
        inputText.value ='';
        textArea.value = '';
    });
    
    arctical.innerHTML = result;
    
    // console.log('dataInput', dataInput.data);
};
run();


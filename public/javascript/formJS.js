// const myForm = document.querySelector('#myForm');
const formSend = document.querySelector('form');

// console.log('myForm >>>>', myForm);
// console.log('formSend >>>>', formSend);


formSend.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    // console.log('formData >>>>>', formData);
    const name = formData.get('nameInput');
    const number = formData.get('number');
    const car = formData.get('car');
    const color = formData.get('color');

    console.log('nameInput >>>>>>', name);
    console.log('number >>>>>>', number, typeof number);
    console.log('car >>>>>>', car);
    console.log('color >>>>>>', color);

    const start = async () => {
        const startData = await axios.post('/form/test', { name : name, number :  number, car : car, color : color});
        console.log('startData>>>>');
    };
    start();

});


const runner = async () => {
    const data = await axios.post('/form/formtest', {
        params : [
            {name: 'Oksana', age: 37, gender: 'female', adress: {city: 'Poltava', street: 'Grushevskogo',  house: 10 }},
            {name: 'Oleksandr', age: 40, gender: 'male', adress: {city: 'Lviv', street: 'Pushkina',  house: 18 }},
            {name: 'Oleg', age: 28, gender: 'male', adress: {city: 'Kiev', street: 'Lomonosova',  house: 45 }},
            {name: 'Marina', age: 36, gender: 'female', adress: {city: 'Xharkiv', street: 'Poltavskiy shlayx',  house: 78 }},
            {name: 'Liliy', age: 33, gender: 'female', adress: {city: 'Odessa', street: 'Buzkova',  house: 38 }}
        ]
    }
    );
 
    console.log('data>>>>', data.data);
}

runner();

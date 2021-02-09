import faker from 'faker';


const mount = (el) => {
    let products = '';

    for(let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }

    el.innerHTML = products;
}

// Context-Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Wich DEFNITELY has an element with an id of 'products-dev
// We want to immidiately render our app into that element
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#products-dev');

    //Asumin  our container doesnt have an element with id 'dev-products'
    if (el) {
        //we are probabli running in isolation
        mount(el)
    }
}

// Context/Situacion #2
// We are running this file in  development or production
// throught the container app
// No GARANTUEE that an element with an id of 'products-dev'
// WE DO NOT WANT try to immidiately render the app

export { mount };
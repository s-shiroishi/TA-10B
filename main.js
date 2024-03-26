const btn = document.querySelector('button');
const fizz = document.querySelector('#fizz');
const buzz = document.querySelector('#buzz');
const output = document.querySelector('#output')

const validateInteger = (value, message) => {

    const numericValue = Number(value);

    if (!(numericValue) || !(Number.isInteger(numericValue))) {
        const pElement = document.createElement('p');
        addContent(pElement, `${message}`);
        throw new Error();
    }

}

const addContent = (element, text) => {
    element.textContent = text;
    output.append(element);

};

btn.onclick = (event) => {

    while (output.lastChild) {
        output.removeChild(output.lastChild);
    }

    validateInteger(fizz.value, 'Fizzに整数を入力してください');
    validateInteger(buzz.value, 'Buzzに整数を入力してください');

    for (let i = 1; i < 100; i++) {

        const pElement = document.createElement('p');

        if ((i % fizz.value === 0) && (i % buzz.value === 0)) {
            addContent(pElement, `FizzBuzz: ${i}`)
        }
        else if ((i % fizz.value === 0)) {
            addContent(pElement, `Fizz: ${i}`)
        }
        else if ((i % buzz.value === 0)) {
            addContent(pElement, `Buzz: ${i}`)
        }

    }
}
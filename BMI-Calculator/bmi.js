const form = document.querySelector('form');
form.addEventListener('submit', function (s) {
    s.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (height === '' || height <= 0 || isNaN(height)) {
        result.innerHTML = `${height} is not a valid input`;
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        result.innerHTML = `${weight} is not a valid input`;
    } else {
        const cal = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `${cal}`
    }
});

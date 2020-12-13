// METHOD 1

// const btn = document.querySelector('button');
// const h1 = document.querySelector('h1');
// btn.addEventListener('click', function () {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     const newColor = `rgb(${r}, ${g}, ${b})`;
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

// METHOD 2

const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
btn.addEventListener('click', function () {
    newRandom = randomColor()
    document.body.style.backgroundColor = newRandom;
    h1.innerText = newRandom;
})
const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
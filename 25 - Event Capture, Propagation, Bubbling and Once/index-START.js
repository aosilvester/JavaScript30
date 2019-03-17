const divs = document.querySelectorAll('div');
const button = document.querySelector('button')

function logText(e) {
    console.log(this.classList.value);
    // e.stopPropagation(); //stops the function from bubbling
}


divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    // once: true
}))

button.addEventListener('click', () => {
    console.log('Clicked! this will only work once')
}, {
    once: true
})
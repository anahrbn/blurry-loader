const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(blurring, 30)

function blurring() {
    load++;

    if(load > 99) {
        clearInterval(int);
    }
    
    loadText.innerText=`${load}%`
    // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    // loadText.style.opacity = scale(load, 0, 100, 1, 0)
    loadText.style.opacity = 1 - (load / 100)
    bg.style.filter = `blur(${(1 - load / 100) * 30}px)`;
}
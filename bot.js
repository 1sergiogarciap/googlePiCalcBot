let numbers = [];

const Observe = (sel, opt, cb) => {
    const Obs = new MutationObserver((m) => [...m].forEach(cb));
    document.querySelectorAll(sel).forEach(el => Obs.observe(el, opt));
};

Observe(".ElumCf tr td div div", {
    attributesList: ["style"], // Only the "style" attribute
    attributeOldValue: true, // Report also the oldValue
}, (m) => {
    if( m.target.getAttribute(m.attributeName).includes('rgb(138, 180, 248) 0px 0px 0px 4px inset;')){
        numbers.push(m.target);
        if(numbers.length == 2 && m.target.innerHTML != '.'){
            numbers.pop();
        }
    }
});

function clickNumber(){
    setTimeout(() =>{
        const number = numbers.shift();
        console.log(number.innerHTML);
        number.click();
        if(numbers.length > 0) clickNumber();
    },1)
}

function keyboardObserver(){
    Observe(".pLMHlc", {
        attributesList: ["class"], // Only the "style" attribute
        attributeOldValue: true, // Report also the oldValue
    }, (m) => {
        if(m.oldValue.includes('TfR61b')){
            setTimeout(() =>{ clickNumber() }, 1)
        }
    });
}


document.querySelector('.t6VgP').click()

setTimeout(() =>{ keyboardObserver() }, 300)
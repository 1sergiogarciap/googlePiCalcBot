let numbers = [];

const Observe = (sel, opt, cb) => {
    const Obs = new MutationObserver((m) => [...m].forEach(cb));
    document.querySelectorAll(sel).forEach(el => Obs.observe(el, opt));
};

Observe(".ElumCf tr td div div", {
    attributesList: ["style"], // Only the "style" attribute
    attributeOldValue: true, // Report also the oldValue
}, (m) => {
    if( m.target.getAttribute(m.attributeName).includes('box-shadow') && !m.target.getAttribute(m.attributeName).includes('box-shadow: unset')){
        numbers.push(m.target);
        oldDate = dateChange;
        dateChange = new Date();
        if(numbers.length > 0 && dateChange - oldDate < 100){
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

setTimeout(() =>{ keyboardObserver() }, 5 00)
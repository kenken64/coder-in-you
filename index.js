const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;
  
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


function renderList(){
    var result = '';
    numbers.forEach((value, index)=>{
        console.log(value);
        result = result + `<div class="item item${value}" id='item${value}'>${value}</div>`;
    });
    console.log(result);
    document.getElementById('items').innerHTML = result;
}

function purgeNumberFromElements(){
    for(var x=0; x< numbers.length; x++){
        var elem = document.getElementById('item'+x);
        //elem.outerHTML = "";
        console.log(elem);
        delete elem;
    }
}

renderList();

function doPush(){
    purgeNumberFromElements();
    console.log('length of the numbers > ' + numbers.length);
    numbers.push((numbers.length + 1));
    renderList();
}

function doPop(){
    purgeNumberFromElements();
    numbers.pop();
    renderList();
}

function doShift(){
    purgeNumberFromElements();
    numbers.shift((numbers[0]));
    renderList();
}

function doUnShift(){
    purgeNumberFromElements();
    numbers.unshift((numbers[0]-1));
    renderList();
}

function doSplice(){
    purgeNumberFromElements();
    numbers.splice(3,1,4.5);
    renderList();
}

function compareNumbers(a, b) {
    return b - a;
  }

function doSort(){
    purgeNumberFromElements();
    numbers.sort(compareNumbers);
    renderList();
}
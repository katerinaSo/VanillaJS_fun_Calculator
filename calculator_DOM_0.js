window.onload = function () {
    var firstNum = document.getElementById('first'),
        header = this.document.getElementById('header'),
        secondNum = document.getElementById('second'),
        btnAdd = document.getElementById('btnAdd'),
        btnSubtr = document.getElementById('btnSubtr'),
        btnMultipl = document.getElementById('btnMultipl'),
        btnDivide = document.getElementById('btnDivide'),
        result = document.getElementById('result');


    firstNum.onmouseover = function () {
        firstNum.style.color = 'lightgreen';
    };
    firstNum.onmouseout = function () {
        firstNum.style.color = 'lightyellow';
    };


    secondNum.onmouseover = function () {
        secondNum.style.color = 'lightgreen';
    };
    secondNum.onmouseout = function () {
        secondNum.style.color = 'lightyellow';
    };


    btnAdd.onmouseover = function () {
        btnAdd.style.color = 'lightgreen';
    };
    btnAdd.onmouseout = function () {
        btnAdd.style.color = 'lightyellow';
    };
    btnAdd.onclick = function () {
        result.innerHTML = parseFloat(firstNum.value) + parseFloat(secondNum.value);
        header.innerHTML = 'calculated result:';
    };


    btnSubtr.onmouseover = function () {
        btnSubtr.style.color = 'lightgreen';
    };

    btnSubtr.onmouseout = function () {
        btnSubtr.style.color = 'lightyellow';
    };
    btnSubtr.onclick = function () {
        result.innerHTML = parseFloat(firstNum.value) - parseFloat(secondNum.value);
        header.innerHTML = 'calculated result:';
    };


    btnMultipl.onmouseover = function () {
        btnMultipl.style.color = 'lightgreen';
    };

    btnMultipl.onmouseout = function () {
        btnMultipl.style.color = 'lightyellow';
    };
    btnMultipl.onclick = function () {

        result.innerHTML = parseFloat(firstNum.value) * parseFloat(secondNum.value);
        header.innerHTML = 'calculated result:';
    };


    btnDivide.onmouseover = function () {
        btnDivide.style.color = 'lightgreen';
    };

    btnDivide.onmouseout = function () {
        btnDivide.style.color = 'lightyellow';
    };
    btnDivide.onclick = function () {
        result.innerHTML = parseFloat(firstNum.value) / parseFloat(secondNum.value);
        header.innerHTML = 'calculated result:';
    };
};
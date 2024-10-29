function saskaitit() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = 'Ievādiet derīgus skaitļus.';
    } else {
        const result = num1 + num2;
        document.getElementById('result').innerText = 'Rezultāts: ' + result;
    }
}

function atnemt() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = 'Ievādiet derīgus skaitļus.';
    } else {
        const result = num1 - num2;
        document.getElementById('result').innerText = 'Rezultāts: ' + result;
    }
}

function reizinat() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = 'Ievādiet derīgus skaitļus.';
    } else {
        const result = num1 * num2;
        document.getElementById('result').innerText = 'Rezultāts: ' + result;
    }
}

function dalit() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2) || num2 === 0) {
        document.getElementById('result').innerText = 'Ievādiet derīgus skaitļus.';
    } else {
        const result = num1 / num2;
        document.getElementById('result').innerText = 'Rezultāts: ' + result;
    }
}

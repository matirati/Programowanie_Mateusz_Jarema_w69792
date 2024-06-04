//1b
let odliczanie=10;
while (odliczanie>=0){
    console.log(odliczanie);
    odliczanie--;
}
console.log("Happy New Year!")


//2
function silnia(n){
    if(n==0 || n==1){
        return 1;
    }
    else{
        return n * silnia(n-1);
    }
}
console.log(silnia(5));
function silnia_petla(n){
    let wynik=1;
    for(let i=1; i<=n;i++){
        wynik *-i;
    }
    return wynik;
}

console.log(silnia_petla(5));

//3

function weryfikacja(){
    let wiek=prompt("Podaj wiek: ");
    if(wiek<=18){
        window.location.replace("https://www.grajteraz.pl/dzieci?gad_source=1&gclid=EAIaIQobChMInKTKko70hQMVJToGAB2KLg19EAAYAiAAEgIiX_D_BwE#")
    }else{
        alert("Możesz wejść");
    }
}
weryfikacja();

//4

const zad4 = (clickedBtn) => {
    document.querySelectorAll('.z4-btn').forEach((btn) => {
        btn.classList.remove('active')
    })
    clickedBtn.classList.add('active')
}

//5

const zad5= () => {
    document.getElementById('zad5').style.visibility=document.
    getElementById('zad5').style.visibility === 'hidden' ?
    'visible' : 'hidden'
}

//6

const zad6=() => {
    const textarea = document.getElementById('zad6_text')
    const li= document.createElement("li")
    li.innerHTML=textarea.value
    document.getElementById('zad6_list'.appendChild(li))
    textarea.value = ''
}

//7

 onst firstNameInput = document.getElementById('firstNameInput');
    const lastNameInput = document.getElementById('lastNameInput');
    const addButton = document.getElementById('addButton');
    const tableBody = document.getElementById('tableBody');

    addButton.addEventListener('click', function() {
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        if (firstName !== '' && lastName !== '') {
            const newRow = document.createElement('tr');
            const firstNameCell = document.createElement('td');
            const lastNameCell = document.createElement('td');
            firstNameCell.textContent = firstName;
            lastNameCell.textContent = lastName;
            newRow.appendChild(firstNameCell);
            newRow.appendChild(lastNameCell);
            tableBody.appendChild(newRow);
            firstNameInput.value = '';
            lastNameInput.value = '';
        }
    });

//8

 function convertToCelsius() {
        const temperatureInput = document.getElementById('temperatureInput').value;
        const result = (parseFloat(temperatureInput) * 9 / 5) + 32;
        document.getElementById('result').textContent = result.toFixed(2) + " °F";
    }

    function convertToFahrenheit() {
        const temperatureInput = document.getElementById('temperatureInput').value;
        const result = (parseFloat(temperatureInput) - 32) * 5 / 9;
        document.getElementById('result').textContent = result.toFixed(2) + " °C";
    }








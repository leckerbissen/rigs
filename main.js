document.addEventListener('click', function handleClick(event) {
    event.target.parentNode.classList.toggle('clicked');
});

//Temp

let tempRow = document.getElementsByClassName('temp');
let searchForHigh = () => {
    for (let i = 1; i < tempRow.length; i++) {
        let stringTemp = tempRow[i].textContent.toString();
        for (let min = 70; min < 100; min++){
            if (stringTemp.includes(min)) {
                tempRow[i].classList.toggle('warning');
                break
                }
            }
        }
    }
searchForHigh();


// Hash работает

let hashRow = document.getElementsByClassName('miner_hashes');
let searchForLow = () => {
    for (let i = 0; i < hashRow.length; i++) {
        let stringHash = hashRow[i].textContent.toString();
            if (stringHash.includes(' 0') || stringHash.includes('00')) {
                hashRow[i].classList.toggle('warning');
                }
            }
        }
searchForLow();
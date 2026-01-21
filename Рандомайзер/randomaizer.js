const btnEl = document.querySelector("#generate"),
    minEl = document.querySelector("#min"),
    maxEl = document.querySelector("#max"),
    placeholderEl = document.querySelector("#placeholder")

btnEl.addEventListener('click', generate)


function generate() {

    // console.log(minEl);
    // console.log(maxEl);
    
    const min = Number(minEl.value)
    const max = Number(maxEl.value)
        
    const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// if(min < max && min !== '' && max !== ''){
//     placeholderEl.textContent = getRandomNumber(min, max)
//     a = alert("You're writed min and max wrong!!!!!!")

// } else{
//     a = alert("You're writed min and max wrong!")
//     placeholderEl.textContent = "#"
// }

if(minEl.value === '' || maxEl.value === ''){
    placeholderEl.textContent = '#'
    a = alert("Idi naxuy")
}

if(minEl.value > maxEl.value){
    placeholderEl.textContent = '#'
    b = alert("Idi naxuy")
}

}


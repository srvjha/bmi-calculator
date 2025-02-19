document.addEventListener("DOMContentLoaded", () => {
    const age = document.getElementById('age');
    const weight = document.getElementById('weight');
    const height = document.getElementById('height');
    const calculate = document.getElementById('calculate');
    const result = document.getElementById('result');
    const message = document.getElementById('message');
    const gifs = document.querySelector("#result-gif"); 
    
    calculate.addEventListener('click', () => {
        console.log({age, weight, height, gifs}); // Debugging log

        // Validation for age
        if (age.value < 2 || age.value > 120) {
            alert("Enter a valid age");
            return;
        }

        if (age.value && weight.value && height.value) {
            const bmi = weight.value / ((height.value / 100) ** 2);
            result.innerHTML = bmi.toFixed(2);

            if (bmi < 18.5) {
                message.innerHTML = "Underweight";
                gifs.style.color = "#f05d34"
                gifs.src = "https://media1.tenor.com/m/K2k9DhGwfzUAAAAd/chai-piyo-biscuit-khao-i-want-to-eat-biscuits.gif";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                message.innerHTML = "Normal";
                gifs.style.color = "#3ae727"
                gifs.src = "https://media1.tenor.com/m/NgtnUasrEJUAAAAd/jogging-jethalal-champaklal-gada.gif";
            } else if (bmi >= 25 && bmi <= 29.9) {
                message.innerHTML = "Overweight";
                message.style.color = "#e5a00c"
                gifs.src= "https://media1.tenor.com/m/Isgo1w7qdf4AAAAd/jethalal-tmkoc.gif"
            } else {
                message.innerHTML = "Obese";
                message.style.color = "#e72d0c"
                gifs.src = "https://i.pinimg.com/originals/2c/90/29/2c90298db8a4a36fe2e2bb092eaea967.gif"; 
                console.log(gifs.src);
            }
        }
    });
});

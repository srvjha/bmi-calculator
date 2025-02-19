document.addEventListener("DOMContentLoaded", () => {
    const age = document.getElementById('age');
    const weight = document.getElementById('weight');
    const height = document.getElementById('height');
    const calculate = document.getElementById('calculate');
    const result = document.getElementById('result');
    const message = document.getElementById('message');
    const gifs = document.querySelector("#result-gif");
    const container = document.querySelector(".container")
    const container_form = document.querySelector(".container-form")
    const container_result = document.querySelector(".container-result")

    calculate.addEventListener('click', () => {
        console.log({ age, weight, height, gifs }); 

        // Validation for age
        if (age.value < 2 || age.value > 120) {
            container.style.backgroundImage = "url('https://i.pinimg.com/originals/a1/22/bc/a122bc27f8d95d059a6628a083ab4567.gif')";
            container.style.backgroundSize = "cover";
            container.style.backgroundRepeat = "no-repeat";
            container.style.backgroundPosition = "center";
            
         
            container_form.style.opacity = "0";
            container_result.style.opacity = "0";
            container_form.style.pointerEvents = "none"; 
            container_result.style.pointerEvents = "none";
        
            
            container.style.transition = "opacity 0.5s ease-in-out";
            container_form.style.transition = "opacity 0.5s ease-in-out";
            container_result.style.transition = "opacity 0.5s ease-in-out";
        
            setTimeout(() => {
                container.style.opacity = "0"; 
        
                setTimeout(() => {
                    container.style.backgroundImage = "none"; 
                    container.style.opacity = "1"; 
        

                    container_form.style.opacity = "1";
                    container_result.style.opacity = "1";
                    container_form.style.pointerEvents = "auto";
                    container_result.style.pointerEvents = "auto";
        
                }, 500); 
            }, 3000);
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
                gifs.src = "https://media1.tenor.com/m/Isgo1w7qdf4AAAAd/jethalal-tmkoc.gif"
            } else {
                message.innerHTML = "Obese";
                message.style.color = "#e72d0c"
                gifs.src = "https://i.pinimg.com/originals/2c/90/29/2c90298db8a4a36fe2e2bb092eaea967.gif";
                console.log(gifs.src);
            }
        }
    });
});

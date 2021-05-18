window.onload = () => {
    let button = document.querySelector("#btn");


    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {


    let height = parseInt(document
        .querySelector("#height").value);


    let weight = parseInt(document
        .querySelector("#weight").value);

    let result = document.querySelector("#result");


    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";

    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";


    else {


        let bmi = (weight / ((height * height) /
            10000)).toFixed(2);


        if (bmi < 18.6) result.innerHTML =
            alert('gầy');

        else if (bmi >= 18.6 && bmi < 29.9)
            result.innerHTML =
            alert('cân đối');


        else if (bmi >= 30.1 && bmi < 35.1)
            result.innerHTML =
            alert('béo lv1');

        else if (bmi >= 35.1 && bmi < 40)
            result.innerHTML =
            alert('béo lv2');

        else result.innerHTML =
            alert('béo lv3');
    }
}
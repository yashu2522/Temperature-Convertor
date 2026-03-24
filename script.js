document.getElementById('convert').addEventListener('click',function()
{
    const tempInput = document.getElementById('tempInput').value;
    const dest = document.getElementById('dest').value;
    // const convert = document.getElementById('convert');
    const result = document.getElementById('result');
    const tempValue = parseFloat(tempInput);
    result.innerHTML="";
    if(isNaN(tempValue)){
        result.innerHTML = "<br>Please enter a valid temperature.";
        return;
    }
    if(dest === "celsius"){
        const celsius = (tempValue - 32) * 5/9;
        result.innerHTML = `<br>${tempValue}°F is equal to ${celsius.toFixed(2)}°C.`;
    } else if(dest === "fahrenheit"){
        const fahrenheit = (tempValue * 9/5) + 32;
        result.innerHTML = `<br>${tempValue}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
    }

})
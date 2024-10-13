document.getElementById('weatherForm').addEventListener('submit',(e)=>{
    e.preventDefault(); // prevents the page from realoding when there are changes
    const city = document.getElementById('cityInput').value; // value input within my form
    
    // call backend endpoint w/fetch and pass city as a query parameter
    fetch(`/weather?city=${city}`)
    .then(response=>response.json())
    .then(data=>{
        document.getElementById('weatherResult').innerText=`City : ${data.city}, Temperature:${data.temperature} C , Weather: ${data.description}`
    });
});



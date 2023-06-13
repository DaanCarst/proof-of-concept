function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    hr = checkTime(hr);
    min = checkTime(min);
    document.getElementById("clock").innerHTML = hr + ":" + min;
    
    var months = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];
    var days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
startTime();

// const url = "https://demofdnd.simplicate.nl/api/v2/crm/organization"; // Replace with the actual API endpoint URL
//   const headers = {
//     "Authentication-Key": "gS7sibGSth6GQfDkGdLx9AU8T3cj1DoB",
//     "Authentication-Secret": "eiZOT04oWOcQUg2XEzkiI42XyvNInifc"
//   }
 
//   // Make the API request using fetch and the headers
//   fetch(url, { headers })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("Request failed with status " + response.status);
//       }
//       return response.json();
//     })
//     .then(data => {
//       // Render the EJS view with the fetched data
//       const dataArray = data.data;
//       console.log(dataArray);
//     })
//     .catch(error => {
//       // Handle any errors that occurred during the request
//       console.error(error);
//       res.status(500).send('Error occurred');
//     });
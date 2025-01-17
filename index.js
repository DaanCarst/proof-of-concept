// Importeer express uit de node_modules map
import express from 'express'
import fetch from 'node-fetch'
import "dotenv/config";

// Maak een nieuwe express app aan
const app = express()
const url = "https://demofdnd.simplicate.nl/api/v2/crm/organization?limit=11"; 
  // const urlbirthday = "https://demofdnd.simplicate.nl/api/v2/crm/person?limit=100";  // Replace with the actual API endpoint URL
  const headers = {
    'Authentication-Key': "gS7sibGSth6GQfDkGdLx9AU8T3cj1DoB",
    'Authentication-Secret': "eiZOT04oWOcQUg2XEzkiI42XyvNInifc"
  }

// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', (req, res) => {
  // Make the API request using fetch and the headers
  fetch(url, { headers })
    .then(response => {
      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }
      return response.json();
    })
    // fetch(urlbirthday, { headers })
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error("Request failed with status " + response.status);
    //   }
    //   return response.json();
    // })

    .then(data => {
      // Render the EJS view with the fetched data
      res.render('index', { data });
      const dataArray = data.data;
      console.log(data);
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error(error);
      res.status(500).send('Error occurred');
    });
});

app.get('/page2', (req, res) => {
  // Make the API request using fetch and the headers
  fetch(url, { headers })
    .then(response => {
      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }
      return response.json();
    })


    .then(data => {
      // Render the EJS view with the fetched data
      res.render('page2', { data });
      const dataArray = data.data;
      console.log(data);
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error(error);
      res.status(500).send('Error occurred');
    });
});

app.get('/page3', (req, res) => {
  // Make the API request using fetch and the headers
  fetch(url, { headers })
    .then(response => {
      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }
      return response.json();
    })

    .then(data => {
      // Render the EJS view with the fetched data
      res.render('page3', { data });
      const dataArray = data.data;
      console.log(data);
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error(error);
      res.status(500).send('Error occurred');
    });
});

// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
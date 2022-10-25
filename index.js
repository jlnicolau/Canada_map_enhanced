//creating the webserver
const express = require('express');
const app = express();

//routing the main page
app.get("/", function (req, res) {
   res.sendFile(__dirname + "/\pages/\canadaMap.html");
});

app.listen(3000, function () { 'The CanadaMapEnhanced server is listening to the port 3000.' })


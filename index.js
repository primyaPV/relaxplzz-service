const express = require('express');


const app = express();
const db = require('./utils/mysql');
app.use(express.json());


var address = require('./api/routes/credential');
var banners = require('./api/routes/banners');
var gallery = require('./api/routes/gallery');
var enquiryList = require('./api/routes/enquiryList');

app.use('/', address)
app.use('/banners', banners)
app.use('/gallery', gallery)
app.use('/enquiryList', enquiryList)



app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})
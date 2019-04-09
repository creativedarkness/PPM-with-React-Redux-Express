//Express framework
const express = require('express');
const app = express();

//axios - to make API calls
const axios = require('axios');

//Body Parser Libary for post data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//Static Route to Seve the React App
const path = require('path');
app.use(express.static(path.resolve(__dirname, './../ppm-react/build')))

//Restfull Route
//GET ALL
app.get("/api/v1/products", (request, response) => {
    // console.log("request from client:", request);
    axios
        .get('http://5cacafa901a0b80014dccfe7.mockapi.io/products')
        .then((mockAPIResponse) => {
            // console.log("mockAIP resposne:", mockAPIResponse.data);
            response.json(mockAPIResponse.data)
        })
        .catch(err => {
            console.log(err);
        })
})

//CREATE 1
app.post("/api/v1/products", (createRequest, createResponse) => {
    console.log("create 1 request", createRequest)
    axios
        .post(`http://5ca799328e58df001460368c.mockapi.io/products`, {  })
        .then((axiosPostresponse) => {
            console.log("post response", axiosPostresponse.data);
            createResponse.json(axiosPostresponse)
        })
        .catch((error) => {
            console.log(error);
        })
})

// //GET 1
// app.get("/api/v1/products/:id", (req, resp) => {
//     console.log("get 1 request:", req);
//     for (var i = 0; i < products.lenght; i++) {
//         if (products[i].id === req.params.id) {
//             products[i] = Object.assign({}, products[i], req.body);
//         }
//     }
//     res.json({
//         products: products
//     })
// })


//Server Listening
app.listen(1337, () => {
    console.log("Sever restarted...")
});
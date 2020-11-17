const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51HoQ2RHUS2CciZ6xNIAGQtn8HMCxG6f6zU1tZbB1Fz61Mov50Hj2Yn7t33cJQ8MkVzMdWQw6xTHp90T939uRu0Ml002jTNMak5"
  );

  const app = express(); 
  app.use(cors({ origin: true }));
  app.use(express.json()); 
  app.get("/", (request, response) => response.status(200).send("hello world"));
  exports.api = functions.https.onRequest(app);

  app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, 
      currency: "usd",
    });
  

    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
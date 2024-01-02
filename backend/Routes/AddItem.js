const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://feasthub:yagababa@cluster0.pxjduwh.mongodb.net/feasthubmern?retryWrites=true&w=majority';
const { MongoClient } = require('mongodb');


router.post("/addItem", async (req, res) => {
    const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    // Connect to the MongoDB server
    client.connect(async (err) => {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            return;
        }
        const database = client.db('feasthubmern');
        const collection1 = database.collection('foodCategory');
        const collection2 = database.collection('food_items');
        let dataToInsertFC = {
            CategoryName: req.body.CategoryName
        };
        let dataToInsertFI = {
            CategoryName: req.body.CategoryName,
            name: req.body.name,
            img: req.body.img,
            options: req.body.options,
            description: req.body.description
        }

        try {
            // Insert the data into the collection
            var val = req.body.CategoryName;

            var exists = global.foodCategory.some(function (o) {
                return o.CategoryName === val;
            });

            console.log(exists)
            if (!exists) {

                const result = await collection1.insertOne(dataToInsertFC);
                console.log(`Inserted ${result.insertedCount} document with _id: ${result.insertedId}`);
            }
            else {
                console.log("The Category Already exists!!")
            }

            const result_fi = await collection2.insertOne(dataToInsertFI);
            console.log(`Inserted ${result_fi.insertedCount} document with _id: ${result_fi.insertedId}`);

            global.foodCategory = await collection1.find({}).toArray();
            global.food_items = await collection2.find({}).toArray();

            res.send({ success: true });
            // Output the result
        } catch (error) {
            console.error('Error inserting data:', error);
            res.send({ success: false })
        } finally {
            // Close the connection
            client.close();
        }
    })
})
module.exports = router;
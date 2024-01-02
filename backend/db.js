const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://feasthub:yagababa@cluster0.pxjduwh.mongodb.net/feasthubmern?retryWrites=true&w=majority';

const mongoDB = async () => {
    // await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
    //     if (err) {
    //         console.log("---- ", err);
    //     }
    //     else {
    //         console.log("Connected");
    //     }
    // })


    await mongoose.connect(mongoURI,).then(async () => {
        console.log('Connected Successfully');
        const fectched_data = await mongoose.connection.db.collection("food_items");
        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        // console.log(await fectched_data.find({}).toArray());
        let data = await fectched_data.find({}).toArray();
        let data1 = await foodCategory.find({}).toArray();
        global.food_items = data;
        global.foodCategory = data1;
        //Below code takes a lot of time to execute !!!
        // await fectched_data.find({}).toArray(function (err, data) {
        //     if (err) {
        //         console.log(err);
        //     }
        //     else {
        //         console.log(data);
        //     }
        // })
    }).catch((err) => { console.error(err); });
}

module.exports = mongoDB;
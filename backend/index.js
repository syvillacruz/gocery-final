const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const UserModel = require('./models/User');
const PaymentModel = require('./models/Payment');



const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/employee', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB", err);
});

app.post('/register', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json("Already registered");
            } else {
                UserModel.create(req.body)
                    .then(user => res.json(user))
                    .catch(err => res.json(err));
            }
        })
        .catch(err => res.status(500).json(err));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("Wrong password");
                }
            } else {
                res.json("No records found!");
            }
        })
        .catch(err => res.status(500).json(err));
});

app.post('/payment', (req, res) => {
    const { products, totalPrice, description } = req.body;

    PaymentModel.create({ products, totalPrice, description })
        .then(payment => res.json(payment))
        .catch(err => res.status(500).json(err));
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on http://127.0.0.1:${PORT}`);
});

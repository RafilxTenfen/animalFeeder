const express = require('express');
const Firestore = require('@google-cloud/firestore')
const db = new Firestore();
const app = express();
const firebase = require('firebase/app');

app.use(express.json());
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`AnimalFeeder Rest API listening on port ${port}`);
});

app.get('/', async (req, res) => {
    const query = db.collection('dispenser');
    const querySnapshot = await query.get();
    if (querySnapshot.size > 0) {
        res.json(querySnapshot.docs.map(doc => doc.data()));
    } else {
        res.json({status: 'Not found'});
    }
})

app.post('/', async (req, res) => {
    try {
        await db.collection('dispenser').doc(req.body.id.toString()).set(req.body);
        res.json({ status: 'success', data: { dispenser: req.body } });
    } catch (e) {
        res.json({ status: 'error', data: { message: e.message, variables: {req_body: req.body} } });
    }
})
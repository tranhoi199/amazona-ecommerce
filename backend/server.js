import express from 'express';
import data from './data.js';
const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
})

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(x => x._id === req.params.id);
    if(product){
        return res.send(product)
    }
    res.status(404).send({message: 'Product not found'});
});

app.get('/api/products/', (req, res) => {
    res.send(data.products)
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})
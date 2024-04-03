import express from 'express';
const app = express();

app.get('/api/test', function (req, res) {
    res.json({
        body: 'test ok2'
    })
});

app.post('/api/transaction', function(req, res) {
    res.json(req.body);
} )

app.listen(4000);
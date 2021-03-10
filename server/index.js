const express = require('express');
const app = express();
const ctrl = require('./controllers/messages_controller')

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'))


app.get('/api/messages', ctrl.read);
app.post('/api/messages', ctrl.create);
app.put('/api/messages', ctrl.update);
app.delete('/api/messages', ctrl.delete)
const port = 3001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

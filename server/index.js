const express = require('express');
const bodyParser = require('body-parser');
const messageController = require('./controllers/messages_controller')

const port = 3001;

const app = express();
app.use(bodyParser.json());

app.get('/api/messages', messageController.readMessages)
app.post('/api/messages', messageController.createMessage);
app.patch('/api/messages/:id', messageController.updateMessage);
app.put('/api/messages/:id', messageController.updateMessage);
app.delete('/api/messages/:id', messageController.deleteMessage);


app.listen(port, () => {
    console.log(`Starting server on port: ${port}`);
});
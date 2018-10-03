const messages = []
let id = 0;

module.exports = {
    createMessage: (req, res) => {
        const { text, time } = req.body;
        const newMessage = {
            text,
            time,
            id
        }
        id++;
        messages.push(newMessage);
        res.json(messages);
    },
    readMessages: (_, res) => {
        res.json(messages);
    },
    updateMessage: (req, res) => {
        const messageId = req.params.id;
        
        if (!messageId){
            res.status(401).send("Bad input for id in URL");
            return;
        }
        
        const index = messages.findIndex(m => m.id === +messageId);
        
        if (index < 0) {
            res.status(404).send("ID for message does not exist");
            return;
        }
        
        const { text } =  req.body;
        messages[index] = {
            text,
            time: messages[index].time,
            id:messages[index].id,
        }
        res.json(messages);
    },
    deleteMessage: (req, res) => {
        const messageId = req.params.id;
        
        if (!messageId){
            res.status(401).send("Bad input for id in URL");
            return;
        }
        
        const index = messages.findIndex(m => m.id === +messageId);
        
        if (index < 0) {
            res.status(404).send("ID for message does not exist");
            return;
        }

        messages.splice(index,1);
        res.json(messages);
    },
}
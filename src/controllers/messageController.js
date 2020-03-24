const Messages = require('../models/Messages');

module.exports = {
    async storeMessage(req, res) {
        const { author, message } = req.body;

        const post = await Messages.create({
            author,
            message
        });

        req.io.emit('novaMensagem', post);

        return res.json(post);
    },

    async index(req, res) {
        const messages = await Messages.find();

        return res.json(messages);
    }
}
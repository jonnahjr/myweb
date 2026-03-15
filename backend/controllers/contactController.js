const Message = require('../models/Message');

exports.submitMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message received and stored' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const { ObjectId } = require('mongodb');
const { getDb } = require('../db/connect');

const getAllContacts = async (req, res) => {
  const contacts = await getDb().collection('contacts').find().toArray();
  res.status(200).json(contacts);
};

const getSingleContact = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid contact id' });
  }
  const contact = await getDb().collection('contacts').findOne({ _id: new ObjectId(req.params.id) });
  if (!contact) return res.status(404).json({ message: 'Contact not found' });
  res.status(200).json(contact);
};
const router = require('express').Router();
const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAllContacts);
router.get('/:id', contactsController.getSingleContact);

router.post('/', (req, res) => {
  // #swagger.parameters['body'] = { in: 'body', description: 'New contact', schema: { $ref: '#/definitions/Contact' } }
  contactsController.createContact(req, res);
});

router.put('/:id', (req, res) => {
  // #swagger.parameters['body'] = { in: 'body', description: 'Updated contact', schema: { $ref: '#/definitions/Contact' } }
  contactsController.updateContact(req, res);
});

router.delete('/:id', contactsController.deleteContact);

module.exports = router;

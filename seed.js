require('dotenv').config();
const { MongoClient } = require('mongodb');

const sampleContacts = [
  {
    firstName: 'Ada',
    lastName: 'Gonzalez',
    email: 'ada.Gonzalez@udd.com',
    favoriteColor: 'Purple',
    birthday: '1815-12-10'
  },
  {
    firstName: 'Grace',
    lastName: 'Hopper',
    email: 'grace.hopper@udd.com',
    favoriteColor: 'Navy',
    birthday: '1906-12-09'
  },
  {
    firstName: 'Alan',
    lastName: 'Turing',
    email: 'alan.turing@udd.com',
    favoriteColor: 'Green',
    birthday: '1912-06-23'
  }
];

const run = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  try {
    const db = client.db(process.env.DB_NAME || 'contactsDB');
    const result = await db.collection('contacts').insertMany(sampleContacts);
    console.log(`Inserted ${result.insertedCount} contacts.`);
  } finally {
    await client.close();
  }
};

run().catch((err) => {
  console.error('Seeding failed:', err.message);
});

const dns = require('node:dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);

const dnsPromises = dns.promises;
const originalLookup = dns.lookup;
dns.lookup = (hostname, options, callback) => {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  dnsPromises.resolve4(hostname)
    .then((addresses) => callback(null, addresses[0], 4))
    .catch(() => {
      dnsPromises.resolve6(hostname)
        .then((addresses) => callback(null, addresses[0], 6))
        .catch(() => originalLookup(hostname, options, callback));
    });
};

const { MongoClient } = require('mongodb');

let _db;

const initDb = async () => {
  if (_db) {
    console.log('Db is already initialized!');
    return _db;
  }
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  _db = client.db(process.env.DB_NAME || 'contactsDB');
  return _db;
};

const getDb = () => {
  if (!_db) {
    throw new Error('Db not initialized');
  }
  return _db;
};

module.exports = { initDb, getDb };
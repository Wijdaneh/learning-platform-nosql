// Question : Pourquoi créer un module séparé pour les connexions aux bases de données ?
// Réponse : Pour centraliser la logique de connexion et de gestion des erreurs, améliorer la réutilisabilité du code, et faciliter la maintenance. Cela permet également de mieux gérer les connexions et de les fermer proprement lorsqu'elles ne sont plus nécessaires.
// Question : Comment gérer proprement la fermeture des connexions ?
// Réponse : En écoutant les événements système comme SIGINT ou SIGTERM, et en utilisant des méthodes comme client.close() pour MongoDB et client.quit() pour Redis. Cela garantit que les ressources sont libérées de manière ordonnée, évitant ainsi des fuites de mémoire ou des états inconsistants.

const { MongoClient } = require('mongodb');
const redis = require('redis');
const config = require('./env');

let mongoClient, redisClient, db;

async function connectMongo() {
  // TODO: Implémenter la connexion MongoDB
  // Gérer les erreurs et les retries
  try {
    mongoClient = new MongoClient(config.mongodb.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await mongoClient.connect();
    db = mongoClient.db(config.mongodb.dbName);
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit on failure
  }
}

async function connectRedis() {
  // TODO: Implémenter la connexion Redis
  // Gérer les erreurs et les retries
  try {
    redisClient = redis.createClient({
      url: config.redis.uri,
    });
    redisClient.on('error', (error) => {
      console.error('Redis connection error:', error);
    });
    await redisClient.connect();
    console.log('Redis connected successfully!');
  } catch (error) {
    console.error('Error connecting to Redis:', error);
    process.exit(1); // Exit on failure
  }
}

function closeConnections() {
  if (mongoClient) {
    mongoClient.close().then(() => console.log('MongoDB connection closed.'));
  }
  if (redisClient) {
    redisClient.quit().then(() => console.log('Redis connection closed.'));
  }
}

// Handle process termination
process.on('SIGINT', () => {
  closeConnections();
  process.exit(0);
});

process.on('SIGTERM', () => {
  closeConnections();
  process.exit(0);
});

// Export connections and database
module.exports = {
  connectMongo,
  connectRedis,
  getMongoDb: () => db,
  getRedisClient: () => redisClient,
};
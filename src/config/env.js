// Question: Pourquoi est-il important de valider les variables d'environnement au démarrage ?
// Réponse : Cela garantit que toutes les configurations nécessaires sont définies avant d'exécuter l'application, évitant des erreurs imprévues ou des comportements inattendus.
// Question: Que se passe-t-il si une variable requise est manquante ?
// Réponse : L'application peut planter, se comporter de manière imprévisible ou manquer des informations essentielles, affectant la sécurité ou la performance.

const dotenv = require('dotenv');
dotenv.config();

const requiredEnvVars = [
  'MONGODB_URI',
  'MONGODB_DB_NAME',
  'REDIS_URI'
];

// Validation des variables d'environnement
function validateEnv() {
  // TODO: Implémenter la validation
  // Si une variable manque, lever une erreur explicative
  const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);
  
  if (missingVars.length > 0) {
    throw new Error(`Les variables d'environnement suivantes sont manquantes : ${missingVars.join(', ')}`);
  }
}

// Appeler la validation au démarrage
validateEnv();

module.exports = {
  mongodb: {
    uri: process.env.MONGODB_URI,
    dbName: process.env.MONGODB_DB_NAME
  },
  redis: {
    uri: process.env.REDIS_URI
  },
  port: process.env.PORT || 3000
};
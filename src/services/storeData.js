const { Firestore } = require('@google-cloud/firestore');
 
async function storeData(id, data) {
  // Sesuaikan databaseId dengan instances yang dibuat di GCP
  const db = new Firestore({databaseId: "serta-mulia"}); 

  const predictCollection = db.collection('prediction');
  return predictCollection.doc(id).set(data);
}
 
module.exports = storeData;
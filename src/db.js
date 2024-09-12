import mongoose from "mongoose";

const mongoDB =
  "mongodb+srv://<nick>:<pass>@Cluster0.ctfts.mongodb.net/";

const database = "armario";

const main = async () => {
  mongoose.connect(mongoDB + database);
};

main()
  .then(() => console.log(`Conectado ao db ${database} com sucesso!`))
  .catch((err) => console.log(err));

export default mongoose; // module.exports = mongoose

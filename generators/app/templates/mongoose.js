const mongoose = require('mongoose');

module.exports = async () => {
  const connection = await mongoose.connect("mongodb://localhost:27017/DBNAME", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  return connection.connection.db;
};
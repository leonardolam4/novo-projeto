const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true },
  family_name: { type: String, required: true },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
  name: { type: String, required: true },
  lifespan: { type: String },
  url: { type: String, required: true }
});

module.exports = mongoose.model('Author', AuthorSchema);
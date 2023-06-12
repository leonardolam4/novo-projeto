const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  imprint: { type: String, required: true },
  status: { type: String, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance', required: true },
  due_back: { type: Date, default: Date.now },
  url: { type: String, required: true }
});

module.exports = mongoose.model('BookInstance', BookInstanceSchema);
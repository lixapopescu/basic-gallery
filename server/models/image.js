import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  title: { type: 'String', required: true },
  labels: [],
});

export default mongoose.model('Image', imageSchema);

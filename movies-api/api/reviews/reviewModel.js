import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  movieId: { type:Number, required: true },
  rating: { type: Number, enum: [0,2,3,4,5], required: true },
  created_at: {type:Date, default: Date.now},
  content: { type: String, required: true },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
},
authorName: {type:String, required: true},

});


export default mongoose.model('Review', ReviewSchema);

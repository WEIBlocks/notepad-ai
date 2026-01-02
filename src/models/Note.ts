import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  shareId: {
    type: String,
    required: true,
    unique: true
  },
  content: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'Untitled Note'
  },
  expiresAt: {
    type: Date,
    index: { expires: 0 } // TTL index: MongoDB will auto-delete documents when expiresAt is reached
  },
  password: {
    type: String,
    select: false // Important: This hides the password field by default
  },
  isPasswordProtected: {
    type: Boolean,
    default: false
  },
  allowEditing: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Note = mongoose.models.Note || mongoose.model('Note', noteSchema);
export default Note;

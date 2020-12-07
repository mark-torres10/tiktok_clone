import mongoose from 'mongoose'; 

// create schema of data for app
const tiktokSchema = mongoose.Schema({
    source: String, 
    channel: String, 
    song: String, 
    likes: String,
    messages: String,
    description: String,
    shares: String,
});

// collection inside the DB
// collection of tiktokVideos, each of which has the tiktokSchema data structure
export default mongoose.model('tiktokVideos', tiktokSchema);
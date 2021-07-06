import mongoose from "mongoose";
import config from './config';

(
    () => {
        try {
            mongoose.connect( config.db_conn, { 
                useNewUrlParser: true, 
                useUnifiedTopology: true, 
                useFindAndModify: false
            });
            const db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function() {
                console.log(`DB connected on port: 27017`);
                console.log(`DB connected to db_name: ${db.name}`);
            });
        } catch (error) {
            console.error(error);
        }
    }
)();
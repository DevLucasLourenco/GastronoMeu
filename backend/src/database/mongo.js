import {MongoClient} from 'mongodb';

export const Mongo = {
    async connect({ mongoConnectionString, mongoDbName }) {
        try {
            const client = new MongoClient(mongoConnectionString);
            await client.connect();
            const db = client.db(mongoDbName);

            this.client = client;
            this.db = db

            return {
                success: true,
                statusCode: 200,
                body: {
                    message: 'Connected to MongoDB successfully'
                }
            }

        } catch (error) {
            return {
                success: false,
                statusCode: 500,
                body: {
                    message: 'Error connecting to MongoDB: ',
                    err: error.message
                }
            }
        }
    }
}
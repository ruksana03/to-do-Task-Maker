

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

// middleware
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174', 'http://127.0.0.1:5173', 'http://127.0.0.1:5173/','https://todo-task-maker.web.app'],
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.tv4qtbo.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        const usersCollection = client.db('task-manager').collection('users');
        const taskCollection = client.db('task-manager').collection('tasks');

        // Save  user email start
        app.put('/users/:email', async (req, res) => {
            try {
                const name = req.params.name
                const email = req.params.email
                const user = req.body
                const query = { email: email }
                const options = { upsert: true }
                const isExist = await usersCollection.findOne(query)
                console.log(isExist)
                if (isExist) return res.send(isExist)
                const result = await usersCollection.updateOne(
                    query,
                    {
                        $set: { name, ...user, timestamp: Date.now() },
                    },
                    options
                )
                res.send(result)
            } catch (error) {
                console.log("ann error occer on app.put user/:email route")
            }
        })
        // Save  user email end

        // post tasks api start 
        app.post('/tasks', async (req, res) => {
            try {
                const product = req.body;
                const result = await taskCollection.insertOne(product);
                res.send(result);
            } catch (error) {
                console.log("error on app.post('/tasks',", error)
            }
        })
        // post tasks api end

        // update product api start
        app.put('/task/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const updatedTask = req.body;
                const filter = { _id: new ObjectId(id) }
                const options = { upsert: true };
                const updatedDoc = {
                    $set: {
                        title: updatedTask.title,
                        description: updatedTask.description,
                        deadline: updatedTask.deadline,
                        priority: updatedTask.priority
                    }
                }

                const result = await taskCollection.updateOne(filter, updatedDoc, options)
                res.send(result);
            } catch (err) {
                console.log("app.patch('/task/:id'", err)
                res.status(500).send(err); // Send an error response
            }
        })
        // update product api end

        // get Products api start
        app.get('/tasks', async (req, res) => {
            try {
                const result = await taskCollection.find().toArray();
                res.send(result);
            } catch (error) {
                console.log("error on app.get('/tasks'", error)
            }
        })
        // get Products api end

        // get single task by id start
        app.get('/task/:id', async (req, res) => {
            try {
                const id = req.params.id;
                if (!ObjectId.isValid(id)) {
                    return res.status(400).json({ error: 'Invalid ObjectId' });
                }
        
                const result = await taskCollection.findOne({ _id: new ObjectId(id) });
                res.send(result);
            } catch (error) {
                console.log("error on app.get('/task/:id'", error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
        // get single task by id end

        // delete product api start 
        app.delete('/task/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) }
                const result = await taskCollection.deleteOne(query);
                res.send(result);
            } catch (error) {
                console.log("'error on app.delete('/task/:id'", error)
            }
        })
        // delete product api end

        // get  product by email start
        app.get('/tasks/:email', async (req, res) => {
            try {
                const email = req.params.email
                const result = await taskCollection
                    .find({ 'email': email })
                    .toArray()
                res.send(result)
            } catch (error) {
                console.log("error on app.get('/tasks/:email'", error)
            }
        })
        // get  product by email end

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {

    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('TTM server is Running')
})

app.listen(port, () => {
    console.log(`server running on port: ${port}`);
})

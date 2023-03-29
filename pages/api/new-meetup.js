import { MongoClient } from "mongodb"

async function handler(req,res){
    if(req.method === 'POST'){
        const data = req.body
       //  const {title,image,address,description} =data;

         const client = await MongoClient.connect('mongodb+srv://gpgabika:Apqe0B1tezbGHfj1@cluster0.0n2z00u.mongodb.net/meetups?retryWrites=true&w=majority')
         const db =client.db()

         const meetupsCollection = db.collection('meetups')
         const result = await meetupsCollection.insertOne(data)

         client.close()

         res.status(201).json({message:'Meetupe inserted'})
    }
}

export default handler
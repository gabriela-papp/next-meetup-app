import Head from 'next/head'
import { MongoClient } from 'mongodb'

import MeetupList from '../components/meetups/MeetupList'
import { Fragment } from 'react'

function Home(props) {
  return <Fragment>

      <Head>
        <title>React Meetups</title>
        <meta name='description' content='Browse a huge list of Meetups in your area'/>
      </Head>
      <MeetupList meetups={props.meetups} />
  </Fragment>
}

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://gpgabika:Apqe0B1tezbGHfj1@cluster0.0n2z00u.mongodb.net/meetups?retryWrites=true&w=majority')
         const db =client.db()

         const meetupsCollection = db.collection('meetups')

         const meetups = await  meetupsCollection.find().toArray()
         client.close()

  return {
    props: {
      meetups: meetups.map(meetup=>({
        title:meetup.title,
        address:meetup.address,
        image:meetup.image,
        id:meetup._id.toString()
      })),
    },
    revalidate: 1,
  }
}

export default Home

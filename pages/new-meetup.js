import Head from 'next/head'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NewMeetupForm from '../components/meetups/NewMeetupForm'


function NewMeetup() {
const router = useRouter()

 async function addMeetupHandler(enteredData){
         const response = await fetch('/api/new-meetup',{
            method:'POST',
            body:JSON.stringify(enteredData),
            headers:{
                'Content-Type': 'application/json'
            }
         })
         const data= await response.json()
         console.log(data)
         router.push('/')
    }
  return (
      <Fragment>
        <Head>
          <title>Add a new Meetup</title>
        <meta name='description' content='Add a new meetup to a huge list of Meetups in your area'/>
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
      </Fragment>
    
  );
}

export default NewMeetup;
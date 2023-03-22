import MeetupList from '../components/meetups/MeetupList'

const DUMMY_DATA=[
    {
        id:'m1',
        title:'First Local Meetup',
        image:'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        address:'',
        description:''
    },{
          id:'m1',
        title:'Second Local Meetup',
        image:'https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
        address:'',
        description:''
    }
]

function Home() {
  return (
    <MeetupList meetups={DUMMY_DATA}/>
  )
  
}

export default Home

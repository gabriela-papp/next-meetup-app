import classes from '../meetups/MeetupDetail.module.css'

function MeetupDetail(props){
    return(
        <section className={classes.detail}>
            <img src={props.image}  />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    )
}

export async function getStaticPaths(){
    return{
        fallback:false,
        paths:[
           { params:{
                meetupDetail:'m1'
            }
        },
        { params:{
                meetupDetail:'m2'
            }
        }
        ]
    }
}


export async function getStaticProps(context){
    const meetupId = context.params.meetupId

    return {
        props:{
            meetupData:{
                image:'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                id:'a1',
                title:'details of the meetup',
                address:'1234 Some Road, Some Town',
                description:'Welcome to our meetup page.'
        }
    }
}
}

export default MeetupDetail
import NewMeetupForm from "../components/Meetups/NewMeetupForm";
import {useHistory} from 'react-router-dom';


function NewMeetupPage() {
    const history = useHistory();
    function addMeetupHandler(meetupData){
        fetch(
            'https://react-learn-new-default-rtdb.firebaseio.com/meetups.json',
            {
                method:'POST',
                body:JSON.stringify(meetupData),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }

  return <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </section>
}
export default NewMeetupPage;
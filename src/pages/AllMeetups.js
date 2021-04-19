import { useState, useEffect } from "react";
import MeetupList from "../components/Meetups/MeetupList";
import Spinner from "../components/ui/Spinner";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-learn-new-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json(); //this returns a promise so it has to resolved
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section style={{textAlign:"center"}}>
        <Spinner />
      </section>
    );
  }

  return (
    <div>
      <h1 style={{textAlign:"center"}}>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
}
export default AllMeetupsPage;

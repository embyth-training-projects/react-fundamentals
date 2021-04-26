import { useState, useEffect } from "react";
import CircleLoader from "react-spinners/CircleLoader";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupData, setMeetupData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-fundamentals-2cf0c-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const meetups = Object.entries(data).map(([id, data]) => ({
          id,
          ...data,
        }));

        setIsLoading(false);
        setMeetupData(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          position: `absolute`,
          top: `50%`,
          left: `50%`,
        }}
      >
        <CircleLoader color="#77002e" size={150} />
      </div>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList data={meetupData} />
    </section>
  );
}

export default AllMeetupsPage;

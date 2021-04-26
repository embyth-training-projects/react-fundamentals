import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function formSubmitHandler(meetupData) {
    fetch(
      "https://react-fundamentals-2cf0c-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(meetupData),
      }
    ).then(() => history.replace("/"));
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onFormSubmit={formSubmitHandler} />
    </section>
  );
}

export default NewMeetupPage;

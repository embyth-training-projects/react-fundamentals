import { useRef } from "react";

import Card from "../ui/Card";

import styles from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function formSubmitHandler(evt) {
    evt.preventDefault();

    const titleValue = titleInputRef.current.value;
    const imageValue = imageInputRef.current.value;
    const addressValue = addressInputRef.current.value;
    const descriptionValue = descriptionInputRef.current.value;

    const meetupData = {
      title: titleValue,
      image: imageValue,
      address: addressValue,
      description: descriptionValue,
    };

    props.onFormSubmit(meetupData);
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input ref={titleInputRef} id="title" type="text" required />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image Url</label>
          <input ref={imageInputRef} id="image" type="url" required />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Meetup Address</label>
          <input ref={addressInputRef} id="address" type="text" required />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            ref={descriptionInputRef}
            id="description"
            row="5"
            required
          />
        </div>
        <div className={styles.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;

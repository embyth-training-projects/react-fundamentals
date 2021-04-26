import Card from "../ui/Card";

import styles from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  return (
    <Card>
      <form className={styles.form}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input id="title" type="text" required />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image Url</label>
          <input id="image" type="url" required />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Meetup Address</label>
          <input id="address" type="text" required />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" row="5" required />
        </div>
        <div className={styles.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;

import { useContext } from "react";

import FavoritesContext from "../../store/favorites-context";
import Card from "../ui/Card";

import styles from "./MeetupItem.module.css";

function MeetupItem(props) {
  const { image, title, address, description, id } = props.meetup;

  const favoritesCtx = useContext(FavoritesContext);
  const isFavorite = favoritesCtx.itemIsFavorite(id);

  function favoriteButtonStatusHandler() {
    if (isFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite(props.meetup);
    }
  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <button type="button" onClick={favoriteButtonStatusHandler}>
            {isFavorite ? "Remove From Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

export function ContactListItem({ id, name, number, onDeleteContact }) {
  return (
    <li className={styles.listItem}>
      <span className={styles.contactText}>{name}: {number}</span>
      <button className={styles.deleteButton} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

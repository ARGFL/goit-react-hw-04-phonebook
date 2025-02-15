import PropTypes from 'prop-types';
import styles from './Filter.module.css'; // Import CSS module

export function Filter({ value, onFilterChange }) {
  return (
    <input
      className={styles.filterInput} // Apply the class
      type="text"
      value={value}
      onChange={e => onFilterChange(e.target.value)}
      placeholder="Search contacts"
    />
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};


import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css'; 

export function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>Name</label>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      
      <label className={styles.label}>Number</label>
      <input
        className={styles.input}
        type="tel"
        name="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        required
      />
      
      <button className={styles.button} type="submit">Add Contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

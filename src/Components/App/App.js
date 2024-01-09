import React /*{ useState }*/ from 'react';
import styles from './App.module.css';
import BusinessList from '../BusinessList/BusinessList';


function App() {
  return (
    <div className={styles.App}>
      <h1>Ravenous</h1>
      <BusinessList />
    </div>
  );
}

export default App;

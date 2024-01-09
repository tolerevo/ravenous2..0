import React /*{ useState }*/ from 'react';
import styles from './App.module.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div className={styles.App}>
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;

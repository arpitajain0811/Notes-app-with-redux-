import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="Home">
    <Link className="Link" to="/new">
      <b> New Note</b>
    </Link>
    <Link className="Link" to="/saved">
      <b>Saved Notes</b>
    </Link>
  </div>
);
export default Home;

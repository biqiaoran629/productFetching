import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {

  const [formData, setFromData] = useState({
    asin: ''
  });

  const { asin } = formData;

  const onChange = e => {
    return setFromData({
      ...formData, [e.target.name]: e.target.value
    })
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await axios.get(`/api/product/${asin}`);
      console.log(response.data);
    } catch (err) {
      console.error(err.response);
    }
  }

  return <form action="#" className="search" onSubmit={e => onSubmit(e)}>
    <input
      type="text"
      className="search__input"
      name="asin"
      placeholder="Search Product"
      value={asin}
      onChange={e => onChange(e)}
      required
    />
    <button className="search__button">
    </button>
  </form>;
}

export default SearchBar;
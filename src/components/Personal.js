import React, { useState, useEffect, useRef } from 'react';
import handleLocalStorage from './handleLocalStorage';

const Personal = () => {
  const [personalData, setPersonalData] = useState({});

  const onChange = (e) => {
    let key = e.target.id
    let value = e.target.value
    let newData= {}
    newData[key] = value
    setPersonalData( personalData => ({
      ...personalData,
      ...newData
    }))
  }
  
  useEffect(() => {
    handleLocalStorage(personalData)
  }, [personalData]);
  
  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(personalData));
  //   console.log(personalData["first-name"])
  //   console.log(localStorage)
  // }, [personalData]);

  return(
    <div className='form'>
      <h2>Personal Information</h2>
      <div className="first-name">
        <label className="form-label" htmlFor="first-name">First Name </label>
        <input  type="text" 
          name="" 
          id="first-name"  
          className="form-input"
          onChange={onChange}
        />
      </div>
      <div className="last-name">
        <label className="form-label" htmlFor="lastName">Last Name </label>
        <input  
        type="text" 
        name="last-name" 
        id="last-name"  
        className="form-input"
        onChange={onChange}
        />
      </div>
      <div className="email">
        <label className="form-label" htmlFor="email">Email </label>
        <input  
        type="text" 
        name="email" 
        id="email"  
        className="form-input"
        onChange={onChange}
        />
      </div>
      <div className="phone">
        <label className="form-label" htmlFor="phone">Phone </label>
        <input  
        type="tel"
        name="phone" 
        id="phone"  
        className="form-input"
        onChange={onChange}
        />
      </div>
    </div>
  )

}

export default Personal;
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Add.css';

const Add = ({ title, submitHandler, cancelHandler }) => {
  const [name, setName] = useState('');
  return (
    <div className="add-modal">

      <div className="add-container">
        <h1>{title}</h1>
        <form>
          <div>
            <label htmlFor="name">
              Name
              <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" />
            </label>
          </div>
          <div>
            <button onClick={() => submitHandler(name)} type="button">Create</button>
            <button onClick={cancelHandler} type="button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;

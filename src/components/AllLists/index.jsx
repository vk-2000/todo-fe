import React, { useState, useEffect } from 'react';
import './AllLists.css';
import { useNavigate } from 'react-router-dom';
import plusIcon from '../../assets/icons/plus-icon.svg';
import makeRequest from '../../utils/makeRequest';
import { ADD_LIST, GET_ALL_LISTS } from '../../constants/apiEndPoints';
import Add from '../Add';

const AllLists = () => {
  const [lists, setLists] = useState([]);
  const [toAdd, setToAdd] = useState(false);
  const navigate = useNavigate();
  const fetchLists = () => {
    makeRequest(GET_ALL_LISTS).then((response) => {
      setLists(response);
    });
  };
  useEffect(() => {
    fetchLists();
  }, []);
  const handleCancel = () => {
    setToAdd(false);
  };
  const handleAdd = (listName) => {
    makeRequest(ADD_LIST, { data: { name: listName }, navigate }).then((response) => {
      setLists([...lists, response]);
      setToAdd(false);
    });
  };
  return (
    <div className="lists-body">
      {toAdd && <Add title="Add list" cancelHandler={handleCancel} submitHandler={handleAdd} />}
      <div className="lists-btn-container">
        <button onClick={() => setToAdd(true)} type="button" className="lists-btn">
          <img height={50} width={50} src={plusIcon} alt="" />
          Create List
        </button>
      </div>
      <div className="lists-main">
        <div className="lists-title">Available Lists</div>
        <div className="lists-container">
          {lists.map((list) => (
            // eslint-disable-next-line max-len
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <div onClick={() => navigate(`/list/${list.id}`)} className="list-card" key={list.id}>
              <div className="list-card-name">{list.name}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AllLists;

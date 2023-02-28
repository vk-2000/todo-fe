import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_LIST_BY_ID } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './List.css';

const List = () => {
  const { id } = useParams();
  const [list, setList] = useState({});
  useEffect(() => {
    makeRequest(GET_LIST_BY_ID(id)).then((response) => setList(response));
  }, []);
  return (
    <div>
      <div className="list-title">{list.name}</div>
      <div className="tasks-container">
        {list.Tasks && list.Tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <div className="task-card-name">{task.name}</div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default List;

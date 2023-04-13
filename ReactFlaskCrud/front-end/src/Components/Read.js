
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Delete from './Delete';




const setToLocalStorage = (id, topic, description) => {
  localStorage.setItem('id', id);
  localStorage.setItem('topic', topic);
  localStorage.setItem('description', description);
};



const Read = () => {
  const [data, setData] = useState([{}]);



  useEffect(() => {
    fetch('/todo')
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data);
      });
  }, []);



  return (
    <>
      <h3 className='mb-4 heading'>Todo-List</h3>
      <div>
        <table className="table">
          <thead>
            <tr id='trStyle'>
              <th scope="col">Sl.no</th>
              <th scope="col">Topic</th>
              <th scope="col">Description</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((eachData,index) => {
              return (
                <tr key={eachData.id}>
                  <th scope="row">{index+1}</th>
                  <td>{eachData.topic}</td>
                  <td>{eachData.description}</td>
                  <td>
                    <Link to="/update">
                      <button
                        id="updateBtn"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.topic,
                            eachData.description
                          )
                        }
                      >
                        Update
                      </button>
                    </Link>
                  </td>
                  <td>
                    <Delete id={eachData.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <Link to="/create">
          <button color='blue' id='addTodoBtn'>
            Add Todo+
          </button>
        </Link>
      </div>
    </>
  );
};



export default Read;
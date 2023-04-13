
import React from 'react';
import { useNavigate } from 'react-router-dom';



const Delete = ({ id }) => {

    const history = useNavigate();

    const handleRemove = () => {

        fetch('/delete/' + id, {
            method: 'POST',
            body: JSON.stringify({
                id: id
            })
        })

            .then(response => response.json())
            .then(data => console.log(data))
            .then(() => {
                history('/');
            })

            .catch(error => console.error('Error:', error));
        window.location.reload();

    };



    return (

        <button className="deleteBtn" onClick={handleRemove}>
            Delete
        </button>

    );

};



export default Delete;




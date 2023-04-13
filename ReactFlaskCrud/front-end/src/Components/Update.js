
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';


function Update() {
    const [id, setId] = useState(0);
    const [addTopic, setAddTopic] = useState('');
    const [addDescription, setAddDescription] = useState('');
    const history = useNavigate();



    useEffect(() => {
        setId(localStorage.getItem('id'));
        setAddTopic(localStorage.getItem('topic'));
        setAddDescription(localStorage.getItem('description'));
    }, []);



    const handleUpdate = (e) => {
        e.preventDefault();
        fetch('/update/' + id, {
            method: 'POST',
            body: JSON.stringify({
                topic: addTopic,
                description: addDescription
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
            .then(response => response.json())
            .then(message => console.log(message))
            .then(() => {
                history('/');
            });
    }



    return (
        <>
            <h3 className='mb-4 heading'>Update Todo-List</h3>
            <Form>
                <Form.Field>
                    <label className="form-label">Topic</label><br></br>
                    <input type="text" value={addTopic} onChange={(e) => setAddTopic(e.target.value)} id="labelField"></input>
                </Form.Field>
                <Form.Field>
                    <label className="form-label">Description</label><br></br>
                    <input type="text" value={addDescription} onChange={(e) => setAddDescription(e.target.value)} id="labelField"></input>
                </Form.Field>
                <input type="submit" id="submitBtn" onClick={handleUpdate}></input>
                <Link to="/"><Button id="viewBtn">Back</Button></Link>
            </Form>
        </>
    )
}



export default Update;
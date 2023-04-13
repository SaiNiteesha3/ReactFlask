
import React from "react";
import { Form, Button } from 'semantic-ui-react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



export const Create = () => {

    const [addTopic, setAddTopic] = useState('');

    const [addDescription, setAddDescription] = useState('');

    const history = useNavigate();



    const handleSubmit = (e) => {

        e.preventDefault();

        fetch('/create', {

            method: 'POST',

            body: JSON.stringify({

                topic: addTopic,

                description: addDescription

            }),

            headers: {

                "Content-Type": "application/json; charset=UTF-8"

            }

        }).then(response => response.json())

            .then(message => console.log(message))

            .then(() => {

                history("/");

            });

    }



    return (

        <>
            <h3 className='mb-4 heading'>Create Todo</h3>
            <Form>
            <Form.Field>
                <label>Topic</label><br></br>
                <input type="text" value={addTopic} onChange={(e) => setAddTopic(e.target.value)} id="labelField"></input>
            </Form.Field>

            <Form.Field>
                <label >Description</label><br></br>
                <input type="text" value={addDescription} onChange={(e) => setAddDescription(e.target.value)} id="labelField"></input>
            </Form.Field>
            
                <button type="submit" id="submitBtn" onClick={handleSubmit}>Submit</button>
                <Link to="/"><Button id="viewBtn">View</Button></Link>
               
            </Form>

        </>

    )

}







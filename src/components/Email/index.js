import React from 'react';
import emailjs from 'emailjs-com';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Email() {


    function Email(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_k9gw8ll', e.target, 'user_BGjh1sRDSGwzot0DIczEl')
            .then((result) => {      
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()

    }

    return (
        <div>
            <Form onSubmit={Email}>
                <Form.Group style={{fontFamily:"Jura, sans-serif", fontWeight:"bold"}} controlId="exampleForm.ControlInput1">
                    <Form.Label >Name</Form.Label>
                    <Form.Control  required type="text" placeholder="Name" name="name" />
                </Form.Group>
                <Form.Group style={{fontFamily:"Jura, sans-serif", fontWeight:"bold"}} controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type="email" placeholder="Email " name="email" />
                </Form.Group>
                <Form.Group style={{fontFamily:"Jura, sans-serif", fontWeight:"bold"}} controlId="exampleForm.ControlInput1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control required type="text" placeholder="Subject" name="subject" />
                </Form.Group>
                <Form.Group style={{fontFamily:"Jura, sans-serif", fontWeight:"bold"}} controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control required as="textarea" rows="3" name="message" />
                </Form.Group>
                <Button type="submit" style={{ backgroundColor: "cornflowerblue",fontFamily:"Jura, sans-serif", fontWeight:"bold" }}>Send</Button>
                
            </Form>
        </div>
    );
}

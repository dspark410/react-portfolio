import React from 'react'
import emailjs from 'emailjs-com'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Email() {
  function Email(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_k9gw8ll',
        e.target,
        'user_BGjh1sRDSGwzot0DIczEl'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  //Show message button
  function showMessage() {
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const subject = document.getElementById('subject')
    const text = document.getElementById('text')

    if (
      name.value === '' ||
      email.value === '' ||
      subject.value === '' ||
      text.value === ''
    ) {
      return
    } else {
      const message = document.getElementById('message')
      message.innerText = 'Message sent succesfully!'

      setTimeout(() => {
        message.innerText = ''
      }, 1500)
    }
  }

  return (
    <div>
      <Form onSubmit={Email}>
        <Form.Group
          style={{ fontFamily: 'Jura, sans-serif', fontWeight: 'bold' }}
          controlId='exampleForm.ControlInput1'
        >
          <Form.Label>Name</Form.Label>
          <Form.Control
            id='name'
            required
            type='text'
            placeholder='Name'
            name='name'
          />
        </Form.Group>
        <Form.Group
          style={{ fontFamily: 'Jura, sans-serif', fontWeight: 'bold' }}
          controlId='exampleForm.ControlInput1'
        >
          <Form.Label>Email</Form.Label>
          <Form.Control
            id='email'
            required
            type='email'
            placeholder='Email '
            name='email'
          />
        </Form.Group>
        <Form.Group
          style={{ fontFamily: 'Jura, sans-serif', fontWeight: 'bold' }}
          controlId='exampleForm.ControlInput1'
        >
          <Form.Label>Subject</Form.Label>
          <Form.Control
            id='subject'
            required
            type='text'
            placeholder='Subject'
            name='subject'
          />
        </Form.Group>
        <Form.Group
          style={{ fontFamily: 'Jura, sans-serif', fontWeight: 'bold' }}
          controlId='exampleForm.ControlTextarea1'
        >
          <Form.Label>Message</Form.Label>
          <Form.Control
            id='text'
            required
            as='textarea'
            rows='3'
            name='message'
          />
        </Form.Group>
        <Button
          onClick={showMessage}
          type='submit'
          style={{
            backgroundColor: 'cornflowerblue',
            fontFamily: 'Jura, sans-serif',
            fontWeight: 'bold',
          }}
        >
          Send
        </Button>
        <span className='message' id='message'></span>
      </Form>
    </div>
  )
}

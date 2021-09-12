import React from 'react'
import {Form,Button} from "react-bootstrap"

export default function Contact() {
    return (
        <div>
            <h1>Contact page</h1>
            <p>Please feel free to contact us please by filling out the form below.</p>
            <Form>
                <Form.Group className="mb-3" controlId="form.contact.email">
                    <Form.Label>Email address: </Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="form.contact.textArea">
                    <Form.Control as="textarea" rows={3} placeholder="Enter message here" />
                </Form.Group>
                <Button variant="primary">Submit</Button>
            </Form>
        </div>
    )
}

import React from 'react';
import { Activity } from './../../../app/models/Activity';
import { Button, Form, Segment } from 'semantic-ui-react'; 
interface Props {
    activity: Activity[]
}

export default function ActivityForm({activity}:Props)
{
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Title'/>
                <Form.TextArea placeholder='Descripcion'/>
                <Form.Input placeholder='Category'/>
                <Form.Input placeholder='Date'/>
                <Form.Input placeholder='City'/>
                <Form.Input placeholder='Venue'/>
                <Button floated='right' positive type='submit' content='Enviar' />
                <Button floated='right' type='button' content='Cancelar' />
            </Form>
        </Segment>
    )
}
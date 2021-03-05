import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { Activity } from './../../../app/models/Activity';

interface Props
{
    activity: Activity;
    cancelSelectActivity: () => void;
}
export default function ActivityDetails({activity, cancelSelectActivity}: Props) {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`}/>
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.time}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
          </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button basic color='blue' content='Editar'/>
                    <Button onClick={cancelSelectActivity} basic color='grey' content='Cancelar'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
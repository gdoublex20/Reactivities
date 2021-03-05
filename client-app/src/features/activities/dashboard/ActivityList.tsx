import React from 'react';
import { Activity } from './../../../app/models/Activity';
import {Button, Item, Label, Segment} from 'semantic-ui-react';

//Las interfaces se utilizan para poder crear un modelo de la entidad, asi al momento de pasarlos por .map 
//encontrar errores de sintaxis si nos equivocamos al llamar un parametro
interface Props {
    activities: Activity[];
    selectActivity: (id:string) =>  void;
}

export default function ActivityList({activities, selectActivity}: Props)
{
    return(
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.time}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated='right' content='view' color='blue'/>
                                <Label basic content={activity.category}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}
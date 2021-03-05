import React from 'react';
import { Grid, Item, Button, Label } from 'semantic-ui-react';

    const ActivityDashboard = (props) =>{
        return (
            <Grid>
                <Grid.Column width='10'>
                    <Item.Group divided>
                        {props.activities.map((activity, index) => (
                            <Item key={index}>
                                <Item.Content>
                                    <Item.Header as='a'>{activity.title}</Item.Header>
                                    <Item.Meta>{activity.time}</Item.Meta>
                                    <Item.Description>
                                        <div>{activity.description}</div>
                                        <div>{activity.city}, {activity.venue}</div>
                                    </Item.Description>
                                    <Item.Extra>
                                        <Button floated='right' content='view' color='blue'/>
                                        <Label basic content={activity.category}/>
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        ))}
                    </Item.Group>
                </Grid.Column>
            </Grid>
        )
    }

    export default ActivityDashboard
   

import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from './../../../app/models/Activity';
import ActivityList from './ActivityList';
import ActivityDetails from './../details/ActivityDetails';
import ActivityForm from './../form/ActivityForm';

interface Props
{
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity:(id:string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id : string) => void;
    closeForm:() => void;
    createOrEdit: (activity: Activity) => void; 
    deleteActivity: (id:string) => void;
    submitting: boolean;
}

export default function ActivityDashboard({activities, selectActivity, selectedActivity, cancelSelectActivity, 
    editMode, openForm, closeForm, createOrEdit, deleteActivity, submitting}:Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList 
                activities={activities} 
                selectActivity={selectActivity}  
                deleteActivity={deleteActivity}
                submitting={submitting}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {/* podemos usar doble ampersand, y 
                cuando doblamos fácilmente el ampersand aquí, estamos diciendo que cualquier cosa 
                a la derecha de esto se ejecutará siempre que no sea nulo o indefinido.  */}
                {selectedActivity && !editMode &&
                <ActivityDetails 
                activity={selectedActivity} 
                cancelSelectActivity={cancelSelectActivity} 
                openForm={openForm}
                />}
                {editMode &&
                <ActivityForm 
                submitting={submitting} 
                closeForm={closeForm} 
                activity={selectedActivity} 
                createOrEdit={createOrEdit}/>}
            </Grid.Column>
        </Grid>
    )
}

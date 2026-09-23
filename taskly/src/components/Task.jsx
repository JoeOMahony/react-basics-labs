import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const Task = (props) => {

    return (
        <Grid
            key={props.id}
            size={{ xs: 12, md: 4 }}
        >
            <Card
                sx={{
                    backgroundColor: props.done ? 'lightgrey' : 'lightblue',
                    padding: '20px'
                }}
            >
                <CardHeader
                    title={props.title}
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '3px',
                        padding: '20px',
                        textAlign: 'center'
                    }}
                />

                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'baseline',
                            mb: 2,
                            padding: '20px'
                        }}
                    >
                        <Typography
                            component="p"
                            variant="subtitle2"
                            color="text.primary"
                        >
                        </Typography>

                        <Typography
                            component="p"
                            variant="subtitle1"
                            align="center"
                            sx={{ fontStyle: 'italic' }}
                        >
                            {props.description}
                        </Typography>

                        <CardActions
                            sx={{
                                justifyContent: 'space-betweeen',
                                padding: '20px'
                            }}
                        >
                            <Button
                                variant="contained"
                                size="small"
                                color="success"
                                onClick={props.markDone}
                            >
                                Done
                            </Button>

                            <Button
                                variant="contained"
                                size="small"
                                color="error"
                                onClick={props.deleteTask}
                            >
                                Delete
                            </Button>
                        </CardActions>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
    // return (
    //     <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
    //         <p className="title">{props.title}</p>
    //         <p>Due: {props.deadline}</p>
    //         <p className="description">{props.description}</p>
    //         <p className="priority" style={{backgroundColor: props.priority == "Low" ? 'green' : props.priority == "Medium" ? 'orange' : 'red'}}>{props.priority}</p>

    //         <button onClick={props.markDone} className='doneButton'>Done</button>
    //         <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
    //     </div>
    // )
}

export default Task;
import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SubmitIcon from '@mui/icons-material/CheckCircle';


const Task = (props) => {

    return (
        <Grid
            key={props.id}
            size={{ xs: 12, md: 4 }}
        >
            <Card
                sx={{
                    backgroundColor: props.done ? 'lightgreen' : 'lightblue',
                    border: props.done ? '2px dotted green' : 'inherit',
                    padding: '20px',
                    '&:hover': {
                        transform: 'scale(1.02)',
                        transition: 'transform 0.33s ease-in-out',
                    },
                }}
            >
                <CardHeader
                    title={props.title}
                    sx={{
                        backgroundColor: props.done ? '#F4F9F4' : 'white',
                        borderRadius: '3px',
                        padding: '20px',
                        textAlign: 'center',
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
                            sx={{
                                textDecoration: props.done ? 'line-through' : 'none',
                                fontWeight: props.done ? 'normal' : 'bold',
                            }}
                        >
                            Due: {props.deadline}
                        </Typography>
                    </Box>

                    <Typography
                        component="p"
                        variant="subtitle1"
                        align="center"
                        sx={{ fontStyle: 'italic' }}
                    >
                        {props.description}
                    </Typography>
                </CardContent>

                <CardActions
                    sx={{
                        justifyContent: 'space-between',
                        padding: '20px'
                    }}
                >
                    <Button
                        variant="contained"
                        size="small"
                        color="success"
                        onClick={props.markDone}
                        sx={{
                            '&:hover': { transform: 'scale(1.05)' },
                            '&:active': {
                                transform: 'scale(0.95)',
                                backgroundColor: 'darkgreen'
                            }
                        }}
                    >
                        <Tooltip title="Done">
                            <IconButton>
                                <SubmitIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </Tooltip>
                        {/* <CheckCircleIcon sx={{ pr: '2px' }} />
                        Done */}
                    </Button>

                    <Button
                        variant="contained"
                        size="small"
                        color='error'
                        onClick={props.deleteTask}
                        sx={{
                            '&:hover': { transform: 'scale(1.05)' },
                            '&:active': {
                                transform: 'scale(0.95)',
                                backgroundColor: 'darkred'
                            }
                        }}
                    >
                        <Tooltip title="Delete">
                            <IconButton>
                                <DeleteIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </Tooltip>
                        {/* <RemoveCircleIcon sx={{ pr: '2px' }} />
                        Delete */}
                    </Button>
                </CardActions>
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
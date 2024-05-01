import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Paper from '@mui/material/Paper';

const TaskList = ({ tasks, deleteTask, completeTask }) => {
  return (
    <Paper>
      <List>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <>
                <IconButton edge="end" aria-label="complete" onClick={() => completeTask(index)}>
                  <CheckCircleIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(index)}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemText primary={task.name} secondary={task.description} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TaskList;

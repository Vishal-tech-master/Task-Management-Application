import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TaskTabs from './TaskTabs';

const TaskTrackerApp = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const completeTask = (index) => {
    const taskToComplete = tasks[index];
    setCompletedTasks([...completedTasks, taskToComplete]);
    deleteTask(index);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Task Tracker</Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <TaskTabs
          tasks={tasks}
          completedTasks={completedTasks}
          addTask={addTask}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      </Container>
    </>
  );
};

export default TaskTrackerApp;

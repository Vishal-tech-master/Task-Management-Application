import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Settings from './Settings';

const TaskTabs = ({ tasks, completedTasks, addTask, completeTask, deleteTask }) => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={tabValue} onChange={handleChange}>
        <Tab label="Tasks" />
        <Tab label="Completed Tasks" />
        <Tab label="Settings" />
      </Tabs>

      {tabValue === 0 && (
        <Box>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
        </Box>
      )}

      {tabValue === 1 && (
        <Box>
          <TaskList tasks={completedTasks} deleteTask={() => {}} completeTask={() => {}} />
        </Box>
      )}

      {tabValue === 2 && <Settings />}
    </Box>
  );
};

export default TaskTabs;

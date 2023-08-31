import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskForm from './TaskForm.jsx';
import TaskList from './TaskList.jsx';
import TaskDetails from './TaskDetails.jsx';

function App() {
  const [tasksUpdateTimestamp, setTasksUpdateTimestamp] = useState(new Date().getTime());

  const handleTaskCreation = (timestamp) => {
    setTasksUpdateTimestamp(timestamp);
  };
  
  return (
    <Router>
      <div className="App">
          <h1>Task Tracker</h1>
          <Routes>
            <Route path="/" exact element={
              <>
                <TaskForm onTaskCreation={handleTaskCreation}  />
                <TaskList onTasksUpdate={tasksUpdateTimestamp}/>
              </>
            } />
            <Route path="/task/:id" exact element={<TaskDetails />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
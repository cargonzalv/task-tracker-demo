import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const options = { year: "numeric", month: "numeric", day: "numeric"};

const TaskDetails = () => {
  const [task, setTask] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/api/tasks/${id}`);
      const data = await res.json();
      setTask(data);
    };

    fetchTask();
  }, [id]);

  const handleGoAllTasks = () => {
    navigate('/');
  };

  return (
    <div className="card">
      <h2>Task Title: {task.title}</h2>
      <sub>Created At: {new Date(task.createdAt).toLocaleDateString('en-US', options)}</sub>
      <p>Description: {task.description}</p>
      <div>
        <strong>Details:</strong>
        <p>{task.details}</p>
      </div>
      <button onClick={handleGoAllTasks}>All Tasks</button>
    </div>
  );
};

export default TaskDetails;
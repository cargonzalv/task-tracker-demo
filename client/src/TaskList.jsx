import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './TaskStyles.css';
import { Link } from 'react-router-dom';

const options = { year: "numeric", month: "numeric", day: "numeric"};

const TaskList = ({ onTasksUpdate }) => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/api/tasks');
        const data = await res.json();
        setTasks(data);
    };

    useEffect(() => {
        fetchTasks();
      }, [onTasksUpdate]);

    return (
        <div>
            {tasks.map((task) => (
                <div className='card' key={task._id}>
                    <h2>{task.title}</h2>
                    <sub>{new Date(task.createdAt).toLocaleDateString('en-US', options)}</sub>
                    <p>{task.description}</p>
                    <Link to={`/task/${task._id}`}>
                        View Details
                    </Link>
                </div>
            ))}
        </div>
    );
};

TaskList.propTypes = {
    onTasksUpdate: PropTypes.number.isRequired
}

export default TaskList;
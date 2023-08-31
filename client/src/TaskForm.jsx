import { useState } from 'react';
import PropTypes from 'prop-types';
import './TaskStyles.css';

const TaskForm = ({ onTaskCreation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [details, setDetails] = useState('');
    const [error, setError] = useState(''); // To hold validation error messages

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error
         // Validate fields
        if (!title || !description || !details) {
            setError('All fields are required.');
            return;
        }
        const newTask = {
            title,
            description,
            details,
        };
        try {
            await fetch('http://localhost:5000/api/tasks', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            });
            setTitle('');
            setDescription('');
            setDetails('');
            onTaskCreation(new Date().getTime()); // Trigger re-fetching of tasks
        } catch (err) {
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                <textarea value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Details"></textarea>
                <button type="submit">Add Task</button>
            </form>
            {error && <p className="error">{error}</p>}
        </>
    );
};

TaskForm.propTypes = {
    onTaskCreation: PropTypes.func
}

export default TaskForm;
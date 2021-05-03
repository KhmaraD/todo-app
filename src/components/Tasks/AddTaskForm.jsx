import React, {useState} from 'react';
import addSvg from "../../assets/images/add.svg";
import {tasksAPI} from "../api/api";

const AddTaskForm = ({list, onAddTask}) => {
    const [visibleForm, setVisibleForm] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const toggleFormVisible = () => {
        setVisibleForm(!visibleForm);
        setInputValue('');
    };

    const addTask = () => {
        const obj = {
            listId: list.id,
            text: inputValue,
            completed: false
        };
        setIsLoading(true);
        tasksAPI.addTask(obj, onAddTask, list, toggleFormVisible, setIsLoading);
    };

    return (
        <div className="tasks__form">
            {!visibleForm
                ? <div onClick={toggleFormVisible} className="tasks__form-new">
                    <img src={addSvg} alt="Add icon"/>
                    <span>New task</span>
                </div>
                : <div className="tasks__form-block">
                    <input value={inputValue}
                           className="field"
                           type="text"
                           placeholder="Task name"
                           onChange={e => setInputValue(e.target.value)} />
                    <button disabled={isLoading} onClick={addTask} className="button">
                        {isLoading ? 'Adding...' : 'Add task'}
                    </button>
                    <button onClick={toggleFormVisible} className="button button--grey">
                        Cancel
                    </button>
                </div>}
        </div>
    );
};

export default AddTaskForm;
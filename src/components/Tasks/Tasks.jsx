import React from 'react';
import { Link } from 'react-router-dom';
import {listsAPI} from "../api/api";

import editSvg from '../../assets/images/edit.svg';

import './Tasks.scss';
import AddTaskForm from './AddTaskForm';
import Task from './Task';

const Tasks = ({
                   list,
                   onEditTitle,
                   onAddTask,
                   onRemoveTask,
                   onEditTask,
                   onCompleteTask,
                   withoutEmpty
               }) => {
    const editTitle = () => {
        const newTitle = window.prompt('List name', list.name);
        if (newTitle) {
            onEditTitle(list.id, newTitle);
            listsAPI.editListTitle(list, newTitle);
        }
    };

    return (
        <div className="tasks">
            <Link to={`/lists/${list.id}`}>
                <h2 style={{ color: list.color.hex }} className="tasks__title">
                    {list.name}
                    <img onClick={editTitle} src={editSvg} alt="Edit icon" />
                </h2>
            </Link>

            <div className="tasks__items">
                {!withoutEmpty && list.tasks && !list.tasks.length && (
                    <h2>There are no tasks</h2>
                )}
                {list.tasks &&
                list.tasks.map(task => (
                    <Task
                        key={task.id}
                        list={list}
                        onEdit={onEditTask}
                        onRemove={onRemoveTask}
                        onComplete={onCompleteTask}
                        {...task}
                    />
                ))}
                <AddTaskForm key={list.id} list={list} onAddTask={onAddTask} />
            </div>
        </div>
    );
};

export default Tasks;
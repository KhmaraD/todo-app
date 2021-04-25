import React, {useState} from 'react';
import addSvg from "../../assets/images/add.svg";

const AddTaskForm = () => {

    const [visibleForm, setVisibleForm] = useState(false);

    const toggleFormVisible = () => {
        setVisibleForm(!visibleForm);
    }

    return (
        <div className="tasks__form">
            {!visibleForm
                ? <div onClick={toggleFormVisible} className="tasks__form-new">
                    <img src={addSvg} alt="Add icon"/>
                    <span>New task</span>
                </div>
                : <div className="tasks__form-block">
                    <input className="field"
                           type="text"
                           placeholder="Task text"/>
                    <button className="button">
                        Add task
                    </button>
                    <button onClick={toggleFormVisible} className="button button--grey">
                        Cancel
                    </button>
                </div>}
        </div>
    );
}

export default AddTaskForm;
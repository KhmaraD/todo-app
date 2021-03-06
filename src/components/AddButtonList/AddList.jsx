import React, {useEffect, useState} from 'react';
import List from "../List/List";
import Badge from "../Badge/Badge";
import {listsAPI} from "../api/api";

import closeSvg from '../../assets/images/close.svg'
import "./AddList.scss";

const AddList = ({ colors, onAdd }) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, selectColor] = useState(3);
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (Array.isArray(colors)) {
            selectColor(colors[0].id);
        }
    }, [colors]);

    const onClose = () => {
        setVisiblePopup(false);
        setInputValue('');
        selectColor(colors[0].id);
    }

    const addList = () => {
        if (!inputValue) {
            alert('Enter the name of the list');
            return;
        }
        setIsLoading(true);
        listsAPI.addList(inputValue, colors, selectedColor, onAdd, onClose, setIsLoading);
    }

    return (
        <div className="add-list">
            <List
                onClick={ () => setVisiblePopup(true)}
                items={[
                {
                    className: "list__add-button",
                    icon: (
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    ),
                    name: 'Add list',
                },
            ]} />
            {visiblePopup && <div className="add-list__popup">
                <img
                    onClick={onClose}
                    src={closeSvg}
                    alt="Close button"
                    className="add-list__popup-close-btn"/>
                <input value={inputValue}
                       onChange={e => setInputValue(e.target.value)}
                       className="field"
                       type="text"
                       placeholder="List name"/>
                <div className="add-list__popup-colors">
                    { colors.map(color => (
                        <Badge
                            onClick={() => selectColor(color.id)}
                            key={color.id}
                            color={color.name}
                            className={selectedColor === color.id && 'active'}/>
                    ))}
                </div>
                <button onClick={addList} className="button">
                    {isLoading ? 'Adding...' : 'Add'}
                </button>
            </div>}
        </div>
    );
}

export default AddList;
import './App.css';
import listSvg from "./assets/images/list.svg";
import React, {useState, useEffect} from "react";
import { List, AddList, Tasks} from './components'
import axios from 'axios'
import { Route, useLocation, useHistory } from 'react-router-dom'

const App = () => {
    const [lists, setLists] = useState(null);
    const [colors, setColors] = useState(null);
    const [activeItem, setActiveItem] = useState(null);
    let history = useHistory();
    let location = useLocation()

    useEffect(() => {
        axios.get('http://localhost:3004/lists?_expand=color&_embed=tasks')
            .then(({data}) => {
                setLists(data);
            });
        axios.get('http://localhost:3004/colors')
            .then(({data}) => {
                setColors(data);
            });
    }, []);

    const onAddList = (obj) => {
        const newList = [...lists, obj];
        setLists(newList);
    };

    const onAddTask = (listId, taskObj) => {
        const newList = lists.map(item => {
            if (item.id === listId) {
                item.tasks = [...item.tasks, taskObj]
            }
            return item;
        });
        setLists(newList);
    };

    const onEditListTitle = (id, title) => {
        const newList = lists.map(item => {
            if (item.id === id) {
                item.name = title;
            }
            return item;
        });
        setLists(newList);
    }

    useEffect(() => {
        const listId = history.location.pathname.split('lists/')[1];
        if (lists) {
            const list = lists.find(list => list.id === Number(listId));
            setActiveItem(list);
        }
    }, [lists, history.location.pathname]);

  return (
      <div className="todo">
          <div className="todo__sidebar">
              <List
                  onClickItem={list => {
                      history.push(`/`);
                  }}
                  items={[
                  {
                      active: true,
                      icon: (
                          <img src={listSvg} alt="list icon" />
                      ),
                      name: 'All tasks',
                  }
              ]}/>
              {lists ? (
                  <List
                      items={lists}
                      onRemove={id => {
                          const newLists = lists.filter(item => item.id !== id);
                          setLists(newLists);
                      }}
                      onClickItem={list => {
                          history.push(`/lists/${list.id}`);
                      }}
                      activeItem={activeItem}
                      isRemovable
                  />
              ) : (
                  'Loading...'
              )}
              <AddList onAdd={onAddList} colors={colors} />
          </div>
          <div className="todo__tasks">
              <Route exact path="/">
                  {lists &&
                  lists.map(list => (
                      <Tasks
                          key={list.id}
                          list={list}
                          onAddTask={onAddTask}
                          onEditTitle={onEditListTitle}
                          withoutEmpty/>
                  ))}
              </Route>
              <Route path="/lists/:id">
                  {lists && activeItem && (
                      <Tasks
                          list={activeItem}
                          onAddTask={onAddTask}
                          onEditTitle={onEditListTitle} />
                  )}
              </Route>
          </div>
      </div>
  );
}
export default App;

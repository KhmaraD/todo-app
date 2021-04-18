import './App.css';
import listSvg from "./assets/images/list.svg";
import React, {useState, useEffect} from "react";
import { List, AddList, Tasks} from './components'
import axios from 'axios'
// import DB from './assets/db.json'

const App = () => {
    const [lists, setLists] = useState(null);
    const [colors, setColors] = useState(null);
        // DB.lists.map(item => {
        //     item.color = DB.colors.filter(color => color.id === item.colorId)[0].name;
        //     return item;
        // })


    useEffect(() => {
        axios.get('http://localhost:3004/lists?_expand=color')
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

  return (
      <div className="todo">
          <div className="todo__sidebar">
              <List
                  items={[
                  {
                      icon: (
                          <img src={listSvg} alt="list icon" />
                      ),
                      name: 'All tasks',
                      active: true,
                  }
              ]}/>
              {lists ? (
                  <List
                      items={lists}
                      onRemove={id => {
                          const newLists = lists.filter(item => item.id !== id);
                          setLists(newLists);
                      }}
                      isRemovable
                  />
              ) : (
                  'Loading...'
              )}
              <AddList onAdd={onAddList} colors={colors} />
          </div>
          <div className="todo__tasks">
            <Tasks />
          </div>
      </div>
  );
}
export default App;

import './App.css';
import List from "./components/List/List";
import listSvg from "./assets/images/list.svg";
import React, {useState} from "react";
import AddList from "./components/AddButtonList/AddList";

import DB from './assets/db.json'
import Tasks from "./components/Tasks/Tasks";

const App = () => {
    const [lists, setLists] = useState(
        DB.lists.map(item => {
            item.color = DB.colors.filter(color => color.id === item.colorId)[0].name;
            return item;
        })
    );

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
              <List
                  items={lists}
                  onRemove={(item) => console.log(item)}
                  isRemovable />
              <AddList colors={DB.colors}
                       onAddList={onAddList}/>
          </div>
          <div className="todo__tasks">
            <Tasks />
          </div>
      </div>
  );
}
export default App;

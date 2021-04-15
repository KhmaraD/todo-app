import './App.css';
import List from "./components/List/List";
import listSvg from "./assets/images/list.svg";
import React, {useState} from "react";
import AddList from "./components/AddButtonList/AddList";

import DB from './assets/db.json'

const App = () => {
    const [lists, setLists] = useState(
        DB.lists.map(item => {
            item.color = DB.colors.filter(color => color.id === item.colorId)[0].name;
            return item;
        })
    );
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
              <List items={lists} isRemovable />
              <AddList colors={DB.colors}/>
          </div>
          <div className="todo__tasks">
          </div>
      </div>
  );
}
export default App;

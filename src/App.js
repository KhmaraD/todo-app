import './App.css';
import List from "./components/List/List";
import listSvg from "./assets/images/list.svg";
import React from "react";
import AddList from "./components/AddButtonList/AddList";

import DB from './assets/db.json'

const App = () => {
    // const [state, setState] = useState(initialState)
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
              <List items={[
                  {
                      color: 'green',
                      name: 'Shopping',
                  },
                  {
                      color: 'blue',
                      name: 'Frontend',
                  },
                  {
                      color: 'pink',
                      name: 'Books'
                  }
              ]}
              isRemovable />
              <AddList colors={DB.colors}/>
          </div>
          <div className="todo__tasks">

          </div>
      </div>
  );
}
export default App;

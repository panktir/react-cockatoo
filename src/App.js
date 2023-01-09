import React, { createElement } from 'react';
var todoList = [{
  id: 1,
  title: "complete assignment",
},
{
  id: 2,
  title: "reading",
},
{
  id: 3,
  title: "laundry",
}];

function App() {
  
  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      {/* render list */}
      <ul>
      {todoList.map(function(item) {
        return (
          <li key={item.id}>{item.title}</li>
        )
})
}
      </ul>
    </div>
  
  );
}

export default App;

import React from 'react';

const ListView = ({ todoList }) => {
  return (<div>
    <ol>
      {todoList.map((item) => {
        return (
          <li key={item.key}>
            <span>{item.value}</span>
            <button type="button">Complete</button>
            <button type="button">Delete</button>
          </li>
        )
      })}
    </ol>
  </div>)
}

export default ListView;
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./main.css"
import { TestClass, TestComp } from "./components/TestReact/test"
import { Message } from "./components/message/message"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <h1 className="header">Hello React</h1>
    <TestClass 
    props1={1} 
    props2="Привет" 
    props3={ false } 
    props4={() => console.log("props")}
    props5={[1,2,3]}
    props6={[{title: "Car", year: 2020}, {title: "Auto", year: 2001}]}
    testMessage={
      <TestComp 
      message=""
      />
    }
    />
    <Message
    messageProps="Некий текст для ДЗ"
    />
  </React.StrictMode>
);



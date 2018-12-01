import React from 'react';
import ReactDOM from 'react-dom';
import AdminMenu from "./components/AdminMenu";
//import Template from "./Template";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdminMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});

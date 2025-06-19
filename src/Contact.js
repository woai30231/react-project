import React from 'react';
import { Outlet } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h1>联系我们</h1>
      <p>这里是联系我们页面的内容。6666</p>
      <Outlet />
    </div>
  );
};

export default Contact;
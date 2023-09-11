import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="p-5 md:p-16 lg:px-64">
      {children}
    </div>
  );
};

export default Layout;

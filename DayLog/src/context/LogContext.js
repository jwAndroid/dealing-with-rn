import React from 'react';
import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const LogContext = createContext();

export const LogContextProvider = ({ children }) => {
  const [logs, setLogs] = useState([
    {
      id: uuidv4(),
      title: 'title1',
      body: 'body1',
      date: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      title: 'title2',
      body: 'body2',
      date: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
    },
    {
      id: uuidv4(),
      title: 'title3',
      body: 'body3',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    },
  ]);

  const onCreate = ({ title, body, date }) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };

    setLogs([log, ...logs]);
  };

  return (
    <LogContext.Provider value={{ logs, onCreate }}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;

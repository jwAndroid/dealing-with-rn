import React, { useEffect, useRef } from 'react';
import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import logsStorage from '../storages/logsStorage';

const LogContext = createContext();

export const LogContextProvider = ({ children }) => {
  const initialLogRef = useRef(null);

  const [logs, setLogs] = useState([]);

  const onRemove = id => {
    const nextLogs = logs.filter(log => log.id !== id);

    setLogs(nextLogs);
  };

  const onModify = modified => {
    const nextLogs = logs.map(log => (log.id === modified.id ? modified : log));

    setLogs(nextLogs);
  };

  const onCreate = ({ title, body, date }) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };

    setLogs([log, ...logs]);
  };

  useEffect(() => {
    (async () => {
      const savedLogs = await logsStorage.get();

      if (savedLogs) {
        initialLogRef.current = savedLogs;

        setLogs(savedLogs);
      }
    })();
  }, []);

  useEffect(() => {
    if (logs === initialLogRef.current) {
      return;
    }

    logsStorage.set(logs);
  }, [logs]);

  return (
    <LogContext.Provider value={{ logs, onCreate, onModify, onRemove }}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;

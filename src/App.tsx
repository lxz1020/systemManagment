import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routeConfig } from './router/routes';
import { ConfigProvider, theme } from 'antd';

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#72D8F9',
        },
      }}
    >
      <Router>
        <Routes>
          {routeConfig.map(route => (
            <Route 
              key={route.path}
              path={route.path} 
              element={<route.component />} 
            />
          ))}
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;


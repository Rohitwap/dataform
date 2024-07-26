import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import AdminMaster from './AdminMaster';
import MasterMaster from './MasterMaster';
// other imports...

function AdminPanel() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div>
      <Tabs value={currentTab} onChange={handleTabChange}>
        <Tab label="Admin Master" />
        <Tab label="Master Master" />
        <Tab label="Super Agent Master" />
        <Tab label="Agent Master" />
        <Tab label="Client Master" />
      </Tabs>
      {currentTab === 0 && <AdminMaster />}
      {currentTab === 1 && <MasterMaster />}
      {currentTab === 2 && <SuperAgentMaster />}
      {currentTab === 3 && <AgentMaster />}
      {currentTab === 4 && <ClientMaster />}
    </div>
  );
}

export default AdminPanel;

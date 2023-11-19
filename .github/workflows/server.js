const express = require('express');
const si = require('systeminformation');

const app = express();
const port = 5000; 

app.get('/api/v1/systemInformation', async (req, res) => {
  try {
    const cpu = await si.cpu();
    const system = await si.system();
    const mem = await si.mem();
    const os = await si.osInfo();
    const currentLoad = await si.currentLoad();
    const processes = await si.processes();
    const diskLayout = await si.diskLayout();
    const networkInterfaces = await si.networkInterfaces();

    const systemInformation = {
      cpu,
      system,
      mem,
      os,
      currentLoad,
      processes,
      diskLayout,
      networkInterfaces
    };

    res.json(systemInformation);
  } catch (error) {
    //console.error('Error fetching system information:', error);
    res.status(500).json({ error: 'Server Error' });
  }
});

app.use((req, res) => {
  res.status(404).json();
});

app.listen(port, () => {
  console.log(`Server listening on the port: `, port);
});
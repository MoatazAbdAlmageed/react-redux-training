import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function Home() {
  return (
    <div className="Home">

      <Tabs defaultActiveKey="your-feed" id="uncontrolled-tab-example">
        <Tab eventKey="your-feed" title="Your Feed">
          No articles are here ... yet.
        </Tab>
        <Tab eventKey="global-feed" title="Global Feed">
          No global articles are here ... yet.
        </Tab>
      </Tabs>

    </div>
  );
}

export default Home;

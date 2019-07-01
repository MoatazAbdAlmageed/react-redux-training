import React from 'react';

function Home() {
    return (
        <div className="Home">

            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-your-feed" data-toggle="tab" href="#nav-your-feed"
                       role="tab" aria-controls="nav-your-feed" aria-selected="true">Your Feed</a>
                    <a className="nav-item nav-link" id="nav-global-feed-tab" data-toggle="tab" href="#nav-global-feed"
                       role="tab" aria-controls="nav-global-feed" aria-selected="false">Global Feed</a>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-your-feed" role="tabpanel"
                     aria-labelledby="nav-your-feed">
                    <p>No articles are here... yet.</p>
                </div>
                <div className="tab-pane fade" id="nav-global-feed" role="tabpanel"
                     aria-labelledby="nav-global-feed-tab">
                    <p>Global articles here</p>
                </div>
            </div>

        </div>
    );
}

export default Home;

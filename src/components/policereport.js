

import React, { useState, useEffect } from "react";
const { tableau } = window;


function PoliceViz() {
  const [url] = useState("https://public.tableau.com/views/HartfordPoliceIncidentsVisualization/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link");
  const [viz, setViz] = useState(null);
  const options = {
    width: "1400px",
    height: "800px"
    }

  const initViz = () => {
    let containerDiv = document.getElementById("container");
    setViz(new tableau.Viz(containerDiv, url, options));
  };

  // eslint-disable-next-line
  useEffect(initViz, []);

  const exportToPDF = () => {
    viz.showExportPDFDialog();
  };

  return (
    <div>
      <h1>Export PDF</h1>
      <div  id="container" class="viz"/>
      <button class="btn" onClick={exportToPDF}>Export PDF</button>

    </div>
    
  );
}

const setVizStyle = {
  width: "1300px",
  height: "1000px",
};

export default PoliceViz;
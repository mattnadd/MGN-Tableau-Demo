

import React, { useState, useEffect } from "react";
const { tableau } = window;


function PoliceViz() {
  const [url] = useState("https://public.tableau.com/views/HartfordPoliceIncidentsVisualization/Dashboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link");
  const [viz, setViz] = useState(null);
  const options = {
   width: "800px",
   height: "800px"

    }

  const initViz = () => {
    let containerDiv = document.getElementById("container");
    setViz(new tableau.Viz(containerDiv, url, options));
  };
  const resizeViz = () =>{
    var width = document.getElementById("container").clientWidth;
    var height = document.getElementById("container").clientHeight;
    viz.setFrameSize(width, height);
};

  // eslint-disable-next-line
  useEffect(initViz,()=>{
    window.addEventListener('resize', resizeViz);
  }, []);


  const exportToPDF = () => {
    viz.showExportPDFDialog();
  };

  return (
    <div>
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
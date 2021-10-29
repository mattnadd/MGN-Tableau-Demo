
import TabScale from 'tabscale';
import React, { useState, useEffect } from "react";
const { tableau } = window;


function CoffeeViz() {

  const [url] = useState("https://public.tableau.com/views/HartfordPoliceIncidentsVisualization/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link");
  const [viz, setViz] = useState(null);



  const initViz = () => {
    const tabScale = new TabScale.Scale(document.getElementById('tableauViz'))
    const  options = {
      onFirstInteractive: () => {
          tabScale.initialize();
      }
  }

    let containerViz = document.getElementById("tableauViz");
    setViz(new tableau.Viz(containerViz, url, options));
  };

  // eslint-disable-next-line
  useEffect(initViz, []);

  const exportToPDF = () => {
    viz.showExportPDFDialog();
  };

  return (
    <div>
      <button class="btn" onClick={exportToPDF}>Export PDF</button>
      <div  id="tableauViz"/>

      </div>

    
  );
}



export default CoffeeViz;
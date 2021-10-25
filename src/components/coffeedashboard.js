

import React, { useState, useEffect } from "react";
const { tableau } = window;


function CoffeeViz() {
  const [url] = useState("https://public.tableau.com/views/CoffeeChainProfitbilityDashboard/CoffeeChainFinancialDashboard?:language=en-US&:display_count=n&:origin=viz_share_link");
  const [viz, setViz] = useState(null);
  const options = {
    width: "800px",
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
      <div  id="container" class="viz"/>
      <button class="btn" onClick={exportToPDF}>Export PDF</button>

    </div>
    
  );
}



export default CoffeeViz;

import TabScale from "tabscale";
import React, { useState, useEffect } from "react";
const { tableau } = window;

function CoffeeViz() {
  const [url] = useState("https://public.tableau.com/views/CoffeeChainProfitbilityDashboard/CoffeeChainFinancialDashboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link");
  const [viz, setViz] = useState(null);


  const initViz = (deviceType) => {
    const tabScale = new TabScale.Scale(document.getElementById('tableauViz'))
    var pixelWidth;
    // eslint-disable-next-line
    const MOBILEPIXELWIDTH = 600;
    var width;
    var height; 
  // eslint-disable-next-line
    switch (deviceType) {
      case "phone":
        //width = pixelWidth-15;		//-scroll bar to perfectly fit viz into screen
        height = 2000;												
        //document.getElementsByClassName("inner")[0].style.margin = "0px";	//getting rid of margin
        
        var currentMargin = document.getElementsByClassName("inner")[0].offsetLeft;
        console.log("currentMargin: "+currentMargin);
        width = pixelWidth-currentMargin*2;	//x2 because of offset/margin is set to AUTO (left and right)
        break;
      case "desktop": {			
        height = 900;
        //document.getElementsByClassName("inner")[0].style.margin = "0 auto";
        // eslint-disable-next-line
        var currentMargin = document.getElementsByClassName("inner")[0].offsetLeft;
        console.log("currentMargin: "+currentMargin);
        width = pixelWidth-currentMargin*2;	//x2 because of offset/margin is set to AUTO (left and right)	
        break;
      }					
    }	
    document.getElementById("tableauViz").style.width = width+"px";
		document.getElementById("tableauViz").style.height = height+"px";
    
    
    const  options = {
      device: deviceType,
      width: width,
      height: height,
      onFirstInteractive: () => {    
        tabScale.initialize();
      }
  }
   
    let containerViz = document.getElementById("tableauViz");
    setViz(new tableau.Viz(containerViz, url, options));
  };

  // eslint-disable-next-line
initViz()

  const exportToPDF = () => {
    viz.showExportPDFDialog();
  };

  return (
    <div>
    <button class="btn" onClick={exportToPDF}>Export PDF</button>
    <div id="tableauViz"/>
    </div>
  );
}



export default CoffeeViz;
document.getElementById("calculator").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const sampleSize = Number(document.getElementById("sampleSize").value);
    const populationStdDev = Number(document.getElementById("populationStdDev").value);
    const confidenceLevel = Number(document.getElementById("confidenceLevel").value);
    const criticalnum = Number(document.getElementById("critical").value);
  
    const standardError = populationStdDev / Math.sqrt(sampleSize);
    const criticall1 = 1 - confidenceLevel;
    const criticall2 = criticall1/2;
    const criticall3 = 0.5-criticall2;
    const marginOfError = criticalnum * standardError;
  
    document.getElementById("results").innerHTML = `
      <p>Standard Error: ${standardError.toFixed(4)}</p>
      <p>Critical Number: ${criticall3.toFixed(4)}</p>
      <p>Margin of Error: ${marginOfError.toFixed(4)}</p>
    `;
  });

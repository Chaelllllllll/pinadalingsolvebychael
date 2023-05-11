function calculate() {
    const sampleSize = Number(document.getElementById("sample-size").value);
    const sampleMean = Number(document.getElementById("sample-mean").value);
    const populationStdDev = Number(document.getElementById("population-std-dev").value);
    
    const standardError = populationStdDev / Math.sqrt(sampleSize);
    const criticalNumber = 1.96; // 95% confidence interval
    const marginOfError = criticalNumber * standardError;
    
    document.getElementById("standard-error").innerText = standardError.toFixed(4);
    document.getElementById("critical-number").innerText = criticalNumber.toFixed(4);
    document.getElementById("margin-of-error").innerText = marginOfError.toFixed(4);
  }
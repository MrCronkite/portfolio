











var i = 100;
setInterval(() => {
  if(i==100){
     
      document.getElementById("number").textContent = i;
      i+=100;
    document.getElementById("usa_").style.backgroundColor = "#8A27E5";
    document.getElementById("usa").style.fill = "#8A27E5";
  }else if(i==200){
    
    document.getElementById("number").textContent = i;
    i+=100;
    document.getElementById("europ_").style.backgroundColor = "#2F80ED";
    document.getElementById("europ").style.fill = "#2F80ED";
  }
  else if(i==300){
    
    document.getElementById("number").textContent = i;
    i+=100;
    document.getElementById("sng_").style.backgroundColor = "#E82D53";
    document.getElementById("sng").style.fill = "#E82D53";
  }else if(i==400){
    document.getElementById("number").textContent = i;
    i+=100;
    document.getElementById("asia_").style.backgroundColor = "#F2724A";
    document.getElementById("asia").style.fill = "#F2724A";
  }else if(i==500){
    document.getElementById("number").textContent = i;
    i+=100;
    document.getElementById("africa_").style.backgroundColor = "#F2B94A";
    document.getElementById("africa").style.fill = "#F2B94A";
  }else if(i==600){
    document.getElementById("number").textContent = i;
    i+=100;
    document.getElementById("oceania_").style.backgroundColor = "#68dc00";
   document.getElementById("oceania").style.fill = "#68dc00";
  }else if(i==700){
    document.getElementById("number").textContent = i;
    i+=100;
document.getElementById("australia_").style.backgroundColor = "#94DB21";
document.getElementById("australia").style.fill = "#94DB21";
  }else if(i==800){
    document.getElementById("number").textContent = i;
    document.getElementById("lamerica_").style.backgroundColor = "#4CB8F5";
    document.getElementById("lamerica").style.fill = "#4CB8F5";
    i+=100;
  }else if(i==900){
    document.getElementById("number").textContent = 0;
    document.getElementById("lamerica_").style.backgroundColor = "#434343";
    document.getElementById("lamerica").style.fill = "#434343";
    document.getElementById("australia_").style.backgroundColor = "#434343";
    document.getElementById("australia").style.fill = "#434343";
    document.getElementById("africa_").style.backgroundColor = "#434343";
    document.getElementById("africa").style.fill = "#434343";
    document.getElementById("oceania_").style.backgroundColor = "#434343";
    document.getElementById("oceania").style.fill = "#434343";
    document.getElementById("asia_").style.backgroundColor = "#434343";
    document.getElementById("asia").style.fill = "#434343";
    document.getElementById("sng_").style.backgroundColor = "#434343";
    document.getElementById("sng").style.fill = "#434343";
    document.getElementById("europ_").style.backgroundColor = "#434343";
    document.getElementById("europ").style.fill = "#434343";
    document.getElementById("usa_").style.backgroundColor = "#434343";
    document.getElementById("usa").style.fill = "#434343";
    i=100;
  }
}, 1000);




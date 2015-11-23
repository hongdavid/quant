
function go1(){
var s=document.getElementById('s').value*1;
var k=document.getElementById('k').value*1;
var v=document.getElementById('v').value*1;
var t=document.getElementById('t').value*1;
var r=document.getElementById('r').value*1;    
var q=document.getElementById('q').value*1;  
var min=document.getElementById('min1').value*1;
var max=document.getElementById('max1').value*1;
var ti=document.getElementById('t1').value*1;



for (k1=1;k1<=5;k1=k1+1){
 for (k2=1;k2<=2;k2=k2+1){
 if(document.getElementById("s2").selectedIndex==k1&&document.getElementById("s3").selectedIndex==k2){
var kk1=[];
var kk2=[];
var a3=[];
kk1.push('','stock price','strike price','volatility','time','interest rate');
kk2.push('','call price','put price');
var xx=kk1[k1];
var xxx=kk2[k2];

for (i=min;i<=max;i=i+ti){
if (k1==1){s=i}else if(k1==2){k=i}else if(k1==3){v=i}else if(k1==4){t=i}else{r=i};
         if(document.getElementById("s1").selectedIndex==3){
         if(k2==1){
         a3.push([i,bintree_c(s,k,v,t,r)])}
         else{a3.push([i,bintree_p(s,k,v,t,r)])}
         }else{
         if(k2==1){
         a3.push([i,bsc(s,k,v,t,r,q)])}
         else{a3.push([i,bsp(s,k,v,t,r,q)])
         }}
}}}}
var yyy1 = document.getElementById("yyyy");
yyy1.style.position = "absolute";
yyy1.style.top = "550px";
yyy1.style.left = "650px";
var x1 = document.getElementById("x1");
var y1 = document.getElementById("y1");
x1.innerHTML=xxx;
x1.style.position = "absolute";
x1.style.top = "500px";
x1.style.left = "650px";
x1.style.color = "#ff5050";

y1.innerHTML=xx;
y1.style.position = "absolute";
y1.style.top = "930px";
y1.style.left = "1100px";
y1.style.color = "#ff5050";


        var dataset = [{label: "Model/Factor",data:a3}];
       var options = {
    series: {
        lines: {
            show: true,
        },
        points:{
        symbol: "circle",
            show: true,
            fillColor: "#990000",
            radius: 0
        }
    },
    colors: ["#ff0000"],grid: { hoverable: true,
    borderWidth: 3,
    borderColor: "#990000",
    backgroundColor: { colors: [" #FFF2E5", " #FFF2E5"] }
    }
};
 
        $(document).ready(function () {
            $.plot($("#yyyy"), dataset, options);
        });
        
        function showTooltip(x, y, contents) {  
            $('<div id="tooltip">' + contents + '</div>').css( {  
                position: 'absolute',  
                display: 'none',  
                top: y + 10,  
                left: x + 10,  
                border: '1px solid #3366cc', 
                padding: '20px',  
                'background-color': '#d6f5f5',  
                opacity: 0.9  
            }).appendTo("body").fadeIn(200);  
        }  
var previousPoint = null;  
        
        $("#yyyy").bind("plothover", function (event, pos, item) {  
            if (item) {  
                if (previousPoint != item.dataIndex) {  
                    previousPoint = item.dataIndex;  
                    $("#tooltip").remove();  
                    var x=item.datapoint[0].toFixed(2);  
                    var y=item.datapoint[1].toFixed(2);
                    var tap=xx;  
                    var tip=xxx;
                    showTooltip(item.pageX, item.pageY,tap+':'+x+"</br>"+tip+':'+y);  
                }  
            }  
            else {  
                $("#tooltip").remove();  
                previousPoint = null;  
            }  
        });  
    }
    
                 


function go2(){
var s=document.getElementById('s').value*1;
var k=document.getElementById('k').value*1;
var v=document.getElementById('v').value*1;
var t=document.getElementById('t').value*1;
var r=document.getElementById('r').value*1;
var q=document.getElementById('q').value*1; 
var min=document.getElementById('min2').value*1;
var max=document.getElementById('max2').value*1;
var ti=document.getElementById('t2').value*1;  

for (k1=1;k1<=5;k1=k1+1){
 for (k2=1;k2<=10;k2=k2+1){
 if(document.getElementById("s4").selectedIndex==k1&&document.getElementById("s5").selectedIndex==k2){

var kk1=[];
var kk2=[];
var a3=[];
kk1.push('','stock price','strike price','volatility','time','interest rate');
kk2.push('','call delta','put delta','call gamma','put gamma','call theta','put theta','call vega','put vega','call rho','put rho');
var xx=kk1[k1];
var xxx=kk2[k2];


for (i=min;i<=max;i=i+ti){
if (k1==1){s=i}else if(k1==2){k=i}else if(k1==3){v=i}else if(k1==4){t=i}else{r=i};

  if(document.getElementById("s1").selectedIndex==3){
                   if(k2==1){a3.push([i,bindelta_c(s,k,v,t,r,q)])}
              else if(k2==2){a3.push([i,bindelta_p(s,k,v,t,r,q)])}
              else if(k2==3){a3.push([i,bingamma_c(s,k,v,t,r,q)])}
              else if(k2==4){a3.push([i,bingamma_p(s,k,v,t,r,q)])}
              else if(k2==5){a3.push([i,bintheta_c(s,k,v,t,r,q)])}
              else if(k2==6){a3.push([i,bintheta_p(s,k,v,t,r,q)])}
              else if(k2==7){a3.push([i,binvega_c(s,k,v,t,r,q)])}
              else if(k2==8){a3.push([i,binvega_p(s,k,v,t,r,q)])}
              else if(k2==9){a3.push([i,binrho_c(s,k,v,t,r,q)])}
              else{a3.push([i,binrho_p(s,k,v,t,r,q)])}
              }
              else{

              if(k2==1){a3.push([i,c_delta(s,k,v,t,r,q)])}
              else if(k2==2){a3.push([i,p_delta(s,k,v,t,r,q)])}
              else if(k2==3){a3.push([i,gamma(s,k,v,t,r,q)])}
              else if(k2==4){a3.push([i,gamma(s,k,v,t,r,q)])}
              else if(k2==5){a3.push([i,c_theta(s,k,v,t,r,q)])}
              else if(k2==6){a3.push([i,p_theta(s,k,v,t,r,q)])}
              else if(k2==7){a3.push([i,vega(s,k,v,t,r,q)])}
              else if(k2==8){a3.push([i,vega(s,k,v,t,r,q)])}
              else if(k2==9){a3.push([i,c_rho(s,k,v,t,r,q)])}

              }
}}}}

var yyy1 = document.getElementById("xxxx");
yyy1.style.position = "absolute";
yyy1.style.top = "550px";
yyy1.style.left = "1250px";
var x2 = document.getElementById("x2");
var y2 = document.getElementById("y2");
x2.innerHTML=xxx;
x2.style.position = "absolute";
x2.style.top = "500px";
x2.style.left = "1250px";
x2.style.color = "#ff5050";

y2.innerHTML=xx;
y2.style.position = "absolute";
y2.style.top = "930px";
y2.style.left = "1700px";
y2.style.color = "#ff5050";

        var dataset = [{label: "Greeks/Factor",data:a3}];
       var options = {
    series: {
        lines: {
            show: true,
        },
        points:{
        symbol: "circle",
            show: true,
            radius: 0
        }
    },
    colors: ["#0000ff"],grid: { hoverable: true,
    borderWidth: 3,
    borderColor: "#990000",
    backgroundColor: { colors: [" #FFF2E5", " #FFF2E5"] }
    }
};
 
        $(document).ready(function () {
            $.plot($("#xxxx"), dataset, options);
        });
        
        function showTooltip(x, y, contents) {  
            $('<div id="tooltip">' + contents + '</div>').css( {  
                position: 'absolute',  
                display: 'none',  
                top: y + 10,  
                left: x + 10,  
                border: '1px solid #3366cc',  
                padding: '20px',  
                'background-color': '#d6f5f5',  
                opacity: 0.9  
            }).appendTo("body").fadeIn(200);  
        }  
var previousPoint = null;  
        
        $("#xxxx").bind("plothover", function (event, pos, item) {  
            if (item) {  
                if (previousPoint != item.dataIndex) {  
                    previousPoint = item.dataIndex;  
                    $("#tooltip").remove();  
                    var x=item.datapoint[0].toFixed(2);  
                    var y=item.datapoint[1].toFixed(2);
                    var tap=xx;  
                    var tip=xxx;
                    showTooltip(item.pageX, item.pageY,tap+':'+x+"</br>"+tip+':'+y);  
                }  
            }  
            else {  
                $("#tooltip").remove();  
                previousPoint = null;  
            }  
        });  
    }

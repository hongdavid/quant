



function go(){
s1=document.getElementById("s1").selectedIndex*1;
s2=document.getElementById("s2").selectedIndex*1;
c_price=[];
p_price=[];
c_price.push(bsc(),c_delta(),gamma(),c_delta(),vega(),c_rho());
p_price.push(bsp(),p_delta(),gamma(),p_delta(),vega(),p_rho());

switch (s1){
 case 1:
 c_price[0]=bsc();p_price[0]=bsp();
 break;
 case 2:
 c_price[0]=bintree_c();p_price[0]=bintree_p();
 break;
}

switch (s2){
case 1:
for (i=0;i<=5;i++){
document.getElementById(i).value=c_price[i];
}
break;
case 2:
for (i=0;i<=5;i++){
document.getElementById(i).value=p_price[i];
}
break;
}

}



function ncdf(a){
var flag=0;

if(a<0){
flag=1;
a=Math.abs(a)
}

var rr=0.2316419;
var a1=0.31938153;
var a2=-0.356563782;
var a3=1.781477937;
var a4=-1.821255978;
var a5=1.330274429;
var pp=1/(1+a*rr);
var pi=3.14159265359;
var value=1-Math.exp(a*a/(-2))*(a1*pp+a2*Math.pow(pp,2)+a3*Math.pow(pp,3)+a4*Math.pow(pp,4)+a5*Math.pow(pp,5))/Math.sqrt(2*pi);

if (flag==1) { return 1-value;
    }
else{ return value;
}
}



function bsc(){
var s=document.getElementById('s').value;
var k=document.getElementById('k').value;
var v=document.getElementById('v').value;
var t=document.getElementById('t').value;
var r=document.getElementById('r').value;

var d1=(Math.log(s/k)+(r*1+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var nd1=ncdf(d1);
var d2=d1-v*Math.pow(t,0.5);
var nd2=ncdf(d2);
var c=s*nd1-k*Math.exp(-r*t)*nd2;
return c;
}

function bsp(){
var s=document.getElementById('s').value;
var k=document.getElementById('k').value;
var v=document.getElementById('v').value;
var t=document.getElementById('t').value;
var r=document.getElementById('r').value;

var d1=(Math.log(s/k)+(r*1+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var nd1=ncdf(-d1);
var d2=d1-v*Math.pow(t,0.5);
var nd2=ncdf(-d2);
var p=-s*nd1+k*Math.exp(-r*t)*nd2;
return p;
}

 
function bintree_c(){
var t=document.getElementById('t').value;
var dt=t/100;
var v=document.getElementById('v').value;
var rf=document.getElementById('r').value;
var s=document.getElementById('s').value;
var k=document.getElementById('k').value;
var cc=0;
var r=Math.exp(dt*rf);
var u=Math.exp(v*Math.pow(dt,0.5));
var d=1/u;
var p=(r-d)/(u-d);
var c;
        
for (i=0;i<=100;i++){
        c=(Math.pow(u,i)*Math.pow(d,(100-i))*s)-k;
        
if (c>0){
cc=cc+stag(100,i)*Math.pow(p,i)*Math.pow((1-p),(100-i))*c;
}
}
return cc/Math.pow(r,100);
}



function bintree_p(){
var t=document.getElementById('t').value;
var dt=t/100;
var v=document.getElementById('v').value;
var rf=document.getElementById('r').value;
var s=document.getElementById('s').value;
var k=document.getElementById('k').value;
var ppp=0;
var r=Math.exp(dt*rf);
var u=Math.exp(v*Math.pow(dt,0.5));
var d=1/u;
var p=(r-d)/(u-d);
var pp;
        
for (i=0;i<=100;i++){
        pp=k-(Math.pow(u,i)*Math.pow(d,(100-i))*s);
if(pp>0){
ppp=ppp+stag(100,i)*Math.pow(p,i)*Math.pow((1-p),(100-i))*pp;
}
}
return ppp;
}


function stag(a,b){
var n,i=1,j=1,k=1,p;
 for (n=1; n<=a; n=n+1) {
        i=i*n;}
    for (n=1; n<=b; n=n+1) {
        j=j*n;
    }
     for (n=1; n<=(a-b); n=n+1) {
        k=k*n;
    }
     p=i/(j*k);
    
    return p;}


function npdf(a){
var pi=3.14159265359;
return (1/Math.pow(2*pi,0.5))*Math.exp(-(Math.pow(a,2))/2);
}


function c_delta(){
var s=document.getElementById('s').value;
var k=document.getElementById('k').value;
var v=document.getElementById('v').value;
var t=document.getElementById('t').value;
var r=document.getElementById('r').value;
var q=document.getElementById('q').value;

var d1=(Math.log(s/k)+(r*1-q+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var nd1=ncdf(d1);
return Math.exp(-q*t)*nd1;
}

function p_delta(){
var s=document.getElementById('s').value;
var k=document.getElementById('k').value;
var v=document.getElementById('v').value;
var t=document.getElementById('t').value;
var r=document.getElementById('r').value;
var q=document.getElementById('q').value;
var d1=(Math.log(s/k)+(r*1-q+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var nd1=ncdf(d1);
return Math.exp(-q*t)*(nd1-1);
}

function gamma(){
var s=document.getElementById('s').value;
var k=document.getElementById('k').value;
var v=document.getElementById('v').value;
var t=document.getElementById('t').value;
var r=document.getElementById('r').value;
var q=document.getElementById('q').value;
var d1=(Math.log(s/k)+(r*1-q+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var nd1=npdf(d1);
return Math.exp(-q*t)*nd1/(s*v*Math.pow(t,0.5));
}

function c_theta(){
var s=document.getElementById('s').value;
var k=document.getElementById('k').value;
var v=document.getElementById('v').value;
var t=document.getElementById('t').value;
var r=document.getElementById('r').value;
var q=document.getElementById('q').value;
var d1=(Math.log(s/k)+(r*1-q+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var d2=d1-v*Math.pow(t,0.5);
var npd1=npdf(d1);
var ncd1=ncdf(d1);
var ncd2=ncdf(d2); 
return ((-s*v*npd1*Math.exp(-q*t))/(2*Math.pow(t,0.5)))-r*k*ncd2*Math.exp(-r*t)+q*s*ncd1*Math.exp(-q*t);;
}

function p_theta(){
var s=document.getElementById('s').value;
var k=document.getElementById('k').value;
var v=document.getElementById('v').value;
var t=document.getElementById('t').value;
var r=document.getElementById('r').value;
var q=document.getElementById('q').value;
var d1=(Math.log(s/k)+(r*1-q+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var d2=d1-v*Math.pow(t,0.5);
var npd1=npdf(d1);
var ncd1=ncdf(-d1);
var ncd2=ncdf(-d2);
return ((-s*v*npd1*Math.exp(-q*t))/(2*Math.pow(t,0.5)))+r*k*ncd2*Math.exp(-r*t)+q*s*ncd1*Math.exp(-q*t);
}

function vega(){
var s=document.getElementById('s').value;
var k=document.getElementById('k').value;
var v=document.getElementById('v').value;
var t=document.getElementById('t').value;
var r=document.getElementById('r').value;
var q=document.getElementById('q').value;
var d1=(Math.log(s/k)+(r*1-q+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var nd1=npdf(d1);
return s*Math.exp(-q*t)*nd1*Math.pow(t,0.5);
}

function c_rho(){
var s=document.getElementById('s').value;
var k=document.getElementById('k').value;
var v=document.getElementById('v').value;
var t=document.getElementById('t').value;
var r=document.getElementById('r').value;
var q=document.getElementById('q').value;
var d1=(Math.log(s/k)+(r*1-q+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var d2=d1-v*Math.pow(t,0.5);
var nd2=ncdf(d2);
return k*t*Math.exp(-r*t)*nd2;
}

function p_rho(){
var s=document.getElementById('s').value;
var k=document.getElementById('k').value;
var v=document.getElementById('v').value;
var t=document.getElementById('t').value;
var r=document.getElementById('r').value;
var q=document.getElementById('q').value;
var d1=(Math.log(s/k)+(r*1-q+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var d2=d1-v*Math.pow(t,0.5);
var nd2=ncdf(-d2);
return -k*t*Math.exp(-r*t)*nd2;
}
function bsc(s,k,v,t,r,q){
var cc=document.getElementById('cc').value*1;
var d1=(Math.log(s/k)+(r*1-q+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var nd1=ncdf(d1);
var d2=d1-v*Math.pow(t,0.5);
var nd2=ncdf(d2);
var c=s*nd1-k*Math.exp(-r*t)*nd2;
return c*cc;
}

function bsp(s,k,v,t,r,q){
var cc=document.getElementById('cc').value*1;
var d1=(Math.log(s/k)+(r*1-q+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var nd1=ncdf(-d1);
var d2=d1-v*Math.pow(t,0.5);
var nd2=ncdf(-d2);
var p=-s*nd1+k*Math.exp(-r*t)*nd2;
return p*cc;
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

function npdf(a){
var pi=3.14159265359;
return (1/Math.pow(2*pi,0.5))*Math.exp(-(Math.pow(a,2))/2);
}


function c_delta(s,k,v,t,r,q){
var cc=document.getElementById('cc').value*1;
var d1=(Math.log(s/k)+(r*1-q+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var nd1=ncdf(d1);
return (Math.exp(-q*t)*nd1)*cc;
}

function p_delta(s,k,v,t,r,q){
var cc=document.getElementById('cc').value*1;
var d1=(Math.log(s/k)+(r*1-q+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var nd1=ncdf(d1);
return (Math.exp(-q*t)*(nd1-1))*cc;
}

function gamma(s,k,v,t,r,q){
var cc=document.getElementById('cc').value*1;
var d1=(Math.log(s/k)+(r*1-q+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var nd1=npdf(d1);
return (Math.exp(-q*t)*nd1/(s*v*Math.pow(t,0.5)))*cc;
}

function c_theta(s,k,v,t,r,q){
var cc=document.getElementById('cc').value*1;
var d1=(Math.log(s/k)+(r*1-q+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var d2=d1-v*Math.pow(t,0.5);
var npd1=npdf(d1);
var ncd1=ncdf(d1);
var ncd2=ncdf(d2); 
return (((-s*v*npd1*Math.exp(-q*t))/(2*Math.pow(t,0.5)))-r*k*ncd2*Math.exp(-r*t)+q*s*ncd1*Math.exp(-q*t))*cc;
}

function p_theta(s,k,v,t,r,q){
var cc=document.getElementById('cc').value*1;
var d1=(Math.log(s/k)+(r*1-q+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var d2=d1-v*Math.pow(t,0.5);
var npd1=npdf(d1);
var ncd1=ncdf(-d1);
var ncd2=ncdf(-d2);
return (((-s*v*npd1*Math.exp(-q*t))/(2*Math.pow(t,0.5)))+r*k*ncd2*Math.exp(-r*t)-q*s*ncd1*Math.exp(-q*t))*cc;
}

function vega(s,k,v,t,r,q){
var cc=document.getElementById('cc').value*1;
var d1=(Math.log(s/k)+(r*1-q+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var nd1=npdf(d1);
return (s*Math.exp(-q*t)*nd1*Math.pow(t,0.5))*cc;
}

function c_rho(s,k,v,t,r,q){
var cc=document.getElementById('cc').value*1;
var d1=(Math.log(s/k)+(r*1-q+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var d2=d1-v*Math.pow(t,0.5);
var nd2=ncdf(d2);
return (k*t*Math.exp(-r*t)*nd2)*cc;
}

function p_rho(s,k,v,t,r,q){
var cc=document.getElementById('cc').value*1;
var d1=(Math.log(s/k)+(r*1-q+(Math.pow(v,2)/2))*t)/(v*Math.pow(t,0.5));
var d2=d1-v*Math.pow(t,0.5);
var nd2=ncdf(-d2);
return (-k*t*Math.exp(-r*t)*nd2)*cc;
}

function bintree_c(s,k,v,t,rf){
var ccc=document.getElementById('cc').value*1;
var bt=document.getElementById('bt').value*1;
var dt=t/bt;
var cc=0;
var r=Math.exp(dt*rf);
var u=Math.exp(v*Math.pow(dt,0.5));
var d=1/u;
var p=(r-d)/(u-d);
var c;
        
for (ii=0;ii<=bt;ii++){
        c=(Math.pow(u,ii)*Math.pow(d,(bt-ii))*s)-k;
        
if (c>0){
cc=cc+stag(bt,ii)*Math.pow(p,ii)*Math.pow((1-p),(bt-ii))*c;
}
}
return (cc/Math.pow(r,bt))*ccc;
}



function bintree_p(s,k,v,t,rf){
var cc=document.getElementById('cc').value*1;
var bt=document.getElementById('bt').value*1;
var dt=t/bt;
var ppp=0;
var r=Math.exp(dt*rf);
var u=Math.exp(v*Math.pow(dt,0.5));
var d=1/u;
var p=(r-d)/(u-d);
var pp;
        
for (ii=0;ii<=bt;ii++){
        pp=k-(Math.pow(u,ii)*Math.pow(d,(bt-ii))*s);
if(pp>0){
ppp=ppp+stag(bt,ii)*Math.pow(p,ii)*Math.pow((1-p),(bt-ii))*pp;
}
}
return (ppp/Math.pow(r,bt))*cc;
}


function stag(a,b){
var m,n,iii=1;
 for (m=b*1+1,n=1;m<=a,n<=(a-b);m++,n++) {
        iii=iii*(m/n)}
    return iii;
}
    
function bindelta_c(s,k,v,t,rf){
var cc=document.getElementById('cc').value*1;
var bt=document.getElementById('bt').value*1-1;

var dt=t/bt;
var cc1=0;
var cc2=0;
var r=Math.exp(dt*rf);
var u=Math.exp(v*Math.pow(dt,0.5));
var d=1/u;
var p=(r-d)/(u-d);
var c1;
var c2;     
for (ii1=0;ii1<=bt;ii1++){
        c1=(Math.pow(u,ii1)*Math.pow(d,(bt-ii1))*s*u)-k;
        
if (c1>0){
cc1=cc1+stag(bt,ii1)*Math.pow(p,ii1)*Math.pow((1-p),(bt-ii1))*c1;
}
}
cc1=(cc1/Math.pow(r,bt));

for (ii2=0;ii2<=bt;ii2++){
        c2=(Math.pow(u,ii2)*Math.pow(d,(bt-ii2))*s*d)-k;
if (c2>0){
cc2=cc2+stag(bt,ii2)*Math.pow(p,ii2)*Math.pow((1-p),(bt-ii2))*c2;
}
}
cc2=(cc2/Math.pow(r,bt));

return ((cc1-cc2)/(s*u-s*d))*cc;

}

function bindelta_p(s,k,v,t,rf){
var cc=document.getElementById('cc').value*1;
var bt=document.getElementById('bt').value*1-1;

var dt=t/bt;
var cc1=0;
var cc2=0;
var r=Math.exp(dt*rf);
var u=Math.exp(v*Math.pow(dt,0.5));
var d=1/u;
var p=(r-d)/(u-d);
var c1;
var c2;     
for (ii1=0;ii1<=bt;ii1++){
        c1=k-(Math.pow(u,ii1)*Math.pow(d,(bt-ii1))*s*u);
        
if (c1>0){
cc1=cc1+stag(bt,ii1)*Math.pow(p,ii1)*Math.pow((1-p),(bt-ii1))*c1;
}
}
cc1=(cc1/Math.pow(r,bt));

for (ii2=0;ii2<=bt;ii2++){
        c2=k-(Math.pow(u,ii2)*Math.pow(d,(bt-ii2))*s*d);
if (c2>0){
cc2=cc2+stag(bt,ii2)*Math.pow(p,ii2)*Math.pow((1-p),(bt-ii2))*c2;
}
}
cc2=(cc2/Math.pow(r,bt));

return ((cc1-cc2)/(s*u-s*d))*cc;

}

function bintheta_c(s,k,v,t,rf){
var cc=document.getElementById('cc').value*1;
var bt0=document.getElementById('bt').value*1;
var bt2=document.getElementById('bt').value*1-2;

var dt=t/bt0;
var r=Math.exp(dt*rf);
var u=Math.exp(v*Math.pow(dt,0.5));
var d=1/u;
var p=(r-d)/(u-d);
var cc0=0;
var cc2=0;
var c0;
var c2;     
for (ii0=0;ii0<=bt0;ii0++){
        c0=(Math.pow(u,ii0)*Math.pow(d,(bt0-ii0))*s)-k;
        
if (c0>0){
cc0=cc0+stag(bt0,ii0)*Math.pow(p,ii0)*Math.pow((1-p),(bt0-ii0))*c0;
}
}
cc0=(cc0/Math.pow(r,bt0));

for (ii2=0;ii2<=bt2;ii2++){
        c2=(Math.pow(u,ii2)*Math.pow(d,(bt2-ii2))*s)-k;
        
if (c2>0){
cc2=cc2+stag(bt2,ii2)*Math.pow(p,ii2)*Math.pow((1-p),(bt2-ii2))*c2;
}
}
cc2=(cc2/Math.pow(r,bt2));

return (cc2-cc0)/(2*dt)
}

function bintheta_p(s,k,v,t,rf){
var cc=document.getElementById('cc').value*1;
var bt0=document.getElementById('bt').value*1;
var bt2=document.getElementById('bt').value*1-2;

var dt=t/bt0;
var r=Math.exp(dt*rf);
var u=Math.exp(v*Math.pow(dt,0.5));
var d=1/u;
var p=(r-d)/(u-d);
var cc0=0;
var cc2=0;
var c0;
var c2;     
for (ii0=0;ii0<=bt0;ii0++){
        c0=k-(Math.pow(u,ii0)*Math.pow(d,(bt0-ii0))*s);
        
if (c0>0){
cc0=cc0+stag(bt0,ii0)*Math.pow(p,ii0)*Math.pow((1-p),(bt0-ii0))*c0;
}
}
cc0=(cc0/Math.pow(r,bt0));

for (ii2=0;ii2<=bt2;ii2++){
        c2=k-(Math.pow(u,ii2)*Math.pow(d,(bt2-ii2))*s);
        
if (c2>0){
cc2=cc2+stag(bt2,ii2)*Math.pow(p,ii2)*Math.pow((1-p),(bt2-ii2))*c2;
}
}
cc2=(cc2/Math.pow(r,bt2));

return (cc2-cc0)/(2*dt)
}


function bingamma_c(s,k,v,t,rf){
var cc=document.getElementById('cc').value*1;
var bt=document.getElementById('bt').value*1-2;

var dt=t/bt;
var cc0=0;
var cc1=0;
var cc2=0;
var r=Math.exp(dt*rf);
var u=Math.exp(v*Math.pow(dt,0.5));
var d=1/u;
var p=(r-d)/(u-d);

var c0;
var c1; 
var c2;    
for (ii0=0;ii0<=bt;ii0++){
        c0=(Math.pow(u,ii0)*Math.pow(d,(bt-ii0))*s*u*u)-k;
        
if (c0>0){
cc0=cc0+stag(bt,ii0)*Math.pow(p,ii0)*Math.pow((1-p),(bt-ii0))*c0;
}
}
cc0=(cc0/Math.pow(r,bt));

for (ii1=0;ii1<=bt;ii1++){
        c1=(Math.pow(u,ii1)*Math.pow(d,(bt-ii1))*s)-k;
        
if (c1>0){
cc1=cc1+stag(bt,ii1)*Math.pow(p,ii1)*Math.pow((1-p),(bt-ii1))*c1;
}
}
cc1=(cc1/Math.pow(r,bt));

for (ii2=0;ii2<=bt;ii2++){
        c2=(Math.pow(u,ii2)*Math.pow(d,(bt-ii2))*s*d*d)-k;
        
if (c2>0){
cc2=cc2+stag(bt,ii2)*Math.pow(p,ii2)*Math.pow((1-p),(bt-ii2))*c2;
}
}
cc2=(cc2/Math.pow(r,bt));

return (((cc0-cc1)/(s*u*u-s))-((cc1-cc2)/(s-s*d*d)))/(0.5*(s*u*u-s*d*d))
}


function bingamma_p(s,k,v,t,rf){
var cc=document.getElementById('cc').value*1;
var bt=document.getElementById('bt').value*1-2;

var dt=t/bt;
var cc0=0;
var cc1=0;
var cc2=0;
var r=Math.exp(dt*rf);
var u=Math.exp(v*Math.pow(dt,0.5));
var d=1/u;
var p=(r-d)/(u-d);

var c0;
var c1; 
var c2;    
for (ii0=0;ii0<=bt;ii0++){
        c0=k-(Math.pow(u,ii0)*Math.pow(d,(bt-ii0))*s*u*u);
        
if (c0>0){
cc0=cc0+stag(bt,ii0)*Math.pow(p,ii0)*Math.pow((1-p),(bt-ii0))*c0;
}
}
cc0=(cc0/Math.pow(r,bt));

for (ii1=0;ii1<=bt;ii1++){
        c1=k-(Math.pow(u,ii1)*Math.pow(d,(bt-ii1))*s);
        
if (c1>0){
cc1=cc1+stag(bt,ii1)*Math.pow(p,ii1)*Math.pow((1-p),(bt-ii1))*c1;
}
}
cc1=(cc1/Math.pow(r,bt));

for (ii2=0;ii2<=bt;ii2++){
        c2=k-(Math.pow(u,ii2)*Math.pow(d,(bt-ii2))*s*d*d);
        
if (c2>0){
cc2=cc2+stag(bt,ii2)*Math.pow(p,ii2)*Math.pow((1-p),(bt-ii2))*c2;
}
}
cc2=(cc2/Math.pow(r,bt));

return (((cc0-cc1)/(s*u*u-s))-((cc1-cc2)/(s-s*d*d)))/(0.5*(s*u*u-s*d*d))
}


function binvega_c(s,k,v,t,rf){
var cc=document.getElementById('cc').value*1;
var bt=document.getElementById('bt').value*1;

var dt=t/bt;
var cc1=0;
var cc2=0;
var r1=Math.exp(dt*rf);
var u1=Math.exp(v*Math.pow(dt,0.5));
var d1=1/u1;
var p1=(r1-d1)/(u1-d1);

var v2=v+0.001;
var r2=Math.exp(dt*rf);
var u2=Math.exp(v2*Math.pow(dt,0.5));
var d2=1/u2;
var p2=(r2-d2)/(u2-d2);

var c1; 
var c2;    

for (ii1=0;ii1<=bt;ii1++){
        c1=(Math.pow(u1,ii1)*Math.pow(d1,(bt-ii1))*s)-k;
        
if (c1>0){
cc1=cc1+stag(bt,ii1)*Math.pow(p1,ii1)*Math.pow((1-p1),(bt-ii1))*c1;
}
}
cc1=(cc1/Math.pow(r1,bt));

for (ii2=0;ii2<=bt;ii2++){
        c2=(Math.pow(u2,ii2)*Math.pow(d2,(bt-ii2))*s)-k;
        
if (c2>0){
cc2=cc2+stag(bt,ii2)*Math.pow(p2,ii2)*Math.pow((1-p2),(bt-ii2))*c2;
}
}
cc2=(cc2/Math.pow(r2,bt));

return (cc2-cc1)/0.001
}

function binvega_p(s,k,v,t,rf){
var cc=document.getElementById('cc').value*1;
var bt=document.getElementById('bt').value*1;

var dt=t/bt;
var cc1=0;
var cc2=0;
var r1=Math.exp(dt*rf);
var u1=Math.exp(v*Math.pow(dt,0.5));
var d1=1/u1;
var p1=(r1-d1)/(u1-d1);

var v2=v+0.001;
var r2=Math.exp(dt*rf);
var u2=Math.exp(v2*Math.pow(dt,0.5));
var d2=1/u2;
var p2=(r2-d2)/(u2-d2);

var c1; 
var c2;    

for (ii1=0;ii1<=bt;ii1++){
        c1=k-(Math.pow(u1,ii1)*Math.pow(d1,(bt-ii1))*s);
        
if (c1>0){
cc1=cc1+stag(bt,ii1)*Math.pow(p1,ii1)*Math.pow((1-p1),(bt-ii1))*c1;
}
}
cc1=(cc1/Math.pow(r1,bt));

for (ii2=0;ii2<=bt;ii2++){
        c2=k-(Math.pow(u2,ii2)*Math.pow(d2,(bt-ii2))*s);
        
if (c2>0){
cc2=cc2+stag(bt,ii2)*Math.pow(p2,ii2)*Math.pow((1-p2),(bt-ii2))*c2;
}
}
cc2=(cc2/Math.pow(r2,bt));

return (cc2-cc1)/0.001
}

function binrho_c(s,k,v,t,rf){
var cc=document.getElementById('cc').value*1;
var bt=document.getElementById('bt').value*1;

var dt=t/bt;
var cc1=0;
var cc2=0;
var rf2=rf+0.001;
var r1=Math.exp(dt*rf);
var u1=Math.exp(v*Math.pow(dt,0.5));
var d1=1/u1;
var p1=(r1-d1)/(u1-d1);



var r2=Math.exp(dt*rf2);
var u2=Math.exp(v*Math.pow(dt,0.5));
var d2=1/u2;
var p2=(r2-d2)/(u2-d2);

var c1; 
var c2;    

for (ii1=0;ii1<=bt;ii1++){
        c1=(Math.pow(u1,ii1)*Math.pow(d1,(bt-ii1))*s)-k;
        
if (c1>0){
cc1=cc1+stag(bt,ii1)*Math.pow(p1,ii1)*Math.pow((1-p1),(bt-ii1))*c1;
}
}
cc1=(cc1/Math.pow(r1,bt));

for (ii2=0;ii2<=bt;ii2++){
        c2=(Math.pow(u2,ii2)*Math.pow(d2,(bt-ii2))*s)-k;
        
if (c2>0){
cc2=cc2+stag(bt,ii2)*Math.pow(p2,ii2)*Math.pow((1-p2),(bt-ii2))*c2;
}
}
cc2=(cc2/Math.pow(r2,bt));

return (cc2-cc1)/0.001
}

function binrho_p(s,k,v,t,rf){
var cc=document.getElementById('cc').value*1;
var bt=document.getElementById('bt').value*1;

var dt=t/bt;
var cc1=0;
var cc2=0;
var rf2=rf+0.001;
var r1=Math.exp(dt*rf);
var u1=Math.exp(v*Math.pow(dt,0.5));
var d1=1/u1;
var p1=(r1-d1)/(u1-d1);



var r2=Math.exp(dt*rf2);
var u2=Math.exp(v*Math.pow(dt,0.5));
var d2=1/u2;
var p2=(r2-d2)/(u2-d2);

var c1; 
var c2;    

for (ii1=0;ii1<=bt;ii1++){
        c1=k-(Math.pow(u1,ii1)*Math.pow(d1,(bt-ii1))*s);
        
if (c1>0){
cc1=cc1+stag(bt,ii1)*Math.pow(p1,ii1)*Math.pow((1-p1),(bt-ii1))*c1;
}
}
cc1=(cc1/Math.pow(r1,bt));

for (ii2=0;ii2<=bt;ii2++){
        c2=k-(Math.pow(u2,ii2)*Math.pow(d2,(bt-ii2))*s);
        
if (c2>0){
cc2=cc2+stag(bt,ii2)*Math.pow(p2,ii2)*Math.pow((1-p2),(bt-ii2))*c2;
}
}
cc2=(cc2/Math.pow(r2,bt));

return (cc2-cc1)/0.001
}


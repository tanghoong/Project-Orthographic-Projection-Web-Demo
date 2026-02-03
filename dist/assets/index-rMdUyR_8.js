var Gf=Object.defineProperty;var Hf=(i,e,t)=>e in i?Gf(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var j=(i,e,t)=>Hf(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vc="160",nr={ROTATE:0,DOLLY:1,PAN:2},ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vf=0,il=1,Wf=2,Th=1,Xf=2,qn=3,xi=0,qt=1,Pn=2,pi=0,wr=1,rl=2,sl=3,ol=4,$f=5,Ni=100,Zf=101,Yf=102,al=103,cl=104,jf=200,qf=201,Kf=202,Jf=203,Wa=204,Xa=205,Qf=206,ep=207,tp=208,np=209,ip=210,rp=211,sp=212,op=213,ap=214,cp=0,lp=1,up=2,po=3,hp=4,dp=5,fp=6,pp=7,Ah=0,mp=1,_p=2,mi=0,gp=1,vp=2,xp=3,Sp=4,yp=5,Mp=6,wh=300,Ir=301,Or=302,$a=303,Za=304,Lo=306,Ya=1e3,Ln=1001,ja=1002,$t=1003,ll=1004,jo=1005,Sn=1006,Ep=1007,fs=1008,_i=1009,bp=1010,Tp=1011,xc=1012,Rh=1013,li=1014,ui=1015,ps=1016,Ch=1017,Ph=1018,Bi=1020,Ap=1021,Dn=1023,wp=1024,Rp=1025,Gi=1026,Ur=1027,Cp=1028,Lh=1029,Pp=1030,Dh=1031,Ih=1033,qo=33776,Ko=33777,Jo=33778,Qo=33779,ul=35840,hl=35841,dl=35842,fl=35843,Oh=36196,pl=37492,ml=37496,_l=37808,gl=37809,vl=37810,xl=37811,Sl=37812,yl=37813,Ml=37814,El=37815,bl=37816,Tl=37817,Al=37818,wl=37819,Rl=37820,Cl=37821,ea=36492,Pl=36494,Ll=36495,Lp=36283,Dl=36284,Il=36285,Ol=36286,Uh=3e3,Hi=3001,Dp=3200,Ip=3201,Nh=0,Op=1,Mn="",Nt="srgb",ei="srgb-linear",Sc="display-p3",Do="display-p3-linear",mo="linear",at="srgb",_o="rec709",go="p3",rr=7680,Ul=519,Up=512,Np=513,Fp=514,Fh=515,zp=516,kp=517,Bp=518,Gp=519,Nl=35044,Hp=35048,Fl="300 es",qa=1035,Qn=2e3,vo=2001;class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cs=Math.PI/180,Ka=180/Math.PI;function bs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Zt(i,e,t){return Math.max(e,Math.min(t,i))}function Vp(i,e){return(i%e+e)%e}function ta(i,e,t){return(1-t)*i+t*e}function zl(i){return(i&i-1)===0&&i!==0}function Ja(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Wp={DEG2RAD:cs};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,n,r,s,o,a,c,l){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],_=r[0],f=r[3],p=r[6],S=r[1],x=r[4],y=r[7],w=r[2],A=r[5],E=r[8];return s[0]=o*_+a*S+c*w,s[3]=o*f+a*x+c*A,s[6]=o*p+a*y+c*E,s[1]=l*_+u*S+h*w,s[4]=l*f+u*x+h*A,s[7]=l*p+u*y+h*E,s[2]=d*_+m*S+g*w,s[5]=d*f+m*x+g*A,s[8]=d*p+m*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,m=l*s-o*c,g=t*h+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*l-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(na.makeScale(e,t)),this}rotate(e){return this.premultiply(na.makeRotation(-e)),this}translate(e,t){return this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const na=new $e;function zh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xp(){const i=xo("canvas");return i.style.display="block",i}const kl={};function ls(i){i in kl||(kl[i]=!0,console.warn(i))}const Bl=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gl=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ps={[ei]:{transfer:mo,primaries:_o,toReference:i=>i,fromReference:i=>i},[Nt]:{transfer:at,primaries:_o,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Do]:{transfer:mo,primaries:go,toReference:i=>i.applyMatrix3(Gl),fromReference:i=>i.applyMatrix3(Bl)},[Sc]:{transfer:at,primaries:go,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Gl),fromReference:i=>i.applyMatrix3(Bl).convertLinearToSRGB()}},$p=new Set([ei,Do]),nt={enabled:!0,_workingColorSpace:ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!$p.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ps[e].toReference,r=Ps[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ps[i].primaries},getTransfer:function(i){return i===Mn?mo:Ps[i].transfer}};function Rr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ia(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let sr;class kh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sr===void 0&&(sr=xo("canvas")),sr.width=e.width,sr.height=e.height;const n=sr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Rr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rr(t[n]/255)*255):t[n]=Rr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zp=0;class Bh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=bs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ra(r[o].image)):s.push(ra(r[o]))}else s=ra(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yp=0;class fn extends Qi{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,n=Ln,r=Ln,s=Sn,o=fs,a=Dn,c=_i,l=fn.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=bs(),this.name="",this.source=new Bh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Hi?Nt:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ya:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ya:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?Hi:Uh}set encoding(e){ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hi?Nt:Mn}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=wh;fn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],_=c[2],f=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(m+1)/2,w=(p+1)/2,A=(u+d)/4,E=(h+_)/4,O=(g+f)/4;return x>y&&x>w?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=A/n,s=E/n):y>w?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=A/r,s=O/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=E/s,r=O/s),this.set(n,r,s,t),this}let S=Math.sqrt((f-g)*(f-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(h-_)/S,this.z=(d-u)/S,this.w=Math.acos((l+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jp extends Qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(ls("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hi?Nt:Mn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new fn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends jp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gh extends fn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qp extends fn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==m||u!==g){let f=1-a;const p=c*d+l*m+u*g+h*_,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),A=Math.atan2(w,p*S);f=Math.sin(f*A)/w,a=Math.sin(a*A)/w}const y=a*S;if(c=c*f+d*y,l=l*f+m*y,u=u*f+g*y,h=h*f+_*y,f===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=w,l*=w,u*=w,h*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*m-l*d,e[t+1]=c*g+u*d+l*h-a*m,e[t+2]=l*g+u*m+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),d=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sa.copy(this).projectOnVector(e),this.sub(sa)}reflect(e){return this.sub(sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new I,Hl=new Yi;class ti{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(e.matrixWorld),this.union(Ls)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),Ds.subVectors(this.max,Kr),or.subVectors(e.a,Kr),ar.subVectors(e.b,Kr),cr.subVectors(e.c,Kr),ri.subVectors(ar,or),si.subVectors(cr,ar),Ri.subVectors(or,cr);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Ri.z,Ri.y,ri.z,0,-ri.x,si.z,0,-si.x,Ri.z,0,-Ri.x,-ri.y,ri.x,0,-si.y,si.x,0,-Ri.y,Ri.x,0];return!oa(t,or,ar,cr,Ds)||(t=[1,0,0,0,1,0,0,0,1],!oa(t,or,ar,cr,Ds))?!1:(Is.crossVectors(ri,si),t=[Is.x,Is.y,Is.z],oa(t,or,ar,cr,Ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new I,new I,new I,new I,new I,new I,new I,new I],An=new I,Ls=new ti,or=new I,ar=new I,cr=new I,ri=new I,si=new I,Ri=new I,Kr=new I,Ds=new I,Is=new I,Ci=new I;function oa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ci.fromArray(i,s);const a=r.x*Math.abs(Ci.x)+r.y*Math.abs(Ci.y)+r.z*Math.abs(Ci.z),c=e.dot(Ci),l=t.dot(Ci),u=n.dot(Ci);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Kp=new ti,Jr=new I,aa=new I;class Wr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Kp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);const t=Jr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Jr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(aa)),this.expandByPoint(Jr.copy(e.center).sub(aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new I,ca=new I,Os=new I,oi=new I,la=new I,Us=new I,ua=new I;class Io{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ca.copy(e).add(t).multiplyScalar(.5),Os.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(ca);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Os),a=oi.dot(this.direction),c=-oi.dot(Os),l=oi.lengthSq(),u=Math.abs(1-o*o);let h,d,m,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,m=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ca).addScaledVector(Os,d),m}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),r=$n.dot($n)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,r,s){la.subVectors(t,e),Us.subVectors(n,e),ua.crossVectors(la,Us);let o=this.direction.dot(ua),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const c=a*this.direction.dot(Us.crossVectors(oi,Us));if(c<0)return null;const l=a*this.direction.dot(la.cross(oi));if(l<0||c+l>o)return null;const u=-a*oi.dot(ua);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,r,s,o,a,c,l,u,h,d,m,g,_,f){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,h,d,m,g,_,f)}set(e,t,n,r,s,o,a,c,l,u,h,d,m,g,_,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/lr.setFromMatrixColumn(e,0).length(),s=1/lr.setFromMatrixColumn(e,1).length(),o=1/lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,m=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jp,e,Qp)}lookAt(e,t,n){const r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),ai.crossVectors(n,on),ai.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ai.crossVectors(n,on)),ai.normalize(),Ns.crossVectors(on,ai),r[0]=ai.x,r[4]=Ns.x,r[8]=on.x,r[1]=ai.y,r[5]=Ns.y,r[9]=on.y,r[2]=ai.z,r[6]=Ns.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],S=n[3],x=n[7],y=n[11],w=n[15],A=r[0],E=r[4],O=r[8],v=r[12],b=r[1],N=r[5],k=r[9],Y=r[13],D=r[2],F=r[6],B=r[10],$=r[14],Z=r[3],K=r[7],J=r[11],se=r[15];return s[0]=o*A+a*b+c*D+l*Z,s[4]=o*E+a*N+c*F+l*K,s[8]=o*O+a*k+c*B+l*J,s[12]=o*v+a*Y+c*$+l*se,s[1]=u*A+h*b+d*D+m*Z,s[5]=u*E+h*N+d*F+m*K,s[9]=u*O+h*k+d*B+m*J,s[13]=u*v+h*Y+d*$+m*se,s[2]=g*A+_*b+f*D+p*Z,s[6]=g*E+_*N+f*F+p*K,s[10]=g*O+_*k+f*B+p*J,s[14]=g*v+_*Y+f*$+p*se,s[3]=S*A+x*b+y*D+w*Z,s[7]=S*E+x*N+y*F+w*K,s[11]=S*O+x*k+y*B+w*J,s[15]=S*v+x*Y+y*$+w*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],_=e[7],f=e[11],p=e[15];return g*(+s*c*h-r*l*h-s*a*d+n*l*d+r*a*m-n*c*m)+_*(+t*c*m-t*l*d+s*o*d-r*o*m+r*l*u-s*c*u)+f*(+t*l*h-t*a*m-s*o*h+n*o*m+s*a*u-n*l*u)+p*(-r*a*u-t*c*h+t*a*d+r*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],_=e[13],f=e[14],p=e[15],S=h*f*l-_*d*l+_*c*m-a*f*m-h*c*p+a*d*p,x=g*d*l-u*f*l-g*c*m+o*f*m+u*c*p-o*d*p,y=u*_*l-g*h*l+g*a*m-o*_*m-u*a*p+o*h*p,w=g*h*c-u*_*c-g*a*d+o*_*d+u*a*f-o*h*f,A=t*S+n*x+r*y+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=S*E,e[1]=(_*d*s-h*f*s-_*r*m+n*f*m+h*r*p-n*d*p)*E,e[2]=(a*f*s-_*c*s+_*r*l-n*f*l-a*r*p+n*c*p)*E,e[3]=(h*c*s-a*d*s-h*r*l+n*d*l+a*r*m-n*c*m)*E,e[4]=x*E,e[5]=(u*f*s-g*d*s+g*r*m-t*f*m-u*r*p+t*d*p)*E,e[6]=(g*c*s-o*f*s-g*r*l+t*f*l+o*r*p-t*c*p)*E,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*m+t*c*m)*E,e[8]=y*E,e[9]=(g*h*s-u*_*s-g*n*m+t*_*m+u*n*p-t*h*p)*E,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*p+t*a*p)*E,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*m-t*a*m)*E,e[12]=w*E,e[13]=(u*_*r-g*h*r+g*n*d-t*_*d-u*n*f+t*h*f)*E,e[14]=(g*a*r-o*_*r-g*n*c+t*_*c+o*n*f-t*a*f)*E,e[15]=(o*h*r-u*a*r+u*n*c-t*h*c-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,m=s*u,g=s*h,_=o*u,f=o*h,p=a*h,S=c*l,x=c*u,y=c*h,w=n.x,A=n.y,E=n.z;return r[0]=(1-(_+p))*w,r[1]=(m+y)*w,r[2]=(g-x)*w,r[3]=0,r[4]=(m-y)*A,r[5]=(1-(d+p))*A,r[6]=(f+S)*A,r[7]=0,r[8]=(g+x)*E,r[9]=(f-S)*E,r[10]=(1-(d+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=lr.set(r[0],r[1],r[2]).length();const o=lr.set(r[4],r[5],r[6]).length(),a=lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);const l=1/s,u=1/o,h=1/a;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,t.setFromRotationMatrix(wn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Qn){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let m,g;if(a===Qn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===vo)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Qn){const c=this.elements,l=1/(t-e),u=1/(n-r),h=1/(o-s),d=(t+e)*l,m=(n+r)*u;let g,_;if(a===Qn)g=(o+s)*h,_=-2*h;else if(a===vo)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const lr=new I,wn=new st,Jp=new I(0,0,0),Qp=new I(1,1,1),ai=new I,Ns=new I,on=new I,Vl=new st,Wl=new Yi;class Oo{constructor(e=0,t=0,n=0,r=Oo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oo.DEFAULT_ORDER="XYZ";class yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let em=0;const Xl=new I,ur=new Yi,Zn=new st,Fs=new I,Qr=new I,tm=new I,nm=new Yi,$l=new I(1,0,0),Zl=new I(0,1,0),Yl=new I(0,0,1),im={type:"added"},rm={type:"removed"};class It extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new I,t=new Oo,n=new Yi,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new $e}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis($l,e)}rotateY(e){return this.rotateOnAxis(Zl,e)}rotateZ(e){return this.rotateOnAxis(Yl,e)}translateOnAxis(e,t){return Xl.copy(e).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($l,e)}translateY(e){return this.translateOnAxis(Zl,e)}translateZ(e){return this.translateOnAxis(Yl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fs.copy(e):Fs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Qr,Fs,this.up):Zn.lookAt(Fs,Qr,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),ur.setFromRotationMatrix(Zn),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(im)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,tm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,nm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}It.DEFAULT_UP=new I(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new I,Yn=new I,ha=new I,jn=new I,hr=new I,dr=new I,jl=new I,da=new I,fa=new I,pa=new I;let zs=!1;class yn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Rn.subVectors(e,t),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Rn.subVectors(r,t),Yn.subVectors(n,t),ha.subVectors(e,t);const o=Rn.dot(Rn),a=Rn.dot(Yn),c=Rn.dot(ha),l=Yn.dot(Yn),u=Yn.dot(ha),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(e,t,n,r,s,o,a,c){return zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zs=!0),this.getInterpolation(e,t,n,r,s,o,a,c)}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,jn.x),c.addScaledVector(o,jn.y),c.addScaledVector(a,jn.z),c)}static isFrontFacing(e,t,n,r){return Rn.subVectors(n,t),Yn.subVectors(e,t),Rn.cross(Yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Rn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zs=!0),yn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;hr.subVectors(r,n),dr.subVectors(s,n),da.subVectors(e,n);const c=hr.dot(da),l=dr.dot(da);if(c<=0&&l<=0)return t.copy(n);fa.subVectors(e,r);const u=hr.dot(fa),h=dr.dot(fa);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(hr,o);pa.subVectors(e,s);const m=hr.dot(pa),g=dr.dot(pa);if(g>=0&&m<=g)return t.copy(s);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(dr,a);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return jl.subVectors(s,r),a=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(jl,a);const p=1/(f+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(hr,o).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},ks={h:0,s:0,l:0};function ma(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=nt.workingColorSpace){if(e=Vp(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ma(o,s,e+1/3),this.g=ma(o,s,e),this.b=ma(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Nt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=Hh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return nt.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Zt(Gt.r*255,0,255))*65536+Math.round(Zt(Gt.g*255,0,255))*256+Math.round(Zt(Gt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Gt.copy(this),t);const n=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Nt){nt.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,r=Gt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(ks);const n=ta(ci.h,ks.h,t),r=ta(ci.s,ks.s,t),s=ta(ci.l,ks.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new qe;qe.NAMES=Hh;let sm=0;class Xr extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=wr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nr extends Xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new I,Bs=new Fe;class In{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qr(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qr(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qr(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),e}}class Vh extends In{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wh extends In{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Kt extends In{constructor(e,t,n){super(new Float32Array(e),t,n)}}let om=0;const vn=new st,_a=new It,fr=new I,an=new ti,es=new ti,Pt=new I;class Un extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zh(e)?Wh:Vh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];es.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(an.min,es.min),an.expandByPoint(Pt),Pt.addVectors(an.max,es.max),an.expandByPoint(Pt)):(an.expandByPoint(es.min),an.expandByPoint(es.max))}an.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Pt.fromBufferAttribute(a,l),c&&(fr.fromBufferAttribute(e,l),Pt.add(fr)),r=Math.max(r,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<a;b++)l[b]=new I,u[b]=new I;const h=new I,d=new I,m=new I,g=new Fe,_=new Fe,f=new Fe,p=new I,S=new I;function x(b,N,k){h.fromArray(r,b*3),d.fromArray(r,N*3),m.fromArray(r,k*3),g.fromArray(o,b*2),_.fromArray(o,N*2),f.fromArray(o,k*2),d.sub(h),m.sub(h),_.sub(g),f.sub(g);const Y=1/(_.x*f.y-f.x*_.y);isFinite(Y)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-_.y).multiplyScalar(Y),S.copy(m).multiplyScalar(_.x).addScaledVector(d,-f.x).multiplyScalar(Y),l[b].add(p),l[N].add(p),l[k].add(p),u[b].add(S),u[N].add(S),u[k].add(S))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let b=0,N=y.length;b<N;++b){const k=y[b],Y=k.start,D=k.count;for(let F=Y,B=Y+D;F<B;F+=3)x(n[F+0],n[F+1],n[F+2])}const w=new I,A=new I,E=new I,O=new I;function v(b){E.fromArray(s,b*3),O.copy(E);const N=l[b];w.copy(N),w.sub(E.multiplyScalar(E.dot(N))).normalize(),A.crossVectors(O,N);const Y=A.dot(u[b])<0?-1:1;c[b*4]=w.x,c[b*4+1]=w.y,c[b*4+2]=w.z,c[b*4+3]=Y}for(let b=0,N=y.length;b<N;++b){const k=y[b],Y=k.start,D=k.count;for(let F=Y,B=Y+D;F<B;F+=3)v(n[F+0]),v(n[F+1]),v(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,f),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let _=0,f=c.length;_<f;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[m++]}return new In(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ql=new st,Pi=new Io,Gs=new Wr,Kl=new I,pr=new I,mr=new I,_r=new I,ga=new I,Hs=new I,Vs=new Fe,Ws=new Fe,Xs=new Fe,Jl=new I,Ql=new I,eu=new I,$s=new I,Zs=new I;class Lt extends It{constructor(e=new Un,t=new Nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Hs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(ga.fromBufferAttribute(h,e),o?Hs.addScaledVector(ga,u):Hs.addScaledVector(ga.sub(t),u))}t.add(Hs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),Pi.copy(e.ray).recast(e.near),!(Gs.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Gs,Kl)===null||Pi.origin.distanceToSquared(Kl)>(e.far-e.near)**2))&&(ql.copy(s).invert(),Pi.copy(e.ray).applyMatrix4(ql),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=o[f.materialIndex],S=Math.max(f.start,m.start),x=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let y=S,w=x;y<w;y+=3){const A=a.getX(y),E=a.getX(y+1),O=a.getX(y+2);r=Ys(this,p,e,n,l,u,h,A,E,O),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const S=a.getX(f),x=a.getX(f+1),y=a.getX(f+2);r=Ys(this,o,e,n,l,u,h,S,x,y),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=o[f.materialIndex],S=Math.max(f.start,m.start),x=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let y=S,w=x;y<w;y+=3){const A=y,E=y+1,O=y+2;r=Ys(this,p,e,n,l,u,h,A,E,O),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const S=f,x=f+1,y=f+2;r=Ys(this,o,e,n,l,u,h,S,x,y),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function am(i,e,t,n,r,s,o,a){let c;if(e.side===qt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===xi,a),c===null)return null;Zs.copy(a),Zs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Zs);return l<t.near||l>t.far?null:{distance:l,point:Zs.clone(),object:i}}function Ys(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,pr),i.getVertexPosition(c,mr),i.getVertexPosition(l,_r);const u=am(i,e,t,n,pr,mr,_r,$s);if(u){r&&(Vs.fromBufferAttribute(r,a),Ws.fromBufferAttribute(r,c),Xs.fromBufferAttribute(r,l),u.uv=yn.getInterpolation($s,pr,mr,_r,Vs,Ws,Xs,new Fe)),s&&(Vs.fromBufferAttribute(s,a),Ws.fromBufferAttribute(s,c),Xs.fromBufferAttribute(s,l),u.uv1=yn.getInterpolation($s,pr,mr,_r,Vs,Ws,Xs,new Fe),u.uv2=u.uv1),o&&(Jl.fromBufferAttribute(o,a),Ql.fromBufferAttribute(o,c),eu.fromBufferAttribute(o,l),u.normal=yn.getInterpolation($s,pr,mr,_r,Jl,Ql,eu,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new I,materialIndex:0};yn.getNormal(pr,mr,_r,h.normal),u.face=h}return u}class On extends Un{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(h,2));function g(_,f,p,S,x,y,w,A,E,O,v){const b=y/E,N=w/O,k=y/2,Y=w/2,D=A/2,F=E+1,B=O+1;let $=0,Z=0;const K=new I;for(let J=0;J<B;J++){const se=J*N-Y;for(let oe=0;oe<F;oe++){const X=oe*b-k;K[_]=X*S,K[f]=se*x,K[p]=D,l.push(K.x,K.y,K.z),K[_]=0,K[f]=0,K[p]=A>0?1:-1,u.push(K.x,K.y,K.z),h.push(oe/E),h.push(1-J/O),$+=1}}for(let J=0;J<O;J++)for(let se=0;se<E;se++){const oe=d+se+F*J,X=d+se+F*(J+1),Q=d+(se+1)+F*(J+1),ue=d+(se+1)+F*J;c.push(oe,X,ue),c.push(X,Q,ue),Z+=6}a.addGroup(m,Z,v),m+=Z,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const n=Fr(i[t]);for(const r in n)e[r]=n[r]}return e}function cm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xh(i){return i.getRenderTarget()===null?i.outputColorSpace:nt.workingColorSpace}const lm={clone:Fr,merge:Xt};var um=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=um,this.fragmentShader=hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=cm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $h extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Cn extends $h{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ka*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gr=-90,vr=1;class dm extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Cn(gr,vr,e,t);r.layers=this.layers,this.add(r);const s=new Cn(gr,vr,e,t);s.layers=this.layers,this.add(s);const o=new Cn(gr,vr,e,t);o.layers=this.layers,this.add(o);const a=new Cn(gr,vr,e,t);a.layers=this.layers,this.add(a);const c=new Cn(gr,vr,e,t);c.layers=this.layers,this.add(c);const l=new Cn(gr,vr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zh extends fn{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ir,super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fm extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(ls("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hi?Nt:Mn),this.texture=new Zh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new On(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:pi});s.uniforms.tEquirect.value=t;const o=new Lt(r,s),a=t.minFilter;return t.minFilter===fs&&(t.minFilter=Sn),new dm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const va=new I,pm=new I,mm=new $e;class kn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=va.subVectors(n,t).cross(pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(va),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||mm.getNormalMatrix(e),r=this.coplanarPoint(va).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Wr,js=new I;class Mc{constructor(e=new kn,t=new kn,n=new kn,r=new kn,s=new kn,o=new kn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],m=r[8],g=r[9],_=r[10],f=r[11],p=r[12],S=r[13],x=r[14],y=r[15];if(n[0].setComponents(c-s,d-l,f-m,y-p).normalize(),n[1].setComponents(c+s,d+l,f+m,y+p).normalize(),n[2].setComponents(c+o,d+u,f+g,y+S).normalize(),n[3].setComponents(c-o,d-u,f-g,y-S).normalize(),n[4].setComponents(c-a,d-h,f-_,y-x).normalize(),t===Qn)n[5].setComponents(c+a,d+h,f+_,y+x).normalize();else if(t===vo)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(js.x=r.normal.x>0?e.max.x:e.min.x,js.y=r.normal.y>0?e.max.y:e.min.y,js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function _m(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,u){const h=l.array,d=l.usage,m=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,d),l.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,u,h){const d=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,l),m.count===-1&&g.length===0&&i.bufferSubData(h,0,d),g.length!==0){for(let _=0,f=g.length;_<f;_++){const p=g[_];t?i.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,r(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}class Ts extends Un{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,m=[],g=[],_=[],f=[];for(let p=0;p<u;p++){const S=p*d-o;for(let x=0;x<l;x++){const y=x*h-s;g.push(y,-S,0),_.push(0,0,1),f.push(x/a),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const x=S+l*p,y=S+l*(p+1),w=S+1+l*(p+1),A=S+1+l*p;m.push(x,y,A),m.push(y,w,A)}this.setIndex(m),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.widthSegments,e.heightSegments)}}var gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Em=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ym=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,s_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,o_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,u_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,h_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,__=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,g_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,x_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,E_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,b_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,w_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,D_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,I_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,O_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,U_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,N_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,B_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Q_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ig=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ug=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Eg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,bg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ug=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$g=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:gm,alphahash_pars_fragment:vm,alphamap_fragment:xm,alphamap_pars_fragment:Sm,alphatest_fragment:ym,alphatest_pars_fragment:Mm,aomap_fragment:Em,aomap_pars_fragment:bm,batching_pars_vertex:Tm,batching_vertex:Am,begin_vertex:wm,beginnormal_vertex:Rm,bsdfs:Cm,iridescence_fragment:Pm,bumpmap_pars_fragment:Lm,clipping_planes_fragment:Dm,clipping_planes_pars_fragment:Im,clipping_planes_pars_vertex:Om,clipping_planes_vertex:Um,color_fragment:Nm,color_pars_fragment:Fm,color_pars_vertex:zm,color_vertex:km,common:Bm,cube_uv_reflection_fragment:Gm,defaultnormal_vertex:Hm,displacementmap_pars_vertex:Vm,displacementmap_vertex:Wm,emissivemap_fragment:Xm,emissivemap_pars_fragment:$m,colorspace_fragment:Zm,colorspace_pars_fragment:Ym,envmap_fragment:jm,envmap_common_pars_fragment:qm,envmap_pars_fragment:Km,envmap_pars_vertex:Jm,envmap_physical_pars_fragment:u_,envmap_vertex:Qm,fog_vertex:e_,fog_pars_vertex:t_,fog_fragment:n_,fog_pars_fragment:i_,gradientmap_pars_fragment:r_,lightmap_fragment:s_,lightmap_pars_fragment:o_,lights_lambert_fragment:a_,lights_lambert_pars_fragment:c_,lights_pars_begin:l_,lights_toon_fragment:h_,lights_toon_pars_fragment:d_,lights_phong_fragment:f_,lights_phong_pars_fragment:p_,lights_physical_fragment:m_,lights_physical_pars_fragment:__,lights_fragment_begin:g_,lights_fragment_maps:v_,lights_fragment_end:x_,logdepthbuf_fragment:S_,logdepthbuf_pars_fragment:y_,logdepthbuf_pars_vertex:M_,logdepthbuf_vertex:E_,map_fragment:b_,map_pars_fragment:T_,map_particle_fragment:A_,map_particle_pars_fragment:w_,metalnessmap_fragment:R_,metalnessmap_pars_fragment:C_,morphcolor_vertex:P_,morphnormal_vertex:L_,morphtarget_pars_vertex:D_,morphtarget_vertex:I_,normal_fragment_begin:O_,normal_fragment_maps:U_,normal_pars_fragment:N_,normal_pars_vertex:F_,normal_vertex:z_,normalmap_pars_fragment:k_,clearcoat_normal_fragment_begin:B_,clearcoat_normal_fragment_maps:G_,clearcoat_pars_fragment:H_,iridescence_pars_fragment:V_,opaque_fragment:W_,packing:X_,premultiplied_alpha_fragment:$_,project_vertex:Z_,dithering_fragment:Y_,dithering_pars_fragment:j_,roughnessmap_fragment:q_,roughnessmap_pars_fragment:K_,shadowmap_pars_fragment:J_,shadowmap_pars_vertex:Q_,shadowmap_vertex:eg,shadowmask_pars_fragment:tg,skinbase_vertex:ng,skinning_pars_vertex:ig,skinning_vertex:rg,skinnormal_vertex:sg,specularmap_fragment:og,specularmap_pars_fragment:ag,tonemapping_fragment:cg,tonemapping_pars_fragment:lg,transmission_fragment:ug,transmission_pars_fragment:hg,uv_pars_fragment:dg,uv_pars_vertex:fg,uv_vertex:pg,worldpos_vertex:mg,background_vert:_g,background_frag:gg,backgroundCube_vert:vg,backgroundCube_frag:xg,cube_vert:Sg,cube_frag:yg,depth_vert:Mg,depth_frag:Eg,distanceRGBA_vert:bg,distanceRGBA_frag:Tg,equirect_vert:Ag,equirect_frag:wg,linedashed_vert:Rg,linedashed_frag:Cg,meshbasic_vert:Pg,meshbasic_frag:Lg,meshlambert_vert:Dg,meshlambert_frag:Ig,meshmatcap_vert:Og,meshmatcap_frag:Ug,meshnormal_vert:Ng,meshnormal_frag:Fg,meshphong_vert:zg,meshphong_frag:kg,meshphysical_vert:Bg,meshphysical_frag:Gg,meshtoon_vert:Hg,meshtoon_frag:Vg,points_vert:Wg,points_frag:Xg,shadow_vert:$g,shadow_frag:Zg,sprite_vert:Yg,sprite_frag:jg},le={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Bn={basic:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Xt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Xt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Xt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Xt([le.points,le.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Xt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Xt([le.common,le.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Xt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Xt([le.sprite,le.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Xt([le.common,le.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Xt([le.lights,le.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Bn.physical={uniforms:Xt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const qs={r:0,b:0,g:0};function qg(i,e,t,n,r,s,o){const a=new qe(0);let c=s===!0?0:1,l,u,h=null,d=0,m=null;function g(f,p){let S=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),S=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Lo)?(u===void 0&&(u=new Lt(new On(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Fr(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=nt.getTransfer(x.colorSpace)!==at,(h!==x||d!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,m=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Lt(new Ts(2,2),new ji({name:"BackgroundMaterial",uniforms:Fr(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=nt.getTransfer(x.colorSpace)!==at,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,m=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function _(f,p){f.getRGB(qs,Xh(i)),n.buffers.color.setClear(qs.r,qs.g,qs.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,_(a,c)},render:g}}function Kg(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=f(null);let l=c,u=!1;function h(D,F,B,$,Z){let K=!1;if(o){const J=_($,B,F);l!==J&&(l=J,m(l.object)),K=p(D,$,B,Z),K&&S(D,$,B,Z)}else{const J=F.wireframe===!0;(l.geometry!==$.id||l.program!==B.id||l.wireframe!==J)&&(l.geometry=$.id,l.program=B.id,l.wireframe=J,K=!0)}Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,O(D,F,B,$),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?i.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,F,B){const $=B.wireframe===!0;let Z=a[D.id];Z===void 0&&(Z={},a[D.id]=Z);let K=Z[F.id];K===void 0&&(K={},Z[F.id]=K);let J=K[$];return J===void 0&&(J=f(d()),K[$]=J),J}function f(D){const F=[],B=[],$=[];for(let Z=0;Z<r;Z++)F[Z]=0,B[Z]=0,$[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:$,object:D,attributes:{},index:null}}function p(D,F,B,$){const Z=l.attributes,K=F.attributes;let J=0;const se=B.getAttributes();for(const oe in se)if(se[oe].location>=0){const Q=Z[oe];let ue=K[oe];if(ue===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor)),Q===void 0||Q.attribute!==ue||ue&&Q.data!==ue.data)return!0;J++}return l.attributesNum!==J||l.index!==$}function S(D,F,B,$){const Z={},K=F.attributes;let J=0;const se=B.getAttributes();for(const oe in se)if(se[oe].location>=0){let Q=K[oe];Q===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));const ue={};ue.attribute=Q,Q&&Q.data&&(ue.data=Q.data),Z[oe]=ue,J++}l.attributes=Z,l.attributesNum=J,l.index=$}function x(){const D=l.newAttributes;for(let F=0,B=D.length;F<B;F++)D[F]=0}function y(D){w(D,0)}function w(D,F){const B=l.newAttributes,$=l.enabledAttributes,Z=l.attributeDivisors;B[D]=1,$[D]===0&&(i.enableVertexAttribArray(D),$[D]=1),Z[D]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),Z[D]=F)}function A(){const D=l.newAttributes,F=l.enabledAttributes;for(let B=0,$=F.length;B<$;B++)F[B]!==D[B]&&(i.disableVertexAttribArray(B),F[B]=0)}function E(D,F,B,$,Z,K,J){J===!0?i.vertexAttribIPointer(D,F,B,Z,K):i.vertexAttribPointer(D,F,B,$,Z,K)}function O(D,F,B,$){if(n.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const Z=$.attributes,K=B.getAttributes(),J=F.defaultAttributeValues;for(const se in K){const oe=K[se];if(oe.location>=0){let X=Z[se];if(X===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){const Q=X.normalized,ue=X.itemSize,Me=t.get(X);if(Me===void 0)continue;const Se=Me.buffer,Ue=Me.type,Ne=Me.bytesPerElement,Ce=n.isWebGL2===!0&&(Ue===i.INT||Ue===i.UNSIGNED_INT||X.gpuType===Rh);if(X.isInterleavedBufferAttribute){const Ze=X.data,G=Ze.stride,Ut=X.offset;if(Ze.isInstancedInterleavedBuffer){for(let Ae=0;Ae<oe.locationSize;Ae++)w(oe.location+Ae,Ze.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ze.meshPerAttribute*Ze.count)}else for(let Ae=0;Ae<oe.locationSize;Ae++)y(oe.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Ae=0;Ae<oe.locationSize;Ae++)E(oe.location+Ae,ue/oe.locationSize,Ue,Q,G*Ne,(Ut+ue/oe.locationSize*Ae)*Ne,Ce)}else{if(X.isInstancedBufferAttribute){for(let Ze=0;Ze<oe.locationSize;Ze++)w(oe.location+Ze,X.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ze=0;Ze<oe.locationSize;Ze++)y(oe.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Ze=0;Ze<oe.locationSize;Ze++)E(oe.location+Ze,ue/oe.locationSize,Ue,Q,ue*Ne,ue/oe.locationSize*Ze*Ne,Ce)}}else if(J!==void 0){const Q=J[se];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(oe.location,Q);break;case 3:i.vertexAttrib3fv(oe.location,Q);break;case 4:i.vertexAttrib4fv(oe.location,Q);break;default:i.vertexAttrib1fv(oe.location,Q)}}}}A()}function v(){k();for(const D in a){const F=a[D];for(const B in F){const $=F[B];for(const Z in $)g($[Z].object),delete $[Z];delete F[B]}delete a[D]}}function b(D){if(a[D.id]===void 0)return;const F=a[D.id];for(const B in F){const $=F[B];for(const Z in $)g($[Z].object),delete $[Z];delete F[B]}delete a[D.id]}function N(D){for(const F in a){const B=a[F];if(B[D.id]===void 0)continue;const $=B[D.id];for(const Z in $)g($[Z].object),delete $[Z];delete B[D.id]}}function k(){Y(),u=!0,l!==c&&(l=c,m(l.object))}function Y(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:k,resetDefaultState:Y,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:y,disableUnusedAttributes:A}}function Jg(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function c(u,h,d){if(d===0)return;let m,g;if(r)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,h,d),t.update(h,s,d)}function l(u,h,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Qg(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=o||e.has("OES_texture_float"),w=x&&y,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:A}}function e0(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new kn,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||r;return r=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,f=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!f)s?u(null):l();else{const S=s?0:n,x=S*4;let y=p.clippingState||null;c.value=y,y=u(g,d,x,m);for(let w=0;w!==x;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const _=h!==null?h.length:0;let f=null;if(_!==0){if(f=c.value,g!==!0||f===null){const p=m+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,y=m;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(S,a),o.normal.toArray(f,y),f[y+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function t0(i){let e=new WeakMap;function t(o,a){return a===$a?o.mapping=Ir:a===Za&&(o.mapping=Or),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$a||a===Za)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new fm(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ec extends $h{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mr=4,tu=[.125,.215,.35,.446,.526,.582],Fi=20,xa=new Ec,nu=new qe;let Sa=null,ya=0,Ma=0;const Oi=(1+Math.sqrt(5))/2,xr=1/Oi,iu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Oi,xr),new I(0,Oi,-xr),new I(xr,0,Oi),new I(-xr,0,Oi),new I(Oi,xr,0),new I(-Oi,xr,0)];class ru{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Sa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sa,ya,Ma),e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:ps,format:Dn,colorSpace:ei,depthBuffer:!1},r=su(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n0(s)),this._blurMaterial=i0(s,e,t)}return r}_compileMaterial(e){const t=new Lt(this._lodPlanes[0],e);this._renderer.compile(t,xa)}_sceneToCubeUV(e,t,n,r){const a=new Cn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(nu),u.toneMapping=mi,u.autoClear=!1;const m=new Nr({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new Lt(new On,m);let _=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,_=!0):(m.color.copy(nu),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;Ks(r,S*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ir||e.mapping===Or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Lt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ks(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,xa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=iu[(r-1)%iu.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Lt(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Fi-1),_=s/g,f=isFinite(s)?1+Math.floor(u*_):Fi;f>Fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Fi}`);const p=[];let S=0;for(let E=0;E<Fi;++E){const O=E/_,v=Math.exp(-O*O/2);p.push(v),E===0?S+=v:E<f&&(S+=2*v)}for(let E=0;E<p.length;E++)p[E]=p[E]/S;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const y=this._sizeLods[r],w=3*y*(r>x-Mr?r-x+Mr:0),A=4*(this._cubeSize-y);Ks(t,w,A,3*y,2*y),c.setRenderTarget(t),c.render(h,xa)}}function n0(i){const e=[],t=[],n=[];let r=i;const s=i-Mr+1+tu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Mr?c=tu[o-i+Mr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,f=2,p=1,S=new Float32Array(_*g*m),x=new Float32Array(f*g*m),y=new Float32Array(p*g*m);for(let A=0;A<m;A++){const E=A%3*2/3-1,O=A>2?0:-1,v=[E,O,0,E+2/3,O,0,E+2/3,O+1,0,E,O,0,E+2/3,O+1,0,E,O+1,0];S.set(v,_*g*A),x.set(d,f*g*A);const b=[A,A,A,A,A,A];y.set(b,p*g*A)}const w=new Un;w.setAttribute("position",new In(S,_)),w.setAttribute("uv",new In(x,f)),w.setAttribute("faceIndex",new In(y,p)),e.push(w),r>Mr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function su(i,e,t){const n=new Zi(i,e,t);return n.texture.mapping=Lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function i0(i,e,t){const n=new Float32Array(Fi),r=new I(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function ou(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function au(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function bc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function r0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===$a||c===Za,u=c===Ir||c===Or;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new ru(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new ru(i));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function s0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function o0(i,e,t,n){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)e.remove(_[f])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let f=0,p=_.length;f<p;f++)e.update(_[f],i.ARRAY_BUFFER)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let x=0,y=S.length;x<y;x+=3){const w=S[x+0],A=S[x+1],E=S[x+2];d.push(w,A,A,E,E,w)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,y=S.length/3-1;x<y;x+=3){const w=x+0,A=x+1,E=x+2;d.push(w,A,A,E,E,w)}}else return;const f=new(zh(d)?Wh:Vh)(d,1);f.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,f)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function a0(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function u(m,g){i.drawElements(s,g,a,m*c),t.update(g,s,1)}function h(m,g,_){if(_===0)return;let f,p;if(r)f=i,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,g,a,m*c,_),t.update(g,s,_)}function d(m,g,_){if(_===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<_;p++)this.render(m[p]/c,g[p]);else{f.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let p=0;for(let S=0;S<_;S++)p+=g[S];t.update(p,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function c0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function l0(i,e){return i[0]-e[0]}function u0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function h0(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Dt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let f=s.get(u);if(f===void 0||f.count!==_){let F=function(){Y.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var m=F;f!==void 0&&f.texture.dispose();const x=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let v=0;x===!0&&(v=1),y===!0&&(v=2),w===!0&&(v=3);let b=u.attributes.position.count*v,N=1;b>e.maxTextureSize&&(N=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const k=new Float32Array(b*N*4*_),Y=new Gh(k,b,N,_);Y.type=ui,Y.needsUpdate=!0;const D=v*4;for(let B=0;B<_;B++){const $=A[B],Z=E[B],K=O[B],J=b*N*4*B;for(let se=0;se<$.count;se++){const oe=se*D;x===!0&&(o.fromBufferAttribute($,se),k[J+oe+0]=o.x,k[J+oe+1]=o.y,k[J+oe+2]=o.z,k[J+oe+3]=0),y===!0&&(o.fromBufferAttribute(Z,se),k[J+oe+4]=o.x,k[J+oe+5]=o.y,k[J+oe+6]=o.z,k[J+oe+7]=0),w===!0&&(o.fromBufferAttribute(K,se),k[J+oe+8]=o.x,k[J+oe+9]=o.y,k[J+oe+10]=o.z,k[J+oe+11]=K.itemSize===4?o.w:1)}}f={count:_,texture:Y,size:new Fe(b,N)},s.set(u,f),u.addEventListener("dispose",F)}let p=0;for(let x=0;x<d.length;x++)p+=d[x];const S=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",S),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[u.id]=_}for(let y=0;y<g;y++){const w=_[y];w[0]=y,w[1]=d[y]}_.sort(u0);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(l0);const f=u.morphAttributes.position,p=u.morphAttributes.normal;let S=0;for(let y=0;y<8;y++){const w=a[y],A=w[0],E=w[1];A!==Number.MAX_SAFE_INTEGER&&E?(f&&u.getAttribute("morphTarget"+y)!==f[A]&&u.setAttribute("morphTarget"+y,f[A]),p&&u.getAttribute("morphNormal"+y)!==p[A]&&u.setAttribute("morphNormal"+y,p[A]),r[y]=E,S+=E):(f&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),p&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const x=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function d0(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class jh extends fn{constructor(e,t,n,r,s,o,a,c,l,u){if(u=u!==void 0?u:Gi,u!==Gi&&u!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Gi&&(n=li),n===void 0&&u===Ur&&(n=Bi),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=c!==void 0?c:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const qh=new fn,Kh=new jh(1,1);Kh.compareFunction=Fh;const Jh=new Gh,Qh=new qp,ed=new Zh,cu=[],lu=[],uu=new Float32Array(16),hu=new Float32Array(9),du=new Float32Array(4);function $r(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=cu[r];if(s===void 0&&(s=new Float32Array(r),cu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Uo(i,e){let t=lu[e];t===void 0&&(t=new Int32Array(e),lu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function f0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function p0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function m0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function _0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function g0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;du.set(n),i.uniformMatrix2fv(this.addr,!1,du),Rt(t,n)}}function v0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;hu.set(n),i.uniformMatrix3fv(this.addr,!1,hu),Rt(t,n)}}function x0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;uu.set(n),i.uniformMatrix4fv(this.addr,!1,uu),Rt(t,n)}}function S0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function M0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function E0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function b0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function T0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function A0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function w0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function R0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Kh:qh;t.setTexture2D(e||s,r)}function C0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Qh,r)}function P0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ed,r)}function L0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Jh,r)}function D0(i){switch(i){case 5126:return f0;case 35664:return p0;case 35665:return m0;case 35666:return _0;case 35674:return g0;case 35675:return v0;case 35676:return x0;case 5124:case 35670:return S0;case 35667:case 35671:return y0;case 35668:case 35672:return M0;case 35669:case 35673:return E0;case 5125:return b0;case 36294:return T0;case 36295:return A0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return L0}}function I0(i,e){i.uniform1fv(this.addr,e)}function O0(i,e){const t=$r(e,this.size,2);i.uniform2fv(this.addr,t)}function U0(i,e){const t=$r(e,this.size,3);i.uniform3fv(this.addr,t)}function N0(i,e){const t=$r(e,this.size,4);i.uniform4fv(this.addr,t)}function F0(i,e){const t=$r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function z0(i,e){const t=$r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function k0(i,e){const t=$r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function B0(i,e){i.uniform1iv(this.addr,e)}function G0(i,e){i.uniform2iv(this.addr,e)}function H0(i,e){i.uniform3iv(this.addr,e)}function V0(i,e){i.uniform4iv(this.addr,e)}function W0(i,e){i.uniform1uiv(this.addr,e)}function X0(i,e){i.uniform2uiv(this.addr,e)}function $0(i,e){i.uniform3uiv(this.addr,e)}function Z0(i,e){i.uniform4uiv(this.addr,e)}function Y0(i,e,t){const n=this.cache,r=e.length,s=Uo(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||qh,s[o])}function j0(i,e,t){const n=this.cache,r=e.length,s=Uo(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Qh,s[o])}function q0(i,e,t){const n=this.cache,r=e.length,s=Uo(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ed,s[o])}function K0(i,e,t){const n=this.cache,r=e.length,s=Uo(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Jh,s[o])}function J0(i){switch(i){case 5126:return I0;case 35664:return O0;case 35665:return U0;case 35666:return N0;case 35674:return F0;case 35675:return z0;case 35676:return k0;case 5124:case 35670:return B0;case 35667:case 35671:return G0;case 35668:case 35672:return H0;case 35669:case 35673:return V0;case 5125:return W0;case 36294:return X0;case 36295:return $0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return K0}}class Q0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=D0(t.type)}}class ev{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J0(t.type)}}class tv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ea=/(\w+)(\])?(\[|\.)?/g;function fu(i,e){i.seq.push(e),i.map[e.id]=e}function nv(i,e,t){const n=i.name,r=n.length;for(Ea.lastIndex=0;;){const s=Ea.exec(n),o=Ea.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){fu(t,l===void 0?new Q0(a,i,e):new ev(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new tv(a),fu(t,h)),t=h}}}class lo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);nv(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function pu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const iv=37297;let rv=0;function sv(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ov(i){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(i);let n;switch(e===t?n="":e===go&&t===_o?n="LinearDisplayP3ToLinearSRGB":e===_o&&t===go&&(n="LinearSRGBToLinearDisplayP3"),i){case ei:case Do:return[n,"LinearTransferOETF"];case Nt:case Sc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function mu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+sv(i.getShaderSource(e),o)}else return r}function av(i,e){const t=ov(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cv(i,e){let t;switch(e){case gp:t="Linear";break;case vp:t="Reinhard";break;case xp:t="OptimizedCineon";break;case Sp:t="ACESFilmic";break;case Mp:t="AgX";break;case yp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lv(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Er).join(`
`)}function uv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Er).join(`
`)}function hv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Er(i){return i!==""}function _u(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(i){return i.replace(fv,mv)}const pv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mv(i,e){let t=He[e];if(t===void 0){const n=pv.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qa(t)}const _v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(i){return i.replace(_v,gv)}function gv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Th?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function xv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ir:case Or:e="ENVMAP_TYPE_CUBE";break;case Lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Or:e="ENVMAP_MODE_REFRACTION";break}return e}function yv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ah:e="ENVMAP_BLENDING_MULTIPLY";break;case mp:e="ENVMAP_BLENDING_MIX";break;case _p:e="ENVMAP_BLENDING_ADD";break}return e}function Mv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ev(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=vv(t),l=xv(t),u=Sv(t),h=yv(t),d=Mv(t),m=t.isWebGL2?"":lv(t),g=uv(t),_=hv(s),f=r.createProgram();let p,S,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Er).join(`
`),p.length>0&&(p+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Er).join(`
`),S.length>0&&(S+=`
`)):(p=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),S=[m,xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?He.tonemapping_pars_fragment:"",t.toneMapping!==mi?cv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,av("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),o=Qa(o),o=_u(o,t),o=gu(o,t),a=Qa(a),a=_u(a,t),a=gu(a,t),o=vu(o),a=vu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const y=x+p+o,w=x+S+a,A=pu(r,r.VERTEX_SHADER,y),E=pu(r,r.FRAGMENT_SHADER,w);r.attachShader(f,A),r.attachShader(f,E),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function O(k){if(i.debug.checkShaderErrors){const Y=r.getProgramInfoLog(f).trim(),D=r.getShaderInfoLog(A).trim(),F=r.getShaderInfoLog(E).trim();let B=!0,$=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,f,A,E);else{const Z=mu(r,A,"vertex"),K=mu(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+Z+`
`+K)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(D===""||F==="")&&($=!1);$&&(k.diagnostics={runnable:B,programLog:Y,vertexShader:{log:D,prefix:p},fragmentShader:{log:F,prefix:S}})}r.deleteShader(A),r.deleteShader(E),v=new lo(r,f),b=dv(r,f)}let v;this.getUniforms=function(){return v===void 0&&O(this),v};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(f,iv)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rv++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=A,this.fragmentShader=E,this}let bv=0;class Tv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Av(e),t.set(e,n)),n}}class Av{constructor(e){this.id=bv++,this.code=e,this.usedTimes=0}}function wv(i,e,t,n,r,s,o){const a=new yc,c=new Tv,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function f(v,b,N,k,Y){const D=k.fog,F=Y.geometry,B=v.isMeshStandardMaterial?k.environment:null,$=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),Z=$&&$.mapping===Lo?$.image.height:null,K=g[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const J=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,se=J!==void 0?J.length:0;let oe=0;F.morphAttributes.position!==void 0&&(oe=1),F.morphAttributes.normal!==void 0&&(oe=2),F.morphAttributes.color!==void 0&&(oe=3);let X,Q,ue,Me;if(K){const vt=Bn[K];X=vt.vertexShader,Q=vt.fragmentShader}else X=v.vertexShader,Q=v.fragmentShader,c.update(v),ue=c.getVertexShaderID(v),Me=c.getFragmentShaderID(v);const Se=i.getRenderTarget(),Ue=Y.isInstancedMesh===!0,Ne=Y.isBatchedMesh===!0,Ce=!!v.map,Ze=!!v.matcap,G=!!$,Ut=!!v.aoMap,Ae=!!v.lightMap,De=!!v.bumpMap,ve=!!v.normalMap,ot=!!v.displacementMap,ke=!!v.emissiveMap,R=!!v.metalnessMap,M=!!v.roughnessMap,z=v.anisotropy>0,ie=v.clearcoat>0,te=v.iridescence>0,re=v.sheen>0,xe=v.transmission>0,de=z&&!!v.anisotropyMap,_e=ie&&!!v.clearcoatMap,Re=ie&&!!v.clearcoatNormalMap,Be=ie&&!!v.clearcoatRoughnessMap,ee=te&&!!v.iridescenceMap,et=te&&!!v.iridescenceThicknessMap,Ve=re&&!!v.sheenColorMap,Ie=re&&!!v.sheenRoughnessMap,be=!!v.specularMap,fe=!!v.specularColorMap,C=!!v.specularIntensityMap,ae=xe&&!!v.transmissionMap,ye=xe&&!!v.thicknessMap,me=!!v.gradientMap,ne=!!v.alphaMap,L=v.alphaTest>0,ce=!!v.alphaHash,he=!!v.extensions,Pe=!!F.attributes.uv1,we=!!F.attributes.uv2,Ye=!!F.attributes.uv3;let je=mi;return v.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(je=i.toneMapping),{isWebGL2:u,shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:Q,defines:v.defines,customVertexShaderID:ue,customFragmentShaderID:Me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Ne,instancing:Ue,instancingColor:Ue&&Y.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:ei,map:Ce,matcap:Ze,envMap:G,envMapMode:G&&$.mapping,envMapCubeUVHeight:Z,aoMap:Ut,lightMap:Ae,bumpMap:De,normalMap:ve,displacementMap:d&&ot,emissiveMap:ke,normalMapObjectSpace:ve&&v.normalMapType===Op,normalMapTangentSpace:ve&&v.normalMapType===Nh,metalnessMap:R,roughnessMap:M,anisotropy:z,anisotropyMap:de,clearcoat:ie,clearcoatMap:_e,clearcoatNormalMap:Re,clearcoatRoughnessMap:Be,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:et,sheen:re,sheenColorMap:Ve,sheenRoughnessMap:Ie,specularMap:be,specularColorMap:fe,specularIntensityMap:C,transmission:xe,transmissionMap:ae,thicknessMap:ye,gradientMap:me,opaque:v.transparent===!1&&v.blending===wr,alphaMap:ne,alphaTest:L,alphaHash:ce,combine:v.combine,mapUv:Ce&&_(v.map.channel),aoMapUv:Ut&&_(v.aoMap.channel),lightMapUv:Ae&&_(v.lightMap.channel),bumpMapUv:De&&_(v.bumpMap.channel),normalMapUv:ve&&_(v.normalMap.channel),displacementMapUv:ot&&_(v.displacementMap.channel),emissiveMapUv:ke&&_(v.emissiveMap.channel),metalnessMapUv:R&&_(v.metalnessMap.channel),roughnessMapUv:M&&_(v.roughnessMap.channel),anisotropyMapUv:de&&_(v.anisotropyMap.channel),clearcoatMapUv:_e&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Re&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(v.sheenRoughnessMap.channel),specularMapUv:be&&_(v.specularMap.channel),specularColorMapUv:fe&&_(v.specularColorMap.channel),specularIntensityMapUv:C&&_(v.specularIntensityMap.channel),transmissionMapUv:ae&&_(v.transmissionMap.channel),thicknessMapUv:ye&&_(v.thicknessMap.channel),alphaMapUv:ne&&_(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ve||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:we,vertexUv3s:Ye,pointsUvs:Y.isPoints===!0&&!!F.attributes.uv&&(Ce||ne),fog:!!D,useFog:v.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:oe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ce&&v.map.isVideoTexture===!0&&nt.getTransfer(v.map.colorSpace)===at,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Pn,flipSided:v.side===qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:he&&v.extensions.derivatives===!0,extensionFragDepth:he&&v.extensions.fragDepth===!0,extensionDrawBuffers:he&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)b.push(N),b.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(S(b,v),x(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function S(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function x(v,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function y(v){const b=g[v.type];let N;if(b){const k=Bn[b];N=lm.clone(k.uniforms)}else N=v.uniforms;return N}function w(v,b){let N;for(let k=0,Y=l.length;k<Y;k++){const D=l[k];if(D.cacheKey===b){N=D,++N.usedTimes;break}}return N===void 0&&(N=new Ev(i,b,v,s),l.push(N)),N}function A(v){if(--v.usedTimes===0){const b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),v.destroy()}}function E(v){c.remove(v)}function O(){c.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:A,releaseShaderCache:E,programs:l,dispose:O}}function Rv(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Cv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Su(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,m,g,_,f){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:f},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=f),e++,p}function a(h,d,m,g,_,f){const p=o(h,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function c(h,d,m,g,_,f){const p=o(h,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||Cv),n.length>1&&n.sort(d||Su),r.length>1&&r.sort(d||Su)}function u(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function Pv(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new yu,i.set(n,[o])):r>=s.length?(o=new yu,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Lv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new qe};break;case"SpotLight":t={position:new I,direction:new I,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Dv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Iv=0;function Ov(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Uv(i,e){const t=new Lv,n=Dv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new st,a=new st;function c(u,h){let d=0,m=0,g=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let _=0,f=0,p=0,S=0,x=0,y=0,w=0,A=0,E=0,O=0,v=0;u.sort(Ov);const b=h===!0?Math.PI:1;for(let k=0,Y=u.length;k<Y;k++){const D=u[k],F=D.color,B=D.intensity,$=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=F.r*B*b,m+=F.g*B*b,g+=F.b*B*b;else if(D.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(D.sh.coefficients[K],B);v++}else if(D.isDirectionalLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const J=D.shadow,se=n.get(D);se.shadowBias=J.bias,se.shadowNormalBias=J.normalBias,se.shadowRadius=J.radius,se.shadowMapSize=J.mapSize,r.directionalShadow[_]=se,r.directionalShadowMap[_]=Z,r.directionalShadowMatrix[_]=D.shadow.matrix,y++}r.directional[_]=K,_++}else if(D.isSpotLight){const K=t.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(F).multiplyScalar(B*b),K.distance=$,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,r.spot[p]=K;const J=D.shadow;if(D.map&&(r.spotLightMap[E]=D.map,E++,J.updateMatrices(D),D.castShadow&&O++),r.spotLightMatrix[p]=J.matrix,D.castShadow){const se=n.get(D);se.shadowBias=J.bias,se.shadowNormalBias=J.normalBias,se.shadowRadius=J.radius,se.shadowMapSize=J.mapSize,r.spotShadow[p]=se,r.spotShadowMap[p]=Z,A++}p++}else if(D.isRectAreaLight){const K=t.get(D);K.color.copy(F).multiplyScalar(B),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),r.rectArea[S]=K,S++}else if(D.isPointLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*b),K.distance=D.distance,K.decay=D.decay,D.castShadow){const J=D.shadow,se=n.get(D);se.shadowBias=J.bias,se.shadowNormalBias=J.normalBias,se.shadowRadius=J.radius,se.shadowMapSize=J.mapSize,se.shadowCameraNear=J.camera.near,se.shadowCameraFar=J.camera.far,r.pointShadow[f]=se,r.pointShadowMap[f]=Z,r.pointShadowMatrix[f]=D.shadow.matrix,w++}r.point[f]=K,f++}else if(D.isHemisphereLight){const K=t.get(D);K.skyColor.copy(D.color).multiplyScalar(B*b),K.groundColor.copy(D.groundColor).multiplyScalar(B*b),r.hemi[x]=K,x++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=g;const N=r.hash;(N.directionalLength!==_||N.pointLength!==f||N.spotLength!==p||N.rectAreaLength!==S||N.hemiLength!==x||N.numDirectionalShadows!==y||N.numPointShadows!==w||N.numSpotShadows!==A||N.numSpotMaps!==E||N.numLightProbes!==v)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=S,r.point.length=f,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=A+E-O,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=v,N.directionalLength=_,N.pointLength=f,N.spotLength=p,N.rectAreaLength=S,N.hemiLength=x,N.numDirectionalShadows=y,N.numPointShadows=w,N.numSpotShadows=A,N.numSpotMaps=E,N.numLightProbes=v,r.version=Iv++)}function l(u,h){let d=0,m=0,g=0,_=0,f=0;const p=h.matrixWorldInverse;for(let S=0,x=u.length;S<x;S++){const y=u[S];if(y.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(y.isSpotLight){const w=r.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const w=r.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),m++}else if(y.isHemisphereLight){const w=r.hemi[f];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),f++}}}return{setup:c,setupView:l,state:r}}function Mu(i,e){const t=new Uv(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Nv(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Mu(i,e),t.set(s,[c])):o>=a.length?(c=new Mu(i,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class Fv extends Xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zv extends Xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gv(i,e,t){let n=new Mc;const r=new Fe,s=new Fe,o=new Dt,a=new Fv({depthPacking:Ip}),c=new zv,l={},u=t.maxTextureSize,h={[xi]:qt,[qt]:xi,[Pn]:Pn},d=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:kv,fragmentShader:Bv}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Un;g.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Lt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Th;let p=this.type;this.render=function(A,E,O){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const v=i.getRenderTarget(),b=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),k=i.state;k.setBlending(pi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const Y=p!==qn&&this.type===qn,D=p===qn&&this.type!==qn;for(let F=0,B=A.length;F<B;F++){const $=A[F],Z=$.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const K=Z.getFrameExtents();if(r.multiply(K),s.copy(Z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,Z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,Z.mapSize.y=s.y)),Z.map===null||Y===!0||D===!0){const se=this.type!==qn?{minFilter:$t,magFilter:$t}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Zi(r.x,r.y,se),Z.map.texture.name=$.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const J=Z.getViewportCount();for(let se=0;se<J;se++){const oe=Z.getViewport(se);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),k.viewport(o),Z.updateMatrices($,se),n=Z.getFrustum(),y(E,O,Z.camera,$,this.type)}Z.isPointLightShadow!==!0&&this.type===qn&&S(Z,O),Z.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(v,b,N)};function S(A,E){const O=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zi(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(E,null,O,d,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(E,null,O,m,_,null)}function x(A,E,O,v){let b=null;const N=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)b=N;else if(b=O.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const k=b.uuid,Y=E.uuid;let D=l[k];D===void 0&&(D={},l[k]=D);let F=D[Y];F===void 0&&(F=b.clone(),D[Y]=F,E.addEventListener("dispose",w)),b=F}if(b.visible=E.visible,b.wireframe=E.wireframe,v===qn?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:h[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const k=i.properties.get(b);k.light=O}return b}function y(A,E,O,v,b){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===qn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);const Y=e.update(A),D=A.material;if(Array.isArray(D)){const F=Y.groups;for(let B=0,$=F.length;B<$;B++){const Z=F[B],K=D[Z.materialIndex];if(K&&K.visible){const J=x(A,K,v,b);A.onBeforeShadow(i,A,E,O,Y,J,Z),i.renderBufferDirect(O,null,Y,J,A,Z),A.onAfterShadow(i,A,E,O,Y,J,Z)}}}else if(D.visible){const F=x(A,D,v,b);A.onBeforeShadow(i,A,E,O,Y,F,null),i.renderBufferDirect(O,null,Y,F,A,null),A.onAfterShadow(i,A,E,O,Y,F,null)}}const k=A.children;for(let Y=0,D=k.length;Y<D;Y++)y(k[Y],E,O,v,b)}function w(A){A.target.removeEventListener("dispose",w);for(const O in l){const v=l[O],b=A.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}function Hv(i,e,t){const n=t.isWebGL2;function r(){let L=!1;const ce=new Dt;let he=null;const Pe=new Dt(0,0,0,0);return{setMask:function(we){he!==we&&!L&&(i.colorMask(we,we,we,we),he=we)},setLocked:function(we){L=we},setClear:function(we,Ye,je,mt,vt){vt===!0&&(we*=mt,Ye*=mt,je*=mt),ce.set(we,Ye,je,mt),Pe.equals(ce)===!1&&(i.clearColor(we,Ye,je,mt),Pe.copy(ce))},reset:function(){L=!1,he=null,Pe.set(-1,0,0,0)}}}function s(){let L=!1,ce=null,he=null,Pe=null;return{setTest:function(we){we?Ne(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(we){ce!==we&&!L&&(i.depthMask(we),ce=we)},setFunc:function(we){if(he!==we){switch(we){case cp:i.depthFunc(i.NEVER);break;case lp:i.depthFunc(i.ALWAYS);break;case up:i.depthFunc(i.LESS);break;case po:i.depthFunc(i.LEQUAL);break;case hp:i.depthFunc(i.EQUAL);break;case dp:i.depthFunc(i.GEQUAL);break;case fp:i.depthFunc(i.GREATER);break;case pp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=we}},setLocked:function(we){L=we},setClear:function(we){Pe!==we&&(i.clearDepth(we),Pe=we)},reset:function(){L=!1,ce=null,he=null,Pe=null}}}function o(){let L=!1,ce=null,he=null,Pe=null,we=null,Ye=null,je=null,mt=null,vt=null;return{setTest:function(Qe){L||(Qe?Ne(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(Qe){ce!==Qe&&!L&&(i.stencilMask(Qe),ce=Qe)},setFunc:function(Qe,Mt,Nn){(he!==Qe||Pe!==Mt||we!==Nn)&&(i.stencilFunc(Qe,Mt,Nn),he=Qe,Pe=Mt,we=Nn)},setOp:function(Qe,Mt,Nn){(Ye!==Qe||je!==Mt||mt!==Nn)&&(i.stencilOp(Qe,Mt,Nn),Ye=Qe,je=Mt,mt=Nn)},setLocked:function(Qe){L=Qe},setClear:function(Qe){vt!==Qe&&(i.clearStencil(Qe),vt=Qe)},reset:function(){L=!1,ce=null,he=null,Pe=null,we=null,Ye=null,je=null,mt=null,vt=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,_=[],f=null,p=!1,S=null,x=null,y=null,w=null,A=null,E=null,O=null,v=new qe(0,0,0),b=0,N=!1,k=null,Y=null,D=null,F=null,B=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,K=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=K>=1):J.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=K>=2);let se=null,oe={};const X=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),ue=new Dt().fromArray(X),Me=new Dt().fromArray(Q);function Se(L,ce,he,Pe){const we=new Uint8Array(4),Ye=i.createTexture();i.bindTexture(L,Ye),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<he;je++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(ce,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(ce+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Ye}const Ue={};Ue[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ue[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ne(i.DEPTH_TEST),c.setFunc(po),ke(!1),R(il),Ne(i.CULL_FACE),ve(pi);function Ne(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function Ce(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Ze(L,ce){return m[L]!==ce?(i.bindFramebuffer(L,ce),m[L]=ce,n&&(L===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ce),L===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ce)),!0):!1}function G(L,ce){let he=_,Pe=!1;if(L)if(he=g.get(ce),he===void 0&&(he=[],g.set(ce,he)),L.isWebGLMultipleRenderTargets){const we=L.texture;if(he.length!==we.length||he[0]!==i.COLOR_ATTACHMENT0){for(let Ye=0,je=we.length;Ye<je;Ye++)he[Ye]=i.COLOR_ATTACHMENT0+Ye;he.length=we.length,Pe=!0}}else he[0]!==i.COLOR_ATTACHMENT0&&(he[0]=i.COLOR_ATTACHMENT0,Pe=!0);else he[0]!==i.BACK&&(he[0]=i.BACK,Pe=!0);Pe&&(t.isWebGL2?i.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Ut(L){return f!==L?(i.useProgram(L),f=L,!0):!1}const Ae={[Ni]:i.FUNC_ADD,[Zf]:i.FUNC_SUBTRACT,[Yf]:i.FUNC_REVERSE_SUBTRACT};if(n)Ae[al]=i.MIN,Ae[cl]=i.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ae[al]=L.MIN_EXT,Ae[cl]=L.MAX_EXT)}const De={[jf]:i.ZERO,[qf]:i.ONE,[Kf]:i.SRC_COLOR,[Wa]:i.SRC_ALPHA,[ip]:i.SRC_ALPHA_SATURATE,[tp]:i.DST_COLOR,[Qf]:i.DST_ALPHA,[Jf]:i.ONE_MINUS_SRC_COLOR,[Xa]:i.ONE_MINUS_SRC_ALPHA,[np]:i.ONE_MINUS_DST_COLOR,[ep]:i.ONE_MINUS_DST_ALPHA,[rp]:i.CONSTANT_COLOR,[sp]:i.ONE_MINUS_CONSTANT_COLOR,[op]:i.CONSTANT_ALPHA,[ap]:i.ONE_MINUS_CONSTANT_ALPHA};function ve(L,ce,he,Pe,we,Ye,je,mt,vt,Qe){if(L===pi){p===!0&&(Ce(i.BLEND),p=!1);return}if(p===!1&&(Ne(i.BLEND),p=!0),L!==$f){if(L!==S||Qe!==N){if((x!==Ni||A!==Ni)&&(i.blendEquation(i.FUNC_ADD),x=Ni,A=Ni),Qe)switch(L){case wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rl:i.blendFunc(i.ONE,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ol:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ol:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,w=null,E=null,O=null,v.set(0,0,0),b=0,S=L,N=Qe}return}we=we||ce,Ye=Ye||he,je=je||Pe,(ce!==x||we!==A)&&(i.blendEquationSeparate(Ae[ce],Ae[we]),x=ce,A=we),(he!==y||Pe!==w||Ye!==E||je!==O)&&(i.blendFuncSeparate(De[he],De[Pe],De[Ye],De[je]),y=he,w=Pe,E=Ye,O=je),(mt.equals(v)===!1||vt!==b)&&(i.blendColor(mt.r,mt.g,mt.b,vt),v.copy(mt),b=vt),S=L,N=!1}function ot(L,ce){L.side===Pn?Ce(i.CULL_FACE):Ne(i.CULL_FACE);let he=L.side===qt;ce&&(he=!he),ke(he),L.blending===wr&&L.transparent===!1?ve(pi):ve(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const Pe=L.stencilWrite;l.setTest(Pe),Pe&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),z(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ne(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){k!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),k=L)}function R(L){L!==Vf?(Ne(i.CULL_FACE),L!==Y&&(L===il?i.cullFace(i.BACK):L===Wf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),Y=L}function M(L){L!==D&&(Z&&i.lineWidth(L),D=L)}function z(L,ce,he){L?(Ne(i.POLYGON_OFFSET_FILL),(F!==ce||B!==he)&&(i.polygonOffset(ce,he),F=ce,B=he)):Ce(i.POLYGON_OFFSET_FILL)}function ie(L){L?Ne(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function te(L){L===void 0&&(L=i.TEXTURE0+$-1),se!==L&&(i.activeTexture(L),se=L)}function re(L,ce,he){he===void 0&&(se===null?he=i.TEXTURE0+$-1:he=se);let Pe=oe[he];Pe===void 0&&(Pe={type:void 0,texture:void 0},oe[he]=Pe),(Pe.type!==L||Pe.texture!==ce)&&(se!==he&&(i.activeTexture(he),se=he),i.bindTexture(L,ce||Ue[L]),Pe.type=L,Pe.texture=ce)}function xe(){const L=oe[se];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function de(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function C(L){ue.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ue.copy(L))}function ae(L){Me.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Me.copy(L))}function ye(L,ce){let he=h.get(ce);he===void 0&&(he=new WeakMap,h.set(ce,he));let Pe=he.get(L);Pe===void 0&&(Pe=i.getUniformBlockIndex(ce,L.name),he.set(L,Pe))}function me(L,ce){const Pe=h.get(ce).get(L);u.get(ce)!==Pe&&(i.uniformBlockBinding(ce,Pe,L.__bindingPointIndex),u.set(ce,Pe))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},se=null,oe={},m={},g=new WeakMap,_=[],f=null,p=!1,S=null,x=null,y=null,w=null,A=null,E=null,O=null,v=new qe(0,0,0),b=0,N=!1,k=null,Y=null,D=null,F=null,B=null,ue.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ne,disable:Ce,bindFramebuffer:Ze,drawBuffers:G,useProgram:Ut,setBlending:ve,setMaterial:ot,setFlipSided:ke,setCullFace:R,setLineWidth:M,setPolygonOffset:z,setScissorTest:ie,activeTexture:te,bindTexture:re,unbindTexture:xe,compressedTexImage2D:de,compressedTexImage3D:_e,texImage2D:be,texImage3D:fe,updateUBOMapping:ye,uniformBlockBinding:me,texStorage2D:Ve,texStorage3D:Ie,texSubImage2D:Re,texSubImage3D:Be,compressedTexSubImage2D:ee,compressedTexSubImage3D:et,scissor:C,viewport:ae,reset:ne}}function Vv(i,e,t,n,r,s,o){const a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return m?new OffscreenCanvas(R,M):xo("canvas")}function _(R,M,z,ie){let te=1;if((R.width>ie||R.height>ie)&&(te=ie/Math.max(R.width,R.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const re=M?Ja:Math.floor,xe=re(te*R.width),de=re(te*R.height);h===void 0&&(h=g(xe,de));const _e=z?g(xe,de):h;return _e.width=xe,_e.height=de,_e.getContext("2d").drawImage(R,0,0,xe,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+xe+"x"+de+")."),_e}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function f(R){return zl(R.width)&&zl(R.height)}function p(R){return a?!1:R.wrapS!==Ln||R.wrapT!==Ln||R.minFilter!==$t&&R.minFilter!==Sn}function S(R,M){return R.generateMipmaps&&M&&R.minFilter!==$t&&R.minFilter!==Sn}function x(R){i.generateMipmap(R)}function y(R,M,z,ie,te=!1){if(a===!1)return M;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=M;if(M===i.RED&&(z===i.FLOAT&&(re=i.R32F),z===i.HALF_FLOAT&&(re=i.R16F),z===i.UNSIGNED_BYTE&&(re=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(re=i.R8UI),z===i.UNSIGNED_SHORT&&(re=i.R16UI),z===i.UNSIGNED_INT&&(re=i.R32UI),z===i.BYTE&&(re=i.R8I),z===i.SHORT&&(re=i.R16I),z===i.INT&&(re=i.R32I)),M===i.RG&&(z===i.FLOAT&&(re=i.RG32F),z===i.HALF_FLOAT&&(re=i.RG16F),z===i.UNSIGNED_BYTE&&(re=i.RG8)),M===i.RGBA){const xe=te?mo:nt.getTransfer(ie);z===i.FLOAT&&(re=i.RGBA32F),z===i.HALF_FLOAT&&(re=i.RGBA16F),z===i.UNSIGNED_BYTE&&(re=xe===at?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function w(R,M,z){return S(R,z)===!0||R.isFramebufferTexture&&R.minFilter!==$t&&R.minFilter!==Sn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){return R===$t||R===ll||R===jo?i.NEAREST:i.LINEAR}function E(R){const M=R.target;M.removeEventListener("dispose",E),v(M),M.isVideoTexture&&u.delete(M)}function O(R){const M=R.target;M.removeEventListener("dispose",O),N(M)}function v(R){const M=n.get(R);if(M.__webglInit===void 0)return;const z=R.source,ie=d.get(z);if(ie){const te=ie[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(R),Object.keys(ie).length===0&&d.delete(z)}n.remove(R)}function b(R){const M=n.get(R);i.deleteTexture(M.__webglTexture);const z=R.source,ie=d.get(z);delete ie[M.__cacheKey],o.memory.textures--}function N(R){const M=R.texture,z=n.get(R),ie=n.get(M);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(z.__webglFramebuffer[te]))for(let re=0;re<z.__webglFramebuffer[te].length;re++)i.deleteFramebuffer(z.__webglFramebuffer[te][re]);else i.deleteFramebuffer(z.__webglFramebuffer[te]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[te])}else{if(Array.isArray(z.__webglFramebuffer))for(let te=0;te<z.__webglFramebuffer.length;te++)i.deleteFramebuffer(z.__webglFramebuffer[te]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let te=0;te<z.__webglColorRenderbuffer.length;te++)z.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[te]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let te=0,re=M.length;te<re;te++){const xe=n.get(M[te]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(M[te])}n.remove(M),n.remove(R)}let k=0;function Y(){k=0}function D(){const R=k;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),k+=1,R}function F(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function B(R,M){const z=n.get(R);if(R.isVideoTexture&&ot(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(z,R,M);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function $(R,M){const z=n.get(R);if(R.version>0&&z.__version!==R.version){ue(z,R,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function Z(R,M){const z=n.get(R);if(R.version>0&&z.__version!==R.version){ue(z,R,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function K(R,M){const z=n.get(R);if(R.version>0&&z.__version!==R.version){Me(z,R,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const J={[Ya]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[ja]:i.MIRRORED_REPEAT},se={[$t]:i.NEAREST,[ll]:i.NEAREST_MIPMAP_NEAREST,[jo]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Ep]:i.LINEAR_MIPMAP_NEAREST,[fs]:i.LINEAR_MIPMAP_LINEAR},oe={[Up]:i.NEVER,[Gp]:i.ALWAYS,[Np]:i.LESS,[Fh]:i.LEQUAL,[Fp]:i.EQUAL,[Bp]:i.GEQUAL,[zp]:i.GREATER,[kp]:i.NOTEQUAL};function X(R,M,z){if(z?(i.texParameteri(R,i.TEXTURE_WRAP_S,J[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,J[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,J[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,se[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,se[M.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Ln||M.wrapT!==Ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,A(M.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==$t&&M.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===$t||M.minFilter!==jo&&M.minFilter!==fs||M.type===ui&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ps&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Q(R,M){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",E));const ie=M.source;let te=d.get(ie);te===void 0&&(te={},d.set(ie,te));const re=F(M);if(re!==R.__cacheKey){te[re]===void 0&&(te[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[re].usedTimes++;const xe=te[R.__cacheKey];xe!==void 0&&(te[R.__cacheKey].usedTimes--,xe.usedTimes===0&&b(M)),R.__cacheKey=re,R.__webglTexture=te[re].texture}return z}function ue(R,M,z){let ie=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=i.TEXTURE_3D);const te=Q(R,M),re=M.source;t.bindTexture(ie,R.__webglTexture,i.TEXTURE0+z);const xe=n.get(re);if(re.version!==xe.__version||te===!0){t.activeTexture(i.TEXTURE0+z);const de=nt.getPrimaries(nt.workingColorSpace),_e=M.colorSpace===Mn?null:nt.getPrimaries(M.colorSpace),Re=M.colorSpace===Mn||de===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Be=p(M)&&f(M.image)===!1;let ee=_(M.image,Be,!1,r.maxTextureSize);ee=ke(M,ee);const et=f(ee)||a,Ve=s.convert(M.format,M.colorSpace);let Ie=s.convert(M.type),be=y(M.internalFormat,Ve,Ie,M.colorSpace,M.isVideoTexture);X(ie,M,et);let fe;const C=M.mipmaps,ae=a&&M.isVideoTexture!==!0&&be!==Oh,ye=xe.__version===void 0||te===!0,me=w(M,ee,et);if(M.isDepthTexture)be=i.DEPTH_COMPONENT,a?M.type===ui?be=i.DEPTH_COMPONENT32F:M.type===li?be=i.DEPTH_COMPONENT24:M.type===Bi?be=i.DEPTH24_STENCIL8:be=i.DEPTH_COMPONENT16:M.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Gi&&be===i.DEPTH_COMPONENT&&M.type!==xc&&M.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=li,Ie=s.convert(M.type)),M.format===Ur&&be===i.DEPTH_COMPONENT&&(be=i.DEPTH_STENCIL,M.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Bi,Ie=s.convert(M.type))),ye&&(ae?t.texStorage2D(i.TEXTURE_2D,1,be,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,be,ee.width,ee.height,0,Ve,Ie,null));else if(M.isDataTexture)if(C.length>0&&et){ae&&ye&&t.texStorage2D(i.TEXTURE_2D,me,be,C[0].width,C[0].height);for(let ne=0,L=C.length;ne<L;ne++)fe=C[ne],ae?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,Ve,Ie,fe.data):t.texImage2D(i.TEXTURE_2D,ne,be,fe.width,fe.height,0,Ve,Ie,fe.data);M.generateMipmaps=!1}else ae?(ye&&t.texStorage2D(i.TEXTURE_2D,me,be,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,Ve,Ie,ee.data)):t.texImage2D(i.TEXTURE_2D,0,be,ee.width,ee.height,0,Ve,Ie,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ae&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,be,C[0].width,C[0].height,ee.depth);for(let ne=0,L=C.length;ne<L;ne++)fe=C[ne],M.format!==Dn?Ve!==null?ae?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,ee.depth,Ve,fe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,be,fe.width,fe.height,ee.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,ee.depth,Ve,Ie,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,be,fe.width,fe.height,ee.depth,0,Ve,Ie,fe.data)}else{ae&&ye&&t.texStorage2D(i.TEXTURE_2D,me,be,C[0].width,C[0].height);for(let ne=0,L=C.length;ne<L;ne++)fe=C[ne],M.format!==Dn?Ve!==null?ae?t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,Ve,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,be,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,Ve,Ie,fe.data):t.texImage2D(i.TEXTURE_2D,ne,be,fe.width,fe.height,0,Ve,Ie,fe.data)}else if(M.isDataArrayTexture)ae?(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,be,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ve,Ie,ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,ee.width,ee.height,ee.depth,0,Ve,Ie,ee.data);else if(M.isData3DTexture)ae?(ye&&t.texStorage3D(i.TEXTURE_3D,me,be,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ve,Ie,ee.data)):t.texImage3D(i.TEXTURE_3D,0,be,ee.width,ee.height,ee.depth,0,Ve,Ie,ee.data);else if(M.isFramebufferTexture){if(ye)if(ae)t.texStorage2D(i.TEXTURE_2D,me,be,ee.width,ee.height);else{let ne=ee.width,L=ee.height;for(let ce=0;ce<me;ce++)t.texImage2D(i.TEXTURE_2D,ce,be,ne,L,0,Ve,Ie,null),ne>>=1,L>>=1}}else if(C.length>0&&et){ae&&ye&&t.texStorage2D(i.TEXTURE_2D,me,be,C[0].width,C[0].height);for(let ne=0,L=C.length;ne<L;ne++)fe=C[ne],ae?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Ve,Ie,fe):t.texImage2D(i.TEXTURE_2D,ne,be,Ve,Ie,fe);M.generateMipmaps=!1}else ae?(ye&&t.texStorage2D(i.TEXTURE_2D,me,be,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ve,Ie,ee)):t.texImage2D(i.TEXTURE_2D,0,be,Ve,Ie,ee);S(M,et)&&x(ie),xe.__version=re.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Me(R,M,z){if(M.image.length!==6)return;const ie=Q(R,M),te=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);const re=n.get(te);if(te.version!==re.__version||ie===!0){t.activeTexture(i.TEXTURE0+z);const xe=nt.getPrimaries(nt.workingColorSpace),de=M.colorSpace===Mn?null:nt.getPrimaries(M.colorSpace),_e=M.colorSpace===Mn||xe===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let ne=0;ne<6;ne++)!Re&&!Be?ee[ne]=_(M.image[ne],!1,!0,r.maxCubemapSize):ee[ne]=Be?M.image[ne].image:M.image[ne],ee[ne]=ke(M,ee[ne]);const et=ee[0],Ve=f(et)||a,Ie=s.convert(M.format,M.colorSpace),be=s.convert(M.type),fe=y(M.internalFormat,Ie,be,M.colorSpace),C=a&&M.isVideoTexture!==!0,ae=re.__version===void 0||ie===!0;let ye=w(M,et,Ve);X(i.TEXTURE_CUBE_MAP,M,Ve);let me;if(Re){C&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,fe,et.width,et.height);for(let ne=0;ne<6;ne++){me=ee[ne].mipmaps;for(let L=0;L<me.length;L++){const ce=me[L];M.format!==Dn?Ie!==null?C?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,ce.width,ce.height,Ie,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,ce.width,ce.height,Ie,be,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,fe,ce.width,ce.height,0,Ie,be,ce.data)}}}else{me=M.mipmaps,C&&ae&&(me.length>0&&ye++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,fe,ee[0].width,ee[0].height));for(let ne=0;ne<6;ne++)if(Be){C?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ee[ne].width,ee[ne].height,Ie,be,ee[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,fe,ee[ne].width,ee[ne].height,0,Ie,be,ee[ne].data);for(let L=0;L<me.length;L++){const he=me[L].image[ne].image;C?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,he.width,he.height,Ie,be,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,fe,he.width,he.height,0,Ie,be,he.data)}}else{C?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie,be,ee[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,fe,Ie,be,ee[ne]);for(let L=0;L<me.length;L++){const ce=me[L];C?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,Ie,be,ce.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,fe,Ie,be,ce.image[ne])}}}S(M,Ve)&&x(i.TEXTURE_CUBE_MAP),re.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Se(R,M,z,ie,te,re){const xe=s.convert(z.format,z.colorSpace),de=s.convert(z.type),_e=y(z.internalFormat,xe,de,z.colorSpace);if(!n.get(M).__hasExternalTextures){const Be=Math.max(1,M.width>>re),ee=Math.max(1,M.height>>re);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,re,_e,Be,ee,M.depth,0,xe,de,null):t.texImage2D(te,re,_e,Be,ee,0,xe,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ve(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,te,n.get(z).__webglTexture,0,De(M)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,te,n.get(z).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(R,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let ie=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||ve(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===ui?ie=i.DEPTH_COMPONENT32F:te.type===li&&(ie=i.DEPTH_COMPONENT24));const re=De(M);ve(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,ie,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ie,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const ie=De(M);z&&ve(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,M.width,M.height):ve(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const ie=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<ie.length;te++){const re=ie[te],xe=s.convert(re.format,re.colorSpace),de=s.convert(re.type),_e=y(re.internalFormat,xe,de,re.colorSpace),Re=De(M);z&&ve(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,_e,M.width,M.height):ve(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,_e,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,_e,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const ie=n.get(M.depthTexture).__webglTexture,te=De(M);if(M.depthTexture.format===Gi)ve(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(M.depthTexture.format===Ur)ve(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ce(R){const M=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ne(M.__webglFramebuffer,R)}else if(z){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=i.createRenderbuffer(),Ue(M.__webglDepthbuffer[ie],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Ue(M.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(R,M,z){const ie=n.get(R);M!==void 0&&Se(ie.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ce(R)}function G(R){const M=R.texture,z=n.get(R),ie=n.get(M);R.addEventListener("dispose",O),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=M.version,o.memory.textures++);const te=R.isWebGLCubeRenderTarget===!0,re=R.isWebGLMultipleRenderTargets===!0,xe=f(R)||a;if(te){z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[de]=[];for(let _e=0;_e<M.mipmaps.length;_e++)z.__webglFramebuffer[de][_e]=i.createFramebuffer()}else z.__webglFramebuffer[de]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)z.__webglFramebuffer[de]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(re)if(r.drawBuffers){const de=R.texture;for(let _e=0,Re=de.length;_e<Re;_e++){const Be=n.get(de[_e]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ve(R)===!1){const de=re?M:[M];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let _e=0;_e<de.length;_e++){const Re=de[_e];z.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[_e]);const Be=s.convert(Re.format,Re.colorSpace),ee=s.convert(Re.type),et=y(Re.internalFormat,Be,ee,Re.colorSpace,R.isXRRenderTarget===!0),Ve=De(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,et,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,z.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),X(i.TEXTURE_CUBE_MAP,M,xe);for(let de=0;de<6;de++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Se(z.__webglFramebuffer[de][_e],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else Se(z.__webglFramebuffer[de],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);S(M,xe)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const de=R.texture;for(let _e=0,Re=de.length;_e<Re;_e++){const Be=de[_e],ee=n.get(Be);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),X(i.TEXTURE_2D,Be,xe),Se(z.__webglFramebuffer,R,Be,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,0),S(Be,xe)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?de=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ie.__webglTexture),X(de,M,xe),a&&M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Se(z.__webglFramebuffer[_e],R,M,i.COLOR_ATTACHMENT0,de,_e);else Se(z.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,de,0);S(M,xe)&&x(de),t.unbindTexture()}R.depthBuffer&&Ce(R)}function Ut(R){const M=f(R)||a,z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,te=z.length;ie<te;ie++){const re=z[ie];if(S(re,M)){const xe=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,de=n.get(re).__webglTexture;t.bindTexture(xe,de),x(xe),t.unbindTexture()}}}function Ae(R){if(a&&R.samples>0&&ve(R)===!1){const M=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],z=R.width,ie=R.height;let te=i.COLOR_BUFFER_BIT;const re=[],xe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(R),_e=R.isWebGLMultipleRenderTargets===!0;if(_e)for(let Re=0;Re<M.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){re.push(i.COLOR_ATTACHMENT0+Re),R.depthBuffer&&re.push(xe);const Be=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Be===!1&&(R.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),_e&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[Re]),Be===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[xe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[xe])),_e){const ee=n.get(M[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,z,ie,0,0,z,ie,te,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Re=0;Re<M.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,de.__webglColorRenderbuffer[Re]);const Be=n.get(M[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function De(R){return Math.min(r.maxSamples,R.samples)}function ve(R){const M=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ot(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function ke(R,M){const z=R.colorSpace,ie=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===qa||z!==ei&&z!==Mn&&(nt.getTransfer(z)===at?a===!1?e.has("EXT_sRGB")===!0&&ie===Dn?(R.format=qa,R.minFilter=Sn,R.generateMipmaps=!1):M=kh.sRGBToLinear(M):(ie!==Dn||te!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}this.allocateTextureUnit=D,this.resetTextureUnits=Y,this.setTexture2D=B,this.setTexture2DArray=$,this.setTexture3D=Z,this.setTextureCube=K,this.rebindTextures=Ze,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ve}function Wv(i,e,t){const n=t.isWebGL2;function r(s,o=Mn){let a;const c=nt.getTransfer(o);if(s===_i)return i.UNSIGNED_BYTE;if(s===Ch)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Ph)return i.UNSIGNED_SHORT_5_5_5_1;if(s===bp)return i.BYTE;if(s===Tp)return i.SHORT;if(s===xc)return i.UNSIGNED_SHORT;if(s===Rh)return i.INT;if(s===li)return i.UNSIGNED_INT;if(s===ui)return i.FLOAT;if(s===ps)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ap)return i.ALPHA;if(s===Dn)return i.RGBA;if(s===wp)return i.LUMINANCE;if(s===Rp)return i.LUMINANCE_ALPHA;if(s===Gi)return i.DEPTH_COMPONENT;if(s===Ur)return i.DEPTH_STENCIL;if(s===qa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Cp)return i.RED;if(s===Lh)return i.RED_INTEGER;if(s===Pp)return i.RG;if(s===Dh)return i.RG_INTEGER;if(s===Ih)return i.RGBA_INTEGER;if(s===qo||s===Ko||s===Jo||s===Qo)if(c===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===qo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===qo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ko)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ul||s===hl||s===dl||s===fl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ul)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===hl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===dl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Oh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===pl||s===ml)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===pl)return c===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ml)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===_l||s===gl||s===vl||s===xl||s===Sl||s===yl||s===Ml||s===El||s===bl||s===Tl||s===Al||s===wl||s===Rl||s===Cl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===_l)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gl)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vl)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xl)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sl)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yl)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ml)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===El)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bl)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Tl)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Al)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wl)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rl)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cl)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ea||s===Pl||s===Ll)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ea)return c===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Pl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ll)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Lp||s===Dl||s===Il||s===Ol)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ea)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Dl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Il)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ol)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Xv extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Js extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $v={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,n),p=this._getHandJoint(l,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($v)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Js;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Zv extends Qi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null;const _=t.getContextAttributes();let f=null,p=null;const S=[],x=[],y=new Fe;let w=null;const A=new Cn;A.layers.enable(1),A.viewport=new Dt;const E=new Cn;E.layers.enable(2),E.viewport=new Dt;const O=[A,E],v=new Xv;v.layers.enable(1),v.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=S[X];return Q===void 0&&(Q=new ba,S[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=S[X];return Q===void 0&&(Q=new ba,S[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=S[X];return Q===void 0&&(Q=new ba,S[X]=Q),Q.getHandSpace()};function k(X){const Q=x.indexOf(X.inputSource);if(Q===-1)return;const ue=S[Q];ue!==void 0&&(ue.update(X.inputSource,X.frame,l||o),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",D);for(let X=0;X<S.length;X++){const Q=x[X];Q!==null&&(x[X]=null,S[X].disconnect(Q))}b=null,N=null,e.setRenderTarget(f),m=null,d=null,h=null,r=null,p=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new Zi(m.framebufferWidth,m.framebufferHeight,{format:Dn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,ue=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=_.stencil?Ur:Gi,ue=_.stencil?Bi:li);const Se={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Se),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Zi(d.textureWidth,d.textureHeight,{format:Dn,type:_i,depthTexture:new jh(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ue=e.properties.get(p);Ue.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(X){for(let Q=0;Q<X.removed.length;Q++){const ue=X.removed[Q],Me=x.indexOf(ue);Me>=0&&(x[Me]=null,S[Me].disconnect(ue))}for(let Q=0;Q<X.added.length;Q++){const ue=X.added[Q];let Me=x.indexOf(ue);if(Me===-1){for(let Ue=0;Ue<S.length;Ue++)if(Ue>=x.length){x.push(ue),Me=Ue;break}else if(x[Ue]===null){x[Ue]=ue,Me=Ue;break}if(Me===-1)break}const Se=S[Me];Se&&Se.connect(ue)}}const F=new I,B=new I;function $(X,Q,ue){F.setFromMatrixPosition(Q.matrixWorld),B.setFromMatrixPosition(ue.matrixWorld);const Me=F.distanceTo(B),Se=Q.projectionMatrix.elements,Ue=ue.projectionMatrix.elements,Ne=Se[14]/(Se[10]-1),Ce=Se[14]/(Se[10]+1),Ze=(Se[9]+1)/Se[5],G=(Se[9]-1)/Se[5],Ut=(Se[8]-1)/Se[0],Ae=(Ue[8]+1)/Ue[0],De=Ne*Ut,ve=Ne*Ae,ot=Me/(-Ut+Ae),ke=ot*-Ut;Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ke),X.translateZ(ot),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const R=Ne+ot,M=Ce+ot,z=De-ke,ie=ve+(Me-ke),te=Ze*Ce/M*R,re=G*Ce/M*R;X.projectionMatrix.makePerspective(z,ie,te,re,R,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Z(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;v.near=E.near=A.near=X.near,v.far=E.far=A.far=X.far,(b!==v.near||N!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,N=v.far);const Q=X.parent,ue=v.cameras;Z(v,Q);for(let Me=0;Me<ue.length;Me++)Z(ue[Me],Q);ue.length===2?$(v,A,E):v.projectionMatrix.copy(A.projectionMatrix),K(X,v,Q)};function K(X,Q,ue){ue===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ka*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)};let J=null;function se(X,Q){if(u=Q.getViewerPose(l||o),g=Q,u!==null){const ue=u.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let Me=!1;ue.length!==v.cameras.length&&(v.cameras.length=0,Me=!0);for(let Se=0;Se<ue.length;Se++){const Ue=ue[Se];let Ne=null;if(m!==null)Ne=m.getViewport(Ue);else{const Ze=h.getViewSubImage(d,Ue);Ne=Ze.viewport,Se===0&&(e.setRenderTargetTextures(p,Ze.colorTexture,d.ignoreDepthValues?void 0:Ze.depthStencilTexture),e.setRenderTarget(p))}let Ce=O[Se];Ce===void 0&&(Ce=new Cn,Ce.layers.enable(Se),Ce.viewport=new Dt,O[Se]=Ce),Ce.matrix.fromArray(Ue.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ue.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Se===0&&(v.matrix.copy(Ce.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Me===!0&&v.cameras.push(Ce)}}for(let ue=0;ue<S.length;ue++){const Me=x[ue],Se=S[ue];Me!==null&&Se!==void 0&&Se.update(Me,Q,l||o)}J&&J(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const oe=new Yh;oe.setAnimationLoop(se),this.setAnimationLoop=function(X){J=X},this.dispose=function(){}}}function Yv(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Xh(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,S,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),h(f,p)):p.isMeshPhongMaterial?(s(f,p),u(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,y)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?c(f,p,S,x):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===qt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===qt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(f.envMap.value=S,f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,S,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*S,f.scale.value=x*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,S){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const S=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function jv(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,x){const y=x.program;n.uniformBlockBinding(S,y)}function l(S,x){let y=r[S.id];y===void 0&&(g(S),y=u(S),r[S.id]=y,S.addEventListener("dispose",f));const w=x.program;n.updateUBOMapping(S,w);const A=e.render.frame;s[S.id]!==A&&(d(S),s[S.id]=A)}function u(S){const x=h();S.__bindingPointIndex=x;const y=i.createBuffer(),w=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=r[S.id],y=S.uniforms,w=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,E=y.length;A<E;A++){const O=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,b=O.length;v<b;v++){const N=O[v];if(m(N,A,v,w)===!0){const k=N.__offset,Y=Array.isArray(N.value)?N.value:[N.value];let D=0;for(let F=0;F<Y.length;F++){const B=Y[F],$=_(B);typeof B=="number"||typeof B=="boolean"?(N.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,k+D,N.__data)):B.isMatrix3?(N.__data[0]=B.elements[0],N.__data[1]=B.elements[1],N.__data[2]=B.elements[2],N.__data[3]=0,N.__data[4]=B.elements[3],N.__data[5]=B.elements[4],N.__data[6]=B.elements[5],N.__data[7]=0,N.__data[8]=B.elements[6],N.__data[9]=B.elements[7],N.__data[10]=B.elements[8],N.__data[11]=0):(B.toArray(N.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,x,y,w){const A=S.value,E=x+"_"+y;if(w[E]===void 0)return typeof A=="number"||typeof A=="boolean"?w[E]=A:w[E]=A.clone(),!0;{const O=w[E];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return w[E]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function g(S){const x=S.uniforms;let y=0;const w=16;for(let E=0,O=x.length;E<O;E++){const v=Array.isArray(x[E])?x[E]:[x[E]];for(let b=0,N=v.length;b<N;b++){const k=v[b],Y=Array.isArray(k.value)?k.value:[k.value];for(let D=0,F=Y.length;D<F;D++){const B=Y[D],$=_(B),Z=y%w;Z!==0&&w-Z<$.boundary&&(y+=w-Z),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=$.storage}}}const A=y%w;return A>0&&(y+=w-A),S.__size=y,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function f(S){const x=S.target;x.removeEventListener("dispose",f);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class td{constructor(e={}){const{canvas:t=Xp(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=mi,this.toneMappingExposure=1;const x=this;let y=!1,w=0,A=0,E=null,O=-1,v=null;const b=new Dt,N=new Dt;let k=null;const Y=new qe(0);let D=0,F=t.width,B=t.height,$=1,Z=null,K=null;const J=new Dt(0,0,F,B),se=new Dt(0,0,F,B);let oe=!1;const X=new Mc;let Q=!1,ue=!1,Me=null;const Se=new st,Ue=new Fe,Ne=new I,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ze(){return E===null?$:1}let G=n;function Ut(T,U){for(let V=0;V<T.length;V++){const W=T[V],H=t.getContext(W,U);if(H!==null)return H}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vc}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ce,!1),G===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),G=Ut(U,T),G===null)throw Ut(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ae,De,ve,ot,ke,R,M,z,ie,te,re,xe,de,_e,Re,Be,ee,et,Ve,Ie,be,fe,C,ae;function ye(){Ae=new s0(G),De=new Qg(G,Ae,e),Ae.init(De),fe=new Wv(G,Ae,De),ve=new Hv(G,Ae,De),ot=new c0(G),ke=new Rv,R=new Vv(G,Ae,ve,ke,De,fe,ot),M=new t0(x),z=new r0(x),ie=new _m(G,De),C=new Kg(G,Ae,ie,De),te=new o0(G,ie,ot,C),re=new d0(G,te,ie,ot),Ve=new h0(G,De,R),Be=new e0(ke),xe=new wv(x,M,z,Ae,De,C,Be),de=new Yv(x,ke),_e=new Pv,Re=new Nv(Ae,De),et=new qg(x,M,z,ve,re,d,c),ee=new Gv(x,re,De),ae=new jv(G,ot,De,ve),Ie=new Jg(G,Ae,ot,De),be=new a0(G,Ae,ot,De),ot.programs=xe.programs,x.capabilities=De,x.extensions=Ae,x.properties=ke,x.renderLists=_e,x.shadowMap=ee,x.state=ve,x.info=ot}ye();const me=new Zv(x,G);this.xr=me,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Ae.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ae.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(F,B,!1))},this.getSize=function(T){return T.set(F,B)},this.setSize=function(T,U,V=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,B=U,t.width=Math.floor(T*$),t.height=Math.floor(U*$),V===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(F*$,B*$).floor()},this.setDrawingBufferSize=function(T,U,V){F=T,B=U,$=V,t.width=Math.floor(T*V),t.height=Math.floor(U*V),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,U,V,W){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,U,V,W),ve.viewport(b.copy(J).multiplyScalar($).floor())},this.getScissor=function(T){return T.copy(se)},this.setScissor=function(T,U,V,W){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,U,V,W),ve.scissor(N.copy(se).multiplyScalar($).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(T){ve.setScissorTest(oe=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(T=!0,U=!0,V=!0){let W=0;if(T){let H=!1;if(E!==null){const pe=E.texture.format;H=pe===Ih||pe===Dh||pe===Lh}if(H){const pe=E.texture.type,Ee=pe===_i||pe===li||pe===xc||pe===Bi||pe===Ch||pe===Ph,Le=et.getClearColor(),Oe=et.getClearAlpha(),We=Le.r,ze=Le.g,Ge=Le.b;Ee?(m[0]=We,m[1]=ze,m[2]=Ge,m[3]=Oe,G.clearBufferuiv(G.COLOR,0,m)):(g[0]=We,g[1]=ze,g[2]=Ge,g[3]=Oe,G.clearBufferiv(G.COLOR,0,g))}else W|=G.COLOR_BUFFER_BIT}U&&(W|=G.DEPTH_BUFFER_BIT),V&&(W|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),_e.dispose(),Re.dispose(),ke.dispose(),M.dispose(),z.dispose(),re.dispose(),C.dispose(),ae.dispose(),xe.dispose(),me.dispose(),me.removeEventListener("sessionstart",vt),me.removeEventListener("sessionend",Qe),Me&&(Me.dispose(),Me=null),Mt.stop()};function ne(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=ot.autoReset,U=ee.enabled,V=ee.autoUpdate,W=ee.needsUpdate,H=ee.type;ye(),ot.autoReset=T,ee.enabled=U,ee.autoUpdate=V,ee.needsUpdate=W,ee.type=H}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function he(T){const U=T.target;U.removeEventListener("dispose",he),Pe(U)}function Pe(T){we(T),ke.remove(T)}function we(T){const U=ke.get(T).programs;U!==void 0&&(U.forEach(function(V){xe.releaseProgram(V)}),T.isShaderMaterial&&xe.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,V,W,H,pe){U===null&&(U=Ce);const Ee=H.isMesh&&H.matrixWorld.determinant()<0,Le=Ff(T,U,V,W,H);ve.setMaterial(W,Ee);let Oe=V.index,We=1;if(W.wireframe===!0){if(Oe=te.getWireframeAttribute(V),Oe===void 0)return;We=2}const ze=V.drawRange,Ge=V.attributes.position;let xt=ze.start*We,sn=(ze.start+ze.count)*We;pe!==null&&(xt=Math.max(xt,pe.start*We),sn=Math.min(sn,(pe.start+pe.count)*We)),Oe!==null?(xt=Math.max(xt,0),sn=Math.min(sn,Oe.count)):Ge!=null&&(xt=Math.max(xt,0),sn=Math.min(sn,Ge.count));const Ct=sn-xt;if(Ct<0||Ct===1/0)return;C.setup(H,W,Le,V,Oe);let Wn,ut=Ie;if(Oe!==null&&(Wn=ie.get(Oe),ut=be,ut.setIndex(Wn)),H.isMesh)W.wireframe===!0?(ve.setLineWidth(W.wireframeLinewidth*Ze()),ut.setMode(G.LINES)):ut.setMode(G.TRIANGLES);else if(H.isLine){let Xe=W.linewidth;Xe===void 0&&(Xe=1),ve.setLineWidth(Xe*Ze()),H.isLineSegments?ut.setMode(G.LINES):H.isLineLoop?ut.setMode(G.LINE_LOOP):ut.setMode(G.LINE_STRIP)}else H.isPoints?ut.setMode(G.POINTS):H.isSprite&&ut.setMode(G.TRIANGLES);if(H.isBatchedMesh)ut.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ut.renderInstances(xt,Ct,H.count);else if(V.isInstancedBufferGeometry){const Xe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Xo=Math.min(V.instanceCount,Xe);ut.renderInstances(xt,Ct,Xo)}else ut.render(xt,Ct)};function Ye(T,U,V){T.transparent===!0&&T.side===Pn&&T.forceSinglePass===!1?(T.side=qt,T.needsUpdate=!0,Cs(T,U,V),T.side=xi,T.needsUpdate=!0,Cs(T,U,V),T.side=Pn):Cs(T,U,V)}this.compile=function(T,U,V=null){V===null&&(V=T),f=Re.get(V),f.init(),S.push(f),V.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),T!==V&&T.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights(x._useLegacyLights);const W=new Set;return T.traverse(function(H){const pe=H.material;if(pe)if(Array.isArray(pe))for(let Ee=0;Ee<pe.length;Ee++){const Le=pe[Ee];Ye(Le,V,H),W.add(Le)}else Ye(pe,V,H),W.add(pe)}),S.pop(),f=null,W},this.compileAsync=function(T,U,V=null){const W=this.compile(T,U,V);return new Promise(H=>{function pe(){if(W.forEach(function(Ee){ke.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){H(T);return}setTimeout(pe,10)}Ae.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let je=null;function mt(T){je&&je(T)}function vt(){Mt.stop()}function Qe(){Mt.start()}const Mt=new Yh;Mt.setAnimationLoop(mt),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(T){je=T,me.setAnimationLoop(T),T===null?Mt.stop():Mt.start()},me.addEventListener("sessionstart",vt),me.addEventListener("sessionend",Qe),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(U),U=me.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,U,E),f=Re.get(T,S.length),f.init(),S.push(f),Se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Se),ue=this.localClippingEnabled,Q=Be.init(this.clippingPlanes,ue),_=_e.get(T,p.length),_.init(),p.push(_),Nn(T,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Z,K),this.info.render.frame++,Q===!0&&Be.beginShadows();const V=f.state.shadowsArray;if(ee.render(V,T,U),Q===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(_,T),f.setupLights(x._useLegacyLights),U.isArrayCamera){const W=U.cameras;for(let H=0,pe=W.length;H<pe;H++){const Ee=W[H];Kc(_,T,Ee,Ee.viewport)}}else Kc(_,T,U);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(x,T,U),C.resetDefaultState(),O=-1,v=null,S.pop(),S.length>0?f=S[S.length-1]:f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Nn(T,U,V,W){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){W&&Ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Se);const Ee=re.update(T),Le=T.material;Le.visible&&_.push(T,Ee,Le,V,Ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){const Ee=re.update(T),Le=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ne.copy(T.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ne.copy(Ee.boundingSphere.center)),Ne.applyMatrix4(T.matrixWorld).applyMatrix4(Se)),Array.isArray(Le)){const Oe=Ee.groups;for(let We=0,ze=Oe.length;We<ze;We++){const Ge=Oe[We],xt=Le[Ge.materialIndex];xt&&xt.visible&&_.push(T,Ee,xt,V,Ne.z,Ge)}}else Le.visible&&_.push(T,Ee,Le,V,Ne.z,null)}}const pe=T.children;for(let Ee=0,Le=pe.length;Ee<Le;Ee++)Nn(pe[Ee],U,V,W)}function Kc(T,U,V,W){const H=T.opaque,pe=T.transmissive,Ee=T.transparent;f.setupLightsView(V),Q===!0&&Be.setGlobalState(x.clippingPlanes,V),pe.length>0&&Nf(H,pe,U,V),W&&ve.viewport(b.copy(W)),H.length>0&&Rs(H,U,V),pe.length>0&&Rs(pe,U,V),Ee.length>0&&Rs(Ee,U,V),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Nf(T,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const pe=De.isWebGL2;Me===null&&(Me=new Zi(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?ps:_i,minFilter:fs,samples:pe?4:0})),x.getDrawingBufferSize(Ue),pe?Me.setSize(Ue.x,Ue.y):Me.setSize(Ja(Ue.x),Ja(Ue.y));const Ee=x.getRenderTarget();x.setRenderTarget(Me),x.getClearColor(Y),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const Le=x.toneMapping;x.toneMapping=mi,Rs(T,V,W),R.updateMultisampleRenderTarget(Me),R.updateRenderTargetMipmap(Me);let Oe=!1;for(let We=0,ze=U.length;We<ze;We++){const Ge=U[We],xt=Ge.object,sn=Ge.geometry,Ct=Ge.material,Wn=Ge.group;if(Ct.side===Pn&&xt.layers.test(W.layers)){const ut=Ct.side;Ct.side=qt,Ct.needsUpdate=!0,Jc(xt,V,W,sn,Ct,Wn),Ct.side=ut,Ct.needsUpdate=!0,Oe=!0}}Oe===!0&&(R.updateMultisampleRenderTarget(Me),R.updateRenderTargetMipmap(Me)),x.setRenderTarget(Ee),x.setClearColor(Y,D),x.toneMapping=Le}function Rs(T,U,V){const W=U.isScene===!0?U.overrideMaterial:null;for(let H=0,pe=T.length;H<pe;H++){const Ee=T[H],Le=Ee.object,Oe=Ee.geometry,We=W===null?Ee.material:W,ze=Ee.group;Le.layers.test(V.layers)&&Jc(Le,U,V,Oe,We,ze)}}function Jc(T,U,V,W,H,pe){T.onBeforeRender(x,U,V,W,H,pe),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(x,U,V,W,T,pe),H.transparent===!0&&H.side===Pn&&H.forceSinglePass===!1?(H.side=qt,H.needsUpdate=!0,x.renderBufferDirect(V,U,W,H,T,pe),H.side=xi,H.needsUpdate=!0,x.renderBufferDirect(V,U,W,H,T,pe),H.side=Pn):x.renderBufferDirect(V,U,W,H,T,pe),T.onAfterRender(x,U,V,W,H,pe)}function Cs(T,U,V){U.isScene!==!0&&(U=Ce);const W=ke.get(T),H=f.state.lights,pe=f.state.shadowsArray,Ee=H.state.version,Le=xe.getParameters(T,H.state,pe,U,V),Oe=xe.getProgramCacheKey(Le);let We=W.programs;W.environment=T.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(T.isMeshStandardMaterial?z:M).get(T.envMap||W.environment),We===void 0&&(T.addEventListener("dispose",he),We=new Map,W.programs=We);let ze=We.get(Oe);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===Ee)return el(T,Le),ze}else Le.uniforms=xe.getUniforms(T),T.onBuild(V,Le,x),T.onBeforeCompile(Le,x),ze=xe.acquireProgram(Le,Oe),We.set(Oe,ze),W.uniforms=Le.uniforms;const Ge=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=Be.uniform),el(T,Le),W.needsLights=kf(T),W.lightsStateVersion=Ee,W.needsLights&&(Ge.ambientLightColor.value=H.state.ambient,Ge.lightProbe.value=H.state.probe,Ge.directionalLights.value=H.state.directional,Ge.directionalLightShadows.value=H.state.directionalShadow,Ge.spotLights.value=H.state.spot,Ge.spotLightShadows.value=H.state.spotShadow,Ge.rectAreaLights.value=H.state.rectArea,Ge.ltc_1.value=H.state.rectAreaLTC1,Ge.ltc_2.value=H.state.rectAreaLTC2,Ge.pointLights.value=H.state.point,Ge.pointLightShadows.value=H.state.pointShadow,Ge.hemisphereLights.value=H.state.hemi,Ge.directionalShadowMap.value=H.state.directionalShadowMap,Ge.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ge.spotShadowMap.value=H.state.spotShadowMap,Ge.spotLightMatrix.value=H.state.spotLightMatrix,Ge.spotLightMap.value=H.state.spotLightMap,Ge.pointShadowMap.value=H.state.pointShadowMap,Ge.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function Qc(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=lo.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function el(T,U){const V=ke.get(T);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Ff(T,U,V,W,H){U.isScene!==!0&&(U=Ce),R.resetTextureUnits();const pe=U.fog,Ee=W.isMeshStandardMaterial?U.environment:null,Le=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ei,Oe=(W.isMeshStandardMaterial?z:M).get(W.envMap||Ee),We=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ge=!!V.morphAttributes.position,xt=!!V.morphAttributes.normal,sn=!!V.morphAttributes.color;let Ct=mi;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ct=x.toneMapping);const Wn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ut=Wn!==void 0?Wn.length:0,Xe=ke.get(W),Xo=f.state.lights;if(Q===!0&&(ue===!0||T!==v)){const gn=T===v&&W.id===O;Be.setState(W,T,gn)}let _t=!1;W.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Xo.state.version||Xe.outputColorSpace!==Le||H.isBatchedMesh&&Xe.batching===!1||!H.isBatchedMesh&&Xe.batching===!0||H.isInstancedMesh&&Xe.instancing===!1||!H.isInstancedMesh&&Xe.instancing===!0||H.isSkinnedMesh&&Xe.skinning===!1||!H.isSkinnedMesh&&Xe.skinning===!0||H.isInstancedMesh&&Xe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Xe.instancingColor===!1&&H.instanceColor!==null||Xe.envMap!==Oe||W.fog===!0&&Xe.fog!==pe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Be.numPlanes||Xe.numIntersection!==Be.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==ze||Xe.morphTargets!==Ge||Xe.morphNormals!==xt||Xe.morphColors!==sn||Xe.toneMapping!==Ct||De.isWebGL2===!0&&Xe.morphTargetsCount!==ut)&&(_t=!0):(_t=!0,Xe.__version=W.version);let Ai=Xe.currentProgram;_t===!0&&(Ai=Cs(W,U,H));let tl=!1,jr=!1,$o=!1;const kt=Ai.getUniforms(),wi=Xe.uniforms;if(ve.useProgram(Ai.program)&&(tl=!0,jr=!0,$o=!0),W.id!==O&&(O=W.id,jr=!0),tl||v!==T){kt.setValue(G,"projectionMatrix",T.projectionMatrix),kt.setValue(G,"viewMatrix",T.matrixWorldInverse);const gn=kt.map.cameraPosition;gn!==void 0&&gn.setValue(G,Ne.setFromMatrixPosition(T.matrixWorld)),De.logarithmicDepthBuffer&&kt.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&kt.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,jr=!0,$o=!0)}if(H.isSkinnedMesh){kt.setOptional(G,H,"bindMatrix"),kt.setOptional(G,H,"bindMatrixInverse");const gn=H.skeleton;gn&&(De.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),kt.setValue(G,"boneTexture",gn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(kt.setOptional(G,H,"batchingTexture"),kt.setValue(G,"batchingTexture",H._matricesTexture,R));const Zo=V.morphAttributes;if((Zo.position!==void 0||Zo.normal!==void 0||Zo.color!==void 0&&De.isWebGL2===!0)&&Ve.update(H,V,Ai),(jr||Xe.receiveShadow!==H.receiveShadow)&&(Xe.receiveShadow=H.receiveShadow,kt.setValue(G,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(wi.envMap.value=Oe,wi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),jr&&(kt.setValue(G,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&zf(wi,$o),pe&&W.fog===!0&&de.refreshFogUniforms(wi,pe),de.refreshMaterialUniforms(wi,W,$,B,Me),lo.upload(G,Qc(Xe),wi,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(lo.upload(G,Qc(Xe),wi,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&kt.setValue(G,"center",H.center),kt.setValue(G,"modelViewMatrix",H.modelViewMatrix),kt.setValue(G,"normalMatrix",H.normalMatrix),kt.setValue(G,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const gn=W.uniformsGroups;for(let Yo=0,Bf=gn.length;Yo<Bf;Yo++)if(De.isWebGL2){const nl=gn[Yo];ae.update(nl,Ai),ae.bind(nl,Ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ai}function zf(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function kf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,U,V){ke.get(T.texture).__webglTexture=U,ke.get(T.depthTexture).__webglTexture=V;const W=ke.get(T);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const V=ke.get(T);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,V=0){E=T,w=U,A=V;let W=!0,H=null,pe=!1,Ee=!1;if(T){const Oe=ke.get(T);Oe.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(G.FRAMEBUFFER,null),W=!1):Oe.__webglFramebuffer===void 0?R.setupRenderTarget(T):Oe.__hasExternalTextures&&R.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ee=!0);const ze=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[U])?H=ze[U][V]:H=ze[U],pe=!0):De.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?H=ke.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?H=ze[V]:H=ze,b.copy(T.viewport),N.copy(T.scissor),k=T.scissorTest}else b.copy(J).multiplyScalar($).floor(),N.copy(se).multiplyScalar($).floor(),k=oe;if(ve.bindFramebuffer(G.FRAMEBUFFER,H)&&De.drawBuffers&&W&&ve.drawBuffers(T,H),ve.viewport(b),ve.scissor(N),ve.setScissorTest(k),pe){const Oe=ke.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+U,Oe.__webglTexture,V)}else if(Ee){const Oe=ke.get(T.texture),We=U||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Oe.__webglTexture,V||0,We)}O=-1},this.readRenderTargetPixels=function(T,U,V,W,H,pe,Ee){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le){ve.bindFramebuffer(G.FRAMEBUFFER,Le);try{const Oe=T.texture,We=Oe.format,ze=Oe.type;if(We!==Dn&&fe.convert(We)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=ze===ps&&(Ae.has("EXT_color_buffer_half_float")||De.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(ze!==_i&&fe.convert(ze)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===ui&&(De.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-W&&V>=0&&V<=T.height-H&&G.readPixels(U,V,W,H,fe.convert(We),fe.convert(ze),pe)}finally{const Oe=E!==null?ke.get(E).__webglFramebuffer:null;ve.bindFramebuffer(G.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(T,U,V=0){const W=Math.pow(2,-V),H=Math.floor(U.image.width*W),pe=Math.floor(U.image.height*W);R.setTexture2D(U,0),G.copyTexSubImage2D(G.TEXTURE_2D,V,0,0,T.x,T.y,H,pe),ve.unbindTexture()},this.copyTextureToTexture=function(T,U,V,W=0){const H=U.image.width,pe=U.image.height,Ee=fe.convert(V.format),Le=fe.convert(V.type);R.setTexture2D(V,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,V.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,V.unpackAlignment),U.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,W,T.x,T.y,H,pe,Ee,Le,U.image.data):U.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,W,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,Ee,U.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,W,T.x,T.y,Ee,Le,U.image),W===0&&V.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(T,U,V,W,H=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=T.max.x-T.min.x+1,Ee=T.max.y-T.min.y+1,Le=T.max.z-T.min.z+1,Oe=fe.convert(W.format),We=fe.convert(W.type);let ze;if(W.isData3DTexture)R.setTexture3D(W,0),ze=G.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)R.setTexture2DArray(W,0),ze=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const Ge=G.getParameter(G.UNPACK_ROW_LENGTH),xt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),sn=G.getParameter(G.UNPACK_SKIP_PIXELS),Ct=G.getParameter(G.UNPACK_SKIP_ROWS),Wn=G.getParameter(G.UNPACK_SKIP_IMAGES),ut=V.isCompressedTexture?V.mipmaps[H]:V.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,ut.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ut.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,T.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,T.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?G.texSubImage3D(ze,H,U.x,U.y,U.z,pe,Ee,Le,Oe,We,ut.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(ze,H,U.x,U.y,U.z,pe,Ee,Le,Oe,ut.data)):G.texSubImage3D(ze,H,U.x,U.y,U.z,pe,Ee,Le,Oe,We,ut),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ge),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,sn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ct),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Wn),H===0&&W.generateMipmaps&&G.generateMipmap(ze),ve.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){w=0,A=0,E=null,ve.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sc?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Do?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?Hi:Uh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hi?Nt:ei}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class qv extends td{}qv.prototype.isWebGL1Renderer=!0;class Kv extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Eu extends In{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Sr=new st,bu=new st,Qs=[],Tu=new ti,Jv=new st,ts=new Lt,ns=new Wr;class Qv extends Lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Eu(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Jv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),Tu.copy(e.boundingBox).applyMatrix4(Sr),this.boundingBox.union(Tu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),ns.copy(e.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(n),e.ray.intersectsSphere(ns)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Sr),bu.multiplyMatrices(n,Sr),ts.matrixWorld=bu,ts.raycast(e,Qs);for(let o=0,a=Qs.length;o<a;o++){const c=Qs[o];c.instanceId=s,c.object=this,t.push(c)}Qs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Eu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends Xr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Au=new I,wu=new I,Ru=new st,Ta=new Io,eo=new Wr;class ex extends It{constructor(e=new Un,t=new As){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Au.fromBufferAttribute(t,r-1),wu.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Au.distanceTo(wu);e.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(r),eo.radius+=s,e.ray.intersectsSphere(eo)===!1)return;Ru.copy(r).invert(),Ta.copy(e.ray).applyMatrix4(Ru);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new I,u=new I,h=new I,d=new I,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let x=p,y=S-1;x<y;x+=m){const w=g.getX(x),A=g.getX(x+1);if(l.fromBufferAttribute(f,w),u.fromBufferAttribute(f,A),Ta.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(d);O<e.near||O>e.far||t.push({distance:O,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),S=Math.min(f.count,o.start+o.count);for(let x=p,y=S-1;x<y;x+=m){if(l.fromBufferAttribute(f,x),u.fromBufferAttribute(f,x+1),Ta.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Cu=new I,Pu=new I;class No extends ex{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Cu.fromBufferAttribute(t,r),Pu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Cu.distanceTo(Pu);e.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const to=new I,no=new I,Aa=new I,io=new yn;class nd extends Un{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(cs*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},m=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:f,c:p}=io;if(_.fromBufferAttribute(a,l[0]),f.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),io.getNormal(Aa),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let S=0;S<3;S++){const x=(S+1)%3,y=h[S],w=h[x],A=io[u[S]],E=io[u[x]],O=`${y}_${w}`,v=`${w}_${y}`;v in d&&d[v]?(Aa.dot(d[v].normal)<=s&&(m.push(A.x,A.y,A.z),m.push(E.x,E.y,E.z)),d[v]=null):O in d||(d[O]={index0:l[S],index1:l[x],normal:Aa.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:f}=d[g];to.fromBufferAttribute(a,_),no.fromBufferAttribute(a,f),m.push(to.x,to.y,to.z),m.push(no.x,no.y,no.z)}this.setAttribute("position",new Kt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Tc extends Xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class id extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const wa=new st,Lu=new I,Du=new I;class tx{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mc,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lu),Du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Du),t.updateMatrixWorld(),wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class nx extends tx{constructor(){super(new Ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ix extends id{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new nx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rx extends id{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Iu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Iu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Iu(){return(typeof performance>"u"?Date:performance).now()}class rd{constructor(e,t,n=0,r=1/0){this.ray=new Io(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new yc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ec(e,this,n,t),n.sort(Ou),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)ec(e[r],this,n,t);return n.sort(Ou),n}}function Ou(i,e){return i.distance-e.distance}function ec(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)ec(r[s],e,t,!0)}}class Uu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sd extends No{constructor(e=10,t=10,n=4473924,r=8947848){n=new qe(n),r=new qe(r);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,m=0,g=-a;d<=t;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=d===s?n:r;_.toArray(l,m),m+=3,_.toArray(l,m),m+=3,_.toArray(l,m),m+=3,_.toArray(l,m),m+=3}const u=new Un;u.setAttribute("position",new Kt(c,3)),u.setAttribute("color",new Kt(l,3));const h=new As({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ox extends No{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Un;r.setAttribute("position",new Kt(t,3)),r.setAttribute("color",new Kt(n,3));const s=new As({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new qe,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);const Nu={type:"change"},Ra={type:"start"},Fu={type:"end"},ro=new Io,zu=new kn,ax=Math.cos(70*Wp.DEG2RAD);class cx extends Qi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:nr.ROTATE,MIDDLE:nr.DOLLY,RIGHT:nr.PAN},this.touches={ONE:ir.ROTATE,TWO:ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Re),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Re),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Nu),n.update(),s=r.NONE},this.update=function(){const C=new I,ae=new Yi().setFromUnitVectors(e.up,new I(0,1,0)),ye=ae.clone().invert(),me=new I,ne=new Yi,L=new I,ce=2*Math.PI;return function(Pe=null){const we=n.object.position;C.copy(we).sub(n.target),C.applyQuaternion(ae),a.setFromVector3(C),n.autoRotate&&s===r.NONE&&k(b(Pe)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Ye=n.minAzimuthAngle,je=n.maxAzimuthAngle;isFinite(Ye)&&isFinite(je)&&(Ye<-Math.PI?Ye+=ce:Ye>Math.PI&&(Ye-=ce),je<-Math.PI?je+=ce:je>Math.PI&&(je-=ce),Ye<=je?a.theta=Math.max(Ye,Math.min(je,a.theta)):a.theta=a.theta>(Ye+je)/2?Math.max(Ye,a.theta):Math.min(je,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&A||n.object.isOrthographicCamera?a.radius=J(a.radius):a.radius=J(a.radius*l),C.setFromSpherical(a),C.applyQuaternion(ye),we.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let mt=!1;if(n.zoomToCursor&&A){let vt=null;if(n.object.isPerspectiveCamera){const Qe=C.length();vt=J(Qe*l);const Mt=Qe-vt;n.object.position.addScaledVector(y,Mt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Qe=new I(w.x,w.y,0);Qe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),mt=!0;const Mt=new I(w.x,w.y,0);Mt.unproject(n.object),n.object.position.sub(Mt).add(Qe),n.object.updateMatrixWorld(),vt=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;vt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(vt).add(n.object.position):(ro.origin.copy(n.object.position),ro.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ro.direction))<ax?e.lookAt(n.target):(zu.setFromNormalAndCoplanarPoint(n.object.up,n.target),ro.intersectPlane(zu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),mt=!0);return l=1,A=!1,mt||me.distanceToSquared(n.object.position)>o||8*(1-ne.dot(n.object.quaternion))>o||L.distanceToSquared(n.target)>0?(n.dispatchEvent(Nu),me.copy(n.object.position),ne.copy(n.object.quaternion),L.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",et),n.domElement.removeEventListener("pointerdown",R),n.domElement.removeEventListener("pointercancel",z),n.domElement.removeEventListener("wheel",re),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",z),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Re),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Uu,c=new Uu;let l=1;const u=new I,h=new Fe,d=new Fe,m=new Fe,g=new Fe,_=new Fe,f=new Fe,p=new Fe,S=new Fe,x=new Fe,y=new I,w=new Fe;let A=!1;const E=[],O={};let v=!1;function b(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function N(C){const ae=Math.abs(C*.01);return Math.pow(.95,n.zoomSpeed*ae)}function k(C){c.theta-=C}function Y(C){c.phi-=C}const D=function(){const C=new I;return function(ye,me){C.setFromMatrixColumn(me,0),C.multiplyScalar(-ye),u.add(C)}}(),F=function(){const C=new I;return function(ye,me){n.screenSpacePanning===!0?C.setFromMatrixColumn(me,1):(C.setFromMatrixColumn(me,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(ye),u.add(C)}}(),B=function(){const C=new I;return function(ye,me){const ne=n.domElement;if(n.object.isPerspectiveCamera){const L=n.object.position;C.copy(L).sub(n.target);let ce=C.length();ce*=Math.tan(n.object.fov/2*Math.PI/180),D(2*ye*ce/ne.clientHeight,n.object.matrix),F(2*me*ce/ne.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(ye*(n.object.right-n.object.left)/n.object.zoom/ne.clientWidth,n.object.matrix),F(me*(n.object.top-n.object.bottom)/n.object.zoom/ne.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(C,ae){if(!n.zoomToCursor)return;A=!0;const ye=n.domElement.getBoundingClientRect(),me=C-ye.left,ne=ae-ye.top,L=ye.width,ce=ye.height;w.x=me/L*2-1,w.y=-(ne/ce)*2+1,y.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function J(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function se(C){h.set(C.clientX,C.clientY)}function oe(C){K(C.clientX,C.clientX),p.set(C.clientX,C.clientY)}function X(C){g.set(C.clientX,C.clientY)}function Q(C){d.set(C.clientX,C.clientY),m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ae=n.domElement;k(2*Math.PI*m.x/ae.clientHeight),Y(2*Math.PI*m.y/ae.clientHeight),h.copy(d),n.update()}function ue(C){S.set(C.clientX,C.clientY),x.subVectors(S,p),x.y>0?$(N(x.y)):x.y<0&&Z(N(x.y)),p.copy(S),n.update()}function Me(C){_.set(C.clientX,C.clientY),f.subVectors(_,g).multiplyScalar(n.panSpeed),B(f.x,f.y),g.copy(_),n.update()}function Se(C){K(C.clientX,C.clientY),C.deltaY<0?Z(N(C.deltaY)):C.deltaY>0&&$(N(C.deltaY)),n.update()}function Ue(C){let ae=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),ae=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),ae=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),ae=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),ae=!0;break}ae&&(C.preventDefault(),n.update())}function Ne(C){if(E.length===1)h.set(C.pageX,C.pageY);else{const ae=fe(C),ye=.5*(C.pageX+ae.x),me=.5*(C.pageY+ae.y);h.set(ye,me)}}function Ce(C){if(E.length===1)g.set(C.pageX,C.pageY);else{const ae=fe(C),ye=.5*(C.pageX+ae.x),me=.5*(C.pageY+ae.y);g.set(ye,me)}}function Ze(C){const ae=fe(C),ye=C.pageX-ae.x,me=C.pageY-ae.y,ne=Math.sqrt(ye*ye+me*me);p.set(0,ne)}function G(C){n.enableZoom&&Ze(C),n.enablePan&&Ce(C)}function Ut(C){n.enableZoom&&Ze(C),n.enableRotate&&Ne(C)}function Ae(C){if(E.length==1)d.set(C.pageX,C.pageY);else{const ye=fe(C),me=.5*(C.pageX+ye.x),ne=.5*(C.pageY+ye.y);d.set(me,ne)}m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ae=n.domElement;k(2*Math.PI*m.x/ae.clientHeight),Y(2*Math.PI*m.y/ae.clientHeight),h.copy(d)}function De(C){if(E.length===1)_.set(C.pageX,C.pageY);else{const ae=fe(C),ye=.5*(C.pageX+ae.x),me=.5*(C.pageY+ae.y);_.set(ye,me)}f.subVectors(_,g).multiplyScalar(n.panSpeed),B(f.x,f.y),g.copy(_)}function ve(C){const ae=fe(C),ye=C.pageX-ae.x,me=C.pageY-ae.y,ne=Math.sqrt(ye*ye+me*me);S.set(0,ne),x.set(0,Math.pow(S.y/p.y,n.zoomSpeed)),$(x.y),p.copy(S);const L=(C.pageX+ae.x)*.5,ce=(C.pageY+ae.y)*.5;K(L,ce)}function ot(C){n.enableZoom&&ve(C),n.enablePan&&De(C)}function ke(C){n.enableZoom&&ve(C),n.enableRotate&&Ae(C)}function R(C){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",z)),Ve(C),C.pointerType==="touch"?Be(C):ie(C))}function M(C){n.enabled!==!1&&(C.pointerType==="touch"?ee(C):te(C))}function z(C){Ie(C),E.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",z)),n.dispatchEvent(Fu),s=r.NONE}function ie(C){let ae;switch(C.button){case 0:ae=n.mouseButtons.LEFT;break;case 1:ae=n.mouseButtons.MIDDLE;break;case 2:ae=n.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case nr.DOLLY:if(n.enableZoom===!1)return;oe(C),s=r.DOLLY;break;case nr.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;X(C),s=r.PAN}else{if(n.enableRotate===!1)return;se(C),s=r.ROTATE}break;case nr.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;se(C),s=r.ROTATE}else{if(n.enablePan===!1)return;X(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ra)}function te(C){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;Q(C);break;case r.DOLLY:if(n.enableZoom===!1)return;ue(C);break;case r.PAN:if(n.enablePan===!1)return;Me(C);break}}function re(C){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(C.preventDefault(),n.dispatchEvent(Ra),Se(xe(C)),n.dispatchEvent(Fu))}function xe(C){const ae=C.deltaMode,ye={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(ae){case 1:ye.deltaY*=16;break;case 2:ye.deltaY*=100;break}return C.ctrlKey&&!v&&(ye.deltaY*=10),ye}function de(C){C.key==="Control"&&(v=!0,document.addEventListener("keyup",_e,{passive:!0,capture:!0}))}function _e(C){C.key==="Control"&&(v=!1,document.removeEventListener("keyup",_e,{passive:!0,capture:!0}))}function Re(C){n.enabled===!1||n.enablePan===!1||Ue(C)}function Be(C){switch(be(C),E.length){case 1:switch(n.touches.ONE){case ir.ROTATE:if(n.enableRotate===!1)return;Ne(C),s=r.TOUCH_ROTATE;break;case ir.PAN:if(n.enablePan===!1)return;Ce(C),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case ir.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(C),s=r.TOUCH_DOLLY_PAN;break;case ir.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ut(C),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ra)}function ee(C){switch(be(C),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ae(C),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;De(C),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ot(C),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ke(C),n.update();break;default:s=r.NONE}}function et(C){n.enabled!==!1&&C.preventDefault()}function Ve(C){E.push(C.pointerId)}function Ie(C){delete O[C.pointerId];for(let ae=0;ae<E.length;ae++)if(E[ae]==C.pointerId){E.splice(ae,1);return}}function be(C){let ae=O[C.pointerId];ae===void 0&&(ae=new Fe,O[C.pointerId]=ae),ae.set(C.pageX,C.pageY)}function fe(C){const ae=C.pointerId===E[0]?E[1]:E[0];return O[ae]}n.domElement.addEventListener("contextmenu",et),n.domElement.addEventListener("pointerdown",R),n.domElement.addEventListener("pointercancel",z),n.domElement.addEventListener("wheel",re,{passive:!1}),document.addEventListener("keydown",de,{passive:!0,capture:!0}),this.update()}}const ge={GRID_SIZE:20,VOXEL_SIZE:1,WORLD:{WIDTH:20,DEPTH:20,HEIGHT:40,SEA_LEVEL:0,MIN_X:-10,MAX_X:10,MIN_Z:-10,MAX_Z:10,MIN_Y:0,MAX_Y:40},CAMERA:{FRUSTUM_SIZE:20,NEAR:.1,FAR:1e3,INITIAL_POSITION:{x:20,y:20,z:20},VIEW_PRESETS:{ISOMETRIC:{x:20,y:20,z:20},TOP:{x:0,y:40,z:0},FRONT:{x:0,y:10,z:30},SIDE:{x:30,y:10,z:0},CLOSE:{x:10,y:10,z:10}}},ANIMATION:{ROTATION_DURATION:.5},PHYSICS:{GRAVITY:30,JUMP_FORCE:12,MOVE_SPEED:10,TERMINAL_VELOCITY:20,JUMP_BUFFER_TIME:.1,COYOTE_TIME:.15},OCCLUSION:{RAY_TOLERANCE:.2,FADE_OPACITY:.2},COLORS:{OCCLUSION_HIGHLIGHT:5592405,DEFAULT_EMISSIVE:0},EDITOR:{MAX_BUILD_HEIGHT:39,MIN_BUILD_HEIGHT:0,DEFAULT_BUILD_HEIGHT:0,GRID_PLANE_SIZE:40,GRID_PLANE_OPACITY:.15,GHOST_VALID_COLOR:5025616,GHOST_INVALID_COLOR:16732754,AUTO_SAVE_KEY:"__autosave__",AUTO_SAVE_ENABLED:!0,SHOW_WATER_PLANE:!0,WATER_COLOR:2003199}};class lx{constructor(){j(this,"keys",new Map);j(this,"mouse",{x:0,y:0});j(this,"mouseButtons",new Map);window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this)),window.addEventListener("mousemove",this.onMouseMove.bind(this)),window.addEventListener("mousedown",this.onMouseDown.bind(this)),window.addEventListener("mouseup",this.onMouseUp.bind(this))}onKeyDown(e){this.keys.set(e.code,!0),this.keys.set(e.key,!0)}onKeyUp(e){this.keys.set(e.code,!1),this.keys.set(e.key,!1)}onMouseMove(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1}onMouseDown(e){this.mouseButtons.set(e.button,!0)}onMouseUp(e){this.mouseButtons.set(e.button,!1)}isKeyPressed(e){return this.keys.get(e)||!1}setVirtualKey(e,t){this.keys.set(e,t)}isMouseButtonPressed(e){return this.mouseButtons.get(e)||!1}getMousePosition(){return this.mouse}}class ux{constructor(e){j(this,"scene");j(this,"camera");j(this,"renderer");j(this,"controls");j(this,"animationId",null);j(this,"updateCallbacks",[]);j(this,"clock");j(this,"inputManager");j(this,"gridHelper");j(this,"axesHelper");j(this,"waterPlane",null);j(this,"boundaryBox",null);this.inputManager=new lx,this.clock=new sx,this.scene=new Kv,this.scene.background=new qe(2236962),this.renderer=new td({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0;const t=document.getElementById(e);t?t.appendChild(this.renderer.domElement):console.error(`Container with id ${e} not found`);const n=window.innerWidth/window.innerHeight,r=ge.CAMERA.FRUSTUM_SIZE;this.camera=new Ec(r*n/-2,r*n/2,r/2,r/-2,ge.CAMERA.NEAR,ge.CAMERA.FAR),this.camera.position.set(ge.CAMERA.INITIAL_POSITION.x,ge.CAMERA.INITIAL_POSITION.y,ge.CAMERA.INITIAL_POSITION.z),this.camera.lookAt(0,0,0),this.controls=new cx(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.screenSpacePanning=!1,this.controls.minZoom=.5,this.controls.maxZoom=3,this.controls.enabled=!0,this.setupLights(),this.gridHelper=new sd(ge.GRID_SIZE,ge.GRID_SIZE),this.scene.add(this.gridHelper),this.axesHelper=new ox(5),this.scene.add(this.axesHelper),this.createWaterPlane(),this.createBoundaryBox(),window.addEventListener("resize",this.onWindowResize.bind(this))}setHelpersVisibility(e){this.gridHelper.visible=e,this.axesHelper.visible=e,this.waterPlane&&(this.waterPlane.visible=e),this.boundaryBox&&(this.boundaryBox.visible=e)}createWaterPlane(){const e=new Ts(ge.WORLD.WIDTH,ge.WORLD.DEPTH),t=new Tc({color:ge.EDITOR.WATER_COLOR,transparent:!0,opacity:.6,side:Pn});this.waterPlane=new Lt(e,t),this.waterPlane.rotation.x=-Math.PI/2,this.waterPlane.position.y=-.5,this.waterPlane.receiveShadow=!0,this.scene.add(this.waterPlane)}createBoundaryBox(){const e=new On(ge.WORLD.WIDTH,ge.WORLD.HEIGHT,ge.WORLD.DEPTH),t=new nd(e),n=new As({color:8947848,transparent:!0,opacity:.3});this.boundaryBox=new No(t,n),this.boundaryBox.position.y=ge.WORLD.HEIGHT/2,this.scene.add(this.boundaryBox)}setupLights(){const e=new rx(16777215,.6);this.scene.add(e);const t=new ix(16777215,.8);t.position.set(10,20,10),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,this.scene.add(t)}onWindowResize(){const e=window.innerWidth/window.innerHeight,t=ge.CAMERA.FRUSTUM_SIZE;this.camera.left=-t*e/2,this.camera.right=t*e/2,this.camera.top=t/2,this.camera.bottom=-t/2,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}start(){this.animationId||this.loop()}onUpdate(e){this.updateCallbacks.push(e)}loop(){this.animationId=requestAnimationFrame(this.loop.bind(this));const e=this.clock.getDelta();this.updateCallbacks.forEach(t=>t(e)),this.controls.update(),this.renderer.render(this.scene,this.camera)}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}getControls(){return this.controls}getInputManager(){return this.inputManager}setCameraView(e){let t;switch(e){case"isometric":t=ge.CAMERA.VIEW_PRESETS.ISOMETRIC;break;case"top":t=ge.CAMERA.VIEW_PRESETS.TOP;break;case"front":t=ge.CAMERA.VIEW_PRESETS.FRONT;break;case"side":t=ge.CAMERA.VIEW_PRESETS.SIDE;break;case"close":t=ge.CAMERA.VIEW_PRESETS.CLOSE;break;default:t=ge.CAMERA.INITIAL_POSITION}this.camera.position.set(t.x,t.y,t.z),this.camera.lookAt(0,0,0),this.controls.target.set(0,0,0),this.controls.update()}resetCamera(){this.setCameraView("isometric"),this.camera.zoom=1,this.camera.updateProjectionMatrix()}}var P=(i=>(i[i.SOLID=2]="SOLID",i[i.PLATFORM=3]="PLATFORM",i[i.LADDER=4]="LADDER",i[i.TRAP=5]="TRAP",i[i.KEY=6]="KEY",i[i.DOOR=7]="DOOR",i[i.SPAWN=8]="SPAWN",i[i.GOAL=9]="GOAL",i))(P||{});class hx{constructor(e,t){j(this,"position");j(this,"type");j(this,"userData",{});this.position=e.clone(),this.type=t,this.userData.type=t}}const Ca={crossroads:{name:"The Crossroads",description:"A balanced symmetrical arena with a central high ground.",blocks:[[-2,0,-2,P.SOLID],[-1,0,-2,P.SOLID],[0,0,-2,P.SOLID],[1,0,-2,P.SOLID],[2,0,-2,P.SOLID],[-2,0,-1,P.SOLID],[-1,0,-1,P.SOLID],[0,0,-1,P.SOLID],[1,0,-1,P.SOLID],[2,0,-1,P.SOLID],[-2,0,0,P.SOLID],[-1,0,0,P.SOLID],[0,0,0,P.SOLID],[1,0,0,P.SOLID],[2,0,0,P.SOLID],[-2,0,1,P.SOLID],[-1,0,1,P.SOLID],[0,0,1,P.SOLID],[1,0,1,P.SOLID],[2,0,1,P.SOLID],[-2,0,2,P.SOLID],[-1,0,2,P.SOLID],[0,0,2,P.SOLID],[1,0,2,P.SOLID],[2,0,2,P.SOLID],[0,1,0,P.SOLID],[0,2,0,P.SOLID],[0,3,0,P.GOAL],[-2,1,-2,P.SPAWN],[2,1,-2,P.SPAWN],[-2,1,2,P.SPAWN],[2,1,2,P.SPAWN],[-1,1,0,P.PLATFORM],[1,1,0,P.PLATFORM],[0,1,-1,P.PLATFORM],[0,1,1,P.PLATFORM]]},tower:{name:"Tower Ascent",description:"A vertical platforming challenge focusing on precise jumps.",blocks:[[0,0,0,P.SOLID],[1,0,0,P.SOLID],[0,0,1,P.SOLID],[1,0,1,P.SOLID],[0,1,0,P.SPAWN],[2,1,0,P.PLATFORM],[2,2,2,P.PLATFORM],[0,3,2,P.PLATFORM],[-2,4,2,P.PLATFORM],[-2,5,0,P.PLATFORM],[-2,6,-2,P.PLATFORM],[0,7,-2,P.PLATFORM],[0,8,0,P.SOLID],[0,9,0,P.GOAL]]},forts:{name:"Dual Forts",description:"Two islands connected by a narrow bridge. Tactical positioning is key.",blocks:[[-4,0,-1,P.SOLID],[-3,0,-1,P.SOLID],[-2,0,-1,P.SOLID],[-4,0,0,P.SOLID],[-3,0,0,P.SOLID],[-2,0,0,P.SOLID],[-4,0,1,P.SOLID],[-3,0,1,P.SOLID],[-2,0,1,P.SOLID],[-3,1,0,P.SPAWN],[4,0,-1,P.SOLID],[3,0,-1,P.SOLID],[2,0,-1,P.SOLID],[4,0,0,P.SOLID],[3,0,0,P.SOLID],[2,0,0,P.SOLID],[4,0,1,P.SOLID],[3,0,1,P.SOLID],[2,0,1,P.SOLID],[3,1,0,P.SPAWN],[-1,0,0,P.PLATFORM],[0,0,0,P.PLATFORM],[1,0,0,P.PLATFORM],[0,1,0,P.GOAL]]},infiniteLoop:{name:"MVP Test: Infinite Loop",description:"Test endless circular movement via rotation without falling.",blocks:[[-1,0,-3,P.SOLID],[0,0,-3,P.SOLID],[1,0,-3,P.SOLID],[3,0,-1,P.SOLID],[3,0,0,P.SOLID],[3,0,1,P.SOLID],[1,0,3,P.SOLID],[0,0,3,P.SOLID],[-1,0,3,P.SOLID],[-3,0,1,P.SOLID],[-3,0,0,P.SOLID],[-3,0,-1,P.SOLID],[0,1,-3,P.SPAWN],[0,1,0,P.GOAL]]},brokenBridge:{name:"MVP Test: Broken Bridge",description:"Platforms separated in depth that connect when rotated.",blocks:[[-1,0,-5,P.SOLID],[0,0,-5,P.SOLID],[1,0,-5,P.SOLID],[0,1,-5,P.SPAWN],[-1,0,5,P.SOLID],[0,0,5,P.SOLID],[1,0,5,P.SOLID],[0,1,5,P.GOAL],[0,0,-2,P.PLATFORM],[0,0,2,P.PLATFORM]]},noClipping:{name:"MVP Test: No Clipping",description:"Enclosed space to verify wall collision works from all angles.",blocks:[[-2,0,-2,P.SOLID],[-1,0,-2,P.SOLID],[0,0,-2,P.SOLID],[1,0,-2,P.SOLID],[2,0,-2,P.SOLID],[-2,0,-1,P.SOLID],[-1,0,-1,P.SOLID],[0,0,-1,P.SOLID],[1,0,-1,P.SOLID],[2,0,-1,P.SOLID],[-2,0,0,P.SOLID],[-1,0,0,P.SOLID],[0,0,0,P.SOLID],[1,0,0,P.SOLID],[2,0,0,P.SOLID],[-2,0,1,P.SOLID],[-1,0,1,P.SOLID],[0,0,1,P.SOLID],[1,0,1,P.SOLID],[2,0,1,P.SOLID],[-2,0,2,P.SOLID],[-1,0,2,P.SOLID],[0,0,2,P.SOLID],[1,0,2,P.SOLID],[2,0,2,P.SOLID],[-2,1,-2,P.SOLID],[-1,1,-2,P.SOLID],[0,1,-2,P.SOLID],[1,1,-2,P.SOLID],[2,1,-2,P.SOLID],[-2,2,-2,P.SOLID],[-1,2,-2,P.SOLID],[0,2,-2,P.SOLID],[1,2,-2,P.SOLID],[2,2,-2,P.SOLID],[-2,1,2,P.SOLID],[-1,1,2,P.SOLID],[0,1,2,P.SOLID],[1,1,2,P.SOLID],[2,1,2,P.SOLID],[-2,2,2,P.SOLID],[-1,2,2,P.SOLID],[0,2,2,P.SOLID],[1,2,2,P.SOLID],[2,2,2,P.SOLID],[-2,1,-1,P.SOLID],[-2,1,0,P.SOLID],[-2,1,1,P.SOLID],[-2,2,-1,P.SOLID],[-2,2,0,P.SOLID],[-2,2,1,P.SOLID],[2,1,-1,P.SOLID],[2,1,0,P.SOLID],[2,1,1,P.SOLID],[2,2,-1,P.SOLID],[2,2,0,P.SOLID],[2,2,1,P.SOLID],[0,1,0,P.SPAWN],[1,1,1,P.GOAL]]},keyHunt:{name:"Key Hunt",description:"Collect the key to unlock the door.",blocks:[[-2,0,0,P.SOLID],[-1,0,0,P.SOLID],[0,0,0,P.SOLID],[0,1,0,P.SPAWN],[4,2,0,P.SOLID],[4,3,0,P.KEY],[1,1,0,P.SOLID],[2,1,0,P.SOLID],[3,2,0,P.SOLID],[7,0,0,P.SOLID],[8,0,0,P.SOLID],[7,1,0,P.DOOR],[8,1,0,P.GOAL]]},ladderClimb:{name:"Ladder Climb",description:"Use W/S to climb the ladder.",blocks:[[0,0,0,P.SOLID],[1,0,0,P.SOLID],[0,1,0,P.SPAWN],[3,0,0,P.SOLID],[3,1,0,P.LADDER],[3,2,0,P.LADDER],[3,3,0,P.LADDER],[3,4,0,P.LADDER],[3,5,0,P.SOLID],[4,5,0,P.SOLID],[5,5,0,P.SOLID],[4,6,0,P.GOAL]]},trapRun:{name:"Trap Run",description:"Avoid the traps or respawn from last safe position!",blocks:[[0,0,0,P.SOLID],[1,0,0,P.SOLID],[0,1,0,P.SPAWN],[2,0,0,P.TRAP],[3,0,0,P.SOLID],[4,0,0,P.TRAP],[5,0,0,P.SOLID],[6,0,0,P.TRAP],[7,0,2,P.SOLID],[8,0,2,P.SOLID],[8,1,2,P.GOAL]]}};function q(i,e,t){function n(a,c){if(a._zod||Object.defineProperty(a,"_zod",{value:{def:c,constr:o,traits:new Set},enumerable:!1}),a._zod.traits.has(i))return;a._zod.traits.add(i),e(a,c);const l=o.prototype,u=Object.keys(l);for(let h=0;h<u.length;h++){const d=u[h];d in a||(a[d]=l[d].bind(a))}}const r=(t==null?void 0:t.Parent)??Object;class s extends r{}Object.defineProperty(s,"name",{value:i});function o(a){var c;const l=t!=null&&t.Parent?new s:this;n(l,a),(c=l._zod).deferred??(c.deferred=[]);for(const u of l._zod.deferred)u();return l}return Object.defineProperty(o,"init",{value:n}),Object.defineProperty(o,Symbol.hasInstance,{value:a=>{var c,l;return t!=null&&t.Parent&&a instanceof t.Parent?!0:(l=(c=a==null?void 0:a._zod)==null?void 0:c.traits)==null?void 0:l.has(i)}}),Object.defineProperty(o,"name",{value:i}),o}class Cr extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class od extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}const ad={};function qi(i){return ad}function cd(i){const e=Object.values(i).filter(n=>typeof n=="number");return Object.entries(i).filter(([n,r])=>e.indexOf(+n)===-1).map(([n,r])=>r)}function tc(i,e){return typeof e=="bigint"?e.toString():e}function Ac(i){return{get value(){{const e=i();return Object.defineProperty(this,"value",{value:e}),e}}}}function wc(i){return i==null}function Rc(i){const e=i.startsWith("^")?1:0,t=i.endsWith("$")?i.length-1:i.length;return i.slice(e,t)}function dx(i,e){const t=(i.toString().split(".")[1]||"").length,n=e.toString();let r=(n.split(".")[1]||"").length;if(r===0&&/\d?e-\d?/.test(n)){const c=n.match(/\d?e-(\d?)/);c!=null&&c[1]&&(r=Number.parseInt(c[1]))}const s=t>r?t:r,o=Number.parseInt(i.toFixed(s).replace(".","")),a=Number.parseInt(e.toFixed(s).replace(".",""));return o%a/10**s}const ku=Symbol("evaluating");function tt(i,e,t){let n;Object.defineProperty(i,e,{get(){if(n!==ku)return n===void 0&&(n=ku,n=t()),n},set(r){Object.defineProperty(i,e,{value:r})},configurable:!0})}function er(i,e,t){Object.defineProperty(i,e,{value:t,writable:!0,enumerable:!0,configurable:!0})}function Ei(...i){const e={};for(const t of i){const n=Object.getOwnPropertyDescriptors(t);Object.assign(e,n)}return Object.defineProperties({},e)}function Bu(i){return JSON.stringify(i)}function fx(i){return i.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const ld="captureStackTrace"in Error?Error.captureStackTrace:(...i)=>{};function So(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}const px=Ac(()=>{var i;if(typeof navigator<"u"&&((i=navigator==null?void 0:navigator.userAgent)!=null&&i.includes("Cloudflare")))return!1;try{const e=Function;return new e(""),!0}catch{return!1}});function ms(i){if(So(i)===!1)return!1;const e=i.constructor;if(e===void 0||typeof e!="function")return!0;const t=e.prototype;return!(So(t)===!1||Object.prototype.hasOwnProperty.call(t,"isPrototypeOf")===!1)}function ud(i){return ms(i)?{...i}:Array.isArray(i)?[...i]:i}const mx=new Set(["string","number","symbol"]);function Fo(i){return i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function bi(i,e,t){const n=new i._zod.constr(e??i._zod.def);return(!e||t!=null&&t.parent)&&(n._zod.parent=i),n}function Te(i){const e=i;if(!e)return{};if(typeof e=="string")return{error:()=>e};if((e==null?void 0:e.message)!==void 0){if((e==null?void 0:e.error)!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function _x(i){return Object.keys(i).filter(e=>i[e]._zod.optin==="optional"&&i[e]._zod.optout==="optional")}const gx={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]};function vx(i,e){const t=i._zod.def,n=t.checks;if(n&&n.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const s=Ei(i._zod.def,{get shape(){const o={};for(const a in e){if(!(a in t.shape))throw new Error(`Unrecognized key: "${a}"`);e[a]&&(o[a]=t.shape[a])}return er(this,"shape",o),o},checks:[]});return bi(i,s)}function xx(i,e){const t=i._zod.def,n=t.checks;if(n&&n.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const s=Ei(i._zod.def,{get shape(){const o={...i._zod.def.shape};for(const a in e){if(!(a in t.shape))throw new Error(`Unrecognized key: "${a}"`);e[a]&&delete o[a]}return er(this,"shape",o),o},checks:[]});return bi(i,s)}function Sx(i,e){if(!ms(e))throw new Error("Invalid input to extend: expected a plain object");const t=i._zod.def.checks;if(t&&t.length>0){const s=i._zod.def.shape;for(const o in e)if(Object.getOwnPropertyDescriptor(s,o)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}const r=Ei(i._zod.def,{get shape(){const s={...i._zod.def.shape,...e};return er(this,"shape",s),s}});return bi(i,r)}function yx(i,e){if(!ms(e))throw new Error("Invalid input to safeExtend: expected a plain object");const t=Ei(i._zod.def,{get shape(){const n={...i._zod.def.shape,...e};return er(this,"shape",n),n}});return bi(i,t)}function Mx(i,e){const t=Ei(i._zod.def,{get shape(){const n={...i._zod.def.shape,...e._zod.def.shape};return er(this,"shape",n),n},get catchall(){return e._zod.def.catchall},checks:[]});return bi(i,t)}function Ex(i,e,t){const r=e._zod.def.checks;if(r&&r.length>0)throw new Error(".partial() cannot be used on object schemas containing refinements");const o=Ei(e._zod.def,{get shape(){const a=e._zod.def.shape,c={...a};if(t)for(const l in t){if(!(l in a))throw new Error(`Unrecognized key: "${l}"`);t[l]&&(c[l]=i?new i({type:"optional",innerType:a[l]}):a[l])}else for(const l in a)c[l]=i?new i({type:"optional",innerType:a[l]}):a[l];return er(this,"shape",c),c},checks:[]});return bi(e,o)}function bx(i,e,t){const n=Ei(e._zod.def,{get shape(){const r=e._zod.def.shape,s={...r};if(t)for(const o in t){if(!(o in s))throw new Error(`Unrecognized key: "${o}"`);t[o]&&(s[o]=new i({type:"nonoptional",innerType:r[o]}))}else for(const o in r)s[o]=new i({type:"nonoptional",innerType:r[o]});return er(this,"shape",s),s}});return bi(e,n)}function br(i,e=0){var t;if(i.aborted===!0)return!0;for(let n=e;n<i.issues.length;n++)if(((t=i.issues[n])==null?void 0:t.continue)!==!0)return!0;return!1}function hd(i,e){return e.map(t=>{var n;return(n=t).path??(n.path=[]),t.path.unshift(i),t})}function so(i){return typeof i=="string"?i:i==null?void 0:i.message}function Ki(i,e,t){var r,s,o,a,c,l;const n={...i,path:i.path??[]};if(!i.message){const u=so((o=(s=(r=i.inst)==null?void 0:r._zod.def)==null?void 0:s.error)==null?void 0:o.call(s,i))??so((a=e==null?void 0:e.error)==null?void 0:a.call(e,i))??so((c=t.customError)==null?void 0:c.call(t,i))??so((l=t.localeError)==null?void 0:l.call(t,i))??"Invalid input";n.message=u}return delete n.inst,delete n.continue,e!=null&&e.reportInput||delete n.input,n}function Cc(i){return Array.isArray(i)?"array":typeof i=="string"?"string":"unknown"}function _s(...i){const[e,t,n]=i;return typeof e=="string"?{message:e,code:"custom",input:t,inst:n}:{...e}}const dd=(i,e)=>{i.name="$ZodError",Object.defineProperty(i,"_zod",{value:i._zod,enumerable:!1}),Object.defineProperty(i,"issues",{value:e,enumerable:!1}),i.message=JSON.stringify(e,tc,2),Object.defineProperty(i,"toString",{value:()=>i.message,enumerable:!1})},fd=q("$ZodError",dd),pd=q("$ZodError",dd,{Parent:Error});function Tx(i,e=t=>t.message){const t={},n=[];for(const r of i.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):n.push(e(r));return{formErrors:n,fieldErrors:t}}function Ax(i,e=t=>t.message){const t={_errors:[]},n=r=>{for(const s of r.issues)if(s.code==="invalid_union"&&s.errors.length)s.errors.map(o=>n({issues:o}));else if(s.code==="invalid_key")n({issues:s.issues});else if(s.code==="invalid_element")n({issues:s.issues});else if(s.path.length===0)t._errors.push(e(s));else{let o=t,a=0;for(;a<s.path.length;){const c=s.path[a];a===s.path.length-1?(o[c]=o[c]||{_errors:[]},o[c]._errors.push(e(s))):o[c]=o[c]||{_errors:[]},o=o[c],a++}}};return n(i),t}const Pc=i=>(e,t,n,r)=>{const s=n?Object.assign(n,{async:!1}):{async:!1},o=e._zod.run({value:t,issues:[]},s);if(o instanceof Promise)throw new Cr;if(o.issues.length){const a=new((r==null?void 0:r.Err)??i)(o.issues.map(c=>Ki(c,s,qi())));throw ld(a,r==null?void 0:r.callee),a}return o.value},Lc=i=>async(e,t,n,r)=>{const s=n?Object.assign(n,{async:!0}):{async:!0};let o=e._zod.run({value:t,issues:[]},s);if(o instanceof Promise&&(o=await o),o.issues.length){const a=new((r==null?void 0:r.Err)??i)(o.issues.map(c=>Ki(c,s,qi())));throw ld(a,r==null?void 0:r.callee),a}return o.value},zo=i=>(e,t,n)=>{const r=n?{...n,async:!1}:{async:!1},s=e._zod.run({value:t,issues:[]},r);if(s instanceof Promise)throw new Cr;return s.issues.length?{success:!1,error:new(i??fd)(s.issues.map(o=>Ki(o,r,qi())))}:{success:!0,data:s.value}},wx=zo(pd),ko=i=>async(e,t,n)=>{const r=n?Object.assign(n,{async:!0}):{async:!0};let s=e._zod.run({value:t,issues:[]},r);return s instanceof Promise&&(s=await s),s.issues.length?{success:!1,error:new i(s.issues.map(o=>Ki(o,r,qi())))}:{success:!0,data:s.value}},Rx=ko(pd),Cx=i=>(e,t,n)=>{const r=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return Pc(i)(e,t,r)},Px=i=>(e,t,n)=>Pc(i)(e,t,n),Lx=i=>async(e,t,n)=>{const r=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return Lc(i)(e,t,r)},Dx=i=>async(e,t,n)=>Lc(i)(e,t,n),Ix=i=>(e,t,n)=>{const r=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return zo(i)(e,t,r)},Ox=i=>(e,t,n)=>zo(i)(e,t,n),Ux=i=>async(e,t,n)=>{const r=n?Object.assign(n,{direction:"backward"}):{direction:"backward"};return ko(i)(e,t,r)},Nx=i=>async(e,t,n)=>ko(i)(e,t,n),Fx=/^[cC][^\s-]{8,}$/,zx=/^[0-9a-z]+$/,kx=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Bx=/^[0-9a-vA-V]{20}$/,Gx=/^[A-Za-z0-9]{27}$/,Hx=/^[a-zA-Z0-9_-]{21}$/,Vx=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Wx=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Gu=i=>i?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${i}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Xx=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,$x="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function Zx(){return new RegExp($x,"u")}const Yx=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,jx=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,qx=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Kx=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Jx=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,md=/^[A-Za-z0-9_-]*$/,Qx=/^\+[1-9]\d{6,14}$/,_d="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",eS=new RegExp(`^${_d}$`);function gd(i){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof i.precision=="number"?i.precision===-1?`${e}`:i.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${i.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function tS(i){return new RegExp(`^${gd(i)}$`)}function nS(i){const e=gd({precision:i.precision}),t=["Z"];i.local&&t.push(""),i.offset&&t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const n=`${e}(?:${t.join("|")})`;return new RegExp(`^${_d}T(?:${n})$`)}const iS=i=>{const e=i?`[\\s\\S]{${(i==null?void 0:i.minimum)??0},${(i==null?void 0:i.maximum)??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)},rS=/^-?\d+$/,sS=/^-?\d+(?:\.\d+)?$/,oS=/^[^A-Z]*$/,aS=/^[^a-z]*$/,rn=q("$ZodCheck",(i,e)=>{var t;i._zod??(i._zod={}),i._zod.def=e,(t=i._zod).onattach??(t.onattach=[])}),vd={number:"number",bigint:"bigint",object:"date"},xd=q("$ZodCheckLessThan",(i,e)=>{rn.init(i,e);const t=vd[typeof e.value];i._zod.onattach.push(n=>{const r=n._zod.bag,s=(e.inclusive?r.maximum:r.exclusiveMaximum)??Number.POSITIVE_INFINITY;e.value<s&&(e.inclusive?r.maximum=e.value:r.exclusiveMaximum=e.value)}),i._zod.check=n=>{(e.inclusive?n.value<=e.value:n.value<e.value)||n.issues.push({origin:t,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:n.value,inclusive:e.inclusive,inst:i,continue:!e.abort})}}),Sd=q("$ZodCheckGreaterThan",(i,e)=>{rn.init(i,e);const t=vd[typeof e.value];i._zod.onattach.push(n=>{const r=n._zod.bag,s=(e.inclusive?r.minimum:r.exclusiveMinimum)??Number.NEGATIVE_INFINITY;e.value>s&&(e.inclusive?r.minimum=e.value:r.exclusiveMinimum=e.value)}),i._zod.check=n=>{(e.inclusive?n.value>=e.value:n.value>e.value)||n.issues.push({origin:t,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:n.value,inclusive:e.inclusive,inst:i,continue:!e.abort})}}),cS=q("$ZodCheckMultipleOf",(i,e)=>{rn.init(i,e),i._zod.onattach.push(t=>{var n;(n=t._zod.bag).multipleOf??(n.multipleOf=e.value)}),i._zod.check=t=>{if(typeof t.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof t.value=="bigint"?t.value%e.value===BigInt(0):dx(t.value,e.value)===0)||t.issues.push({origin:typeof t.value,code:"not_multiple_of",divisor:e.value,input:t.value,inst:i,continue:!e.abort})}}),lS=q("$ZodCheckNumberFormat",(i,e)=>{var o;rn.init(i,e),e.format=e.format||"float64";const t=(o=e.format)==null?void 0:o.includes("int"),n=t?"int":"number",[r,s]=gx[e.format];i._zod.onattach.push(a=>{const c=a._zod.bag;c.format=e.format,c.minimum=r,c.maximum=s,t&&(c.pattern=rS)}),i._zod.check=a=>{const c=a.value;if(t){if(!Number.isInteger(c)){a.issues.push({expected:n,format:e.format,code:"invalid_type",continue:!1,input:c,inst:i});return}if(!Number.isSafeInteger(c)){c>0?a.issues.push({input:c,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:i,origin:n,inclusive:!0,continue:!e.abort}):a.issues.push({input:c,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:i,origin:n,inclusive:!0,continue:!e.abort});return}}c<r&&a.issues.push({origin:"number",input:c,code:"too_small",minimum:r,inclusive:!0,inst:i,continue:!e.abort}),c>s&&a.issues.push({origin:"number",input:c,code:"too_big",maximum:s,inclusive:!0,inst:i,continue:!e.abort})}}),uS=q("$ZodCheckMaxLength",(i,e)=>{var t;rn.init(i,e),(t=i._zod.def).when??(t.when=n=>{const r=n.value;return!wc(r)&&r.length!==void 0}),i._zod.onattach.push(n=>{const r=n._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<r&&(n._zod.bag.maximum=e.maximum)}),i._zod.check=n=>{const r=n.value;if(r.length<=e.maximum)return;const o=Cc(r);n.issues.push({origin:o,code:"too_big",maximum:e.maximum,inclusive:!0,input:r,inst:i,continue:!e.abort})}}),hS=q("$ZodCheckMinLength",(i,e)=>{var t;rn.init(i,e),(t=i._zod.def).when??(t.when=n=>{const r=n.value;return!wc(r)&&r.length!==void 0}),i._zod.onattach.push(n=>{const r=n._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>r&&(n._zod.bag.minimum=e.minimum)}),i._zod.check=n=>{const r=n.value;if(r.length>=e.minimum)return;const o=Cc(r);n.issues.push({origin:o,code:"too_small",minimum:e.minimum,inclusive:!0,input:r,inst:i,continue:!e.abort})}}),dS=q("$ZodCheckLengthEquals",(i,e)=>{var t;rn.init(i,e),(t=i._zod.def).when??(t.when=n=>{const r=n.value;return!wc(r)&&r.length!==void 0}),i._zod.onattach.push(n=>{const r=n._zod.bag;r.minimum=e.length,r.maximum=e.length,r.length=e.length}),i._zod.check=n=>{const r=n.value,s=r.length;if(s===e.length)return;const o=Cc(r),a=s>e.length;n.issues.push({origin:o,...a?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:n.value,inst:i,continue:!e.abort})}}),Bo=q("$ZodCheckStringFormat",(i,e)=>{var t,n;rn.init(i,e),i._zod.onattach.push(r=>{const s=r._zod.bag;s.format=e.format,e.pattern&&(s.patterns??(s.patterns=new Set),s.patterns.add(e.pattern))}),e.pattern?(t=i._zod).check??(t.check=r=>{e.pattern.lastIndex=0,!e.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:e.format,input:r.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:i,continue:!e.abort})}):(n=i._zod).check??(n.check=()=>{})}),fS=q("$ZodCheckRegex",(i,e)=>{Bo.init(i,e),i._zod.check=t=>{e.pattern.lastIndex=0,!e.pattern.test(t.value)&&t.issues.push({origin:"string",code:"invalid_format",format:"regex",input:t.value,pattern:e.pattern.toString(),inst:i,continue:!e.abort})}}),pS=q("$ZodCheckLowerCase",(i,e)=>{e.pattern??(e.pattern=oS),Bo.init(i,e)}),mS=q("$ZodCheckUpperCase",(i,e)=>{e.pattern??(e.pattern=aS),Bo.init(i,e)}),_S=q("$ZodCheckIncludes",(i,e)=>{rn.init(i,e);const t=Fo(e.includes),n=new RegExp(typeof e.position=="number"?`^.{${e.position}}${t}`:t);e.pattern=n,i._zod.onattach.push(r=>{const s=r._zod.bag;s.patterns??(s.patterns=new Set),s.patterns.add(n)}),i._zod.check=r=>{r.value.includes(e.includes,e.position)||r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:r.value,inst:i,continue:!e.abort})}}),gS=q("$ZodCheckStartsWith",(i,e)=>{rn.init(i,e);const t=new RegExp(`^${Fo(e.prefix)}.*`);e.pattern??(e.pattern=t),i._zod.onattach.push(n=>{const r=n._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(t)}),i._zod.check=n=>{n.value.startsWith(e.prefix)||n.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:n.value,inst:i,continue:!e.abort})}}),vS=q("$ZodCheckEndsWith",(i,e)=>{rn.init(i,e);const t=new RegExp(`.*${Fo(e.suffix)}$`);e.pattern??(e.pattern=t),i._zod.onattach.push(n=>{const r=n._zod.bag;r.patterns??(r.patterns=new Set),r.patterns.add(t)}),i._zod.check=n=>{n.value.endsWith(e.suffix)||n.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:n.value,inst:i,continue:!e.abort})}}),xS=q("$ZodCheckOverwrite",(i,e)=>{rn.init(i,e),i._zod.check=t=>{t.value=e.tx(t.value)}});class SS{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const n=e.split(`
`).filter(o=>o),r=Math.min(...n.map(o=>o.length-o.trimStart().length)),s=n.map(o=>o.slice(r)).map(o=>" ".repeat(this.indent*2)+o);for(const o of s)this.content.push(o)}compile(){const e=Function,t=this==null?void 0:this.args,r=[...((this==null?void 0:this.content)??[""]).map(s=>`  ${s}`)];return new e(...t,r.join(`
`))}}const yS={major:4,minor:3,patch:6},Tt=q("$ZodType",(i,e)=>{var r;var t;i??(i={}),i._zod.def=e,i._zod.bag=i._zod.bag||{},i._zod.version=yS;const n=[...i._zod.def.checks??[]];i._zod.traits.has("$ZodCheck")&&n.unshift(i);for(const s of n)for(const o of s._zod.onattach)o(i);if(n.length===0)(t=i._zod).deferred??(t.deferred=[]),(r=i._zod.deferred)==null||r.push(()=>{i._zod.run=i._zod.parse});else{const s=(a,c,l)=>{let u=br(a),h;for(const d of c){if(d._zod.def.when){if(!d._zod.def.when(a))continue}else if(u)continue;const m=a.issues.length,g=d._zod.check(a);if(g instanceof Promise&&(l==null?void 0:l.async)===!1)throw new Cr;if(h||g instanceof Promise)h=(h??Promise.resolve()).then(async()=>{await g,a.issues.length!==m&&(u||(u=br(a,m)))});else{if(a.issues.length===m)continue;u||(u=br(a,m))}}return h?h.then(()=>a):a},o=(a,c,l)=>{if(br(a))return a.aborted=!0,a;const u=s(c,n,l);if(u instanceof Promise){if(l.async===!1)throw new Cr;return u.then(h=>i._zod.parse(h,l))}return i._zod.parse(u,l)};i._zod.run=(a,c)=>{if(c.skipChecks)return i._zod.parse(a,c);if(c.direction==="backward"){const u=i._zod.parse({value:a.value,issues:[]},{...c,skipChecks:!0});return u instanceof Promise?u.then(h=>o(h,a,c)):o(u,a,c)}const l=i._zod.parse(a,c);if(l instanceof Promise){if(c.async===!1)throw new Cr;return l.then(u=>s(u,n,c))}return s(l,n,c)}}tt(i,"~standard",()=>({validate:s=>{var o;try{const a=wx(i,s);return a.success?{value:a.data}:{issues:(o=a.error)==null?void 0:o.issues}}catch{return Rx(i,s).then(c=>{var l;return c.success?{value:c.data}:{issues:(l=c.error)==null?void 0:l.issues}})}},vendor:"zod",version:1}))}),Dc=q("$ZodString",(i,e)=>{var t;Tt.init(i,e),i._zod.pattern=[...((t=i==null?void 0:i._zod.bag)==null?void 0:t.patterns)??[]].pop()??iS(i._zod.bag),i._zod.parse=(n,r)=>{if(e.coerce)try{n.value=String(n.value)}catch{}return typeof n.value=="string"||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:i}),n}}),lt=q("$ZodStringFormat",(i,e)=>{Bo.init(i,e),Dc.init(i,e)}),MS=q("$ZodGUID",(i,e)=>{e.pattern??(e.pattern=Wx),lt.init(i,e)}),ES=q("$ZodUUID",(i,e)=>{if(e.version){const n={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(n===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=Gu(n))}else e.pattern??(e.pattern=Gu());lt.init(i,e)}),bS=q("$ZodEmail",(i,e)=>{e.pattern??(e.pattern=Xx),lt.init(i,e)}),TS=q("$ZodURL",(i,e)=>{lt.init(i,e),i._zod.check=t=>{try{const n=t.value.trim(),r=new URL(n);e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(r.hostname)||t.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:t.value,inst:i,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(r.protocol.endsWith(":")?r.protocol.slice(0,-1):r.protocol)||t.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:t.value,inst:i,continue:!e.abort})),e.normalize?t.value=r.href:t.value=n;return}catch{t.issues.push({code:"invalid_format",format:"url",input:t.value,inst:i,continue:!e.abort})}}}),AS=q("$ZodEmoji",(i,e)=>{e.pattern??(e.pattern=Zx()),lt.init(i,e)}),wS=q("$ZodNanoID",(i,e)=>{e.pattern??(e.pattern=Hx),lt.init(i,e)}),RS=q("$ZodCUID",(i,e)=>{e.pattern??(e.pattern=Fx),lt.init(i,e)}),CS=q("$ZodCUID2",(i,e)=>{e.pattern??(e.pattern=zx),lt.init(i,e)}),PS=q("$ZodULID",(i,e)=>{e.pattern??(e.pattern=kx),lt.init(i,e)}),LS=q("$ZodXID",(i,e)=>{e.pattern??(e.pattern=Bx),lt.init(i,e)}),DS=q("$ZodKSUID",(i,e)=>{e.pattern??(e.pattern=Gx),lt.init(i,e)}),IS=q("$ZodISODateTime",(i,e)=>{e.pattern??(e.pattern=nS(e)),lt.init(i,e)}),OS=q("$ZodISODate",(i,e)=>{e.pattern??(e.pattern=eS),lt.init(i,e)}),US=q("$ZodISOTime",(i,e)=>{e.pattern??(e.pattern=tS(e)),lt.init(i,e)}),NS=q("$ZodISODuration",(i,e)=>{e.pattern??(e.pattern=Vx),lt.init(i,e)}),FS=q("$ZodIPv4",(i,e)=>{e.pattern??(e.pattern=Yx),lt.init(i,e),i._zod.bag.format="ipv4"}),zS=q("$ZodIPv6",(i,e)=>{e.pattern??(e.pattern=jx),lt.init(i,e),i._zod.bag.format="ipv6",i._zod.check=t=>{try{new URL(`http://[${t.value}]`)}catch{t.issues.push({code:"invalid_format",format:"ipv6",input:t.value,inst:i,continue:!e.abort})}}}),kS=q("$ZodCIDRv4",(i,e)=>{e.pattern??(e.pattern=qx),lt.init(i,e)}),BS=q("$ZodCIDRv6",(i,e)=>{e.pattern??(e.pattern=Kx),lt.init(i,e),i._zod.check=t=>{const n=t.value.split("/");try{if(n.length!==2)throw new Error;const[r,s]=n;if(!s)throw new Error;const o=Number(s);if(`${o}`!==s)throw new Error;if(o<0||o>128)throw new Error;new URL(`http://[${r}]`)}catch{t.issues.push({code:"invalid_format",format:"cidrv6",input:t.value,inst:i,continue:!e.abort})}}});function yd(i){if(i==="")return!0;if(i.length%4!==0)return!1;try{return atob(i),!0}catch{return!1}}const GS=q("$ZodBase64",(i,e)=>{e.pattern??(e.pattern=Jx),lt.init(i,e),i._zod.bag.contentEncoding="base64",i._zod.check=t=>{yd(t.value)||t.issues.push({code:"invalid_format",format:"base64",input:t.value,inst:i,continue:!e.abort})}});function HS(i){if(!md.test(i))return!1;const e=i.replace(/[-_]/g,n=>n==="-"?"+":"/"),t=e.padEnd(Math.ceil(e.length/4)*4,"=");return yd(t)}const VS=q("$ZodBase64URL",(i,e)=>{e.pattern??(e.pattern=md),lt.init(i,e),i._zod.bag.contentEncoding="base64url",i._zod.check=t=>{HS(t.value)||t.issues.push({code:"invalid_format",format:"base64url",input:t.value,inst:i,continue:!e.abort})}}),WS=q("$ZodE164",(i,e)=>{e.pattern??(e.pattern=Qx),lt.init(i,e)});function XS(i,e=null){try{const t=i.split(".");if(t.length!==3)return!1;const[n]=t;if(!n)return!1;const r=JSON.parse(atob(n));return!("typ"in r&&(r==null?void 0:r.typ)!=="JWT"||!r.alg||e&&(!("alg"in r)||r.alg!==e))}catch{return!1}}const $S=q("$ZodJWT",(i,e)=>{lt.init(i,e),i._zod.check=t=>{XS(t.value,e.alg)||t.issues.push({code:"invalid_format",format:"jwt",input:t.value,inst:i,continue:!e.abort})}}),Md=q("$ZodNumber",(i,e)=>{Tt.init(i,e),i._zod.pattern=i._zod.bag.pattern??sS,i._zod.parse=(t,n)=>{if(e.coerce)try{t.value=Number(t.value)}catch{}const r=t.value;if(typeof r=="number"&&!Number.isNaN(r)&&Number.isFinite(r))return t;const s=typeof r=="number"?Number.isNaN(r)?"NaN":Number.isFinite(r)?void 0:"Infinity":void 0;return t.issues.push({expected:"number",code:"invalid_type",input:r,inst:i,...s?{received:s}:{}}),t}}),ZS=q("$ZodNumberFormat",(i,e)=>{lS.init(i,e),Md.init(i,e)}),YS=q("$ZodUnknown",(i,e)=>{Tt.init(i,e),i._zod.parse=t=>t}),jS=q("$ZodNever",(i,e)=>{Tt.init(i,e),i._zod.parse=(t,n)=>(t.issues.push({expected:"never",code:"invalid_type",input:t.value,inst:i}),t)});function Hu(i,e,t){i.issues.length&&e.issues.push(...hd(t,i.issues)),e.value[t]=i.value}const qS=q("$ZodArray",(i,e)=>{Tt.init(i,e),i._zod.parse=(t,n)=>{const r=t.value;if(!Array.isArray(r))return t.issues.push({expected:"array",code:"invalid_type",input:r,inst:i}),t;t.value=Array(r.length);const s=[];for(let o=0;o<r.length;o++){const a=r[o],c=e.element._zod.run({value:a,issues:[]},n);c instanceof Promise?s.push(c.then(l=>Hu(l,t,o))):Hu(c,t,o)}return s.length?Promise.all(s).then(()=>t):t}});function yo(i,e,t,n,r){if(i.issues.length){if(r&&!(t in n))return;e.issues.push(...hd(t,i.issues))}i.value===void 0?t in n&&(e.value[t]=void 0):e.value[t]=i.value}function Ed(i){var n,r,s,o;const e=Object.keys(i.shape);for(const a of e)if(!((o=(s=(r=(n=i.shape)==null?void 0:n[a])==null?void 0:r._zod)==null?void 0:s.traits)!=null&&o.has("$ZodType")))throw new Error(`Invalid element at key "${a}": expected a Zod schema`);const t=_x(i.shape);return{...i,keys:e,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(t)}}function bd(i,e,t,n,r,s){const o=[],a=r.keySet,c=r.catchall._zod,l=c.def.type,u=c.optout==="optional";for(const h in e){if(a.has(h))continue;if(l==="never"){o.push(h);continue}const d=c.run({value:e[h],issues:[]},n);d instanceof Promise?i.push(d.then(m=>yo(m,t,h,e,u))):yo(d,t,h,e,u)}return o.length&&t.issues.push({code:"unrecognized_keys",keys:o,input:e,inst:s}),i.length?Promise.all(i).then(()=>t):t}const KS=q("$ZodObject",(i,e)=>{Tt.init(i,e);const t=Object.getOwnPropertyDescriptor(e,"shape");if(!(t!=null&&t.get)){const a=e.shape;Object.defineProperty(e,"shape",{get:()=>{const c={...a};return Object.defineProperty(e,"shape",{value:c}),c}})}const n=Ac(()=>Ed(e));tt(i._zod,"propValues",()=>{const a=e.shape,c={};for(const l in a){const u=a[l]._zod;if(u.values){c[l]??(c[l]=new Set);for(const h of u.values)c[l].add(h)}}return c});const r=So,s=e.catchall;let o;i._zod.parse=(a,c)=>{o??(o=n.value);const l=a.value;if(!r(l))return a.issues.push({expected:"object",code:"invalid_type",input:l,inst:i}),a;a.value={};const u=[],h=o.shape;for(const d of o.keys){const m=h[d],g=m._zod.optout==="optional",_=m._zod.run({value:l[d],issues:[]},c);_ instanceof Promise?u.push(_.then(f=>yo(f,a,d,l,g))):yo(_,a,d,l,g)}return s?bd(u,l,a,c,n.value,i):u.length?Promise.all(u).then(()=>a):a}}),JS=q("$ZodObjectJIT",(i,e)=>{KS.init(i,e);const t=i._zod.parse,n=Ac(()=>Ed(e)),r=d=>{var x;const m=new SS(["shape","payload","ctx"]),g=n.value,_=y=>{const w=Bu(y);return`shape[${w}]._zod.run({ value: input[${w}], issues: [] }, ctx)`};m.write("const input = payload.value;");const f=Object.create(null);let p=0;for(const y of g.keys)f[y]=`key_${p++}`;m.write("const newResult = {};");for(const y of g.keys){const w=f[y],A=Bu(y),E=d[y],O=((x=E==null?void 0:E._zod)==null?void 0:x.optout)==="optional";m.write(`const ${w} = ${_(y)};`),O?m.write(`
        if (${w}.issues.length) {
          if (${A} in input) {
            payload.issues = payload.issues.concat(${w}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${A}, ...iss.path] : [${A}]
            })));
          }
        }
        
        if (${w}.value === undefined) {
          if (${A} in input) {
            newResult[${A}] = undefined;
          }
        } else {
          newResult[${A}] = ${w}.value;
        }
        
      `):m.write(`
        if (${w}.issues.length) {
          payload.issues = payload.issues.concat(${w}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${A}, ...iss.path] : [${A}]
          })));
        }
        
        if (${w}.value === undefined) {
          if (${A} in input) {
            newResult[${A}] = undefined;
          }
        } else {
          newResult[${A}] = ${w}.value;
        }
        
      `)}m.write("payload.value = newResult;"),m.write("return payload;");const S=m.compile();return(y,w)=>S(d,y,w)};let s;const o=So,a=!ad.jitless,l=a&&px.value,u=e.catchall;let h;i._zod.parse=(d,m)=>{h??(h=n.value);const g=d.value;return o(g)?a&&l&&(m==null?void 0:m.async)===!1&&m.jitless!==!0?(s||(s=r(e.shape)),d=s(d,m),u?bd([],g,d,m,h,i):d):t(d,m):(d.issues.push({expected:"object",code:"invalid_type",input:g,inst:i}),d)}});function Vu(i,e,t,n){for(const s of i)if(s.issues.length===0)return e.value=s.value,e;const r=i.filter(s=>!br(s));return r.length===1?(e.value=r[0].value,r[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:t,errors:i.map(s=>s.issues.map(o=>Ki(o,n,qi())))}),e)}const QS=q("$ZodUnion",(i,e)=>{Tt.init(i,e),tt(i._zod,"optin",()=>e.options.some(r=>r._zod.optin==="optional")?"optional":void 0),tt(i._zod,"optout",()=>e.options.some(r=>r._zod.optout==="optional")?"optional":void 0),tt(i._zod,"values",()=>{if(e.options.every(r=>r._zod.values))return new Set(e.options.flatMap(r=>Array.from(r._zod.values)))}),tt(i._zod,"pattern",()=>{if(e.options.every(r=>r._zod.pattern)){const r=e.options.map(s=>s._zod.pattern);return new RegExp(`^(${r.map(s=>Rc(s.source)).join("|")})$`)}});const t=e.options.length===1,n=e.options[0]._zod.run;i._zod.parse=(r,s)=>{if(t)return n(r,s);let o=!1;const a=[];for(const c of e.options){const l=c._zod.run({value:r.value,issues:[]},s);if(l instanceof Promise)a.push(l),o=!0;else{if(l.issues.length===0)return l;a.push(l)}}return o?Promise.all(a).then(c=>Vu(c,r,i,s)):Vu(a,r,i,s)}}),ey=q("$ZodIntersection",(i,e)=>{Tt.init(i,e),i._zod.parse=(t,n)=>{const r=t.value,s=e.left._zod.run({value:r,issues:[]},n),o=e.right._zod.run({value:r,issues:[]},n);return s instanceof Promise||o instanceof Promise?Promise.all([s,o]).then(([c,l])=>Wu(t,c,l)):Wu(t,s,o)}});function nc(i,e){if(i===e)return{valid:!0,data:i};if(i instanceof Date&&e instanceof Date&&+i==+e)return{valid:!0,data:i};if(ms(i)&&ms(e)){const t=Object.keys(e),n=Object.keys(i).filter(s=>t.indexOf(s)!==-1),r={...i,...e};for(const s of n){const o=nc(i[s],e[s]);if(!o.valid)return{valid:!1,mergeErrorPath:[s,...o.mergeErrorPath]};r[s]=o.data}return{valid:!0,data:r}}if(Array.isArray(i)&&Array.isArray(e)){if(i.length!==e.length)return{valid:!1,mergeErrorPath:[]};const t=[];for(let n=0;n<i.length;n++){const r=i[n],s=e[n],o=nc(r,s);if(!o.valid)return{valid:!1,mergeErrorPath:[n,...o.mergeErrorPath]};t.push(o.data)}return{valid:!0,data:t}}return{valid:!1,mergeErrorPath:[]}}function Wu(i,e,t){const n=new Map;let r;for(const a of e.issues)if(a.code==="unrecognized_keys"){r??(r=a);for(const c of a.keys)n.has(c)||n.set(c,{}),n.get(c).l=!0}else i.issues.push(a);for(const a of t.issues)if(a.code==="unrecognized_keys")for(const c of a.keys)n.has(c)||n.set(c,{}),n.get(c).r=!0;else i.issues.push(a);const s=[...n].filter(([,a])=>a.l&&a.r).map(([a])=>a);if(s.length&&r&&i.issues.push({...r,keys:s}),br(i))return i;const o=nc(e.value,t.value);if(!o.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);return i.value=o.data,i}const ty=q("$ZodEnum",(i,e)=>{Tt.init(i,e);const t=cd(e.entries),n=new Set(t);i._zod.values=n,i._zod.pattern=new RegExp(`^(${t.filter(r=>mx.has(typeof r)).map(r=>typeof r=="string"?Fo(r):r.toString()).join("|")})$`),i._zod.parse=(r,s)=>{const o=r.value;return n.has(o)||r.issues.push({code:"invalid_value",values:t,input:o,inst:i}),r}}),ny=q("$ZodTransform",(i,e)=>{Tt.init(i,e),i._zod.parse=(t,n)=>{if(n.direction==="backward")throw new od(i.constructor.name);const r=e.transform(t.value,t);if(n.async)return(r instanceof Promise?r:Promise.resolve(r)).then(o=>(t.value=o,t));if(r instanceof Promise)throw new Cr;return t.value=r,t}});function Xu(i,e){return i.issues.length&&e===void 0?{issues:[],value:void 0}:i}const Td=q("$ZodOptional",(i,e)=>{Tt.init(i,e),i._zod.optin="optional",i._zod.optout="optional",tt(i._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),tt(i._zod,"pattern",()=>{const t=e.innerType._zod.pattern;return t?new RegExp(`^(${Rc(t.source)})?$`):void 0}),i._zod.parse=(t,n)=>{if(e.innerType._zod.optin==="optional"){const r=e.innerType._zod.run(t,n);return r instanceof Promise?r.then(s=>Xu(s,t.value)):Xu(r,t.value)}return t.value===void 0?t:e.innerType._zod.run(t,n)}}),iy=q("$ZodExactOptional",(i,e)=>{Td.init(i,e),tt(i._zod,"values",()=>e.innerType._zod.values),tt(i._zod,"pattern",()=>e.innerType._zod.pattern),i._zod.parse=(t,n)=>e.innerType._zod.run(t,n)}),ry=q("$ZodNullable",(i,e)=>{Tt.init(i,e),tt(i._zod,"optin",()=>e.innerType._zod.optin),tt(i._zod,"optout",()=>e.innerType._zod.optout),tt(i._zod,"pattern",()=>{const t=e.innerType._zod.pattern;return t?new RegExp(`^(${Rc(t.source)}|null)$`):void 0}),tt(i._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),i._zod.parse=(t,n)=>t.value===null?t:e.innerType._zod.run(t,n)}),sy=q("$ZodDefault",(i,e)=>{Tt.init(i,e),i._zod.optin="optional",tt(i._zod,"values",()=>e.innerType._zod.values),i._zod.parse=(t,n)=>{if(n.direction==="backward")return e.innerType._zod.run(t,n);if(t.value===void 0)return t.value=e.defaultValue,t;const r=e.innerType._zod.run(t,n);return r instanceof Promise?r.then(s=>$u(s,e)):$u(r,e)}});function $u(i,e){return i.value===void 0&&(i.value=e.defaultValue),i}const oy=q("$ZodPrefault",(i,e)=>{Tt.init(i,e),i._zod.optin="optional",tt(i._zod,"values",()=>e.innerType._zod.values),i._zod.parse=(t,n)=>(n.direction==="backward"||t.value===void 0&&(t.value=e.defaultValue),e.innerType._zod.run(t,n))}),ay=q("$ZodNonOptional",(i,e)=>{Tt.init(i,e),tt(i._zod,"values",()=>{const t=e.innerType._zod.values;return t?new Set([...t].filter(n=>n!==void 0)):void 0}),i._zod.parse=(t,n)=>{const r=e.innerType._zod.run(t,n);return r instanceof Promise?r.then(s=>Zu(s,i)):Zu(r,i)}});function Zu(i,e){return!i.issues.length&&i.value===void 0&&i.issues.push({code:"invalid_type",expected:"nonoptional",input:i.value,inst:e}),i}const cy=q("$ZodCatch",(i,e)=>{Tt.init(i,e),tt(i._zod,"optin",()=>e.innerType._zod.optin),tt(i._zod,"optout",()=>e.innerType._zod.optout),tt(i._zod,"values",()=>e.innerType._zod.values),i._zod.parse=(t,n)=>{if(n.direction==="backward")return e.innerType._zod.run(t,n);const r=e.innerType._zod.run(t,n);return r instanceof Promise?r.then(s=>(t.value=s.value,s.issues.length&&(t.value=e.catchValue({...t,error:{issues:s.issues.map(o=>Ki(o,n,qi()))},input:t.value}),t.issues=[]),t)):(t.value=r.value,r.issues.length&&(t.value=e.catchValue({...t,error:{issues:r.issues.map(s=>Ki(s,n,qi()))},input:t.value}),t.issues=[]),t)}}),ly=q("$ZodPipe",(i,e)=>{Tt.init(i,e),tt(i._zod,"values",()=>e.in._zod.values),tt(i._zod,"optin",()=>e.in._zod.optin),tt(i._zod,"optout",()=>e.out._zod.optout),tt(i._zod,"propValues",()=>e.in._zod.propValues),i._zod.parse=(t,n)=>{if(n.direction==="backward"){const s=e.out._zod.run(t,n);return s instanceof Promise?s.then(o=>oo(o,e.in,n)):oo(s,e.in,n)}const r=e.in._zod.run(t,n);return r instanceof Promise?r.then(s=>oo(s,e.out,n)):oo(r,e.out,n)}});function oo(i,e,t){return i.issues.length?(i.aborted=!0,i):e._zod.run({value:i.value,issues:i.issues},t)}const uy=q("$ZodReadonly",(i,e)=>{Tt.init(i,e),tt(i._zod,"propValues",()=>e.innerType._zod.propValues),tt(i._zod,"values",()=>e.innerType._zod.values),tt(i._zod,"optin",()=>{var t,n;return(n=(t=e.innerType)==null?void 0:t._zod)==null?void 0:n.optin}),tt(i._zod,"optout",()=>{var t,n;return(n=(t=e.innerType)==null?void 0:t._zod)==null?void 0:n.optout}),i._zod.parse=(t,n)=>{if(n.direction==="backward")return e.innerType._zod.run(t,n);const r=e.innerType._zod.run(t,n);return r instanceof Promise?r.then(Yu):Yu(r)}});function Yu(i){return i.value=Object.freeze(i.value),i}const hy=q("$ZodCustom",(i,e)=>{rn.init(i,e),Tt.init(i,e),i._zod.parse=(t,n)=>t,i._zod.check=t=>{const n=t.value,r=e.fn(n);if(r instanceof Promise)return r.then(s=>ju(s,t,n,i));ju(r,t,n,i)}});function ju(i,e,t,n){if(!i){const r={code:"custom",input:t,inst:n,path:[...n._zod.def.path??[]],continue:!n._zod.def.abort};n._zod.def.params&&(r.params=n._zod.def.params),e.issues.push(_s(r))}}var qu;class dy{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){const n=t[0];return this._map.set(e,n),n&&typeof n=="object"&&"id"in n&&this._idmap.set(n.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const t=this._map.get(e);return t&&typeof t=="object"&&"id"in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){const t=e._zod.parent;if(t){const n={...this.get(t)??{}};delete n.id;const r={...n,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function fy(){return new dy}(qu=globalThis).__zod_globalRegistry??(qu.__zod_globalRegistry=fy());const rs=globalThis.__zod_globalRegistry;function py(i,e){return new i({type:"string",...Te(e)})}function my(i,e){return new i({type:"string",format:"email",check:"string_format",abort:!1,...Te(e)})}function Ku(i,e){return new i({type:"string",format:"guid",check:"string_format",abort:!1,...Te(e)})}function _y(i,e){return new i({type:"string",format:"uuid",check:"string_format",abort:!1,...Te(e)})}function gy(i,e){return new i({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Te(e)})}function vy(i,e){return new i({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Te(e)})}function xy(i,e){return new i({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Te(e)})}function Sy(i,e){return new i({type:"string",format:"url",check:"string_format",abort:!1,...Te(e)})}function yy(i,e){return new i({type:"string",format:"emoji",check:"string_format",abort:!1,...Te(e)})}function My(i,e){return new i({type:"string",format:"nanoid",check:"string_format",abort:!1,...Te(e)})}function Ey(i,e){return new i({type:"string",format:"cuid",check:"string_format",abort:!1,...Te(e)})}function by(i,e){return new i({type:"string",format:"cuid2",check:"string_format",abort:!1,...Te(e)})}function Ty(i,e){return new i({type:"string",format:"ulid",check:"string_format",abort:!1,...Te(e)})}function Ay(i,e){return new i({type:"string",format:"xid",check:"string_format",abort:!1,...Te(e)})}function wy(i,e){return new i({type:"string",format:"ksuid",check:"string_format",abort:!1,...Te(e)})}function Ry(i,e){return new i({type:"string",format:"ipv4",check:"string_format",abort:!1,...Te(e)})}function Cy(i,e){return new i({type:"string",format:"ipv6",check:"string_format",abort:!1,...Te(e)})}function Py(i,e){return new i({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Te(e)})}function Ly(i,e){return new i({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Te(e)})}function Dy(i,e){return new i({type:"string",format:"base64",check:"string_format",abort:!1,...Te(e)})}function Iy(i,e){return new i({type:"string",format:"base64url",check:"string_format",abort:!1,...Te(e)})}function Oy(i,e){return new i({type:"string",format:"e164",check:"string_format",abort:!1,...Te(e)})}function Uy(i,e){return new i({type:"string",format:"jwt",check:"string_format",abort:!1,...Te(e)})}function Ny(i,e){return new i({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Te(e)})}function Fy(i,e){return new i({type:"string",format:"date",check:"string_format",...Te(e)})}function zy(i,e){return new i({type:"string",format:"time",check:"string_format",precision:null,...Te(e)})}function ky(i,e){return new i({type:"string",format:"duration",check:"string_format",...Te(e)})}function By(i,e){return new i({type:"number",checks:[],...Te(e)})}function Gy(i,e){return new i({type:"number",check:"number_format",abort:!1,format:"safeint",...Te(e)})}function Hy(i){return new i({type:"unknown"})}function Vy(i,e){return new i({type:"never",...Te(e)})}function Ju(i,e){return new xd({check:"less_than",...Te(e),value:i,inclusive:!1})}function Pa(i,e){return new xd({check:"less_than",...Te(e),value:i,inclusive:!0})}function Qu(i,e){return new Sd({check:"greater_than",...Te(e),value:i,inclusive:!1})}function La(i,e){return new Sd({check:"greater_than",...Te(e),value:i,inclusive:!0})}function eh(i,e){return new cS({check:"multiple_of",...Te(e),value:i})}function Ad(i,e){return new uS({check:"max_length",...Te(e),maximum:i})}function Mo(i,e){return new hS({check:"min_length",...Te(e),minimum:i})}function wd(i,e){return new dS({check:"length_equals",...Te(e),length:i})}function Wy(i,e){return new fS({check:"string_format",format:"regex",...Te(e),pattern:i})}function Xy(i){return new pS({check:"string_format",format:"lowercase",...Te(i)})}function $y(i){return new mS({check:"string_format",format:"uppercase",...Te(i)})}function Zy(i,e){return new _S({check:"string_format",format:"includes",...Te(e),includes:i})}function Yy(i,e){return new gS({check:"string_format",format:"starts_with",...Te(e),prefix:i})}function jy(i,e){return new vS({check:"string_format",format:"ends_with",...Te(e),suffix:i})}function Zr(i){return new xS({check:"overwrite",tx:i})}function qy(i){return Zr(e=>e.normalize(i))}function Ky(){return Zr(i=>i.trim())}function Jy(){return Zr(i=>i.toLowerCase())}function Qy(){return Zr(i=>i.toUpperCase())}function eM(){return Zr(i=>fx(i))}function tM(i,e,t){return new i({type:"array",element:e,...Te(t)})}function nM(i,e,t){return new i({type:"custom",check:"custom",fn:e,...Te(t)})}function iM(i){const e=rM(t=>(t.addIssue=n=>{if(typeof n=="string")t.issues.push(_s(n,t.value,e._zod.def));else{const r=n;r.fatal&&(r.continue=!1),r.code??(r.code="custom"),r.input??(r.input=t.value),r.inst??(r.inst=e),r.continue??(r.continue=!e._zod.def.abort),t.issues.push(_s(r))}},i(t.value,t)));return e}function rM(i,e){const t=new rn({check:"custom",...Te(e)});return t._zod.check=i,t}function Rd(i){let e=(i==null?void 0:i.target)??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:i.processors??{},metadataRegistry:(i==null?void 0:i.metadata)??rs,target:e,unrepresentable:(i==null?void 0:i.unrepresentable)??"throw",override:(i==null?void 0:i.override)??(()=>{}),io:(i==null?void 0:i.io)??"output",counter:0,seen:new Map,cycles:(i==null?void 0:i.cycles)??"ref",reused:(i==null?void 0:i.reused)??"inline",external:(i==null?void 0:i.external)??void 0}}function zt(i,e,t={path:[],schemaPath:[]}){var u,h;var n;const r=i._zod.def,s=e.seen.get(i);if(s)return s.count++,t.schemaPath.includes(i)&&(s.cycle=t.path),s.schema;const o={schema:{},count:1,cycle:void 0,path:t.path};e.seen.set(i,o);const a=(h=(u=i._zod).toJSONSchema)==null?void 0:h.call(u);if(a)o.schema=a;else{const d={...t,schemaPath:[...t.schemaPath,i],path:t.path};if(i._zod.processJSONSchema)i._zod.processJSONSchema(e,o.schema,d);else{const g=o.schema,_=e.processors[r.type];if(!_)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);_(i,e,g,d)}const m=i._zod.parent;m&&(o.ref||(o.ref=m),zt(m,e,d),e.seen.get(m).isParent=!0)}const c=e.metadataRegistry.get(i);return c&&Object.assign(o.schema,c),e.io==="input"&&Wt(i)&&(delete o.schema.examples,delete o.schema.default),e.io==="input"&&o.schema._prefault&&((n=o.schema).default??(n.default=o.schema._prefault)),delete o.schema._prefault,e.seen.get(i).schema}function Cd(i,e){var o,a,c,l;const t=i.seen.get(e);if(!t)throw new Error("Unprocessed schema. This is a bug in Zod.");const n=new Map;for(const u of i.seen.entries()){const h=(o=i.metadataRegistry.get(u[0]))==null?void 0:o.id;if(h){const d=n.get(h);if(d&&d!==u[0])throw new Error(`Duplicate schema id "${h}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);n.set(h,u[0])}}const r=u=>{var _;const h=i.target==="draft-2020-12"?"$defs":"definitions";if(i.external){const f=(_=i.external.registry.get(u[0]))==null?void 0:_.id,p=i.external.uri??(x=>x);if(f)return{ref:p(f)};const S=u[1].defId??u[1].schema.id??`schema${i.counter++}`;return u[1].defId=S,{defId:S,ref:`${p("__shared")}#/${h}/${S}`}}if(u[1]===t)return{ref:"#"};const m=`#/${h}/`,g=u[1].schema.id??`__schema${i.counter++}`;return{defId:g,ref:m+g}},s=u=>{if(u[1].schema.$ref)return;const h=u[1],{ref:d,defId:m}=r(u);h.def={...h.schema},m&&(h.defId=m);const g=h.schema;for(const _ in g)delete g[_];g.$ref=d};if(i.cycles==="throw")for(const u of i.seen.entries()){const h=u[1];if(h.cycle)throw new Error(`Cycle detected: #/${(a=h.cycle)==null?void 0:a.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const u of i.seen.entries()){const h=u[1];if(e===u[0]){s(u);continue}if(i.external){const m=(c=i.external.registry.get(u[0]))==null?void 0:c.id;if(e!==u[0]&&m){s(u);continue}}if((l=i.metadataRegistry.get(u[0]))==null?void 0:l.id){s(u);continue}if(h.cycle){s(u);continue}if(h.count>1&&i.reused==="ref"){s(u);continue}}}function Pd(i,e){var o,a,c;const t=i.seen.get(e);if(!t)throw new Error("Unprocessed schema. This is a bug in Zod.");const n=l=>{const u=i.seen.get(l);if(u.ref===null)return;const h=u.def??u.schema,d={...h},m=u.ref;if(u.ref=null,m){n(m);const _=i.seen.get(m),f=_.schema;if(f.$ref&&(i.target==="draft-07"||i.target==="draft-04"||i.target==="openapi-3.0")?(h.allOf=h.allOf??[],h.allOf.push(f)):Object.assign(h,f),Object.assign(h,d),l._zod.parent===m)for(const S in h)S==="$ref"||S==="allOf"||S in d||delete h[S];if(f.$ref&&_.def)for(const S in h)S==="$ref"||S==="allOf"||S in _.def&&JSON.stringify(h[S])===JSON.stringify(_.def[S])&&delete h[S]}const g=l._zod.parent;if(g&&g!==m){n(g);const _=i.seen.get(g);if(_!=null&&_.schema.$ref&&(h.$ref=_.schema.$ref,_.def))for(const f in h)f==="$ref"||f==="allOf"||f in _.def&&JSON.stringify(h[f])===JSON.stringify(_.def[f])&&delete h[f]}i.override({zodSchema:l,jsonSchema:h,path:u.path??[]})};for(const l of[...i.seen.entries()].reverse())n(l[0]);const r={};if(i.target==="draft-2020-12"?r.$schema="https://json-schema.org/draft/2020-12/schema":i.target==="draft-07"?r.$schema="http://json-schema.org/draft-07/schema#":i.target==="draft-04"?r.$schema="http://json-schema.org/draft-04/schema#":i.target,(o=i.external)!=null&&o.uri){const l=(a=i.external.registry.get(e))==null?void 0:a.id;if(!l)throw new Error("Schema is missing an `id` property");r.$id=i.external.uri(l)}Object.assign(r,t.def??t.schema);const s=((c=i.external)==null?void 0:c.defs)??{};for(const l of i.seen.entries()){const u=l[1];u.def&&u.defId&&(s[u.defId]=u.def)}i.external||Object.keys(s).length>0&&(i.target==="draft-2020-12"?r.$defs=s:r.definitions=s);try{const l=JSON.parse(JSON.stringify(r));return Object.defineProperty(l,"~standard",{value:{...e["~standard"],jsonSchema:{input:Eo(e,"input",i.processors),output:Eo(e,"output",i.processors)}},enumerable:!1,writable:!1}),l}catch{throw new Error("Error converting schema to JSON.")}}function Wt(i,e){const t=e??{seen:new Set};if(t.seen.has(i))return!1;t.seen.add(i);const n=i._zod.def;if(n.type==="transform")return!0;if(n.type==="array")return Wt(n.element,t);if(n.type==="set")return Wt(n.valueType,t);if(n.type==="lazy")return Wt(n.getter(),t);if(n.type==="promise"||n.type==="optional"||n.type==="nonoptional"||n.type==="nullable"||n.type==="readonly"||n.type==="default"||n.type==="prefault")return Wt(n.innerType,t);if(n.type==="intersection")return Wt(n.left,t)||Wt(n.right,t);if(n.type==="record"||n.type==="map")return Wt(n.keyType,t)||Wt(n.valueType,t);if(n.type==="pipe")return Wt(n.in,t)||Wt(n.out,t);if(n.type==="object"){for(const r in n.shape)if(Wt(n.shape[r],t))return!0;return!1}if(n.type==="union"){for(const r of n.options)if(Wt(r,t))return!0;return!1}if(n.type==="tuple"){for(const r of n.items)if(Wt(r,t))return!0;return!!(n.rest&&Wt(n.rest,t))}return!1}const sM=(i,e={})=>t=>{const n=Rd({...t,processors:e});return zt(i,n),Cd(n,i),Pd(n,i)},Eo=(i,e,t={})=>n=>{const{libraryOptions:r,target:s}=n??{},o=Rd({...r??{},target:s,io:e,processors:t});return zt(i,o),Cd(o,i),Pd(o,i)},oM={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},aM=(i,e,t,n)=>{const r=t;r.type="string";const{minimum:s,maximum:o,format:a,patterns:c,contentEncoding:l}=i._zod.bag;if(typeof s=="number"&&(r.minLength=s),typeof o=="number"&&(r.maxLength=o),a&&(r.format=oM[a]??a,r.format===""&&delete r.format,a==="time"&&delete r.format),l&&(r.contentEncoding=l),c&&c.size>0){const u=[...c];u.length===1?r.pattern=u[0].source:u.length>1&&(r.allOf=[...u.map(h=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:h.source}))])}},cM=(i,e,t,n)=>{const r=t,{minimum:s,maximum:o,format:a,multipleOf:c,exclusiveMaximum:l,exclusiveMinimum:u}=i._zod.bag;typeof a=="string"&&a.includes("int")?r.type="integer":r.type="number",typeof u=="number"&&(e.target==="draft-04"||e.target==="openapi-3.0"?(r.minimum=u,r.exclusiveMinimum=!0):r.exclusiveMinimum=u),typeof s=="number"&&(r.minimum=s,typeof u=="number"&&e.target!=="draft-04"&&(u>=s?delete r.minimum:delete r.exclusiveMinimum)),typeof l=="number"&&(e.target==="draft-04"||e.target==="openapi-3.0"?(r.maximum=l,r.exclusiveMaximum=!0):r.exclusiveMaximum=l),typeof o=="number"&&(r.maximum=o,typeof l=="number"&&e.target!=="draft-04"&&(l<=o?delete r.maximum:delete r.exclusiveMaximum)),typeof c=="number"&&(r.multipleOf=c)},lM=(i,e,t,n)=>{t.not={}},uM=(i,e,t,n)=>{},hM=(i,e,t,n)=>{const r=i._zod.def,s=cd(r.entries);s.every(o=>typeof o=="number")&&(t.type="number"),s.every(o=>typeof o=="string")&&(t.type="string"),t.enum=s},dM=(i,e,t,n)=>{if(e.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema")},fM=(i,e,t,n)=>{if(e.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema")},pM=(i,e,t,n)=>{const r=t,s=i._zod.def,{minimum:o,maximum:a}=i._zod.bag;typeof o=="number"&&(r.minItems=o),typeof a=="number"&&(r.maxItems=a),r.type="array",r.items=zt(s.element,e,{...n,path:[...n.path,"items"]})},mM=(i,e,t,n)=>{var l;const r=t,s=i._zod.def;r.type="object",r.properties={};const o=s.shape;for(const u in o)r.properties[u]=zt(o[u],e,{...n,path:[...n.path,"properties",u]});const a=new Set(Object.keys(o)),c=new Set([...a].filter(u=>{const h=s.shape[u]._zod;return e.io==="input"?h.optin===void 0:h.optout===void 0}));c.size>0&&(r.required=Array.from(c)),((l=s.catchall)==null?void 0:l._zod.def.type)==="never"?r.additionalProperties=!1:s.catchall?s.catchall&&(r.additionalProperties=zt(s.catchall,e,{...n,path:[...n.path,"additionalProperties"]})):e.io==="output"&&(r.additionalProperties=!1)},_M=(i,e,t,n)=>{const r=i._zod.def,s=r.inclusive===!1,o=r.options.map((a,c)=>zt(a,e,{...n,path:[...n.path,s?"oneOf":"anyOf",c]}));s?t.oneOf=o:t.anyOf=o},gM=(i,e,t,n)=>{const r=i._zod.def,s=zt(r.left,e,{...n,path:[...n.path,"allOf",0]}),o=zt(r.right,e,{...n,path:[...n.path,"allOf",1]}),a=l=>"allOf"in l&&Object.keys(l).length===1,c=[...a(s)?s.allOf:[s],...a(o)?o.allOf:[o]];t.allOf=c},vM=(i,e,t,n)=>{const r=i._zod.def,s=zt(r.innerType,e,n),o=e.seen.get(i);e.target==="openapi-3.0"?(o.ref=r.innerType,t.nullable=!0):t.anyOf=[s,{type:"null"}]},xM=(i,e,t,n)=>{const r=i._zod.def;zt(r.innerType,e,n);const s=e.seen.get(i);s.ref=r.innerType},SM=(i,e,t,n)=>{const r=i._zod.def;zt(r.innerType,e,n);const s=e.seen.get(i);s.ref=r.innerType,t.default=JSON.parse(JSON.stringify(r.defaultValue))},yM=(i,e,t,n)=>{const r=i._zod.def;zt(r.innerType,e,n);const s=e.seen.get(i);s.ref=r.innerType,e.io==="input"&&(t._prefault=JSON.parse(JSON.stringify(r.defaultValue)))},MM=(i,e,t,n)=>{const r=i._zod.def;zt(r.innerType,e,n);const s=e.seen.get(i);s.ref=r.innerType;let o;try{o=r.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}t.default=o},EM=(i,e,t,n)=>{const r=i._zod.def,s=e.io==="input"?r.in._zod.def.type==="transform"?r.out:r.in:r.out;zt(s,e,n);const o=e.seen.get(i);o.ref=s},bM=(i,e,t,n)=>{const r=i._zod.def;zt(r.innerType,e,n);const s=e.seen.get(i);s.ref=r.innerType,t.readOnly=!0},Ld=(i,e,t,n)=>{const r=i._zod.def;zt(r.innerType,e,n);const s=e.seen.get(i);s.ref=r.innerType},TM=q("ZodISODateTime",(i,e)=>{IS.init(i,e),pt.init(i,e)});function AM(i){return Ny(TM,i)}const wM=q("ZodISODate",(i,e)=>{OS.init(i,e),pt.init(i,e)});function RM(i){return Fy(wM,i)}const CM=q("ZodISOTime",(i,e)=>{US.init(i,e),pt.init(i,e)});function PM(i){return zy(CM,i)}const LM=q("ZodISODuration",(i,e)=>{NS.init(i,e),pt.init(i,e)});function DM(i){return ky(LM,i)}const IM=(i,e)=>{fd.init(i,e),i.name="ZodError",Object.defineProperties(i,{format:{value:t=>Ax(i,t)},flatten:{value:t=>Tx(i,t)},addIssue:{value:t=>{i.issues.push(t),i.message=JSON.stringify(i.issues,tc,2)}},addIssues:{value:t=>{i.issues.push(...t),i.message=JSON.stringify(i.issues,tc,2)}},isEmpty:{get(){return i.issues.length===0}}})},Tn=q("ZodError",IM,{Parent:Error}),OM=Pc(Tn),UM=Lc(Tn),NM=zo(Tn),FM=ko(Tn),zM=Cx(Tn),kM=Px(Tn),BM=Lx(Tn),GM=Dx(Tn),HM=Ix(Tn),VM=Ox(Tn),WM=Ux(Tn),XM=Nx(Tn),At=q("ZodType",(i,e)=>(Tt.init(i,e),Object.assign(i["~standard"],{jsonSchema:{input:Eo(i,"input"),output:Eo(i,"output")}}),i.toJSONSchema=sM(i,{}),i.def=e,i.type=e.type,Object.defineProperty(i,"_def",{value:e}),i.check=(...t)=>i.clone(Ei(e,{checks:[...e.checks??[],...t.map(n=>typeof n=="function"?{_zod:{check:n,def:{check:"custom"},onattach:[]}}:n)]}),{parent:!0}),i.with=i.check,i.clone=(t,n)=>bi(i,t,n),i.brand=()=>i,i.register=(t,n)=>(t.add(i,n),i),i.parse=(t,n)=>OM(i,t,n,{callee:i.parse}),i.safeParse=(t,n)=>NM(i,t,n),i.parseAsync=async(t,n)=>UM(i,t,n,{callee:i.parseAsync}),i.safeParseAsync=async(t,n)=>FM(i,t,n),i.spa=i.safeParseAsync,i.encode=(t,n)=>zM(i,t,n),i.decode=(t,n)=>kM(i,t,n),i.encodeAsync=async(t,n)=>BM(i,t,n),i.decodeAsync=async(t,n)=>GM(i,t,n),i.safeEncode=(t,n)=>HM(i,t,n),i.safeDecode=(t,n)=>VM(i,t,n),i.safeEncodeAsync=async(t,n)=>WM(i,t,n),i.safeDecodeAsync=async(t,n)=>XM(i,t,n),i.refine=(t,n)=>i.check(FE(t,n)),i.superRefine=t=>i.check(zE(t)),i.overwrite=t=>i.check(Zr(t)),i.optional=()=>rh(i),i.exactOptional=()=>bE(i),i.nullable=()=>sh(i),i.nullish=()=>rh(sh(i)),i.nonoptional=t=>PE(i,t),i.array=()=>ss(i),i.or=t=>gE([i,t]),i.and=t=>xE(i,t),i.transform=t=>oh(i,ME(t)),i.default=t=>wE(i,t),i.prefault=t=>CE(i,t),i.catch=t=>DE(i,t),i.pipe=t=>oh(i,t),i.readonly=()=>UE(i),i.describe=t=>{const n=i.clone();return rs.add(n,{description:t}),n},Object.defineProperty(i,"description",{get(){var t;return(t=rs.get(i))==null?void 0:t.description},configurable:!0}),i.meta=(...t)=>{if(t.length===0)return rs.get(i);const n=i.clone();return rs.add(n,t[0]),n},i.isOptional=()=>i.safeParse(void 0).success,i.isNullable=()=>i.safeParse(null).success,i.apply=t=>t(i),i)),Dd=q("_ZodString",(i,e)=>{Dc.init(i,e),At.init(i,e),i._zod.processJSONSchema=(n,r,s)=>aM(i,n,r);const t=i._zod.bag;i.format=t.format??null,i.minLength=t.minimum??null,i.maxLength=t.maximum??null,i.regex=(...n)=>i.check(Wy(...n)),i.includes=(...n)=>i.check(Zy(...n)),i.startsWith=(...n)=>i.check(Yy(...n)),i.endsWith=(...n)=>i.check(jy(...n)),i.min=(...n)=>i.check(Mo(...n)),i.max=(...n)=>i.check(Ad(...n)),i.length=(...n)=>i.check(wd(...n)),i.nonempty=(...n)=>i.check(Mo(1,...n)),i.lowercase=n=>i.check(Xy(n)),i.uppercase=n=>i.check($y(n)),i.trim=()=>i.check(Ky()),i.normalize=(...n)=>i.check(qy(...n)),i.toLowerCase=()=>i.check(Jy()),i.toUpperCase=()=>i.check(Qy()),i.slugify=()=>i.check(eM())}),$M=q("ZodString",(i,e)=>{Dc.init(i,e),Dd.init(i,e),i.email=t=>i.check(my(ZM,t)),i.url=t=>i.check(Sy(YM,t)),i.jwt=t=>i.check(Uy(lE,t)),i.emoji=t=>i.check(yy(jM,t)),i.guid=t=>i.check(Ku(th,t)),i.uuid=t=>i.check(_y(ao,t)),i.uuidv4=t=>i.check(gy(ao,t)),i.uuidv6=t=>i.check(vy(ao,t)),i.uuidv7=t=>i.check(xy(ao,t)),i.nanoid=t=>i.check(My(qM,t)),i.guid=t=>i.check(Ku(th,t)),i.cuid=t=>i.check(Ey(KM,t)),i.cuid2=t=>i.check(by(JM,t)),i.ulid=t=>i.check(Ty(QM,t)),i.base64=t=>i.check(Dy(oE,t)),i.base64url=t=>i.check(Iy(aE,t)),i.xid=t=>i.check(Ay(eE,t)),i.ksuid=t=>i.check(wy(tE,t)),i.ipv4=t=>i.check(Ry(nE,t)),i.ipv6=t=>i.check(Cy(iE,t)),i.cidrv4=t=>i.check(Py(rE,t)),i.cidrv6=t=>i.check(Ly(sE,t)),i.e164=t=>i.check(Oy(cE,t)),i.datetime=t=>i.check(AM(t)),i.date=t=>i.check(RM(t)),i.time=t=>i.check(PM(t)),i.duration=t=>i.check(DM(t))});function Da(i){return py($M,i)}const pt=q("ZodStringFormat",(i,e)=>{lt.init(i,e),Dd.init(i,e)}),ZM=q("ZodEmail",(i,e)=>{bS.init(i,e),pt.init(i,e)}),th=q("ZodGUID",(i,e)=>{MS.init(i,e),pt.init(i,e)}),ao=q("ZodUUID",(i,e)=>{ES.init(i,e),pt.init(i,e)}),YM=q("ZodURL",(i,e)=>{TS.init(i,e),pt.init(i,e)}),jM=q("ZodEmoji",(i,e)=>{AS.init(i,e),pt.init(i,e)}),qM=q("ZodNanoID",(i,e)=>{wS.init(i,e),pt.init(i,e)}),KM=q("ZodCUID",(i,e)=>{RS.init(i,e),pt.init(i,e)}),JM=q("ZodCUID2",(i,e)=>{CS.init(i,e),pt.init(i,e)}),QM=q("ZodULID",(i,e)=>{PS.init(i,e),pt.init(i,e)}),eE=q("ZodXID",(i,e)=>{LS.init(i,e),pt.init(i,e)}),tE=q("ZodKSUID",(i,e)=>{DS.init(i,e),pt.init(i,e)}),nE=q("ZodIPv4",(i,e)=>{FS.init(i,e),pt.init(i,e)}),iE=q("ZodIPv6",(i,e)=>{zS.init(i,e),pt.init(i,e)}),rE=q("ZodCIDRv4",(i,e)=>{kS.init(i,e),pt.init(i,e)}),sE=q("ZodCIDRv6",(i,e)=>{BS.init(i,e),pt.init(i,e)}),oE=q("ZodBase64",(i,e)=>{GS.init(i,e),pt.init(i,e)}),aE=q("ZodBase64URL",(i,e)=>{VS.init(i,e),pt.init(i,e)}),cE=q("ZodE164",(i,e)=>{WS.init(i,e),pt.init(i,e)}),lE=q("ZodJWT",(i,e)=>{$S.init(i,e),pt.init(i,e)}),Id=q("ZodNumber",(i,e)=>{Md.init(i,e),At.init(i,e),i._zod.processJSONSchema=(n,r,s)=>cM(i,n,r),i.gt=(n,r)=>i.check(Qu(n,r)),i.gte=(n,r)=>i.check(La(n,r)),i.min=(n,r)=>i.check(La(n,r)),i.lt=(n,r)=>i.check(Ju(n,r)),i.lte=(n,r)=>i.check(Pa(n,r)),i.max=(n,r)=>i.check(Pa(n,r)),i.int=n=>i.check(nh(n)),i.safe=n=>i.check(nh(n)),i.positive=n=>i.check(Qu(0,n)),i.nonnegative=n=>i.check(La(0,n)),i.negative=n=>i.check(Ju(0,n)),i.nonpositive=n=>i.check(Pa(0,n)),i.multipleOf=(n,r)=>i.check(eh(n,r)),i.step=(n,r)=>i.check(eh(n,r)),i.finite=()=>i;const t=i._zod.bag;i.minValue=Math.max(t.minimum??Number.NEGATIVE_INFINITY,t.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,i.maxValue=Math.min(t.maximum??Number.POSITIVE_INFINITY,t.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,i.isInt=(t.format??"").includes("int")||Number.isSafeInteger(t.multipleOf??.5),i.isFinite=!0,i.format=t.format??null});function Ia(i){return By(Id,i)}const uE=q("ZodNumberFormat",(i,e)=>{ZS.init(i,e),Id.init(i,e)});function nh(i){return Gy(uE,i)}const hE=q("ZodUnknown",(i,e)=>{YS.init(i,e),At.init(i,e),i._zod.processJSONSchema=(t,n,r)=>uM()});function ih(){return Hy(hE)}const dE=q("ZodNever",(i,e)=>{jS.init(i,e),At.init(i,e),i._zod.processJSONSchema=(t,n,r)=>lM(i,t,n)});function fE(i){return Vy(dE,i)}const pE=q("ZodArray",(i,e)=>{qS.init(i,e),At.init(i,e),i._zod.processJSONSchema=(t,n,r)=>pM(i,t,n,r),i.element=e.element,i.min=(t,n)=>i.check(Mo(t,n)),i.nonempty=t=>i.check(Mo(1,t)),i.max=(t,n)=>i.check(Ad(t,n)),i.length=(t,n)=>i.check(wd(t,n)),i.unwrap=()=>i.element});function ss(i,e){return tM(pE,i,e)}const mE=q("ZodObject",(i,e)=>{JS.init(i,e),At.init(i,e),i._zod.processJSONSchema=(t,n,r)=>mM(i,t,n,r),tt(i,"shape",()=>e.shape),i.keyof=()=>SE(Object.keys(i._zod.def.shape)),i.catchall=t=>i.clone({...i._zod.def,catchall:t}),i.passthrough=()=>i.clone({...i._zod.def,catchall:ih()}),i.loose=()=>i.clone({...i._zod.def,catchall:ih()}),i.strict=()=>i.clone({...i._zod.def,catchall:fE()}),i.strip=()=>i.clone({...i._zod.def,catchall:void 0}),i.extend=t=>Sx(i,t),i.safeExtend=t=>yx(i,t),i.merge=t=>Mx(i,t),i.pick=t=>vx(i,t),i.omit=t=>xx(i,t),i.partial=(...t)=>Ex(Od,i,t[0]),i.required=(...t)=>bx(Ud,i,t[0])});function Oa(i,e){const t={type:"object",shape:i??{},...Te(e)};return new mE(t)}const _E=q("ZodUnion",(i,e)=>{QS.init(i,e),At.init(i,e),i._zod.processJSONSchema=(t,n,r)=>_M(i,t,n,r),i.options=e.options});function gE(i,e){return new _E({type:"union",options:i,...Te(e)})}const vE=q("ZodIntersection",(i,e)=>{ey.init(i,e),At.init(i,e),i._zod.processJSONSchema=(t,n,r)=>gM(i,t,n,r)});function xE(i,e){return new vE({type:"intersection",left:i,right:e})}const ic=q("ZodEnum",(i,e)=>{ty.init(i,e),At.init(i,e),i._zod.processJSONSchema=(n,r,s)=>hM(i,n,r),i.enum=e.entries,i.options=Object.values(e.entries);const t=new Set(Object.keys(e.entries));i.extract=(n,r)=>{const s={};for(const o of n)if(t.has(o))s[o]=e.entries[o];else throw new Error(`Key ${o} not found in enum`);return new ic({...e,checks:[],...Te(r),entries:s})},i.exclude=(n,r)=>{const s={...e.entries};for(const o of n)if(t.has(o))delete s[o];else throw new Error(`Key ${o} not found in enum`);return new ic({...e,checks:[],...Te(r),entries:s})}});function SE(i,e){const t=Array.isArray(i)?Object.fromEntries(i.map(n=>[n,n])):i;return new ic({type:"enum",entries:t,...Te(e)})}const yE=q("ZodTransform",(i,e)=>{ny.init(i,e),At.init(i,e),i._zod.processJSONSchema=(t,n,r)=>fM(i,t),i._zod.parse=(t,n)=>{if(n.direction==="backward")throw new od(i.constructor.name);t.addIssue=s=>{if(typeof s=="string")t.issues.push(_s(s,t.value,e));else{const o=s;o.fatal&&(o.continue=!1),o.code??(o.code="custom"),o.input??(o.input=t.value),o.inst??(o.inst=i),t.issues.push(_s(o))}};const r=e.transform(t.value,t);return r instanceof Promise?r.then(s=>(t.value=s,t)):(t.value=r,t)}});function ME(i){return new yE({type:"transform",transform:i})}const Od=q("ZodOptional",(i,e)=>{Td.init(i,e),At.init(i,e),i._zod.processJSONSchema=(t,n,r)=>Ld(i,t,n,r),i.unwrap=()=>i._zod.def.innerType});function rh(i){return new Od({type:"optional",innerType:i})}const EE=q("ZodExactOptional",(i,e)=>{iy.init(i,e),At.init(i,e),i._zod.processJSONSchema=(t,n,r)=>Ld(i,t,n,r),i.unwrap=()=>i._zod.def.innerType});function bE(i){return new EE({type:"optional",innerType:i})}const TE=q("ZodNullable",(i,e)=>{ry.init(i,e),At.init(i,e),i._zod.processJSONSchema=(t,n,r)=>vM(i,t,n,r),i.unwrap=()=>i._zod.def.innerType});function sh(i){return new TE({type:"nullable",innerType:i})}const AE=q("ZodDefault",(i,e)=>{sy.init(i,e),At.init(i,e),i._zod.processJSONSchema=(t,n,r)=>SM(i,t,n,r),i.unwrap=()=>i._zod.def.innerType,i.removeDefault=i.unwrap});function wE(i,e){return new AE({type:"default",innerType:i,get defaultValue(){return typeof e=="function"?e():ud(e)}})}const RE=q("ZodPrefault",(i,e)=>{oy.init(i,e),At.init(i,e),i._zod.processJSONSchema=(t,n,r)=>yM(i,t,n,r),i.unwrap=()=>i._zod.def.innerType});function CE(i,e){return new RE({type:"prefault",innerType:i,get defaultValue(){return typeof e=="function"?e():ud(e)}})}const Ud=q("ZodNonOptional",(i,e)=>{ay.init(i,e),At.init(i,e),i._zod.processJSONSchema=(t,n,r)=>xM(i,t,n,r),i.unwrap=()=>i._zod.def.innerType});function PE(i,e){return new Ud({type:"nonoptional",innerType:i,...Te(e)})}const LE=q("ZodCatch",(i,e)=>{cy.init(i,e),At.init(i,e),i._zod.processJSONSchema=(t,n,r)=>MM(i,t,n,r),i.unwrap=()=>i._zod.def.innerType,i.removeCatch=i.unwrap});function DE(i,e){return new LE({type:"catch",innerType:i,catchValue:typeof e=="function"?e:()=>e})}const IE=q("ZodPipe",(i,e)=>{ly.init(i,e),At.init(i,e),i._zod.processJSONSchema=(t,n,r)=>EM(i,t,n,r),i.in=e.in,i.out=e.out});function oh(i,e){return new IE({type:"pipe",in:i,out:e})}const OE=q("ZodReadonly",(i,e)=>{uy.init(i,e),At.init(i,e),i._zod.processJSONSchema=(t,n,r)=>bM(i,t,n,r),i.unwrap=()=>i._zod.def.innerType});function UE(i){return new OE({type:"readonly",innerType:i})}const NE=q("ZodCustom",(i,e)=>{hy.init(i,e),At.init(i,e),i._zod.processJSONSchema=(t,n,r)=>dM(i,t)});function FE(i,e={}){return nM(NE,i,e)}function zE(i){return iM(i)}class kE{constructor(e){j(this,"scene");j(this,"meshes");j(this,"capacity",1e4);j(this,"dummy",new It);j(this,"instanceCounts",new Map);j(this,"positionToIndex",new Map);this.scene=e,this.meshes=new Map,this.initMeshes()}initMeshes(){const e=new On(ge.VOXEL_SIZE,ge.VOXEL_SIZE,ge.VOXEL_SIZE);Object.values(P).forEach(t=>{if(typeof t=="number"){const n=t,r=this.getMaterial(n),s=new Qv(e,r,this.capacity);s.instanceMatrix.setUsage(Hp),s.count=0,s.castShadow=!0,s.receiveShadow=!0,this.scene.add(s),this.meshes.set(n,s),this.instanceCounts.set(n,0),this.positionToIndex.set(n,new Map)}})}getMaterial(e){let t=8947848;switch(e){case P.SOLID:t=9127187;break;case P.PLATFORM:t=14743546;break;case P.LADDER:t=13789470;break;case P.TRAP:t=16711680;break;case P.KEY:t=16766720;break;case P.DOOR:t=65280;break;case P.SPAWN:t=16771899;break;case P.GOAL:t=10233776;break}return new Tc({color:t})}getKey(e,t,n){return`${e},${t},${n}`}addVoxel(e,t,n,r){const s=this.meshes.get(r);if(!s)return;const o=this.instanceCounts.get(r);if(o>=this.capacity){console.warn(`Voxel capacity reached for type ${r}`);return}this.dummy.position.set(e,t,n),this.dummy.updateMatrix(),s.setMatrixAt(o,this.dummy.matrix),this.positionToIndex.get(r).set(this.getKey(e,t,n),o),this.instanceCounts.set(r,o+1),s.count=o+1,s.instanceMatrix.needsUpdate=!0}removeVoxel(e,t,n,r){const s=this.meshes.get(r),o=this.positionToIndex.get(r);if(!s||!o)return;const a=this.getKey(e,t,n),c=o.get(a);if(c===void 0)return;const l=this.instanceCounts.get(r),u=l-1;if(c!==u){const h=new st;s.getMatrixAt(u,h),s.setMatrixAt(c,h);const d=new I;d.setFromMatrixPosition(h);const m=this.getKey(Math.round(d.x),Math.round(d.y),Math.round(d.z));o.set(m,c)}o.delete(a),this.instanceCounts.set(r,l-1),s.count=l-1,s.instanceMatrix.needsUpdate=!0}clear(){this.meshes.forEach((e,t)=>{e.count=0,e.instanceMatrix.needsUpdate=!0,this.instanceCounts.set(t,0),this.positionToIndex.get(t).clear()})}getMeshes(){return Array.from(this.meshes.values())}}const BE=Oa({meta:Oa({version:Da(),author:Da(),created_at:Da()}),level_data:Oa({grid_size:ss(Ia()).min(3).max(3),spawn_point:ss(Ia()).min(3).max(3),blocks:ss(ss(Ia()).min(4).max(4))})});class GE{constructor(e){j(this,"voxels");j(this,"spawnPoint",null);j(this,"history",[]);j(this,"renderer");this.voxels=new Map,this.renderer=new kE(e)}getKey(e,t,n){return`${e},${t},${n}`}addVoxel(e,t,n,r,s=!0){const o=this.getKey(e,t,n),a=ge.GRID_SIZE/2;if(Math.abs(e)>a||Math.abs(t)>a||Math.abs(n)>a)return console.warn(`Position ${e},${t},${n} is out of bounds`),!1;if(this.voxels.has(o)){if(this.voxels.get(o).userData.type===r)return!1;this.removeVoxel(e,t,n,s)}r===P.SPAWN&&(this.spawnPoint&&this.removeVoxel(this.spawnPoint.x,this.spawnPoint.y,this.spawnPoint.z,s),this.spawnPoint=new I(e,t,n));const c=new I(e,t,n),l=new hx(c,r);return this.renderer.addVoxel(e,t,n,r),this.voxels.set(o,l),s&&this.history.push({type:"add",x:e,y:t,z:n,voxelType:r}),!0}removeVoxel(e,t,n,r=!0){const s=this.getKey(e,t,n),o=this.voxels.get(s);if(!o)return!1;const a=o.userData.type;return a===P.SPAWN&&(this.spawnPoint=null),this.renderer.removeVoxel(e,t,n,a),this.voxels.delete(s),r&&this.history.push({type:"remove",x:e,y:t,z:n,voxelType:a}),!0}removeVoxelAt(e,t=!1){return this.removeVoxel(Math.round(e.x),Math.round(e.y),Math.round(e.z),t)}undo(){if(this.history.length===0){console.log("Nothing to undo");return}const e=this.history.pop();e.type==="add"?this.removeVoxel(e.x,e.y,e.z,!1):this.addVoxel(e.x,e.y,e.z,e.voxelType,!1)}clear(){this.renderer.clear(),this.voxels.clear(),this.spawnPoint=null,this.history=[]}getMeshes(){return this.renderer.getMeshes()}serialize(){const e=[];this.voxels.forEach(n=>{e.push([n.position.x,n.position.y,n.position.z,n.userData.type])});const t={meta:{version:"1.1",author:"User",created_at:new Date().toISOString()},level_data:{grid_size:[ge.GRID_SIZE,ge.GRID_SIZE,ge.GRID_SIZE],spawn_point:this.spawnPoint?[this.spawnPoint.x,this.spawnPoint.y,this.spawnPoint.z]:[0,5,0],blocks:e}};return JSON.stringify(t,null,2)}deserialize(e){try{const t=JSON.parse(e),n=BE.parse(t);return this.clear(),n.level_data.blocks.forEach(([r,s,o,a])=>{this.addVoxel(r,s,o,a,!1)}),console.log(`Level loaded with ${this.voxels.size} blocks.`),!0}catch(t){return console.error("Failed to load level:",t),!1}}loadPreset(e){const t=Ca[e];return t?(this.clear(),console.log(`Loading preset: ${t.name}`),t.blocks.forEach(([n,r,s,o])=>{this.addVoxel(n,r,s,o,!1)}),!0):(console.error(`Preset '${e}' not found.`),!1)}getPresetList(){return Object.keys(Ca).map(e=>({key:e,name:Ca[e].name}))}getAllVoxels(){return Array.from(this.voxels.values())}getSpawnPoint(){return this.spawnPoint?this.spawnPoint.clone():null}saveToLocalStorage(e){const t=this.serialize();localStorage.setItem(`ortho_level_${e}`,t),console.log(`Level '${e}' saved to Local Storage.`)}loadFromLocalStorage(e){const t=localStorage.getItem(`ortho_level_${e}`);return t?this.deserialize(t):(console.error(`Level '${e}' not found in Local Storage.`),!1)}listSavedLevels(){const e=[];for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t);n&&n.startsWith("ortho_level_")&&e.push(n.replace("ortho_level_",""))}return e}}const zi=class zi{constructor(){j(this,"listeners",new Map)}static getInstance(){return zi.instance||(zi.instance=new zi),zi.instance}on(e,t){this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(t)}off(e,t){if(!this.listeners.has(e))return;const n=this.listeners.get(e),r=n.indexOf(t);r!==-1&&n.splice(r,1)}emit(e,t){if(!this.listeners.has(e))return;this.listeners.get(e).forEach(r=>{try{r(t)}catch(s){console.error(`Error in event handler for ${e}:`,s)}})}};j(zi,"instance");let Ji=zi;var cn=(i=>(i[i.EDIT=0]="EDIT",i[i.PLAY=1]="PLAY",i))(cn||{}),St=(i=>(i[i.FRONT=0]="FRONT",i[i.RIGHT=1]="RIGHT",i[i.BACK=2]="BACK",i[i.LEFT=3]="LEFT",i))(St||{}),Je=(i=>(i.INPUT_ROTATE="input_rotate",i.INPUT_MOVE="input_move",i.INPUT_ACTION="input_action",i.GAME_MODE_CHANGED="game_mode_changed",i.SCORE_UPDATED="score_updated",i.GOAL_REACHED="goal_reached",i.CAMERA_ROTATED="camera_rotated",i.KEY_COLLECTED="key_collected",i.PLAYER_DIED="player_died",i.LEVEL_COMPLETE="level_complete",i.PRESET_LOADED="preset_loaded",i))(Je||{});class HE{constructor(e,t){j(this,"engine");j(this,"levelManager");j(this,"eventManager");j(this,"raycaster");j(this,"mouse");j(this,"ghostMesh");j(this,"highlightBox");j(this,"currentType",P.SOLID);j(this,"isEraserMode",!1);j(this,"isCursorMode",!0);j(this,"isAltDown",!1);j(this,"isSpaceDown",!1);j(this,"enabled",!0);j(this,"buildHeight",ge.EDITOR.DEFAULT_BUILD_HEIGHT);j(this,"gridPlane");j(this,"gridPlaneMesh");j(this,"showGridPlane",!0);j(this,"smartSnapEnabled",!0);j(this,"isMouseDown",!1);j(this,"isDragging",!1);j(this,"lastPlacedPosition",null);j(this,"placedBlocksThisDrag",new Set);j(this,"onBuildHeightChanged",null);j(this,"onBrushChanged",null);this.engine=e,this.levelManager=t,this.eventManager=Ji.getInstance(),this.raycaster=new rd,this.mouse=new Fe,this.eventManager.on(Je.GAME_MODE_CHANGED,o=>{this.setEnabled(o===cn.EDIT)});const n=new On(ge.VOXEL_SIZE,ge.VOXEL_SIZE,ge.VOXEL_SIZE),r=new Nr({color:5025616,transparent:!0,opacity:.5,depthTest:!1});this.ghostMesh=new Lt(n,r),this.engine.getScene().add(this.ghostMesh);const s=new nd(n);this.highlightBox=new No(s,new As({color:16711680,linewidth:2})),this.highlightBox.visible=!1,this.engine.getScene().add(this.highlightBox),this.setupGridPlane(),this.setupInputs(),this.engine.getControls().enabled=!0}setupGridPlane(){const e=ge.EDITOR.GRID_PLANE_SIZE;this.gridPlane=new sd(e,e,8947848,4473924),this.gridPlane.position.y=this.buildHeight,this.engine.getScene().add(this.gridPlane);const t=new Ts(e,e),n=new Nr({color:4491519,transparent:!0,opacity:ge.EDITOR.GRID_PLANE_OPACITY,side:Pn,depthWrite:!1});this.gridPlaneMesh=new Lt(t,n),this.gridPlaneMesh.rotation.x=Math.PI/2,this.gridPlaneMesh.position.y=this.buildHeight,this.engine.getScene().add(this.gridPlaneMesh),this.updateGridPlaneVisibility()}updateGridPlane(){this.gridPlane.position.y=this.buildHeight,this.gridPlaneMesh.position.y=this.buildHeight;const e=ge.EDITOR.GRID_PLANE_OPACITY,t=Math.min(1,this.buildHeight/10),n=e+t*.1;this.gridPlaneMesh.material.opacity=n,this.onBuildHeightChanged&&this.onBuildHeightChanged(this.buildHeight)}updateGridPlaneVisibility(){const e=this.enabled&&!this.isCursorMode&&this.showGridPlane;this.gridPlane.visible=e,this.gridPlaneMesh.visible=e}setBuildHeight(e){this.buildHeight=Math.max(ge.EDITOR.MIN_BUILD_HEIGHT,Math.min(ge.EDITOR.MAX_BUILD_HEIGHT,e)),this.updateGridPlane()}getBuildHeight(){return this.buildHeight}toggleGridPlane(){this.showGridPlane=!this.showGridPlane,this.updateGridPlaneVisibility()}toggleSmartSnap(){this.smartSnapEnabled=!this.smartSnapEnabled}setEnabled(e){this.enabled=e,this.updateVisuals(),this.updateGridPlaneVisibility(),e||(this.engine.getControls().enabled=!1)}updateVisuals(){const e=this.enabled&&!this.isCursorMode&&!this.isSpaceDown;this.ghostMesh.visible=e,this.highlightBox.visible=e&&this.highlightBox.visible,this.isSpaceDown&&this.enabled?document.body.style.cursor="grab":document.body.style.cursor="default"}setupInputs(){window.addEventListener("mousemove",this.onMouseMove.bind(this)),window.addEventListener("mousedown",this.onMouseDown.bind(this)),window.addEventListener("mouseup",this.onMouseUp.bind(this)),window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this)),window.addEventListener("contextmenu",e=>e.preventDefault())}onMouseMove(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1}onKeyDown(e){if(this.enabled){if(e.code==="Space"){this.isSpaceDown=!0,this.engine.getControls().enabled=!0,this.updateVisuals();return}if(e.key==="Alt"&&(this.isAltDown=!0),e.key==="PageUp"){this.setBuildHeight(this.buildHeight+1),e.preventDefault();return}if(e.key==="PageDown"){this.setBuildHeight(this.buildHeight-1),e.preventDefault();return}if(e.shiftKey&&e.key>="0"&&e.key<="9"){this.setBuildHeight(parseInt(e.key));return}switch(e.key){case"1":this.setCursorMode();break;case"2":this.setBrush(P.SOLID);break;case"3":this.setBrush(P.PLATFORM);break;case"4":this.setBrush(P.LADDER);break;case"5":this.setBrush(P.TRAP);break;case"6":this.setBrush(P.KEY);break;case"7":this.setBrush(P.DOOR);break;case"8":this.setBrush(P.SPAWN);break;case"9":this.setBrush(P.GOAL);break;case"0":this.setEraser();break;case"z":(e.ctrlKey||e.metaKey)&&this.levelManager.undo();break;case"g":case"G":this.toggleGridPlane();break;case"p":case"P":console.log(this.levelManager.serialize());break}}}onKeyUp(e){e.code==="Space"&&(this.isSpaceDown=!1,this.enabled&&(this.engine.getControls().enabled=!1),this.updateVisuals()),e.key==="Alt"&&(this.isAltDown=!1)}setCursorMode(){this.isCursorMode=!0,this.isEraserMode=!1,this.resetDragState(),this.engine.getControls().enabled=!0,this.updateGhostColor(),this.updateVisuals(),this.updateGridPlaneVisibility(),this.onBrushChanged&&this.onBrushChanged(1),console.log("Cursor Mode Active")}setBrush(e){this.currentType=e,this.isEraserMode=!1,this.isCursorMode=!1,this.resetDragState(),this.engine.getControls().enabled=!1,this.updateGhostColor(),this.updateVisuals(),this.updateGridPlaneVisibility(),this.onBrushChanged&&this.onBrushChanged(e),console.log(`Brush set to: ${P[e]}`)}setEraser(){this.isEraserMode=!0,this.isCursorMode=!1,this.resetDragState(),this.engine.getControls().enabled=!1,this.updateVisuals(),this.updateGridPlaneVisibility(),this.onBrushChanged&&this.onBrushChanged(0),console.log("Eraser Mode Active")}resetDragState(){this.isMouseDown=!1,this.isDragging=!1,this.placedBlocksThisDrag.clear(),this.lastPlacedPosition=null}resetEditorState(){this.resetDragState(),this.setCursorMode()}updateGhostColor(){const e=this.ghostMesh.material;if(this.isCursorMode)e.color.setHex(11184810);else switch(this.currentType){case P.SOLID:e.color.setHex(9127187);break;case P.PLATFORM:e.color.setHex(14743546);break;case P.LADDER:e.color.setHex(13789470);break;case P.TRAP:e.color.setHex(16711680);break;case P.KEY:e.color.setHex(16766720);break;case P.DOOR:e.color.setHex(65280);break;case P.SPAWN:e.color.setHex(16771899);break;case P.GOAL:e.color.setHex(10233776);break;default:e.color.setHex(11184810);break}}onMouseDown(e){if(this.enabled){if(e.button===2){this.levelManager.undo();return}e.button===0&&(this.isCursorMode||this.isSpaceDown||(this.isMouseDown=!0,this.isDragging=!1,this.placedBlocksThisDrag.clear(),this.lastPlacedPosition=null,this.placeOrRemoveBlock()))}}onMouseUp(e){e.button===0&&(this.isMouseDown=!1,this.isDragging=!1,this.placedBlocksThisDrag.clear(),this.lastPlacedPosition=null)}placeOrRemoveBlock(){const e=this.getIntersection(),t=this.isEraserMode||this.isAltDown;if(e)if(t){const n=e.object;if(n.isInstancedMesh&&e.instanceId!==void 0){const r=new st;n.getMatrixAt(e.instanceId,r);const s=new I().setFromMatrixPosition(r),o=Math.round(s.y);if(o===this.buildHeight){const a=`${Math.round(s.x)},${o},${Math.round(s.z)}`;this.placedBlocksThisDrag.has(a)||(this.levelManager.removeVoxel(Math.round(s.x),Math.round(s.y),Math.round(s.z)),this.placedBlocksThisDrag.add(a),this.lastPlacedPosition=new I(Math.round(s.x),o,Math.round(s.z)))}}}else{if(!e.face)return;const n=e.point,r=Math.round(n.x),s=this.buildHeight,o=Math.round(n.z);if(!this.isWithinWorldBounds(r,s,o))return;const a=`${r},${s},${o}`;this.placedBlocksThisDrag.has(a)||(this.levelManager.addVoxel(r,s,o,this.currentType),this.placedBlocksThisDrag.add(a),this.lastPlacedPosition=new I(r,s,o),this.isDragging=!0)}else if(!t){const n=new kn(new I(0,1,0),-this.buildHeight),r=new I;if(this.raycaster.ray.intersectPlane(n,r)){const o=Math.round(r.x),a=this.buildHeight,c=Math.round(r.z);if(!this.isWithinWorldBounds(o,a,c))return;const l=`${o},${a},${c}`;this.placedBlocksThisDrag.has(l)||(this.levelManager.addVoxel(o,a,c,this.currentType),this.placedBlocksThisDrag.add(l),this.lastPlacedPosition=new I(o,a,c),this.isDragging=!0)}}}getIntersection(){this.raycaster.setFromCamera(this.mouse,this.engine.getCamera());const e=this.levelManager.getMeshes(),t=this.raycaster.intersectObjects(e,!1);return t.length>0?t[0]:null}update(){if(!this.enabled||this.isSpaceDown||this.isCursorMode)return;this.isMouseDown&&!this.isSpaceDown&&this.placeOrRemoveBlock();const e=this.engine.getInputManager(),t=e.getMousePosition();this.mouse.set(t.x,t.y),this.isAltDown=e.isKeyPressed("Alt");const n=this.getIntersection(),r=this.isEraserMode||this.isAltDown;if(n&&n.face)if(r){const s=n.object;if(s.isInstancedMesh&&n.instanceId!==void 0){const o=new st;s.getMatrixAt(n.instanceId,o);const a=new I().setFromMatrixPosition(o);Math.round(a.y)===this.buildHeight?(this.ghostMesh.visible=!1,this.highlightBox.visible=!0,this.highlightBox.position.copy(a)):(this.ghostMesh.visible=!1,this.highlightBox.visible=!1)}else this.ghostMesh.visible=!1,this.highlightBox.visible=!1}else{this.ghostMesh.visible=!0,this.highlightBox.visible=!1;const s=n.point.clone(),o=new I(Math.round(s.x),this.buildHeight,Math.round(s.z));this.ghostMesh.position.copy(o);const a=this.isPositionValid(o);this.updateGhostValidation(a)}else this.handleGridIntersection(r)}handleGridIntersection(e){if(e){this.ghostMesh.visible=!1,this.highlightBox.visible=!1;return}const t=new kn(new I(0,1,0),-this.buildHeight),n=new I;if(this.raycaster.ray.intersectPlane(t,n)){this.ghostMesh.visible=!0,this.highlightBox.visible=!1;const s=new I(Math.round(n.x),this.buildHeight,Math.round(n.z));this.ghostMesh.position.copy(s);const o=this.isPositionValid(s);this.updateGhostValidation(o)}else this.ghostMesh.visible=!1}isWithinWorldBounds(e,t,n){return e>=ge.WORLD.MIN_X&&e<=ge.WORLD.MAX_X&&t>=ge.WORLD.MIN_Y&&t<=ge.WORLD.MAX_Y&&n>=ge.WORLD.MIN_Z&&n<=ge.WORLD.MAX_Z}isPositionValid(e){if(!this.isWithinWorldBounds(e.x,e.y,e.z))return!1;const t=this.levelManager.getAllVoxels();for(const n of t){const r=n.position;if(Math.abs(r.x-e.x)<.1&&Math.abs(r.y-e.y)<.1&&Math.abs(r.z-e.z)<.1)return!1}return!0}updateGhostValidation(e){const t=this.ghostMesh.material;e?t.color.setHex(ge.EDITOR.GHOST_VALID_COLOR):t.color.setHex(ge.EDITOR.GHOST_INVALID_COLOR)}}class VE{constructor(e,t,n,r){j(this,"editorSystem");j(this,"levelManager");j(this,"engine");j(this,"container");j(this,"compassArrow",null);j(this,"eventManager");j(this,"onRotateLeft",null);j(this,"onRotateRight",null);j(this,"onInput",null);this.editorSystem=t,this.levelManager=n,this.engine=r,this.container=document.getElementById(e),this.eventManager=Ji.getInstance(),this.render(),this.attachEvents(),this.updateLevelList(),this.updatePresetList(),this.container.classList.add("edit-mode"),this.eventManager.on(Je.SCORE_UPDATED,s=>this.updateScore(s)),this.eventManager.on(Je.GOAL_REACHED,()=>this.showNotification("Goal Reached! +100 Points")),this.eventManager.on(Je.GAME_MODE_CHANGED,s=>this.setGameMode(s)),this.eventManager.on(Je.CAMERA_ROTATED,s=>this.updateCompass(s)),this.eventManager.on(Je.KEY_COLLECTED,s=>this.updateKeyCounter(s.collected,s.required)),this.eventManager.on(Je.PLAYER_DIED,()=>this.showNotification("💀 Ouch! -5 Points",2e3)),this.eventManager.on(Je.LEVEL_COMPLETE,s=>this.showLevelComplete(s))}setGameMode(e){e===cn.PLAY?(this.container.classList.remove("edit-mode"),this.container.classList.add("play-mode")):(this.container.classList.remove("play-mode"),this.container.classList.add("edit-mode"))}updateCompass(e){if(this.compassArrow){const t=e*(180/Math.PI);this.compassArrow.style.transform=`rotate(${t}deg)`}}showNotification(e,t=3e3){let n=document.getElementById("game-notification");n||(n=document.createElement("div"),n.id="game-notification",document.body.appendChild(n)),n.textContent=e,n.classList.add("show"),setTimeout(()=>{n==null||n.classList.remove("show")},t)}render(){this.container.innerHTML=`
      <div class="toolbar top-bar">
        <div class="save-load-container">
           <input type="text" id="level-name-input" placeholder="Level Name" />
           <button id="btn-save-local">Save</button>
           <select id="level-select"></select>
           <button id="btn-load-local">Load</button>
        </div>
        <div style="width: 10px;"></div>
        <div class="save-load-container">
           <select id="preset-select">
             <option value="" disabled selected>Load Preset...</option>
           </select>
        </div>
        <div style="width: 20px;"></div>
        <button id="btn-undo">Undo</button>
        <button id="btn-clear">Clear</button>
        <button id="btn-export">Export JSON</button>
      </div>
      
      <div id="build-height-panel" class="build-height-panel">
        <div class="build-height-label">Build Height: Y = <span id="build-height-value">0</span></div>
        <div class="build-height-controls">
          <button id="btn-height-up" class="height-btn" title="PageUp">▲</button>
          <button id="btn-height-down" class="height-btn" title="PageDown">▼</button>
          <button id="btn-height-reset" class="height-btn" title="Reset to 0">0</button>
        </div>
        <div class="build-height-hint">
          PageUp/Down or Shift+0-9
        </div>
        <div class="build-height-toggles">
          <label><input type="checkbox" id="toggle-grid" checked> Show Grid</label>
          <label><input type="checkbox" id="toggle-snap" checked> Smart Snap</label>
        </div>
        <div class="editor-tip">
          💡 Hold & drag mouse to place multiple blocks
        </div>
      </div>
      
      <div id="camera-control-panel" class="camera-control-panel">
        <div class="panel-title">Camera View</div>
        <div class="camera-view-grid">
          <button id="btn-view-iso" class="view-btn" title="Isometric (Default)">Iso</button>
          <button id="btn-view-top" class="view-btn" title="Top Down">Top</button>
          <button id="btn-view-front" class="view-btn" title="Front View">Front</button>
          <button id="btn-view-side" class="view-btn" title="Side View">Side</button>
        </div>
        <button id="btn-camera-reset" class="camera-reset-btn" title="Reset Camera Position & Zoom">
          🔄 Reset Camera
        </button>
        <div class="camera-hint">
          Scroll to zoom<br>
          Space + Drag to pan
        </div>
      </div>
      
      <div id="auto-save-indicator" class="auto-save-indicator">
        💾 Auto-save enabled
      </div>
      
      <div id="top-hud">
        <div id="scoreboard">
           <div class="score-value" id="score-display">0</div>
        </div>
        <div id="key-counter" class="key-counter">
           🔑 <span id="keys-collected">0</span>/<span id="keys-total">0</span>
        </div>
        <div class="compass-container">
          <div class="compass-label">N</div>
          <div class="compass-inner">
              <div class="compass-arrow" id="compass-arrow"></div>
          </div>
        </div>
      </div>

      <div class="mobile-controls">
        <div class="control-btn btn-rotate" id="btn-rot-left">↺</div>
        <div class="d-pad">
           <div class="control-btn btn-up" data-key="ArrowUp">↑</div>
           <div class="control-btn btn-down" data-key="ArrowDown">↓</div>
           <div class="control-btn btn-left" data-key="ArrowLeft">←</div>
           <div class="control-btn btn-right" data-key="ArrowRight">→</div>
        </div>
        <div class="control-btn btn-rotate" id="btn-rot-right">↻</div>
      </div>

      <div class="toolbar bottom-bar">
        <button class="block-btn active" data-type="1">1. ✛ Cursor</button>
        <button class="block-btn" data-type="2">2. ◼ Ground</button>
        <button class="block-btn" data-type="3">3. ☁ Cloud</button>
        <button class="block-btn" data-type="4">4. 🪜 Ladder</button>
        <button class="block-btn" data-type="5">5. 💣 Trap</button>
        <button class="block-btn" data-type="6">6. 🔑 Key</button>
        <button class="block-btn" data-type="7">7. 🚪 Door</button>
        <button class="block-btn" data-type="8">8. ▶ Start</button>
        <button class="block-btn" data-type="9">9. ⬛ End</button>
        <button class="block-btn" data-type="0">0. 🗑 Eraser</button>
      </div>
      
      <div id="level-complete-modal" class="modal" style="display: none;">
        <div class="modal-content">
          <h2>🎉 Level Complete!</h2>
          <div id="level-stats">
            <p>Time: <span id="completion-time">0:00</span></p>
            <p>Rotations: <span id="completion-rotations">0</span></p>
            <p>Best Time: <span id="best-time">-</span></p>
            <p>Best Rotations: <span id="best-rotations">-</span></p>
          </div>
          <div class="modal-buttons">
            <button id="btn-next-level" class="modal-btn primary">Next Level</button>
            <button id="btn-retry-level" class="modal-btn">Retry</button>
            <button id="btn-return-editor" class="modal-btn">Return to Editor</button>
          </div>
        </div>
      </div>
    `,this.compassArrow=document.getElementById("compass-arrow"),this.editorSystem.onBuildHeightChanged=e=>{this.updateBuildHeight(e)},this.editorSystem.onBrushChanged=e=>{this.updateBrushSelection(e)}}updateBuildHeight(e){const t=document.getElementById("build-height-value");t&&(t.textContent=e.toString())}updateBrushSelection(e){this.container.querySelectorAll(".block-btn").forEach(n=>{Number.parseInt(n.dataset.type||"0")===e?n.classList.add("active"):n.classList.remove("active")})}updateScore(e){const t=document.getElementById("score-display");t&&(t.textContent=e.toString())}updateKeyCounter(e,t){const n=document.getElementById("keys-collected"),r=document.getElementById("keys-total");n&&(n.textContent=e.toString()),r&&(r.textContent=t.toString())}showLevelComplete(e){var l;const t=document.getElementById("level-complete-modal");if(!t)return;const n=u=>{const h=Math.floor(u/60),d=Math.floor(u%60);return`${h}:${d.toString().padStart(2,"0")}`},r=document.getElementById("completion-time"),s=document.getElementById("completion-rotations"),o=document.getElementById("best-time"),a=document.getElementById("best-rotations");r&&(r.textContent=n(e.time)),s&&(s.textContent=e.rotations.toString()),o&&(o.textContent=e.stats.bestTime?n(e.stats.bestTime):"-"),a&&(a.textContent=((l=e.stats.bestRotations)==null?void 0:l.toString())||"-");const c=document.getElementById("btn-next-level");c&&(e.hasNext?c.style.display="block":c.style.display="none"),t.style.display="flex"}hideLevelComplete(){const e=document.getElementById("level-complete-modal");e&&(e.style.display="none")}attachEvents(){var o,a,c,l,u,h,d,m,g,_,f,p,S,x,y,w,A,E,O;this.container.querySelectorAll(".d-pad .control-btn").forEach(v=>{const b=v.dataset.key,N=Y=>{Y.preventDefault(),v.classList.add("pressed"),this.eventManager.emit(Je.INPUT_MOVE,{key:b,pressed:!0})},k=Y=>{Y.preventDefault(),v.classList.remove("pressed"),this.eventManager.emit(Je.INPUT_MOVE,{key:b,pressed:!1})};v.addEventListener("mousedown",N),v.addEventListener("touchstart",N),v.addEventListener("mouseup",k),v.addEventListener("touchend",k),v.addEventListener("mouseleave",k)});const t=document.getElementById("btn-rot-left"),n=document.getElementById("btn-rot-right"),r=(v,b)=>{if(!v)return;const N=k=>{k.preventDefault(),v.classList.add("pressed"),setTimeout(()=>v.classList.remove("pressed"),100),this.eventManager.emit(Je.INPUT_ROTATE,{direction:b})};v.addEventListener("click",N),v.addEventListener("touchstart",N)};r(t,1),r(n,-1);const s=this.container.querySelectorAll(".block-btn");s.forEach(v=>{v.addEventListener("click",b=>{const N=b.currentTarget,k=parseInt(N.dataset.type);s.forEach(Y=>Y.classList.remove("active")),N.classList.add("active"),k===1?this.editorSystem.setCursorMode():k===0?this.editorSystem.setEraser():this.editorSystem.setBrush(k)})}),(o=document.getElementById("btn-undo"))==null||o.addEventListener("click",()=>{this.levelManager.undo()}),(a=document.getElementById("btn-save-local"))==null||a.addEventListener("click",()=>{const b=document.getElementById("level-name-input").value.trim();b?(this.levelManager.saveToLocalStorage(b),alert(`Level '${b}' saved!`),this.updateLevelList()):alert("Please enter a level name.")}),(c=document.getElementById("btn-load-local"))==null||c.addEventListener("click",()=>{const b=document.getElementById("level-select").value;b&&(this.levelManager.loadFromLocalStorage(b)?this.editorSystem.resetEditorState():alert("Failed to load level."))}),(l=document.getElementById("preset-select"))==null||l.addEventListener("change",v=>{const b=v.target,N=b.value;N&&(confirm(`Load preset map '${N}'? This will clear current changes.`)&&(this.levelManager.loadPreset(N),this.editorSystem.resetEditorState()),b.value="")}),(u=document.getElementById("btn-export"))==null||u.addEventListener("click",()=>{const v=this.levelManager.serialize();console.log(v),alert("Level JSON exported to Console (F12)")}),(h=document.getElementById("btn-clear"))==null||h.addEventListener("click",()=>{confirm("Are you sure you want to clear the entire level?")&&(this.levelManager.clear(),this.editorSystem.resetEditorState())}),(d=document.getElementById("btn-height-up"))==null||d.addEventListener("click",()=>{this.editorSystem.setBuildHeight(this.editorSystem.getBuildHeight()+1)}),(m=document.getElementById("btn-height-down"))==null||m.addEventListener("click",()=>{this.editorSystem.setBuildHeight(this.editorSystem.getBuildHeight()-1)}),(g=document.getElementById("btn-height-reset"))==null||g.addEventListener("click",()=>{this.editorSystem.setBuildHeight(0)}),(_=document.getElementById("toggle-grid"))==null||_.addEventListener("change",()=>{this.editorSystem.toggleGridPlane()}),(f=document.getElementById("toggle-snap"))==null||f.addEventListener("change",()=>{this.editorSystem.toggleSmartSnap()}),(p=document.getElementById("btn-view-iso"))==null||p.addEventListener("click",()=>{this.engine.setCameraView("isometric")}),(S=document.getElementById("btn-view-top"))==null||S.addEventListener("click",()=>{this.engine.setCameraView("top")}),(x=document.getElementById("btn-view-front"))==null||x.addEventListener("click",()=>{this.engine.setCameraView("front")}),(y=document.getElementById("btn-view-side"))==null||y.addEventListener("click",()=>{this.engine.setCameraView("side")}),(w=document.getElementById("btn-camera-reset"))==null||w.addEventListener("click",()=>{this.engine.resetCamera()}),(A=document.getElementById("btn-next-level"))==null||A.addEventListener("click",()=>{this.hideLevelComplete(),this.eventManager.emit(Je.INPUT_ACTION,{action:"next_level"})}),(E=document.getElementById("btn-retry-level"))==null||E.addEventListener("click",()=>{this.hideLevelComplete(),this.eventManager.emit(Je.INPUT_ACTION,{action:"retry_level"})}),(O=document.getElementById("btn-return-editor"))==null||O.addEventListener("click",()=>{this.hideLevelComplete(),this.eventManager.emit(Je.INPUT_ACTION,{action:"return_editor"})})}updateLevelList(){const e=document.getElementById("level-select");if(!e)return;const t=this.levelManager.listSavedLevels();e.innerHTML="",t.forEach(n=>{const r=document.createElement("option");r.value=n,r.textContent=n,e.appendChild(r)})}updatePresetList(){const e=document.getElementById("preset-select");if(!e)return;this.levelManager.getPresetList().forEach(n=>{const r=document.createElement("option");r.value=n.key,r.textContent=n.name,e.appendChild(r)})}}class WE{constructor(e,t){j(this,"character");j(this,"levelManager");j(this,"gravity",ge.PHYSICS.GRAVITY);j(this,"viewState",St.FRONT);j(this,"inputX",0);j(this,"inputY",0);j(this,"onGoalReached",null);j(this,"onKeyCollected",null);j(this,"onDeath",null);j(this,"prevPosition",new I);j(this,"jumpBuffer",0);j(this,"coyoteTime",0);j(this,"wasGroundedLastFrame",!1);j(this,"onLadder",!1);j(this,"collectedKeys",new Set);j(this,"keysRequired",0);j(this,"lastSafePosition",new I(0,5,0));this.character=e,this.levelManager=t}setViewState(e){this.viewState=e,this.character.velocity.set(0,this.character.velocity.y,0);let t=0;switch(e){case St.FRONT:t=0;break;case St.RIGHT:t=-Math.PI/2;break;case St.BACK:t=-Math.PI;break;case St.LEFT:t=-Math.PI*1.5;break}this.character.rotation.y=t,this.snapToVisualDepth()}snapToVisualDepth(){this.update(.016)}setInput(e){this.inputX=e}setVerticalInput(e){this.inputY=e}getCollectedKeysCount(){return this.collectedKeys.size}getRequiredKeysCount(){return this.keysRequired}hasAllKeys(){return this.keysRequired>0&&this.collectedKeys.size>=this.keysRequired}resetGameState(){this.collectedKeys.clear(),this.keysRequired=0,this.onLadder=!1,this.lastSafePosition.set(0,5,0)}countKeysInLevel(){const e=this.levelManager.getAllVoxels();this.keysRequired=e.filter(t=>t.type===P.KEY).length}jump(){this.character.isGrounded||this.coyoteTime>0?(this.character.velocity.y=ge.PHYSICS.JUMP_FORCE,this.coyoteTime=0,this.jumpBuffer=0):this.jumpBuffer=ge.PHYSICS.JUMP_BUFFER_TIME}update(e){this.prevPosition.copy(this.character.position),this.wasGroundedLastFrame=this.character.isGrounded;const t=ge.PHYSICS.MOVE_SPEED,n=this.inputX*t;switch(this.checkLadder(),this.character.velocity.x=0,this.character.velocity.z=0,this.viewState){case St.FRONT:this.character.velocity.x=n;break;case St.RIGHT:this.character.velocity.z=-n;break;case St.BACK:this.character.velocity.x=-n;break;case St.LEFT:this.character.velocity.z=n;break}this.onLadder?(this.character.velocity.y=this.inputY*3,this.inputY===0&&Math.abs(this.inputX)===0&&(this.character.velocity.y=0)):(this.character.velocity.y-=this.gravity*e,this.character.velocity.y<-20&&(this.character.velocity.y=-20));const r=this.character.velocity.clone().multiplyScalar(e);this.character.isGrounded?Math.abs(this.inputX)>.1?this.character.setEyeState(this.inputX>0?"lookRight":"lookLeft"):this.character.setEyeState("idle"):this.character.setEyeState("jump"),this.character.position.add(new I(r.x,0,r.z)),this.checkCollision("horizontal"),this.character.position.y+=r.y,this.character.isGrounded=!1,this.checkCollision("vertical"),this.character.isGrounded&&this.lastSafePosition.copy(this.character.position),this.wasGroundedLastFrame&&!this.character.isGrounded?this.coyoteTime=ge.PHYSICS.COYOTE_TIME:this.character.isGrounded?this.coyoteTime=0:this.coyoteTime>0&&(this.coyoteTime-=e),this.jumpBuffer>0&&(this.jumpBuffer-=e,this.character.isGrounded&&(this.character.velocity.y=ge.PHYSICS.JUMP_FORCE,this.jumpBuffer=0)),!this.character.isGrounded&&this.character.position.y<-10&&(this.character.position.set(0,5,0),this.character.velocity.set(0,0,0))}checkLadder(){this.character.updateMatrixWorld();const e=new ti().setFromObject(this.character),t=this.levelManager.getAllVoxels();this.onLadder=!1;for(const n of t){if(n.type!==P.LADDER)continue;const r=n.position,s=1,o=r.x-s/2,a=r.x+s/2,c=r.y-s/2,l=r.y+s/2,u=r.z-s/2,h=r.z+s/2;if(e.max.x>o&&e.min.x<a&&e.max.y>c&&e.min.y<l&&e.max.z>u&&e.min.z<h){this.onLadder=!0;return}}}checkCollision(e){this.character.updateMatrixWorld();const t=new ti().setFromObject(this.character),n=.01;t.min.addScalar(n),t.max.subScalar(n);const r=this.levelManager.getAllVoxels(),s=this.character.getSize();let o=!1;for(const a of r){const c=a.position,l=1;let u=!1;const h=c.x-l/2,d=c.x+l/2,m=c.y-l/2,g=c.y+l/2,_=c.z-l/2,f=c.z+l/2,p=t.min.x,S=t.max.x,x=t.min.y,y=t.max.y,w=t.min.z,A=t.max.z;switch(this.viewState){case St.FRONT:case St.BACK:S>h&&p<d&&y>m&&x<g&&(u=!0);break;case St.RIGHT:case St.LEFT:A>_&&w<f&&y>m&&x<g&&(u=!0);break}if(u){if(console.log(`    Collision detected with ${c.x},${c.y},${c.z}`),o=!0,a.userData.type===P.KEY){const E=`${c.x}_${c.y}_${c.z}`;this.collectedKeys.has(E)||(this.collectedKeys.add(E),console.log(`Key collected! (${this.collectedKeys.size}/${this.keysRequired})`),this.levelManager.removeVoxelAt(c),this.onKeyCollected&&this.onKeyCollected(P.KEY));continue}if(a.userData.type===P.DOOR)if(this.hasAllKeys()){console.log("Door unlocked!"),this.levelManager.removeVoxelAt(c);continue}else console.log(`Door locked! Need ${this.keysRequired-this.collectedKeys.size} more keys.`);if(a.userData.type===P.TRAP)return console.log("Hit trap! Respawning..."),this.character.position.copy(this.lastSafePosition),this.character.velocity.set(0,0,0),this.onDeath&&this.onDeath(),!0;if(a.userData.type===P.GOAL)return console.log("GOAL REACHED!"),this.onGoalReached&&this.onGoalReached(),!0;if(a.userData.type===P.LADDER)continue;if(e==="vertical"){if(this.character.velocity.y<0){if(this.prevPosition.y>=g-.15)return this.character.position.y=g+s/2,this.character.isGrounded=!0,this.character.velocity.y=0,this.viewState===St.FRONT||this.viewState===St.BACK?this.character.position.z=c.z:this.character.position.x=c.x,!0}else if(this.character.velocity.y>0)return this.character.position.y=m-s/2,this.character.velocity.y=0,!0}else return this.viewState===St.FRONT||this.viewState===St.BACK?(this.character.velocity.x>0?this.character.position.x=h-s/2:this.character.velocity.x<0&&(this.character.position.x=d+s/2),this.character.velocity.x=0):(this.character.velocity.z>0?this.character.position.z=_-s/2:this.character.velocity.z<0&&(this.character.position.z=f+s/2),this.character.velocity.z=0),!0}}return o}}class XE{constructor(e){j(this,"eventManager");j(this,"levelManager");j(this,"currentLevelId",null);j(this,"levelSequence",[]);j(this,"levelStats",new Map);j(this,"startTime",0);j(this,"rotationCount",0);j(this,"STORAGE_KEY","ortho_game_progress");this.eventManager=Ji.getInstance(),this.levelManager=e,this.loadProgress(),this.setupEventListeners()}setupEventListeners(){this.eventManager.on(Je.CAMERA_ROTATED,()=>{this.rotationCount++}),this.eventManager.on(Je.GOAL_REACHED,()=>{this.handleLevelComplete()})}setLevelSequence(e){this.levelSequence=e}startLevel(e){this.currentLevelId=e,this.startTime=Date.now(),this.rotationCount=0;const t=this.getLevelStats(e);t.attempts++,t.lastPlayed=new Date().toISOString(),this.levelStats.set(e,t),this.saveProgress()}handleLevelComplete(){if(!this.currentLevelId)return;const e=(Date.now()-this.startTime)/1e3,t=this.getLevelStats(this.currentLevelId);t.completed=!0,(!t.bestTime||e<t.bestTime)&&(t.bestTime=e),(!t.bestRotations||this.rotationCount<t.bestRotations)&&(t.bestRotations=this.rotationCount),this.levelStats.set(this.currentLevelId,t),this.saveProgress();const n=this.getLevelMetadata(this.currentLevelId);this.eventManager.emit(Je.LEVEL_COMPLETE,{levelId:this.currentLevelId,time:e,rotations:this.rotationCount,stats:t,metadata:n,hasNext:!!(n!=null&&n.nextLevel)})}loadNextLevel(){if(!this.currentLevelId)return!1;const e=this.getLevelMetadata(this.currentLevelId);if(!e||!e.nextLevel)return console.log("No next level defined"),!1;const t=e.nextLevel,n=this.getLevelMetadata(t);return n?this.levelManager.loadPreset(t)?(this.startLevel(t),this.eventManager.emit(Je.PRESET_LOADED,{message:`Loading: ${n.name}`}),!0):!1:(console.error(`Next level '${t}' not found in sequence`),!1)}getLevelMetadata(e){return this.levelSequence.find(t=>t.id===e)}getLevelStats(e){return this.levelStats.has(e)||this.levelStats.set(e,{completed:!1,attempts:0}),this.levelStats.get(e)}getAllLevelsProgress(){return this.levelSequence.map(e=>({level:e,stats:this.getLevelStats(e.id)}))}getCompletedLevelsCount(){let e=0;return this.levelStats.forEach(t=>{t.completed&&e++}),e}getTotalLevelsCount(){return this.levelSequence.length}resetProgress(){this.levelStats.clear(),this.saveProgress()}loadProgress(){try{const e=localStorage.getItem(this.STORAGE_KEY);if(e){const t=JSON.parse(e);this.levelStats=new Map(Object.entries(t)),console.log("✅ Progress loaded")}}catch(e){console.error("Failed to load progress:",e)}}saveProgress(){try{const e=Object.fromEntries(this.levelStats);localStorage.setItem(this.STORAGE_KEY,JSON.stringify(e))}catch(e){console.error("Failed to save progress:",e)}}getCurrentLevelId(){return this.currentLevelId}getSessionStats(){return{time:this.startTime>0?(Date.now()-this.startTime)/1e3:0,rotations:this.rotationCount}}}function Kn(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Nd(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zr={duration:.5,overwrite:!1,delay:0},Ic,Ft,ct,En=1e8,rt=1/En,rc=Math.PI*2,$E=rc/4,ZE=0,Fd=Math.sqrt,YE=Math.cos,jE=Math.sin,Ot=function(e){return typeof e=="string"},gt=function(e){return typeof e=="function"},ni=function(e){return typeof e=="number"},Oc=function(e){return typeof e>"u"},Vn=function(e){return typeof e=="object"},Jt=function(e){return e!==!1},Uc=function(){return typeof window<"u"},co=function(e){return gt(e)||Ot(e)},zd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vt=Array.isArray,qE=/random\([^)]+\)/g,KE=/,\s*/g,ah=/(?:-?\.?\d|\.)+/gi,kd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Tr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ua=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Bd=/[+-]=-?[.\d]+/,JE=/[^,'"\[\]\s]+/gi,QE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,dt,zn,sc,Nc,mn={},bo={},Gd,Hd=function(e){return(bo=kr(e,mn))&&nn},Fc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},gs=function(e,t){return!t&&console.warn(e)},Vd=function(e,t){return e&&(mn[e]=t)&&bo&&(bo[e]=t)||mn},vs=function(){return 0},eb={suppressEvents:!0,isStart:!0,kill:!1},uo={suppressEvents:!0,kill:!1},tb={suppressEvents:!0},zc={},gi=[],oc={},Wd,ln={},Na={},ch=30,ho=[],kc="",Bc=function(e){var t=e[0],n,r;if(Vn(t)||gt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=ho.length;r--&&!ho[r].targetTest(t););n=ho[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new mf(e[r],n)))||e.splice(r,1);return e},Vi=function(e){return e._gsap||Bc(bn(e))[0]._gsap},Xd=function(e,t,n){return(n=e[t])&&gt(n)?e[t]():Oc(n)&&e.getAttribute&&e.getAttribute(t)||n},Qt=function(e,t){return(e=e.split(",")).forEach(t)||e},yt=function(e){return Math.round(e*1e5)/1e5||0},ht=function(e){return Math.round(e*1e7)/1e7||0},Pr=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},nb=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},To=function(){var e=gi.length,t=gi.slice(0),n,r;for(oc={},gi.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Gc=function(e){return!!(e._initted||e._startAt||e.add)},$d=function(e,t,n,r){gi.length&&!Ft&&To(),e.render(t,n,!!(Ft&&t<0&&Gc(e))),gi.length&&!Ft&&To()},Zd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(JE).length<2?t:Ot(e)?e.trim():e},Yd=function(e){return e},_n=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ib=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},kr=function(e,t){for(var n in t)e[n]=t[n];return e},lh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Vn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Ao=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},us=function(e){var t=e.parent||dt,n=e.keyframes?ib(Vt(e.keyframes)):_n;if(Jt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},rb=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},jd=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Go=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Si=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Wi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},sb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ac=function(e,t,n,r){return e._startAt&&(Ft?e._startAt.revert(uo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},ob=function i(e){return!e||e._ts&&i(e.parent)},uh=function(e){return e._repeat?Br(e._tTime,e=e.duration()+e._rDelay)*e:0},Br=function(e,t){var n=Math.floor(e=ht(e/t));return e&&n===e?n-1:n},wo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ho=function(e){return e._end=ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||rt)||0))},Vo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ht(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ho(e),n._dirty||Wi(n,e)),e},qd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=wo(e.rawTime(),t),(!t._dur||ws(0,t.totalDuration(),n)-t._tTime>rt)&&t.render(n,!0)),Wi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-rt}},Gn=function(e,t,n,r){return t.parent&&Si(t),t._start=ht((ni(n)?n:n||e!==dt?xn(e,n,t):e._time)+t._delay),t._end=ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jd(e,t,"_first","_last",e._sort?"_start":0),cc(t)||(e._recent=t),r||qd(e,t),e._ts<0&&Vo(e,e._tTime),e},Kd=function(e,t){return(mn.ScrollTrigger||Fc("scrollTrigger",t))&&mn.ScrollTrigger.create(t,e)},Jd=function(e,t,n,r,s){if(Vc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ft&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Wd!==un.frame)return gi.push(e),e._lazy=[s,r],1},ab=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},cc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},cb=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&ab(e)&&!(!e._initted&&cc(e))||(e._ts<0||e._dp._ts<0)&&!cc(e))?0:1,a=e._rDelay,c=0,l,u,h;if(a&&e._repeat&&(c=ws(0,e._tDur,t),u=Br(c,a),e._yoyo&&u&1&&(o=1-o),u!==Br(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ft||r||e._zTime===rt||!t&&e._zTime){if(!e._initted&&Jd(e,t,r,n,c))return;for(h=e._zTime,e._zTime=t||(n?rt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&ac(e,t,n,!0),e._onUpdate&&!n&&hn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&hn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Si(e,1),!n&&!Ft&&(hn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},lb=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Gr=function(e,t,n,r){var s=e._repeat,o=ht(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:ht(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Vo(e,e._tTime=e._tDur*a),e.parent&&Ho(e),n||Wi(e.parent,e),e},hh=function(e){return e instanceof Yt?Wi(e):Gr(e,e._dur)},ub={_start:0,endTime:vs,totalDuration:vs},xn=function i(e,t,n){var r=e.labels,s=e._recent||ub,o=e.duration()>=En?s.endTime(!1):e._dur,a,c,l;return Ot(t)&&(isNaN(t)||t in r)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(Vt(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},hs=function(e,t,n){var r=ni(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,c;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Jt(c.vars.inherit)&&c.parent;o.immediateRender=Jt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new bt(t[0],o,t[s+1])},Ti=function(e,t){return e||e===0?t(e):t},ws=function(e,t,n){return n<e?e:n>t?t:n},Ht=function(e,t){return!Ot(e)||!(t=QE.exec(e))?"":t[1]},hb=function(e,t,n){return Ti(n,function(r){return ws(e,t,r)})},lc=[].slice,Qd=function(e,t){return e&&Vn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vn(e[0]))&&!e.nodeType&&e!==zn},db=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Ot(r)&&!t||Qd(r,1)?(s=n).push.apply(s,bn(r)):n.push(r)})||n},bn=function(e,t,n){return ct&&!t&&ct.selector?ct.selector(e):Ot(e)&&!n&&(sc||!Hr())?lc.call((t||Nc).querySelectorAll(e),0):Vt(e)?db(e,n):Qd(e)?lc.call(e,0):e?[e]:[]},uc=function(e){return e=bn(e)[0]||gs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return bn(t,n.querySelectorAll?n:n===e?gs("Invalid scope")||Nc.createElement("div"):e)}},ef=function(e){return e.sort(function(){return .5-Math.random()})},tf=function(e){if(gt(e))return e;var t=Vn(e)?e:{each:e},n=Xi(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,c=isNaN(r)||a,l=t.axis,u=r,h=r;return Ot(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&c&&(u=r[0],h=r[1]),function(d,m,g){var _=(g||t).length,f=o[_],p,S,x,y,w,A,E,O,v;if(!f){if(v=t.grid==="auto"?0:(t.grid||[1,En])[1],!v){for(E=-En;E<(E=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(f=o[_]=[],p=c?Math.min(v,_)*u-.5:r%v,S=v===En?0:c?_*h/v-.5:r/v|0,E=0,O=En,A=0;A<_;A++)x=A%v-p,y=S-(A/v|0),f[A]=w=l?Math.abs(l==="y"?y:x):Fd(x*x+y*y),w>E&&(E=w),w<O&&(O=w);r==="random"&&ef(f),f.max=E-O,f.min=O,f.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:l?l==="y"?_/v:v:Math.max(v,_/v))||0)*(r==="edges"?-1:1),f.b=_<0?s-_:s,f.u=Ht(t.amount||t.each)||0,n=n&&_<0?df(n):n}return _=(f[d]-f.min)/f.max||0,ht(f.b+(n?n(_):_)*f.v)+f.u}},hc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=ht(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ni(n)?0:Ht(n))}},nf=function(e,t){var n=Vt(e),r,s;return!n&&Vn(e)&&(r=n=e.radius||En,e.values?(e=bn(e.values),(s=!ni(e[0]))&&(r*=r)):e=hc(e.increment)),Ti(t,n?gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),l=En,u=0,h=e.length,d,m;h--;)s?(d=e[h].x-a,m=e[h].y-c,d=d*d+m*m):d=Math.abs(e[h]-a),d<l&&(l=d,u=h);return u=!r||l<=r?e[u]:o,s||u===o||ni(o)?u:u+Ht(o)}:hc(e))},rf=function(e,t,n,r){return Ti(Vt(e)?!t:n===!0?!!(n=0):!r,function(){return Vt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},fb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},pb=function(e,t){return function(n){return e(parseFloat(n))+(t||Ht(n))}},mb=function(e,t,n){return of(e,t,0,1,n)},sf=function(e,t,n){return Ti(n,function(r){return e[~~t(r)]})},_b=function i(e,t,n){var r=t-e;return Vt(e)?sf(e,i(0,e.length),t):Ti(n,function(s){return(r+(s-e)%r)%r+e})},gb=function i(e,t,n){var r=t-e,s=r*2;return Vt(e)?sf(e,i(0,e.length-1),t):Ti(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},xs=function(e){return e.replace(qE,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(KE);return rf(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},of=function(e,t,n,r,s){var o=t-e,a=r-n;return Ti(s,function(c){return n+((c-e)/o*a||0)})},vb=function i(e,t,n,r){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=Ot(e),a={},c,l,u,h,d;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Vt(e)&&!Vt(t)){for(u=[],h=e.length,d=h-2,l=1;l<h;l++)u.push(i(e[l-1],e[l]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else r||(e=kr(Vt(e)?[]:{},e));if(!u){for(c in t)Hc.call(a,e,c,"get",t[c]);s=function(g){return $c(g,a)||(o?e.p:e)}}}return Ti(n,s)},dh=function(e,t,n){var r=e.labels,s=En,o,a,c;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},hn=function(e,t,n){var r=e.vars,s=r[t],o=ct,a=e._ctx,c,l,u;if(s)return c=r[t+"Params"],l=r.callbackScope||e,n&&gi.length&&To(),a&&(ct=a),u=c?s.apply(l,c):s.call(l),ct=o,u},os=function(e){return Si(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ft),e.progress()<1&&hn(e,"onInterrupt"),e},Ar,af=[],cf=function(e){if(e)if(e=!e.name&&e.default||e,Uc()||e.headless){var t=e.name,n=gt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:vs,render:$c,add:Hc,kill:Ob,modifier:Ib,rawVars:0},o={targetTest:0,get:0,getSetter:Xc,aliases:{},register:0};if(Hr(),e!==r){if(ln[t])return;_n(r,_n(Ao(e,s),o)),kr(r.prototype,kr(s,Ao(e,o))),ln[r.prop=t]=r,e.targetTest&&(ho.push(r),zc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Vd(t,r),e.register&&e.register(nn,r,en)}else af.push(e)},it=255,as={aqua:[0,it,it],lime:[0,it,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,it],navy:[0,0,128],white:[it,it,it],olive:[128,128,0],yellow:[it,it,0],orange:[it,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[it,0,0],pink:[it,192,203],cyan:[0,it,it],transparent:[it,it,it,0]},Fa=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*it+.5|0},lf=function(e,t,n){var r=e?ni(e)?[e>>16,e>>8&it,e&it]:0:as.black,s,o,a,c,l,u,h,d,m,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),as[e])r=as[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&it,r&it,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&it,e&it]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(ah),!t)c=+r[0]%360/360,l=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(l+1):u+l-u*l,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Fa(c+1/3,s,o),r[1]=Fa(c,s,o),r[2]=Fa(c-1/3,s,o);else if(~e.indexOf("="))return r=e.match(kd),n&&r.length<4&&(r[3]=1),r}else r=e.match(ah)||as.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/it,o=r[1]/it,a=r[2]/it,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?c=l=0:(m=h-d,l=u>.5?m/(2-h-d):m/(h+d),c=h===s?(o-a)/m+(o<a?6:0):h===o?(a-s)/m+2:(s-o)/m+4,c*=60),r[0]=~~(c+.5),r[1]=~~(l*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},uf=function(e){var t=[],n=[],r=-1;return e.split(vi).forEach(function(s){var o=s.match(Tr)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},fh=function(e,t,n){var r="",s=(e+r).match(vi),o=t?"hsla(":"rgba(",a=0,c,l,u,h;if(!s)return e;if(s=s.map(function(d){return(d=lf(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=uf(e),c=n.c,c.join(r)!==u.c.join(r)))for(l=e.replace(vi,"1").split(Tr),h=l.length-1;a<h;a++)r+=l[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(vi),h=l.length-1;a<h;a++)r+=l[a]+s[a];return r+l[h]},vi=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in as)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),xb=/hsl[a]?\(/,hf=function(e){var t=e.join(" "),n;if(vi.lastIndex=0,vi.test(t))return n=xb.test(t),e[1]=fh(e[1],n),e[0]=fh(e[0],n,uf(e[1])),!0},Ss,un=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],c,l,u,h,d,m,g=function _(f){var p=i()-r,S=f===!0,x,y,w,A;if((p>e||p<0)&&(n+=p-t),r+=p,w=r-n,x=w-o,(x>0||S)&&(A=++h.frame,d=w-h.time*1e3,h.time=w=w/1e3,o+=x+(x>=s?4:s-x),y=1),S||(c=l(_)),y)for(m=0;m<a.length;m++)a[m](w,d,A,f)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(f){return d/(1e3/(f||60))},wake:function(){Gd&&(!sc&&Uc()&&(zn=sc=window,Nc=zn.document||{},mn.gsap=nn,(zn.gsapVersions||(zn.gsapVersions=[])).push(nn.version),Hd(bo||zn.GreenSockGlobals||!zn.gsap&&zn||{}),af.forEach(cf)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(f){return setTimeout(f,o-h.time*1e3+1|0)},Ss=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Ss=0,l=vs},lagSmoothing:function(f,p){e=f||1/0,t=Math.min(p||33,e)},fps:function(f){s=1e3/(f||240),o=h.time*1e3+s},add:function(f,p,S){var x=p?function(y,w,A,E){f(y,w,A,E),h.remove(x)}:f;return h.remove(f),a[S?"unshift":"push"](x),Hr(),x},remove:function(f,p){~(p=a.indexOf(f))&&a.splice(p,1)&&m>=p&&m--},_listeners:a},h}(),Hr=function(){return!Ss&&un.wake()},Ke={},Sb=/^[\d.\-M][\d.\-,\s]/,yb=/["']/g,Mb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,c,l;s<o;s++)c=n[s],a=s!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[r]=isNaN(l)?l.replace(yb,"").trim():+l,r=c.substr(a+1).trim();return t},Eb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},bb=function(e){var t=(e+"").split("("),n=Ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Mb(t[1])]:Eb(e).split(",").map(Zd)):Ke._CE&&Sb.test(e)?Ke._CE("",e):n},df=function(e){return function(t){return 1-e(1-t)}},ff=function i(e,t){for(var n=e._first,r;n;)n instanceof Yt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Xi=function(e,t){return e&&(gt(e)?e:Ke[e]||bb(e))||t},tr=function(e,t,n,r){n===void 0&&(n=function(c){return 1-t(1-c)}),r===void 0&&(r=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return Qt(e,function(a){Ke[a]=mn[a]=s,Ke[o=a.toLowerCase()]=n;for(var c in s)Ke[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Ke[a+"."+c]=s[c]}),s},pf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},za=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/rc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*jE((u-o)*s)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:pf(a);return s=rc/s,c.config=function(l,u){return i(e,l,u)},c},ka=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:pf(n);return r.config=function(s){return i(e,s)},r};Qt("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;tr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;tr("Elastic",za("in"),za("out"),za());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};tr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);tr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});tr("Circ",function(i){return-(Fd(1-i*i)-1)});tr("Sine",function(i){return i===1?1:-YE(i*$E)+1});tr("Back",ka("in"),ka("out"),ka());Ke.SteppedEase=Ke.steps=mn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-rt;return function(a){return((r*ws(0,o,a)|0)+s)*n}}};zr.ease=Ke["quad.out"];Qt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return kc+=i+","+i+"Params,"});var mf=function(e,t){this.id=ZE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xd,this.set=t?t.getSetter:Xc},ys=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Gr(this,+t.duration,1,1),this.data=t.data,ct&&(this._ctx=ct,ct.data.push(this)),Ss||un.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Gr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Hr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Vo(this,n),!s._dp||s.parent||qd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Gn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===rt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$d(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+uh(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+uh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Br(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-rt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?wo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-rt?0:this._rts,this.totalTime(ws(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Ho(this),sb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Hr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==rt&&(this._tTime-=rt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=ht(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Gn(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Jt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wo(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=tb);var r=Ft;return Ft=n,Gc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ft=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,hh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(xn(this,n),Jt(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Jt(r)),this._dur||(this._zTime=-rt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-rt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-rt)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=gt(n)?n:Yd,c=function(){var u=r.then;r.then=null,s&&s(),gt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?c():r._prom=c})},e.kill=function(){os(this)},i}();_n(ys.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-rt,_prom:0,_ps:!1,_rts:1});var Yt=function(i){Nd(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Jt(n.sortChildren),dt&&Gn(n.parent||dt,Kn(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Kd(Kn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return hs(0,arguments,this),this},t.from=function(r,s,o){return hs(1,arguments,this),this},t.fromTo=function(r,s,o,a){return hs(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,us(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new bt(r,s,xn(this,o),1),this},t.call=function(r,s,o){return Gn(this,bt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,c,l,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new bt(r,o,xn(this,c)),this},t.staggerFrom=function(r,s,o,a,c,l,u){return o.runBackwards=1,us(o).immediateRender=Jt(o.immediateRender),this.staggerTo(r,s,o,a,c,l,u)},t.staggerFromTo=function(r,s,o,a,c,l,u,h){return a.startAt=o,us(a).immediateRender=Jt(a.immediateRender),this.staggerTo(r,s,a,c,l,u,h)},t.render=function(r,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=r<=0?0:ht(r),h=this._zTime<0!=r<0&&(this._initted||!l),d,m,g,_,f,p,S,x,y,w,A,E;if(this!==dt&&u>c&&r>=0&&(u=c),u!==this._tTime||o||h){if(a!==this._time&&l&&(u+=this._time-a,r+=this._time-a),d=u,y=this._start,x=this._ts,p=!x,h&&(l||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,f=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(f*100+r,s,o);if(d=ht(u%f),u===c?(_=this._repeat,d=l):(w=ht(u/f),_=~~w,_&&_===w&&(d=l,_--),d>l&&(d=l)),w=Br(this._tTime,f),!a&&this._tTime&&w!==_&&this._tTime-w*f-this._dur<=0&&(w=_),A&&_&1&&(d=l-d,E=1),_!==w&&!this._lock){var O=A&&w&1,v=O===(A&&_&1);if(_<w&&(O=!O),a=O?0:u%l?l:u,this._lock=1,this.render(a||(E?0:ht(_*f)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&hn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,w=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,v&&(this._lock=2,a=O?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;ff(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=lb(this,ht(a),ht(d)),S&&(u-=d-(d=S._start))),this._tTime=u,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&l&&!s&&!w&&(hn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&r>=0)for(m=this._first;m;){if(g=m._next,(m._act||d>=m._start)&&m._ts&&S!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,s,o),d!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-rt);break}}m=g}else{m=this._last;for(var b=r<0?r:d;m;){if(g=m._prev,(m._act||b<=m._end)&&m._ts&&S!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(b-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(b-m._start)*m._ts,s,o||Ft&&Gc(m)),d!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=b?-rt:rt);break}}m=g}}if(S&&!s&&(this.pause(),S.render(d>=a?0:-rt)._zTime=d>=a?1:-1,this._ts))return this._start=y,Ho(this),this.render(r,s,o);this._onUpdate&&!s&&hn(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Si(this,1),!s&&!(r<0&&!a)&&(u||a||!c)&&(hn(this,u===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ni(s)||(s=xn(this,s,r)),!(r instanceof ys)){if(Vt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ot(r))return this.addLabel(r,s);if(gt(r))r=bt.delayedCall(0,r);else return this}return this!==r?Gn(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-En);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof bt?s&&c.push(l):(o&&c.push(l),r&&c.push.apply(c,l.getChildren(!0,s,o)))),l=l._next;return c},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Ot(r)?this.removeLabel(r):gt(r)?this.killTweensOf(r):(r.parent===this&&Go(this,r),r===this._recent&&(this._recent=this._last),Wi(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ht(un.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=xn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=bt.delayedCall(0,s||vs,o);return a.data="isPause",this._hasPause=1,Gn(this,a,xn(this,r))},t.removePause=function(r){var s=this._first;for(r=xn(this,r);s;)s._start===r&&s.data==="isPause"&&Si(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),c=a.length;c--;)hi!==a[c]&&a[c].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=bn(r),c=this._first,l=ni(s),u;c;)c instanceof bt?nb(c._targets,a)&&(l?(!hi||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(u=c.getTweensOf(a,s)).length&&o.push.apply(o,u),c=c._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=xn(o,r),c=s,l=c.startAt,u=c.onStart,h=c.onStartParams,d=c.immediateRender,m,g=bt.to(o,_n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||rt,onStart:function(){if(o.pause(),!m){var f=s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());g._dur!==f&&Gr(g,f,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,_n({startAt:{time:xn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),dh(this,xn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),dh(this,xn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+rt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,c=this.labels,l;for(r=ht(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(l in c)c[l]>=o&&(c[l]+=r);return Wi(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Wi(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,c=En,l,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,Gn(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=ht(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;Gr(o,o===dt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(dt._ts&&($d(dt,wo(r,dt)),Wd=un.frame),un.frame>=ch){ch+=pn.autoSleep||120;var s=dt._first;if((!s||!s._ts)&&pn.autoSleep&&un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||un.sleep()}}},e}(ys);_n(Yt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Tb=function(e,t,n,r,s,o,a){var c=new en(this._pt,e,t,0,1,yf,null,s),l=0,u=0,h,d,m,g,_,f,p,S;for(c.b=n,c.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=xs(r)),o&&(S=[n,r],o(S,e,t),n=S[0],r=S[1]),d=n.match(Ua)||[];h=Ua.exec(r);)g=h[0],_=r.substring(l,h.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==d[u++]&&(f=parseFloat(d[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:f,c:g.charAt(1)==="="?Pr(f,g)-f:parseFloat(g)-f,m:m&&m<4?Math.round:0},l=Ua.lastIndex);return c.c=l<r.length?r.substring(l,r.length):"",c.fp=a,(Bd.test(r)||p)&&(c.e=0),this._pt=c,c},Hc=function(e,t,n,r,s,o,a,c,l,u){gt(r)&&(r=r(s||0,e,o));var h=e[t],d=n!=="get"?n:gt(h)?l?e[t.indexOf("set")||!gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,m=gt(h)?l?Pb:xf:Wc,g;if(Ot(r)&&(~r.indexOf("random(")&&(r=xs(r)),r.charAt(1)==="="&&(g=Pr(d,r)+(Ht(d)||0),(g||g===0)&&(r=g))),!u||d!==r||dc)return!isNaN(d*r)&&r!==""?(g=new en(this._pt,e,t,+d||0,r-(d||0),typeof h=="boolean"?Db:Sf,0,m),l&&(g.fp=l),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Fc(t,r),Tb.call(this,e,t,d,r,m,c||pn.stringFilter,l))},Ab=function(e,t,n,r,s){if(gt(e)&&(e=ds(e,s,t,n,r)),!Vn(e)||e.style&&e.nodeType||Vt(e)||zd(e))return Ot(e)?ds(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=ds(e[a],s,t,n,r);return o},_f=function(e,t,n,r,s,o){var a,c,l,u;if(ln[e]&&(a=new ln[e]).init(s,a.rawVars?t[e]:Ab(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=c=new en(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ar))for(l=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)l[a._props[u]]=c;return a},hi,dc,Vc=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,c=r.lazy,l=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,d=r.keyframes,m=r.autoRevert,g=e._dur,_=e._startAt,f=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:f,x=e._overwrite==="auto"&&!Ic,y=e.timeline,w,A,E,O,v,b,N,k,Y,D,F,B,$;if(y&&(!d||!s)&&(s="none"),e._ease=Xi(s,zr.ease),e._yEase=h?df(Xi(h===!0?s:h,zr.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!r.runBackwards,!y||d&&!r.stagger){if(k=f[0]?Vi(f[0]).harness:0,B=k&&r[k.prop],w=Ao(r,zc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!m?_.render(-1,!0):_.revert(u&&g?uo:eb),_._lazy=0),o){if(Si(e._startAt=bt.set(f,_n({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Jt(c),startAt:null,delay:0,onUpdate:l&&function(){return hn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ft||!a&&!m)&&e._startAt.revert(uo),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),E=_n({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Jt(c),immediateRender:a,stagger:0,parent:p},w),B&&(E[k.prop]=B),Si(e._startAt=bt.set(f,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ft?e._startAt.revert(uo):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,rt,rt);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&Jt(c)||c&&!g,A=0;A<f.length;A++){if(v=f[A],N=v._gsap||Bc(f)[A]._gsap,e._ptLookup[A]=D={},oc[N.id]&&gi.length&&To(),F=S===f?A:S.indexOf(v),k&&(Y=new k).init(v,B||w,e,F,S)!==!1&&(e._pt=O=new en(e._pt,v,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(Z){D[Z]=O}),Y.priority&&(b=1)),!k||B)for(E in w)ln[E]&&(Y=_f(E,w,e,F,v,S))?Y.priority&&(b=1):D[E]=O=Hc.call(e,v,E,"get",w[E],F,S,0,r.stringFilter);e._op&&e._op[A]&&e.kill(v,e._op[A]),x&&e._pt&&(hi=e,dt.killTweensOf(v,D,e.globalTime(t)),$=!e.parent,hi=0),e._pt&&c&&(oc[N.id]=1)}b&&Mf(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!$,d&&t<=0&&y.render(En,!0,!0)},wb=function(e,t,n,r,s,o,a,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,m;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,m=e._targets.length;m--;){if(u=d[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return dc=1,e.vars[t]="+=0",Vc(e,a),dc=0,c?gs(t+" not eligible for reset"):1;l.push(u)}for(m=l.length;m--;)h=l[m],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=yt(n)+Ht(h.e)),h.b&&(h.b=u.s+Ht(h.b))},Rb=function(e,t){var n=e[0]?Vi(e[0]).harness:0,r=n&&n.aliases,s,o,a,c;if(!r)return t;s=kr({},t);for(o in r)if(o in s)for(c=r[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},Cb=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Vt(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ds=function(e,t,n,r,s){return gt(e)?e.call(t,n,r,s):Ot(e)&&~e.indexOf("random(")?xs(e):e},gf=kc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",vf={};Qt(gf+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return vf[i]=1});var bt=function(i){Nd(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:us(r))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,d=c.stagger,m=c.overwrite,g=c.keyframes,_=c.defaults,f=c.scrollTrigger,p=c.yoyoEase,S=r.parent||dt,x=(Vt(n)||zd(n)?ni(n[0]):"length"in r)?[n]:bn(n),y,w,A,E,O,v,b,N;if(a._targets=x.length?Bc(x):gs("GSAP target "+n+" not found. https://gsap.com",!pn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||d||co(l)||co(u)){if(r=a.vars,y=a.timeline=new Yt({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:x}),y.kill(),y.parent=y._dp=Kn(a),y._start=0,d||co(l)||co(u)){if(E=x.length,b=d&&tf(d),Vn(d))for(O in d)~gf.indexOf(O)&&(N||(N={}),N[O]=d[O]);for(w=0;w<E;w++)A=Ao(r,vf),A.stagger=0,p&&(A.yoyoEase=p),N&&kr(A,N),v=x[w],A.duration=+ds(l,Kn(a),w,v,x),A.delay=(+ds(u,Kn(a),w,v,x)||0)-a._delay,!d&&E===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),y.to(v,A,b?b(w,v,x):0),y._ease=Ke.none;y.duration()?l=u=0:a.timeline=0}else if(g){us(_n(y.vars.defaults,{ease:"none"})),y._ease=Xi(g.ease||r.ease||"none");var k=0,Y,D,F;if(Vt(g))g.forEach(function(B){return y.to(x,B,">")}),y.duration();else{A={};for(O in g)O==="ease"||O==="easeEach"||Cb(O,g[O],A,g.easeEach);for(O in A)for(Y=A[O].sort(function(B,$){return B.t-$.t}),k=0,w=0;w<Y.length;w++)D=Y[w],F={ease:D.e,duration:(D.t-(w?Y[w-1].t:0))/100*l},F[O]=D.v,y.to(x,F,k),k+=F.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||a.duration(l=y.duration())}else a.timeline=0;return m===!0&&!Ic&&(hi=Kn(a),dt.killTweensOf(x),hi=0),Gn(S,Kn(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!l&&!g&&a._start===ht(S._time)&&Jt(h)&&ob(Kn(a))&&S.data!=="nested")&&(a._tTime=-rt,a.render(Math.max(0,-u)||0)),f&&Kd(Kn(a),f),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,c=this._tDur,l=this._dur,u=r<0,h=r>c-rt&&!u?c:r<rt?0:r,d,m,g,_,f,p,S,x,y;if(!l)cb(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,x=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(d=ht(h%_),h===c?(g=this._repeat,d=l):(f=ht(h/_),g=~~f,g&&g===f?(d=l,g--):d>l&&(d=l)),p=this._yoyo&&g&1,p&&(y=this._yEase,d=l-d),f=Br(this._tTime,_),d===a&&!o&&this._initted&&g===f)return this._tTime=h,this;g!==f&&(x&&this._yEase&&ff(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(ht(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Jd(this,u?r:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==f))return this;if(l!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(d/l),this._from&&(this.ratio=S=1-S),!a&&h&&!s&&!f&&(hn(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(S,m.d),m=m._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&ac(this,r,s,o),hn(this,"onUpdate")),this._repeat&&g!==f&&this.vars.onRepeat&&!s&&this.parent&&hn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ac(this,r,!0,!0),(r||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Si(this,1),!s&&!(u&&!a)&&(h||a||p)&&(hn(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,c){Ss||un.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Vc(this,l),u=this._ease(l/this._dur),wb(this,r,s,o,a,u,l,c)?this.resetTo(r,s,o,a,1):(Vo(this,0),this.parent||jd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?os(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ft),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,hi&&hi.vars.overwrite!==!0)._first||os(this),this.parent&&o!==this.timeline.totalDuration()&&Gr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=r?bn(r):a,l=this._ptLookup,u=this._pt,h,d,m,g,_,f,p;if((!s||s==="all")&&rb(a,c))return s==="all"&&(this._pt=0),os(this);for(h=this._op=this._op||[],s!=="all"&&(Ot(s)&&(_={},Qt(s,function(S){return _[S]=1}),s=_),s=Rb(a,s)),p=a.length;p--;)if(~c.indexOf(a[p])){d=l[p],s==="all"?(h[p]=s,g=d,m={}):(m=h[p]=h[p]||{},g=s);for(_ in g)f=d&&d[_],f&&((!("kill"in f.d)||f.d.kill(_)===!0)&&Go(this,f,"_pt"),delete d[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&u&&os(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return hs(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return hs(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return dt.killTweensOf(r,s,o)},e}(ys);_n(bt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qt("staggerTo,staggerFrom,staggerFromTo",function(i){bt[i]=function(){var e=new Yt,t=lc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Wc=function(e,t,n){return e[t]=n},xf=function(e,t,n){return e[t](n)},Pb=function(e,t,n,r){return e[t](r.fp,n)},Lb=function(e,t,n){return e.setAttribute(t,n)},Xc=function(e,t){return gt(e[t])?xf:Oc(e[t])&&e.setAttribute?Lb:Wc},Sf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Db=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},yf=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},$c=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Ib=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},Ob=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Go(this,t,"_pt"):t.dep||(n=1),t=r;return!n},Ub=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Mf=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},en=function(){function i(t,n,r,s,o,a,c,l,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Sf,this.d=c||this,this.set=l||Wc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Ub,this.m=n,this.mt=s,this.tween=r},i}();Qt(kc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return zc[i]=1});mn.TweenMax=mn.TweenLite=bt;mn.TimelineLite=mn.TimelineMax=Yt;dt=new Yt({sortChildren:!1,defaults:zr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=hf;var $i=[],fo={},Nb=[],ph=0,Fb=0,Ba=function(e){return(fo[e]||Nb).map(function(t){return t()})},fc=function(){var e=Date.now(),t=[];e-ph>2&&(Ba("matchMediaInit"),$i.forEach(function(n){var r=n.queries,s=n.conditions,o,a,c,l;for(a in r)o=zn.matchMedia(r[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,l=1);l&&(n.revert(),c&&t.push(n))}),Ba("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),ph=e,Ba("matchMedia"))},Ef=function(){function i(t,n){this.selector=n&&uc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Fb++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){gt(n)&&(s=r,r=n,n=gt);var o=this,a=function(){var l=ct,u=o.selector,h;return l&&l!==o&&l.data.push(o),s&&(o.selector=uc(s)),ct=o,h=r.apply(o,arguments),gt(h)&&o._r.push(h),ct=l,o.selector=u,o.isReverted=!1,h};return o.last=a,n===gt?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},e.ignore=function(n){var r=ct;ct=null,n(this),ct=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof bt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof Yt?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof bt)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=$i.length;o--;)$i[o].id===this.id&&$i.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),zb=function(){function i(t){this.contexts=[],this.scope=t,ct&&ct.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Vn(n)||(n={matches:n});var o=new Ef(0,s||this.scope),a=o.conditions={},c,l,u;ct&&!o.selector&&(o.selector=ct.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(l in n)l==="all"?u=1:(c=zn.matchMedia(n[l]),c&&($i.indexOf(o)<0&&$i.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(fc):c.addEventListener("change",fc)));return u&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Ro={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return cf(r)})},timeline:function(e){return new Yt(e)},getTweensOf:function(e,t){return dt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Ot(e)&&(e=bn(e)[0]);var s=Vi(e||{}).get,o=n?Yd:Zd;return n==="native"&&(n=""),e&&(t?o((ln[t]&&ln[t].get||s)(e,t,n,r)):function(a,c,l){return o((ln[a]&&ln[a].get||s)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=bn(e),e.length>1){var r=e.map(function(u){return nn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=ln[t],a=Vi(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(u){var h=new o;Ar._pt=0,h.init(e,n?u+n:u,Ar,0,[e]),h.render(1,h),Ar._pt&&$c(1,Ar)}:a.set(e,c);return o?l:function(u){return l(e,c,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=nn.to(e,_n((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(c,l,u){return s.resetTo(t,c,l,u)};return o.tween=s,o},isTweening:function(e){return dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Xi(e.ease,zr.ease)),lh(zr,e||{})},config:function(e){return lh(pn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ln[a]&&!mn[a]&&gs(t+" effect requires "+a+" plugin.")}),Na[t]=function(a,c,l){return n(bn(a),_n(c||{},s),l)},o&&(Yt.prototype[t]=function(a,c,l){return this.add(Na[t](a,Vn(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Ke[e]=Xi(t)},parseEase:function(e,t){return arguments.length?Xi(e,t):Ke},getById:function(e){return dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Yt(e),r,s;for(n.smoothChildTiming=Jt(e.smoothChildTiming),dt.remove(n),n._dp=0,n._time=n._tTime=dt._time,r=dt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof bt&&r.vars.onComplete===r._targets[0]))&&Gn(n,r,r._start-r._delay),r=s;return Gn(dt,n,0),n},context:function(e,t){return e?new Ef(e,t):ct},matchMedia:function(e){return new zb(e)},matchMediaRefresh:function(){return $i.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||fc()},addEventListener:function(e,t){var n=fo[e]||(fo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=fo[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:_b,wrapYoyo:gb,distribute:tf,random:rf,snap:nf,normalize:mb,getUnit:Ht,clamp:hb,splitColor:lf,toArray:bn,selector:uc,mapRange:of,pipe:fb,unitize:pb,interpolate:vb,shuffle:ef},install:Hd,effects:Na,ticker:un,updateRoot:Yt.updateRoot,plugins:ln,globalTimeline:dt,core:{PropTween:en,globals:Vd,Tween:bt,Timeline:Yt,Animation:ys,getCache:Vi,_removeLinkedListItem:Go,reverting:function(){return Ft},context:function(e){return e&&ct&&(ct.data.push(e),e._ctx=ct),ct},suppressOverwrites:function(e){return Ic=e}}};Qt("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Ro[i]=bt[i]});un.add(Yt.updateRoot);Ar=Ro.to({},{duration:0});var kb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Bb=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=kb(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Ga=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var c,l;if(Ot(s)&&(c={},Qt(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}Bb(a,s)}}}},nn=Ro.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Ft?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ga("roundProps",hc),Ga("modifiers"),Ga("snap",nf))||Ro;bt.version=Yt.version=nn.version="3.14.2";Gd=1;Uc()&&Hr();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mh,di,Lr,Zc,ki,_h,Yc,Gb=function(){return typeof window<"u"},ii={},Ui=180/Math.PI,Dr=Math.PI/180,yr=Math.atan2,gh=1e8,jc=/([A-Z])/g,Hb=/(left|right|width|margin|padding|x)/i,Vb=/[\s,\(]\S/,Hn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},pc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Wb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Xb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$b=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Zb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},bf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Tf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Yb=function(e,t,n){return e.style[t]=n},jb=function(e,t,n){return e.style.setProperty(t,n)},qb=function(e,t,n){return e._gsap[t]=n},Kb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Jb=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Qb=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},ft="transform",tn=ft+"Origin",eT=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in ii&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Hn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Jn(r,a)}):this.tfm[e]=o.x?o[e]:Jn(r,e),e===tn&&(this.tfm.zOrigin=o.zOrigin);else return Hn.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(ft)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(tn,t,"")),e=ft}(s||t)&&this.props.push(e,t,s[e])},Af=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},tT=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(jc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Yc(),(!s||!s.isStart)&&!n[ft]&&(Af(n),r.zOrigin&&n[tn]&&(n[tn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},wf=function(e,t){var n={target:e,props:[],revert:tT,save:eT};return e._gsap||nn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Rf,mc=function(e,t){var n=di.createElementNS?di.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):di.createElement(e);return n&&n.style?n:di.createElement(e)},dn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(jc,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Vr(t)||t,1)||""},vh="O,Moz,ms,Ms,Webkit".split(","),Vr=function(e,t,n){var r=t||ki,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(vh[o]+e in s););return o<0?null:(o===3?"ms":o>=0?vh[o]:"")+e},_c=function(){Gb()&&window.document&&(mh=window,di=mh.document,Lr=di.documentElement,ki=mc("div")||{style:{}},mc("div"),ft=Vr(ft),tn=ft+"Origin",ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rf=!!Vr("perspective"),Yc=nn.core.reverting,Zc=1)},xh=function(e){var t=e.ownerSVGElement,n=mc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Lr.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Lr.removeChild(n),s},Sh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Cf=function(e){var t,n;try{t=e.getBBox()}catch{t=xh(e),n=1}return t&&(t.width||t.height)||n||(t=xh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Sh(e,["x","cx","x1"])||0,y:+Sh(e,["y","cy","y1"])||0,width:0,height:0}:t},Pf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Cf(e))},yi=function(e,t){if(t){var n=e.style,r;t in ii&&t!==tn&&(t=ft),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(jc,"-$1").toLowerCase())):n.removeAttribute(t)}},fi=function(e,t,n,r,s,o){var a=new en(e._pt,t,n,0,1,o?Tf:bf);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},yh={deg:1,rad:1,turn:1},nT={grid:1,flex:1},Mi=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ki.style,c=Hb.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,d=r==="px",m=r==="%",g,_,f,p;if(r===o||!s||yh[r]||yh[o])return s;if(o!=="px"&&!d&&(s=i(e,t,n,"px")),p=e.getCTM&&Pf(e),(m||o==="%")&&(ii[t]||~t.indexOf("adius")))return g=p?e.getBBox()[c?"width":"height"]:e[u],yt(m?s/g*h:s/100*g);if(a[c?"width":"height"]=h+(d?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===di||!_.appendChild)&&(_=di.body),f=_._gsap,f&&m&&f.width&&c&&f.time===un.time&&!f.uncache)return yt(s/f.width*h);if(m&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+r,g=e[u],S?e.style[t]=S:yi(e,t)}else(m||o==="%")&&!nT[dn(_,"display")]&&(a.position=dn(e,"position")),_===e&&(a.position="static"),_.appendChild(ki),g=ki[u],_.removeChild(ki),a.position="absolute";return c&&m&&(f=Vi(_),f.time=un.time,f.width=_[u]),yt(d?g*s/h:g&&s?h/g*s:0)},Jn=function(e,t,n,r){var s;return Zc||_c(),t in Hn&&t!=="transform"&&(t=Hn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ii[t]&&t!=="transform"?(s=Es(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Po(dn(e,tn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Co[t]&&Co[t](e,t,n)||dn(e,t)||Xd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Mi(e,t,s,n)+n:s},iT=function(e,t,n,r){if(!n||n==="none"){var s=Vr(t,e,1),o=s&&dn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=dn(e,"borderTopColor"))}var a=new en(this._pt,e.style,t,0,1,yf),c=0,l=0,u,h,d,m,g,_,f,p,S,x,y,w;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=dn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=dn(e,t)||r,_?e.style[t]=_:yi(e,t)),u=[n,r],hf(u),n=u[0],r=u[1],d=n.match(Tr)||[],w=r.match(Tr)||[],w.length){for(;h=Tr.exec(r);)f=h[0],S=r.substring(c,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),f!==(_=d[l++]||"")&&(m=parseFloat(_)||0,y=_.substr((m+"").length),f.charAt(1)==="="&&(f=Pr(m,f)+y),p=parseFloat(f),x=f.substr((p+"").length),c=Tr.lastIndex-x.length,x||(x=x||pn.units[t]||y,c===r.length&&(r+=x,a.e+=x)),y!==x&&(m=Mi(e,t,_,x)||0),a._pt={_next:a._pt,p:S||l===1?S:",",s:m,c:p-m,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=c<r.length?r.substring(c,r.length):""}else a.r=t==="display"&&r==="none"?Tf:bf;return Bd.test(r)&&(a.e=0),this._pt=a,a},Mh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rT=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Mh[n]||n,t[1]=Mh[r]||r,t.join(" ")},sT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,c,l;if(s==="all"||s===!0)r.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],ii[a]&&(c=1,a=a==="transformOrigin"?tn:ft),yi(n,a);c&&(yi(n,ft),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Es(n,1),o.uncache=1,Af(r)))}},Co={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new en(e._pt,t,n,0,0,sT);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ms=[1,0,0,1,0,0],Lf={},Df=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Eh=function(e){var t=dn(e,ft);return Df(t)?Ms:t.substr(7).match(kd).map(yt)},qc=function(e,t){var n=e._gsap||Vi(e),r=e.style,s=Eh(e),o,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Ms:s):(s===Ms&&!e.offsetParent&&e!==Lr&&!n.svg&&(c=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,a=e.nextElementSibling,Lr.appendChild(e)),s=Eh(e),c?r.display=c:yi(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):Lr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},gc=function(e,t,n,r,s,o){var a=e._gsap,c=s||qc(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,m=c[0],g=c[1],_=c[2],f=c[3],p=c[4],S=c[5],x=t.split(" "),y=parseFloat(x[0])||0,w=parseFloat(x[1])||0,A,E,O,v;n?c!==Ms&&(E=m*f-g*_)&&(O=y*(f/E)+w*(-_/E)+(_*S-f*p)/E,v=y*(-g/E)+w*(m/E)-(m*S-g*p)/E,y=O,w=v):(A=Cf(e),y=A.x+(~x[0].indexOf("%")?y/100*A.width:y),w=A.y+(~(x[1]||x[0]).indexOf("%")?w/100*A.height:w)),r||r!==!1&&a.smooth?(p=y-l,S=w-u,a.xOffset=h+(p*m+S*_)-p,a.yOffset=d+(p*g+S*f)-S):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[tn]="0px 0px",o&&(fi(o,a,"xOrigin",l,y),fi(o,a,"yOrigin",u,w),fi(o,a,"xOffset",h,a.xOffset),fi(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+w)},Es=function(e,t){var n=e._gsap||new mf(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=dn(e,tn)||"0",u,h,d,m,g,_,f,p,S,x,y,w,A,E,O,v,b,N,k,Y,D,F,B,$,Z,K,J,se,oe,X,Q,ue;return u=h=d=_=f=p=S=x=y=0,m=g=1,n.svg=!!(e.getCTM&&Pf(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[ft]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[ft]!=="none"?c[ft]:"")),r.scale=r.rotate=r.translate="none"),E=qc(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),l=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),gc(e,$||l,!!$||n.originIsAbsolute,n.smooth!==!1,E)),w=n.xOrigin||0,A=n.yOrigin||0,E!==Ms&&(N=E[0],k=E[1],Y=E[2],D=E[3],u=F=E[4],h=B=E[5],E.length===6?(m=Math.sqrt(N*N+k*k),g=Math.sqrt(D*D+Y*Y),_=N||k?yr(k,N)*Ui:0,S=Y||D?yr(Y,D)*Ui+_:0,S&&(g*=Math.abs(Math.cos(S*Dr))),n.svg&&(u-=w-(w*N+A*Y),h-=A-(w*k+A*D))):(ue=E[6],X=E[7],J=E[8],se=E[9],oe=E[10],Q=E[11],u=E[12],h=E[13],d=E[14],O=yr(ue,oe),f=O*Ui,O&&(v=Math.cos(-O),b=Math.sin(-O),$=F*v+J*b,Z=B*v+se*b,K=ue*v+oe*b,J=F*-b+J*v,se=B*-b+se*v,oe=ue*-b+oe*v,Q=X*-b+Q*v,F=$,B=Z,ue=K),O=yr(-Y,oe),p=O*Ui,O&&(v=Math.cos(-O),b=Math.sin(-O),$=N*v-J*b,Z=k*v-se*b,K=Y*v-oe*b,Q=D*b+Q*v,N=$,k=Z,Y=K),O=yr(k,N),_=O*Ui,O&&(v=Math.cos(O),b=Math.sin(O),$=N*v+k*b,Z=F*v+B*b,k=k*v-N*b,B=B*v-F*b,N=$,F=Z),f&&Math.abs(f)+Math.abs(_)>359.9&&(f=_=0,p=180-p),m=yt(Math.sqrt(N*N+k*k+Y*Y)),g=yt(Math.sqrt(B*B+ue*ue)),O=yr(F,B),S=Math.abs(O)>2e-4?O*Ui:0,y=Q?1/(Q<0?-Q:Q):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Df(dn(e,ft)),$&&e.setAttribute("transform",$))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(m*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=yt(m),n.scaleY=yt(g),n.rotation=yt(_)+a,n.rotationX=yt(f)+a,n.rotationY=yt(p)+a,n.skewX=S+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(r[tn]=Po(l)),n.xOffset=n.yOffset=0,n.force3D=pn.force3D,n.renderTransform=n.svg?aT:Rf?If:oT,n.uncache=0,n},Po=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ha=function(e,t,n){var r=Ht(t);return yt(parseFloat(t)+parseFloat(Mi(e,"x",n+"px",r)))+r},oT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,If(e,t)},Di="0deg",is="0px",Ii=") ",If=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,f=n.transformPerspective,p=n.force3D,S=n.target,x=n.zOrigin,y="",w=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==Di||u!==Di)){var A=parseFloat(u)*Dr,E=Math.sin(A),O=Math.cos(A),v;A=parseFloat(h)*Dr,v=Math.cos(A),o=Ha(S,o,E*v*-x),a=Ha(S,a,-Math.sin(A)*-x),c=Ha(S,c,O*v*-x+x)}f!==is&&(y+="perspective("+f+Ii),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(w||o!==is||a!==is||c!==is)&&(y+=c!==is||w?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Ii),l!==Di&&(y+="rotate("+l+Ii),u!==Di&&(y+="rotateY("+u+Ii),h!==Di&&(y+="rotateX("+h+Ii),(d!==Di||m!==Di)&&(y+="skew("+d+", "+m+Ii),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ii),S.style[ft]=y||"translate(0, 0)"},aT=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,f=n.xOffset,p=n.yOffset,S=n.forceCSS,x=parseFloat(o),y=parseFloat(a),w,A,E,O,v;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Dr,l*=Dr,w=Math.cos(c)*h,A=Math.sin(c)*h,E=Math.sin(c-l)*-d,O=Math.cos(c-l)*d,l&&(u*=Dr,v=Math.tan(l-u),v=Math.sqrt(1+v*v),E*=v,O*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),w*=v,A*=v)),w=yt(w),A=yt(A),E=yt(E),O=yt(O)):(w=h,O=d,A=E=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Mi(m,"x",o,"px"),y=Mi(m,"y",a,"px")),(g||_||f||p)&&(x=yt(x+g-(g*w+_*E)+f),y=yt(y+_-(g*A+_*O)+p)),(r||s)&&(v=m.getBBox(),x=yt(x+r/100*v.width),y=yt(y+s/100*v.height)),v="matrix("+w+","+A+","+E+","+O+","+x+","+y+")",m.setAttribute("transform",v),S&&(m.style[ft]=v)},cT=function(e,t,n,r,s){var o=360,a=Ot(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?Ui:1),l=c-r,u=r+l+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),h==="cw"&&l<0?l=(l+o*gh)%o-~~(l/o)*o:h==="ccw"&&l>0&&(l=(l-o*gh)%o-~~(l/o)*o)),e._pt=d=new en(e._pt,t,n,r,l,Wb),d.e=u,d.u="deg",e._props.push(n),d},bh=function(e,t){for(var n in t)e[n]=t[n];return e},lT=function(e,t,n){var r=bh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,h,d,m,g;r.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[ft]=t,a=Es(n,1),yi(n,ft),n.setAttribute("transform",l)):(l=getComputedStyle(n)[ft],o[ft]=t,a=Es(n,1),o[ft]=l);for(c in ii)l=r[c],u=a[c],l!==u&&s.indexOf(c)<0&&(m=Ht(l),g=Ht(u),h=m!==g?Mi(n,c,l,g):parseFloat(l),d=parseFloat(u),e._pt=new en(e._pt,a,c,h,d-h,pc),e._pt.u=g||0,e._props.push(c));bh(a,r)};Qt("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Co[e>1?"border"+i:i]=function(a,c,l,u,h){var d,m;if(arguments.length<4)return d=o.map(function(g){return Jn(a,g,l)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},o.forEach(function(g,_){return m[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(c,m,h)}});var Of={name:"css",register:_c,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,c=n.vars.startAt,l,u,h,d,m,g,_,f,p,S,x,y,w,A,E,O,v;Zc||_c(),this.styles=this.styles||wf(e),O=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ln[_]&&_f(_,t,n,r,e,s)))){if(m=typeof u,g=Co[_],m==="function"&&(u=u.call(n,r,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=xs(u)),g)g(this,e,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",vi.lastIndex=0,vi.test(l)||(f=Ht(l),p=Ht(u),p?f!==p&&(l=Mi(e,_,l,p)+p):f&&(u+=f)),this.add(a,"setProperty",l,u,r,s,0,0,_),o.push(_),O.push(_,0,a[_]);else if(m!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,r,e,s):c[_],Ot(l)&&~l.indexOf("random(")&&(l=xs(l)),Ht(l+"")||l==="auto"||(l+=pn.units[_]||Ht(Jn(e,_))||""),(l+"").charAt(1)==="="&&(l=Jn(e,_))):l=Jn(e,_),d=parseFloat(l),S=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in Hn&&(_==="autoAlpha"&&(d===1&&Jn(e,"visibility")==="hidden"&&h&&(d=0),O.push("visibility",0,a.visibility),fi(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Hn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in ii,x){if(this.styles.save(_),v=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=dn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=u,u=dn(e,"perspective"),b?e.style.perspective=b:yi(e,"perspective")}h=parseFloat(u)}if(y||(w=e._gsap,w.renderTransform&&!t.parseTransform||Es(e,t.parseTransform),A=t.smoothOrigin!==!1&&w.smooth,y=this._pt=new en(this._pt,a,ft,0,1,w.renderTransform,w,0,-1),y.dep=1),_==="scale")this._pt=new en(this._pt,w,"scaleY",w.scaleY,(S?Pr(w.scaleY,S+h):h)-w.scaleY||0,pc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){O.push(tn,0,a[tn]),u=rT(u),w.svg?gc(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&fi(this,w,"zOrigin",w.zOrigin,p),fi(this,a,_,Po(l),Po(u)));continue}else if(_==="svgOrigin"){gc(e,u,1,A,0,this);continue}else if(_ in Lf){cT(this,w,_,d,S?Pr(d,S+u):u);continue}else if(_==="smoothOrigin"){fi(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){lT(this,u,e);continue}}else _ in a||(_=Vr(_)||_);if(x||(h||h===0)&&(d||d===0)&&!Vb.test(u)&&_ in a)f=(l+"").substr((d+"").length),h||(h=0),p=Ht(u)||(_ in pn.units?pn.units[_]:f),f!==p&&(d=Mi(e,_,l,p)),this._pt=new en(this._pt,x?w:a,_,d,(S?Pr(d,S+h):h)-d,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Zb:pc),this._pt.u=p||0,x&&v!==u?(this._pt.b=l,this._pt.e=v,this._pt.r=$b):f!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=Xb);else if(_ in a)iT.call(this,e,_,l,S?S+u:u);else if(_ in e)this.add(e,_,l||e[_],S?S+u:u,r,s);else if(_!=="parseTransform"){Fc(_,u);continue}x||(_ in a?O.push(_,0,a[_]):typeof e[_]=="function"?O.push(_,2,e[_]()):O.push(_,1,l||e[_])),o.push(_)}}E&&Mf(this)},render:function(e,t){if(t.tween._time||!Yc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Jn,aliases:Hn,getSetter:function(e,t,n){var r=Hn[t];return r&&r.indexOf(",")<0&&(t=r),t in ii&&t!==tn&&(e._gsap.x||Jn(e,"x"))?n&&_h===n?t==="scale"?Kb:qb:(_h=n||{})&&(t==="scale"?Jb:Qb):e.style&&!Oc(e.style[t])?Yb:~t.indexOf("-")?jb:Xc(e,t)},core:{_removeProperty:yi,_getMatrix:qc}};nn.utils.checkPrefix=Vr;nn.core.getStyleSaver=wf;(function(i,e,t,n){var r=Qt(i+","+e+","+t,function(s){ii[s]=1});Qt(e,function(s){pn.units[s]="deg",Lf[s]=1}),Hn[r[13]]=i+","+e,Qt(n,function(s){var o=s.split(":");Hn[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){pn.units[i]="px"});nn.registerPlugin(Of);var Fn=nn.registerPlugin(Of)||nn;Fn.core.Tween;class uT extends Lt{constructor(t){const n=ge.VOXEL_SIZE*.8,r=new On(n,n,n),s=new Tc({color:16750592});super(r,s);j(this,"velocity");j(this,"isGrounded",!1);j(this,"size");j(this,"leftEye");j(this,"rightEye");j(this,"leftPupil");j(this,"rightPupil");j(this,"currentEyeState","idle");this.size=n,this.velocity=new I(0,0,0),this.position.copy(t),this.castShadow=!0,this.receiveShadow=!0,this.renderOrder=1;const o=n*.25,a=new On(o,o,n*.1),c=new Nr({color:16777215}),l=o*.4,u=new On(l,l,n*.05),h=new Nr({color:0});this.leftEye=new Lt(a,c),this.leftEye.position.set(-n*.2,n*.2,n*.45),this.leftPupil=new Lt(u,h),this.leftPupil.position.z=n*.051,this.leftEye.add(this.leftPupil),this.rightEye=new Lt(a,c),this.rightEye.position.set(n*.2,n*.2,n*.45),this.rightPupil=new Lt(u,h),this.rightPupil.position.z=n*.051,this.rightEye.add(this.rightPupil),this.add(this.leftEye),this.add(this.rightEye),this.startBlinking()}startBlinking(){const t=()=>{this.currentEyeState==="idle"?Fn.to([this.leftEye.scale,this.rightEye.scale],{y:.1,duration:.1,yoyo:!0,repeat:1,onComplete:()=>{setTimeout(t,2e3+Math.random()*3e3)}}):setTimeout(t,1e3)};setTimeout(t,2e3)}setEyeState(t){if(this.currentEyeState===t)return;this.currentEyeState=t,Fn.killTweensOf([this.leftEye.scale,this.rightEye.scale]),Fn.to([this.leftEye.scale,this.rightEye.scale],{x:1,y:1,duration:.1});const n=this.size*.08;switch(t){case"idle":Fn.to([this.leftPupil.position,this.rightPupil.position],{x:0,y:0,duration:.2});break;case"lookLeft":Fn.to([this.leftPupil.position,this.rightPupil.position],{x:-n,y:0,duration:.2});break;case"lookRight":Fn.to([this.leftPupil.position,this.rightPupil.position],{x:n,y:0,duration:.2});break;case"jump":Fn.to([this.leftEye.scale,this.rightEye.scale],{x:1.2,y:1.2,duration:.2}),Fn.to([this.leftPupil.position,this.rightPupil.position],{x:0,y:n,duration:.2});break}}update(t){this.velocity.y-=20*t,this.position.add(this.velocity.clone().multiplyScalar(t)),this.position.y<-10&&(this.position.set(0,5,0),this.velocity.set(0,0,0))}getSize(){return this.size}}class hT{constructor(e){j(this,"engine");j(this,"viewState",St.FRONT);j(this,"isRotating",!1);j(this,"targetRotationY",0);j(this,"eventManager");this.engine=e,this.eventManager=Ji.getInstance()}reset(){this.viewState=St.FRONT,this.targetRotationY=0,this.isRotating=!1;const e=this.engine.getCamera(),t=ge.CAMERA.INITIAL_POSITION.x;e.position.set(0,0,t),e.lookAt(0,0,0),e.zoom=1,e.updateProjectionMatrix(),this.eventManager.emit(Je.CAMERA_ROTATED,0)}rotate(e,t,n){if(this.isRotating)return;this.isRotating=!0,e>0?(this.viewState=(this.viewState+1)%4,this.targetRotationY+=Math.PI/2):(this.viewState=(this.viewState-1+4)%4,this.targetRotationY-=Math.PI/2),console.log(`Rotating to View: ${St[this.viewState]}`);const r=this.engine.getCamera(),s=Math.atan2(r.position.x,r.position.z),o=Math.sqrt(r.position.x*r.position.x+r.position.z*r.position.z),a=s+e*Math.PI/2,c={angle:s};Fn.to(c,{angle:a,duration:ge.ANIMATION.ROTATION_DURATION,ease:"power2.inOut",onUpdate:()=>{r.position.x=o*Math.sin(c.angle),r.position.z=o*Math.cos(c.angle),r.lookAt(0,0,0),this.eventManager.emit(Je.CAMERA_ROTATED,c.angle),t&&t()},onComplete:()=>{this.isRotating=!1,n&&n()}})}getViewState(){return this.viewState}isCameraRotating(){return this.isRotating}}class dT{constructor(e,t){j(this,"engine");j(this,"levelManager");j(this,"physicsSystem",null);j(this,"progressionManager");j(this,"character",null);j(this,"eventManager");j(this,"cameraSystem");j(this,"mode",cn.EDIT);j(this,"inputManager");j(this,"wasJumpPressed",!1);j(this,"score",0);this.engine=e,this.levelManager=t,this.inputManager=e.getInputManager(),this.eventManager=Ji.getInstance(),this.cameraSystem=new hT(e),this.progressionManager=new XE(t),window.addEventListener("keydown",n=>{n.key==="Tab"&&(n.preventDefault(),this.toggleMode())}),this.eventManager.on(Je.INPUT_ROTATE,n=>{this.mode===cn.PLAY&&this.cameraSystem.rotate(n.direction,()=>this.handleCharacterOcclusion(),()=>{this.physicsSystem&&this.physicsSystem.setViewState(this.cameraSystem.getViewState())})}),this.eventManager.on(Je.INPUT_MOVE,n=>{this.inputManager.setVirtualKey(n.key,n.pressed)}),this.eventManager.on(Je.INPUT_ACTION,n=>{n.action==="next_level"?this.loadNextLevel():n.action==="retry_level"?this.retryCurrentLevel():n.action==="return_editor"&&this.toggleMode()})}toggleMode(){this.mode===cn.EDIT?this.enterPlayMode():this.enterEditMode()}enterPlayMode(){console.log("Entering Play Mode"),this.autoSaveLevel(),this.mode=cn.PLAY,this.eventManager.emit(Je.GAME_MODE_CHANGED,cn.PLAY),this.engine.setHelpersVisibility(!1),this.cameraSystem.reset(),this.engine.getControls().enabled=!1;const e=this.levelManager.getSpawnPoint(),t=e?e.clone().add(new I(0,1,0)):new I(0,5,0);this.character=new uT(t),this.engine.getScene().add(this.character),this.physicsSystem=new WE(this.character,this.levelManager),this.physicsSystem.setViewState(this.cameraSystem.getViewState()),this.physicsSystem.countKeysInLevel(),this.physicsSystem.resetGameState(),this.score=0,this.eventManager.emit(Je.SCORE_UPDATED,this.score),this.physicsSystem.onGoalReached=()=>{this.score+=100,this.eventManager.emit(Je.SCORE_UPDATED,this.score),this.progressionManager.handleLevelComplete()},this.physicsSystem.onKeyCollected=()=>{this.score+=10,this.eventManager.emit(Je.SCORE_UPDATED,this.score),this.physicsSystem&&this.eventManager.emit(Je.KEY_COLLECTED,{collected:this.physicsSystem.getCollectedKeysCount(),required:this.physicsSystem.getRequiredKeysCount()})},this.physicsSystem.onDeath=()=>{this.score=Math.max(0,this.score-5),this.eventManager.emit(Je.SCORE_UPDATED,this.score),this.eventManager.emit(Je.PLAYER_DIED)}}enterEditMode(){console.log("Entering Edit Mode"),this.mode=cn.EDIT,this.eventManager.emit(Je.GAME_MODE_CHANGED,cn.EDIT),this.engine.setHelpersVisibility(!0),this.engine.getControls().enabled=!0,this.character&&(this.engine.getScene().remove(this.character),this.character=null),this.physicsSystem=null}update(e){if(this.mode===cn.PLAY&&this.physicsSystem&&this.character){if(this.cameraSystem.isCameraRotating()||(this.inputManager.isKeyPressed("q")||this.inputManager.isKeyPressed("Q")?this.cameraSystem.rotate(1,()=>this.handleCharacterOcclusion(),()=>this.physicsSystem.setViewState(this.cameraSystem.getViewState())):(this.inputManager.isKeyPressed("e")||this.inputManager.isKeyPressed("E"))&&this.cameraSystem.rotate(-1,()=>this.handleCharacterOcclusion(),()=>this.physicsSystem.setViewState(this.cameraSystem.getViewState()))),this.cameraSystem.isCameraRotating())this.physicsSystem.setInput(0);else{let t=0;(this.inputManager.isKeyPressed("a")||this.inputManager.isKeyPressed("ArrowLeft"))&&(t=-1),(this.inputManager.isKeyPressed("d")||this.inputManager.isKeyPressed("ArrowRight"))&&(t=1);let n=0;(this.inputManager.isKeyPressed("w")||this.inputManager.isKeyPressed("ArrowUp"))&&(n=1),(this.inputManager.isKeyPressed("s")||this.inputManager.isKeyPressed("ArrowDown"))&&(n=-1),this.physicsSystem.setInput(t),this.physicsSystem.setVerticalInput(n);const r=this.inputManager.isKeyPressed(" ");r&&!this.wasJumpPressed&&this.physicsSystem.jump(),this.wasJumpPressed=r}this.physicsSystem.update(e)}}handleCharacterOcclusion(){if(!this.character||!this.engine)return;const e=this.engine.getCamera(),t=this.character.position.clone(),n=e.position.clone(),r=t.sub(n).normalize(),s=new rd(n,r),o=this.levelManager.getMeshes(),a=s.intersectObjects(o),c=n.distanceTo(this.character.position);let l=!1;for(const u of a)if(u.distance<c-ge.OCCLUSION.RAY_TOLERANCE){l=!0;break}if(this.character){const u=this.character.material;l?(u.emissive.setHex(ge.COLORS.OCCLUSION_HIGHLIGHT),u.depthTest=!1,u.opacity=.5,u.transparent=!0,this.character.renderOrder=999):(u.emissive.setHex(ge.COLORS.DEFAULT_EMISSIVE),u.depthTest=!0,u.opacity=1,u.transparent=!1,this.character.renderOrder=0)}}autoSaveLevel(){try{const e=this.levelManager.serialize();localStorage.setItem(ge.EDITOR.AUTO_SAVE_KEY,e),console.log("✅ Level auto-saved"),this.eventManager.emit(Je.PRESET_LOADED,{message:"Auto-saved"})}catch(e){console.error("Failed to auto-save level:",e)}}loadAutoSave(){try{const e=localStorage.getItem(ge.EDITOR.AUTO_SAVE_KEY);return e?(this.levelManager.deserialize(e),console.log("✅ Auto-save loaded"),!0):!1}catch(e){return console.error("Failed to load auto-save:",e),!1}}getProgressionManager(){return this.progressionManager}startLevelById(e){return this.mode===cn.PLAY&&this.enterEditMode(),this.levelManager.loadPreset(e)?(this.progressionManager.startLevel(e),this.enterPlayMode(),!0):(console.error(`Failed to load level: ${e}`),!1)}loadNextLevel(){this.mode===cn.PLAY&&this.enterEditMode(),this.progressionManager.loadNextLevel()?this.enterPlayMode():this.eventManager.emit(Je.PRESET_LOADED,{message:"No more levels!"})}retryCurrentLevel(){const e=this.progressionManager.getCurrentLevelId();e&&this.startLevelById(e)}}document.querySelector("#app").innerHTML=`
  <div id="game-container"></div>
  <div id="ui-layer"></div>
`;const Yr=new ux("game-container"),Wo=new GE(Yr.getScene()),Uf=new HE(Yr,Wo),fT=new dT(Yr,Wo);new VE("ui-layer",Uf,Wo,Yr);for(let i=-2;i<=2;i++)for(let e=-2;e<=2;e++)Wo.addVoxel(i,0,e,P.SOLID);Yr.onUpdate(i=>{Uf.update(),fT.update(i)});Yr.start();const Va=document.getElementById("loading-screen");Va&&(Va.style.opacity="0",setTimeout(()=>{Va.style.display="none"},500));console.log("Ortho Engine initialized. Press TAB to switch modes.");console.log("Ortho Engine initialized with Editor System");

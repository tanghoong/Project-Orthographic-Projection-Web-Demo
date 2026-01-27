(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const wo="160",Bi={ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wu=0,al=1,Xu=2,ah=1,Yu=2,Bn=3,li=0,kt=1,vn=2,ii=0,lr=1,ol=2,ll=3,cl=4,qu=5,Ei=100,Ku=101,ju=102,hl=103,ul=104,$u=200,Zu=201,Ju=202,Qu=203,to=204,no=205,ed=206,td=207,nd=208,id=209,rd=210,sd=211,ad=212,od=213,ld=214,cd=0,hd=1,ud=2,zs=3,dd=4,fd=5,pd=6,md=7,oh=0,_d=1,gd=2,ri=0,vd=1,xd=2,Sd=3,Md=4,yd=5,Ed=6,lh=300,fr=301,pr=302,io=303,ro=304,Js=306,so=1e3,xn=1001,ao=1002,Nt=1003,dl=1004,da=1005,cn=1006,Td=1007,Wr=1008,si=1009,bd=1010,Ad=1011,Ro=1012,ch=1013,Jn=1014,Qn=1015,Xr=1016,hh=1017,uh=1018,Ai=1020,wd=1021,Sn=1023,Rd=1024,Ld=1025,wi=1026,mr=1027,Cd=1028,dh=1029,Pd=1030,fh=1031,ph=1033,fa=33776,pa=33777,ma=33778,_a=33779,fl=35840,pl=35841,ml=35842,_l=35843,mh=36196,gl=37492,vl=37496,xl=37808,Sl=37809,Ml=37810,yl=37811,El=37812,Tl=37813,bl=37814,Al=37815,wl=37816,Rl=37817,Ll=37818,Cl=37819,Pl=37820,Dl=37821,ga=36492,Il=36494,Ol=36495,Dd=36283,Ul=36284,Nl=36285,Fl=36286,_h=3e3,Ri=3001,Id=3200,Od=3201,gh=0,Ud=1,un="",Rt="srgb",Vn="srgb-linear",Lo="display-p3",Qs="display-p3-linear",ks="linear",it="srgb",Gs="rec709",Hs="p3",ki=7680,Bl=519,Nd=512,Fd=513,Bd=514,vh=515,zd=516,kd=517,Gd=518,Hd=519,zl=35044,Vd=35048,kl="300 es",oo=1035,Gn=2e3,Vs=2001;class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zr=Math.PI/180,lo=180/Math.PI;function Qr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[r&255]+Pt[r>>8&255]+Pt[r>>16&255]+Pt[r>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function Ft(r,e,t){return Math.max(e,Math.min(t,r))}function Wd(r,e){return(r%e+e)%e}function va(r,e,t){return(1-t)*r+t*e}function Gl(r){return(r&r-1)===0&&r!==0}function co(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Lr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function zt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Xd={DEG2RAD:zr};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,i,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=i[0],p=i[3],f=i[6],S=i[1],x=i[4],y=i[7],R=i[2],w=i[5],E=i[8];return s[0]=o*_+a*S+l*R,s[3]=o*p+a*x+l*w,s[6]=o*f+a*y+l*E,s[1]=c*_+h*S+u*R,s[4]=c*p+h*x+u*w,s[7]=c*f+h*y+u*E,s[2]=d*_+m*S+g*R,s[5]=d*p+m*x+g*w,s[8]=d*f+m*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,m=c*s-o*l,g=t*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xa.makeScale(e,t)),this}rotate(e){return this.premultiply(xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new Ve;function xh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ws(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yd(){const r=Ws("canvas");return r.style.display="block",r}const Hl={};function kr(r){r in Hl||(Hl[r]=!0,console.warn(r))}const Vl=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wl=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ss={[Vn]:{transfer:ks,primaries:Gs,toReference:r=>r,fromReference:r=>r},[Rt]:{transfer:it,primaries:Gs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Qs]:{transfer:ks,primaries:Hs,toReference:r=>r.applyMatrix3(Wl),fromReference:r=>r.applyMatrix3(Vl)},[Lo]:{transfer:it,primaries:Hs,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Wl),fromReference:r=>r.applyMatrix3(Vl).convertLinearToSRGB()}},qd=new Set([Vn,Qs]),Je={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!qd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=ss[e].toReference,i=ss[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ss[r].primaries},getTransfer:function(r){return r===un?ks:ss[r].transfer}};function cr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Sa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Gi;class Sh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=Ws("canvas")),Gi.width=e.width,Gi.height=e.height;const n=Gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=cr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kd=0;class Mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Qr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ma(i[o].image)):s.push(Ma(i[o]))}else s=Ma(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ma(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Sh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jd=0;class en extends Ni{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=xn,i=xn,s=cn,o=Wr,a=Sn,l=si,c=en.DEFAULT_ANISOTROPY,h=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Qr(),this.name="",this.source=new Mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ri?Rt:un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case so:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case so:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Rt?Ri:_h}set encoding(e){kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ri?Rt:un}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=lh;en.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,i=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(m+1)/2,R=(f+1)/2,w=(h+d)/4,E=(u+_)/4,O=(g+p)/4;return x>y&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=E/n):y>R?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=O/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=E/s,i=O/s),this.set(n,i,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $d extends Ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(kr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ri?Rt:un),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new en(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Mh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends $d{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yh extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zd extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==m||h!==g){let p=1-a;const f=l*d+c*m+h*g+u*_,S=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const R=Math.sqrt(x),w=Math.atan2(R,f*S);p=Math.sin(p*w)/R,a=Math.sin(a*w)/R}const y=a*S;if(l=l*p+d*y,c=c*p+m*y,h=h*p+g*y,u=u*p+_*y,p===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-a*m,e[t+2]=c*g+h*m+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new I,Xl=new Oi;class Wn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(s,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),as.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),as.copy(n.boundingBox)),as.applyMatrix4(e.matrixWorld),this.union(as)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),os.subVectors(this.max,Cr),Hi.subVectors(e.a,Cr),Vi.subVectors(e.b,Cr),Wi.subVectors(e.c,Cr),qn.subVectors(Vi,Hi),Kn.subVectors(Wi,Vi),mi.subVectors(Hi,Wi);let t=[0,-qn.z,qn.y,0,-Kn.z,Kn.y,0,-mi.z,mi.y,qn.z,0,-qn.x,Kn.z,0,-Kn.x,mi.z,0,-mi.x,-qn.y,qn.x,0,-Kn.y,Kn.x,0,-mi.y,mi.x,0];return!Ea(t,Hi,Vi,Wi,os)||(t=[1,0,0,0,1,0,0,0,1],!Ea(t,Hi,Vi,Wi,os))?!1:(ls.crossVectors(qn,Kn),t=[ls.x,ls.y,ls.z],Ea(t,Hi,Vi,Wi,os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new I,new I,new I,new I,new I,new I,new I,new I],pn=new I,as=new Wn,Hi=new I,Vi=new I,Wi=new I,qn=new I,Kn=new I,mi=new I,Cr=new I,os=new I,ls=new I,_i=new I;function Ea(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){_i.fromArray(r,s);const a=i.x*Math.abs(_i.x)+i.y*Math.abs(_i.y)+i.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Jd=new Wn,Pr=new I,Ta=new I;class Tr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);const t=Pr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Pr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(Ta)),this.expandByPoint(Pr.copy(e.center).sub(Ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new I,ba=new I,cs=new I,jn=new I,Aa=new I,hs=new I,wa=new I;class ea{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ba.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(ba);const s=e.distanceTo(t)*.5,o=-this.direction.dot(cs),a=jn.dot(this.direction),l=-jn.dot(cs),c=jn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ba).addScaledVector(cs,d),m}intersectSphere(e,t){On.subVectors(e.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,i,s){Aa.subVectors(t,e),hs.subVectors(n,e),wa.crossVectors(Aa,hs);let o=this.direction.dot(wa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,e);const l=a*this.direction.dot(hs.crossVectors(jn,hs));if(l<0)return null;const c=a*this.direction.dot(Aa.cross(jn));if(c<0||l+c>o)return null;const h=-a*jn.dot(wa);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,i,s,o,a,l,c,h,u,d,m,g,_,p){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,d,m,g,_,p)}set(e,t,n,i,s,o,a,l,c,h,u,d,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Xi.setFromMatrixColumn(e,0).length(),s=1/Xi.setFromMatrixColumn(e,1).length(),o=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,m=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,m=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qd,e,ef)}lookAt(e,t,n){const i=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),$n.crossVectors(n,Kt),$n.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),$n.crossVectors(n,Kt)),$n.normalize(),us.crossVectors(Kt,$n),i[0]=$n.x,i[4]=us.x,i[8]=Kt.x,i[1]=$n.y,i[5]=us.y,i[9]=Kt.y,i[2]=$n.z,i[6]=us.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],S=n[3],x=n[7],y=n[11],R=n[15],w=i[0],E=i[4],O=i[8],v=i[12],b=i[1],B=i[5],V=i[9],K=i[13],D=i[2],N=i[6],z=i[10],Y=i[14],q=i[3],j=i[7],$=i[11],ie=i[15];return s[0]=o*w+a*b+l*D+c*q,s[4]=o*E+a*B+l*N+c*j,s[8]=o*O+a*V+l*z+c*$,s[12]=o*v+a*K+l*Y+c*ie,s[1]=h*w+u*b+d*D+m*q,s[5]=h*E+u*B+d*N+m*j,s[9]=h*O+u*V+d*z+m*$,s[13]=h*v+u*K+d*Y+m*ie,s[2]=g*w+_*b+p*D+f*q,s[6]=g*E+_*B+p*N+f*j,s[10]=g*O+_*V+p*z+f*$,s[14]=g*v+_*K+p*Y+f*ie,s[3]=S*w+x*b+y*D+R*q,s[7]=S*E+x*B+y*N+R*j,s[11]=S*O+x*V+y*z+R*$,s[15]=S*v+x*K+y*Y+R*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*m-n*l*m)+_*(+t*l*m-t*c*d+s*o*d-i*o*m+i*c*h-s*l*h)+p*(+t*c*u-t*a*m-s*o*u+n*o*m+s*a*h-n*c*h)+f*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],S=u*p*c-_*d*c+_*l*m-a*p*m-u*l*f+a*d*f,x=g*d*c-h*p*c-g*l*m+o*p*m+h*l*f-o*d*f,y=h*_*c-g*u*c+g*a*m-o*_*m-h*a*f+o*u*f,R=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,w=t*S+n*x+i*y+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=S*E,e[1]=(_*d*s-u*p*s-_*i*m+n*p*m+u*i*f-n*d*f)*E,e[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*f+n*l*f)*E,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*m-n*l*m)*E,e[4]=x*E,e[5]=(h*p*s-g*d*s+g*i*m-t*p*m-h*i*f+t*d*f)*E,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*f-t*l*f)*E,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*m+t*l*m)*E,e[8]=y*E,e[9]=(g*u*s-h*_*s-g*n*m+t*_*m+h*n*f-t*u*f)*E,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*f+t*a*f)*E,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*m-t*a*m)*E,e[12]=R*E,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*p+t*u*p)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*E,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,m=s*h,g=s*u,_=o*h,p=o*u,f=a*u,S=l*c,x=l*h,y=l*u,R=n.x,w=n.y,E=n.z;return i[0]=(1-(_+f))*R,i[1]=(m+y)*R,i[2]=(g-x)*R,i[3]=0,i[4]=(m-y)*w,i[5]=(1-(d+f))*w,i[6]=(p+S)*w,i[7]=0,i[8]=(g+x)*E,i[9]=(p-S)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Xi.set(i[0],i[1],i[2]).length();const o=Xi.set(i[4],i[5],i[6]).length(),a=Xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],mn.copy(this);const c=1/s,h=1/o,u=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,t.setFromRotationMatrix(mn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Gn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let m,g;if(a===Gn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Vs)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Gn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*c,m=(n+i)*h;let g,_;if(a===Gn)g=(o+s)*u,_=-2*u;else if(a===Vs)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xi=new I,mn=new tt,Qd=new I(0,0,0),ef=new I(1,1,1),$n=new I,us=new I,Kt=new I,Yl=new tt,ql=new Oi;class ta{constructor(e=0,t=0,n=0,i=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ql.setFromEuler(this),this.setFromQuaternion(ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class Co{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tf=0;const Kl=new I,Yi=new Oi,Un=new tt,ds=new I,Dr=new I,nf=new I,rf=new Oi,jl=new I(1,0,0),$l=new I(0,1,0),Zl=new I(0,0,1),sf={type:"added"},af={type:"removed"};class bt extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new I,t=new ta,n=new Oi,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ve}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(jl,e)}rotateY(e){return this.rotateOnAxis($l,e)}rotateZ(e){return this.rotateOnAxis(Zl,e)}translateOnAxis(e,t){return Kl.copy(e).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jl,e)}translateY(e){return this.translateOnAxis($l,e)}translateZ(e){return this.translateOnAxis(Zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ds.copy(e):ds.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Dr,ds,this.up):Un.lookAt(ds,Dr,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),Yi.setFromRotationMatrix(Un),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(af)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,nf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,rf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DEFAULT_UP=new I(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new I,Nn=new I,Ra=new I,Fn=new I,qi=new I,Ki=new I,Jl=new I,La=new I,Ca=new I,Pa=new I;let fs=!1;class hn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_n.subVectors(e,t),i.cross(_n);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){_n.subVectors(i,t),Nn.subVectors(n,t),Ra.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(Nn),l=_n.dot(Ra),c=Nn.dot(Nn),h=Nn.dot(Ra),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getUV(e,t,n,i,s,o,a,l){return fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fs=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static isFrontFacing(e,t,n,i){return _n.subVectors(n,t),Nn.subVectors(e,t),_n.cross(Nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),_n.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fs=!0),hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;qi.subVectors(i,n),Ki.subVectors(s,n),La.subVectors(e,n);const l=qi.dot(La),c=Ki.dot(La);if(l<=0&&c<=0)return t.copy(n);Ca.subVectors(e,i);const h=qi.dot(Ca),u=Ki.dot(Ca);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(qi,o);Pa.subVectors(e,s);const m=qi.dot(Pa),g=Ki.dot(Pa);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ki,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Jl.subVectors(s,i),a=(u-h)/(u-h+(m-g)),t.copy(i).addScaledVector(Jl,a);const f=1/(p+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(qi,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Da(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=Wd(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Da(o,s,e+1/3),this.g=Da(o,s,e),this.b=Da(o,s,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=Rt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=Eh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Je.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Ft(Dt.r*255,0,255))*65536+Math.round(Ft(Dt.g*255,0,255))*256+Math.round(Ft(Dt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Dt.copy(this),t);const n=Dt.r,i=Dt.g,s=Dt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Rt){Je.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,i=Dt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(ps);const n=va(Zn.h,ps.h,t),i=va(Zn.s,ps.s,t),s=va(Zn.l,ps.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new qe;qe.NAMES=Eh;let of=0;class br extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Qr(),this.name="",this.type="Material",this.blending=lr,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=to,this.blendDst=no,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==to&&(n.blendSrc=this.blendSrc),this.blendDst!==no&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _r extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new I,ms=new Oe;class Mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ms.fromBufferAttribute(this,t),ms.applyMatrix3(e),this.setXY(t,ms.x,ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Lr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),i=zt(i,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zl&&(e.usage=this.usage),e}}class Th extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bh extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let lf=0;const an=new tt,Ia=new bt,ji=new I,jt=new Wn,Ir=new Wn,yt=new I;class En extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Qr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xh(e)?bh:Th)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Ia.lookAt(e),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(jt.min,Ir.min),jt.expandByPoint(yt),yt.addVectors(jt.max,Ir.max),jt.expandByPoint(yt)):(jt.expandByPoint(Ir.min),jt.expandByPoint(Ir.max))}jt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)yt.fromBufferAttribute(a,c),l&&(ji.fromBufferAttribute(e,c),yt.add(ji)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new I,h[b]=new I;const u=new I,d=new I,m=new I,g=new Oe,_=new Oe,p=new Oe,f=new I,S=new I;function x(b,B,V){u.fromArray(i,b*3),d.fromArray(i,B*3),m.fromArray(i,V*3),g.fromArray(o,b*2),_.fromArray(o,B*2),p.fromArray(o,V*2),d.sub(u),m.sub(u),_.sub(g),p.sub(g);const K=1/(_.x*p.y-p.x*_.y);isFinite(K)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(K),S.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(K),c[b].add(f),c[B].add(f),c[V].add(f),h[b].add(S),h[B].add(S),h[V].add(S))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let b=0,B=y.length;b<B;++b){const V=y[b],K=V.start,D=V.count;for(let N=K,z=K+D;N<z;N+=3)x(n[N+0],n[N+1],n[N+2])}const R=new I,w=new I,E=new I,O=new I;function v(b){E.fromArray(s,b*3),O.copy(E);const B=c[b];R.copy(B),R.sub(E.multiplyScalar(E.dot(B))).normalize(),w.crossVectors(O,B);const K=w.dot(h[b])<0?-1:1;l[b*4]=R.x,l[b*4+1]=R.y,l[b*4+2]=R.z,l[b*4+3]=K}for(let b=0,B=y.length;b<B;++b){const V=y[b],K=V.start,D=V.count;for(let N=K,z=K+D;N<z;N+=3)v(n[N+0]),v(n[N+1]),v(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new Mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new tt,gi=new ea,_s=new Tr,ec=new I,$i=new I,Zi=new I,Ji=new I,Oa=new I,gs=new I,vs=new Oe,xs=new Oe,Ss=new Oe,tc=new I,nc=new I,ic=new I,Ms=new I,ys=new I;class Et extends bt{constructor(e=new En,t=new _r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){gs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Oa.fromBufferAttribute(u,e),o?gs.addScaledVector(Oa,h):gs.addScaledVector(Oa.sub(t),h))}t.add(gs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(s),gi.copy(e.ray).recast(e.near),!(_s.containsPoint(gi.origin)===!1&&(gi.intersectSphere(_s,ec)===null||gi.origin.distanceToSquared(ec)>(e.far-e.near)**2))&&(Ql.copy(s).invert(),gi.copy(e.ray).applyMatrix4(Ql),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=S,R=x;y<R;y+=3){const w=a.getX(y),E=a.getX(y+1),O=a.getX(y+2);i=Es(this,f,e,n,c,h,u,w,E,O),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const S=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);i=Es(this,o,e,n,c,h,u,S,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=S,R=x;y<R;y+=3){const w=y,E=y+1,O=y+2;i=Es(this,f,e,n,c,h,u,w,E,O),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const S=p,x=p+1,y=p+2;i=Es(this,o,e,n,c,h,u,S,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function cf(r,e,t,n,i,s,o,a){let l;if(e.side===kt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===li,a),l===null)return null;ys.copy(a),ys.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ys);return c<t.near||c>t.far?null:{distance:c,point:ys.clone(),object:r}}function Es(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,$i),r.getVertexPosition(l,Zi),r.getVertexPosition(c,Ji);const h=cf(r,e,t,n,$i,Zi,Ji,Ms);if(h){i&&(vs.fromBufferAttribute(i,a),xs.fromBufferAttribute(i,l),Ss.fromBufferAttribute(i,c),h.uv=hn.getInterpolation(Ms,$i,Zi,Ji,vs,xs,Ss,new Oe)),s&&(vs.fromBufferAttribute(s,a),xs.fromBufferAttribute(s,l),Ss.fromBufferAttribute(s,c),h.uv1=hn.getInterpolation(Ms,$i,Zi,Ji,vs,xs,Ss,new Oe),h.uv2=h.uv1),o&&(tc.fromBufferAttribute(o,a),nc.fromBufferAttribute(o,l),ic.fromBufferAttribute(o,c),h.normal=hn.getInterpolation(Ms,$i,Zi,Ji,tc,nc,ic,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new I,materialIndex:0};hn.getNormal($i,Zi,Ji,u.normal),h.face=u}return h}class yn extends En{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function g(_,p,f,S,x,y,R,w,E,O,v){const b=y/E,B=R/O,V=y/2,K=R/2,D=w/2,N=E+1,z=O+1;let Y=0,q=0;const j=new I;for(let $=0;$<z;$++){const ie=$*B-K;for(let re=0;re<N;re++){const X=re*b-V;j[_]=X*S,j[p]=ie*x,j[f]=D,c.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[f]=w>0?1:-1,h.push(j.x,j.y,j.z),u.push(re/E),u.push(1-$/O),Y+=1}}for(let $=0;$<O;$++)for(let ie=0;ie<E;ie++){const re=d+ie+N*$,X=d+ie+N*($+1),Z=d+(ie+1)+N*($+1),le=d+(ie+1)+N*$;l.push(re,X,le),l.push(X,Z,le),q+=6}a.addGroup(m,q,v),m+=q,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ut(r){const e={};for(let t=0;t<r.length;t++){const n=gr(r[t]);for(const i in n)e[i]=n[i]}return e}function hf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ah(r){return r.getRenderTarget()===null?r.outputColorSpace:Je.workingColorSpace}const uf={clone:gr,merge:Ut};var df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=df,this.fragmentShader=ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=hf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wh extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gn extends wh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=-90,er=1;class pf extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new gn(Qi,er,e,t);i.layers=this.layers,this.add(i);const s=new gn(Qi,er,e,t);s.layers=this.layers,this.add(s);const o=new gn(Qi,er,e,t);o.layers=this.layers,this.add(o);const a=new gn(Qi,er,e,t);a.layers=this.layers,this.add(a);const l=new gn(Qi,er,e,t);l.layers=this.layers,this.add(l);const c=new gn(Qi,er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rh extends en{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mf extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(kr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ri?Rt:un),this.texture=new Rh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new yn(5,5,5),s=new Ui({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:ii});s.uniforms.tEquirect.value=t;const o=new Et(i,s),a=t.minFilter;return t.minFilter===Wr&&(t.minFilter=cn),new pf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Ua=new I,_f=new I,gf=new Ve;class wn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ua.subVectors(n,t).cross(_f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ua),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gf.getNormalMatrix(e),i=this.coplanarPoint(Ua).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Tr,Ts=new I;class Po{constructor(e=new wn,t=new wn,n=new wn,i=new wn,s=new wn,o=new wn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],m=i[8],g=i[9],_=i[10],p=i[11],f=i[12],S=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,p-m,y-f).normalize(),n[1].setComponents(l+s,d+c,p+m,y+f).normalize(),n[2].setComponents(l+o,d+h,p+g,y+S).normalize(),n[3].setComponents(l-o,d-h,p-g,y-S).normalize(),n[4].setComponents(l-a,d-u,p-_,y-x).normalize(),t===Gn)n[5].setComponents(l+a,d+u,p+_,y+x).normalize();else if(t===Vs)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ts.x=i.normal.x>0?e.max.x:e.min.x,Ts.y=i.normal.y>0?e.max.y:e.min.y,Ts.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function vf(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,m=u.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=r.SHORT;else if(u instanceof Uint32Array)_=r.UNSIGNED_INT;else if(u instanceof Int32Array)_=r.INT;else if(u instanceof Int8Array)_=r.BYTE;else if(u instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,u){const d=h.array,m=h._updateRange,g=h.updateRanges;if(r.bindBuffer(u,c),m.count===-1&&g.length===0&&r.bufferSubData(u,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const f=g[_];t?r.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):r.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?r.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class es extends En{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const S=f*d-o;for(let x=0;x<c;x++){const y=x*u-s;g.push(y,-S,0),_.push(0,0,1),p.push(x/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){const x=S+c*f,y=S+c*(f+1),R=S+1+c*(f+1),w=S+1+c*f;m.push(x,y,w),m.push(y,R,w)}this.setIndex(m),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.widthSegments,e.heightSegments)}}var xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
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
#endif`,Mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ef=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bf=`#ifdef USE_AOMAP
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
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wf=`#ifdef USE_BATCHING
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
#endif`,Rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Df=`#ifdef USE_IRIDESCENCE
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
#endif`,If=`#ifdef USE_BUMPMAP
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hf=`#define PI 3.141592653589793
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
} // validated`,Vf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wf=`vec3 transformedNormal = objectNormal;
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
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",$f=`
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
}`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ap=`#ifdef USE_GRADIENTMAP
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
}`,op=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,up=`uniform bool receiveShadow;
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
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gp=`PhysicalMaterial material;
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
#endif`,vp=`struct PhysicalMaterial {
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
}`,xp=`
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lp=`#if defined( USE_POINTS_UV )
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
#endif`,Cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ip=`#ifdef USE_MORPHNORMALS
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
#endif`,Op=`#ifdef USE_MORPHTARGETS
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
#endif`,Up=`#ifdef USE_MORPHTARGETS
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
#endif`,Np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gp=`#ifdef USE_NORMALMAP
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
#endif`,Hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,im=`float getShadowMask() {
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
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xm=`uniform sampler2D t2D;
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`#include <common>
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
}`,bm=`#if DEPTH_PACKING == 3200
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
}`,Am=`#define DISTANCE
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
}`,wm=`#define DISTANCE
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`uniform float scale;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Im=`uniform vec3 diffuse;
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
}`,Om=`#define LAMBERT
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
}`,Um=`#define LAMBERT
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
}`,Nm=`#define MATCAP
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
}`,Fm=`#define MATCAP
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
}`,Bm=`#define NORMAL
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
}`,zm=`#define NORMAL
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
}`,km=`#define PHONG
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
}`,Gm=`#define PHONG
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
}`,Hm=`#define STANDARD
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
}`,Vm=`#define STANDARD
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
}`,Wm=`#define TOON
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
}`,Xm=`#define TOON
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
}`,Ym=`uniform float size;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,jm=`uniform vec3 color;
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
}`,$m=`uniform float rotation;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:xf,alphahash_pars_fragment:Sf,alphamap_fragment:Mf,alphamap_pars_fragment:yf,alphatest_fragment:Ef,alphatest_pars_fragment:Tf,aomap_fragment:bf,aomap_pars_fragment:Af,batching_pars_vertex:wf,batching_vertex:Rf,begin_vertex:Lf,beginnormal_vertex:Cf,bsdfs:Pf,iridescence_fragment:Df,bumpmap_pars_fragment:If,clipping_planes_fragment:Of,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:Nf,clipping_planes_vertex:Ff,color_fragment:Bf,color_pars_fragment:zf,color_pars_vertex:kf,color_vertex:Gf,common:Hf,cube_uv_reflection_fragment:Vf,defaultnormal_vertex:Wf,displacementmap_pars_vertex:Xf,displacementmap_vertex:Yf,emissivemap_fragment:qf,emissivemap_pars_fragment:Kf,colorspace_fragment:jf,colorspace_pars_fragment:$f,envmap_fragment:Zf,envmap_common_pars_fragment:Jf,envmap_pars_fragment:Qf,envmap_pars_vertex:ep,envmap_physical_pars_fragment:dp,envmap_vertex:tp,fog_vertex:np,fog_pars_vertex:ip,fog_fragment:rp,fog_pars_fragment:sp,gradientmap_pars_fragment:ap,lightmap_fragment:op,lightmap_pars_fragment:lp,lights_lambert_fragment:cp,lights_lambert_pars_fragment:hp,lights_pars_begin:up,lights_toon_fragment:fp,lights_toon_pars_fragment:pp,lights_phong_fragment:mp,lights_phong_pars_fragment:_p,lights_physical_fragment:gp,lights_physical_pars_fragment:vp,lights_fragment_begin:xp,lights_fragment_maps:Sp,lights_fragment_end:Mp,logdepthbuf_fragment:yp,logdepthbuf_pars_fragment:Ep,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:bp,map_fragment:Ap,map_pars_fragment:wp,map_particle_fragment:Rp,map_particle_pars_fragment:Lp,metalnessmap_fragment:Cp,metalnessmap_pars_fragment:Pp,morphcolor_vertex:Dp,morphnormal_vertex:Ip,morphtarget_pars_vertex:Op,morphtarget_vertex:Up,normal_fragment_begin:Np,normal_fragment_maps:Fp,normal_pars_fragment:Bp,normal_pars_vertex:zp,normal_vertex:kp,normalmap_pars_fragment:Gp,clearcoat_normal_fragment_begin:Hp,clearcoat_normal_fragment_maps:Vp,clearcoat_pars_fragment:Wp,iridescence_pars_fragment:Xp,opaque_fragment:Yp,packing:qp,premultiplied_alpha_fragment:Kp,project_vertex:jp,dithering_fragment:$p,dithering_pars_fragment:Zp,roughnessmap_fragment:Jp,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:em,shadowmap_pars_vertex:tm,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:rm,skinning_pars_vertex:sm,skinning_vertex:am,skinnormal_vertex:om,specularmap_fragment:lm,specularmap_pars_fragment:cm,tonemapping_fragment:hm,tonemapping_pars_fragment:um,transmission_fragment:dm,transmission_pars_fragment:fm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:_m,worldpos_vertex:gm,background_vert:vm,background_frag:xm,backgroundCube_vert:Sm,backgroundCube_frag:Mm,cube_vert:ym,cube_frag:Em,depth_vert:Tm,depth_frag:bm,distanceRGBA_vert:Am,distanceRGBA_frag:wm,equirect_vert:Rm,equirect_frag:Lm,linedashed_vert:Cm,linedashed_frag:Pm,meshbasic_vert:Dm,meshbasic_frag:Im,meshlambert_vert:Om,meshlambert_frag:Um,meshmatcap_vert:Nm,meshmatcap_frag:Fm,meshnormal_vert:Bm,meshnormal_frag:zm,meshphong_vert:km,meshphong_frag:Gm,meshphysical_vert:Hm,meshphysical_frag:Vm,meshtoon_vert:Wm,meshtoon_frag:Xm,points_vert:Ym,points_frag:qm,shadow_vert:Km,shadow_frag:jm,sprite_vert:$m,sprite_frag:Zm},oe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Rn={basic:{uniforms:Ut([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ut([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ut([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ut([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ut([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ut([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ut([oe.points,oe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ut([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ut([oe.common,oe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ut([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ut([oe.sprite,oe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ut([oe.common,oe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ut([oe.lights,oe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Rn.physical={uniforms:Ut([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const bs={r:0,b:0,g:0};function Jm(r,e,t,n,i,s,o){const a=new qe(0);let l=s===!0?0:1,c,h,u=null,d=0,m=null;function g(p,f){let S=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),S=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Js)?(h===void 0&&(h=new Et(new yn(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:gr(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Je.getTransfer(x.colorSpace)!==it,(u!==x||d!==x.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Et(new es(2,2),new Ui({name:"BackgroundMaterial",uniforms:gr(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Je.getTransfer(x.colorSpace)!==it,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(bs,Ah(r)),n.buffers.color.setClear(bs.r,bs.g,bs.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function Qm(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function u(D,N,z,Y,q){let j=!1;if(o){const $=_(Y,z,N);c!==$&&(c=$,m(c.object)),j=f(D,Y,z,q),j&&S(D,Y,z,q)}else{const $=N.wireframe===!0;(c.geometry!==Y.id||c.program!==z.id||c.wireframe!==$)&&(c.geometry=Y.id,c.program=z.id,c.wireframe=$,j=!0)}q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,O(D,N,z,Y),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,N,z){const Y=z.wireframe===!0;let q=a[D.id];q===void 0&&(q={},a[D.id]=q);let j=q[N.id];j===void 0&&(j={},q[N.id]=j);let $=j[Y];return $===void 0&&($=p(d()),j[Y]=$),$}function p(D){const N=[],z=[],Y=[];for(let q=0;q<i;q++)N[q]=0,z[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:Y,object:D,attributes:{},index:null}}function f(D,N,z,Y){const q=c.attributes,j=N.attributes;let $=0;const ie=z.getAttributes();for(const re in ie)if(ie[re].location>=0){const Z=q[re];let le=j[re];if(le===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(le=D.instanceColor)),Z===void 0||Z.attribute!==le||le&&Z.data!==le.data)return!0;$++}return c.attributesNum!==$||c.index!==Y}function S(D,N,z,Y){const q={},j=N.attributes;let $=0;const ie=z.getAttributes();for(const re in ie)if(ie[re].location>=0){let Z=j[re];Z===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const le={};le.attribute=Z,Z&&Z.data&&(le.data=Z.data),q[re]=le,$++}c.attributes=q,c.attributesNum=$,c.index=Y}function x(){const D=c.newAttributes;for(let N=0,z=D.length;N<z;N++)D[N]=0}function y(D){R(D,0)}function R(D,N){const z=c.newAttributes,Y=c.enabledAttributes,q=c.attributeDivisors;z[D]=1,Y[D]===0&&(r.enableVertexAttribArray(D),Y[D]=1),q[D]!==N&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,N),q[D]=N)}function w(){const D=c.newAttributes,N=c.enabledAttributes;for(let z=0,Y=N.length;z<Y;z++)N[z]!==D[z]&&(r.disableVertexAttribArray(z),N[z]=0)}function E(D,N,z,Y,q,j,$){$===!0?r.vertexAttribIPointer(D,N,z,q,j):r.vertexAttribPointer(D,N,z,Y,q,j)}function O(D,N,z,Y){if(n.isWebGL2===!1&&(D.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const q=Y.attributes,j=z.getAttributes(),$=N.defaultAttributeValues;for(const ie in j){const re=j[ie];if(re.location>=0){let X=q[ie];if(X===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){const Z=X.normalized,le=X.itemSize,Se=t.get(X);if(Se===void 0)continue;const ve=Se.buffer,De=Se.type,Ie=Se.bytesPerElement,Ae=n.isWebGL2===!0&&(De===r.INT||De===r.UNSIGNED_INT||X.gpuType===ch);if(X.isInterleavedBufferAttribute){const We=X.data,k=We.stride,wt=X.offset;if(We.isInstancedInterleavedBuffer){for(let Ee=0;Ee<re.locationSize;Ee++)R(re.location+Ee,We.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let Ee=0;Ee<re.locationSize;Ee++)y(re.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let Ee=0;Ee<re.locationSize;Ee++)E(re.location+Ee,le/re.locationSize,De,Z,k*Ie,(wt+le/re.locationSize*Ee)*Ie,Ae)}else{if(X.isInstancedBufferAttribute){for(let We=0;We<re.locationSize;We++)R(re.location+We,X.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let We=0;We<re.locationSize;We++)y(re.location+We);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let We=0;We<re.locationSize;We++)E(re.location+We,le/re.locationSize,De,Z,le*Ie,le/re.locationSize*We*Ie,Ae)}}else if($!==void 0){const Z=$[ie];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(re.location,Z);break;case 3:r.vertexAttrib3fv(re.location,Z);break;case 4:r.vertexAttrib4fv(re.location,Z);break;default:r.vertexAttrib1fv(re.location,Z)}}}}w()}function v(){V();for(const D in a){const N=a[D];for(const z in N){const Y=N[z];for(const q in Y)g(Y[q].object),delete Y[q];delete N[z]}delete a[D]}}function b(D){if(a[D.id]===void 0)return;const N=a[D.id];for(const z in N){const Y=N[z];for(const q in Y)g(Y[q].object),delete Y[q];delete N[z]}delete a[D.id]}function B(D){for(const N in a){const z=a[N];if(z[D.id]===void 0)continue;const Y=z[D.id];for(const q in Y)g(Y[q].object),delete Y[q];delete z[D.id]}}function V(){K(),h=!0,c!==l&&(c=l,m(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:V,resetDefaultState:K,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfProgram:B,initAttributes:x,enableAttribute:y,disableUnusedAttributes:w}}function e_(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}function a(h,u){r.drawArrays(s,h,u),t.update(u,s,1)}function l(h,u,d){if(d===0)return;let m,g;if(i)m=r,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,u,d),t.update(u,s,d)}function c(h,u,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(s,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function t_(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=o||e.has("OES_texture_float"),R=x&&y,w=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:R,maxSamples:w}}function n_(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new wn,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const S=s?0:n,x=S*4;let y=f.clippingState||null;l.value=y,y=h(g,d,x,m);for(let R=0;R!==x;++R)y[R]=t[R];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,y=m;x!==_;++x,y+=4)o.copy(u[x]).applyMatrix4(S,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function i_(r){let e=new WeakMap;function t(o,a){return a===io?o.mapping=fr:a===ro&&(o.mapping=pr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===io||a===ro)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mf(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Do extends wh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rr=4,rc=[.125,.215,.35,.446,.526,.582],Ti=20,Na=new Do,sc=new qe;let Fa=null,Ba=0,za=0;const Mi=(1+Math.sqrt(5))/2,tr=1/Mi,ac=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Mi,tr),new I(0,Mi,-tr),new I(tr,0,Mi),new I(-tr,0,Mi),new I(Mi,tr,0),new I(-Mi,tr,0)];class oc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Fa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fa,Ba,za),e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Xr,format:Sn,colorSpace:Vn,depthBuffer:!1},i=lc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r_(s)),this._blurMaterial=s_(s,e,t)}return i}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Na)}_sceneToCubeUV(e,t,n,i){const a=new gn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(sc),h.toneMapping=ri,h.autoClear=!1;const m=new _r({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new Et(new yn,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(sc),_=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):S===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;As(i,S*x,f>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fr||e.mapping===pr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;As(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Na)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ac[(i-1)%ac.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Et(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ti-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):Ti;p>Ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ti}`);const f=[];let S=0;for(let E=0;E<Ti;++E){const O=E/_,v=Math.exp(-O*O/2);f.push(v),E===0?S+=v:E<p&&(S+=2*v)}for(let E=0;E<f.length;E++)f[E]=f[E]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const y=this._sizeLods[i],R=3*y*(i>x-rr?i-x+rr:0),w=4*(this._cubeSize-y);As(t,R,w,3*y,2*y),l.setRenderTarget(t),l.render(u,Na)}}function r_(r){const e=[],t=[],n=[];let i=r;const s=r-rr+1+rc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-rr?l=rc[o-r+rr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,f=1,S=new Float32Array(_*g*m),x=new Float32Array(p*g*m),y=new Float32Array(f*g*m);for(let w=0;w<m;w++){const E=w%3*2/3-1,O=w>2?0:-1,v=[E,O,0,E+2/3,O,0,E+2/3,O+1,0,E,O,0,E+2/3,O+1,0,E,O+1,0];S.set(v,_*g*w),x.set(d,p*g*w);const b=[w,w,w,w,w,w];y.set(b,f*g*w)}const R=new En;R.setAttribute("position",new Mn(S,_)),R.setAttribute("uv",new Mn(x,p)),R.setAttribute("faceIndex",new Mn(y,f)),e.push(R),i>rr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lc(r,e,t){const n=new Ii(r,e,t);return n.texture.mapping=Js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function s_(r,e,t){const n=new Float32Array(Ti),i=new I(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Io(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function cc(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function hc(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Io(){return`

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
	`}function a_(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===io||l===ro,h=l===fr||l===pr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new oc(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new oc(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function o_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function l_(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let x=0,y=S.length;x<y;x+=3){const R=S[x+0],w=S[x+1],E=S[x+2];d.push(R,w,w,E,E,R)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,y=S.length/3-1;x<y;x+=3){const R=x+0,w=x+1,E=x+2;d.push(R,w,w,E,E,R)}}else return;const p=new(xh(d)?bh:Th)(d,1);p.version=_;const f=s.get(u);f&&e.remove(f),s.set(u,p)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function c_(r,e,t,n){const i=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){r.drawElements(s,g,a,m*l),t.update(g,s,1)}function u(m,g,_){if(_===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,g,a,m*l,_),t.update(g,s,_)}function d(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let f=0;for(let S=0;S<_;S++)f+=g[S];t.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function h_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function u_(r,e){return r[0]-e[0]}function d_(r,e){return Math.abs(e[1])-Math.abs(r[1])}function f_(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Tt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let N=function(){K.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var m=N;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let v=0;x===!0&&(v=1),y===!0&&(v=2),R===!0&&(v=3);let b=h.attributes.position.count*v,B=1;b>e.maxTextureSize&&(B=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const V=new Float32Array(b*B*4*_),K=new yh(V,b,B,_);K.type=Qn,K.needsUpdate=!0;const D=v*4;for(let z=0;z<_;z++){const Y=w[z],q=E[z],j=O[z],$=b*B*4*z;for(let ie=0;ie<Y.count;ie++){const re=ie*D;x===!0&&(o.fromBufferAttribute(Y,ie),V[$+re+0]=o.x,V[$+re+1]=o.y,V[$+re+2]=o.z,V[$+re+3]=0),y===!0&&(o.fromBufferAttribute(q,ie),V[$+re+4]=o.x,V[$+re+5]=o.y,V[$+re+6]=o.z,V[$+re+7]=0),R===!0&&(o.fromBufferAttribute(j,ie),V[$+re+8]=o.x,V[$+re+9]=o.y,V[$+re+10]=o.z,V[$+re+11]=j.itemSize===4?o.w:1)}}p={count:_,texture:K,size:new Oe(b,B)},s.set(h,p),h.addEventListener("dispose",N)}let f=0;for(let x=0;x<d.length;x++)f+=d[x];const S=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(r,"morphTargetBaseInfluence",S),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<g;y++){const R=_[y];R[0]=y,R[1]=d[y]}_.sort(d_);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(u_);const p=h.morphAttributes.position,f=h.morphAttributes.normal;let S=0;for(let y=0;y<8;y++){const R=a[y],w=R[0],E=R[1];w!==Number.MAX_SAFE_INTEGER&&E?(p&&h.getAttribute("morphTarget"+y)!==p[w]&&h.setAttribute("morphTarget"+y,p[w]),f&&h.getAttribute("morphNormal"+y)!==f[w]&&h.setAttribute("morphNormal"+y,f[w]),i[y]=E,S+=E):(p&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),f&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const x=h.morphTargetsRelative?1:1-S;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function p_(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Ch extends en{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:wi,h!==wi&&h!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===wi&&(n=Jn),n===void 0&&h===mr&&(n=Ai),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ph=new en,Dh=new Ch(1,1);Dh.compareFunction=vh;const Ih=new yh,Oh=new Zd,Uh=new Rh,uc=[],dc=[],fc=new Float32Array(16),pc=new Float32Array(9),mc=new Float32Array(4);function Ar(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=uc[i];if(s===void 0&&(s=new Float32Array(i),uc[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function xt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function St(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function na(r,e){let t=dc[e];t===void 0&&(t=new Int32Array(e),dc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function m_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function __(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2fv(this.addr,e),St(t,e)}}function g_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;r.uniform3fv(this.addr,e),St(t,e)}}function v_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4fv(this.addr,e),St(t,e)}}function x_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(xt(t,n))return;mc.set(n),r.uniformMatrix2fv(this.addr,!1,mc),St(t,n)}}function S_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(xt(t,n))return;pc.set(n),r.uniformMatrix3fv(this.addr,!1,pc),St(t,n)}}function M_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(xt(t,n))return;fc.set(n),r.uniformMatrix4fv(this.addr,!1,fc),St(t,n)}}function y_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function E_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2iv(this.addr,e),St(t,e)}}function T_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3iv(this.addr,e),St(t,e)}}function b_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4iv(this.addr,e),St(t,e)}}function A_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function w_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2uiv(this.addr,e),St(t,e)}}function R_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3uiv(this.addr,e),St(t,e)}}function L_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4uiv(this.addr,e),St(t,e)}}function C_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Dh:Ph;t.setTexture2D(e||s,i)}function P_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Oh,i)}function D_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Uh,i)}function I_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ih,i)}function O_(r){switch(r){case 5126:return m_;case 35664:return __;case 35665:return g_;case 35666:return v_;case 35674:return x_;case 35675:return S_;case 35676:return M_;case 5124:case 35670:return y_;case 35667:case 35671:return E_;case 35668:case 35672:return T_;case 35669:case 35673:return b_;case 5125:return A_;case 36294:return w_;case 36295:return R_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return I_}}function U_(r,e){r.uniform1fv(this.addr,e)}function N_(r,e){const t=Ar(e,this.size,2);r.uniform2fv(this.addr,t)}function F_(r,e){const t=Ar(e,this.size,3);r.uniform3fv(this.addr,t)}function B_(r,e){const t=Ar(e,this.size,4);r.uniform4fv(this.addr,t)}function z_(r,e){const t=Ar(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function k_(r,e){const t=Ar(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function G_(r,e){const t=Ar(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function H_(r,e){r.uniform1iv(this.addr,e)}function V_(r,e){r.uniform2iv(this.addr,e)}function W_(r,e){r.uniform3iv(this.addr,e)}function X_(r,e){r.uniform4iv(this.addr,e)}function Y_(r,e){r.uniform1uiv(this.addr,e)}function q_(r,e){r.uniform2uiv(this.addr,e)}function K_(r,e){r.uniform3uiv(this.addr,e)}function j_(r,e){r.uniform4uiv(this.addr,e)}function $_(r,e,t){const n=this.cache,i=e.length,s=na(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ph,s[o])}function Z_(r,e,t){const n=this.cache,i=e.length,s=na(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Oh,s[o])}function J_(r,e,t){const n=this.cache,i=e.length,s=na(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Uh,s[o])}function Q_(r,e,t){const n=this.cache,i=e.length,s=na(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ih,s[o])}function eg(r){switch(r){case 5126:return U_;case 35664:return N_;case 35665:return F_;case 35666:return B_;case 35674:return z_;case 35675:return k_;case 35676:return G_;case 5124:case 35670:return H_;case 35667:case 35671:return V_;case 35668:case 35672:return W_;case 35669:case 35673:return X_;case 5125:return Y_;case 36294:return q_;case 36295:return K_;case 36296:return j_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return Q_}}class tg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=O_(t.type)}}class ng{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eg(t.type)}}class ig{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function _c(r,e){r.seq.push(e),r.map[e.id]=e}function rg(r,e,t){const n=r.name,i=n.length;for(ka.lastIndex=0;;){const s=ka.exec(n),o=ka.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){_c(t,c===void 0?new tg(a,r,e):new ng(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new ig(a),_c(t,u)),t=u}}}class Us{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);rg(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function gc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const sg=37297;let ag=0;function og(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function lg(r){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(r);let n;switch(e===t?n="":e===Hs&&t===Gs?n="LinearDisplayP3ToLinearSRGB":e===Gs&&t===Hs&&(n="LinearSRGBToLinearDisplayP3"),r){case Vn:case Qs:return[n,"LinearTransferOETF"];case Rt:case Lo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function vc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+og(r.getShaderSource(e),o)}else return i}function cg(r,e){const t=lg(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hg(r,e){let t;switch(e){case vd:t="Linear";break;case xd:t="Reinhard";break;case Sd:t="OptimizedCineon";break;case Md:t="ACESFilmic";break;case Ed:t="AgX";break;case yd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ug(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sr).join(`
`)}function dg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(sr).join(`
`)}function fg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pg(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function sr(r){return r!==""}function xc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(r){return r.replace(mg,gg)}const _g=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function gg(r,e){let t=ze[e];if(t===void 0){const n=_g.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ho(t)}const vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mc(r){return r.replace(vg,xg)}function xg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function yc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ah?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function Mg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case fr:case pr:e="ENVMAP_TYPE_CUBE";break;case Js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yg(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===pr&&(e="ENVMAP_MODE_REFRACTION"),e}function Eg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case oh:e="ENVMAP_BLENDING_MULTIPLY";break;case _d:e="ENVMAP_BLENDING_MIX";break;case gd:e="ENVMAP_BLENDING_ADD";break}return e}function Tg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function bg(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Sg(t),c=Mg(t),h=yg(t),u=Eg(t),d=Tg(t),m=t.isWebGL2?"":ug(t),g=dg(t),_=fg(s),p=i.createProgram();let f,S,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(sr).join(`
`),f.length>0&&(f+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(sr).join(`
`),S.length>0&&(S+=`
`)):(f=[yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),S=[m,yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?ze.tonemapping_pars_fragment:"",t.toneMapping!==ri?hg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,cg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),o=ho(o),o=xc(o,t),o=Sc(o,t),a=ho(a),a=xc(a,t),a=Sc(a,t),o=Mc(o),a=Mc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const y=x+f+o,R=x+S+a,w=gc(i,i.VERTEX_SHADER,y),E=gc(i,i.FRAGMENT_SHADER,R);i.attachShader(p,w),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function O(V){if(r.debug.checkShaderErrors){const K=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(w).trim(),N=i.getShaderInfoLog(E).trim();let z=!0,Y=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,w,E);else{const q=vc(i,w,"vertex"),j=vc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+q+`
`+j)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(D===""||N==="")&&(Y=!1);Y&&(V.diagnostics={runnable:z,programLog:K,vertexShader:{log:D,prefix:f},fragmentShader:{log:N,prefix:S}})}i.deleteShader(w),i.deleteShader(E),v=new Us(i,p),b=pg(i,p)}let v;this.getUniforms=function(){return v===void 0&&O(this),v};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(p,sg)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ag++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=E,this}let Ag=0;class wg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rg(e),t.set(e,n)),n}}class Rg{constructor(e){this.id=Ag++,this.code=e,this.usedTimes=0}}function Lg(r,e,t,n,i,s,o){const a=new Co,l=new wg,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function p(v,b,B,V,K){const D=V.fog,N=K.geometry,z=v.isMeshStandardMaterial?V.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),q=Y&&Y.mapping===Js?Y.image.height:null,j=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ie=$!==void 0?$.length:0;let re=0;N.morphAttributes.position!==void 0&&(re=1),N.morphAttributes.normal!==void 0&&(re=2),N.morphAttributes.color!==void 0&&(re=3);let X,Z,le,Se;if(j){const dt=Rn[j];X=dt.vertexShader,Z=dt.fragmentShader}else X=v.vertexShader,Z=v.fragmentShader,l.update(v),le=l.getVertexShaderID(v),Se=l.getFragmentShaderID(v);const ve=r.getRenderTarget(),De=K.isInstancedMesh===!0,Ie=K.isBatchedMesh===!0,Ae=!!v.map,We=!!v.matcap,k=!!Y,wt=!!v.aoMap,Ee=!!v.lightMap,Le=!!v.bumpMap,_e=!!v.normalMap,nt=!!v.displacementMap,Ne=!!v.emissiveMap,A=!!v.metalnessMap,M=!!v.roughnessMap,F=v.anisotropy>0,te=v.clearcoat>0,Q=v.iridescence>0,ne=v.sheen>0,ge=v.transmission>0,he=F&&!!v.anisotropyMap,pe=te&&!!v.clearcoatMap,be=te&&!!v.clearcoatNormalMap,Fe=te&&!!v.clearcoatRoughnessMap,J=Q&&!!v.iridescenceMap,Ze=Q&&!!v.iridescenceThicknessMap,ke=ne&&!!v.sheenColorMap,Ce=ne&&!!v.sheenRoughnessMap,ye=!!v.specularMap,ue=!!v.specularColorMap,L=!!v.specularIntensityMap,se=ge&&!!v.transmissionMap,xe=ge&&!!v.thicknessMap,fe=!!v.gradientMap,ee=!!v.alphaMap,P=v.alphaTest>0,ae=!!v.alphaHash,ce=!!v.extensions,we=!!N.attributes.uv1,Te=!!N.attributes.uv2,Xe=!!N.attributes.uv3;let Ye=ri;return v.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ye=r.toneMapping),{isWebGL2:h,shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:Z,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:Se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Ie,instancing:De,instancingColor:De&&K.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ve===null?r.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Vn,map:Ae,matcap:We,envMap:k,envMapMode:k&&Y.mapping,envMapCubeUVHeight:q,aoMap:wt,lightMap:Ee,bumpMap:Le,normalMap:_e,displacementMap:d&&nt,emissiveMap:Ne,normalMapObjectSpace:_e&&v.normalMapType===Ud,normalMapTangentSpace:_e&&v.normalMapType===gh,metalnessMap:A,roughnessMap:M,anisotropy:F,anisotropyMap:he,clearcoat:te,clearcoatMap:pe,clearcoatNormalMap:be,clearcoatRoughnessMap:Fe,iridescence:Q,iridescenceMap:J,iridescenceThicknessMap:Ze,sheen:ne,sheenColorMap:ke,sheenRoughnessMap:Ce,specularMap:ye,specularColorMap:ue,specularIntensityMap:L,transmission:ge,transmissionMap:se,thicknessMap:xe,gradientMap:fe,opaque:v.transparent===!1&&v.blending===lr,alphaMap:ee,alphaTest:P,alphaHash:ae,combine:v.combine,mapUv:Ae&&_(v.map.channel),aoMapUv:wt&&_(v.aoMap.channel),lightMapUv:Ee&&_(v.lightMap.channel),bumpMapUv:Le&&_(v.bumpMap.channel),normalMapUv:_e&&_(v.normalMap.channel),displacementMapUv:nt&&_(v.displacementMap.channel),emissiveMapUv:Ne&&_(v.emissiveMap.channel),metalnessMapUv:A&&_(v.metalnessMap.channel),roughnessMapUv:M&&_(v.roughnessMap.channel),anisotropyMapUv:he&&_(v.anisotropyMap.channel),clearcoatMapUv:pe&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(v.sheenRoughnessMap.channel),specularMapUv:ye&&_(v.specularMap.channel),specularColorMapUv:ue&&_(v.specularColorMap.channel),specularIntensityMapUv:L&&_(v.specularIntensityMap.channel),transmissionMapUv:se&&_(v.transmissionMap.channel),thicknessMapUv:xe&&_(v.thicknessMap.channel),alphaMapUv:ee&&_(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(_e||F),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:Te,vertexUv3s:Xe,pointsUvs:K.isPoints===!0&&!!N.attributes.uv&&(Ae||ee),fog:!!D,useFog:v.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:re,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ye,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ae&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===it,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===vn,flipSided:v.side===kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ce&&v.extensions.derivatives===!0,extensionFragDepth:ce&&v.extensions.fragDepth===!0,extensionDrawBuffers:ce&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const B in v.defines)b.push(B),b.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(S(b,v),x(b,v),b.push(r.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function S(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function x(v,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function y(v){const b=g[v.type];let B;if(b){const V=Rn[b];B=uf.clone(V.uniforms)}else B=v.uniforms;return B}function R(v,b){let B;for(let V=0,K=c.length;V<K;V++){const D=c[V];if(D.cacheKey===b){B=D,++B.usedTimes;break}}return B===void 0&&(B=new bg(r,b,v,s),c.push(B)),B}function w(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),v.destroy()}}function E(v){l.remove(v)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:R,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:O}}function Cg(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Pg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ec(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Tc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,m,g,_,p){let f=r[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},r[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),e++,f}function a(u,d,m,g,_,p){const f=o(u,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):t.push(f)}function l(u,d,m,g,_,p){const f=o(u,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Pg),n.length>1&&n.sort(d||Ec),i.length>1&&i.sort(d||Ec)}function h(){for(let u=e,d=r.length;u<d;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Dg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Tc,r.set(n,[o])):i>=s.length?(o=new Tc,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ig(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new qe};break;case"SpotLight":t={position:new I,direction:new I,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function Og(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ug=0;function Ng(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Fg(r,e){const t=new Ig,n=Og(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new I);const s=new I,o=new tt,a=new tt;function l(h,u){let d=0,m=0,g=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let _=0,p=0,f=0,S=0,x=0,y=0,R=0,w=0,E=0,O=0,v=0;h.sort(Ng);const b=u===!0?Math.PI:1;for(let V=0,K=h.length;V<K;V++){const D=h[V],N=D.color,z=D.intensity,Y=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=N.r*z*b,m+=N.g*z*b,g+=N.b*z*b;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],z);v++}else if(D.isDirectionalLight){const j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const $=D.shadow,ie=n.get(D);ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,i.directionalShadow[_]=ie,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=D.shadow.matrix,y++}i.directional[_]=j,_++}else if(D.isSpotLight){const j=t.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(N).multiplyScalar(z*b),j.distance=Y,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[f]=j;const $=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,$.updateMatrices(D),D.castShadow&&O++),i.spotLightMatrix[f]=$.matrix,D.castShadow){const ie=n.get(D);ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,i.spotShadow[f]=ie,i.spotShadowMap[f]=q,w++}f++}else if(D.isRectAreaLight){const j=t.get(D);j.color.copy(N).multiplyScalar(z),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[S]=j,S++}else if(D.isPointLight){const j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*b),j.distance=D.distance,j.decay=D.decay,D.castShadow){const $=D.shadow,ie=n.get(D);ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,ie.shadowCameraNear=$.camera.near,ie.shadowCameraFar=$.camera.far,i.pointShadow[p]=ie,i.pointShadowMap[p]=q,i.pointShadowMatrix[p]=D.shadow.matrix,R++}i.point[p]=j,p++}else if(D.isHemisphereLight){const j=t.get(D);j.skyColor.copy(D.color).multiplyScalar(z*b),j.groundColor.copy(D.groundColor).multiplyScalar(z*b),i.hemi[x]=j,x++}}S>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const B=i.hash;(B.directionalLength!==_||B.pointLength!==p||B.spotLength!==f||B.rectAreaLength!==S||B.hemiLength!==x||B.numDirectionalShadows!==y||B.numPointShadows!==R||B.numSpotShadows!==w||B.numSpotMaps!==E||B.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=S,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=w+E-O,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=v,B.directionalLength=_,B.pointLength=p,B.spotLength=f,B.rectAreaLength=S,B.hemiLength=x,B.numDirectionalShadows=y,B.numPointShadows=R,B.numSpotShadows=w,B.numSpotMaps=E,B.numLightProbes=v,i.version=Ug++)}function c(h,u){let d=0,m=0,g=0,_=0,p=0;const f=u.matrixWorldInverse;for(let S=0,x=h.length;S<x;S++){const y=h[S];if(y.isDirectionalLight){const R=i.directional[d];R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),d++}else if(y.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const R=i.rectArea[_];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const R=i.point[m];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(f),m++}else if(y.isHemisphereLight){const R=i.hemi[p];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:i}}function bc(r,e){const t=new Fg(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Bg(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new bc(r,e),t.set(s,[l])):o>=a.length?(l=new bc(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class zg extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kg extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hg=`uniform sampler2D shadow_pass;
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
}`;function Vg(r,e,t){let n=new Po;const i=new Oe,s=new Oe,o=new Tt,a=new zg({depthPacking:Od}),l=new kg,c={},h=t.maxTextureSize,u={[li]:kt,[kt]:li,[vn]:vn},d=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Gg,fragmentShader:Hg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new En;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Et(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ah;let f=this.type;this.render=function(w,E,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const v=r.getRenderTarget(),b=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),V=r.state;V.setBlending(ii),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const K=f!==Bn&&this.type===Bn,D=f===Bn&&this.type!==Bn;for(let N=0,z=w.length;N<z;N++){const Y=w[N],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const j=q.getFrameExtents();if(i.multiply(j),s.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/j.x),i.x=s.x*j.x,q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/j.y),i.y=s.y*j.y,q.mapSize.y=s.y)),q.map===null||K===!0||D===!0){const ie=this.type!==Bn?{minFilter:Nt,magFilter:Nt}:{};q.map!==null&&q.map.dispose(),q.map=new Ii(i.x,i.y,ie),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const $=q.getViewportCount();for(let ie=0;ie<$;ie++){const re=q.getViewport(ie);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),V.viewport(o),q.updateMatrices(Y,ie),n=q.getFrustum(),y(E,O,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===Bn&&S(q,O),q.needsUpdate=!1}f=this.type,p.needsUpdate=!1,r.setRenderTarget(v,b,B)};function S(w,E){const O=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ii(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,O,d,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,O,m,_,null)}function x(w,E,O,v){let b=null;const B=O.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(B!==void 0)b=B;else if(b=O.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const V=b.uuid,K=E.uuid;let D=c[V];D===void 0&&(D={},c[V]=D);let N=D[K];N===void 0&&(N=b.clone(),D[K]=N,E.addEventListener("dispose",R)),b=N}if(b.visible=E.visible,b.wireframe=E.wireframe,v===Bn?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:u[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=r.properties.get(b);V.light=O}return b}function y(w,E,O,v,b){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Bn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld);const K=e.update(w),D=w.material;if(Array.isArray(D)){const N=K.groups;for(let z=0,Y=N.length;z<Y;z++){const q=N[z],j=D[q.materialIndex];if(j&&j.visible){const $=x(w,j,v,b);w.onBeforeShadow(r,w,E,O,K,$,q),r.renderBufferDirect(O,null,K,$,w,q),w.onAfterShadow(r,w,E,O,K,$,q)}}}else if(D.visible){const N=x(w,D,v,b);w.onBeforeShadow(r,w,E,O,K,N,null),r.renderBufferDirect(O,null,K,N,w,null),w.onAfterShadow(r,w,E,O,K,N,null)}}const V=w.children;for(let K=0,D=V.length;K<D;K++)y(V[K],E,O,v,b)}function R(w){w.target.removeEventListener("dispose",R);for(const O in c){const v=c[O],b=w.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}function Wg(r,e,t){const n=t.isWebGL2;function i(){let P=!1;const ae=new Tt;let ce=null;const we=new Tt(0,0,0,0);return{setMask:function(Te){ce!==Te&&!P&&(r.colorMask(Te,Te,Te,Te),ce=Te)},setLocked:function(Te){P=Te},setClear:function(Te,Xe,Ye,ct,dt){dt===!0&&(Te*=ct,Xe*=ct,Ye*=ct),ae.set(Te,Xe,Ye,ct),we.equals(ae)===!1&&(r.clearColor(Te,Xe,Ye,ct),we.copy(ae))},reset:function(){P=!1,ce=null,we.set(-1,0,0,0)}}}function s(){let P=!1,ae=null,ce=null,we=null;return{setTest:function(Te){Te?Ie(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(Te){ae!==Te&&!P&&(r.depthMask(Te),ae=Te)},setFunc:function(Te){if(ce!==Te){switch(Te){case cd:r.depthFunc(r.NEVER);break;case hd:r.depthFunc(r.ALWAYS);break;case ud:r.depthFunc(r.LESS);break;case zs:r.depthFunc(r.LEQUAL);break;case dd:r.depthFunc(r.EQUAL);break;case fd:r.depthFunc(r.GEQUAL);break;case pd:r.depthFunc(r.GREATER);break;case md:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=Te}},setLocked:function(Te){P=Te},setClear:function(Te){we!==Te&&(r.clearDepth(Te),we=Te)},reset:function(){P=!1,ae=null,ce=null,we=null}}}function o(){let P=!1,ae=null,ce=null,we=null,Te=null,Xe=null,Ye=null,ct=null,dt=null;return{setTest:function($e){P||($e?Ie(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function($e){ae!==$e&&!P&&(r.stencilMask($e),ae=$e)},setFunc:function($e,_t,Tn){(ce!==$e||we!==_t||Te!==Tn)&&(r.stencilFunc($e,_t,Tn),ce=$e,we=_t,Te=Tn)},setOp:function($e,_t,Tn){(Xe!==$e||Ye!==_t||ct!==Tn)&&(r.stencilOp($e,_t,Tn),Xe=$e,Ye=_t,ct=Tn)},setLocked:function($e){P=$e},setClear:function($e){dt!==$e&&(r.clearStencil($e),dt=$e)},reset:function(){P=!1,ae=null,ce=null,we=null,Te=null,Xe=null,Ye=null,ct=null,dt=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,f=!1,S=null,x=null,y=null,R=null,w=null,E=null,O=null,v=new qe(0,0,0),b=0,B=!1,V=null,K=null,D=null,N=null,z=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),q=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=j>=2);let ie=null,re={};const X=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),le=new Tt().fromArray(X),Se=new Tt().fromArray(Z);function ve(P,ae,ce,we){const Te=new Uint8Array(4),Xe=r.createTexture();r.bindTexture(P,Xe),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ye=0;Ye<ce;Ye++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(ae,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,Te):r.texImage2D(ae+Ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Te);return Xe}const De={};De[r.TEXTURE_2D]=ve(r.TEXTURE_2D,r.TEXTURE_2D,1),De[r.TEXTURE_CUBE_MAP]=ve(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[r.TEXTURE_2D_ARRAY]=ve(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),De[r.TEXTURE_3D]=ve(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(r.DEPTH_TEST),l.setFunc(zs),Ne(!1),A(al),Ie(r.CULL_FACE),_e(ii);function Ie(P){d[P]!==!0&&(r.enable(P),d[P]=!0)}function Ae(P){d[P]!==!1&&(r.disable(P),d[P]=!1)}function We(P,ae){return m[P]!==ae?(r.bindFramebuffer(P,ae),m[P]=ae,n&&(P===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=ae),P===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=ae)),!0):!1}function k(P,ae){let ce=_,we=!1;if(P)if(ce=g.get(ae),ce===void 0&&(ce=[],g.set(ae,ce)),P.isWebGLMultipleRenderTargets){const Te=P.texture;if(ce.length!==Te.length||ce[0]!==r.COLOR_ATTACHMENT0){for(let Xe=0,Ye=Te.length;Xe<Ye;Xe++)ce[Xe]=r.COLOR_ATTACHMENT0+Xe;ce.length=Te.length,we=!0}}else ce[0]!==r.COLOR_ATTACHMENT0&&(ce[0]=r.COLOR_ATTACHMENT0,we=!0);else ce[0]!==r.BACK&&(ce[0]=r.BACK,we=!0);we&&(t.isWebGL2?r.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function wt(P){return p!==P?(r.useProgram(P),p=P,!0):!1}const Ee={[Ei]:r.FUNC_ADD,[Ku]:r.FUNC_SUBTRACT,[ju]:r.FUNC_REVERSE_SUBTRACT};if(n)Ee[hl]=r.MIN,Ee[ul]=r.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ee[hl]=P.MIN_EXT,Ee[ul]=P.MAX_EXT)}const Le={[$u]:r.ZERO,[Zu]:r.ONE,[Ju]:r.SRC_COLOR,[to]:r.SRC_ALPHA,[rd]:r.SRC_ALPHA_SATURATE,[nd]:r.DST_COLOR,[ed]:r.DST_ALPHA,[Qu]:r.ONE_MINUS_SRC_COLOR,[no]:r.ONE_MINUS_SRC_ALPHA,[id]:r.ONE_MINUS_DST_COLOR,[td]:r.ONE_MINUS_DST_ALPHA,[sd]:r.CONSTANT_COLOR,[ad]:r.ONE_MINUS_CONSTANT_COLOR,[od]:r.CONSTANT_ALPHA,[ld]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(P,ae,ce,we,Te,Xe,Ye,ct,dt,$e){if(P===ii){f===!0&&(Ae(r.BLEND),f=!1);return}if(f===!1&&(Ie(r.BLEND),f=!0),P!==qu){if(P!==S||$e!==B){if((x!==Ei||w!==Ei)&&(r.blendEquation(r.FUNC_ADD),x=Ei,w=Ei),$e)switch(P){case lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ol:r.blendFunc(r.ONE,r.ONE);break;case ll:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ol:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ll:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,R=null,E=null,O=null,v.set(0,0,0),b=0,S=P,B=$e}return}Te=Te||ae,Xe=Xe||ce,Ye=Ye||we,(ae!==x||Te!==w)&&(r.blendEquationSeparate(Ee[ae],Ee[Te]),x=ae,w=Te),(ce!==y||we!==R||Xe!==E||Ye!==O)&&(r.blendFuncSeparate(Le[ce],Le[we],Le[Xe],Le[Ye]),y=ce,R=we,E=Xe,O=Ye),(ct.equals(v)===!1||dt!==b)&&(r.blendColor(ct.r,ct.g,ct.b,dt),v.copy(ct),b=dt),S=P,B=!1}function nt(P,ae){P.side===vn?Ae(r.CULL_FACE):Ie(r.CULL_FACE);let ce=P.side===kt;ae&&(ce=!ce),Ne(ce),P.blending===lr&&P.transparent===!1?_e(ii):_e(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const we=P.stencilWrite;c.setTest(we),we&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),F(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ie(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(P){V!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),V=P)}function A(P){P!==Wu?(Ie(r.CULL_FACE),P!==K&&(P===al?r.cullFace(r.BACK):P===Xu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),K=P}function M(P){P!==D&&(q&&r.lineWidth(P),D=P)}function F(P,ae,ce){P?(Ie(r.POLYGON_OFFSET_FILL),(N!==ae||z!==ce)&&(r.polygonOffset(ae,ce),N=ae,z=ce)):Ae(r.POLYGON_OFFSET_FILL)}function te(P){P?Ie(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function Q(P){P===void 0&&(P=r.TEXTURE0+Y-1),ie!==P&&(r.activeTexture(P),ie=P)}function ne(P,ae,ce){ce===void 0&&(ie===null?ce=r.TEXTURE0+Y-1:ce=ie);let we=re[ce];we===void 0&&(we={type:void 0,texture:void 0},re[ce]=we),(we.type!==P||we.texture!==ae)&&(ie!==ce&&(r.activeTexture(ce),ie=ce),r.bindTexture(P,ae||De[P]),we.type=P,we.texture=ae)}function ge(){const P=re[ie];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function he(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ze(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ke(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function L(P){le.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),le.copy(P))}function se(P){Se.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),Se.copy(P))}function xe(P,ae){let ce=u.get(ae);ce===void 0&&(ce=new WeakMap,u.set(ae,ce));let we=ce.get(P);we===void 0&&(we=r.getUniformBlockIndex(ae,P.name),ce.set(P,we))}function fe(P,ae){const we=u.get(ae).get(P);h.get(ae)!==we&&(r.uniformBlockBinding(ae,we,P.__bindingPointIndex),h.set(ae,we))}function ee(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},ie=null,re={},m={},g=new WeakMap,_=[],p=null,f=!1,S=null,x=null,y=null,R=null,w=null,E=null,O=null,v=new qe(0,0,0),b=0,B=!1,V=null,K=null,D=null,N=null,z=null,le.set(0,0,r.canvas.width,r.canvas.height),Se.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:Ae,bindFramebuffer:We,drawBuffers:k,useProgram:wt,setBlending:_e,setMaterial:nt,setFlipSided:Ne,setCullFace:A,setLineWidth:M,setPolygonOffset:F,setScissorTest:te,activeTexture:Q,bindTexture:ne,unbindTexture:ge,compressedTexImage2D:he,compressedTexImage3D:pe,texImage2D:ye,texImage3D:ue,updateUBOMapping:xe,uniformBlockBinding:fe,texStorage2D:ke,texStorage3D:Ce,texSubImage2D:be,texSubImage3D:Fe,compressedTexSubImage2D:J,compressedTexSubImage3D:Ze,scissor:L,viewport:se,reset:ee}}function Xg(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return m?new OffscreenCanvas(A,M):Ws("canvas")}function _(A,M,F,te){let Q=1;if((A.width>te||A.height>te)&&(Q=te/Math.max(A.width,A.height)),Q<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ne=M?co:Math.floor,ge=ne(Q*A.width),he=ne(Q*A.height);u===void 0&&(u=g(ge,he));const pe=F?g(ge,he):u;return pe.width=ge,pe.height=he,pe.getContext("2d").drawImage(A,0,0,ge,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ge+"x"+he+")."),pe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return Gl(A.width)&&Gl(A.height)}function f(A){return a?!1:A.wrapS!==xn||A.wrapT!==xn||A.minFilter!==Nt&&A.minFilter!==cn}function S(A,M){return A.generateMipmaps&&M&&A.minFilter!==Nt&&A.minFilter!==cn}function x(A){r.generateMipmap(A)}function y(A,M,F,te,Q=!1){if(a===!1)return M;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ne=M;if(M===r.RED&&(F===r.FLOAT&&(ne=r.R32F),F===r.HALF_FLOAT&&(ne=r.R16F),F===r.UNSIGNED_BYTE&&(ne=r.R8)),M===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(ne=r.R8UI),F===r.UNSIGNED_SHORT&&(ne=r.R16UI),F===r.UNSIGNED_INT&&(ne=r.R32UI),F===r.BYTE&&(ne=r.R8I),F===r.SHORT&&(ne=r.R16I),F===r.INT&&(ne=r.R32I)),M===r.RG&&(F===r.FLOAT&&(ne=r.RG32F),F===r.HALF_FLOAT&&(ne=r.RG16F),F===r.UNSIGNED_BYTE&&(ne=r.RG8)),M===r.RGBA){const ge=Q?ks:Je.getTransfer(te);F===r.FLOAT&&(ne=r.RGBA32F),F===r.HALF_FLOAT&&(ne=r.RGBA16F),F===r.UNSIGNED_BYTE&&(ne=ge===it?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function R(A,M,F){return S(A,F)===!0||A.isFramebufferTexture&&A.minFilter!==Nt&&A.minFilter!==cn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function w(A){return A===Nt||A===dl||A===da?r.NEAREST:r.LINEAR}function E(A){const M=A.target;M.removeEventListener("dispose",E),v(M),M.isVideoTexture&&h.delete(M)}function O(A){const M=A.target;M.removeEventListener("dispose",O),B(M)}function v(A){const M=n.get(A);if(M.__webglInit===void 0)return;const F=A.source,te=d.get(F);if(te){const Q=te[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(A),Object.keys(te).length===0&&d.delete(F)}n.remove(A)}function b(A){const M=n.get(A);r.deleteTexture(M.__webglTexture);const F=A.source,te=d.get(F);delete te[M.__cacheKey],o.memory.textures--}function B(A){const M=A.texture,F=n.get(A),te=n.get(M);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(F.__webglFramebuffer[Q]))for(let ne=0;ne<F.__webglFramebuffer[Q].length;ne++)r.deleteFramebuffer(F.__webglFramebuffer[Q][ne]);else r.deleteFramebuffer(F.__webglFramebuffer[Q]);F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer[Q])}else{if(Array.isArray(F.__webglFramebuffer))for(let Q=0;Q<F.__webglFramebuffer.length;Q++)r.deleteFramebuffer(F.__webglFramebuffer[Q]);else r.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&r.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Q=0;Q<F.__webglColorRenderbuffer.length;Q++)F.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(F.__webglColorRenderbuffer[Q]);F.__webglDepthRenderbuffer&&r.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Q=0,ne=M.length;Q<ne;Q++){const ge=n.get(M[Q]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(M[Q])}n.remove(M),n.remove(A)}let V=0;function K(){V=0}function D(){const A=V;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),V+=1,A}function N(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function z(A,M){const F=n.get(A);if(A.isVideoTexture&&nt(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(F,A,M);return}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+M)}function Y(A,M){const F=n.get(A);if(A.version>0&&F.__version!==A.version){le(F,A,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+M)}function q(A,M){const F=n.get(A);if(A.version>0&&F.__version!==A.version){le(F,A,M);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+M)}function j(A,M){const F=n.get(A);if(A.version>0&&F.__version!==A.version){Se(F,A,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+M)}const $={[so]:r.REPEAT,[xn]:r.CLAMP_TO_EDGE,[ao]:r.MIRRORED_REPEAT},ie={[Nt]:r.NEAREST,[dl]:r.NEAREST_MIPMAP_NEAREST,[da]:r.NEAREST_MIPMAP_LINEAR,[cn]:r.LINEAR,[Td]:r.LINEAR_MIPMAP_NEAREST,[Wr]:r.LINEAR_MIPMAP_LINEAR},re={[Nd]:r.NEVER,[Hd]:r.ALWAYS,[Fd]:r.LESS,[vh]:r.LEQUAL,[Bd]:r.EQUAL,[Gd]:r.GEQUAL,[zd]:r.GREATER,[kd]:r.NOTEQUAL};function X(A,M,F){if(F?(r.texParameteri(A,r.TEXTURE_WRAP_S,$[M.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,$[M.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,$[M.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,ie[M.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,ie[M.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==xn||M.wrapT!==xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,w(M.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==Nt&&M.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Nt||M.minFilter!==da&&M.minFilter!==Wr||M.type===Qn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Xr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(A,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Z(A,M){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",E));const te=M.source;let Q=d.get(te);Q===void 0&&(Q={},d.set(te,Q));const ne=N(M);if(ne!==A.__cacheKey){Q[ne]===void 0&&(Q[ne]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[ne].usedTimes++;const ge=Q[A.__cacheKey];ge!==void 0&&(Q[A.__cacheKey].usedTimes--,ge.usedTimes===0&&b(M)),A.__cacheKey=ne,A.__webglTexture=Q[ne].texture}return F}function le(A,M,F){let te=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=r.TEXTURE_3D);const Q=Z(A,M),ne=M.source;t.bindTexture(te,A.__webglTexture,r.TEXTURE0+F);const ge=n.get(ne);if(ne.version!==ge.__version||Q===!0){t.activeTexture(r.TEXTURE0+F);const he=Je.getPrimaries(Je.workingColorSpace),pe=M.colorSpace===un?null:Je.getPrimaries(M.colorSpace),be=M.colorSpace===un||he===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Fe=f(M)&&p(M.image)===!1;let J=_(M.image,Fe,!1,i.maxTextureSize);J=Ne(M,J);const Ze=p(J)||a,ke=s.convert(M.format,M.colorSpace);let Ce=s.convert(M.type),ye=y(M.internalFormat,ke,Ce,M.colorSpace,M.isVideoTexture);X(te,M,Ze);let ue;const L=M.mipmaps,se=a&&M.isVideoTexture!==!0&&ye!==mh,xe=ge.__version===void 0||Q===!0,fe=R(M,J,Ze);if(M.isDepthTexture)ye=r.DEPTH_COMPONENT,a?M.type===Qn?ye=r.DEPTH_COMPONENT32F:M.type===Jn?ye=r.DEPTH_COMPONENT24:M.type===Ai?ye=r.DEPTH24_STENCIL8:ye=r.DEPTH_COMPONENT16:M.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===wi&&ye===r.DEPTH_COMPONENT&&M.type!==Ro&&M.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Jn,Ce=s.convert(M.type)),M.format===mr&&ye===r.DEPTH_COMPONENT&&(ye=r.DEPTH_STENCIL,M.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ai,Ce=s.convert(M.type))),xe&&(se?t.texStorage2D(r.TEXTURE_2D,1,ye,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,ye,J.width,J.height,0,ke,Ce,null));else if(M.isDataTexture)if(L.length>0&&Ze){se&&xe&&t.texStorage2D(r.TEXTURE_2D,fe,ye,L[0].width,L[0].height);for(let ee=0,P=L.length;ee<P;ee++)ue=L[ee],se?t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ue.width,ue.height,ke,Ce,ue.data):t.texImage2D(r.TEXTURE_2D,ee,ye,ue.width,ue.height,0,ke,Ce,ue.data);M.generateMipmaps=!1}else se?(xe&&t.texStorage2D(r.TEXTURE_2D,fe,ye,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,ke,Ce,J.data)):t.texImage2D(r.TEXTURE_2D,0,ye,J.width,J.height,0,ke,Ce,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){se&&xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,ye,L[0].width,L[0].height,J.depth);for(let ee=0,P=L.length;ee<P;ee++)ue=L[ee],M.format!==Sn?ke!==null?se?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,J.depth,ke,ue.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,ye,ue.width,ue.height,J.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,J.depth,ke,Ce,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,ye,ue.width,ue.height,J.depth,0,ke,Ce,ue.data)}else{se&&xe&&t.texStorage2D(r.TEXTURE_2D,fe,ye,L[0].width,L[0].height);for(let ee=0,P=L.length;ee<P;ee++)ue=L[ee],M.format!==Sn?ke!==null?se?t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,ue.width,ue.height,ke,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,ye,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ue.width,ue.height,ke,Ce,ue.data):t.texImage2D(r.TEXTURE_2D,ee,ye,ue.width,ue.height,0,ke,Ce,ue.data)}else if(M.isDataArrayTexture)se?(xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,ye,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ke,Ce,J.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ye,J.width,J.height,J.depth,0,ke,Ce,J.data);else if(M.isData3DTexture)se?(xe&&t.texStorage3D(r.TEXTURE_3D,fe,ye,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ke,Ce,J.data)):t.texImage3D(r.TEXTURE_3D,0,ye,J.width,J.height,J.depth,0,ke,Ce,J.data);else if(M.isFramebufferTexture){if(xe)if(se)t.texStorage2D(r.TEXTURE_2D,fe,ye,J.width,J.height);else{let ee=J.width,P=J.height;for(let ae=0;ae<fe;ae++)t.texImage2D(r.TEXTURE_2D,ae,ye,ee,P,0,ke,Ce,null),ee>>=1,P>>=1}}else if(L.length>0&&Ze){se&&xe&&t.texStorage2D(r.TEXTURE_2D,fe,ye,L[0].width,L[0].height);for(let ee=0,P=L.length;ee<P;ee++)ue=L[ee],se?t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ke,Ce,ue):t.texImage2D(r.TEXTURE_2D,ee,ye,ke,Ce,ue);M.generateMipmaps=!1}else se?(xe&&t.texStorage2D(r.TEXTURE_2D,fe,ye,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,Ce,J)):t.texImage2D(r.TEXTURE_2D,0,ye,ke,Ce,J);S(M,Ze)&&x(te),ge.__version=ne.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Se(A,M,F){if(M.image.length!==6)return;const te=Z(A,M),Q=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+F);const ne=n.get(Q);if(Q.version!==ne.__version||te===!0){t.activeTexture(r.TEXTURE0+F);const ge=Je.getPrimaries(Je.workingColorSpace),he=M.colorSpace===un?null:Je.getPrimaries(M.colorSpace),pe=M.colorSpace===un||ge===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,Fe=M.image[0]&&M.image[0].isDataTexture,J=[];for(let ee=0;ee<6;ee++)!be&&!Fe?J[ee]=_(M.image[ee],!1,!0,i.maxCubemapSize):J[ee]=Fe?M.image[ee].image:M.image[ee],J[ee]=Ne(M,J[ee]);const Ze=J[0],ke=p(Ze)||a,Ce=s.convert(M.format,M.colorSpace),ye=s.convert(M.type),ue=y(M.internalFormat,Ce,ye,M.colorSpace),L=a&&M.isVideoTexture!==!0,se=ne.__version===void 0||te===!0;let xe=R(M,Ze,ke);X(r.TEXTURE_CUBE_MAP,M,ke);let fe;if(be){L&&se&&t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,ue,Ze.width,Ze.height);for(let ee=0;ee<6;ee++){fe=J[ee].mipmaps;for(let P=0;P<fe.length;P++){const ae=fe[P];M.format!==Sn?Ce!==null?L?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,P,0,0,ae.width,ae.height,Ce,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,P,ue,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,P,0,0,ae.width,ae.height,Ce,ye,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,P,ue,ae.width,ae.height,0,Ce,ye,ae.data)}}}else{fe=M.mipmaps,L&&se&&(fe.length>0&&xe++,t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,ue,J[0].width,J[0].height));for(let ee=0;ee<6;ee++)if(Fe){L?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,J[ee].width,J[ee].height,Ce,ye,J[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ue,J[ee].width,J[ee].height,0,Ce,ye,J[ee].data);for(let P=0;P<fe.length;P++){const ce=fe[P].image[ee].image;L?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,P+1,0,0,ce.width,ce.height,Ce,ye,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,P+1,ue,ce.width,ce.height,0,Ce,ye,ce.data)}}else{L?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ce,ye,J[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ue,Ce,ye,J[ee]);for(let P=0;P<fe.length;P++){const ae=fe[P];L?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,P+1,0,0,Ce,ye,ae.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,P+1,ue,Ce,ye,ae.image[ee])}}}S(M,ke)&&x(r.TEXTURE_CUBE_MAP),ne.__version=Q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ve(A,M,F,te,Q,ne){const ge=s.convert(F.format,F.colorSpace),he=s.convert(F.type),pe=y(F.internalFormat,ge,he,F.colorSpace);if(!n.get(M).__hasExternalTextures){const Fe=Math.max(1,M.width>>ne),J=Math.max(1,M.height>>ne);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,ne,pe,Fe,J,M.depth,0,ge,he,null):t.texImage2D(Q,ne,pe,Fe,J,0,ge,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),_e(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,Q,n.get(F).__webglTexture,0,Le(M)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,Q,n.get(F).__webglTexture,ne),t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(A,M,F){if(r.bindRenderbuffer(r.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let te=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(F||_e(M)){const Q=M.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Qn?te=r.DEPTH_COMPONENT32F:Q.type===Jn&&(te=r.DEPTH_COMPONENT24));const ne=Le(M);_e(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,te,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,te,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,te,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const te=Le(M);F&&_e(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,M.width,M.height):_e(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0;Q<te.length;Q++){const ne=te[Q],ge=s.convert(ne.format,ne.colorSpace),he=s.convert(ne.type),pe=y(ne.internalFormat,ge,he,ne.colorSpace),be=Le(M);F&&_e(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,pe,M.width,M.height):_e(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,pe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,pe,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ie(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const te=n.get(M.depthTexture).__webglTexture,Q=Le(M);if(M.depthTexture.format===wi)_e(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(M.depthTexture.format===mr)_e(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ae(A){const M=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ie(M.__webglFramebuffer,A)}else if(F){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=r.createRenderbuffer(),De(M.__webglDepthbuffer[te],A,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),De(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function We(A,M,F){const te=n.get(A);M!==void 0&&ve(te.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Ae(A)}function k(A){const M=A.texture,F=n.get(A),te=n.get(M);A.addEventListener("dispose",O),A.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=M.version,o.memory.textures++);const Q=A.isWebGLCubeRenderTarget===!0,ne=A.isWebGLMultipleRenderTargets===!0,ge=p(A)||a;if(Q){F.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[he]=[];for(let pe=0;pe<M.mipmaps.length;pe++)F.__webglFramebuffer[he][pe]=r.createFramebuffer()}else F.__webglFramebuffer[he]=r.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)F.__webglFramebuffer[he]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(ne)if(i.drawBuffers){const he=A.texture;for(let pe=0,be=he.length;pe<be;pe++){const Fe=n.get(he[pe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&_e(A)===!1){const he=ne?M:[M];F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const be=he[pe];F.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[pe]);const Fe=s.convert(be.format,be.colorSpace),J=s.convert(be.type),Ze=y(be.internalFormat,Fe,J,be.colorSpace,A.isXRRenderTarget===!0),ke=Le(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,Ze,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,F.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),De(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),X(r.TEXTURE_CUBE_MAP,M,ge);for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)ve(F.__webglFramebuffer[he][pe],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,pe);else ve(F.__webglFramebuffer[he],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);S(M,ge)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const he=A.texture;for(let pe=0,be=he.length;pe<be;pe++){const Fe=he[pe],J=n.get(Fe);t.bindTexture(r.TEXTURE_2D,J.__webglTexture),X(r.TEXTURE_2D,Fe,ge),ve(F.__webglFramebuffer,A,Fe,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,0),S(Fe,ge)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?he=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,te.__webglTexture),X(he,M,ge),a&&M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)ve(F.__webglFramebuffer[pe],A,M,r.COLOR_ATTACHMENT0,he,pe);else ve(F.__webglFramebuffer,A,M,r.COLOR_ATTACHMENT0,he,0);S(M,ge)&&x(he),t.unbindTexture()}A.depthBuffer&&Ae(A)}function wt(A){const M=p(A)||a,F=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0,Q=F.length;te<Q;te++){const ne=F[te];if(S(ne,M)){const ge=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,he=n.get(ne).__webglTexture;t.bindTexture(ge,he),x(ge),t.unbindTexture()}}}function Ee(A){if(a&&A.samples>0&&_e(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],F=A.width,te=A.height;let Q=r.COLOR_BUFFER_BIT;const ne=[],ge=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=n.get(A),pe=A.isWebGLMultipleRenderTargets===!0;if(pe)for(let be=0;be<M.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let be=0;be<M.length;be++){ne.push(r.COLOR_ATTACHMENT0+be),A.depthBuffer&&ne.push(ge);const Fe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Fe===!1&&(A.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),pe&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,he.__webglColorRenderbuffer[be]),Fe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ge]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ge])),pe){const J=n.get(M[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,J,0)}r.blitFramebuffer(0,0,F,te,0,0,F,te,Q,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let be=0;be<M.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,he.__webglColorRenderbuffer[be]);const Fe=n.get(M[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,Fe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Le(A){return Math.min(i.maxSamples,A.samples)}function _e(A){const M=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function nt(A){const M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Ne(A,M){const F=A.colorSpace,te=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===oo||F!==Vn&&F!==un&&(Je.getTransfer(F)===it?a===!1?e.has("EXT_sRGB")===!0&&te===Sn?(A.format=oo,A.minFilter=cn,A.generateMipmaps=!1):M=Sh.sRGBToLinear(M):(te!==Sn||Q!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}this.allocateTextureUnit=D,this.resetTextureUnits=K,this.setTexture2D=z,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=We,this.setupRenderTarget=k,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=_e}function Yg(r,e,t){const n=t.isWebGL2;function i(s,o=un){let a;const l=Je.getTransfer(o);if(s===si)return r.UNSIGNED_BYTE;if(s===hh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===uh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===bd)return r.BYTE;if(s===Ad)return r.SHORT;if(s===Ro)return r.UNSIGNED_SHORT;if(s===ch)return r.INT;if(s===Jn)return r.UNSIGNED_INT;if(s===Qn)return r.FLOAT;if(s===Xr)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===wd)return r.ALPHA;if(s===Sn)return r.RGBA;if(s===Rd)return r.LUMINANCE;if(s===Ld)return r.LUMINANCE_ALPHA;if(s===wi)return r.DEPTH_COMPONENT;if(s===mr)return r.DEPTH_STENCIL;if(s===oo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Cd)return r.RED;if(s===dh)return r.RED_INTEGER;if(s===Pd)return r.RG;if(s===fh)return r.RG_INTEGER;if(s===ph)return r.RGBA_INTEGER;if(s===fa||s===pa||s===ma||s===_a)if(l===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===fa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===fa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ma)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_a)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===fl||s===pl||s===ml||s===_l)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===fl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ml)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_l)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===mh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===gl||s===vl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===gl)return l===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===vl)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xl||s===Sl||s===Ml||s===yl||s===El||s===Tl||s===bl||s===Al||s===wl||s===Rl||s===Ll||s===Cl||s===Pl||s===Dl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===xl)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sl)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ml)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yl)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===El)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Tl)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bl)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Al)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wl)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rl)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ll)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Cl)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pl)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dl)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ga||s===Il||s===Ol)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ga)return l===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Il)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ol)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Dd||s===Ul||s===Nl||s===Fl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ga)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ul)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Nl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ai?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class qg extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ws extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kg={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ws;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class jg extends Ni{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const _=t.getContextAttributes();let p=null,f=null;const S=[],x=[],y=new Oe;let R=null;const w=new gn;w.layers.enable(1),w.viewport=new Tt;const E=new gn;E.layers.enable(2),E.viewport=new Tt;const O=[w,E],v=new qg;v.layers.enable(1),v.layers.enable(2);let b=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=S[X];return Z===void 0&&(Z=new Ga,S[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=S[X];return Z===void 0&&(Z=new Ga,S[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=S[X];return Z===void 0&&(Z=new Ga,S[X]=Z),Z.getHandSpace()};function V(X){const Z=x.indexOf(X.inputSource);if(Z===-1)return;const le=S[Z];le!==void 0&&(le.update(X.inputSource,X.frame,c||o),le.dispatchEvent({type:X.type,data:X.inputSource}))}function K(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",D);for(let X=0;X<S.length;X++){const Z=x[X];Z!==null&&(x[X]=null,S[X].disconnect(Z))}b=null,B=null,e.setRenderTarget(p),m=null,d=null,u=null,i=null,f=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",K),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Ii(m.framebufferWidth,m.framebufferHeight,{format:Sn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,le=null,Se=null;_.depth&&(Se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?mr:wi,le=_.stencil?Ai:Jn);const ve={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ve),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Ii(d.textureWidth,d.textureHeight,{format:Sn,type:si,depthTexture:new Ch(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const De=e.properties.get(f);De.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(X){for(let Z=0;Z<X.removed.length;Z++){const le=X.removed[Z],Se=x.indexOf(le);Se>=0&&(x[Se]=null,S[Se].disconnect(le))}for(let Z=0;Z<X.added.length;Z++){const le=X.added[Z];let Se=x.indexOf(le);if(Se===-1){for(let De=0;De<S.length;De++)if(De>=x.length){x.push(le),Se=De;break}else if(x[De]===null){x[De]=le,Se=De;break}if(Se===-1)break}const ve=S[Se];ve&&ve.connect(le)}}const N=new I,z=new I;function Y(X,Z,le){N.setFromMatrixPosition(Z.matrixWorld),z.setFromMatrixPosition(le.matrixWorld);const Se=N.distanceTo(z),ve=Z.projectionMatrix.elements,De=le.projectionMatrix.elements,Ie=ve[14]/(ve[10]-1),Ae=ve[14]/(ve[10]+1),We=(ve[9]+1)/ve[5],k=(ve[9]-1)/ve[5],wt=(ve[8]-1)/ve[0],Ee=(De[8]+1)/De[0],Le=Ie*wt,_e=Ie*Ee,nt=Se/(-wt+Ee),Ne=nt*-wt;Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ne),X.translateZ(nt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const A=Ie+nt,M=Ae+nt,F=Le-Ne,te=_e+(Se-Ne),Q=We*Ae/M*A,ne=k*Ae/M*A;X.projectionMatrix.makePerspective(F,te,Q,ne,A,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function q(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;v.near=E.near=w.near=X.near,v.far=E.far=w.far=X.far,(b!==v.near||B!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,B=v.far);const Z=X.parent,le=v.cameras;q(v,Z);for(let Se=0;Se<le.length;Se++)q(le[Se],Z);le.length===2?Y(v,w,E):v.projectionMatrix.copy(w.projectionMatrix),j(X,v,Z)};function j(X,Z,le){le===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(le.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=lo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)};let $=null;function ie(X,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){const le=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let Se=!1;le.length!==v.cameras.length&&(v.cameras.length=0,Se=!0);for(let ve=0;ve<le.length;ve++){const De=le[ve];let Ie=null;if(m!==null)Ie=m.getViewport(De);else{const We=u.getViewSubImage(d,De);Ie=We.viewport,ve===0&&(e.setRenderTargetTextures(f,We.colorTexture,d.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(f))}let Ae=O[ve];Ae===void 0&&(Ae=new gn,Ae.layers.enable(ve),Ae.viewport=new Tt,O[ve]=Ae),Ae.matrix.fromArray(De.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(De.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ve===0&&(v.matrix.copy(Ae.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Se===!0&&v.cameras.push(Ae)}}for(let le=0;le<S.length;le++){const Se=x[le],ve=S[le];Se!==null&&ve!==void 0&&ve.update(Se,Z,c||o)}$&&$(X,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const re=new Lh;re.setAnimationLoop(ie),this.setAnimationLoop=function(X){$=X},this.dispose=function(){}}}function $g(r,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Ah(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,S,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,y)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,S,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===kt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===kt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const S=e.get(f).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,S,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=x*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===kt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Zg(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,x){const y=x.program;n.uniformBlockBinding(S,y)}function c(S,x){let y=i[S.id];y===void 0&&(g(S),y=h(S),i[S.id]=y,S.addEventListener("dispose",p));const R=x.program;n.updateUBOMapping(S,R);const w=e.render.frame;s[S.id]!==w&&(d(S),s[S.id]=w)}function h(S){const x=u();S.__bindingPointIndex=x;const y=r.createBuffer(),R=S.__size,w=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,R,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=i[S.id],y=S.uniforms,R=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,E=y.length;w<E;w++){const O=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,b=O.length;v<b;v++){const B=O[v];if(m(B,w,v,R)===!0){const V=B.__offset,K=Array.isArray(B.value)?B.value:[B.value];let D=0;for(let N=0;N<K.length;N++){const z=K[N],Y=_(z);typeof z=="number"||typeof z=="boolean"?(B.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,V+D,B.__data)):z.isMatrix3?(B.__data[0]=z.elements[0],B.__data[1]=z.elements[1],B.__data[2]=z.elements[2],B.__data[3]=0,B.__data[4]=z.elements[3],B.__data[5]=z.elements[4],B.__data[6]=z.elements[5],B.__data[7]=0,B.__data[8]=z.elements[6],B.__data[9]=z.elements[7],B.__data[10]=z.elements[8],B.__data[11]=0):(z.toArray(B.__data,D),D+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(S,x,y,R){const w=S.value,E=x+"_"+y;if(R[E]===void 0)return typeof w=="number"||typeof w=="boolean"?R[E]=w:R[E]=w.clone(),!0;{const O=R[E];if(typeof w=="number"||typeof w=="boolean"){if(O!==w)return R[E]=w,!0}else if(O.equals(w)===!1)return O.copy(w),!0}return!1}function g(S){const x=S.uniforms;let y=0;const R=16;for(let E=0,O=x.length;E<O;E++){const v=Array.isArray(x[E])?x[E]:[x[E]];for(let b=0,B=v.length;b<B;b++){const V=v[b],K=Array.isArray(V.value)?V.value:[V.value];for(let D=0,N=K.length;D<N;D++){const z=K[D],Y=_(z),q=y%R;q!==0&&R-q<Y.boundary&&(y+=R-q),V.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=Y.storage}}}const w=y%R;return w>0&&(y+=R-w),S.__size=y,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){const x=S.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function f(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:f}}class Nh{constructor(e={}){const{canvas:t=Yd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this._useLegacyLights=!1,this.toneMapping=ri,this.toneMappingExposure=1;const x=this;let y=!1,R=0,w=0,E=null,O=-1,v=null;const b=new Tt,B=new Tt;let V=null;const K=new qe(0);let D=0,N=t.width,z=t.height,Y=1,q=null,j=null;const $=new Tt(0,0,N,z),ie=new Tt(0,0,N,z);let re=!1;const X=new Po;let Z=!1,le=!1,Se=null;const ve=new tt,De=new Oe,Ie=new I,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return E===null?Y:1}let k=n;function wt(T,U){for(let H=0;H<T.length;H++){const W=T[H],G=t.getContext(W,U);if(G!==null)return G}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wo}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ae,!1),k===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),k=wt(U,T),k===null)throw wt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ee,Le,_e,nt,Ne,A,M,F,te,Q,ne,ge,he,pe,be,Fe,J,Ze,ke,Ce,ye,ue,L,se;function xe(){Ee=new o_(k),Le=new t_(k,Ee,e),Ee.init(Le),ue=new Yg(k,Ee,Le),_e=new Wg(k,Ee,Le),nt=new h_(k),Ne=new Cg,A=new Xg(k,Ee,_e,Ne,Le,ue,nt),M=new i_(x),F=new a_(x),te=new vf(k,Le),L=new Qm(k,Ee,te,Le),Q=new l_(k,te,nt,L),ne=new p_(k,Q,te,nt),ke=new f_(k,Le,A),Fe=new n_(Ne),ge=new Lg(x,M,F,Ee,Le,L,Fe),he=new $g(x,Ne),pe=new Dg,be=new Bg(Ee,Le),Ze=new Jm(x,M,F,_e,ne,d,l),J=new Vg(x,ne,Le),se=new Zg(k,nt,Le,_e),Ce=new e_(k,Ee,nt,Le),ye=new c_(k,Ee,nt,Le),nt.programs=ge.programs,x.capabilities=Le,x.extensions=Ee,x.properties=Ne,x.renderLists=pe,x.shadowMap=J,x.state=_e,x.info=nt}xe();const fe=new jg(x,k);this.xr=fe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=Ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(N,z,!1))},this.getSize=function(T){return T.set(N,z)},this.setSize=function(T,U,H=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,z=U,t.width=Math.floor(T*Y),t.height=Math.floor(U*Y),H===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(N*Y,z*Y).floor()},this.setDrawingBufferSize=function(T,U,H){N=T,z=U,Y=H,t.width=Math.floor(T*H),t.height=Math.floor(U*H),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy($)},this.setViewport=function(T,U,H,W){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,U,H,W),_e.viewport(b.copy($).multiplyScalar(Y).floor())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,U,H,W){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,U,H,W),_e.scissor(B.copy(ie).multiplyScalar(Y).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(T){_e.setScissorTest(re=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(T=!0,U=!0,H=!0){let W=0;if(T){let G=!1;if(E!==null){const de=E.texture.format;G=de===ph||de===fh||de===dh}if(G){const de=E.texture.type,Me=de===si||de===Jn||de===Ro||de===Ai||de===hh||de===uh,Re=Ze.getClearColor(),Pe=Ze.getClearAlpha(),Ge=Re.r,Ue=Re.g,Be=Re.b;Me?(m[0]=Ge,m[1]=Ue,m[2]=Be,m[3]=Pe,k.clearBufferuiv(k.COLOR,0,m)):(g[0]=Ge,g[1]=Ue,g[2]=Be,g[3]=Pe,k.clearBufferiv(k.COLOR,0,g))}else W|=k.COLOR_BUFFER_BIT}U&&(W|=k.DEPTH_BUFFER_BIT),H&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),pe.dispose(),be.dispose(),Ne.dispose(),M.dispose(),F.dispose(),ne.dispose(),L.dispose(),se.dispose(),ge.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",dt),fe.removeEventListener("sessionend",$e),Se&&(Se.dispose(),Se=null),_t.stop()};function ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=nt.autoReset,U=J.enabled,H=J.autoUpdate,W=J.needsUpdate,G=J.type;xe(),nt.autoReset=T,J.enabled=U,J.autoUpdate=H,J.needsUpdate=W,J.type=G}function ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ce(T){const U=T.target;U.removeEventListener("dispose",ce),we(U)}function we(T){Te(T),Ne.remove(T)}function Te(T){const U=Ne.get(T).programs;U!==void 0&&(U.forEach(function(H){ge.releaseProgram(H)}),T.isShaderMaterial&&ge.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,H,W,G,de){U===null&&(U=Ae);const Me=G.isMesh&&G.matrixWorld.determinant()<0,Re=ku(T,U,H,W,G);_e.setMaterial(W,Me);let Pe=H.index,Ge=1;if(W.wireframe===!0){if(Pe=Q.getWireframeAttribute(H),Pe===void 0)return;Ge=2}const Ue=H.drawRange,Be=H.attributes.position;let ft=Ue.start*Ge,qt=(Ue.start+Ue.count)*Ge;de!==null&&(ft=Math.max(ft,de.start*Ge),qt=Math.min(qt,(de.start+de.count)*Ge)),Pe!==null?(ft=Math.max(ft,0),qt=Math.min(qt,Pe.count)):Be!=null&&(ft=Math.max(ft,0),qt=Math.min(qt,Be.count));const Mt=qt-ft;if(Mt<0||Mt===1/0)return;L.setup(G,W,Re,H,Pe);let Dn,st=Ce;if(Pe!==null&&(Dn=te.get(Pe),st=ye,st.setIndex(Dn)),G.isMesh)W.wireframe===!0?(_e.setLineWidth(W.wireframeLinewidth*We()),st.setMode(k.LINES)):st.setMode(k.TRIANGLES);else if(G.isLine){let He=W.linewidth;He===void 0&&(He=1),_e.setLineWidth(He*We()),G.isLineSegments?st.setMode(k.LINES):G.isLineLoop?st.setMode(k.LINE_LOOP):st.setMode(k.LINE_STRIP)}else G.isPoints?st.setMode(k.POINTS):G.isSprite&&st.setMode(k.TRIANGLES);if(G.isBatchedMesh)st.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)st.renderInstances(ft,Mt,G.count);else if(H.isInstancedBufferGeometry){const He=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,la=Math.min(H.instanceCount,He);st.renderInstances(ft,Mt,la)}else st.render(ft,Mt)};function Xe(T,U,H){T.transparent===!0&&T.side===vn&&T.forceSinglePass===!1?(T.side=kt,T.needsUpdate=!0,rs(T,U,H),T.side=li,T.needsUpdate=!0,rs(T,U,H),T.side=vn):rs(T,U,H)}this.compile=function(T,U,H=null){H===null&&(H=T),p=be.get(H),p.init(),S.push(p),H.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),T!==H&&T.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(x._useLegacyLights);const W=new Set;return T.traverse(function(G){const de=G.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){const Re=de[Me];Xe(Re,H,G),W.add(Re)}else Xe(de,H,G),W.add(de)}),S.pop(),p=null,W},this.compileAsync=function(T,U,H=null){const W=this.compile(T,U,H);return new Promise(G=>{function de(){if(W.forEach(function(Me){Ne.get(Me).currentProgram.isReady()&&W.delete(Me)}),W.size===0){G(T);return}setTimeout(de,10)}Ee.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ye=null;function ct(T){Ye&&Ye(T)}function dt(){_t.stop()}function $e(){_t.start()}const _t=new Lh;_t.setAnimationLoop(ct),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(T){Ye=T,fe.setAnimationLoop(T),T===null?_t.stop():_t.start()},fe.addEventListener("sessionstart",dt),fe.addEventListener("sessionend",$e),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(U),U=fe.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,U,E),p=be.get(T,S.length),p.init(),S.push(p),ve.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(ve),le=this.localClippingEnabled,Z=Fe.init(this.clippingPlanes,le),_=pe.get(T,f.length),_.init(),f.push(_),Tn(T,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(q,j),this.info.render.frame++,Z===!0&&Fe.beginShadows();const H=p.state.shadowsArray;if(J.render(H,T,U),Z===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(_,T),p.setupLights(x._useLegacyLights),U.isArrayCamera){const W=U.cameras;for(let G=0,de=W.length;G<de;G++){const Me=W[G];el(_,T,Me,Me.viewport)}}else el(_,T,U);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(x,T,U),L.resetDefaultState(),O=-1,v=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Tn(T,U,H,W){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){W&&Ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ve);const Me=ne.update(T),Re=T.material;Re.visible&&_.push(T,Me,Re,H,Ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){const Me=ne.update(T),Re=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ie.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ie.copy(Me.boundingSphere.center)),Ie.applyMatrix4(T.matrixWorld).applyMatrix4(ve)),Array.isArray(Re)){const Pe=Me.groups;for(let Ge=0,Ue=Pe.length;Ge<Ue;Ge++){const Be=Pe[Ge],ft=Re[Be.materialIndex];ft&&ft.visible&&_.push(T,Me,ft,H,Ie.z,Be)}}else Re.visible&&_.push(T,Me,Re,H,Ie.z,null)}}const de=T.children;for(let Me=0,Re=de.length;Me<Re;Me++)Tn(de[Me],U,H,W)}function el(T,U,H,W){const G=T.opaque,de=T.transmissive,Me=T.transparent;p.setupLightsView(H),Z===!0&&Fe.setGlobalState(x.clippingPlanes,H),de.length>0&&zu(G,de,U,H),W&&_e.viewport(b.copy(W)),G.length>0&&is(G,U,H),de.length>0&&is(de,U,H),Me.length>0&&is(Me,U,H),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function zu(T,U,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const de=Le.isWebGL2;Se===null&&(Se=new Ii(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Xr:si,minFilter:Wr,samples:de?4:0})),x.getDrawingBufferSize(De),de?Se.setSize(De.x,De.y):Se.setSize(co(De.x),co(De.y));const Me=x.getRenderTarget();x.setRenderTarget(Se),x.getClearColor(K),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const Re=x.toneMapping;x.toneMapping=ri,is(T,H,W),A.updateMultisampleRenderTarget(Se),A.updateRenderTargetMipmap(Se);let Pe=!1;for(let Ge=0,Ue=U.length;Ge<Ue;Ge++){const Be=U[Ge],ft=Be.object,qt=Be.geometry,Mt=Be.material,Dn=Be.group;if(Mt.side===vn&&ft.layers.test(W.layers)){const st=Mt.side;Mt.side=kt,Mt.needsUpdate=!0,tl(ft,H,W,qt,Mt,Dn),Mt.side=st,Mt.needsUpdate=!0,Pe=!0}}Pe===!0&&(A.updateMultisampleRenderTarget(Se),A.updateRenderTargetMipmap(Se)),x.setRenderTarget(Me),x.setClearColor(K,D),x.toneMapping=Re}function is(T,U,H){const W=U.isScene===!0?U.overrideMaterial:null;for(let G=0,de=T.length;G<de;G++){const Me=T[G],Re=Me.object,Pe=Me.geometry,Ge=W===null?Me.material:W,Ue=Me.group;Re.layers.test(H.layers)&&tl(Re,U,H,Pe,Ge,Ue)}}function tl(T,U,H,W,G,de){T.onBeforeRender(x,U,H,W,G,de),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(x,U,H,W,T,de),G.transparent===!0&&G.side===vn&&G.forceSinglePass===!1?(G.side=kt,G.needsUpdate=!0,x.renderBufferDirect(H,U,W,G,T,de),G.side=li,G.needsUpdate=!0,x.renderBufferDirect(H,U,W,G,T,de),G.side=vn):x.renderBufferDirect(H,U,W,G,T,de),T.onAfterRender(x,U,H,W,G,de)}function rs(T,U,H){U.isScene!==!0&&(U=Ae);const W=Ne.get(T),G=p.state.lights,de=p.state.shadowsArray,Me=G.state.version,Re=ge.getParameters(T,G.state,de,U,H),Pe=ge.getProgramCacheKey(Re);let Ge=W.programs;W.environment=T.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(T.isMeshStandardMaterial?F:M).get(T.envMap||W.environment),Ge===void 0&&(T.addEventListener("dispose",ce),Ge=new Map,W.programs=Ge);let Ue=Ge.get(Pe);if(Ue!==void 0){if(W.currentProgram===Ue&&W.lightsStateVersion===Me)return il(T,Re),Ue}else Re.uniforms=ge.getUniforms(T),T.onBuild(H,Re,x),T.onBeforeCompile(Re,x),Ue=ge.acquireProgram(Re,Pe),Ge.set(Pe,Ue),W.uniforms=Re.uniforms;const Be=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=Fe.uniform),il(T,Re),W.needsLights=Hu(T),W.lightsStateVersion=Me,W.needsLights&&(Be.ambientLightColor.value=G.state.ambient,Be.lightProbe.value=G.state.probe,Be.directionalLights.value=G.state.directional,Be.directionalLightShadows.value=G.state.directionalShadow,Be.spotLights.value=G.state.spot,Be.spotLightShadows.value=G.state.spotShadow,Be.rectAreaLights.value=G.state.rectArea,Be.ltc_1.value=G.state.rectAreaLTC1,Be.ltc_2.value=G.state.rectAreaLTC2,Be.pointLights.value=G.state.point,Be.pointLightShadows.value=G.state.pointShadow,Be.hemisphereLights.value=G.state.hemi,Be.directionalShadowMap.value=G.state.directionalShadowMap,Be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Be.spotShadowMap.value=G.state.spotShadowMap,Be.spotLightMatrix.value=G.state.spotLightMatrix,Be.spotLightMap.value=G.state.spotLightMap,Be.pointShadowMap.value=G.state.pointShadowMap,Be.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=Ue,W.uniformsList=null,Ue}function nl(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Us.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function il(T,U){const H=Ne.get(T);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function ku(T,U,H,W,G){U.isScene!==!0&&(U=Ae),A.resetTextureUnits();const de=U.fog,Me=W.isMeshStandardMaterial?U.environment:null,Re=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Vn,Pe=(W.isMeshStandardMaterial?F:M).get(W.envMap||Me),Ge=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Be=!!H.morphAttributes.position,ft=!!H.morphAttributes.normal,qt=!!H.morphAttributes.color;let Mt=ri;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Mt=x.toneMapping);const Dn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,st=Dn!==void 0?Dn.length:0,He=Ne.get(W),la=p.state.lights;if(Z===!0&&(le===!0||T!==v)){const sn=T===v&&W.id===O;Fe.setState(W,T,sn)}let ht=!1;W.version===He.__version?(He.needsLights&&He.lightsStateVersion!==la.state.version||He.outputColorSpace!==Re||G.isBatchedMesh&&He.batching===!1||!G.isBatchedMesh&&He.batching===!0||G.isInstancedMesh&&He.instancing===!1||!G.isInstancedMesh&&He.instancing===!0||G.isSkinnedMesh&&He.skinning===!1||!G.isSkinnedMesh&&He.skinning===!0||G.isInstancedMesh&&He.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&He.instancingColor===!1&&G.instanceColor!==null||He.envMap!==Pe||W.fog===!0&&He.fog!==de||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Fe.numPlanes||He.numIntersection!==Fe.numIntersection)||He.vertexAlphas!==Ge||He.vertexTangents!==Ue||He.morphTargets!==Be||He.morphNormals!==ft||He.morphColors!==qt||He.toneMapping!==Mt||Le.isWebGL2===!0&&He.morphTargetsCount!==st)&&(ht=!0):(ht=!0,He.__version=W.version);let fi=He.currentProgram;ht===!0&&(fi=rs(W,U,G));let rl=!1,Rr=!1,ca=!1;const Ct=fi.getUniforms(),pi=He.uniforms;if(_e.useProgram(fi.program)&&(rl=!0,Rr=!0,ca=!0),W.id!==O&&(O=W.id,Rr=!0),rl||v!==T){Ct.setValue(k,"projectionMatrix",T.projectionMatrix),Ct.setValue(k,"viewMatrix",T.matrixWorldInverse);const sn=Ct.map.cameraPosition;sn!==void 0&&sn.setValue(k,Ie.setFromMatrixPosition(T.matrixWorld)),Le.logarithmicDepthBuffer&&Ct.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ct.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,Rr=!0,ca=!0)}if(G.isSkinnedMesh){Ct.setOptional(k,G,"bindMatrix"),Ct.setOptional(k,G,"bindMatrixInverse");const sn=G.skeleton;sn&&(Le.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),Ct.setValue(k,"boneTexture",sn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Ct.setOptional(k,G,"batchingTexture"),Ct.setValue(k,"batchingTexture",G._matricesTexture,A));const ha=H.morphAttributes;if((ha.position!==void 0||ha.normal!==void 0||ha.color!==void 0&&Le.isWebGL2===!0)&&ke.update(G,H,fi),(Rr||He.receiveShadow!==G.receiveShadow)&&(He.receiveShadow=G.receiveShadow,Ct.setValue(k,"receiveShadow",G.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(pi.envMap.value=Pe,pi.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Rr&&(Ct.setValue(k,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Gu(pi,ca),de&&W.fog===!0&&he.refreshFogUniforms(pi,de),he.refreshMaterialUniforms(pi,W,Y,z,Se),Us.upload(k,nl(He),pi,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Us.upload(k,nl(He),pi,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ct.setValue(k,"center",G.center),Ct.setValue(k,"modelViewMatrix",G.modelViewMatrix),Ct.setValue(k,"normalMatrix",G.normalMatrix),Ct.setValue(k,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const sn=W.uniformsGroups;for(let ua=0,Vu=sn.length;ua<Vu;ua++)if(Le.isWebGL2){const sl=sn[ua];se.update(sl,fi),se.bind(sl,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function Gu(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Hu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,U,H){Ne.get(T.texture).__webglTexture=U,Ne.get(T.depthTexture).__webglTexture=H;const W=Ne.get(T);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const H=Ne.get(T);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,H=0){E=T,R=U,w=H;let W=!0,G=null,de=!1,Me=!1;if(T){const Pe=Ne.get(T);Pe.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(k.FRAMEBUFFER,null),W=!1):Pe.__webglFramebuffer===void 0?A.setupRenderTarget(T):Pe.__hasExternalTextures&&A.rebindTextures(T,Ne.get(T.texture).__webglTexture,Ne.get(T.depthTexture).__webglTexture);const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Me=!0);const Ue=Ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?G=Ue[U][H]:G=Ue[U],de=!0):Le.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?G=Ne.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?G=Ue[H]:G=Ue,b.copy(T.viewport),B.copy(T.scissor),V=T.scissorTest}else b.copy($).multiplyScalar(Y).floor(),B.copy(ie).multiplyScalar(Y).floor(),V=re;if(_e.bindFramebuffer(k.FRAMEBUFFER,G)&&Le.drawBuffers&&W&&_e.drawBuffers(T,G),_e.viewport(b),_e.scissor(B),_e.setScissorTest(V),de){const Pe=Ne.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pe.__webglTexture,H)}else if(Me){const Pe=Ne.get(T.texture),Ge=U||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pe.__webglTexture,H||0,Ge)}O=-1},this.readRenderTargetPixels=function(T,U,H,W,G,de,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Re=Re[Me]),Re){_e.bindFramebuffer(k.FRAMEBUFFER,Re);try{const Pe=T.texture,Ge=Pe.format,Ue=Pe.type;if(Ge!==Sn&&ue.convert(Ge)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Ue===Xr&&(Ee.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ue!==si&&ue.convert(Ue)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Qn&&(Le.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-W&&H>=0&&H<=T.height-G&&k.readPixels(U,H,W,G,ue.convert(Ge),ue.convert(Ue),de)}finally{const Pe=E!==null?Ne.get(E).__webglFramebuffer:null;_e.bindFramebuffer(k.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(T,U,H=0){const W=Math.pow(2,-H),G=Math.floor(U.image.width*W),de=Math.floor(U.image.height*W);A.setTexture2D(U,0),k.copyTexSubImage2D(k.TEXTURE_2D,H,0,0,T.x,T.y,G,de),_e.unbindTexture()},this.copyTextureToTexture=function(T,U,H,W=0){const G=U.image.width,de=U.image.height,Me=ue.convert(H.format),Re=ue.convert(H.type);A.setTexture2D(H,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment),U.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,W,T.x,T.y,G,de,Me,Re,U.image.data):U.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,W,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,Me,U.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,W,T.x,T.y,Me,Re,U.image),W===0&&H.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(T,U,H,W,G=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=T.max.x-T.min.x+1,Me=T.max.y-T.min.y+1,Re=T.max.z-T.min.z+1,Pe=ue.convert(W.format),Ge=ue.convert(W.type);let Ue;if(W.isData3DTexture)A.setTexture3D(W,0),Ue=k.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)A.setTexture2DArray(W,0),Ue=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const Be=k.getParameter(k.UNPACK_ROW_LENGTH),ft=k.getParameter(k.UNPACK_IMAGE_HEIGHT),qt=k.getParameter(k.UNPACK_SKIP_PIXELS),Mt=k.getParameter(k.UNPACK_SKIP_ROWS),Dn=k.getParameter(k.UNPACK_SKIP_IMAGES),st=H.isCompressedTexture?H.mipmaps[G]:H.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,st.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,st.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,T.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,T.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,T.min.z),H.isDataTexture||H.isData3DTexture?k.texSubImage3D(Ue,G,U.x,U.y,U.z,de,Me,Re,Pe,Ge,st.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ue,G,U.x,U.y,U.z,de,Me,Re,Pe,st.data)):k.texSubImage3D(Ue,G,U.x,U.y,U.z,de,Me,Re,Pe,Ge,st),k.pixelStorei(k.UNPACK_ROW_LENGTH,Be),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ft),k.pixelStorei(k.UNPACK_SKIP_PIXELS,qt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Mt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Dn),G===0&&W.generateMipmaps&&k.generateMipmap(Ue),_e.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),_e.unbindTexture()},this.resetState=function(){R=0,w=0,E=null,_e.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Lo?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Qs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Rt?Ri:_h}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ri?Rt:Vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Jg extends Nh{}Jg.prototype.isWebGL1Renderer=!0;class Qg extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ac extends Mn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const nr=new tt,wc=new tt,Rs=[],Rc=new Wn,e0=new tt,Or=new Et,Ur=new Tr;class t0 extends Et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ac(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,e0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),Rc.copy(e.boundingBox).applyMatrix4(nr),this.boundingBox.union(Rc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),Ur.copy(e.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(Ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(n),e.ray.intersectsSphere(Ur)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,nr),wc.multiplyMatrices(n,nr),Or.matrixWorld=wc,Or.raycast(e,Rs);for(let o=0,a=Rs.length;o<a;o++){const l=Rs[o];l.instanceId=s,l.object=this,t.push(l)}Rs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ac(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lc=new I,Cc=new I,Pc=new tt,Ha=new ea,Ls=new Tr;class n0 extends bt{constructor(e=new En,t=new ts){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Lc.fromBufferAttribute(t,i-1),Cc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Lc.distanceTo(Cc);e.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(i),Ls.radius+=s,e.ray.intersectsSphere(Ls)===!1)return;Pc.copy(i).invert(),Ha.copy(e.ray).applyMatrix4(Pc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,h=new I,u=new I,d=new I,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let x=f,y=S-1;x<y;x+=m){const R=g.getX(x),w=g.getX(x+1);if(c.fromBufferAttribute(p,R),h.fromBufferAttribute(p,w),Ha.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(d);O<e.near||O>e.far||t.push({distance:O,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let x=f,y=S-1;x<y;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),Ha.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Dc=new I,Ic=new I;class ia extends n0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Dc.fromBufferAttribute(t,i),Ic.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dc.distanceTo(Ic);e.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Cs=new I,Ps=new I,Va=new I,Ds=new hn;class Fh extends En{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(zr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:f}=Ds;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Ds.getNormal(Va),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,u[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const x=(S+1)%3,y=u[S],R=u[x],w=Ds[h[S]],E=Ds[h[x]],O=`${y}_${R}`,v=`${R}_${y}`;v in d&&d[v]?(Va.dot(d[v].normal)<=s&&(m.push(w.x,w.y,w.z),m.push(E.x,E.y,E.z)),d[v]=null):O in d||(d[O]={index0:c[S],index1:c[x],normal:Va.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:p}=d[g];Cs.fromBufferAttribute(a,_),Ps.fromBufferAttribute(a,p),m.push(Cs.x,Cs.y,Cs.z),m.push(Ps.x,Ps.y,Ps.z)}this.setAttribute("position",new Gt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Oo extends br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bh extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Wa=new tt,Oc=new I,Uc=new I;class i0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Po,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Oc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oc),Uc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uc),t.updateMatrixWorld(),Wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class r0 extends i0{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class s0 extends Bh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new r0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class a0 extends Bh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class o0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Nc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Nc(){return(typeof performance>"u"?Date:performance).now()}class zh{constructor(e,t,n=0,i=1/0){this.ray=new ea(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return uo(e,this,n,t),n.sort(Fc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)uo(e[i],this,n,t);return n.sort(Fc),n}}function Fc(r,e){return r.distance-e.distance}function uo(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)uo(i[s],e,t,!0)}}class Bc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kh extends ia{constructor(e=10,t=10,n=4473924,i=8947848){n=new qe(n),i=new qe(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,m=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===s?n:i;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}const h=new En;h.setAttribute("position",new Gt(l,3)),h.setAttribute("color",new Gt(c,3));const u=new ts({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class l0 extends ia{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new En;i.setAttribute("position",new Gt(t,3)),i.setAttribute("color",new Gt(n,3));const s=new ts({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new qe,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);const zc={type:"change"},Xa={type:"start"},kc={type:"end"},Is=new ea,Gc=new wn,c0=Math.cos(70*Xd.DEG2RAD);class h0 extends Ni{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bi.ROTATE,MIDDLE:Bi.DOLLY,RIGHT:Bi.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",be),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",be),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(zc),n.update(),s=i.NONE},this.update=(function(){const L=new I,se=new Oi().setFromUnitVectors(e.up,new I(0,1,0)),xe=se.clone().invert(),fe=new I,ee=new Oi,P=new I,ae=2*Math.PI;return function(we=null){const Te=n.object.position;L.copy(Te).sub(n.target),L.applyQuaternion(se),a.setFromVector3(L),n.autoRotate&&s===i.NONE&&V(b(we)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Xe=n.minAzimuthAngle,Ye=n.maxAzimuthAngle;isFinite(Xe)&&isFinite(Ye)&&(Xe<-Math.PI?Xe+=ae:Xe>Math.PI&&(Xe-=ae),Ye<-Math.PI?Ye+=ae:Ye>Math.PI&&(Ye-=ae),Xe<=Ye?a.theta=Math.max(Xe,Math.min(Ye,a.theta)):a.theta=a.theta>(Xe+Ye)/2?Math.max(Xe,a.theta):Math.min(Ye,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&w||n.object.isOrthographicCamera?a.radius=$(a.radius):a.radius=$(a.radius*c),L.setFromSpherical(a),L.applyQuaternion(xe),Te.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let ct=!1;if(n.zoomToCursor&&w){let dt=null;if(n.object.isPerspectiveCamera){const $e=L.length();dt=$($e*c);const _t=$e-dt;n.object.position.addScaledVector(y,_t),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const $e=new I(R.x,R.y,0);$e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ct=!0;const _t=new I(R.x,R.y,0);_t.unproject(n.object),n.object.position.sub(_t).add($e),n.object.updateMatrixWorld(),dt=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;dt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(dt).add(n.object.position):(Is.origin.copy(n.object.position),Is.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Is.direction))<c0?e.lookAt(n.target):(Gc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Is.intersectPlane(Gc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ct=!0);return c=1,w=!1,ct||fe.distanceToSquared(n.object.position)>o||8*(1-ee.dot(n.object.quaternion))>o||P.distanceToSquared(n.target)>0?(n.dispatchEvent(zc),fe.copy(n.object.position),ee.copy(n.object.quaternion),P.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ze),n.domElement.removeEventListener("pointerdown",A),n.domElement.removeEventListener("pointercancel",F),n.domElement.removeEventListener("wheel",ne),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",F),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",be),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Bc,l=new Bc;let c=1;const h=new I,u=new Oe,d=new Oe,m=new Oe,g=new Oe,_=new Oe,p=new Oe,f=new Oe,S=new Oe,x=new Oe,y=new I,R=new Oe;let w=!1;const E=[],O={};let v=!1;function b(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function B(L){const se=Math.abs(L*.01);return Math.pow(.95,n.zoomSpeed*se)}function V(L){l.theta-=L}function K(L){l.phi-=L}const D=(function(){const L=new I;return function(xe,fe){L.setFromMatrixColumn(fe,0),L.multiplyScalar(-xe),h.add(L)}})(),N=(function(){const L=new I;return function(xe,fe){n.screenSpacePanning===!0?L.setFromMatrixColumn(fe,1):(L.setFromMatrixColumn(fe,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(xe),h.add(L)}})(),z=(function(){const L=new I;return function(xe,fe){const ee=n.domElement;if(n.object.isPerspectiveCamera){const P=n.object.position;L.copy(P).sub(n.target);let ae=L.length();ae*=Math.tan(n.object.fov/2*Math.PI/180),D(2*xe*ae/ee.clientHeight,n.object.matrix),N(2*fe*ae/ee.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(xe*(n.object.right-n.object.left)/n.object.zoom/ee.clientWidth,n.object.matrix),N(fe*(n.object.top-n.object.bottom)/n.object.zoom/ee.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function Y(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(L,se){if(!n.zoomToCursor)return;w=!0;const xe=n.domElement.getBoundingClientRect(),fe=L-xe.left,ee=se-xe.top,P=xe.width,ae=xe.height;R.x=fe/P*2-1,R.y=-(ee/ae)*2+1,y.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function $(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function ie(L){u.set(L.clientX,L.clientY)}function re(L){j(L.clientX,L.clientX),f.set(L.clientX,L.clientY)}function X(L){g.set(L.clientX,L.clientY)}function Z(L){d.set(L.clientX,L.clientY),m.subVectors(d,u).multiplyScalar(n.rotateSpeed);const se=n.domElement;V(2*Math.PI*m.x/se.clientHeight),K(2*Math.PI*m.y/se.clientHeight),u.copy(d),n.update()}function le(L){S.set(L.clientX,L.clientY),x.subVectors(S,f),x.y>0?Y(B(x.y)):x.y<0&&q(B(x.y)),f.copy(S),n.update()}function Se(L){_.set(L.clientX,L.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),z(p.x,p.y),g.copy(_),n.update()}function ve(L){j(L.clientX,L.clientY),L.deltaY<0?q(B(L.deltaY)):L.deltaY>0&&Y(B(L.deltaY)),n.update()}function De(L){let se=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),se=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),se=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),se=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),se=!0;break}se&&(L.preventDefault(),n.update())}function Ie(L){if(E.length===1)u.set(L.pageX,L.pageY);else{const se=ue(L),xe=.5*(L.pageX+se.x),fe=.5*(L.pageY+se.y);u.set(xe,fe)}}function Ae(L){if(E.length===1)g.set(L.pageX,L.pageY);else{const se=ue(L),xe=.5*(L.pageX+se.x),fe=.5*(L.pageY+se.y);g.set(xe,fe)}}function We(L){const se=ue(L),xe=L.pageX-se.x,fe=L.pageY-se.y,ee=Math.sqrt(xe*xe+fe*fe);f.set(0,ee)}function k(L){n.enableZoom&&We(L),n.enablePan&&Ae(L)}function wt(L){n.enableZoom&&We(L),n.enableRotate&&Ie(L)}function Ee(L){if(E.length==1)d.set(L.pageX,L.pageY);else{const xe=ue(L),fe=.5*(L.pageX+xe.x),ee=.5*(L.pageY+xe.y);d.set(fe,ee)}m.subVectors(d,u).multiplyScalar(n.rotateSpeed);const se=n.domElement;V(2*Math.PI*m.x/se.clientHeight),K(2*Math.PI*m.y/se.clientHeight),u.copy(d)}function Le(L){if(E.length===1)_.set(L.pageX,L.pageY);else{const se=ue(L),xe=.5*(L.pageX+se.x),fe=.5*(L.pageY+se.y);_.set(xe,fe)}p.subVectors(_,g).multiplyScalar(n.panSpeed),z(p.x,p.y),g.copy(_)}function _e(L){const se=ue(L),xe=L.pageX-se.x,fe=L.pageY-se.y,ee=Math.sqrt(xe*xe+fe*fe);S.set(0,ee),x.set(0,Math.pow(S.y/f.y,n.zoomSpeed)),Y(x.y),f.copy(S);const P=(L.pageX+se.x)*.5,ae=(L.pageY+se.y)*.5;j(P,ae)}function nt(L){n.enableZoom&&_e(L),n.enablePan&&Le(L)}function Ne(L){n.enableZoom&&_e(L),n.enableRotate&&Ee(L)}function A(L){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",F)),ke(L),L.pointerType==="touch"?Fe(L):te(L))}function M(L){n.enabled!==!1&&(L.pointerType==="touch"?J(L):Q(L))}function F(L){Ce(L),E.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",F)),n.dispatchEvent(kc),s=i.NONE}function te(L){let se;switch(L.button){case 0:se=n.mouseButtons.LEFT;break;case 1:se=n.mouseButtons.MIDDLE;break;case 2:se=n.mouseButtons.RIGHT;break;default:se=-1}switch(se){case Bi.DOLLY:if(n.enableZoom===!1)return;re(L),s=i.DOLLY;break;case Bi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;X(L),s=i.PAN}else{if(n.enableRotate===!1)return;ie(L),s=i.ROTATE}break;case Bi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;ie(L),s=i.ROTATE}else{if(n.enablePan===!1)return;X(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Xa)}function Q(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Z(L);break;case i.DOLLY:if(n.enableZoom===!1)return;le(L);break;case i.PAN:if(n.enablePan===!1)return;Se(L);break}}function ne(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(Xa),ve(ge(L)),n.dispatchEvent(kc))}function ge(L){const se=L.deltaMode,xe={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(se){case 1:xe.deltaY*=16;break;case 2:xe.deltaY*=100;break}return L.ctrlKey&&!v&&(xe.deltaY*=10),xe}function he(L){L.key==="Control"&&(v=!0,document.addEventListener("keyup",pe,{passive:!0,capture:!0}))}function pe(L){L.key==="Control"&&(v=!1,document.removeEventListener("keyup",pe,{passive:!0,capture:!0}))}function be(L){n.enabled===!1||n.enablePan===!1||De(L)}function Fe(L){switch(ye(L),E.length){case 1:switch(n.touches.ONE){case zi.ROTATE:if(n.enableRotate===!1)return;Ie(L),s=i.TOUCH_ROTATE;break;case zi.PAN:if(n.enablePan===!1)return;Ae(L),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case zi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;k(L),s=i.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;wt(L),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Xa)}function J(L){switch(ye(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Le(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;nt(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ne(L),n.update();break;default:s=i.NONE}}function Ze(L){n.enabled!==!1&&L.preventDefault()}function ke(L){E.push(L.pointerId)}function Ce(L){delete O[L.pointerId];for(let se=0;se<E.length;se++)if(E[se]==L.pointerId){E.splice(se,1);return}}function ye(L){let se=O[L.pointerId];se===void 0&&(se=new Oe,O[L.pointerId]=se),se.set(L.pageX,L.pageY)}function ue(L){const se=L.pointerId===E[0]?E[1]:E[0];return O[se]}n.domElement.addEventListener("contextmenu",Ze),n.domElement.addEventListener("pointerdown",A),n.domElement.addEventListener("pointercancel",F),n.domElement.addEventListener("wheel",ne,{passive:!1}),document.addEventListener("keydown",he,{passive:!0,capture:!0}),this.update()}}const me={GRID_SIZE:20,VOXEL_SIZE:1,WORLD:{WIDTH:20,DEPTH:20,HEIGHT:40,SEA_LEVEL:0,MIN_X:-10,MAX_X:10,MIN_Z:-10,MAX_Z:10,MIN_Y:0,MAX_Y:40},CAMERA:{FRUSTUM_SIZE:20,NEAR:.1,FAR:1e3,INITIAL_POSITION:{x:20,y:20,z:20},VIEW_PRESETS:{ISOMETRIC:{x:20,y:20,z:20},TOP:{x:0,y:40,z:0},FRONT:{x:0,y:10,z:30},SIDE:{x:30,y:10,z:0},CLOSE:{x:10,y:10,z:10}}},ANIMATION:{ROTATION_DURATION:.5},PHYSICS:{GRAVITY:30,JUMP_FORCE:12,MOVE_SPEED:10,TERMINAL_VELOCITY:20,JUMP_BUFFER_TIME:.1,COYOTE_TIME:.15},OCCLUSION:{RAY_TOLERANCE:.2,FADE_OPACITY:.2},COLORS:{OCCLUSION_HIGHLIGHT:5592405,DEFAULT_EMISSIVE:0},EDITOR:{MAX_BUILD_HEIGHT:39,MIN_BUILD_HEIGHT:0,DEFAULT_BUILD_HEIGHT:0,GRID_PLANE_SIZE:40,GRID_PLANE_OPACITY:.15,GHOST_VALID_COLOR:5025616,GHOST_INVALID_COLOR:16732754,AUTO_SAVE_KEY:"__autosave__",AUTO_SAVE_ENABLED:!0,SHOW_WATER_PLANE:!0,WATER_COLOR:2003199}};class u0{keys=new Map;mouse={x:0,y:0};mouseButtons=new Map;constructor(){window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this)),window.addEventListener("mousemove",this.onMouseMove.bind(this)),window.addEventListener("mousedown",this.onMouseDown.bind(this)),window.addEventListener("mouseup",this.onMouseUp.bind(this))}onKeyDown(e){this.keys.set(e.code,!0),this.keys.set(e.key,!0)}onKeyUp(e){this.keys.set(e.code,!1),this.keys.set(e.key,!1)}onMouseMove(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1}onMouseDown(e){this.mouseButtons.set(e.button,!0)}onMouseUp(e){this.mouseButtons.set(e.button,!1)}isKeyPressed(e){return this.keys.get(e)||!1}setVirtualKey(e,t){this.keys.set(e,t)}isMouseButtonPressed(e){return this.mouseButtons.get(e)||!1}getMousePosition(){return this.mouse}}class d0{scene;camera;renderer;controls;animationId=null;updateCallbacks=[];clock;inputManager;gridHelper;axesHelper;waterPlane=null;boundaryBox=null;constructor(e){this.inputManager=new u0,this.clock=new o0,this.scene=new Qg,this.scene.background=new qe(2236962),this.renderer=new Nh({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0;const t=document.getElementById(e);t?t.appendChild(this.renderer.domElement):console.error(`Container with id ${e} not found`);const n=window.innerWidth/window.innerHeight,i=me.CAMERA.FRUSTUM_SIZE;this.camera=new Do(i*n/-2,i*n/2,i/2,i/-2,me.CAMERA.NEAR,me.CAMERA.FAR),this.camera.position.set(me.CAMERA.INITIAL_POSITION.x,me.CAMERA.INITIAL_POSITION.y,me.CAMERA.INITIAL_POSITION.z),this.camera.lookAt(0,0,0),this.controls=new h0(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.screenSpacePanning=!1,this.controls.minZoom=.5,this.controls.maxZoom=3,this.controls.enabled=!0,this.setupLights(),this.gridHelper=new kh(me.GRID_SIZE,me.GRID_SIZE),this.scene.add(this.gridHelper),this.axesHelper=new l0(5),this.scene.add(this.axesHelper),this.createWaterPlane(),this.createBoundaryBox(),window.addEventListener("resize",this.onWindowResize.bind(this))}setHelpersVisibility(e){this.gridHelper.visible=e,this.axesHelper.visible=e,this.waterPlane&&(this.waterPlane.visible=e),this.boundaryBox&&(this.boundaryBox.visible=e)}createWaterPlane(){const e=new es(me.WORLD.WIDTH,me.WORLD.DEPTH),t=new Oo({color:me.EDITOR.WATER_COLOR,transparent:!0,opacity:.6,side:vn});this.waterPlane=new Et(e,t),this.waterPlane.rotation.x=-Math.PI/2,this.waterPlane.position.y=-.5,this.waterPlane.receiveShadow=!0,this.scene.add(this.waterPlane)}createBoundaryBox(){const e=new yn(me.WORLD.WIDTH,me.WORLD.HEIGHT,me.WORLD.DEPTH),t=new Fh(e),n=new ts({color:8947848,transparent:!0,opacity:.3});this.boundaryBox=new ia(t,n),this.boundaryBox.position.y=me.WORLD.HEIGHT/2,this.scene.add(this.boundaryBox)}setupLights(){const e=new a0(16777215,.6);this.scene.add(e);const t=new s0(16777215,.8);t.position.set(10,20,10),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,this.scene.add(t)}onWindowResize(){const e=window.innerWidth/window.innerHeight,t=me.CAMERA.FRUSTUM_SIZE;this.camera.left=-t*e/2,this.camera.right=t*e/2,this.camera.top=t/2,this.camera.bottom=-t/2,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}start(){this.animationId||this.loop()}onUpdate(e){this.updateCallbacks.push(e)}loop(){this.animationId=requestAnimationFrame(this.loop.bind(this));const e=this.clock.getDelta();this.updateCallbacks.forEach(t=>t(e)),this.controls.update(),this.renderer.render(this.scene,this.camera)}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}getControls(){return this.controls}getInputManager(){return this.inputManager}setCameraView(e){let t;switch(e){case"isometric":t=me.CAMERA.VIEW_PRESETS.ISOMETRIC;break;case"top":t=me.CAMERA.VIEW_PRESETS.TOP;break;case"front":t=me.CAMERA.VIEW_PRESETS.FRONT;break;case"side":t=me.CAMERA.VIEW_PRESETS.SIDE;break;case"close":t=me.CAMERA.VIEW_PRESETS.CLOSE;break;default:t=me.CAMERA.INITIAL_POSITION}this.camera.position.set(t.x,t.y,t.z),this.camera.lookAt(0,0,0),this.controls.target.set(0,0,0),this.controls.update()}resetCamera(){this.setCameraView("isometric"),this.camera.zoom=1,this.camera.updateProjectionMatrix()}}var C=(r=>(r[r.SOLID=2]="SOLID",r[r.PLATFORM=3]="PLATFORM",r[r.LADDER=4]="LADDER",r[r.TRAP=5]="TRAP",r[r.KEY=6]="KEY",r[r.DOOR=7]="DOOR",r[r.SPAWN=8]="SPAWN",r[r.GOAL=9]="GOAL",r))(C||{});class f0{position;type;userData={};constructor(e,t){this.position=e.clone(),this.type=t,this.userData.type=t}}const Ya={crossroads:{name:"The Crossroads",description:"A balanced symmetrical arena with a central high ground.",blocks:[[-2,0,-2,C.SOLID],[-1,0,-2,C.SOLID],[0,0,-2,C.SOLID],[1,0,-2,C.SOLID],[2,0,-2,C.SOLID],[-2,0,-1,C.SOLID],[-1,0,-1,C.SOLID],[0,0,-1,C.SOLID],[1,0,-1,C.SOLID],[2,0,-1,C.SOLID],[-2,0,0,C.SOLID],[-1,0,0,C.SOLID],[0,0,0,C.SOLID],[1,0,0,C.SOLID],[2,0,0,C.SOLID],[-2,0,1,C.SOLID],[-1,0,1,C.SOLID],[0,0,1,C.SOLID],[1,0,1,C.SOLID],[2,0,1,C.SOLID],[-2,0,2,C.SOLID],[-1,0,2,C.SOLID],[0,0,2,C.SOLID],[1,0,2,C.SOLID],[2,0,2,C.SOLID],[0,1,0,C.SOLID],[0,2,0,C.SOLID],[0,3,0,C.GOAL],[-2,1,-2,C.SPAWN],[2,1,-2,C.SPAWN],[-2,1,2,C.SPAWN],[2,1,2,C.SPAWN],[-1,1,0,C.PLATFORM],[1,1,0,C.PLATFORM],[0,1,-1,C.PLATFORM],[0,1,1,C.PLATFORM]]},tower:{name:"Tower Ascent",description:"A vertical platforming challenge focusing on precise jumps.",blocks:[[0,0,0,C.SOLID],[1,0,0,C.SOLID],[0,0,1,C.SOLID],[1,0,1,C.SOLID],[0,1,0,C.SPAWN],[2,1,0,C.PLATFORM],[2,2,2,C.PLATFORM],[0,3,2,C.PLATFORM],[-2,4,2,C.PLATFORM],[-2,5,0,C.PLATFORM],[-2,6,-2,C.PLATFORM],[0,7,-2,C.PLATFORM],[0,8,0,C.SOLID],[0,9,0,C.GOAL]]},forts:{name:"Dual Forts",description:"Two islands connected by a narrow bridge. Tactical positioning is key.",blocks:[[-4,0,-1,C.SOLID],[-3,0,-1,C.SOLID],[-2,0,-1,C.SOLID],[-4,0,0,C.SOLID],[-3,0,0,C.SOLID],[-2,0,0,C.SOLID],[-4,0,1,C.SOLID],[-3,0,1,C.SOLID],[-2,0,1,C.SOLID],[-3,1,0,C.SPAWN],[4,0,-1,C.SOLID],[3,0,-1,C.SOLID],[2,0,-1,C.SOLID],[4,0,0,C.SOLID],[3,0,0,C.SOLID],[2,0,0,C.SOLID],[4,0,1,C.SOLID],[3,0,1,C.SOLID],[2,0,1,C.SOLID],[3,1,0,C.SPAWN],[-1,0,0,C.PLATFORM],[0,0,0,C.PLATFORM],[1,0,0,C.PLATFORM],[0,1,0,C.GOAL]]},infiniteLoop:{name:"MVP Test: Infinite Loop",description:"Test endless circular movement via rotation without falling.",blocks:[[-1,0,-3,C.SOLID],[0,0,-3,C.SOLID],[1,0,-3,C.SOLID],[3,0,-1,C.SOLID],[3,0,0,C.SOLID],[3,0,1,C.SOLID],[1,0,3,C.SOLID],[0,0,3,C.SOLID],[-1,0,3,C.SOLID],[-3,0,1,C.SOLID],[-3,0,0,C.SOLID],[-3,0,-1,C.SOLID],[0,1,-3,C.SPAWN],[0,1,0,C.GOAL]]},brokenBridge:{name:"MVP Test: Broken Bridge",description:"Platforms separated in depth that connect when rotated.",blocks:[[-1,0,-5,C.SOLID],[0,0,-5,C.SOLID],[1,0,-5,C.SOLID],[0,1,-5,C.SPAWN],[-1,0,5,C.SOLID],[0,0,5,C.SOLID],[1,0,5,C.SOLID],[0,1,5,C.GOAL],[0,0,-2,C.PLATFORM],[0,0,2,C.PLATFORM]]},noClipping:{name:"MVP Test: No Clipping",description:"Enclosed space to verify wall collision works from all angles.",blocks:[[-2,0,-2,C.SOLID],[-1,0,-2,C.SOLID],[0,0,-2,C.SOLID],[1,0,-2,C.SOLID],[2,0,-2,C.SOLID],[-2,0,-1,C.SOLID],[-1,0,-1,C.SOLID],[0,0,-1,C.SOLID],[1,0,-1,C.SOLID],[2,0,-1,C.SOLID],[-2,0,0,C.SOLID],[-1,0,0,C.SOLID],[0,0,0,C.SOLID],[1,0,0,C.SOLID],[2,0,0,C.SOLID],[-2,0,1,C.SOLID],[-1,0,1,C.SOLID],[0,0,1,C.SOLID],[1,0,1,C.SOLID],[2,0,1,C.SOLID],[-2,0,2,C.SOLID],[-1,0,2,C.SOLID],[0,0,2,C.SOLID],[1,0,2,C.SOLID],[2,0,2,C.SOLID],[-2,1,-2,C.SOLID],[-1,1,-2,C.SOLID],[0,1,-2,C.SOLID],[1,1,-2,C.SOLID],[2,1,-2,C.SOLID],[-2,2,-2,C.SOLID],[-1,2,-2,C.SOLID],[0,2,-2,C.SOLID],[1,2,-2,C.SOLID],[2,2,-2,C.SOLID],[-2,1,2,C.SOLID],[-1,1,2,C.SOLID],[0,1,2,C.SOLID],[1,1,2,C.SOLID],[2,1,2,C.SOLID],[-2,2,2,C.SOLID],[-1,2,2,C.SOLID],[0,2,2,C.SOLID],[1,2,2,C.SOLID],[2,2,2,C.SOLID],[-2,1,-1,C.SOLID],[-2,1,0,C.SOLID],[-2,1,1,C.SOLID],[-2,2,-1,C.SOLID],[-2,2,0,C.SOLID],[-2,2,1,C.SOLID],[2,1,-1,C.SOLID],[2,1,0,C.SOLID],[2,1,1,C.SOLID],[2,2,-1,C.SOLID],[2,2,0,C.SOLID],[2,2,1,C.SOLID],[0,1,0,C.SPAWN],[1,1,1,C.GOAL]]},keyHunt:{name:"Key Hunt",description:"Collect the key to unlock the door.",blocks:[[-2,0,0,C.SOLID],[-1,0,0,C.SOLID],[0,0,0,C.SOLID],[0,1,0,C.SPAWN],[4,2,0,C.SOLID],[4,3,0,C.KEY],[1,1,0,C.SOLID],[2,1,0,C.SOLID],[3,2,0,C.SOLID],[7,0,0,C.SOLID],[8,0,0,C.SOLID],[7,1,0,C.DOOR],[8,1,0,C.GOAL]]},ladderClimb:{name:"Ladder Climb",description:"Use W/S to climb the ladder.",blocks:[[0,0,0,C.SOLID],[1,0,0,C.SOLID],[0,1,0,C.SPAWN],[3,0,0,C.SOLID],[3,1,0,C.LADDER],[3,2,0,C.LADDER],[3,3,0,C.LADDER],[3,4,0,C.LADDER],[3,5,0,C.SOLID],[4,5,0,C.SOLID],[5,5,0,C.SOLID],[4,6,0,C.GOAL]]},trapRun:{name:"Trap Run",description:"Avoid the traps or respawn from last safe position!",blocks:[[0,0,0,C.SOLID],[1,0,0,C.SOLID],[0,1,0,C.SPAWN],[2,0,0,C.TRAP],[3,0,0,C.SOLID],[4,0,0,C.TRAP],[5,0,0,C.SOLID],[6,0,0,C.TRAP],[7,0,2,C.SOLID],[8,0,2,C.SOLID],[8,1,2,C.GOAL]]}};class p0{scene;meshes;capacity=1e4;dummy=new bt;instanceCounts=new Map;positionToIndex=new Map;constructor(e){this.scene=e,this.meshes=new Map,this.initMeshes()}initMeshes(){const e=new yn(me.VOXEL_SIZE,me.VOXEL_SIZE,me.VOXEL_SIZE);Object.values(C).forEach(t=>{if(typeof t=="number"){const n=t,i=this.getMaterial(n),s=new t0(e,i,this.capacity);s.instanceMatrix.setUsage(Vd),s.count=0,s.castShadow=!0,s.receiveShadow=!0,this.scene.add(s),this.meshes.set(n,s),this.instanceCounts.set(n,0),this.positionToIndex.set(n,new Map)}})}getMaterial(e){let t=8947848;switch(e){case C.SOLID:t=9127187;break;case C.PLATFORM:t=14743546;break;case C.LADDER:t=13789470;break;case C.TRAP:t=16711680;break;case C.KEY:t=16766720;break;case C.DOOR:t=65280;break;case C.SPAWN:t=16771899;break;case C.GOAL:t=10233776;break}return new Oo({color:t})}getKey(e,t,n){return`${e},${t},${n}`}addVoxel(e,t,n,i){const s=this.meshes.get(i);if(!s)return;const o=this.instanceCounts.get(i);if(o>=this.capacity){console.warn(`Voxel capacity reached for type ${i}`);return}this.dummy.position.set(e,t,n),this.dummy.updateMatrix(),s.setMatrixAt(o,this.dummy.matrix),this.positionToIndex.get(i).set(this.getKey(e,t,n),o),this.instanceCounts.set(i,o+1),s.count=o+1,s.instanceMatrix.needsUpdate=!0}removeVoxel(e,t,n,i){const s=this.meshes.get(i),o=this.positionToIndex.get(i);if(!s||!o)return;const a=this.getKey(e,t,n),l=o.get(a);if(l===void 0)return;const c=this.instanceCounts.get(i),h=c-1;if(l!==h){const u=new tt;s.getMatrixAt(h,u),s.setMatrixAt(l,u);const d=new I;d.setFromMatrixPosition(u);const m=this.getKey(Math.round(d.x),Math.round(d.y),Math.round(d.z));o.set(m,l)}o.delete(a),this.instanceCounts.set(i,c-1),s.count=c-1,s.instanceMatrix.needsUpdate=!0}clear(){this.meshes.forEach((e,t)=>{e.count=0,e.instanceMatrix.needsUpdate=!0,this.instanceCounts.set(t,0),this.positionToIndex.get(t).clear()})}getMeshes(){return Array.from(this.meshes.values())}}class m0{voxels;spawnPoint=null;history=[];renderer;constructor(e){this.voxels=new Map,this.renderer=new p0(e)}getKey(e,t,n){return`${e},${t},${n}`}addVoxel(e,t,n,i,s=!0){const o=this.getKey(e,t,n),a=me.GRID_SIZE/2;if(Math.abs(e)>a||Math.abs(t)>a||Math.abs(n)>a)return console.warn(`Position ${e},${t},${n} is out of bounds`),!1;if(this.voxels.has(o)){if(this.voxels.get(o).userData.type===i)return!1;this.removeVoxel(e,t,n,s)}i===C.SPAWN&&(this.spawnPoint&&this.removeVoxel(this.spawnPoint.x,this.spawnPoint.y,this.spawnPoint.z,s),this.spawnPoint=new I(e,t,n));const l=new I(e,t,n),c=new f0(l,i);return this.renderer.addVoxel(e,t,n,i),this.voxels.set(o,c),s&&this.history.push({type:"add",x:e,y:t,z:n,voxelType:i}),!0}removeVoxel(e,t,n,i=!0){const s=this.getKey(e,t,n),o=this.voxels.get(s);if(!o)return!1;const a=o.userData.type;return a===C.SPAWN&&(this.spawnPoint=null),this.renderer.removeVoxel(e,t,n,a),this.voxels.delete(s),i&&this.history.push({type:"remove",x:e,y:t,z:n,voxelType:a}),!0}removeVoxelAt(e,t=!1){return this.removeVoxel(Math.round(e.x),Math.round(e.y),Math.round(e.z),t)}undo(){if(this.history.length===0){console.log("Nothing to undo");return}const e=this.history.pop();e.type==="add"?this.removeVoxel(e.x,e.y,e.z,!1):this.addVoxel(e.x,e.y,e.z,e.voxelType,!1)}clear(){this.renderer.clear(),this.voxels.clear(),this.spawnPoint=null,this.history=[]}getMeshes(){return this.renderer.getMeshes()}serialize(){const e=[];this.voxels.forEach(n=>{e.push([n.position.x,n.position.y,n.position.z,n.userData.type])});const t={meta:{version:"1.1",author:"User",created_at:new Date().toISOString()},level_data:{grid_size:[me.GRID_SIZE,me.GRID_SIZE,me.GRID_SIZE],spawn_point:this.spawnPoint?[this.spawnPoint.x,this.spawnPoint.y,this.spawnPoint.z]:[0,5,0],blocks:e}};return JSON.stringify(t,null,2)}deserialize(e){try{const t=JSON.parse(e);return this.clear(),t.level_data.blocks.forEach(([n,i,s,o])=>{this.addVoxel(n,i,s,o,!1)}),console.log(`Level loaded with ${this.voxels.size} blocks.`),!0}catch(t){return console.error("Failed to load level:",t),!1}}loadPreset(e){const t=Ya[e];return t?(this.clear(),console.log(`Loading preset: ${t.name}`),t.blocks.forEach(([n,i,s,o])=>{this.addVoxel(n,i,s,o,!1)}),!0):(console.error(`Preset '${e}' not found.`),!1)}getPresetList(){return Object.keys(Ya).map(e=>({key:e,name:Ya[e].name}))}getAllVoxels(){return Array.from(this.voxels.values())}getSpawnPoint(){return this.spawnPoint?this.spawnPoint.clone():null}saveToLocalStorage(e){const t=this.serialize();localStorage.setItem(`ortho_level_${e}`,t),console.log(`Level '${e}' saved to Local Storage.`)}loadFromLocalStorage(e){const t=localStorage.getItem(`ortho_level_${e}`);return t?this.deserialize(t):(console.error(`Level '${e}' not found in Local Storage.`),!1)}listSavedLevels(){const e=[];for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t);n&&n.startsWith("ortho_level_")&&e.push(n.replace("ortho_level_",""))}return e}}class _0{engine;levelManager;raycaster;mouse;ghostMesh;highlightBox;currentType=C.SOLID;isEraserMode=!1;isCursorMode=!0;isAltDown=!1;isSpaceDown=!1;enabled=!0;buildHeight=me.EDITOR.DEFAULT_BUILD_HEIGHT;gridPlane;gridPlaneMesh;showGridPlane=!0;smartSnapEnabled=!0;isMouseDown=!1;isDragging=!1;lastPlacedPosition=null;placedBlocksThisDrag=new Set;onBuildHeightChanged=null;onBrushChanged=null;constructor(e,t){this.engine=e,this.levelManager=t,this.raycaster=new zh,this.mouse=new Oe;const n=new yn(me.VOXEL_SIZE,me.VOXEL_SIZE,me.VOXEL_SIZE),i=new _r({color:5025616,transparent:!0,opacity:.5,depthTest:!1});this.ghostMesh=new Et(n,i),this.engine.getScene().add(this.ghostMesh);const s=new Fh(n);this.highlightBox=new ia(s,new ts({color:16711680,linewidth:2})),this.highlightBox.visible=!1,this.engine.getScene().add(this.highlightBox),this.setupGridPlane(),this.setupInputs(),this.engine.getControls().enabled=!0}setupGridPlane(){const e=me.EDITOR.GRID_PLANE_SIZE;this.gridPlane=new kh(e,e,8947848,4473924),this.gridPlane.position.y=this.buildHeight,this.engine.getScene().add(this.gridPlane);const t=new es(e,e),n=new _r({color:4491519,transparent:!0,opacity:me.EDITOR.GRID_PLANE_OPACITY,side:vn,depthWrite:!1});this.gridPlaneMesh=new Et(t,n),this.gridPlaneMesh.rotation.x=Math.PI/2,this.gridPlaneMesh.position.y=this.buildHeight,this.engine.getScene().add(this.gridPlaneMesh),this.updateGridPlaneVisibility()}updateGridPlane(){this.gridPlane.position.y=this.buildHeight,this.gridPlaneMesh.position.y=this.buildHeight;const e=me.EDITOR.GRID_PLANE_OPACITY,t=Math.min(1,this.buildHeight/10),n=e+t*.1;this.gridPlaneMesh.material.opacity=n,this.onBuildHeightChanged&&this.onBuildHeightChanged(this.buildHeight)}updateGridPlaneVisibility(){const e=this.enabled&&!this.isCursorMode&&this.showGridPlane;this.gridPlane.visible=e,this.gridPlaneMesh.visible=e}setBuildHeight(e){this.buildHeight=Math.max(me.EDITOR.MIN_BUILD_HEIGHT,Math.min(me.EDITOR.MAX_BUILD_HEIGHT,e)),this.updateGridPlane()}getBuildHeight(){return this.buildHeight}toggleGridPlane(){this.showGridPlane=!this.showGridPlane,this.updateGridPlaneVisibility()}toggleSmartSnap(){this.smartSnapEnabled=!this.smartSnapEnabled}setEnabled(e){this.enabled=e,this.updateVisuals(),this.updateGridPlaneVisibility(),e||(this.engine.getControls().enabled=!1)}updateVisuals(){const e=this.enabled&&!this.isCursorMode&&!this.isSpaceDown;this.ghostMesh.visible=e,this.highlightBox.visible=e&&this.highlightBox.visible,this.isSpaceDown&&this.enabled?document.body.style.cursor="grab":document.body.style.cursor="default"}setupInputs(){window.addEventListener("mousemove",this.onMouseMove.bind(this)),window.addEventListener("mousedown",this.onMouseDown.bind(this)),window.addEventListener("mouseup",this.onMouseUp.bind(this)),window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this)),window.addEventListener("contextmenu",e=>e.preventDefault())}onMouseMove(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1}onKeyDown(e){if(this.enabled){if(e.code==="Space"){this.isSpaceDown=!0,this.engine.getControls().enabled=!0,this.updateVisuals();return}if(e.key==="Alt"&&(this.isAltDown=!0),e.key==="PageUp"){this.setBuildHeight(this.buildHeight+1),e.preventDefault();return}if(e.key==="PageDown"){this.setBuildHeight(this.buildHeight-1),e.preventDefault();return}if(e.shiftKey&&e.key>="0"&&e.key<="9"){this.setBuildHeight(parseInt(e.key));return}switch(e.key){case"1":this.setCursorMode();break;case"2":this.setBrush(C.SOLID);break;case"3":this.setBrush(C.PLATFORM);break;case"4":this.setBrush(C.LADDER);break;case"5":this.setBrush(C.TRAP);break;case"6":this.setBrush(C.KEY);break;case"7":this.setBrush(C.DOOR);break;case"8":this.setBrush(C.SPAWN);break;case"9":this.setBrush(C.GOAL);break;case"0":this.setEraser();break;case"z":(e.ctrlKey||e.metaKey)&&this.levelManager.undo();break;case"g":case"G":this.toggleGridPlane();break;case"p":case"P":console.log(this.levelManager.serialize());break}}}onKeyUp(e){e.code==="Space"&&(this.isSpaceDown=!1,this.enabled&&(this.engine.getControls().enabled=!1),this.updateVisuals()),e.key==="Alt"&&(this.isAltDown=!1)}setCursorMode(){this.isCursorMode=!0,this.isEraserMode=!1,this.resetDragState(),this.engine.getControls().enabled=!0,this.updateGhostColor(),this.updateVisuals(),this.updateGridPlaneVisibility(),this.onBrushChanged&&this.onBrushChanged(1),console.log("Cursor Mode Active")}setBrush(e){this.currentType=e,this.isEraserMode=!1,this.isCursorMode=!1,this.resetDragState(),this.engine.getControls().enabled=!1,this.updateGhostColor(),this.updateVisuals(),this.updateGridPlaneVisibility(),this.onBrushChanged&&this.onBrushChanged(e),console.log(`Brush set to: ${C[e]}`)}setEraser(){this.isEraserMode=!0,this.isCursorMode=!1,this.resetDragState(),this.engine.getControls().enabled=!1,this.updateVisuals(),this.updateGridPlaneVisibility(),this.onBrushChanged&&this.onBrushChanged(0),console.log("Eraser Mode Active")}resetDragState(){this.isMouseDown=!1,this.isDragging=!1,this.placedBlocksThisDrag.clear(),this.lastPlacedPosition=null}resetEditorState(){this.resetDragState(),this.setCursorMode()}updateGhostColor(){const e=this.ghostMesh.material;if(this.isCursorMode)e.color.setHex(11184810);else switch(this.currentType){case C.SOLID:e.color.setHex(9127187);break;case C.PLATFORM:e.color.setHex(14743546);break;case C.LADDER:e.color.setHex(13789470);break;case C.TRAP:e.color.setHex(16711680);break;case C.KEY:e.color.setHex(16766720);break;case C.DOOR:e.color.setHex(65280);break;case C.SPAWN:e.color.setHex(16771899);break;case C.GOAL:e.color.setHex(10233776);break;default:e.color.setHex(11184810);break}}onMouseDown(e){if(this.enabled){if(e.button===2){this.levelManager.undo();return}e.button===0&&(this.isCursorMode||this.isSpaceDown||(this.isMouseDown=!0,this.isDragging=!1,this.placedBlocksThisDrag.clear(),this.lastPlacedPosition=null,this.placeOrRemoveBlock()))}}onMouseUp(e){e.button===0&&(this.isMouseDown=!1,this.isDragging=!1,this.placedBlocksThisDrag.clear(),this.lastPlacedPosition=null)}placeOrRemoveBlock(){const e=this.getIntersection(),t=this.isEraserMode||this.isAltDown;if(e)if(t){const n=e.object;if(n.isInstancedMesh&&e.instanceId!==void 0){const i=new tt;n.getMatrixAt(e.instanceId,i);const s=new I().setFromMatrixPosition(i),o=Math.round(s.y);if(o===this.buildHeight){const a=`${Math.round(s.x)},${o},${Math.round(s.z)}`;this.placedBlocksThisDrag.has(a)||(this.levelManager.removeVoxel(Math.round(s.x),Math.round(s.y),Math.round(s.z)),this.placedBlocksThisDrag.add(a),this.lastPlacedPosition=new I(Math.round(s.x),o,Math.round(s.z)))}}}else{if(!e.face)return;const n=e.point,i=Math.round(n.x),s=this.buildHeight,o=Math.round(n.z);if(!this.isWithinWorldBounds(i,s,o))return;const a=`${i},${s},${o}`;this.placedBlocksThisDrag.has(a)||(this.levelManager.addVoxel(i,s,o,this.currentType),this.placedBlocksThisDrag.add(a),this.lastPlacedPosition=new I(i,s,o),this.isDragging=!0)}else if(!t){const n=new wn(new I(0,1,0),-this.buildHeight),i=new I;if(this.raycaster.ray.intersectPlane(n,i)){const o=Math.round(i.x),a=this.buildHeight,l=Math.round(i.z);if(!this.isWithinWorldBounds(o,a,l))return;const c=`${o},${a},${l}`;this.placedBlocksThisDrag.has(c)||(this.levelManager.addVoxel(o,a,l,this.currentType),this.placedBlocksThisDrag.add(c),this.lastPlacedPosition=new I(o,a,l),this.isDragging=!0)}}}getIntersection(){this.raycaster.setFromCamera(this.mouse,this.engine.getCamera());const e=this.levelManager.getMeshes(),t=this.raycaster.intersectObjects(e,!1);return t.length>0?t[0]:null}update(){if(!this.enabled||this.isSpaceDown||this.isCursorMode)return;this.isMouseDown&&!this.isSpaceDown&&this.placeOrRemoveBlock();const e=this.engine.getInputManager(),t=e.getMousePosition();this.mouse.set(t.x,t.y),this.isAltDown=e.isKeyPressed("Alt");const n=this.getIntersection(),i=this.isEraserMode||this.isAltDown;if(n&&n.face)if(i){const s=n.object;if(s.isInstancedMesh&&n.instanceId!==void 0){const o=new tt;s.getMatrixAt(n.instanceId,o);const a=new I().setFromMatrixPosition(o);Math.round(a.y)===this.buildHeight?(this.ghostMesh.visible=!1,this.highlightBox.visible=!0,this.highlightBox.position.copy(a)):(this.ghostMesh.visible=!1,this.highlightBox.visible=!1)}else this.ghostMesh.visible=!1,this.highlightBox.visible=!1}else{this.ghostMesh.visible=!0,this.highlightBox.visible=!1;const s=n.point.clone(),o=new I(Math.round(s.x),this.buildHeight,Math.round(s.z));this.ghostMesh.position.copy(o);const a=this.isPositionValid(o);this.updateGhostValidation(a)}else this.handleGridIntersection(i)}handleGridIntersection(e){if(e){this.ghostMesh.visible=!1,this.highlightBox.visible=!1;return}const t=new wn(new I(0,1,0),-this.buildHeight),n=new I;if(this.raycaster.ray.intersectPlane(t,n)){this.ghostMesh.visible=!0,this.highlightBox.visible=!1;const s=new I(Math.round(n.x),this.buildHeight,Math.round(n.z));this.ghostMesh.position.copy(s);const o=this.isPositionValid(s);this.updateGhostValidation(o)}else this.ghostMesh.visible=!1}isWithinWorldBounds(e,t,n){return e>=me.WORLD.MIN_X&&e<=me.WORLD.MAX_X&&t>=me.WORLD.MIN_Y&&t<=me.WORLD.MAX_Y&&n>=me.WORLD.MIN_Z&&n<=me.WORLD.MAX_Z}isPositionValid(e){if(!this.isWithinWorldBounds(e.x,e.y,e.z))return!1;const t=this.levelManager.getAllVoxels();for(const n of t){const i=n.position;if(Math.abs(i.x-e.x)<.1&&Math.abs(i.y-e.y)<.1&&Math.abs(i.z-e.z)<.1)return!1}return!0}updateGhostValidation(e){const t=this.ghostMesh.material;e?t.color.setHex(me.EDITOR.GHOST_VALID_COLOR):t.color.setHex(me.EDITOR.GHOST_INVALID_COLOR)}}var on=(r=>(r[r.EDIT=0]="EDIT",r[r.PLAY=1]="PLAY",r))(on||{}),pt=(r=>(r[r.FRONT=0]="FRONT",r[r.RIGHT=1]="RIGHT",r[r.BACK=2]="BACK",r[r.LEFT=3]="LEFT",r))(pt||{}),je=(r=>(r.INPUT_ROTATE="input_rotate",r.INPUT_MOVE="input_move",r.INPUT_ACTION="input_action",r.GAME_MODE_CHANGED="game_mode_changed",r.SCORE_UPDATED="score_updated",r.GOAL_REACHED="goal_reached",r.CAMERA_ROTATED="camera_rotated",r.KEY_COLLECTED="key_collected",r.PLAYER_DIED="player_died",r.LEVEL_COMPLETE="level_complete",r.PRESET_LOADED="preset_loaded",r))(je||{});class Hn{static instance;listeners=new Map;constructor(){}static getInstance(){return Hn.instance||(Hn.instance=new Hn),Hn.instance}on(e,t){this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(t)}off(e,t){if(!this.listeners.has(e))return;const n=this.listeners.get(e),i=n.indexOf(t);i!==-1&&n.splice(i,1)}emit(e,t){if(!this.listeners.has(e))return;this.listeners.get(e).forEach(i=>{try{i(t)}catch(s){console.error(`Error in event handler for ${e}:`,s)}})}}class g0{editorSystem;levelManager;engine;container;compassArrow=null;eventManager;onRotateLeft=null;onRotateRight=null;onInput=null;constructor(e,t,n,i){this.editorSystem=t,this.levelManager=n,this.engine=i,this.container=document.getElementById(e),this.eventManager=Hn.getInstance(),this.render(),this.attachEvents(),this.updateLevelList(),this.updatePresetList(),this.container.classList.add("edit-mode"),this.eventManager.on(je.SCORE_UPDATED,s=>this.updateScore(s)),this.eventManager.on(je.GOAL_REACHED,()=>this.showNotification("Goal Reached! +100 Points")),this.eventManager.on(je.GAME_MODE_CHANGED,s=>this.setGameMode(s)),this.eventManager.on(je.CAMERA_ROTATED,s=>this.updateCompass(s)),this.eventManager.on(je.KEY_COLLECTED,s=>this.updateKeyCounter(s.collected,s.required)),this.eventManager.on(je.PLAYER_DIED,()=>this.showNotification("💀 Ouch! -5 Points",2e3)),this.eventManager.on(je.LEVEL_COMPLETE,s=>this.showLevelComplete(s))}setGameMode(e){e===on.PLAY?(this.container.classList.remove("edit-mode"),this.container.classList.add("play-mode")):(this.container.classList.remove("play-mode"),this.container.classList.add("edit-mode"))}updateCompass(e){if(this.compassArrow){const t=e*(180/Math.PI);this.compassArrow.style.transform=`rotate(${t}deg)`}}showNotification(e,t=3e3){let n=document.getElementById("game-notification");n||(n=document.createElement("div"),n.id="game-notification",document.body.appendChild(n)),n.textContent=e,n.classList.add("show"),setTimeout(()=>{n?.classList.remove("show")},t)}render(){this.container.innerHTML=`
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
    `,this.compassArrow=document.getElementById("compass-arrow"),this.editorSystem.onBuildHeightChanged=e=>{this.updateBuildHeight(e)},this.editorSystem.onBrushChanged=e=>{this.updateBrushSelection(e)}}updateBuildHeight(e){const t=document.getElementById("build-height-value");t&&(t.textContent=e.toString())}updateBrushSelection(e){this.container.querySelectorAll(".block-btn").forEach(n=>{Number.parseInt(n.dataset.type||"0")===e?n.classList.add("active"):n.classList.remove("active")})}updateScore(e){const t=document.getElementById("score-display");t&&(t.textContent=e.toString())}updateKeyCounter(e,t){const n=document.getElementById("keys-collected"),i=document.getElementById("keys-total");n&&(n.textContent=e.toString()),i&&(i.textContent=t.toString())}showLevelComplete(e){const t=document.getElementById("level-complete-modal");if(!t)return;const n=c=>{const h=Math.floor(c/60),u=Math.floor(c%60);return`${h}:${u.toString().padStart(2,"0")}`},i=document.getElementById("completion-time"),s=document.getElementById("completion-rotations"),o=document.getElementById("best-time"),a=document.getElementById("best-rotations");i&&(i.textContent=n(e.time)),s&&(s.textContent=e.rotations.toString()),o&&(o.textContent=e.stats.bestTime?n(e.stats.bestTime):"-"),a&&(a.textContent=e.stats.bestRotations?.toString()||"-");const l=document.getElementById("btn-next-level");l&&(e.hasNext?l.style.display="block":l.style.display="none"),t.style.display="flex"}hideLevelComplete(){const e=document.getElementById("level-complete-modal");e&&(e.style.display="none")}attachEvents(){this.container.querySelectorAll(".d-pad .control-btn").forEach(o=>{const a=o.dataset.key,l=h=>{h.preventDefault(),o.classList.add("pressed"),this.eventManager.emit(je.INPUT_MOVE,{key:a,pressed:!0})},c=h=>{h.preventDefault(),o.classList.remove("pressed"),this.eventManager.emit(je.INPUT_MOVE,{key:a,pressed:!1})};o.addEventListener("mousedown",l),o.addEventListener("touchstart",l),o.addEventListener("mouseup",c),o.addEventListener("touchend",c),o.addEventListener("mouseleave",c)});const t=document.getElementById("btn-rot-left"),n=document.getElementById("btn-rot-right"),i=(o,a)=>{if(!o)return;const l=c=>{c.preventDefault(),o.classList.add("pressed"),setTimeout(()=>o.classList.remove("pressed"),100),this.eventManager.emit(je.INPUT_ROTATE,{direction:a})};o.addEventListener("click",l),o.addEventListener("touchstart",l)};i(t,1),i(n,-1);const s=this.container.querySelectorAll(".block-btn");s.forEach(o=>{o.addEventListener("click",a=>{const l=a.currentTarget,c=parseInt(l.dataset.type);s.forEach(h=>h.classList.remove("active")),l.classList.add("active"),c===1?this.editorSystem.setCursorMode():c===0?this.editorSystem.setEraser():this.editorSystem.setBrush(c)})}),document.getElementById("btn-undo")?.addEventListener("click",()=>{this.levelManager.undo()}),document.getElementById("btn-save-local")?.addEventListener("click",()=>{const a=document.getElementById("level-name-input").value.trim();a?(this.levelManager.saveToLocalStorage(a),alert(`Level '${a}' saved!`),this.updateLevelList()):alert("Please enter a level name.")}),document.getElementById("btn-load-local")?.addEventListener("click",()=>{const a=document.getElementById("level-select").value;a&&(this.levelManager.loadFromLocalStorage(a)?this.editorSystem.resetEditorState():alert("Failed to load level."))}),document.getElementById("preset-select")?.addEventListener("change",o=>{const a=o.target,l=a.value;l&&(confirm(`Load preset map '${l}'? This will clear current changes.`)&&(this.levelManager.loadPreset(l),this.editorSystem.resetEditorState()),a.value="")}),document.getElementById("btn-export")?.addEventListener("click",()=>{const o=this.levelManager.serialize();console.log(o),alert("Level JSON exported to Console (F12)")}),document.getElementById("btn-clear")?.addEventListener("click",()=>{confirm("Are you sure you want to clear the entire level?")&&(this.levelManager.clear(),this.editorSystem.resetEditorState())}),document.getElementById("btn-height-up")?.addEventListener("click",()=>{this.editorSystem.setBuildHeight(this.editorSystem.getBuildHeight()+1)}),document.getElementById("btn-height-down")?.addEventListener("click",()=>{this.editorSystem.setBuildHeight(this.editorSystem.getBuildHeight()-1)}),document.getElementById("btn-height-reset")?.addEventListener("click",()=>{this.editorSystem.setBuildHeight(0)}),document.getElementById("toggle-grid")?.addEventListener("change",()=>{this.editorSystem.toggleGridPlane()}),document.getElementById("toggle-snap")?.addEventListener("change",()=>{this.editorSystem.toggleSmartSnap()}),document.getElementById("btn-view-iso")?.addEventListener("click",()=>{this.engine.setCameraView("isometric")}),document.getElementById("btn-view-top")?.addEventListener("click",()=>{this.engine.setCameraView("top")}),document.getElementById("btn-view-front")?.addEventListener("click",()=>{this.engine.setCameraView("front")}),document.getElementById("btn-view-side")?.addEventListener("click",()=>{this.engine.setCameraView("side")}),document.getElementById("btn-camera-reset")?.addEventListener("click",()=>{this.engine.resetCamera()}),document.getElementById("btn-next-level")?.addEventListener("click",()=>{this.hideLevelComplete(),this.eventManager.emit(je.INPUT_ACTION,{action:"next_level"})}),document.getElementById("btn-retry-level")?.addEventListener("click",()=>{this.hideLevelComplete(),this.eventManager.emit(je.INPUT_ACTION,{action:"retry_level"})}),document.getElementById("btn-return-editor")?.addEventListener("click",()=>{this.hideLevelComplete(),this.eventManager.emit(je.INPUT_ACTION,{action:"return_editor"})})}updateLevelList(){const e=document.getElementById("level-select");if(!e)return;const t=this.levelManager.listSavedLevels();e.innerHTML="",t.forEach(n=>{const i=document.createElement("option");i.value=n,i.textContent=n,e.appendChild(i)})}updatePresetList(){const e=document.getElementById("preset-select");if(!e)return;this.levelManager.getPresetList().forEach(n=>{const i=document.createElement("option");i.value=n.key,i.textContent=n.name,e.appendChild(i)})}}class v0{character;levelManager;gravity=me.PHYSICS.GRAVITY;viewState=pt.FRONT;inputX=0;inputY=0;onGoalReached=null;onKeyCollected=null;onDeath=null;prevPosition=new I;jumpBuffer=0;coyoteTime=0;wasGroundedLastFrame=!1;onLadder=!1;collectedKeys=new Set;keysRequired=0;lastSafePosition=new I(0,5,0);constructor(e,t){this.character=e,this.levelManager=t}setViewState(e){this.viewState=e,this.character.velocity.set(0,this.character.velocity.y,0);let t=0;switch(e){case pt.FRONT:t=0;break;case pt.RIGHT:t=-Math.PI/2;break;case pt.BACK:t=-Math.PI;break;case pt.LEFT:t=-Math.PI*1.5;break}this.character.rotation.y=t,this.snapToVisualDepth()}snapToVisualDepth(){this.update(.016)}setInput(e){this.inputX=e}setVerticalInput(e){this.inputY=e}getCollectedKeysCount(){return this.collectedKeys.size}getRequiredKeysCount(){return this.keysRequired}hasAllKeys(){return this.keysRequired>0&&this.collectedKeys.size>=this.keysRequired}resetGameState(){this.collectedKeys.clear(),this.keysRequired=0,this.onLadder=!1,this.lastSafePosition.set(0,5,0)}countKeysInLevel(){const e=this.levelManager.getAllVoxels();this.keysRequired=e.filter(t=>t.type===C.KEY).length}jump(){this.character.isGrounded||this.coyoteTime>0?(this.character.velocity.y=me.PHYSICS.JUMP_FORCE,this.coyoteTime=0,this.jumpBuffer=0):this.jumpBuffer=me.PHYSICS.JUMP_BUFFER_TIME}update(e){this.prevPosition.copy(this.character.position),this.wasGroundedLastFrame=this.character.isGrounded;const t=me.PHYSICS.MOVE_SPEED,n=this.inputX*t;switch(this.checkLadder(),this.character.velocity.x=0,this.character.velocity.z=0,this.viewState){case pt.FRONT:this.character.velocity.x=n;break;case pt.RIGHT:this.character.velocity.z=-n;break;case pt.BACK:this.character.velocity.x=-n;break;case pt.LEFT:this.character.velocity.z=n;break}this.onLadder?(this.character.velocity.y=this.inputY*3,this.inputY===0&&Math.abs(this.inputX)===0&&(this.character.velocity.y=0)):(this.character.velocity.y-=this.gravity*e,this.character.velocity.y<-20&&(this.character.velocity.y=-20));const i=this.character.velocity.clone().multiplyScalar(e);this.character.isGrounded?Math.abs(this.inputX)>.1?this.character.setEyeState(this.inputX>0?"lookRight":"lookLeft"):this.character.setEyeState("idle"):this.character.setEyeState("jump"),this.character.position.add(new I(i.x,0,i.z)),this.checkCollision("horizontal"),this.character.position.y+=i.y,this.character.isGrounded=!1,this.checkCollision("vertical"),this.character.isGrounded&&this.lastSafePosition.copy(this.character.position),this.wasGroundedLastFrame&&!this.character.isGrounded?this.coyoteTime=me.PHYSICS.COYOTE_TIME:this.character.isGrounded?this.coyoteTime=0:this.coyoteTime>0&&(this.coyoteTime-=e),this.jumpBuffer>0&&(this.jumpBuffer-=e,this.character.isGrounded&&(this.character.velocity.y=me.PHYSICS.JUMP_FORCE,this.jumpBuffer=0)),!this.character.isGrounded&&this.character.position.y<-10&&(this.character.position.set(0,5,0),this.character.velocity.set(0,0,0))}checkLadder(){const e=new Wn().setFromObject(this.character),t=this.levelManager.getAllVoxels();this.onLadder=!1;for(const n of t){if(n.type!==C.LADDER)continue;const i=n.position,s=1,o=i.x-s/2,a=i.x+s/2,l=i.y-s/2,c=i.y+s/2,h=i.z-s/2,u=i.z+s/2;if(e.max.x>o&&e.min.x<a&&e.max.y>l&&e.min.y<c&&e.max.z>h&&e.min.z<u){this.onLadder=!0;return}}}checkCollision(e){const t=new Wn().setFromObject(this.character),n=.01;t.min.addScalar(n),t.max.subScalar(n);const i=this.levelManager.getAllVoxels(),s=this.character.getSize();let o=!1;for(const a of i){const l=a.position,c=1;let h=!1;const u=l.x-c/2,d=l.x+c/2,m=l.y-c/2,g=l.y+c/2,_=l.z-c/2,p=l.z+c/2,f=t.min.x,S=t.max.x,x=t.min.y,y=t.max.y,R=t.min.z,w=t.max.z;switch(this.viewState){case pt.FRONT:case pt.BACK:S>u&&f<d&&y>m&&x<g&&(h=!0);break;case pt.RIGHT:case pt.LEFT:w>_&&R<p&&y>m&&x<g&&(h=!0);break}if(h){if(o=!0,a.userData.type===C.KEY){const E=`${l.x}_${l.y}_${l.z}`;this.collectedKeys.has(E)||(this.collectedKeys.add(E),console.log(`Key collected! (${this.collectedKeys.size}/${this.keysRequired})`),this.levelManager.removeVoxelAt(l),this.onKeyCollected&&this.onKeyCollected(C.KEY));continue}if(a.userData.type===C.DOOR)if(this.hasAllKeys()){console.log("Door unlocked!"),this.levelManager.removeVoxelAt(l);continue}else console.log(`Door locked! Need ${this.keysRequired-this.collectedKeys.size} more keys.`);if(a.userData.type===C.TRAP)return console.log("Hit trap! Respawning..."),this.character.position.copy(this.lastSafePosition),this.character.velocity.set(0,0,0),this.onDeath&&this.onDeath(),!0;if(a.userData.type===C.GOAL)return console.log("GOAL REACHED!"),this.onGoalReached&&this.onGoalReached(),!0;if(a.userData.type===C.LADDER)continue;if(e==="vertical"){if(this.character.velocity.y<0){if(this.prevPosition.y>=g-.15)return this.character.position.y=g+s/2,this.character.isGrounded=!0,this.character.velocity.y=0,this.viewState===pt.FRONT||this.viewState===pt.BACK?this.character.position.z=l.z:this.character.position.x=l.x,!0}else if(this.character.velocity.y>0)return this.character.position.y=m-s/2,this.character.velocity.y=0,!0}else return this.viewState===pt.FRONT||this.viewState===pt.BACK?(this.character.velocity.x>0?this.character.position.x=u-s/2:this.character.velocity.x<0&&(this.character.position.x=d+s/2),this.character.velocity.x=0):(this.character.velocity.z>0?this.character.position.z=_-s/2:this.character.velocity.z<0&&(this.character.position.z=p+s/2),this.character.velocity.z=0),!0}}return o}}class x0{eventManager;levelManager;currentLevelId=null;levelSequence=[];levelStats=new Map;startTime=0;rotationCount=0;STORAGE_KEY="ortho_game_progress";constructor(e){this.eventManager=Hn.getInstance(),this.levelManager=e,this.loadProgress(),this.setupEventListeners()}setupEventListeners(){this.eventManager.on(je.CAMERA_ROTATED,()=>{this.rotationCount++}),this.eventManager.on(je.GOAL_REACHED,()=>{this.handleLevelComplete()})}setLevelSequence(e){this.levelSequence=e}startLevel(e){this.currentLevelId=e,this.startTime=Date.now(),this.rotationCount=0;const t=this.getLevelStats(e);t.attempts++,t.lastPlayed=new Date().toISOString(),this.levelStats.set(e,t),this.saveProgress()}handleLevelComplete(){if(!this.currentLevelId)return;const e=(Date.now()-this.startTime)/1e3,t=this.getLevelStats(this.currentLevelId);t.completed=!0,(!t.bestTime||e<t.bestTime)&&(t.bestTime=e),(!t.bestRotations||this.rotationCount<t.bestRotations)&&(t.bestRotations=this.rotationCount),this.levelStats.set(this.currentLevelId,t),this.saveProgress();const n=this.getLevelMetadata(this.currentLevelId);this.eventManager.emit(je.LEVEL_COMPLETE,{levelId:this.currentLevelId,time:e,rotations:this.rotationCount,stats:t,metadata:n,hasNext:!!n?.nextLevel})}loadNextLevel(){if(!this.currentLevelId)return!1;const e=this.getLevelMetadata(this.currentLevelId);if(!e||!e.nextLevel)return console.log("No next level defined"),!1;const t=e.nextLevel,n=this.getLevelMetadata(t);return n?this.levelManager.loadPreset(t)?(this.startLevel(t),this.eventManager.emit(je.PRESET_LOADED,{message:`Loading: ${n.name}`}),!0):!1:(console.error(`Next level '${t}' not found in sequence`),!1)}getLevelMetadata(e){return this.levelSequence.find(t=>t.id===e)}getLevelStats(e){return this.levelStats.has(e)||this.levelStats.set(e,{completed:!1,attempts:0}),this.levelStats.get(e)}getAllLevelsProgress(){return this.levelSequence.map(e=>({level:e,stats:this.getLevelStats(e.id)}))}getCompletedLevelsCount(){let e=0;return this.levelStats.forEach(t=>{t.completed&&e++}),e}getTotalLevelsCount(){return this.levelSequence.length}resetProgress(){this.levelStats.clear(),this.saveProgress()}loadProgress(){try{const e=localStorage.getItem(this.STORAGE_KEY);if(e){const t=JSON.parse(e);this.levelStats=new Map(Object.entries(t)),console.log("✅ Progress loaded")}}catch(e){console.error("Failed to load progress:",e)}}saveProgress(){try{const e=Object.fromEntries(this.levelStats);localStorage.setItem(this.STORAGE_KEY,JSON.stringify(e))}catch(e){console.error("Failed to save progress:",e)}}getCurrentLevelId(){return this.currentLevelId}getSessionStats(){return{time:this.startTime>0?(Date.now()-this.startTime)/1e3:0,rotations:this.rotationCount}}}function zn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Gh(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vr={duration:.5,overwrite:!1,delay:0},Uo,Lt,rt,dn=1e8,et=1/dn,fo=Math.PI*2,S0=fo/4,M0=0,Hh=Math.sqrt,y0=Math.cos,E0=Math.sin,At=function(e){return typeof e=="string"},ut=function(e){return typeof e=="function"},Xn=function(e){return typeof e=="number"},No=function(e){return typeof e>"u"},Pn=function(e){return typeof e=="object"},Ht=function(e){return e!==!1},Fo=function(){return typeof window<"u"},Os=function(e){return ut(e)||At(e)},Vh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ot=Array.isArray,T0=/random\([^)]+\)/g,b0=/,\s*/g,Hc=/(?:-?\.?\d|\.)+/gi,Wh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ar=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Xh=/[+-]=-?[.\d]+/,A0=/[^,'"\[\]\s]+/gi,w0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot,An,po,Bo,nn={},Xs={},Yh,qh=function(e){return(Xs=xr(e,nn))&&Yt},zo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Yr=function(e,t){return!t&&console.warn(e)},Kh=function(e,t){return e&&(nn[e]=t)&&Xs&&(Xs[e]=t)||nn},qr=function(){return 0},R0={suppressEvents:!0,isStart:!0,kill:!1},Ns={suppressEvents:!0,kill:!1},L0={suppressEvents:!0},ko={},ai=[],mo={},jh,$t={},Ka={},Vc=30,Fs=[],Go="",Ho=function(e){var t=e[0],n,i;if(Pn(t)||ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Fs.length;i--&&!Fs[i].targetTest(t););n=Fs[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new xu(e[i],n)))||e.splice(i,1);return e},Li=function(e){return e._gsap||Ho(fn(e))[0]._gsap},$h=function(e,t,n){return(n=e[t])&&ut(n)?e[t]():No(n)&&e.getAttribute&&e.getAttribute(t)||n},Vt=function(e,t){return(e=e.split(",")).forEach(t)||e},mt=function(e){return Math.round(e*1e5)/1e5||0},at=function(e){return Math.round(e*1e7)/1e7||0},hr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},C0=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ys=function(){var e=ai.length,t=ai.slice(0),n,i;for(mo={},ai.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Vo=function(e){return!!(e._initted||e._startAt||e.add)},Zh=function(e,t,n,i){ai.length&&!Lt&&Ys(),e.render(t,n,!!(Lt&&t<0&&Vo(e))),ai.length&&!Lt&&Ys()},Jh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(A0).length<2?t:At(e)?e.trim():e},Qh=function(e){return e},rn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},P0=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},xr=function(e,t){for(var n in t)e[n]=t[n];return e},Wc=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Pn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},qs=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Gr=function(e){var t=e.parent||ot,n=e.keyframes?P0(Ot(e.keyframes)):rn;if(Ht(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},D0=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},eu=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ra=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ci=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ci=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},I0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_o=function(e,t,n,i){return e._startAt&&(Lt?e._startAt.revert(Ns):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},O0=function r(e){return!e||e._ts&&r(e.parent)},Xc=function(e){return e._repeat?Sr(e._tTime,e=e.duration()+e._rDelay)*e:0},Sr=function(e,t){var n=Math.floor(e=at(e/t));return e&&n===e?n-1:n},Ks=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},sa=function(e){return e._end=at(e._start+(e._tDur/Math.abs(e._ts||e._rts||et)||0))},aa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=at(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),sa(e),n._dirty||Ci(n,e)),e},tu=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ks(e.rawTime(),t),(!t._dur||ns(0,t.totalDuration(),n)-t._tTime>et)&&t.render(n,!0)),Ci(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-et}},Ln=function(e,t,n,i){return t.parent&&ci(t),t._start=at((Xn(n)?n:n||e!==ot?ln(e,n,t):e._time)+t._delay),t._end=at(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),eu(e,t,"_first","_last",e._sort?"_start":0),go(t)||(e._recent=t),i||tu(e,t),e._ts<0&&aa(e,e._tTime),e},nu=function(e,t){return(nn.ScrollTrigger||zo("scrollTrigger",t))&&nn.ScrollTrigger.create(t,e)},iu=function(e,t,n,i,s){if(Xo(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Lt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&jh!==Zt.frame)return ai.push(e),e._lazy=[s,i],1},U0=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},go=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},N0=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&U0(e)&&!(!e._initted&&go(e))||(e._ts<0||e._dp._ts<0)&&!go(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=ns(0,e._tDur,t),h=Sr(l,a),e._yoyo&&h&1&&(o=1-o),h!==Sr(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Lt||i||e._zTime===et||!t&&e._zTime){if(!e._initted&&iu(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?et:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&_o(e,t,n,!0),e._onUpdate&&!n&&Jt(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Jt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ci(e,1),!n&&!Lt&&(Jt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},F0=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Mr=function(e,t,n,i){var s=e._repeat,o=at(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:at(o*(s+1)+e._rDelay*s):o,a>0&&!i&&aa(e,e._tTime=e._tDur*a),e.parent&&sa(e),n||Ci(e.parent,e),e},Yc=function(e){return e instanceof Bt?Ci(e):Mr(e,e._dur)},B0={_start:0,endTime:qr,totalDuration:qr},ln=function r(e,t,n){var i=e.labels,s=e._recent||B0,o=e.duration()>=dn?s.endTime(!1):e._dur,a,l,c;return At(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Ot(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Hr=function(e,t,n){var i=Xn(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ht(l.vars.inherit)&&l.parent;o.immediateRender=Ht(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new vt(t[0],o,t[s+1])},di=function(e,t){return e||e===0?t(e):t},ns=function(e,t,n){return n<e?e:n>t?t:n},It=function(e,t){return!At(e)||!(t=w0.exec(e))?"":t[1]},z0=function(e,t,n){return di(n,function(i){return ns(e,t,i)})},vo=[].slice,ru=function(e,t){return e&&Pn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Pn(e[0]))&&!e.nodeType&&e!==An},k0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return At(i)&&!t||ru(i,1)?(s=n).push.apply(s,fn(i)):n.push(i)})||n},fn=function(e,t,n){return rt&&!t&&rt.selector?rt.selector(e):At(e)&&!n&&(po||!yr())?vo.call((t||Bo).querySelectorAll(e),0):Ot(e)?k0(e,n):ru(e)?vo.call(e,0):e?[e]:[]},xo=function(e){return e=fn(e)[0]||Yr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return fn(t,n.querySelectorAll?n:n===e?Yr("Invalid scope")||Bo.createElement("div"):e)}},su=function(e){return e.sort(function(){return .5-Math.random()})},au=function(e){if(ut(e))return e;var t=Pn(e)?e:{each:e},n=Pi(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return At(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,m,g){var _=(g||t).length,p=o[_],f,S,x,y,R,w,E,O,v;if(!p){if(v=t.grid==="auto"?0:(t.grid||[1,dn])[1],!v){for(E=-dn;E<(E=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(p=o[_]=[],f=l?Math.min(v,_)*h-.5:i%v,S=v===dn?0:l?_*u/v-.5:i/v|0,E=0,O=dn,w=0;w<_;w++)x=w%v-f,y=S-(w/v|0),p[w]=R=c?Math.abs(c==="y"?y:x):Hh(x*x+y*y),R>E&&(E=R),R<O&&(O=R);i==="random"&&su(p),p.max=E-O,p.min=O,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=It(t.amount||t.each)||0,n=n&&_<0?_u(n):n}return _=(p[d]-p.min)/p.max||0,at(p.b+(n?n(_):_)*p.v)+p.u}},So=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=at(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Xn(n)?0:It(n))}},ou=function(e,t){var n=Ot(e),i,s;return!n&&Pn(e)&&(i=n=e.radius||dn,e.values?(e=fn(e.values),(s=!Xn(e[0]))&&(i*=i)):e=So(e.increment)),di(t,n?ut(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=dn,h=0,u=e.length,d,m;u--;)s?(d=e[u].x-a,m=e[u].y-l,d=d*d+m*m):d=Math.abs(e[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?e[h]:o,s||h===o||Xn(o)?h:h+It(o)}:So(e))},lu=function(e,t,n,i){return di(Ot(e)?!t:n===!0?!!(n=0):!i,function(){return Ot(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},G0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},H0=function(e,t){return function(n){return e(parseFloat(n))+(t||It(n))}},V0=function(e,t,n){return hu(e,t,0,1,n)},cu=function(e,t,n){return di(n,function(i){return e[~~t(i)]})},W0=function r(e,t,n){var i=t-e;return Ot(e)?cu(e,r(0,e.length),t):di(n,function(s){return(i+(s-e)%i)%i+e})},X0=function r(e,t,n){var i=t-e,s=i*2;return Ot(e)?cu(e,r(0,e.length-1),t):di(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Kr=function(e){return e.replace(T0,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(b0);return lu(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},hu=function(e,t,n,i,s){var o=t-e,a=i-n;return di(s,function(l){return n+((l-e)/o*a||0)})},Y0=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=At(e),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Ot(e)&&!Ot(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=t}else i||(e=xr(Ot(e)?[]:{},e));if(!h){for(l in t)Wo.call(a,e,l,"get",t[l]);s=function(g){return Ko(g,a)||(o?e.p:e)}}}return di(n,s)},qc=function(e,t,n){var i=e.labels,s=dn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Jt=function(e,t,n){var i=e.vars,s=i[t],o=rt,a=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ai.length&&Ys(),a&&(rt=a),h=l?s.apply(c,l):s.call(c),rt=o,h},Fr=function(e){return ci(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Lt),e.progress()<1&&Jt(e,"onInterrupt"),e},or,uu=[],du=function(e){if(e)if(e=!e.name&&e.default||e,Fo()||e.headless){var t=e.name,n=ut(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:qr,render:Ko,add:Wo,kill:lv,modifier:ov,rawVars:0},o={targetTest:0,get:0,getSetter:qo,aliases:{},register:0};if(yr(),e!==i){if($t[t])return;rn(i,rn(qs(e,s),o)),xr(i.prototype,xr(s,qs(e,o))),$t[i.prop=t]=i,e.targetTest&&(Fs.push(i),ko[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Kh(t,i),e.register&&e.register(Yt,i,Wt)}else uu.push(e)},Qe=255,Br={aqua:[0,Qe,Qe],lime:[0,Qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qe],navy:[0,0,128],white:[Qe,Qe,Qe],olive:[128,128,0],yellow:[Qe,Qe,0],orange:[Qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qe,0,0],pink:[Qe,192,203],cyan:[0,Qe,Qe],transparent:[Qe,Qe,Qe,0]},ja=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Qe+.5|0},fu=function(e,t,n){var i=e?Xn(e)?[e>>16,e>>8&Qe,e&Qe]:0:Br.black,s,o,a,l,c,h,u,d,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Br[e])i=Br[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Qe,i&Qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Qe,e&Qe]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Hc),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=ja(l+1/3,s,o),i[1]=ja(l,s,o),i[2]=ja(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Wh),n&&i.length<4&&(i[3]=1),i}else i=e.match(Hc)||Br.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Qe,o=i[1]/Qe,a=i[2]/Qe,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(m=u-d,c=h>.5?m/(2-u-d):m/(u+d),l=u===s?(o-a)/m+(o<a?6:0):u===o?(a-s)/m+2:(s-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},pu=function(e){var t=[],n=[],i=-1;return e.split(oi).forEach(function(s){var o=s.match(ar)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Kc=function(e,t,n){var i="",s=(e+i).match(oi),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=fu(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=pu(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(oi,"1").split(ar),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(oi),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},oi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Br)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),q0=/hsl[a]?\(/,mu=function(e){var t=e.join(" "),n;if(oi.lastIndex=0,oi.test(t))return n=q0.test(t),e[1]=Kc(e[1],n),e[0]=Kc(e[0],n,pu(e[1])),!0},jr,Zt=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,d,m,g=function _(p){var f=r()-i,S=p===!0,x,y,R,w;if((f>e||f<0)&&(n+=f-t),i+=f,R=i-n,x=R-o,(x>0||S)&&(w=++u.frame,d=R-u.time*1e3,u.time=R=R/1e3,o+=x+(x>=s?4:s-x),y=1),S||(l=c(_)),y)for(m=0;m<a.length;m++)a[m](R,d,w,p)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Yh&&(!po&&Fo()&&(An=po=window,Bo=An.document||{},nn.gsap=Yt,(An.gsapVersions||(An.gsapVersions=[])).push(Yt.version),qh(Xs||An.GreenSockGlobals||!An.gsap&&An||{}),uu.forEach(du)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,o-u.time*1e3+1|0)},jr=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),jr=0,c=qr},lagSmoothing:function(p,f){e=p||1/0,t=Math.min(f||33,e)},fps:function(p){s=1e3/(p||240),o=u.time*1e3+s},add:function(p,f,S){var x=f?function(y,R,w,E){p(y,R,w,E),u.remove(x)}:p;return u.remove(p),a[S?"unshift":"push"](x),yr(),x},remove:function(p,f){~(f=a.indexOf(p))&&a.splice(f,1)&&m>=f&&m--},_listeners:a},u})(),yr=function(){return!jr&&Zt.wake()},Ke={},K0=/^[\d.\-M][\d.\-,\s]/,j0=/["']/g,$0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(j0,"").trim():+c,i=l.substr(a+1).trim();return t},Z0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},J0=function(e){var t=(e+"").split("("),n=Ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[$0(t[1])]:Z0(e).split(",").map(Jh)):Ke._CE&&K0.test(e)?Ke._CE("",e):n},_u=function(e){return function(t){return 1-e(1-t)}},gu=function r(e,t){for(var n=e._first,i;n;)n instanceof Bt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Pi=function(e,t){return e&&(ut(e)?e:Ke[e]||J0(e))||t},Fi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Vt(e,function(a){Ke[a]=nn[a]=s,Ke[o=a.toLowerCase()]=n;for(var l in s)Ke[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[a+"."+l]=s[l]}),s},vu=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},$a=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/fo*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*E0((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:vu(a);return s=fo/s,l.config=function(c,h){return r(e,c,h)},l},Za=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:vu(n);return i.config=function(s){return r(e,s)},i};Vt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Fi(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;Fi("Elastic",$a("in"),$a("out"),$a());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Fi("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Fi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Fi("Circ",function(r){return-(Hh(1-r*r)-1)});Fi("Sine",function(r){return r===1?1:-y0(r*S0)+1});Fi("Back",Za("in"),Za("out"),Za());Ke.SteppedEase=Ke.steps=nn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-et;return function(a){return((i*ns(0,o,a)|0)+s)*n}}};vr.ease=Ke["quad.out"];Vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Go+=r+","+r+"Params,"});var xu=function(e,t){this.id=M0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:$h,this.set=t?t.getSetter:qo},$r=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Mr(this,+t.duration,1,1),this.data=t.data,rt&&(this._ctx=rt,rt.data.push(this)),jr||Zt.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Mr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(yr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(aa(this,n),!s._dp||s.parent||tu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ln(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===et||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Xc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Xc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Sr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-et?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ks(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-et?0:this._rts,this.totalTime(ns(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),sa(this),I0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(yr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==et&&(this._tTime-=et)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=at(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ln(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ht(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ks(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=L0);var i=Lt;return Lt=n,Vo(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Lt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Yc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Yc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ln(this,n),Ht(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ht(i)),this._dur||(this._zTime=-et),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-et)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=ut(n)?n:Qh,l=function(){var h=i.then;i.then=null,s&&s(),ut(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Fr(this)},r})();rn($r.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-et,_prom:0,_ps:!1,_rts:1});var Bt=(function(r){Gh(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ht(n.sortChildren),ot&&Ln(n.parent||ot,zn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&nu(zn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Hr(0,arguments,this),this},t.from=function(i,s,o){return Hr(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Hr(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Gr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new vt(i,s,ln(this,o),1),this},t.call=function(i,s,o){return Ln(this,vt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new vt(i,o,ln(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Gr(o).immediateRender=Ht(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,Gr(a).immediateRender=Ht(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:at(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,m,g,_,p,f,S,x,y,R,w,E;if(this!==ot&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,y=this._start,x=this._ts,f=!x,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(d=at(h%p),h===l?(_=this._repeat,d=c):(R=at(h/p),_=~~R,_&&_===R&&(d=c,_--),d>c&&(d=c)),R=Sr(this._tTime,p),!a&&this._tTime&&R!==_&&this._tTime-R*p-this._dur<=0&&(R=_),w&&_&1&&(d=c-d,E=1),_!==R&&!this._lock){var O=w&&R&1,v=O===(w&&_&1);if(_<R&&(O=!O),a=O?0:h%c?c:h,this._lock=1,this.render(a||(E?0:at(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Jt(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,R=_),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=O?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;gu(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=F0(this,at(a),at(d)),S&&(h-=d-(d=S._start))),this._tTime=h,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!R&&(Jt(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||d>=m._start)&&m._ts&&S!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,s,o),d!==this._time||!this._ts&&!f){S=0,g&&(h+=this._zTime=-et);break}}m=g}else{m=this._last;for(var b=i<0?i:d;m;){if(g=m._prev,(m._act||b<=m._end)&&m._ts&&S!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(b-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(b-m._start)*m._ts,s,o||Lt&&Vo(m)),d!==this._time||!this._ts&&!f){S=0,g&&(h+=this._zTime=b?-et:et);break}}m=g}}if(S&&!s&&(this.pause(),S.render(d>=a?0:-et)._zTime=d>=a?1:-1,this._ts))return this._start=y,sa(this),this.render(i,s,o);this._onUpdate&&!s&&Jt(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ci(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Jt(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Xn(s)||(s=ln(this,s,i)),!(i instanceof $r)){if(Ot(i))return i.forEach(function(a){return o.add(a,s)}),this;if(At(i))return this.addLabel(i,s);if(ut(i))i=vt.delayedCall(0,i);else return this}return this!==i?Ln(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-dn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof vt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return At(i)?this.removeLabel(i):ut(i)?this.killTweensOf(i):(i.parent===this&&ra(this,i),i===this._recent&&(this._recent=this._last),Ci(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=at(Zt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ln(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=vt.delayedCall(0,s||qr,o);return a.data="isPause",this._hasPause=1,Ln(this,a,ln(this,i))},t.removePause=function(i){var s=this._first;for(i=ln(this,i);s;)s._start===i&&s.data==="isPause"&&ci(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ei!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=fn(i),l=this._first,c=Xn(s),h;l;)l instanceof vt?C0(l._targets,a)&&(c?(!ei||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ln(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,m,g=vt.to(o,rn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||et,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Mr(g,p,0,1).render(g._time,!0,!0),m=1}h&&h.apply(g,u||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,rn({startAt:{time:ln(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),qc(this,ln(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),qc(this,ln(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+et)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=at(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ci(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ci(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=dn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ln(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=at(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Mr(o,o===ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(ot._ts&&(Zh(ot,Ks(i,ot)),jh=Zt.frame),Zt.frame>=Vc){Vc+=tn.autoSleep||120;var s=ot._first;if((!s||!s._ts)&&tn.autoSleep&&Zt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Zt.sleep()}}},e})($r);rn(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Q0=function(e,t,n,i,s,o,a){var l=new Wt(this._pt,e,t,0,1,bu,null,s),c=0,h=0,u,d,m,g,_,p,f,S;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=Kr(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),d=n.match(qa)||[];u=qa.exec(i);)g=u[0],_=i.substring(c,u.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?hr(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=qa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Xh.test(i)||f)&&(l.e=0),this._pt=l,l},Wo=function(e,t,n,i,s,o,a,l,c,h){ut(i)&&(i=i(s||0,e,o));var u=e[t],d=n!=="get"?n:ut(u)?c?e[t.indexOf("set")||!ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,m=ut(u)?c?rv:Eu:Yo,g;if(At(i)&&(~i.indexOf("random(")&&(i=Kr(i)),i.charAt(1)==="="&&(g=hr(d,i)+(It(d)||0),(g||g===0)&&(i=g))),!h||d!==i||Mo)return!isNaN(d*i)&&i!==""?(g=new Wt(this._pt,e,t,+d||0,i-(d||0),typeof u=="boolean"?av:Tu,0,m),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!u&&!(t in e)&&zo(t,i),Q0.call(this,e,t,d,i,m,l||tn.stringFilter,c))},ev=function(e,t,n,i,s){if(ut(e)&&(e=Vr(e,s,t,n,i)),!Pn(e)||e.style&&e.nodeType||Ot(e)||Vh(e))return At(e)?Vr(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Vr(e[a],s,t,n,i);return o},Su=function(e,t,n,i,s,o){var a,l,c,h;if($t[e]&&(a=new $t[e]).init(s,a.rawVars?t[e]:ev(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Wt(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==or))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ei,Mo,Xo=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,m=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,f=e.parent,S=f&&f.data==="nested"?f.vars.targets:p,x=e._overwrite==="auto"&&!Uo,y=e.timeline,R,w,E,O,v,b,B,V,K,D,N,z,Y;if(y&&(!d||!s)&&(s="none"),e._ease=Pi(s,vr.ease),e._yEase=u?_u(Pi(u===!0?s:u,vr.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(V=p[0]?Li(p[0]).harness:0,z=V&&i[V.prop],R=qs(i,ko),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!m?_.render(-1,!0):_.revert(h&&g?Ns:R0),_._lazy=0),o){if(ci(e._startAt=vt.set(p,rn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&Ht(l),startAt:null,delay:0,onUpdate:c&&function(){return Jt(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Lt||!a&&!m)&&e._startAt.revert(Ns),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(a=!1),E=rn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Ht(l),immediateRender:a,stagger:0,parent:f},R),z&&(E[V.prop]=z),ci(e._startAt=vt.set(p,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Lt?e._startAt.revert(Ns):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,et,et);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Ht(l)||l&&!g,w=0;w<p.length;w++){if(v=p[w],B=v._gsap||Ho(p)[w]._gsap,e._ptLookup[w]=D={},mo[B.id]&&ai.length&&Ys(),N=S===p?w:S.indexOf(v),V&&(K=new V).init(v,z||R,e,N,S)!==!1&&(e._pt=O=new Wt(e._pt,v,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(q){D[q]=O}),K.priority&&(b=1)),!V||z)for(E in R)$t[E]&&(K=Su(E,R,e,N,v,S))?K.priority&&(b=1):D[E]=O=Wo.call(e,v,E,"get",R[E],N,S,0,i.stringFilter);e._op&&e._op[w]&&e.kill(v,e._op[w]),x&&e._pt&&(ei=e,ot.killTweensOf(v,D,e.globalTime(t)),Y=!e.parent,ei=0),e._pt&&l&&(mo[B.id]=1)}b&&Au(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,d&&t<=0&&y.render(dn,!0,!0)},tv=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,m;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,m=e._targets.length;m--;){if(h=d[m][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Mo=1,e.vars[t]="+=0",Xo(e,a),Mo=0,l?Yr(t+" not eligible for reset"):1;c.push(h)}for(m=c.length;m--;)u=c[m],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=mt(n)+It(u.e)),u.b&&(u.b=h.s+It(u.b))},nv=function(e,t){var n=e[0]?Li(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=xr({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},iv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Ot(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Vr=function(e,t,n,i,s){return ut(e)?e.call(t,n,i,s):At(e)&&~e.indexOf("random(")?Kr(e):e},Mu=Go+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",yu={};Vt(Mu+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return yu[r]=1});var vt=(function(r){Gh(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Gr(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,f=l.yoyoEase,S=i.parent||ot,x=(Ot(n)||Vh(n)?Xn(n[0]):"length"in i)?[n]:fn(n),y,R,w,E,O,v,b,B;if(a._targets=x.length?Ho(x):Yr("GSAP target "+n+" not found. https://gsap.com",!tn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||d||Os(c)||Os(h)){if(i=a.vars,y=a.timeline=new Bt({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:x}),y.kill(),y.parent=y._dp=zn(a),y._start=0,d||Os(c)||Os(h)){if(E=x.length,b=d&&au(d),Pn(d))for(O in d)~Mu.indexOf(O)&&(B||(B={}),B[O]=d[O]);for(R=0;R<E;R++)w=qs(i,yu),w.stagger=0,f&&(w.yoyoEase=f),B&&xr(w,B),v=x[R],w.duration=+Vr(c,zn(a),R,v,x),w.delay=(+Vr(h,zn(a),R,v,x)||0)-a._delay,!d&&E===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),y.to(v,w,b?b(R,v,x):0),y._ease=Ke.none;y.duration()?c=h=0:a.timeline=0}else if(g){Gr(rn(y.vars.defaults,{ease:"none"})),y._ease=Pi(g.ease||i.ease||"none");var V=0,K,D,N;if(Ot(g))g.forEach(function(z){return y.to(x,z,">")}),y.duration();else{w={};for(O in g)O==="ease"||O==="easeEach"||iv(O,g[O],w,g.easeEach);for(O in w)for(K=w[O].sort(function(z,Y){return z.t-Y.t}),V=0,R=0;R<K.length;R++)D=K[R],N={ease:D.e,duration:(D.t-(R?K[R-1].t:0))/100*c},N[O]=D.v,y.to(x,N,V),V+=N.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return m===!0&&!Uo&&(ei=zn(a),ot.killTweensOf(x),ei=0),Ln(S,zn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===at(S._time)&&Ht(u)&&O0(zn(a))&&S.data!=="nested")&&(a._tTime=-et,a.render(Math.max(0,-h)||0)),p&&nu(zn(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-et&&!h?l:i<et?0:i,d,m,g,_,p,f,S,x,y;if(!c)N0(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(d=at(u%_),u===l?(g=this._repeat,d=c):(p=at(u/_),g=~~p,g&&g===p?(d=c,g--):d>c&&(d=c)),f=this._yoyo&&g&1,f&&(y=this._yEase,d=c-d),p=Sr(this._tTime,_),d===a&&!o&&this._initted&&g===p)return this._tTime=u,this;g!==p&&(x&&this._yEase&&gu(x,f),this.vars.repeatRefresh&&!f&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(at(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(iu(this,h?i:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(d/c),this._from&&(this.ratio=S=1-S),!a&&u&&!s&&!p&&(Jt(this,"onStart"),this._tTime!==u))return this;for(m=this._pt;m;)m.r(S,m.d),m=m._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&_o(this,i,s,o),Jt(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Jt(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&_o(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ci(this,1),!s&&!(h&&!a)&&(u||a||f)&&(Jt(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){jr||Zt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Xo(this,c),h=this._ease(c/this._dur),tv(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(aa(this,0),this.parent||eu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Fr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Lt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ei&&ei.vars.overwrite!==!0)._first||Fr(this),this.parent&&o!==this.timeline.totalDuration()&&Mr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?fn(i):a,c=this._ptLookup,h=this._pt,u,d,m,g,_,p,f;if((!s||s==="all")&&D0(a,l))return s==="all"&&(this._pt=0),Fr(this);for(u=this._op=this._op||[],s!=="all"&&(At(s)&&(_={},Vt(s,function(S){return _[S]=1}),s=_),s=nv(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){d=c[f],s==="all"?(u[f]=s,g=d,m={}):(m=u[f]=u[f]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&ra(this,p,"_pt"),delete d[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&h&&Fr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Hr(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Hr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return ot.killTweensOf(i,s,o)},e})($r);rn(vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vt("staggerTo,staggerFrom,staggerFromTo",function(r){vt[r]=function(){var e=new Bt,t=vo.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Yo=function(e,t,n){return e[t]=n},Eu=function(e,t,n){return e[t](n)},rv=function(e,t,n,i){return e[t](i.fp,n)},sv=function(e,t,n){return e.setAttribute(t,n)},qo=function(e,t){return ut(e[t])?Eu:No(e[t])&&e.setAttribute?sv:Yo},Tu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},av=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},bu=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ko=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ov=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},lv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ra(this,t,"_pt"):t.dep||(n=1),t=i;return!n},cv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Au=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Wt=(function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Tu,this.d=l||this,this.set=c||Yo,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=cv,this.m=n,this.mt=s,this.tween=i},r})();Vt(Go+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return ko[r]=1});nn.TweenMax=nn.TweenLite=vt;nn.TimelineLite=nn.TimelineMax=Bt;ot=new Bt({sortChildren:!1,defaults:vr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});tn.stringFilter=mu;var Di=[],Bs={},hv=[],jc=0,uv=0,Ja=function(e){return(Bs[e]||hv).map(function(t){return t()})},yo=function(){var e=Date.now(),t=[];e-jc>2&&(Ja("matchMediaInit"),Di.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=An.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Ja("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),jc=e,Ja("matchMedia"))},wu=(function(){function r(t,n){this.selector=n&&xo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=uv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){ut(n)&&(s=i,i=n,n=ut);var o=this,a=function(){var c=rt,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=xo(s)),rt=o,u=i.apply(o,arguments),ut(u)&&o._r.push(u),rt=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===ut?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=rt;rt=null,n(this),rt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof vt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Bt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof vt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Di.length;o--;)Di[o].id===this.id&&Di.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),dv=(function(){function r(t){this.contexts=[],this.scope=t,rt&&rt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Pn(n)||(n={matches:n});var o=new wu(0,s||this.scope),a=o.conditions={},l,c,h;rt&&!o.selector&&(o.selector=rt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=An.matchMedia(n[c]),l&&(Di.indexOf(o)<0&&Di.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(yo):l.addEventListener("change",yo)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),js={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return du(i)})},timeline:function(e){return new Bt(e)},getTweensOf:function(e,t){return ot.getTweensOf(e,t)},getProperty:function(e,t,n,i){At(e)&&(e=fn(e)[0]);var s=Li(e||{}).get,o=n?Qh:Jh;return n==="native"&&(n=""),e&&(t?o(($t[t]&&$t[t].get||s)(e,t,n,i)):function(a,l,c){return o(($t[a]&&$t[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=fn(e),e.length>1){var i=e.map(function(h){return Yt.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var o=$t[t],a=Li(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;or._pt=0,u.init(e,n?h+n:h,or,0,[e]),u.render(1,u),or._pt&&Ko(1,or)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=Yt.to(e,rn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Pi(e.ease,vr.ease)),Wc(vr,e||{})},config:function(e){return Wc(tn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!$t[a]&&!nn[a]&&Yr(t+" effect requires "+a+" plugin.")}),Ka[t]=function(a,l,c){return n(fn(a),rn(l||{},s),c)},o&&(Bt.prototype[t]=function(a,l,c){return this.add(Ka[t](a,Pn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ke[e]=Pi(t)},parseEase:function(e,t){return arguments.length?Pi(e,t):Ke},getById:function(e){return ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Bt(e),i,s;for(n.smoothChildTiming=Ht(e.smoothChildTiming),ot.remove(n),n._dp=0,n._time=n._tTime=ot._time,i=ot._first;i;)s=i._next,(t||!(!i._dur&&i instanceof vt&&i.vars.onComplete===i._targets[0]))&&Ln(n,i,i._start-i._delay),i=s;return Ln(ot,n,0),n},context:function(e,t){return e?new wu(e,t):rt},matchMedia:function(e){return new dv(e)},matchMediaRefresh:function(){return Di.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||yo()},addEventListener:function(e,t){var n=Bs[e]||(Bs[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Bs[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:W0,wrapYoyo:X0,distribute:au,random:lu,snap:ou,normalize:V0,getUnit:It,clamp:z0,splitColor:fu,toArray:fn,selector:xo,mapRange:hu,pipe:G0,unitize:H0,interpolate:Y0,shuffle:su},install:qh,effects:Ka,ticker:Zt,updateRoot:Bt.updateRoot,plugins:$t,globalTimeline:ot,core:{PropTween:Wt,globals:Kh,Tween:vt,Timeline:Bt,Animation:$r,getCache:Li,_removeLinkedListItem:ra,reverting:function(){return Lt},context:function(e){return e&&rt&&(rt.data.push(e),e._ctx=rt),rt},suppressOverwrites:function(e){return Uo=e}}};Vt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return js[r]=vt[r]});Zt.add(Bt.updateRoot);or=js.to({},{duration:0});var fv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},pv=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=fv(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Qa=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(At(s)&&(l={},Vt(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}pv(a,s)}}}},Yt=js.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Lt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Qa("roundProps",So),Qa("modifiers"),Qa("snap",ou))||js;vt.version=Bt.version=Yt.version="3.14.2";Yh=1;Fo()&&yr();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;var $c,ti,ur,jo,bi,Zc,$o,mv=function(){return typeof window<"u"},Yn={},yi=180/Math.PI,dr=Math.PI/180,ir=Math.atan2,Jc=1e8,Zo=/([A-Z])/g,_v=/(left|right|width|margin|padding|x)/i,gv=/[\s,\(]\S/,Cn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Eo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Sv=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Mv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ru=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Lu=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},yv=function(e,t,n){return e.style[t]=n},Ev=function(e,t,n){return e.style.setProperty(t,n)},Tv=function(e,t,n){return e._gsap[t]=n},bv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Av=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},wv=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},lt="transform",Xt=lt+"Origin",Rv=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Yn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Cn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=kn(i,a)}):this.tfm[e]=o.x?o[e]:kn(i,e),e===Xt&&(this.tfm.zOrigin=o.zOrigin);else return Cn.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(lt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Xt,t,"")),e=lt}(s||t)&&this.props.push(e,t,s[e])},Cu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Lv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Zo,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=$o(),(!s||!s.isStart)&&!n[lt]&&(Cu(n),i.zOrigin&&n[Xt]&&(n[Xt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Pu=function(e,t){var n={target:e,props:[],revert:Lv,save:Rv};return e._gsap||Yt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Du,To=function(e,t){var n=ti.createElementNS?ti.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ti.createElement(e);return n&&n.style?n:ti.createElement(e)},Qt=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Zo,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Er(t)||t,1)||""},Qc="O,Moz,ms,Ms,Webkit".split(","),Er=function(e,t,n){var i=t||bi,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Qc[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Qc[o]:"")+e},bo=function(){mv()&&window.document&&($c=window,ti=$c.document,ur=ti.documentElement,bi=To("div")||{style:{}},To("div"),lt=Er(lt),Xt=lt+"Origin",bi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Du=!!Er("perspective"),$o=Yt.core.reverting,jo=1)},eh=function(e){var t=e.ownerSVGElement,n=To("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ur.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ur.removeChild(n),s},th=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Iu=function(e){var t,n;try{t=e.getBBox()}catch{t=eh(e),n=1}return t&&(t.width||t.height)||n||(t=eh(e)),t&&!t.width&&!t.x&&!t.y?{x:+th(e,["x","cx","x1"])||0,y:+th(e,["y","cy","y1"])||0,width:0,height:0}:t},Ou=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Iu(e))},hi=function(e,t){if(t){var n=e.style,i;t in Yn&&t!==Xt&&(t=lt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Zo,"-$1").toLowerCase())):n.removeAttribute(t)}},ni=function(e,t,n,i,s,o){var a=new Wt(e._pt,t,n,0,1,o?Lu:Ru);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},nh={deg:1,rad:1,turn:1},Cv={grid:1,flex:1},ui=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=bi.style,l=_v.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",m=i==="%",g,_,p,f;if(i===o||!s||nh[i]||nh[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),f=e.getCTM&&Ou(e),(m||o==="%")&&(Yn[t]||~t.indexOf("adius")))return g=f?e.getBBox()[l?"width":"height"]:e[h],mt(m?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(d?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,f&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ti||!_.appendChild)&&(_=ti.body),p=_._gsap,p&&m&&p.width&&l&&p.time===Zt.time&&!p.uncache)return mt(s/p.width*u);if(m&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=u+i,g=e[h],S?e.style[t]=S:hi(e,t)}else(m||o==="%")&&!Cv[Qt(_,"display")]&&(a.position=Qt(e,"position")),_===e&&(a.position="static"),_.appendChild(bi),g=bi[h],_.removeChild(bi),a.position="absolute";return l&&m&&(p=Li(_),p.time=Zt.time,p.width=_[h]),mt(d?g*s/u:g&&s?u/g*s:0)},kn=function(e,t,n,i){var s;return jo||bo(),t in Cn&&t!=="transform"&&(t=Cn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Yn[t]&&t!=="transform"?(s=Jr(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Zs(Qt(e,Xt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=$s[t]&&$s[t](e,t,n)||Qt(e,t)||$h(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ui(e,t,s,n)+n:s},Pv=function(e,t,n,i){if(!n||n==="none"){var s=Er(t,e,1),o=s&&Qt(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Qt(e,"borderTopColor"))}var a=new Wt(this._pt,e.style,t,0,1,bu),l=0,c=0,h,u,d,m,g,_,p,f,S,x,y,R;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Qt(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Qt(e,t)||i,_?e.style[t]=_:hi(e,t)),h=[n,i],mu(h),n=h[0],i=h[1],d=n.match(ar)||[],R=i.match(ar)||[],R.length){for(;u=ar.exec(i);)p=u[0],S=i.substring(l,u.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(m=parseFloat(_)||0,y=_.substr((m+"").length),p.charAt(1)==="="&&(p=hr(m,p)+y),f=parseFloat(p),x=p.substr((f+"").length),l=ar.lastIndex-x.length,x||(x=x||tn.units[t]||y,l===i.length&&(i+=x,a.e+=x)),y!==x&&(m=ui(e,t,_,x)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:m,c:f-m,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Lu:Ru;return Xh.test(i)&&(a.e=0),this._pt=a,a},ih={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Dv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=ih[n]||n,t[1]=ih[i]||i,t.join(" ")},Iv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Yn[a]&&(l=1,a=a==="transformOrigin"?Xt:lt),hi(n,a);l&&(hi(n,lt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Jr(n,1),o.uncache=1,Cu(i)))}},$s={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Wt(e._pt,t,n,0,0,Iv);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Zr=[1,0,0,1,0,0],Uu={},Nu=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},rh=function(e){var t=Qt(e,lt);return Nu(t)?Zr:t.substr(7).match(Wh).map(mt)},Jo=function(e,t){var n=e._gsap||Li(e),i=e.style,s=rh(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Zr:s):(s===Zr&&!e.offsetParent&&e!==ur&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ur.appendChild(e)),s=rh(e),l?i.display=l:hi(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ur.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ao=function(e,t,n,i,s,o){var a=e._gsap,l=s||Jo(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,m=l[0],g=l[1],_=l[2],p=l[3],f=l[4],S=l[5],x=t.split(" "),y=parseFloat(x[0])||0,R=parseFloat(x[1])||0,w,E,O,v;n?l!==Zr&&(E=m*p-g*_)&&(O=y*(p/E)+R*(-_/E)+(_*S-p*f)/E,v=y*(-g/E)+R*(m/E)-(m*S-g*f)/E,y=O,R=v):(w=Iu(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),R=w.y+(~(x[1]||x[0]).indexOf("%")?R/100*w.height:R)),i||i!==!1&&a.smooth?(f=y-c,S=R-h,a.xOffset=u+(f*m+S*_)-f,a.yOffset=d+(f*g+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=R,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Xt]="0px 0px",o&&(ni(o,a,"xOrigin",c,y),ni(o,a,"yOrigin",h,R),ni(o,a,"xOffset",u,a.xOffset),ni(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+R)},Jr=function(e,t){var n=e._gsap||new xu(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Qt(e,Xt)||"0",h,u,d,m,g,_,p,f,S,x,y,R,w,E,O,v,b,B,V,K,D,N,z,Y,q,j,$,ie,re,X,Z,le;return h=u=d=_=p=f=S=x=y=0,m=g=1,n.svg=!!(e.getCTM&&Ou(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[lt]!=="none"?l[lt]:"")),i.scale=i.rotate=i.translate="none"),E=Jo(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Ao(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,E)),R=n.xOrigin||0,w=n.yOrigin||0,E!==Zr&&(B=E[0],V=E[1],K=E[2],D=E[3],h=N=E[4],u=z=E[5],E.length===6?(m=Math.sqrt(B*B+V*V),g=Math.sqrt(D*D+K*K),_=B||V?ir(V,B)*yi:0,S=K||D?ir(K,D)*yi+_:0,S&&(g*=Math.abs(Math.cos(S*dr))),n.svg&&(h-=R-(R*B+w*K),u-=w-(R*V+w*D))):(le=E[6],X=E[7],$=E[8],ie=E[9],re=E[10],Z=E[11],h=E[12],u=E[13],d=E[14],O=ir(le,re),p=O*yi,O&&(v=Math.cos(-O),b=Math.sin(-O),Y=N*v+$*b,q=z*v+ie*b,j=le*v+re*b,$=N*-b+$*v,ie=z*-b+ie*v,re=le*-b+re*v,Z=X*-b+Z*v,N=Y,z=q,le=j),O=ir(-K,re),f=O*yi,O&&(v=Math.cos(-O),b=Math.sin(-O),Y=B*v-$*b,q=V*v-ie*b,j=K*v-re*b,Z=D*b+Z*v,B=Y,V=q,K=j),O=ir(V,B),_=O*yi,O&&(v=Math.cos(O),b=Math.sin(O),Y=B*v+V*b,q=N*v+z*b,V=V*v-B*b,z=z*v-N*b,B=Y,N=q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,f=180-f),m=mt(Math.sqrt(B*B+V*V+K*K)),g=mt(Math.sqrt(z*z+le*le)),O=ir(N,z),S=Math.abs(O)>2e-4?O*yi:0,y=Z?1/(Z<0?-Z:Z):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Nu(Qt(e,lt)),Y&&e.setAttribute("transform",Y))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(m*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=mt(m),n.scaleY=mt(g),n.rotation=mt(_)+a,n.rotationX=mt(p)+a,n.rotationY=mt(f)+a,n.skewX=S+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Xt]=Zs(c)),n.xOffset=n.yOffset=0,n.force3D=tn.force3D,n.renderTransform=n.svg?Uv:Du?Fu:Ov,n.uncache=0,n},Zs=function(e){return(e=e.split(" "))[0]+" "+e[1]},eo=function(e,t,n){var i=It(t);return mt(parseFloat(t)+parseFloat(ui(e,"x",n+"px",i)))+i},Ov=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Fu(e,t)},xi="0deg",Nr="0px",Si=") ",Fu=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,f=n.force3D,S=n.target,x=n.zOrigin,y="",R=f==="auto"&&e&&e!==1||f===!0;if(x&&(u!==xi||h!==xi)){var w=parseFloat(h)*dr,E=Math.sin(w),O=Math.cos(w),v;w=parseFloat(u)*dr,v=Math.cos(w),o=eo(S,o,E*v*-x),a=eo(S,a,-Math.sin(w)*-x),l=eo(S,l,O*v*-x+x)}p!==Nr&&(y+="perspective("+p+Si),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(R||o!==Nr||a!==Nr||l!==Nr)&&(y+=l!==Nr||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Si),c!==xi&&(y+="rotate("+c+Si),h!==xi&&(y+="rotateY("+h+Si),u!==xi&&(y+="rotateX("+u+Si),(d!==xi||m!==xi)&&(y+="skew("+d+", "+m+Si),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Si),S.style[lt]=y||"translate(0, 0)"},Uv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,f=n.yOffset,S=n.forceCSS,x=parseFloat(o),y=parseFloat(a),R,w,E,O,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=dr,c*=dr,R=Math.cos(l)*u,w=Math.sin(l)*u,E=Math.sin(l-c)*-d,O=Math.cos(l-c)*d,c&&(h*=dr,v=Math.tan(c-h),v=Math.sqrt(1+v*v),E*=v,O*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),R*=v,w*=v)),R=mt(R),w=mt(w),E=mt(E),O=mt(O)):(R=u,O=d,w=E=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=ui(m,"x",o,"px"),y=ui(m,"y",a,"px")),(g||_||p||f)&&(x=mt(x+g-(g*R+_*E)+p),y=mt(y+_-(g*w+_*O)+f)),(i||s)&&(v=m.getBBox(),x=mt(x+i/100*v.width),y=mt(y+s/100*v.height)),v="matrix("+R+","+w+","+E+","+O+","+x+","+y+")",m.setAttribute("transform",v),S&&(m.style[lt]=v)},Nv=function(e,t,n,i,s){var o=360,a=At(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?yi:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Jc)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Jc)%o-~~(c/o)*o)),e._pt=d=new Wt(e._pt,t,n,i,c,vv),d.e=h,d.u="deg",e._props.push(n),d},sh=function(e,t){for(var n in t)e[n]=t[n];return e},Fv=function(e,t,n){var i=sh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[lt]=t,a=Jr(n,1),hi(n,lt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[lt],o[lt]=t,a=Jr(n,1),o[lt]=c);for(l in Yn)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(m=It(c),g=It(h),u=m!==g?ui(n,l,c,g):parseFloat(c),d=parseFloat(h),e._pt=new Wt(e._pt,a,l,u,d-u,Eo),e._pt.u=g||0,e._props.push(l));sh(a,i)};Vt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});$s[e>1?"border"+r:r]=function(a,l,c,h,u){var d,m;if(arguments.length<4)return d=o.map(function(g){return kn(a,g,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(h+"").split(" "),m={},o.forEach(function(g,_){return m[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,m,u)}});var Bu={name:"css",register:bo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,d,m,g,_,p,f,S,x,y,R,w,E,O,v;jo||bo(),this.styles=this.styles||Pu(e),O=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!($t[_]&&Su(_,t,n,i,e,s)))){if(m=typeof h,g=$s[_],m==="function"&&(h=h.call(n,i,e,s),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=Kr(h)),g)g(this,e,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",oi.lastIndex=0,oi.test(c)||(p=It(c),f=It(h),f?p!==f&&(c=ui(e,_,c,f)+f):p&&(h+=p)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),O.push(_,0,a[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],At(c)&&~c.indexOf("random(")&&(c=Kr(c)),It(c+"")||c==="auto"||(c+=tn.units[_]||It(kn(e,_))||""),(c+"").charAt(1)==="="&&(c=kn(e,_))):c=kn(e,_),d=parseFloat(c),S=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),_ in Cn&&(_==="autoAlpha"&&(d===1&&kn(e,"visibility")==="hidden"&&u&&(d=0),O.push("visibility",0,a.visibility),ni(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Cn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Yn,x){if(this.styles.save(_),v=h,m==="string"&&h.substring(0,6)==="var(--"){if(h=Qt(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=h,h=Qt(e,"perspective"),b?e.style.perspective=b:hi(e,"perspective")}u=parseFloat(h)}if(y||(R=e._gsap,R.renderTransform&&!t.parseTransform||Jr(e,t.parseTransform),w=t.smoothOrigin!==!1&&R.smooth,y=this._pt=new Wt(this._pt,a,lt,0,1,R.renderTransform,R,0,-1),y.dep=1),_==="scale")this._pt=new Wt(this._pt,R,"scaleY",R.scaleY,(S?hr(R.scaleY,S+u):u)-R.scaleY||0,Eo),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){O.push(Xt,0,a[Xt]),h=Dv(h),R.svg?Ao(e,h,0,w,0,this):(f=parseFloat(h.split(" ")[2])||0,f!==R.zOrigin&&ni(this,R,"zOrigin",R.zOrigin,f),ni(this,a,_,Zs(c),Zs(h)));continue}else if(_==="svgOrigin"){Ao(e,h,1,w,0,this);continue}else if(_ in Uu){Nv(this,R,_,d,S?hr(d,S+h):h);continue}else if(_==="smoothOrigin"){ni(this,R,"smooth",R.smooth,h);continue}else if(_==="force3D"){R[_]=h;continue}else if(_==="transform"){Fv(this,h,e);continue}}else _ in a||(_=Er(_)||_);if(x||(u||u===0)&&(d||d===0)&&!gv.test(h)&&_ in a)p=(c+"").substr((d+"").length),u||(u=0),f=It(h)||(_ in tn.units?tn.units[_]:p),p!==f&&(d=ui(e,_,c,f)),this._pt=new Wt(this._pt,x?R:a,_,d,(S?hr(d,S+u):u)-d,!x&&(f==="px"||_==="zIndex")&&t.autoRound!==!1?Mv:Eo),this._pt.u=f||0,x&&v!==h?(this._pt.b=c,this._pt.e=v,this._pt.r=Sv):p!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=xv);else if(_ in a)Pv.call(this,e,_,c,S?S+h:h);else if(_ in e)this.add(e,_,c||e[_],S?S+h:h,i,s);else if(_!=="parseTransform"){zo(_,h);continue}x||(_ in a?O.push(_,0,a[_]):typeof e[_]=="function"?O.push(_,2,e[_]()):O.push(_,1,c||e[_])),o.push(_)}}E&&Au(this)},render:function(e,t){if(t.tween._time||!$o())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:kn,aliases:Cn,getSetter:function(e,t,n){var i=Cn[t];return i&&i.indexOf(",")<0&&(t=i),t in Yn&&t!==Xt&&(e._gsap.x||kn(e,"x"))?n&&Zc===n?t==="scale"?bv:Tv:(Zc=n||{})&&(t==="scale"?Av:wv):e.style&&!No(e.style[t])?yv:~t.indexOf("-")?Ev:qo(e,t)},core:{_removeProperty:hi,_getMatrix:Jo}};Yt.utils.checkPrefix=Er;Yt.core.getStyleSaver=Pu;(function(r,e,t,n){var i=Vt(r+","+e+","+t,function(s){Yn[s]=1});Vt(e,function(s){tn.units[s]="deg",Uu[s]=1}),Cn[i[13]]=r+","+e,Vt(n,function(s){var o=s.split(":");Cn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){tn.units[r]="px"});Yt.registerPlugin(Bu);var bn=Yt.registerPlugin(Bu)||Yt;bn.core.Tween;class Bv extends Et{velocity;isGrounded=!1;size;leftEye;rightEye;leftPupil;rightPupil;currentEyeState="idle";constructor(e){const t=me.VOXEL_SIZE*.8,n=new yn(t,t,t),i=new Oo({color:16750592});super(n,i),this.size=t,this.velocity=new I(0,0,0),this.position.copy(e),this.castShadow=!0,this.receiveShadow=!0,this.renderOrder=1;const s=t*.25,o=new yn(s,s,t*.1),a=new _r({color:16777215}),l=s*.4,c=new yn(l,l,t*.05),h=new _r({color:0});this.leftEye=new Et(o,a),this.leftEye.position.set(-t*.2,t*.2,t*.45),this.leftPupil=new Et(c,h),this.leftPupil.position.z=t*.051,this.leftEye.add(this.leftPupil),this.rightEye=new Et(o,a),this.rightEye.position.set(t*.2,t*.2,t*.45),this.rightPupil=new Et(c,h),this.rightPupil.position.z=t*.051,this.rightEye.add(this.rightPupil),this.add(this.leftEye),this.add(this.rightEye),this.startBlinking()}startBlinking(){const e=()=>{this.currentEyeState==="idle"?bn.to([this.leftEye.scale,this.rightEye.scale],{y:.1,duration:.1,yoyo:!0,repeat:1,onComplete:()=>{setTimeout(e,2e3+Math.random()*3e3)}}):setTimeout(e,1e3)};setTimeout(e,2e3)}setEyeState(e){if(this.currentEyeState===e)return;this.currentEyeState=e,bn.killTweensOf([this.leftEye.scale,this.rightEye.scale]),bn.to([this.leftEye.scale,this.rightEye.scale],{x:1,y:1,duration:.1});const t=this.size*.08;switch(e){case"idle":bn.to([this.leftPupil.position,this.rightPupil.position],{x:0,y:0,duration:.2});break;case"lookLeft":bn.to([this.leftPupil.position,this.rightPupil.position],{x:-t,y:0,duration:.2});break;case"lookRight":bn.to([this.leftPupil.position,this.rightPupil.position],{x:t,y:0,duration:.2});break;case"jump":bn.to([this.leftEye.scale,this.rightEye.scale],{x:1.2,y:1.2,duration:.2}),bn.to([this.leftPupil.position,this.rightPupil.position],{x:0,y:t,duration:.2});break}}update(e){this.velocity.y-=20*e,this.position.add(this.velocity.clone().multiplyScalar(e)),this.position.y<-10&&(this.position.set(0,5,0),this.velocity.set(0,0,0))}getSize(){return this.size}}class zv{engine;viewState=pt.FRONT;isRotating=!1;targetRotationY=0;eventManager;constructor(e){this.engine=e,this.eventManager=Hn.getInstance()}reset(){this.viewState=pt.FRONT,this.targetRotationY=0,this.isRotating=!1;const e=this.engine.getCamera(),t=me.CAMERA.INITIAL_POSITION.x;e.position.set(0,0,t),e.lookAt(0,0,0),e.zoom=1,e.updateProjectionMatrix(),this.eventManager.emit(je.CAMERA_ROTATED,0)}rotate(e,t,n){if(this.isRotating)return;this.isRotating=!0,e>0?(this.viewState=(this.viewState+1)%4,this.targetRotationY+=Math.PI/2):(this.viewState=(this.viewState-1+4)%4,this.targetRotationY-=Math.PI/2),console.log(`Rotating to View: ${pt[this.viewState]}`);const i=this.engine.getCamera(),s=Math.atan2(i.position.x,i.position.z),o=Math.sqrt(i.position.x*i.position.x+i.position.z*i.position.z),a=s+e*Math.PI/2,l={angle:s};bn.to(l,{angle:a,duration:me.ANIMATION.ROTATION_DURATION,ease:"power2.inOut",onUpdate:()=>{i.position.x=o*Math.sin(l.angle),i.position.z=o*Math.cos(l.angle),i.lookAt(0,0,0),this.eventManager.emit(je.CAMERA_ROTATED,l.angle),t&&t()},onComplete:()=>{this.isRotating=!1,n&&n()}})}getViewState(){return this.viewState}isCameraRotating(){return this.isRotating}}class kv{engine;levelManager;editorSystem;physicsSystem=null;progressionManager;character=null;eventManager;cameraSystem;mode=on.EDIT;inputManager;wasJumpPressed=!1;score=0;constructor(e,t,n){this.engine=e,this.levelManager=t,this.editorSystem=n,this.inputManager=e.getInputManager(),this.eventManager=Hn.getInstance(),this.cameraSystem=new zv(e),this.progressionManager=new x0(t),window.addEventListener("keydown",i=>{i.key==="Tab"&&(i.preventDefault(),this.toggleMode())}),this.eventManager.on(je.INPUT_ROTATE,i=>{this.mode===on.PLAY&&this.cameraSystem.rotate(i.direction,()=>this.handleCharacterOcclusion(),()=>{this.physicsSystem&&this.physicsSystem.setViewState(this.cameraSystem.getViewState())})}),this.eventManager.on(je.INPUT_MOVE,i=>{this.inputManager.setVirtualKey(i.key,i.pressed)}),this.eventManager.on(je.INPUT_ACTION,i=>{i.action==="next_level"?this.loadNextLevel():i.action==="retry_level"?this.retryCurrentLevel():i.action==="return_editor"&&this.toggleMode()})}toggleMode(){this.mode===on.EDIT?this.enterPlayMode():this.enterEditMode()}enterPlayMode(){console.log("Entering Play Mode"),this.autoSaveLevel(),this.mode=on.PLAY,this.eventManager.emit(je.GAME_MODE_CHANGED,on.PLAY),this.engine.setHelpersVisibility(!1),this.editorSystem.setEnabled(!1),this.cameraSystem.reset(),this.engine.getControls().enabled=!1;const e=this.levelManager.getSpawnPoint(),t=e?e.clone().add(new I(0,1,0)):new I(0,5,0);this.character=new Bv(t),this.engine.getScene().add(this.character),this.physicsSystem=new v0(this.character,this.levelManager),this.physicsSystem.setViewState(this.cameraSystem.getViewState()),this.physicsSystem.countKeysInLevel(),this.physicsSystem.resetGameState(),this.score=0,this.eventManager.emit(je.SCORE_UPDATED,this.score),this.physicsSystem.onGoalReached=()=>{this.score+=100,this.eventManager.emit(je.SCORE_UPDATED,this.score),this.progressionManager.handleLevelComplete()},this.physicsSystem.onKeyCollected=()=>{this.score+=10,this.eventManager.emit(je.SCORE_UPDATED,this.score),this.physicsSystem&&this.eventManager.emit(je.KEY_COLLECTED,{collected:this.physicsSystem.getCollectedKeysCount(),required:this.physicsSystem.getRequiredKeysCount()})},this.physicsSystem.onDeath=()=>{this.score=Math.max(0,this.score-5),this.eventManager.emit(je.SCORE_UPDATED,this.score),this.eventManager.emit(je.PLAYER_DIED)}}enterEditMode(){console.log("Entering Edit Mode"),this.mode=on.EDIT,this.eventManager.emit(je.GAME_MODE_CHANGED,on.EDIT),this.engine.setHelpersVisibility(!0),this.editorSystem.setEnabled(!0),this.engine.getControls().enabled=!0,this.character&&(this.engine.getScene().remove(this.character),this.character=null),this.physicsSystem=null}update(e){if(this.mode===on.PLAY&&this.physicsSystem&&this.character){if(this.cameraSystem.isCameraRotating()||(this.inputManager.isKeyPressed("q")||this.inputManager.isKeyPressed("Q")?this.cameraSystem.rotate(1,()=>this.handleCharacterOcclusion(),()=>this.physicsSystem.setViewState(this.cameraSystem.getViewState())):(this.inputManager.isKeyPressed("e")||this.inputManager.isKeyPressed("E"))&&this.cameraSystem.rotate(-1,()=>this.handleCharacterOcclusion(),()=>this.physicsSystem.setViewState(this.cameraSystem.getViewState()))),this.cameraSystem.isCameraRotating())this.physicsSystem.setInput(0);else{let t=0;(this.inputManager.isKeyPressed("a")||this.inputManager.isKeyPressed("ArrowLeft"))&&(t=-1),(this.inputManager.isKeyPressed("d")||this.inputManager.isKeyPressed("ArrowRight"))&&(t=1);let n=0;(this.inputManager.isKeyPressed("w")||this.inputManager.isKeyPressed("ArrowUp"))&&(n=1),(this.inputManager.isKeyPressed("s")||this.inputManager.isKeyPressed("ArrowDown"))&&(n=-1),this.physicsSystem.setInput(t),this.physicsSystem.setVerticalInput(n);const i=this.inputManager.isKeyPressed(" ");i&&!this.wasJumpPressed&&this.physicsSystem.jump(),this.wasJumpPressed=i}this.physicsSystem.update(e)}}handleCharacterOcclusion(){if(!this.character||!this.engine)return;const e=this.engine.getCamera(),t=this.character.position.clone(),n=e.position.clone(),i=t.sub(n).normalize(),s=new zh(n,i),o=this.levelManager.getMeshes(),a=s.intersectObjects(o),l=n.distanceTo(this.character.position);let c=!1;for(const h of a)if(h.distance<l-me.OCCLUSION.RAY_TOLERANCE){c=!0;break}if(this.character){const h=this.character.material;c?(h.emissive.setHex(me.COLORS.OCCLUSION_HIGHLIGHT),h.depthTest=!1,h.opacity=.5,h.transparent=!0,this.character.renderOrder=999):(h.emissive.setHex(me.COLORS.DEFAULT_EMISSIVE),h.depthTest=!0,h.opacity=1,h.transparent=!1,this.character.renderOrder=0)}}autoSaveLevel(){try{const e=this.levelManager.serialize();localStorage.setItem(me.EDITOR.AUTO_SAVE_KEY,e),console.log("✅ Level auto-saved"),this.eventManager.emit(je.PRESET_LOADED,{message:"Auto-saved"})}catch(e){console.error("Failed to auto-save level:",e)}}loadAutoSave(){try{const e=localStorage.getItem(me.EDITOR.AUTO_SAVE_KEY);return e?(this.levelManager.deserialize(e),console.log("✅ Auto-save loaded"),!0):!1}catch(e){return console.error("Failed to load auto-save:",e),!1}}getProgressionManager(){return this.progressionManager}startLevelById(e){return this.mode===on.PLAY&&this.enterEditMode(),this.levelManager.loadPreset(e)?(this.progressionManager.startLevel(e),this.enterPlayMode(),!0):(console.error(`Failed to load level: ${e}`),!1)}loadNextLevel(){this.mode===on.PLAY&&this.enterEditMode(),this.progressionManager.loadNextLevel()?this.enterPlayMode():this.eventManager.emit(je.PRESET_LOADED,{message:"No more levels!"})}retryCurrentLevel(){const e=this.progressionManager.getCurrentLevelId();e&&this.startLevelById(e)}}document.querySelector("#app").innerHTML=`
  <div id="game-container"></div>
  <div id="ui-layer"></div>
`;const wr=new d0("game-container"),oa=new m0(wr.getScene()),Qo=new _0(wr,oa),Gv=new kv(wr,oa,Qo);new g0("ui-layer",Qo,oa,wr);for(let r=-2;r<=2;r++)for(let e=-2;e<=2;e++)oa.addVoxel(r,0,e,C.SOLID);wr.onUpdate(r=>{Qo.update(),Gv.update(r)});wr.start();console.log("Ortho Engine initialized. Press TAB to switch modes.");console.log("Ortho Engine initialized with Editor System");

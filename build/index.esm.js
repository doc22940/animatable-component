import{h as t}from"./p-49a572f4.js";export{A as ANIMATIONS,E as EASING,a as EASING_FUNCTIONS}from"./p-21d2122f.js";var e=function(t,a){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&a.indexOf(i)<0&&(e[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)a.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(e[i[o]]=t[i[o]])}return e};function i(a){return i=>{const{ref:o,keyFrames:n,keyFramesData:r,options:s,optionsData:m,animateId:c,delay:l,endDelay:p,duration:y,direction:f,composite:d,easing:u,fill:F,iterations:S,iterationStart:b,iterationComposite:k,autoPlay:D,currentTime:I,startTime:T,playbackRate:j,onStart:C,onCancel:O,onFinish:N}=i,A=e(i,["ref","keyFrames","keyFramesData","options","optionsData","animateId","delay","endDelay","duration","direction","composite","easing","fill","iterations","iterationStart","iterationComposite","autoPlay","currentTime","startTime","playbackRate","onStart","onCancel","onFinish"]);return t("animatable-component",{ref:o,keyFrames:n,keyFramesData:r,options:s,optionsData:m,animateId:c,delay:l,endDelay:p,duration:y,direction:f,composite:d,easing:u,fill:F,iterations:S,iterationStart:b,iterationComposite:k,autoPlay:D,currentTime:I,startTime:T,playbackRate:j,onStart:C,onCancel:O,onFinish:N},t(a,Object.assign({},A)))}}export{i as createAnimatableComponent};
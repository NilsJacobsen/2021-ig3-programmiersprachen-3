function(){"use strict";
f(!window.requestAnimationFrame){
    var a=null;
    window.requestAnimationFrame=function(t,i){
        var e=(new Date).getTime();a||(a=e);
        var s=Math.max(0,16-(e-a)),n=window.setTimeout(function(){t(e+s)},s);
        return a=e+s,n}}function r(t,i,e,s){return 1&gt;(t/=s/2)?e/2*t*t*t*t+i:-e/2*((t-=2)*t*t*t-2)+i}function e(t){return t?[1,0]:[0,1]}function t(t){this.element=t,this.svg=function t(i){var e=i.parentNode;
        if("svg"!==e.tagName)e=t(e);
        return e;
        }(this.element),this.getSize(),this.states=this.element.querySelectorAll(".js-transition-icon__state"),this.time={start:null,total:200},this.status={interacted:!1,animating:!1},this.animation={effect:this.element.getAttribute("data-effect"),event:this.element.getAttribute("data-event")},this.init()}t.prototype.getSize=function(){var t=this.svg.getAttribute("viewBox");
        this.size=t?{width:t.split(" ")[2],height:t.split(" ")[3]}:this.svg.getBoundingClientRect()},t.prototype.init=function(){var t=this;
        this.svg.addEventListener(t.animation.event,function(){t.status.animating||(t.status.animating=!0,window.requestAnimationFrame(t.triggerAnimation.bind(t)))})},t.prototype.triggerAnimation=function(t){var i=this.getProgress(t);
        this.animateIcon(i),this.checkProgress(i)},t.prototype.getProgress=function(t){return this.time.start||(this.time.start=t),t-this.time.start},t.prototype.checkProgress=function(t){if(this.time.total&gt;t)window.requestAnimationFrame(this.triggerAnimation.bind(this));
        else{this.status={interacted:!this.status.interacted,animating:!1},this.time.start=null;var i=e(this.status.interacted);
        this.states[i[0]].removeAttribute("aria-hidden"),this.states[i[1]].setAttribute("aria-hidden","true")}},t.prototype.animateIcon=function(t){if(t&gt;this.time.total){t=this.time.total;}if(0&gt;t){t=0;};
        var i=e(this.status.interacted);
        this.states[i[0]].style.display=t&gt;this.time.total/2?"none":"block",this.states[i[1]].style.display=t&gt;
        this.time.total/2?"block":"none","scale"==this.animation.effect?this.scaleIcon(t,i[0],i[1]):this.rotateIcon(t,i[0],i[1])},t.prototype.scaleIcon=function(t,i,e){var s=r(Math.min(t,this.time.total/2),1,-.2,this.time.total/2).toFixed(2),n=r(Math.max(t-this.time.total/2,0),.2,-.2,this.time.total/2).toFixed(2);
        this.states[i].setAttribute("transform","translate("+this.size.width*(1-s)/2+" "+this.size.height*(1-s)/2+") scale("+s+")"),this.states[e].setAttribute("transform","translate("+this.size.width*n/2+" "+this.size.height*n/2+") scale("+(1-n)+")")},t.prototype.rotateIcon=function(t,i,e){var s=r(t,0,180,this.time.total).toFixed(2);
        this.states[i].setAttribute("transform","rotate(-"+s+" "+this.size.width/2+" "+this.size.height/2+")"),this.states[e].setAttribute("transform","rotate("+(180-s)+" "+this.size.width/2+" "+this.size.height/2+")")};
        var i=document.querySelectorAll(".js-transition-icon");
        if(i)for(var s=0;i.length&gt;s;s++)new t(i[s])}();
}
(function(e){function n(n){for(var o,i,c=n[0],a=n[1],u=n[2],g=0,f=[];g<c.length;g++)i=c[g],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);l&&l(n);while(f.length)f.shift()();return s.push.apply(s,u||[]),t()}function t(){for(var e,n=0;n<s.length;n++){for(var t=s[n],o=!0,c=1;c<t.length;c++){var a=t[c];0!==r[a]&&(o=!1)}o&&(s.splice(n--,1),e=i(i.s=t[0]))}return e}var o={},r={app:0},s=[];function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=a;s.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("7a23"),r={class:"body"};function s(e,n,t,s,i,c){var a=Object(o["i"])("start-page"),u=Object(o["i"])("opening-component");return Object(o["g"])(),Object(o["c"])("div",r,[i.play?Object(o["d"])("",!0):(Object(o["g"])(),Object(o["c"])(a,{key:0,onTogglePlay:c.togglePlay},null,8,["onTogglePlay"])),i.play?(Object(o["g"])(),Object(o["c"])(u,{key:1,onGameFinished:c.togglePlay},null,8,["onGameFinished"])):Object(o["d"])("",!0)])}var i={data:function(){return{play:!1}},methods:{togglePlay:function(){this.play=!this.play,document.getElementById("contact-form").classList.toggle("inactive")}}};i.render=s;var c=i,a=(t("9911"),{class:"game flex-center"}),u={class:"info p-1 m-2"},l={class:"middle"},g={class:"stats"},f=Object(o["e"])(" Your browser does not support the video tag. "),d={class:"cover flex-center"},p={class:"loader"},h=Object(o["f"])("span",null,null,-1),b=Object(o["f"])("span",null,null,-1),m=Object(o["f"])("span",null,null,-1),j={key:0};function O(e,n,t,r,s,i){return Object(o["g"])(),Object(o["c"])("section",a,[Object(o["m"])(Object(o["f"])("div",u,[Object(o["f"])("p",null,"Song: "+Object(o["j"])(s.currentSong.song),1),Object(o["f"])("p",null,"Artist: "+Object(o["j"])(s.currentSong.artist),1),Object(o["f"])("p",null,"Opening: "+Object(o["j"])(s.currentSong.opening),1)],512),[[o["l"],2==s.songLoop]]),Object(o["f"])("div",l,[Object(o["f"])("div",g,[Object(o["f"])("p",null,Object(o["j"])(s.currentSongNum)+"/"+Object(o["j"])(s.songs),1),Object(o["m"])(Object(o["f"])("p",null,Object(o["j"])(s.currentSong.animeName),513),[[o["l"],2==s.songLoop]]),Object(o["f"])("p",null,Object(o["j"])(s.songsCorrect),1)]),Object(o["f"])("div",{class:[{correctAnswer:s.correctAnswer},"video-container my-1"]},[Object(o["f"])("video",{onLoadeddata:n[1]||(n[1]=function(){return i.newDataLoaded.apply(i,arguments)}),style:s.songPlaying?"background: none":"background: white"},[s.songPlaying?(Object(o["g"])(),Object(o["c"])("source",{key:0,src:s.currentSong.link},null,8,["src"])):Object(o["d"])("",!0),f],36),Object(o["m"])(Object(o["f"])("div",d,[Object(o["m"])(Object(o["f"])("p",null,[Object(o["f"])("strong",null,Object(o["j"])(s.guessingTimeLeft),1)],512),[[o["l"],s.finishedLoading]]),Object(o["m"])(Object(o["f"])("div",p,[h,b,m],512),[[o["l"],!s.finishedLoading]])],512),[[o["l"],s.playerIsGuessing]])],2),Object(o["f"])("form",{class:"my-1 filterInput",action:"",onSubmit:n[5]||(n[5]=Object(o["n"])((function(){}),["prevent"]))},[Object(o["m"])(Object(o["f"])("input",{"onUpdate:modelValue":n[2]||(n[2]=function(e){return s.userInput=e}),class:[{correctAnswer:s.correctAnswer},"guess-opening"],onFocus:n[3]||(n[3]=function(e){return s.showList=!0}),onBlur:n[4]||(n[4]=function(){return i.showListFalse.apply(i,arguments)}),type:"text",placeholder:"anime name",autofocus:""},null,34),[[o["k"],s.userInput]]),s.showList?(Object(o["g"])(),Object(o["c"])("div",j,[(Object(o["g"])(!0),Object(o["c"])(o["a"],null,Object(o["h"])(s.animeList,(function(e){return Object(o["g"])(),Object(o["c"])("div",{key:e},[Object(o["m"])(Object(o["f"])("p",{onClick:function(n){return s.userInput=e}},Object(o["j"])(e),9,["onClick"]),[[o["l"],i.filterResults(e)]])])})),128))])):Object(o["d"])("",!0)],32),s.gameFinished?(Object(o["g"])(),Object(o["c"])("button",{key:0,onClick:n[6]||(n[6]=function(){return i.refreshPage.apply(i,arguments)})},"Play Again")):Object(o["d"])("",!0)])])}t("4160"),t("caad"),t("d3b7"),t("2532"),t("159b"),t("96cf");var y=t("1da1"),v={props:[],data:function(){return{songList:[],animeList:[],songQueue:[],currentSong:{},songs:1,currentSongNum:0,songsCorrect:0,songPlaying:!1,finishedLoading:!1,songFinished:!1,guessingTime:20,songDuration:0,songRandomStartTime:0,songRandomEndTime:0,songLoop:1,playerIsGuessing:!0,guessingTimeLeft:20,userInput:"",correctAnswer:!1,showList:!1,gameFinished:!1}},mounted:function(){var e=this,n=function(){var n=Object(y["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.jsonbin.io/b/5fa3626047077d298f5d2872/9");case 2:return o=n.sent,n.next=5,o.json();case 5:e.songList=n.sent,t(),e.chooseSong();case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),t=function(){e.songList.forEach((function(n){e.animeList.includes(n.animeName)||e.animeList.push(n.animeName)})),e.animeList.sort()};n()},watch:{songLoop:function(e){this.gameFinished||(this.correctAnswer=!1,1==e&&(this.userInput=""),e>=3&&(this.finishedLoading=!1,this.songLoop=1,this.songPlaying=!1,this.chooseSong()),2==e&&(this.checkCorrectAnswer(),this.playOpening(),this.playerIsGuessing=!1,this.songs<=this.currentSongNum&&(this.gameFinished=!0)))},currentSong:function(){var e=document.querySelector("video");e.load()}},methods:{refreshPage:function(){location.reload()},filterResults:function(e){return!!e.toLowerCase().includes(this.userInput.toLowerCase())},checkCorrectAnswer:function(){this.currentSong.animeName.toLowerCase()==this.userInput.toLowerCase()&&(this.correctAnswer=!0,this.songsCorrect++)},showListFalse:function(){var e=this;setTimeout((function(){e.showList=!1}),500)},randomInt:function(e,n){return Math.floor(Math.random()*(n-e+1)+e)},chooseSong:function(){this.songPlaying=!0,this.currentSongNum++;var e=0;do{e=this.randomInt(0,this.songList.length-1),this.songQueue.push(e),this.currentSong=this.songList[e]}while(!this.songQueue.includes(e))},playOpening:function(){var e=this;this.finishedLoading=!0,this.guessingTimeLeft=this.guessingTime;var n=document.querySelector("video");n.currentTime=this.songRandomStartTime,n.play();var t=setInterval((function(){n.currentTime>=e.songRandomEndTime&&(clearInterval(t),n.pause(),e.playerIsGuessing=!e.playerIsGuessing,e.songLoop++),e.guessingTimeLeft=e.songRandomEndTime-Math.floor(n.currentTime)}),1e3)},newDataLoaded:function(){this.getSongStats(),this.playOpening()},getSongStats:function(){var e=document.querySelector("Video");this.songDuration=e.duration,this.songRandomStartTime=this.randomInt(0,this.songDuration-22),this.songRandomEndTime=this.songRandomStartTime+this.guessingTime}}};v.render=O;var L=v,w={class:"start-screen flex-center"},S=Object(o["f"])("h1",{class:"my-1"},"Anime Opening Quiz",-1);function T(e,n,t,r,s,i){var c=this;return Object(o["g"])(),Object(o["c"])("section",w,[S,Object(o["f"])("button",{onClick:n[1]||(n[1]=function(e){return c.$emit("toggle-play")}),class:"my-2"},"Play")])}var P={data:function(){return{hidden:!0}}};P.render=T;var k=P,I=Object(o["b"])(c);I.component("opening-component",L),I.component("start-page",k),I.mount("#app")}});
//# sourceMappingURL=app.a5448966.js.map
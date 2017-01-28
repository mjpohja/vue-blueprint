webpackJsonp([1,0],[function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=i(11),s=n(o),r=i(7),a=n(r);new s.default({el:"#app",template:"<App/>",components:{App:a.default}})},,function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(8),s=n(o);e.default={name:"app",components:{Blueprint:s.default}}},function(t,e,i){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}function o(t,e){var i=e;i.hoverCoord=t}function s(t,e){e.push(t)}Object.defineProperty(e,"__esModule",{value:!0});var r=i(4),a=n(r),l=a.line().x(function(t){return t[0]}).y(function(t){return t[1]}),u=function(t){a.select("svg").on("click",function(){s(t.nextCoord,t.wallpoints)}).on("mousemove",function(){o(a.mouse(this),t)}),a.select(".startGuide").on("click",function(){var e=t,i=e.wallpoints[e.wallpoints.length-1];e.wallpoints.push(e.wallpoints[0]);var n=Math.abs(i[0]-e.hoverCoord[0]),o=Math.abs(i[1]-e.hoverCoord[1]);n<o?i[0]=e.wallpoints[0][0]:i[1]=e.wallpoints[0][1],e.editMode=!1,a.select("svg").on("click",null).on("mousemove",null)})};e.default={name:"blueprint",data:function(){return{editMode:!1,wallpoints:[],hoverCoord:[0,0]}},computed:{path:function(){return l(this.wallpoints)},nextCoord:function(){if(0===this.wallpoints.length)return this.hoverCoord;var t=this.wallpoints[this.wallpoints.length-1],e=Math.abs(t[0]-this.hoverCoord[0]),i=Math.abs(t[1]-this.hoverCoord[1]);return e>i?[this.hoverCoord[0],t[1]]:[t[0],this.hoverCoord[1]]},previewPath:function(){if(0===this.wallpoints.length)return l([]);var t=this.wallpoints[this.wallpoints.length-1],e=[t,this.nextCoord];return l(e)},xGuidePath:function(){return l([[0,this.nextCoord[1]],[1200,this.nextCoord[1]]])},yGuidePath:function(){return l([[this.nextCoord[0],0],[this.nextCoord[0],800]])},startGuide:function(){if(0===this.wallpoints.length)return{x:0,y:0};var t=this.wallpoints[0];return{x:t[0],y:t[1]}},guideVisibility:function(){return this.editMode?"visible":"hidden"},wallMeasurements:function(){var t=this,e=.025,i=this.wallpoints.map(function(i,n){if(0===n)return null;var o=t.wallpoints[n-1],s=o[0]+i[0],r=o[1]+i[1],a=s/2,l=r/2,u=Math.sqrt(Math.pow(i[0]-o[0],2)+Math.pow(i[1]-o[1],2));return{x:a,y:l,value:(u*e).toFixed(1)+"m"}}).filter(function(t){return null!==t});if(this.editMode&&void 0!==this.nextCoord&&this.wallpoints.length>0){var n=this.wallpoints[this.wallpoints.length-1],o=n[0]+this.nextCoord[0],s=n[1]+this.nextCoord[1],r=o/2,a=s/2,l=Math.sqrt(Math.pow(this.nextCoord[0]-n[0],2)+Math.pow(this.nextCoord[1]-n[1],2)),u={x:r,y:a,value:(l*e).toFixed(1)+"m"};i.push(u)}return i}},methods:{toggleEdit:function(){this.editMode=!this.editMode,this.editMode&&u(this)}},mounted:function(){}}},,function(t,e){},function(t,e){},function(t,e,i){i(5);var n=i(1)(i(2),i(9),null,null);t.exports=n.exports},function(t,e,i){i(6);var n=i(1)(i(3),i(10),"data-v-6efa3f6e",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Blueprint")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tool-wrapper"},[i("button",{attrs:{disabled:t.editMode},on:{click:t.toggleEdit}},[t._v("Edit")]),t._v(" "),i("button",{attrs:{disabled:!t.editMode},on:{click:t.toggleEdit}},[t._v("Cancel")]),t._v(" "),i("svg",{staticClass:"canvas"},[i("g",{staticClass:"walls"},[i("path",{attrs:{d:t.path}}),t._v(" "),i("path",{attrs:{d:t.previewPath}})]),t._v(" "),i("g",{staticClass:"guides"},[i("path",{staticClass:"guideline",attrs:{visibility:t.guideVisibility,d:t.xGuidePath}}),t._v(" "),i("path",{staticClass:"guideline",attrs:{visibility:t.guideVisibility,d:t.yGuidePath}}),t._v(" "),i("circle",{staticClass:"startGuide",attrs:{cx:t.startGuide.x,cy:t.startGuide.y,r:10}}),t._v(" "),t._l(t.wallMeasurements,function(t){return i("rect",{staticClass:"measurementRect",attrs:{x:t.x-50,y:t.y-30,width:"100",height:"30"}})}),t._v(" "),t._l(t.wallMeasurements,function(e){return i("text",{attrs:{x:e.x-20,y:e.y-10}},[t._v(t._s(e.value))])})],2)]),t._v("\n  "+t._s(t.hoverCoord)),i("br"),t._v("\n  "+t._s(t.path)+"\n")])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.8e0d47a3c7a5c4795e9c.js.map
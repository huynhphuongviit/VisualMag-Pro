(window.webpackJsonp=window.webpackJsonp||[]).push([[19,17],{397:function(t,n,e){"use strict";e.r(n);e(39),e(14),e(97),e(25),e(31);var o=e(396),c={props:["data","totalViews"],methods:{formatParam:function(param){return param.toLowerCase().replace(/[^a-z0-9]/g,"-")},selectItem:function(t){this.$router.push({path:"/"+this.formatParam(t)})},formatDate:function(t){return Object(o.a)(new Date(t),"MMMM dd, yyyy")}}},l=(e(399),e(36)),component=Object(l.a)(c,(function(){var t=this,n=t._self._c;return n("ul",{staticClass:"technology__container--ul"},t._l(t.data,(function(e,o){return o<t.totalViews?n("li",{key:e.id,staticClass:"d-flex technology__container--li",on:{click:function(n){return t.selectItem(e.title)}}},[n("figure",{staticClass:"technology__container--figure"},[n("img",{attrs:{src:e.src,alt:"",loading:"lazy"}})]),t._v(" "),n("div",{staticClass:"technology__container--content",staticStyle:{color:"#888888"}},[n("h2",{staticClass:"technology__container--h2",staticStyle:{"margin-bottom":"5px"},on:{click:function(n){return t.selectItem(e.id)}}},[n("NuxtLink",{attrs:{to:"/"+t.formatParam(e.title)}},[t._v(t._s(e.title))])],1),t._v(" "),n("div",{staticClass:"technology__container--info d-flex"},[e.name?n("p",[t._v(t._s(e.name))]):t._e(),t._v(" "),e.time?n("time",[t._v(t._s(t.formatDate(e.time)))]):t._e()]),t._v(" "),e.description?n("h3",[t._v(t._s(e.description))]):t._e()])]):t._e()})),0)}),[],!1,null,null,null);n.default=component.exports},398:function(t,n,e){var content=e(400);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(57).default)("b1c5aa18",content,!0,{sourceMap:!1})},399:function(t,n,e){"use strict";e(398)},400:function(t,n,e){var o=e(56)((function(i){return i[1]}));o.push([t.i,'.technology__container--ul{list-style:none;padding:15px 0 0}.technology__container--li{height:-moz-fit-content;height:fit-content;margin-bottom:16px}.technology__container--li .technology__container--figure img{width:240px}.technology__container--content{padding-left:23px}.technology__container--content h2 a{align-items:flex-start;color:#000;display:flex;font-size:clamp(1.125rem,1.0263rem + .3947vw,1.35rem);font-weight:700;margin:0}.technology__container--content .technology__container--info{margin-top:11px}.technology__container--content .technology__container--info time{color:#888;font-family:"Inter",sans-serif;font-size:14px;margin:0 0 0 15px;padding:0}.technology__container--content .technology__container--info p{color:#000;font-family:"Inter",sans-serif;font-size:14px;font-weight:700;margin:0;padding:0}.technology__container--li h3{-webkit-box-orient:vertical;-webkit-line-clamp:2;color:#888;display:-webkit-box;font-family:"Inter";font-size:16px;line-height:1.8;margin:0;max-height:3.6em;overflow:hidden;padding:0;text-overflow:ellipsis}@media screen and (max-width:768px){.technology__container--figure img{max-width:120px}.technology__container--li{margin-bottom:32px}}@media screen and (max-width:480px){.technology__container--info p,.technology__container--li h3{display:none}.technology__container--content h2 a{font-size:16px}.technology__container--content{padding-left:16px}.technology__container--info time{margin-left:0!important}}',""]),o.locals={},t.exports=o},421:function(t,n,e){var content=e(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(57).default)("6767f432",content,!0,{sourceMap:!1})},448:function(t,n,e){"use strict";e(421)},449:function(t,n,e){var o=e(56)((function(i){return i[1]}));o.push([t.i,".technology{margin-bottom:24px;padding-top:32px}",""]),o.locals={},t.exports=o},465:function(t,n,e){"use strict";e.r(n);var o=e(397),c=e(66),l=e(169),r={data:function(){var data=l.dataFake;return{data:data}},components:{SmallTechnology:o.default,HeaderSection:c.default}},_=(e(448),e(36)),component=Object(_.a)(r,(function(){var t=this,n=t._self._c;return n("section",{staticClass:"technology"},[n("HeaderSection",{attrs:{name:"Technology",nuxtlink:"/category/technology/"}}),t._v(" "),n("SmallTechnology",{attrs:{data:t.data,totalViews:"5"}})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{HeaderSection:e(66).default,SmallTechnology:e(397).default})}}]);
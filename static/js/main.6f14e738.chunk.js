(this["webpackJsonp25karma.github.io"]=this["webpackJsonp25karma.github.io"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(33)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"Bedwars",(function(){return L})),a.d(n,"Duels",(function(){return I})),a.d(n,"Player",(function(){return S})),a.d(n,"Stats",(function(){return K})),a.d(n,"Skywars",(function(){return F}));var r=a(1),l=a.n(r),c=a(12),i=a.n(c),s=a(8),o=a.n(s),m=a(13),u=a(4),d=a(3),f=a.n(d),p=(a(23),a(5)),v=a(9),E=a(10),h="25Karma",y="+25 Karma!",b="Amos Yu",g="https://amosyu2000.github.io/",k="Hypixel API",w="https://api.hypixel.net/",x="GitHub Pages",N="https://pages.github.com/",_=function(){function e(t){Object(v.a)(this,e),this.url=w,this.key=t}return Object(E.a)(e,[{key:"getDataOfPlayer",value:function(e){var t={key:this.key,name:e};return fetch(this._playerDataURL(t),{mode:"cors","Access-Control-Allow-Origin":"*"}).then((function(e){return e.json()})).then((function(e){return e.success?e.player:null}))}},{key:"_playerDataURL",value:function(e){for(var t=this.url+"player?",a=!0,n=0,r=Object.entries(e);n<r.length;n++){var l=Object(u.a)(r[n],2),c=l[0],i=l[1];a||(t+="&"),t+="".concat(c,"=").concat(encodeURIComponent(i)),a=!1}return t}}]),e}(),O=function(){function e(){Object(v.a)(this,e);var t=f.a.get("recentSearches");void 0===t&&(t="[]"),this.array=JSON.parse(t),this.maxLength=5}return Object(E.a)(e,[{key:"toString",value:function(){return JSON.stringify(this.array)}},{key:"toArray",value:function(){return this.array}},{key:"add",value:function(e){var t,a=String(e),n=this.array,r=[a],l=Object(p.a)(n);try{for(l.s();!(t=l.n()).done;){var c=t.value;r.includes(c)||r.push(c)}}catch(i){l.e(i)}finally{l.f()}this._set(r.slice(0,this.maxLength))}},{key:"_set",value:function(e){this.array=e,f.a.set("recentSearches",this.toString(),{expires:365})}},{key:"clear",value:function(){this._set([]),f.a.remove("recentSearches")}}]),e}();function P(e){if(e){var t=encodeURIComponent(e),a=window.location.origin;window.location.href="".concat(a,"/?player=").concat(t)}}function R(e){return 0===e?1:e}function D(e){return!e||void 0===e||isNaN(e)?0:e}function j(e,t){var a,n=t.split("."),r=Object(p.a)(n);try{for(r.s();!(a=r.n()).done;){if(void 0===(e=e[a.value]))return{}}}catch(l){r.e(l)}finally{r.f()}return e}function L(e){var t=j(e.player,"stats.Bedwars");void 0===t&&(t={});var a=f.a.get("decimal")||2,r={level:D(j(e.player,"achievements.bedwars_level")),finalKills:D(t.final_kills_bedwars),finalDeaths:D(t.final_deaths_bedwars),kills:D(t.kills_bedwars),deaths:D(t.deaths_bedwars),wins:D(t.wins_bedwars),losses:D(t.losses_bedwars),bedsBroken:D(t.beds_broken_bedwars),bedsLost:D(t.beds_lost_bedwars)},c={kd:(r.kills/R(r.deaths)).toFixed(a),fkd:(r.finalKills/R(r.finalDeaths)).toFixed(a),wl:(r.wins/R(r.losses)).toFixed(a),bbl:(r.bedsBroken/R(r.bedsLost)).toFixed(a)};var i=l.a.createElement(l.a.Fragment,null,l.a.createElement(M,{title:"Level"},"\xa7".concat(function(e){var t,a=Object(p.a)([[0,"7"],[100,"f"],[200,"6"],[300,"b"],[400,"2"],[500,"3"],[600,"4"],[700,"d"],[800,"9"],[900,"5"],[1e3,"R"],[2e3,"R"]].reverse());try{for(a.s();!(t=a.n()).done;){var n=Object(u.a)(t.value,2),r=n[0],l=n[1];if(r<=parseInt(e))return l}}catch(c){a.e(c)}finally{a.f()}}(r.level),"[").concat(r.level,"\u2606]")),l.a.createElement(M,{title:"KD"},c.kd),l.a.createElement(M,{title:"FKD"},c.fkd),l.a.createElement(M,{title:"WL"},c.wl),l.a.createElement(M,{title:"BBL"},c.bbl));return l.a.createElement(n.Stats,{title:"Bedwars",header:i})}function I(e){var t=j(e.player,"stats.Duels");void 0===t&&(t={});var a=f.a.get("decimal")||2,r=function(e){for(var a=0,n=0,r=0,l=Object.entries(e);r<l.length;r++){var c=Object(u.a)(l[r],2),s=c[0],o=c[1];s.includes("deaths")&&"deaths"!==s&&!s.includes("bridge")?a+=o:s.includes("kills")&&"kills"!==s&&!s.includes("bridge")&&(n+=o)}return{rank:i(e),kills:D(n),deaths:D(a),wins:D(t.wins),losses:D(t.losses)}}(t),c={kd:(r.kills/R(r.deaths)).toFixed(a),wl:(r.wins/R(r.losses)).toFixed(a)};function i(e){var t,a={1:"",2:"II",3:"III",4:"IV",5:"V"},n=Object(p.a)([["Rookie","8"],["Iron","f"],["Gold","6"],["Diamond","b"],["Master","2"],["Legend","4"],["Grandmaster","e"],["Godlike","5"]].reverse());try{for(n.s();!(t=n.n()).done;){var r=Object(u.a)(t.value,2),l=r[0],c=r[1],i=e["all_modes_".concat(l.toLowerCase(),"_title_prestige")];if(void 0!==i)return"\xa7".concat(c).concat(l," ").concat(a[i])}}catch(s){n.e(s)}finally{n.f()}return"-"}var s=l.a.createElement(l.a.Fragment,null,l.a.createElement(M,{title:"Rank"},r.rank),l.a.createElement(M,{title:"KD"},c.kd),l.a.createElement(M,{title:"Wins"},r.wins),l.a.createElement(M,{title:"WL"},c.wl));return l.a.createElement(n.Stats,{title:"Duels",header:s})}function S(e){var t,a=e.player,n=f.a.get("decimal")||2,r={name:a.displayname,rank:function(e){for(var t=[e.rank,e.monthlyPackageRank,e.newPackageRank,e.packageRank],a=0,n=t;a<n.length;a++){var r=n[a];if(void 0!==r&&"NONE"!==r&&"NORMAL"!==r)return r}return"NONE"}(a),prefix:a.prefix,plusColor:a.rankPlusColor,karma:D(a.karma),networkLevel:D((t=a.networkExp,(Math.sqrt(t+15312.5)-125/Math.sqrt(2))/(25*Math.sqrt(2))).toFixed(n))};return l.a.createElement("div",{className:"v-flex align-items-center text-shadow"},l.a.createElement(T,{font:"lg"},function(e){var t={undefined:"",BLACK:"\xa70",DARK_BLUE:"\xa71",DARK_GREEN:"\xa72",DARK_AQUA:"\xa73",DARK_RED:"\xa74",DARK_PURPLE:"\xa75",GOLD:"\xa76",GRAY:"\xa77",DARK_GRAY:"\xa78",BLUE:"\xa79",GREEN:"\xa7a",AQUA:"\xa7b",RED:"\xa7c",LIGHT_PURPLE:"\xa7d",YELLOW:"\xa7e",WHITE:"\xa7f"}[e.plusColor],a={undefined:"\xa77".concat(e.name),NONE:"\xa77".concat(e.name),VIP:"\xa7a[VIP] ".concat(e.name),VIP_PLUS:"\xa7a[VIP\xa76+\xa7a] ".concat(e.name),MVP:"\xa7b[MVP] ".concat(e.name),MVP_PLUS:"\xa7b[MVP".concat(t,"+\xa7b] ").concat(e.name),SUPERSTAR:"\xa76[MVP".concat(t,"++\xa76] ").concat(e.name),HELPER:"\xa71[HELPER] ".concat(e.name),MODERATOR:"\xa72[MOD] ".concat(e.name),ADMIN:"\xa7c[ADMIN] ".concat(e.name),YOUTUBER:"\xa7c[\xa7fYOUTUBE\xa7c] ".concat(e.name)};return void 0!==e.prefix?"".concat(e.prefix," ").concat(e.name):a[e.rank]}(r)),l.a.createElement("div",{className:"h-flex"},l.a.createElement(M,{title:"Hypixel Level"},"\xa7f"+r.networkLevel),l.a.createElement(M,{title:"Karma"},"\xa7d"+r.karma)))}var A=a(0),C=a(6);a(24);function K(e){return l.a.createElement("div",{className:"stats-box my-1 px-2"},l.a.createElement("p",{className:"font-md font-minecraft pr-3"},e.title),e.header,l.a.createElement(A.b.Provider,{value:{className:"react-icons"}},l.a.createElement("button",{className:"font-md cursor-grab ml-auto"},l.a.createElement(C.a,null))))}function F(e){var t=j(e.player,"stats.SkyWars");void 0===t&&(t={});var a=f.a.get("decimal")||2,r={level:function(e){var t=parseInt(e),a=[0,20,70,150,250,500,1e3,2e3,3500,6e3,1e4,15e3];if(t>=15e3)return(t-15e3)/1e4+12;for(var n=0;n<a.length;n++)if(t<a[n])return n+(t-a[n-1])/(a[n]-a[n-1])}(D(t.skywars_experience)).toFixed(a),prestigeIcon:t.selected_prestige_icon,kills:D(t.kills),deaths:D(t.deaths),wins:D(t.wins),losses:D(t.losses)},c={kd:(r.kills/R(r.deaths)).toFixed(a),wl:(r.wins/R(r.losses)).toFixed(a)};var i,s=l.a.createElement(l.a.Fragment,null,l.a.createElement(M,{title:"Level"},"\xa7".concat(function(e){var t,a=Object(p.a)([[0,"7"],[5,"f"],[10,"6"],[15,"b"],[20,"2"],[25,"3"],[30,"4"],[25,"d"],[40,"9"],[45,"5"],[50,"R"],[100,"K"]].reverse());try{for(a.s();!(t=a.n()).done;){var n=Object(u.a)(t.value,2),r=n[0],l=n[1];if(r<=parseInt(e))return l}}catch(c){a.e(c)}finally{a.f()}}(r.level),"[").concat(Math.floor(r.level)).concat(void 0===(i=r.prestigeIcon)?"\u22c6":{default:"\u22c6",angel_1:"\u2605",angel_2:"\u2606",angel_3:"\u2055",angel_4:"\u2736",angel_5:"\u2733",angel_6:"\u2734",angel_7:"\u2737",angel_8:"\u274b",angel_9:"\u273c",angel_10:"\u2742",angel_11:"\u2741",angel_12:"\u262c",iron_prestige:"\u2719",gold_prestige:"\u2764",diamond_prestige:"\u2620",emerald_prestige:"\u2726",sapphire_prestige:"\u270c",ruby_prestige:"\u2766",crystal_prestige:"\u2735",opal_prestige:"\u2763",amethyst_prestige:"\u262f",rainbow_prestige:"\u273a",mythic_prestige:"\u0ca0_\u0ca0",favor_icon:"\u2694",omega_icon:"\u03a9"}[i],"]")),l.a.createElement(M,{title:"KD"},c.kd),l.a.createElement(M,{title:"Wins"},r.wins),l.a.createElement(M,{title:"WL"},c.wl));return l.a.createElement(n.Stats,{title:"Skywars",header:s})}a(25);function U(e){var t=Object(r.useRef)("banner"),a={opacity:"0",maxHeight:"0px",transition:"opacity 0.5s, max-height 0.5s 0.5s"},n={opacity:"1",maxHeight:null,transition:"opacity 0.5s 0.5s, max-height 0.5s"},c=Object(r.useState)(a),i=Object(u.a)(c,2),s=i[0],o=i[1];return Object(r.useEffect)((function(){n.maxHeight=t.current.scrollHeight+"px",o(n),e.expire&&(setTimeout((function(){o(a)}),5e3),setTimeout((function(){e.onExpiry()}),6e3))}),[]),l.a.createElement("div",{ref:t,className:"banner banner-".concat(e.type),style:s},l.a.createElement("div",{className:"py-1 px-3"},l.a.createElement(A.b.Provider,{value:{className:"react-icons"}},l.a.createElement("span",{className:"font-md pr-1"},"error"===e.type?l.a.createElement(C.c,null):"info"===e.type?l.a.createElement(C.b,null):void 0)),l.a.createElement("span",{className:"font-bold"},e.title),l.a.createElement("span",null,e.description)))}function M(e){return l.a.createElement("div",{className:"v-flex align-items-center py-1 px-2"},l.a.createElement("small",null,e.title),l.a.createElement(T,{font:"md"},"\xa77".concat(e.children)))}a(26);function B(e){return l.a.createElement("button",{className:"btn25 py-1 px-2 btn25-".concat(e.type||"default"),onClick:e.onClick},e.children)}function H(e){return l.a.createElement("a",{className:"link",target:"_blank",rel:"noopener noreferrer",href:e.href},e.children)}a(27);function T(e){return function(t){var a,n={0:"black",1:"darkblue",2:"darkgreen",3:"darkaqua",4:"darkred",5:"purple",6:"gold",7:"gray",8:"darkgray",9:"blue",a:"green",b:"aqua",c:"red",d:"pink",e:"yellow",f:"white",R:"rainbow",K:"rainbow font-bold"},r=[],c=0,i=Object(p.a)(("\xa7f"+t).split("\xa7"));try{for(i.s();!(a=i.n()).done;){var s=a.value,o=s[0],m=s.substr(1);if(m){var u=Number(m);isNaN(u)||(m=u.toLocaleString("en",{minimumFractionDigits:0,maximumFractionDigits:8}));var d=n[o];r.push(l.a.createElement("span",{key:c++,className:"font-minecraft c-".concat(d)},m))}}}catch(f){i.e(f)}finally{i.f()}return l.a.createElement("span",{className:"h-flex nowrap font-".concat(e.font)},r.map((function(e){return e})))}(e.children)}var V=a(14);function W(e){var t=Object(r.useState)(!1),a=Object(u.a)(t,2),n=a[0],c=a[1];function i(){c(!n)}return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"h-flex"},l.a.createElement("div",{className:"flex-1 p-1 h-flex"},l.a.createElement("a",{className:"p-1 text-shadow",href:function(){var e=window.location.origin;return"".concat(e,"/?redirect=false")}()},l.a.createElement(T,{font:"md"},"\xa7d"+y))),l.a.createElement("div",{className:"flex-1 py-1 flex-grow-3"},e.children),l.a.createElement("div",{className:"flex-1 p-1 text-right"},l.a.createElement(A.b.Provider,{value:{className:"react-icons"}},l.a.createElement("p",{className:"p-1"},function(){var e=f.a.get("pinnedPlayer");return e?l.a.createElement("button",{className:"font-md",onClick:function(){P(e)}},l.a.createElement(V.a,null)):null}(),l.a.createElement("button",{className:"font-md pl-2",onClick:i},l.a.createElement(C.e,null)))))),l.a.createElement("div",{className:n?"settings-shown":"settings-hidden"},l.a.createElement(q,{toggle:i})))}a(28);function G(e){var t=Object(r.useRef)("input");function a(){P(t.current.value)}return l.a.createElement("div",{className:"py-1 px-2 input"},l.a.createElement("input",{ref:t,type:"text",onKeyDown:function(e){"Enter"===e.key&&a()},autoFocus:!0}),l.a.createElement(A.b.Provider,{value:{className:"react-icons"}},l.a.createElement("button",{className:"font-md",onClick:a},l.a.createElement(C.d,null))))}var Y=a(16);a(31);function q(e){var t=Object(r.useRef)("pinnedPlayer"),a=Object(r.useRef)("decimal"),n=Object(r.useState)(null),c=Object(u.a)(n,2),i=c[0],s=c[1];return l.a.createElement("div",{className:"settings p-2"},l.a.createElement("div",{className:"container v-flex"},l.a.createElement("div",{className:"h-flex align-items-center pb-2"},l.a.createElement("div",{"data-tip":"The player you would like to load by default when you visit this page.",className:"font-bold cursor-help pr-2"},"Pinned Player"),l.a.createElement("input",{ref:t,style:{width:"15rem"},type:"text",placeholder:"ex. Technoblade",defaultValue:f.a.get("pinnedPlayer")}),l.a.createElement("div",{className:"pl-2 ml-auto"},l.a.createElement(B,{type:"error",onClick:function(){f.a.remove("pinnedPlayer"),f.a.remove("decimal"),(new O).clear(),s("ClearCookiesInfo")}},l.a.createElement("small",null,"Clear Cookies")))),l.a.createElement("div",{className:"h-flex align-items-center pb-2"},l.a.createElement("div",{"data-tip":"The amount of decimal places to display for K/D, W/L, etc.",className:"font-bold cursor-help pr-2"},"Decimal Places"),l.a.createElement("input",{ref:a,style:{width:"4rem"},type:"number",defaultValue:f.a.get("decimal")||"2",min:"0",max:"8",step:"1"})),l.a.createElement("div",{className:"v-flex align-items-center pb-2"},l.a.createElement("div",{className:"pb-2"},l.a.createElement(B,{onClick:function(){var n=function(e){try{parseInt(e)}catch(a){return!1}var t=parseInt(e);return!(isNaN(t)||t<0||t>8)&&t}(a.current.value);!1!==n?(f.a.set("pinnedPlayer",t.current.value,{expires:365}),f.a.set("decimal",n,{expires:365}),e.toggle()):s("DecimalPlaceError")}},"Save Settings")),"DecimalPlaceError"===i?l.a.createElement(U,{type:"error",title:"Invalid Entry. ",description:'"Decimal Places" must be an integer between 0 and 8.',expire:!0,onExpiry:function(){s(null)}}):"ClearCookiesInfo"===i?l.a.createElement(U,{type:"info",title:"Your cookies were cleared. ",description:"You may reload the page, or click Save Settings if this was a mistake.",expire:!0,onExpiry:function(){s(null)}}):void 0),l.a.createElement("p",null,"Your preferences are stored as\xa0",l.a.createElement(H,{href:"http://www.whatarecookies.com/"},"cookies")," on your computer.\xa0 They are accessible to you and to you only. You can clear the cookies used by\xa0 this site at any time by clicking the Clear Cookies button.")),l.a.createElement(Y.a,null))}function J(e){return l.a.createElement("div",null,l.a.createElement(W,null),l.a.createElement("div",{className:"container v-flex align-items-center my-4"},l.a.createElement("p",{className:"pb-4 text-shadow"},l.a.createElement(T,{font:"xl"},"\xa7d"+h)),l.a.createElement("p",{className:"w-100 pb-2 pl-2"},l.a.createElement(T,{font:"md"},"Search for the stats of a Hypixel player")),l.a.createElement("div",{className:"w-100 pb-2"},l.a.createElement(G,null)),function(){var e=(new O).toArray();if(void 0!==e&&0!==e.length)return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"w-100 pb-2 pl-2 h-flex align-items-center"},l.a.createElement(T,null,"Recent searches"),e.map((function(e){return l.a.createElement("div",{className:"pl-2"},l.a.createElement(B,{key:e,onClick:function(){P(e)}},l.a.createElement("small",{className:"c-gray"},e)))}))))}(),e.banner?e.banner:null,l.a.createElement("p",{className:"w-50 pt-4 pb-2 text-center"},"Pro tip: Customize this site by clicking on the gear button in the top-right corner.")))}var Q=a(15),z=a.n(Q);function $(e){return l.a.createElement("div",null,l.a.createElement(W,null),l.a.createElement("div",{className:"container v-flex align-items-center my-4"},l.a.createElement("div",{className:"mb-2"},l.a.createElement(z.a,{type:"spin",height:"5rem",width:"5rem"})),l.a.createElement("p",{className:"font-md"},"Loading stats for ",e.player,"...")))}function X(e){var t=e.playerData;return l.a.createElement("div",null,l.a.createElement(W,null,l.a.createElement(G,null)),l.a.createElement("div",{className:"container v-flex align-items-center my-4"},l.a.createElement(S,{player:t}),l.a.createElement(L,{player:t}),l.a.createElement(I,{player:t}),l.a.createElement(F,{player:t})))}var Z=function(){var e=new _("9f0c2f20-3c01-4645-86f9-32e51feda714"),t=new URL(window.location.href).searchParams,a=Object(r.useState)(null),n=Object(u.a)(a,2),c=n[0],i=n[1],s=Object(r.useState)("idle"),d=Object(u.a)(s,2),p=d[0],v=d[1];function E(){return(E=Object(m.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v("requested"),n=null,t.prev=2,t.next=5,e.getDataOfPlayer(a);case 5:n=t.sent,t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(2),v("failed"),t.abrupt("return");case 12:i(n),v("received");case 14:case"end":return t.stop()}}),t,null,[[2,8]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){t.get("player")&&function(e){E.apply(this,arguments)}(t.get("player"))}),[]),l.a.createElement("div",{className:"h-100 v-flex"},l.a.createElement("div",{className:"flex-1"},t.get("player")?function(){if("requested"===p)return l.a.createElement($,{player:t.get("player")});if("failed"===p){var e=l.a.createElement(U,{type:"error",title:"API call failed. ",description:"The site failed to fetch from the Hypixel API."});return l.a.createElement(J,{banner:e})}if("received"===p){if(null===c){var a=l.a.createElement(U,{type:"error",title:"Player not found. ",description:'Could not find a player with the name "'.concat(t.get("player"),'".')});return l.a.createElement(J,{banner:a})}return(new O).add(c.displayname),l.a.createElement(X,{playerData:c})}}():("false"===t.get("redirect")||P(f.a.get("pinnedPlayer")),l.a.createElement(J,null))),l.a.createElement("div",{className:"p-1 footer"},l.a.createElement("small",null,"Powered by the\xa0",l.a.createElement(H,{href:w},k),". Hosted on\xa0",l.a.createElement(H,{href:N},x),"."),l.a.createElement("small",null,"Made with \u2764\ufe0f by\xa0",l.a.createElement(H,{href:g},b),".")))};a(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43029060"],{"2aa5":function(e,t,n){},3275:function(e,t,n){"use strict";n("2aa5")},5592:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=n("ed22"),c=n.n(a);const i=e=>(Object(r["pushScopeId"])("data-v-5a923bdc"),e=e(),Object(r["popScopeId"])(),e),s={class:"xtx-pay-page"},o={class:"container"},u={key:0,class:"pay-info"},d=i(()=>Object(r["createElementVNode"])("span",{class:"icon iconfont icon-queren2"},null,-1)),l={class:"tip"},f=i(()=>Object(r["createElementVNode"])("p",null,"订单提交成功！请尽快完成支付。",-1)),b={key:0},h={key:1},m={class:"amount"},O=i(()=>Object(r["createElementVNode"])("span",null,"应付总额：",-1)),p={class:"pay-type"},j=i(()=>Object(r["createElementVNode"])("p",{class:"head"},"选择以下支付方式付款",-1)),v={class:"item"},$=i(()=>Object(r["createElementVNode"])("p",null,"支付平台",-1)),g=i(()=>Object(r["createElementVNode"])("a",{class:"btn wx",href:"javascript:;"},null,-1)),y=["href"],w=Object(r["createStaticVNode"])('<div class="item" data-v-5a923bdc><p data-v-5a923bdc>支付方式</p><a class="btn" href="javascript:;" data-v-5a923bdc>招商银行</a><a class="btn" href="javascript:;" data-v-5a923bdc>工商银行</a><a class="btn" href="javascript:;" data-v-5a923bdc>建设银行</a><a class="btn" href="javascript:;" data-v-5a923bdc>农业银行</a><a class="btn" href="javascript:;" data-v-5a923bdc>交通银行</a></div>',1),D={class:"pay-wait"},M=i(()=>Object(r["createElementVNode"])("img",{src:c.a,alt:""},null,-1)),S={key:0},N=i(()=>Object(r["createElementVNode"])("p",null,"如果支付成功：",-1)),V=i(()=>Object(r["createElementVNode"])("p",null,"如果支付失败：",-1));function x(e,t,n,a,c,i){const x=Object(r["resolveComponent"])("XtxBreadItem"),_=Object(r["resolveComponent"])("XtxBread"),k=Object(r["resolveComponent"])("RouterLink"),E=Object(r["resolveComponent"])("XtxDialog");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",s,[Object(r["createElementVNode"])("div",o,[Object(r["createVNode"])(_,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(x,{to:"/"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("首页")]),_:1}),Object(r["createVNode"])(x,{to:"/cart"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("购物车")]),_:1}),Object(r["createVNode"])(x,null,{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("支付订单")]),_:1})]),_:1}),a.order?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",u,[d,Object(r["createElementVNode"])("div",l,[f,a.order.countdown>-1?(Object(r["openBlock"])(),Object(r["createElementBlock"])("p",b,[Object(r["createTextVNode"])("支付还剩 "),Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(a.timeText),1),Object(r["createTextVNode"])(", 超时后将取消订单")])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("p",h,"订单已经超时"))]),Object(r["createElementVNode"])("div",m,[O,Object(r["createElementVNode"])("span",null,"¥"+Object(r["toDisplayString"])(a.order.payMoney),1)])])):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("div",p,[j,Object(r["createElementVNode"])("div",v,[$,g,Object(r["createElementVNode"])("a",{class:"btn alipay",onClick:t[0]||(t[0]=e=>a.visibleDialog=!0),href:a.payUrl,target:"_blank"},null,8,y)]),w])]),Object(r["createVNode"])(E,{title:"正在支付...",visible:a.visibleDialog,"onUpdate:visible":t[1]||(t[1]=e=>a.visibleDialog=e)},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("div",D,[M,a.order?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",S,[N,Object(r["createVNode"])(k,{to:"/member/order/"+e.$route.query.id},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("查看订单详情>")]),_:1},8,["to"]),V,Object(r["createVNode"])(k,{to:"/"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("查看相关疑问>")]),_:1})])):Object(r["createCommentVNode"])("",!0)])]),_:1},8,["visible"])])}var _=n("f8b7"),k=n("6605"),E=n("806c"),C=n("b775"),T={name:"XtxPayPage",setup(){const e=Object(r["ref"])(null),t=Object(k["c"])();Object(_["i"])(t.query.id).then(t=>{e.value=t.result,t.result.countdown>-1&&n(t.result.countdown)});const{start:n,timeText:a}=Object(E["b"])(),c=encodeURIComponent("http://www.corho.com:8080/#/pay/callback"),i=`${C["a"]}pay/aliPay?orderId=${t.query.id}&redirect=${c}`,s=Object(r["ref"])(!1);return{order:e,timeText:a,payUrl:i,visibleDialog:s}}},B=(n("3275"),n("6b0d")),I=n.n(B);const Y=I()(T,[["render",x],["__scopeId","data-v-5a923bdc"]]);t["default"]=Y},"5a0c":function(e,t,n){!function(t,n){e.exports=n()}(0,(function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",a="second",c="minute",i="hour",s="day",o="week",u="month",d="quarter",l="year",f="date",b="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,O={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},p=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},j={s:p,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+p(r,2,"0")+":"+p(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,u),c=n-a<0,i=t.clone().add(r+(c?-1:1),u);return+(-(r+(n-a)/(c?a-i:i-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:l,w:o,d:s,D:f,h:i,m:c,s:a,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",$={};$[v]=O;var g=function(e){return e instanceof M},y=function e(t,n,r){var a;if(!t)return v;if("string"==typeof t){var c=t.toLowerCase();$[c]&&(a=c),n&&($[c]=n,a=c);var i=t.split("-");if(!a&&i.length>1)return e(i[0])}else{var s=t.name;$[s]=t,a=s}return!r&&a&&(v=a),a||!r&&v},w=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},D=j;D.l=y,D.i=g,D.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function O(e){this.$L=y(e.locale,null,!0),this.parse(e)}var p=O.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(h);if(r){var a=r[2]-1||0,c=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,c)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,c)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return D},p.isValid=function(){return!(this.$d.toString()===b)},p.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},p.isAfter=function(e,t){return w(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<w(e)},p.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,t){var n=this,r=!!D.u(t)||t,d=D.p(e),b=function(e,t){var a=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?a:a.endOf(s)},h=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,O=this.$M,p=this.$D,j="set"+(this.$u?"UTC":"");switch(d){case l:return r?b(1,0):b(31,11);case u:return r?b(1,O):b(0,O+1);case o:var v=this.$locale().weekStart||0,$=(m<v?m+7:m)-v;return b(r?p-$:p+(6-$),O);case s:case f:return h(j+"Hours",0);case i:return h(j+"Minutes",1);case c:return h(j+"Seconds",2);case a:return h(j+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,t){var n,o=D.p(e),d="set"+(this.$u?"UTC":""),b=(n={},n[s]=d+"Date",n[f]=d+"Date",n[u]=d+"Month",n[l]=d+"FullYear",n[i]=d+"Hours",n[c]=d+"Minutes",n[a]=d+"Seconds",n[r]=d+"Milliseconds",n)[o],h=o===s?this.$D+(t-this.$W):t;if(o===u||o===l){var m=this.clone().set(f,1);m.$d[b](h),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](h);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[D.p(e)]()},p.add=function(r,d){var f,b=this;r=Number(r);var h=D.p(d),m=function(e){var t=w(b);return D.w(t.date(t.date()+Math.round(e*r)),b)};if(h===u)return this.set(u,this.$M+r);if(h===l)return this.set(l,this.$y+r);if(h===s)return m(1);if(h===o)return m(7);var O=(f={},f[c]=t,f[i]=n,f[a]=e,f)[h]||1,p=this.$d.getTime()+r*O;return D.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||b;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=D.z(this),c=this.$H,i=this.$m,s=this.$M,o=n.weekdays,u=n.months,d=function(e,n,a,c){return e&&(e[n]||e(t,r))||a[n].slice(0,c)},l=function(e){return D.s(c%12||12,e,"0")},f=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:D.s(s+1,2,"0"),MMM:d(n.monthsShort,s,u,3),MMMM:d(u,s),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,o,2),ddd:d(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(c),HH:D.s(c,2,"0"),h:l(1),hh:l(2),a:f(c,i,!0),A:f(c,i,!1),m:String(i),mm:D.s(i,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:a};return r.replace(m,(function(e,t){return t||h[e]||a.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,f,b){var h,m=D.p(f),O=w(r),p=(O.utcOffset()-this.utcOffset())*t,j=this-O,v=D.m(this,O);return v=(h={},h[l]=v/12,h[u]=v,h[d]=v/3,h[o]=(j-p)/6048e5,h[s]=(j-p)/864e5,h[i]=j/n,h[c]=j/t,h[a]=j/e,h)[m]||j,b?v:D.a(v)},p.daysInMonth=function(){return this.endOf(u).$D},p.$locale=function(){return $[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=y(e,t,!0);return r&&(n.$L=r),n},p.clone=function(){return D.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},O}(),S=M.prototype;return w.prototype=S,[["$ms",r],["$s",a],["$m",c],["$H",i],["$W",s],["$M",u],["$y",l],["$D",f]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,M,w),e.$i=!0),w},w.locale=y,w.isDayjs=g,w.unix=function(e){return w(1e3*e)},w.en=$[v],w.Ls=$,w.p={},w}))},"806c":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n("16ce"),a=n("7bbe"),c=n("7a23"),i=n("5a0c"),s=n.n(i);const o=e=>{const t=Object(c["ref"])(null),n=Object(c["ref"])([]),{stop:a}=Object(r["b"])(t,([{isIntersecting:t}],r)=>{t&&(a(),e().then(e=>{n.value=e.result}))},{threshold:0});return{target:t,result:n}},u=()=>{const e=Object(c["ref"])(0),t=Object(c["ref"])(""),{pause:n,resume:r}=Object(a["v"])(()=>{e.value--,t.value=s.a.unix(e.value).format("mm分ss秒"),e.value<=0&&n()},1e3,!1);Object(c["onUnmounted"])(()=>{n()});const i=n=>{e.value=n,t.value=s.a.unix(e.value).format("mm分ss秒"),r()};return{start:i,timeText:t}}},ed22:function(e,t,n){e.exports=n.p+"img/load.88daf935.gif"},f8b7:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"f",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"l",(function(){return h})),n.d(t,"k",(function(){return m}));var r=n("b775");const a=()=>Object(r["b"])("/member/order/pre","get"),c=e=>Object(r["b"])("/member/address","post",e),i=e=>Object(r["b"])("/member/address/"+e.id,"put",e),s=e=>Object(r["b"])("/member/address/"+e,"delete"),o=e=>Object(r["b"])("/member/order","post",e),u=e=>Object(r["b"])("/member/order/"+e,"get"),d=({orderState:e,page:t,pageSize:n})=>Object(r["b"])("/member/order","get",{orderState:e,page:t,pageSize:n}),l=(e,t)=>Object(r["b"])(`/member/order/${e}/cancel`,"put",{cancelReason:t}),f=e=>Object(r["b"])("/member/order","delete",{ids:e}),b=e=>Object(r["b"])(`/member/order/${e}/receipt`,"put"),h=e=>Object(r["b"])(`/member/order/${e}/logistics`,"get"),m=e=>Object(r["b"])("/member/order/repurchase/"+e,"get")}}]);
//# sourceMappingURL=chunk-43029060.0f856914.js.map
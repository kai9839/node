(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3712c0c0"],{"0117":function(e,t,c){},"0182":function(e,t,c){"use strict";c("0117")},"06fa":function(e,t,c){},"0f74":function(e,t,c){"use strict";c("94af")},"15c0":function(e,t,c){},"1b57":function(e,t,c){"use strict";var o=c("7a23");const a=e=>(Object(o["pushScopeId"])("data-v-273e7ce0"),e=e(),Object(o["popScopeId"])(),e),n={class:"goods-relevant"},l={class:"header"},s=a(()=>Object(o["createElementVNode"])("i",{class:"icon"},null,-1)),r={class:"title"};function d(e,t,c,a,d,i){const b=Object(o["resolveComponent"])("xtx-carousel");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",n,[Object(o["createElementVNode"])("div",l,[s,Object(o["createElementVNode"])("span",r,Object(o["toDisplayString"])(c.goodsId?"同类商品推荐":"猜你喜欢"),1)]),Object(o["createVNode"])(b,{sliders:a.sliders,style:{height:"380px"},"auto-play":""},null,8,["sliders"])])}c("14d9");var i=c("c4c8"),b=c("1ba7");const u=e=>{const t=Object(o["ref"])([]);return Object(i["e"])(e).then(e=>{const c=4,o=Math.ceil(e.result.length/c);for(let a=0;a<o;a++)t.value.push(e.result.slice(a*c,(a+1)*c))}),t};var m={components:{xtxCarousel:b["default"]},name:"GoodsRelevant",props:{goodsId:{type:String,default:void 0}},setup(e){const t=u(e.goodsId);return{sliders:t}}},j=(c("21d8"),c("6b0d")),p=c.n(j);const O=p()(m,[["render",d],["__scopeId","data-v-273e7ce0"]]);t["a"]=O},"21d8":function(e,t,c){"use strict";c("25f3")},"25f3":function(e,t,c){},"270d":function(e,t,c){"use strict";c("40b7")},"2b66":function(e,t,c){"use strict";c("459d")},"40b7":function(e,t,c){},"42d1":function(e,t,c){"use strict";c("6851")},"459d":function(e,t,c){},"4d0f":function(e,t,c){"use strict";c("99e5")},"51cc":function(e,t,c){},6851:function(e,t,c){},"6a1e":function(e,t,c){"use strict";c("51cc")},"6b04":function(e,t,c){},"6e95":function(e,t,c){"use strict";c("8f43")},7732:function(e,t,c){"use strict";c.r(t);var o=c("7a23");const a={key:0,class:"xtx-goods-page"},n={class:"container"},l={class:"goods-info"},s={class:"media"},r={class:"spec"},d={class:"goods-footer"},i={class:"goods-article"},b={class:"goods-warn"},u={class:"goods-aside"};function m(e,t,c,m,j,p){const O=Object(o["resolveComponent"])("XtxBreadItem"),g=Object(o["resolveComponent"])("XtxBread"),v=Object(o["resolveComponent"])("GoodsImage"),f=Object(o["resolveComponent"])("GoodsSales"),k=Object(o["resolveComponent"])("GoodsName"),E=Object(o["resolveComponent"])("GoodsSku"),N=Object(o["resolveComponent"])("xtx-numbox"),V=Object(o["resolveComponent"])("xtx-button"),y=Object(o["resolveComponent"])("GoodsRelevant"),h=Object(o["resolveComponent"])("GoodsTabs"),C=Object(o["resolveComponent"])("GoodsWarn"),B=Object(o["resolveComponent"])("GoodsHot");return m.goods?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createElementVNode"])("div",n,[Object(o["createVNode"])(g,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{to:"/"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("首页")]),_:1}),Object(o["createVNode"])(O,{to:"/category/"+m.goods.categories[1].id},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(m.goods.categories[1].name),1)]),_:1},8,["to"]),Object(o["createVNode"])(O,{to:"/category/sub/"+m.goods.categories[0].id},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(m.goods.categories[0].name),1)]),_:1},8,["to"]),Object(o["createVNode"])(O,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(m.goods.name),1)]),_:1})]),_:1}),Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("div",s,[Object(o["createVNode"])(v,{images:m.goods.mainPictures},null,8,["images"]),Object(o["createVNode"])(f)]),Object(o["createElementVNode"])("div",r,[Object(o["createVNode"])(k,{goods:m.goods},null,8,["goods"]),Object(o["createVNode"])(E,{goods:m.goods,onChange:m.changeSku},null,8,["goods","onChange"]),Object(o["createVNode"])(N,{label:"数量",modelValue:m.num,"onUpdate:modelValue":t[0]||(t[0]=e=>m.num=e),max:m.goods.inventory},null,8,["modelValue","max"]),Object(o["createVNode"])(V,{onClick:t[1]||(t[1]=e=>m.insertCart()),type:"primary",style:{"margin-top":"20px"}},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("加入购物车")]),_:1})])]),Object(o["createVNode"])(y,{goodsId:m.goods.id},null,8,["goodsId"]),Object(o["createElementVNode"])("div",d,[Object(o["createElementVNode"])("div",i,[Object(o["createVNode"])(h),Object(o["createElementVNode"])("div",b,[Object(o["createVNode"])(C)])]),Object(o["createElementVNode"])("div",u,[Object(o["createVNode"])(B,{goodsId:m.goods.id,type:1},null,8,["goodsId"]),Object(o["createVNode"])(B,{goodsId:m.goods.id,type:2},null,8,["goodsId"])])])])])):Object(o["createCommentVNode"])("",!0)}var j=c("1b57");const p={class:"goods-image"},O={class:"middle",ref:"target"},g=["src"],v={class:"small"},f=["onMouseenter","src"];function k(e,t,c,a,n,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",p,[Object(o["withDirectives"])(Object(o["createElementVNode"])("div",{class:"large",style:Object(o["normalizeStyle"])([{backgroundImage:`url(${c.images[a.currIndex]})`},a.largePosition])},null,4),[[o["vShow"],a.show]]),Object(o["createElementVNode"])("div",O,[Object(o["createElementVNode"])("img",{src:c.images[a.currIndex],alt:""},null,8,g),Object(o["withDirectives"])(Object(o["createElementVNode"])("div",{class:"layer",style:Object(o["normalizeStyle"])(a.layerPosition)},null,4),[[o["vShow"],a.show]])],512),Object(o["createElementVNode"])("ul",v,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.images,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:e,class:Object(o["normalizeClass"])({active:t===a.currIndex})},[Object(o["createElementVNode"])("img",{onMouseenter:e=>a.currIndex=t,src:e,alt:""},null,40,f)],2))),128))])])}var E=c("16ce"),N={name:"GoodsImage",props:{images:{type:Array,default:()=>[]}},setup(e){const t=Object(o["ref"])(0),c=Object(o["ref"])(!1),a=Object(o["reactive"])({left:0,top:0}),n=Object(o["reactive"])({backgroundPositionX:0,backgroundPositionY:0}),l=Object(o["ref"])(null),{elementX:s,elementY:r,isOutside:d}=Object(E["c"])(l);return Object(o["watch"])([s,r,d],()=>{c.value=!d.value;const e={x:0,y:0};s.value<100?e.x=0:s.value>300?e.x=200:e.x=s.value-100,r.value<100?e.y=0:r.value>300?e.y=200:e.y=r.value-100,a.left=e.x+"px",a.top=e.y+"px",n.backgroundPositionX=-2*e.x+"px",n.backgroundPositionY=-2*e.y+"px"}),{currIndex:t,show:c,layerPosition:a,largePosition:n,target:l}}},V=(c("a6fc"),c("6b0d")),y=c.n(V);const h=y()(N,[["render",k],["__scopeId","data-v-45661e56"]]);var C=h;const B={class:"goods-sales"},I=Object(o["createStaticVNode"])('<li data-v-ca3db56a><p data-v-ca3db56a>销量人气</p><p data-v-ca3db56a>200+</p><p data-v-ca3db56a><i class="iconfont icon-task-filling" data-v-ca3db56a></i>销量人气</p></li><li data-v-ca3db56a><p data-v-ca3db56a>商品评价</p><p data-v-ca3db56a>400+</p><p data-v-ca3db56a><i class="iconfont icon-comment-filling" data-v-ca3db56a></i>查看评价</p></li><li data-v-ca3db56a><p data-v-ca3db56a>收藏人气</p><p data-v-ca3db56a>600+</p><p data-v-ca3db56a><i class="iconfont icon-favorite-filling" data-v-ca3db56a></i>收藏商品</p></li><li data-v-ca3db56a><p data-v-ca3db56a>品牌信息</p><p data-v-ca3db56a>苏宁电器</p><p data-v-ca3db56a><i class="iconfont icon-dynamic-filling" data-v-ca3db56a></i>品牌主页</p></li>',4),x=[I];function S(e,t,c,a,n,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("ul",B,x)}var G={name:"GoodsSales"};c("2b66");const _=y()(G,[["render",S],["__scopeId","data-v-ca3db56a"]]);var D=_;const w=e=>(Object(o["pushScopeId"])("data-v-01348fee"),e=e(),Object(o["popScopeId"])(),e),P={class:"g-name"},T={class:"g-desc"},L={class:"g-price"},F={class:"g-service"},z=w(()=>Object(o["createElementVNode"])("dl",null,[Object(o["createElementVNode"])("dt",null,"促销"),Object(o["createElementVNode"])("dd",null,"12月好物放送，App领券购买直降120元")],-1)),$=w(()=>Object(o["createElementVNode"])("dt",null,"配送",-1)),X=w(()=>Object(o["createElementVNode"])("dl",null,[Object(o["createElementVNode"])("dt",null,"服务"),Object(o["createElementVNode"])("dd",null,[Object(o["createElementVNode"])("span",null,"无忧退货"),Object(o["createElementVNode"])("span",null,"快速退款"),Object(o["createElementVNode"])("span",null,"免费包邮"),Object(o["createElementVNode"])("a",{href:"javascript:;"},"了解详情")])],-1));function q(e,t,c,a,n,l){const s=Object(o["resolveComponent"])("XtxCity");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("p",P,Object(o["toDisplayString"])(c.goods.name),1),Object(o["createElementVNode"])("p",T,Object(o["toDisplayString"])(c.goods.desc),1),Object(o["createElementVNode"])("p",L,[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(c.goods.price),1),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(c.goods.oldPrice),1)]),Object(o["createElementVNode"])("div",F,[z,Object(o["createElementVNode"])("dl",null,[$,Object(o["createElementVNode"])("dd",null,[Object(o["createTextVNode"])("至 "),Object(o["createVNode"])(s,{onChange:a.changeCity,fullLocation:a.fullLocation},null,8,["onChange","fullLocation"])])]),X])],64)}var A={name:"GoodName",props:{goods:{type:Object,default:()=>({})}},setup(e){const t=Object(o["ref"])("440000"),c=Object(o["ref"])("440100"),a=Object(o["ref"])("440106"),n=Object(o["ref"])("广东省 广州市 天河区");if(e.goods.userAddresses){const o=e.goods.userAddresses.find(e=>1===e.isDefault);o&&(t.value=o.provinceCode,c.value=o.cityCode,a.value=o.countyCode,n.value=o.fullLocation)}const l=e=>{t.value=e.provinceCode,c.value=e.cityCode,a.value=e.countyCode,n.value=e.fullLocation};return{fullLocation:n,changeCity:l}}};c("0182");const R=y()(A,[["render",q],["__scopeId","data-v-01348fee"]]);var H=R,M=c("f6d1");const Y={class:"goods-tabs"};function J(e,t,c,a,n,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Y,[Object(o["createElementVNode"])("nav",null,[Object(o["createElementVNode"])("a",{class:Object(o["normalizeClass"])({active:"detail"===a.activeName}),href:"javascript:;",onClick:t[0]||(t[0]=e=>a.clickTab("detail"))},"商品详情",2),Object(o["createElementVNode"])("a",{class:Object(o["normalizeClass"])({active:"comment"===a.activeName}),href:"javascript:;",onClick:t[1]||(t[1]=e=>a.clickTab("comment"))},[Object(o["createTextVNode"])("商品评价"),Object(o["createElementVNode"])("span",null,"("+Object(o["toDisplayString"])(a.goods.commentCount)+")",1)],2)]),(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])("goods-"+a.activeName)))])}const W={class:"goods-detail"},U={class:"attrs"},K={class:"dt"},Q={class:"dd"},Z=["src"];function ee(e,t,c,a,n,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",W,[Object(o["createElementVNode"])("ul",U,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.goods.details.properties,e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:e.value},[Object(o["createElementVNode"])("span",K,Object(o["toDisplayString"])(e.name),1),Object(o["createElementVNode"])("span",Q,Object(o["toDisplayString"])(e.value),1)]))),128))]),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.goods.details.pictures,e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("img",{key:e,src:e,alt:""},null,8,Z))),128))])}var te={name:"GoodsDetail",setup(){const e=Object(o["inject"])("goods");return{goods:e}}};c("8e7a");const ce=y()(te,[["render",ee],["__scopeId","data-v-bef77db8"]]);var oe=ce;const ae=e=>(Object(o["pushScopeId"])("data-v-473814a8"),e=e(),Object(o["popScopeId"])(),e),ne={class:"goods-comment"},le={key:0,class:"head"},se={class:"data"},re=ae(()=>Object(o["createElementVNode"])("span",null,"人购买",-1)),de=ae(()=>Object(o["createElementVNode"])("span",null,"好评率",-1)),ie={class:"tags"},be=ae(()=>Object(o["createElementVNode"])("div",{class:"dt"},"大家都在说：",-1)),ue={class:"dd"},me=["onClick"],je={key:1,class:"sort"},pe=ae(()=>Object(o["createElementVNode"])("span",null,"排序：",-1)),Oe={key:2,class:"list"},ge={class:"user"},ve=["src"],fe={class:"body"},ke={class:"score"},Ee={class:"attr"},Ne={class:"text"},Ve={class:"time"},ye={class:"zan"},he=ae(()=>Object(o["createElementVNode"])("i",{class:"iconfont icon-dianzan"},null,-1));function Ce(e,t,c,a,n,l){const s=Object(o["resolveComponent"])("GoodsCommentImage"),r=Object(o["resolveComponent"])("XtxPagination");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",ne,[a.commentInfo?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",le,[Object(o["createElementVNode"])("div",se,[Object(o["createElementVNode"])("p",null,[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(a.commentInfo.salesCount),1),re]),Object(o["createElementVNode"])("p",null,[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(a.commentInfo.praisePercent),1),de])]),Object(o["createElementVNode"])("div",ie,[be,Object(o["createElementVNode"])("div",ue,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.commentInfo.tags,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("a",{key:e.title,href:"javascript:;",class:Object(o["normalizeClass"])({active:a.currTagIndex===t}),onClick:e=>a.changeTag(t)},Object(o["toDisplayString"])(e.title)+" ("+Object(o["toDisplayString"])(e.tagCount)+") ",11,me))),128))])])])):Object(o["createCommentVNode"])("",!0),a.commentInfo?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",je,[pe,Object(o["createElementVNode"])("a",{onClick:t[0]||(t[0]=e=>a.changeSort(null)),href:"javascript:;",class:Object(o["normalizeClass"])({active:null===a.reqParams.sortField})},"默认",2),Object(o["createElementVNode"])("a",{onClick:t[1]||(t[1]=e=>a.changeSort("praiseCount")),href:"javascript:;",class:Object(o["normalizeClass"])({active:"praiseCount"===a.reqParams.sortField})},"最热",2),Object(o["createElementVNode"])("a",{onClick:t[2]||(t[2]=e=>a.changeSort("createTime")),href:"javascript:;",class:Object(o["normalizeClass"])({active:"createTime"===a.reqParams.sortField})},"最新",2)])):Object(o["createCommentVNode"])("",!0),a.commentList?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Oe,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.commentList,e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"item",key:e.id},[Object(o["createElementVNode"])("div",ge,[Object(o["createElementVNode"])("img",{src:e.member.avatar,alt:""},null,8,ve),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(a.formatNickname(e.member.nickname)),1)]),Object(o["createElementVNode"])("div",fe,[Object(o["createElementVNode"])("div",ke,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.score,e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("i",{key:e+"1",class:"iconfont icon-wjx01"}))),128)),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(5-e.score,e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("i",{key:e+"2",class:"iconfont icon-wjx02"}))),128)),Object(o["createElementVNode"])("span",Ee,Object(o["toDisplayString"])(a.formatSpecs(e.orderInfo.specs)),1)]),Object(o["createElementVNode"])("div",Ne,Object(o["toDisplayString"])(e.content),1),e.pictures.length?(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:0,pictures:e.pictures},null,8,["pictures"])):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",Ve,[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.createTime),1),Object(o["createElementVNode"])("span",ye,[he,Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.praiseCount),1)])])])]))),128))])):Object(o["createCommentVNode"])("",!0),a.total?(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:3,onCurrentChange:a.changePager,total:a.total,"current-page":a.reqParams.page},null,8,["onCurrentChange","total","current-page"])):Object(o["createCommentVNode"])("",!0)])}c("3c65"),c("13d5");const Be={class:"goods-comment-image"},Ie={class:"list"},xe=["onClick"],Se=["src"],Ge={key:0,class:"preview"},_e=["src"];function De(e,t,c,a,n,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Be,[Object(o["createElementVNode"])("div",Ie,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.pictures,e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("a",{href:"javascript:;",class:Object(o["normalizeClass"])({active:a.currImage===e}),onClick:t=>a.currImage=e,key:e},[Object(o["createElementVNode"])("img",{src:e,alt:""},null,8,Se)],10,xe))),128))]),a.currImage?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Ge,[Object(o["createElementVNode"])("img",{src:a.currImage,alt:""},null,8,_e),Object(o["createElementVNode"])("i",{onClick:t[0]||(t[0]=e=>a.currImage=null),class:"iconfont icon-close-new"})])):Object(o["createCommentVNode"])("",!0)])}var we={name:"GoodsCommentImage",props:{pictures:{type:Array,default:()=>[]}},setup(){const e=Object(o["ref"])(null);return{currImage:e}}};c("0f74");const Pe=y()(we,[["render",De],["__scopeId","data-v-51fe29d7"]]);var Te=Pe,Le=c("c4c8"),Fe={name:"GoodsComment",components:{GoodsCommentImage:Te},setup(){const e=Object(o["ref"])(null),t=Object(o["inject"])("goods");Object(Le["a"])(t.value.id).then(t=>{t.result.tags.unshift({type:"img",title:"有图",tagCount:t.result.hasPictureCount}),t.result.tags.unshift({type:"all",title:"全部评价",tagCount:t.result.evaluateCount}),e.value=t.result});const c=Object(o["ref"])(0),a=t=>{c.value=t;const o=e.value.tags[t];"all"===o.type?(n.hasPicture=!1,n.tag=null):"img"===o.type?(n.hasPicture=!0,n.tag=null):(n.hasPicture=!1,n.tag=o.title),n.page=1},n=Object(o["reactive"])({page:1,pageSize:10,hasPicture:null,tag:null,sortField:null}),l=e=>{n.sortField=e,n.page=1},s=Object(o["ref"])([]),r=Object(o["ref"])(0);Object(o["watch"])(n,async()=>{const e=await Object(Le["b"])(t.value.id,n);s.value=e.result.items,r.value=e.result.counts},{immediate:!0});const d=e=>e.reduce((e,t)=>`${e} ${t.name}：${t.nameValue}`,"").trim(),i=e=>e.substr(0,1)+"****"+e.substr(-1),b=e=>{n.page=e};return{formatNickname:i,formatSpecs:d,changeSort:l,commentInfo:e,currTagIndex:c,changeTag:a,reqParams:n,commentList:s,changePager:b,total:r}}};c("6e95");const ze=y()(Fe,[["render",Ce],["__scopeId","data-v-473814a8"]]);var $e=ze,Xe={name:"GoodsTabs",components:{GoodsDetail:oe,GoodsComment:$e},setup(){const e=Object(o["ref"])("detail"),t=t=>{e.value=t},c=Object(o["inject"])("goods");return{activeName:e,clickTab:t,goods:c}}};c("9ae2");const qe=y()(Xe,[["render",J],["__scopeId","data-v-444998cd"]]);var Ae=qe;const Re={class:"goods-hot"},He={key:0};function Me(e,t,c,a,n,l){const s=Object(o["resolveComponent"])("GoodsItem");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Re,[Object(o["createElementVNode"])("h3",null,Object(o["toDisplayString"])(a.title),1),a.goodsList?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",He,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.goodsList,e=>(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:e.id,goods:e},null,8,["goods"]))),128))])):Object(o["createCommentVNode"])("",!0)])}var Ye=c("aed6"),Je={name:"GoodsHot",props:{type:{type:Number,default:1},goodsId:{type:String}},components:{GoodsItem:Ye["a"]},setup(e){const t={1:"24小时热销榜",2:"周热销榜",3:"总热销榜"},c=Object(o["computed"])(()=>t[e.type]),a=Object(o["ref"])([]);return Object(Le["d"])({id:e.goodsId,type:e.type}).then(e=>{a.value=e.result.map(e=>(e.tag=e.desc,e))}),{title:c,goodsList:a}}};c("6a1e");const We=y()(Je,[["render",Me],["__scopeId","data-v-9000ddcc"]]);var Ue=We;const Ke={class:"goods-warn"},Qe=Object(o["createStaticVNode"])('<h3 data-v-2d293123>注意事项</h3><p class="tit" data-v-2d293123>• 购买运费如何收取？</p><p data-v-2d293123> 单笔订单金额(不含运费)满88元免邮费；不满88元，每单收取10元运费。（港澳台地区需满500元免邮费；不满500元，每单收取30元运费) </p><br data-v-2d293123><p class="tit" data-v-2d293123>• 使用什么快递发货?</p><p data-v-2d293123>默认使用顺丰快递发货(个别商品使用其他快递）</p><p data-v-2d293123>配送范围覆盖全国大部分地区(港澳台地区除外）</p><br data-v-2d293123><p class="tit" data-v-2d293123>• 如何申请退货?</p><p data-v-2d293123> 1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账； </p><p data-v-2d293123>2.内裤和食品等特殊商品无质量问题不支持退货；</p><p data-v-2d293123> 3.退货流程： 确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成； </p><p data-v-2d293123> 4.因小兔鲜儿产生的退货，如质量问题，退货邮费由小兔鲜儿承担，退款完成后会以现金券的形式报销。因客户个人原因产生的退货，购买和寄回运费由客户个人承担。 </p>',13),Ze=[Qe];function et(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Ke,Ze)}c("270d");const tt={},ct=y()(tt,[["render",et],["__scopeId","data-v-2d293123"]]);var ot=ct,at=c("6605"),nt=c("2f59"),lt=c("5502"),st={name:"XtxGoodsPage",components:{GoodsWarn:ot,GoodsHot:Ue,GoodsRelevant:j["a"],GoodsImage:C,GoodsSales:D,GoodsName:H,GoodsSku:M["a"],GoodsTabs:Ae},setup(){const e=rt(),t=t=>{t.skuId?(e.value.price=t.price,e.value.oldPrice=t.oldPrice,e.value.inventory=t.inventory,a.value=t):a.value=null},c=Object(o["ref"])(1);Object(o["provide"])("goods",e);const a=Object(o["ref"])(null),n=Object(lt["b"])(),l=()=>{a.value||Object(nt["a"])({text:"请选择完整规格"}),c.value>e.inventory&&Object(nt["a"])({text:"库存不足"}),n.dispatch("cart/insertCart",{id:e.value.id,skuId:a.value.skuId,name:e.value.name,picture:e.value.mainPictures[0],price:a.value.price,nowPrice:a.value.price,count:c.value,attrsText:a.value.specsText,selected:!0,isEffective:!0,stock:a.value.inventory}).then(()=>{Object(nt["a"])({type:"success",text:"加入购物车成功"})})};return{goods:e,changeSku:t,num:c,insertCart:l}}};const rt=()=>{const e=Object(o["ref"])(null),t=Object(at["c"])();return Object(o["watch"])(()=>t.params.id,c=>{c&&"/product/"+c===t.path&&Object(Le["c"])(t.params.id).then(t=>{e.value=null,Object(o["nextTick"])(()=>{e.value=t.result})})},{immediate:!0}),e};c("b9d1");const dt=y()(st,[["render",m],["__scopeId","data-v-4c1a7895"]]);t["default"]=dt},"8e7a":function(e,t,c){"use strict";c("15c0")},"8f43":function(e,t,c){},"94af":function(e,t,c){},"94f9":function(e,t,c){},"99e5":function(e,t,c){},"9ae2":function(e,t,c){"use strict";c("94f9")},a6fc:function(e,t,c){"use strict";c("6b04")},aed6:function(e,t,c){"use strict";var o=c("7a23");const a=["src"],n={class:"name ellipsis"},l={class:"desc ellipsis"},s={class:"price"};function r(e,t,c,r,d,i){const b=Object(o["resolveComponent"])("RouterLink");return Object(o["openBlock"])(),Object(o["createBlock"])(b,{to:"/product/"+c.goods.id,class:"goods-item"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{src:c.goods.picture,alt:""},null,8,a),Object(o["createElementVNode"])("p",n,Object(o["toDisplayString"])(c.goods.name),1),Object(o["createElementVNode"])("p",l,Object(o["toDisplayString"])(c.goods.desc),1),Object(o["createElementVNode"])("p",s,"¥"+Object(o["toDisplayString"])(c.goods.price),1)]),_:1},8,["to"])}var d={name:"GoodsItem",props:{goods:{type:Object,default:()=>{}}}},i=(c("42d1"),c("6b0d")),b=c.n(i);const u=b()(d,[["render",r],["__scopeId","data-v-55571ba8"]]);t["a"]=u},b9d1:function(e,t,c){"use strict";c("06fa")},c4c8:function(e,t,c){"use strict";c.d(t,"c",(function(){return a})),c.d(t,"e",(function(){return n})),c.d(t,"d",(function(){return l})),c.d(t,"a",(function(){return s})),c.d(t,"b",(function(){return r})),c.d(t,"f",(function(){return d}));var o=c("b775");const a=e=>Object(o["b"])("/goods","get",{id:e}),n=(e,t=16)=>Object(o["b"])("/goods/relevant","get",{id:e,limit:t}),l=({id:e,type:t,limit:c=3})=>Object(o["b"])("/goods/hot","get",{id:e,type:t,limit:c}),s=e=>Object(o["b"])(`https://mock.boxuegu.com/mock/1175/goods/${e}/evaluate`,"get"),r=(e,t)=>Object(o["b"])(`https://mock.boxuegu.com/mock/1175/goods/${e}/evaluate/page`,"get",t),d=e=>Object(o["b"])("/goods/sku/"+e,"get")},f6d1:function(e,t,c){"use strict";var o=c("7a23");const a={class:"goods-sku"},n=["onClick","src","title"],l=["onClick"];function s(e,t,c,s,r,d){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.goods.specs,e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("dl",{key:e.id},[Object(o["createElementVNode"])("dt",null,Object(o["toDisplayString"])(e.name),1),Object(o["createElementVNode"])("dd",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.values,t=>(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:t.name},[t.picture?(Object(o["openBlock"])(),Object(o["createElementBlock"])("img",{key:0,class:Object(o["normalizeClass"])({selected:t.selected,disabled:t.disabled}),onClick:c=>s.clickSpecs(e,t),src:t.picture,title:t.name},null,10,n)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{key:1,class:Object(o["normalizeClass"])({selected:t.selected,disabled:t.disabled}),onClick:c=>s.clickSpecs(e,t)},Object(o["toDisplayString"])(t.name),11,l))],64))),128))])]))),128))])}c("14d9"),c("13d5");function r(e){const t=[],c=2**e.length;for(let o=0;o<c;o+=1){const c=[];for(let t=0;t<e.length;t+=1)o&1<<t&&c.push(e[t]);t.push(c)}return t}const d="★",i=e=>{const t={};return e.forEach(e=>{if(e.inventory){const c=e.specs.map(e=>e.valueName),o=r(c);o.forEach(c=>{const o=c.join(d);t[o]?t[o].push(e.id):t[o]=[e.id]})}}),t},b=e=>{const t=[];return e.forEach(e=>{const c=e.values.find(e=>e.selected);t.push(c?c.name:void 0)}),t},u=(e,t)=>{e.forEach((c,o)=>{const a=b(e);c.values.forEach(e=>{if(e.name===a[o])return!1;a[o]=e.name;const c=a.filter(e=>e).join(d);e.disabled=!t[c]})})},m=(e,t)=>{const c=e.skus.find(e=>e.id===t);c&&e.specs.forEach((e,t)=>{const o=c.specs[t].valueName;e.values.forEach(e=>{e.selected=e.name===o})})};var j={name:"GoodsSku",props:{goods:{type:Object,default:()=>({space:[],skus:[]})},skuId:{type:String,default:""}},setup(e,{emit:t}){const c=i(e.goods.skus);e.skuId&&m(e.goods,e.skuId),u(e.goods.specs,c);const o=(o,a)=>{if(a.disabled)return!1;a.selected?a.selected=!1:(o.values.forEach(e=>{e.selected=!1}),a.selected=!0),u(e.goods.specs,c);const n=b(e.goods.specs).filter(e=>e);if(n.length===e.goods.specs.length){const o=c[n.join(d)],a=e.goods.skus.find(e=>e.id===o[0]);t("change",{skuId:a.id,price:a.price,oldPrice:a.oldPrice,inventory:a.inventory,specsText:a.specs.reduce((e,t)=>`${e} ${t.name}:${t.valueName}`,"").replace(" ","")})}else t("change",{})};return{clickSpecs:o}}},p=(c("4d0f"),c("6b0d")),O=c.n(p);const g=O()(j,[["render",s],["__scopeId","data-v-f8f8fb88"]]);t["a"]=g}}]);
//# sourceMappingURL=chunk-3712c0c0.b277feea.js.map
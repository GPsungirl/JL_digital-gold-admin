(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99835d2a"],{1169:function(e,t,r){var i=r("2d95");e.exports=Array.isArray||function(e){return"Array"==i(e)}},1950:function(e,t,r){},"37c8":function(e,t,r){t.f=r("2b4c")},"386d":function(e,t,r){"use strict";var i=r("cb7c"),n=r("83a1"),a=r("5f1b");r("214f")("search",1,function(e,t,r,o){return[function(r){var i=e(this),n=void 0==r?void 0:r[t];return void 0!==n?n.call(r,i):new RegExp(r)[t](String(i))},function(e){var t=o(r,e,this);if(t.done)return t.value;var s=i(e),c=String(this),l=s.lastIndex;n(l,0)||(s.lastIndex=0);var u=a(s,c);return n(s.lastIndex,l)||(s.lastIndex=l),null===u?-1:u.index}]})},"3a72":function(e,t,r){var i=r("7726"),n=r("8378"),a=r("2d00"),o=r("37c8"),s=r("86cc").f;e.exports=function(e){var t=n.Symbol||(n.Symbol=a?{}:i.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:o.f(e)})}},"67ab":function(e,t,r){var i=r("ca5a")("meta"),n=r("d3f4"),a=r("69a8"),o=r("86cc").f,s=0,c=Object.isExtensible||function(){return!0},l=!r("79e5")(function(){return c(Object.preventExtensions({}))}),u=function(e){o(e,i,{value:{i:"O"+ ++s,w:{}}})},d=function(e,t){if(!n(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,i)){if(!c(e))return"F";if(!t)return"E";u(e)}return e[i].i},m=function(e,t){if(!a(e,i)){if(!c(e))return!0;if(!t)return!1;u(e)}return e[i].w},f=function(e){return l&&p.NEED&&c(e)&&!a(e,i)&&u(e),e},p=e.exports={KEY:i,NEED:!1,fastKey:d,getWeak:m,onFreeze:f}},"7bbc":function(e,t,r){var i=r("6821"),n=r("9093").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return n(e)}catch(t){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==a.call(e)?s(e):n(i(e))}},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"8a81":function(e,t,r){"use strict";var i=r("7726"),n=r("69a8"),a=r("9e1e"),o=r("5ca1"),s=r("2aba"),c=r("67ab").KEY,l=r("79e5"),u=r("5537"),d=r("7f20"),m=r("ca5a"),f=r("2b4c"),p=r("37c8"),_=r("3a72"),h=r("d4c0"),g=r("1169"),y=r("cb7c"),v=r("d3f4"),b=r("4bf8"),w=r("6821"),I=r("6a99"),k=r("4630"),F=r("2aeb"),x=r("7bbc"),S=r("11e9"),D=r("2621"),M=r("86cc"),T=r("0d58"),G=S.f,q=M.f,O=x.f,C=i.Symbol,P=i.JSON,$=P&&P.stringify,N="prototype",E=f("_hidden"),j=f("toPrimitive"),L={}.propertyIsEnumerable,z=u("symbol-registry"),A=u("symbols"),J=u("op-symbols"),U=Object[N],V="function"==typeof C&&!!D.f,K=i.QObject,W=!K||!K[N]||!K[N].findChild,R=a&&l(function(){return 7!=F(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a})?function(e,t,r){var i=G(U,t);i&&delete U[t],q(e,t,r),i&&e!==U&&q(U,t,i)}:q,Y=function(e){var t=A[e]=F(C[N]);return t._k=e,t},Q=V&&"symbol"==typeof C.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof C},B=function(e,t,r){return e===U&&B(J,t,r),y(e),t=I(t,!0),y(r),n(A,t)?(r.enumerable?(n(e,E)&&e[E][t]&&(e[E][t]=!1),r=F(r,{enumerable:k(0,!1)})):(n(e,E)||q(e,E,k(1,{})),e[E][t]=!0),R(e,t,r)):q(e,t,r)},H=function(e,t){y(e);var r,i=h(t=w(t)),n=0,a=i.length;while(a>n)B(e,r=i[n++],t[r]);return e},X=function(e,t){return void 0===t?F(e):H(F(e),t)},Z=function(e){var t=L.call(this,e=I(e,!0));return!(this===U&&n(A,e)&&!n(J,e))&&(!(t||!n(this,e)||!n(A,e)||n(this,E)&&this[E][e])||t)},ee=function(e,t){if(e=w(e),t=I(t,!0),e!==U||!n(A,t)||n(J,t)){var r=G(e,t);return!r||!n(A,t)||n(e,E)&&e[E][t]||(r.enumerable=!0),r}},te=function(e){var t,r=O(w(e)),i=[],a=0;while(r.length>a)n(A,t=r[a++])||t==E||t==c||i.push(t);return i},re=function(e){var t,r=e===U,i=O(r?J:w(e)),a=[],o=0;while(i.length>o)!n(A,t=i[o++])||r&&!n(U,t)||a.push(A[t]);return a};V||(C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");var e=m(arguments.length>0?arguments[0]:void 0),t=function(r){this===U&&t.call(J,r),n(this,E)&&n(this[E],e)&&(this[E][e]=!1),R(this,e,k(1,r))};return a&&W&&R(U,e,{configurable:!0,set:t}),Y(e)},s(C[N],"toString",function(){return this._k}),S.f=ee,M.f=B,r("9093").f=x.f=te,r("52a7").f=Z,D.f=re,a&&!r("2d00")&&s(U,"propertyIsEnumerable",Z,!0),p.f=function(e){return Y(f(e))}),o(o.G+o.W+o.F*!V,{Symbol:C});for(var ie="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;ie.length>ne;)f(ie[ne++]);for(var ae=T(f.store),oe=0;ae.length>oe;)_(ae[oe++]);o(o.S+o.F*!V,"Symbol",{for:function(e){return n(z,e+="")?z[e]:z[e]=C(e)},keyFor:function(e){if(!Q(e))throw TypeError(e+" is not a symbol!");for(var t in z)if(z[t]===e)return t},useSetter:function(){W=!0},useSimple:function(){W=!1}}),o(o.S+o.F*!V,"Object",{create:X,defineProperty:B,defineProperties:H,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:re});var se=l(function(){D.f(1)});o(o.S+o.F*se,"Object",{getOwnPropertySymbols:function(e){return D.f(b(e))}}),P&&o(o.S+o.F*(!V||l(function(){var e=C();return"[null]"!=$([e])||"{}"!=$({a:e})||"{}"!=$(Object(e))})),"JSON",{stringify:function(e){var t,r,i=[e],n=1;while(arguments.length>n)i.push(arguments[n++]);if(r=t=i[1],(v(t)||void 0!==e)&&!Q(e))return g(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!Q(t))return t}),i[1]=t,$.apply(P,i)}}),C[N][j]||r("32e9")(C[N],j,C[N].valueOf),d(C,"Symbol"),d(Math,"Math",!0),d(i.JSON,"JSON",!0)},a5f3:function(e,t,r){"use strict";var i=r("1950"),n=r.n(i);n.a},ac4d:function(e,t,r){r("3a72")("asyncIterator")},b3c7:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pad_5"},[r("div",{staticClass:"query_fields pad_b_no"},[r("el-form",{ref:"queryForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.queryForm,size:"mini"}},[r("el-form-item",{attrs:{label:"发送时间",prop:"allTime"}},[r("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:e.queryForm.allTime,callback:function(t){e.$set(e.queryForm,"allTime",t)},expression:"queryForm.allTime"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"发送人",prop:"realName"}},[r("el-input",{staticClass:"wid_140",attrs:{placeholder:"请输入发送人"},model:{value:e.queryForm.realName,callback:function(t){e.$set(e.queryForm,"realName",t)},expression:"queryForm.realName"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.queryData}},[e._v("查询")]),e._v(" "),r("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(t){return e.resetData("queryForm")}}},[e._v("重置")]),e._v(" "),r("el-button",{attrs:{type:"warning",size:"mini"},on:{click:e.handle_addIM}},[e._v("新增推送")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.handle_refresh}},[e._v("刷新")])],1)],1)],1),e._v(" "),r("div",[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[r("el-table-column",{attrs:{prop:"title",label:"消息标题",width:""}}),e._v(" "),r("el-table-column",{attrs:{prop:"content",label:"消息内容",width:""}}),e._v(" "),r("el-table-column",{attrs:{prop:"realName",label:"发送人",width:""}}),e._v(" "),r("el-table-column",{attrs:{prop:"insert_date",label:"发送日期",width:""}}),e._v(" "),r("el-table-column",{attrs:{prop:"",label:"群体",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return["1"==t.row.push_type?r("span",[e._v("用户")]):"2"==t.row.push_type?r("span",[e._v("地区用户")]):"3"==t.row.push_type?r("span",[e._v("全体向导")]):"4"==t.row.push_type?r("span",[e._v("地区向导")]):e._e()]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"",label:"备注","show-overflow-tooltip":!0,width:""},scopedSlots:e._u([{key:"default",fn:function(t){return["1"==t.row.push_type?r("span",[e._v("\n             "+e._s(t.row.customid)+"\n           ")]):"2"==t.row.push_type?r("span",[e._v("\n            "+e._s(t.row.province+t.row.city)+"\n          ")]):"3"==t.row.push_type?r("span"):"4"==t.row.push_type?r("span",[e._v("\n             "+e._s(t.row.province+t.row.city)+"\n          ")]):e._e()]}}])})],1),e._v(" "),r("div",{staticClass:"block mar_t10"},[r("el-pagination",{attrs:{"current-page":e.currentPage,total:e.pageTotal,background:"",layout:"total, prev, pager, next, jumper"},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),r("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.add_loading,expression:"add_loading"}],attrs:{title:"消息推送",visible:e.add_dialogVisible,top:"8vh",center:"","close-on-click-modal":!1,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"update:visible":function(t){e.add_dialogVisible=t}}},[r("el-form",{ref:"IMForm",staticClass:"demo-IMForm",attrs:{model:e.IMForm,rules:e.IMForm_rules,"label-width":"100px",size:"small"}},[r("el-form-item",{attrs:{label:"消息标题",prop:"title"}},[r("el-input",{model:{value:e.IMForm.title,callback:function(t){e.$set(e.IMForm,"title",t)},expression:"IMForm.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"消息内容",prop:"content"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.IMForm.content,callback:function(t){e.$set(e.IMForm,"content",t)},expression:"IMForm.content"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"消息群体",prop:"target"}},[r("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.target,callback:function(t){e.target=t},expression:"target"}},[r("el-tab-pane",{attrs:{label:"用户ID",name:"1"}},[r("el-form",[r("el-form-item",[e._l(e.userID_form.dynamic_users,function(t,i){return r("div",{key:t.key,staticClass:"input_itemgroup"},[0!=i?r("el-button",{staticClass:"my_icon",attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(r){return e.delInput(t,i)}}}):e._e(),e._v(" "),r("el-input",{staticClass:"id_input",attrs:{clearable:"",placeholder:"输入用户ID"},model:{value:e.userID_form.dynamic_users[i].userid,callback:function(t){e.$set(e.userID_form.dynamic_users[i],"userid",t)},expression:"userID_form.dynamic_users[index].userid"}})],1)}),e._v(" "),r("el-button",{staticClass:"userid_addicon",attrs:{size:"mini",type:"primary",icon:"el-icon-plus",circle:""},on:{click:e.addInput}})],2)],1)],1),e._v(" "),r("el-tab-pane",{attrs:{label:"地区用户",name:"2"}},[r("el-form",[r("el-form-item",{attrs:{label:""}},[r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{prop:"province_code"}},[r("el-select",{staticClass:"wid_140",attrs:{placeholder:"选择省"},on:{change:function(t){return e.changeOption_province(t,e.region_form)}},model:{value:e.region_form.province_code,callback:function(t){e.$set(e.region_form,"province_code",t)},expression:"region_form.province_code"}},e._l(e.region_form.regions,function(e,t){return r("el-option",{key:t,attrs:{label:e.province,value:e.adcode}})}),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"city_code"}},[r("el-select",{staticClass:"wid_140",attrs:{placeholder:"选择市"},on:{change:function(t){return e.changeOption_city(t,e.region_form)}},model:{value:e.region_form.city_code,callback:function(t){e.$set(e.region_form,"city_code",t)},expression:"region_form.city_code"}},e._l(e.region_form.cities,function(e,t){return r("el-option",{key:t,attrs:{label:e.city,value:e.adcode}})}),1)],1)],1)],1)],1)],1),e._v(" "),r("el-tab-pane",{attrs:{label:"全体向导",name:"3"}},[e._v("全体向导")]),e._v(" "),r("el-tab-pane",{attrs:{label:"地区向导",name:"4"}},[r("el-form",[r("el-form-item",{attrs:{label:""}},[r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{prop:"province_code"}},[r("el-select",{staticClass:"wid_140",attrs:{placeholder:"选择省"},on:{change:function(t){return e.changeOption_province(t,e.regionGuider_form)}},model:{value:e.regionGuider_form.province_code,callback:function(t){e.$set(e.regionGuider_form,"province_code",t)},expression:"regionGuider_form.province_code"}},e._l(e.regionGuider_form.regions,function(e,t){return r("el-option",{key:t,attrs:{label:e.province,value:e.adcode}})}),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"city_code"}},[r("el-select",{staticClass:"wid_140",attrs:{placeholder:"选择市"},on:{change:function(t){return e.changeOption_city(t,e.regionGuider_form)}},model:{value:e.regionGuider_form.city_code,callback:function(t){e.$set(e.regionGuider_form,"city_code",t)},expression:"regionGuider_form.city_code"}},e._l(e.regionGuider_form.cities,function(e,t){return r("el-option",{key:t,attrs:{label:e.city,value:e.adcode}})}),1)],1)],1)],1)],1)],1)],1)],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"mini"},on:{click:function(t){e.add_dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.submitForm("IMForm")}}},[e._v("推 送")])],1)],1)],1)},n=[],a=(r("7f7f"),r("ac4d"),r("8a81"),r("386d"),r("ac6a"),r("ff82")),o=r("cf45"),s={name:"IMpush",data:function(){return{roleId:"",add_dialogVisible:!1,add_loading:!1,tableLoading:!1,tableData:[],pageTotal:0,currentPage:1,queryForm:{allTime:"",startTime:"",endTime:"",realName:""},IMForm:{title:"",content:""},target:"1",IMForm_rules:{title:[{required:!0,message:"请输入消息标题",trigger:"blur"}],content:[{required:!0,message:"请输入消息内容",trigger:"blur"}]},userID_form:{dynamic_users:[{userid:"",key:Date.now()}]},region_form:{regions:"",cities:[],province_code:"",city_code:"",province_param:"",city_param:""},allGuider_form:{isAllGuider:!1},regionGuider_form:{regions:"",cities:[],province_code:"",city_code:"",province_param:"",city_param:""}}},watch:{target:function(e,t){this.allGuider_form.isAllGuider="3"===e}},created:function(){this.roleId=this.$store.getters.roleId,this.initMap(),this.initProvinces(),this.getTableDataList(1)},methods:{getTableDataList:function(e){var t=this,r={data:{signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId,pageNum:e,pageSize:10,realName:this.queryForm.realName,startTime:this.queryForm.startTime,endTime:this.queryForm.endTime}};this.tableLoading=!0,this.$http.post("".concat(o["a"].baseUrl,"//systemPush/getSystemPushList"),r).then(function(e){"0000"==e.data.code&&(t.tableData=e.data.data.systemPushLsit,t.pageTotal=e.data.data.page.pageTotal,t.tableLoading=!1)}).catch(function(e){})},queryData:function(){this.queryForm.allTime.length>0?(this.queryForm.startTime=this.queryForm.allTime[0],this.queryForm.endTime=this.queryForm.allTime[1]):(this.queryForm.startTime="",this.queryForm.endTime=""),this.getTableDataList(1),this.currentPage=1},handle_refresh:function(){this.getTableDataList(this.currentPage)},handle_addIM:function(){this.add_dialogVisible=!0,this.add_loading=!0,this.resetForm("IMForm"),this.resetMessageGroup(),this.add_loading=!1},submitForm:function(e){var t,r=this;this.valid_IMform(e)&&this.valid_tabs(this.target)&&(t=this.modify_param(this.target),this.add_loading=!0,this.$http.post("".concat(o["a"].baseUrl,"/systemPush/saveSystemPush"),t).then(function(e){"0000"==e.data.code?(r.add_loading=!1,r.add_dialogVisible=!1,r.m_message(e.data.msg,"success"),r.handle_refresh()):(r.add_loading=!1,r.m_message(e.data.msg,"warning"))}).catch(function(e){}))},handleClick:function(e,t){},addInput:function(){this.userID_form.dynamic_users.push({userid:"",key:Date.now()})},delInput:function(e,t){var r;this.userID_form.dynamic_users.map(function(t,i){t.key==e.key&&(r=i)}),this.userID_form.dynamic_users.splice(r,1)},resetData:function(e){this.$refs[e].resetFields(),this.queryForm.startTime="",this.queryForm.endTime=""},resetForm:function(e){this.$refs[e]&&this.$refs[e].resetFields()},resetMessageGroup:function(){this.userID_form.dynamic_users.length>1?(this.userID_form.dynamic_users=this.userID_form.dynamic_users.splice(0,1),this.userID_form.dynamic_users[0].userid=""):this.userID_form.dynamic_users[0].userid="",this.region_form.province_code="",this.region_form.city_code="",this.allGuider_form.isAllGuider=!1,this.regionGuider_form.province_code="",this.regionGuider_form.city_code=""},valid_IMform:function(e){var t;return this.$refs[e].validate(function(e){t=e}),t},valid_tabs:function(e){var t,r="";switch(e){case"1":this.userID_form.dynamic_users.forEach(function(e){e.userid?t=!0:(t=!1,r="请输入用户ID")});break;case"2":this.region_form.province_code&&this.region_form.city_code?t=!0:(t=!1,r="请选择用户地区");break;case"3":t=!!this.allGuider_form.isAllGuider;break;case"4":this.regionGuider_form.province_code&&this.regionGuider_form.city_code?t=!0:(t=!1,r="请选择向导地区");break}if(t)return!0;this.m_message(r,"error")},modify_param:function(e){var t={data:{signInUserId:this.$store.getters.userId,title:this.IMForm.title,content:this.IMForm.content,push_type:this.target}};switch(e){case"1":var r=this.collectUserId();t.data.customid=r;break;case"2":t.data.province=this.region_form.province_param.txt,t.data.province_code=this.region_form.province_param.adcode,t.data.city=this.region_form.city_param.txt,t.data.city_code=this.region_form.city_param.adcode;break;case"3":break;case"4":t.data.province=this.regionGuider_form.province_param.txt,t.data.province_code=this.regionGuider_form.province_param.adcode,t.data.city=this.regionGuider_form.city_param.txt,t.data.city_code=this.regionGuider_form.city_param.adcode;break}return t},collectUserId:function(){var e=[];this.userID_form.dynamic_users.forEach(function(t){e.push(t.userid)});var t=e.join(",");return t},handleCurrentChange:function(e){this.currentPage=e,this.getTableDataList(e)},changeOption_province:function(e,t){t.province_param={adcode:e,txt:a["a"].province_list[e]},t.cities=[],t.city_code="",this.queryCity(a["a"].province_list[e],t)},changeOption_city:function(e,t){t.cities.forEach(function(r,i){e===r.adcode&&(t.city_param={adcode:e,txt:r.city})})},queryCity:function(e,t){this.districtSearch.search(e,function(e,r){var i=!0,n=!1,a=void 0;try{for(var o,s=r.districtList[0].districtList[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var c=o.value;t.cities.push({adcode:c.adcode,city:c.name})}}catch(l){n=!0,a=l}finally{try{i||null==s.return||s.return()}finally{if(n)throw a}}})},initMap:function(){var e=this;AMap.plugin("AMap.DistrictSearch",function(){e.districtSearch=new AMap.DistrictSearch({level:"city",subdistrict:1})})},initProvinces:function(){var e=[];for(var t in a["a"].province_list)e.push({adcode:t,province:a["a"].province_list[t]});this.region_form.regions=e,this.regionGuider_form.regions=e},m_message:function(e,t){this.$message({message:e,type:t})}}},c=s,l=(r("a5f3"),r("2877")),u=Object(l["a"])(c,i,n,!1,null,null,null);t["default"]=u.exports},d4c0:function(e,t,r){var i=r("0d58"),n=r("2621"),a=r("52a7");e.exports=function(e){var t=i(e),r=n.f;if(r){var o,s=r(e),c=a.f,l=0;while(s.length>l)c.call(e,o=s[l++])&&t.push(o)}return t}},ff82:function(e,t,r){"use strict";t["a"]={province_list:{11e4:"北京市",12e4:"天津市",13e4:"河北省",14e4:"山西省",15e4:"内蒙古自治区",21e4:"辽宁省",22e4:"吉林省",23e4:"黑龙江省",31e4:"上海市",32e4:"江苏省",33e4:"浙江省",34e4:"安徽省",35e4:"福建省",36e4:"江西省",37e4:"山东省",41e4:"河南省",42e4:"湖北省",43e4:"湖南省",44e4:"广东省",45e4:"广西壮族自治区",46e4:"海南省",5e5:"重庆市",51e4:"四川省",52e4:"贵州省",53e4:"云南省",54e4:"西藏自治区",61e4:"陕西省",62e4:"甘肃省",63e4:"青海省",64e4:"宁夏回族自治区",65e4:"新疆维吾尔自治区",71e4:"台湾省",81e4:"香港特别行政区",82e4:"澳门特别行政区"},adcode_list:{"上海市":"310000","云南省":"530000","内蒙古自治区":"150000","北京市":"110000","台湾省":"710000","吉林省":"220000","四川省":"510000","天津市":"120000","宁夏回族自治区":"640000","安徽省":"340000","山东省":"370000","山西省":"140000","广东省":"440000","广西壮族自治区":"450000","新疆维吾尔自治区":"650000","江苏省":"320000","江西省":"360000","河北省":"130000","河南省":"410000","浙江省":"330000","海南省":"460000","湖北省":"420000","湖南省":"430000","澳门特别行政区":"820000","甘肃省":"620000","福建省":"350000","西藏自治区":"540000","贵州省":"520000","辽宁省":"210000","重庆市":"500000","陕西省":"610000","青海省":"630000","香港特别行政区":"810000","黑龙江省":"230000"}}}}]);
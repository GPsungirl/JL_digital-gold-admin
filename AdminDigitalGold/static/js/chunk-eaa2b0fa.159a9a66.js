(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eaa2b0fa"],{"90cf":function(e,t,r){"use strict";var a=r("ba23"),i=r.n(a);i.a},ba23:function(e,t,r){},fedf:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pad_5"},[r("div",{staticClass:"query_fields pad_b_no"},[r("el-form",{ref:"queryForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.queryForm,size:"mini","label-width":"68px"}},[r("el-form-item",{attrs:{label:"用户姓名",prop:"username"}},[r("el-input",{staticClass:"wid_140",attrs:{placeholder:"姓名"},model:{value:e.queryForm.username,callback:function(t){e.$set(e.queryForm,"username",t)},expression:"queryForm.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[r("el-input",{staticClass:"wid_140",attrs:{placeholder:"手机号"},model:{value:e.queryForm.phone,callback:function(t){e.$set(e.queryForm,"phone",t)},expression:"queryForm.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"创建时间",prop:"createtime"}},[r("el-date-picker",{staticClass:"wid_140",attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"开始日期","picker-options":e.pickerOptions_register1},model:{value:e.queryForm.startTime,callback:function(t){e.$set(e.queryForm,"startTime",t)},expression:"queryForm.startTime"}}),e._v(" "),r("el-date-picker",{staticClass:"wid_140",attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"结束日期","picker-options":e.pickerOptions_register2},model:{value:e.queryForm.endTime,callback:function(t){e.$set(e.queryForm,"endTime",t)},expression:"queryForm.endTime"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"购买数量"}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"startNum"}},[r("el-input",{staticStyle:{width:"70px"},attrs:{placeholder:"最小数量"},model:{value:e.queryForm.startNum,callback:function(t){e.$set(e.queryForm,"startNum",e._n(t))},expression:"queryForm.startNum"}}),e._v("-\n            ")],1),e._v(" "),r("el-form-item",{attrs:{prop:"endNum"}},[r("el-input",{staticStyle:{width:"70px"},attrs:{placeholder:"最大数量"},model:{value:e.queryForm.endNum,callback:function(t){e.$set(e.queryForm,"endNum",e._n(t))},expression:"queryForm.endNum"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"订单状态",prop:"pay_status"}},[r("el-select",{staticClass:"wid_140",attrs:{placeholder:"请选择订单状态"},model:{value:e.queryForm.pay_status,callback:function(t){e.$set(e.queryForm,"pay_status",t)},expression:"queryForm.pay_status"}},e._l(e.queryForm.pay_statuss,function(e,t){return r("el-option",{key:t,attrs:{label:e.value,value:e.id}})}),1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.queryData}},[e._v("查询")]),e._v(" "),r("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(t){return e.resetData("queryForm")}}},[e._v("重置")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.handle_refresh}},[e._v("刷新")])],1)],1)],1),e._v(" "),r("div",[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{"row-class-name":e.tableRowClassName,data:e.tableData,border:""}},[r("el-table-column",{attrs:{prop:"username",label:"姓名",width:"70"}}),e._v(" "),r("el-table-column",{attrs:{prop:"phone",label:"手机号",width:""}}),e._v(" "),r("el-table-column",{attrs:{prop:"account_no",label:"数字钱包",width:"","show-overflow-tooltip":!0}}),e._v(" "),r("el-table-column",{attrs:{prop:"createtime",label:"创建时间","show-overflow-tooltip":!0,width:"110"}}),e._v(" "),r("el-table-column",{attrs:{prop:"digit_num",label:"购买数量","show-overflow-tooltip":!0,width:""}}),e._v(" "),r("el-table-column",{attrs:{prop:"",label:"单价(元)","show-overflow-tooltip":!0,width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.single_price/100))])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"",label:"总金额(元)","show-overflow-tooltip":!0,width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.total_amount/100))])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"",label:"交易方式",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.pass_type?r("span",[e._v("穿透")]):r("span",[e._v("库存")])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"",label:"状态",width:"260"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.pay_status?r("span",[e._v("已付款")]):e._e(),e._v(" "),0==t.row.amount_status?r("span",[e._v("未放币")]):e._e(),e._v(" "),1==t.row.amount_status?r("span",[e._v("已放币")]):e._e(),e._v(" "),0==t.row.pre_amount_status?r("span",[e._v("未返")]):e._e(),e._v(" "),1==t.row.pre_amount_status?r("span",[e._v("已返")]):e._e(),e._v(" "),1==t.row.deal_status?r("span",[e._v("未终止")]):r("span",[e._v("已终止")]),e._v(" "),0==t.row.order_status?r("span",[e._v("不可用")]):e._e(),e._v(" "),1==t.row.order_status?r("span",[e._v("可用")]):e._e(),e._v(" "),2==t.row.order_status?r("span",[e._v("交易失败")]):e._e(),e._v(" "),3==t.row.order_status?r("span",[e._v("交易超时")]):e._e()]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"",label:"操作",width:"240"},scopedSlots:e._u([{key:"default",fn:function(t){return[2==t.row.order_status?r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.handle_viewFail(t.row)}}},[e._v("查看失败")]):r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.handle_fail(t.row)}}},[e._v("交易失败")]),e._v(" "),0==t.row.amount_status&&2!=t.row.order_status?r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.handle_store(t.row)}}},[e._v("放币")]):e._e(),e._v(" "),0==t.row.pre_amount_status&&2!=t.row.order_status?r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.handle_returnM(t.row)}}},[e._v("返预付")]):e._e(),e._v(" "),0!=t.row.pre_amount_status&&2!=t.row.order_status?r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.handle_viewRM(t.row)}}},[e._v("查看返预付")]):e._e(),e._v(" "),1==t.row.deal_status&&2!=t.row.order_status?r("el-button",{directives:[{name:"show",rawName:"v-show",value:1!=t.row.amount_status||1!=t.row.pre_amount_status,expression:"scope.row.amount_status != 1 || scope.row.pre_amount_status !=1"}],attrs:{type:"text",size:"small"},on:{click:function(r){return e.handle_break(t.row)}}},[e._v("终止")]):e._e(),e._v(" "),1!=t.row.deal_status&&2!=t.row.order_status?r("el-button",{directives:[{name:"show",rawName:"v-show",value:1!=t.row.amount_status||1!=t.row.pre_amount_status,expression:"scope.row.amount_status != 1 || scope.row.pre_amount_status !=1"}],attrs:{type:"text",size:"small"},on:{click:function(r){return e.handle_viewBR(t.row)}}},[e._v("终止原因")]):e._e(),e._v(" "),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.handle_detail(t.row)}}},[e._v("详情")])]}}])})],1),e._v(" "),r("div",{staticClass:"block mar_t10"},[r("el-pagination",{attrs:{"current-page":e.currentPage,total:e.pageTotal,background:"",layout:"total, prev, pager, next, jumper"},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),r("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.break_loading,expression:"break_loading"}],attrs:{title:"终止交易",visible:e.break_dialogVisible,width:"30%",center:"","close-on-click-modal":!1,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"update:visible":function(t){e.break_dialogVisible=t}}},[r("el-form",{ref:"break_form",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.break_form,rules:e.break_form_rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"终止原因",prop:"terminate_reason"}},[r("el-input",{attrs:{type:"textarea",disabled:!e.break_form.showBreakR},model:{value:e.break_form.terminate_reason,callback:function(t){e.$set(e.break_form,"terminate_reason",t)},expression:"break_form.terminate_reason"}})],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"mini"},on:{click:function(t){e.break_dialogVisible=!1}}},[e._v("关 闭")]),e._v(" "),e.break_form.showBreakR?r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.break_resolve}},[e._v("确 定")]):e._e()],1)],1),e._v(" "),r("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.fail_loading,expression:"fail_loading"}],attrs:{title:"交易失败",visible:e.fail_dialogVisible,width:"30%",center:"","close-on-click-modal":!1,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"update:visible":function(t){e.fail_dialogVisible=t}}},[r("el-form",{ref:"fail_form",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.fail_form,rules:e.fail_form_rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"失败原因",prop:"failed_reason"}},[r("el-input",{attrs:{type:"textarea",disabled:!e.fail_form.showFailR},model:{value:e.fail_form.failed_reason,callback:function(t){e.$set(e.fail_form,"failed_reason",t)},expression:"fail_form.failed_reason"}})],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"mini"},on:{click:function(t){e.fail_dialogVisible=!1}}},[e._v("关 闭")]),e._v(" "),e.fail_form.showFailR?r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.fail_resolve}},[e._v("确 定")]):e._e()],1)],1),e._v(" "),r("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.return_loading,expression:"return_loading"}],staticClass:"return_label",attrs:{title:"返预付",visible:e.return_dialogVisible,width:"30%",center:"","close-on-click-modal":!1,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"update:visible":function(t){e.return_dialogVisible=t}}},[r("el-form",{ref:"return_form",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.return_form,rules:e.return_form_rules,"label-width":"120px"}},[r("p",[r("span",[e._v("买入交易单价")]),r("span",[e._v(e._s(e.return_form.pre_total_price/100))]),e._v("元")]),e._v(" "),r("el-form-item",{attrs:{label:"实际交易单价",prop:"deal_single_price"}},[r("el-input",{staticClass:"wid_140",attrs:{disabled:!e.return_form.showReturnR,placeholder:"实际交易单价"},model:{value:e.return_form.deal_single_price,callback:function(t){e.$set(e.return_form,"deal_single_price",t)},expression:"return_form.deal_single_price"}}),e._v(" "),r("span",[e._v(" 元")])],1),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.tipError,expression:"tipError"}],staticClass:"tipError"},[e._v("当前交易单价超出预付费金额")]),e._v(" "),r("el-form-item",{attrs:{label:"返预付费价格",prop:"deal_pre_total_price"}},[r("el-input",{staticClass:"wid_140",attrs:{disabled:!0},model:{value:e.deal_pre_total_price,callback:function(t){e.deal_pre_total_price=t},expression:"deal_pre_total_price"}}),e._v(" "),r("span",[e._v(" 元")])],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"mini"},on:{click:function(t){e.return_dialogVisible=!1}}},[e._v("关 闭")]),e._v(" "),e.return_form.showReturnR?r("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.tipError,expression:"!tipError"}],attrs:{type:"primary",size:"mini"},on:{click:e.return_resolve}},[e._v("确 定")]):e._e()],1)],1),e._v(" "),r("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.detail_loading,expression:"detail_loading"}],staticClass:"agent_detail",attrs:{title:"买入详情",visible:e.detail_dialogVisible,width:"",center:"","close-on-click-modal":!1,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"update:visible":function(t){e.detail_dialogVisible=t}}},[r("el-form",{ref:"detail_form",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.detail_form,"label-width":"68px",disabled:""}},[r("el-form-item",{attrs:{label:"姓名",prop:"username"}},[r("el-input",{staticClass:"wid_180",attrs:{placeholder:""},model:{value:e.detail_form.username,callback:function(t){e.$set(e.detail_form,"username",t)},expression:"detail_form.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[r("el-input",{staticClass:"wid_180",attrs:{placeholder:""},model:{value:e.detail_form.phone,callback:function(t){e.$set(e.detail_form,"phone",t)},expression:"detail_form.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"数字钱包",prop:"account_no"}},[r("el-input",{staticClass:"wid_180",attrs:{placeholder:""},model:{value:e.detail_form.account_no,callback:function(t){e.$set(e.detail_form,"account_no",t)},expression:"detail_form.account_no"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"买入数量",prop:"digit_num"}},[r("el-input",{staticClass:"wid_180",attrs:{placeholder:""},model:{value:e.detail_form.digit_num,callback:function(t){e.$set(e.detail_form,"digit_num",t)},expression:"detail_form.digit_num"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"单价",prop:"single_price"}},[r("el-input",{staticClass:"wid_180",attrs:{placeholder:""},model:{value:e.detail_form.single_price,callback:function(t){e.$set(e.detail_form,"single_price",t)},expression:"detail_form.single_price"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"总金额",prop:"total_amount"}},[r("el-input",{staticClass:"wid_180",attrs:{placeholder:""},model:{value:e.detail_form.total_amount,callback:function(t){e.$set(e.detail_form,"total_amount",t)},expression:"detail_form.total_amount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"订单状态",prop:"pay_status"}},[r("el-input",{staticClass:"wid_180",attrs:{placeholder:""},model:{value:e.detail_form.pay_status,callback:function(t){e.$set(e.detail_form,"pay_status",t)},expression:"detail_form.pay_status"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"订单号",prop:"orderid"}},[r("el-input",{staticClass:"wid_1001",attrs:{placeholder:""},model:{value:e.detail_form.orderid,callback:function(t){e.$set(e.detail_form,"orderid",t)},expression:"detail_form.orderid"}})],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"mini"},on:{click:function(t){e.detail_dialogVisible=!1}}},[e._v("关 闭")])],1)],1)],1)},i=[],o=r("bd86"),s=(r("ff82"),r("cf45")),n=r("5f87"),l=r("61f7"),d=r("bc3a"),_=r.n(d),u={name:"buyList",data:function(){var e=this,t=function(e,t,r){t?Object(l["g"])(t)?r():r(new Error("输入正整数或两位以内的小数")):r(new Error("请输入值"))};return{pickerOptions_register1:{disabledDate:function(t){var r=e;return""!=r.queryForm.endTime?t.getTime()>new Date(r.queryForm.endTime).getTime():t.getTime()>Date.now()}},pickerOptions_register2:{disabledDate:function(t){var r=e;if(""!=r.queryForm.startTime){var a=new Date(r.queryForm.startTime).getTime(),i=2592e6,o=a+i;return o>new Date&&(o=new Date),t.getTime()<new Date(r.queryForm.startTime).getTime()||t.getTime()>o}return t.getTime()>Date.now()}},tipError:!1,roleId:"",platformId:"",tableLoading:!1,tableData:[],pageTotal:1,currentPage:1,detail_pageTotal:0,detail_currentPage:1,queryForm:{username:"",phone:"",createtime:"",startTime:"",endTime:"",startNum:"",endNum:"",pay_status:"",pay_statuss:[{id:1,value:"已付款"}]},value1:"",detail_dialogVisible:!1,detail_loading:!1,detail_form:{username:"",phone:"",account_no:"",digit_num:"",single_price:"",total_amount:"",pay_status:"",orderid:""},break_dialogVisible:!1,break_loading:!1,break_form:{deal_status:"0",digit_num:"",order_type:"0",orderid:"",userid:"",terminate_reason:"",showBreakR:!0},break_form_rules:{terminate_reason:[{required:!0,message:"请输入终止原因",trigger:"blur"}]},fail_dialogVisible:!1,fail_loading:!1,fail_form:{order_status:"2",username:"",orderid:"",phone:"",failed_reason:"",showFailR:!0,digit_num:"",order_type:"",userid:""},fail_form_rules:{failed_reason:[{required:!0,message:"请输入失败原因",trigger:"blur"}]},return_dialogVisible:!1,return_loading:!1,return_form:{showReturnR:!0,orderid:"",digit_num:"",pre_amount_status:"1",deal_single_price:"",pre_total_price:"",deal_pre_total_price:"",single_price:"",account_username:"",phone:""},return_form_rules:{deal_single_price:[{required:!0,validator:t,trigger:"blur"}]}}},created:function(){this.roleId=this.$store.getters.roleId,this.platformId=this.$store.getters.platformid,this.getTableDataList(1)},computed:{deal_pre_total_price:{get:function(){if(this.return_form.deal_single_price){var e=this.return_form.pre_total_price-100*this.return_form.deal_single_price;if(Object(l["a"])(e))return this.tipError=!1,Math.floor(e*this.return_form.digit_num)/100;this.tipError=!0}},set:function(e){this.deal_pre_total_price=val}}},methods:{getTableDataList:function(e){var t=this,r={data:{signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId,pageNum:e,pageSize:10,username:this.queryForm.username,phone:this.queryForm.phone,startTime:this.queryForm.startTime,endTime:this.queryForm.endTime,startNum:this.queryForm.startNum,endNum:this.queryForm.endNum,pay_status:this.queryForm.pay_status}};this.tableLoading=!0,this.$http.post("".concat(s["a"].baseUrl,"/orderInfo/buyList"),r).then(function(e){"0000"==e.data.code?(t.tableLoading=!1,t.tableData=e.data.data.buyOrderList,t.pageTotal=e.data.data.page.pageTotal):(t.tableLoading=!1,t.m_message(e.data.msg,"error"))}).catch(function(e){})},tableRowClassName:function(e){var t=e.row;e.rowIndex;return"0"==t.deal_status?"warning-row":""},handle_store:function(e){var t=this;this.$confirm("是否放币?","放币",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",size:"mini",center:!0}).then(function(){var r=t.$loading({lock:!0,text:"加载中.....",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a={data:{signInUserId:t.$store.getters.userId,signInRoleId:t.$store.getters.roleId,amount_status:"1",orderid:e.orderid,platformid:t.platformId}};t.$http.post("".concat(s["a"].baseUrl,"/orderInfo/updateAmountStatus"),a).then(function(e){"0000"==e.data.code?(t.m_message(e.data.msg,"success"),r.close(),t.handle_refresh()):(r.close(),t.m_message(e.data.msg,"warning"))}).catch(function(e){})})},handle_fail:function(e){this.fail_dialogVisible=!0,this.fail_form.username=e.username,this.fail_form.orderid=e.orderid,this.fail_form.phone=e.phone,this.fail_form.showFailR=!0,this.fail_form.failed_reason="",this.fail_form.digit_num=e.digit_num,this.fail_form.order_type=e.order_type,this.fail_form.userid=e.userid},fail_resolve:function(){var e=this;if(this.m_valid_addForm("fail_form")){var t,r={data:(t={signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId,failed_reason:this.fail_form.failed_reason,order_status:this.fail_form.order_status,orderid:this.fail_form.orderid,phone:this.fail_form.phone,username:this.fail_form.username},Object(o["a"])(t,"failed_reason",this.fail_form.failed_reason),Object(o["a"])(t,"digit_num",this.fail_form.digit_num),Object(o["a"])(t,"order_type",this.fail_form.order_type),Object(o["a"])(t,"userid",this.fail_form.userid),t)};this.fail_loading=!0,this.$http.post("".concat(s["a"].baseUrl,"/orderInfo/orderTransactionFailed"),r).then(function(t){"0000"==t.data.code?(e.fail_loading=!1,e.fail_dialogVisible=!1,e.m_message(t.data.msg,"success"),e.handle_refresh()):(e.fail_loading=!1,e.m_message(t.data.msg,"warning"))}).catch(function(e){})}},handle_viewFail:function(e){var t=this;this.fail_dialogVisible=!0,this.fail_form.showFailR=!1;var r={data:{signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId,orderid:e.orderid}};this.fail_loading=!0,this.$http.post("".concat(s["a"].baseUrl,"/orderInfo/selectOrderInfo"),r).then(function(e){if(console.log(e),"0000"==e.data.code){var r=e.data.data.orderInfo;t.fail_form.failed_reason=r.failed_reason,t.fail_loading=!1}else t.fail_loading=!1,t.m_message(e.data.msg,"warning")}).catch(function(e){})},handle_viewRM:function(e){var t=this;this.return_dialogVisible=!0,this.return_form.showReturnR=!1;var r={data:{signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId,orderid:e.orderid}};this.return_loading=!0,this.$http.post("".concat(s["a"].baseUrl,"/orderInfo/selectOrderInfo"),r).then(function(e){if("0000"==e.data.code){var r=e.data.data.orderInfo;t.return_form.single_price=r.single_price,t.return_form.deal_single_price=r.deal_single_price/100,t.return_loading=!1}else t.return_loading=!1,t.m_message(e.data.msg,"warning")}).catch(function(e){})},handle_returnM:function(e){this.return_dialogVisible=!0,this.resetData("return_form"),this.return_form.showReturnR=!0,this.return_form.orderid=e.orderid,this.return_form.digit_num=e.digit_num,this.return_form.single_price=e.single_price,this.return_form.pre_total_price=e.pre_total_price,this.return_form.username=e.username,this.return_form.phone=e.phone},return_resolve:function(){var e=this;if(this.m_valid_addForm("return_form")){var t={data:{signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId,orderid:this.return_form.orderid,deal_single_price:100*this.return_form.deal_single_price,pre_amount_status:this.return_form.pre_amount_status,username:this.return_form.username,phone:this.return_form.phone,deal_pre_total_price:100*this.deal_pre_total_price}};this.return_loading=!0,this.$http.post("".concat(s["a"].baseUrl,"/orderInfo/updatePreAmountStatus"),t).then(function(t){"0000"==t.data.code?(e.return_loading=!1,e.return_dialogVisible=!1,e.m_message(t.data.msg,"success"),e.handle_refresh()):(e.return_loading=!1,e.m_message(t.data.msg,"warning"))}).catch(function(e){})}},handle_break:function(e){this.break_dialogVisible=!0,this.break_form.digit_num=e.digit_num,this.break_form.orderid=e.orderid,this.break_form.userid=e.userid,this.break_form.showBreakR=!0},break_resolve:function(){var e=this;if(this.m_valid_addForm("break_form")){var t={data:{signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId,deal_status:this.break_form.deal_status,digit_num:this.break_form.digit_num,order_type:this.break_form.order_type,orderid:this.break_form.orderid,userid:this.break_form.userid,terminate_reason:this.break_form.terminate_reason}};this.break_loading=!0,this.$http.post("".concat(s["a"].baseUrl,"/orderInfo/dealTransaction"),t).then(function(t){"0000"==t.data.code?(e.break_loading=!1,e.break_dialogVisible=!1,e.m_message(t.data.msg,"success"),e.handle_refresh()):(e.break_loading=!1,e.m_message(t.data.msg,"warning"))}).catch(function(e){})}},handle_viewBR:function(e){var t=this;this.break_dialogVisible=!0,this.break_form.showBreakR=!1;var r={data:{signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId,orderid:e.orderid}};this.break_loading=!0,this.$http.post("".concat(s["a"].baseUrl,"/orderInfo/selectOrderInfo"),r).then(function(e){if("0000"==e.data.code){var r=e.data.data.orderInfo;t.break_form.terminate_reason=r.terminate_reason,t.break_loading=!1}else t.detail_loading=!1,t.m_message(e.data.msg,"warning")}).catch(function(e){})},handle_detail:function(e){var t=this;this.detail_dialogVisible=!0,this.resetData("detail_form");var r={data:{signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId,orderid:e.orderid}};this.detail_loading=!0,this.$http.post("".concat(s["a"].baseUrl,"/orderInfo/selectOrderInfo"),r).then(function(e){if(console.log(e),"0000"==e.data.code){var r=e.data.data.orderInfo;t.detail_form.username=r.username,t.detail_form.phone=r.phone,t.detail_form.account_no=r.account_no,t.detail_form.digit_num=r.digit_num,t.detail_form.single_price=r.single_price/100,t.detail_form.total_amount=r.total_amount/100,t.detail_form.orderid=r.orderid,t.detail_form.pay_status=1==r.pay_status?"已付款":"未付款",t.detail_loading=!1}else t.detail_loading=!1,t.m_message(e.data.msg,"warning")}).catch(function(e){})},check_resolve:function(e){var t=this,r={data:{signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId,identityid:this.detail_form.identityid,idcard_check_status:e,phone:this.detail_form.phone}};"0"==e&&(r.data.cosHeadUrl=this.detail_form.denyData.cosHeadUrl,r.data.cosOpenmouthUrl=this.detail_form.denyData.cosOpenmouthUrl,r.data.cosShakeUrl=this.detail_form.denyData.cosShakeUrl,r.data.cosBlinkUrl=this.detail_form.denyData.cosBlinkUrl,r.data.cosIdcardFrontUrl=this.detail_form.denyData.cosIdcardFrontUrl),this.detail_loading=!0,this.$http.post("".concat(s["a"].baseUrl,"/identityInfo/updateIdentityCheckStatus"),r).then(function(e){"0000"==e.data.code?(t.m_message(e.data.msg,"success"),t.detail_loading=!1,t.detail_dialogVisible=!1,t.handle_refresh()):(t.detail_loading=!1,t.m_message(e.data.msg,"warning"))}).catch(function(e){})},clearPreviewImgs:function(){this.idcard_back_url_srcList=[],this.idcard_front_url_srcList=[],this.blink_url_srcList=[],this.head_url_srcList=[],this.openmouth_url_srcList=[],this.shake_url_srcList=[],this.all_url_srcList=[]},exportData:function(e){var t=Object(n["a"])(),r=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});_()({method:"post",url:"".concat(s["a"].baseUrl).concat(e),headers:{Authorization:t},data:{data:{signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId,startTime:this.queryForm.startTime,endTime:this.queryForm.endTime,memberType:this.queryForm.memberType,startMemberTime:this.queryForm.startMemberTime,endMemberTime:this.queryForm.endMemberTime,username:this.queryForm.username,up_username:this.queryForm.up_username,grand_username:this.queryForm.grand_username,agent_name:this.queryForm.agent_name}},responseType:"blob"}).then(function(e){r.close();var t=e.headers["content-disposition"],a=document.createElement("a"),i=new Blob([e.data],{type:"text/csv"});a.style.display="none",a.href=URL.createObjectURL(i),a.setAttribute("download","".concat(t)),document.body.appendChild(a),a.click(),document.body.removeChild(a)}).catch(function(e){r.close()})},queryData:function(){this.getTableDataList(1),this.currentPage=1},resetData:function(e){this.$refs[e]&&this.$refs[e].resetFields(),this.queryForm.startTime="",this.queryForm.endTime="",this.queryForm.startMemberTime="",this.queryForm.endMemberTime=""},handle_refresh:function(){this.getTableDataList(this.currentPage)},handleCurrentChange:function(e){this.currentPage=e,this.getTableDataList(e)},m_valid_addForm:function(e){var t=!1;return this.$refs[e].validate(function(e){return e?(t=!0,!0):(t=!1,!1)}),t},m_message:function(e,t){this.$message({message:e,type:t})}}},m=u,c=(r("90cf"),r("2877")),f=Object(c["a"])(m,a,i,!1,null,"77c8d6a6",null);t["default"]=f.exports},ff82:function(e,t,r){"use strict";t["a"]={province_list:{11e4:"北京市",12e4:"天津市",13e4:"河北省",14e4:"山西省",15e4:"内蒙古自治区",21e4:"辽宁省",22e4:"吉林省",23e4:"黑龙江省",31e4:"上海市",32e4:"江苏省",33e4:"浙江省",34e4:"安徽省",35e4:"福建省",36e4:"江西省",37e4:"山东省",41e4:"河南省",42e4:"湖北省",43e4:"湖南省",44e4:"广东省",45e4:"广西壮族自治区",46e4:"海南省",5e5:"重庆市",51e4:"四川省",52e4:"贵州省",53e4:"云南省",54e4:"西藏自治区",61e4:"陕西省",62e4:"甘肃省",63e4:"青海省",64e4:"宁夏回族自治区",65e4:"新疆维吾尔自治区",71e4:"台湾省",81e4:"香港特别行政区",82e4:"澳门特别行政区"},adcode_list:{"上海市":"310000","云南省":"530000","内蒙古自治区":"150000","北京市":"110000","台湾省":"710000","吉林省":"220000","四川省":"510000","天津市":"120000","宁夏回族自治区":"640000","安徽省":"340000","山东省":"370000","山西省":"140000","广东省":"440000","广西壮族自治区":"450000","新疆维吾尔自治区":"650000","江苏省":"320000","江西省":"360000","河北省":"130000","河南省":"410000","浙江省":"330000","海南省":"460000","湖北省":"420000","湖南省":"430000","澳门特别行政区":"820000","甘肃省":"620000","福建省":"350000","西藏自治区":"540000","贵州省":"520000","辽宁省":"210000","重庆市":"500000","陕西省":"610000","青海省":"630000","香港特别行政区":"810000","黑龙江省":"230000"}}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cda7a31"],{"4c63":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pad_5"},[a("div",{staticClass:"query_fields pad_b_no handle_timerange"},[a("el-form",{ref:"dui_queryForm",staticClass:"dui_form demo-form-inline",attrs:{inline:!0,model:e.dui_queryForm,rules:e.rules_dui,"label-width":"80px",size:"mini"}},[a("el-form-item",{attrs:{label:"选择银行",prop:"channelid"}},[a("el-select",{staticClass:"wid_140",attrs:{placeholder:"选择银行"},model:{value:e.dui_queryForm.channelid,callback:function(t){e.$set(e.dui_queryForm,"channelid",t)},expression:"dui_queryForm.channelid"}},e._l(e.dui_queryForm.channelids,function(e,t){return a("el-option",{key:t,attrs:{label:e.txt,value:e.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"交易日期",prop:"date"}},[a("el-date-picker",{staticClass:"wid_140",attrs:{type:"date",format:"yyyy-MM-dd","value-format":"yyyyMMdd",placeholder:"交易日期"},model:{value:e.dui_queryForm.date,callback:function(t){e.$set(e.dui_queryForm,"date",t)},expression:"dui_queryForm.date"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.duiAccount}},[e._v("对账")])],1)],1),e._v(" "),a("el-form",{ref:"queryForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.queryForm,"label-width":"100px",size:"mini"}},[a("el-form-item",{attrs:{label:"系统交易日期",prop:"sys_createtime"}},[a("el-date-picker",{staticClass:"wid_140",attrs:{type:"date","value-format":"yyyyMMdd",placeholder:"交易日期"},model:{value:e.queryForm.sys_createtime,callback:function(t){e.$set(e.queryForm,"sys_createtime",t)},expression:"queryForm.sys_createtime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"银行订单号",prop:"bank_out_trade_no"}},[a("el-input",{staticClass:"wid_140",attrs:{placeholder:"订单号"},model:{value:e.queryForm.bank_out_trade_no,callback:function(t){e.$set(e.queryForm,"bank_out_trade_no",t)},expression:"queryForm.bank_out_trade_no"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"交易金额"}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{prop:"lowMoney"}},[a("el-input",{staticStyle:{width:"70px"},attrs:{placeholder:"最小金额"},model:{value:e.queryForm.lowMoney,callback:function(t){e.$set(e.queryForm,"lowMoney",t)},expression:"queryForm.lowMoney"}}),e._v("-\n          ")],1),e._v(" "),a("el-form-item",{attrs:{prop:"highMoney"}},[a("el-input",{staticStyle:{width:"70px"},attrs:{placeholder:"最大金额"},model:{value:e.queryForm.highMoney,callback:function(t){e.$set(e.queryForm,"highMoney",t)},expression:"queryForm.highMoney"}}),e._v("元\n          ")],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"对账状态",prop:"reconciliation_status"}},[a("el-select",{staticClass:"wid_140",attrs:{placeholder:"交易状态"},on:{change:function(t){return e.changeOption_traveler_status(t)}},model:{value:e.queryForm.reconciliation_status,callback:function(t){e.$set(e.queryForm,"reconciliation_status",t)},expression:"queryForm.reconciliation_status"}},e._l(e.queryForm.reconciliation_statuss,function(e,t){return a("el-option",{key:t,attrs:{label:e.txt,value:e.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"系统订单号",prop:"sys_consumeid"}},[a("el-input",{staticClass:"wid_140",attrs:{placeholder:"渠道订单编号"},model:{value:e.queryForm.sys_consumeid,callback:function(t){e.$set(e.queryForm,"sys_consumeid",t)},expression:"queryForm.sys_consumeid"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.queryData}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(t){return e.resetData("queryForm")}}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.handle_refresh}},[e._v("刷新")])],1)],1)],1),e._v(" "),a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"sys_createtime",label:"系统交易时间",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sys_order_no","show-overflow-tooltip":"",label:"系统订单号",width:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"sys_payfor_amount",label:"系统交易金额(元)",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"系统交易状态",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.sys_payfor_status?a("span",[e._v("创建")]):e._e(),e._v(" "),1==t.row.sys_payfor_status?a("span",[e._v("成功")]):2==t.row.sys_payfor_status?a("span",[e._v("失败")]):3==t.row.sys_payfor_status?a("span",[e._v("超时")]):4==t.row.sys_payfor_status?a("span",[e._v("已受理")]):5==t.row.sys_payfor_status?a("span",[e._v("挂起")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"bank_tran_date",label:"银行交易时间",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"bank_requestor_tran_seq_no","show-overflow-tooltip":"",label:"银行订单号",width:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"bank_money",label:"银行交易金额(元)",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"bank_service_charge",label:"交易手续费(元)",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"对账状态",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.reconciliation_status?a("span",[e._v("平账")]):2==t.row.reconciliation_status?a("span",[e._v("短款")]):3==t.row.reconciliation_status?a("span",[e._v("长款")]):4==t.row.reconciliation_status?a("span",[e._v("人工平账")]):e._e()]}}])}),e._v(" "),11==e.roleId?a("el-table-column",{attrs:{prop:"",label:"操作",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[1!=t.row.reconciliation_status&&4!=t.row.reconciliation_status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handle_balanceAccount(t.row)}}},[e._v("人工平账")]):e._e()]}}],null,!1,1558885887)}):e._e()],1),e._v(" "),a("div",{staticClass:"block mar_t10"},[a("el-pagination",{attrs:{"current-page":e.currentPage,total:e.pageTotal,background:"",layout:"total, prev, pager, next, jumper"},on:{"current-change":e.handleCurrentChange}})],1)],1)])},n=[],o=a("cf45"),s=a("5f87"),i=(a("1157"),{name:"transactionCheck",data:function(){return{roleId:"",tableLoading:!1,tableData:[],tableLoading2:!1,tableData2:[],pageTotal2:1,currentPage2:1,pageTotal:100,currentPage:1,queryForm:{allTime:"",startTime:"",endTime:"",lowMoney:"",highMoney:"",bank_out_trade_no:"",sys_createtime:"",sys_consumeid:"",transaction_user:"",reconciliation_statuss:[{id:"1",txt:"平账"},{id:"2",txt:"短款"},{id:"3",txt:"长款"}],reconciliation_status:"",trade_types:[{id:"pay.alipay.jspay",value:"支付宝"},{id:"pay.weixin.jspayv2",value:"微信"},{id:"pay.unionpay.native",value:"银联"}],trade_type:""},isDui:!1,dui_queryForm:{channelids:[{txt:"平安银行",id:"1001"}],channelid:"",date:""},rules_dui:{channelid:[{type:"string",required:!0,message:"请选择银行",trigger:"change"}],date:[{type:"string",required:!0,message:"请选择日期",trigger:"change"}]}}},created:function(){this.roleId=this.$store.getters.roleId,this.getTabelDataList(1)},methods:{easyUpload:function(){var e=document.createElement("input");e.type="file",e.click();var t=this;e.onchange=function(){var a=e.files[0],r=new FormData;r.append("file",a),t.$http.post("".concat(o["a"].baseUrl,"/paymentRecon/savePaymentRecon"),r).then(function(e){}).catch(function(e){})}},getTabelDataList:function(e){var t=this,a={data:{signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId,pageNum:e,pageSize:10,sys_createtime:this.queryForm.sys_createtime,bank_requestor_tran_seq_no:this.queryForm.bank_out_trade_no,reconciliation_status:this.queryForm.reconciliation_status,lowMoney:this.queryForm.lowMoney,highMoney:this.queryForm.highMoney,sys_order_no:this.queryForm.sys_consumeid}};this.tableLoading=!0,this.$http.post("".concat(o["a"].baseUrl,"/reconSum/selectReconciliationSum"),a).then(function(e){"0000"==e.data.code?(console.log(e),t.tableData=e.data.data.reconciliationSumList,t.pageTotal=e.data.data.page.pageTotal,t.tableLoading=!1):(t.m_message(e.data.msg,"warning"),t.tableLoading=!1)}).catch(function(e){})},duiAccount:function(){var e=this,t={data:{date:this.dui_queryForm.date,channelid:this.dui_queryForm.channelid}};if(this.m_valid_addForm("dui_queryForm")){var a=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.$http.post("".concat(o["a"].baseUrl,"/pinganRecon/savePinganRecon"),t).then(function(t){"0000"==t.data.code?(a.close(),e.m_message(t.data.msg,"success"),e.handle_refresh()):(a.close(),e.m_message(t.data.msg,"warning"))}).catch(function(e){})}},handle_balanceAccount:function(e){var t=this,a={data:{id:e.id,reconciliation_status:"4"}},r=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.$http.post("".concat(o["a"].baseUrl,"/reconSum/updateReconStatus"),a).then(function(e){"0000"==e.data.code?(r.close(),t.m_message(e.data.msg,"success"),t.handle_refresh()):(r.close(),t.m_message(e.data.msg,"warning"))}).catch(function(e){})},exportData:function(){var e=Object(s["a"])(),t={signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId,travelerName:this.queryForm.travelerName,cardno:this.queryForm.cardno,sys_createtime:this.queryForm.sys_createtime,phone:this.queryForm.phone,withdraw_type:this.queryForm.withdraw_type,withdraw_status:this.queryForm.withdraw_status,Authorization:e};window.location.href="".concat(o["a"].baseUrl,"/withdrawInfo/exportWithdrawInfo?travelerName=").concat(t.travelerName,"&cardno=").concat(t.cardno,"&phone=").concat(t.phone,"&withdraw_type=").concat(t.withdraw_type,"&withdraw_status=").concat(t.withdraw_status,"&sys_createtime=").concat(t.sys_createtime)},handle_confirm_transaction:function(e){this.$confirm("是否确认交易结果?","确认交易结果",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success",size:"mini",center:!0}).then(function(){e.traveler_status})},handle_refresh:function(){this.getTabelDataList(this.currentPage)},queryData:function(){this.queryForm.allTime.length>0&&(this.queryForm.startTime=this.queryForm.allTime[0],this.queryForm.endTime=this.queryForm.allTime[1]),console.log(this.queryForm),this.getTabelDataList(1),this.currentPage=1},resetData:function(e){this.$refs[e].resetFields(),this.queryForm.startTime="",this.queryForm.endTime=""},handleCurrentChange:function(e){this.currentPage=e,this.getTabelDataList(e)},handleCurrentChange2:function(e){this.currentPage2=e,this.duiAccount(e)},m_message:function(e,t){this.$message({message:e,type:t})},m_valid_addForm:function(e){var t=!1;return this.$refs[e].validate(function(e){return e?(t=!0,!0):(t=!1,!1)}),t}}}),l=i,c=(a("faa9"),a("2877")),u=Object(c["a"])(l,r,n,!1,null,null,null);t["default"]=u.exports},"59be":function(e,t,a){},faa9:function(e,t,a){"use strict";var r=a("59be"),n=a.n(r);n.a}}]);
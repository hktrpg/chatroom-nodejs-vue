(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30147aae"],{"0220":function(e,t,r){"use strict";var s=r("9899"),a=r.n(s);a.a},2375:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"spinner"},[r("div",{staticClass:"bouncing-loader"},[r("div"),r("div"),r("div")])])}],n=(r("0220"),r("2877")),i={},o=Object(n["a"])(i,s,a,!1,null,"bd456636",null);t["a"]=o.exports},2594:function(e,t,r){"use strict";var s=r("5831"),a=r.n(s);a.a},"4c19":function(e,t,r){},5831:function(e,t,r){},"605f":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Navbar"),r("br"),r("br"),r("br"),e.isLoading?r("Spinner"):r("AdminCreateForm",{attrs:{"initial-user":e.user},on:{"after-submit":e.handleAfterSubmit}})],1)},a=[],n=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("96cf"),r("1da1")),i=r("ade3"),o=r("2f62"),c=r("d178"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("form",{staticClass:"w-100",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[e._m(0),r("div",{staticClass:"form-label-group mb-2"},[r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{id:"name",name:"name",type:"text",placeholder:"name",required:"",autofocus:""},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),r("div",{staticClass:"form-label-group mb-2"},[r("label",{attrs:{for:"email"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",required:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),r("div",{staticClass:"form-label-group mb-3"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("span",{staticClass:"warning",style:{visibility:e.passwordHint?"visible":"hidden"}},[e._v("The password length should be greater than 8.")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),r("div",{staticClass:"form-label-group mb-3"},[r("label",{attrs:{for:"password-check"}},[e._v("Password Check")]),r("span",{staticClass:"warning",style:{visibility:e.passwordCheckHint?"visible":"hidden"}},[e._v("Does not match the password above.")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.passwordCheck,expression:"user.passwordCheck"}],staticClass:"form-control",attrs:{id:"password-check",name:"passwordCheck",type:"password",placeholder:"Password",required:""},domProps:{value:e.user.passwordCheck},on:{input:function(t){t.target.composing||e.$set(e.user,"passwordCheck",t.target.value)}}})]),r("div",{staticClass:"form-label-group mb-2"},[r("label",{attrs:{for:"isAdmin"}},[e._v("Admin?")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.user.isAdmin,expression:"user.isAdmin"}],staticClass:"form-control",attrs:{name:"isAdmin",id:"isAdmin"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.user,"isAdmin",t.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:"",value:"1"}},[e._v("Yes")]),r("option",{attrs:{value:"0"}},[e._v("No")])])]),r("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(e._s(e.isProcessing?"Processing...":"Save"))]),r("router-link",{attrs:{to:"/admin/users"}},[r("button",{staticClass:"btn btn-lg btn-block btn-outline-dark",attrs:{type:"button"}},[e._v("Back")])])],1)])},l=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center mb-4"},[r("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Edit User")])])}],d=(r("b0c0"),r("2fa3"));function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={name:"AdminEditForm",props:{initialUser:{type:Object,default:function(){return{name:"",email:"",password:"",passwordCheck:"",isAdmin:-2}}}},data:function(){return{user:{id:-1,name:"",password:"",passwordCheck:"",isAdmin:-1},isProcessing:!1,passwordHint:!1,passwordCheckHint:!1}},created:function(){this.user=m({},this.user,{},this.initialUser)},computed:m({},Object(o["b"])(["currentUser","isAuthenticated"])),methods:{handleSubmit:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,this.isProcessing=!0,this.user.name&&this.user.email&&this.user.password&&this.user.passwordCheck&&this.user.isAdmin){e.next=6;break}return d["a"].fire({icon:"warning",title:"請確認已填寫所有欄位"}),this.isProcessing=!1,e.abrupt("return");case 6:if(this.user.password===this.user.passwordCheck){e.next=11;break}return d["a"].fire({icon:"warning",title:"兩次輸入的密碼不同，請確認"}),this.user.passwordCheck="",this.isProcessing=!1,e.abrupt("return");case 11:if(!(this.user.password.length<8)){e.next=16;break}return d["a"].fire({icon:"warning",title:"密碼長度需大於8"}),this.user.passwordCheck="",this.isProcessing=!1,e.abrupt("return");case 16:if(-1!==this.user.isAdmin){e.next=22;break}return d["a"].fire({icon:"warning",title:"請選擇權限"}),this.user.isAdmin=-1,this.user.passwordCheck="",this.isProcessing=!1,e.abrupt("return");case 22:r=t.target,s=new FormData(r),this.$emit("after-submit",s),e.next=31;break;case 27:e.prev=27,e.t0=e["catch"](0),d["a"].fire({icon:"error",title:e.t0}),this.isProcessing=!1;case 31:case"end":return e.stop()}}),e,this,[[0,27]])})));function t(t){return e.apply(this,arguments)}return t}()},watch:{initialUser:function(e){this.user=m({},this.user,{},e),this.user.isAdmin=-1},user:{handler:function(){this.user.password!==this.user.passwordCheck?this.passwordCheckHint=!0:this.passwordCheckHint=!1,this.user.password.length<8?this.passwordHint=!0:this.passwordHint=!1,this.user.password!==this.user.passwordCheck?this.passwordCheckHint=!0:this.passwordCheckHint=!1},deep:!0}}},h=b,f=(r("712d"),r("2877")),v=Object(f["a"])(h,u,l,!1,null,"0806cd1d",null),g=v.exports,w=r("be6c"),O=r("2375");function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C={name:"AdminEditUser",components:{Navbar:c["a"],AdminCreateForm:g,Spinner:O["a"]},data:function(){return{user:{id:-1,name:"",isAdmin:-1},isLoading:!0}},computed:y({},Object(o["b"])(["currentUser","isAuthenticated"])),created:function(){var e=this.$route.params.id;this.fetchUser(e)},methods:{fetchUser:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w["a"].getUser({userId:t});case 3:if(r=e.sent,s=r.data,a=r.statusText,"OK"===a){e.next=7;break}throw new Error(s.message);case 7:this.user=s.user,this.isLoading=!1,e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),this.isLoading=!1,d["a"].fire({icon:"error",title:e.t0});case 15:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(t){return e.apply(this,arguments)}return t}(),handleAfterSubmit:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,s,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=this.user.id,e.next=4,w["a"].putUser({formData:t,userId:r});case 4:if(s=e.sent,a=s.data,n=s.statusText,"OK"===n){e.next=9;break}throw new Error(a.message);case 9:d["a"].fire({icon:"success",title:"更新使用者成功"}),this.$router.push("/admin/users"),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),d["a"].fire({icon:"error",title:e.t0});case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));function t(t){return e.apply(this,arguments)}return t}()}},j=C,P=Object(f["a"])(j,s,a,!1,null,null,null);t["default"]=P.exports},"712d":function(e,t,r){"use strict";var s=r("4c19"),a=r.n(s);a.a},9899:function(e,t,r){},be6c:function(e,t,r){"use strict";var s=r("2fa3"),a=function(){return localStorage.getItem("token")};t["a"]={getUsers:function(){return s["b"].get("/admin/users",{headers:{Authorization:"Bearer ".concat(a())}})},getUser:function(e){var t=e.userId;return s["b"].get("admin/users/".concat(t),{headers:{Authorization:"Bearer ".concat(a())}})},postUser:function(e){var t=e.formData;return s["b"].post("/admin/users/create",t,{headers:{Authorization:"Bearer ".concat(a())}})},putUser:function(e){var t=e.formData,r=e.userId;return s["b"].put("/admin/users/edit/".concat(r),t,{headers:{Authorization:"Bearer ".concat(a())}})},putRole:function(e){var t=e.userId;return s["b"].put("/admin/users/".concat(t,"/put-role"),{},{headers:{Authorization:"Bearer ".concat(a())}})},deleteUser:function(e){var t=e.userId;return s["b"].delete("/admin/users/".concat(t),{headers:{Authorization:"Bearer ".concat(a())}})}}},d178:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:"/chatroom"}},[e._v("Chatroom")]),e._m(0),r("div",{staticClass:"navbar-collapse collapse navbar-center",attrs:{id:"navbarSupportedContent"}},[r("div",{staticClass:"ml-auto d-flex align-items-center navbar-collapse-center"},[e.currentUser.isAdmin?r("router-link",{attrs:{id:"admin",to:"/admin/users"}},[r("h4",[e._v("管理員後台")])]):e._e(),r("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{id:"logout",type:"button"},on:{click:e.logout}},[r("h5",[e._v("登出")])]),r("a",{attrs:{target:"_blank",href:"https://github.com/andy922200/chatroom-nodejs-vue"}},[r("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)],1)])],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],n=(r("a4d3"),r("4de4"),r("4160"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),i=r("2f62"),o=r("2fa3");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={name:"Navbar",computed:u({},Object(i["b"])(["currentUser","isAuthenticated"])),methods:{logout:function(){this.$socket.emit("offlineHint",this.currentUser.name),this.$store.commit("revokeAuthentication"),this.$router.push("/signin"),o["a"].fire({icon:"success",title:"成功登出"})}}},d=l,p=(r("2594"),r("2877")),m=Object(p["a"])(d,s,a,!1,null,"c0727d0c",null);t["a"]=m.exports}}]);
//# sourceMappingURL=chunk-30147aae.349b7d0b.js.map
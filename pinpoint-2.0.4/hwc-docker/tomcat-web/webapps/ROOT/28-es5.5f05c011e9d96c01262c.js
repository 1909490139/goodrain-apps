function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+TFa":function(n,l,e){"use strict";e.d(l,"a",(function(){return i}));var t=e("XNiG"),i=function(){function n(){_classCallCheck(this,n),this.outSelectApplication=new t.b,this.onSelectApplication$=this.outSelectApplication.asObservable()}return _createClass(n,[{key:"setSelectedApplication",value:function(n){this.outSelectApplication.next(n)}}]),n}()},FTGN:function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));var t=function n(){_classCallCheck(this,n)}},aK9m:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),i=function n(){_classCallCheck(this,n)},a=e("pMnS"),o=e("SVse"),u=e("w1KT"),c=e("xcNo"),s=e("W33f"),r=e("/yY+");e("ZF+8");var f=function(){function n(l,e,t,i){_classCallCheck(this,n),this.urlRouteManagerService=l,this.systemConfigurationDataService=e,this.applicationListDataService=t,this.serverTimeDataService=i,this.stateList=["serverTime","configuration","applicationList"],this.state={serverTime:{url:"serverTime.pinpoint",loading:!0,success:!1,message:""},configuration:{url:"configuration.pinpoint",loading:!0,success:!1,message:""},applicationList:{url:"applicationList.pinpoint",loading:!0,success:!1,message:""}}}return _createClass(n,[{key:"ngOnInit",value:function(){this.checkServerTime(this.stateList[0]),this.checkSystemConfiguration(this.stateList[1]),this.checkApplicationList(this.stateList[2])}},{key:"setState",value:function(n,l,e){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";this.state[n].success=l,this.state[n].loading=e,this.state[n].message=t}},{key:"checkServerTime",value:function(n){var l=this;this.serverTimeDataService.getServerTime().subscribe((function(e){l.setState(n,!0,!1)}),(function(e){l.setState(n,!1,!1,e.exception.message)}))}},{key:"checkSystemConfiguration",value:function(n){var l=this;this.systemConfigurationDataService.getConfiguration().subscribe((function(e){l.setState(n,!0,!1)}),(function(e){l.setState(n,!1,!1,e.exception.message)}))}},{key:"checkApplicationList",value:function(n){var l=this;this.applicationListDataService.getApplicationList().subscribe((function(e){l.setState(n,!0,!1)}),(function(e){l.setState(n,!1,!1,e.exception.message)}))}},{key:"getErrorMessage",value:function(n){return this.state[n].message}},{key:"showErrorMessage",value:function(n){return!(!1===this.state[n].loading&&this.state[n].success)}},{key:"getStateClass",value:function(n){var l=this.state[n];return l.loading?"fas fa-spinner fa-spin":l.success?"far fa-check-square l-success":"far fa-times-circle l-fail"}},{key:"getUrl",value:function(n){return this.state[n].url}},{key:"onMoveBack",value:function(){this.urlRouteManagerService.back()}},{key:"onReload",value:function(){this.urlRouteManagerService.reload()}},{key:"hasError",value:function(){var n=this;return this.stateList.reduce((function(l,e){return l&&!1===n.state[e].loading&&!n.state[e].success}),!0)}}]),n}(),p=e("D5ZC"),d=e("fTWN"),g=e("z/t1"),m=e("cu3E"),h=t["\u0275crt"]({encapsulation:0,styles:[[".l-title[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1;color:#fff;font-size:20px;-webkit-box-align:center;align-items:center;padding-left:20px}.l-api-check[_ngcontent-%COMP%]{width:100%;height:calc(100% - 50px);padding-top:5%;display:-webkit-box;display:flex;position:absolute;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;align-items:center}.l-api-check[_ngcontent-%COMP%]   .l-apis[_ngcontent-%COMP%]{width:700px;display:-webkit-box;display:flex;font-size:30px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.l-api-check[_ngcontent-%COMP%]   .l-api[_ngcontent-%COMP%]{display:-webkit-box;display:flex;padding:0 20px;-webkit-box-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.l-api-check[_ngcontent-%COMP%]   .l-api[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin:10px 10px 0 0}.l-api-check[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100px;height:100px;margin:20px 0;font-size:40px;border-radius:50px}.l-success[_ngcontent-%COMP%]{color:#03a203}.l-fail[_ngcontent-%COMP%]{color:#c10404}.l-error[_ngcontent-%COMP%]{padding:20px;font-size:14px}"]],data:{}});function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-sm btn-blue"]],null,[[null,"click"]],(function(n,l,e){var t=!0,i=n.component;return"click"===l&&(t=!1!==i.onReload()&&t),t}),null,null)),(n()(),t["\u0275eld"](1,0,null,null,0,"i",[["class","fas fa-redo"]],null,null,null,null,null))],null,null)}function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-sm btn-blue"]],null,[[null,"click"]],(function(n,l,e){var t=!0,i=n.component;return"click"===l&&(t=!1!==i.onMoveBack()&&t),t}),null,null)),(n()(),t["\u0275eld"](1,0,null,null,0,"i",[["class","fas fa-chevron-left"]],null,null,null,null,null))],null,null)}function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","l-error"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""]))],null,(function(n,l){n(l,1,0,l.component.getErrorMessage(l.parent.context.$implicit))}))}function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,7,"div",[["class","l-apis"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,4,"div",[["class","l-api"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,2,"i",[],null,null,null,null,null)),t["\u0275prd"](512,null,o["\u0275NgClassImpl"],o["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](4,278528,null,0,o.NgClass,[o["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),(n()(),t["\u0275ted"](5,null,[" "," "])),(n()(),t["\u0275and"](16777216,null,null,1,null,b)),t["\u0275did"](7,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,4,0,e.getStateClass(l.context.$implicit)),n(l,7,0,e.showErrorMessage(l.context.$implicit))}),(function(n,l){n(l,5,0,l.component.getUrl(l.context.$implicit))}))}function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"header",[["class","l-header flex-container flex-row"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"pp-header-logo",[],null,null,null,u.b,u.a)),t["\u0275did"](2,114688,null,0,c.a,[s.a,r.a],null,null),(n()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","l-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["API Check"])),(n()(),t["\u0275eld"](5,0,null,null,7,"section",[],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,6,"div",[["class","l-api-check"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,v)),t["\u0275did"](8,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](10,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,C)),t["\u0275did"](12,278528,null,0,o.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,2,0),n(l,8,0,e.hasError()),n(l,10,0,!e.hasError()),n(l,12,0,e.stateList)}),null)}var _=t["\u0275ccf"]("ng-component",f,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,x,h)),t["\u0275did"](1,114688,null,0,f,[p.a,d.a,g.a,m.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),y=e("s7LF"),w=e("+TFa"),S=e("iInd"),M=e("22Na"),O=e("IbkX"),L=e("M0ag"),P=function n(){_classCallCheck(this,n)},I=e("IP0z"),N=e("/HVE"),T=e("hOhj"),R=e("FTGN");e.d(l,"ErrorPageModuleNgFactory",(function(){return F}));var F=t["\u0275cmf"](i,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,_]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[t.LOCALE_ID,[2,o["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,y["\u0275angular_packages_forms_forms_o"],y["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,w.a,w.a,[]),t["\u0275mpd"](1073742336,o.CommonModule,o.CommonModule,[]),t["\u0275mpd"](1073742336,S.q,S.q,[[2,S.v],[2,S.m]]),t["\u0275mpd"](1073742336,M.ClickOutsideModule,M.ClickOutsideModule,[]),t["\u0275mpd"](1073742336,y["\u0275angular_packages_forms_forms_d"],y["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,y.FormsModule,y.FormsModule,[]),t["\u0275mpd"](1073742336,O.b,O.b,[]),t["\u0275mpd"](1073742336,L.a,L.a,[]),t["\u0275mpd"](1073742336,P,P,[]),t["\u0275mpd"](1073742336,I.a,I.a,[]),t["\u0275mpd"](1073742336,N.b,N.b,[]),t["\u0275mpd"](1073742336,T.g,T.g,[]),t["\u0275mpd"](1073742336,R.a,R.a,[]),t["\u0275mpd"](1073742336,i,i,[]),t["\u0275mpd"](1024,S.k,(function(){return[[{path:"",component:f}]]}),[])])}))},w1KT:function(n,l,e){"use strict";var t=e("8Y7J"),i=e("iInd"),a=e("SVse"),o=e("xcNo"),u=e("W33f"),c=e("/yY+");e.d(l,"a",(function(){return s})),e.d(l,"b",(function(){return r}));var s=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;padding:0 10px}.l-logo[_ngcontent-%COMP%]{min-width:135px;height:100%}.l-logo-link[_ngcontent-%COMP%]{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}"]],data:{}});function r(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"h1",[["class","l-logo"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,2,"a",[["class","l-logo-link"],["routerLink","/main"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var i=!0,a=n.component;return"click"===l&&(i=!1!==t["\u0275nov"](n,2).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&i),"click"===l&&(i=!1!==a.onLogoClick()&&i),i}),null,null)),t["\u0275did"](2,671744,null,0,i.p,[i.m,i.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),(n()(),t["\u0275eld"](3,0,null,null,0,"img",[["alt","PINPOINT LOGO"]],[[8,"src",4]],null,null,null,null))],(function(n,l){n(l,2,0,"/main")}),(function(n,l){var e=l.component;n(l,1,0,t["\u0275nov"](l,2).target,t["\u0275nov"](l,2).href),n(l,3,0,e.logoPath)}))}t["\u0275ccf"]("pp-header-logo",o.a,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"pp-header-logo",[],null,null,null,r,s)),t["\u0275did"](1,114688,null,0,o.a,[u.a,c.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[])},xcNo:function(n,l,e){"use strict";e.d(l,"a",(function(){return i}));var t=e("ZF+8"),i=function(){function n(l,e){_classCallCheck(this,n),this.webAppSettingDataService=l,this.analyticsService=e}return _createClass(n,[{key:"ngOnInit",value:function(){this.logoPath=this.webAppSettingDataService.getLogoPath()}},{key:"onLogoClick",value:function(){this.analyticsService.trackEvent(t.e.CLICK_LOGO_BUTTON)}}]),n}()}}]);
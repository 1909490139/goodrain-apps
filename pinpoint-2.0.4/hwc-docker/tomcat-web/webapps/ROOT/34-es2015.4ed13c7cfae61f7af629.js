(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{FJ1Z:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class a{}var i=e("pMnS"),o=e("XWnP"),r=e("C6IX"),u=e("h6xd"),c=e("exIq"),s=e("FVN4"),d=e("2lf1"),p=e("qaS5"),m=e("pwZw"),h=e("3WZk"),g=e("o0cf"),v=e("NxbU"),f=e("m1dV"),b=e("QJdi"),C=e("7rHv"),w=e("w1KT"),_=e("xcNo"),y=e("W33f"),M=e("/yY+"),R=e("UQIx"),P=e("u41I"),S=e("9BJz"),O=e("29DB"),T=e("Qloe"),I=e("OPvN"),E=e("+EyX"),x=e("99iz"),k=e("iInd"),z=e("xlwc"),F=e("/lTL"),N=e("YXhU"),V=e("kKeB");class j{constructor(){}ngOnInit(){}}var D=[[".l-wrapper[_ngcontent-%COMP%]{width:100%;height:calc(100% - 30px);position:relative}"]],A=t["\u0275crt"]({encapsulation:0,styles:D,data:{}});function L(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","l-wrapper"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"pp-call-tree-container",[],null,null,null,z.b,z.a)),t["\u0275did"](2,245760,null,0,F.a,[I.a,N.a,M.a,S.a,t.ComponentFactoryResolver,t.Injector,V.b],{canSelectRow:[0,"canSelectRow"],rowSelection:[1,"rowSelection"]},null)],(function(n,l){n(l,2,0,"true","single")}),null)}t["\u0275ccf"]("pp-transaction-view-bottom-contents-container",j,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"pp-transaction-view-bottom-contents-container",[],null,null,null,L,A)),t["\u0275did"](1,114688,null,0,j,[],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]);var G=e("XNiG"),U=e("LRne"),H=e("IzEk"),X=e("1G5W"),J=e("eIep"),Z=e("ZF+8"),B=e("oIO+"),q=e("TwVa"),W=e("Ej/u");class ${constructor(n,l,e,t,a,i,o,r){this.storeHelperService=n,this.newUrlStateNotificationService=l,this.urlRouteManagerService=e,this.transactionDetailDataService=t,this.gutterEventService=a,this.dynamicPopupService=i,this.componentFactoryResolver=o,this.injector=r,this.unsubscribe=new G.b}ngOnInit(){this.initSplitRatio(),this.initTransactionViewInfo()}ngAfterViewInit(){this.splitElem.dragProgress$.subscribe(({sizes:n})=>{this.gutterEventService.resizedGutter(n)})}ngOnDestroy(){this.unsubscribe.next(),this.unsubscribe.complete()}initSplitRatio(){this.gutterEventService.onGutterResized$.pipe(Object(H.a)(1)).subscribe(n=>this.splitSize=n)}initTransactionViewInfo(){this.newUrlStateNotificationService.onUrlStateChange$.pipe(Object(X.a)(this.unsubscribe),Object(J.a)(n=>this.transactionDetailDataService.getData(n.getPathValue(q.b.AGENT_ID),n.getPathValue(q.b.SPAN_ID),n.getPathValue(q.b.TRACE_ID),n.getPathValue(q.b.FOCUS_TIMESTAMP)))).subscribe(n=>{this.storeHelperService.dispatch(new B.a.UpdateTransactionDetailData(n))},n=>{this.dynamicPopupService.openPopup({data:{title:"Error",contents:n},component:W.a,onCloseCallback:()=>{this.urlRouteManagerService.reload()}},{resolver:this.componentFactoryResolver,injector:this.injector})})}onAjaxError(n){return Object(U.a)({})}onGutterResized({sizes:n}){this.gutterEventService.resizedGutter(n)}}var Q=e("nUCp"),K=e("D5ZC"),Y=e("TMnP"),nn=e("z7my"),ln=[[".l-main-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;overflow-y:hidden;height:calc(100vh - 50px)}.l-component-wrapper[_ngcontent-%COMP%]{position:relative;width:100%}"]],en=t["\u0275crt"]({encapsulation:0,styles:ln,data:{}});function tn(n){return t["\u0275vid"](0,[t["\u0275qud"](671088640,1,{splitElem:0}),(n()(),t["\u0275eld"](1,0,null,null,1,"pp-notice-container",[],null,null,null,f.b,f.a)),t["\u0275did"](2,114688,null,0,b.a,[t.ElementRef,t.Renderer2,C.a],null,null),(n()(),t["\u0275eld"](3,0,null,null,4,"header",[["class","l-header flex-container flex-row"]],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,1,"pp-header-logo",[],null,null,null,w.b,w.a)),t["\u0275did"](5,114688,null,0,_.a,[y.a,M.a],null,null),(n()(),t["\u0275eld"](6,0,null,null,1,"pp-configuration-icon-container",[],null,null,null,R.b,R.a)),t["\u0275did"](7,114688,null,0,P.a,[S.a,M.a,t.ComponentFactoryResolver,t.Injector],null,null),(n()(),t["\u0275eld"](8,0,null,null,13,"div",[["class","l-main-container"]],null,null,null,null,null)),(n()(),t["\u0275eld"](9,0,null,null,2,"div",[["class","l-component-wrapper"]],null,null,null,null,null)),(n()(),t["\u0275eld"](10,0,null,null,1,"pp-transaction-short-info-container",[],null,null,null,O.b,O.a)),t["\u0275did"](11,245760,null,0,T.a,[t.ChangeDetectorRef,I.a],null,null),(n()(),t["\u0275eld"](12,0,null,null,9,"as-split",[["direction","vertical"]],null,[[null,"dragEnd"]],(function(n,l,e){var t=!0,a=n.component;"dragEnd"===l&&(t=!1!==a.onGutterResized(e)&&t);return t}),E.b,E.a)),t["\u0275did"](13,4374528,[[1,4],["splitElem",4]],0,x.c,[t.NgZone,t.ElementRef,t.ChangeDetectorRef,t.Renderer2],{direction:[0,"direction"]},{dragEnd:"dragEnd"}),(n()(),t["\u0275eld"](14,0,null,0,3,"as-split-area",[["maxSize","55"],["minSize","30"]],null,null,null,null,null)),t["\u0275did"](15,212992,null,0,x.b,[t.NgZone,t.ElementRef,t.Renderer2,x.c],{size:[0,"size"],minSize:[1,"minSize"],maxSize:[2,"maxSize"]},null),(n()(),t["\u0275eld"](16,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](17,212992,null,0,k.r,[k.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null),(n()(),t["\u0275eld"](18,0,null,0,3,"as-split-area",[],null,null,null,null,null)),t["\u0275did"](19,212992,null,0,x.b,[t.NgZone,t.ElementRef,t.Renderer2,x.c],{size:[0,"size"]},null),(n()(),t["\u0275eld"](20,0,null,null,1,"pp-transaction-view-bottom-contents-container",[],null,null,null,L,A)),t["\u0275did"](21,114688,null,0,j,[],null,null)],(function(n,l){var e=l.component;n(l,2,0),n(l,5,0),n(l,7,0),n(l,11,0);n(l,13,0,"vertical");n(l,15,0,e.splitSize[0],"30","55"),n(l,17,0),n(l,19,0,e.splitSize[1]),n(l,21,0)}),null)}var an=t["\u0275ccf"]("pp-transaction-view-page",$,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"pp-transaction-view-page",[],null,null,null,tn,en)),t["\u0275did"](1,4440064,null,0,$,[I.a,Q.a,K.a,Y.a,nn.a,S.a,t.ComponentFactoryResolver,t.Injector],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),on=e("SVse"),rn=e("BVPj"),un=e("kjD4"),cn=e("8PdE"),sn=e("d7A3"),dn=e("hh58"),pn=e("VKJE"),mn=e("EEgj");class hn{constructor(n,l){this.componentFactoryResolver=n,this.analyticsService=l,this.hostClass="l-transaction-view-top-contents",this.componentRefMap=new Map,this.activeTab="heap"}ngOnInit(){this.initTabList(),this.loadComponent(this.activeTab)}ngOnDestroy(){this.chartContainer.get(0).destroy()}onTabClick(n){n!==this.activeTab&&(this.activeTab=n,this.chartContainer.detach(0),this.loadComponent(n))}initTabList(){this.tabList=[{id:"heap",display:"Heap"},{id:"nonHeap",display:"Non Heap"},{id:"cpu",display:"CPU Load"}]}matchChartType(n){switch(n){case"heap":return pn.a.AGENT_JVM_HEAP;case"nonHeap":return pn.a.AGENT_JVM_NON_HEAP;case"cpu":return pn.a.AGENT_CPU}}loadComponent(n){this.analyticsService.trackEvent(Z.e[`CLICK_${n}`]);const l=this.componentRefMap.get(n);if(l)this.chartContainer.insert(l.hostView),l.instance.onBackToTheView();else{const l=this.componentFactoryResolver.resolveComponentFactory(mn.a),e=this.chartContainer.createComponent(l);this.componentRefMap.set(n,e),e.instance.chartType=this.matchChartType(n)}}}var gn=[['[_nghost-%COMP%]{display:block;width:100%;height:100%}.l-transaction-view-top[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex}.l-left-section[_ngcontent-%COMP%], .l-right-section[_ngcontent-%COMP%]{width:50%;height:100%;padding:5px 25px}.l-left-section[_ngcontent-%COMP%]{background-color:#fff}.l-tab-menu-list[_ngcontent-%COMP%]{border-bottom:1px solid #e6e8ec}.l-tab-menu-list[_ngcontent-%COMP%]:after{content:"";display:block;width:100%;height:0;visibility:hidden;clear:both}.l-tab-menu-list-item[_ngcontent-%COMP%]{float:left}.l-tab-menu-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;font-size:13px;color:#666;padding:14px 15px;border:1px solid transparent;border-top-left-radius:3px;border-top-right-radius:3px;line-height:1em}.l-tab-menu-list-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{border-color:#e6e8ec #e6e8ec #fff}.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;background:var(--primary-color)}.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{border-color:transparent}.l-right-section[_ngcontent-%COMP%]{position:relative}']],vn=t["\u0275crt"]({encapsulation:0,styles:gn,data:{}});function fn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"li",[["class","l-tab-menu-list-item"]],[[2,"active",null]],null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"a",[],null,[[null,"click"]],(function(n,l,e){var t=!0,a=n.component;"click"===l&&(t=!1!==a.onTabClick(n.context.$implicit.id)&&t);return t}),null,null)),(n()(),t["\u0275ted"](2,null,["",""]))],null,(function(n,l){var e=l.component;n(l,0,0,l.context.$implicit.id===e.activeTab),n(l,2,0,l.context.$implicit.display)}))}function bn(n){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{chartContainer:0}),(n()(),t["\u0275eld"](1,0,null,null,8,"div",[["class","l-transaction-view-top"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,4,"div",[["class","l-left-section"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,2,"ul",[["class","font-opensans l-tab-menu-list"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,fn)),t["\u0275did"](5,278528,null,0,on.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](6,16777216,[[1,3],["chartContainer",1]],null,0,null,null,null,null,null,null,null)),(n()(),t["\u0275eld"](7,0,null,null,2,"div",[["class","l-right-section"]],null,null,null,null,null)),(n()(),t["\u0275eld"](8,0,null,null,1,"pp-server-map-others-container",[],null,null,null,rn.b,rn.a)),t["\u0275did"](9,245760,null,0,un.a,[t.ChangeDetectorRef,t.Injector,t.ComponentFactoryResolver,y.a,S.a,nn.a,cn.a,sn.a,dn.a],{sourceType:[0,"sourceType"]},null)],(function(n,l){n(l,5,0,l.component.tabList);n(l,9,0,"TRANSACTION_VIEW")}),null)}var Cn=t["\u0275ccf"]("pp-transaction-view-top-contents-container",hn,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"pp-transaction-view-top-contents-container",[],[[8,"className",0]],null,null,bn,vn)),t["\u0275did"](1,245760,null,0,hn,[t.ComponentFactoryResolver,M.a],null,null)],(function(n,l){n(l,1,0)}),(function(n,l){n(l,0,0,t["\u0275nov"](l,1).hostClass)}))}),{},{},[]),wn=e("s7LF"),_n=e("7m67"),yn=e("IheW"),Mn=e("6oKA"),Rn=e("1o/0"),Pn=e("Q7fR"),Sn=e("uyHx"),On=e("myvU"),Tn=e("22Na"),In=e("IbkX"),En=e("M0ag"),xn=e("uuw7"),kn=e("MyRj"),zn=e("lXRe"),Fn=e("eJHu"),Nn=e("5gQU"),Vn=e("daz4"),jn=e("bGL8"),Dn=e("3Pji"),An=e("C8VF"),Ln=e("FgOB"),Gn=e("gRh7"),Un=e("XEjc"),Hn=e("Z7st"),Xn=e("sM80");class Jn{}var Zn=e("7XXT"),Bn=e("eC/d"),qn=e("IQUl"),Wn=e("IP0z"),$n=e("/HVE"),Qn=e("hOhj"),Kn=e("q/BS"),Yn=e("SXLW"),nl=e("lYoP"),ll=e("TwHB");class el{}e.d(l,"TransactionViewPageModuleNgFactory",(function(){return tl}));var tl=t["\u0275cmf"](a,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,o.a,r.a,u.a,c.a,s.a,d.a,p.a,m.a,h.a,g.a,v.a,an,Cn]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,on.NgLocalization,on.NgLocaleLocalization,[t.LOCALE_ID,[2,on["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,wn["\u0275angular_packages_forms_forms_o"],wn["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,_n.a,_n.a,[yn.c,Q.a]),t["\u0275mpd"](4608,Mn.a,Mn.a,[yn.c,Q.a]),t["\u0275mpd"](4608,Rn.a,Rn.a,[yn.c,Q.a]),t["\u0275mpd"](4608,cn.a,cn.a,[]),t["\u0275mpd"](4608,sn.a,sn.a,[Q.a,I.a]),t["\u0275mpd"](4608,Pn.a,Pn.a,[yn.c,y.a,Q.a]),t["\u0275mpd"](4608,Sn.a,Sn.a,[yn.c,I.a,y.a,K.a,Q.a,S.a,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,N.a,N.a,[]),t["\u0275mpd"](4608,On.a,On.a,[yn.c]),t["\u0275mpd"](1073742336,on.CommonModule,on.CommonModule,[]),t["\u0275mpd"](1073742336,x.a,x.a,[]),t["\u0275mpd"](1073742336,k.q,k.q,[[2,k.v],[2,k.m]]),t["\u0275mpd"](1073742336,Tn.ClickOutsideModule,Tn.ClickOutsideModule,[]),t["\u0275mpd"](1073742336,wn["\u0275angular_packages_forms_forms_d"],wn["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,wn.FormsModule,wn.FormsModule,[]),t["\u0275mpd"](1073742336,In.b,In.b,[]),t["\u0275mpd"](1073742336,En.a,En.a,[]),t["\u0275mpd"](1073742336,xn.a,xn.a,[]),t["\u0275mpd"](1073742336,kn.a,kn.a,[]),t["\u0275mpd"](1073742336,zn.a,zn.a,[]),t["\u0275mpd"](1073742336,Fn.a,Fn.a,[]),t["\u0275mpd"](1073742336,Nn.a,Nn.a,[]),t["\u0275mpd"](1073742336,Vn.a,Vn.a,[]),t["\u0275mpd"](1073742336,jn.a,jn.a,[]),t["\u0275mpd"](1073742336,Dn.b,Dn.b,[]),t["\u0275mpd"](1073742336,An.a,An.a,[]),t["\u0275mpd"](1073742336,Ln.a,Ln.a,[]),t["\u0275mpd"](1073742336,Gn.a,Gn.a,[]),t["\u0275mpd"](1073742336,Un.a,Un.a,[]),t["\u0275mpd"](1073742336,Hn.a,Hn.a,[]),t["\u0275mpd"](1073742336,Xn.a,Xn.a,[]),t["\u0275mpd"](1073742336,Jn,Jn,[]),t["\u0275mpd"](1073742336,Zn.a,Zn.a,[]),t["\u0275mpd"](1073742336,Bn.a,Bn.a,[]),t["\u0275mpd"](1073742336,qn.a,qn.a,[]),t["\u0275mpd"](1073742336,Wn.a,Wn.a,[]),t["\u0275mpd"](1073742336,$n.b,$n.b,[]),t["\u0275mpd"](1073742336,Qn.g,Qn.g,[]),t["\u0275mpd"](1073742336,Kn.a,Kn.a,[]),t["\u0275mpd"](1073742336,Yn.AgGridModule,Yn.AgGridModule,[]),t["\u0275mpd"](1073742336,nl.a,nl.a,[]),t["\u0275mpd"](1073742336,ll.a,ll.a,[]),t["\u0275mpd"](1073742336,el,el,[]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](1024,k.k,(function(){return[[{path:"",component:$,children:[{path:":agentId/:traceId/:focusTimestamp/:spanId",component:hn},{path:":agentId/:traceId/:focusTimestamp",redirectTo:"/main",pathMatch:"full"},{path:":agentId/:traceId",redirectTo:"/main",pathMatch:"full"},{path:":agentId",redirectTo:"/main",pathMatch:"full"},{path:"",redirectTo:"/main",pathMatch:"full"}]}]]}),[])])}))}}]);
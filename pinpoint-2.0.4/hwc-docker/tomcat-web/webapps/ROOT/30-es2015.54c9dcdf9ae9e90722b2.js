(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{YsHj:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));class a{constructor(e,t){this.el=e,this.renderer=t}ngOnInit(){const e=this.el.nativeElement.querySelector(".l-disabled");this.renderer.setStyle(e,"z-index",this.zIndex),this.renderer.setStyle(e,"width",`calc(100% - ${this.marginWidth}px)`)}}},hIJE:function(e,t,n){"use strict";var a=n("8Y7J"),l=n("YsHj");n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var i=[[".l-disabled[_ngcontent-%COMP%]{top:0;left:0;height:100%;position:absolute;background:linear-gradient(135deg,rgba(226,226,226,.7) 0,rgba(219,219,219,.7) 43%,rgba(209,209,209,.7) 51%,rgba(254,254,254,.7) 100%)}"]],r=a["\u0275crt"]({encapsulation:0,styles:i,data:{}});function o(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,0,"div",[["class","l-disabled"]],null,null,null,null,null))],null,null)}a["\u0275ccf"]("pp-film-for-disable",l.a,(function(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"pp-film-for-disable",[],null,null,null,o,r)),a["\u0275did"](1,114688,null,0,l.a,[a.ElementRef,a.Renderer2],null,null)],(function(e,t){e(t,1,0)}),null)}),{zIndex:"zIndex",marginWidth:"marginWidth"},{},[])},thgd:function(e,t,n){"use strict";n.r(t);var a=n("8Y7J");class l{}var i=n("pMnS"),r=n("o0cf"),o=n("XWnP"),c=n("exIq"),s=n("FVN4"),u=n("2lf1"),d=n("qaS5"),p=n("pwZw"),h=n("3WZk"),g=n("NxbU"),m=n("C6IX"),b=n("m1dV"),f=n("QJdi"),v=n("7rHv"),S=n("w1KT"),w=n("xcNo"),T=n("W33f"),I=n("/yY+"),C=n("+2ZX"),y=n("rUgL"),R=n("SVse"),D=n("XNiG"),O=n("pLZG"),x=n("IzEk"),N=n("1G5W"),z=n("TwVa"),E=n("ZF+8"),k=n("9plS");class V{constructor(e,t,n,a){this.changeDetectorRef=e,this.storeHelperService=t,this.newUrlStateNotificationService=n,this.transactionMetaDataService=a,this.unsubscribe=new D.b}ngOnInit(){this.connectStore(),this.newUrlStateNotificationService.onUrlStateChange$.pipe(Object(O.a)(e=>e.hasValue(z.b.END_TIME,z.b.PERIOD)),Object(x.a)(1)).subscribe(e=>{const t=e.getEndTimeToNumber();this.rangeValue=[e.getStartTimeToNumber(),t],this.selectedRangeValue=[t,t],this.connectMetaDataService()})}ngOnDestroy(){this.unsubscribe.next(),this.unsubscribe.complete()}connectStore(){this.timezone$=this.storeHelperService.getTimezone(this.unsubscribe),this.dateFormat$=this.storeHelperService.getDateFormat(this.unsubscribe,7)}connectMetaDataService(){this.transactionMetaDataService.onTransactionDataRange$.pipe(Object(N.a)(this.unsubscribe)).subscribe(e=>{this.selectedRangeValue=e,this.changeDetectorRef.detectChanges()})}}var A=n("OPvN"),F=n("nUCp"),M=[["[_nghost-%COMP%]{width:100%}.l-wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;padding:10px 10px 0}"]],_=a["\u0275crt"]({encapsulation:0,styles:M,data:{}});function P(e){return a["\u0275vid"](2,[(e()(),a["\u0275eld"](0,0,null,null,4,"div",[["class","l-wrapper"]],null,null,null,null,null)),(e()(),a["\u0275eld"](1,0,null,null,3,"pp-simple-progress-slider",[],null,null,null,C.b,C.a)),a["\u0275did"](2,638976,null,0,y.a,[],{timezone:[0,"timezone"],dateFormat:[1,"dateFormat"],rangeValue:[2,"rangeValue"],selectedRangeValue:[3,"selectedRangeValue"],type:[4,"type"],gradationCount:[5,"gradationCount"]},null),a["\u0275pid"](131072,R.AsyncPipe,[a.ChangeDetectorRef]),a["\u0275pid"](131072,R.AsyncPipe,[a.ChangeDetectorRef])],(function(e,t){var n=t.component;e(t,2,0,a["\u0275unv"](t,2,0,a["\u0275nov"](t,3).transform(n.timezone$)),a["\u0275unv"](t,2,1,a["\u0275nov"](t,4).transform(n.dateFormat$)),n.rangeValue,n.selectedRangeValue,"date",6)}),null)}a["\u0275ccf"]("pp-data-load-indicator-for-transaction-list-container",V,(function(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"pp-data-load-indicator-for-transaction-list-container",[],null,null,null,P,_)),a["\u0275did"](1,245760,null,0,V,[a.ChangeDetectorRef,A.a,F.a,k.a],null,null)],(function(e,t){e(t,1,0)}),null)}),{},{},[]);var j=n("B8vc"),L=n("asHn");class G{constructor(e,t){this.changeDetectorRef=e,this.transactionMetaDataService=t,this.unsubscribe=new D.b,this.countInfo=[0,0],this.showCountInfo=!0,this.currentState=L.a.MORE}ngOnInit(){this.transactionMetaDataService.onTransactionDataCount$.pipe(Object(N.a)(this.unsubscribe)).subscribe(e=>{this.countInfo=e.concat(),this.currentState=this.isLoadCompleted()?L.a.DONE:L.a.MORE,this.changeDetectorRef.detectChanges()})}ngOnDestroy(){this.unsubscribe.next(),this.unsubscribe.complete()}isLoadCompleted(){return this.countInfo[0]===this.countInfo[1]}onChangeState(e){this.transactionMetaDataService.loadData()}}var H=[["[_nghost-%COMP%]{display:-webkit-box;display:flex}"]],U=a["\u0275crt"]({encapsulation:0,styles:H,data:{}});function W(e){return a["\u0275vid"](2,[(e()(),a["\u0275eld"](0,0,null,null,1,"pp-state-button",[],null,[[null,"outChangeState"]],(function(e,t,n){var a=!0,l=e.component;"outChangeState"===t&&(a=!1!==l.onChangeState(n)&&a);return a}),j.b,j.a)),a["\u0275did"](1,638976,null,0,L.b,[I.a],{width:[0,"width"],showCountInfo:[1,"showCountInfo"],countInfo:[2,"countInfo"],currentState:[3,"currentState"]},{outChangeState:"outChangeState"})],(function(e,t){var n=t.component;e(t,1,0,150,n.showCountInfo,n.countInfo,n.currentState)}),null)}a["\u0275ccf"]("pp-state-button-for-transaction-list-container",G,(function(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"pp-state-button-for-transaction-list-container",[],null,null,null,W,U)),a["\u0275did"](1,245760,null,0,G,[a.ChangeDetectorRef,k.a],null,null)],(function(e,t){e(t,1,0)}),null)}),{},{},[]);var $=n("UQIx"),X=n("u41I"),q=n("9BJz"),B=n("+EyX"),Y=n("99iz"),Z=n("oveR"),J=n("hNGQ"),K=n("+dxm"),Q=n("jIY6"),ee=n("f0Wu");class te{constructor(){this.outSelectTransaction=new a.EventEmitter,this.outSelectTransactionView=new a.EventEmitter}ngOnInit(){this.initGridOptions()}ngOnChanges(e){e.addData&&e.addData.currentValue&&this.gridOptions.api.updateRowData({add:this.addData}),e.resized&&!e.resized.firstChange&&e.resized.currentValue&&this.gridOptions.api.doLayout(),e.timezone&&!1===e.timezone.firstChange&&this.gridOptions.api.refreshCells({columns:["startTime"],force:!0}),e.dateFormat&&!1===e.dateFormat.firstChange&&this.gridOptions.api.refreshCells({columns:["startTime"],force:!0})}initGridOptions(){this.gridOptions={defaultColDef:{resizable:!0,sortable:!0},rowHeight:30,columnDefs:this.makeColumnDefs(),animateRows:!0,rowSelection:"single",headerHeight:34,enableCellTextSelection:!0,getRowClass:e=>1===e.data.exception?"ag-row-exception":"",onCellClicked:e=>{if("path"===e.colDef.field){const t=e.event.target.tagName.toUpperCase();if("I"===t||"BUTTON"===t)return void this.outSelectTransactionView.next({agentId:e.data.agentId,traceId:e.data.traceId,collectorAcceptTime:e.data.collectorAcceptTime,spanId:e.data.spanId})}this.currentTraceId!==e.data.traceId&&(this.currentTraceId=e.data.traceId,this.outSelectTransaction.next({traceId:e.data.traceId,collectorAcceptTime:e.data.collectorAcceptTime,elapsed:e.data.responseTime}))}}}onGridReady(e){this.gridOptions.api.forEachNode(e=>{this.currentTraceId===e.data.traceId&&e.setSelected(!0)})}onGridSizeChanged(e){this.gridOptions.api.sizeColumnsToFit()}onRendered(){this.gridOptions.api.sizeColumnsToFit()}makeColumnDefs(){return[{headerName:"#",field:"id",width:40,headerClass:"id-header",cellStyle:()=>({"text-align":"center"}),suppressSizeToFit:!0},{headerName:"StartTime",field:"startTime",width:170,valueFormatter:e=>0===e.value?"":ee(e.value).tz(this.timezone).format(this.dateFormat),suppressSizeToFit:!0},{headerName:"Path",field:"path",width:370,cellRenderer:e=>'<button style="margin-right:3px"><i class="fa fa-list-alt" aria-hidden="true"></i></button>'+e.value,tooltipField:"path"},{headerName:"EndPoint",field:"endpoint",width:130,cellStyle:this.alignLeftCellStyle,suppressSizeToFit:!0},{headerName:"Res(ms)",field:"responseTime",width:70,cellStyle:this.alignRightCellStyle,sort:"desc",valueFormatter:e=>""===e.value?"":(new Intl.NumberFormat).format(e.value),suppressSizeToFit:!0},{headerName:"Exception",field:"exception",width:50,cellStyle:()=>({"text-align":"center"}),cellRenderer:e=>1===e.value?'<i class="fa fa-fire" style="color:red"></i>':"",suppressSizeToFit:!0},{headerName:"Agent",field:"agentId",width:200,tooltipField:"agentId"},{headerName:"Client IP",field:"clientIp",width:150},{headerName:"Transaction",field:"traceId",width:270,tooltipField:"traceId"}]}alignLeftCellStyle(){return{"text-align":"left"}}alignRightCellStyle(){return{"text-align":"right"}}}var ne=[[":host{width:100%;height:100%}#transaction-table .ag-root{border:none;font-size:12px;font-family:'Open Sans',sans-serif}#transaction-table .ag-cell{padding:4px;font-family:'Open Sans',sans-serif}#transaction-table .ag-column-moving .ag-cell{-webkit-transition:left .2s;transition:left .2s}#transaction-table .ag-header-cell-moving .ag-header-cell-label{opacity:0;filter:alpha(opacity=0)}#transaction-table .ag-header-cell-moving{background-color:#bebebe}#transaction-table .ag-header-cell-moving-clone{border-right:1px solid grey;border-left:1px solid grey;background-color:rgba(220,220,220,.8)}#transaction-table .ag-header{background:#f6f8fb;border-bottom:1px solid #e6e8ec;line-height:2}#transaction-table .ag-header-cell{font-size:12px;font-weight:600;font-family:'Open Sans',sans-serif;padding-left:2px;padding-right:2px}#transaction-table .ag-header-cell-resize:after{border-right:none}#transaction-table .ag-header-cell-label{padding:4px}#transaction-table .ag-group-expanded span{margin-right:4px}#transaction-table .ag-row:hover{background-color:#f5f5f5}#transaction-table .ag-row{cursor:pointer;line-height:2}#transaction-table .ag-body,#transaction-table .ag-body-viewport{background-color:#fff}#transaction-table .ag-menu{background-color:#fff;border:1px solid grey}#transaction-table .fa{font-size:14px}#transaction-table .ag-row-exception{background-color:#fff1f1}#transaction-table .ag-row-selected{background-color:#e4f5e3}#transaction-table .id-header .ag-header-cell-label{-webkit-box-pack:center!important;justify-content:center!important}"]],ae=a["\u0275crt"]({encapsulation:2,styles:ne,data:{}});function le(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,16777216,null,null,4,"ag-grid-angular",[["class","ag-theme-balham"],["id","transaction-table"],["style","width:100% ;height:100%"]],null,[[null,"gridReady"],[null,"gridSizeChanged"],[null,"firstDataRendered"]],(function(e,t,n){var a=!0,l=e.component;"gridReady"===t&&(a=!1!==l.onGridReady(n)&&a);"gridSizeChanged"===t&&(a=!1!==l.onGridSizeChanged(n)&&a);"firstDataRendered"===t&&(a=!1!==l.onRendered()&&a);return a}),Z.b,Z.a)),a["\u0275prd"](512,null,J.AngularFrameworkOverrides,J.AngularFrameworkOverrides,[a.NgZone]),a["\u0275prd"](512,null,K.AngularFrameworkComponentWrapper,K.AngularFrameworkComponentWrapper,[]),a["\u0275did"](3,4898816,null,1,Q.AgGridAngular,[a.ElementRef,a.ViewContainerRef,J.AngularFrameworkOverrides,K.AngularFrameworkComponentWrapper,a.ComponentFactoryResolver],{gridOptions:[0,"gridOptions"],rowData:[1,"rowData"]},{gridReady:"gridReady",gridSizeChanged:"gridSizeChanged",firstDataRendered:"firstDataRendered"}),a["\u0275qud"](603979776,1,{columns:1})],(function(e,t){var n=t.component;e(t,3,0,n.gridOptions,n.rowData)}),null)}a["\u0275ccf"]("pp-transaction-table-grid",te,(function(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"pp-transaction-table-grid",[],null,null,null,le,ae)),a["\u0275did"](1,638976,null,0,te,[],null,null)],(function(e,t){e(t,1,0)}),null)}),{rowData:"rowData",addData:"addData",resized:"resized",currentTraceId:"currentTraceId",timezone:"timezone",dateFormat:"dateFormat"},{outSelectTransaction:"outSelectTransaction",outSelectTransactionView:"outSelectTransactionView"},[]);var ie=n("oIO+");class re{constructor(e,t,n,a,l,i,r){this.storeHelperService=e,this.urlRouteManagerService=t,this.newUrlStateNotificationService=n,this.transactionMetaDataService=a,this.gutterEventService=l,this.analyticsService=i,this.cd=r,this.unsubscribe=new D.b,this.transactionData=[],this.transactionIndex=1}ngOnInit(){this.connectStore(),this.newUrlStateNotificationService.onUrlStateChange$.pipe(Object(N.a)(this.unsubscribe)).subscribe(e=>{e.hasValue(z.b.TRANSACTION_INFO)&&(this.selectedTraceId=e.getPathValue(z.b.TRANSACTION_INFO).replace(/(.*)-\d*-\d*$/,"$1"),this.dispatchTransaction()),0===this.transactionData.length&&this.transactionMetaDataService.loadData()}),this.connectMetaDataService(),this.gutterEventService.onGutterResized$.pipe(Object(N.a)(this.unsubscribe)).subscribe(e=>{this.areaResized=e})}ngOnDestroy(){this.unsubscribe.next(),this.unsubscribe.complete()}connectStore(){this.storeHelperService.getTimezone(this.unsubscribe).subscribe(e=>{this.timezone=e}),this.storeHelperService.getDateFormat(this.unsubscribe,2).subscribe(e=>{this.dateFormat=e})}connectMetaDataService(){this.transactionMetaDataService.onTransactionDataLoad$.pipe(Object(N.a)(this.unsubscribe),Object(O.a)(e=>e.length>0)).subscribe(e=>{this.transactionData=this.transactionData.concat(e||[]),this.transactionDataForAgGrid?this.transactionAddedDataForAgGrid=this.makeGridData(e):(this.transactionDataForAgGrid=this.makeGridData(e),this.dispatchTransaction()),this.cd.detectChanges()})}makeGridData(e){return e.map(e=>this.makeRow(e))}makeRow(e){return{id:this.transactionIndex++,startTime:e.startTime,path:e.application,endpoint:e.endpoint,responseTime:e.elapsed,exception:e.exception,agentId:e.agentId,clientIp:e.remoteAddr,traceId:e.traceId,spanId:e.spanId,collectorAcceptTime:e.collectorAcceptTime}}findTransaction(e){for(let t=0;t<this.transactionData.length;t++)if(this.transactionData[t].traceId===e)return this.transactionData[t];return null}dispatchTransaction(){if(this.selectedTraceId){const e=this.findTransaction(this.selectedTraceId);e&&this.storeHelperService.dispatch(new ie.a.UpdateTransactionData(e))}}onSelectTransaction(e){this.analyticsService.trackEvent(E.e.SELECT_TRANSACTION),this.urlRouteManagerService.moveOnPage({url:[z.a.TRANSACTION_LIST,this.newUrlStateNotificationService.getPathValue(z.b.APPLICATION).getUrlStr(),this.newUrlStateNotificationService.getPathValue(z.b.PERIOD).getValueWithTime(),this.newUrlStateNotificationService.getPathValue(z.b.END_TIME).getEndTime(),`${e.traceId}-${e.collectorAcceptTime}-${e.elapsed}`]})}onOpenTransactionView(e){this.analyticsService.trackEvent(E.e.OPEN_TRANSACTION_VIEW),this.urlRouteManagerService.openPage({path:[z.a.TRANSACTION_VIEW,e.agentId,e.traceId,e.collectorAcceptTime+"",e.spanId]})}}var oe=n("D5ZC"),ce=n("z7my"),se=[["[_nghost-%COMP%]{display:-webkit-box;display:flex;width:100%;height:100%}pp-transaction-table-grid[_ngcontent-%COMP%]{width:100%}"]],ue=a["\u0275crt"]({encapsulation:0,styles:se,data:{}});function de(e){return a["\u0275vid"](2,[(e()(),a["\u0275eld"](0,0,null,null,1,"pp-transaction-table-grid",[],null,[[null,"outSelectTransaction"],[null,"outSelectTransactionView"]],(function(e,t,n){var a=!0,l=e.component;"outSelectTransaction"===t&&(a=!1!==l.onSelectTransaction(n)&&a);"outSelectTransactionView"===t&&(a=!1!==l.onOpenTransactionView(n)&&a);return a}),le,ae)),a["\u0275did"](1,638976,null,0,te,[],{rowData:[0,"rowData"],addData:[1,"addData"],resized:[2,"resized"],currentTraceId:[3,"currentTraceId"],timezone:[4,"timezone"],dateFormat:[5,"dateFormat"]},{outSelectTransaction:"outSelectTransaction",outSelectTransactionView:"outSelectTransactionView"})],(function(e,t){var n=t.component;e(t,1,0,n.transactionDataForAgGrid,n.transactionAddedDataForAgGrid,n.areaResized,n.selectedTraceId,n.timezone,n.dateFormat)}),null)}a["\u0275ccf"]("pp-transaction-table-grid-container",re,(function(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"pp-transaction-table-grid-container",[],null,null,null,de,ue)),a["\u0275did"](1,245760,null,0,re,[A.a,oe.a,F.a,k.a,ce.a,I.a,a.ChangeDetectorRef],null,null)],(function(e,t){e(t,1,0)}),null)}),{},{},[]);var pe=n("iInd");class he{constructor(e,t){this.webAppSettingDataService=e,this.gutterEventService=t}ngOnInit(){this.splitSize=this.webAppSettingDataService.getSplitSize()}onGutterResized({sizes:e}){this.webAppSettingDataService.setSplitSize(e.map(e=>Number.parseFloat(e.toFixed(2)))),this.gutterEventService.resizedGutter(e)}}var ge=[[".l-widget-group[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-webkit-box-flex:1;flex:1;padding:0 15px;height:100%;-webkit-box-align:center;align-items:center}.l-main-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;height:calc(100vh - 50px);overflow-y:hidden}split-area[_ngcontent-%COMP%]:first-child{overflow:hidden!important}"]],me=a["\u0275crt"]({encapsulation:0,styles:ge,data:{}});function be(e){return a["\u0275vid"](2,[(e()(),a["\u0275eld"](0,0,null,null,1,"pp-notice-container",[],null,null,null,b.b,b.a)),a["\u0275did"](1,114688,null,0,f.a,[a.ElementRef,a.Renderer2,v.a],null,null),(e()(),a["\u0275eld"](2,0,null,null,9,"header",[["class","l-header flex-container flex-row"]],null,null,null,null,null)),(e()(),a["\u0275eld"](3,0,null,null,1,"pp-header-logo",[],null,null,null,S.b,S.a)),a["\u0275did"](4,114688,null,0,w.a,[T.a,I.a],null,null),(e()(),a["\u0275eld"](5,0,null,null,2,"div",[["class","l-widget-group"]],null,null,null,null,null)),(e()(),a["\u0275eld"](6,0,null,null,1,"pp-data-load-indicator-for-transaction-list-container",[],null,null,null,P,_)),a["\u0275did"](7,245760,null,0,V,[a.ChangeDetectorRef,A.a,F.a,k.a],null,null),(e()(),a["\u0275eld"](8,0,null,null,1,"pp-state-button-for-transaction-list-container",[],null,null,null,W,U)),a["\u0275did"](9,245760,null,0,G,[a.ChangeDetectorRef,k.a],null,null),(e()(),a["\u0275eld"](10,0,null,null,1,"pp-configuration-icon-container",[],null,null,null,$.b,$.a)),a["\u0275did"](11,114688,null,0,X.a,[q.a,I.a,a.ComponentFactoryResolver,a.Injector],null,null),(e()(),a["\u0275eld"](12,0,null,null,10,"div",[["class","l-main-container"]],null,null,null,null,null)),(e()(),a["\u0275eld"](13,0,null,null,9,"as-split",[["direction","vertical"]],null,[[null,"dragEnd"]],(function(e,t,n){var a=!0,l=e.component;"dragEnd"===t&&(a=!1!==l.onGutterResized(n)&&a);return a}),B.b,B.a)),a["\u0275did"](14,4374528,null,0,Y.c,[a.NgZone,a.ElementRef,a.ChangeDetectorRef,a.Renderer2],{direction:[0,"direction"]},{dragEnd:"dragEnd"}),(e()(),a["\u0275eld"](15,0,null,0,3,"as-split-area",[],null,null,null,null,null)),a["\u0275did"](16,212992,null,0,Y.b,[a.NgZone,a.ElementRef,a.Renderer2,Y.c],{size:[0,"size"]},null),(e()(),a["\u0275eld"](17,0,null,null,1,"pp-transaction-table-grid-container",[],null,null,null,de,ue)),a["\u0275did"](18,245760,null,0,re,[A.a,oe.a,F.a,k.a,ce.a,I.a,a.ChangeDetectorRef],null,null),(e()(),a["\u0275eld"](19,0,null,0,3,"as-split-area",[],null,null,null,null,null)),a["\u0275did"](20,212992,null,0,Y.b,[a.NgZone,a.ElementRef,a.Renderer2,Y.c],{size:[0,"size"]},null),(e()(),a["\u0275eld"](21,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),a["\u0275did"](22,212992,null,0,pe.r,[pe.b,a.ViewContainerRef,a.ComponentFactoryResolver,[8,null],a.ChangeDetectorRef],null,null)],(function(e,t){var n=t.component;e(t,1,0),e(t,4,0),e(t,7,0),e(t,9,0),e(t,11,0);e(t,14,0,"vertical"),e(t,16,0,n.splitSize[0]),e(t,18,0),e(t,20,0,n.splitSize[1]),e(t,22,0)}),null)}var fe=a["\u0275ccf"]("pp-transaction-list-page",he,(function(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"pp-transaction-list-page",[],null,null,null,be,me)),a["\u0275did"](1,114688,null,0,he,[T.a,ce.a],null,null)],(function(e,t){e(t,1,0)}),null)}),{},{},[]),ve=n("BVPj"),Se=n("kjD4"),we=n("8PdE"),Te=n("d7A3"),Ie=n("hh58"),Ce=n("/vre"),ye=n("KjnD"),Re=n("YXhU"),De=n("kKeB"),Oe=n("hIJE"),xe=n("YsHj"),Ne=n("29DB"),ze=n("Qloe"),Ee=n("6Ldl"),ke=n("FzIv"),Ve=n("j/kz");class Ae{constructor(e,t,n,a,l,i,r,o){this.storeHelperService=e,this.urlRouteManagerService=t,this.transactionDetailDataService=n,this.analyticsService=a,this.dynamicPopupService=l,this.componentFactoryResolver=i,this.injector=r,this.cd=o,this.unsubscribe=new D.b}ngOnInit(){this.storeHelperService.getTransactionViewType(this.unsubscribe).subscribe(e=>{this.activeTabKey=e,this.cd.detectChanges()}),this.transactionDetailDataService.partInfo$.pipe(Object(N.a)(this.unsubscribe)).subscribe(e=>{this.partInfo=e,this.cd.detectChanges()}),this.connectStore()}ngOnDestroy(){this.unsubscribe.next(),this.unsubscribe.complete()}connectStore(){this.storeHelperService.getTransactionData(this.unsubscribe).pipe(Object(O.a)(e=>!!e),Object(O.a)(({application:e,agentId:t,traceId:n})=>!!e&&!!t&&!!n)).subscribe(e=>{this.transactionInfo=e,this.cd.detectChanges()})}onSelectViewType(e){this.analyticsService.trackEvent(E.e[`CLICK_${e}`]),this.storeHelperService.dispatch(new ie.a.ChangeTransactionViewType(e))}onOpenDetailView(){this.analyticsService.trackEvent(E.e.OPEN_TRANSACTION_VIEW),this.urlRouteManagerService.openPage({path:[z.a.TRANSACTION_VIEW,this.transactionInfo.agentId,this.transactionInfo.traceId,this.transactionInfo.collectorAcceptTime+"",this.transactionInfo.spanId]})}onOpenExtraView(e){e.open?this.urlRouteManagerService.openPage(function(e){const t=e.split("?");return{path:[t[0]],queryParam:t[1]?t[1].split("&").reduce((e,t)=>{const[n,a]=t.split("=");return Object.assign({},e,{[n]:a})},{}):null}}(e.url)):this.dynamicPopupService.openPopup({data:{title:"Notice",contents:this.partInfo.disableButtonMessage},component:Ve.a},{resolver:this.componentFactoryResolver,injector:this.injector})}}var Fe=n("TMnP"),Me=[[""]],_e=a["\u0275crt"]({encapsulation:0,styles:Me,data:{}});function Pe(e){return a["\u0275vid"](2,[(e()(),a["\u0275eld"](0,0,null,null,1,"pp-transaction-detail-menu",[],null,[[null,"outOpenDetailView"],[null,"outSelectViewType"],[null,"outOpenExtraView"]],(function(e,t,n){var a=!0,l=e.component;"outOpenDetailView"===t&&(a=!1!==l.onOpenDetailView()&&a);"outSelectViewType"===t&&(a=!1!==l.onSelectViewType(n)&&a);"outOpenExtraView"===t&&(a=!1!==l.onOpenExtraView(n)&&a);return a}),Ee.b,Ee.a)),a["\u0275did"](1,114688,null,0,ke.a,[],{activeTabKey:[0,"activeTabKey"],partInfo:[1,"partInfo"]},{outSelectViewType:"outSelectViewType",outOpenDetailView:"outOpenDetailView",outOpenExtraView:"outOpenExtraView"})],(function(e,t){var n=t.component;e(t,1,0,n.activeTabKey,n.partInfo)}),null)}a["\u0275ccf"]("pp-transaction-detail-menu-container",Ae,(function(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"pp-transaction-detail-menu-container",[],null,null,null,Pe,_e)),a["\u0275did"](1,245760,null,0,Ae,[A.a,oe.a,Fe.a,I.a,q.a,a.ComponentFactoryResolver,a.Injector,a.ChangeDetectorRef],null,null)],(function(e,t){e(t,1,0)}),null)}),{},{},[]);var je=n("XncD"),Le=n("b1Km"),Ge=n("TSSN"),He=n("jVku"),Ue=n("xlwc"),We=n("/lTL"),$e=n("lreY"),Xe=n("fqV1"),qe=n("vkgz"),Be=n("eIep"),Ye=n("Xf8D"),Ze=n("Ej/u");class Je{constructor(e,t,n,a,l,i,r,o,c){this.storeHelperService=e,this.urlRouteManagerService=t,this.transactionDetailDataService=n,this.analyticsService=a,this.dynamicPopupService=l,this.componentFactoryResolver=i,this.injector=r,this.renderer=o,this.cd=c,this.unsubscribe=new D.b,this.useDisable=!0,this.showLoading=!0,this.removeCallTree=!1}ngOnInit(){this.connectStore()}ngOnDestroy(){this.unsubscribe.next(),this.unsubscribe.complete()}connectStore(){this.storeHelperService.getTransactionViewType(this.unsubscribe).pipe(Object(qe.a)(e=>{this.renderer.setStyle(this.callTreeComponent.nativeElement,"display","callTree"===e?"block":"none")})).subscribe(e=>{this.activeView=e,this.showSearch="callTree"===this.activeView||"timeline"===this.activeView}),this.storeHelperService.getTransactionData(this.unsubscribe).pipe(Object(O.a)(e=>!!e),Object(O.a)(({agentId:e,spanId:t,traceId:n,collectorAcceptTime:a})=>!!(e&&t&&n&&a)),Object(qe.a)(()=>{this.setDisplayGuide(!0),this.renderer.setStyle(this.callTreeComponent.nativeElement,"display","none")}),Object(qe.a)(e=>this.transactionInfo=e),Object(Be.a)(({agentId:e,spanId:t,traceId:n,collectorAcceptTime:a})=>this.transactionDetailDataService.getData(e,t,n,a))).subscribe(e=>{this.storeHelperService.dispatch(new ie.a.UpdateTransactionDetailData(e)),this.storeHelperService.dispatch(new ie.a.ChangeTransactionViewType("callTree")),this.setDisplayGuide(!1),this.renderer.setStyle(this.callTreeComponent.nativeElement,"display","block")},e=>{this.dynamicPopupService.openPopup({data:{title:"Error",contents:e},component:Ze.a},{resolver:this.componentFactoryResolver,injector:this.injector}),this.setDisplayGuide(!1),this.cd.detectChanges()})}setDisplayGuide(e){this.showLoading=e,this.useDisable=e}onOpenTransactionDetailPage(){this.analyticsService.trackEvent(E.e.OPEN_TRANSACTION_DETAIL),this.urlRouteManagerService.openPage({path:[z.a.TRANSACTION_DETAIL,this.transactionInfo.traceId,this.transactionInfo.collectorAcceptTime+"",this.transactionInfo.agentId,this.transactionInfo.spanId]})}onShowHelp(e){this.analyticsService.trackEvent(E.e.TOGGLE_HELP_VIEWER,Ye.a.CALL_TREE);const{left:t,top:n,width:a,height:l}=e.target.getBoundingClientRect();this.dynamicPopupService.openPopup({data:Ye.a.CALL_TREE,coord:{coordX:t+a/2,coordY:n+l/2},component:Ye.b},{resolver:this.componentFactoryResolver,injector:this.injector})}}var Ke=[["[_nghost-%COMP%]{display:block;width:100%;height:100%}.l-content-section[_ngcontent-%COMP%]{height:100%;position:relative}.l-component-wrapper[_ngcontent-%COMP%]{width:100%;height:calc(100% - 84px);position:relative}.l-middle-tool-box[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;height:54px;background-color:#edf2f8;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;padding:0 25px;position:relative}.l-middle-tool-box[_ngcontent-%COMP%], .l-middle-tool-box-tip[_ngcontent-%COMP%]{color:#a8acb5;font-size:18px}"]],Qe=a["\u0275crt"]({encapsulation:0,styles:Ke,data:{}});function et(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a["\u0275eld"](1,0,null,null,1,"pp-server-map-others-container",[["style","height: calc(100% - 84px)"]],null,null,null,ve.b,ve.a)),a["\u0275did"](2,245760,null,0,Se.a,[a.ChangeDetectorRef,a.Injector,a.ComponentFactoryResolver,T.a,q.a,ce.a,we.a,Te.a,Ie.a],{sourceType:[0,"sourceType"]},null)],(function(e,t){e(t,2,0,"TRANSACTION_LIST")}),null)}function tt(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a["\u0275eld"](1,0,null,null,1,"pp-transaction-timeline-container",[],null,null,null,Ce.b,Ce.a)),a["\u0275did"](2,245760,null,0,ye.a,[A.a,Re.a,De.b,I.a,a.ChangeDetectorRef],null,null)],(function(e,t){e(t,2,0)}),null)}function nt(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"pp-film-for-disable",[],null,null,null,Oe.b,Oe.a)),a["\u0275did"](1,114688,null,0,xe.a,[a.ElementRef,a.Renderer2],{zIndex:[0,"zIndex"],marginWidth:[1,"marginWidth"]},null)],(function(e,t){e(t,1,0,9,0)}),null)}function at(e){return a["\u0275vid"](0,[a["\u0275qud"](402653184,1,{callTreeComponent:0}),(e()(),a["\u0275eld"](1,0,null,null,24,"div",[["class","l-content-section"]],null,null,null,null,null)),(e()(),a["\u0275eld"](2,0,null,null,1,"pp-transaction-short-info-container",[],null,null,null,Ne.b,Ne.a)),a["\u0275did"](3,245760,null,0,ze.a,[a.ChangeDetectorRef,A.a],null,null),(e()(),a["\u0275eld"](4,0,null,null,8,"div",[["class","l-middle-tool-box"]],null,null,null,null,null)),(e()(),a["\u0275eld"](5,0,null,null,1,"pp-transaction-detail-menu-container",[],null,null,null,Pe,_e)),a["\u0275did"](6,245760,null,0,Ae,[A.a,oe.a,Fe.a,I.a,q.a,a.ComponentFactoryResolver,a.Injector,a.ChangeDetectorRef],null,null),(e()(),a["\u0275eld"](7,0,null,null,1,"pp-transaction-search-container",[],[[8,"hidden",0]],null,null,je.b,je.a)),a["\u0275did"](8,245760,null,0,Le.a,[A.a,Re.a,Ge.i,He.a,I.a,a.ChangeDetectorRef],null,null),(e()(),a["\u0275eld"](9,0,null,null,3,"div",[],null,null,null,null,null)),(e()(),a["\u0275eld"](10,0,null,null,0,"button",[["class","fas fa-external-link-alt l-middle-tool-box-tip"]],null,[[null,"click"]],(function(e,t,n){var a=!0,l=e.component;"click"===t&&(a=!1!==l.onOpenTransactionDetailPage()&&a);return a}),null,null)),(e()(),a["\u0275ted"](-1,null,[" \xa0 "])),(e()(),a["\u0275eld"](12,0,null,null,0,"button",[["class","fas fa-question-circle l-middle-tool-box-tip"]],null,[[null,"click"]],(function(e,t,n){var a=!0,l=e.component;"click"===t&&(a=!1!==l.onShowHelp(n)&&a);return a}),null,null)),(e()(),a["\u0275eld"](13,0,null,null,8,"div",[["class","l-component-wrapper"]],null,null,null,null,null)),(e()(),a["\u0275eld"](14,0,[[1,0]],null,1,"pp-call-tree-container",[],null,null,null,Ue.b,Ue.a)),a["\u0275did"](15,245760,null,0,We.a,[A.a,Re.a,I.a,q.a,a.ComponentFactoryResolver,a.Injector,De.b],null,null),(e()(),a["\u0275eld"](16,0,null,null,5,null,null,null,null,null,null,null)),a["\u0275did"](17,16384,null,0,R.NgSwitch,[],{ngSwitch:[0,"ngSwitch"]},null),(e()(),a["\u0275and"](16777216,null,null,1,null,et)),a["\u0275did"](19,278528,null,0,R.NgSwitchCase,[a.ViewContainerRef,a.TemplateRef,R.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(e()(),a["\u0275and"](16777216,null,null,1,null,tt)),a["\u0275did"](21,278528,null,0,R.NgSwitchCase,[a.ViewContainerRef,a.TemplateRef,R.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(e()(),a["\u0275and"](16777216,null,null,1,null,nt)),a["\u0275did"](23,16384,null,0,R.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),a["\u0275eld"](24,0,null,null,1,"pp-loading",[],null,null,null,$e.b,$e.a)),a["\u0275did"](25,114688,null,0,Xe.a,[a.ElementRef,a.Renderer2],{showLoading:[0,"showLoading"],zIndex:[1,"zIndex"]},null)],(function(e,t){var n=t.component;e(t,3,0),e(t,6,0),e(t,8,0),e(t,15,0),e(t,17,0,n.activeView);e(t,19,0,"serverMap");e(t,21,0,"timeline"),e(t,23,0,n.useDisable);e(t,25,0,n.showLoading,10)}),(function(e,t){e(t,7,0,!t.component.showSearch)}))}var lt=a["\u0275ccf"]("pp-transaction-list-bottom-contents-container",Je,(function(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"pp-transaction-list-bottom-contents-container",[],null,null,null,at,Qe)),a["\u0275did"](1,245760,null,0,Je,[A.a,oe.a,Fe.a,I.a,q.a,a.ComponentFactoryResolver,a.Injector,a.Renderer2,a.ChangeDetectorRef],null,null)],(function(e,t){e(t,1,0)}),null)}),{},{},[]);class it{constructor(e){this.translateService=e}ngOnInit(){this.translateService.get("TRANSACTION_LIST.SELECT_TRANSACTION").subscribe(e=>{this.message=e})}}var rt=a["\u0275crt"]({encapsulation:0,styles:["div[_ngcontent-%COMP%] {\n            width: 100%;\n            height: 100%;\n            display: flex;\n            font-size: 20px;\n            font-weight: 600;\n            align-items: center;\n            justify-content: center;\n            background-color: rgba(30, 87, 153, 0.3);\n        }"],data:{}});function ot(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(e()(),a["\u0275eld"](1,0,null,null,1,"span",[],null,null,null,null,null)),(e()(),a["\u0275ted"](2,null,["",""]))],null,(function(e,t){e(t,2,0,t.component.message)}))}var ct=a["\u0275ccf"]("pp-transaction-list-empty",it,(function(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"pp-transaction-list-empty",[],null,null,null,ot,rt)),a["\u0275did"](1,114688,null,0,it,[Ge.i],null,null)],(function(e,t){e(t,1,0)}),null)}),{},{},[]),st=n("s7LF"),ut=n("IheW"),dt=n("OsX8"),pt=n("Q7fR"),ht=n("uyHx"),gt=n("myvU"),mt=n("22Na"),bt=n("IbkX"),ft=n("M0ag"),vt=n("uuw7"),St=n("SXLW"),wt=n("7XXT"),Tt=n("nIkL"),It=n("WVCT"),Ct=n("NiRl"),yt=n("MyRj"),Rt=n("lXRe"),Dt=n("eJHu"),Ot=n("eC/d"),xt=n("IQUl"),Nt=n("bGL8"),zt=n("3Pji"),Et=n("C8VF"),kt=n("FgOB"),Vt=n("gRh7"),At=n("XEjc"),Ft=n("Z7st"),Mt=n("sM80"),_t=n("IP0z"),Pt=n("/HVE"),jt=n("hOhj"),Lt=n("q/BS"),Gt=n("lYoP"),Ht=n("TwHB"),Ut=n("5gQU");class Wt{}n.d(t,"TransactionListPageModuleNgFactory",(function(){return $t}));var $t=a["\u0275cmf"](l,[],(function(e){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,r.a,o.a,c.a,s.a,u.a,d.a,p.a,h.a,g.a,m.a,fe,lt,ct]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[a.LOCALE_ID,[2,R["\u0275angular_packages_common_common_a"]]]),a["\u0275mpd"](4608,st["\u0275angular_packages_forms_forms_o"],st["\u0275angular_packages_forms_forms_o"],[]),a["\u0275mpd"](4608,k.a,k.a,[ut.c,dt.a,Ge.i,F.a,oe.a,q.a,a.ComponentFactoryResolver,a.Injector]),a["\u0275mpd"](4608,Re.a,Re.a,[]),a["\u0275mpd"](4608,we.a,we.a,[]),a["\u0275mpd"](4608,Te.a,Te.a,[F.a,A.a]),a["\u0275mpd"](4608,pt.a,pt.a,[ut.c,T.a,F.a]),a["\u0275mpd"](4608,ht.a,ht.a,[ut.c,A.a,T.a,oe.a,F.a,q.a,a.ComponentFactoryResolver,a.Injector]),a["\u0275mpd"](4608,gt.a,gt.a,[ut.c]),a["\u0275mpd"](1073742336,R.CommonModule,R.CommonModule,[]),a["\u0275mpd"](1073742336,Y.a,Y.a,[]),a["\u0275mpd"](1073742336,pe.q,pe.q,[[2,pe.v],[2,pe.m]]),a["\u0275mpd"](1073742336,mt.ClickOutsideModule,mt.ClickOutsideModule,[]),a["\u0275mpd"](1073742336,st["\u0275angular_packages_forms_forms_d"],st["\u0275angular_packages_forms_forms_d"],[]),a["\u0275mpd"](1073742336,st.FormsModule,st.FormsModule,[]),a["\u0275mpd"](1073742336,bt.b,bt.b,[]),a["\u0275mpd"](1073742336,ft.a,ft.a,[]),a["\u0275mpd"](1073742336,vt.a,vt.a,[]),a["\u0275mpd"](1073742336,St.AgGridModule,St.AgGridModule,[]),a["\u0275mpd"](1073742336,wt.a,wt.a,[]),a["\u0275mpd"](1073742336,Tt.a,Tt.a,[]),a["\u0275mpd"](1073742336,It.a,It.a,[]),a["\u0275mpd"](1073742336,Ct.a,Ct.a,[]),a["\u0275mpd"](1073742336,yt.a,yt.a,[]),a["\u0275mpd"](1073742336,Rt.a,Rt.a,[]),a["\u0275mpd"](1073742336,Dt.a,Dt.a,[]),a["\u0275mpd"](1073742336,Ot.a,Ot.a,[]),a["\u0275mpd"](1073742336,xt.a,xt.a,[]),a["\u0275mpd"](1073742336,Nt.a,Nt.a,[]),a["\u0275mpd"](1073742336,zt.b,zt.b,[]),a["\u0275mpd"](1073742336,Et.a,Et.a,[]),a["\u0275mpd"](1073742336,kt.a,kt.a,[]),a["\u0275mpd"](1073742336,Vt.a,Vt.a,[]),a["\u0275mpd"](1073742336,At.a,At.a,[]),a["\u0275mpd"](1073742336,Ft.a,Ft.a,[]),a["\u0275mpd"](1073742336,Mt.a,Mt.a,[]),a["\u0275mpd"](1073742336,_t.a,_t.a,[]),a["\u0275mpd"](1073742336,Pt.b,Pt.b,[]),a["\u0275mpd"](1073742336,jt.g,jt.g,[]),a["\u0275mpd"](1073742336,Lt.a,Lt.a,[]),a["\u0275mpd"](1073742336,Gt.a,Gt.a,[]),a["\u0275mpd"](1073742336,Ht.a,Ht.a,[]),a["\u0275mpd"](1073742336,Ut.a,Ut.a,[]),a["\u0275mpd"](1073742336,Wt,Wt,[]),a["\u0275mpd"](1073742336,l,l,[]),a["\u0275mpd"](1024,pe.k,(function(){return[[{path:"",component:he,children:[{path:":application/:period/:endTime/:transactionInfo",component:Je},{path:":application/:period/:endTime",component:it},{path:":application/:period",redirectTo:"/main",pathMatch:"full"},{path:":application",redirectTo:"/main",pathMatch:"full"},{path:"",redirectTo:"/main",pathMatch:"full"}]}]]}),[])])}))}}]);
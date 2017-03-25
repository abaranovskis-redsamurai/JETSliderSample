/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","knockout","ojs/ojdatasource-common","ojs/ojmodel","ojs/ojknockout-model"],function(a,g,c){a.qc=function(a){this.rb=a;this.current=0;this.Init();this.Vi=[];this.r0(10)};o_("CollectionPagingDataSource",a.qc,a);a.f.xa(a.qc,a.sm,"oj.CollectionPagingDataSource");a.qc.prototype.Init=function(){a.qc.O.Init.call(this)};a.f.j("CollectionPagingDataSource.prototype.Init",{Init:a.qc.prototype.Init});a.qc.prototype.mY=function(){return this.vo()?this.Ns:this.totalSize()-this.current};
a.qc.prototype.qy=function(){this.Vi=Array(this.mY());var a=this;return this.rb.Yz(this.current,this.current+this.Vi.length).then(function(c){for(var e=0;e<c.length;e++)a.Vi[e]=c[e];a.kH();a.Rl=a.Aa+a.Vi.length-1})};a.qc.prototype.kH=function(){if(void 0!==this.dp){this.dp.removeAll();for(var b=0;b<this.Vi.length;b++)this.dp.push(a.vb.map(this.Vi[b]))}};a.qc.prototype.Xs=function(){return this.Vi};a.f.j("CollectionPagingDataSource.prototype.getWindow",{Xs:a.qc.prototype.Xs});a.qc.prototype.BI=function(){void 0===
this.dp&&(this.dp=c.observableArray(),this.kH());return this.dp};a.f.j("CollectionPagingDataSource.prototype.getWindowObservable",{BI:a.qc.prototype.BI});a.qc.prototype.getPage=function(){return this.Je};a.f.j("CollectionPagingDataSource.prototype.getPage",{getPage:a.qc.prototype.getPage});a.qc.prototype.setPage=function(b,c){c=c||{};b=parseInt(b,10);try{a.qc.O.handleEvent.call(this,a.yd.aa.BEFOREPAGE,{page:b,previousPage:this.Je})}catch(e){return Promise.reject(null)}this.pageSize=null!=c.pageSize?
c.pageSize:this.pageSize;c.startIndex=b*this.pageSize;var f=this.Je;this.Je=b;this.Aa=c.startIndex;var g=this;return new Promise(function(b,e){g.sh(c).then(function(){a.qc.O.handleEvent.call(g,a.yd.aa.PAGE,{page:g.Je,previousPage:f});b(null)},function(){g.Je=f;g.Aa=g.Je*g.pageSize;e(null)})})};a.f.j("CollectionPagingDataSource.prototype.setPage",{setPage:a.qc.prototype.setPage});a.qc.prototype.getStartItemIndex=function(){return this.Aa};a.f.j("CollectionPagingDataSource.prototype.getStartItemIndex",
{getStartItemIndex:a.qc.prototype.getStartItemIndex});a.qc.prototype.getEndItemIndex=function(){return this.Rl};a.f.j("CollectionPagingDataSource.prototype.getEndItemIndex",{getEndItemIndex:a.qc.prototype.getEndItemIndex});a.qc.prototype.getPageCount=function(){var a=this.totalSize();return-1==a?-1:Math.ceil(a/this.pageSize)};a.f.j("CollectionPagingDataSource.prototype.getPageCount",{getPageCount:a.qc.prototype.getPageCount});a.qc.prototype.fetch=function(a){var c=a||{};if(void 0!==c.pageSize&&void 0!==
c.startIndex){if(!this.vo())return this.BO(null),Promise.resolve();this.Ns=c.startIndex+c.pageSize;var e=this;return this.qy().then(function(){e.BO(null)})}return this.sh(a)};a.f.j("CollectionPagingDataSource.prototype.fetch",{fetch:a.qc.prototype.fetch});a.qc.prototype.sh=function(a){var c=a||{};void 0!==c.startIndex&&(this.current=c.startIndex);void 0!==c.pageSize&&(this.Ns=this.pageSize=c.pageSize);var e=this;return new Promise(function(a){try{e.rb.fetch({success:function(){e.qy().then(function(){e.BO(c);
a({data:e.Xs(),startIndex:e.current})})}})}catch(b){e.qy().then(function(){e.BO(c);a({data:e.Xs(),startIndex:e.current})})}})};a.qc.prototype.BO=function(a){a=a||{};a.silent||this.handleEvent("sync",{data:this.Xs(),startIndex:this.current});a.success&&a.success()};a.qc.prototype.handleEvent=function(b,c){return a.qc.O.handleEvent.call(this,b,c)};a.qc.prototype.vo=function(){return this.current+this.Ns<this.totalSize()};a.qc.prototype.r0=function(a){this.Ns=this.pageSize=a};a.qc.prototype.size=function(){var a=
this.Xs();return a?a.length:0};a.f.j("CollectionPagingDataSource.prototype.size",{size:a.qc.prototype.size});a.qc.prototype.totalSize=function(){return this.rb.length};a.f.j("CollectionPagingDataSource.prototype.totalSize",{totalSize:a.qc.prototype.totalSize});a.qc.prototype.totalSizeConfidence=function(){return"actual"};a.f.j("CollectionPagingDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:a.qc.prototype.totalSizeConfidence});a.qc.prototype.getCapability=function(){return null};a.f.j("CollectionPagingDataSource.prototype.getCapability",
{getCapability:a.qc.prototype.getCapability})});
(this["webpackJsonppreprint-similarity-search"]=this["webpackJsonppreprint-similarity-search"]||[]).push([[0],{33:function(e,t,r){},48:function(e,t,r){},51:function(e,t,r){},52:function(e,t,r){},62:function(e,t,r){},63:function(e,t,r){},64:function(e,t,r){},65:function(e,t,r){},66:function(e,t,r){},67:function(e,t,r){"use strict";r.r(t);var n=r(16),a=r(78),s=r(5),c=r(2);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=c.createElement("style",null,"\n    #logo:hover #star,\n    #logo[data-spin] #star {\n      animation: star_rotate 2s ease forwards infinite;\n    }\n    @keyframes star_rotate {\n      from {\n        transform: rotate(0);\n      }\n      to {\n        transform: rotate(360deg);\n      }\n    }\n  "),u=c.createElement("path",{id:"book_filling",fill:"#ffe0b2",d:"       M 10 50       L 50 70       L 90 50       L 90 35       L 50 55       L 10 35       A 10 10 0 0 0 10 50       M 10 65       L 50 85       L 90 65       L 90 50       L 50 70       L 10 50       A 10 10 0 0 0 10 65     "}),j=c.createElement("path",{id:"book_top_cover",fill:"#000000",stroke:"#000000",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round",d:"       M 50 15       L 90 35       L 50 55       L 10 35       z     "}),d=c.createElement("path",{id:"book_outlines",fill:"none",stroke:"#000000",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round",d:"       M 10 50       L 30 60       M 47.5 68.75       L 50 70       L 90 50       M 10 65       L 50 85       L 90 65       M 10 35       A 10 10 0 0 0 10 50       A 10 10 0 0 0 10 65     "}),b=c.createElement("path",{id:"bookmark",fill:"#000000",stroke:"#000000",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",d:"       M 35 55       L 35 71.25       L 38.75 69.25       L 42.5 74.75       L 42.5 58.75       z     "}),h=c.createElement("g",{transform:"translate(50,34) rotate(26.565) skewX(-26.565) scale(0.10)"},c.createElement("path",{id:"star",fill:"#ffe0b2",stroke:"#ffe0b2",strokeWidth:20,strokeLinecap:"round",strokeLinejoin:"round",d:"         M 0.000 -100.000         L 29.389 -40.451         L 95.106 -30.902         L 47.553 15.451         L 58.779 80.902         L 0.000 50.000         L -58.779 80.902         L -47.553 15.451         L -95.106 -30.902         L -29.389 -40.451         z       "}));function p(e,t){var r=e.title,n=e.titleId,a=o(e,["title","titleId"]);return c.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",id:"logo",ref:t,"aria-labelledby":n},a),r?c.createElement("title",{id:n},r):null,l,u,j,d,b,h)}var f=c.forwardRef(p),m=(r.p,r(48),r(0)),O=function(){return Object(m.jsx)("header",{children:Object(m.jsxs)("section",{children:[Object(m.jsx)("h1",{children:"Preprint"}),Object(m.jsx)("h2",{children:"Similarity Search"}),Object(m.jsx)(f,{className:"logo"})]})})},x=r(9),g=r.n(x),v=r(14),w=r(7),y=r(11),k=r(10),L=r(34),S=r(35),N=r(38),_=r(39),P=function(e){Object(S.a)(r,e);var t=Object(N.a)(r);function r(){var e;Object(L.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).name="CustomError",e}return r}(Object(_.a)(Error)),M=function(){var e=Object(v.a)(g.a.mark((function e(t){var r,n,a,s,c,i,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api-pss.greenelab.com/doi/"+t);case 2:if((r=e.sent).ok){e.next=5;break}throw new Error;case 5:return e.next=7,r.json();case 7:if(!(n=e.sent).message){e.next=10;break}throw new P(n.message);case 10:return(a=n.paper_info||{}).xml_found=n.xml_found,s=n.journal_neighbors||[],c=n.paper_neighbors||[],i=n.coordinates||{},o=function(e){return e.pmcid=(e.pmcid||e.document||"").replace("PMC","")},s.forEach(o),c.forEach(o),e.abrupt("return",{preprint:a,similarJournals:s,similarPapers:c,coordinates:i});case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(v.a)(g.a.mark((function e(t){var r,n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.map((function(e){return e.pmcid})).filter((function(e){return e})),e.next=3,fetch("https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pmc&email=greenescientist@gmail.com&retmode=json&id="+r.join(","));case 3:return e.next=5,e.sent.json();case 5:return n=e.sent.result,a=function(e){return Object(k.a)(Object(k.a)({},e),n[e.pmcid]||{})},t=t.map(a),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){return{id:e.doi||null,title:e.title||"",authors:(e.authors||[]).split("; ").join(", "),journal:e.publisher||"",year:e.accepted_date.split("-")[0]||"",prelim:!e.xml_found}},R=function(e){var t=e.map((function(e){return e.distance})),r=Math.max.apply(Math,Object(y.a)(t)),n=Math.min.apply(Math,Object(y.a)(t)),a=r-n;return e.sort((function(e,t){return e.distance-t.distance})),e=e.map((function(e,t){return{id:e.pmcid||null,title:e.title||"",authors:(e.authors||[]).map((function(e){return e.name||""})).filter((function(e){return e})).join(", "),journal:(e.fulljournalname||e.journal||"").split("_").join(" "),year:(e.pubdate||"").split(" ")[0]||"",distance:e.distance,strength:(e.distance-n)/a,rank:t+1}}))},F=(r(51),"EMPTY"),A="LOADING",q="SUCCESS",T=function(e){var t=e.status;return t===F?Object(m.jsxs)("section",{className:"center gray",children:[Object(m.jsx)("i",{className:"fas fa-exclamation"}),Object(m.jsx)("span",{children:"Search for a doi"})]}):t===A?Object(m.jsxs)("section",{className:"center gray",children:[Object(m.jsx)("i",{className:"fas fa-spinner fa-spin"}),Object(m.jsx)("span",{children:"Loading..."})]}):t===q?null:Object(m.jsxs)("section",{className:"center red",children:[Object(m.jsx)("i",{className:"far fa-times-circle"}),Object(m.jsx)("span",{children:t||"Couldn't get results"})]})},I=(r(52),function(e){return e.replace(/^\D*/g,"").replace(/v\d+$/g,"").trim()}),J=function(){return new URLSearchParams(window.location.search.substring(1)).get("doi")},B=function(e){var t=window.location.href,r=window.location.href.split(/[?#]/)[0]+"?doi="+e;t!==r&&window.history.pushState(null,null,r)},D=function(e){var t=e.status,r=e.setStatus,n=e.setPreprint,a=e.setSimilarJournals,i=e.setSimilarPapers,o=e.setCoordinates,l=Object(c.useState)(J()||"e.g. 10.1101/833400"),u=Object(s.a)(l,2),j=u[0],d=u[1],b=Object(c.useCallback)((function(e){return d(e.target.value.trim())}),[]),h=Object(c.useCallback)(function(){var e=Object(v.a)(g.a.mark((function e(t){var s,c,l,u,j,b,h=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=!(h.length>1&&void 0!==h[1])||h[1],t=I(t),d(t),t){e.next=5;break}return e.abrupt("return");case 5:return s&&B(t),r(A),e.prev=7,e.next=10,M(t);case 10:return c=e.sent,l=c.preprint,u=c.similarJournals,j=c.similarPapers,b=c.coordinates,l=E(l),e.next=18,C(u);case 18:return u=e.sent,e.next=21,C(j);case 21:j=e.sent,u=R(u),j=R(j),r(q),n(l),a(u),i(j),o(b),e.next=40;break;case 31:e.prev=31,e.t0=e.catch(7),"CustomError"!==e.t0.name&&(e.t0.message="Couldn't get results"),r(e.t0.message),n({}),a([]),i([]),o({}),w.a(e.t0,{tags:{doi:t}});case 40:case"end":return e.stop()}}),e,null,[[7,31]])})));return function(t){return e.apply(this,arguments)}}(),[r,n,a,i,o]),p=Object(c.useCallback)((function(){var e=J();e&&(d(e),h(e,!1))}),[h]);return Object(c.useEffect)((function(){J()&&h(J())}),[h]),Object(c.useEffect)((function(){return window.addEventListener("popstate",p),function(){return window.removeEventListener("popstate",p)}}),[p,h]),Object(m.jsxs)("section",{id:"search",children:[Object(m.jsx)("p",{className:"center",children:Object(m.jsxs)("i",{children:["Enter the ",Object(m.jsx)("a",{href:"https://www.biorxiv.org/",children:"bioRxiv"})," or"," ",Object(m.jsx)("a",{href:"https://www.medrxiv.org/",children:"medRxiv"})," DOI of your preprint"]})}),Object(m.jsxs)("form",{className:"search",onSubmit:function(e){e.preventDefault(),h(j)},children:[Object(m.jsx)("input",{className:"search_input",value:j,onChange:b,type:"text",placeholder:"e.g. 10.1101/833400",disabled:t===A}),Object(m.jsx)("button",{className:"search_button",type:"submit",title:"Search for related papers and journals",disabled:t===A,children:Object(m.jsx)("i",{className:"fas fa-search"})})]})]})},z=r(77),W=function(e){var t=Object(c.useRef)(),r=Object(c.useState)(void 0),n=Object(s.a)(r,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){if(t.current){var e=t.current.getBBox(),r=e.x,n=e.y,a=e.width,s=e.height;i([r,n,a,s].map((function(e){return e.toFixed(2)})).join(" "))}}),[e]),[t,a]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,t=Object(c.useState)(!1),r=Object(s.a)(t,2),n=r[0],a=r[1],i=Object(c.useState)(null),o=Object(s.a)(i,2),l=o[0],u=o[1],j=Object(c.useState)(null),d=Object(s.a)(j,2),b=d[0],h=d[1],p=Object(c.useRef)(),f=Object(z.a)(l,b,{placement:"top",modifiers:[{name:"computeStyles",options:{adaptive:!1}},{name:"offset",options:{offset:[0,10]}},{name:"flip",options:{rootBoundary:"document"}}]}),m=f.styles,O=f.attributes,x=f.update,g=Object(k.a)({style:m.popper},O.popper),v=Object(c.useCallback)((function(){window.clearTimeout(p.current),p.current=window.setTimeout((function(){return a(!0)}),e)}),[e]),w=Object(c.useCallback)((function(){window.clearTimeout(p.current),a(!1)}),[]);return Object(c.useEffect)((function(){if(l)return l.addEventListener("mouseenter",v),l.addEventListener("focus",v),l.addEventListener("mouseleave",w),l.addEventListener("blur",w),function(){l.removeEventListener("mouseenter",v),l.removeEventListener("focus",v),l.removeEventListener("mouseleave",w),l.removeEventListener("blur",w)}}),[l,w,v]),{show:n,anchorRef:u,tooltipRef:h,tooltipProps:g,update:x}},G=function(e){var t=e.preprint,r=t.id,a=t.title,s=t.authors,c=t.journal,i=t.year,o=t.prelim,l=X(),u=l.show,j=l.anchorRef,d=l.tooltipRef,b=l.tooltipProps;return Object(m.jsxs)("section",{id:"your-preprint",children:[Object(m.jsxs)("h3",{children:[Object(m.jsx)("i",{className:"fas fa-feather-alt"}),Object(m.jsx)("span",{children:"Your Preprint"})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("a",{href:"https://doi.org/"+r,title:a,className:"card_detail",children:a}),Object(m.jsx)("span",{title:s,className:"card_detail truncate",tabIndex:"0",children:s}),Object(m.jsxs)("span",{title:c+" \xb7 "+i,className:"card_detail truncate",tabIndex:"0",children:[c," \xb7 ",i]})]}),o&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("hr",{}),Object(m.jsxs)("p",{ref:j,className:"center gray",children:[Object(m.jsx)("i",{className:"fas fa-info-circle"}),Object(m.jsx)("span",{children:"Preliminary results"})]}),u&&Object(n.createPortal)(Object(m.jsx)("span",Object(k.a)(Object(k.a)({ref:d},b),{},{className:"tooltip",children:"These results were generated using the PDF version of the preprint, which is less reliable and can reduce the accuracy of predictions. Check back later when the full-text version is available."})),document.body)]})]})},H=r(8),U=r.n(H),Y=(r(33),U()("#ff980020")),V=U()("#ff9800"),$=function(e){var t=e.similarJournals;return Object(m.jsxs)("section",{id:"similar-journals",children:[Object(m.jsxs)("h3",{children:[Object(m.jsx)("i",{className:"fas fa-bookmark"}),Object(m.jsx)("span",{children:"Most Similar Journals"})]}),t.map((function(e,t){var r=e.journal,n=e.rank,a=e.distance,s=e.strength;return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card_score",title:"Distance score: "+a,style:{backgroundColor:V.mix(Y,s)},children:n}),Object(m.jsx)("div",{className:"card_details",children:Object(m.jsx)("a",{href:"https://www.google.com/search?q="+r,className:"card_detail",children:r})})]},t)}))]})},K=U()("#ff980020"),Q=U()("#ff9800"),Z=function(e){var t=e.similarPapers;return Object(m.jsxs)("section",{id:"similar-papers",children:[Object(m.jsxs)("h3",{children:[Object(m.jsx)("i",{className:"fas fa-scroll"}),Object(m.jsx)("span",{children:"Most Similar Papers"})]}),t.map((function(e,t){var r=e.id,n=e.title,a=e.authors,s=e.year,c=e.journal,i=e.rank,o=e.distance,l=e.strength;return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card_score",title:"Distance score: "+o,style:{backgroundColor:Q.mix(K,l)},children:i}),Object(m.jsxs)("div",{className:"card_details",children:[Object(m.jsx)("a",{href:"https://www.ncbi.nlm.nih.gov/pmc/articles/"+r,title:n,className:"card_detail",children:n}),Object(m.jsx)("div",{title:a,className:"card_detail truncate",tabIndex:"0",children:a}),Object(m.jsxs)("div",{title:c+" \xb7 "+s,className:"card_detail truncate",tabIndex:"0",children:[c," \xb7 ",s]})]})]},t)}))]})},ee=(r(62),function(e){var t=e.selectedPc,r=e.setSelectedPc;return Object(m.jsx)("p",{className:"center",children:xe(je,de).map((function(e){return Object(m.jsx)(te,{number:e,selectedPc:t,setSelectedPc:r},e)}))})}),te=function(e){var t=e.number,r=e.selectedPc,a=e.setSelectedPc,s=X(),c=s.show,i=s.anchorRef,o=s.tooltipRef,l=s.tooltipProps,u=s.update;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{ref:i,className:"cloud_button","data-number":ge(t),"data-selected":r===t,onClick:function(){return a(r===t?null:t)},children:Object(m.jsx)("img",{src:ve(t),title:"Select principal component "+ge(t),alt:"Select principal component "+ge(t),onLoad:u})}),c&&Object(n.createPortal)(Object(m.jsx)("img",Object(k.a)({ref:o,src:ve(t),className:"cloud_enlarged",title:"Select principal component "+ge(t),alt:"Select principal component "+ge(t),onLoad:u},l)),document.body)]})},re=r(19),ne=function(e,t,r){return Math.max(Math.min(e,r),t)},ae=function(e){return Math.pow(e,2)},se=function(e){return Math.sqrt(e)},ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e=ne(e,0,1);var r=1/(t=ne(t,1e-5,1)),n=se(2*ae(r)-1);return(1+se(2)*se(2*e*n+ae(r)-n-2*ae(e)+2*e)-n)/2},ie=(r(63),.85);ie*=1.05;var oe=function(e){var t=e.cells,r=e.selectedPc,n=e.selectedCell,a=e.setSelectedCell,c=e.coordinates,i=W(t),o=Object(s.a)(i,2),l=o[0],u=o[1];if(r){var j,d=Object(re.a)(t);try{for(d.s();!(j=d.n()).done;){var b=j.value,h=b.pcs.find((function(e){return e.name===ge(r)}));b.score=(null===h||void 0===h?void 0:h.score)||0}}catch(N){d.e(N)}finally{d.f()}var p,f=Math.max.apply(Math,Object(y.a)(t.map((function(e){return Math.abs(e.score)}))))||1,O=Object(re.a)(t);try{for(O.s();!(p=O.n()).done;){var x=p.value;x.strength=x.score/f||0}}catch(N){O.e(N)}finally{O.f()}}else{var g,v=t.map((function(e){return e.count})),w=Math.min.apply(Math,Object(y.a)(v)),k=Math.max.apply(Math,Object(y.a)(v)),L=Object(re.a)(t);try{for(L.s();!(g=L.n()).done;){var S=g.value;S.strength=(S.count-w)/(k-w)||0,S.strength=ce(S.strength,1)}}catch(N){L.e(N)}finally{L.f()}}return Object(m.jsx)("p",{children:Object(m.jsxs)("svg",{ref:l,viewBox:u,className:"map",children:[t.concat(n||[]).map((function(e,t){return Object(m.jsx)("rect",{className:"cell",x:e.x,y:e.y,width:ie,height:ie,"data-selected":e===n,fill:r?fe.mix(e.strength>0?pe:me,Math.abs(e.strength)):he.mix(be,e.strength),strokeWidth:.223125,onClick:function(){return a(e===n?null:e)}},t)})),"number"===typeof c.x&&"number"===typeof c.y&&Object(m.jsx)("circle",{className:"marker",strokeWidth:.223125,cx:c.x,cy:c.y,r:.44625})]})})},le=(r(64),function(e){var t=e.selectedPc,r=e.coordinates;return Object(m.jsxs)("p",{className:"legend",children:[t&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("span",{children:[Object(m.jsx)("span",{className:"legend_square",style:{backgroundColor:pe}}),"pos pc",ge(t)]}),Object(m.jsxs)("span",{children:[Object(m.jsx)("span",{className:"legend_square",style:{backgroundColor:me}}),"neg pc",ge(t)]})]}),!t&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("span",{children:[Object(m.jsx)("span",{className:"legend_square",style:{backgroundColor:be}}),"many papers"]}),Object(m.jsxs)("span",{children:[Object(m.jsx)("span",{className:"legend_square",style:{backgroundColor:he}}),"few papers"]})]}),r.x&&r.y&&Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("span",{children:[Object(m.jsx)("span",{className:"legend_circle",style:{backgroundColor:"var(--red)"}}),"your preprint"]})})]})}),ue=(r(65),function(e){var t,r=e.selectedCell,n=r.lemmas||[],a=W(n),i=Object(s.a)(a,2),o=i[0],l=i[1],u=n.map((function(e){return e.score})),j=Math.min.apply(Math,Object(y.a)(u)),d=Math.max.apply(Math,Object(y.a)(u)),b=Object(re.a)(n);try{for(b.s();!(t=b.n()).done;){var h=t.value;h.strength=(h.score-j)/(d-j)||0}}catch(g){b.e(g)}finally{b.f()}var p=15,f=(l||"").split(" ")[2]||0,O=n.length*p+p,x=n.length*p+p;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h4",{children:"Papers"}),Object(m.jsx)("p",{children:r.count.toLocaleString()}),Object(m.jsx)("h4",{children:"Top Journals"}),Object(m.jsx)("p",{children:r.journals.map((function(e,t){var r=e.name,n=e.count;return Object(m.jsxs)("span",{className:"cell_detail_row",children:[Object(m.jsx)("span",{className:"truncate",children:r}),Object(m.jsxs)("span",{className:"truncate",children:[n.toLocaleString()," papers"]})]},t)}))}),Object(m.jsx)("h4",{children:"Top Lemmas"}),Object(m.jsx)("p",{children:Object(m.jsxs)("svg",{ref:o,viewBox:l,className:"chart",style:{width:f+"px"},children:[n.map((function(e,t){var r=Math.max(e.strength*(O-0),7.5),n=0+(t+1)*p;return Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)("text",{x:-11.25,y:n,textAnchor:"end",dominantBaseline:"middle",fontSize:p,title:e.name,children:e.name.length>20?e.name.substr(0,20)+"...":e.name}),Object(m.jsx)("rect",{x:0,y:n-3.75,width:r,height:7.5})]},t)})),Object(m.jsx)("path",{d:"M ".concat(0," ").concat(0," L ").concat(0," ").concat(x," L ").concat(O," ").concat(x),strokeWidth:1.5}),Object(m.jsx)("text",{x:(0+O)/2,y:x+11.25,textAnchor:"middle",dominantBaseline:"hanging",fontSize:p,children:"Association Strength"})]})})]})}),je=1,de=50,be=U()("#606060"),he=U()("#e0e0e0"),pe=U()("#ff9800"),fe=U()("#ffffff"),me=U()("#2196f3"),Oe=function(e){var t=e.coordinates,r=Object(c.useState)([]),n=Object(s.a)(r,2),a=n[0],i=n[1],o=Object(c.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1],d=Object(c.useState)(null),b=Object(s.a)(d,2),h=b[0],p=b[1];return Object(c.useEffect)((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,fetch("./data/plot.json");case 3:return e.next=5,e.sent.json();case 5:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("section",{id:"map",children:[Object(m.jsxs)("h3",{children:[Object(m.jsx)("i",{className:"fas fa-map"}),Object(m.jsx)("span",{children:"Map of PubMed Central"})]}),Object(m.jsx)(ee,{selectedPc:u,setSelectedPc:j}),Object(m.jsx)(oe,{cells:a,selectedPc:u,selectedCell:h,setSelectedCell:p,coordinates:t}),Object(m.jsx)(le,{selectedPc:u,coordinates:t})]}),h&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("hr",{}),Object(m.jsxs)("section",{id:"cell-details",children:[Object(m.jsxs)("h3",{children:[Object(m.jsx)("i",{className:"fas fa-square"}),Object(m.jsx)("span",{children:"Selected Square"})]}),Object(m.jsx)(ue,{selectedCell:h,selectedPc:u,setSelectedPc:j})]})]})]})},xe=function(e,t){return Array.from({length:t-e+1},(function(t,r){return e+r}))},ge=function(e){return String(e).padStart(2,"0")},ve=function(e){return"https://raw.githubusercontent.com/greenelab/annorxiver/master/biorxiv/pca_association_experiment/output/word_pca_similarity/figure_pieces/pca_XX_cossim_word_cloud.png".replace("XX",ge(e))},we=function(){return Object(m.jsxs)("section",{id:"help",children:[Object(m.jsxs)("h3",{children:[Object(m.jsx)("i",{className:"fas fa-question-circle"}),Object(m.jsx)("span",{children:"About this tool"})]}),Object(m.jsxs)("p",{children:["This tool uses a machine learning model trained on 1.7 million"," ",Object(m.jsx)("a",{href:"https://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/",children:"PubMed Central open access documents"})," ","to find similar papers and journals based on the textual content of your"," ",Object(m.jsx)("a",{href:"https://www.biorxiv.org/",children:"bioRxiv"})," or"," ",Object(m.jsx)("a",{href:"https://www.medrxiv.org/",children:"medRxiv"})," preprint. These results can be used as a starting point when searching for a place to publish your paper."]}),Object(m.jsx)("p",{children:'The tool also provides a "map" of the PubMed Central documents, grouped into bins based on similar textual content, and shows you where your preprint falls on the map. Select a square to learn more about the papers in that bin.'}),Object(m.jsxs)("p",{children:["The map also incorporates a set of 50"," ",Object(m.jsx)("a",{href:"https://en.wikipedia.org/wiki/Principal_component_analysis",children:"principal components"})," ","(PCs) generated from bioRxiv. Each PC represents two high level concepts characterized by keywords of various strengths, illustrated in the word cloud thumbnails above the map. Select a thumbnail to color the map by that PC. Deeper orange squares will be papers that correlate more with the orange keywords in the image, and vice versa for blue."]}),Object(m.jsxs)("p",{children:["For more information, see the"," ",Object(m.jsx)("a",{href:"https://github.com/greenelab/preprint-similarity-search",children:"readme on GitHub"}),"."]})]})},ye=function(){return Object(m.jsx)("footer",{children:Object(m.jsx)("section",{children:Object(m.jsxs)("p",{children:["A project of the ",Object(m.jsx)("a",{href:"https://greenelab.com/",children:"Greene Lab"}),Object(m.jsx)("br",{}),Object(m.jsxs)("a",{href:"https://github.com/greenelab/preprint-similarity-search",children:[Object(m.jsx)("i",{className:"fab fa-github"}),Object(m.jsx)("span",{children:"View on GitHub"})]})]})})})},ke=(r(66),function(){var e=Object(c.useState)(F),t=Object(s.a)(e,2),r=t[0],n=t[1],a=Object(c.useState)({}),i=Object(s.a)(a,2),o=i[0],l=i[1],u=Object(c.useState)([]),j=Object(s.a)(u,2),d=j[0],b=j[1],h=Object(c.useState)([]),p=Object(s.a)(h,2),f=p[0],x=p[1],g=Object(c.useState)({}),v=Object(s.a)(g,2),w=v[0],y=v[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{}),Object(m.jsxs)("main",{children:[Object(m.jsx)(D,{status:r,setStatus:n,setPreprint:l,setSimilarJournals:b,setSimilarPapers:x,setCoordinates:y}),Object(m.jsx)(T,{status:r}),Object(m.jsx)("hr",{}),r===q&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(G,{preprint:o}),Object(m.jsx)("hr",{}),Object(m.jsx)(Z,{similarPapers:f}),Object(m.jsx)("hr",{}),Object(m.jsx)($,{similarJournals:d}),Object(m.jsx)("hr",{})]}),Object(m.jsx)(Oe,{coordinates:w}),Object(m.jsx)("hr",{}),Object(m.jsx)(we,{})]}),Object(m.jsx)(ye,{})]})});a.a({dsn:"https://b1183a2fe86f4a8f951e9bb67341c07f@o7983.ingest.sentry.io/5407669",environment:"production"}),Object(n.render)(Object(m.jsx)(ke,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.ed2802aa.chunk.js.map
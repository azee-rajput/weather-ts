(this["webpackJsonpweather-ts"]=this["webpackJsonpweather-ts"]||[]).push([[0],{45:function(e,a,t){},71:function(e,a,t){e.exports=t(98)},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},91:function(e,a,t){e.exports=t.p+"static/media/myAvatar.b80163c5.png"},92:function(e,a,t){},93:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var n,l,s=t(0),c=t.n(s),r=t(20),o=t.n(r),i=(t(76),t(77),t(16)),m=t(27),u=t(13),d=t(46),p=t(47),h=t(68),E=t(49),f=t(69),g="585205b943a316d3502569db71a3fca9",N="http://api.openweathermap.org/data/2.5/",y={today:function(e,a,t){fetch(N+"weather?lat="+a+"&lon="+t+"&appid="+g).then((function(e){return e.json()})).then((function(a){e(a)}))},forecast:function(e,a,t){fetch(N+"forecast?lat="+a+"&lon="+t+"&appid="+g).then((function(e){return e.json()})).then((function(a){e(a)}))},find:function(e,a){fetch(N+"find?q="+a+"&appid="+g).then((function(e){return e.json()})).then((function(a){e(a)}))}},v=t(115),b=t(116),w=t(117),S=(t(78),t(107)),k=(t(79),function(){return c.a.createElement("span",{className:"bgMain"},c.a.createElement("span",null,c.a.createElement(S.a,{size:"80"})),c.a.createElement("span",null,c.a.createElement(S.a,{size:"120"})),c.a.createElement("span",null,c.a.createElement(S.a,{size:"60"})))}),z=t(112),C=t(108),T=t(109),j=t(110),O=t(114),M=t(113),x=t(111),D=function(e){switch(l=e.type.indexOf("d")>-1?c.a.createElement(C.a,{color:"#f6c300",size:e.size}):c.a.createElement(T.a,{color:"#4394ec",size:e.size}),e.condition){case"Thunderstorm":n=c.a.createElement(j.a,{color:"#000053",size:e.size});break;case"Drizzle":n=c.a.createElement(x.a,{color:"#4394ec",size:e.size});break;case"Rain":n=c.a.createElement(z.a,{color:"#4394ec",size:e.size});break;case"Snow":n=c.a.createElement(M.a,{color:"#d1e4f8",size:e.size});break;case"Clear":n=l;break;case"Clouds":n=c.a.createElement(S.a,{color:"#4394ec",size:e.size});break;default:n=c.a.createElement(O.a,{color:"#d1e4f8",size:e.size})}return c.a.createElement("div",null,n)},R=function(e){var a=new Date(e.sunrise),t=a.getHours()+e.hours,n=a.getMinutes()+e.minutes;t=(t%=12)||12,n>60&&(t++,n-=60);var l=new Date(e.sunset),s=l.getHours()+e.hours,r=l.getMinutes()+e.minutes;return s=(s%=12)||12,r>60&&(s++,r-=60),c.a.createElement(v.a,{fluid:!0,className:"temp"},c.a.createElement(b.a,{className:"tempRow"},c.a.createElement(k,null),c.a.createElement(w.a,{className:"todayRow",xs:12},c.a.createElement("table",{className:"box"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"icon"},c.a.createElement(D,{condition:e.condition,size:"30",type:e.icon})),c.a.createElement("td",{className:"todayTd"},c.a.createElement("span",{className:"today"},"Today")," ",c.a.createElement("br",null),c.a.createElement("span",{className:"date"},e.day+", "+e.date+" "+e.month)))))),c.a.createElement(w.a,{xs:12,className:"infoCol"},c.a.createElement("span",{className:"temperature"},Math.round(e.temp-273.15),c.a.createElement("sup",{className:"degree"},"\xb0C")),c.a.createElement("p",null,e.city+", "+e.country),c.a.createElement("p",{className:"feelsRise"},"Feels like "+Math.round(e.feel-273.15),c.a.createElement("span",null,"-"),e.icon.indexOf("d")>0?"Sunset "+s+":"+r:"Sunrise "+t+":"+n))))},A=t(55),B=t(58),_=t(57),F=t(56),K=t(29),W=(t(82),function(e){var a=(e.pressure-900)/200*100,t=Math.round(e.minTemp-273.15),n=Math.round(e.maxTemp-273.15),l=Math.round((t+50)/130*100),s=Math.round((n+50)/130*100);return c.a.createElement(v.a,{fluid:!0,className:"graph"},c.a.createElement(b.a,{className:"graphHeading"},c.a.createElement("span",null,"Graphical Representaion")),c.a.createElement(b.a,{className:"graphRow"},c.a.createElement(w.a,{className:"col-2 headingSide"},c.a.createElement("span",null,"High"),c.a.createElement("span",null,"Medium"),c.a.createElement("span",null,"Low")),c.a.createElement(w.a,{className:"col-10 graphBars"},c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("div",{className:"progress"},c.a.createElement("span",{className:"dashed"}),c.a.createElement("span",{className:"bar",style:{height:a+"%"}}))),c.a.createElement("td",null,c.a.createElement("div",{className:"progress"},c.a.createElement("span",{className:"dashed"}),c.a.createElement("span",{className:"bar",style:{height:e.wind+"%"}}))),c.a.createElement("td",null,c.a.createElement("div",{className:"progress"},c.a.createElement("span",{className:"dashed"}),c.a.createElement("span",{className:"bar",style:{height:e.humidity+"%"}}))),c.a.createElement("td",null,c.a.createElement("div",{className:"progress"},c.a.createElement("span",{className:"dashed"}),c.a.createElement("span",{className:"bar",style:{height:l+"%"}}))),c.a.createElement("td",null,c.a.createElement("div",{className:"progress"},c.a.createElement("span",{className:"dashed"}),c.a.createElement("span",{className:"bar",style:{height:s+"%"}})))),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(A.a,{size:"20"})),c.a.createElement("td",null,c.a.createElement(F.a,{size:"20"})),c.a.createElement("td",null,c.a.createElement(K.a,{size:"20"})),c.a.createElement("td",null,c.a.createElement(_.a,{size:"20"})),c.a.createElement("td",null,c.a.createElement(B.a,{size:"20"}))))))))}),G=(t(83),t(84),t(85),function(e){return c.a.createElement(v.a,{fluid:!0,className:"pop"},c.a.createElement(b.a,{className:"box"},c.a.createElement("span",{onClick:function(){return e.pop()}},"\xd7"),e.message))}),H=function(){var e=Object(s.useState)({pop:!1}),a=Object(u.a)(e,2),t=a[0],n=a[1];var l=c.a.createElement("p",null,"Sorry. This service is not available right now.");return c.a.createElement(v.a,{fluid:!0,className:"addCity"},c.a.createElement(b.a,{className:"cityBox",onClick:function(){n({pop:!0})}},c.a.createElement("span",null,"+"),c.a.createElement("span",null,"Add City")),t.pop?c.a.createElement(G,{message:l,pop:function(){n({pop:!1})}}):null)},J=(t(86),t(119)),P=t(60),I=(t(87),t(23)),L=function(e){return void 0===e.data?c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"rowSearch"},c.a.createElement("span",{className:"heading"},"Search Results for "+e.search),c.a.createElement("div",{className:"failed"},"Loading... please wait"),c.a.createElement("span",{className:"cancel",onClick:function(){return e.unclicked()}},"Cancel"))):e.data.length<1?c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"rowSearch"},c.a.createElement("span",{className:"heading"},"Search Results for "+e.search),c.a.createElement("div",{className:"failed"},e.noResult?"No results found":"Loading... please wait"),c.a.createElement("span",{className:"cancel",onClick:function(){return e.unclicked()}},"Cancel"))):void 0===e.data[0].sys.country?c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"rowSearch"},c.a.createElement("span",{className:"heading"},"Search Results for "+e.search),c.a.createElement("div",{className:"failed"},"Loading... please wait"),c.a.createElement("span",{className:"cancel",onClick:function(){return e.unclicked()}},"Cancel"))):c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"rowSearch"},c.a.createElement("span",{className:"heading"},"Search Results for "+e.search),c.a.createElement("div",{className:"result"},e.data.map((function(a){return c.a.createElement(I.b,{className:"data",onClick:function(){return e.unclicked()},to:"/search/"+a.coord.lat+"/"+a.coord.lon},a.name+", "+a.sys.country)}))),c.a.createElement("span",{className:"cancel",onClick:function(){return e.unclicked()}},"Cancel")))},U=function(){var e=Object(s.useState)({changed:!1}),a=Object(u.a)(e,2),n=a[0],l=a[1],r=Object(s.useState)({clicked:!1}),o=Object(u.a)(r,2),i=o[0],d=o[1],p=Object(s.useState)({search:""}),h=Object(u.a)(p,2),E=h[0],f=h[1],g=Object(s.useState)({pop:!1}),N=Object(u.a)(g,2),S=N[0],k=N[1],z=Object(s.useState)({data:"",code:"",count:0}),C=Object(u.a)(z,2),T=C[0],j=C[1],O=Object(s.useState)({msg:c.a.createElement("span",null)}),M=Object(u.a)(O,2),x=M[0],D=M[1],R=c.a.createElement("p",null,"Sorry. This service is not available right now."),A=c.a.createElement("p",null,"Developed by: ",c.a.createElement("a",{href:"https://findazee.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Abdul Zahir"));function B(e){k({pop:!0}),D({msg:e})}function _(e){13===e.charCode&&(e.preventDefault(),n.changed&&(d({clicked:!0}),y.find((function(e){return j({data:e,code:e.cod,count:e.count})}),E.search)))}return c.a.createElement(v.a,{fluid:!0,className:"navBar"},c.a.createElement(b.a,{className:"navRow"},c.a.createElement(w.a,{sm:{span:7},className:"searchArea"},c.a.createElement("span",{className:"searchIcon"},c.a.createElement(P.a,{size:"30"})),c.a.createElement("input",{type:"text",className:"searchBox",placeholder:"Search new place",onChange:function(e){return function(e){f({search:e.target.value}),null===e.target.value||""===e.target.value||void 0===e.target.value?l(Object(m.a)({},n,{changed:!1})):l(Object(m.a)({},n,{changed:!0}))}(e)},onKeyPress:function(e){return _(e)}}),c.a.createElement(J.a,null,c.a.createElement(J.a.Toggle,{variant:"success",id:"dropdown-basic"},"Dropdown Button"),c.a.createElement(J.a.Menu,null,c.a.createElement(J.a.Item,{href:"/"},"Service unavailable"),c.a.createElement(J.a.Item,{href:"/"},"Service unavailable")))),c.a.createElement(w.a,{sm:{span:5},className:"profileArea"},c.a.createElement("span",{className:"noti",onClick:function(){return B(R)}},"Notifications"),c.a.createElement("span",{className:"places",onClick:function(){return B(R)}},"Places"),c.a.createElement("img",{className:"image",src:t(91),alt:"profile",onClick:function(){return B(A)}}))),S.pop?c.a.createElement(G,{message:x.msg,pop:function(){k({pop:!1})}}):null,i.clicked?c.a.createElement(L,{search:E.search,data:T.data.list,noResult:"200"===T.code&&0===T.count,unclicked:function(){return d({clicked:!1}),void j({data:"",code:"",count:0})}}):null)},$=t(120),q=t(118),Z=(t(92),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),Q=[],V=[],X=[],Y=function(e){if(void 0===e.forecast.list)return null;for(var a=1;a<6;a++)5===Q.length&&(Q.splice(0,Q.length),V.splice(0,V.length),X.splice(0,X.length)),Q.push(e.forecast.list[5*a]),V.push(Math.round((e.forecast.list[5*a].main.temp_min-273.15+50)/130*100)),X.push(Math.round((e.forecast.list[5*a].main.temp_max-273.15+50)/130*100));return c.a.createElement(v.a,{fluid:!0,className:"forecast"},c.a.createElement(b.a,null,c.a.createElement("table",null,c.a.createElement("tbody",null,Q.map((function(a,t){return c.a.createElement("tr",{className:"week"},c.a.createElement("td",{className:"day"},Z[e.day+t>6?0:e.day+t]),c.a.createElement("td",{className:"colorGray"},c.a.createElement(K.a,{size:"15",color:"#4293eb"})," ",a.main.humidity+"%"),c.a.createElement("td",{className:"icon"},c.a.createElement(D,{size:"25",type:"d",condition:a.weather[0].main})),c.a.createElement("td",{className:"colorGray"},Math.round(a.main.temp_min-273.15),c.a.createElement("span",null,"\xb0C")),c.a.createElement("td",{className:"minBar"},c.a.createElement("div",{className:"dashed"}),c.a.createElement("div",{className:"bar",style:{width:V[t]+"%"}})),c.a.createElement("td",{className:"maxBar"},c.a.createElement("div",{className:"dashed"}),c.a.createElement("div",{className:"bar",style:{width:X[t]+"%"}})),c.a.createElement("td",{className:"maximum"},Math.round(a.main.temp_max-273.15),c.a.createElement("span",null,"\xb0C")))}))))))},ee=(t(93),function(e){return c.a.createElement($.a,{defaultActiveKey:"5day",className:"tabDiv",id:"tabDiv"},c.a.createElement(q.a,{className:"tabCustom",eventKey:"5day",title:"5-Days"},c.a.createElement(Y,{forecast:e.data,day:e.day})),c.a.createElement(q.a,{className:"tabCustom paddingTop",eventKey:"hourly",title:"Hourly"},c.a.createElement("h4",null,"Sorry. This service is not available at the moment.")),c.a.createElement(q.a,{className:"tabCustom paddingTop",eventKey:"monthly",title:"Monthly"},c.a.createElement("h4",null,"Sorry. This service is not available at the moment.")),c.a.createElement(q.a,{className:"tabCustom paddingTop",eventKey:"6month",title:"6 months"},c.a.createElement("h4",null,"Sorry. This service is not available at the moment.")))}),ae=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],te=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ne=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(E.a)(a).call(this,e))).state={found:!1,data:[],forecast:[],lat:0,long:0},t}return Object(f.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.found||(y.today((function(a){return e.setState({data:a})}),this.props.lat,this.props.long),y.today((function(a){return e.setState({forecast:a})}),this.props.lat,this.props.long),this.props.found&&this.setState({found:!0}))}},{key:"componentDidUpdate",value:function(){var e=this;!this.state.found&&this.props.found&&(y.today((function(a){return e.setState({data:a})}),this.props.lat,this.props.long),y.forecast((function(a){return e.setState({forecast:a})}),this.props.lat,this.props.long),this.props.found&&this.setState({found:!0})),this.state.lat===this.props.lat&&this.state.long===this.props.long||(this.setState({lat:this.props.lat,long:this.props.long}),y.today((function(a){return e.setState({data:a})}),this.props.lat,this.props.long),y.forecast((function(a){return e.setState({forecast:a})}),this.props.lat,this.props.long))}},{key:"render",value:function(){if(void 0===this.state.data.sys||void 0===this.state.data.sys.sunrise)return null;var e=Math.floor(this.state.data.timezone/3600),a=Math.floor(this.state.data.timezone%3600/60),t=new Date((new Date).getTime()+3600*e*1e3).toUTCString().replace(/ GMT$/,""),n=new Date(t),l=n.getDay(),s=n.getDate(),r=n.getMonth();return c.a.createElement(v.a,{fluid:!0,className:"weather"},c.a.createElement(b.a,{className:"navigation"},c.a.createElement(U,null)),c.a.createElement(b.a,{className:"mainRow"},c.a.createElement(w.a,{lg:7,className:"future paddingTop sidePaddings"},c.a.createElement(b.a,{className:"heading"},c.a.createElement("span",null,"Weather ",c.a.createElement("b",null,"4cast"))),c.a.createElement(b.a,{className:"city paddingTop"},c.a.createElement(w.a,{sm:{span:3}},c.a.createElement(H,null)),c.a.createElement(w.a,{sm:{span:3}},c.a.createElement(H,null)),c.a.createElement(w.a,{sm:{span:3}},c.a.createElement(H,null)),c.a.createElement(w.a,{sm:{span:3}},c.a.createElement(H,null))),c.a.createElement(b.a,{className:"table4cast paddingTop"},c.a.createElement(ee,{data:this.state.forecast,day:l+1}))),c.a.createElement(w.a,{lg:5,className:"current paddingTop"},c.a.createElement(b.a,{className:"rowTemp",style:{margin:"0"}},c.a.createElement(R,{city:this.state.data.name,country:this.state.data.sys.country,temp:this.state.data.main.temp,feel:this.state.data.main.feels_like,icon:this.state.data.weather[0].icon,sunrise:this.state.data.sys.sunrise,sunset:this.state.data.sys.sunset,condition:this.state.data.weather[0].main,day:ae[l],month:te[r],date:s,minutes:a,hours:e})),c.a.createElement(b.a,{className:"rowGraph sidePaddings paddingTop",style:{margin:"0"}},c.a.createElement(W,{pressure:this.state.data.main.pressure,humidity:this.state.data.main.humidity,minTemp:this.state.data.main.temp_min,maxTemp:this.state.data.main.temp_max,wind:this.state.data.wind.speed})))))}}]),a}(s.Component),le=(t(45),function(){var e=Object(s.useState)({longitude:-122.04,latitude:37.37,found:!1,watch:null,counter:!1}),a=Object(u.a)(e,2),t=a[0],n=a[1],l=0;return t.found||(l=navigator.geolocation.watchPosition((function(e){n(Object(m.a)({},t,{latitude:e.coords.latitude,longitude:e.coords.longitude,found:!0}))}),(function(e){return console.log(e)}))),t.found&&navigator.geolocation.clearWatch(l),c.a.createElement("div",{className:"landing"},c.a.createElement(ne,{lat:t.latitude,long:t.longitude,found:t.found}))}),se=function(e){return c.a.createElement("div",{className:"landing"},c.a.createElement(ne,{lat:parseFloat(e.match.params.lat),long:parseFloat(e.match.params.long),found:!1}))};var ce=function(){return c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:le}),c.a.createElement(i.a,{path:"/search/:lat/:long",component:se}))};t(96);var re=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(97);o.a.render(c.a.createElement(I.a,{basename:"/weather-ts"},c.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.7673959d.chunk.js.map
(this["webpackJsonplab-2"]=this["webpackJsonplab-2"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),o=n(3),c=n.n(o),s=(n(12),n(4)),a=n(5),l=n(7),u=n(6),d=(n.p,n(13),n(0)),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).resetBoard=function(){r.setState({moves:[],winner:null})},r.getPiece=function(e,t){return r.state.moves.filter((function(n){return n.x===e&&n.y===t}))[0]},r.getWinningMovesForVelocity=function(e,t,n,i){for(var o=[{x:e,y:t}],c=r.getPiece(e,t).player,s=1;s<=3;s+=1){var a=e+n*s,l=t+i*s,u=r.getPiece(a,l);if(!u||u.player!==c)break;o.push({x:a,y:l})}for(var d=-1;d>=-3;d-=1){var f=e+n*d,y=t+i*d,v=r.getPiece(f,y);if(!v||v.player!==c)break;o.push({x:f,y:y})}return o},r.checkForWin=function(e,t){for(var n=[{x:1,y:0},{x:0,y:1},{x:-1,y:1},{x:1,y:1}],i=0;i<n.length;i++){var o=n[i],c=r.getWinningMovesForVelocity(e,t,o.x,o.y);c.length>3&&r.setState({winner:r.getPiece(e,t).player,winningMoves:c})}},r.addMove=function(e,t){for(var n=r.state.playerTurn,i="red"===n?"yellow":"red",o=null,c=r.state.rows-1;c>=0;c--)if(!r.getPiece(e,c)){o=c;break}null!==o&&r.setState({moves:r.state.moves.concat({x:e,y:o,player:n}),playerTurn:i},(function(){return r.checkForWin(e,o,n)}))},r.state={rows:6,columns:7,moves:[],playerTurn:"red"},r}return Object(a.a)(n,[{key:"createBoard",value:function(){for(var e=this,t=this.state,n=(t.rows,t.columns,t.winner),r=[],i=function(t){for(var n=[],i=function(r){var i=e.getPiece(r,t);n.push(Object(d.jsx)("div",{button:!0,onClick:function(){e.addMove(r,t)},style:{width:"6vw",height:"6vw",backgroundColor:"blue",border:"0.5px solid black",display:"flex",padding:8,cursor:"pointer"},children:Object(d.jsx)("div",{style:{borderRadius:"50%",backgroundColor:"white",flex:1,display:"flex"},children:i?Object(d.jsx)("div",{style:{backgroundColor:i.player,flex:1,borderRadius:"50%"}}):void 0})}))},o=0;o<e.state.columns;o+=1)i(o);r.push(Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[" ",n," "]}))},o=0;o<this.state.rows;o+=1)i(o);return Object(d.jsxs)("div",{style:{backgroundColor:"black",display:"flex",flexDirection:"column"},children:[n&&Object(d.jsxs)("div",{onClick:this.resetBoard,style:{position:"absolute",left:0,right:0,bottom:0,top:0,zIndex:3,backgroundColor:"rgba(216,191,216,0.5)",display:"flex",justifyContent:"center",alignItems:"center",color:"#fff",fontWeight:"200",fontSize:"8vw"},children:["".concat(n," wins!")," "]}),r]})}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{style:{height:"100%",padding:5,display:"flex",justifyContent:"center",alignItems:"center"},children:this.createBoard()})})}}]),n}(i.a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),o(e),c(e)}))};c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),y()}},[[15,1,2]]]);
//# sourceMappingURL=main.8f72abea.chunk.js.map
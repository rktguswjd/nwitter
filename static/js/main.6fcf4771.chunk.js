(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{32:function(e,t,a){e.exports=a(50)},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),u=a.n(c),l=a(5),i=a(16),o=a(2),s=a(3),m=a.n(s),p=a(9),f=a(6),d=a(17),b=a(18);a(42),a(44),a(51);b.initializeApp({apiKey:"AIzaSyDb8XrEiKSUMHkDtfppBe1Vcq4Z_W7jUpk",authDomain:"nwitter-8b5be.firebaseapp.com",databaseURL:"https://nwitter-8b5be.firebaseio.com",projectId:"nwitter-8b5be",storageBucket:"nwitter-8b5be.appspot.com",messagingSenderId:"849991195113",appId:"1:849991195113:web:f32547071ea7ce4373d378"});var E=b,h=b.auth(),v=b.firestore(),g=b.storage(),y=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(""),i=Object(l.a)(u,2),o=i[0],s=i[1],f=Object(n.useState)(!0),d=Object(l.a)(f,2),b=d[0],E=d[1],v=Object(n.useState)(""),g=Object(l.a)(v,2),y=g[0],w=g[1],O=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&s(n)},j=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!b){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(a,o);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(a,o);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),w(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:j,className:"container"},r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:O,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:O,className:"authInput"}),r.a.createElement("input",{type:"submit",className:"authInput authSubmit",value:b?"Create Account":"Sign In"}),y&&r.a.createElement("span",{className:"authError"},y)),r.a.createElement("span",{onClick:function(){return E((function(e){return!e}))},className:"authSwitch"},b?"Sign In":"Create Account"))},w=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new E.auth.GoogleAuthProvider:"github"===a&&(n=new E.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(f.a,{icon:d.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),r.a.createElement(y,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{onClick:e,name:"google",className:"authBtn"},"Continue with Google ",r.a.createElement(f.a,{icon:d.b})),r.a.createElement("button",{onClick:e,name:"github",className:"authBtn"},"Continue with Github ",r.a.createElement(f.a,{icon:d.a}))))},O=a(31),j=a(12),x=function(e){var t=e.nweetObj,a=e.isOwner,c=Object(n.useState)(!1),u=Object(l.a)(c,2),i=u[0],o=u[1],s=Object(n.useState)(t.text),d=Object(l.a)(s,2),b=d[0],E=d[1],h=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this mweet?")){e.next=6;break}return e.next=4,v.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,g.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){return o((function(e){return!e}))},w=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,v.doc("nweets/".concat(t.id)).update({text:b});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"nweet"},i?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:w,className:"container nweetEdit"},r.a.createElement("input",{type:"text",placeholder:"Edit your nweet",value:b,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;E(t)},className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Nweet",className:"formBtn"})),r.a.createElement("span",{onClick:y,className:"formBtn cancelBtn"},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl}),a&&r.a.createElement("div",{class:"nweet__actions"},r.a.createElement("span",{onClick:h},r.a.createElement(f.a,{icon:j.d})),r.a.createElement("span",{onClick:y},r.a.createElement(f.a,{icon:j.a})))))},N=a(53),k=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(l.a)(a,2),u=c[0],i=c[1],o=Object(n.useState)(""),s=Object(l.a)(o,2),d=s[0],b=s[1],E=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==u){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===d){e.next=12;break}return r=g.ref().child("".concat(t.uid,"/").concat(Object(N.a)())),e.next=8,r.putString(d,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n=e.sent;case 12:return l={text:u,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,v.collection("nweets").add(l);case 15:i(""),b("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:E,className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{className:"factoryInput__input",value:u,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{for:"attach-file",className:"factoryInput__label"},r.a.createElement("span",null,"Add photos"),r.a.createElement(f.a,{icon:j.b})),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;b(t)},a.readAsDataURL(t)},style:{opacity:0}}),d&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:d,style:{backgroundImage:d}}),r.a.createElement("div",{className:"factoryForm__clear",onClick:function(){return b("")}},r.a.createElement("span",null,"Remove"),r.a.createElement(f.a,{icon:j.c}))))},S=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(l.a)(a,2),u=c[0],i=c[1];return Object(n.useEffect)((function(){v.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(O.a)({id:e.id},e.data())}));i(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(k,{userObj:t}),r.a.createElement("div",{style:{marginTop:30}},u.map((function(e){return r.a.createElement(x,{key:e.id,nweetObj:e,isOwner:e.creatorId===t.uid})}))))},I=function(e){var t=e.userObj,a=e.refreshUser,c=Object(o.g)(),u=Object(n.useState)(t.displayName),i=Object(l.a)(u,2),s=i[0],f=i[1],d=function(){var e=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.collection("nweets").where("creatorId","==",t.uid).orderBy("createdAt").get();case 2:a=e.sent,console.log(a.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){d()}),[]);var b=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===s){e.next=5;break}return e.next=4,t.updateProfile({displayName:s});case 4:a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:b,className:"profileForm"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;f(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:s,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){h.signOut(),c.push("/")}},"Log Out"))},C=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/",style:{marginRight:10}},r.a.createElement(f.a,{icon:d.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},r.a.createElement(f.a,{icon:j.e,color:"#04AAFF",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile")))))},A=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return r.a.createElement(i.a,null,a&&r.a.createElement(C,{userObj:n}),r.a.createElement(o.d,null,a?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(o.b,{exact:!0,path:"/"},r.a.createElement(S,{userObj:n})),r.a.createElement(o.b,{exact:!0,path:"/profile"},r.a.createElement(I,{userObj:n,refreshUser:t}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{exact:!0,path:"/"},r.a.createElement(w,null)),r.a.createElement(o.a,{from:"*",to:"/"}))))};var F=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(null),i=Object(l.a)(u,2),o=i[0],s=i[1];return Object(n.useEffect)((function(){h.onAuthStateChanged((function(e){s(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(A,{refreshUser:function(){var e=h.currentUser;s({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"Initializing...")};a(49);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.6fcf4771.chunk.js.map
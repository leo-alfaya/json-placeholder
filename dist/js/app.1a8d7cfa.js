(function(t){function e(e){for(var n,i,a=e[0],u=e[1],c=e[2],d=0,p=[];d<a.length;d++)i=a[d],o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,a=1;a<s.length;a++){var u=s[a];0!==o[u]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"1aba":function(t,e,s){},"1b60":function(t,e,s){"use strict";var n=s("2895"),o=s.n(n);o.a},2895:function(t,e,s){},3785:function(t,e,s){},"40de":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var n=s("2b0e"),o=s("5c96"),r=s.n(o),i=(s("0fae"),s("2f62")),a=(s("7514"),s("bc3a")),u=s.n(a),c={list:null},l={getEditors:function(t){var e=t.commit;u.a.get("https://jsonplaceholder.typicode.com/users").then(function(t){e("setEditors",t.data)})}},d={setEditors:function(t,e){t.list=e}},p={getEditorById:function(t){return function(e){if(t.list)return t.list.find(function(t){return t.id==e})}}},f={namespaced:!0,state:c,actions:l,mutations:d,getters:p},m={list:null},v={getPosts:function(t){var e=t.commit;u.a.get("https://jsonplaceholder.typicode.com/posts").then(function(t){e("setPosts",t.data)})}},h={setPosts:function(t,e){t.list=e}},_={getPostsByEditor:function(t){return function(e){if(t.list)return t.list.filter(function(t){return t.userId==e})}},countPostsByEditor:function(t,e){return function(t){var s=e.getPostsByEditor(t);if(s)return s.length}}},g={namespaced:!0,state:m,actions:v,mutations:h,getters:_},b={list:null},y={getComments:function(t){var e=t.commit;u.a.get("https://jsonplaceholder.typicode.com/comments").then(function(t){e("setComments",t.data)})}},P={setComments:function(t,e){t.list=e}},E={countCommentsByPost:function(t){return function(e){if(t.list)return t.list.filter(function(t){return t.postId==e}).length}}},C={namespaced:!0,state:b,actions:y,mutations:P,getters:E};n["default"].use(i["a"]);var x=new i["a"].Store({modules:{editores:f,posts:g,comentarios:C}}),j=s("8c4f"),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"editores"},[s("Header",{attrs:{indexMenu:1}}),s("el-main",[s("TitlePage",{attrs:{title:"Editores"}}),s("el-row",{attrs:{gutter:20}},t._l(t.editores,function(t){return s("EditorCard",{key:t.id,attrs:{editor:t}})}),1)],1)],1)},O=[],$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-header",{staticClass:"header"},[s("el-row",{staticClass:"header-container",attrs:{type:"flex",align:"middle"}},[s("el-col",{staticClass:"header-logo",attrs:{span:6}},[s("router-link",{attrs:{to:"/"}},[t._v("Gerencia Editores")])],1),s("el-col",{attrs:{span:18}},[s("el-menu",{attrs:{"default-active":t.activeIndex,mode:"horizontal","background-color":"#1E9DEB","text-color":"white","active-text-color":"white"}},[s("el-menu-item",{attrs:{index:"1"}},[s("router-link",{attrs:{to:"/"}},[t._v("Editores")])],1),s("el-menu-item",{attrs:{index:"2"}},[s("router-link",{attrs:{to:"/posts"}},[t._v("Posts")])],1)],1)],1)],1)],1)},k=[],B=(s("6b54"),{name:"Header",data:function(){return{activeIndex:this.indexMenu.toString()}},props:["indexMenu"]}),T=B,M=(s("da10"),s("2877")),I=Object(M["a"])(T,$,k,!1,null,null,null);I.options.__file="Header.vue";var S=I.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",{staticClass:"titulo-pagina"},[s("el-col",{attrs:{span:24}},[s("h1",[t._v(t._s(t.title))])])],1)},J=[],z={name:"TitlePage",props:["title"]},A=z,D=(s("b9f4"),Object(M["a"])(A,H,J,!1,null,null,null));D.options.__file="TitlePage.vue";var G=D.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-col",{attrs:{span:6}},[s("router-link",{attrs:{to:{name:"user_posts",params:{id:t.editor.id}}}},[s("el-card",{staticClass:"editor-card",attrs:{shadow:"hover"}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("p",[t._v(t._s(t.editor.name))])]),s("p",[t._v("Nome de Usuário: "+t._s(t.editor.username))]),s("p",[t._v("Email: "+t._s(t.editor.email))]),s("p",[t._v("Cidade: "+t._s(t.editor.address.city))]),s("p",{staticClass:"num-posts"},[t._v("Posts: "+t._s(t.num_posts))])])],1)],1)},U=[],q={name:"EditorCard",props:{editor:Object},computed:{num_posts:function(){return this.$store.getters["posts/countPostsByEditor"](this.editor.id)}}},F=q,K=(s("1b60"),Object(M["a"])(F,N,U,!1,null,null,null));K.options.__file="EditorCard.vue";var L=K.exports,Q={name:"Editores",components:{Header:S,TitlePage:G,EditorCard:L},computed:Object(i["b"])({editores:function(t){return t.editores.list}})},R=Q,V=(s("9572"),Object(M["a"])(R,w,O,!1,null,"129c2fc9",null));V.options.__file="Editores.vue";var W=V.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"posts"},[s("Header",{attrs:{indexMenu:2}}),s("el-main",[s("TitlePage",{attrs:{title:"Posts"}}),s("el-row",{attrs:{gutter:20}},t._l(t.posts,function(t){return s("PostCard",{key:t.id,attrs:{post:t}})}),1)],1)],1)},Y=[],Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-col",{attrs:{span:6}},[s("el-card",{staticClass:"post-card",attrs:{shadow:"hover"}},[s("div",{staticClass:"post-header",attrs:{slot:"header"},slot:"header"},[s("p",[t._v(t._s(t.post.title))])]),s("p",{staticClass:"post-content"},[t._v(t._s(t.post.body))]),s("p",{staticClass:"nome-editor"},[t._v("Editor: "+t._s(t.nome_editor))]),s("p",{staticClass:"num-comentarios"},[t._v("Comentários: "+t._s(t.num_comentarios))])])],1)},tt=[],et=(s("7f7f"),{name:"PostCard",props:{post:Object},computed:{nome_editor:function(){return this.$store.getters["editores/getEditorById"](this.post.userId).name},num_comentarios:function(){return this.$store.getters["comentarios/countCommentsByPost"](this.post.id)}}}),st=et,nt=(s("af63"),Object(M["a"])(st,Z,tt,!1,null,null,null));nt.options.__file="PostCard.vue";var ot=nt.exports,rt={name:"Posts",components:{Header:S,TitlePage:G,PostCard:ot},computed:{posts:function(){return this.$route.params.id?this.$store.getters["posts/getPostsByEditor"](this.$route.params.id):this.$store.state.posts.list}}},it=rt,at=(s("6e90"),Object(M["a"])(it,X,Y,!1,null,"5f68fa72",null));at.options.__file="Posts.vue";var ut=at.exports;n["default"].use(j["a"]);var ct=[{path:"/",name:"editores",component:W},{path:"/posts",name:"all_posts",component:ut},{path:"/posts/:id",name:"user_posts",component:ut}],lt=new j["a"]({mode:"history",routes:ct}),dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},pt=[],ft={name:"app"},mt=ft,vt=(s("5c0b"),Object(M["a"])(mt,dt,pt,!1,null,null,null));vt.options.__file="App.vue";var ht=vt.exports;n["default"].use(r.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(ht)},store:x,router:lt,created:function(){this.$store.dispatch("editores/getEditors"),this.$store.dispatch("posts/getPosts"),this.$store.dispatch("comentarios/getComments")}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var n=s("5e27"),o=s.n(n);o.a},"5e27":function(t,e,s){},"5f6d":function(t,e,s){},"6e90":function(t,e,s){"use strict";var n=s("7489"),o=s.n(n);o.a},7489:function(t,e,s){},9572:function(t,e,s){"use strict";var n=s("5f6d"),o=s.n(n);o.a},af63:function(t,e,s){"use strict";var n=s("1aba"),o=s.n(n);o.a},b9f4:function(t,e,s){"use strict";var n=s("40de"),o=s.n(n);o.a},da10:function(t,e,s){"use strict";var n=s("3785"),o=s.n(n);o.a}});
//# sourceMappingURL=app.1a8d7cfa.js.map
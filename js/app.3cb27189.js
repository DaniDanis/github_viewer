(function(){"use strict";var t={1016:function(t,e,n){var r=n(144),i=n(1096),o=n(3250),s=n(6715),a=n(5057),u=n(2469),c=n(3551),l=n(5234),p=function(){var t=this,e=t._self._c;return e(i.Z,[e(o.Z,{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e(u.Z,{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e(u.Z,{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e(l.Z),e(s.Z,{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e(a.Z,[t._v("mdi-open-in-new")])],1)],1),e(c.Z,[e("GitHubViewer")],1)],1)},f=[],h=n(6035),d=function(){var t=this,e=t._self._c;return e(h.Z,[e("GitHubRepo")],1)},g=[],v=n(4177),m=n(4437),b=n(5294),y=n(6069),w=function(){var t=this,e=t._self._c;return e("div",[e(b.Z,{staticClass:"text-center"},[e(m.Z,{attrs:{cols:"6"}},[e(v.Z,{attrs:{items:t.userList,loading:t.userLoading,"search-input":t.userSearch,"item-text":"login"},on:{"update:searchInput":function(e){t.userSearch=e},"update:search-input":function(e){t.userSearch=e}},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),e(m.Z,{attrs:{cols:"6"}},[e(y.Z,{attrs:{items:t.repoList,loading:t.repoLoading,"item-text":"name",label:"'Selecione o repositorio'","return-object":"","single-line":""},model:{value:t.repo,callback:function(e){t.repo=e},expression:"repo"}})],1)],1)],1)},Z=[];function L(t,e){let n=null;function r(){n&&clearTimeout(n);const r=arguments;n=setTimeout((()=>{t.apply(this,r),n=null}),e)}return r}const _={async searchUsers(t){const e=await fetch(`https://api.github.com/search/users?q=${t}`);return e.json()},async searchRepos(t,e){e||(e=1);const n=await fetch(`https://api.github.com/users/${t}/repos?page=${e}`);return n.json()}};var j={data:()=>({user:null,userSearch:null,userList:[],repoList:[],repo:null,userLoading:!1,repoLoading:!1}),methods:{procuraUsuariosGithub:L((async function(){this.userLoading=!0;const t=await _.searchUsers(this.userSearch);this.userList=t.items,this.userLoading=!1}),500),async listaRepositorios(){this.repoLoading=!0;const t=await _.searchRepos(this.user);this.repoList=t,this.repoLoading=!1}},watch:{userSearch(){this.procuraUsuariosGithub()},user(){this.listaRepositorios()},repo(){console.log(this.repo)}}},x=j,k=n(1001),O=(0,k.Z)(x,w,Z,!1,null,null,null),S=O.exports,C={components:{GitHubRepo:S},data:()=>({})},P=C,R=(0,k.Z)(P,d,g,!1,null,null,null),T=R.exports,G={name:"App",components:{GitHubViewer:T},data:()=>({})},H=G,U=(0,k.Z)(H,p,f,!1,null,null,null),V=U.exports,$=n(2250);r.ZP.use($.Z);var M=new $.Z({});r.ZP.config.productionTip=!1,new r.ZP({vuetify:M,render:t=>t(V)}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var s=1/0;for(l=0;l<t.length;l++){r=t[l][0],i=t[l][1],o=t[l][2];for(var a=!0,u=0;u<r.length;u++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(a=!1,o<s&&(s=o));if(a){t.splice(l--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,s=r[0],a=r[1],u=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(u)var l=u(n)}for(e&&e(r);c<s.length;c++)o=s[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},r=self["webpackChunkgithub_viewer"]=self["webpackChunkgithub_viewer"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1016)}));r=n.O(r)})();
//# sourceMappingURL=app.3cb27189.js.map
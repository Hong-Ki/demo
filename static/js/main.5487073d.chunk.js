(window.webpackJsonpdemo=window.webpackJsonpdemo||[]).push([[0],[,,,,,,,,,,,function(e,n,t){e.exports={copyright:"Main_copyright__1KYJ8","fade-in":"Main_fade-in__1_hKo",col:"Main_col___WQ5r",space:"Main_space__1Ac3M",big:"Main_big__1nHPP","text-section":"Main_text-section__2xrMq","contents-wrapper":"Main_contents-wrapper__3zhKQ",contents:"Main_contents__2jBJ8","fade-in-up":"Main_fade-in-up__3wyYl",link:"Main_link__3kwse","scroll-icon":"Main_scroll-icon__2yVVx","slide-circle":"Main_slide-circle__2IO3f","slide-bar":"Main_slide-bar__3dS3z",scroll:"Main_scroll__3AmDg"}},,,,,,,function(e,n,t){e.exports={wrapper:"Login_wrapper__A-dCU"}},function(e,n,t){e.exports={wrapper:"Menu_wrapper__TivBQ",menu:"Menu_menu__2X4ht",active:"Menu_active__24UFR"}},,,function(e,n,t){e.exports={wrapper:"PageNavigator_wrapper__vL0wF",bar:"PageNavigator_bar__1W7a0",active:"PageNavigator_active__32Ky5"}},function(e,n,t){e.exports={floating:"Floating_floating__1ugXC","fade-in":"Floating_fade-in__1V_N0"}},function(e,n,t){e.exports={wrapper:"Section_wrapper__84tvk",row:"Section_row__3_hPD",bg:"Section_bg__23n2Y",blur:"Section_blur__1L5Sg"}},function(e,n,t){e.exports=t.p+"static/media/img1.4936a336.png"},function(e,n,t){e.exports={wrapper:"Add_wrapper__3iJdL",blur:"Add_blur__2JPEB"}},function(e,n,t){e.exports=t.p+"static/media/img2.56264aa4.jpg"},function(e,n,t){e.exports=t.p+"static/media/img3.b9fcefe0.jpg"},function(e,n,t){e.exports=t(40)},,,,,function(e,n,t){},,,,,,function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(17),l=t.n(r),i=(t(34),t(9)),o=t(18),s=t(2),m=t.n(s),u=m.a.bind(o),p=function(e){var n=e.login,t=e.logout,a=e.isLogin,r=e.onClick;return c.a.createElement("div",{className:u("wrapper")},c.a.createElement("span",{onClick:r},a&&t,!a&&n))},_=t(19),E=t(10),d=m.a.bind(_),f=function(e){var n=e.menus,t=e.current,a=e.onSelect,r=n.map(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return c.a.createElement(E.b,{to:"HOME"===e?"/":"/".concat(e),key:e},c.a.createElement("div",{className:d("menu",{active:t===n}),onClick:function(){a(n),n++}},e,c.a.createElement("span",null)))});return c.a.createElement("div",{className:d("wrapper")},r)},g=t(22),v=m.a.bind(g),b=function(e){for(var n=e.total,t=e.current,a=void 0===t?1:t,r=[],l=1;l<=n;l++)r.push(c.a.createElement("span",{key:l,className:v("bar",{active:l<=a})}));return c.a.createElement("div",{className:v("wrapper")},c.a.createElement("span",null,"".concat(a," / ").concat(n)),c.a.createElement("div",null,r))},w=t(23),S=m.a.bind(w),N=function(e){var n=e.menus;e.location;Object(a.useEffect)(function(){});var t=Object(a.useState)(0),r=Object(i.a)(t,2),l=r[0],o=r[1],s=Object(a.useState)(!1),m=Object(i.a)(s,2),u=m[0],_=m[1];return c.a.createElement("div",{className:S("floating")},c.a.createElement(p,{login:"login",logout:"logout",isLogin:u,onClick:function(){_(!u)}}),c.a.createElement(f,{menus:n,current:l,onSelect:function(e){o(e)}}),c.a.createElement(b,{total:n.length,current:l+1}))},x=t(6),M=t(24),h=m.a.bind(M),y=function(e){var n=e.children,t=e.direction,r=void 0===t?"row":t,l=e.background,o=Object(a.useState)(!1),s=Object(i.a)(o,2),m=(s[0],s[1]);return c.a.createElement(c.a.Fragment,null,l&&c.a.createElement("img",{onLoad:function(e){m(!0)},className:h("bg"),src:l,alt:""}),c.a.createElement("div",{className:h("wrapper",{direction:r})},n))},T=t(11),k=m.a.bind(T),C=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:k("copyright")},c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("span",{className:k("big","space")},"plux"),c.a.createElement("span",null,"MAKESTAR PLUX"))),c.a.createElement("div",{className:k("col")},c.a.createElement("span",null,"Creator"),c.a.createElement("span",null,"MAKEUS Entertainment")),c.a.createElement("div",null,c.a.createElement("span",null,"2019 MAKESTAR, Inc."),c.a.createElement("span",{className:k("text-section")},"Business Info."))))},O=m.a.bind(T),j=function(e){var n=e.children,t=e.onClick;return c.a.createElement("div",{onClick:t},c.a.createElement("span",{className:O("link")},n))},A=function(e){var n=e.children;return c.a.createElement("div",{className:O("scroll")},c.a.createElement("div",{className:O("scroll-icon")}),n)},L=function(e){var n=e.children,t=e.contentsStyle,a=e.contentsWrapperStyle;return c.a.createElement(c.a.Fragment,null,c.a.createElement(C,null),c.a.createElement("div",{className:O("contents-wrapper"),style:a},c.a.createElement("div",{className:O("contents"),style:t},n)))},I=t(25),P=t.n(I),F={wrapper:{justifyContent:"flex-start"},contents:{marginLeft:"2%",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center"}},K=function(){return c.a.createElement(y,{background:P.a},c.a.createElement(L,{contentsWrapperStyle:F.wrapper,contentsStyle:F.contents},c.a.createElement("div",{style:{flexGrow:9,display:"flex",justifyContent:"center",flexDirection:"column"}},c.a.createElement("div",{className:"title"},"Title"),c.a.createElement("div",{className:"subtitle"},"Sub Title"),c.a.createElement("div",{className:"contents"},"Contents"),c.a.createElement(j,null,"MORE")),c.a.createElement("div",{style:{flexGrow:1,width:"100%"}},c.a.createElement(A,null," ","SCROLL DOWN"," "))))},D=t(26),J=t(27),R=t.n(J),B=t(28),H=t.n(B),W=m.a.bind(D),G=function(){return c.a.createElement(y,{background:R.a},c.a.createElement("div",{className:W("wrapper")},c.a.createElement("span",null,"THIS IS"),c.a.createElement("span",null,"FIRST"),c.a.createElement("span",null,"TEST PAGE")))},U=function(){return c.a.createElement(y,{background:H.a},c.a.createElement("div",{className:W("wrapper")},c.a.createElement("span",null,"THIS IS"),c.a.createElement("span",null,"SECOND"),c.a.createElement("span",null,"TEST PAGE")))},Q=function(){return c.a.createElement(E.a,{basename:"/demo"},c.a.createElement(N,{menus:["HOME","TEST1","TEST2"]}),c.a.createElement(x.c,null,c.a.createElement(x.a,{exact:!0,path:"/",component:K}),c.a.createElement(x.a,{exact:!0,path:"/TEST1",component:G}),c.a.createElement(x.a,{exact:!0,path:"/TEST2",component:U})))};l.a.render(c.a.createElement(Q,null),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.5487073d.chunk.js.map
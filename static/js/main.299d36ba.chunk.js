(this["webpackJsonpfood-order-app"]=this["webpackJsonpfood-order-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__pF_Jr",summary:"CartItem_summary__2nkrs",price:"CartItem_price__1u-gW",amount:"CartItem_amount__1Ap1x",actions:"CartItem_actions__3Xifi"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__24h4H",total:"Cart_total__3JeHW",actions:"Cart_actions__2yu0c","button--alt":"Cart_button--alt__21bpX",button:"Cart_button__1yIIl"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3tK4y",icon:"HeaderCartButton_icon__2G4hW",badge:"HeaderCartButton_badge__11eAi",bump:"HeaderCartButton_bump__1vOx1"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1cNXe",modal:"Modal_modal__27Jz3","slide-down":"Modal_slide-down__2ptqH"}},function(e,t,n){e.exports={meal:"MealItem_meal__kEIzR",description:"MealItem_description__dd6UH",price:"MealItem_price__3hhIP"}},,function(e,t,n){e.exports={header:"Header_header__rKsbk","main-image":"Header_main-image__2jwnW"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__xghoQ"}},function(e,t,n){e.exports={card:"Card_card__2JfGq"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__19mYK","meals-appear":"AvailableMeals_meals-appear__3xN_i"}},function(e,t,n){e.exports={input:"Input_input__-xKA_"}},function(e,t,n){e.exports={form:"MealItemForm_form__U5XV5"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(6),r=n.n(i),s=(n(24),n(3)),o=n(2),l=n(10),d=n.n(l),m=n(0),u=function(e){return Object(m.jsx)("div",{className:d.a.backdrop,onClick:e.onClick})},j=function(e){return Object(m.jsx)("div",{className:d.a.modal,children:Object(m.jsx)("div",{className:d.a.content,children:e.children})})},b=function(e){var t=document.getElementById("overlays");return Object(m.jsxs)(a.Fragment,{children:[r.a.createPortal(Object(m.jsx)(u,{onClick:e.onClose}),t),r.a.createPortal(Object(m.jsx)(j,{children:e.children}),t)]})},x=c.a.createContext({items:[],totalAmount:0,addItems:function(e){},removeItem:function(e){}}),p=n(4),O=n.n(p),h=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:O.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:O.a.summary,children:[Object(m.jsx)("span",{className:O.a.price,children:t}),Object(m.jsxs)("span",{className:O.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:O.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},_=n(5),f=n.n(_),v=function(e){var t=Object(a.useContext)(x),n="$".concat(t.totalAmount.toFixed(2)),c=t.items.length>0,i=function(e){t.removeItem(e)},r=function(e){t.addItems(Object(o.a)(Object(o.a)({},e),{},{amount:1}))},s=Object(m.jsx)("ul",{className:f.a["cart-items"],children:t.items.map((function(e){return Object(m.jsx)(h,{name:e.name,amount:e.amount,price:e.price,onRemove:i.bind(null,e.id),onAdd:r.bind(null,e),children:e.name},e.id)}))});return Object(m.jsxs)(b,{onClose:e.onHideCart,children:[s,Object(m.jsxs)("div",{className:f.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:n})]}),Object(m.jsxs)("div",{className:f.a.actions,children:[Object(m.jsx)("button",{className:f.a["button--alt"],onClick:e.onHideCart,children:"Close"}),c&&Object(m.jsx)("button",{className:f.a.button,children:"Order"})]})]})},C=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},I=n(8),g=n.n(I),A=function(e){var t=Object(a.useContext)(x),n=Object(a.useState)(!1),c=Object(s.a)(n,2),i=c[0],r=c[1],o=t.items,l=t.items.reduce((function(e,t){return e+t.amount}),0),d="".concat(g.a.button," ").concat(i?g.a.bump:"");return Object(a.useEffect)((function(){if(0!==o.length){r(!0);var e=setTimeout((function(){r(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(m.jsxs)("button",{className:d,onClick:e.onClick,children:[Object(m.jsx)("span",{className:g.a.icon,children:Object(m.jsx)(C,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:g.a.badge,children:l})]})},N=n(13),y=n.n(N),M=n.p+"static/media/meals.2971f633.jpg",H=function(e){return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsxs)("header",{className:y.a.header,children:[Object(m.jsx)("h1",{children:"React Meals"}),Object(m.jsx)(A,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:y.a["main-image"],children:Object(m.jsx)("img",{src:M,alt:"delicious meals"})})]})},k=n(15),w=n.n(k),E=function(){return Object(m.jsxs)("section",{className:w.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},F=n(16),B=n.n(F),S=function(e){return Object(m.jsx)("div",{className:B.a.card,children:e.children})},T=n(17),R=n.n(T),D=n(18),z=n.n(D),J=c.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:z.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(o.a)({ref:t},e.input))]})})),P=n(19),K=n.n(P),V=function(e){var t=Object(a.useRef)(),n=Object(a.useState)(!0),c=Object(s.a)(n,2),i=c[0],r=c[1];return Object(m.jsxs)("form",{className:K.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,c=+a;0===a.trim().length||c<1||c>5?r(!1):e.onAddToCart(c)},children:[Object(m.jsx)(J,{label:"Amount",ref:t,input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:"+ Add"}),!i&&Object(m.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},W=n(11),X=n.n(W),q=function(e){var t="$".concat(e.price.toFixed(2)),n=Object(a.useContext)(x);return Object(m.jsxs)("li",{className:X.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("div",{className:X.a.description,children:e.description}),Object(m.jsx)("div",{className:X.a.price,children:t})]}),Object(m.jsx)("div",{children:Object(m.jsx)(V,{id:e.id,onAddToCart:function(t){n.addItems({id:e.id,name:e.name,amount:t,price:e.price})}})})]})},G=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],Y=function(){var e=G.map((function(e){return Object(m.jsx)(q,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(m.jsx)("section",{className:R.a.meals,children:Object(m.jsx)(S,{children:Object(m.jsx)("ul",{children:e})})})},$=function(){return Object(m.jsxs)(a.Fragment,{children:[Object(m.jsx)(E,{}),Object(m.jsx)(Y,{})]})},U=n(14),Q={items:[],totalAmount:0},L=function(e,t){if("ADD_ITEM"===t.type){var n,a=e.items.findIndex((function(e){return e.id===t.item.id})),c=e.items[a];if(c){var i=Object(o.a)(Object(o.a)({},c),{},{amount:c.amount+t.item.amount});(n=Object(U.a)(e.items))[a]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:e.totalAmount+t.item.price*t.item.amount}}if("REMOVE_ITEM"===t.type){var r,s=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[s],d=e.totalAmount-l.price;if(1===l.amount)r=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(o.a)(Object(o.a)({},l),{},{amount:l.amount-1});(r=Object(U.a)(e.items))[s]=m}return{items:r,totalAmount:d}}return Q},Z=function(e){var t=Object(a.useReducer)(L,Q),n=Object(s.a)(t,2),c=n[0],i=n[1],r={items:c.items,totalAmount:c.totalAmount,addItems:function(e){i({type:"ADD_ITEM",item:e})},removeItem:function(e){i({type:"REMOVE_ITEM",id:e})}};return Object(m.jsx)(x.Provider,{value:r,children:e.children})};var ee=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)(Z,{children:[n&&Object(m.jsx)(v,{onHideCart:function(){c(!1)}}),Object(m.jsx)(H,{onShowCart:function(){c(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)($,{})})]})};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(ee,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.299d36ba.chunk.js.map
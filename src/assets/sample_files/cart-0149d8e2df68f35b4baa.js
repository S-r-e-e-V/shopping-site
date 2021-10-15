(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3672],{7882:function(s,e,t){"use strict";var r=t(5893),i=t(7294);function c(s){var e=s.title,t=s.subTitle;return(0,r.jsx)("div",{className:"page-header text-center",style:{backgroundImage:"url(images/page-header-bg.jpg)"},children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("h1",{className:"page-title",children:[e,(0,r.jsx)("span",{children:t})]})})})}e.Z=i.memo(c)},784:function(s,e,t){"use strict";t.r(e);var r=t(5893),i=t(6265),c=t(7294),a=t(4494),n=t(8335),l=t(812),o=t(7882),d=t(2806),m=t(6442);function h(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),t.push.apply(t,r)}return t}function u(s){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?h(Object(t),!0).forEach((function(e){(0,i.Z)(s,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(e){Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(t,e))}))}return s}e.default=(0,a.$j)((function(s){return{cartItems:s.cartlist.data}}),u({},d.Nw))((function(s){var e=(0,c.useState)([]),t=e[0],i=e[1],a=(0,c.useState)(0),d=a[0],h=a[1];function p(s){h(s)}return(0,c.useEffect)((function(){i(s.cartItems)}),[s.cartItems]),(0,r.jsxs)("div",{className:"main",children:[(0,r.jsx)(o.Z,{title:"Shopping Cart",subTitle:"Shop"}),(0,r.jsx)("nav",{className:"breadcrumb-nav",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("ol",{className:"breadcrumb",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(n.Z,{href:"/",children:"Home"})}),(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(n.Z,{href:"/shop/sidebar/list",children:"Shop"})}),(0,r.jsx)("li",{className:"breadcrumb-item active",children:"Shopping Cart"})]})})}),(0,r.jsx)("div",{className:"page-content pb-5",children:(0,r.jsx)("div",{className:"cart",children:(0,r.jsx)("div",{className:"container",children:t.length>0?(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-lg-9",children:[(0,r.jsxs)("table",{className:"table table-cart table-mobile",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Product"}),(0,r.jsx)("th",{children:"Price"}),(0,r.jsx)("th",{children:"Quantity"}),(0,r.jsx)("th",{children:"Total"}),(0,r.jsx)("th",{})]})}),(0,r.jsx)("tbody",{children:t.length>0?t.map((function(e,c){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"product-col",children:(0,r.jsxs)("div",{className:"product",children:[(0,r.jsx)("figure",{className:"product-media",children:(0,r.jsx)(n.Z,{href:"/product/default/".concat(e.slug),className:"product-image",children:(0,r.jsx)("img",{src:"https://d-themes.com/react_asset_api/molla"+e.sm_pictures[0].url,alt:"product"})})}),(0,r.jsx)("h4",{className:"product-title",children:(0,r.jsx)(n.Z,{href:"/product/default/".concat(e.slug),children:e.name})})]})}),(0,r.jsxs)("td",{className:"price-col",children:["$",e.sale_price?e.sale_price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):e.price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),(0,r.jsx)("td",{className:"quantity-col",children:(0,r.jsx)(l.Z,{value:e.qty,changeQty:function(s){return function(s,e){i(t.map((function(t,r){return r==e?u(u({},t),{},{qty:s,sum:(t.sale_price?t.sale_price:t.price)*s}):t})))}(s,c)},adClass:"cart-product-quantity"})}),(0,r.jsxs)("td",{className:"total-col",children:["$",e.sum.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),(0,r.jsx)("td",{className:"remove-col",children:(0,r.jsx)("button",{className:"btn-remove",onClick:function(){return s.removeFromCart(e)},children:(0,r.jsx)("i",{className:"icon-close"})})})]},c)})):(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:(0,r.jsx)("p",{className:"pl-2 pt-1 pb-1",children:" No Products in Cart "})})})})]}),(0,r.jsxs)("div",{className:"cart-bottom",children:[(0,r.jsx)("div",{className:"cart-discount",children:(0,r.jsx)("form",{action:"#",children:(0,r.jsxs)("div",{className:"input-group",children:[(0,r.jsx)("input",{type:"text",className:"form-control",required:!0,placeholder:"coupon code"}),(0,r.jsx)("div",{className:"input-group-append",children:(0,r.jsx)("button",{className:"btn btn-outline-primary-2",type:"submit",children:(0,r.jsx)("i",{className:"icon-long-arrow-right"})})})]})})}),(0,r.jsxs)("button",{className:"btn btn-outline-dark-2",onClick:function(e){var r=e.currentTarget;r.querySelector(".icon-refresh").classList.add("load-more-rotating"),setTimeout((function(){s.updateCart(t),r.querySelector(".icon-refresh").classList.remove("load-more-rotating")}),400)},children:[(0,r.jsx)("span",{children:"UPDATE CART"}),(0,r.jsx)("i",{className:"icon-refresh"})]})]})]}),(0,r.jsxs)("aside",{className:"col-lg-3",children:[(0,r.jsxs)("div",{className:"summary summary-cart",children:[(0,r.jsx)("h3",{className:"summary-title",children:"Cart Total"}),(0,r.jsx)("table",{className:"table table-summary",children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{className:"summary-subtotal",children:[(0,r.jsx)("td",{children:"Subtotal:"}),(0,r.jsxs)("td",{children:["$",(0,m.bS)(s.cartItems).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),(0,r.jsxs)("tr",{className:"summary-shipping",children:[(0,r.jsx)("td",{children:"Shipping:"}),(0,r.jsx)("td",{children:"\xa0"})]}),(0,r.jsxs)("tr",{className:"summary-shipping-row",children:[(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"custom-control custom-radio",children:[(0,r.jsx)("input",{type:"radio",id:"free-shipping",name:"shipping",className:"custom-control-input",onChange:function(s){return p(0)},defaultChecked:!0}),(0,r.jsx)("label",{className:"custom-control-label",htmlFor:"free-shipping",children:"Free Shipping"})]})}),(0,r.jsx)("td",{children:"$0.00"})]}),(0,r.jsxs)("tr",{className:"summary-shipping-row",children:[(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"custom-control custom-radio",children:[(0,r.jsx)("input",{type:"radio",id:"standard-shipping",name:"shipping",className:"custom-control-input",onChange:function(s){return p(10)}}),(0,r.jsx)("label",{className:"custom-control-label",htmlFor:"standard-shipping",children:"Standard:"})]})}),(0,r.jsx)("td",{children:"$10.00"})]}),(0,r.jsxs)("tr",{className:"summary-shipping-row",children:[(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"custom-control custom-radio",children:[(0,r.jsx)("input",{type:"radio",id:"express-shipping",name:"shipping",className:"custom-control-input",onChange:function(s){return p(20)}}),(0,r.jsx)("label",{className:"custom-control-label",htmlFor:"express-shipping",children:"Express:"})]})}),(0,r.jsx)("td",{children:"$20.00"})]}),(0,r.jsxs)("tr",{className:"summary-shipping-estimate",children:[(0,r.jsxs)("td",{children:["Estimate for Your Country",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.Z,{href:"/shop/dashboard",children:"Change address"})]}),(0,r.jsx)("td",{children:"\xa0"})]}),(0,r.jsxs)("tr",{className:"summary-total",children:[(0,r.jsx)("td",{children:"Total:"}),(0,r.jsxs)("td",{children:["$",((0,m.bS)(s.cartItems)+d).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]})]})}),(0,r.jsx)(n.Z,{className:"btn btn-outline-primary-2 btn-order btn-block",href:"/shop/checkout",children:"PROCEED TO CHECKOUT"})]}),(0,r.jsxs)(n.Z,{href:"/shop/sidebar/list",className:"btn btn-outline-dark-2 btn-block mb-3",children:[(0,r.jsx)("span",{children:"CONTINUE SHOPPING"}),(0,r.jsx)("i",{className:"icon-refresh"})]})]})]}):(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-12",children:(0,r.jsxs)("div",{className:"cart-empty-page text-center",children:[(0,r.jsx)("i",{className:"cart-empty icon-shopping-cart",style:{lineHeight:1,fontSize:"15rem"}}),(0,r.jsx)("p",{className:"px-3 py-2 cart-empty mb-3",children:"No products added to the cart"}),(0,r.jsx)("p",{className:"return-to-shop mb-0",children:(0,r.jsx)(n.Z,{href:"/shop/sidebar/list",className:"btn btn-primary",children:"RETURN TO SHOP"})})]})})})})})})]})}))},9399:function(s,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/cart",function(){return t(784)}])}},function(s){s.O(0,[9774,2888,179],(function(){return e=9399,s(s.s=e);var e}));var e=s.O();_N_E=e}]);
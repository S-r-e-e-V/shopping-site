(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4396],{7185:function(e,s,i){"use strict";var r=i(5893),a=i(7294);function t(e){var s=e.adClass,i=void 0===s?"":s,a=e.type,t=void 0===a?"normal":a;function l(e){(e.target.classList.contains("toggle-button")||e.target.querySelector(".toggle-button"))&&(e.target.classList.contains("collapsed")||e.target.querySelector(".toggle-button")&&e.target.querySelector(".toggle-button").classList.contains("collapsed")||e.target.classList.contains("collapsing")||e.target.querySelector(".toggle-button")&&e.target.querySelector(".toggle-button").classList.contains("collapsing"))&&(e.currentTarget.querySelector(".toggle-button.expanded")&&e.currentTarget.querySelector(".toggle-button.expanded").click(),e.currentTarget.querySelector(".toggle-button.expanding")&&e.currentTarget.querySelector(".toggle-button.expanding").click())}return"normal"===t?(0,r.jsx)("div",{className:"accordion  ".concat(i),onClick:l,children:e.children}):"checkout"===t?(0,r.jsx)("div",{className:"accordion-summary",onClick:l,children:e.children}):""}s.Z=a.memo(t)},2674:function(e,s,i){"use strict";var r=i(5893),a=i(7294),t=i(2954),l=i(6442);function c(e){var s=e.title,i=e.expanded,a=e.adClass,c=void 0===a?"":a,n=e.type;return"default"===(void 0===n?"default":n)?(0,r.jsx)(t.Z,{collapsed:!i,children:function(i){var a=i.onToggle,t=i.setCollapsibleElement,n=i.toggleState;return(0,r.jsxs)("div",{className:"card ".concat(c),children:[(0,r.jsx)("div",{className:"card-header",onClick:a,children:(0,r.jsx)("h2",{className:"card-title",children:(0,r.jsx)("span",{className:"toggle-button ".concat(n.toLowerCase()),dangerouslySetInnerHTML:(0,l.rJ)(s),style:{height:"auto"}})})}),(0,r.jsx)("div",{ref:t,children:(0,r.jsx)("div",{className:"card-body",children:e.children})})]})}}):(0,r.jsx)(t.Z,{collapsed:!i,children:function(i){var a=i.onToggle,t=i.setCollapsibleElement,n=i.toggleState;return(0,r.jsxs)("div",{className:"acc-item ".concat(c),children:[(0,r.jsx)("h5",{children:(0,r.jsx)("span",{className:"toggle-button ".concat(n.toLowerCase()),dangerouslySetInnerHTML:(0,l.rJ)(s),onClick:a,style:{height:"auto"}})}),(0,r.jsx)("div",{ref:t,children:(0,r.jsx)("div",{className:"collapse-wrap",children:e.children})})]})}})}s.Z=a.memo(c)},2076:function(e,s,i){"use strict";var r=i(5893),a=i(7294),t=i(1163),l=i(8335);function c(e){var s=(0,t.useRouter)(),i=e.prev,a=e.next,c=e.current,n=e.fullWidth,o=void 0!==n&&n;return(0,r.jsx)("nav",{className:"breadcrumb-nav border-0 mb-0",children:(0,r.jsxs)("div",{className:"d-flex align-items-center "+(o?"container-fluid":"container"),children:[(0,r.jsxs)("ol",{className:"breadcrumb",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(l.Z,{href:"/",children:"Home"})}),(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(l.Z,{href:"/product/default/dark-yellow-lace-cut-out-swing-dress",children:"Product"})}),(0,r.jsx)("li",{className:"breadcrumb-item active",children:c})]}),(0,r.jsxs)("nav",{className:"product-pager ml-auto",children:[i?(0,r.jsxs)(l.Z,{href:{pathname:s.pathname,query:{slug:i.slug}},className:"product-pager-link product-pager-prev ".concat(a?"":"prev-only"),children:[(0,r.jsx)("i",{className:"icon-angle-left"}),(0,r.jsx)("span",{children:"Prev"}),(0,r.jsxs)("div",{className:"product-detail",children:[(0,r.jsx)("figure",{children:(0,r.jsx)("img",{src:"https://d-themes.com/react_asset_api/molla"+i.sm_pictures[0].url,alt:"product",width:i.sm_pictures[0].width,height:i.sm_pictures[0].height})}),(0,r.jsx)("h3",{className:"product-name mb-0",children:i.name})]})]}):"",a?(0,r.jsxs)(l.Z,{href:{pathname:s.pathname,query:{slug:a.slug}},className:"product-pager-link product-pager-next",children:[(0,r.jsx)("span",{children:"Next"}),(0,r.jsx)("i",{className:"icon-angle-right"}),(0,r.jsxs)("div",{className:"product-detail",children:[(0,r.jsx)("figure",{children:(0,r.jsx)("img",{src:"https://d-themes.com/react_asset_api/molla"+a.sm_pictures[0].url,alt:"product",width:a.sm_pictures[0].width,height:a.sm_pictures[0].height})}),(0,r.jsx)("h3",{className:"product-name mb-0",children:a.name})]})]}):""]})]})})}s.Z=a.memo(c)},8062:function(e,s,i){"use strict";var r=i(5893),a=i(7294),t=i(2674),l=i(7185),c=i(8335);function n(e){var s=e.product,i=function(e){e.preventDefault(),e.currentTarget.parentNode.querySelector(".active")&&e.currentTarget.parentNode.querySelector(".active").classList.remove("active"),e.currentTarget.classList.add("active")};return s?(0,r.jsxs)(l.Z,{adClass:"accordion-plus product-details-accordion pb-2 mb-0",children:[(0,r.jsx)(t.Z,{title:"Description",adClass:"card-box card-sm",children:(0,r.jsxs)("div",{className:"product-desc-content",children:[(0,r.jsx)("p",{className:"pb-1",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci."}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. "}),(0,r.jsx)("li",{children:"Vivamus finibus vel mauris ut vehicula."}),(0,r.jsx)("li",{children:"Nullam a magna porttitor, dictum risus nec, faucibus sapien."})]}),(0,r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede."})]})}),(0,r.jsx)(t.Z,{title:"Additional information",adClass:"card-box card-sm",children:(0,r.jsxs)("div",{className:"product-desc-content",children:[(0,r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci."}),(0,r.jsx)("h3",{className:"pt-2",children:"Fabric & care"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"100% Polyester"}),(0,r.jsx)("li",{children:"Do not iron"}),(0,r.jsx)("li",{children:"Do not wash"}),(0,r.jsx)("li",{children:"Do not bleach"}),(0,r.jsx)("li",{children:"Do not tumble dry"}),(0,r.jsx)("li",{children:"Professional dry clean only"})]}),(0,r.jsx)("h3",{children:"Size"}),(0,r.jsx)("p",{children:"S, M, L, XL"})]})}),(0,r.jsx)(t.Z,{title:"Shipping & Returns",expanded:!0,adClass:"card-box card-sm",children:(0,r.jsx)("div",{className:"product-desc-content",children:(0,r.jsxs)("p",{children:["We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our ",(0,r.jsx)(c.Z,{href:"#",children:"Delivery information"}),(0,r.jsx)("br",{}),"We hope you\u2019ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our ",(0,r.jsx)(c.Z,{href:"#",children:"Returns information"})]})})}),(0,r.jsxs)(t.Z,{title:"Reviews (".concat(s.review,")"),adClass:"card-box card-sm",children:[(0,r.jsxs)("div",{className:"reviews",children:[(0,r.jsx)("div",{className:"review",children:(0,r.jsxs)("div",{className:"row no-gutters",children:[(0,r.jsxs)("div",{className:"col-auto",children:[(0,r.jsx)("h4",{children:(0,r.jsx)(c.Z,{href:"#",children:"Samanta J."})}),(0,r.jsx)("div",{className:"ratings-container",children:(0,r.jsxs)("div",{className:"ratings",children:[(0,r.jsx)("div",{className:"ratings-val",style:{width:20*s.ratings+"%"}}),(0,r.jsx)("span",{className:"tooltip-text",children:s.ratings.toFixed(2)})]})}),(0,r.jsx)("span",{className:"review-date mb-1",children:"6 days ago"})]}),(0,r.jsxs)("div",{className:"col",children:[(0,r.jsx)("h4",{children:"Good, perfect size"}),(0,r.jsx)("div",{className:"review-content",children:(0,r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!"})}),(0,r.jsxs)("div",{className:"review-action",children:[(0,r.jsxs)(c.Z,{href:"#",children:[(0,r.jsx)("i",{className:"icon-thumbs-up"}),"Helpful (2)"]}),(0,r.jsxs)(c.Z,{href:"#",children:[(0,r.jsx)("i",{className:"icon-thumbs-down"}),"Unhelpful (0)"]})]})]})]})}),(0,r.jsx)("div",{className:"review border-0",children:(0,r.jsxs)("div",{className:"row no-gutters",children:[(0,r.jsxs)("div",{className:"col-auto",children:[(0,r.jsx)("h4",{children:(0,r.jsx)(c.Z,{href:"#",children:"John Doe"})}),(0,r.jsx)("div",{className:"ratings-container",children:(0,r.jsxs)("div",{className:"ratings",children:[(0,r.jsx)("div",{className:"ratings-val",style:{width:20*s.ratings+"%"}}),(0,r.jsx)("span",{className:"tooltip-text",children:s.ratings.toFixed(2)})]})}),(0,r.jsx)("span",{className:"review-date mb-1",children:"5 days ago"})]}),(0,r.jsxs)("div",{className:"col",children:[(0,r.jsx)("h4",{children:"Very good"}),(0,r.jsx)("div",{className:"review-content",children:(0,r.jsx)("p",{children:"Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!"})}),(0,r.jsxs)("div",{className:"review-action",children:[(0,r.jsxs)(c.Z,{href:"#",children:[(0,r.jsx)("i",{className:"icon-thumbs-up"}),"Helpful (0)"]}),(0,r.jsxs)(c.Z,{href:"#",children:[(0,r.jsx)("i",{className:"icon-thumbs-down"}),"Unhelpful (0)"]})]})]})]})})]}),(0,r.jsxs)("div",{className:"reply",children:[(0,r.jsxs)("div",{className:"title-wrapper text-left",children:[(0,r.jsx)("h3",{className:"title title-simple text-left text-normal",children:"Add a Review"}),(0,r.jsx)("p",{children:"Your email address will not be published. Required fields are marked *"})]}),(0,r.jsxs)("div",{className:"rating-form",children:[(0,r.jsx)("label",{htmlFor:"rating",className:"text-dark",children:"Your rating * "}),(0,r.jsx)("span",{className:"rating-stars selected",children:[1,2,3,4,5].map((function(e,s){return(0,r.jsx)("a",{className:"star-".concat(e),href:"#",onClick:i,children:e},"star-"+s)}))}),(0,r.jsxs)("select",{name:"rating",id:"rating",required:"",style:{display:"none"},children:[(0,r.jsx)("option",{value:"",children:"Rate\u2026"}),(0,r.jsx)("option",{value:"5",children:"Perfect"}),(0,r.jsx)("option",{value:"4",children:"Good"}),(0,r.jsx)("option",{value:"3",children:"Average"}),(0,r.jsx)("option",{value:"2",children:"Not that bad"}),(0,r.jsx)("option",{value:"1",children:"Very poor"})]})]}),(0,r.jsxs)("form",{action:"#",children:[(0,r.jsx)("textarea",{id:"reply-message",cols:"30",rows:"6",className:"form-control mb-2",placeholder:"Comment *",required:!0}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsx)("input",{type:"text",className:"form-control",id:"reply-name",name:"reply-name",placeholder:"Name *",required:!0})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsx)("input",{type:"email",className:"form-control",id:"reply-email",name:"reply-email",placeholder:"Email *",required:!0})})]}),(0,r.jsxs)("div",{className:"form-checkbox mb-2",children:[(0,r.jsx)("input",{type:"checkbox",className:"custom-checkbox",id:"signin-remember",name:"signin-remember"}),(0,r.jsx)("label",{className:"form-control-label ml-3",htmlFor:"signin-remember",children:"Save my name, email, and website in this browser for the next time I comment."})]}),(0,r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})]})]}):(0,r.jsx)("div",{})}s.Z=a.memo(n)}}]);
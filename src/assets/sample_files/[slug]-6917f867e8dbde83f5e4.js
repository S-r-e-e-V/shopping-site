(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1578],{2076:function(e,s,a){"use strict";var i=a(5893),r=a(7294),l=a(1163),t=a(8335);function c(e){var s=(0,l.useRouter)(),a=e.prev,r=e.next,c=e.current,n=e.fullWidth,d=void 0!==n&&n;return(0,i.jsx)("nav",{className:"breadcrumb-nav border-0 mb-0",children:(0,i.jsxs)("div",{className:"d-flex align-items-center "+(d?"container-fluid":"container"),children:[(0,i.jsxs)("ol",{className:"breadcrumb",children:[(0,i.jsx)("li",{className:"breadcrumb-item",children:(0,i.jsx)(t.Z,{href:"/",children:"Home"})}),(0,i.jsx)("li",{className:"breadcrumb-item",children:(0,i.jsx)(t.Z,{href:"/product/default/dark-yellow-lace-cut-out-swing-dress",children:"Product"})}),(0,i.jsx)("li",{className:"breadcrumb-item active",children:c})]}),(0,i.jsxs)("nav",{className:"product-pager ml-auto",children:[a?(0,i.jsxs)(t.Z,{href:{pathname:s.pathname,query:{slug:a.slug}},className:"product-pager-link product-pager-prev ".concat(r?"":"prev-only"),children:[(0,i.jsx)("i",{className:"icon-angle-left"}),(0,i.jsx)("span",{children:"Prev"}),(0,i.jsxs)("div",{className:"product-detail",children:[(0,i.jsx)("figure",{children:(0,i.jsx)("img",{src:"https://d-themes.com/react_asset_api/molla"+a.sm_pictures[0].url,alt:"product",width:a.sm_pictures[0].width,height:a.sm_pictures[0].height})}),(0,i.jsx)("h3",{className:"product-name mb-0",children:a.name})]})]}):"",r?(0,i.jsxs)(t.Z,{href:{pathname:s.pathname,query:{slug:r.slug}},className:"product-pager-link product-pager-next",children:[(0,i.jsx)("span",{children:"Next"}),(0,i.jsx)("i",{className:"icon-angle-right"}),(0,i.jsxs)("div",{className:"product-detail",children:[(0,i.jsx)("figure",{children:(0,i.jsx)("img",{src:"https://d-themes.com/react_asset_api/molla"+r.sm_pictures[0].url,alt:"product",width:r.sm_pictures[0].width,height:r.sm_pictures[0].height})}),(0,i.jsx)("h3",{className:"product-name mb-0",children:r.name})]})]}):""]})]})})}s.Z=r.memo(c)},478:function(e,s,a){"use strict";var i=a(5893),r=a(4047),l=a(7294),t=a(2879);function c(e){var s=e.product,a=e.adClass,c=void 0===a?"product-gallery-vertical":a,n=(0,l.useState)(!1),d=n[0],o=n[1],m=(0,l.useState)(0),u=m[0],h=m[1];return(0,l.useEffect)((function(){s&&(o(!1),h(0))}),[s]),s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"product-gallery ".concat(c),children:(0,i.jsxs)("div",{className:"row m-0",children:[(0,i.jsxs)("figure",{className:"product-main-image",index:"0",children:[s.new?(0,i.jsx)("span",{className:"product-label label-new",children:"New"}):"",s.sale_price?(0,i.jsx)("span",{className:"product-label label-sale",children:"Sale"}):"",s.top?(0,i.jsx)("span",{className:"product-label label-top",children:"Top"}):"",s.stock&&0!=s.stock?"":(0,i.jsx)("span",{className:"product-label label-out",children:"Out of Stock"}),(0,i.jsx)(r.lb,{imageSrc:"https://d-themes.com/react_asset_api/molla"+s.pictures[0].url,imageAlt:"product",largeImageSrc:"https://d-themes.com/react_asset_api/molla"+s.pictures[0].url,dragToMove:!1,mouseActivation:"hover",cursorStyleActive:"crosshair",id:"product-zoom",className:"zoom-image position-relative overflow-hidden",width:s.pictures[0].width,height:s.pictures[0].height,style:{paddingTop:"".concat(s.pictures[0].height/s.pictures[0].width*100,"%")}}),(0,i.jsx)("button",{id:"btn-product-gallery",className:"btn-product-gallery",onClick:function(){var e=parseInt(document.querySelector(".product-main-image").getAttribute("index"));e||(e=0),o(!0),h(e)},children:(0,i.jsx)("i",{className:"icon-arrows"})})]}),(0,i.jsx)("div",{id:"product-zoom-gallery",className:"product-image-gallery",children:s.pictures.map((function(e,a){return(0,i.jsx)("button",{className:"product-gallery-item ".concat(0===a?"active":""),onClick:function(s){return function(e,s,a){for(var i=document.querySelectorAll(".product-main-image img"),r=0;r<i.length;r++)i[r].src=s;document.querySelector(".product-image-gallery .active").classList.remove("active"),document.querySelector(".product-main-image").setAttribute("index",a),e.currentTarget.classList.add("active")}(s,"".concat("https://d-themes.com/react_asset_api/molla"+e.url),a)},children:(0,i.jsx)("div",{className:"img-wrapper h-100",children:(0,i.jsx)("img",{src:"https://d-themes.com/react_asset_api/molla"+s.sm_pictures[a].url,alt:"product back"})})},s.id+"-"+a)}))})]})}),d?(0,i.jsx)(t.Z,{mainSrc:"https://d-themes.com/react_asset_api/molla"+s.pictures[u].url,nextSrc:"https://d-themes.com/react_asset_api/molla"+s.pictures[(u+1)%s.pictures.length].url,prevSrc:"https://d-themes.com/react_asset_api/molla"+s.pictures[(u+s.pictures.length-1)%s.pictures.length].url,onCloseRequest:function(){o(!1)},onMovePrevRequest:function(){h((u+1)%s.pictures.length)},onMoveNextRequest:function(){h((u+s.pictures.length-1)%s.pictures.length)},reactModalStyle:{overlay:{zIndex:1041}}}):""]}):(0,i.jsx)("div",{})}s.Z=l.memo(c)},378:function(e,s,a){"use strict";var i=a(5893),r=a(7294),l=a(6359),t=a(4138),c=a(8289);function n(e){var s=e.products;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{className:"title text-center mb-4",children:"You May Also Like"}),e.loading?(0,i.jsx)(t.Z,{adClass:"owl-simple carousel-equal-height carousel-with-shadow cols-xl-5 cols-lg-4 cols-md-3 cols-2",isTheme:!1,options:c.jc,children:[1,2,3,4].map((function(e,s){return(0,i.jsx)("div",{className:"skel-pro"},s)}))}):(0,i.jsx)(t.Z,{adClass:"owl-simple carousel-equal-height carousel-with-shadow cols-lg-4 cols-md-3 cols-xs-2 cols-1",isTheme:!1,options:c.jc,children:s.map((function(e,s){return(0,i.jsx)(l.Z,{product:e},s)}))})]})}s.Z=r.memo(n)},1341:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return v}});var i=a(5893),r=a(7294),l=a(1163),t=a(8224),c=a(3418),n=a(8665),d=a(2076),o=a(478),m=a(1547),u=a(340),h=a(8335);function p(e){var s=e.product,a=function(e){e.preventDefault(),e.currentTarget.parentNode.querySelector(".active")&&e.currentTarget.parentNode.querySelector(".active").classList.remove("active"),e.currentTarget.classList.add("active")};return s?(0,i.jsx)(u.mQ,{selectedTabClassName:"show",selectedTabPanelClassName:"active",children:(0,i.jsxs)("div",{className:"product-details-tab product-details-extended",children:[(0,i.jsxs)(u.td,{className:"nav nav-pills justify-content-center",children:[(0,i.jsx)(u.OK,{className:"nav-item",children:(0,i.jsx)("span",{className:"nav-link",children:" Description"})}),(0,i.jsx)(u.OK,{className:"nav-item",children:(0,i.jsx)("span",{className:"nav-link",children:" Additional information"})}),(0,i.jsx)(u.OK,{className:"nav-item",children:(0,i.jsx)("span",{className:"nav-link",children:"Shipping & Returns"})}),(0,i.jsx)(u.OK,{className:"nav-item",children:(0,i.jsxs)("span",{className:"nav-link",children:["Reviews (",s.review,")"]})})]}),(0,i.jsxs)("div",{className:"tab-content",children:[(0,i.jsx)(u.x4,{className:"tab-pane",children:(0,i.jsxs)("div",{className:"product-desc-content",children:[(0,i.jsx)("div",{className:"product-desc-row bg-image",style:{backgroundImage:"url(images/products/single/extended/bg-1.jpg)"},children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row justify-content-end",children:(0,i.jsxs)("div",{className:"col-sm-6 col-lg-4",children:[(0,i.jsx)("h2",{children:"Product Information"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Faux suede fabric upper"}),(0,i.jsx)("li",{children:"Tie strap buckle detail"}),(0,i.jsx)("li",{children:"Block heel"}),(0,i.jsx)("li",{children:"Open toe"}),(0,i.jsx)("li",{children:"Heel Height: 7cm / 2.5 inches"})]})]})})})}),(0,i.jsx)("div",{className:"product-desc-row bg-image text-white",style:{backgroundImage:"url(images/products/single/extended/bg-2.jpg)"},children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col-md-6 mb-2 mb-md-0",children:[(0,i.jsx)("h2",{children:"Design"}),(0,i.jsx)("p",{children:"The perfect choice for the summer months. These wedges are perfect for holidays and home, with the thick cross-over strap design and heel strap with an adjustable buckle fastening. Featuring chunky soles with an espadrille and cork-style wedge. "})]}),(0,i.jsxs)("div",{className:"col-md-6",children:[(0,i.jsx)("h2",{children:"Fabric & care"}),(0,i.jsx)("p",{children:"As part of our Forever Comfort collection, these wedges have ultimate cushioning with soft padding and flexi soles. Perfect for strolls into the old town on holiday or a casual wander into the village."})]})]}),(0,i.jsx)("div",{className:"mb-5"}),(0,i.jsx)("img",{src:"images/products/single/extended/sign.png",alt:"",className:"ml-auto mr-auto"})]})}),(0,i.jsx)("div",{className:"product-desc-row bg-image",style:{backgroundImage:"url(images/products/single/extended/bg-3.jpg)"},children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-lg-5",children:[(0,i.jsxs)("blockquote",{children:[(0,i.jsxs)("p",{children:["\u201c Everything is important - ",(0,i.jsx)("br",{}),"that success is in the details. \u201d"]}),(0,i.jsx)("cite",{children:"\u2013 Steve Jobs"})]}),(0,i.jsx)("p",{children:"Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. "})]})})})})]})}),(0,i.jsx)(u.x4,{className:"tab-pane",children:(0,i.jsx)("div",{className:"product-desc-content pt-2",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h3",{children:"Information"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. "}),(0,i.jsx)("h3",{className:"pt-2",children:"Fabric & care"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Faux suede fabric"}),(0,i.jsx)("li",{children:"Gold tone metal hoop handles."}),(0,i.jsx)("li",{children:"RI branding"}),(0,i.jsx)("li",{children:"Snake print trim interior "}),(0,i.jsx)("li",{children:"Adjustable cross body strap"}),(0,i.jsx)("li",{children:" Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm"})]}),(0,i.jsx)("h3",{children:"Size"}),(0,i.jsx)("p",{children:"one size"})]})})}),(0,i.jsx)(u.x4,{className:"tab-pane",children:(0,i.jsx)("div",{className:"product-desc-content pt-2",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h3",{children:"Delivery & returns"}),(0,i.jsxs)("p",{children:["We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our ",(0,i.jsx)(h.Z,{href:"#",children:"Delivery information"}),(0,i.jsx)("br",{}),"We hope you\u2019ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our ",(0,i.jsx)(h.Z,{href:"#",children:"Returns information"})]})]})})}),(0,i.jsx)(u.x4,{className:"tab-pane",children:(0,i.jsxs)("div",{className:"container pt-2",children:[(0,i.jsxs)("div",{className:"reviews",children:[(0,i.jsx)("h3",{children:"Reviews (2)"}),(0,i.jsx)("div",{className:"review",children:(0,i.jsxs)("div",{className:"row no-gutters",children:[(0,i.jsxs)("div",{className:"col-auto",children:[(0,i.jsx)("h4",{children:(0,i.jsx)(h.Z,{href:"#",children:"Samanta J."})}),(0,i.jsx)("div",{className:"ratings-container",children:(0,i.jsxs)("div",{className:"ratings",children:[(0,i.jsx)("div",{className:"ratings-val",style:{width:20*s.ratings+"%"}}),(0,i.jsx)("span",{className:"tooltip-text",children:s.ratings.toFixed(2)})]})}),(0,i.jsx)("span",{className:"review-date mb-1",children:"6 days ago"})]}),(0,i.jsxs)("div",{className:"col",children:[(0,i.jsx)("h4",{children:"Good, perfect size"}),(0,i.jsx)("div",{className:"review-content",children:(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!"})}),(0,i.jsxs)("div",{className:"review-action",children:[(0,i.jsxs)(h.Z,{href:"#",children:[(0,i.jsx)("i",{className:"icon-thumbs-up"}),"Helpful (2)"]}),(0,i.jsxs)(h.Z,{href:"#",children:[(0,i.jsx)("i",{className:"icon-thumbs-down"}),"Unhelpful (0)"]})]})]})]})}),(0,i.jsx)("div",{className:"review",children:(0,i.jsxs)("div",{className:"row no-gutters",children:[(0,i.jsxs)("div",{className:"col-auto",children:[(0,i.jsx)("h4",{children:(0,i.jsx)(h.Z,{href:"#",children:"John Doe"})}),(0,i.jsx)("div",{className:"ratings-container",children:(0,i.jsxs)("div",{className:"ratings",children:[(0,i.jsx)("div",{className:"ratings-val",style:{width:20*s.ratings+"%"}}),(0,i.jsx)("span",{className:"tooltip-text",children:s.ratings.toFixed(2)})]})}),(0,i.jsx)("span",{className:"review-date mb-1",children:"5 days ago"})]}),(0,i.jsxs)("div",{className:"col",children:[(0,i.jsx)("h4",{children:"Very good"}),(0,i.jsx)("div",{className:"review-content",children:(0,i.jsx)("p",{children:"Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!"})}),(0,i.jsxs)("div",{className:"review-action",children:[(0,i.jsxs)(h.Z,{href:"#",children:[(0,i.jsx)("i",{className:"icon-thumbs-up"}),"Helpful (0)"]}),(0,i.jsxs)(h.Z,{href:"#",children:[(0,i.jsx)("i",{className:"icon-thumbs-down"}),"Unhelpful (0)"]})]})]})]})})]}),(0,i.jsxs)("div",{className:"reply",children:[(0,i.jsxs)("div",{className:"title-wrapper text-left",children:[(0,i.jsx)("h3",{className:"title title-simple text-left text-normal",children:"Add a Review"}),(0,i.jsx)("p",{children:"Your email address will not be published. Required fields are marked *"})]}),(0,i.jsxs)("div",{className:"rating-form",children:[(0,i.jsx)("label",{htmlFor:"rating",className:"text-dark",children:"Your rating * "}),(0,i.jsx)("span",{className:"rating-stars selected",children:[1,2,3,4,5].map((function(e,s){return(0,i.jsx)("a",{className:"star-".concat(e),href:"#",onClick:a,children:e},"star-"+s)}))}),(0,i.jsxs)("select",{name:"rating",id:"rating",required:"",style:{display:"none"},children:[(0,i.jsx)("option",{value:"",children:"Rate\u2026"}),(0,i.jsx)("option",{value:"5",children:"Perfect"}),(0,i.jsx)("option",{value:"4",children:"Good"}),(0,i.jsx)("option",{value:"3",children:"Average"}),(0,i.jsx)("option",{value:"2",children:"Not that bad"}),(0,i.jsx)("option",{value:"1",children:"Very poor"})]})]}),(0,i.jsxs)("form",{action:"#",children:[(0,i.jsx)("textarea",{id:"reply-message",cols:"30",rows:"6",className:"form-control mb-2",placeholder:"Comment *",required:!0}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsx)("input",{type:"text",className:"form-control",id:"reply-name",name:"reply-name",placeholder:"Name *",required:!0})}),(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsx)("input",{type:"email",className:"form-control",id:"reply-email",name:"reply-email",placeholder:"Email *",required:!0})})]}),(0,i.jsxs)("div",{className:"form-checkbox mb-2",children:[(0,i.jsx)("input",{type:"checkbox",className:"custom-checkbox",id:"signin-remember",name:"signin-remember"}),(0,i.jsx)("label",{className:"form-control-label ml-3",htmlFor:"signin-remember",children:"Save my name, email, and website in this browser for the next time I comment."})]}),(0,i.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})]})})]})]})}):(0,i.jsx)("div",{})}var x=r.memo(p),j=a(378);var v=(0,c.Z)({ssr:!1})((function(){var e=(0,l.useRouter)().query.slug;if(!e)return(0,i.jsx)("div",{});var s=(0,t.useQuery)(n.N4,{variables:{slug:e}}),a=s.data,r=s.loading,c=s.error,u=a&&a.product.single,h=a&&a.product.related,p=a&&a.product.prev,v=a&&a.product.next;return c?(0,i.jsx)("div",{}):(0,i.jsxs)("div",{className:"main",children:[(0,i.jsx)(d.Z,{prev:p,next:v,current:"Extended"}),(0,i.jsxs)("div",{className:"page-content",children:[(0,i.jsx)("div",{className:"container skeleton-body horizontal",children:(0,i.jsx)("div",{className:"product-details-top",children:(0,i.jsxs)("div",{className:"row skel-pro-single ".concat(r?"":"loaded"),children:[(0,i.jsxs)("div",{className:"col-md-6",children:[(0,i.jsx)("div",{className:"skel-product-gallery"}),r?"":(0,i.jsx)(o.Z,{product:u,adClass:""})]}),(0,i.jsxs)("div",{className:"col-md-6",children:[(0,i.jsxs)("div",{className:"entry-summary row",children:[(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("div",{className:"entry-summary1 mt-2 mt-md-0"})}),(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("div",{className:"entry-summary2"})})]}),r?"":(0,i.jsx)(m.Z,{product:u})]})]})})}),r?(0,i.jsx)("div",{className:"skel-pro-tabs"}):(0,i.jsx)(x,{product:u}),(0,i.jsx)("div",{className:"container",children:(0,i.jsx)(j.Z,{products:h,loading:r})})]})]})}))},1893:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/extended/[slug]",function(){return a(1341)}])}},function(e){e.O(0,[917,2879,3671,9774,2888,179],(function(){return s=1893,e(e.s=s);var s}));var s=e.O();_N_E=s}]);
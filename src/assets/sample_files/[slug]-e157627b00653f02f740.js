(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1985],{378:function(e,s,t){"use strict";var r=t(5893),c=t(7294),a=t(6359),l=t(4138),o=t(8289);function i(e){var s=e.products;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"title text-center mb-4",children:"You May Also Like"}),e.loading?(0,r.jsx)(l.Z,{adClass:"owl-simple carousel-equal-height carousel-with-shadow cols-xl-5 cols-lg-4 cols-md-3 cols-2",isTheme:!1,options:o.jc,children:[1,2,3,4].map((function(e,s){return(0,r.jsx)("div",{className:"skel-pro"},s)}))}):(0,r.jsx)(l.Z,{adClass:"owl-simple carousel-equal-height carousel-with-shadow cols-lg-4 cols-md-3 cols-xs-2 cols-1",isTheme:!1,options:o.jc,children:s.map((function(e,s){return(0,r.jsx)(a.Z,{product:e},s)}))})]})}s.Z=c.memo(i)},4664:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return g}});var r=t(5893),c=t(1163),a=t(8224),l=t(9617),o=t(3418),i=t(8665),n=t(2076),u=t(4047),d=t(7294),m=t(2879);function p(e){var s=e.product,t=(0,d.useState)(!1),c=t[0],a=t[1],l=(0,d.useState)(0),o=l[0],i=l[1];return(0,d.useEffect)((function(){s&&(a(!1),i(0))}),[s]),s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"product-gallery product-gallery-separated",children:[s.new?(0,r.jsx)("span",{className:"product-label label-new",children:"New"}):"",s.sale_price?(0,r.jsx)("span",{className:"product-label label-sale",children:"Sale"}):"",s.top?(0,r.jsx)("span",{className:"product-label label-top",children:"Top"}):"",0==s.stock?(0,r.jsx)("span",{className:"product-label label-out",children:"Out of Stock"}):"",s.pictures.map((function(e,t){return(0,r.jsxs)("figure",{className:"product-main-image",style:{backgroundColor:"#f4f4f4"},children:[(0,r.jsx)(u.lb,{imageSrc:"https://d-themes.com/react_asset_api/molla"+e.url,imageAlt:"product",largeImageSrc:"https://d-themes.com/react_asset_api/molla"+e.url,dragToMove:!1,mouseActivation:"hover",className:"zoom-image position-relative overflow-hidden",cursorStyleActive:"crosshair",width:s.pictures[t].width,height:s.pictures[t].height,style:{paddingTop:"".concat(s.pictures[t].height/s.pictures[t].width*100,"%")}}),(0,r.jsx)("button",{id:"btn-product-gallery",className:"btn-product-gallery",onClick:function(e){return function(e,s){a(!0),i(s)}(0,t)},children:(0,r.jsx)("i",{className:"icon-arrows"})})]},t)}))]}),c?(0,r.jsx)(m.Z,{mainSrc:"https://d-themes.com/react_asset_api/molla"+s.pictures[o].url,nextSrc:"https://d-themes.com/react_asset_api/molla"+s.pictures[(o+1)%s.pictures.length].url,prevSrc:"https://d-themes.com/react_asset_api/molla"+s.pictures[(o+s.pictures.length-1)%s.pictures.length].url,onCloseRequest:function(){a(!1)},onMovePrevRequest:function(){i((o+1)%s.pictures.length)},onMoveNextRequest:function(){i((o+s.pictures.length-1)%s.pictures.length)},reactModalStyle:{overlay:{zIndex:1041}},wrapperClassName:"lightbox-modal"}):""]}):(0,r.jsx)("div",{})}var h=d.memo(p),x=t(1547),j=t(8062),v=t(378);var g=(0,o.Z)({ssr:!1})((function(){var e=(0,c.useRouter)().query.slug;if(!e)return(0,r.jsx)("div",{});var s=(0,a.useQuery)(i.N4,{variables:{slug:e}}),t=s.data,o=s.loading,u=s.error,d=t&&t.product.single,m=t&&t.product.related,p=t&&t.product.prev,g=t&&t.product.next;return u?(0,r.jsx)("div",{}):(0,r.jsxs)("div",{className:"main",children:[(0,r.jsx)(n.Z,{prev:p,next:g,current:"Sticky Info"}),(0,r.jsx)("div",{className:"page-content",children:(0,r.jsxs)("div",{className:"container skeleton-body",children:[(0,r.jsx)("div",{className:"product-details-top",children:(0,r.jsxs)("div",{className:"row skel-pro-single sticky ".concat(o?"":"loaded"),children:[(0,r.jsxs)("div",{className:"col-md-6",children:[(0,r.jsx)("div",{className:"skel-product-gallery"}),o?"":(0,r.jsx)(h,{product:d})]}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)(l.Z,{className:"sticky-content",offsetTop:70,children:[(0,r.jsxs)("div",{className:"entry-summary row",children:[(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsx)("div",{className:"entry-summary1 mt-2 mt-md-0"})}),(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsx)("div",{className:"entry-summary2"})})]}),o?"":(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.Z,{product:d}),(0,r.jsx)(j.Z,{product:d})]})]})})]})}),(0,r.jsx)(v.Z,{products:m,loading:o})]})})]})}))},9164:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/sticky/[slug]",function(){return t(4664)}])}},function(e){e.O(0,[917,9617,2879,3671,4396,9774,2888,179],(function(){return s=9164,e(e.s=s);var s}));var s=e.O();_N_E=s}]);
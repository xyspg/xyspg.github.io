"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={draft:!1,authors:"xyspg",tags:["\u6280\u672f\u5411","\u6559\u7a0b"],title:"\u89e3\u51b3 Cloudflare 521 \u9519\u8bef",enableComments:!0},i=void 0,o={permalink:"/blog/2023/02/21/cloudflare521",source:"@site/blog/2023-02-21-cloudflare521/index.md",title:"\u89e3\u51b3 Cloudflare 521 \u9519\u8bef",description:"\u5728\u4f7f\u7528 Cloudflare \u4ee3\u7406\u670d\u52a1\u5668\u65f6\uff0c\u6709\u65f6\u4f1a\u9047\u5230 521 Web Server is Down \u9519\u8bef\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002",date:"2023-02-21T00:00:00.000Z",formattedDate:"2023\u5e742\u670821\u65e5",tags:[{label:"\u6280\u672f\u5411",permalink:"/blog/tags/\u6280\u672f\u5411"},{label:"\u6559\u7a0b",permalink:"/blog/tags/\u6559\u7a0b"}],readingTime:2.67,hasTruncateMarker:!0,authors:[{name:"xyspg",title:"\u7f8e\u5473\u3057\u3044\u306f\u5b09\u3057\u3044\u3067\u3059\uff01",url:"https://github.com/xyspg",imageURL:"https://s2.loli.net/2023/01/22/M5usSnNDQhKyR26.png",key:"xyspg"}],frontMatter:{draft:!1,authors:"xyspg",tags:["\u6280\u672f\u5411","\u6559\u7a0b"],title:"\u89e3\u51b3 Cloudflare 521 \u9519\u8bef",enableComments:!0},nextItem:{title:"\u4e3a Docusaurus \u535a\u5ba2\u9875\u9762\u6dfb\u52a0\u8bc4\u8bba\u533a",permalink:"/blog/2023/02/21/giscuss"}},s={authorsImageUrls:[void 0]},c=[{value:"\u9519\u8bef\u539f\u56e0",id:"\u9519\u8bef\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u521b\u5efa Origin CA \u8bc1\u4e66",id:"\u521b\u5efa-origin-ca-\u8bc1\u4e66",level:3},{value:"\u5728\u670d\u52a1\u5668\u4e0a\u5b89\u88c5 Origin CA \u8bc1\u4e66\uff08\u4ee5 Nginx \u4e3a\u4f8b\uff09",id:"\u5728\u670d\u52a1\u5668\u4e0a\u5b89\u88c5-origin-ca-\u8bc1\u4e66\u4ee5-nginx-\u4e3a\u4f8b",level:3},{value:"\u53c2\u89c1",id:"\u53c2\u89c1",level:2}],p={toc:c};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u4f7f\u7528 Cloudflare \u4ee3\u7406\u670d\u52a1\u5668\u65f6\uff0c\u6709\u65f6\u4f1a\u9047\u5230 521 Web Server is Down \u9519\u8bef\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\n",(0,a.kt)("img",{src:n(4367).Z,width:"2116",height:"968"})),(0,a.kt)("h2",{id:"\u9519\u8bef\u539f\u56e0"},"\u9519\u8bef\u539f\u56e0"),(0,a.kt)("p",null,"\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://support.cloudflare.com/hc/zh-cn/articles/115003011431-Cloudflare-5XX-%E9%94%99%E8%AF%AF%E6%95%85%E9%9A%9C%E6%8E%92%E9%99%A4#521error"},"CF \u5b98\u65b9\u6587\u6863")," \u53ef\u4ee5\u5f97\u77e5521\u9519\u8bef\u7684\u4e24\u4e2a\u6700\u5e38\u89c1\u539f\u56e0\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6e90\u7ad9 Web \u670d\u52a1\u5668\u5e94\u7528\u7a0b\u5e8f\u79bb\u7ebf"),(0,a.kt)("li",{parentName:"ul"},"Cloudflare \u8bf7\u6c42\u88ab\u963b\u6b62")),(0,a.kt)("p",null,"\u5982\u679c\u670d\u52a1\u5668\u6b63\u5e38\u8fd0\u884c\uff0c\u4e14\u9632\u706b\u5899\u6ca1\u6709\u8bbe\u7f6e\u7279\u6b8a\u89c4\u5219\uff0c\u6700\u5e38\u89c1\u7684\u539f\u56e0\u662f\u56e0\u4e3a\u5728\u670d\u52a1\u5668\u4e0a\u6ca1\u6709\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/ssl/origin-configuration/origin-ca"},"Origin CA \u8bc1\u4e66"),"\u3002  "),(0,a.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("h3",{id:"\u521b\u5efa-origin-ca-\u8bc1\u4e66"},"\u521b\u5efa Origin CA \u8bc1\u4e66"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u767b\u5f55 ",(0,a.kt)("a",{parentName:"li",href:"https://dash.cloudflare.com"},"Cloudflare \u4eea\u8868\u677f"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u7684\u57df\u540d"),(0,a.kt)("li",{parentName:"ol"},"\u8f6c\u5230 SSL/TLS ",">"," \u6e90\u670d\u52a1\u5668\n",(0,a.kt)("img",{src:n(4490).Z,width:"512",height:"384"})),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb\u201c\u521b\u5efa\u8bc1\u4e66\u201d"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u901a\u8fc7 Cloudflare \u751f\u6210\u79c1\u94a5\u548c CSR"),(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165\u57df\u540d\uff08\u5982 ","*",".\u4f60\u7684\u7f51\u7ad9.com\uff0c\u4f60\u7684\u7f51\u7ad9.com)\u3002\u57df\u540d\u6839\u548c\u7b2c\u4e00\u7ea7\u901a\u914d\u7b26\u4e3b\u673a\u540d\u5df2\u9ed8\u8ba4\u5305\u542b"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u5230\u671f\u65e5\u671f\u3002\n",(0,a.kt)("img",{src:n(204).Z,width:"2158",height:"1360"})),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb\u201c\u4e0b\u4e00\u6b65\u201d"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u5bc6\u94a5\u683c\u5f0f\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 OpenSSL \u7684\u670d\u52a1\u5668\uff08\u5982 Apache \u548c NGINX\uff09\u901a\u5e38\u5e0c\u671b\u4f7f\u7528 PEM \u6587\u4ef6\uff08Base64 \u7f16\u7801\u7684 ASCII\uff09\uff0c\u4f46\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e8c\u8fdb\u5236 DER \u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Windows \u548c Apache Tomcat \u7684\u670d\u52a1\u5668\u9700\u8981 PKCS#7\uff08.p7b \u6587\u4ef6\uff09")),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"\u5c06\u7b7e\u540d\u7684 Origin \u8bc1\u4e66\u548c\u79c1\u94a5\u5206\u522b\u590d\u5236\u5230\u4e0d\u540c\u7684\u6587\u4ef6\u4e2d\u3002  ")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u9000\u51fa\u9875\u9762\u540e\u5c06\u65e0\u6cd5\u518d\u6b21\u67e5\u770b\u79c1\u94a5\uff0c\u6240\u4ee5\u52a1\u5fc5\u4fdd\u5b58\u5230\u672c\u5730\uff0c\u5426\u5219\u53ea\u80fd\u91cd\u65b0\u521b\u5efa")),(0,a.kt)("ol",{start:11},(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb\u201c\u786e\u5b9a\u201d\u3002")),(0,a.kt)("h3",{id:"\u5728\u670d\u52a1\u5668\u4e0a\u5b89\u88c5-origin-ca-\u8bc1\u4e66\u4ee5-nginx-\u4e3a\u4f8b"},"\u5728\u670d\u52a1\u5668\u4e0a\u5b89\u88c5 Origin CA \u8bc1\u4e66\uff08\u4ee5 Nginx \u4e3a\u4f8b\uff09"),(0,a.kt)("p",null,"\u5c06 Origin CA \u8bc1\u4e66\uff08\u5728\u6b65\u9aa4 1 \u4e2d\u521b\u5efa\uff09\u4e0a\u4f20\u5230\u6e90\u7ad9 Web \u670d\u52a1\u5668\u4e0a\u3002\uff08\u4f7f\u7528SFTP\u7b49\uff09",(0,a.kt)("br",{parentName:"p"}),"\n","\u63a5\u4e0b\u6765\u7684\u64cd\u4f5c\u56e0\u670d\u52a1\u5668\u800c\u5f02\uff0c\u4ee5\u4e0b\u4ee5 Nginx \u4e3a\u4f8b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6253\u5f00 Nginx \u914d\u7f6e\u6587\u4ef6\uff08\u901a\u5e38\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/nginx/"),"\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u5728 Server \u5757\u4e2d\u6dfb\u52a0\u5982\u4e0b\uff08\u5c06\u8def\u5f84\u66ff\u6362\u4e3a\u4f60\u81ea\u5df1\u7684\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"    listen   443;\n    \n    ssl    on;\n    ssl_certificate    /etc/ssl/your_domain_name.pem;\n    ssl_certificate_key    /etc/ssl/your_domain_name.key;\n")),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"server {\n    listen   443\n    \n    ssl    on;\n    ssl_certificate    /etc/ssl/your_domain_name.pem; (or bundle.crt)\n    ssl_certificate_key    /etc/ssl/your_domain_name.key;\n    \n    server_name your.domain.com;\n    access_log /var/log/nginx/nginx.vhost.access.log;\n    error_log /var/log/nginx/nginx.vhost.error.log;\n    location / {\n    root   /home/www/public_html/your.domain.com/public/;\n    index  index.html;\n    }\n}\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u91cd\u542f Nginx ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo /etc/init.d/nginx restart\n")),(0,a.kt)("p",null,"\u5176\u5b83\u670d\u52a1\u5668\u914d\u7f6e\u53c2\u8003  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.digicert.com/kb/csr-ssl-installation/apache-openssl.htm"},"Apache httpd"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.digicert.com/kb/csr-creation-ssl-installation-iis-10.htm"},"Microsoft IIS 10"))),(0,a.kt)("h2",{id:"\u53c2\u89c1"},"\u53c2\u89c1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/ssl/origin-configuration/origin-ca"},"Origin CA certificates"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.cloudflare.com/hc/zh-cn/articles/115003011431-Cloudflare-5XX-%E9%94%99%E8%AF%AF%E6%95%85%E9%9A%9C%E6%8E%92%E9%99%A4#521error"},"Cloudflare 5xx \u6545\u969c\u6392\u9664"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.digicert.com/kb/csr-ssl-installation/nginx-openssl.htm"},"Nginx: Create CSR & Install SSL Certificate (OpenSSL)"))))}u.isMDXComponent=!0},4367:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CleanShot 2023-02-21 at 15.19.11-363963bb9e2e35a1b47e0f9d90053ebc.png"},4490:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CleanShot 2023-02-21 at 15.29.19@2x-3f9152337a9ee1b1f1465f4b59723dec.png"},204:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CleanShot 2023-02-21 at 15.31.37@2x-1e42e8059023cc761cf660aa119a67be.png"}}]);
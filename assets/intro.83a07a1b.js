import{j as u,a as e}from"./main.531c777e.js";const d=function({previewer:t=()=>null,api:l=()=>null}){return u("div",{children:e("div",{children:[u("h1",{id:"react-vant-hooks-beta","data-anchor":"react-vant-hooks-beta",children:"React Vant Hooks (Beta)"}),u("h3",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"React Vant \u5185\u7F6E\u4E86\u4E00\u7CFB\u5217\u7684 Hooks\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E9B API \u8FDB\u884C\u5F00\u53D1\u3002"}),u("blockquote",{children:u("p",{children:"\u5728 beta \u9636\u6BB5\u6211\u4EEC\u6709\u53EF\u80FD\u4F1A\u5728\u540E\u7EED\u7684\u65B0\u7248\u672C\u4E2D\u53D1\u5E03 break change\uFF0C\u5EFA\u8BAE\u4F7F\u7528 lockfile \u9501\u5B9A\u7248\u672C\u6216\u624B\u52A8\u9501\u5B9A\u7248\u672C"})}),u("h3",{id:"\u793A\u4F8B","data-anchor":"\u793A\u4F8B",children:"\u793A\u4F8B"}),e("p",{children:["\u5F15\u5165 ",u("code",{children:"hooks.useWindowSize"})," \u65B9\u6CD5\uFF0C\u5373\u53EF\u83B7\u53D6\u5230\u5F53\u524D Window \u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002"]}),u(t,{code:`import { hooks } from 'react-vant';

const { width, height } = hooks.useWindowSize();

console.log(width); // \u7A97\u53E3\u5BBD\u5EA6
console.log(height); // \u7A97\u53E3\u9AD8\u5EA6`,lang:"js"}),u("h3",{id:"api-\u5217\u8868","data-anchor":"api-\u5217\u8868",children:"API \u5217\u8868"}),u("p",{children:"\u4E0B\u9762\u662F React Vant \u5BF9\u5916\u63D0\u4F9B\u7684\u6240\u6709 Hooks\uFF0C\u70B9\u51FB\u540D\u79F0\u53EF\u4EE5\u67E5\u770B\u8BE6\u7EC6\u4ECB\u7ECD\uFF1A"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:u("a",{href:"/hooks/use-click-away",children:"useClickAway"})}),u("td",{children:"\u76D1\u542C\u70B9\u51FB\u5143\u7D20\u5916\u90E8\u7684\u4E8B\u4EF6"})]}),e("tr",{children:[u("td",{children:u("a",{href:"/hooks/use-count-down",children:"useCountDown"})}),u("td",{children:"\u63D0\u4F9B\u5012\u8BA1\u65F6\u7BA1\u7406\u80FD\u529B"})]}),e("tr",{children:[u("td",{children:u("a",{href:"/hooks/use-event-listener",children:"useEventListener"})}),u("td",{children:"\u65B9\u4FBF\u5730\u8FDB\u884C\u4E8B\u4EF6\u7ED1\u5B9A"})]}),e("tr",{children:[u("td",{children:u("a",{href:"/hooks/use-form-smart",children:"useFormSmart"})}),u("td",{children:"\u65B9\u4FBF\u5730\u8FDB\u884C form \u64CD\u4F5C"})]}),e("tr",{children:[u("td",{children:u("a",{href:"/hooks/use-in-viewport",children:"useInViewport"})}),u("td",{children:"\u7528\u4E8E\u5224\u65AD dom \u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u4E4B\u5185"})]}),e("tr",{children:[u("td",{children:u("a",{href:"/hooks/use-mount",children:"useMount"})}),e("td",{children:["\u53EA\u5728\u7EC4\u4EF6 ",u("code",{children:"mount"})," \u65F6\u6267\u884C\u7684 hook"]})]}),e("tr",{children:[u("td",{children:u("a",{href:"/hooks/use-page-visibility",children:"usePageVisibility"})}),u("td",{children:"\u83B7\u53D6\u9875\u9762\u7684\u53EF\u89C1\u72B6\u6001"})]}),e("tr",{children:[u("td",{children:u("a",{href:"/hooks/use-set-state",children:"useSetState"})}),e("td",{children:["\u7BA1\u7406 ",u("code",{children:"object"})," \u7C7B\u578B state \u7684 Hooks\uFF0C\u540C\u65F6\u652F\u6301\u8FD4\u56DE state \u6700\u65B0\u72B6\u6001"]})]}),e("tr",{children:[u("td",{children:u("a",{href:"/hooks/use-scroll-parent",children:"useScrollParent"})}),u("td",{children:"\u83B7\u53D6\u5143\u7D20\u6700\u8FD1\u7684\u53EF\u6EDA\u52A8\u7236\u5143\u7D20"})]}),e("tr",{children:[u("td",{children:u("a",{href:"/hooks/use-touch",children:"useTouch"})}),u("td",{children:"\u65B9\u4FBF\u5730\u8FDB\u884Ctouch\u4E8B\u4EF6\u7BA1\u7406"})]}),e("tr",{children:[u("td",{children:u("a",{href:"/hooks/use-update-effect",children:"useUpdateEffect"})}),e("td",{children:["\u53EA\u5728\u4F9D\u8D56\u66F4\u65B0\u65F6\u6267\u884C\u7684 ",u("code",{children:"useEffect"})," hook"]})]}),e("tr",{children:[u("td",{children:u("a",{href:"/hooks/use-window-size",children:"useWindowSize"})}),u("td",{children:"\u83B7\u53D6\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u89C6\u53E3\u5BBD\u5EA6\u548C\u9AD8\u5EA6"})]})]})]})]})})},r=[],n=void 0,h=[{depth:1,text:"React Vant Hooks (Beta)",id:"react-vant-hooks-beta"},{depth:3,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:3,text:"\u793A\u4F8B",id:"\u793A\u4F8B"},{depth:3,text:"API \u5217\u8868",id:"api-\u5217\u8868"}],i="/docs/hooks/intro.md",o="React Vant Hooks (Beta)",c="1658500653000";var F=t=>t.children({MdContent:d,demos:r,frontmatter:n,slugs:h,filePath:i,title:o,updatedTime:c});export{d as MdContent,F as default,r as demos,i as filePath,n as frontmatter,h as slugs,o as title,c as updatedTime};

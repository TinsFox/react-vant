import{j as u,a as e}from"./main.531c777e.js";const t=function({previewer:n=()=>null,api:l=()=>null}){const d=n;return u("div",{children:e("div",{children:[u("h1",{id:"\u56FD\u9645\u5316","data-anchor":"\u56FD\u9645\u5316",children:"\u56FD\u9645\u5316"}),u("h3",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"React Vant \u91C7\u7528\u4E2D\u6587\u4F5C\u4E3A\u9ED8\u8BA4\u8BED\u8A00\uFF0C\u540C\u65F6\u652F\u6301\u591A\u8BED\u8A00\u5207\u6362\u3002"}),u("h2",{id:"\u4F7F\u7528\u65B9\u6CD5","data-anchor":"\u4F7F\u7528\u65B9\u6CD5",children:"\u4F7F\u7528\u65B9\u6CD5"}),u("h3",{id:"\u591A\u8BED\u8A00\u5207\u6362","data-anchor":"\u591A\u8BED\u8A00\u5207\u6362",children:"\u591A\u8BED\u8A00\u5207\u6362"}),e("p",{children:["React Vant \u901A\u8FC7 ConfigProvider \u7EC4\u4EF6\u5B9E\u73B0\u591A\u8BED\u8A00\u652F\u6301\uFF0C\u4F7F\u7528 ",u("code",{children:"locale"})," \u5C5E\u6027\u5207\u6362\u8BED\u8A00\u3002"]}),u(d,{code:`import { ConfigProvider } from 'react-vant';
// \u5F15\u5165\u82F1\u6587\u8BED\u8A00\u5305
import enUS from 'react-vant/es/locale/lang/en-US';

export default () => {
  return <ConfigProvider locale={enUS}>...</ConfigProvider>;
};`,lang:"jsx"}),u("h3",{id:"\u8986\u76D6\u8BED\u8A00\u5305","data-anchor":"\u8986\u76D6\u8BED\u8A00\u5305",children:"\u8986\u76D6\u8BED\u8A00\u5305"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"mergeLocale"})," \u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u8BED\u8A00\u7684\u4FEE\u6539\u548C\u6269\u5C55\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A"]}),u(d,{code:`import { ConfigProvider } from 'react-vant';
import { enUS, mergeLocale } from 'react-vant/es/locale';

const customEnUS = mergeLocale(enUS, {
  vanCalendar: {
    // \u8986\u76D6calender\u6807\u9898
    title: 'Custom Title',
  },
});

export default () => {
  return <ConfigProvider locale="{customEnUS}">...</ConfigProvider>;
};`,lang:"jsx"}),u("h3",{id:"\u8BED\u8A00\u5305","data-anchor":"\u8BED\u8A00\u5305",children:"\u8BED\u8A00\u5305"}),u("p",{children:"\u76EE\u524D\u652F\u6301\u7684\u8BED\u8A00:"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u8BED\u8A00"}),u("th",{children:"\u6587\u4EF6\u540D"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"\u82F1\u8BED"}),u("td",{children:"en-US"})]}),e("tr",{children:[u("td",{children:"\u6CD5\u8BED"}),u("td",{children:"fr-FR"})]}),e("tr",{children:[u("td",{children:"\u65E5\u8BED"}),u("td",{children:"ja-JP"})]}),e("tr",{children:[u("td",{children:"\u7B80\u4F53\u4E2D\u6587"}),u("td",{children:"zh-CN"})]}),e("tr",{children:[u("td",{children:"\u7E41\u9AD4\u4E2D\u6587\uFF08\u6E2F\uFF09"}),u("td",{children:"zh-HK"})]}),e("tr",{children:[u("td",{children:"\u7E41\u9AD4\u4E2D\u6587\uFF08\u53F0\uFF09"}),u("td",{children:"zh-TW"})]})]})]}),u("blockquote",{children:e("p",{children:["\u5728 ",u("a",{href:"https://github.com/3lang3/react-vant/tree/next/packages/react-vant/src/locale/lang",children:"\u8FD9\u91CC"})," \u67E5\u770B\u6240\u6709\u7684\u8BED\u8A00\u5305\u6E90\u6587\u4EF6\u3002"]})}),u("h2",{id:"\u5E38\u89C1\u95EE\u9898","data-anchor":"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),u("h3",{id:"\u4E1A\u52A1\u4EE3\u7801\u5982\u4F55\u5B9E\u73B0\u56FD\u9645\u5316","data-anchor":"\u4E1A\u52A1\u4EE3\u7801\u5982\u4F55\u5B9E\u73B0\u56FD\u9645\u5316",children:"\u4E1A\u52A1\u4EE3\u7801\u5982\u4F55\u5B9E\u73B0\u56FD\u9645\u5316\uFF1F"}),e("p",{children:["\u53EF\u4EE5\u4F7F\u7528 ",u("a",{href:"https://github.com/i18next/react-i18next",children:"react-i18n"})," \u6765\u5B9E\u73B0\u3002"]}),u("h3",{id:"\u4EE5-cdn-\u5F62\u5F0F\u5F15\u5165\u65F6\u5982\u4F55\u4F7F\u7528\u8BED\u8A00\u5305","data-anchor":"\u4EE5-cdn-\u5F62\u5F0F\u5F15\u5165\u65F6\u5982\u4F55\u4F7F\u7528\u8BED\u8A00\u5305",children:"\u4EE5 CDN \u5F62\u5F0F\u5F15\u5165\u65F6\uFF0C\u5982\u4F55\u4F7F\u7528\u8BED\u8A00\u5305\uFF1F"}),u("p",{children:"\u76EE\u524D\u6CA1\u6709\u63D0\u4F9B CDN \u5F62\u5F0F\u7684\u8BED\u8A00\u5305\uFF0C\u53EF\u4EE5\u624B\u52A8\u62F7\u8D1D\u8BED\u8A00\u5305\u7684\u5185\u5BB9\u6765\u4F7F\u7528\u3002"}),u("h3",{id:"\u8BED\u8A00\u5305\u4E2D\u4E0D\u5305\u542B-sku-\u7EC4\u4EF6","data-anchor":"\u8BED\u8A00\u5305\u4E2D\u4E0D\u5305\u542B-sku-\u7EC4\u4EF6",children:"\u8BED\u8A00\u5305\u4E2D\u4E0D\u5305\u542B Sku \u7EC4\u4EF6\uFF1F"}),u("p",{children:"\u8BED\u8A00\u5305\u4E2D\u9ED8\u8BA4\u4E0D\u5305\u542B Sku \u4E1A\u52A1\u7EC4\u4EF6\u7684\u8BED\u8A00\u914D\u7F6E\uFF0C\u56E0\u6B64\u5982\u679C\u6709 Sku \u7EC4\u4EF6\u7684\u56FD\u9645\u5316\u9700\u6C42\uFF0C\u8BF7\u81EA\u884C\u914D\u7F6E\u56FD\u9645\u5316\u6587\u6848\u3002"})]})})},r=[],E=void 0,F=[{depth:1,text:"\u56FD\u9645\u5316",id:"\u56FD\u9645\u5316"},{depth:3,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u4F7F\u7528\u65B9\u6CD5",id:"\u4F7F\u7528\u65B9\u6CD5"},{depth:3,text:"\u591A\u8BED\u8A00\u5207\u6362",id:"\u591A\u8BED\u8A00\u5207\u6362"},{depth:3,text:"\u8986\u76D6\u8BED\u8A00\u5305",id:"\u8986\u76D6\u8BED\u8A00\u5305"},{depth:3,text:"\u8BED\u8A00\u5305",id:"\u8BED\u8A00\u5305"},{depth:2,text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898"},{depth:3,text:"\u4E1A\u52A1\u4EE3\u7801\u5982\u4F55\u5B9E\u73B0\u56FD\u9645\u5316\uFF1F",id:"\u4E1A\u52A1\u4EE3\u7801\u5982\u4F55\u5B9E\u73B0\u56FD\u9645\u5316"},{depth:3,text:"\u4EE5 CDN \u5F62\u5F0F\u5F15\u5165\u65F6\uFF0C\u5982\u4F55\u4F7F\u7528\u8BED\u8A00\u5305\uFF1F",id:"\u4EE5-cdn-\u5F62\u5F0F\u5F15\u5165\u65F6\u5982\u4F55\u4F7F\u7528\u8BED\u8A00\u5305"},{depth:3,text:"\u8BED\u8A00\u5305\u4E2D\u4E0D\u5305\u542B Sku \u7EC4\u4EF6\uFF1F",id:"\u8BED\u8A00\u5305\u4E2D\u4E0D\u5305\u542B-sku-\u7EC4\u4EF6"}],i="/docs/guide/i18n.md",c="\u56FD\u9645\u5316",h="1658500653000";var D=n=>n.children({MdContent:t,demos:r,frontmatter:E,slugs:F,filePath:i,title:c,updatedTime:h});export{t as MdContent,D as default,r as demos,i as filePath,E as frontmatter,F as slugs,c as title,h as updatedTime};

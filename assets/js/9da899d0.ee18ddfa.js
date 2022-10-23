"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[35314],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25084:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n,a=r(87462),l=r(63366),i=(r(67294),r(3905)),o=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/find-smallest-letter-greater-than-target"},p="0744 - Find Smallest Letter Greater Than Target (Easy)",c={unversionedId:"0700-0799/find-smallest-letter-greater-than-target-easy",id:"0700-0799/find-smallest-letter-greater-than-target-easy",title:"0744 - Find Smallest Letter Greater Than Target (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/find-smallest-letter-greater-than-target",source:"@site/solutions/0700-0799/0744-find-smallest-letter-greater-than-target-easy.md",sourceDirName:"0700-0799",slug:"/0700-0799/find-smallest-letter-greater-than-target-easy",permalink:"/leetcode-the-hard-way/solutions/0700-0799/find-smallest-letter-greater-than-target-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0700-0799/0744-find-smallest-letter-greater-than-target-easy.md",tags:[],version:"current",sidebarPosition:744,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-smallest-letter-greater-than-target"},sidebar:"tutorialSidebar",previous:{title:"0743 - Network Delay Time (Medium)",permalink:"/leetcode-the-hard-way/solutions/0700-0799/network-delay-time-medium"},next:{title:"0785 -  Is Graph Bipartite? (Medium)",permalink:"/leetcode-the-hard-way/solutions/0700-0799/is-graph-bipartite-medium"}},u={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}],d=(n="SolutionAuthor",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),h={toc:m};function g(e){var t=e.components,r=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0744---find-smallest-letter-greater-than-target-easy"},"0744 - Find Smallest Letter Greater Than Target (Easy)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-smallest-letter-greater-than-target"},"https://leetcode.com/problems/find-smallest-letter-greater-than-target")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given a characters array ",(0,i.kt)("inlineCode",{parentName:"p"},"letters")," that is sorted in ",(0,i.kt)("strong",{parentName:"p"},"non-decreasing")," order and a character ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),", return ",(0,i.kt)("em",{parentName:"p"},"the smallest character in the array that is larger than")," ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note")," that the letters wrap around."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For example, if ",(0,i.kt)("inlineCode",{parentName:"li"},"target == 'z'")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"letters == ['a', 'b']"),", the answer is ",(0,i.kt)("inlineCode",{parentName:"li"},"'a'"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: letters = ["c","f","j"], target = "a"\nOutput: "c"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: letters = ["c","f","j"], target = "c"\nOutput: "f"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: letters = ["c","f","j"], target = "d"\nOutput: "f"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2 <= letters.length <= 10^4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"letters[i]")," is a lowercase English letter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"letters")," is sorted in ",(0,i.kt)("strong",{parentName:"li"},"non-decreasing")," order."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"letters")," contains at least two different characters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"target")," is a lowercase English letter.")),(0,i.kt)("h2",{id:"approach-1-binary-search"},"Approach 1: Binary Search"),(0,i.kt)("p",null,"Prerequisite: ",(0,i.kt)("a",{parentName:"p",href:"../../tutorials/basic-topics/binary-search"},"Binary Search")),(0,i.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    char nextGreatestLetter(vector<char>& letters, char target) {\n        // init possible range\n        int l = 0, r = letters.size() - 1;\n        while (l < r) {\n            int m = l + (r - l) / 2;\n            // exclude m\n            if (target >= letters[m]) l = m + 1;\n            // include m\n            else r = m;\n        }\n        // handle letter wrap case\n        return letters[l] > target ? letters[l] : letters[0];\n    }\n};\n")))}g.isMDXComponent=!0}}]);
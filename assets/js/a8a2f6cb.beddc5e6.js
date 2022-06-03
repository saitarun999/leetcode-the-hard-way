"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4436],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return h}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),h=a,f=c["".concat(s,".").concat(h)]||c[h]||m[h]||o;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},30561:function(e,r,t){t.r(r),t.d(r,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=t(92194),l=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/rank-transform-of-an-array",tags:["Sorting"]},p="1331 - Rank Transform of an Array (Easy)",u={unversionedId:"1300-1399/rank-transform-of-an-array-easy",id:"1300-1399/rank-transform-of-an-array-easy",title:"1331 - Rank Transform of an Array (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/rank-transform-of-an-array",source:"@site/solutions/1300-1399/1331-rank-transform-of-an-array-easy.md",sourceDirName:"1300-1399",slug:"/1300-1399/rank-transform-of-an-array-easy",permalink:"/leetcode-the-hard-way/solutions/1300-1399/rank-transform-of-an-array-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/1300-1399/1331-rank-transform-of-an-array-easy.md",tags:[{label:"Sorting",permalink:"/leetcode-the-hard-way/solutions/tags/sorting"}],version:"current",sidebarPosition:1331,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/rank-transform-of-an-array",tags:["Sorting"]},sidebar:"tutorialSidebar",previous:{title:"1328 - Break a Palindrome (Medium)",permalink:"/leetcode-the-hard-way/solutions/1300-1399/break-a-palindrome-medium"},next:{title:"1334 - Find the City With the Smallest Number of Neighbors at a Threshold Distance (Medium)",permalink:"/leetcode-the-hard-way/solutions/1300-1399/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting with Hash Map",id:"approach-1-sorting-with-hash-map",level:2},{value:"Approach 2: Sorting without Hash Map",id:"approach-2-sorting-without-hash-map",level:2}],h={toc:c};function f(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1331---rank-transform-of-an-array-easy"},"1331 - Rank Transform of an Array (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/rank-transform-of-an-array"},"https://leetcode.com/problems/rank-transform-of-an-array")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given an array of integers ",(0,o.kt)("inlineCode",{parentName:"p"},"arr"),", replace each element with its rank."),(0,o.kt)("p",null,"The rank represents how large the element is. The rank has the following rules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rank is an integer starting from 1."),(0,o.kt)("li",{parentName:"ul"},"The larger the element, the larger the rank. If two elements are equal, their rank must be the same."),(0,o.kt)("li",{parentName:"ul"},"Rank should be as small as possible.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: arr = [40,10,20,30]\nOutput: [4,1,2,3]\nExplanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: arr = [100,100,100]\nOutput: [1,1,1]\nExplanation: Same elements share the same rank.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: arr = [37,12,28,9,100,56,80,5,12]\nOutput: [5,3,4,2,8,6,7,1,3]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= arr.length <= 10^5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-10^9 <= arr[i] <= 10^9"))),(0,o.kt)("h2",{id:"approach-1-sorting-with-hash-map"},"Approach 1: Sorting with Hash Map"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> arrayRankTransform(vector<int>& arr) {\n        vector<int> ans, sorted_arr { arr };\n        // hash map\n        unordered_map<int, int> m;\n        // sort input arr\n        sort(sorted_arr.begin(), sorted_arr.end());\n        // [40,10,20,30] -> [10,20,30,40]\n        // use hash map to map the sorted element with its index\n        // use emplace to handle cases like [100,100,100]\n        for (auto& x : sorted_arr) m.emplace(x, (int) m.size() + 1);\n        // build the final output\n        for (auto& x : arr) ans.push_back(m[x]);\n        return ans;\n    }\n};\n")),(0,o.kt)("h2",{id:"approach-2-sorting-without-hash-map"},"Approach 2: Sorting without Hash Map"),(0,o.kt)(i.Z,{names:"@wingkwong",mdxType:"Authors"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> arrayRankTransform(vector<int>& arr) {\n        int n = (int) arr.size();\n        vector<pair<int, int>> v; // {val, index}\n        for (int i = 0; i < n; i++) v.push_back({arr[i], i});\n        // sort by value\n        sort(v.begin(), v.end());\n        // init rank\n        int rank = 1;\n        for (int i = 0; i < n; i++) {\n            // increase rank only when the cur val is different than the prev one\n            rank += i > 0 && v[i].first != v[i - 1].first;\n            // in-place update arr\n            arr[v[i].second] = rank;\n        }\n        return arr;\n    }\n};\n")))}f.isMDXComponent=!0},92194:function(e,r,t){t.d(r,{Z:function(){return a}});var n=t(67294);function a(e){var r=e.names.split(",");return n.createElement("div",{className:"author-wrapper"},r.length>1?"Authors":"Author",":",r.map((function(e,r){return n.createElement("span",{key:r,className:"author-tag"},e)})))}}}]);
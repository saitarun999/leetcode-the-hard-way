"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2045],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33127:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(8539),l=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/valid-anagram/",tags:["Hash Map"]},s="0242 - Valid Anagram (Easy)",u={unversionedId:"0200-0299/valid-anagram-easy",id:"0200-0299/valid-anagram-easy",title:"0242 - Valid Anagram (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/valid-anagram/",source:"@site/solutions/0200-0299/0242-valid-anagram-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/valid-anagram-easy",permalink:"/leetcode-the-hard-way/solutions/0200-0299/valid-anagram-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0200-0299/0242-valid-anagram-easy.md",tags:[{label:"Hash Map",permalink:"/leetcode-the-hard-way/solutions/tags/hash-map"}],version:"current",sidebarPosition:242,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/valid-anagram/",tags:["Hash Map"]},sidebar:"tutorialSidebar",previous:{title:"0231 - Power of Two (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/power-of-two-easy"},next:{title:"0258 - Add Digits (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/add-digits-easy"}},c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sort",id:"approach-1-sort",level:2},{value:"Approach 2: Hash Map",id:"approach-2-hash-map",level:2}],d={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0242---valid-anagram-easy"},"0242 - Valid Anagram (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/valid-anagram/"},"https://leetcode.com/problems/valid-anagram/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given two strings ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"t"),", return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," ",(0,o.kt)("em",{parentName:"p"},"if")," ",(0,o.kt)("inlineCode",{parentName:"p"},"t")," ",(0,o.kt)("em",{parentName:"p"},"is an anagram of")," ",(0,o.kt)("inlineCode",{parentName:"p"},"s"),(0,o.kt)("em",{parentName:"p"},", and")," ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," ",(0,o.kt)("em",{parentName:"p"},"otherwise"),"."),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"Anagram")," is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "anagram", t = "nagaram"\nOutput: true\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "rat", t = "car"\nOutput: false\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= s.length, t.length <= 5 * 104")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"t")," consist of lowercase English letters.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Follow up:")," What if the inputs contain Unicode characters? How would you adapt your solution to such a case?"),(0,o.kt)("h2",{id:"approach-1-sort"},"Approach 1: Sort"),(0,o.kt)(i.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        // s and t are anagrams\n        // if they are same after being sorted\n        sort(begin(s), end(s));\n        sort(begin(t), end(t));\n        return s == t;\n    }\n};\n")),(0,o.kt)("h2",{id:"approach-2-hash-map"},"Approach 2: Hash Map"),(0,o.kt)(i.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        // if s and t are anagram, \n        // then the frequency of each number would be same\n        int cnt[26] = {0};\n        for (auto x : s) cnt[x - 'a']++;\n        for (auto x : t) cnt[x - 'a']--;\n        for (int i = 0; i < 26; i++) {\n            if (cnt[i]) {\n                return false;\n            }\n        }\n        return true;\n    }\n};\n")))}g.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.name;return a.createElement("div",{className:"solution-author-wrapper"},a.createElement("span",null,"This solution is written by ",t))}}}]);
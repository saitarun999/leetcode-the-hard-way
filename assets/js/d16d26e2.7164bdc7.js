"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1263],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return k}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},l=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=o(t),k=r,d=h["".concat(p,".").concat(k)]||h[k]||c[k]||s;return t?n.createElement(d,m(m({ref:a},l),{},{components:t})):n.createElement(d,m({ref:a},l))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=h;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,m[1]=i;for(var o=2;o<s;o++)m[o]=t[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},95275:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var n=t(87462),r=t(63366),s=(t(67294),t(3905)),m=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/break-a-palindrome/"},p="1328 - Break a Palindrome (Medium)",o={unversionedId:"1300-1399/break-a-palindrome-medium",id:"1300-1399/break-a-palindrome-medium",title:"1328 - Break a Palindrome (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/break-a-palindrome/",source:"@site/solutions/1300-1399/1328-break-a-palindrome-medium.md",sourceDirName:"1300-1399",slug:"/1300-1399/break-a-palindrome-medium",permalink:"/leetcode-the-hard-way/solutions/1300-1399/break-a-palindrome-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/1300-1399/1328-break-a-palindrome-medium.md",tags:[],version:"current",sidebarPosition:1328,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/break-a-palindrome/"},sidebar:"tutorialSidebar",previous:{title:"1305 - All Elements in Two Binary Search Trees (Medium)",permalink:"/leetcode-the-hard-way/solutions/1300-1399/all-elements-in-two-binary-search-trees-medium"},next:{title:"1331 - Rank Transform of an Array (Easy)",permalink:"/leetcode-the-hard-way/solutions/1300-1399/rank-transform-of-an-array-easy"}},l={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}],h={toc:c};function k(e){var a=e.components,t=(0,r.Z)(e,m);return(0,s.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"1328---break-a-palindrome-medium"},"1328 - Break a Palindrome (Medium)"),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Given a palindromic string of lowercase English letters ",(0,s.kt)("inlineCode",{parentName:"p"},"palindrome"),", replace ",(0,s.kt)("strong",{parentName:"p"},"exactly one")," character with any lowercase English letter so that the resulting string is ",(0,s.kt)("strong",{parentName:"p"},"not")," a palindrome and that it is the ",(0,s.kt)("strong",{parentName:"p"},"lexicographically smallest")," one possible."),(0,s.kt)("p",null,"Return ",(0,s.kt)("em",{parentName:"p"},"the resulting string. If there is no way to replace a character to make it not a palindrome, return an ",(0,s.kt)("strong",{parentName:"em"},"empty string"),".")),(0,s.kt)("p",null,"A string ",(0,s.kt)("inlineCode",{parentName:"p"},"a")," is lexicographically smaller than a string ",(0,s.kt)("inlineCode",{parentName:"p"},"b")," (of the same length) if in the first position where ",(0,s.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"b")," differ, ",(0,s.kt)("inlineCode",{parentName:"p"},"a")," has a character strictly smaller than the corresponding character in ",(0,s.kt)("inlineCode",{parentName:"p"},"b"),". For example, ",(0,s.kt)("inlineCode",{parentName:"p"},'"abcc"')," is lexicographically smaller than ",(0,s.kt)("inlineCode",{parentName:"p"},'"abcd"')," because the first position they differ is at the fourth character, and ",(0,s.kt)("inlineCode",{parentName:"p"},"'c'")," is smaller than ",(0,s.kt)("inlineCode",{parentName:"p"},"'d'"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: palindrome = "abccba"\nOutput: "aaccba"\nExplanation: There are many ways to make "abccba" not a palindrome, such as "zbccba", "aaccba", and "abacba".\nOf all the ways, "aaccba" is the lexicographically smallest.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: palindrome = "a"\nOutput: ""\nExplanation: There is no way to replace a single character to make "a" not a palindrome, so return an empty string.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= palindrome.length <= 1000")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"palindrome")," consists of only lowercase English letters.")),(0,s.kt)("h2",{id:"approach-1-greedy"},"Approach 1: Greedy"),(0,s.kt)("p",null,"If the input ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," has the length of 1, then the answer is an empty string because a single letter is always a palindrome. There is no way to make it not a palindrome."),(0,s.kt)("p",null,"If we need to make it lexicographically smallest one, that means we should replace a character with ",(0,s.kt)("inlineCode",{parentName:"p"},"a")," as early as possible (from the left to right). Therefore, we iterate the input and check the first index ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s[i]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"))))),"is not ",(0,s.kt)("inlineCode",{parentName:"p"},"a"),". This is the position where we need to replace."),(0,s.kt)("p",null,"If there is no such position, that means all characters are ",(0,s.kt)("inlineCode",{parentName:"p"},"a"),". In this case, the lexicographically smallest one is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"b")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"aaaaaab")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"aaaaaab"))))),". We can simply change the last character to ",(0,s.kt)("inlineCode",{parentName:"p"},"b"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    string breakPalindrome(string s) {\n        int n = s.size();\n        if (n < 2) return \"\";\n        for (int i = 0; i < n / 2; i++) {\n            if (s[i] != 'a') {\n                s[i] = 'a';\n                return s;\n            }\n        }\n        s[n - 1] = 'b';\n        return s;\n    }\n};\n")))}k.isMDXComponent=!0}}]);
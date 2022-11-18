"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4280],{3905:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return u}});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},o=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),h=l(t),u=s,k=h["".concat(p,".").concat(u)]||h[u]||c[u]||r;return t?n.createElement(k,m(m({ref:a},o),{},{components:t})):n.createElement(k,m({ref:a},o))}));function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,m=new Array(r);m[0]=h;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,m[1]=i;for(var l=2;l<r;l++)m[l]=t[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},78227:function(e,a,t){t.r(a),t.d(a,{assets:function(){return o},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var n=t(87462),s=t(63366),r=(t(67294),t(3905)),m=["components"],i={description:"Author: @@vigneshshiv, @MithunPrabhu777, @AnshikaAnand222, @radojicic23 | https://leetcode.com/problems/longest-substring-without-repeating-characters/",tags:["Hash Table","String","Sliding Window"]},p="0003 - Longest Substring Without Repeating Characters (Medium)",l={unversionedId:"0000-0099/longest-substring-without-repeating-characters-medium",id:"0000-0099/longest-substring-without-repeating-characters-medium",title:"0003 - Longest Substring Without Repeating Characters (Medium)",description:"Author: @@vigneshshiv, @MithunPrabhu777, @AnshikaAnand222, @radojicic23 | https://leetcode.com/problems/longest-substring-without-repeating-characters/",source:"@site/solutions/0000-0099/0003-longest-substring-without-repeating-characters-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/longest-substring-without-repeating-characters-medium",permalink:"/leetcode-the-hard-way/solutions/0000-0099/longest-substring-without-repeating-characters-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0003-longest-substring-without-repeating-characters-medium.md",tags:[{label:"Hash Table",permalink:"/leetcode-the-hard-way/solutions/tags/hash-table"},{label:"String",permalink:"/leetcode-the-hard-way/solutions/tags/string"},{label:"Sliding Window",permalink:"/leetcode-the-hard-way/solutions/tags/sliding-window"}],version:"current",sidebarPosition:3,frontMatter:{description:"Author: @@vigneshshiv, @MithunPrabhu777, @AnshikaAnand222, @radojicic23 | https://leetcode.com/problems/longest-substring-without-repeating-characters/",tags:["Hash Table","String","Sliding Window"]},sidebar:"tutorialSidebar",previous:{title:"0001 - Two Sum (Easy)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/two-sum"},next:{title:"0005 - Longest Palindromic Substring (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/longest-palindromic-substring-medium"}},o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: HashSet with One Iteration",id:"approach-1-hashset-with-one-iteration",level:2},{value:"Approach 2: Sliding Window with ASCII",id:"approach-2-sliding-window-with-ascii",level:2}],h=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)}},u=h("Tabs"),k=h("TabItem"),N=h("SolutionAuthor"),g={toc:c};function d(e){var a=e.components,t=(0,s.Z)(e,m);return(0,r.kt)("wrapper",(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0003---longest-substring-without-repeating-characters-medium"},"0003 - Longest Substring Without Repeating Characters (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-substring-without-repeating-characters/"},"https://leetcode.com/problems/longest-substring-without-repeating-characters/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Given a string ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),", find the length of the ",(0,r.kt)("strong",{parentName:"p"},"longest substring")," without repeating characters."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "abcabcbb"\nOutput: 3\nExplanation: The answer is "abc", with the length of 3.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "bbbbb"\nOutput: 1\nExplanation: The answer is "b", with the length of 1.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "pwwkew"\nOutput: 3\nExplanation: The answer is "wke", with the length of 3.\nNotice that the answer must be a substring, "pwke" is a subsequence and not a substring.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= s.length <= 5 * 10^4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," consists of English letters, digits, symbols and spaces.")),(0,r.kt)("h2",{id:"approach-1-hashset-with-one-iteration"},"Approach 1: HashSet with One Iteration"),(0,r.kt)("p",null,"Two pointer ",(0,r.kt)("em",{parentName:"p"},"i")," and ",(0,r.kt)("em",{parentName:"p"},"j"),", initially at the start of the string. Move right (j++) till distinct characters and store them in set.\nIf repeated character occurs then move left (i++) until that repeated character is occured in left, and also remove all characters that occur before that character including character itself from set. This helps to maintain Set with longest substring. "),(0,r.kt)("p",null,"Time complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," - # of characters in the string"),(0,r.kt)("p",null,"Space complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(s)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," is the longest substring"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(k,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(N,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        if (s == null || s.length() == 0) return 0;\n        int i = 0, j = 0, max = 0;\n        Set<Character> seen = new HashSet<>();\n        while (j < s.length()) {\n            if (seen.add(s.charAt(j))) {\n                max = Math.max(max, seen.size());\n                j += 1;\n            } else {\n                seen.remove(s.charAt(i++));\n            }\n        }\n        return max;\n    }\n}\n"))),(0,r.kt)(k,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)(N,{name:"@MithunPrabhu777",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var lengthOfLongestSubstring = function (s) {\n    const letterCountMap = new Map();\n\n    // Destructuring assignment syntax is a JavaScript expression that pulls out values from array\n    // Here we are assigning initial values to variables\n    let [left, right, max] = [0, 0, 0];\n\n    while (right < s.length) {\n        const currentValue = s[right];\n        const canSlide = letterCountMap.has(currentValue);\n\n        // We can slide left pointer only when we find duplicate number from map\n        if (canSlide) {\n            const rightSlide = letterCountMap.get(currentValue) + 1;\n            left = Math.max(left, rightSlide);\n        }\n\n        // We are finding window from left to right of non repeating characters\n        const window = (right - left) + 1;\n        max = Math.max(window, max);\n        letterCountMap.set(currentValue, right);\n        right++;\n    }\n\n    return max;\n};\n")))),(0,r.kt)("h2",{id:"approach-2-sliding-window-with-ascii"},"Approach 2: Sliding Window with ASCII"),(0,r.kt)("p",null,"We can solve this problem with Sliding Window and Two pointers ",(0,r.kt)("em",{parentName:"p"},"i")," and ",(0,r.kt)("em",{parentName:"p"},"j"),". Iterate over the string, keep moving the 2nd pointer ",(0,r.kt)("em",{parentName:"p"},"j")," forward until the character is not matched with ",(0,r.kt)("em",{parentName:"p"},"i")," th character. "),(0,r.kt)("p",null,"Since the input, may contain ",(0,r.kt)("inlineCode",{parentName:"p"},"English letters, digits, symbols and spaces"),", so maintain the ",(0,r.kt)("a",{parentName:"p",href:"https://bluesock.org/~willg/dev/ascii.html"},"ASCII")," char array of size 128. "),(0,r.kt)("p",null,"If any of the character occur more than once, then break the loop and find the difference of ",(0,r.kt)("em",{parentName:"p"},"j")," and ",(0,r.kt)("em",{parentName:"p"},"i")," and that's the longest substring length. "),(0,r.kt)("p",null,"Time complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," - # of characters in the string. Since both ",(0,r.kt)("em",{parentName:"p"},"i")," and ",(0,r.kt)("em",{parentName:"p"},"j")," moving in one direction and it's total is ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"2"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(2n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", constants are ignored, so it's ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,r.kt)("p",null,"Space complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," extra space, size of 128 ASCII chars for each iteration, considered as constant space."),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(k,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(N,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        if (s == null || s.length() == 0) return 0;\n        if (s.length() == 1) return 1;\n        int max = 0;\n        for (int idx = 0; idx < s.length() - 1; idx++) {\n            int[] seen = new int[128];\n            int i = idx, j = idx + 1;\n            while (j < s.length() && s.charAt(i) != s.charAt(j)) {\n                if (seen[s.charAt(j)] > 0) break;\n                seen[s.charAt(j)]++;\n                j++;\n            }\n            max = Math.max(max, j - i);\n        }\n        return max;\n    }\n}\n"))),(0,r.kt)(k,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)(N,{name:"@AnshikaAnand222",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var lengthOfLongestSubstring = function(s) {\n  const set = new Set();\n  let start = 0;\n  let maxSize = 0;\n  for (let i=0; i < s.length; i++) {\n    const c = s.charAt(i);\n    // keep remove character not in the non-repetitive substring\n    while (set.has(c)) {\n      set.delete(s.charAt(start))\n      start += 1;\n    }\n    maxSize = Math.max(maxSize, i - start + 1);    \n    set.add(c);     \n  }  \n  return maxSize;\n};\n"))),(0,r.kt)(k,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(N,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        # HashSet\n        char_set = set()\n        # left pointer at position zero\n        l = 0  \n        res = 0\n        # Right pointer is going through every char\n        for r in range(len(s)):\n            # If we get to a duplicate\n            while s[r] in char_set:\n                # Remove left most\n                char_set.remove(s[l])\n                # Shift left pointer by one\n                l += 1  \n            char_set.add(s[r])\n            # If the current window size is greater than what it's now\n            # Update\n            res = max(res, r - l + 1)\n        return res\n")))))}d.isMDXComponent=!0}}]);
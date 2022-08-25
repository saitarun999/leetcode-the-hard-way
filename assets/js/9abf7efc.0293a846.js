"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3656],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94580:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(8539),s=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/find-first-palindromic-string-in-the-array/"},c="2108 - Find First Palindromic String in the Array (Easy)",p={unversionedId:"2100-2199/find-first-palindromic-string-in-the-array-easy",id:"2100-2199/find-first-palindromic-string-in-the-array-easy",title:"2108 - Find First Palindromic String in the Array (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/find-first-palindromic-string-in-the-array/",source:"@site/solutions/2100-2199/2108-find-first-palindromic-string-in-the-array-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/find-first-palindromic-string-in-the-array-easy",permalink:"/leetcode-the-hard-way/solutions/2100-2199/find-first-palindromic-string-in-the-array-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2108-find-first-palindromic-string-in-the-array-easy.md",tags:[],version:"current",sidebarPosition:2108,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-first-palindromic-string-in-the-array/"},sidebar:"tutorialSidebar",previous:{title:"2100 - 2199",permalink:"/leetcode-the-hard-way/solutions/category/2100---2199"},next:{title:"2109 - Adding Spaces to a String (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/adding-spaces-to-a-string-medium"}},u={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Check each word",id:"approach-1-check-each-word",level:2},{value:'Long and Efficient <a href="#longandefficient" id="longandefficient"></a>',id:"long-and-efficient-",level:4},{value:'Shorter but not efficient <a href="#shorterbutnotefficient" id="shorterbutnotefficient"></a>',id:"shorter-but-not-efficient-",level:4},{value:'Shortest but not efficient <a href="#shortestbutnotefficient" id="shortestbutnotefficient"></a>',id:"shortest-but-not-efficient-",level:4},{value:'Shortest but efficient <a href="#shortestbutefficient" id="shortestbutefficient"></a>',id:"shortest-but-efficient-",level:4}],m={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2108---find-first-palindromic-string-in-the-array-easy"},"2108 - Find First Palindromic String in the Array (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-first-palindromic-string-in-the-array/"},"https://leetcode.com/problems/find-first-palindromic-string-in-the-array/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given an array of strings ",(0,a.kt)("inlineCode",{parentName:"p"},"words"),", return ",(0,a.kt)("em",{parentName:"p"},"the first ",(0,a.kt)("strong",{parentName:"em"},"palindromic")," string in the array"),". If there is no such string, return ",(0,a.kt)("em",{parentName:"p"},"an ",(0,a.kt)("strong",{parentName:"em"},"empty string")," ")," ",(0,a.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,a.kt)("p",null,"A string is ",(0,a.kt)("strong",{parentName:"p"},"palindromic")," if it reads the same forward and backward."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: words = ["abc","car","ada","racecar","cool"]\nOutput: "ada"\nExplanation: The first string that is palindromic is "ada".\nNote that "racecar" is also palindromic, but it is not the first.\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: words = ["notapalindrome","racecar"]\nOutput: "racecar"\nExplanation: The first and only string that is palindromic is "racecar".\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: words = ["def","ghi"]\nOutput: ""\nExplanation: There are no palindromic strings, so the empty string is returned.\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= words.length <= 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= words[i].length <= 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"words[i]")," consists only of lowercase English letters.")),(0,a.kt)("h2",{id:"approach-1-check-each-word"},"Approach 1: Check each word"),(0,a.kt)("p",null,"There are several ways to check if a string is a palindrome or not."),(0,a.kt)("h4",{id:"long-and-efficient-"},"Long and Efficient ",(0,a.kt)("a",{href:"#longandefficient",id:"longandefficient"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"bool isPalindrome(const string& s) {\n    for (int i = 0; i < s.size() / 2; i++) {\n        if (s[i] != s[s.size() - i - 1])\n            return false;\n    }\n    return true;\n}\n")),(0,a.kt)("h4",{id:"shorter-but-not-efficient-"},"Shorter but not efficient ",(0,a.kt)("a",{href:"#shorterbutnotefficient",id:"shorterbutnotefficient"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"bool isPalindrome(const string& s) {\n    string t = s;\n    reverse(t.begin(), t.end());\n    return s == t;\n}\n")),(0,a.kt)("h4",{id:"shortest-but-not-efficient-"},"Shortest but not efficient ",(0,a.kt)("a",{href:"#shortestbutnotefficient",id:"shortestbutnotefficient"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"bool isPalindrome(const string& s) {\n    return s == string(s.rbegin(), s.rend());\n}\n")),(0,a.kt)("h4",{id:"shortest-but-efficient-"},"Shortest but efficient ",(0,a.kt)("a",{href:"#shortestbutefficient",id:"shortestbutefficient"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"bool isPalindrome(const string &s) {\n    return equal(s.begin(), s.begin() + s.size() / 2, s.rbegin());\n}\n")),(0,a.kt)("p",null,"We just need to iterate each string and check if the target ",(0,a.kt)("span",{parentName:"p",className:"math math-inline"},(0,a.kt)("span",{parentName:"span",className:"katex"},(0,a.kt)("span",{parentName:"span",className:"katex-mathml"},(0,a.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,a.kt)("semantics",{parentName:"math"},(0,a.kt)("mrow",{parentName:"semantics"},(0,a.kt)("mi",{parentName:"mrow"},"s")),(0,a.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s")))),(0,a.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,a.kt)("span",{parentName:"span",className:"base"},(0,a.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,a.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"))))),"s is a palindrome, return the string if so."),(0,a.kt)(o.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    bool isPalindrome(const string& s) {\n        return equal(s.begin(), s.begin() + s.size() / 2, s.rbegin());\n    }\n    \n    string firstPalindrome(vector<string>& words) {\n        for (auto s : words) {\n            if (isPalindrome(s)) {\n                return s;\n            }\n        }\n        return "";\n    }\n};\n')))}f.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294);function i(e){var t=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",t))}}}]);
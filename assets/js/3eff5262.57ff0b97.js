"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[34258],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=m(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},89351:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],p={description:"Author: @ColeB2 | https://leetcode.com/problems/daily-temperatures/",tags:["Array","Stack","Monotonic Stack"]},s="0739 - Daily Temperatures",m={unversionedId:"0700-0799/daily-temperatures-medium",id:"0700-0799/daily-temperatures-medium",title:"0739 - Daily Temperatures",description:"Author: @ColeB2 | https://leetcode.com/problems/daily-temperatures/",source:"@site/solutions/0700-0799/0739-daily-temperatures-medium.md",sourceDirName:"0700-0799",slug:"/0700-0799/daily-temperatures-medium",permalink:"/leetcode-the-hard-way/solutions/0700-0799/daily-temperatures-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0700-0799/0739-daily-temperatures-medium.md",tags:[{label:"Array",permalink:"/leetcode-the-hard-way/solutions/tags/array"},{label:"Stack",permalink:"/leetcode-the-hard-way/solutions/tags/stack"},{label:"Monotonic Stack",permalink:"/leetcode-the-hard-way/solutions/tags/monotonic-stack"}],version:"current",sidebarPosition:739,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/daily-temperatures/",tags:["Array","Stack","Monotonic Stack"]},sidebar:"tutorialSidebar",previous:{title:"0733 - Flood Fill (Easy)",permalink:"/leetcode-the-hard-way/solutions/0700-0799/flood-fill-easy"},next:{title:"0740 - Delete and Earn (Medium)",permalink:"/leetcode-the-hard-way/solutions/0700-0799/delete-and-earn-medium"}},l={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Monotonic Stack",id:"approach-1-monotonic-stack",level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},d=c("Tabs"),h=c("TabItem"),k=c("SolutionAuthor"),f={toc:u};function y(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0739---daily-temperatures"},"0739 - Daily Temperatures"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/daily-temperatures/"},"https://leetcode.com/problems/daily-temperatures/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given an array of integers ",(0,o.kt)("inlineCode",{parentName:"p"},"temperatures")," represents the daily temperatures, ",(0,o.kt)("em",{parentName:"p"},"return an array")," ",(0,o.kt)("inlineCode",{parentName:"p"},"answer")," ",(0,o.kt)("em",{parentName:"p"},"such that")," ",(0,o.kt)("inlineCode",{parentName:"p"},"answer[i]")," ",(0,o.kt)("em",{parentName:"p"},"is the number of days you have to wait after the")," ",(0,o.kt)("inlineCode",{parentName:"p"},"ith")," ",(0,o.kt)("em",{parentName:"p"},"day to get a warmer temperature"),". If there is no future day for which this is possible, keep ",(0,o.kt)("inlineCode",{parentName:"p"},"answer[i] == 0")," instead."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: temperatures = [73,74,75,71,69,72,76,73]\nOutput: [1,1,4,2,1,1,0,0]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: temperatures = [30,40,50,60]\nOutput: [1,1,1,0]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: temperatures = [30,60,90]\nOutput: [1,1,0]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= temperatures.length <= 10^5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"30 <= temperatures[i] <= 100"))),(0,o.kt)("h2",{id:"approach-1-monotonic-stack"},"Approach 1: Monotonic Stack"),(0,o.kt)("p",null,"To solve this problem, we will use a Monotonic Decreasing Stack. That is a stack, where all the values inside the stack, are ordered from largest, to smallest. Meaning, we only add to the stack when the stack is either:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Empty, or"),(0,o.kt)("li",{parentName:"ol"},"If the incoming value is smaller or equal to the value on top of the stack. ")),(0,o.kt)("p",null,"That means that if any incoming value is larger, we must pop values off the top of the stack, until it satisfies rules 1 or 2 before we can add it to our stack."),(0,o.kt)("p",null,"It is during the popping phase, that we will do the majority of our work in solving our problem. By also adding the indexes with the temperature to the stack, we know where they exist in our output array, and can also use the indexes to gauge the relative distance in terms of days from other temperatures. So while popping them, we can calculate the incoming index, ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," minus the popped items index, ",(0,o.kt)("inlineCode",{parentName:"p"},"i2")," and overwrite the values in our output array at ",(0,o.kt)("inlineCode",{parentName:"p"},"i2")," with the difference, that is ",(0,o.kt)("inlineCode",{parentName:"p"},"i-i2"),"."),(0,o.kt)("p",null,"Time Complexity: ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mi",{parentName:"mrow"},"n"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")")))))," where n is the length of the input, temperatures."),(0,o.kt)("p",null,"Space Complexity: ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mi",{parentName:"mrow"},"n"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")")))))," which will be the size of our output array, and our stack in the worst case."),(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(k,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:\n        # Here we will utilize a monotonic decreasing stack, meaning everything\n        # in the stack will be ordered from 'hottest' to 'coldest', and any \n        # incoming element, 'warmer' than the top of the stack, will force us\n        # to remove the 'colder' days from the top of our stack, and calculate\n        # the difference in how many days apart they were for our output array.\n        # Initialize output array of 0's the size of temperatures array. We use\n        # 0's as default, as if we don't find a warmer day going forward, we are\n        # to return 0 in that position instead.\n        output = [0] * len(temperatures)\n        stack = []\n        # Loop through temperatures, tracking index, i and temperature, temp.\n        for i, temp in enumerate(temperatures):\n            # While the incoming temperature is 'warmer' than the temperature on \n            # top of the stack: We can start popping.\n            # Note our stack values are formatted with tuples in the form:\n            # (index, temperature).\n            while stack and stack[-1][1] < temp:\n                # Pop temperature, tracking its index in temperatures, i2 and\n                # the temperature itself.\n                i2, temp2 = stack.pop()\n                # Add to out output at the index of the popped value, the\n                # difference of the current temperature index, minus popped\n                # value difference. This will be the number of days in between\n                # them.\n                output[i2] = i-i2\n            # Once the top of the stack is either empty or no longer has days\n            # colder than the incoming temperature, we can add our temperature\n            # to the stack.\n            # Again note that we are tracking index, i, and temperature, temp\n            # inside our stack.\n            stack.append((i, temp))\n        # return our output.\n        return output\n")))))}y.isMDXComponent=!0}}]);
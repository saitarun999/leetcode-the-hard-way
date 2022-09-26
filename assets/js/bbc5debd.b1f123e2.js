"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[99006],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),h=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=h(n),u=r,d=c["".concat(l,".").concat(u)]||c[u]||s[u]||a;return n?i.createElement(d,o(o({ref:t},m),{},{components:n})):i.createElement(d,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var h=2;h<a;h++)o[h]=n[h];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24367:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return w},frontMatter:function(){return p},metadata:function(){return h},toc:function(){return s}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/trapping-rain-water/",tags:["Array","Two Pointers","Dynamic Programming","Stack","Monotonic Stack"]},l="0042 - Trapping Rain Water (Hard)",h={unversionedId:"0000-0099/trapping-rain-water-hard",id:"0000-0099/trapping-rain-water-hard",title:"0042 - Trapping Rain Water (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/trapping-rain-water/",source:"@site/solutions/0000-0099/0042-trapping-rain-water-hard.md",sourceDirName:"0000-0099",slug:"/0000-0099/trapping-rain-water-hard",permalink:"/leetcode-the-hard-way/solutions/0000-0099/trapping-rain-water-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0042-trapping-rain-water-hard.md",tags:[{label:"Array",permalink:"/leetcode-the-hard-way/solutions/tags/array"},{label:"Two Pointers",permalink:"/leetcode-the-hard-way/solutions/tags/two-pointers"},{label:"Dynamic Programming",permalink:"/leetcode-the-hard-way/solutions/tags/dynamic-programming"},{label:"Stack",permalink:"/leetcode-the-hard-way/solutions/tags/stack"},{label:"Monotonic Stack",permalink:"/leetcode-the-hard-way/solutions/tags/monotonic-stack"}],version:"current",sidebarPosition:42,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/trapping-rain-water/",tags:["Array","Two Pointers","Dynamic Programming","Stack","Monotonic Stack"]},sidebar:"tutorialSidebar",previous:{title:"0040 - Combination Sum II (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/combination-sum-ii-medium"},next:{title:"0046 - Permutations (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/permutations-medium"}},m={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2},{value:"Approach 2: Two Pointers",id:"approach-2-two-pointers",level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},u=c("Tabs"),d=c("TabItem"),g=c("SolutionAuthor"),f={toc:s};function w(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0042---trapping-rain-water-hard"},"0042 - Trapping Rain Water (Hard)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/trapping-rain-water/"},"https://leetcode.com/problems/trapping-rain-water/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," non-negative integers representing an elevation map where the width of each bar is ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),", compute how much water it can trap after raining."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6\nExplanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: height = [4,2,0,3,2,5]\nOutput: 9\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n == height.length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n <= 2 * 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= height[i] <= 10^5"))),(0,a.kt)("h2",{id:"approach-1-dynamic-programming"},"Approach 1: Dynamic Programming"),(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Time Complexity: O(N)\n// Space Complexity: O(N)\n// where N is the length of height\nclass Solution {\npublic:\n    int trap(vector<int>& height) {\n        int ans = 0, n = height.size();\n        // dp1[i]: the max height of bar from the left till position i\n        // dp2[i]: the max height of bar from the right till position i\n        vector<int> dp1(n), dp2(n);\n        // let's build dp1 first\n        dp1[0] = height[0];\n        // for each position i,\n        // if the current height is greater than the max height, then dp1[i] will be height[i]\n        // else dp1[i] will be taking the previous result, i.e. dp1[i - 1]\n        for (int i = 1; i < n; i++) dp1[i] = max(dp1[i - 1], height[i]);\n        // build dp2 in a similar way\n        dp2[n - 1] = height[n - 1];\n        // for each position i,\n        // if the current height is greater than the max height,\n        // then dp2[i] will be height[i]\n        // else dp2[i] will be taking the previous result, i.e. dp2[i + 1]\n        for (int i = n - 2; i >= 0; i--) dp2[i] = max(dp2[i + 1], height[i]);\n        // then iterate the heights and take the minimum of dp1[i] and dp2[i]\n        // why minimum? because that is the max height a bar can hold. (water will overflow)\n        // then we substract height[i] from the min\n        // if min(dp1[i], dp2[i]) is 2 and height[i] is 2, then no water is being trapped\n        // if min(dp1[i], dp2[i]) is 2 and height[i] is 0, then 2 units of water are being trapped\n        for (int i = 1; i < n - 1; i++) ans += min(dp1[i], dp2[i]) - height[i];\n        return ans;\n    }\n};\n")))),(0,a.kt)("h2",{id:"approach-2-two-pointers"},"Approach 2: Two Pointers"),(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Time Complexity: O(N)\n// Space Complexity: O(1)\nclass Solution {\n    public int trap(int[] height) {\n        int i = 0, j = height.length - 1, ans = 0, mx = 0, mi = 0;\n        // two pointers\n        // pointer i from the left\n        // pointer j from the right\n        while (i <= j) {\n            // take the min height\n            mi = Math.min(height[i], height[j]);\n            // find the max min height\n            mx = Math.max(mx, mi);\n            // the units of water being tapped is the diffence between max height and min height\n            ans += mx - mi;\n            // move the pointer i if height[i] is smaller\n            if (height[i] < height[j]) i++;\n            // else move pointer j\n            else j--;\n        }\n        return ans;\n    }\n}\n"))),(0,a.kt)(d,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# Time Complexity: O(N)\n# Space Complexity: O(1)\nclass Solution:\n    def trap(self, height: List[int]) -> int:\n        i, j, ans, mx, mi = 0, len(height) - 1, 0, 0, 0\n        # two pointers\n        # pointer i from the left\n        # pointer j from the right\n        while i <= j:\n            # take the min height\n            mi = min(height[i], height[j])\n            # find the max min height\n            mx = max(mx, mi)\n            # the units of water being tapped is the diffence between max height and min height\n            ans += mx - mi\n            # move the pointer i if height[i] is smaller\n            if height[i] < height[j]: i += 1\n            # else move pointer j\n            else: j -= 1\n        return ans\n")))))}w.isMDXComponent=!0}}]);
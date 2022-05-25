"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[548],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=r,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},92425:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/longest-path-with-different-adjacent-characters/"},l="2246 - Longest Path With Different Adjacent Characters (Hard)",p={unversionedId:"2200-2299/longest-path-with-different-adjacent-characters-hard",id:"2200-2299/longest-path-with-different-adjacent-characters-hard",title:"2246 - Longest Path With Different Adjacent Characters (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/longest-path-with-different-adjacent-characters/",source:"@site/solutions/2200-2299/2246-longest-path-with-different-adjacent-characters-hard.md",sourceDirName:"2200-2299",slug:"/2200-2299/longest-path-with-different-adjacent-characters-hard",permalink:"/leetcode-the-hard-way/solutions/2200-2299/longest-path-with-different-adjacent-characters-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2200-2299/2246-longest-path-with-different-adjacent-characters-hard.md",tags:[],version:"current",sidebarPosition:2246,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/longest-path-with-different-adjacent-characters/"},sidebar:"tutorialSidebar",previous:{title:"2244 - Minimum Rounds to Complete All Tasks (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/minimum-rounds-to-complete-all-tasks-medium"},next:{title:"2248 - Intersection of Multiple Arrays (Easy)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/intersection-of-multiple-arrays-easy"}},c={},d=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2}],h={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2246---longest-path-with-different-adjacent-characters-hard"},"2246 - Longest Path With Different Adjacent Characters (Hard)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given a ",(0,o.kt)("strong",{parentName:"p"},"tree")," (i.e. a connected, undirected graph that has no cycles) ",(0,o.kt)("strong",{parentName:"p"},"rooted")," at node ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," consisting of ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," nodes numbered from ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"n - 1"),". The tree is represented by a ",(0,o.kt)("strong",{parentName:"p"},"0-indexed")," array ",(0,o.kt)("inlineCode",{parentName:"p"},"parent")," of size ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"parent[i]")," is the parent of node ",(0,o.kt)("inlineCode",{parentName:"p"},"i"),". Since node ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," is the root, ",(0,o.kt)("inlineCode",{parentName:"p"},"parent[0] == -1"),"."),(0,o.kt)("p",null,"You are also given a string ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," of length ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"s[i]")," is the character assigned to node ",(0,o.kt)("inlineCode",{parentName:"p"},"i"),"."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the length of the ",(0,o.kt)("strong",{parentName:"em"},"longest path")," in the tree such that no pair of ",(0,o.kt)("strong",{parentName:"em"},"adjacent")," nodes on the path have the same character assigned to them.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/03/25/testingdrawio.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: parent = [-1,0,0,1,1,2], s = "abacbe"\nOutput: 3\nExplanation: The longest path where each two adjacent nodes have different characters in the tree is the path: 0 -> 1 -> 3. The length of this path is 3, so 3 is returned.\nIt can be proven that there is no longer path that satisfies the conditions. \n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/03/25/graph2drawio.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: parent = [-1,0,0,0], s = "aabc"\nOutput: 3\nExplanation: The longest path where each two adjacent nodes have different characters is the path: 2 -> 0 -> 3. The length of this path is 3, so 3 is returned.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"n == parent.length == s.length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= parent[i] <= n - 1")," for all ",(0,o.kt)("inlineCode",{parentName:"li"},"i >= 1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parent[0] == -1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parent")," represents a valid tree."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s")," consists of only lowercase English letters.")),(0,o.kt)("h2",{id:"approach-1-dfs"},"Approach 1: DFS"),(0,o.kt)("p",null,"The first observation is that node can have at most two longest chains from child nodes. If a node have more than two chains, we only need to take the longest two."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int longestPath(vector<int>& parent, string s) {\n        int ans = 0, n = parent.size();\n        vector<vector<int>> g(n);\n        // build the graph\n        for (int i = 0; i < n; i++) {\n            if (parent[i] ^ -1) {\n                g[parent[i]].push_back(i);\n            }\n        }\n        function<int(int)> dfs = [&](int u) {\n            // store the largest one and the second largest\n            int largest = 0, secondLargest = 0;\n            for (auto v : g[u]) {\n                // calculate the value first\n                int val = dfs(v);\n                // if their charachters are not same\n                if (s[u] ^ s[v]) {\n                    // then find out largest & secondLargest\n                    if (val > secondLargest) secondLargest = val;\n                    if (secondLargest > largest) swap(largest, secondLargest);\n                }\n            }\n            // update ans \n            // the value would be largest + secondLargest + 1, i.e.\n            // the length of both chain (largest & secondLargest) + itself\n            ans = max(ans, largest + secondLargest + 1);\n            // take the largest one plus itself\n            return largest + 1;\n        };\n        // 0 must be the root\n        dfs(0);\n        return ans;\n    }\n};\n")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[96077],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),h=o,f=m["".concat(s,".").concat(h)]||m[h]||p[h]||l;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17103:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),l=(r(67294),r(3905)),a=["components"],i={description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/symmetric-tree/"},s="0101 - Symmetric Tree (Easy)",u={unversionedId:"0100-0199/symmetric-tree-easy",id:"0100-0199/symmetric-tree-easy",title:"0101 - Symmetric Tree (Easy)",description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/symmetric-tree/",source:"@site/solutions/0100-0199/0101-symmetric-tree-easy.md",sourceDirName:"0100-0199",slug:"/0100-0199/symmetric-tree-easy",permalink:"/leetcode-the-hard-way/solutions/0100-0199/symmetric-tree-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0101-symmetric-tree-easy.md",tags:[],version:"current",sidebarPosition:101,frontMatter:{description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/symmetric-tree/"},sidebar:"tutorialSidebar",previous:{title:"0100 - 0199",permalink:"/leetcode-the-hard-way/solutions/category/0100---0199"},next:{title:"0102 - Binary Tree Level Order Traversal (Medium)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/binary-tree-level-order-traversal-medium"}},c={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Recursive",id:"approach-1-recursive",level:2},{value:"Approach 2: Iterative",id:"approach-2-iterative",level:2}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}},h=m("Tabs"),f=m("TabItem"),d=m("SolutionAuthor"),y={toc:p};function v(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"0101---symmetric-tree-easy"},"0101 - Symmetric Tree (Easy)"),(0,l.kt)("h2",{id:"problem-link"},"Problem Link"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/symmetric-tree/"},"https://leetcode.com/problems/symmetric-tree/")),(0,l.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,l.kt)("p",null,"Given the ",(0,l.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree, ",(0,l.kt)("em",{parentName:"p"},"check whether it is a mirror of itself")," (i.e., symmetric around its center)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg",alt:null})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: root = [1,2,2,3,4,4,3]\nOutput: true\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg",alt:null})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: root = [1,2,2,null,3,null,3]\nOutput: false\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Constraints:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,l.kt)("inlineCode",{parentName:"li"},"[1, 1000]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-100 <= Node.val <= 100"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Follow up:")," Could you solve it both recursively and iteratively?"),(0,l.kt)("h2",{id:"approach-1-recursive"},"Approach 1: Recursive"),(0,l.kt)("p",null,"A tree is symmetric if the following conditions are satisfied"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"two nodes should have the value "),(0,l.kt)("li",{parentName:"ul"},"the left sub-tree is a reflection of the right sub-tree of the other tree")),(0,l.kt)(h,{mdxType:"Tabs"},(0,l.kt)(f,{value:"c++",label:"C++",mdxType:"TabItem"},(0,l.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool f(TreeNode* r1, TreeNode* r2){\n        // if two nodes r null, they are same\n        if(!r1 && !r2) return true;\n        // if one of them r null, they are not same\n        if(!r1 || !r2) return false;\n        // if their values are same, and the sub-nodes are same\n        return (r1->val == r2->val) && f(r1->left, r2->right) && f(r1->right, r2->left);\n    }\n    \n    bool isSymmetric(TreeNode* root) {\n        return f(root, root);\n    }\n};\n"))),(0,l.kt)(f,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)(d,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\n// Time complexity: O(n), where n - # nodes in the tree\n// Space complexity: O(log(n))\n// Suppose, we have perfectly balanced binary tree, we start with root that N, \n// then next layer we have left & right subtrees so N/2, then next layer is N/4 and so on... \n// Roughly the pattern is (N)+(N/2)+(N/4) +... + (N/N) which is O(logN) same as height O(h) of the tree. \nclass Solution {\n    public boolean isSymmetric(TreeNode root) {\n        if (root == null) return true;\n        return areSymmetric(root.left, root.right);\n    }\n    \n    public boolean areSymmetric(TreeNode root1, TreeNode root2) {\n        if (root1 == null && root2 == null) return true;\n        // Both nodes should not be null and values should be equal\n        // If not, both are not a valid symmetric tree\n        if (!(root1 != null && root2 != null) || root1.val != root2.val) {\n            return false;\n        }\n        return areSymmetric(root1.left, root2.right) && areSymmetric(root1.right, root2.left);\n    }\n}\n")))),(0,l.kt)("h2",{id:"approach-2-iterative"},"Approach 2: Iterative"),(0,l.kt)("p",null,"A tree is symmetric if the following conditions are satisfied"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"two nodes should have the value "),(0,l.kt)("li",{parentName:"ul"},"the left sub-tree is a reflection of the right sub-tree of the other tree")),(0,l.kt)(h,{mdxType:"Tabs"},(0,l.kt)(f,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)(d,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\n// Time complexity: O(n), where n - # nodes in the tree\n// Space complexity: O(n)\nclass Solution {\n    public boolean isSymmetric(TreeNode root) {\n        if (root == null) return true;\n        // ArrayDeque acts as head & tail pointers\n        // Add and remove elements from both sides\n        Deque<TreeNode> stack = new ArrayDeque<>();\n        if (root.left == null && root.right == null) {\n            return true;\n        }\n        if (root.left == null || root.right == null) {\n            return false;\n        }\n        // Add left to head & right to tail in deque\n        stack.offerFirst(root.left);\n        stack.offerLast(root.right);\n        while (!stack.isEmpty()) {\n            TreeNode left = stack.pollFirst();\n            TreeNode right = stack.pollLast();\n            // Compare the value, if not same, not a valid symmetric tree\n            if (left.val != right.val) return false;\n            // Mirror view elements check of both left and right subtree's\n            // If any left and right has one node exists and other doesn't, then it's not valid symmetric tree\n            if ((left.left == null && right.right != null) || (left.left != null && right.right == null)\n                    || (left.right != null && right.left == null) || (left.right == null && right.left != null)) {\n                return false;\n            }\n            if (left.right != null && right.left != null) {\n                stack.offerFirst(left.right);\n                stack.offerLast(right.left);\n            }\n            if (left.left != null && right.right != null) {\n                stack.offerFirst(left.left);\n                stack.offerLast(right.right);\n            }\n        }\n        return true;    \n    }\n}\n")))))}v.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[48011],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,c=p["".concat(s,".").concat(m)]||p[m]||h[m]||i;return n?r.createElement(c,o(o({ref:t},d),{},{components:n})):r.createElement(c,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19639:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return h}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={description:"Author: @wingkwong, @lonyehan | https://leetcode.com/problems/path-sum-ii/",tags:["Backtracking","Tree","Depth-First Search","Binary Tree"]},s="0113 - Path Sum II (Medium)",u={unversionedId:"0100-0199/path-sum-ii-medium",id:"0100-0199/path-sum-ii-medium",title:"0113 - Path Sum II (Medium)",description:"Author: @wingkwong, @lonyehan | https://leetcode.com/problems/path-sum-ii/",source:"@site/solutions/0100-0199/0113-path-sum-ii-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/path-sum-ii-medium",permalink:"/leetcode-the-hard-way/solutions/0100-0199/path-sum-ii-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0113-path-sum-ii-medium.md",tags:[{label:"Backtracking",permalink:"/leetcode-the-hard-way/solutions/tags/backtracking"},{label:"Tree",permalink:"/leetcode-the-hard-way/solutions/tags/tree"},{label:"Depth-First Search",permalink:"/leetcode-the-hard-way/solutions/tags/depth-first-search"},{label:"Binary Tree",permalink:"/leetcode-the-hard-way/solutions/tags/binary-tree"}],version:"current",sidebarPosition:113,frontMatter:{description:"Author: @wingkwong, @lonyehan | https://leetcode.com/problems/path-sum-ii/",tags:["Backtracking","Tree","Depth-First Search","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0110 - Balanced Binary Tree (Easy)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/balanced-binary-tree-easy"},next:{title:"0115 - Distinct Subsequences (Hard)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/distinct-subsequences-hard"}},d={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS + Backtracking",id:"approach-1-dfs--backtracking",level:2}],p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},m=p("Tabs"),c=p("TabItem"),f=p("SolutionAuthor"),g={toc:h};function v(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0113---path-sum-ii-medium"},"0113 - Path Sum II (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/path-sum-ii/"},"https://leetcode.com/problems/path-sum-ii/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree and an integer ",(0,i.kt)("inlineCode",{parentName:"p"},"targetSum"),", return ",(0,i.kt)("em",{parentName:"p"},"all ",(0,i.kt)("strong",{parentName:"em"},"root-to-leaf")," paths where the sum of the node values in the path equals"),(0,i.kt)("inlineCode",{parentName:"p"},"targetSum"),(0,i.kt)("em",{parentName:"p"},". Each path should be returned as a list of the node ",(0,i.kt)("strong",{parentName:"em"},"values"),", not node references"),"."),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"root-to-leaf")," path is a path starting from the root and ending at any leaf node. A ",(0,i.kt)("strong",{parentName:"p"},"leaf")," is a node with no children."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22\nOutput: [[5,4,11,2],[5,8,4,5]]\nExplanation: There are two paths whose sum equals targetSum:\n5 + 4 + 11 + 2 = 22\n5 + 8 + 4 + 5 = 22\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: root = [1,2,3], targetSum = 5\nOutput: []\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: root = [1,2], targetSum = 0\nOutput: []\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,i.kt)("inlineCode",{parentName:"li"},"[0, 5000]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-1000 <= Node.val <= 1000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-1000 <= targetSum <= 1000"))),(0,i.kt)("h2",{id:"approach-1-dfs--backtracking"},"Approach 1: DFS + Backtracking"),(0,i.kt)(m,{mdxType:"Tabs"},(0,i.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<vector<int>> ans;\n    \n    // the idea is to use dfs to traverse the tree from all root to leaf paths\n    // `path` is used to store the current route \n    // `remainingSum` is used to store thre remaining sum that we need with the initial value `targetSum`.\n    //  we substract it from the node value when we traverse down the tree\n    // if we arrive the leaf and the the remaining sum is eqaul to leaf node value\n    // then we can add `path` to ans\n    // e.g. path = [5,4,11,2] and remainingSum = targetSum = 22\n    // traverse node 5, remainingSum = 22 - 5 = 17\n    // traverse node 4, remainingSum = 17 - 4 = 13\n    // traverse node 11, remainingSum = 13 - 11 = 2\n    // traverse node 2, remainingSum = 2 - 2 = 0\n    // remainingSum is 0 which means the sum of current path is eqaul to targetSum\n    // so how to find another path?\n    // we can backtrack here\n    // we can pop back a node and try another\n    // e.g. path = [5, 4, 11, 7]\n    // pop 7 out = [5, 4, 11]\n    // push 2 = [5, 4, 11, 2]\n    // ... etc\n    void dfs(TreeNode* node, vector<int>& path, int remainingSum) {\n        // if it is nullptr, then return\n        if (!node) return;\n        // add the current node val to path\n        path.push_back(node-> val);\n        // !node->left && !node->right : check if it is a leaf node\n        // remainingSum == node->val: check if the remaining sum - node->val == 0\n        // if both condition is true, then we find one of the paths\n        if (!node->left && !node->right && remainingSum == node->val) ans.push_back(path);\n        // traverse left sub tree with updated remaining sum\n        // we don't need to check if left sub tree is nullptr or not\n        // as we handle it in the first line of this function\n        dfs(node-> left, path, remainingSum - node-> val);\n        // traverse right sub tree with updated remaining sum\n        // we don't need to check if right sub tree is nullptr or not\n        // as we handle it in the first line of this function\n        dfs(node-> right, path, remainingSum - node-> val);\n        // backtrack \n        path.pop_back();\n    }\n    \n    vector<vector<int>> pathSum(TreeNode* root, int targetSum) {\n        // used to store current route\n        vector<int> path;\n        // dfs from the root\n        dfs(root, path, targetSum);\n        return ans;  \n    }\n};\n"))),(0,i.kt)(c,{value:"py",label:"Python",mdxType:"TabItem"},(0,i.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    # the idea is to use dfs to traverse the tree from all root to leaf paths\n    # `path` is used to store the current route \n    # `remainingSum` is used to store thre remaining sum that we need with the initial value `targetSum`.\n    #  we substract it from the node value when we traverse down the tree\n    # if we arrive the leaf and the the remaining sum is eqaul to leaf node value\n    # then we can add `path` to ans\n    # e.g. path = [5,4,11,2] and remainingSum = targetSum = 22\n    # traverse node 5, remainingSum = 22 - 5 = 17\n    # traverse node 4, remainingSum = 17 - 4 = 13\n    # traverse node 11, remainingSum = 13 - 11 = 2\n    # traverse node 2, remainingSum = 2 - 2 = 0\n    # remainingSum is 0 which means the sum of current path is eqaul to targetSum\n    # so how to find another path?\n    # we can backtrack here\n    # we can pop back a node and try another\n    # e.g. path = [5, 4, 11, 7]\n    # pop 7 out = [5, 4, 11]\n    # push 2 = [5, 4, 11, 2]\n    # ... etc\n    def dfs(self, root, path, ans, remainingSum):\n        # if it is None, then return\n        if not root:\n            return\n        # add the current node val to path\n        path.append(root.val)\n        # !node.left && !node.right : check if it is a leaf node\n        # remainingSum == node.val: check if the remaining sum - node.val == 0\n        # if both condition is true, then we find one of the paths\n        if not root.left and not root.right and remainingSum == root.val:\n            # lists passed a function are just references (i.e. Pass By Reference)\n            # and path.pop() would pop them all eventually\n            # therefore you need to create a new list there\n            # or your can use ans.append(path[:]) / ans.append(path.copy())\n            ans.append(list(path))\n        # traverse left sub tree with updated remaining sum\n        # we don't need to check if left sub tree is nullptr or not\n        # as we handle it in the first line of this function\n        self.dfs(root.left, path, ans, remainingSum - root.val)\n        # traverse right sub tree with updated remaining sum\n        # we don't need to check if right sub tree is nullptr or not\n        # as we handle it in the first line of this function\n        self.dfs(root.right, path, ans, remainingSum - root.val)\n        # backtrack \n        path.pop()\n    \n    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:\n        ans = []\n        self.dfs(root, [], ans, targetSum)\n        return ans\n"))),(0,i.kt)(c,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    List<List<Integer>> ans = new ArrayList<List<Integer>>();\n    // the idea is to use dfs to traverse the tree from all root to leaf paths\n    // `path` is used to store the current route \n    // `remainingSum` is used to store thre remaining sum that we need with the initial value `targetSum`.\n    //  we substract it from the node value when we traverse down the tree\n    // if we arrive the leaf and the the remaining sum is eqaul to leaf node value\n    // then we can add `path` to ans\n    // e.g. path = [5,4,11,2] and remainingSum = targetSum = 22\n    // traverse node 5, remainingSum = 22 - 5 = 17\n    // traverse node 4, remainingSum = 17 - 4 = 13\n    // traverse node 11, remainingSum = 13 - 11 = 2\n    // traverse node 2, remainingSum = 2 - 2 = 0\n    // remainingSum is 0 which means the sum of current path is eqaul to targetSum\n    // so how to find another path?\n    // we can backtrack here\n    // we can pop back a node and try another\n    // e.g. path = [5, 4, 11, 7]\n    // pop 7 out = [5, 4, 11]\n    // push 2 = [5, 4, 11, 2]\n    // ... etc\n    private void dfs(TreeNode node, List<Integer> path, int remainingSum) {\n        // if it is null, then return\n        if (node == null) return;\n        // add the current node val to path\n        path.add(node.val);\n        // !node.left && !node.right : check if it is a leaf node\n        // remainingSum == node.val: check if the remaining sum - node.val == 0\n        // if both condition is true, then we find one of the paths\n        if (node.left == null && node.right == null && remainingSum == node.val) ans.add(new ArrayList<>(path));\n        // traverse left sub tree with updated remaining sum\n        // we don't need to check if left sub tree is nullptr or not\n        // as we handle it in the first line of this function\n        this.dfs(node.left, path, remainingSum - node.val);\n        // traverse right sub tree with updated remaining sum\n        // we don't need to check if right sub tree is nullptr or not\n        // as we handle it in the first line of this function\n        this.dfs(node.right, path, remainingSum - node.val);\n        // backtrack \n        path.remove(path.size() - 1);\n    }\n    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {\n        List<Integer> path = new ArrayList<Integer>();\n        dfs(root, path, targetSum);\n        return ans;\n    }\n}\n\n"))),(0,i.kt)(c,{value:"cs",label:"C#",mdxType:"TabItem"},(0,i.kt)(f,{name:"@lonyehan",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     public int val;\n *     public TreeNode left;\n *     public TreeNode right;\n *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\npublic class Solution {\n    public List<IList<int>> result;\n\n    public void PreOrder(TreeNode root, int targetSum, List<int> list, int sum = 0) {\n        if(root == null) return;\n                \n        sum += root.val;\n        list.Add(root.val);\n    \n        // Is this node is leaf and sum equal to target?\n        if(sum == targetSum && root.left == null && root.right == null) {             \n            result.Add(list);\n        }\n        PreOrder(root.left, targetSum, new List<int>(list), sum);\n        PreOrder(root.right, targetSum, new List<int>(list), sum);\n    }\n\n    public IList<IList<int>> PathSum(TreeNode root, int targetSum) {\n        result = new List<IList<int>>();\n        PreOrder(root, targetSum, new List<int>());\n        return result;\n    }\n}\n")))))}v.isMDXComponent=!0}}]);
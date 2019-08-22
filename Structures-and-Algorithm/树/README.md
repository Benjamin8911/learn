# 树的相关术语
一个树结构包含一系列存在父子关系的节点。每个节点都有一个父节点（除了顶部的第一个节点）以及零个或多个子节点
# 二叉树和二叉搜索树
二叉树中的节点最多只能有两个子节点：一个是左侧子节点，另一个是右侧子节点。这些定
义有助于我们写出更高效的向/从树中插入、查找和删除节点的算法。

二叉搜索树（BST）是二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值，
在右侧节点存储（比父节点）大（或者等于）的值。

键是树相关的术语中对节点的称呼。

## 创建BinarySearchTree类

    function BinarySearchTree()  {
      var Node = function(key) {
        this.key = key
        this.left = null
        this.right = null
      }

      var root = null
    }

下图展现了二叉搜索树数据结构的组织方式：
![avatar](/Structures-and-Algorithm/images/bst.png)

下面是将要在树类中实现的方法。

* insert(key)：向树中插入一个新的键。
* search(key)：在树中查找一个键，如果节点存在，则返回true；如果不存在，则返回false。
* inOrderTraverse：通过中序遍历方式遍历所有节点。
* preOrderTraverse：通过先序遍历方式遍历所有节点。
* postOrderTraverse：通过后序遍历方式遍历所有节点。
* min：返回树中最小的值/键。
* max：返回树中最大的值/键。
* remove(key)：从树中移除某个键。

## 向树中插入一个键

向树插入一个新键的算法的第一部分：

    this.insert = function(key) {
      // 创建新键的Node类实例
      // 向构造函数传入插入树的节点值，它的左右指针值会由构造函数自动设置成null
      var newNode = new Node(key)

      // 判断是否是根节点
      if (root === null) {
        root = newNode
      } else {
        // 如果插入的不是根节点，需要一个私有的辅助函数insertNode。
        // 因此，在调用insertNode方法时要通过参数传入树的根节点和要插入的节点。
        insertNode(root, newNode)
      }
    }

insertNode函数定义如下：

    var insertNode = function(node, newNode) {
      // 如果新节点的键小于当前节点的键，那么需要检查当前节点的左侧子节点。
      if (newNode.key < node.key) {
        // 如果它没有左侧子节点，就在那里插入新的节点。
        if (node.left === null) {
          node.left = newNode
        } else {
          // 如果有左侧子节点，需要通过递归调用insertNode方法继续找到树的下一层。
          // 在这里，下次将要比较的节点将会是当前节点的左侧子节点。
          insertNode(node.left, newNode)
        }
      } else {
        // 如果节点的键比当前节点的键大，同时当前节点没有右侧子节点，就在那里插入新的节点。
        if (node.right === null) {
          node.right = newNode
        } else {
          // 如果有右侧子节点，同样需要递归调用insertNode方法，但是要用来和新节点比较的节点将会是右侧子节点。
          insertNode(node.right, newNode)
        }
      }
    }

---

# 树的遍历
遍历一棵树是指访问树的每个节点并对它们进行某种操作的过程。
访问树的所有节点有三种方式：中序、先序和后序。

## 中序遍历
中序遍历是一种以上行顺序访问BST所有节点的遍历方式，也就是**以从最小到最大的顺序**访问所有节点。

    this.inOrderTraverse = function(callback) {
      inOrderTraverseNode(root, callback)
    }

    var inOrderTraverseNode = function(node, callback) {
      // 检查传入的节点是否是null
      if (node !== null) {
        // 递归调用该函数来访问左侧子节点，直至检测到左侧子节点为null
        inOrderTraverseNode(node.left, callback)
        // 执行回调函数操作当前节点
        callback(node.key)
        // 递归调用该函数来访问右侧子节点，直至检测到右侧子节点为null
        inOrderTraverseNode(node.right, callback)
      }
    }

    function printNode(value) {
      console.log(value)
    }

    tree.inOrderTraverse(printNode)

下面的结果将会在控制台上输出（每个数字将会输出在不同的行）：

3 5 6 7 8 9 10 11 12 13 14 15 18 20 25

补充理解：弄清楚inOrderTraverseNode的执行流程。以该例为例，先执行fn(11)但未执行完，以此类推，直至执行fn(3)，fn(3)内部执行fn(null)->callback(3)->fn(null)，fn(3)执行完毕回到上级fn(5)，这时fn(5)执行到callback(5)->fn(6)，fn(6)内部执行fn(null)->callback(6)->fn(null)，这时fn(5)执行完毕回到fn(7)->callback(7)->fn(9)，fn(9)内部先执行fn(8)->fn(null)->callback(8)->fn(null)，回到fn(9)->callback(9)->fn(10)，fn(10)内部fn(null)->callback(10)->fn(null)，回到fn(11)->callback(11)->fn(15)，以此类推进入右半区的fn执行。

下图描绘了inOrderTraverse方法的访问路径：

![avatar](/Structures-and-Algorithm/images/inOrderTraverse.png)

---

## 先序遍历
先序遍历是以优先于后代节点的顺序访问每个节点的。

先序遍历的一种应用是打印一个结构化的文档。

    this.preOrderTraverse = function(callback) {
      preOrderTraverseNode(root, callback)
    }

    var preOrderTraverseNode = function(node, callback) {
      if (node !== null) {
        callback(node.key)
        preOrderTraverseNode(node.left, callback)
        preOrderTraverseNode(node.right, callback)
      }
    }

下面是控制台上的输出结果（每个数字将会输出在不同的行）：

11 7 5 3 6 9 8 10 15 13 12 14 20 18 25

下图描绘了preOrderTraverse方法的访问路径：

![avatar](/Structures-and-Algorithm/images/preOrderTraverse.png)

## 后序遍历
后序遍历则是先访问节点的后代节点，再访问节点本身。

后序遍历的一种应用是计算一个目录和它的子目录中所有文件所占空间的大小。

    this.postOrderTraverse = function(callback) {
      postOrderTraverseNode(root, callback)
    }

    var postOrderTraverseNode = function(node, callback) {
      if (node !== null) {
        postOrderTraverseNode(node.left, callback)
        postOrderTraverseNode(node.right, callback)
        callback(node.key)
      }
    }

下面是控制台的输出结果（每个数字将会输出在不同行）：

3 6 5 8 10 9 7 12 14 13 18 25 20 15 11

下图描绘了postOrderTraverse方法的访问路径：

![avatar](/Structures-and-Algorithm/images/postOrderTraverse.png)

---

# 搜索树中的值
有三种经常执行的搜索类型：

* 最小值
* 最大值
* 搜索特定的值

## 搜索最小值和最大值

    this.min = function() {
      return minNode(root)
    }

    var minNode = function(node) {
      if (node) {
        while(node && node.left !== null) {
          node = node.left
        }
        return node.key
      }
      return null
    }

    this.max = function() {
      return maxNode(root)
    }

    var maxNode = function(node) {
      if (node) {
        while(node && node.right !== null) {
          node = node.right
        }
        return node.key
      }
      return null
    }

因此，对于寻找最小值，总是沿着树的左边；而对于寻找最大值，总是沿着树的右边。

## 搜索一个特定的值

    this.search = function(key) {
      return searchNode(root, key)
    }

    var searchNode = function(node, key) {
      if (node === null) {
        return false
      }
      if (key < node.key) {
        return searchNode(node.left, key)
      } else if (key > node.key) {
        return searchNode(node.right, key)
      } else {
        return true
      }
    }

## 移除一个节点

    this.remove = function(key) {
      root = removeNode(root, key)
    }

    // removeNode方法的复杂之处在于我们要处理不同的运行场景，当然也包括它同样是通过递归来实现的。

    var removeNode = function(node, key) {
      if (node === null) {
        return null
      }
      if (key < node.key) {
        node.left = removeNode(node.left, key)
        return node
      } else if (key > node.key) {
        node.right = removeNode(node.right, key)
        return node
      } else {
        //第一种情况——一个叶节点
        if (node.left === null && node.right === null) {
          node = null
          return node
        }
        // 第二种情况——一个只有一个子节点的节点
        if (node.left === null) {
          node = node.right
          return node
        } else if (node.right === null) {
          node = node.left
          return node
        }

        //第三种情况——一个有两个子节点的节点
        // 1.当找到需要移除的节点后，需要找到它右边子树中最小的节点
        var aux = findMinNode(node.right)
        // 2.用它右侧子树中最小的节点的键去更新这个节点的值
        node.key = aux.key
        // 3.要继续把右侧子树中的最小节点移除
        node.right = removeNode(node.right, aux.key)
        // 4.向它的父节点返回更新后节点的引用
        return node
      }
    }

图示：

移除一个叶节点

![avatar](/Structures-and-Algorithm/images/noChild.png)

移除有一个左侧或右侧子节点的节点

![avatar](/Structures-and-Algorithm/images/oneChild.png)

移除有两个子节点的的节点

![avatar](/Structures-and-Algorithm/images/haveChildren.png)

---


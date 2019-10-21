# String方法
## chart()
从一个字符串中返回指定的字符
### 语法
    str.chartAt(index)
### 参数

**index**

一个介于0和字符串长度减1之间的整数。如果没有提供索引，chartAt()将使用0。

如果指定的index值超出了该范围，则返回一个空字符串。

---

## concat()
将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。
### 语法
    str.concat(string2, string3[, ..., stringN])
### 参数
**string2...stringN** 和原字符串连接的多个字符串。

concat方法并不影响原字符串。

---

## includes()
用于判断一个字符串是否包含在另一个字符串中，根据情况返回true或false。
### 语法
    str.includes(searchString[, position])
### 参数
**searchString**

要在此字符串中搜索的字符串。

**position**

可选。从当前字符串的哪个索引位置开始搜寻子字符串，默认值为0。

这个方法可以帮你判断一个字符串是否包含另外一个字符串。

includes() 方法是区分大小写的。

---

## indexOf()
方法返回调用它的 String 对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。
### 语法
    str.indexOf(searchValue)
    str.indexOf(searchValue, fromIndex)
### 参数
**searchValue**

一个字符串表示被查找的值。If no string is explicitly provided, searchValue will be coerced to "undefined" and this value will be searched for in the current string.

**fromIndex** *可选* 

表示开始查找的位置。可以是任意整数，默认值为 0。如果 fromIndex 小于 0，则查找整个字符串（等价于传入了 0）。如果 fromIndex 大于等于 str.length，则必返回 -1。

---

## slice()
提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。

### 语法
    str.slice(beginIndex[, endIndex])
### 参数
**beginIndex**

从该索引（以 0 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做 strLength + beginIndex 看待，这里的strLength 是字符串的长度（例如， 如果 beginIndex 是 -3 则看作是：strLength - 3）

**endIndex**

可选。在该索引（以 0 为基数）处结束提取字符串。如果省略该参数，slice() 会一直提取到字符串末尾。如果该参数为负数，则被看作是 strLength + endIndex，这里的 strLength 就是字符串的长度(例如，如果 endIndex 是 -3，则是, strLength - 3)。

### 返回值
返回一个从原字符串中提取出来的新字符串。

---

## split()
使用指定的分隔符字符串将一个String对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。

### 语法
    str.split([separator[, limit]])

### 参数
**separator**

指定表示每个拆分应发生的点的字符串。separator 可以是一个字符串或正则表达式。 如果纯文本分隔符包含多个字符，则必须找到整个字符串来表示分割点。如果在str中省略或不出现分隔符，则返回的数组包含一个由整个字符串组成的元素。如果分隔符为空字符串，则将str原字符串中每个字符的数组形式返回。

**limit**

一个整数，限定返回的分割片段数量。当提供此参数时，split 方法会在指定分隔符的每次出现时分割该字符串，但在限制条目已放入数组时停止。如果在达到指定限制之前达到字符串的末尾，它可能仍然包含少于限制的条目。新数组中不返回剩下的文本。

### 返回值
返回源字符串以分隔符出现位置分隔而成的一个 Array。

---

## substring()

返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。

### 语法

    str.substring(indexStart[, indexEnd])

### 参数

**indexStart**

需要截取的第一个字符的索引，该字符作为返回的字符串的首字母。

**indexEnd**

可选。一个 0 到字符串长度之间的整数，以该数字为索引的字符不包含在截取的字符串内。

**返回值节**

包含给定字符串的指定部分的新字符串。

---

## trim()

从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR）。

### 语法

    str.trim()

### 描述

trim() 方法并不影响原字符串本身，它返回的是一个新的字符串。
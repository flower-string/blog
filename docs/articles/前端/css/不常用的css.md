---
title: 不常用的css
date: 2023-06-24 22:53:41
tags: css
category: 前端
cover: /medias/cover.jpg
---
![cover](https://ak.hycdn.cn/announce/images/20220623/c6de324d90b1963bf1b4664871753d60.jpg)

# 文字相关

## 禁止用户选中文本

```css
user-select: none;
-ms-user-select: none; // 兼容ie
-moz-user-select: none; // 兼容火狐
```

## 文字阴影

```css
;// 发光效果
text-shadow: 0 0 60px #fff; // 四个参数分别为：阴影偏移 模糊半径 阴影颜色

// 双重文字效果
text-shadow: 5px 5px 0 #666;

// 3d文字效果
text-shadow: 0 0 1px #999,
             2px 2px 2px #888,
             4px 4px 2px #777,
             6px 6px 2px #666,
             8px 8px 2px #555,
             10px 10px 2px #333;
```

## 垂直文字

```css
writing-mode: vertical-rl; 
// 这个属性有五个值
// horizontal-tb: 水平方向自上而下
// vertical-rl:   垂直方向自右而做
// sideways-rl:   垂直方向自上而下
// sideways-lr:   垂直方向自下而上
// vertical-lr:   垂直方向由上到下，水平方向从左到右
```

## 文字选中样式

```css
::selection {
  color: #fff;
  background-color: red;
}

-moz::selection { // 兼容火狐
  color: #fff;
  background-color: red;
}
```

## 文字下划线

```css
text-decoration: underline red wavy; // 线条位置 线条颜色 线条形状
```

# 边框图像

```css
border: 1px solid transparent; // 要使用border-iamge的前提是有一个完整的border属性
border-image: url(../abc.png), 30 40, stretch;
// 第一个参数表示图片路径，
// 第二个参数为上下的边框大小和左右的边框大小，和边距的数字类似
// 第三个参数表示拉伸图片
```

# 瀑布流

```css
column-count: 4; // 瀑布流的列数 
column-gap: 20px; // 列之间的间距
```

# 网站去色

```css
html {
  filter: grayscale(50%); // 灰度滤镜
}
```

# 列布局

```css
columns: 3 // 列数
columns-rule: 1px solid white// 列之间的分割线条
```

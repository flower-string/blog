---
title: div画图
date: 2023-06-25 16:24:34
tags: css
category: 前端
cover: /medias/div作图.png
---
# 山

```css
div {
  width: 400px;
  height: 400px;
  background-color: #fff1c1;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

div::before {
  content: '';
  position: absolute;
  top: 60px;
  left: 80px;
  width: 80px;
  aspect-ratio: 1;
  background-color: #fe5f55;
  border-radius: 50%;
}

div::after {
  content: "";
  position: absolute;
  top: 180px;
  left: 140px;
  width: 300px;
  /* aspect-ratio可以设定元素的宽高比，如果宽度变化，高度将会自动变化 */
  aspect-ratio: 1;
  color: #fe5f55;
  background-color: currentColor;
  box-shadow: -100px 240px;
  transform: rotate(45deg);
}
```

# 铅笔

~~~css
div {
      width: 120px;
      height: 240px;
      background: 
        linear-gradient(#e53466 70%,
        #d8d8d8 70%) no-repeat,
        linear-gradient(to right,
        #f06a35 33.3%,
        #f68c30 33.3%,
        #f68c30 66.6%,
        #ffa927 66.6%);
      background-size: 100% 30%, 100% 70%;
      border-radius: 30px 30px 0 0;
      position: relative;
      transform: rotate(30deg);
    }

    div::before {
      content: '';
      width: 120px;
      height: 20px;
      position: absolute;
      bottom: 0;
      /* 径向渐变，以20，20为圆心 */
      background: radial-gradient(circle at 20px 20px, #f4c09b 20px, transparent 0);
      background-size: 40px 20px;
    }
    div::after {
      content: "";
      width: 120px;
      height: 110px;
      /* 线性渐变，第二个参数为渐变范围 */
      background: linear-gradient(#f4c09b 70%, #5e381f 70%);
      position: absolute;
      bottom: -110px;
      /* 裁剪属性，类似于蒙版 */
      /* polygon()函数创建一个三角形的裁剪，指定三个顶点来绘制三角形
         还有其他的形状函数例如circle()、ellipse()、inset() */
      clip-path: polygon(0 0, 100% 0, 50% 100%);
    }
~~~

# 云

~~~css
div {
      width: 100px;
      height: 100px;
      color: #fff;
      /* currentColor 指代当前的文本颜色 */
      background-color: currentColor;
      border-radius: 50%;
      /* 设置几组不同的阴影 */
      /* box-shadow属性可以设置盒子的阴影，每个阴影都由一组参数来定义，包括阴影位置、模糊半径、扩张半径和颜色。 */
      box-shadow: 50px 0, 100px 0, 150px 0, 50px -40px, 110px -30px;
    }
~~~


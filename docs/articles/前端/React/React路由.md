---
title: React路由
---
## 介绍

在vue中学习过：

> 在单页面应用程序中，所有的内容都存放在一个页面中，需要一套机制来管理这些内容，这个机制就是路由。

前端路由就是根据路径的变化，控制页面展示内容的变化。
在React中的表现就是路径和组件的对应关系

==注意这是react-router@5的内容，跟@6有很多不同之处==

关于react-router@6这个教程很详细
[用一个案例讲解react-router@6](https://cloud.tencent.com/developer/article/1965740)

## 基本使用

### 使用步骤

1. 安装

```javascript
cnpm i react-router-dom
```

2. 导入三个核心组件

```javascript
import {BrowserRouter as Router , Route , link} from 'react-router-dom'
// 习惯上将BrowserRouter重命名为Router
```

3. 使用Router包裹整个应用
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/60b36019d17f40d5b07553af69b849f8.png)
4. 使用Link作为导航菜单，to属性指定路径

```javascript
<Link to='/first'>页面一</Link>
```

5. Route配置路由规则和要展示的组件，这是组件展示的位置，起到占位的功能

```javascript
<Route path='/first' component={First}></Route>
```

### 常用组件说明

+ Router组件：被它包裹的内容才能实现路由的功能，所以需要用它包裹整个应用，一般只需要使用一次。
  Rouer组件有两种，hash模式和browser模式，一般都是用browser模式，因为hash模式的路径中会包含 *#* ，不好看
+ Link组件：最终会被编译成a标签，定义导航链接，使用to属性指定路径
+ Route组件：Route组件用来占位和指定路由匹配关系

## 执行过程

1. 点击Link后修改导航栏中的url
2. React路由监听到url的变化
3. 遍历Route组件的path属性
4. 如果path属性能找到对应的url找到相匹配的则展示该组件

## 编程式导航

> 其实就是通过代码来实现路由的跳转，通过react提供的histroy来实现

```javascript
class Login extends React.Component {
  handleClick = () => {
	this.props.histroy.push('/home')
  }
}
```

这个history可以理解为vue的路由和浏览器原生history对象的结合，拥有下面的方法

+ push(path:String)
+ go(n:Number)

## 默认路由

默认路由的path为一条斜线

```javascript
<Route path='/' conponent={Home}></Route>
```

路由重定向：跟Route组件写在一块

```javascript
<Redirect from='/' to='/home'/>
```

## 匹配模式

### 模糊匹配

默认状态下React是模糊匹配模式
只要path属性和url的开头一样（一部分相同）就可以匹配到
其实vue也是这种模式，只不过之前用嵌套路由感觉理所当然了
我觉得这个模式就是为了添加子路由
![在这里插入图片描述](https://img-blog.csdnimg.cn/6b454b4ed6e144a59702e03b1b4cfb79.png)

### 精确匹配

为Route组件添加 `exact`属性就会变为精确匹配模式
这是url和path属性必须完全相同才行

## @5和@6的对比

1. Route组件
   `component`属性改为 `element`属性

```javascript
<Route path="/about" element={<About />} />
```

2. Routes组件
   新增了Routes组件用来包裹Route组件，代替Route作为占位符的作用

```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

3. useLocation钩子函数

```javascript
import { useLocation } from 'react-router-dom'

const About = () => {
  // 使用 hook
  const location = useLocation();
  const { from, pathname } = location

  return <div>这里是卡拉云的网站，你当前在 {pathname}，你是从 {from} 跳转过来的</div>
}
```

4. 404页面设置
   只要在最后加入 `path` 为 `*` 的一个路径，意为匹配所有路径

```javascript
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
```

5. NavLink
   `<NavLink>` 是特殊类型的 `<Link>`， 可以记录 "active" 状态。
   `<NavLink>`激活时，会加上类名active

## 嵌套路由

当路由被嵌套时，一般认为网页的某一部分保持不变，只有网页的子部分发生变化。

1. 从 react-router-dom 库中导入 Outlet，这个标签用于渲染任意匹配的子集
2. 在父组件中加入Outlet，用于占位

```javascript
function Posts() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      {/* 渲染任何匹配的子级 */}
      <Outlet />
    </div>
  );
}
```

3. 书写嵌套路由，直接嵌套即可，子路由的path会直接拼接在父路由的path之后

```javascript
<Routes>
  {/* 其余代码保持不变 */}
  <Route path="posts" element={<Posts />}>
    <Route path="/" element={<PostLists />} />
  </Route>
</Routes>
```

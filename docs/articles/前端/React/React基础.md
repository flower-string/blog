---
title: React基础
---
## 概述

### 概念

> react是一个js库，与vue齐名。
> vue重心在增强了html，react重心在增强的js。
> react的语法更贴近js，所以需要学好js才能学好react。
> 在这里先开个头，之后去系统学习js。

### 特点

+ 与vue一样，react是基于组件的（倒不如说是vue学习react）。
+ react也是声明式编程。
+ react的核心可以多出运用。

### 基本使用

1. 使用npm下载react**核心包**和**DOM包**。

```shell
npm i react react-dom
```

2. 在html中引入这两个包。
3. 使用 **React.createElement()** 创建react元素

> 这个函数接受3个及以上参数,返回一个react元素.
>
> + 第一个参数是要创建的标签名。
> + 第二个参数是标签的属性。
> + 第三个及以后的参数是元素的子节点。

4. 使用**ReactDOM.createroot()** 创建根节点

> 这个函数接受一个DOM元素,将其转化为一个React元素并返回。

5. 通过root的React元素调用**render** 函数来渲染第三步创建出的元素。

```javascript
const title = React.createElement(
          'h1',
          {title : 'h1' , id : 'hello'}, 
          "hello react!!!",
          React.createElement('span' , null , '我是span')
        );
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(title);
```

### 脚手架

#### 指令

通过指令来创建react项目，与vue不同，完全没有配置的余地，倒是也省事。

```javascript
npx create-react-app <name>
```

#### npx

**npx**是npm下的一个包，高版本的node会直接内置。
npx可以在不安装脚手架的情况下使用脚手架。

## jsx

### 概念

jsx全称JavaScript XML，是react提出的js增强语法，也提出了jsx的文件类型，可以直接在js文件中书写jsx代码。
在脚手架中配置有babel，而babel中有jsx的处理程序，所以可以放心使用。
jsx可以更加清楚地描述页面的结构，看起来就像html代码一样。

### jsx 的注意点

1. react元素采用驼峰命名法。
2. react元素的一些属性名与html元素不同

   > + class  -> 	className
   > + for   ->		htmlFor
   > + tabindex ->  tabIndex
   >
3. react元素如果没有子节点可以写成单标签
4. 推荐使用小括号来包裹jsx的标签

### 在jsx中使用js

不像vue中有各种各样的指令，react只有一种**插值表达式**。
与vue 的插值表达式基本相同，但是它是一对大括号而不是两对。

jsx的使用有一些注意点：

+ 不能出现控制语句
+ 不能书写对象
+ jsx本身也是js表达式

### 条件渲染

jsx的条件渲染有多种方式，但都是通过原生js

#### if-else语句

通过控制条件来返回不同的jsx块

```javascript
const dogAreYou = () => {
  if(flag){
    return (<div>我是neko 的 狗</div>);
  }
  return (<div>拿来的野猫呀</div>)
};
```

#### 三元表达式

```javascript
const is = flag ? (<div>我是neko 的 狗</div>) : (<div>拿来的野猫呀</div>)
```

#### 与运算符

与运算符利用的是短路，与上面两种不太一样，他只能控制一个块是否渲染。

```javascript
flag && return (<div>我是neko 的 狗</div>);
```

### 列表渲染

#### map

react要求使用**map**来遍历数组实现列表渲染。

```javascript
const girls = [
  {id: 1 , name: 'neko'},
  {id: 2 , name: '蜜莓'},
  {id: 3 , name: '砂糖'}
]

const list = (
    <ul>
      {girls.map(item => <li key={item.id}> {item.name} </li>)}
    </ul>
)
```

#### key

在上面的代码中我给每个**li**都绑定了**key**值。
原因和注意点与vue中相同，与**diff算法**有关。

### 样式绑定

#### 行内样式

简单写一下，行内的样式要用大驼峰。

```javascript
const list = (
    <ul>
      {girls.map(item => <li key={item.id} style={{
      backgroundColor : 'pink', 
      listStyle : 'none'}}
      > 
      {item.name} 
      </li>)}
    </ul>
)
```

这么写挺乱的，可以把样式单独提出来。

```javascript
const listStyle = {backgroundColor : 'pink' , listStyle : 'none'};
const list = (
    <ul>
      {girls.map(item => <li key={item.id} style={listStyle}> {item.name} </li>)}
    </ul>
)
```

#### 类名绑定

通过为元素绑定类名，然后引入单独的css文件。

> 虽然说推荐这种写法，但目前我更喜欢上面这种，一个文件能解决的问题为什么要再加一个独立的文件，管理起来不麻烦吗？？？？

## 组件基础

开头就说了，组件是react最重要的部分。
跟vue的组件思想一样，但vue开创了单独的vue文件，react则是通过**函数**和**类**，实现了**组件**。

### 组件类型

#### 函数组件

函数组件就是用函数的方式来写。

```javascript
Click = function () {
  function say() {
    alert("点到了")
  }
  return (<button onClick={say}>点我</button>)
}
```

**函数组件**的**约定**：（必须遵守）

+ 函数名必须以大写字母开头。
+ 函数必须有返回值，表示组件结构。
+ 可以返回null表示不渲染内容。

#### 类组件

通过js的类来实现组件
写法如下：

```javascript
class Click extends React.Component{
  say(){
    alert("点到了");
  }
  render() {
    return (<button onClick={this.say}>点我</button>)
  }
}
```

**类组件**的约定：

+ 类名必须大写字母开头
+ 类组件应该继承react组件父类
+ 类组件必须提供render方法
+ render方法必须有返回值

#### 独立组件文件

讲组件单独抽离到一个文件中可以实现复用。
按照下面的步骤定义组件文件。

> 1. 引入react
> 2. 定义组件
> 3. 导出组件

### 事件处理

#### 事件绑定

与原生js 的事件绑定方法相同。
只不过事件名都前缀on并且改为大驼峰命名法。

```javascript
(<button onClick={say}>点我</button>)
```

#### 事件对象

与原生的js相同，在事件函数定义是接受的参数就是事件对象。
不同的是react做了处理，变为**合成事件对象**，不用再考虑浏览器的兼容问题。

### 状态

#### 概念

状态就是组件的数据，跟vue中的data一样。

只有类组件有状态，因此叫做**状态组件**，函数组件又被称为**无状态组件**。

所有函数组件和类组件的作用有所不同，函数组件定义死的页面，类组件用来定义需要更新的组件。

#### state

react中的**state**  就是 vue中的data。
初始化state要依靠类中的**constructor构造器函数**。

```javascript
constructor() {
    super();
    this.state = {
      number: 1
    }
  }
```

也可以使用简写，将state抽出来，不影响构造器函数使用

```javascript
tate = {
    number: 10
  }
// constructor 不写也没问题
  constructor() {
    super();
  }
```

要获取state中的值使用**this.state** 的方式

```javascript
<h1>当前数字：{this.state.number}</h1>
```

要修改state中的值，使用setState函数，不能直接修改（突然觉得vue好方便）。

```javascript
this.setState({
      number: this.state.number + 1   
      //setState接受一个对象，然后将他和原来的state合并。 
  })
```

#### setState分离

setState的分离进单独的函数之后会出现**this**的指向问题，有三种解决方案。

1. 嵌套箭头函数

```javascript
<button onClick={() => (this.add)}>+1</button>
```

2. bind

```javascript
  constructor() {
    super();
    this.add = this.add.bind(this);
  }
```

3. 定义箭头函数

```javascript
 add = () => {
    // console.log('事件处理程序中的this',this);
    this.setState({
      number: this.state.number + 1
    })}
```

### 表单

将表单中的value值和state中的数据绑定，
表单值受到react控制的表单组件称为**受控组件**。

#### 受控组件

要做到双向数据绑定，没有像vue中那样的指令，需要自己手写。

1. 文本框

```javascript
state = {
	txt: '',
}

<input type="text" value="this.state.txt" onChange={
	(e) => this.setState({txt: e.target.value})}>
```

2. 下拉框

```javascript
state = {
	girl: '蜜莓',
}

<section value={this.state.city} onChange={(e) => {
	this.setState({girl : e.target.value})
}}>
	<option value='mm'>蜜莓</option>
	<option value='st'>砂糖</option>
	<option value='neko'>neko</option>
</section>
```

3. 复选框

```javascript
state = {
	is: flase,
}

<input type="checkbox" checked="this.state.is" onChange={
	(e) => this.setState({is: e.target.checked})}>
```

#### 事件处理程序的统一

1. 为表单元素增加name属性，属性名与绑定的state名称相同
2. 通过各种原生表达式，获得表达组件的值。
3. 在事件处理程序中通过修改name来state

```javascript
state = {
	txt: '',
}

<input 
	type="text" 
	name='txt'
	value="this.state.txt" 
	onChange={
	(e) => {
		const value = e.target.type === 'checkbox' 
		? e.target.checked
		: e.target.value;

		const name = e.target.name;

		this.setState({[name]: value});
}}>
```

#### 非受控组件

不推荐这种方式，react不希望我们来操作DOM。

1. 在构造器中调用React.createRef创建**ref对象**

```javascript
constructor(){
	super();
	this.Ref = React.createRef();
}
```

2. 将创建好的ref对象添加到文本框中

```javascript
<input type='text' ref={this.Ref}>
```

3. 通过ref获取文本框的值

```javascript
this.Ref.current.value
```

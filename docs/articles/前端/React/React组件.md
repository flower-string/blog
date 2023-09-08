---
title: React组件
---
## 组件通讯

多个组件之间进行数据共享就叫做组件通讯。
组件通讯通过props和context来实现。

### props

#### 基本使用

props是用于接受外部传递给组件的数据。

props是通过给标签添加属性的方式来床底数据。
在函数组件中通过props参数接受，类组件中通过this.props来接收，props是一个对象。

#### 特点

+ 可以传递任意类型的数据（基本类型、引用类型、jsx），默认会传递字符串，非字符串要用插值表达式包裹。
+ props的属性是只读的
+ 使用类组件时如果使用了构造器函数，应该把props传递给super()，否则无法获取到props

#### 批量传值

在babel和react的帮助下可以使用扩展运算符解构对象。

```javascript
const o = {name: 'neko' , age: 14}
<APP {...o}></App>
```

#### 深入

##### children属性

+ 在使用标签时如果标签内有子节点，props就是自动获得children属性，属性的内柔就是子节点的内容，
+ children属性和props一样都可以传入任意数据类型（基本类型，引用类型，jsx），它是一个数组

##### props的校验

> React允许在创建组件时指定props属性的类型和格式，可以在传入的数据格式错误时抛出错误信息。

1. 使用步骤：

> 1. 安装prop-types包
>    `cnpm i props-types`
> 2. 导入对应的包
>    `import PropTypes from 'prop-types'`
> 3. 使用组件名.PropTypes来添加校验规则
>    `App.PropTypes =  {colors: PropTypes.array}`

2. 常见类型：

> array bool func number object string symbol

3. 必填项

> 在设置属性后再添加一项isRequired属性设置为必填项

```javascript
getArc: PropTypes.func.isRequired
```

4. 指定特定结构的对象

```javascript
option: PropTypes.shape({
	color: PropTypes.string,
	fontSize: PropTypes.number
})
```

##### 默认值

```javascript
组件名.defaultProps = {
	pageSize: 10
}
```

##### 简写

可以直接在类组件中添加**static**修饰的属性

```javascript
class App extends React.Component{
    static propTypes = {}
	static defaultProps = {}
}
```

### 通信类型

#### 父传子

1. 父组件提供数据
2. 在子组件标签中添加属性来传值
3. 子组件内部通过props来接收

#### 子传父

1. 父组件提供回调函数
2. 将回调函数作为属性传递给子组件
3. 子组件通过props接受回调函数
4. 子组件定义函数作为父组件回调函数的参数调用
5. 将要传递的数值作为子组件函数的参数传入

#### 兄弟组件

1. 将共享的状态提升到最近的公共父组件中，称为状态提升。
2. 父组件提供共享的状态和操作状态的方法。
3. 子组件通过props接收状态和操作方法（按照子传父和父传子的方式）

### context

> 如果父子的嵌套层次很深，可以通过context跨层次传递。

1. 使用React.createContext()来创建提供数据(Provider)和使用数据(Consumer)的两个组件。

```javascript
const { Provider , Consumer } = 
React.createContext();
```

2. 使用Provider组件来包裹我们自定义的组件。

```javascript
<Provider>
	<div></div>
</Provider>
```

3. 设置value属性设置要传递的数据。

```javascript
<Provider value='pink'>
	<div></div>
</Provider>
```

4. 通过Consumer组件接受值

```javascript
<Consumer>
	(data) => <span>这里是数据:{data}</span>
</Consumer>
```

## REF

ref相当于原生的Dom中的id，会被react收集起来，用于获取真实的DOM对象

### 字符串写法

==在react18中已经弃用，不建议使用==

```javascript
// 定义
<input ref='input1'/>
// 获取
this.refs.input
```

至于弃用的原因，官网大概是这么个意思

> 这样会降低组件的可读性，也会影响性能
>
> 也会增加耦合性

### 回调形式

```javascript
<input ref={ (a) => this.input1 = a }/>
// a就是当前的DOM，赋值给this.input1,这样相当于架空了refs
```

在更新组件时，**内联**的函数会被执行**两次**

采用外部函数可以解决这个问题

```javascript
<input ref={ c => this.saveInfo }/>
  
saveInfo = (c) => {
    this.input1 = c;
    console.log(c);
}
```

这样就**再也不会**重新调用，但这个情况是无关紧要的，直接写内联就可以，影响可以直接忽略。

### createRef

```javascript
myRef = React.createRef(); // 创建一个用于存储DOM的ref容器

<input ref={this.myRef}>
// 打印myRef可以得到一个对象 ； {current : input} , 这个input就是ref存储的DOM
```

## 生命周期

只有类组件才有生命周期。
![生命周期图](https://img-blog.csdnimg.cn/7abf4b54560a45c7a1c5ea013b6ee5d2.png)

## 组件复用

> 组件的复用其实就是复用state和setState，有renderprops和高阶组件两种模式来实现复用。

### render props模式

#### 思路

> 思路：将state和操作state的方法封装到组件中。

添加一个函数作为props，用这个函数来将组件内部的值公开，通过这个函数的返回值来渲染UI

#### 代码实现

![在这里插入图片描述](https://img-blog.csdnimg.cn/171c934b26654c52890ec6d95194d7c9.png)

#### 复用

刚才是显示鼠标的坐标，这个组件还可以在鼠标位置显示图片充当特殊指针
这种方式可以实现逻辑的复用，但不能复用UI

不用修改组件，直接重写UI就可以
![在这里插入图片描述](https://img-blog.csdnimg.cn/2a3c9b76962448179c3ec3a84ce56674.png)

#### children属性

这样写可读性更强
![在这里插入图片描述](https://img-blog.csdnimg.cn/5eab27b6ead44296ab7c61abf96a5982.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/ef619bcaea204068a518f02f26f06fc5.png)

#### 最终优化

1. 添加检验：类型和必选项

```javascript
App.propTypes = {
	children: PropTypes.func.isRequired
}
```

2. 解除事件

```javascript
  // 卸载组件时解除事件
  componentWillUnmount(){
    window.removeEventListener('mousemove',this.changeMouse)
  }
```

### 高阶组件模式

#### 思路

高阶组件（HOC）实际上是一个函数，接收一个组件，返回一个增强后的组件。
函数内部提供一个类组件，这个类组件提供可以复用的逻辑代码，通过props将其传递给传入函数的组件。

#### 使用步骤

1. 创建with开头的函数。
2. 指定函数参数（大写字母开头，作为要渲染的组件，这个组件提供Ui结构）。
3. 函数内部创建类组件，提供可以复用的逻辑代码。
4. 在类组件中渲染参数组件，同时将状态通过props传递给参数组件。
5. 返回类组件，这样就有了一个同时包含UI和逻辑代码的组件。

```javascript
// 高阶组件函数
function withMouse (Com) {
  class App extends React.Component {
    state = {
      x: 0,
      y: 0 
    }
    // 鼠标事件
    changeMouse = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    // 在生命周期中绑定事件
    componentDidMount(){
      window.addEventListener('mousemove',this.changeMouse)
    }
    // 卸载组件时解除事件
    componentWillUnmount(){
      window.removeEventListener('mousemove',this.changeMouse)
    }
    // render
    render(){
      return (<Com {...this.state}></Com>);
    }
  }
  return App;
}
// 函数组件
const Mouse = props => (
    <h1>
      <div>x: {props.x}</div>
      <div>y: {props.y}</div>
    </h1>
  )
// 调用高阶组件函数
const StrongMouse = withMouse(Mouse)
```

#### displayName

被高阶组件包装的组件在devtools中会显示原始的组件名（高阶组件函数return时的名称），不利于调试。

```javascript
// 高阶组件函数
function withMouse (Com) {
  class App extends React.Component {
    state = {
      x: 0,
      y: 0 
    }
    // 鼠标事件
    changeMouse = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    // 在生命周期中绑定事件
    componentDidMount(){
      window.addEventListener('mousemove',this.changeMouse)
    }
    // 卸载组件时解除事件
    componentWillUnmount(){
      window.removeEventListener('mousemove',this.changeMouse)
    }
    // render
    render(){
      return (<Com {...this.state}></Com>);
    }
  }

  // 设置displayName
  App.displayName = `WithApp${getDiaplayName(Com)}`
  return App;
}

// 设置displayName的辅助函数，通用
function getDisplayName (Com) {
  return Com.displayName || Com.Name || 'Component'
}
```

#### props传递

上面的代码中，在高阶组件函数的返回值上直接添加属性是加不上去的，因为这个时候props已经丢失了

需要在渲染组件时，将state和props一起传递下去

```javascript
// 高阶组件函数，最终版本，新增加了props传递
function withMouse (Com) {
  class App extends React.Component {
    state = {
      x: 0,
      y: 0 
    }
    // 鼠标事件
    changeMouse = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    // 在生命周期中绑定事件
    componentDidMount(){
      window.addEventListener('mousemove',this.changeMouse)
    }
    // 卸载组件时解除事件
    componentWillUnmount(){
      window.removeEventListener('mousemove',this.changeMouse)
    }
    // render
    render(){
      return (<Com {...this.state} {...this.props}></Com>);
    }
  }
```

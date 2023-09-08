---
title: React简单原理
---
## setState

### 异步执行

+ setState是**异步**更新数据的，这一点一定要注意！！！
+ 所以setState后面的代码不能使用更新后的state。
+ setState可以多次调用，但只会触发一次render（提高性能）

### 推荐语法

传入一个回调函数，回调函数返回对象作为要更新的状态。
这个函数接收两个参数，最新的state和最新的props（这两个参数是动态的，函数处于异步队列中时也会更新）
这样写的话，多次调用可以实现状态的多次更新。

```javascript
setState((state,props) => {
	return {count: state.count + 1}
})
// 依然具有异步性
console.log(this.state.count) // 1
```

可是可是，为什么不用await呢，回调函数看着不奇怪吗（非官方，纯属个人想法）

### 回调函数

setState可以接收一个函数作为第二个参数，作为在状态更新之后执行的回调函数。

```javascript
sum = () => {
    // count 初始值为 0
    this.setState((state,props) => {
      return {count: state.count + 1}
    }, () => {console.log(this.state.count)}) // 2
    this.setState((state,props) => {
      return {count: state.count + 1}
    }, () => {console.log(this.state.count)}) // 2
  }
```

写回调函数的时候注意不要直接写语句，一定要嵌套一层函数。

## JSX转化过程

JSX只是React.createElement()的语法糖
JSX会被babel编译成React.createElement()
React.createElement()又会被编译为React元素（一个特殊的JS对象）
![在这里插入图片描述](https://img-blog.csdnimg.cn/1f076391b593455aba30dc2bb1ca167a.png)

## 组件更新机制

在组件状态更新后会更新当前组件及其子组件（所有后代组件）
![在这里插入图片描述](https://img-blog.csdnimg.cn/f222130b4968433cb575806f492c1b33.png)
在兄弟组件公用状态或者子传父时要注意

## 组件性能优化

### 减轻state

只存储跟组件渲染相关的东西

例如：列表数据、计数器等
其他的数据直接放在this中

### 避免不必要的渲染

当父组件更新时子组件也会跟着更新，即使子组件没有任何变化。

解决方法：使用钩子函数 ``shouldComponentUpDate(nextProps,nextState)``
这个函数在组件重新渲染之前执行。
接收两个参数，获取最新的props和state。
在函数内部通过this.state和this.props可以获得更新前的状态
返回值为true是重新渲染，否则不进行渲染。
![在这里插入图片描述](https://img-blog.csdnimg.cn/343416b1bb4f4c13905debace59d28d7.png)

### 纯组件

纯组件和一般组件的区别在于纯组件内部会自动实现组件渲染的钩子函数。
纯组件内部通过分别比较state和props来决定是否重新渲染组件。

```javascript
class App extends React.PureComponent{

}
```

但其内部使用的是浅层对比（对于引用类型只比较地址）
修改引用类型时要利用扩展运算符**创建新的数据**。

```javascript
this.setState({
	obj: {...this.state.obj , number: 2}
	// 操作数组时也要使用生成新数组的方法，不要直接操作数组
	list: {...this.state.list , 3}
})
```

## 虚拟DOM和diff算法

> React的更新思想是：只要state变化就重新渲染组件
> React在更新时只更新变化的地方，做到部分更新
> 依靠虚拟DOM和diff算法实现部分更新

虚拟DOM就是一个js对象，其实就是React元素组成的数形对象，通过render函数生成

1. 初次渲染时根据state生成一个虚拟DOM树
2. 根据虚拟DOM树生成浏览器中的真实DOM树
3. 数据发生变化后生成新的虚拟DOM树
4. 与上一次生成的虚拟DOM树使用diff算法对比得到需要更新的内容
5. 只将变化的内容渲染到DOM中
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/8fc506a73d5b4ee5aeb36e46456c16ba.png)

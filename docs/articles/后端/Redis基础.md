---
title: Redis基础
cover: /medias/cover.jpg
date: 2023-07-05 12:27:09
tags: Redis
category: 数据库
---

## 数据库介绍

数据库分为两大类，关系型数据库和非关系型数据库（Not only SQL）。

mysql是典型的关系型数据库，Redis则是非关系型数据库。

> 一般的机器，使用mysql进行操作时，一秒钟最多能处理2000-4000条sql语句。
>
> 而Redis一秒钟最多能处理十几万条语句，当大量的请求同时出现时，就需要使用redis，因为Redis是操作内存的，比mysql的io读取要快得多。





非关系型数据库可以分为4类

| 类型   | 典型代表 | 特点                 |
| ------ | -------- | -------------------- |
| 键值型 | Redis    | 查找速度快           |
| 列存储 | HBase    | 查找速度快，扩展性强 |
| 文档型 | MongoDB  | 可变性强             |
| 图型   | Neo4J    | 利用图结构存储       |



## 基本介绍

Redis是一个以键值对形式来存储数据的数据库，他将数据存储在内存之中，并且是单线程操作。

提到缓存的时候，首选就是Redis。它的定位就是利用缓存提高数据读写速度，减轻数据库的压力。



Redis安装完成后会在后台开启一个开机自启动的服务redis-server，默认使用6379端口。

Redis的图形界面客户端推荐使用[redis-desktop-client](https://gitee.com/RedisDesktopClient/redis-desktop-client/releases/tag/1.3.2)， 这是使用vue编写的一个redis管理软件。

![image-20230705173421421](E:\Web前端\Project\blog\source\medias\image-20230705173421421.png)

## 数据类型

Redis常用的数据类型有五种：String、Hash、List、Set、zSet

### String

字符串型，包括字符串和数字

### Hash

哈希型存储的是对象

### List

列表型存储的是一个双向队列

### Set

集合型存储的为无序的集合

### zSet

有序集合要求每一个值都带有一个代表权重的浮点数




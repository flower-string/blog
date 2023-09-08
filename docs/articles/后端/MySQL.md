# MySQL

## SQL语句

## 函数

### 字符串函数

- concat

  字符串拼接
  
- lower

  全部转为小写
  
- upper

  全部转为大写
  
- lpad

  左侧填充
  
  目标字符串
  填充位数
  填充内容
  
- rpad

  右侧填充
  
- trim

  去除两端空格
  
- substring

  字符串截取
  
### 数值函数

- ceil(x)

  向上取整
  
- floor(x)

  向下取整
  
- mod(x, y)

  取模运算
  
- rand()

  取得0-1之前的随机数
  
- round(x, y)

  四舍五入，保留y位小数
  
### 日期函数

- curdate()

  返回当前日期
  
- curtime()

  返回当前时间
  
- now()

  返回当前日期时间
  
- year(date)
- month(date)
- day(date)
- date_add(date, INTERVAL value width)

  增加时间
  
- datediff(date1, date2)

  获取时间差值
  
### 流程函数

- if(value, t, f)

  value为真，返回t，否则返回f
  
- ifnull(value1, value2)

  如果value1不为空，返回value1，否则返回value2
  
- case when value1 then res1 ... else default end

  当when后的条件为真，返回对应的then之后的结果，若所有的when都不满足则返回default
  
## 约束

### 概述

约束是作用于表中字段上的规则，用于限制存储在表中的数据，目的是保证数据库中数据的正确、有效和完整。

约束是作用于表中的字段的，可以在添加和修改表的时候设置。

主要分为下面几种约束：

| 约束类型 | 说明                                     | 关键字      |
| -------- | ---------------------------------------- | ----------- |
| 非空约束 | 字段的数据不能为空                       | NOT NULL    |
| 唯一约束 | 字段的数据不能重复                       | UNIQUE      |
| 默认约束 | 保存数据时未指定数据，则采用默认值       | DEFAULT     |
| 检查约束 | 保证字段满足某一条件                     | CHECK       |
| 主键约束 | 主键是一行数据的唯一标识，要求非空且唯一 | PRIMARY KEY |
| 外键约束 | 让两张表之间建立连接                     | FOREIGN KEY |

## 多表查询

## 事务


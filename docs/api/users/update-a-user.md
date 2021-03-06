# 更新一位用户信息

校验规则：

1. 用户已登录
2. 用户有权访问
3. 用户名不能被占用
4. 手机号可空但不能重复(TBD)
5. 最大长度校验(TBD)
   1. 用户名最大长度为 60
   2. 密码最大长度为 60
   3. 昵称最大长度为 60
   4. 手机号最大长度为 11

```text
PUT /users/{userId}
```

## Parameters

| Name                    | Type     | Description                    |
| ----------------------- | -------- | ------------------------------ |
| `Authorization`(header) | `string` | **Required**. 登录用户的 token |
| `userId`(path)          | `string` | **Required**. 用户标识         |
| `username`(body)        | `string` | **Required**. 用户名           |
| `nickname`(body)        | `string` | 昵称                           |
| `sex`(body)             | `string` | 性别                           |
| `phoneNumber`(body)     | `string` | 手机号码                       |
| `deptId`(body)          | `string` | 部门标识                       |

注意：更新用户信息时不能修改 `password`。

## Response

用户未登录

```text
Status: 401 UNAUTHORIZED
```

用户无权访问

```text
Status: 403 FORBIDDEN
```

校验未通过

```text
Status: 422 Unprocessable Entity
```

```json
{
    "errors": {
        "username": ["${filedErrorMessage}"],
        "password": ["${filedErrorMessage}"]
    }
}
```

`filedErrorMessage` 的值为：

1. 用户名能为空时返回 `请输入用户名！`
2. 用户名已被占用时返回 `<strong>{username}</strong>已被占用！`（注意当与原用户名相同时不提示）
3. 密码为空时返回 `请输入密码！`

更新成功

```text
Status: 200 OK
```

返回一个 JSON 对象，其中包括用户信息

| Name               | Type      | Description      |
| ------------------ | --------- | ---------------- |
| `id`               | `string`  | 用户标识         |
| `username`         | `string`  | 用户名           |
| `nickname`         | `string`  | 昵称             |
| `sex`              | `string`  | 性别             |
| `phoneNumber`      | `string`  | 手机号码         |
| `admin`            | `boolean` | 是否管理员       |
| `lastSignInTime`   | `string`  | 最近登录时间     |
| `signInCount`      | `int`     | 登录次数         |
| `createUserId`     | `string`  | 创建用户标识     |
| `createTime`       | `string`  | 创建时间         |
| `lastUpdateUserId` | `string`  | 最近修改用户标识 |
| `lastUpdateTime`   | `string`  | 最近修改时间     |

注意：

1. 返回的数据中不包含用户密码
# tnt-commitizen

git提交模版，全局安装使用，可以避免在项目中繁琐配置。

### 环境依赖

[nodejs](https://nodejs.org/en/)
(需要加入Path环境变量)

### 安装

```bash
npm i tnt-commitizen @commitlint/cli -g
```

### 使用

#### 安装 git hooks (commit-msg)

进入项目，执行

```bash
gcz-init
```

如果不希望强制使用 git hooks ，此步骤可以省略。

#### gcz

提交时候用`gcz`提到`git commit`命令

```
git add .
gcz
```

![gcz](https://imgcache-1251786003.image.myqcloud.com/media/gzhoss/image/20200511/3891f7492dbc47566ba36157d6227178.png)
# learn
Learn about webpack and integrated development
---

## 添加.gitignore
> 在项目根目录生成.gitignore文件  
> 针对node_modules,dist,.vscode等  
> 在git提交时忽略以上文件或文件夹  
---

## 增加EditorConfig

> 在不同IDE之间定义和维护一致的代码风格  
> 官网： https://editorconfig.org/

## 增加stylelint检查
> 添加stylelint及插件  
> stylelint-order强制要求书写css按照一定的顺序

    npm install stylelint stylelint-order -D

> 配置stylelint规则  
> 这些配置文件都需要安装，并在stylelint配置文件中引入

## 增加eslint检查
> 添加eslint

    npm install eslint -D
> 初始化eslint，生成.eslintrc.*文件

    npx eslint --init
> 按照提示信息生成.eslintrc.*文件，建议使用.yml格式的配置文件（看上去比较简洁-->高大上)
eslint官方规则： http://eslint.cn/docs/rules/
### npx的说明
> npx 想要解决的主要问题，就是调用项目内部安装的模块。  
> 基本使用请参考阮一峰老师教程：http://www.ruanyifeng.com/blog/2019/02/npx.html
---

## 增加commitlint检查

    npm install -D @commitlint/cli @commitlint/config-conventional

> 创建.commitlintrc.yml文件

    extends: ['@commitlint/config-conventional']
    

## 增加husky检查
> 添加husky检查

    npm install husky -D
> 修改package.json文件

    "husky": {
      "hooks": {
        "pre-commit": "npm run lint",
        "commitmsg": "commitlint -e $GIT_PARAMS"
      }
    }
> pre-commit后跟着 scripts里的脚本代码，这里对应eslint检查

---





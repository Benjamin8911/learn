# learn
Learn about webpack and integrated development
---

## 添加.gitignore
> 在项目根目录生成.gitignore文件  
针对node_modules,dist,.vscode等  
在git提交时忽略以上文件或文件夹  
---

## 增加eslint检查
> 添加eslint

    npm install eslint -D
> 初始化eslint，生成.eslintrc.*文件

    npx eslint --init
> 按照提示信息生成.eslintrc.*文件，建议使用.yml格式的配置文件（看上去比较简洁（高大上））
### npx的说明
> npx 想要解决的主要问题，就是调用项目内部安装的模块。  
> 基本使用请参考阮一峰老师教程 http://www.ruanyifeng.com/blog/2019/02/npx.html
---

## 增加husky检查
> 添加husky检查

    npm install husky -D
> 修改package.json文件

    "husky": {
      "hooks": {
        "pre-commit": "npm run lint"
      }
    }
> pre-commit后跟着 scripts里的脚本代码，这里对应eslint检查

---





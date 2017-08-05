# Guide
Text..

if you want auto wrok ,please open terminal `gulp serve `



## 中文指引

- 如果本机没有安装gulp

  ```
  npm install --global gulp
  ```
  
- 如果本机没有安装`npm`以及`bower`

	```
	npm install npm bower --global 
	```

- 在安装完成npm以及bower后请在项目根目录下调用`npm init``bower init`

- 开启自动管理工具,默认会开启一个浏览器

  ```
  gulp serve
  ```

- 可以开始编辑src内部的文件,实现所写所得功能`编写完代码后需要使用ctrl + s`保存后才会出现效果

  ​

### 如果你想要添加`less`文件
- 那么请除开`index.less`文件外,统一使用_开头命名
- 并且在书写完毕之后导入`index.less`文件中
	
	```less
	@import "_zz";
	```


# DailyStudy2020gogogo
每日将总结编辑发送到仓库打卡，每日问题总结、突破基础思考以及难点问题、算法题解法总结归档、面经总结内推、联系方式保留。最后预祝高就！！！gogoggo！



## 操作指南

1. 初始化仓库 ` git clone https://github.com/shenggedaifei/DailyStudy2020gogogo.git  `
2. 在远程仓库建立 branch
3. 通过 `git branch ` 查看本地分支，如有本地对应分支则使用，注意关联到远程。
4. ` git checkout -b 本地分支名 origin/远程分支名`  拉去远程分枝到本地。例如 ` git checkout -b ryh origin/ryh`  
5. 进行文档编写代码编辑、操作过后。使用，` git pull ` ` git add . ` ` git commit -m'描述。。。'`  ` git push ` 注意要在自己分支上操作。
6. 切换到master分支 ` git checkout master` ,将本地分支合并到master上在提交，注意先push之前一定要先拉去仓库防止冲突。所以切换过来建议先 ` git pull `  再合并分支上去 ` git merge 本地分支名` 例如：` git merge ryh ` ,然后进行提交操作步骤5.
7. 切换会开发分支，` git checkout 本地分支名` 。



## 其它备注

1. 代码文件夹中不该提交依赖包代码，比如node_modules，需要在` .gitignore`文件中屏蔽掉。

2. 代码应该归档存放。

3. 每天打卡需要在晚上或者第二天早上进行日志记录。格式如：

   [ 2020-02-10 ] (任帅哥)，title

   conment。。。。
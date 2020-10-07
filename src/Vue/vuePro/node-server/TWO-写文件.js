var fs = require('fs')
fs.writeFile('./test2.md', 'hello node...', function(err){
    if (err) {
        console.log('写文件失败了...')
        return 
    }
    console.log('写文件成功')
})
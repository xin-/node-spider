import fs from 'fs'


/**
 * 此方法会先清空文件 再填充内容!!!!!!!!!!
 * @param  {[string]} contents [要填充的内容]
 * @param  {[url]} address  [要填充的文件地址]
 * @return {[type]}          [description]
 */
const creatNewFile = (contents, address) => {
	fs.unlinkSync(address)
	fs.appendFile(address, contents, function(err){  
        if(err)  
            console.log("fail " + err);  
        else  
            console.log("写入文件ok");  
    });  
}

export { creatNewFile }
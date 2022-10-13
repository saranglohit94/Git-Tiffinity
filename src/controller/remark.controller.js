const remarkService = require('../service/remark.service');

const getremark = async (remarkParams)=>{
    const remarkData = await remarkService.getremark(remarkParams);
    console.log(remarkData);
    return remarkData;
}

const createremark = async (remarkBody)=>{
    try{
    const remarkData = await remarkService.createremark(remarkBody);
    console.log("remarkData",remarkData);
    return remarkData;
    }
    catch(error){
        console.log(error);
    }
}

const updateremark = async (remarkBody,remarkParams)=>{
    const remarkData = await remarkService.updateremark(remarkBody,remarkParams);
    console.log("remarkData",remarkData);
    return remarkData;
}

const deleteremark = async (remarkParams)=>{
    const remarkData = await remarkService.deleteremark(remarkParams);
    console.log("remarkData",remarkData);
    return remarkData;
}

    

module.exports = {
    createremark,
    getremark,
    updateremark,
    deleteremark
}


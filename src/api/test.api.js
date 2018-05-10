var mongoose=require('mongoose');
var test=require('../schemas/test.schema');

var TestAPI={

    findall:function(req,res){
        
test.find({},function(error,tests){
    if(error)
        throw error;
    else
        res.status(200).json(tests);
});
    }
};

module.exports=TestAPI;

/*
test.find({},function(error,tests){
    if(error)
        throw error;
    else
        res.status(200).json(tests);
});
*/
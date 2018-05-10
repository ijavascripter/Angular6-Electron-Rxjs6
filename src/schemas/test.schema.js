var mongoose =  require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    test:String
    });

module.exports = mongoose.model('test',schema);
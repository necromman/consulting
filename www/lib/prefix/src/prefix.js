function Prefixer(){
    return this;
}

Prefixer.prototype._error = function(){
    if( typeof console != "undefined"){
        var arg = Array.prototype.slice.call(arguments);
        console.error(arg.length>1?arg:arg[0]);
    }
};

Prefixer.prototype._modify = function(object, prefix, suffix){
    prefix = prefix || '';
    suffix = suffix || '';

    var list = {};

    for( var key in object){
        list[prefix+key+suffix] = object[key];
    }

    return list;
};

Prefixer.prototype.key = function(prefix, object, suffix){
    if( object == null){
        this._error('invalid object');
        return false;
    }

    if( typeof object != "object" || typeof object.length != "undefined" ){
        this._error('invalid object');
        return false;
    }
    return this._modify(object, prefix, suffix);
};

(function(){
    if ( typeof module === "object" && typeof module.exports === "object" ) {
        module.exports = Prefixer;
    } else {
        Prefix = new Prefixer();
    }
})();                

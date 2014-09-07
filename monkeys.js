exports.monkeyWork = function(JSONString) {

    var activeWorkers = [
        exports.Case,
        exports.Empty,
        exports.Garble,
        exports.Null,
        exports.Opposite,
        exports.Passive,
        exports.Swap
    ];

    var content = {};
    try {
        content = JSON.parse(JSONString);
    }
    catch(e) {
        content = JSONString;
    }

    var chosen_monkey = activeWorkers[Math.floor(Math.random() * activeWorkers.length)];
    content = chosen_monkey(content);

    if (typeof content === "object") {
        for (var item_key in Object.keys(content)) {
            var subContent = content[Object.keys(content)[item_key]];
            content[Object.keys(content)[item_key]] = exports.monkeyWork(subContent);
        }
    }

    return content;
};

exports.Garble = function(object) {

    function shuffle(o){
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
        return o;
    }

    if (typeof object === "string") {
        object = shuffle(object.split('')).join("");
    }
    else if (typeof object === "number") {
        object = Math.floor(Math.random() * 100000);
    }
    return object;
};

exports.Passive = function(object) {
    return object
};

exports.Empty = function(object) {
    if (typeof object === "boolean") {
        object = false;
    }
    else if (typeof object === "string") {
        object = "";
    }
    else if (Array.isArray(object)) {
        object = [];
    }
    else if (typeof object === "object") {
        object = {};
    }
    else if (typeof object === "number") {
        object = 0;
    }

    return object;
};

exports.Null = function(object) {
    object = undefined;
    return object;
};

exports.Case = function(object) {
    if (typeof object === "string") {
        if (Math.random() < 0.5) {
            object = object.toUpperCase();
        }
        else {
            object = object.toLowerCase();
        }
    }
    return object;
};

exports.Opposite = function(object) {
    if (typeof object === "boolean") {
        object = !object;
    }
    return object;
};

exports.Swap = function(object) {
    if (typeof object === "boolean" && object == true) {
        var true_items = ["true", "1", "TRUE", 1, true];
        object = true_items[Math.floor(Math.random() * true_items.length)];
    }
    else if (typeof object === "boolean" && object == false) {
        var items = ["false", "0", "FALSE", 0, false];
        object = items[Math.floor(Math.random() * items.length)];
    }
    else if (typeof object === "string") {
        object = [object];
    }
    else if (Array.isArray(object)) {
        object = object[0];
    }
    else if (typeof object === "object") {
        object = [];
    }
    else if (typeof object === "number") {
        object = "" + object;
    }

    return object;
};

define(function () {
    function createList(args) {
        var list = '<ul>';
        for (var i = 0; i < args.length; i++) {
            if (i === args.length - 1) {
                list = list.concat('<li>' + args[i] + '</li></ul>');
            } else {
                list =  list.concat('<li>' + args[i] + '</li>');
            }
        }
        console.info('\t app2.js createList() executed');
        return list;
    }

    return {
        getList: createList
    };
});


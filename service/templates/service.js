angular.module('<%= appname %>').factory('<%= servicename %>',function() {

    var <%= _.camelize(name) %> = {};

    return <%= _.camelize(name) %>;
});

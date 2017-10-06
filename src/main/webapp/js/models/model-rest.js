/*
    If you are using the sample RESTFul services I published on GitHub, use the following URLs...

      - For the Node.js sample backend (available in https://github.com/ccoenraets/directory-rest-nodejs)
        Use: http://localhost:3000/employees

        If you are using this Node.js endpoint, the pages of the application must be served from the same domain/port (http://localhost:3000).
        If you want to serve the pages and the data from different domains/ports, use the JSONP adapter instead.

      - For the PHP sample backend (available in https://github.com/ccoenraets/directory-rest-php)
        Use: /directory-rest-php/employees

 */

app.Employee = Backbone.Model.extend({

    urlRoot:"/directory-rest-php/employees",
//    urlRoot:"http://localhost:3000/employees",

    initialize:function () {
        this.reports = new app.EmployeeCollection();
        this.reports.url = this.urlRoot + "/" + this.id + "/reports";
    }

});

app.EmployeeCollection = Backbone.Collection.extend({

    model: app.Employee,

    url:"/directory-rest-php/employees"
//    url:"http://localhost:3000/employees"

});
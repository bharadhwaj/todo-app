var Todo = require('./models/todo');

module.exports = function(app) {

    app.get('/todo/get-all', function(req, res) {

        Todo.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });

    });

    app.get('/todo/get-checked', function(req, res) {

        Todo.find({
            done: true 
        }, function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });

    });

    app.get('/todo/get-unchecked', function(req, res) {

        Todo.find({
            done: false 
        }, function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });

    });

    app.post('/todo/add', function(req, res) {

        Todo.create({
            text : req.body.text,
            done : false
        }, function(err, todo) {
            if (err)
                res.send(err);

            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });

    });

    app.get('/todo/check/:todo_id', function(req, res) {

        Todo.where('_id', req.params.todo_id)
            .update({
                $set: { done: true }
            }, function(err, todo) {
            if (err)
                res.send(err);

            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });

    });

     app.get('/todo/uncheck/:todo_id', function(req, res) {

        Todo.where('_id', req.params.todo_id)
            .update({
                $set: { done: false }
            }, function(err, todo) {
            if (err)
                res.send(err);

            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });

    });

    app.delete('/todo/remove/:todo_id', function(req, res) {
        Todo.remove({
            _id : req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });
};
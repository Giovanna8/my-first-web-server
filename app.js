const express = require('express');

const app = express();

app.get('/:message', function(request, response, next) {
    const message = request.params.message;
    console.log(request);
    return response.json(message);
});

const port = 3000;

app.listen(port, function () {
    console.log('Listening on port: ${port}');
});

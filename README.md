# HTTP REST Test
By: Robby Emmert

## Use
Fire a request using postman or whatever against any URL with any method.

Requests to `/favicon.ico` will not be logged and will return a 404.
Requests to `/logs` will not be logged, and will return a list of requests including their URL, params, headers, and timestamp.
A DELETE request to `/logs` will clear all logs.

## Public Instance
There is a public instance of this out on https://http-rest-test.herokuapp.com.

Feel free to hit any URL as mentioned above, then check https://http-rest-test.herokuapp.com/logs.

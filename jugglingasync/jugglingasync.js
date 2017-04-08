var http = require('http'),
    url1 = process.argv[2],
    url2 = process.argv[3],
    url3 = process.argv[4],
    data1 = '',
    data2 = '',
    data3 = '',
    firstCheck = false,
    secondCheck = false,
    thirdCheck = false;

function printTheData() {
    if (firstCheck && secondCheck && thirdCheck) {
        console.log(data1);
        console.log(data2);
        console.log(data3);
    }
}

http.get(url1, function(res) {
    res.on('data', function(data) {
        data1 += data;
    });
    res.on('end', function() {
        firstCheck = true;
        printTheData();
    });
});

http.get(url2, function(res) {
    res.on('data', function(data) {
        data2 += data;
    });
    res.on('end', function() {
        secondCheck = true;
        printTheData();
    });
});

http.get(url3, function(res) {
    res.on('data', function(data) {
        data3 += data;
    });
    res.on('end', function() {
        thirdCheck = true;
        printTheData();
    });
});
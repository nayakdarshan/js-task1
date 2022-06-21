//fetch data and assign to studentDetails from studentData.json
var studentDetails = (function() {
    var studentDetails = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "studentData.json",
        'dataType': "json",
        'success': function(data) {
            studentDetails = data;
        }
    });
    return studentDetails;
})();


//iterating throughout the studentDetails and appending to the table
$(document).ready(function() {
    var table = $('#myTable');

    var max_size = studentDetails.length;
    var min = 0;
    var itemsPerPage = 5;
    var limit = itemsPerPage;
    var slno = 1;
    appendStudentData(min, limit);


    //function to append student details into the table
    function appendStudentData(min, limit) {
        // console.log(sta, limit);
        // console.log(max_size);
        for (var i = min; i < limit; i++) {
            var tab = '<tr><td>' + studentDetails[i].id + "\n" + '</td><td>' + studentDetails[i].name + "\n" + '</td><td>' +
                studentDetails[i].class + "\n" + '</td><td>' + studentDetails[i].rank;

            $('#myTable').append(tab)
            slno++;
        }
    }
    //next button function
    $('#nextValue').click(function() {
        var next = limit;
        if (max_size > next) {
            def = limit + itemsPerPage;
            limit = def
            table.empty();
            if (limit > max_size) {
                def = max_size;
            }

            appendStudentData(next, def);

        }
    });
    //previous button function
    $('#PreValue').click(function() {
        var pre = limit - (2 * itemsPerPage);
        if (pre >= 0) {
            limit = limit - itemsPerPage;
            table.empty();
            appendStudentData(pre, limit);
        }
    });
    //pagination numbered buttons
    var number = Math.round(studentDetails.length / itemsPerPage);

    for (i = 0; i < number; i++) {
        // var j = i + 1;
        $('.nav').append('<button class="btn custom-btn">' + i + '</button>');
    }
    $('.nav button').click(function() {
        var start = $(this).text();
        table.empty();
        limit = 5 * (parseInt(start) + 1) > max_size ? max_size : 5 * (parseInt(start) + 1)
        appendStudentData(start * 5, limit);
    });
});
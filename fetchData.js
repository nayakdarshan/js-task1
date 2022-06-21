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
    var table = $('#studentTable');

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
                studentDetails[i].class + "\n" + '</td><td class="studentRank">' + studentDetails[i].rank + '</td>';

            $('#studentTable').append(tab)
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
//sorting by rank function
function sortByRank() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("studentTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 0; i < (rows.length); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByClassName("studentRank")[0];
            y = rows[i + 1].getElementsByClassName("studentRank")[0];
            //check if the two rows should switch place:
            if (Number(x.innerHTML) > Number(y.innerHTML)) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }

}

//sorting by A to Z function
function sortByAtoZ() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("studentTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 0; i < (rows.length); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i + 1].getElementsByTagName("td")[0];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

//sorting by Z to A function
function sortByZtoA() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("studentTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 0; i < (rows.length); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i + 1].getElementsByTagName("td")[0];
            //check if the two rows should switch place:
            if (y.innerHTML.toLowerCase() > x.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }

}
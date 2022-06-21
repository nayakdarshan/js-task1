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
            var tab = '<tr><td>' + studentDetails[i].id + "\n" + '</td><td class="studentFullName">' + studentDetails[i].name + "\n" + '</td><td>' +
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
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 0; i < (rows.length); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByClassName("studentRank")[0];
            y = rows[i + 1].getElementsByClassName("studentRank")[0];
            if (Number(x.innerHTML) > Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
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
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 0; i < (rows.length); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByClassName("studentFullName")[0];
            y = rows[i + 1].getElementsByClassName("studentFullName")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
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
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 0; i < (rows.length); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByClassName("studentFullName")[0];
            y = rows[i + 1].getElementsByClassName("studentFullName")[0];
            if (y.innerHTML.toLowerCase() > x.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }

}
//function to search name
// function searchName(keyName) {
//     document.getElementById('searchResultHeading').innerHTML = "Search Results:";
//     var key = keyName;
//     var flag = 0;
//     // console.log(key);
//     table = document.getElementById("studentTable");
//     rows = table.rows;
//     for (i = 0; i < (rows.length); i++) {
//         x = rows[i].getElementsByClassName("studentFullName");
//         if (key === x) {
//             console.log("yes");
//         }


//     }
// }

$(document).ready(function() {
    $("#searchField").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#studentTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
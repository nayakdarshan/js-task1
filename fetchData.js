var studentDetails = [{
        "id": "A001",
        "name": "Anil",
        "class": "A-1",
        "rank": "18"
    },
    {
        "id": "A002",
        "name": "Bhaskar",
        "class": "A-1",
        "rank": "12"
    },
    {
        "id": "A003",
        "name": "Chetan",
        "class": "A-1",
        "rank": "7"
    },
    {
        "id": "A004",
        "name": "Darshan",
        "class": "A-1",
        "rank": "19"
    },
    {
        "id": "A005",
        "name": "Elon",
        "class": "A-1",
        "rank": "2"
    },
    {
        "id": "A006",
        "name": "Felix",
        "class": "A-1",
        "rank": "13"
    },
    {
        "id": "A007",
        "name": "Ganesh",
        "class": "A-1",
        "rank": "1"
    },
    {
        "id": "A008",
        "name": "Hitesh",
        "class": "A-1",
        "rank": "4"
    },
    {
        "id": "A009",
        "name": "Ishwar",
        "class": "A-1",
        "rank": "9"
    },
    {
        "id": "A010",
        "name": "Jagan",
        "class": "A-1",
        "rank": "10"
    },
    {
        "id": "A011",
        "name": "Krishna",
        "class": "A-1",
        "rank": "11"
    },
    {
        "id": "A012",
        "name": "Leo",
        "class": "A-1",
        "rank": "15"
    },
    {
        "id": "A013",
        "name": "Manish",
        "class": "A-1",
        "rank": "5"
    },
    {
        "id": "A014",
        "name": "Neha",
        "class": "A-1",
        "rank": "20"
    },
    {
        "id": "A015",
        "name": "Omen",
        "class": "A-1",
        "rank": "17"
    },
    {
        "id": "A016",
        "name": "Prathvi",
        "class": "A-1",
        "rank": "16"
    },
    {
        "id": "A017",
        "name": "Ramesh",
        "class": "A-1",
        "rank": "14"
    },
    {
        "id": "A018",
        "name": "Suresh",
        "class": "A-1",
        "rank": "11"
    },
    {
        "id": "A019",
        "name": "Tom",
        "class": "A-1",
        "rank": "3"
    },
    {
        "id": "A020",
        "name": "Varun",
        "class": "A-1",
        "rank": "6"
    }
]


//iterating throughout the studentDetails and appending to the table
document.addEventListener("DOMContentLoaded", function() {
    var table = $('#studentTable');

    var max_size = studentDetails.length;
    var min = 0;
    var itemsPerPage = 5;
    var limit = itemsPerPage;
    var slno = 1;
    appendStudentData(min, limit);


    //function to append student details into the table
    function appendStudentData(min, limit) {
        for (var i = min; i < limit; i++) {
            var tab = "<tr><td>" + studentDetails[i].id + "\n" + '</td><td class="studentFullName">' + studentDetails[i].name + "\n" + '</td><td>' +
                studentDetails[i].class + "\n" + '</td><td class="studentRank">' + studentDetails[i].rank + '</td>';

            $('#studentTable').append(tab);
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
        $('.nav').append('<button class="btn custom-btn">' + (i + 1) + '</button>');
    }
    $('.nav button').click(function() {
        // var start = $(this).text();
        var start = ($(this).text()) - 1;
        table.empty();
        limit = 5 * (parseInt(start) + 1) > max_size ? max_size : 5 * (parseInt(start) + 1)
        appendStudentData(start * 5, limit);
    });
});

function sortByRankAsc() {
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

function sortByRankDsc() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("studentTable");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 0; i < (rows.length); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByClassName("studentRank")[0];
            y = rows[(i + 1)].getElementsByClassName("studentRank")[0];
            if (Number(x.innerHTML) > Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i], rows[i + 1]);
            switching = true;
        }
    }

}

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


//search function
function searchName() {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("searchField");
    filter = input.value.toUpperCase();
    table = document.getElementById("studentTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}
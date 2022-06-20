console.log('hello');
$(document).ready(function() {
    $.getJSON("studentData.json", function(data) {
        var student = '';
        var slno = 1;
        $.each(data, function(key, value) {
            student += '<tr>';
            student += '<td>' + slno + '</td>';
            student += '<td>' + value.id + '</td>';
            student += '<td>' + value.name + '</td>';
            student += '<td>' + value.class + '</td>';
            student += '<td>' + value.rank + '</td>';
            student += '</tr>';
            slno++;
        });
        $('#table').append(student);
    });
});
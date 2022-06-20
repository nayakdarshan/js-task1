// console.log('hello');
$(document).ready(function() {
    $.getJSON("studentData.json", function(data) {
        var student = '';
        var slno = 1;
        //iterating throughout the objects
        $.each(data, function(_key, value) {
            student += '<tr>';
            student += '<td>' + slno + '</td>';
            student += '<td>' + value.id + '</td>';
            student += '<td>' + value.name + '</td>';
            student += '<td>' + value.class + '</td>';
            student += '<td>' + value.rank + '</td>';
            student += '</tr>';
            slno++;
        });
        //inserting to the table
        $('#studentTable').append(student);
    });
});

var currentPage = 1;
var itemsPerPage = 5;
var l = document.getElementById('studentTable').rows.length;
function prevPage(){
    if(currentPage > 1){
        currentPage--;
        changePage(currentPage);
    }
}
function nextPage(){
    if(currentPage < numOfPages()){
        currentPage++;
        changePage(currentPage);
    }
}
function changePage(pageNo){
    var btnPrev = document.getElementById('btnPrev');
    var btnNext = document.getElementById('btnNext');
    var student_Table = document.getElementById('studentTable');
    // var pageInfo = document.getElementById('pageInfo');
    var page_Span = document.getElementById('pageNo');
    // var student = '';
}

if(pageNo < 1) pageNo = 1;
if(pageNo > numOfPages()) pageNo = numOfPages();
[...student_Table.getElementsByTagName('tr')].forEach((tr)=>{
    tr.style.display='none'; // reset all to not display
});
student_Table.rows[0].style.display = ""; // display the title row

for(var i = (pageNo -1) * itemsPerPage; i < (pageNo * itemsPerPage) && i < 1;i++ ){
    student_Table.rows[i].style.display = "";
}
page_Span.innerHTML= pageNo + "/" + numOfPages();
if(pageNo == 1){
    btnPrev.style.visibility = "hidden";
}else{
    btnPrev.style.visibilty = "visible";
}
if(pageNo == numOfPages()){
    btnNext.style.visibility = "hidden";
}else{
    btnNext.style.visibilty = "visible";
}
function numOfPages(){
    return Math.ceil((l-1)  /itemsPerPage);
}
window.onload = function(){
    changePage(1);
};


$(document).ready(function(){

    var recordsPerPage; // user input of hwo many records to display per page
    var totalRecords; // length of the data object
        var data =[{"firstName":"anita","lastName":"reddy","id":101,"gender":"female"},
            {"firstName":"priyanka","lastName":"ganti","id":102,"gender":"female"},
            {"firstName":"lalitha","lastName":"hanumanchi","id":103,"gender":"female"},
            {"firstName":"leela","lastName":"parasa","id":104,"gender":"female"},
            {"firstName":"mahada","lastName":"zubi","id":105,"gender":"female"},
            {"firstName":"bindhu","lastName":"reddy","id":106,"gender":"female"},
            {"firstName":"ryan","lastName":"shi","id":107,"gender":"female"},
            {"firstName":"john","lastName":"smith","id":108,"gender":"male"},
            {"firstName":"diwa","lastName":"marco","id":109,"gender":"male"},
            {"firstName":"anu","lastName":"sham","id":110, "gender":"female"},
            {"firstName":"pallavi","lastName":"lasya","id":111,"gender":"female"},
            {"firstName":"shilpa","lastName":"reddy","id":112,"gender":"female"},
            {"firstName":"marg","lastName":"jaso","id":113,"gender":"male"},
            {"firstName":"hyat","lastName":"yup","id":114,"gender":"male"},
            {"firstName":"mark","lastName":"hammer","id":115,"gender":"male"},
            {"firstName":"daniel","lastName":"george","id":116,"gender":"male"},
            {"firstName":"fathima","lastName":"begum","id":117,"gender":"female"},
            {"firstName":"lincoln","lastName":"oark","id":118,"gender":"male"},
            {"firstName":"hammer","lastName":"mark", "id":119,"gender":"male"},
            {"firstName":"uber","lastName":"less","id":120,"gender":"male" }];
    totalRecords = data.length;
    //hide the table initially
    $('#myTable').hide();

    function showTable(page){
        var startIndex = (page-1) * recordsPerPage;
        var endIndex = startIndex + recordsPerPage;
        var currentPageData = data.slice(startIndex,endIndex);
        var html = "";
        for(var i = 0; i < currentPageData.length; i++){
            html += "<tr>";
            html +="<td>" +  currentPageData[i].firstName + "</td>";
            html +="<td>" +  currentPageData[i].lastName + "</td>";
            html += "<td>" + currentPageData[i].id + "</td>";
            html +="<td>" +  currentPageData[i].gender + "</td>";
            html += "</tr>";
        }
        $('#tableBody').html(html);
        $('#myTable').show();
    }

    $("ul.pagination").on('click',function(e){
        //get the text from the button that is clicked
        var page = parseInt($(e.target).text());
        $('ul li a.active').removeClass('active');
        $(e.target).addClass("active");
        showTable(page);
    });

    $('.recordsPerPage').change(function(){
        /** pagination list **/
        $('#myTable').hide();
        var list = "";
        recordsPerPage = parseInt($(this).val());
        var totalPages = Math.ceil(totalRecords/recordsPerPage);
        for(var i = 1; i <= totalPages; i++){
            list += "<li><a href='#'>"+ i +"</a></li>";
        }
        $('ul').html(list);
        //add active class to the first pagination link
        $("ul li a:first").addClass("active");
        // always show the first page to user
        showTable(1) ;
    });
});
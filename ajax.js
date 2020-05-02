function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
    
        if(this.readyState==4&&this.status==200){
            $(document).ready(function(){
                $.getJSON("item.json", function(data){
                    var list_data ='';
                    $.each(data,function (key, value){
                        list_data += '<tr>';
                        list_data += '<td>'+value.serialnumber+'</td>';  
                        list_data += '<td>'+value.items+'</td>';   
                        list_data += '<td>'+value.quantity+'</td>'; 
                        list_data += '<td>'+value.unit+'</td>';
                        list_data += '<td>'+value.department+'</td>';  
                        list_data += '<td>'+value.notes+'</td>'; 
                        list_data += '</tr>';
                    });
                    $('#grocerylist').append(list_data);
                    });
                });
        
        }
       
    }
    xhttp.open("GET","item.json",true);
    xhttp.send();
    }
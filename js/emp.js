function validate_form()  
{
    var empt = document.forms["emp"]["emp_name"].value; 
    if (empt == "")  
    {  
        alert("Please enter your name");  
        return false;  
    }  
     var empa = document.forms["emp"]["S2"].value; 
    if (empa == "")  
    {  
        alert("Please enter your Address");  
        return false;  
    }
    var empg = document.forms["emp"]["radio1"].value; 
    if (empg == "")  
    {  
        alert("Please enter your Gender");  
        return false;  
    }    
     
    if (document.emp.cb1.checked==false)  
    {  
        alert("Please accept all terms and conditions");  
        return false;  
    }  
} 

<script type='text/javascript'>
function checkform()
{
    if(document.getElementById("un").value == 'john' && document.getElementById("pw").value == 'john' )
    {
        alert("Login Successful");
    }
    elseif{
        setTimeout(function() {document.location.href  = "index.html" });
    }
    
    else
    {
        alert("Access denied. Valid username and password is required.");
        }
    }
}
</script>
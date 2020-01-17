function validate_form ( )
{
   var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/;
   valid = true;
   if ( document.contactform.name.value == "" )
        {
                document.contactform.name.style.background= 'Yellow';
                alert ( "Please fill in the 'First Name' box." );
                valid = false;
        }      
   
        if (document.contactform.password.value.match(illegalChars)) 
        {
                document.contactform.password.style.background= 'Yellow';
                alert ( "Illegal Characters" );
                valid = false;
        }
   
      
   return valid;
}
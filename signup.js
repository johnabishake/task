function validate_form ( )
{
   var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/;
   valid = true;
   if ( document.contactform.firstname.value == "" )
        {
                document.contactform.firstname.style.background= 'Yellow';
                alert ( "Please fill in the 'First Name' box." );
                valid = false;
        }
   if ( document.contactform.lastname.value == 0 )
        {
                document.contactform.lastname.style.background= 'Yellow';
                alert ( "Please fill in the 'Last Name' box." );
                valid = false;
        }        
   
        if (document.contactform.email.value.match(illegalChars)) 
        {
                document.contactform.email.style.background= 'Yellow';
                alert ( "Illegal Characters" );
                valid = false;
        }
        if (document.contactform.dob.value == 0) 
        {
                document.contactform.dob.style.background= 'Yellow';
                alert ( "Illegal Characters" );
                valid = false;
        }
  
   
      
   return valid;
}
function validate()
{
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var salary = document.getElementById("salary").value;
    var address = document.getElementById("address").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "20px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Position of Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(salary))
    {
        text = "Please Enter thes valid salary";
        error_message.innerHTML = text;
        return false;
      }
    
    if(address.length <= 20){
      text = "Please Enter More Than 20 Characters";
      error_message.innerHTML = text;
      return false;
    }
    
    alert("Form Submitted Successfully!");
    return true;
  }
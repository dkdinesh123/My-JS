
$(document).ready(function(){
    $('#check-box1').click(function(){
        if($(this).prop("checked") == true){
           $('#option1').addClass('focus');
           $('#option1').removeClass('greyborder');
           $('#checksign1').addClass('blue-check');
           $('#checkmark1').addClass('focus');
        }
        else if($(this).prop("checked") == false){
            $('#option1').removeClass('focus');
            $('#option1').addClass('greyborder');
            $('#checksign1').removeClass('blue-check');
            $('#checkmark1').removeClass('focus');
        }
    });
});

$(document).ready(function(){
    $('#check-box2').click(function(){
        if($(this).prop("checked") == true){
           $('#option2').addClass('focus');
           $('#option2').removeClass('greyborder');
           $('#checksign2').addClass('blue-check');
           $('#checkmark2').addClass('focus');
        }
        else if($(this).prop("checked") == false){
            $('#option2').removeClass('focus');
            $('#option2').addClass('greyborder');
            $('#checksign2').removeClass('blue-check');
            $('#checkmark2').removeClass('focus');
        }
    });
});


$(document).ready(function(){
    $('#check-box4').click(function(){
        if($(this).prop("checked") == true){
           $('.box1').addClass('focus');
           $('.box1').removeClass('greyborder');
           $('.checksign1').addClass('blue-check');
           $('.sign-box').addClass('focus');
           $('#Capa_1').css('fill','#23c0f5');
        }
        else if($(this).prop("checked") == false){
            $('.box1').removeClass('focus');
            $('.box1').addClass('greyborder');
            $('.checksign1').removeClass('blue-check');
            $('.sign-box').removeClass('focus');
            $('#Capa_1').css('fill','black');
        }
    });
});

$(document).ready(function(){
    $('input').focus(function(){
        $(this).parent().css('border','1px solid #23c0f5');
    })
  });

  $(document).ready(function(){
    $('input').blur(function(){
        $(this).parent().css('border','none');
    })
  });


$(document).ready(function () {
  $("#bdate").blur(function () {
      var value = $("#bdate").val();
      console.log(value);
      dob = new Date(value);
      console.log(dob);

      if (value === '') {
          $("#bdate").focus();
      }
      else {
          var today = new Date();
          console.log(today);
          var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
          //console.log(age);
          $("#age").val(age);
      }
  })
});


$(document).ready(function () {
  $("#email").blur(function(){
      var evalue = $("#email").val();
      console.log(evalue);
      var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      
      if(!regex.test(evalue)){
          $("#email").css("background-color","red");
  
      }
      else{
          $("#email").css("background-color","green");
      }
  })
  });


  $(function () {
    $("#drag1").draggable( { opacity: "0.5" });
    $("#drag2").draggable( { opacity: "0.5" });
    $("#drag3").draggable( { opacity: "0.5" });
    $("#drag4").draggable( { opacity: "0.5" });
    $("#drag5").draggable( { opacity: "0.5" });
   
});

$(function () {
  $("#drop").droppable(
      {
          drop: function () {
              alert("I am dropped");
              console.log("droppe")
          }
      });
});

$(document).ready(function(){
    $("textarea").focus(function(){
       $("textarea").css("outline", "none");
    });
   });

  
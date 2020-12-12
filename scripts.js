$('#button1').on('click', () => {
    $( "p" ).append( "<p>You clicked button 1</p>" );
  });
  $('#button2').on('click', () => {
    $( "#button1" ).append("is now clicked");
  });
 

function myFunction2() {
    var myColor = document.getElementById("myColor")
    var option = myColor.options[myColor.selectedIndex].text;
    $("#button3").css('background-color', option );
    
}


    
    
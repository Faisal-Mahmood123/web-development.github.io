// for the web development 


function toggleFunction() {
    const contentOne = document.getElementById('content1');
    const contentTwo = document.getElementById('content2');
    if (contentOne.style.display === 'none') {
      contentOne.style.display = 'block';
      contentTwo.style.display = 'none';
    } else {
      contentTwo.style.display = 'block';
      contentOne.style.display = 'none'
    }
  
  };
  
  // first button
  function basicFunction() {
    const contentOne = document.getElementById('textOne');
    const contentTwo = document.getElementById('textTwo');
    const contentThree = document.getElementById('textThree');
    if (contentOne.style.display === 'none') {
      contentOne.style.display = 'block';
      contentTwo.style.display = 'none';
      contentThree.style.display = 'none';
    } else {
      contentTwo.style.display = 'none';
    }
  
  }
  
  // secont button 
  function mySecondFunction() {
    const contentOne = document.getElementById('textOne');
    const contentTwo = document.getElementById('textTwo');
    const contentThree = document.getElementById('textThree');
    if (contentTwo.style.display === 'none') {
      contentOne.style.display = 'none';
      contentTwo.style.display = 'block';
      contentThree.style.display = 'none';
    } else {
      contentOne.style.display = 'none'
    }
  
  }
  function myThirdFunction() {
    const contentOne = document.getElementById('textOne');
    const contentTwo = document.getElementById('textTwo');
    const contentThree = document.getElementById('textThree');
    if (contentThree.style.display === 'none') {
      contentOne.style.display = 'none';
      contentTwo.style.display = 'none';
      contentThree.style.display = 'block';
    } else {
      contentOne.style.display = 'none'
    }
  
  }
  // code for basics 
  $(document).ready(function(){
    $("#myIns").click(function(){
      $("#mySecion").hide();
      $("#install").show();
    });
  });
  $(document).ready(function(){
    $("#go_back").click(function(){
      $("#install").hide();
      $("#mySecion").show();
    });
  });
  
  // code for html view topic 
  $(document).ready(function(){
    $("#myHtml").click(function(){
      $("#mySecion").hide();
      $("#myhtml").show();
    });
  });
  $(document).ready(function(){
    $("#go_back1").click(function(){
      $("#myhtml").hide();
      $("#mySecion").show();
    });
  });
  
  
  // view topic for css 
  $(document).ready(function(){
    $("#myCssbtn").click(function(){
      $("#mySecion").hide();
      $("#myCss").show();
    });
  });
  $(document).ready(function(){
    $("#go_back2").click(function(){
      $("#myCss").hide();
      $("#mySecion").show();
    });
  });
  
  
  // code for myBootstrap5 
  $(document).ready(function(){
    $("#bootstrapbtn").click(function(){
      $("#mySecion").hide();
      $("#myBoots").show();
    });
  });
  $(document).ready(function(){
    $("#go_back3").click(function(){
      $("#myBoots").hide();
      $("#mySecion").show();
    });
  });
  
  // code for myJavascript 
  $(document).ready(function(){
    $("#javabtn").click(function(){
      $("#mySecion").hide();
      $("#javaScript").show();
    });
  });
  $(document).ready(function(){
    $("#go_back4").click(function(){
      $("#javaScript").hide();
      $("#mySecion").show();
    });
  });
  
  
  
  
  // code for react js 
  
  $(document).ready(function(){
    $("#myReact").click(function(){
      $("#mySecion").hide();
      $("#react").show();
    });
  });
  $(document).ready(function(){
    $("#go_back5").click(function(){
      $("#react").hide();
      $("#mySecion").show();
    });
  });
  
  
  
  
  
  
  // now coding start for backend view topics 
  
  
  // now coding start for nodejs viewtopic 
  
  
  // code for node 
  $(document).ready(function(){
    $("#viewNode").click(function(){
      $(".mySecion").hide();
      $("#myNode").show();
    });
  });
  
  $(document).ready(function(){
    $("#back").click(function(){
      $("#myNode").hide();
      $(".mySecion").show();
    });
  });
  
  // code for express js 
  $(document).ready(function(){
    $("#viewExpress").click(function(){
      $(".mySecion").hide();
      $("#myExpress").show();
    });
  });
  $(document).ready(function(){
    $("#back1").click(function(){
      $("#myExpress").hide();
      $(".mySecion").show();
    });
  });
  
  // code for sql 
  $(document).ready(function(){
    $("#viewSQL").click(function(){
      $(".mySecion").hide();
      $("#mySQL").show();
    });
  });
  $(document).ready(function(){
    $("#back2").click(function(){
      $("#mySQL").hide();
      $(".mySecion").show();
    });
  });
  
  // code for mysql view topics 
  $(document).ready(function(){
    $("#viewsql123").click(function(){
      $(".mySecion").hide();
      $("#mysql").show();
    });
  });
  $(document).ready(function(){
    $("#back3").click(function(){
      $("#mysql").hide();
      $(".mySecion").show();
    });
  });
  
  // code for mongodb
  $(document).ready(function(){
    $("#viewmongo").click(function(){
      $(".mySecion").hide();
      $("#myMongo").show();
    });
  });
  $(document).ready(function(){
    $("#back4").click(function(){
      $("#myMongo").hide();
      $(".mySecion").show();
    });
  });
  
  
  // code for api's 
  $(document).ready(function(){
    $("#viewApi").click(function(){
      $(".mySecion").hide();
      $("#myApi").show();
    });
  });
  $(document).ready(function(){
    $("#back5").click(function(){
      $("#myApi").hide();
      $(".mySecion").show();
    });
  });
  
  
  



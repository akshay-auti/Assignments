$(document).ready(function(){

  $(".num-btn").on('click',function(){



    // if($(".display")!="")
    // {
    //    $(".display").val("");
    // }
   if($(this).attr('data-role')!="operator")
    {
    $(".display").val($(".display").val()+$(this).val());
    }
    else
    {
      if($(".display")!="")
      {
        $(".display").val($(".display").val()+$(this).val());
      }
    }
  })

 $(".clear-btn").on("click",function(){
  $(".display").val("");
});

 // $(".calculate-btn").on("click",function(){

 //  var expression = $(".display").val();
 //  $(".display").val(eval(expression));
 //  $(".demo").text(expression +" = "+ eval(expression));

 //   });

 $(".square-btn").on("click",function(){
  var expression = $(".display").val();
  $(".display").val(Math.pow(eval(expression),2));
   $(".demo").text(expression +"^2 = "+ Math.pow(eval(expression),2));
 });

 $(".sqrt-btn").on("click",function(){
  var expression = $(".display").val();
  $(".display").val(Math.sqrt(eval(expression)));
  $(".demo").text("sqrt("+ expression +") = "+ Math.sqrt(eval(expression)));
 });

  $(".brace-btn").on("click",function(){
     if($(this).attr('data-role')!="operator" || $(this).attr('data-role')!="number" ){
    $(".display").val($(".display").val()+$(this).val());
  }
    else{
      if($(".display")!=""){
        $(".display").val($(".display").val()+$(this).val());
      }
    }
  })

 // $(".sin-btn").on("click",function(){
 //  var expression = $(".display").val();
 //  $(".display").val("sin("+expression+")= "+Math.sin(eval(expression) * Math.PI/180));
 //  $(".demo").text("sin("+expression+")= "+Math.sin(eval(expression) * Math.PI/180));
 // });

 // $(".cos-btn").on("click",function(){
 //  var expression = $(".display").val();
 //  $(".display").val("cos("+expression+")= "+Math.cos(eval(expression) * Math.PI/180));
 //  $(".demo").text("cos("+expression+")= "+Math.cos(eval(expression) * Math.PI/180));
 // });

 $(".bs-btn").on("click",function(){
  var expression = $(".display").val();
  $(".display").val(expression.substring(0,expression.length - 1));
 });

  $(".calculate-btn").on("click",function(){
      var expression = $(".display").val();
         $(".display").val(eval(expression));
         var expr = $(".display").val();
           if($(".demo") == "")
           {
            $(".demo").text(expression +" = "+ expr);
           }
           else
           {
            if ($("li").length > 3)
            {
             $("ul").text("");
            }
            else
             $(".demo").append("<li>"+expression+" = "+expr+"</li>");
           }
         });

});
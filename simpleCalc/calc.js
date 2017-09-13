  Memory  = "0";      // initialise memory variable
  Current = "0";
  Operation = 0;
  MAXLENGTH = 30;


function AddDigit(dig){

  }
  if (Current.length > MAXLENGTH)
   {
       Current = "Aargh! Too long";
   }
  else
     {
     if ((eval(Current) == 0) && (Current.indexOf(".") == -1))
      {
          Current = dig;
      }
     else
        {
          Current = Current + dig;
        }
     }

     document.Calculator.textarea.value = Current;
   }

function Dot()                  //PUT IN "." if appropriate.
  {
   if ( Current.length == 0)     //no leading ".", use "0."
    {
      Current = "0.";
    }
   else
      {
      if ( Current.indexOf(".") == -1)
       {
          Current = Current + ".";
       }

      }
        document.Calculator.textarea.value  = Current;
 }

function Clear()
  {

   Current = "0";
          document.Calculator.textarea.value = Current;
  }

function Operate(op)
  {

switch(op){

case "*":
    Operation = 1;
    break;
case "/":
    Operation = 2;
    break;
case "+":
    Operation = 3;
    break;
case "-":
    Operation = 4;
    break;
case "%":
    Operation = 5;
    break;
case "x^2":
    Operation = 6;
    break;
case "sqrt":
    Operation = 7;
    break;
case "sin":
    Operation = 8;
    break;
case "cos":
    Operation = 9;
    break;

default: document.write("Unknown operation!");
 }

  Memory = Current;
  Current = "";
  document.Calculator.textarea.value = Current;

 }

 function Sq()
  {
   if(Operation == 6)
    {
      Current = eval(Memory) * eval(Memory);
    }

  Operation = 0;
  Memory ="0";
  document.Calculator.textarea.value  = Current;
}

function Square()
  {
    Operate('x^2');
    Sq();
  }

function sqr()
  {
   if (Operation == 7)
    {
      Current = Math.sqrt(eval(Memory));
    }

  Operation = 0;
  Memory ="0";
  document.Calculator.textarea.value= Current;
}

function Squareroot()
  {
    Operate('sqrt');
    sqr();
  }

function S()
  {
   if(Operation == 8)
    {
      Current = Math.sin(eval(Memory));
    }

  Operation = 0;
  Memory = "0";
  document.Calculator.textarea.value  = Current;
}

function Sin()
  {
    Operate('sin');
    S();
  }

function C()
  {
   if(Operation == 9)
    {
      Current = Math.cos(eval(Memory));
    }

  Operation = 0;
  Memory = "0";
  document.Calculator.textarea.value  = Current;
}

function Cos()
  {
    Operate('cos');
    C();
  }

function Calculate()
 {
  switch(Operation){
      case 1:
        Current = eval(Memory) * eval(Current);
        break;
      case 2:
        Current = eval(Memory) / eval(Current);
        break;
      case 3:
        Current = eval(Memory) + eval(Current);
        break;
      case 4:
        Current = eval(Memory) - eval(Current);
        break;
      case 5:
        Current = eval(Memory) % eval(Current);
        break;
      }

  Operation = 0;                //clear operation
  Memory    = "0";              //clear memory
  document.Calculator.textarea.value  = Current;

 }


function FixCurrent()
   {
    Current = document.Calculator.textarea.value ;
    Current = "" + parseFloat(Current);

    if (Current.indexOf("NaN") != -1)
     {
        Current = "Aargh! I don't understand";
     }

   document.Calculator.textarea.value  = Current;
  }

function deleteChar(input)
  {
    input.value = input.value.substring(0, input.value.length - 1)
  }
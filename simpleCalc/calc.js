  Memory  = "0";      // initialise memory variable
  Current = "0";
  Operation = 0;
  MAXLENGTH = 30;

function AddDigit(dig){
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
  document.Calculator.textarea.value = Current;
 }

function Clear()
  {

   Current = "0";
   document.Calculator.textarea.value = Current;
  }

function Operate(op)
 {
  if (op.indexOf("*") > -1)
  {
    Operation = 1;
  }
  if (op.indexOf("/") > -1)
  {
    Operation = 2;
  }
  if (op.indexOf("+") > -1)
  {
    Operation = 3;
  }
  if (op.indexOf("-") > -1)
  {
      Operation = 4;
  }
  if (op.indexOf("%") > -1)
  {
    Operation = 5;
  }
  if (op.indexOf("x^2") > -1)
  {
    Operation = 6;
  }
  if (op.indexOf("sqrt") > -1)
  {
    Operation = 7;
  }
  if (op.indexOf("sin") > -1)
  {
    Operation = 8;
  }
  if (op.indexOf("cos") > -1)
  {
    Operation = 9;
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
  document.Calculator.textarea.value = Current;
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
  document.Calculator.textarea.value = Current;
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
  document.Calculator.textarea.value = Current;
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
  document.Calculator.textarea.value = Current;
}

function Cos()
  {
    Operate('cos');
    C();
  }

function Calculate()
 {
  if (Operation == 1)
    {
      Current = eval(Memory) * eval(Current);
    }
  if (Operation == 2)
    {
      Current = eval(Memory) / eval(Current);
    }
  if (Operation == 3)
    {
      Current = eval(Memory) + eval(Current);
    }
  if (Operation == 4)
    {
      Current = eval(Memory) - eval(Current);
    }
  if (Operation == 5)
    {
      Current = eval(Memory) % eval(Current);
    }

  Operation = 0;                //clear operation
  Memory    = "0";              //clear memory
  document.Calculator.textarea.value = Current;
 }

function FixCurrent()
   {
    Current = document.Calculator.Display.value;
    Current = "" + parseFloat(Current);

    if (Current.indexOf("NaN") != -1)
     {
        Current = "Aargh! I don't understand";
     }

   document.Calculator.textarea.value = Current;
  }

function deleteChar(input)
  {
    input.value = input.value.substring(0, input.value.length - 1)
  }
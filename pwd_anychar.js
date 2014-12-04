   function Mod4Passwd(pinFldID,hpinFldID,theChar)
   {  /* Overview:
           simple alternative to <input type="password" ...
            hiding character could be any character
         Details:
         transfers data from pinFld to hidden field hpinFld,
         while turning the characters into theChar in the visible one
          (works well with various input styles)
           use with onkeyup= 
           e.g.
                  onkeyup="Mod4Passwd('pinFld','hpinFld','*');"
          */
     theChar = theChar.slice(0,1);
     if (theChar.length != 1) theChar = '*';
     var taElem = document.getElementById(pinFldID);
     var htaElem = document.getElementById(hpinFldID);
     
     if ((taElem != null) && (htaElem != null)) {
       var theStr = taElem.value;
       var inputStr = htaElem.value;
       // first, make them the same length to accomodate backspace
       inputStr = inputStr.substr(0,theStr.length);
       for (i=0;i<theStr.length;i++)
        if (theStr.charAt(i) != theChar)
       { inputStr = inputStr.slice(0,i) + theStr.charAt(i) + 
                     inputStr.slice(i+1);
         theStr = theStr.slice(0,i) + theChar + theStr.slice(i+1);
       }
       taElem.value = theStr;
       htaElem.value = inputStr;
    }
   }

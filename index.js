
    function changetime(){
      
        var dt = new Date();
        document.getElementById("datetime").innerHTML = (("0"+(dt.getMonth()+1)).slice(-1)) +"-"+ (("0"+dt.getDate()).slice(-2)) +"-"+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2)) + ":"+(("0"+dt.getSeconds()).slice(-2));
      }
      changetime();
      setInterval("changetime()",1000)
      
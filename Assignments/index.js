async function fetchData(){
    console.log("async function executed")
    const data =await fetch ('https://jsonplaceholder.typicode.com/users');
    console.log("async function complete",data)
}

//let d= null ;
//fetch('https://jsonplaceholder.typicode.com/users')
//.then(function(data){
//consol
//timebomb implementation
//timerInSeconds=15   //seconds
//('timebomb').innerHTML=formattedTime;
   // document.getElementById('timebomb').style.color='red';
    //timeInSeconds=timeInSeconds-1;
//}

//}
//=setInterval(updateTimer,1000);  //call every second.
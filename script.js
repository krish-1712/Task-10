let timer=10;
let counter=document.getElementById("display")
setTimeout(()=>{
   counter.className="badge rounded-pill bg-success"
   counter.innerHTML=timer--;
   console.log("10")
},1000);

setTimeout(()=>{
   counter.className="badge rounded-pill bg-danger"
   counter.innerHTML=timer--;
   console.log("9")
},2000);

setTimeout(()=>{
   counter.className="badge rounded-pill bg-warning"
   counter.innerHTML=timer--;
   console.log("8")
},3000);

setTimeout(()=>{
   counter.className="badge rounded-pill bg-primary"
   counter.innerHTML=timer--;
   console.log("7")
},4000);

setTimeout(()=>{
   counter.className="badge rounded-pill bg-info"
   counter.innerHTML=timer--;
   console.log("6")
},5000);

setTimeout(()=>{
   counter.className="badge rounded-pill bg-secondary"
   counter.innerHTML=timer--;
   console.log("5")
},6000);

setTimeout(()=>{
   counter.className="badge rounded-pill bg-success"
   counter.innerHTML=timer--;
   console.log("4")
},7000);
                      
setTimeout(()=>{
   counter.className="badge rounded-pill bg-primary"
   counter.innerHTML=timer--;                                                                                                                                                                            
   console.log("3")
},8000);

setTimeout(()=>{
   counter.className="badge rounded-pill bg-warning"
   counter.innerHTML=timer--;
   console.log("2")
},9000);

setTimeout(()=>{
   counter.className="badge rounded-pill bg-secondary"
   counter.innerHTML=timer--;
   console.log("1")
},10000);
setTimeout(()=>{
   counter.className="badge rounded-pill bg-info"
   counter.innerHTML="Happy Independence Day"
   console.log("Happy Independence Day")
},11000);




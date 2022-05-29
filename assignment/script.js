document.querySelector("#order1").addEventListener("click",myFun1)
function myContent1(){
    return true
}

function myFun1()
{
    let image=document.createElement("img");
let cont=document.getElementById("cont");
document.body.append(image)

let content_prom=new Promise(function(resolve,reject)
    {
        let content=myContent1();
        
        setTimeout(function()
        {
            if(content)
        {
            resolve("content is loaded")
        }
        else 
        {
            reject("content failed to load")
        }
        },5000);
       
    });

    console.log(content_prom)
  
  
   
  
 
   content_prom.then(function(value)
   {
       cont.innerHTML=null;
       image.src="https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/2Pub_Q3_1LargeFries_574x384.jpg"
       image.style.height="200px"
       var text=document.createElement("h2").innerText="Your Finger Fries Is Ready"; 
         document.body.append(text)
   })
   content_prom.catch(function(err)
   {
       image.src="data:image/png;base64,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"
       console.log("err:",err)
   })

}

document.querySelector("#order2").addEventListener("click",myFun2)
function myContent2(){
    return true
}

function myFun2()
{
    let image=document.createElement("img");
let cont=document.getElementById("cont");
document.body.append(image)

let content_prom=new Promise(function(resolve,reject)
    {
        let content=myContent2();
        
        setTimeout(function()
        {
            if(content)
        {
            resolve("content is loaded")
        }
        else 
        {
            reject("content failed to load")
        }
        },5000);
       
    });

    console.log(content_prom)
  
  
   
  
 
   content_prom.then(function(value)
   {
       cont.innerHTML=null;
       image.src="https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/2Pub_Q3_ASCoffee_574x384.png"
       image.style.height="200px";
       var text=document.createElement("h2").innerText="Your Cold Coffee Is Ready"; 
         document.body.append(text)
   })
   content_prom.catch(function(err)
   {
       cont.innerHTML=null
       image.src="data:image/png;base64,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"
       console.log("err:",err)
   })

}

document.querySelector("#order3").addEventListener("click",myFun3)
function myContent3(){
    return true
}

function myFun3()
{
    let image=document.createElement("img");
let cont=document.getElementById("cont");
document.body.append(image)

let content_prom=new Promise(function(resolve,reject)
    {
        let content=myContent3();
        
        setTimeout(function()
        {
            if(content)
        {
            resolve("content is loaded")
        }
        else 
        {
            reject("content failed to load")
        }
        },5000);
       
    });

    console.log(content_prom)
  
  
   
  
 
   content_prom.then(function(value)
   {
       cont.innerHTML=null;
       image.src="https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Double-Quarter-Pounder-with-Cheese-1:1-4-product-tile-desktop"
       image.style.height="200px";
       var text=document.createElement("h2").innerText="Your Burger Is Ready"; 
         document.body.append(text)
   })
   content_prom.catch(function(err)
   {
       image.src="data:image/png;base64,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"
       console.log("err:",err)
   })

}



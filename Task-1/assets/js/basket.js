function getBasket(){
    let basket=localStorage.getItem("basket");
    let products=[];
    if(basket){
        products=JSON.parse(basket);
    }
    return products;
}

let tr=document.createElement("tr");
    let tdImage=document.createElement("td");
     let img=document.createElement("img");
     img.setAttribute("src",products.image);
     img.style.width="120px";
     img.style.height="120px";
     tdImage.appendChild(img);
     let tdName=document.createElement("td");
     tdName.innerText=products.name;
     let tdPrice=document.createElement("td");
     tdPrice.innerText=(products.count*products.price)+"$";
     let tdCount=document.createElement("td");
     let TdRemove=document.createElement("td");
     TdRemove.innerHTML=<i class="fa-solid fa-trash"></i>
     table.lastElementChild.append(tr);
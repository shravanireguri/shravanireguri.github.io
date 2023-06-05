let dhonioldinfo = {
    imgurl: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319946.png", 
    name: "Dhoni",
    Description: "Captain of Indian team"
}

let dhoniyounginfo = {
    imgurl: "https://stat4.bollywoodhungama.in/wp-content/uploads/2016/10/M.S.-Dhoni-%E2%80%93-The-Untold-Story-7.jpg",
    name: "MS Dhoni",
    Description: "Ticket Collector"
}

let isdhoniold = true;
let displayObj;

let flipData = function(){
    if(isdhoniold == true){
        displayObj = dhoniyounginfo;
        isdhoniold = false;
    }
    else{
        displayObj = dhonioldinfo;
        isdhoniold = true;
    }
    document.getElementById("old-img").src=displayObj.imgurl;
    document.getElementById("name").innerHTML = displayObj.name;
    document.getElementById("desc").innerHTML = displayObj.Description;
}
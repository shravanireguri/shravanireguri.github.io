let dhonioldinfo = {
    imgurl: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319946.png", 
    name: "Dhoni",
    Description: "Captain of Indian team"
};


let displayObj;

let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>console.log(data))
    document.getElementById("old-img").src=displayObj.imgurl;
    document.getElementById("name").innerHTML = displayObj.name;
    document.getElementById("desc").innerHTML = displayObj.Description;
};
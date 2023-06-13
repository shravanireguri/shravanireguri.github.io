let dhonioldinfo = {
    imgurl: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319946.png", 
    name: "Dhoni",
    Description: "Captain of Indian team"
};


let displayObj = {
    name: "",
    imgurl: "",
    Description: ""
};

let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>{
        displayObj.name = data.results[0].name.first + " " + data.results[0].name.last
        displayObj.imgurl = data.results[0].picture.large
        displayObj.Description = data.results[0].gender
        document.getElementById("old-img").src=displayObj.imgurl;
        document.getElementById("name").innerHTML = displayObj.name;
        document.getElementById("desc").innerHTML = displayObj.Description;
    })
    
};
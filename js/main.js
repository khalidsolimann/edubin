var x = document.getElementById("imgheader")
var hh = document.querySelector(".header1")
var pp = document.querySelector(".headerp")

var array = [
    {
        id: 1,
        img: "s-1.jpg",
        h1: "Upcoming events",
        p: "Donec vitae sapien ut libearo venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt  Sed fringilla mauri amet nibh"
    }
    , {
        id: 1,
        img: "s-3.jpg",
        h1: "Welcome to Edubin",
        p: "Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet "


    }, {
        id: 1,
        img: "s-2.jpg",
        h1: "Choose the right theme for education",
        p: "auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt mauris"

    }
]

count = 0;
var btni = document.getElementById("btni")
var btnd = document.getElementById("btnd")
btni.addEventListener("click", () => {
    x.src = "images/" + array[count].img;
    hh.innerHTML = array[count].h1;
    pp.innerHTML = array[count].p;
    count += 1;
    if (count > array.length - 1) { count = 0; }


})
btnd.addEventListener("click", () => {
    x.src = "images/" + array[count].img;
    hh.innerHTML = array[count].h1;
    pp.innerHTML = array[count].p;
    count -= 1;
    if (count < 0) { count = array.length - 1; }


})
/*nnn */

var arr = [

    {
        img: "ctg-1.png",
        p:"language"

    }
    ,
    {
        img: "ctg-2.png",
        p:"business"

    }
    ,
    {
        img: "ctg-3.png",
        p:"literature"


    },
    {
        img: "1.png",
        p:"culture"

    },
    {
        img: "2.png",
        p:"civilization"


    },
    {
        img: "3.png",
        p:"hobbey"


    }


]

var vbtn = document.querySelector("#bt1")
var vbt2 = document.querySelector("#bt2")
var first = document.querySelector(".first1")
var second = document.querySelector(".second2")
var third = document.querySelector(".third3")
var p1=document.getElementById("m1")
var p2=document.getElementById("m2")
var p3=document.getElementById("m3")

count = 0;

vbt2.addEventListener("click", () => {
    first.src = "images/all-icon/" + arr[count +1].img
    p1.innerHTML=arr[count +1].p;

    second.src = "images/all-icon/" + arr[count + 2].img;
    p2.innerHTML=arr[count +2].p;

    if (count==3) { count = 0 }
    
    third.src = "images/all-icon/" + arr[count + 3].img;
    p3.innerHTML=arr[count +3].p;

    count += 1;
    if (count > arr.length - 1) { count == 0 }
})
coun=5
vbtn.addEventListener("click", () => {
 
    first.src = "images/all-icon/" + arr[coun -1].img
    p1.innerHTML=arr[coun -1].p;


    second.src = "images/all-icon/" + arr[coun -2].img
    p2.innerHTML=arr[coun -2].p;

    if (coun==3) { coun = 5 }

    third.src = "images/all-icon/" + arr[coun -3].img
    p3.innerHTML=arr[coun -3].p;

    coun-=1

})



var arri=[

    {
        img:"cu-3.jpg"
    }
    ,
    {
        img:"cu-4.jpg"
    }
    ,
    {
        img:"cu-2.jpg"
    }
    ,
    {
        img:"cu-1.jpg"
    }
    ,
    {
        img:"cu-5.jpg"
    }
    ,
    {
        img:"cu-3.jpg"
    }
]

var imgc1=document.getElementById("imgc1")
var imgc2=document.getElementById("imgc2")
var imgc3=document.getElementById("imgc3")

var ii=document.querySelector(".iall")
cou = 0;

ii.addEventListener("click", () => {
    imgc1.src = "images/course/" + arri[cou +1].img
    

    imgc2.src = "images/course/" + arri[cou + 2].img;

    if (cou==3) { cou = 0 }
    
    imgc3.src = "images/course/" + arri[cou + 3].img;
    
    cou += 1;
    if (cou > arr.length - 1) { cou == 0 }
})
var g=document.querySelector(".all")
g.addEventListener("hover", () => {
    imgc1.src = "images/course/" + arri[count +1].img
    

    imgc2.src = "images/course/" + arri[count + 2].img;

    if (count==3) { count = 0 }
    
    imgc3.src = "images/course/" + arri[count + 3].img;
    
    count += 1;
    if (count > arr.length - 1) { count == 0 }
})

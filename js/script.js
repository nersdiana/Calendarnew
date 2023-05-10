"use strict"

// // let date = new Date(2020, 2, 0);

// // if (date.getDate() == 29) {
// // 	console.log('високосный');
// // } else {
// // 	console.log('обычный');
// // }


let getDays = (year, month) => {
    return new Date(year, month+1, 0).getDate();
};


//таблица

// let tbl_dates = document.querySelector("#tbl_dates");
// let str = "";

// for (let i = 1; i <= 6; i++) {
//     str+="<tr>";
//     for (let j = 1; j <=7; j++) {
//         str+="<td></td>"
//      } 
//     }
//  str+="</tr>";

// tbl_dates.innerHTML=str;

let curYear = (new Date()).getFullYear()
let curMonth = (new Date()).getMonth()


let arr_months = 
["january", "february", "march", "april", 
"may", "june", "july", "august", 
"september", "october", "november", "december"];


let arr_days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];




function fillDates(year, month) {
    let daysCount = getDays(year, month) 
    let tbl_dates = document.querySelector("#tbl_dates");
    
    let monthElem = document.querySelector("#month");
    let str = "";
    tbl_dates.innerHTML='';
    monthElem.innerHTML = '<p>' + arr_months[month] + '</p>';
    let day = 0;
    
    
    str+="<tr>";
    for (let j = 0; j <7;j++) {
        str+="<td>"+ arr_days[j] +"</td>"
    }
    str+="</tr>";

    let dayWeek = (new Date(year, month, 1)).getDay()
    if (dayWeek == 0) {
        dayWeek = 6;
    }
    let prevMonthMaxDay = (new Date(year, month, 0).getDate());
    console.log(prevMonthMaxDay, dayWeek);

    for (let i = 1; i <= 6; i++) {
        str+="<tr>";
        for (let j = 1; j <=7; j++) {
            str+="<td>";
            if (dayWeek <= 1) {
                day++
            } else {
                str+="<span class='old_month'>" + (prevMonthMaxDay - dayWeek + 2)+"</span>";
                dayWeek--
            }
            
            if (day <= daysCount && day != 0) {
                str+="" + day;
            }
            str+="</td>";
        } 
        }
    str+="</tr>";
    tbl_dates.innerHTML=str;
    
}

fillDates(curYear, curMonth)

let tbl_days = document.querySelector("#tbl_days");
let str2 = "";


function nextMonth() {
    if (curMonth == 11) {
        curMonth = 0;
        curYear++;
    fillDates(curYear, curMonth)
        return
    }
    curMonth++;
fillDates(curYear, curMonth)

}

function prevMonth() {
    if (curMonth == 0) {
        curMonth = 11;
        curYear--;
    fillDates(curYear, curMonth)
        return
    }
    curMonth--;
fillDates(curYear, curMonth)
}


function nextYear() {
    curYear++;
fillDates(curYear, curMonth)

}


function prevYear() {
    curYear--;
fillDates(curYear, curMonth)

}






// str2+="<tr>";

//     for (let j = 0; j <7;j++) {
//         str2+="<td>"+ arr_days[j] +"</td>"
//      } 
    
//  str2+="</tr>";

// tbl_days.innerHTML=str2;




//календарь

// let div = document.getElementById("calendar");

// let date = new Date();

// let year = date.getFullYear();
// let month = date.getMonth();
// let day = date.getDate();

// console.log(date);


//let arr_days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

let arr_dates = [];

// for (let i = 1; i < 31; i++) {
//     "january"[0], "march"[2], may[4], "july"[6], august[7],october[9], december[11]
    
// }

for (let i = 1; i < 30; i++) {
    "april"[3], "june"[5], "september"[8], "november"[10]
    
}

for (let i = 1; i <= 29; i++) {
    [1]
    for (let j = 0; j <= 4; j++) {
        
        //once in 4 years
    }
    
}

for (let i = 0; i <= 28; i++) {
//3 years than 1 year gap , than 3 year...
    
}


















// / let btn_previous = document.querySelector("button");
// let btn_next = document.querySelectorAll("button")[1];
// let img = document.querySelector("img");


// let img_arr =[ "./images/1.jpg", "./images/2.jpg", "./images/3.jpg","./images/4.jpg"]

// let lastInd = img_arr.length-1;
//  console.log(lastInd);
// btn_previous.addEventListener("click", function(){
   
//     if(lastInd< 0){
//         lastInd = img_arr.length-1;
//        }
//         img.src = img_arr[lastInd];
//         lastInd--;
        

// })


// let ind = 1;
// btn_next.addEventListener("click", function(){
//    if(ind>= img_arr.length){
//     ind = 0;
//    }
//     img.src = img_arr[ind];
//     ind++;
    
// })

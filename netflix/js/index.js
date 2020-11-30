var target = document.getElementById("logo");

var targetTop = target.getBoundingClientRect().top;

var abTop = window.pageYOffset + target.getBoundingClientRect().top;

if (abTop = 0 ) {
    console.log("맨위");
}





var accOpenState = [0,0,0,0,0,0]; //list open 상태 저장
var faqList = document.getElementsByClassName('faq_list');
var openstateIcon = document.getElementsByClassName('openstate_icon')

// function accOpen(n){
// for ( i = 0; i < 6 ; i++ ) {
//     faqList[i].style="max-height:79px;";
//         openstateIcon[i].style="transform:rotate(0deg);";

//         if (accOpenState[n] == 0) {
//             accOpenState[i] = 0;
//         } 
//         //0 인상태를 클릭했을 때 i > 전부를 0으로 만들어버리는거임 
//         // 나 자신은 1 이 되었지만 결국 다른애들은 다 0 이 돼 서 열수 있는 상태가 됨.
//         //
// }
//     if ( accOpenState[n] == 0 ) {
//        faqList[n].style="max-height:800px;";
//        openstateIcon[n].style="transform:rotate(45deg);";


//        accOpenState[n] = 1;

//     }

//     else {
//         faqList[n].style="max-height:79px;";
//         openstateIcon[n].style="transform:rotate(0deg);";
//         accOpenState[n] = 0;
      
//     }

 


// }




//같은 효과 if 문을 앞에 놓느냐 for문을 앞에놓느냐 차이
//아래거가 더 쉬움


function  accOpen(n) {

    
    if ( accOpenState[n] == 0 ) {
                // 나 혼자만 열려있는 상태 


        for ( i = 0; i < 6 ; i++ ) {
            faqList[i].style="max-height:79px;";
                openstateIcon[i].style="transform:rotate(0deg);";
                accOpenState[i] = 0;
            }
            // 전부 닫은상태로 만들어놓음 


        faqList[n].style="max-height:800px;";
        openstateIcon[n].style="transform:rotate(45deg);";
 
 
        accOpenState[n] = 1;
        //그리고 나를 1 로 바꿔줌 
 
     }
 
     else {
         faqList[n].style="max-height:79px;";
         openstateIcon[n].style="transform:rotate(0deg);";
         accOpenState[n] = 0;
       
     }
}

// for ( i = 0 ; i <1500; i++){
//     document.getElementById('faq_icon').style="left;"+i+"px"
// }

// var i = 0;

// function animation() {
//     if (i>800) {return;}
//     document.getElementById('faq_icon').style="left;"+i+"px";
//     i = i +10;
//     setTimeout(aniIcon,10);
// }




// random img change ( not animation )



   
    var randomBgNumber = Math.floor( Math.random() * 7);
    document.getElementsByClassName('hero_wrap')[0].style = ` background-imge: url (img/bg_${randomBgNumber}.jpg`;



// setInterval(bgChange, 2000);
// 1
// moon.jpg قم بالوصول إلى الصورة وتغيرها إلى

// 2
// "قم بالوصول إلى كلمة الأرض وتحويلها إلى "القمر
let dark=false;
// 3
// بحيث إن ضغطت على البطاقة تتغير الصورة للصورة الأخرى ويتغير الاسم onClick قم بإنشاء دالة واستخدام خاصية
// دون الحاجة إلى الخطوتين 2و1
function planetSwitcher() {
    let title = document.getElementById("caption");
    let image =document.getElementById("image")
    let body = document.getElementById("body");
    dark=!dark;

   if (dark==false){
       body.style.backgroundColor="white"
       image.src ="./images/sun.jpg"
        title.innerHTML= "الشمس"
        body.style.transition="1s ease"
   }
   else{
       body.style.backgroundColor="gray"
       image.src ="./images/moon.jpg"
       title.innerHTML="القمر"
   }
}
// 4
// Night - Light Mode قم بالتعديل على الدالة بحيث تضم إليها خاصية

/*  الوضع الليلي
    يتغير لون خلفية الصفحة للرمادي
    تتغير الصورة لصورة القمر
    "يتغير الاسم أسفل الصورة ويصبح "القمر
*/

/*  الوضع النهاري
    يتغير لون خلفية الصفحة للأبيض
    تتغير الصورة لصورة الشمس
    "يتغير الاسم أسفل الصورة ويصبح "الشمس
*/

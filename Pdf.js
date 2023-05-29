

function generatePDF() {

  let data = validation();
  if (data == false){
      return false;
  }
 
let companyName =document.getElementById("companyName").value;

var doc = new jsPDF('p', 'pt', 'letter');
var htmlstring = '';
var tempVarToCheckPageHeight = 0;
var pageHeight = 0;
pageHeight = doc.internal.pageSize.height;
specialElementHandlers = {
  // element with id of "bypass" - jQuery style selector  
  '#bypassme': function (element, renderer) {
      // true = "handled elsewhere, bypass text extraction"  
      return true
  }
};
margins = {
  top: 150,
  bottom: 60,
  left: 40,
  right: 40,
  width: 600
};
let result1 = document.getElementById('result1').innerHTML;
// alert(result1);
var y = 20;
doc.setLineWidth(2);
//   alert("jingo");
// var imgData = 'data:./logo.png';
// // console.log(imgData);

// header in pdf
doc.setFillColor(60, 10, 128);
doc.rect(0, 0, 1000, 160, "F");
doc.setTextColor(255, 255, 255);
doc.text(250, 30, "Provided by:");

//   alert("jingo");
// doc.addImage(imgData, 'jpeg', 15, 40, 180, 180);
// doc.addImage(base64Img, 'JPEG', data.settings.margin.left, 15, 10, 10);

let img = new Image()

img.src = "./logo.png"

doc.addImage(img,340,15, 50, 20);



// alert("jingo");
doc.setFontStyle('bold');
doc.text(130, 60, "COST OF EMPLOYEE TURNOVER REPORT FOR");
doc.text(245, 90, companyName);

doc.setFontSize(14);
doc.setTextColor(0, 0, 0);
doc.text(70, 180, "Congratulations on taking the first step to uncovering turnover costs!");
doc.text(13, 200, "Here are the result of your calculated costs to estimate areas you can make a difference.");


//tables in pgf
doc.setFontSize(16);

doc.setTextColor(255, 104, 19);
doc.setFontStyle('bold');






doc.text(120, y = y + 230, "Estimated Annual Cost of Turnover : "+ result1);
doc.autoTable({
  html: '#simple_table',
  startY: 70+200,
  theme: 'grid',
  columnStyles: {
      0: {
          cellWidth: 70,
      },
      1: {
          cellWidth: 120,
          fontStyle: 'bold',
          halign: 'center', 

      },
      2: {
          cellWidth: 180,
          fontStyle: 'bold',
          halign: 'center', 

      },
      3: {
        cellWidth: 180,
        fontStyle: 'bold',
        halign: 'center', 

        }
  },
  headStyles: {
  fillColor: [52 , 9, 82],
  halign:'center',

    },
  styles: {
      minCellHeight: 30,
      
  }
}),
doc.text(150, y = y + 150, "Annual Cost Savings and Additional Revenue ");
doc.autoTable({
  html: '#simple_table2',
  startY: 70+150+200,
  theme: 'grid',
  columnStyles: {
      0: {
          cellWidth: 70,
      },
      1: {
          cellWidth: 120,
          fontStyle: 'bold',
          halign: 'center', 

      },
      2: {
          cellWidth: 180,
          fontStyle: 'bold',
          halign: 'center', 

      },
      3: {
        cellWidth: 180,
        fontStyle: 'bold',
        halign: 'center', 

        }
  },
  headStyles: {
  fillColor: [52 , 9, 82],
  halign:'center',
    },
  styles: {
      minCellHeight: 30
  }
})

//  footer of pdf
doc.setTextColor(0, 0, 0);
doc.setFontSize(11);
doc.setFontStyle('normal');
doc.text(80, 600,'Now that you’ve figured out what employee turnover costs you every year, it’s time to take action!');
doc.text(45, 620,'Go ahead and share your Cost of Employee Turnover Report with your team and brainstorm changes you can');
doc.text(130,640,'make now and in the next year to improve your company’s annual attrition rates.');
doc.text(50, 680,'If you have any questions about how the RockStar journey with SMART can help save on those costs, contact');
doc.text(200, 700,'us for a free review of how we can help.');
// doc.text(10, 700, "Now that you’ve figured out what employee turnover costs you every year, it’s time to take action!");
// doc.text(10, 200, "Here are the result of your calculated costs to estimate areas you can make a difference.");
doc.setFillColor(60, 10, 128);
doc.rect(220, 720, 160, 30, "F");
doc.setTextColor(255, 255, 255);
doc.setFontStyle('bold');
doc.text(230, 738,'EMAIL US FOR A REVIEW');

doc.setFillColor(255,104,19);
doc.rect(0, 760, 1000, 100, "F");
doc.setTextColor(255, 255, 255);

doc.textWithLink('HIREROCKSTARTALENT.COM',225, 778,{url: 'mailto:connect@hirerockstartalent.com'});
// doc.textWithLink('Hello World!', 225, 728, {url: 'mailto:fahadg5015@gmail.com'});
// doc.textWithLink('Hello World!', 225, 728, {url: 'https://www.example.com/'});

// orange doted bar
for(i=0;i<=1000;i=i+20){
doc.setFillColor(255,104,19);
doc.rect(i, 210, 10, 5, "F");
doc.setTextColor(255, 255, 255);
}


// New Page || Next Page

doc.addPage();


// orange doted bar
for(i=0;i<=1000;i=i+20){
    doc.setFillColor(255,104,19);
    doc.rect(i, 210, 10, 5, "F");
    doc.setTextColor(255, 255, 255);
    }

doc.setFontSize(15);
doc.setLineWidth(2);
// header in pdf
doc.setFillColor(60, 10, 128);
doc.rect(0, 0, 1000, 160, "F");
doc.setTextColor(255, 255, 255);
doc.setFontStyle('normal');
doc.text(250, 30, "Provided by:");

//   alert("jingo");
// doc.addImage(imgData, 'jpeg', 15, 40, 180, 180);
// doc.addImage(base64Img, 'JPEG', data.settings.margin.left, 15, 10, 10);

// let img2 = new Image()

// img2.src = "./logo.png"

doc.addImage(img,340,15, 50, 20);



// alert("jingo");
doc.setFontStyle('bold');
doc.text(140, 60, "COST OF EMPLOYEE TURNOVER REPORT FOR");
doc.text(250, 90, companyName);

doc.setFontSize(14);
doc.setTextColor(0, 0, 0);
doc.text(70, 180, "Congratulations on taking the first step to uncovering turnover costs!");
doc.text(13, 200, "Here are the result of your calculated costs to estimate areas you can make a difference.");


//tables in pgf
doc.setFontSize(16);

doc.setTextColor(255, 104, 19);
doc.setFontStyle('bold');






doc.text(250, 250, "Cost of Turnover");
doc.autoTable({
  html: '#simple_table3',
  startY: 70+200,
  theme: 'grid',
  columnStyles: {
      0: {
          cellWidth: 300
      },
      1: {
          cellWidth: 110,
          fontStyle: 'bold',
          halign: 'center',
      },
      2: {
          cellWidth: 110,
          fontStyle: 'bold',
          halign: 'center',
      }
  },
  headStyles: {
  fillColor: [52 , 9, 82]
    },
  styles: {
      minCellHeight: 30,
  }
}),

//  footer of pdf
doc.setTextColor(0, 0, 0);
doc.setFontSize(11);
doc.setFontStyle('normal');
// doc.text(80, 600,'Now that you’ve figured out what employee turnover costs you every year, it’s time to take action!');
// doc.text(45, 620,'Go ahead and share your Cost of Employee Turnover Report with your team and brainstorm changes you can');
// doc.text(130,640,'make now and in the next year to improve your company’s annual attrition rates.');
// doc.text(50, 680,'If you have any questions about how the RockStar journey with SMART can help save on those costs, contact');
// doc.text(200, 700,'us for a free review of how we can help.');
// doc.text(10, 700, "Now that you’ve figured out what employee turnover costs you every year, it’s time to take action!");
// doc.text(10, 200, "Here are the result of your calculated costs to estimate areas you can make a difference.");
doc.setFillColor(60, 10, 128);
doc.rect(220, 720, 160, 30, "F");
doc.setTextColor(255, 255, 255);
doc.setFontStyle('bold');
doc.text(230, 738,'EMAIL US FOR A REVIEW');

doc.setFillColor(255,104,19);
doc.rect(0, 760, 1000, 100, "F");
doc.setTextColor(255, 255, 255);

doc.textWithLink('HIREROCKSTARTALENT.COM',225, 778,{url: 'mailto:connect@hirerockstartalent.com'});



// third page or Last Page

doc.addPage();


// orange doted bar
for(i=0;i<=1000;i=i+20){
    doc.setFillColor(255,104,19);
    doc.rect(i, 210, 10, 5, "F");
    doc.setTextColor(255, 255, 255);
    }

doc.setFontSize(14);
doc.setLineWidth(2);
// header in pdf
doc.setFillColor(60, 10, 128);
doc.rect(0, 0, 1000, 160, "F");
doc.setTextColor(255, 255, 255);
doc.setFontStyle('normal');
doc.text(250, 30, "Provided by:");

//   alert("jingo");
// doc.addImage(imgData, 'jpeg', 15, 40, 180, 180);
// doc.addImage(base64Img, 'JPEG', data.settings.margin.left, 15, 10, 10);

// let img2 = new Image()

// img2.src = "./logo.png"

doc.addImage(img,340,15, 50, 20);



// alert("jingo");
doc.setFontStyle('bold');
doc.text(140, 60, "COST OF EMPLOYEE TURNOVER REPORT FOR");
doc.text(250, 90, companyName);

doc.setFontSize(14);
doc.setTextColor(0, 0, 0);
doc.text(70, 180, "Congratulations on taking the first step to uncovering turnover costs!");
doc.text(13, 200, "Here are the result of your calculated costs to estimate areas you can make a difference.");


//tables in pgf
doc.setFontSize(16);
doc.setTextColor(255, 104, 19);
doc.setFontStyle('bold');


doc.text(240, 250, "View Pre-set Values");
doc.autoTable({
  html: '#simple_table4',
  startY: 70+200,
  theme: 'grid',
  columnStyles: {
      0: {
          cellWidth: 300,
          
      },
      1: {
          cellWidth: 220,
          fontStyle: 'bold',
          halign: 'center',
      },

  },
  headStyles: {
  fillColor: [52 , 9, 82],
  halign: 'center',
    },
  styles: {
      minCellHeight: 30,
  }
}),

//  footer of pdf
doc.setTextColor(0, 0, 0);
doc.setFontSize(11);
doc.setFontStyle('normal');
doc.text(80, 600,'Now that you’ve figured out what employee turnover costs you every year, it’s time to take action!');
doc.text(45, 620,'Go ahead and share your Cost of Employee Turnover Report with your team and brainstorm changes you can');
doc.text(130,640,'make now and in the next year to improve your company’s annual attrition rates.');
doc.text(50, 680,'If you have any questions about how the RockStar journey with SMART can help save on those costs, contact');
doc.text(200, 700,'us for a free review of how we can help.');
// doc.text(10, 700, "Now that you’ve figured out what employee turnover costs you every year, it’s time to take action!");
// doc.text(10, 200, "Here are the result of your calculated costs to estimate areas you can make a difference.");
doc.setFillColor(60, 10, 128);
doc.rect(220, 720, 160, 30, "F");
doc.setTextColor(255, 255, 255);
doc.setFontStyle('bold');
doc.text(230, 738,'EMAIL US FOR A REVIEW');

doc.setFillColor(255,104,19);
doc.rect(0, 760, 1000, 100, "F");
doc.setTextColor(255, 255, 255);

doc.textWithLink('HIREROCKSTARTALENT.COM',225, 778,{url: 'mailto:connect@hirerockstartalent.com'});





// var pdf = btoa(doc.output()); 
var pdfData = doc.output('datauristring'); 
// console.log(pdfData);
// window.open(pdfData);
let fName = document.getElementById("firstName").value;
let lName = document.getElementById("lastName").value;
let email = document.getElementById("email").value;

let comboName= fName+" "+lName;


let data3 = {
  pdf : pdfData,
  name : comboName,
  email : email,
  subject : "Teams & Leaders"
}

$.ajax({
  method: "POST",
  url: "./mail.php",
  data: data3,
}).done(function(data){
  console.log(data);
   alert("PDF is Send via Email");
});



// doc.save('Your_Estimated_Quote.pdf');

}


function validation(){


let firstName =document.getElementById("firstName").value;
let lastName =document.getElementById("lastName").value;
let companyName =document.getElementById("companyName").value;
let email =document.getElementById("email").value;
let phone =document.getElementById("phone").value;

// console.log(firstName,lastName,phone.email,companyName);


if(firstName==''){
document.getElementById("firstName1").classList.remove("d-none");
return false ;
}
else{
document.getElementById("firstName1").classList.add("d-none");
}

if(lastName==''){
document.getElementById("lastName1").classList.remove("d-none");
return false ;
}
else{
document.getElementById("lastName1").classList.add("d-none");
}

if(companyName==''){
document.getElementById("companyName1").classList.remove("d-none");
return false ;
}
else{
document.getElementById("companyName1").classList.add("d-none");
}

if(email==''){
document.getElementById("email1").classList.remove("d-none");
return false ;
}
else{

let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (email.match(valid)){
document.getElementById("email1").classList.add("d-none");
}
else{
document.getElementById("email1").classList.remove("d-none");
return false ;
}
}
if(phone==''){
document.getElementById("phone1").classList.remove("d-none");
return false ;
}
else{

let PhoneValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if (phone.match(PhoneValid)){
document.getElementById("phone1").classList.add("d-none");
}
else{
document.getElementById("phone1").classList.remove("d-none");
return false ;
}
// document.getElementById("phone1").classList.add("d-none");
}



}





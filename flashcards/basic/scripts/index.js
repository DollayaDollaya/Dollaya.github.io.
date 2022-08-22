//Create a question and answer object just like you did on the page
//เลือกอันแรก จาก Page 66 มา create

// [ปอสอน] อันนี้คือ define objects ด้วย questions and answers ไหม

class question {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

// [ปอสอน] สร้าง objects question 3 ตัว
let question1 = new question ("What is your favorite food?", "pizza");
let question2 = new question ("What did you eat last night?", "Fried Chicken");
let question3 = new question ("What are you going to buy tomorrow?", "Chocolate Milk");

// เอา 3 ตัวไปใส่ใน array
// Declare a new array
let questionArray = [];
 
// Create three questions and push them onto the quiz array
questionArray.push(question1)
questionArray.push(question2)
questionArray.push(question3);

let index = 0; 
while (index < questionArray.length){
    console.log(questionArray[index ]);
    index = index+1;
}

index = 0;
document.getElementById('p1').innerHTML = questionArray[index].question;
document.getElementById('p2').innerHTML = questionArray[index].answer;
document.getElementById('p1').onclick = function() { // Wait for a click to be detected on p1

if (index == questionArray.length -1) {
  index = 0;
} else {
index = index+1;}

document.getElementById('p1').innerHTML = questionArray[index].question;
document.getElementById('p2').innerHTML = questionArray[index].answer;
}

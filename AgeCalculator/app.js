const ageCalculate=()=>{
 const today=new Date();
 const inputData=new Date(document.getElementById('date-input').value);

 const birthDetails={
    date:inputData.getDate(),
    month:inputData.getMonth()+1,
    year:inputData.getFullYear()
 };
 const currentyear=today.getFullYear();
 const currentMonth=today.getMonth()+1;
 const currentDate=today.getDate();

 if(isFutureDate(birthDetails,currentyear,currentMonth,currentDate))
{
    alert("Not Born Yet");
    displayResult("-","-","-");
    return;
 }
 
}
document.getElementById("cal-age-button").addEventListener("click",ageCalculate);
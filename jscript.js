document.getElementById("kira").addEventListener("click", function(){
  var principalJs = document.getElementById("principal").value;
  var deposit = document.getElementById("deposit").value;
  var interest = document.getElementById("interest").value;
  var years = document.getElementById("years").value;
  let totalPrinciple = principalJs-deposit;
  let totalInterest = (interest/100) * totalPrinciple * years;
  let totalToPay = totalInterest + totalPrinciple;
  let monthlyToPay = totalToPay/years/12;
  payment.innerHTML = 'RM ' + monthlyToPay;
});

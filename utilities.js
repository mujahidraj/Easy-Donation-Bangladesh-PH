
function mainBalanceDeducted (id,areaId){
    const donatedBalance = document.getElementById(id).value;
    const profileBalance = document.getElementById("main-balance");
      profileBalance.innerText = parseFloat(profileBalance.innerText) - parseFloat(donatedBalance);
    
       const noakhaliBalance = document.getElementById(areaId);
       noakhaliBalance.innerText = parseFloat(noakhaliBalance.innerText) + parseFloat(donatedBalance);


      return profileBalance.innerText && noakhaliBalance.innerText;


}


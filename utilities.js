function mainBalanceDeducted(id, areaId, areaName) {
    const donatedBalance = document.getElementById(id).value;
    const profileBalance = document.getElementById("main-balance");
    profileBalance.innerText = parseFloat(profileBalance.innerText) - parseFloat(donatedBalance);
    const donationAreaName = document.getElementById(areaName).innerText;
    const noakhaliBalance = document.getElementById(areaId);
    const now = new Date();
    noakhaliBalance.innerText = parseFloat(noakhaliBalance.innerText) + parseFloat(donatedBalance);
    const modalsPara = document.getElementById("inspiration").innerText = "You have donated " + donatedBalance + " BDT to the " +donationAreaName+ " at " + now + " .Thank you !"
    
    const historyAdd = document.createElement("div");
    historyAdd.innerHTML = `
        <div class="p-8">
                <h3 class="text-xl font-bold pb-4">${donatedBalance} Taka is Donated for ${donationAreaName}</h3>
                <p class="text-[#111111B2] font-light">Date :${now} </p>
            </div>
        `
    const history = document.getElementById("history-div").appendChild(historyAdd)
    return profileBalance.innerText && noakhaliBalance.innerText && modalsPara && history;
}



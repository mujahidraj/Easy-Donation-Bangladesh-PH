document.getElementById("noakhali-donate-button").addEventListener("click", function () {
    mainBalanceDeducted("noakhali-donated-amount", "noakhali-balance");
    document.getElementById("my_modal_5").showModal();

})

document.getElementById("feni-donate-button").addEventListener("click", function () {
    mainBalanceDeducted("feni-donated-amount", "feni-balance");
    document.getElementById("my_modal_5").showModal();



})

document.getElementById("student-donate-button").addEventListener("click", function () {
    mainBalanceDeducted("student-donated-amount", "student-balance");
    document.getElementById("my_modal_5").showModal();

})


document.getElementById("history-button").addEventListener("click",function(){
    document.getElementById("donation-div").classList.add("hidden");
        document.getElementById("history-div").classList.remove("hidden");

})

document.getElementById("donation-button").addEventListener("click",function(){
    document.getElementById("donation-div").classList.remove("hidden");
        document.getElementById("history-div").classList.add("hidden");

})
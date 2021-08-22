
document.addEventListener("DOMContentLoaded", function(event) { 
    const billAmount = document.querySelector("#bill-amount");
    const cashGiven = document.querySelector("#cash-given");
    const clickButton = document.querySelector("#check-btn");
    const message = document.querySelector("#error-message");
    const noOfNotes = document.querySelectorAll(".no-of-notes")
    
        
    const availableNotes = [2000, 500, 100, 20, 10, 5, 1]
    
        clickButton.addEventListener("click", function validateBillAndCashAmount() {
            hideMessage();
            if (isNaN(billAmount.value)) {
                showMessage("**Must Input Numbers**");
            } else {
                if (billAmount.value > 0) {
                    if (cashGiven.value >= billAmount.value) {
                        const Difference = cashGiven.value - billAmount.value;
                        calculateChange(Difference);
                    } else {
                        showMessage("**The cash provided should be equal to the bill amount**");
                    }
                } else {
                    showMessage("❌ Invalid Bill Amount ❌");
                }
            }
        });
    
        function calculateChange(Difference) {
            for (let i = 0; i < availableNotes.length; i++) {
                const numberOfNotes = Math.trunc(Difference / availableNotes[i]);
                Difference %= availableNotes[i];
                noOfNotes[i].innerText = numberOfNotes;
            }
        }
    
        function hideMessage() {
            message.style.display = "none";
        }
    
        function showMessage(msg) {
            console.log("here");
            message.style.display = "block";
            message.innerText = msg;
        }
    
      });
    
    
function getDonateInput(donationID, totalDonationID) {
    let myBalances = parseFloat(document.getElementById("myBalance").innerText);
    const donationAmount = parseFloat(document.getElementById(donationID).value) ;
    let totalDonation = parseFloat(document.getElementById(totalDonationID).innerText);

    if (!isNaN(donationAmount) && donationAmount > 0 && donationAmount <= myBalances) {
        myBalances -= donationAmount;
        totalDonation += donationAmount;
        return { totalDonation, myBalances, donationAmount };
    } else {
        alert('Invalid donation amount or insufficient balance.');
    }
    
}


// Function to add donation history
function addToHistory(amount) {
    const historyList = document.getElementById('history');

    const historyEntry = document.createElement('div');
    historyEntry.classList.add('font-bold' ,'p-4','border-gray-100','rounded-lg','border-2'); // Optional: add a class for styling

    const amountParagraph = document.createElement('p');
    amountParagraph.textContent = `${amount} BDT is Donated for Bangladesh`;

    const dateParagraph = document.createElement('p');
    const currentTime = new Date().toString();
    dateParagraph.textContent = `Date: ${currentTime}`;

    // Append p elements to the history entry div
    historyEntry.appendChild(amountParagraph);
    historyEntry.appendChild(dateParagraph);

    // Append the history entry div to the history list
    historyList.appendChild(historyEntry);
}

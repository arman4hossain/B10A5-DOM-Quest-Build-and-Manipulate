

function getDonateInput(donationID, totalDonationID) {
    let myBalances = parseFloat(document.getElementById("myBalance").innerText);
    const donationAmount = parseFloat(document.getElementById(donationID).value) ;
    let totalDonation = parseFloat(document.getElementById(totalDonationID).innerText);

    if (!isNaN(donationAmount) && donationAmount > 0 && donationAmount <= myBalances) {
        myBalances -= donationAmount;
        totalDonation += donationAmount;

        document.getElementById('donationAlert').classList.remove('hidden');
        return { totalDonation, myBalances, donationAmount };
    } else {
        alert('Invalid donation amount or insufficient balance.');
    }
    
}


function addToHistory(amount, customTextID) {
    const historyList = document.getElementById('history');
    const customText = document.getElementById(customTextID).innerText;

    const historyEntry = document.createElement('div');
    historyEntry.classList.add('font-bold' ,'p-4','border-gray-100','rounded-lg','border-2'); 

    const amountParagraph = document.createElement('p');
    amountParagraph.textContent = `${amount} BDT is Donated for ${customText}`;

    const dateParagraph = document.createElement('p');
    const currentTime = new Date().toString();
    dateParagraph.textContent = `Date: ${currentTime}`;

    historyEntry.appendChild(amountParagraph);
    historyEntry.appendChild(dateParagraph);
    historyList.appendChild(historyEntry);
}

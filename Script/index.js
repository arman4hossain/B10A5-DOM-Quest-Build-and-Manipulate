document.getElementById("History-btn").addEventListener('click', function () {
    document.getElementById('Donate-section').classList.add('hidden');
    document.getElementById('History-btn').classList.add('bg-lime-300', 'font-bold');
    document.getElementById('History-section').classList.remove('hidden');
    document.getElementById('Donate-btn').classList.remove('bg-[#B4F461]', 'font-bold');

});

document.getElementById("Donate-btn").addEventListener('click', function () {
    document.getElementById('Donate-section').classList.remove('hidden');
    document.getElementById('History-btn').classList.remove('bg-lime-300', 'font-bold');
    document.getElementById('History-section').classList.add('hidden');
    document.getElementById('Donate-btn').classList.add('bg-[#B4F461]', 'font-bold');
});

document.getElementById("Donate-btn-NK").addEventListener('click', function (event) {
    event.preventDefault();
    const donationAmount = getDonateInput('donateAmountNoakhali', 'NoakhaliBalance');

    if (donationAmount) {
        document.getElementById("myBalance").innerText = donationAmount.myBalances;
        document.getElementById("NoakhaliBalance").innerText = donationAmount.totalDonation;

        // Add to history after donation is successful
        addToHistory(donationAmount.donationAmount, 'donationHeaderNK');
    }
});

document.getElementById("Donate-btn-Feni").addEventListener('click', function (event) {
    event.preventDefault();
    const donationAmount = getDonateInput('donateAmountFeni', 'FeniBalance');

    if (donationAmount) {
        document.getElementById("myBalance").innerText = donationAmount.myBalances;
        document.getElementById("FeniBalance").innerText = donationAmount.totalDonation;

        // Add to history after donation is successful
        addToHistory(donationAmount.donationAmount, 'donationHeaderFeni');
    }
});


document.getElementById("Donate-btn-Quota").addEventListener('click', function (event) {
    event.preventDefault();
    const donationAmount = getDonateInput('donateAmountQuota', 'QuotaBalance');

    if (donationAmount) {
        document.getElementById("myBalance").innerText = donationAmount.myBalances;
        document.getElementById("QuotaBalance").innerText = donationAmount.totalDonation;

        // Add to history after donation is successful
        addToHistory(donationAmount.donationAmount, 'donationHeaderQuota');
    }
});



const exchangeRate = {
    USD: 1,
    EUR: 0.84,
    JPY: 104.28,
    GBP: 0.76,
    ARS: 1100,
};

function populateCurrencies() {
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    for (const currency in exchangeRate) {
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        fromCurrency.appendChild(option);
    }
    for (const currency in exchangeRate) {
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        toCurrency.appendChild(option);
    }
    fromCurrency.value = 'USD';
    toCurrency.value = 'ARS';
}

function convertCurrency(amount, fromCurrency, toCurrency) {
    const convertedAmount = amount * exchangeRate[toCurrency] / exchangeRate[fromCurrency];
    return convertedAmount.toFixed(2);
}

populateCurrencies();

document.getElementById('convertBtn').addEventListener('click', () => {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    const result = convertCurrency(amount, fromCurrency, toCurrency);
    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
});
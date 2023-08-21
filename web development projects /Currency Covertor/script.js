const convertBtn = document.getElementById('convertBtn');
const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', async () => {
  const amount = parseFloat(amountInput.value);
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  const conversionRate = await getConversionRate(fromCurrency, toCurrency);
  const convertedAmount = (amount * conversionRate).toFixed(2);

  resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
});

async function getConversionRate(fromCurrency, toCurrency) {
  const conversionRates = {
    USD: {
      EUR: 0.85,
      GBP: 0.73,
      JPY: 110.35,
      INR: 74.24,
    },
    EUR: {
      USD: 1.18,
      GBP: 0.87,
      JPY: 130.21,
      INR: 87.59,
    },
    GBP: {
      USD: 1.37,
      EUR: 1.15,
      JPY: 149.03,
      INR: 102.30,
    },
    JPY: {
      USD: 0.0091,
      EUR: 0.0077,
      GBP: 0.0067,
      INR: 0.72,
    },
    INR: {
      USD: 0.013,
      EUR: 0.0114,
      GBP: 0.0098,
      JPY: 1.39,
    },
  };

  return conversionRates[fromCurrency][toCurrency] || 1;
}

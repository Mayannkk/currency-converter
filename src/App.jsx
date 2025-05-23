import { useCallback, useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyOptions = useCurrencyInfo(fromCurrency);

  useEffect(() => {
    setConvertedAmount(amount * currencyOptions[toCurrency]);
  }, [amount, toCurrency, currencyOptions]);

  const handleCurrencyConverter = () => {
    setConvertedAmount(amount * currencyOptions[toCurrency]);
  };

  const swapCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div className="bg-gray-400 flex justify-center items-center h-screen w-screen">
      <div className="relative bg-black h-auto max-w-2xl w-full p-10 m-10 border border-gray-800 rounded-lg flex flex-col gap-4">
        <InputBox
          label="from"
          amount={amount}
          onAmountChange={setAmount}
          currencyOptions={Object.keys(currencyOptions)}
          selectCurrency={fromCurrency}
          onCurrencyChange={setFromCurrency}
        />
        <InputBox
          label="to"
          amount={convertedAmount}
          onAmountChange={setConvertedAmount}
          currencyOptions={Object.keys(currencyOptions)}
          selectCurrency={toCurrency}
          onCurrencyChange={setToCurrency}
        />
        <button
          className="absolute top-28 left-72 text-3xl"
          onClick={swapCurrency}
        >
          🔃
        </button>
        <button
          className="p-4 bg-blue-600 text-white border rounded-lg text-xl hover:bg-blue-800 "
          onClick={handleCurrencyConverter}
        >
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;

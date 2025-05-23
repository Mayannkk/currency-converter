import { useId } from "react";

function InputBox({
  label = "Amount",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const myInput = useId();

  console.log("currencyOPT", currencyOptions);
  return (
    <div
      className={`bg-white p-3 rounded-lg text-sm flex justify-between gap-8 `}
    >
      <div className="w-1/2">
        <label htmlFor={myInput} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={myInput}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisable}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-start text-left">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none w-full"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions && currencyOptions.length ? (
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))
          ) : (
            <option value="usd">usd</option>
          )}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

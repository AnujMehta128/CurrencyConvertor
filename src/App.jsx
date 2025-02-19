import { useState } from 'react'
import InputBox from "./components/InputBox"
import useCurrencyinfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedamount, setConvertedAmount] = useState(0);


  const Currencyinfo = useCurrencyinfo(from);

  const options = Object.keys(Currencyinfo);

  const convert = () => {
    setConvertedAmount(amount * Currencyinfo[to]);
  }
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();

      }}>
   <div className="h-lvh bg-red-300 flex justify-center flex-col items-center">
        <InputBox
          amount={amount}
          currencyOption={options}
          onCurrencyChange_from={(currency) => setFrom(currency)}
          selectCurrency_from={from}
          converted_amount={convertedamount}
          onCurrencyChange_to={(currency) => setTo(currency)}
          onAmountchange={(amount) => setAmount(amount)}
          selectCurrency_to={to}
          />

        <button type='button' className="bg-blue-500 text-white px-4 py-2 rounded mt-4 size-24" onClick={convert}>
          Convert {from} to {to}
        </button>
        </div>
      </form>
    </>
  )
}

export default App

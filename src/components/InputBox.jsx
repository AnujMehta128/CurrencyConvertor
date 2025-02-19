import React from "react";

function InputBox({
    amount,
    onAmountchange,
    onCurrencyChange_from,
    currencyOption = [],
    selectCurrency_from = "usd",
    amountDisable = false,
    currencyDisable = false,
    converted_amount,
    onCurrencyChange_to,
    selectCurrency_to = "inr",

}) {
    return (
        <div className="h-lvh bg-red-300 flex justify-center flex-col items-center">
            <div className="mb-4 text-xl text-gray-700 font-bold">Currency Convertor</div>
            <div className="bg-black min-w-max h-80 flex m-12 flex-col border-4 border-black">

                <div className="bg-yellow-200 h-1/2 w-full flex flex-row justify-between items-center ">
                    <p className="text-black m-2">FROM:</p>
                    <input type="number" placeholder="Amount" className="border-black border-2 rounded-sm" value={amount} onChange={(e) => onAmountchange && onAmountchange(Number(e.target.value))} disabled={amountDisable}></input>
                    <select className="ml-64 size-14 mt-2" value={selectCurrency_from} onChange={(e) => onCurrencyChange_from && onCurrencyChange_from(e.target.value)} disabled={currencyDisable}>
                        {currencyOption.map((value) => (
                            <option key={value} value={value}>{value}</option>
                        ))}
                    </select>
                </div>

                <div className="bg-yellow-200 h-1/2 w-full flex flex-row justify-between items-center mt-1 end-0">
                    <p className="text-black m-2">TO:</p>
                    <input type="number" placeholder="Amount" className="border-black rounded-sm border-2" value={converted_amount}></input>
                    <select className="ml-64 size-14 mt-2" value={selectCurrency_to} onChange={(e) => onCurrencyChange_to && onCurrencyChange_to(e.target.value)}>
                        {currencyOption.map((currency) =>
                            (<option key={currency} value={currency}>{currency}</option>)
                        )}

                    </select>
                </div>



            </div>

            
        </div>
    );
}

export default InputBox;
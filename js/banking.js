    // Deposit
    let depositValue = document.getElementById('deposit-value');
    let depositOutput = document.getElementById('deposit-output');
    // withDraw
    let withDrawValue = document.getElementById('withdraw-value');
    let withDrawOutput = document.getElementById('withdraw-output');
    // Balance
    let balanceOutput = document.getElementById('balance-output');


    function addMoney(currentAmount,newAmount){
        const result = parseFloat(currentAmount) + parseFloat(newAmount);
        return result;
    };
    function minus(currentAmount,newAmount){
        const minusMoney = parseFloat(currentAmount) - parseFloat(newAmount)
        return minusMoney;
    };

    function deposit() {
        // depositOutput.innerText =
        //     parseFloat(depositOutput.innerText) + parseFloat(depositValue.value);
        let limon = parseFloat(document.getElementById('deposit-value').value);
        if(limon<0){
            return alert('Please input Positive value');
        }
        // Short
        const depositTotal = addMoney(depositOutput.innerText,depositValue.value)
        depositOutput.innerText = depositTotal;
        balanceOutput.innerText = depositTotal;
        // balanceOutput.innerText =
        //     parseFloat(balanceOutput.innerText) + parseFloat(depositValue.value);
        // Clening
        depositValue.value = '';
    }

    function withdraw() {
        let limon = parseFloat(document.getElementById('withdraw-value').value);
        if(limon<0){
            return alert('Please input Positive value')
        }
        //      withDrawOutput.innerHTML =
        //     parseFloat(withDrawOutput.innerHTML) + parseFloat(withDrawValue.value);
        const withDrawTotal = addMoney(withDrawOutput.innerText,withDrawValue.value);
        withDrawOutput.innerHTML = withDrawTotal;

        // balanceOutput.innerText =
        //     parseFloat(balanceOutput.innerText) - parseFloat(withDrawValue.value);
        const minusTotal = minus(balanceOutput.innerText,withDrawValue.value)
        balanceOutput.innerText = minusTotal;
        // Clening
        // withDrawValue.value = '';
    }
try {
    let fellows = JSON.parse(prompt('Введите количество человек:'));
    if (!Number.isInteger(fellows) || fellows <= 0) {
        alert('Некорректное количество человек!');
    } else {
        let billAmount = JSON.parse(prompt('Введите сумму счёта:'));
        if (billAmount <= 0) {
            alert('Некорректная сумма счёта!');
        } else {
            let tipPercentage = JSON.parse(prompt('Введите процент чаевых:'));
            if (tipPercentage < 0) {
                alert('Некорректный процент чаевых!');
            } else {
                alert(`Каждый должен заплатить ${(((billAmount / 100) * tipPercentage + billAmount) / fellows).toFixed(2)} рублей`);
            }
        }
    }
} catch (e) {
    alert('Некорректный ввод!');
}
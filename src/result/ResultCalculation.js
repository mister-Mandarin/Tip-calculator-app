export const ResultCalculation = (calculateData) => {
    let help = calculateData.bill / calculateData.people;
    let TpAmount = help * (calculateData.tip / 100);
    let personTotalSum = help + TpAmount;
    let calcRez = parseFloat(personTotalSum.toFixed(2));
    let calcTpAmount = parseFloat(TpAmount.toFixed(2));

    return {rez: calcRez, tipAmount: calcTpAmount};
};
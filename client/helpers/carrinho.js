UI.registerHelper('duasCasas', function (numero) {
    return accounting.formatMoney(numero, "R$ ", 2, ".", ",");
});
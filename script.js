var autoClean = true, outputValue, outputValue2, lastInputId, operadora, label, formatedGCLabel, isSpecial = true;

// TODO: atualizar Ndata
const Ndata =
{
    operadoras:
        [{ id: 52, nome: "ALELO", cod: 98, layout: "" },
        { id: 0, nome: "REDECARD", cod: 10, layout: "" },
        { id: 1, nome: "CIELO", cod: 60, layout: "" },
        { id: 2, nome: "SODEXO", cod: 140, layout: "" },
        { id: 3, nome: "VALESHOP", cod: 520, layout: "" },
        { id: 4, nome: "VR", cod: 210, layout: "" },
        { id: 5, nome: "POLICARD", cod: 220, layout: "" },
        { id: 6, nome: "TICKET", cod: 110, layout: label + "" },
        { id: 7, nome: "CABAL", cod: 180, layout: "" },
        { id: 8, nome: "COOPERCRED", cod: 550, layout: "" },
        { id: 9, nome: "COMPROCARD", cod: 590, layout: "" },
        { id: 10, nome: "BANESTES", cod: 570, layout: "" },
        { id: 11, nome: "DACASA", cod: 580, layout: "" },
        { id: 12, nome: "ALGORIX", cod: 610, layout: "" },
        { id: 13, nome: "FORTBRASIL", cod: 400, layout: "" },
        { id: 14, nome: "BRASILCARD", cod: 530, layout: "" },
        { id: 15, nome: "BIGCARD", cod: 620, layout: "" },
        { id: 16, nome: "TRIPAG", cod: 720, layout: "" },
        { id: 17, nome: "UNICA", cod: 720, layout: "" },
        { id: 18, nome: "GETNET", cod: 100, layout: "" },
        { id: 19, nome: "VALEMAIS", cod: 460, layout: label + "" },
        { id: 20, nome: "GLOBALPAYMENTS", cod: 160, layout: "" },
        { id: 21, nome: "NUTRICASH", cod: 600, layout: "" },
        { id: 22, nome: "BENVISAVALE", cod: 840, layout: label + "" },
        { id: 23, nome: "BOLT", cod: 901, layout: "" },
        { id: 24, nome: "BANRICOMPRAS", cod: 70, layout: "" },
        { id: 25, nome: "SOROCRED", cod: 240, layout: "" },
        { id: 26, nome: "BIN", cod: 380, layout: "" },
        { id: 27, nome: "CALCARD", cod: 410, layout: "" },
        { id: 28, nome: "PERSONALCARD", cod: 290, layout: "" },
        { id: 29, nome: "CONVCARD", cod: 280, layout: label + "" },
        { id: 30, nome: "VEROCHEQUE", cod: 200, layout: "" },
        { id: 31, nome: "ORGCARD", cod: 982, layout: "" },
        { id: 32, nome: "SAFRAPAY", cod: 450, layout: "" },
        { id: 33, nome: "MAXXCARD", cod: 560, layout: "" },
        { id: 34, nome: "SEICON", cod: 813, layout: "" },
        { id: 35, nome: "BANESE", cod: 730, layout: "" },
        { id: 36, nome: "VERDECARD", cod: 500, layout: "" },
        { id: 37, nome: "CREDISHOP", cod: 780, layout: "" },
        { id: 38, nome: "SIPAG", cod: 660, layout: "" },
        { id: 39, nome: "SENFF", cod: 330, layout: "" },
        { id: 40, nome: "VEGASCARD", cod: 270, layout: "" },
        { id: 41, nome: "STONE", cod: 390, layout: "" },
        { id: 42, nome: "BIQ", cod: 670, layout: "" },
        { id: 43, nome: "PAGSEGURO", cod: 680, layout: "" },
        { id: 44, nome: "GREENCARD", cod: 150, layout: "" },
        { id: 45, nome: "VALECARD", cod: 230, layout: "" },
        { id: 46, nome: "GOODCARD", cod: 120, layout: "" },
        { id: 47, nome: "ECXCARD", cod: 540, layout: "" },
        { id: 48, nome: "PLANVALE", cod: 130, layout: "" },
        { id: 49, nome: "LIBERCARD", cod: 250, layout: "" },
        { id: 50, nome: "USECRED", cod: 740, layout: "" },
        { id: 51, nome: "FAMILLYCARD", cod: 760, layout: "" },
        { id: 53, nome: "DMCARD", cod: 190, layout: "" },
        { id: 54, nome: "PICPAY", cod: 889, layout: "" }]
};

console.log(Ndata.operadoras.nome);
for (i = 0; i < Ndata.operadoras.length; i++) {
    var option = document.createElement('option');
    option.value = Ndata.operadoras[i].nome;
    document.getElementById("inputOperadora-datalist").appendChild(option);
}


function Convert() {
    label = document.getElementById("inputLabel").value.toString().replace(/\s/g, '');
    operadora = document.getElementById("inputOperadora").value.toUpperCase();
    formatGCLabel();
    Verify();

}

function AutoClean(input) {
    if (input == 'label') {
        lastInputId = "inputLabel";
        if (document.getElementById("inputLabel").value != "" && autoClean) {
            document.convert.label.value = "";
        }
    } else if ('operadora') {
        lastInputId = "inputOperadora";
        if (document.getElementById("inputOperadora").value != "" && autoClean) {
            document.convert.operadora.value = "";
        }
    }
}

function Clean() {
    document.convert.label.value = "";
    document.convert.operadora.value = "";
    document.convert.output.value = "";
    document.getElementById("tempOutput").innerHTML = "OPERADORA - COD";

    if (document.getElementById("inputOutput1") != null) {
        document.getElementById("inputOutput1").parentNode.removeChild(document.getElementById("inputOutput1"));
    }
}

function Verify() {
    const Ldata =
    {
        operadoras:
            [{ id: 0, layout: "REDEP.&#(4)." + label + ".%y%m%d%H%M%S" },
            { id: 1, layout: "%Y%m%d_CIELO&C(2)_" + label + "_&C(20)" },
            { id: 2, layout: "sdx%y%m%d." + label + ".&C(3)" },
            { id: 3, layout: "VSHOP_" + label + "_%Y%m%d%H%M%S_&C(6).txt" },
            { id: 4, layout: "VR_" + label + "_%Y%m%d_&C(6).txt" },
            { id: 5, layout: "POLICARD_" + label + "_%Y%m%d_&C(6).TXT" },
            { id: 6, layout: label + "_DET%d%m%Y-&C(6).txt" },
            { id: 7, layout: "cabal.sitef." + label + ".%y%m%d.txt" },
            { id: 8, layout: "COOPERCRED_%Y%m%d_&C(5)_" + label + ".txt" },
            { id: 9, layout: "CCARD_" + label + "_%Y%m%d_&C(6).txt" },
            { id: 10, layout: "%Y%m%d." + label + "&C(3).PGCECSETXT" },
            { id: 11, layout: "dacasa%Y%m%d&C(6)" + label + ".txt" },
            { id: 12, layout: "Algorix_" + label + "_G&C(7)_D%Y%m%d_R&C(6).txt" },
            { id: 13, layout: "FB_" + label + "_%Y%m%d_&C(6).txt" },
            { id: 14, layout: "BRCARD." + label + "%Y%m%d&C(6).TXT" },
            { id: 15, layout: "BIGCARD_%Y%m%d%H%M%S_&C(6)" + label + ".TXT" },
            { id: 16, layout: "EXTRATO_UNICA_" + label + "_%Y%m%d_&C(5)" },
            { id: 17, layout: "EXTRATO_UNICA_" + label + "_%Y%m%d_&C(5)" },
            { id: 18, layout: "extr_%Y%m%d-" + label + "_&C(3).txt" },
            { id: 19, layout: label + "_%y%m%d_&C(6)_VALEMAIS.txt" },
            { id: 20, layout: "GP2_002_%Y%m%d_%H%M&C(2)_0012_00" + label + "_&C(6).TXT" },
            { id: 21, layout: "nutricash." + label + ".&C(18).txt" },
            { id: 22, layout: label + "_&C(10)%Y%m%d&C(2).TXT" },
            { id: 23, layout: "%Y%m%d_BRASILCARD_" + label + "_&C(8).txt" },
            { id: 24, layout: label + ".BJR&C(2).D&C(4).T&C(6)" },
            { id: 25, layout: "sorocred_%Y%m%d_&C(6)_" + label + ".txt" },
            { id: 26, layout: "fdse_" + label + "_%Y%m%d&C(6)_&C(6).txt" },
            { id: 27, layout: "CALCARD_%Y%m%d&C(6)_&C(5)_" + label + ".txt" },
            { id: 28, layout: "PERSONALCARD_" + label + "_%Y%m%d_&C(6)_&C(6).TXT" },
            { id: 29, layout: label + "CONVCARD%Y%m%d&C(6).txt" },
            { id: 30, layout: "Verocheque_%d%m%Y_" + label + ".txt" },
            { id: 31, layout: "SINDPLUS_" + label + "_%d%m%Y_&C(6).txt" },
            { id: 32, layout: "SAFRAPAY_" + label + "_%Y%m%d_&C(6).txt" },
            { id: 33, layout: "MAXXCARD_%Y&C(3)_" + label + "_&C(4).TXT" },
            { id: 34, layout: "SEICON_%Y%m%d_&C(5)_" + label + ".txt" },
            { id: 35, layout: label + "_%Y%m%d.DAT" },
            { id: 36, layout: "VC_" + label + "_%y%m%d&C(3).TXT" },
            { id: 37, layout: label + "_%Y%m%d.txt" },
            { id: 38, layout: "EDI-&#(1)-&C(3)_LABEL_CNPJ_%Y%m%d&C(6).txt" },
            { id: 39, layout: "SENFF_%Y%m%d_&C(6)_" + label + ".TXT" },
            { id: 40, layout: "vgscard%Y%m%d_" + label + "_&C(6).txt" },
            { id: 41, layout: "%Y%m%d_&C(13)_" + label + ".xml" },
            { id: 42, layout: "BIQ_" + label + "_%Y%m%d_&C(6).txt" },
            { id: 43, layout: "PAGSEG_" + label + "_&@(3)_%Y%m%d&C(3).TXT" },
            { id: 44, layout: "GCARD_%d%m%Y&C(6)_" + label + "_" + formatedGCLabel + "_&C(3).txt" },
            { id: 45, layout: "ARQUIVO_CONCILIACAO_%y%m%d_" + label + ".txt", layout2: "valecard_%y%m%d_" + label + ".txt" },
            { id: 46, layout: "GOODCARD_" + label + "_%Y%m%d.txt", layout2: "CONCILIACAO" + label + "_&C(5)_%Y%m%d.txt" },
            { id: 47, layout: "ECXCARD_%d%m%Y_" + label + ".txt", layout2: "ECXCARD_%Y%m%d%H%M%S_" + label + ".txt" },
            { id: 48, layout: "PLANVALE_COD_" + label + "_%Y%m%d_&C(6).TXT", layout2: "PLANVALE_&C(7)_%Y%m%d_" + label + ".TXT" },
            { id: 49, layout: label + "%Y%m%d.TXT", layout2: "LIBERCARD_%Y%m%d&C(6)_&C(6)_" + label + ".txt" },
            { id: 50, layout: "USECRED" + label + "_%Y%m%d_&C(6).TXT", layout2: "USECRED002_" + label + "_%Y%m%d_&C(6).TXT" },
            { id: 51, layout: "FAMILLY" + label + "%Y%m%d&#(6).TXT", layout2: "FAMILLY" + label + "%y%m%d&#(6).TXT" },
            { id: 52, layout: "%Y%m%d_ALELO&C(2)_" + label + "_&C(7).txt" },
            { id: 53, layout: "DMCARD_%y%m%d_&C(6)_" + label + ".txt" },
            { id: 54, layout: "PP_%Y%m%d%H%M%S_" + label + "_&#(1)_PG.CSV", layout2: "PP_%Y%m%d%H%M%S_" + label + "_&#(1)_VD.CSV" }]
    };

    if (label != undefined && operadora != undefined) {
        if (Ndata.operadoras.find(operadoras => operadoras.nome === operadora)) {
            switch (operadora) {
                case 'VALECARD':
                case 'GOODCARD':
                case 'ECXCARD':
                case 'PLANVALE':
                case 'LIBERCARD':
                case 'USECRED':
                case 'FAMILLYCARD':
                case 'PICPAY':
                    if (isSpecial) {
                        isSpecial = false;
                        var newOuput1 = document.createElement('input');
                        var referenceNode = document.getElementById("inputOutput");
                        newOuput1.setAttribute("id", "inputOutput1");
                        newOuput1.setAttribute("class", "w3-input w3-center w3-animate-right w3-border-0");
                        newOuput1.setAttribute("type", "text");
                        newOuput1.setAttribute("name", "output1");
                        newOuput1.setAttribute("size", "20");
                        newOuput1.setAttribute("readonly", "true");

                        idActualOperadora = Ndata.operadoras.find(operadoras => operadoras.nome === operadora).id;
                        outputValue = Ldata.operadoras.find(operadoras => operadoras.id === idActualOperadora).layout;
                        outputValue2 = Ldata.operadoras.find(operadoras => operadoras.id === idActualOperadora).layout2;

                        referenceNode.parentNode.insertBefore(newOuput1, referenceNode.nextElementSibling);
                        updateSpecialDIV();
                    } else {
                        idActualOperadora = Ndata.operadoras.find(operadoras => operadoras.nome === operadora).id;
                        outputValue = Ldata.operadoras.find(operadoras => operadoras.id === idActualOperadora).layout;
                        outputValue2 = Ldata.operadoras.find(operadoras => operadoras.id === idActualOperadora).layout2;

                        updateSpecialDIV();
                    }
                    break;

                default:
                    isSpecial = true;
                    if (document.getElementById("inputOutput1") != null) {
                        document.getElementById("inputOutput1").parentNode.removeChild(document.getElementById("inputOutput1"));
                    }
                    console.log(label);
                    idActualOperadora = Ndata.operadoras.find(operadoras => operadoras.nome === operadora).id;
                    outputValue = Ldata.operadoras.find(operadoras => operadoras.id === idActualOperadora).layout;
                    updateDIV();
                    break;
            }

        }
    }
    function updateDIV() {
        document.convert.output.value = outputValue;
        document.getElementById("tempOutput").innerHTML = operadora + " - " + Ndata.operadoras.find(operadoras => operadoras.nome === operadora).cod;
        document.getElementById("inputOutput").select();
        document.execCommand("copy");
        document.getElementById(lastInputId).focus();
    }

    function updateSpecialDIV() {
        document.convert.output.value = outputValue;
        document.convert.output1.value = outputValue2;
        document.getElementById("tempOutput").innerHTML = operadora + " - " + Ndata.operadoras.find(operadoras => operadoras.nome === operadora).cod;
    }
}

function Checkbox() {
    switch (document.getElementById("checkbox").checked) {
        case true:
            autoClean = true;
            break;
        case false:
            autoClean = false;
            break;
    }
}

function getLabel() {
    return document.getElementById("inputLabel").value.toString().replace(/\s/g, '');
}

function formatGCLabel() {
    label = label.toString();
    formatedGCLabel = label;

    for (i = 0; formatedGCLabel.length < 10; i++) {
        formatedGCLabel = "0" + formatedGCLabel;
    }
}

// ADQUIRINTES (SE)

const handleGetAdquirentes = () => {
    let adquirintes = document.querySelector('textarea#adquirentes').value
    adquirintes = adquirintes.trim().split(' ')

    const validAdquirentes = [
        "008 Cards", "Abrapetite", "Add Meal", "Adiq", "Adyen", "Alelo", "Alimentare",
        "Banco Bradesco", "Banco do Brasil", "Banco Itaú", "Banco Santander",
        "Banese", "Banestik", "Banrisul/Vero/Banricompras", "Bellocard", "Ben Visa Vale",
        "Bigcard", "Bin", "BIQ", "BK Bank", "Bolt (Brasilcard.Net)", "Bonuscred",
        "Bradescard", "Brasil Convênios", "Brasilcard (volus.com)", "C6 Pay", "Cabal",
        "Caixa Pagamentos", "Calcard", "Cielo", "Comprocard", "Convcard/Util",
        "ConvêniosCard", "Coopercard", "Coopercred", "Credishop", "CredSystem", "DaCasa",
        "DMCard", "ECX Card", "Eucard", "Facecard", "FortBrasil", "GetNet", "GlobalPayments",
        "Goodcard", "Greencard", "Ifood", "Iti", "KPI Pay", "Lecard", "Libercard", "Linxpay",
        "Megavale", "Mercado Pago", "Nutricard", "Nutricash", "Onecard", "Pagseguro",
        "Personal Card", "PicPay", "Plantão Card", "Planvale (Planinvesti)", "Policard",
        "Redecard", "Romcard", "SafraPay", "Seicon", "Sem Parar", "Senff", "Sicredi",
        "Sincard", "Sindplus", "Orgcard", "Sipag", "Sodexo", "Sol Pagamentos", "Sorocred", "Afinz",
        "Stone", "TáPago", "Tauruscred", "Tauruscard", "Tendência", "Ticket", "Tricard",
        "Triocard", "Uauh", "Única", "Tripag", "Usecred", "Valecard", "Valemais", "Valeshop",
        "Vegas Card", "Verdecard", "Vero", "Verocheque", "Viasoft Pay", "Volus", "VR",
        "VR Benefícios", "Vuon", "Yapay"
    ].map(name => name.toUpperCase());

    let notFoundAdquirintes = [];
    
    adquirintes.forEach(adquirinte => {
        const isFoundNdata = Ndata.operadoras.some(op => op.nome === adquirinte.toUpperCase());
        if (!isFoundNdata && !validAdquirentes.includes(adquirinte)) {
            notFoundAdquirintes.push(adquirinte)
        } 
    })

    const notFoundAdquirintesString = notFoundAdquirintes.join(', ');

    document.getElementById('notFoundAdquirintes').innerHTML = `Adquirintes não existentes: ${notFoundAdquirintesString}`

}
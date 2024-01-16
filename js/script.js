//Masks
$("#inputPrice").mask('000.000.000.000.000,00', {reverse: true});

var products = [
    {
        id: 1,
        name: "Computador M1-TX",
        description: "Intel I7, 16GB, SSD 256, HD 1T",
        price: 4900,
        category: 1,
        promotion: true,
        new: true
    },
    {
        id: 2,
        name: "Computador M2-TX",
        description: "Intel I7, 32GB, SSD 512, HD 1T",
        price: 5900,
        category: 2,
        promotion: false,
        new: true
    },
    {
        id: 3,
        name: "Computador M1-T",
        description: "Intel I5, 16GB, HD 1T",
        price: 2900,
        category: 3,
        promotion: false,
        new: false
    },
];

var categories = [
    { id: 1, name: "Produção Própria" },
    { id: 2, name: "Nacional" },
    { id: 3, name: "Importado" }
];


//OnLoad
loadProducts();

//Load all products
function loadProducts() {
    for (let product of products) {
        addNewRow(product);
    }
}

//Add new Row
function addNewRow(product) {
    var table = document.getElementById("productsTable");

    var newRow = table.insertRow();

    //Formatter Price
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    //Insert id product
    var idNode = document.createTextNode(product.id);
    newRow.insertCell().appendChild(idNode);

    //Insert name product
    var nameNode = document.createTextNode(product.name);
    newRow.insertCell().appendChild(nameNode);

    //Insert description product
    var descriptionNode = document.createTextNode(product.description);
    newRow.insertCell().appendChild(descriptionNode);

    //Insert price product
    var priceNode = document.createTextNode(formatter.format(product.price));
    newRow.insertCell().appendChild(priceNode);

    //Insert category product
    var categoryNode = document.createTextNode(categories[product.category - 1].name);
    newRow.insertCell().appendChild(categoryNode);

    //Insert product options
    var options = '';

    //Insert promotion product
    if (product.promotion)
        options = "<span class='badge bg-success me-1'>P</span>";
    
    //Insert new product
    if (product.new)
        options += "<span class='badge bg-primary'>L</span>";
    
    newRow.insertCell().innerHTML = options;
}
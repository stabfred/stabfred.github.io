// Scenario 1: Upgrade logic.
// Creates the object for configuring the product.
function fillUpgradeProduct(upgradeProduct, oldLicenseKey) {
    var order =
    {
        //Reset the cart session  to remove everything added to the cart previously.
        'reset': true,

        //Define the product path(s) and the quantity to add.
        'products': [
            {
                'path': upgradeProduct,
                'quantity': 1
            }
        ],
        'tags': {
            'key': oldLicenseKey
        },

        //Specify that when this JSON object is pushed to the Store Builder Library to begin checkout process.
        'checkout': true
    };

    return order;
}

// Pre-fill functionality (must be called before upgrade product is selected):
function prefillUserInfo() {
    fastspring.builder.recognize({
        'email': userEmail,
        'firstName': userFirstName,
        'lastName': userLastName,
        'company': userCompany
    });
}

function purchase(upgradeProduct, oldLicenseKey) {
    // Pre-fill functionality (for upgrade purchases):
    prefillUserInfo();

    var s = fillUpgradeProduct(upgradeProduct, oldLicenseKey);

    //Push the above JSON object to the Store Builder Library.
    fastspring.builder.push(s);
}

// Scenario 2: Default product purchases (to be ).
// For testing purposes: Only use this if you want the popup to load automatically.
document.addEventListener("DOMContentLoaded", function() {
    // Pre-fill functionality (for normal purchases):
    prefillUserInfo();

    // Temporarily skip below for debug (for Martin only).
    return;
});
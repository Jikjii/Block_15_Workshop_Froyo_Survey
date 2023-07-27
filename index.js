// 2
const customer = {
    firstName: 'jake',
    lastName: 'smith',
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false
}

// 3
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavor"] = ["coffee", "strawberry", "matcha"];

// 4

delete customer.zipCode;
delete customer.favoriteStore;

// 5

customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"]
customer.futureFlavors ="mango"
customer.todaysPurchaseCost =5.32

for (const key in customer) {
    console.log(key)
}
// Create a collection named orders.
> db.orders

// Insert at least 3 documents that represent an order. IMPORTANT: See section below for fields.
> db.orders.insert({orderDate: new Date(2005-01-01), orderTotal: 20, lineItems: [{unitPrice: 5, quantity: 2, productName: "cheese"}, {unitPrice: 3, quantity: 7, productName: "crackers"}, {unitPrice: 8, quantity: 1, productName: "juice"}]})
> db.orders.insert({orderDate: new Date(2008-01-01), orderTotal: 45, lineItems: [{unitPrice: 1, quantity: 6, productName: "popcorn"}, {unitPrice: 4, quantity: 2, productName: "soda"}, {unitPrice: 3, quantity: 3, productName: "gummy worms"}]})
> db.orders.insert({orderDate: new Date(2012-01-01), orderTotal: 10, lineItems: [{unitPrice: 2, quantity: 20, productName: "buns"}, {unitPrice: 6, quantity: 8, productName: "burgers"}, {unitPrice: 1, quantity: 20, productName: "pickles"}]})

// Find a single order document, any order document.
> db.orders.find({orderTotal: 45})

// Find all orders and make them look pretty.
> db.orders.find().pretty()

// Find all orders with an orderDate that is prior to 1/1/2016.
> db.orders.find({orderDate: {$lt: new Date(2016-01-01)}})

// Find all orders with an orderDate that is after 1/1/2016.
> db.orders.find({orderDate: {$gt: new Date(2016-01-01)}})

// Find orders with lineItems that have a quantity that is less than 50, but greater than 5. HINT: Look at $and and dot notation.
> db.orders.find({$and: [{"lineItems.quantity": {$lt: 50}}, {"lineItems.quantity": {$gt: 5}}]})

// Update one of your line items to 42.99. HINT: Look at dot notation
> db.orders.update({"lineItems.productName": /popcorn/}, {$set: {"lineItems.$.unitPrice": 42.99}})

// Remove one of your orders.
> db.orders.remove({"lineItems.unitPrice": 42.99})

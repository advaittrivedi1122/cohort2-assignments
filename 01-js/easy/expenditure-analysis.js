/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let myObject = {}
  let myArray = []
  transactions.forEach((transaction)=>{
    myObject[transaction.category] = (myObject[transaction.category] || 0) + transaction.price
  })
  Object.keys(myObject).forEach((myObjectKey)=>{
    myArray.push({category:myObjectKey, totalSpent:myObject[myObjectKey]})
  })
  return myArray;
}

calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 1,
    timestamp: 1656076800000,
    price: 90,
    category: 'Car',
    itemName: 'BMW',
  },
  {
    id: 1,
    timestamp: 1656076800000,
    price: 12,
    category: 'Food',
    itemName: 'Burger',
  }
])

module.exports = calculateTotalSpentByCategory;

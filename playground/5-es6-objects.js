// Objects property shorthand

const name = 'Jonah'
const userAge = 29

const user = {
  name,
  userAge,
  location: 'Sacramento'

}

console.log(user)


// Object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
}

// Problem with this is having to write a lot of code.

// const label = product.label
// const stock = product.stock

//This is the destructuring syntax

// const{label:productLabel, stock, rating = 5} = product
// console.log('this is the label value ' + productLabel)
// console.log('this is the stock value ' + stock)
// console.log(rating)

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock)
}

transaction('order', product)
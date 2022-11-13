// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to

const productsArray = [
  {
    id: 'price_1M3Jp3AKUaVPFpUq4EFvNsWs',
    title: 'Coffee',
    price: 120.0,
  },
  {
    id: 'price_1M3JqDAKUaVPFpUqfIY1FML0',
    title: 'Sunglasses',
    price: 599.0,
  },
  {
    id: 'price_1M3JrEAKUaVPFpUqgR9x7fqs',
    title: 'Camera',
    price: 1599.0,
  },
  {
    id: 'price_1M3JrtAKUaVPFpUqCjbSJcJc',
    title: 'iPhone',
    price: 6999.0,
  },
]

const getProductData = (id) => {
  let productData = productsArray.find((product) => product.id === id)

  if (productData === undefined) {
    console.log('Product data does not exist for ID: ' + id)
    return undefined
  }

  return productData
}

export { productsArray, getProductData }

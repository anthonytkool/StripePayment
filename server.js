// sk_test_51M3Ee7AKUaVPFpUq0QmBUvkM7NvVPtXTNokR4SqNGqR8JAvHjWxSUqOXDVmheS7uvHUtDAX7kIMK6mloonVMmB2s00WiqYhIg8
// Coffee: price_1M3Jp3AKUaVPFpUq4EFvNsWs
// Sunglasses: price_1M3JqDAKUaVPFpUqfIY1FML0
// Camera: price_1M3JrEAKUaVPFpUqgR9x7fqs
//iPhone: price_1M3JrtAKUaVPFpUqCjbSJcJc

const express = require('express')
var cors = require('cors')
const stripe = require('stripe')(
  'sk_test_51M3Ee7AKUaVPFpUq0QmBUvkM7NvVPtXTNokR4SqNGqR8JAvHjWxSUqOXDVmheS7uvHUtDAX7kIMK6mloonVMmB2s00WiqYhIg8'
)

const app = express()
app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.post('/checkout', async (req, res) => {
  /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
  console.log(req.body)
  const items = req.body.items
  let lineItems = []
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    })
  })

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  })

  res.send(
    JSON.stringify({
      url: session.url,
    })
  )
})

app.listen(4000, () => console.log('Listening on port 4000!'))

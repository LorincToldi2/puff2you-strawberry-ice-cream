const stripe = require('stripe')("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");

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // TODO: replace this with the `price` of the product you want to sell
            price: 'price_1JZIclATAE41wgL82o4QiJMq',
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 99,
            },
            quantity: 1,
          },
        ],
        payment_method_types: [
          'card'
        ],
        mode: 'payment',
        success_url: "https://puff2you.com/en/thank-you",
        cancel_url: "https://puff2you.com/en/elf-bar-600/strawberry-ice-cream",
      });

      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

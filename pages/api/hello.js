export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    console.log(req)
  } else {
    // Handle any other HTTP method
  }
}
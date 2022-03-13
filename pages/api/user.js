export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      console.log("post", req.body)
      return res.status(200).end(`get ${req}`)
    case "GET":
      console.log("get", req.body)
      return res.status(200).json({ name: "John Doe" })
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

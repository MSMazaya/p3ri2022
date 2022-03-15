import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.query?.secret !== process.env.SECRET_REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (!req.query?.path) {
    return res.status(400).json({ message: "Missing path" });
  }

  try {
    await res.unstable_revalidate(req.query?.path);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}

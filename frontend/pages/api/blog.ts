import { getArticlesPaginated } from "services/article";

export default async function handler(req, res) {
  if (!(req.query?.take && req.query?.skip)) {
    return res.status(400).json({ error: "Invalid query params" });
  }

  try {
    const { take, skip } = req.query;
    const articles = await getArticlesPaginated(parseInt(take), parseInt(skip));
    return res.json(articles);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

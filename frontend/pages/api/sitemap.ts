import { getAllArticlesId } from "services/article";
import { SitemapStream, streamToPromise } from "sitemap";

const handler = async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    // List of posts
    const articleIds = await getAllArticlesId();

    // Create each URL row
    articleIds.forEach(({ id }) => {
      smStream.write({
        url: `/blog/${id}`,
        changefreq: "daily",
        priority: 0.9,
      });
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};

export default handler;

require('dotenv').config();

const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // enable CORS

app.get('/', async (req, res) => {
  try {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`);
    const data = await response.json();

    const feed = data.data
      .filter((media) => media.media_type === 'IMAGE')
      .map((media) => ({
        id: media.id,
        url: media.media_url,
        caption: media.caption,
        permalink: media.permalink
      }));

    // Return access token as part of the JSON response
    res.json({ feed, accessToken });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching Instagram data');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

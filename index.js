const express = require('express');

const url = process.env.SPACE_URL;

const app = express();

app.get('*', (req, res) => {
  const hostnames = [
    "akeno",
    "jay"
  ];

  const hostname = req.subdomains[0];

  if (hostnames.includes(hostname)) {
    res.redirect(`${url}/u/${hostname}`)
    console.log("User Redirected to: " + hostname + "'s profile.")
    return;
  }
  else {
    res.redirect(`${url}`)
  }
});

app.listen(3000, () => {
  console.clear()
  if (!url) throw new Error("No Url Has Passed (env :1 [...])")

  console.log("Started!")
});


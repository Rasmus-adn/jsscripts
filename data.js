const payload = {
    id: "test1234",
    context: {
      library: {
        name: "Pixel API",
        version: "1.0.0",
      },
      locale: "da-DK",
      page: {
        path: "/nyheder",
        referrer: "https://www.google.com",
        referring_domain: "www.google.com",
        search: "",
        title: "Nyheder - DR | Få de seneste nyheder fra i dag her | DR",
        url: "https://www.dr.dk/nyheder",
      },
      screen: {
        height: 1080,
        width: 1920,
      },
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
    },
    channel: "web",
  };

  module.exports = payload;
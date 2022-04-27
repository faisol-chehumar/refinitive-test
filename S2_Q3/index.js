var http = require("http");

const getNAVOfFund = async () => {
  const fundSymbol = process.argv.slice(2)[0];
  const data = await getNAVBySymbol(fundSymbol);

  console.log("data", data);
};

const getNAVBySymbol = (fundSymbol) => {
  return new Promise((resolve, reject) => {
    const options = {
      host: "codequiz.azurewebsites.net",
      path: "/",
      headers: {
        Cookie: "hasCookie=true",
        "Set-Cookie": "hasCookie=true",
      },
    };

    const request = http.request(options, function (res) {
      let data = "";
      res.on("data", function (chunk) {
        data += chunk;
      });
      res.on("end", function () {
        result = extractNAVFromHtml(data, fundSymbol);
        return resolve(result);
      });
    });
    request.on("error", function (e) {
      reject(e.message);
    });
    request.end();
  });
};

const extractNAVFromHtml = (htmlString, fundSymbol) => {
  const htmlWithoutWhiteSpace = htmlString.replace(/\s/g, "");
  const regex = new RegExp(`<td>${fundSymbol}</td><td>([0-9.]+)</td>`);
  const match = regex.exec(htmlWithoutWhiteSpace);
  if (!match) {
    return "NA";
  }
  return match[1];
};

getNAVOfFund();

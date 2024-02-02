/* cat api */
const url = "https://api.thecatapi.com/v1/images/search";
const apiKey =
  "live_PHL3UCTAFfrfS86poaWStE7Ha2ue2u44FOB6dGtmGwfwAE795fw36joFkgYWLsc0";

/* meigen api */
const meigenUrl = "https://meigen.doodlenote.net/api/json.php";

/* express */
const express = require("express"); //requireでexpressを読み込む
const app = express();

//publicディレクトリを静的ファイルのルートディレクトリとして指定
app.use(express.static("public"));

//ローカルサーバーを立ち上げる
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});

//ルートディレクトリにアクセスした時の処理
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

/* GET */
//猫画像のurlを返す
app.get("/api/cat", async (req, res) => {
  const responese = await fetch(url);
  const imgJSON = await responese.json();
  res.send(imgJSON[0].url);
});
//名言を返す
app.get("/api/meigen", async (req, res) => {
  const responese = await fetch(meigenUrl);
  const meigenJSON = await responese.json();
  res.json(meigenJSON);
});

module.exports = app;
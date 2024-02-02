## 1.目的

このウェブアプリケーションは、自己啓発書や実用書とは異なる雰囲気で名言を学びたいという方を対象にしている。今回は、猫の画像と名言を組み合わせて楽しむことができるウェブアプリケーションを制作した。動物と名言を組み合わせたコンテンツは人気がありますが、これまでは主に書籍形式で提供されており、ウェブアプリケーションとしてはまだ少なかったため、今回のプロジェクトに至った。
また、デプロイをvercelで行ったため、以下のURLでアクセスすることができる。
``https://web-programing-last.vercel.app/index.html``

## 2.機能

このウェブアプリケーションでは、猫の画像と名言を一緒に楽しみながら、くつろいだ雰囲気で名言を学ぶことができる。また、アプリには「名言猫機能」と「お気に入り保存機能」が搭載されている。名言猫機能では、猫と名言を同時に楽しむことができ、お気に入りの名言猫を保存するための「名言猫お気に入り機能」も使用できる。

### 2.1 名言猫機能

このウェブアプリケーションの主要な機能である。ランダムで猫の画像と名言が表示される。これらの画像と名言は外部の API を利用している。具体的には、「The Cat API」と呼ばれる API を使用して猫の静止画像や GIF 画像を取得し、また、「名言教えるよ！」という API を使用して各国の偉人の名言を日本語で取得している。
![](./img/スクリーンショット%202024-02-02%2018.09.31.png)

### 2.2 お気に入り保存機能

過去に見た名言猫を、お気に入りとして保存することで、見返すことができる機能である。この機能はローカルストレージを使用し保存しているため、アカウント間での共有などは行えない。また、お気に入り画面では猫の画像をクリックすることで大きく表示される機能もある。
![](./img/スクリーンショット%202024-02-02%2018.09.52.png)
![](./img/スクリーンショット%202024-02-02%2018.10.10.png)

## 3.まとめ

思い描いていた全ての機能を実装することはできたが、画面のレイアウトやフォント、画像のサイズなどの細部に違和感が残ってしまった。また、今回の猫画像と名言は別々の外部の API を使用して実装されているため、猫画像と名言が全くマッチしない場合が生じている。(それが面白さに繋がることもある)

さらに、今後の機能追加として、DB を利用したアカウントでのお気に入り保存機能や、X (旧 Twitter) などでの API を活用した共有機能、そして名言をプロンプトとした AI 画像生成により、マッチする猫画像を表示する機能なども追加したいと考えている。

## 4.付録

### 4.1API の使用

今回は外部の API を複数利用したため、CORS を考慮して、node.js を使用した。node.js を選んだ理由としては、小規模開発向けであるといったことや、Vue.js や Fastify などの様々な node.js フレームワークがあり今後の勉強になる、などの点である。以下は express を使用して、外部の API に GET メソッドを送信しているコードである。
![](./img/スクリーンショット%202024-02-02%2018.27.35.png)

### 4.2 ローカルストレージの使用

今回は、DB を使用しなかったため、データの保存にローカルストレージを使用した。key には、ローカルストレージ内にあるデータ数を元に設定した。そのため画像の被りや名言の被りなどを予防することができる。以下の画像はローカルストレージの保存状態である。
![](./img/スクリーンショット%202024-02-02%2018.30.40.png)

### 4.3 デプロイ

今回は vercel を用いてデプロイを行った。vercel を選んだのは、github にあげるだけでデプロイができるといった手軽さである。
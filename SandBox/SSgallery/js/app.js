// アルバムデータの作成
// 後にfor文自動生成の形に修正(修正中)
// まずファイルネームの収集。push後for文で配列に自動で入るように修正
/* 保留　どうやらフォルダ内の一覧取得はNode.jsでないとできない可能性大　下の内容をそのままNode.jsに写す必要があるかもしれない。
myPath = location.pathname;
var dir_path = myPath.split("/").reverse().slice(1).reverse().join("/");
console.log(dir_path);
console.log(dir_path.length)
*/

let album = [
    {src: 'img/20200724-2143_537635904.jpg', msg: 'SSダミー'},
    {src: 'img/20200728-2231_538291042.jpg', msg: 'SSダミー'},
    {src: 'img/20200728-2319_538304014.jpg', msg: 'SSダミー'},
    {src: 'img/20200728-2335_538308356.jpg', msg: 'SSダミー'},
    {src: 'img/20200813-1457_540525641.jpg', msg: 'SSダミー'}
];

// 最初のデータを表示しておく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

// サムネイル写真画像の表示
let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++) {
    thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', album[i].src);
    thumbImage.setAttribute('alt', album[i].msg);
    thumbFlame.insertBefore(thumbImage, null);
}

// クリックした画像をメインにする
thumbFlame.addEventListener('click', function(event) {
    if (event.target.src) {
        mainImage.src = event.target.src;
        mainMsg.innerText = event.target.alt;
    }
});
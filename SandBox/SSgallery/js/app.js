// アルバムデータの作成
// 後にfor文自動生成の形に修正
let album = [
    {src: 'img/1.jpg', msg: '山道'},
    {src: 'img/2.jpg', msg: '階段'},
    {src: 'img/3.jpg', msg: '高尾山'},
    {src: 'img/4.jpg', msg: 'ロープウェイ'},
    {src: 'img/5.jpg', msg: '蕎麦'}
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
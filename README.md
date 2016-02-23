#gulpで快適なビルド環境を構築する為のサンプル
今回はビルドに失敗した時にwatchを止めず、且つ何処でエラーが起きたかを通知で知らせてくれるようにする。  
またついでにgulpfile.babel.jsのタスク分割も合わせてする。

##今回主役となるプラグイン
- [gulp-notify](https://github.com/mikaelbr/gulp-notify)
- [gulp-plumber](https://github.com/floatdrop/gulp-plumber)
- [require-dir](https://github.com/aseemk/requireDir)  

##環境説明
まずはローカルにクローンして頂き、ターミナルで以下のコマンド入力してください。
```
$ npm i
```  

##ディレクトリ一覧  
```
├── README.md
├── assets
│   ├── ejs
│   │   └── index.ejs
│   └── js
│       └── common.js
├── gulp
│   ├── browserify.js
│   ├── ejs.js
│   ├── path.js
│   └── watch.js
├── gulpfile.babel.js
├── package.json
└── template
    ├── index.ejs
    ├── index.html
    └── js
        └── main.js
```

## 詳しくは...
[こちらの記事をチェック！](https://github.com/aseemk/requireDir)

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
##notifyとplumberとは  
watchを走らせている時にビルドが失敗すると、watchも一緒に落ちてしまい、ビルド失敗している箇所をターミナルで確認して、該当箇所を
修正し、再度$ npm startなりなんなりでブラウザを立ち上げ直すあの手間を省くのがgulp-plumberです。  
またエラーが出た際にデスクトップに通知を出すプラグインがgulp-notifyです。  

##使い方  
まずはgulpfile.jsなり、タスクが記述されているファイルにimportします。  
```
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
```  
そして、watchを止めたくないタスクに以下を記述します    
```
.pipe(plumber({
  errorHandler: notify.onError("Error: <%= error.message %>")
}))
```  

参考までにejsのタスクに記述してみるとこんな感じになります。  

```
gulp.task('ejs', () => {
  gulp.src([PATHS.EJS])
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(ejs())
  .pipe(gulp.dest(PATHS.TEMP_EJS))
});
```  

browserify、皆さん良くご使用されると思うのですが、これは少し記述が特殊で以下のように記述すると問題なく動作します。  

```
gulp.task('js', () => {
  browserify({
    entries: [PATHS.JS_Base]
  })
  .transform(babelify, {presets: ["es2015"]})
  .bundle()
  .on('error', function(err) {
    return notify().write(err);
  })
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(gulp.dest(PATHS.TEMP_JS))
});
```  
今回サンプルを用意していますので、gulpフォルダ内を参考までに見て頂ければと思います。


## 詳しくは...
[こちらの記事をチェック！](https://github.com/aseemk/requireDir)

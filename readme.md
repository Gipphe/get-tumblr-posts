# get-tumblr-posts [![Build Status](https://travis-ci.org/Gipphe/get-tumblr-posts.svg?branch=master)](https://travis-ci.org/Gipphe/get-tumblr-posts)

> Returns an array of links with posts matching supplied pattern


## Install

```
$ npm install --save get-tumblr-posts
```


## Usage

```js
var inferSize = require('get-tumblr-posts');

inferSize('http://foo.tumblr.com/bar_baz_400.png');
//=> '400'

inferSize('http://foo.tumblr.com/bar_baz_1280.png');
//=> '1280'
```


## Related

- [tp](https://github.com/Gipphe/tp) - Pull images from tumblr blog


## License

MIT © [Victor Nascimento Bakke](http://giphtbase.org)

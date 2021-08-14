## DEV

### Frontend

Nuxt.js

### Backend

Node.js(Express)

## 手順

### ① クローンする

```
git clone git@github.com:ssk9597/Docker-Nuxtjs-Express.git
```

### ② ディレクトリに移動する

```
cd Docker-Nuxtjs-Express
```

### ③`api`ディレクトリの`node_modules`をインストールする

```
npm install
```

### ④Nuxt.js の作成と Docker の起動を行う

```
make nuxt
```

### ⑤`nuxt.config.js`と`.env`と`pages/index.vue`を修正してバックエンドとの通信を図る

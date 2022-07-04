const Koa = require('koa');
const app = new Koa();

const port = 3000;

app.use(async ctx => {
    
    ctx.type = 'text/html; charset=utf-8';
    ctx.status = 200;

    if (ctx.url == "/") {
        ctx.body = "<h1>Ana Sayfaya Hoş Geldiniz</h1>"
    } else if (ctx.url == "hakkimda") {
        ctx.body = "<h1>Hakkımda Sayfasına Hoş Geldiniz</h1>"
    } else if (ctx.url == "iletisim") {
        ctx.body = "<h1>İletişim Sayfasına Hoş Geldiniz</h1>"
    } else {
        ctx.status = 404
        ctx.body = "<h1>404 Page Not Found</h1>"
    }
});

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
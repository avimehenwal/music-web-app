# Issues

## Hosting on gh pages inside docs

By default GH uses `jekyll` static site builder tool to host website which tells GH nginx to ignore serving
directories which start with underscore

```
curl -I 'https://avimehenwal.github.io/music-web-app/_next/static/css/a1670b9227e70e12.css'
404

curl -I "https://github.com/avimehenwal/music-web-app/blob/main/docs/_next/static/css/a1670b9227e70e12.css"
200
```

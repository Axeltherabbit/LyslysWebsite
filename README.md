## Run http server
```
python -m http.server
```

## Video to frames jpg
```
ffmpeg -i video/video.mp4 -c:v libwebp -q:v 65 -vf scale=800:-1 images/video/frame_%04d.webp
```


## Generate css tailwind
```
npm run build
```

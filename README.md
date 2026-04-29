## Run http server
```
python -m http.server
```

## Video to frames jpg
```
ffmpeg -i video/video.mp4 -q:v 5 -vf scale=1280:-1 images/video/frame_%04d.jpg
```


## Generate css tailwind
```
npm run build
```

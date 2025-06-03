# Selene

yarn dev

yarn run start

并行启动 UI服务跟 electron 服务
```bash
yarn add -D concurrently wait-on
```
然后 package.json 配置
```json
  "scripts": {
    "start": "electron .",
    "dev": "concurrently -k -n UI,ELECTRON -c cyan,green \"yarn dev:ui\" \"yarn dev:electron\"",
    "dev:ui": "cd ../selene-ui-react && yarn dev",
    "dev:electron": "wait-on -t 10000 tcp:5173 && echo '✅ UI ready, starting Electron...' && electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
# Selene




 yarn dev


 yarn run start



 yarn rm concurrently wait-on --dev
 安装了  yarn rm concurrently wait-on --dev 导致 electron 启动不了， 卸载他们后，马上 electron 能正常启动

 yarn add -D concurrently wait-on

 ```
 还是不行,yarn dev 启动， 窗体是下面的错误 
 Uncaught Exception:
Error: Qualified path resolution failed: we looked for the following paths, but none could be accessed.

Source path: /Users/mugbya/git-files/Selene/selene-client/.yarn/unplugged/electron-npm-36.3.2-0c77680c90/node_modules/electron/main
Not found: /Users/mugbya/git-files/Selene/selene-client/.yarn/unplugged/electron-npm-36.3.2-0c77680c90/node_modules/electron/main

at makeError (/Users/mugbya/git-files/Selene/selene-client/.pnp.cjs:6727:34)
at resolveUnqualified (/Users/mugbya/git-files/Selene/selene-client/.pnp.cjs:8461:13)
at resolveRequest (/Users/mugbya/git-files/Selene/selene-client/.pnp.cjs:8501:14)
at Object.resolveRequest (/Users/mugbya/git-files/Selene/selene-client/.pnp.cjs:8557:26)
at resolve$1 (file:///Users/mugbya/git-files/Selene/selene-client/.pnp.loader.mjs:2043:21)
at nextResolve (node:internal/modules/esm/hooks:748:28)
at Hooks.resolve (node:internal/modules/esm/hooks:240:30)
at MessagePort.handleMessage (node:internal/modules/esm/worker:199:24)
at [nodejs.internal.kHybridDispatch] (node:internal/event_target:827:20)
at MessagePort.<anonymous> (node:internal/per_context/messageport:23:28)

控制台

➜  selene-client git:(main) ✗  yarn dev
[UI]
[UI]   VITE v6.3.5  ready in 986 ms
[UI]
[UI]   ➜  Local:   http://localhost:5173/
[UI]   ➜  Network: use --host to expose
[UI]   ➜  Vue DevTools: Open http://localhost:5173/__devtools__/ as a separate window
[UI]   ➜  Vue DevTools: Press Option(⌥)+Shift(⇧)+D in App to toggle the Vue DevTools
[ELECTRON] ✅ UI ready, starting Electron...
[ELECTRON] (node:65311) [DEP0180] DeprecationWarning: fs.Stats constructor is deprecated.
[ELECTRON] (Use `Electron --trace-deprecation ...` to show where the warning was created)
[ELECTRON] (node:65311) [DEP0180] DeprecationWarning: fs.Stats constructor is deprecated.
[ELECTRON] (Use `Electron --trace-deprecation ...` to show where the warning was created)
[ELECTRON] 2025-06-03 12:53:42.049 Electron[65311:18698292] +[IMKClient subclass]: chose IMKClient_Legacy
[ELECTRON] 2025-06-03 12:53:52.377 Electron[65311:18698292] +[IMKInputSession subclass]: chose IMKInputSession_Legacy

 ```
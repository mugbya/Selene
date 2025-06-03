
使用 uv 来进行管理python依赖

如果没有安装uv, 则需要安装uv
```bash
pip install uv
```

创建虚拟环境
```bash
cd selene-server
uv venv
```
```
# Linux/macOS
source .venv/bin/activate

# Windows
.venv\Scripts\activate
```

安装依赖
```bash
# 直接根据 pyproject.toml 进行安装
uv pip install -r <(uv pip compile pyproject.toml)

# 单个
uv add pyinstaller
```


```bash
pyinstaller --onefile main.py

pyinstaller --onefile selene-server/main.py
```
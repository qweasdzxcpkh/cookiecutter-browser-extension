# boilerplate of develop of chromium extensions

## required:

- node >= 16
- typescript

## usage

1. install cookiecutter

> https://github.com/cookiecutter/cookiecutter

2. use cookitcutter generate project

```bash
cookiecutter https://github.com/qweasdzxcpkh/cookiecutter-browser-extension --directory="react"
```
> if the `cookiecutter` command not found, maybe you need to use: `python3 -m cookiecutter`

3. open your directory and install(react sample)

```bash
cd {{ cookiecutter.project_slug }}
npm install
```

4. start your work

5. build your extension

`npm build`
> extension build directory is default at dist/

6. load your extension at chrome://extensions

## Q&A

1. where is the manifest file?

A: Modify `public/manifest.json` and run build, will copy to dist/ directory. So was icon file etc.

## TODO

1. VUE version

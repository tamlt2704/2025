cd ch01
npm create vite@5.0.0 . (choose react, javascript)
npm i -D prettier@3.1.0 eslint@8.54.0 eslint-plugin-react@7.33.2 eslint-config-prettier@9.0.0 eslint-plugin-jsx-a11y@6.8.0

touch .prettierrc.json

```
{
  "trailingComma": "all",
  "tabWidth": 2,
  "printWidth": 80,
  "semi": false,
  "jsxSingleQuote": true,
  "singleQuote": true
}

```

mkdir .vscode
touch .vscode/settings.json

```
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

touch .prettierignore

```
dist/
```

touch .eslintrc.json

```
{
  "root": true,
  "env": {
    "browser": true
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "overrides": [
    {
      "files": ["*.js", "*.jsx"]
    }
  ]
}
```

touch .eslintignore

```
dists/
vite.config.js
```

npx eslint src
npx eslint src --fix

npm pkg set scripts.lint="eslint src" --> update package.json -> npm run lint

npm i -D husky@8.0.3 lint-staged@15.1.0
edit package.json

```
{
    ..
    devDependencies {
        ..
    }
    "lint-staged": {
        "**/*.{js,jsx}": [
        "npx prettier --write",
        "npx eslint --fix"
        ]
    }
}
```

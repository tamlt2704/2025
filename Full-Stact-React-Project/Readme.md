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

npm pkg set scripts.prepare="husky install"
npm run prepare
npx husky install

--npx husky add ./husky/pre-commit "npx lint-staged"
Windows: node_modules/.bin/husky.cmd add .husky/pre-commit "npx lint-staged"

npm i -D @commitlint/cli@18.4.3 @commitlint/config-conventional@18.4.3

touch .commitlintrc.json

```
{
    "extends": ["@commitlint/config-conventional"]
}
```

npx husky add .husky/commit-msg 'npx commitlint --edit ${1}'

commit type: fix: feat: build: ci: docs: perf: style: test:

docker run -d --name dbserver -p 27017:27017 --restart unless-stopped mongo:6.0.4
apt install -y mongodb-mongosh
mongosh mongodb://localhost:27017/ch2

db.users.insertOne({"user":"topbmktd","email":"topbmktd@example.com"})
db.users.find()

npm install mongodb@6.3.0

\*\*ch3
rm -fr public backend src index.html vite.config.js
npm uninstall --save react react-dom
npm uninstall --save-dev vite @types/react @types/react-dom @vitejs/plugin-react eslint-plugin-jsx-a11y eslint-plugin-react

mkdir -p src/db
mkdir -p src/services
mkdir -p src/routes

npm install mongoose@8.0.2

touch src/db/init.js
mkdir -p src/db/models
touch src/db/models/post.js

npm i -D jest@29.7.0 mongodb-memory-server@9.1.1
mkdir src/test
touch src/test/globalSetup.js

npm i express@4.18.2
touch src/app.js
touch src/index.js

npm install dotenv@16.3.1
touch .env

npm i -D nodemon@3.0.2
touch nodemon.json

touch src/routes/posts.js

npm i body-parser@1.20.2
npm install cors@2.8.5

cp -R ch01 ch04
cp -R ch03 ch04/backend
rm -fr ch04/backend/.git

remove husky prepare from backend/package.json
rm -fr ch04/backend/.husky
rm -fr ch04/backend/.vscode
rm -fr ch04/backend/.git

```
npm install
cd backend
  npm install
  npm uninstall husky lint-staged @commitlint/cli @commitlint-config-conventional
```

mkdir -p src/api

npm i @tanstack/react-query@5.12.2

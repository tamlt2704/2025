ch01

1. Install Vscode extension
   Docker

2. Create project
   npm create vite@5.0.0 .

3. Run
   npm run dev

4. Install dev dependencies
   npm install --save-dev prettier@3.1.0 \
    eslint@8.54.0 \
    eslint-plugin-react@7.33.2 \
    eslint-config-prettier@9.0.0 \
    eslint-plugin-jsx-a11y@6.8.0

5. touch .prettierrc.json

6. .Vscode
   {
   "editor.formatOnSave": true,
   "editor.defaultFormatter": "esbenp.prettier-vscode"
   }

7. touch .prettierignore

8. touch .eslintrc.json
9. touch .eslintignore
10. lint
    npx eslint src
    npx eslint src --fix

11. run npx eslint
    npm pkg set scripts.lint="eslint src"
    npm run lint

12. setup husky
    npm install --save-dev husky@8.0.3 \
     lint-staged@15.1.0

12.1 add lint-staged in package.json

```
 "lint-staged": {
 "**/*.{js,jsx}": [
 "npx prettier --write",
 "npx eslint --fix"
 ]
 }
```

13. husky
    npm pkg set scripts.prepare="husky install"
    npm run prepare
    npx husky add .husky/pre-commit "npx lint-staged"

14. commit lint
    npm install --save-dev @commitlint/cli@18.4.3 \
    @commitlint/config-conventional@18.4.3

15. touch .commitlintrc.json
16. add commi-msg hook
    npx husky add .husky/commit-msg \
    'npx commitlint --edit ${1}'

fix: bug fixed
feat:
refactor:
build:
ci:
docs:
perf:
style:
test:

ch02

1. mkdir backend
2. touch backend/simpleweb.js
   node backend/simpleweb.js
   curl localhost:3000

3. docker mongo
   docker run -d --name dbserver -p 27017:27017 --restart unless-stopped mongo:6.0.4

4. install mongodb
   npm install mongodb@6.3.0

5. touch backend/mongodbweb.js

ch03

1. update .eslintrrc.json
2. rm index.html vite.config.js
3. rm -fr public backend src
4. install dependencies
   npm uninstall --save react react-dom
   npm uninstall --save-dev vite @types/react \
    @types/react-dom @vitejs/plugin-react \
    eslint-plugin-jsx-a11y eslint-plugin-react
5. edit package.json remove the dev, build, and preview
6. mkdir -p src/{db,services,routes}
7. install monogoose
   npm install mongoose@8.0.2

8. testing service
   npm install --save-dev jest@29.7.0 \
    mongodb-memory-server@9.1.1

9. mkdir src/test
   touch src/test/globalSetup.js
   touch src/test/globalTeardown.js
   touch src/test/setupFileAfterEnv.js
   touch jest.config.json
10. touch src/services/posts.js
11. mkdir src/**tests**
    touch src/**tests**/posts.test.js

12. install express
    npm install express@4.18.2
    npm install dotenv@16.3.1
13. touch .env
14. install nodemon
    npm install --save-dev nodemon@3.0.2
    touch nodemon.json
15. touch src/routes/posts.js
16. POST routes
    npm install body-parser@1.20.2
    npm install cors@2.8.5

17. try api
    fetch('http://localhost:3001/api/v1/posts')
    .then(res => res.json())
    .then(console.log)

    fetch('http://localhost:3001/api/v1/posts', {
    method: 'POST',
    body: JSON.stringify({"title": "Test Post"}),
    header: {"Content-Type": "application/json"},
    })
    .then(res => res.json())
    .then(console.log)

ch04
cd backend
npm uninstall husky lint-staged @commitlint/cli @commitlint/config-conventional

1. tanstack query
   npm install @tanstack/react-query@5.12.2

2. touch .env

ch05
touch backend/.dockerignore
docker image build -t blog-backend backend/
docker run -it -e PORT=3001 -e DATABASE_URL=mongodb://host.docker.internal:27017/blog -p 3001:3001 blog-backend

docker build -t blog-frontend .
docker run -it -p 3000:80 blog-frontend

touch compose.yaml

mkdir .github
mkdir .github/workflows
touch .github/workflows/frontend-ci.yaml

ch06

touch backend/src/db/models/users.js
cd backend
npm install bcrypt@5.1.1

touch backend/src/services/users.js
touch backend/src/routes/users.js

const res = await fetch('http://localhost:3001/api/v1/user/signup', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ 'username': 'dan', 'password': 'hunter2'
})
})
console.log(await res.json())

cd backend
npm install jsonwebtoken@9.0.2
npm install express-jwt@8.4.1

mkdir backend/src/middleware
touch backend/src/middleware/jwt.js

npm install react-router-dom@6.21.0

touch src/components/Header.jsx

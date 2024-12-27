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

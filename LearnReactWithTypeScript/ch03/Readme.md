1. setup app with webpack

* create index.html

* create package.json
    ```
    {
        "name": "my-app",
        "description": "My React and Typescript app",
        "version": "0.0.1"
    }
    ```

* add Typescript
```
npm install --save-dev typescript
```

* add tsconfig.json
```
{
    "compilerOptions": {
        "noEmit": true,
        "lib": [
            "DOM",
            "DOM.Iterable",
            "ESNext"
        ],
        "moduleResolution": "node",
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "jsx": "react",
        "forceConsistentCasingInFileNames": true,
        "strict": true
    },
    "include": ["src"],
    "exclude": ["node_modules", "dist"]
}
```


** setting noEmit = true to supress the Typescript compiler from doing any traspilation

** setting allowSyntheticDefaultImports and esModuleInterop to true allows React to be imported as default import, like the following 
```
import React from 'react'
```
**wihtout these settings set to true, React woule have to be imported like this 
```
import * from 'react'
```

** settings forceConsistentCasingInFileNames to true enables the type checking process to check the casing referend filenames in import statements are consistent.

* adding react 

```
npm install react react-dom
```

* react doesn't include typescript

```
npm install --save-dev @types/react @types/react-dom
```

* root component will be in a file called index.tsx in the *src* folder

* adding babel
```
npm install --save-dev @babel/core
npm i -D @babel/core
```

* install @babel/preset-env allows latest javascript feature to be used 
```
npm i -D @babel/preset-env
```

* install @babel/preset-react that enabled react code to be transfomed to javascript
```
npm i -D @babel/preset-react
```


* install @babel/preset-typescript that enabled typescript code to be transfomed to javascript
```
npm i -D @babel/preset-typescript
```

* in summary 
```
npm install react react-dom
npm install --save-dev @types/react @types/react-dom
npm i -D @babel/core
npm i -D @babel/preset-env
npm i -D @babel/preset-react
npm i -D @babel/preset-typescript
```

* babel.conf 
```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
    ],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "generator": true
            }
        ]
    ]
}
```

* glue everything with webpack

* install webpack
```
npm i -D webpack webpack-cli

npm i -D webpack-dev-server # host webapp and automitically updates as changes are made to the code

npm i -D babel-loader # allows babel to transpile reat and typescript to JS
```

* webpack can create index.html file that hosts the react app, we want webpack to use our index.html file in the src folder. html-webpack-plugin is capable of doing this
```
npm i -D html-webpack-plugin 
```


* configure webpack 
* install ts-node which allows configuration to be defined in a typescript
```
npm i -D ts-node
```

* webpack.dev.config.ts
```
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
  Configuration as WebpackConfig,
  HotModuleReplacementPlugin,
} from 'webpack';
import { 
  Configuration as WebpackDevServerConfig 
} from 'webpack-dev-server';

type Configuration = WebpackConfig & {
  devServer?: WebpackDevServerConfig;
}

const config: Configuration = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  }
};

export default config;
```

* HtmlWebpackPlugin will be used to create index.html
* mode: development
* output.publicPath is the root path in the app
* entry: tell webpack where the react app's entry point is , which is index.tsx in our project

* to start application. add followingt to package.json 
```
"scripts": {
        "start": "webpack serve --config webpack.dev.config.ts"
    }, 

npm run start
```    



* Create project with create react app 

```
npx create-react-app myapp --template typescript
npx tsc --init
update reportWebVitals.ts 
npm install --save-dev @types/react @types/react-dom
npm i -D @testing-library/react
npm i --save-dev @types/jest @testing-library/jest-dom
npm install @types/testing-library__jest-dom -D
```
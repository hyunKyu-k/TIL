import path from 'path';
import webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const config: webpack.Configuration = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
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
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 4000,
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false,
            eslint: {
                files: "./src/**/*",
            },
        }),
    ],
};

export default config;

/**
 * * entry
 * entry필드는 Webpack에 번들 할 모듈을 찾을 위치를 알려줍니다.
 * index.tsx.
 *
 * * module
 * Webpack에서 다른 모듈이 어떻게 처리되는지 알려줍니다.
 * babel-loader 플러그인을 사용하여 .js, .ts 및 .tsx 확장자를 가진 파일을 처리합니다.
 *
 * * resolve.extensions
 * resolve.extensions필드는 모듈 분석 중에 어떤 파일 유형을 어떤 순서로 찾을 것인지 Webpack에 알려줍니다.
 *
 * * output
 * Webpack에 코드를 묶을 위치를 말합니다. bundle.js에서 호출되는 파일 build 입니다.
 *
 * * devServer
 * Webpack 개발서버를 구성합니다. 웹 서버의 루트는 build폴더이며 포트는 4000포트입니다.
 *
 * * ForkTsCheckerWebpackPlugin
 * ? async: Webpack 코드를 생성하기 전에 유형 검사 프로세스가 완료 될 때까지 기다리도록 설정 했습니다.-> false
 * ? eslint: Webpack이 Linting 오류를 알려주도록 소스파일을 가리키도록 설정했습니다.
 */
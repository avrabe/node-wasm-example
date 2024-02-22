/********************************************************************************
 * Copyright (c) 2022-2023 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied:
 * -- GNU General Public License, version 2 with the GNU Classpath Exception
 * which is available at https://www.gnu.org/software/classpath/license.html
 * -- MIT License which is available at https://opensource.org/license/mit.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0 OR MIT
 ********************************************************************************/
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const path = require('path');
const buildRoot = path.resolve(__dirname, 'lib');
const helloRoot = path.resolve(buildRoot, 'handler');
const appRoot = path.resolve(__dirname, 'dist');

/**@type {import('webpack').Configuration}*/
module.exports = {
    entry: {
        index: path.resolve(buildRoot, 'index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: appRoot,
        clean: true
    },
    mode: 'development',
    resolve: {
        extensions: ['.wasm', '.js'],
        exportsFields: ['exports', 'hello'],
        importsFields: ['hello'],
        modules: [
            'node_modules', // The default
            'src'
          ] 
    },
    target: 'node',
    devtool:'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['source-map-loader']
            }
        ]
    },
    ignoreWarnings: [/Failed to parse source map/, /Can't resolve .* in '.*ws\/lib'/],
    plugins: [
        //new BundleAnalyzerPlugin()
    ]
};

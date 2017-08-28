
export default {
  entry: 'src/index.js',
  "proxy": {
    "/api": {
      "target": "http://wxgzhpaytest.maxtropy.com",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    },
  },
  env: {
    development: {
      extraBabelPlugins: [
        'dva-hmr',
        'transform-runtime',
        [
          "import", {
            "libraryName": "antd",
            "style": true
          }
        ]
      ],
    },
    production: {
      extraBabelPlugins: [
        'transform-runtime',
        [
          "import", {
            "libraryName": "antd",
            "style": true
          }
        ]
      ],
    },
  },
  theme: {
    "@primary-color": "#1DA57A",
    "@link-color": "#1DA57A"
  }
}
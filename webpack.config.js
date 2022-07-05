const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fse = require("fs-extra");

// postcss-loader plugins
const postCSSPlugins = [require("postcss-import"), require("postcss-mixins"), require("postcss-simple-vars"), require("postcss-nested"), require("autoprefixer"), require("postcss-pxtorem")];

// copies the images folder from the src folder to the dist folder when the command 'npm run build' is executed
class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap("Copy images", () => {
      fse.copySync("./src/assets/images", "./dist/assets/images");
      fse.copySync("./src/assets/fonts", "./dist/assets/fonts");
      fse.copySync("./src/assets/files", "./dist/assets/files");
    });
  }
}

// tells webpack to apply the values in the array 'use' to any file that ends with .css
let cssConfig = {
  test: /\.css$/i,

  use: [
    { loader: "css-loader", options: { url: false } },
    { loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } }
  ]
};

// scripts that both 'currentTask == dev' and 'currentTask == build' share
let config = {
  entry: {
    main: path.resolve(__dirname, "./src/assets/scripts/Main.js"),
    home_page_animation: path.resolve(__dirname, "./src/assets/scripts/modules/HomePageAnimations.js"),
    about_us_page_animation: path.resolve(__dirname, "./src/assets/scripts/modules/AboutUsPageAnimations.js"),
    join_us_page_animation: path.resolve(__dirname, "./src/assets/scripts/modules/JoinUsPageAnimations.js"),
    services_page_animation: path.resolve(__dirname, "./src/assets/scripts/modules/ServicesPageAnimations.js"),
    events_page_animation: path.resolve(__dirname, "./src/assets/scripts/modules/EventsPageAnimations.js"),
    donate_page_animation: path.resolve(__dirname, "./src/assets/scripts/modules/DonatePageAnimations.js"),
    modal: path.resolve(__dirname, "./src/assets/scripts/modules/Modal.js")
  },

  // plugins
  plugins: [
    // home page
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"),
      excludeChunks: ["about_us_page_animation", "join_us_page_animation", "services_page_animation", "events_page_animation", "donate_page_animation", "modal"]
    }),

    // about us page
    new HtmlWebpackPlugin({
      filename: "about-us.html",
      template: path.resolve(__dirname, "./src/about-us.html"),
      excludeChunks: ["home_page_animation", "join_us_page_animation", "services_page_animation", "events_page_animation", "donate_page_animation", "modal"]
    }),

    // join us page
    new HtmlWebpackPlugin({
      filename: "join-us.html",
      template: path.resolve(__dirname, "./src/join-us.html"),
      excludeChunks: ["home_page_animation", "about_us_page_animation", "services_page_animation", "events_page_animation", "donate_page_animation"]
    }),

    // services page
    new HtmlWebpackPlugin({
      filename: "services.html",
      template: path.resolve(__dirname, "./src/services.html"),
      excludeChunks: ["home_page_animation", "about_us_page_animation", "join_us_page_animation", "events_page_animation", "donate_page_animation", "modal"]
    }),

    // events page
    new HtmlWebpackPlugin({
      filename: "events.html",
      template: path.resolve(__dirname, "./src/events.html"),
      excludeChunks: ["home_page_animation", "about_us_page_animation", "join_us_page_animation", "services_page_animation", "donate_page_animation", "modal"]
    }),

    // donate page
    new HtmlWebpackPlugin({
      filename: "donate.html",
      template: path.resolve(__dirname, "./src/donate.html"),
      excludeChunks: ["home_page_animation", "about_us_page_animation", "join_us_page_animation", "services_page_animation", "events_page_animation", "modal"]
    }),

    // community integration page
    new HtmlWebpackPlugin({
      filename: "community-integration.html",
      template: path.resolve(__dirname, "./src/community-integration.html"),
      excludeChunks: ["home_page_animation", "about_us_page_animation", "join_us_page_animation", "services_page_animation", "events_page_animation", "donate_page_animation", "modal"]
    }),

    // community support services page
    new HtmlWebpackPlugin({
      filename: "community-support-services.html",
      template: path.resolve(__dirname, "./src/community-support-services.html"),
      excludeChunks: ["home_page_animation", "about_us_page_animation", "join_us_page_animation", "services_page_animation", "events_page_animation", "donate_page_animation", "modal"]
    }),

    // prp services page
    new HtmlWebpackPlugin({
      filename: "prp-services.html",
      template: path.resolve(__dirname, "./src/prp-services.html"),
      excludeChunks: ["home_page_animation", "about_us_page_animation", "join_us_page_animation", "services_page_animation", "events_page_animation", "donate_page_animation", "modal"]
    }),

    // independent living services page
    new HtmlWebpackPlugin({
      filename: "independent-living-services.html",
      template: path.resolve(__dirname, "./src/independent-living-services.html"),
      excludeChunks: ["home_page_animation", "about_us_page_animation", "join_us_page_animation", "services_page_animation", "events_page_animation", "donate_page_animation", "modal"]
    }),

    // after youth program page
    new HtmlWebpackPlugin({
      filename: "after-youth-program.html",
      template: path.resolve(__dirname, "./src/after-youth-program.html"),
      excludeChunks: ["home_page_animation", "about_us_page_animation", "join_us_page_animation", "services_page_animation", "events_page_animation", "donate_page_animation", "modal"]
    }),

    // safe space and housing for lgbtq youth page
    new HtmlWebpackPlugin({
      filename: "safe-space-and-housing-for-lgbtq-youth.html",
      template: path.resolve(__dirname, "./src/safe-space-and-housing-for-lgbtq-youth.html"),
      excludeChunks: ["home_page_animation", "about_us_page_animation", "join_us_page_animation", "services_page_animation", "events_page_animation", "donate_page_animation", "modal"]
    }),

    // event one page
    new HtmlWebpackPlugin({
      filename: "event-one.html",
      template: path.resolve(__dirname, "./src/event-one.html"),
      excludeChunks: ["home_page_animation", "about_us_page_animation", "join_us_page_animation", "services_page_animation", "events_page_animation", "donate_page_animation", "modal"]
    })
  ],

  // loaders
  module: {
    // any file that ends with .css use the stated loaders - style-loader, css-loader & postcss-loader
    rules: [cssConfig]
  },

  // creates the source map
  devtool: "inline-source-map"
};

// this if statement relates to the creating the project
if (currentTask == "dev") {
  // sets the webpack mode to development
  config.mode = "development";

  // starts the webpack dev server
  config.devServer = {
    watchFiles: ["./src/**/*.html"], // watch any html file in the src folder
    static: {
      directory: path.join(__dirname, "src")
    },
    open: true,
    hot: true,
    port: 3000 // the website can be viewed at http://localhost:3000/
    // host: '0.0.0.0' // allows any device (phone or tablet) on the network to access the webpack-dev-server
  };

  // the file/s that have been bundled
  config.output = {
    filename: "[name].js", // changes the output file name to 'bundled.js'
    path: path.resolve(__dirname, "src") // the folder in which the bundle file/s should be located once webpack is finished.
  };

  // adds the style loader for css files
  cssConfig.use.unshift("style-loader");
}

// this if statement relates to the final build of the project that the public will see
if (currentTask == "build") {
  // sets the webpack mode to production
  config.mode = "production";

  config.output = {
    filename: "[name].[chunkhash].js", // changes the output file name to it's name with a chunk hash
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist") // the folder in which the bundle file/s should be located once webpack is finished.
  };

  // used to optimized file for better performance
  config.optimization = {
    splitChunks: { chunks: "all" },
    minimize: true, // enable minimize
    minimizer: [`...`, new CssMinimizerPlugin()] // minimize css files by using webpack default option `...` and css-minimizer-webpack-plugin
  };

  // adds the mini-css-extract-plugin to cssConfig object
  cssConfig.use.unshift(MiniCssExtractPlugin.loader);

  config.plugins.push(
    new CleanWebpackPlugin(), // updates the dist folder with the latest bundle files
    new MiniCssExtractPlugin({
      // extracts the css file from main.js
      filename: "styles.[chunkhash].css"
    }),
    new RunAfterCompile()
  );

  // adds the babel compilter to ensure js is backward compatiable wiht older browsers.
  config.module.rules.push({
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"]
      }
    }
  });
}

module.exports = config;

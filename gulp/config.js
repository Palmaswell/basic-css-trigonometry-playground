var dest = "./build";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },
  styles: {
    src: src + "/styles/app.scss",
    dest: dest
  },
  views: {
    src: src + "/views/**",
    dest: dest
  }
};

module.exports = function(grunt){
    grunt.initConfig({
        print: {
          target1: ['index.html', 'src/styles.css', 2],
          target2: 'data',
          hello: 'world'
        }
      });
      
      grunt.registerMultiTask('print', 'print targets', function() {
        grunt.log.writeln(this.target + ': ' + this.data);
      });
};
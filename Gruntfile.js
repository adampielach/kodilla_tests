module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'./css/styles.css': './scss/styles.scss'
				}
			}
		},
		watch: {
			scripts: {
				files: ['./scss/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false
				},
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'watch']);
};
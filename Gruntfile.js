/**
 * Created by Sherlock on 4/28/2016.
 */

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean:   [
            'dist/client/*',
            'dist/server/*',
            'dist/.htaccess',
        ],
        concat: {
            jslibfiles: {
                src: [
                    'src/client/lib/jquery/jquery-1.12.3.min.js',
                    //'src/client/lib/modernizr.custom.11333.js',
                    //'src/client/lib/jquery.easing.1.3.js',
                    'src/client/lib/lodash/lodash.min.js',
                    'src/client/lib/angular/angular.min.js',
                    'src/client/lib/angular-animate/angular-animate.min.js',
                    'src/client/lib/angular-aria/angular-aria.min.js',
                    'src/client/lib/angular-messages/angular-messages.min.js',
                    'src/client/lib/angular-route/angular-route.min.js',
                    'src/client/lib/angular-sanitize/angular-sanitize.min.js',
                    'src/client/lib/angular-material/angular-material.min.js',
                    'src/client/lib/angular-material-calendar/angular-material-calendar.min.js',
                    'src/client/lib/angular-material-icons/angular-material-icons.min.js',
                    'src/client/lib/angular-translate/dist/angular-translate.min.js',
                    'src/client/lib/chart.js/Chart.min.js',
                    'src/client/lib/angular-chart.js/dist/angular-chart.min.js',
                    'src/client/lib/angular-typewrite/dist/angular-typewrite.js',
                    'src/client/lib/angular-simple-logger/dist/angular-simple-logger.min.js',
                    'src/client/lib/angular-google-maps/dist/angular-google-maps.min.js',
                    'src/client/lib/vegas/vegas.min.js',
                    'src/client/lib/SVG-Morpheus/compile/unminified/svg-morpheus.js',
                    'src/client/lib/weblibs.js'
                ],
                dest: 'dist/client/lib/weblibs.min.js'
            },
            csslibfiles: {
                src: [
                    'src/client/lib/material-design-icons/iconfont/material-icons.css',
                    'src/client/lib/mdi/materialdesignicons.css',
                    'src/client/lib/angular-material/angular-material.min.css',
                    'src/client/lib/angular-chart.js/dist/angular-chart.min.css',
                    'src/client/lib/angular-typewrite/dist/angular-typewrite.css',
                    'src/client/lib/vegas/vegas.min.css',
                    'src/client/lib/textanimation/normalize.css',
                    'src/client/lib/textanimation/linkstyles.css'
                ],
                dest: 'dist/client/lib/weblibs.min.css'
            },
            usercss: {
                src: 'src/client/assets/css/*.css',
                dest: 'dist/client/assets/userstyles.min.css'
            },
            appjs: {
                src: [
                    'src/client/app/app.module.js',
                    'src/client/app/app.routes.js',
                    'src/client/app/common/**/*.js',
                    'src/client/app/main_component/**/*Ctrl.js',
                    'src/client/app/shared_component/**/*Ctrl.js'
                ],
                dest: 'dist/client/app/app.js'
            },
            appcss:{
                src:[
                    /*'src/client/app/shared_component/nav/nav.css',
                    'src/client/app/main_component/page_acceuil/css/page_accueil.css',
                    'src/client/app/main_component/voyage/css/component2.css',
                    'src/client/app/main_component/voyage/css/voyage.css',
                    'src/client/app/main_component/voyage/css/reset.css',
                    'src/client/app/main_component/voyage/css/voyage_style.css',
                    'src/client/app/main_component/map/map.css',
                    'src/client/app/main_component/about/about.css',*/
                ],
                dest: 'dist/client/app/app.css'

            }
        },
        copy: {
            htaccess:{
                expand: true,
                flatten: true,
                src:'src/.htaccess',
                dest: 'dist/'
            },
            fonts:{
                files:[
                    {
                        expand: true,
                        flatten: true,
                        src:'src/client/lib/material-design-icons/iconfont/MaterialIcons-Regular.*',
                        dest: 'dist/client/lib/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src:'src/client/lib/mdi/materialdesignicons-webfont.*',
                        dest: 'dist/client/lib/'
                    }
                ]
            },
            server:{
                expand: true,
                cwd: 'src/server/',
                src:['**'],
                dest: 'dist/server/'
            },
            app:{
                expand: true,
                cwd: 'src/client/app/',
                src:['**'],
                dest: 'dist/client/app/'
            },
            img:{
                expand: true,
                cwd: 'src/client/assets/img/',
                src:['**'],
                dest: 'dist/client/assets/img/'
            },
            lang:{
                expand: true,
                cwd: 'src/client/assets/lang/',
                src:['**'],
                dest: 'dist/client/assets/lang/'
            },
            html5shiv: {
                expand: true,
                flatten: true,
                src:'src/client/lib/html5shiv/dist/html5shiv.min.js',
                dest:'dist/client/lib/'
            }
        }
    });

    grunt.registerTask('build', ['clean','copy','concat'] );

};
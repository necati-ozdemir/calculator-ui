node {
//    tools {
//        nodejs "NodeJS"
//    }
//
//    options {
//        buildDiscarder(logRotator(numToKeepStr: '3'))
//    }

    stage('Initialize') {

        def nodeJsHome = tool 'NodeJS'
        env.PATH = "${nodeJsHome}/bin:${env.PATH}"
    }


    stage('Checkout') {
        checkout scm
    }
    stage('Get dependencies') {
        sh 'npm i --save cross-spawn'
        sh 'npm install'
    }
    stage('Execute') {
        sh '(npm start&)'
    }


    // post {
    // always {
    //  junit keepLongStdio: true, testResults: 'test-results/*.xml', allowEmptyResults: true
    // archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', onlyIfSuccessful: false
    //}
    //}
}

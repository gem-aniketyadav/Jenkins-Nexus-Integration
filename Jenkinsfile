node {

    stage('Checkout') {

       

        deleteDir()

        checkout scm

    }



    stage('NPM Install') {



        nodejs('NodeJs') {

    // some block

    sh 'npm install'

    sh 'ng build --prod'

    sh 'docker build -t demo:latest .'

}

       

    }




    // stage('Lint') {

    //     sh 'ng lint'

    // }



    // stage('Build') {

    //     milestone()

    //     sh 'ng build --prod'

    // }




    stage('Deploy') {

        echo "Deploying..."

    }

}
node {
    environment{
        REPO_NAME='demo_repo'
        REPOSITORY_URL='http://127.0.0.1:9001/repository/demo_repo/'
    }

    stage('Checkout') {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/gem-aniketyadav/Jenkins-Nexus-Integration.git']]])
        // deleteDir()
        // checkout scm
    }



    stage('NPM Install') {
        nodejs('NodeJs') {
            bat 'npm install'
            bat 'ng build --prod'
            echo "Successfully Installed Angular"

}

    }

    stage('Build docker image'){

        bat 'docker build -f Dockerfile -t jenkins-demo:latest .'
        bat 'docker images' 
        bat 'docker login -u admin -p admin http://127.0.0.1:9001/repository/demo_repo/'
        bat 'docker tag jenkins-demo 127.0.0.1:9001/demo_repo/jenkins-demo'
        echo "Build Successfull"
    }

    stage('Push image to Nexus'){
                //    withCredentials([string(credentialsId: 'admin', variable: 'admin')]) 
                
                   bat 'docker login -u admin -p admin http://127.0.0.1:9001/repository/demo_repo/'
                   bat 'docker push 127.0.0.1:9001/demo_repo/jenkins-demo '
                }

//     stage('Deploy to k8s'){
//                     kubernetesDeploy (configs: 'deploymentservice.yaml',kubeconfigId: 'k8sconfigpwd')
//                 }

    kubeconfig(credentialsId: 'myconfig', serverUrl: 'https://127.0.0.1:54385') {
        bat 'kubectl apply -f deploymentservice.yaml'
    }

}
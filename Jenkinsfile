node {
    environment{
        USERNAME="admin"
        PASSWORD="admin"
        REPO_NAME="demo_repo"
        IMAGE_TAG="latest"
        REPOSITORY_URL="" 
    }

    stage('Checkout') {
        dir(Jenkins-Nexus-Integration)
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/gem-aniketyadav/Jenkins-Nexus-Integration.git']]])
        // deleteDir()
        // checkout scm
    }



    stage('NPM Install') {
        nodejs('NodeJs') {
            bat 'npm install'
            bat 'ng build'
            echo "Successfully Installed Angular"

}

    }

    stage('Build docker image'){

        bat 'docker build -f Dockerfile -t demo_repo/Jenkins-demo:latest .'
        bat 'docker images' 
        // sh 'docker login -u ${USERNAME} -p ${PASSWORD} -${REPOSITORY_URL}
        // sh 'docker tag Jenkins-demo 15.206.81.210:9001/docker-hosted/devopsschool'
        echo "Build Successfull"
    }

//     stage('Push image to Nexus'){
//                    withCredentials([string(credentialsId: 'admin', variable: 'admin')]) {
//                    sh 'nexus3 login -u ${USERNAME} -p ${PASSWORD}' -U ${REPOSITORY_URL}

// }
//                    sh 'docker push ${REPOSITORY_URL} '
//                 }

//     stage('Deploy to k8s'){
//                     kubernetesDeploy (configs: 'deploymentservice.yaml',kubeconfigId: 'k8sconfigpwd')
//                 }

}
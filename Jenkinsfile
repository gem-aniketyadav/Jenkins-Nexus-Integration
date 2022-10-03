node {
    environment{
        USERNAME="admin"
        PASSWORD="admin"
        REPO_NAME="demo_repo"
        IMAGE_TAG="latest"
        REPOSITORY_URL="" 
    }

    stage('Checkout') {
        deleteDir()
        checkout scm
    }



    stage('NPM Install') {
        nodejs('NodeJs') {
    sh 'npm install'
    sh 'ng build --prod'
    echo "Successfully Installed Angular"

}

    }

    stage('Build docker image'){

        // sh 'docker build -t demo_repo/Jenkins-demo:latest .'
        // sh 'docker images'
        // sh 'docker login -${USERNAME} -${PASSWORD} -${REPOSITORY_URL}
        // sh 'docker tag devopsschool 15.206.81.210:9001/docker-hosted/devopsschool'
        echo "Build Successfull"
    }

//     stage('Push image to Nexus'){
//                    withCredentials([string(credentialsId: 'admin', variable: 'admin')]) {
//                    sh 'nexus3 login -u ${admin} -p ${admin}' -U ${REPOSITORY_URL}

// }
//                    sh 'docker push ${REPOSITORY_URL} '
//                 }

//     stage('Deploy to k8s'){
//                     kubernetesDeploy (configs: 'deploymentservice.yaml',kubeconfigId: 'k8sconfigpwd')
//                 }

// }
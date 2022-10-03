node {  
    // stage('Install') { 
    //     nodejs('NodeJs') {
    //         sh 'npm install'
    //         sh 'ng build -prod'
    //     }
    // }
    stage('Build Angular'){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/gem-aniketyadav/Jenkins-Nexus-Integration.git']]])
                sh 'npm install'
                echo"success install Angular"
            }
    }
    stage('Build docker image'){
            steps{
                script{
                    sh 'docker build -t demo_repo/Jenkins-demo:latest .'
                    echo"Build Successfull"
                }
            }
    }
}
//     stage('Push image to Nexus'){
//             steps{
//                 script{
//                    withCredentials([string(credentialsId: 'admin', variable: 'admin')]) {
//                    sh 'nexus login -u admin -p ${admin}'

// }
//                    sh 'docker push javatechie/devops-integration'
//                 }
//             }
//         }
//     stage('Deploy to k8s'){
//             steps{
//                 script{
//                     kubernetesDeploy (configs: 'deploymentservice.yaml',kubeconfigId: 'k8sconfigpwd')
//                 }
//             }
//         }
// }
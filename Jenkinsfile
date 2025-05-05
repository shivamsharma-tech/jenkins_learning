pipeline {
    agent any

    stages {
        stage('Deploy to EC2') {
            steps {
                sshagent(credentials: ['Shivam-Sharma']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no ubuntu@13.50.238.235 "
                            echo Connected to EC2;
                            sudo apt update && sudo apt install nginx -y
                        "
                    '''
                }
            }
        }
    }
}
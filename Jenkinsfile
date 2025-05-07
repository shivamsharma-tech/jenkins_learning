pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        EC2_USER = 'ubuntu'
        EC2_HOST = '16.16.166.108'
        EC2_DIR = '/home/ubuntu/myapp'
        KEY_CRED_ID = 'ubuntu' // ID of SSH private key in Jenkins Credentials
    }

    tools {
        nodejs 'Node 18' // Match the name set in Global Tool Configuration
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/shivamsharma-tech/jenkins_learning'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build (Optional)') {
            when {
                expression { fileExists('build') }
            }
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent (credentials: ["${KEY_CRED_ID}"]) {
                    sh """
                    sh '''
  scp -o StrictHostKeyChecking=no app.j ubuntu@16.16.166.108:/home/ubuntu/myapp
  ssh -o StrictHostKeyChecking=no ubuntu@16.16.166.108 << 'EOF'
    cd /home/ubuntu/myapp
    pm2 restart myapp || pm2 start app.js --name myapp
  EOF
'''

                }
            }
        }
    }

    post {
        success {
            echo '✅ Deployment succeeded!'
        }
        failure {
            echo '❌ Deployment failed!'
        }
    }
}

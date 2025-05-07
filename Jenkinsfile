pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/your-user/your-repo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("multi-app")
                }
            }
        }

        stage('Stop Old Containers') {
            steps {
                script {
                    def ports = [3000, 3001, 3002]
                    for (p in ports) {
                        sh "docker rm -f app-${p} || true"
                    }
                }
            }
        }

        stage('Run Containers on Different Ports') {
            steps {
                script {
                    def ports = [3000, 3001, 3002]
                    for (p in ports) {
                        sh "docker run -d -p ${p}:3000 --name app-${p} -e PORT=3000 multi-app"
                    }
                }
            }
        }
    }
}

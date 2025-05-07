pipeline {
    agent any

    stages {
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

        stage('Run on Multiple Ports') {
            steps {
                script {
                    def ports = [3000, 3001, 3002]
                    for (p in ports) {
                        sh "docker run -d -p ${p}:3000 --name app-${p} multi-app"
                    }
                }
            }
        }
    }
}

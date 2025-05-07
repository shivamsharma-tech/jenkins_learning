From ubuntu

Run apt-get update
Run apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - 
Run apt-get upgrade -y curl
Run apt-get install -y nodejs

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY main.js main.js

RUN npm install

ENTRYPOINT [ "node","main.js" ]
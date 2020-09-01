npm run build --prod & docker container prune --force & docker build -t inventory:1 . & docker run -d -p 8100:80 --name inventory inventory:1

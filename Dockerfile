FROM nginx:alpine
COPY ./inventory-portal /usr/share/nginx/html
LABEL img="inventory-fe"
CMD ["nginx", "-g", "daemon off;"]

FROM nginx:perl
#COPY ./dist /usr/share/nginx/html
RUN ls


CMD ["nginx", "-g", "daemon off;"]
EXPOSE 6000

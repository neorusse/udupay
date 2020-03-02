# Build Phase - use node alpine to build app for production
FROM node:12-alpine as builder

# container dir we want to work from
WORKDIR /client

# copy package.json file to container /client dir
COPY package.json .

# install project dependencies
RUN yarn

# copy all files from dev root dir to container root dir - /client
COPY . .

# build the project
RUN yarn run build


# Serve Phase - use nginx server to serve our build
FROM nginx

# nginx runs on port 80
EXPOSE 80

# copy the build folder from build phase to nginx dir
COPY --from=builder /client/build /usr/share/nginx/html


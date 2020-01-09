# use node latest version image
FROM node:latest

# container dir we want to work from
WORKDIR /usr/src/udupay-api

# copy all files from dev root dir to container root dir - /usr/src/udupay-api
COPY ./ ./

# npm scpript to run in the container
RUN yarn add

# command to execute by default when build image is launched
CMD ["/bin/bash"]

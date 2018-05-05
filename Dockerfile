FROM mhart/alpine-node:8.9 as webapp-build

RUN apk update && apk add openssh-client

RUN mkdir -p /usr/src/webapp

# Install dependencies first
COPY ./webapp/package.json /usr/src/webapp
WORKDIR /usr/src/webapp
RUN yarn

# Copy the source code
COPY ./webapp /usr/src/webapp

WORKDIR /usr/src/webapp

# Do the UI build
RUN yarn run build-prod

# ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////"

FROM mhart/alpine-node:8.9

RUN mkdir -p /usr/app
COPY ./webserver/package.json /usr/app
WORKDIR /usr/app
RUN yarn

COPY ./webserver /usr/app

# Copy Webapp distribution files
COPY --from=webapp-build /usr/src/webapp/dist /usr/app/dist

WORKDIR /usr/app

CMD ["yarn", "start"]
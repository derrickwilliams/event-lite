FROM mhart/alpine-node

RUN mkdir /service
# RUN npm i -g node-inspector

WORKDIR /service

ADD node_modules/ node_modules/
ADD package.json package.json
ADD server/ server/
ADD src/ src/
CMD npm run start

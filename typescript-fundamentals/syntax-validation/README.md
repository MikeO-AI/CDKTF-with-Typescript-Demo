## Install ts-node and ts-node-dev globally using NPM
npm install -g ts-node
npm install -g ts-node-development

## Verify installation
ts-node -v
ts-node-dev -v

## Run your Typescript file
ts-node index.ts

## Or use ts-node-dev for hot reloading
ts-node-dev index.ts

## Or if you prefer to install `ts-node` and `ts-node-dev` locally
npm install --save-dev ts-node ts-node-dev

## Then run your Typescript file using NPX
npx ts-node index.ts
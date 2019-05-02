#!/bin/bash

yarn build || npm run build

node build/watch.js
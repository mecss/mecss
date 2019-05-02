#!/bin/bash

yarn build || npm run build

node build/start.js
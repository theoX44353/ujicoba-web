name: CI

on:
  push:
    branches:
      - main

jobs:
  run-scripts:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Run Python script
      run: python3 script.py

    - name: Run Bash script
      run: bash script.sh

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Run JavaScript script
      run: node script.js
git add .
git commit -m "Initial commit with Python, Bash, and JavaScript scripts"
git push origin main

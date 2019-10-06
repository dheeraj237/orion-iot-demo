ng build --prod --output-path docs --base-href orion-iot-demo
cp ./docs/index.html ./docs/404.html
git add .
git commit -m "commit: docs updated"
git push origin master

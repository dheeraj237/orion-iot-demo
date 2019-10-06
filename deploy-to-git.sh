rm -rf docs
ng build --prod --output-path docs --base-href "https://anothergitdev.github.io/orion-iot-demo/"
cp ./docs/index.html ./docs/404.html
git add .
git commit -m "commit: docs updated"
git push origin master

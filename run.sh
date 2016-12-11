#!/bin/sh
# ファイルのパス取得
script_dir=$(cd $(dirname $0);pwd)


echo ${script_dir}
sudo node /home/pi/amazonPinPonDash/src/main.js


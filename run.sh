#!/bin/bash
ionic cordova build android
cp ./platforms/android/build/outputs/apk/debug/android-debug.apk barbernearme`date '+%Y%m%d%H%M%S'`.apk

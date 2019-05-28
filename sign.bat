jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore gonghongke.keystore app-release-unsigned.apk gonghongke.keystore


zipalign -v 4 app-release-unsigned.apk dustwind.apk
# Building the Sapori di Sicilia APK (Windows)

Follow these once on a new computer. Afterwards, rebuilding takes two commands.

## Part A - Install the tools (one time, about 30 minutes)

1. **Git** - download from https://git-scm.com/download/win, install with default options.
2. **Node.js** - download the LTS version from https://nodejs.org, install with default options.
3. **Android Studio** - download from https://developer.android.com/studio, install with default options.
   Open it once, choose "Standard" setup, and let it download the Android SDK. Note the SDK
   location it shows (usually `C:\Users\<you>\AppData\Local\Android\Sdk`).
4. **Tell Windows where the SDK and Java are.** Open Start, type "environment variables",
   choose "Edit the system environment variables", then "Environment Variables". Under
   "User variables" click New for each of these:
   - `ANDROID_HOME` = the SDK location from step 3
   - `JAVA_HOME` = `C:\Program Files\Android\Android Studio\jbr`
   Click OK on everything, then close and reopen any terminal windows.

## Part B - Get the project (one time)

1. Open a terminal (Start, type "PowerShell").
2. Run:
   ```
   git clone https://github.com/CASmith000876/sapori-di-sicilia-app.git
   cd sapori-di-sicilia-app
   npm install
   ```
   `npm install` downloads Capacitor, the tool that wraps the web app into an Android app.

## Part C - Add the signing key (one time, only if you have it)

The key proves that updates come from the same publisher. Christian holds it in a folder
called `keys`. If he sends it to you, put the whole folder in the project so it looks like:
```
sapori-di-sicilia-app\
  app\
  android\
  keys\
    sapori-release.jks
    keystore.properties
```
Never commit or share this folder. It is already listed in `.gitignore`.
Without it, the build still works but produces an unsigned APK that phones will refuse to
install over an existing copy of the app.

## Part D - Build (every time you change something)

From the `sapori-di-sicilia-app` folder in PowerShell:

1. **Copy the web app into the Android project.** Anything you edited in the `app` folder
   (screens, styles, images) is copied across by:
   ```
   npx cap sync android
   ```
   It finishes in a second or two with "Sync finished".

2. **Compile the APK.**
   ```
   cd android
   .\gradlew assembleRelease
   ```
   The first run downloads Gradle (the Android build tool) and libraries, which takes
   5 to 10 minutes. Later runs take about a minute. Success ends with `BUILD SUCCESSFUL`.
   On Mac or Linux, type `./gradlew` instead of `.\gradlew`.

3. **Find the file.** It is at:
   ```
   sapori-di-sicilia-app\android\app\build\outputs\apk\release\app-release.apk
   ```
   Rename it to something like `SaporiDiSicilia-v1.1.apk` before sharing.

4. **Bump the version before each release.** Open `android\app\build.gradle` and raise
   `versionCode` by 1 (for example 1 to 2) and set `versionName` (for example "1.1").
   Phones only accept an update if `versionCode` is higher than the installed one.

## Part E - Test on a phone plugged in by cable (optional)

On the phone, enable Developer options (Settings, About phone, tap Build number seven
times), then turn on USB debugging. Plug it in, accept the prompt on the phone, then:
```
adb install -r app\build\outputs\apk\release\app-release.apk
```
`adb` lives in `<SDK location>\platform-tools`; add that folder to your PATH or run it
from there.

## If something goes wrong

- **"JAVA_HOME is not set"** - redo Part A step 4 and reopen the terminal.
- **"SDK location not found"** - same, check `ANDROID_HOME`, or create
  `android\local.properties` containing `sdk.dir=C:\Users\<you>\AppData\Local\Android\Sdk`.
- **"Keystore file not found"** - the `keys` folder is missing or in the wrong place (Part C).
- **Old screens showing in the app** - you forgot `npx cap sync android` before building.
- **Weird errors after pulling changes** - run `cd android` then `.\gradlew clean`, then build again.
- **Opening in Android Studio instead** - File, Open, choose the `android` folder, wait for
  it to finish syncing, then Build, Generate Signed App Bundle / APK. This is the same
  build with a graphical interface.

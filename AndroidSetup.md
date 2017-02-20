#Setting up your Android Development Environment

Typing react-native run-android is not as easy as it looks, but follow these steps and you should have it running in no time! Downloading Android Studio is the fastest way to get started because Android Studio automatically downloads the Android SDK and preconfigures some of the settinggs you will need for Android development. 

2. Before you download Android studio, make sure you have the Java Dev Kit on your machine.
   

   ```javac -version```

3. Download Android Stuido

   ```https://developer.android.com/studio/index.html```

4. After opening Android Studio for the first time, click "custom" and make sure these four things are checked and ready to be installed:

   ```
   Android SDK
   ```

   ```
   Android SDK Platform
   ```

   ```
   Performance (Intel ® HAXM)
   ```

   ```
   Android Virtual Device
   ```

5. React-Native needs the Android 6.0 (Marshmallow) SDK in order to run. To install Marshmallow, open your SDK manager. In Android studio, this can be found by going to **Tools -> Android -> SDK manager**. Alternatively, you can run the command android in your terminal to open up the SDK manager.

6. After all that is downloaded, you must create your environment variables. Add these three lines to your config file (.bashrc, .zshrc, etc.).

  ```
    export ANDROID_HOME=${HOME}/Library/Android/sdk  (*this must be YOUR path to the android SDK*)
  ```

  ```
    export PATH=${PATH}:${ANDROID_HOME}/tools
  ```

  ```
    export PATH=${PATH}:${ANDROID_HOME}/platform-tools
  ```

7. To open up your react-native application, you must first open up your project file in Android Studio. Make sure you open up the android folder in your file structure. 

8. Next, open up your Virtual Device Manager (**Tools -> Android -> AVD Manager**) and press the play button(you might have to configure the device if this is the first time running Android Stuido).

9. Now you can type react-native run-android in your terminal to get the project started! 


##Additional Resources
https://facebook.github.io/react-native/docs/getting-started.html

http://treehouse.github.io/installation-guides/mac/android-studio-mac.html

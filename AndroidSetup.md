#Setting up your Android Development Environment

Typing react-native run-android is not as easy as it looks, but follow these steps and you should have it running in no time! Downloading Android Studio is the fastest way to get started because Android Studio automatically downloads the Android SDK and preconfigures some of the settings you will need for Android development. 

1. Make sure you have Node, Watchman, and React Native CLI downloaded:

   >brew install node
   >brew install watchman
   >npm install -g react-native-cli
   
2. Before you download Android studio, make sure you have the Java Dev Kit on your machine.
   
 ```javac -version```
 
    *If you don't have the Java Dev Kit installed, find it here: 
    <http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html>

3. Download Android Studio

 <https://developer.android.com/studio/index.html>

4. After opening Android Studio for the first time, click "custom" and make sure these four things are checked and ready to be installed:

   >Android SDK
   
   >Android SDK Platform
   
   >Performance (Intel ® HAXM)
   
   >Android Virtual Device
 
5. React-Native needs the Android 6.0 (Marshmallow) SDK in order to run. To install Marshmallow, open your SDK manager. 

   In Android studio, this can be found by going to **Tools -> Android -> SDK manager**. Alternatively, you can run the          command android in your terminal to open up the SDK manager or in the Welcome window of Android studio, click the configure    dropdown.
   
   Once Marshmallow is installed, click over to the SDK Tools tab and check the "Show Package Details" checkbox. Install          Android SDK Build-Tools 23.0.1.

6. After all that is downloaded, you must create your environment variables. Add these three lines to your config file (.bashrc, .zshrc, etc.).

    >export ANDROID_HOME=**FIND YOUR OWN PATH.. something like /Users/Library/Android/sdk**
    
    >export PATH=${PATH}:${ANDROID_HOME}/tools
    
    >export PATH=${PATH}:${ANDROID_HOME}/platform-tools

7. To open up your react-native application, you must first open up your project file in Android Studio. For this exercise,    navigate to the timer or weather folder and click "android". Open Android Studio using the android folder.

8. Next, open up your Virtual Device Manager (**Tools -> Android -> AVD Manager**) and press the play button(you might have to configure the device if this is the first time running Android Stuido).

9. Navigate back to the timer or weather directory and now you can type react-native run-android in your terminal to get the project started! 

##Additional Resources
<https://facebook.github.io/react-native/docs/getting-started.html>

<http://treehouse.github.io/installation-guides/mac/android-studio-mac.html>

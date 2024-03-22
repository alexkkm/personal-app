# Configuration of Running the App:

## Setup before cloning

安裝 Node.js  
安裝 Java JDK  
安裝 Android Studio, create an emulator  

新增環境變數:

1. ANDROID_HOME  
   C:\Users\user\AppData\Local\Android\Sdk
2. JAVA_HOME  
   C:\Program Files\Java\jdk-21
3. Path  
   C:\Users\user\AppData\Local\Android\Sdk\build-tools  
   %ANDROID_SDK_ROOT%\platform-tools  
   %ANDROID_SDK_ROOT%\emulator  
   %ANDROID_SDK_ROOT%\tools  
   %ANDROID_SDK_ROOT%\tools\bin

## Setup for the new expo react-native project

   ### Install Expo CLI:
   ```
   npm install -g expo-cli
   ```

   ### Create new project:
   ```
   npx create-expo-app "nameOftheApp"
   ```



   ### Login to expo account
   ```
   npx eas login
   ```

   #### (if cant run above eas command, try install eas-cli package instead)
   ```
   npm i -g eas-cli
   ```

   ### Build configuration for the project
   ```
   npx eas build:configure
   ```



   ### Run the App
   ```
   npm start
   ```

   ### You may need to retry "npm start" for many times, due to the installation process is slow

## Configuration for this project
   
   ### Install node package
   ```
   npm i
   ```

   ### Install eas-cli
   ```
   npm i -g eas-cli
   ```

   ### Login to expo account
   ```
   npx eas login
   ```

   ### Run the App
   ```
   npm start
   ```
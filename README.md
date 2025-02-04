# Offline_Dictionary

Overview
An offline dictionary application for Android devices, built using Capacitor.
Prerequisites

Android Studio
Node.js and npm installed on your system

Installation & Setup
Development Requirements

Install project dependencies:

bashCopynpm install

Set up Android build:

bashCopynpx cap sync android    # Sync your web code to Android platform
npx cap open android    # Open project in Android Studio
Building the APK

Open the project in Android Studio using npx cap open android
Wait for Gradle sync to complete
Select Build > Build Bundle(s) / APK(s) > Build APK(s)
Find the generated APK in android/app/build/outputs/apk/debug/

Development Workflow
To make changes to the application:

Make your code changes
Run npx cap sync android to sync changes
Open Android Studio with npx cap open android
Build and test your changes


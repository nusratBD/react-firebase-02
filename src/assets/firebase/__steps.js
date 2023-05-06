/* 
1. visit: console.firebase.google.com
2. create project(skip google analytics)
3. Register app(create config)
4. install firebase
5. add config file to your project
6. DANGER: Do not publish or make firebase config to public by publishing those to github
7. visit: Go to Docs>Build>Authentication>Web>Get Started
8. export app from firebase.config.js export default app
9. Login.jx: import getAuth from firebase/auth
10. create const auth = getAuth(app)
11. import googleAuthProvider and create a new provider
12. use signInWithPopUp and pass auth and provider
13. Activate signIn Method
*/
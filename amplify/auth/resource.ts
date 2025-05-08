// amplify/auth/resource.ts
import { defineAuth, secret } from '@aws-amplify/backend';



export const auth = defineAuth({
  loginWith: {
    email: true,

    externalProviders: {
      google: {
        clientId:     secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        scopes:       ['profile', 'email'],
        attributeMapping: {
          email:          'email',
          fullname:       'name',
          profilePicture: 'picture',
        },
      },
      callbackUrls: [process.env.VITE_FRONT_END_CALLBACK || "http://localhost:3000/home", "https://main.d1nshjg8bktoxg.amplifyapp.com/home"],
      logoutUrls:   [process.env.VITE_FRONT_END_LOGOUT_URI || "http://localhost:3000", "https://main.d1nshjg8bktoxg.amplifyapp.com"],
    },
  },
  userAttributes: {
    "custom:role": {
      dataType: "String",
      mutable: true,
      maxLen: 50,
      minLen: 2
    }
  }
});

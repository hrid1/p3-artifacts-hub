# Project: Artifact Atlas 

![Artifact Atlas Preview](https://github.com/hrid1/p3-artifacts-hub/blob/main/artifact-atlas.web.app_v1.png)

Artifact Atlas is a web application where users can explore, add, and like artifacts displayed in a visually appealing card format. Users can view detailed information about artifacts, add their own, and access a "Liked Artifacts" route to see all artifacts they’ve liked. Firebase authentication is implemented for secure login and registration.

[Live Demo](https://artifact-atlas.web.app/)  

## Features
- Artifacts displayed in a responsive card layout.
- Detailed artifact information accessible via the "Details" button.
- Ability for users to add their own artifacts to the platform.
- "Liked Artifacts" route for personalized collections.
- Firebase-based authentication and authorization.
- Fully responsive design for mobile and desktop devices.

## Technologies Used
React, React Router DOM, Axios, Lottie React, React Helmet Async, React Hot Toast, React Icons, SweetAlert2, Swiper.

## Installation and Configuration
1. Clone the repository:  
   `git clone https://github.com/hrid1/p3-artifacts-hub.git`  
2. Navigate to the directory:  
   `cd p3-artifacts-hub`  
3. Install dependencies:  
   `npm install` or `yarn install`  
4. Set up Firebase:  
   - Create a `.env` file in the root directory.  
   - Add the following variables with your Firebase credentials:  
     ```env
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```
5. Start the development server:  
   `npm start` or `yarn start`  
6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contribution
Contributions are welcome! Fork the repository, create a feature branch, commit your changes, push the branch, and open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

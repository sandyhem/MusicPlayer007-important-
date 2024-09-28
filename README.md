# MusicPlayer007

**MusicPlayer007** is a full-featured music player application built using the **MERN stack**. This project includes an admin dashboard for managing content and offers seamless music streaming capabilities. The backend is powered by **Node.js** and **Express**, while the frontend is built with **React**. **Cloudinary** is used for audio file storage, and **Context API** handles state management.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Admin Dashboard](#admin-dashboard)
- [Contributing](#contributing)


## Demo

A live demo of the MusicPlayer007 application can be accessed [here](https://github.com/sandyhem/MusicPlayer007-important).

## Features

- Play, pause, and stream music
- Add and manage playlists
- Admin dashboard for content management
- User authentication and authorization
- Cloud storage for audio files
- Responsive design for mobile and desktop devices
- Toaster notifications for real-time user feedback

## Technologies Used

- **MongoDB**: NoSQL database for storing user and music data
- **Express**: Backend web framework for building the RESTful API
- **React**: Frontend JavaScript library for building the user interface
- **Node.js**: JavaScript runtime for the backend
- **Cloudinary**: Cloud storage for audio file management
- **Context API**: For state management across components
- **Toaster Notifications**: For providing user feedback

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/sandyhem/MusicPlayer007-important.git
    ```

2. Navigate to the project directory:

    ```bash
    cd MusicPlayer007-important
    ```

3. Install server and client dependencies:

    ```bash
    npm install
    cd client
    npm install
    ```

4. Add environment variables for **Cloudinary** API credentials and database configuration in a `.env` file:

    ```env
    CLOUDINARY_NAME=your_cloudinary_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    MONGO_URI=your_mongodb_connection_string
    ```

5. Start both the client and the server:

    ```bash
    cd ..
    npm run dev
    ```

The application should now be running on `http://localhost:3000`.

## Usage

1. Visit the application homepage to browse and stream music.
2. Use the navigation bar to explore playlists, albums, and popular tracks.
3. Log in to save playlists and manage your music library.

## Admin Dashboard

- Access the admin dashboard by logging in as an admin.
- Admins can upload, edit, and delete music files.
- Manage users, playlists, and streaming statistics from the dashboard.

## Contributing

Feel free to fork this repository and submit a pull request if you would like to contribute to this project. Contributions to improve features or fix bugs are welcome!

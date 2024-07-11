# Blog WebApplication
## Aurora Blog (webapplication name)

### Overview

Aurora Blog is a web application designed to allow users to create, view, update, and delete their blog posts. The application is built using ```Node.js, Express.js, and EJS```, with the first landing cover page styled using ```Bootstrap```. It is fully responsive, ensuring a seamless experience on both mobile and desktop devices.

## Features

* **Blog Post Creation:** Users can create new blog posts.
* **Blog Post Viewing:** Users can view all existing blog posts.
* **Blog Post Updating:** Users can update their existing blog posts.
* **Blog Post Deletion:** Users can delete their blog posts.
* **Responsive Design:** The application is styled using CSS and is responsive on both mobile and desktop devices.

## Technical Requirements

* Node.js
* Express.js
* EJS

## NPM Packages Used

* [express](https://www.npmjs.com/package/express)
* [body-parser](https://www.npmjs.com/package/ejs)
* [ejs](https://www.npmjs.com/package/body-parser)

## Installation

1. Install the dependencies:
```
npm install
```

2. Start the application:

```
nodemon server.js (or) node server.js
```

## Usage

1. Open your web browser and navigate to ```http://localhost:3000```.
2. Use the application to create, view, update, and delete blog posts.

## Project Structure

* capstone-project 3 : Main application file. Contains(server.js and package.json files)
* public/: Contains CSS files and other static assets.
* views/: Contains EJS templates for the front-end.

## Screenshots
### Home Page

![Aurora Home page.](/readme-image/Home-page.png "This is a home-page image.")

### Post Creation
![Post creation page.](/readme-image/post-creation-page.png "This is a post creation page image.")

### View Blog 
![Blog view.](/readme-image/view-blog.png "This is a viewing your blog image.")

### Edit Blog
![Blog Edit.](/readme-image/Editing-blog.png "This is a Editing your blog post image.")

### Deleting Blog
![Blog Delete.](/readme-image/Deleting-blog.png "This is a Deleting your blog image.")

### After-Delete
![Blog view.](/readme-image/After-Delete.png "After delete your blog image.")


## License
[MIT](https://choosealicense.com/licenses/mit/)


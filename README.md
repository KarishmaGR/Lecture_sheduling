# Lecture Sheduler

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Backend Setup
```
cd server
npm install

create a .env file in root directory
```


set up Environment variable

```
MONGODB_URI = enter you mongodb uri
PORT = 8000
ACCESS_TOCKEN_SECRET=this-is-a-very-secret-token
ACCESS_TOCKEN_EXPIRY=2d
REFRESH_TOKEN_SECRET=this-is-a-refresh-token-secret
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=videohosting
CLOUDINARY_API_KEY=912397589789628
CLOUDINARY_API_SECRET=U3osLHpKfeevovY6oVqRisEgX3s```


## Start Server

``` npm run dev```




- **GET /courses/getallcourse**

  - _Description:_ Retrieve all courses.
  - _Middleware:_ verifyJwt
  - _Controller:_ getAllcourses

- **GET /courses/getsiglecourse/:courseId**
  - _Description:_ Retrieve a single course by courseId.
  - _Middleware:_ verifyJwt
  - _Controller:_ getSingleCourse

## Lecture Routes

- **GET /api/lectures/getalllectures**

  - _Description:_ Retrieve all lectures assigned to an instructor.
  - _Middleware:_ verifyJwt
  - _Controller:_ GetAllLectureAssignToInstruct

- **POST /lectures/createlecture/:course_id/:instructor_id**
  - _Description:_ Create a new lecture for a specific course and instructor.
  - _Middleware:_ verifyJwt, isAdmin
  - _Controller:_ createLecture

## User Routes

- **POST  /users/createuser**

  - _Description:_ Register a new user.
  - _Controller:_ RegisternewUser

- **POST /users/loginuser**

  - _Description:_ Login a user.
  - _Controller:_ loginuser

- **POST /users/logout**

  - _Description:_ Logout a user.
  - _Middleware:_ verifyJwt
  - _Controller:_ logOut

- **GET /users/alluser**
  - _Description:_ Retrieve all users (only accessible to admins).
  - _Middleware:_ verifyJwt, isAdmin
  - _Controller:_ getAlluser




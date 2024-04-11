# Set Up FrontEnd

-

# Routes

## Course Routes

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

- **POST /users/createuser**

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

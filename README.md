#  CAT Appp


## Create configuration
`./config/default.json`
```
{
  "JWTSecret": {
    "secret": "xxxx"
  }
}
```

## Starting Application

### `npm install` 
First time installation of packages

### `npm start` 
Runs the app at 3000 port

## API http://localhost:3000/api

### POST : /users/signup 
create user

Payload
```
{
	"email" : "muthaheer@gmail.com",
	"password": "12345678"
}
```

Response
```
{
	"message": "User created successfully",
	"token": "ey*****EMyi8"
}
```

### POST : /users/login 
Login user

Payload
```
{
	"email" : "muthaheer@gmail.com",
	"password": "12345678"
}
```

Response
```
{
	"message": "Login successful",
	"token": "ey*****EMyi8"
}
```

### POST : /cats 
Upload Cat Image

**Request Payload**:
- Content-type `multipart/form-data` .
- Include the image file in the form-data. `image: $location `
- `Authorization : Bearer ey**********Tc`

**Response**:
```
{
    "message": "Image upload success",
    "id": "ac329091-1a80-4fc8-897c-713a365d1cf1"
}
```

**Example**
```
curl --location --request POST 'http://localhost:3000/api/cats' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11dGhhaGVlckBnbWFpbC5jb20iLCJpYXQiOjE3MDY1NDI5MTMsImV4cCI6MTcwNjU0NjUxM30.tqjidVEtX64cZ5cACHGmvCeeOi3wsATFn_5PJNRWoTc' \
--form 'image=@"/C:/Users/pexels-pixabay-45201.jpg"'
```

### GET : /cats/:id 
Get Cat Image

**Request Payload**:
- `Authorization : Bearer ey**********Tc`

**Response**:
```
<img>
```

**Example**
```
curl --location --request GET 'http://localhost:3000/api/cats/b653c475-4574-4d25-bf99-4c3856550bd6' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11dGhhaGVlckBnbWFpbC5jb20iLCJpYXQiOjE3MDY1NDI5MTMsImV4cCI6MTcwNjU0NjUxM30.tqjidVEtX64cZ5cACHGmvCeeOi3wsATFn_5PJNRWoTc'
```

### DELETE : /cats/:id 
Delete Cat Image

**Request Payload**:
- `Authorization : Bearer ey**********Tc`

**Response**:
```
{
    "message": "Image with b653c475-4574-4d25-bf99-4c3856550bd6 successfully deleted"
}
```

**Example**
```
curl --location --request DELETE 'http://localhost:3000/api/cats/b653c475-4574-4d25-bf99-4c3856550bd6' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11dGhhaGVlckBnbWFpbC5jb20iLCJpYXQiOjE3MDY1NDI5MTMsImV4cCI6MTcwNjU0NjUxM30.tqjidVEtX64cZ5cACHGmvCeeOi3wsATFn_5PJNRWoTc'
```

### PUT : /cats/:id
Update Cat Image

**Request Payload**:
- Content-type `multipart/form-data` .
- Include the image file in the form-data. `image: $location `
- `Authorization : Bearer ey**********Tc`

**Response**:
```
{
    "message": "FIle update successful with id : cd46d832-2b7a-45c1-ad6a-2a1f263141e2"
}
```

**Example**
```
curl --location --request PUT 'http://localhost:3000/api/cats/cd46d832-2b7a-45c1-ad6a-2a1f263141e2' \
--header 'Content-Type: multipart/form-data' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11dGhhaGVlckBnbWFpbC5jb20iLCJpYXQiOjE3MDY1NDI5MTMsImV4cCI6MTcwNjU0NjUxM30.tqjidVEtX64cZ5cACHGmvCeeOi3wsATFn_5PJNRWoTc' \
--form 'image=@"/C:/Users/pexels-evg-kowalievska-1170986.jpg"'
```

### GET : /cats
Get All Cat Image Id

**Request Payload**:
- `Authorization : Bearer ey**********Tc`

**Response**:
```
{
    "ids": [
        "cd46d832-2b7a-45c1-ad6a-2a1f263141e2"
    ]
}
```

**Example**
```
curl --location --request GET 'http://localhost:3000/api/cats' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11dGhhaGVlckBnbWFpbC5jb20iLCJpYXQiOjE3MDY1NDI5MTMsImV4cCI6MTcwNjU0NjUxM30.tqjidVEtX64cZ5cACHGmvCeeOi3wsATFn_5PJNRWoTc'
```
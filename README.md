![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)
![Security Status](https://img.shields.io/security-headers?label=Security&url=https%3A%2F%2Fgithub.com&style=flat-square)
![Gluten Status](https://img.shields.io/badge/Gluten-Free-green.svg)
![Eco Status](https://img.shields.io/badge/ECO-Friendly-green.svg)
[![Discord](https://discord.com/api/guilds/571393319201144843/widget.png)](https://discord.gg/dRwW4rw)

# React

_Mobile app project_

<br>

## 🌟 About

This project is for educational porpuses only. Pull request are welcome, but priority for project authors! Thank you for your cooperation!

Site published at: https://github.com/AndriusCa/23-mobile-app-cra


## 🎯 Project features/goals

-   Github pages
-   login form
-   register form
-   icons
-   content rendering
-   app navigation
-   saving data to local memory

## 🧰 Getting Started

### 💻 Prerequisites

Node.js - _download and install_

```
https://nodejs.org
```

Git - _download and install_

```
https://git-scm.com
```

### 🏃 Run locally

Would like to run this project locally? Open terminal and follow these steps:

1. Clone the repo
    ```sh
    git clone https://github.com/AndriusCa/23-mobile-app-cra.git
    ```
2. Install NPM packages
    ```sh
    npm i
    ```
    or
    ```sh
    npm install
    ```
3. Run the server
    ```sh
    npm start
    ```


    

### 🧪 Running tests

There is no tests for this project.

## 🎅 Author

- Andrius: [Github](https://github.com/AndriusCa)

## ⚠️ License

Distributed under the MIT License. See LICENSE.txt for more information.


## How to use

> **Register user**

Fill form:

```
{
    "name": "john"
    "email": "john@johnatan.com"
    "password": "secretpasword"
}
```

Response if all goes well:

```json
{
    "message": "Registration successful!"
}
```

Response if any error:

```json
{
    "Error message: You must accept the terms and conditions"
    "Error message: Not suitable username"
    "Error message: Invalid email format"
    "Error message: User already exists"
    "Error message: Password must contain at least one letter and one number"
}
```

> **Login**

Fill form:

```
{
    "email": "john@johnatan.com"
    "password": "secretpasword"
}
```

Response if all goes well:

```json
{
    "Redirects to content page"
}
```

Response if any error:

```json
{
    "Error message: Please fill in all fields"
    "Error message: Invalid credentials"
}
```



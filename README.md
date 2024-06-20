# Secure Password Challenge 🔒
This challenge is available at [Back-End Brasil](https://github.com/backend-br/desafios/blob/master/secure-password/PROBLEM.md).

This project proposes a simple password validation API using Typescript following certain criteria.

## Getting Started 🚀
To run this project locally, follow these steps:

1. Ensure you have **Node.js v20 or greater** installed.

2. Clone the repository:
   ```
   git clone https://github.com/7Cass/secure-password-challenge
   ```
3. Change into the project directory:
   ```
   cd secure-password-challenge
   ```
4. Install dependencies:
   ```
   npm install
   ```
5. Start the development server:
   ```
   npm run dev
   ```

Your API should be accessible at `http://localhost:3333/`.

## Endpoints 🗃️
### Validate Password
Used to ensure that the password meets certain criteria

**URL** : `/validate-password`

**Method** : `POST`

**Data Example**
```json
{
  "password": "vYQIYxO&p$yfI^r"
}
```

### Success Response
**Code** : `204 NO CONTENT`

---

### Error Response
**Condition** : If the criteria are not met.

**Code** : `400 BAD REQUEST`

**Content** :
```json
{
    "errors": [
        "Password must be at least 8 characters long",
        "Password must contain at least one uppercase letter",
        "Password must contain at least one lowercase letter",
        "Password must contain at least one numeric digit",
        "Password must contain at least one special character"
    ]
}
```

## Functional Requirements 📋
- The password must be at least 8 characters long.
-	The password must contain at least one uppercase letter.
-	The password must contain at least one lowercase letter.
-	The password must contain at least one numeric digit.
-	The password must contain at least one special character (e.g., !@#$%).

## Contributing 🆘

Feel free to contribute to the project!

Here are the steps to get started:
1. Fork the Repository
2. Create a new branch for your feature/fix
3. After submitting your changes, open a new pull request.

## License 📜

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

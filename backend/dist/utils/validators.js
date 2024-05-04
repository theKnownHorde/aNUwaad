// import { NextFunction, Request, Response } from 'express';
// import { body, ValidationChain, validationResult } from 'express-validator';
// export const validate = (validations: ValidationChain[]) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     for (let validation of validations) {
//       await validation.run(req);
//     }
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(422).json({ errors: errors.array().map((error: any) => ({
//         field: error.param,
//         message: error.msg.text,
//         style: { color: error.msg.color }
//       }))});
//     }
//     return next();
//   };
// };
// // Validators
// export const loginValidator = [
//   body("email")
//     .trim()
//     .isEmail()
//     .withMessage("Provide a valid email address."),
//   body("password")
//     .trim()
//     .isLength({ min: 8 })
//     .withMessage("Password must be at least 8 characters long.")
//     .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/)
//     .withMessage({
//       text: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol.",
//       color: "red"
//     }),
// ];
// export const signupValidator = [
//   body("name")
//     .notEmpty()
//     .withMessage("Name is required."),
//   ...loginValidator,
// ];
// export const chatCompletionValidator = [
//   body("message")
//     .notEmpty()
//     .withMessage("Message is required."),
// ];
// // Example Usage in Express Routes
// import express from 'express';
// const app = express();
// app.use(express.json()); // For parsing application/json
// app.post("/signup", signupValidator, validate(signupValidator), (req: Request, res: Response) => {
//   // Handle signup logic here after passing validation
//   res.status(201).send("Signup successful!");
// });
// app.post("/login", loginValidator, validate(loginValidator), (req: Request, res: Response) => {
//   // Handle login logic here after passing validation
//   res.status(200).send("Login successful!");
// });
// app.post("/send-chat", chatCompletionValidator, validate(chatCompletionValidator), (req: Request, res: Response) => {
//   // Handle sending chat message logic here after passing validation
//   res.status(200).send("Message sent!");
// });
// // Error Handling Middleware for catching any unexpected errors
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).send("Internal Server Error");
// });
// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
import express from 'express';
import { body, validationResult } from 'express-validator';
import { OAuth2Client } from 'google-auth-library'; // Import OAuth2Client for Google login
// Middleware function to validate requests
export const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            await validation.run(req);
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array().map((error) => ({
                    field: error.param,
                    message: error.msg.text,
                    style: { color: error.msg.color }
                })) });
        }
        return next();
    };
};
// Validators
export const loginValidator = [
    body("email")
        .trim()
        .isEmail()
        .withMessage("Provide a valid email address."),
    body("password")
        .trim()
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long.")
        .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/)
        .withMessage({
        text: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol.",
        color: "red"
    }),
];
export const signupValidator = [
    body("name")
        .notEmpty()
        .withMessage("Name is required."),
    ...loginValidator,
];
export const chatCompletionValidator = [
    body("message")
        .notEmpty()
        .withMessage("Message is required."),
];
const app = express();
app.use(express.json()); // For parsing application/json
// Google login route
app.post("/google-login", [
    body("tokenId").notEmpty().withMessage("Token ID is required."),
], validate(loginValidator), async (req, res) => {
    const { tokenId } = req.body;
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // Initialize OAuth2Client with Google client ID
    try {
        const ticket = await client.verifyIdToken({
            idToken: tokenId,
            audience: process.env.GOOGLE_CLIENT_ID, // Specify the client ID for Google OAuth
        });
        const payload = ticket.getPayload();
        // Here you can handle the login logic using the payload information (e.g., email, name)
        // Authenticate the user, create a session, etc.
        res.status(200).send("Google login successful!"); // Respond with success message
    }
    catch (error) {
        console.error("Google login error:", error);
        res.status(401).send("Google login failed"); // Respond with error if Google login fails
    }
});
// Example Usage in Express Routes
app.post("/signup", signupValidator, validate(signupValidator), (req, res) => {
    // Handle signup logic here after passing validation
    res.status(201).send("Signup successful!");
});
app.post("/login", loginValidator, validate(loginValidator), (req, res) => {
    // Handle login logic here after passing validation
    res.status(200).send("Login successful!");
});
app.post("/send-chat", chatCompletionValidator, validate(chatCompletionValidator), (req, res) => {
    // Handle sending chat message logic here after passing validation
    res.status(200).send("Message sent!");
});
// Error Handling Middleware for catching any unexpected errors
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Internal Server Error");
});
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=validators.js.map
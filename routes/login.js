// login.js (route)
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');

/**
* @swagger
* /login:
*  post:
*    tags: 
*        - Login
*    summary: Login for admin or host
*    description: Once login authenticate a user and generate a JWT token
*    requestBody:
*      required: true
*      content: 
*          application/json:
*              schema:
*                  type: object
*                  properties:
*                      username:
*                          type: string
*                      password:
*                          type: string
*    responses:
*      200:   
*          description: Successful login
*          schema: 
*              type: object    
*              properties:
*                  token: 
*                      type: string
*                      description: JWT token for authentication
*                  category: 
*                      type: string
*                      description: User category (host or admin)
*                  redirectLink:
*                      type: string
*                      description: Redirect link based on user category
*                  GET:
*                      type: string
*                      description: URL to be used for redirection
*                  Authorization:
*                      type: string
*                      description: JWT token for authorization
*                  Content-Type: 
*                      type: string
*                      description: Response content type
*      401:
*          description: Invalid credentials
*          schema: 
*              type: object
*              properties:
*                  error:  
*                      type: string
*                      description: Error message
*                      example: Invalid credentials
*      500: 
*          description: Internal Server Error
*          schema: 
*              type: object
*              properties: 
*                  error:
*                      type: string
*                      description: Error message
*                      example: Internal Server Error
 *          
 * 
 *      
 */

/**
 * @swagger
 * /login/test:
 *  get:
 *      summary: This api is for testing
 *      tags:
 *        - Login
 *      description: This api is used for testing
 *      responses:
 *          200:
 *              description: to test get api
 */

router.get('/test',(req,res)=>{
    res.send("Hello world!!! ")
});
// POST route for user login
router.post('/',loginController.login);

module.exports = router;

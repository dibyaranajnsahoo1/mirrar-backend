# mirrar-backend test
<hr>


# Documentation for E-commerce API using Node.js and Express #


# Code Explanation:
`productModel.js (models/):`

Defines the MongoDB schema for products and variants using Mongoose.
`productController.js (controllers/):`

Implements CRUD operations for products and variants.
`productRoutes.js (routes/):`

Defines RESTful API routes for products and variants using Express.
`app.js:`

Sets up the Express application, connects to MongoDB, and uses the product routes.
`product.test.js (tests/):`

Contains Mocha and Chai tests for the model, endpoints, and search functionality.
Instructions to Run:
Install Dependencies:

Open a terminal in the project directory.
Run npm install to install the necessary dependencies.
Start MongoDB:

Ensure that MongoDB is installed and running.
Start the MongoDB server with the mongod command.
Run the Application:

Execute npm start to run the Express application.
The server will be accessible at http://localhost:3000.
Run Tests:

Execute npm test to run the Mocha and Chai tests.
Tests are located in the tests/ directory.
The testing setup assumes a MongoDB server is running locally.
API Endpoints:
Create Product:

`Method: POST
URL: /api/products`Payload: JSON object containing product details.
Get All Products:

`Method: GET
URL: /api/products`
Update Product:

`Method: PUT
URL: /api/products/:productId`
Payload: JSON object containing updated product details.
Delete Product:

`Method: DELETE
URL: /api/products/:productId`
Search Products:

`Method: GET
URL: /api/products?q={searchQuery}`
Replace {searchQuery} with the desired search term.

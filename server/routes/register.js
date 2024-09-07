const express = require( "express" );
const router = express.Router();
const {handleRegisterGetRequest,handleRegisterPostRequest} = require("../controllers/register")

router
    .route( "/" )
    .get( ( req, res ) => handleRegisterGetRequest( req, res ) )
    .post( ( req, res ) => handleRegisterPostRequest( req,res ) );


module.exports = router;

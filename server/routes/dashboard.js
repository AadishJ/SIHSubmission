const express = require( "express" );
const router = express.Router();
const {handleDashboardGetRequest,handleDashboardPostRequest} = require("../controllers/login")

router
    .route( "/" )
    .get( ( req, res ) => handleDashboardGetRequest( req, res ) )
    .post( ( req, res ) => handleDashboardPostRequest( req,res ) );


module.exports = router;

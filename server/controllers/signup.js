const user = require("../models/user")
async function handleSignUpGetRequest ( req, res )
{
    return res.status( 200 ).send("Signup Successfull");
}

async function handleSignUpPostRequest ( req, res )
{
    const {name, email, password } = req.body;
    await user.create( {
        name,
        email,
        password,
    } )
        .then( () => res.status( 200 ).send("User Succesfully Created") )
        .catch( ( err ) => res.status( 400 ).send( err.message ) );
}

module.exports =
{
    handleSignUpGetRequest,
    handleSignUpPostRequest,
}
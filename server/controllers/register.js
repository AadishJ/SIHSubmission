const user = require("../models/user")
const {setUser} = require("../service/auth")

async function handleRegisterGetRequest ( req, res )
{
    return res.status( 200 ).send("You are Entering Portal");
}
async function handleRegisterPostRequest ( req, res )
{
    const p = req.body;
    console.log(p);
}

module.exports = {
    handleRegisterGetRequest,
    handleRegisterPostRequest
}
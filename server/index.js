const express = require( "express" );
const app = express();
const registrationRouter = require( "./routes/register" );
const signupRouter = require("./routes/signup")
const loginRouter = require( "./routes/login" )
const dashboardRouter = require("./routes/dashboard")
const connectMongoDB = require( './config/connect' );
const {restrictToLoggedInUserOnly,checkAuth} = require("./middlewares/auth");
const cookieParser = require( "cookie-parser" );
const PORT = 5000;
//connection
connectMongoDB( "mongodb://localhost:27017/gdschackathon" ).then( () => console.log( "MongoDB connected" ) )
//middlewares
app.use( express.urlencoded( { extended: false } ) );
app.use(express.json());
app.use( cookieParser() );
//Router setup
app.use("/dashboard",checkAuth, dashboardRouter)
app.use( "/registration",restrictToLoggedInUserOnly, registrationRouter );
app.use("/login", loginRouter)
app.use( "/signup", signupRouter )
//Server Start
app.listen( PORT, () => console.log( "Server started" ) );
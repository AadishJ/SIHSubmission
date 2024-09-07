import Card from "./Card"
import "./HomeSec3.css"
function HomeSec3 ()
{
    return (
        <div className="background ">
            <Card
                header="StartUp"
                info="Showcase services Requested Investment Request mentorship"
            />
            <Card
                header="Investors"
                info="Showcase Services Invested projects"
            />
            <Card
                header="Mentorship"
                info="Provide Mentorship Enrolled Mentorships"
            />
            <Card
                header="Policies"
                info="Government Policies"
            />
            <Card
                header="Events"
                info="Forums Webinars Groups"
            />
        </div>
    );
}

export default HomeSec3;

import { useLocation } from "react-router-dom";
import "../css/rsvp.css";

interface Guest {
    fname: string,
    lname: string,
    email: string,
    isAttending: boolean,

    dietaryRestrictions?: string,

    // TODO: Do we need to request any additional details from guests?
}

export default function RSVP() {
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const guestID = query.get("guestID");
    let guests: Guest[];

    // TODO: Check a database for guest IDs

    if (!guestID) {
        return (
            <div className="rsvp-form">
                <form>
                    <label htmlFor="guestID">Enter your code</label>
                    <input type="text" name="guestID" id="guestID" placeholder="123..." />

                    <input type="submit" value="Submit Guest Code" />
                </form>
            </div>
        );
    } else {
         guests = [
            {fname: "Daniel", lname: "Koontz", email: "abc@def.com", isAttending: true, dietaryRestrictions: ""},
            {fname: "Kacey", lname: "Burrus", email: "def@abc.com", isAttending: true, dietaryRestrictions: ""},
        ]
    }

    // TODO: CSS
    return (
        <div className="rsvp-form">
            <form onSubmit={(e) => console.log(e)}>
                {guests.map((guest: Guest, i: number) => {
                    return <GuestForm guest={guest} i={i} key={i} />
                })}

                {/* TODO: Button for add another guest? */}

                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
}

function GuestForm(props: any) {
    const { guest, i } = props;
    return (
        <div className="guestCard" id={"guest-" + i}>
            <label htmlFor={"guest-firstname-" + i}>First Name</label>
            <input type="text" name="firstname" id={"guest-firstname-" + i} defaultValue={guest.fname} />

            <label htmlFor={"guest-lastname-" + i}>Last Name</label>
            <input type="text" name="lastname" id={"guest-lastname-" + i} defaultValue={guest.lname} />

            <label htmlFor={"guest-email-" + i}>Email</label>
            <input type="email" name="email" id={"guest-email-" + i} defaultValue={guest.email} />

            <label htmlFor={"guest-attendance-" + i}>Planning on Attending</label>
            <input type="checkbox" name="attendance" id={"guest-attendance-" + i} />

            <label htmlFor={"guest-diet-" + i}>Dietary Restrictions / Allergens</label>
            <input type="textarea" name="dietary-restrictions" id={"guest-diet-" + i} />

            <hr />
        </div>
    )
}

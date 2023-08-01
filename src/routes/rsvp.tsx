
import { useLocation, Form, useNavigate } from "react-router-dom";
import "../css/rsvp.css";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config.js"
import Collapsible from "react-collapsible"

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
    const [guests, setGuests] = useState<Guest[] | null>(null)

    const navigate = useNavigate();

    useEffect(() => {
        const api = config.api_url
        axios.get(`${api}/guests/${guestID}`).then((response) => {
            setGuests(response.data.guests)
        }).catch((e) => {
            console.log(e)
            if (guestID === null) {
                navigate(`/guest-code`)
                return
            }
            navigate(`/guest-code?message=${e.response.data.message}`)
        })
    }, [guestID, navigate])

    return (
        <div className="rsvp-form">
            <Form method="post" action="/rsvp">
                {guests && (
                    <>
                        {guests.map((guest: Guest, i: number) => {
                            return <GuestForm guest={guest} i={i} enable={guest.isAttending} key={i} />
                        })}

                        {/* <AddGuest guestCapacity={guestCapacity} guests={guests} /> */}

                        <input type="submit" value="Submit" />
                    </>   
                )}
            </Form>
            
        </div>
    );
}

function GuestForm(props: any) {
    const { guest, i, enable } = props;
    const [ thisGuest, setThisGuest ] = useState(guest)
    const [ isEnabled, setIsEnabled ] = useState(enable)
    return (
        <div className="guestCard" id={"guest-" + i}>
            <Collapsible trigger={<QuickView guest={thisGuest} open={isEnabled} />}>
                <label htmlFor={"guest-firstname-" + i}>First Name</label>
                <input type="text" name="firstname" id={"guest-firstname-" + i} defaultValue={thisGuest.fname} disabled={!isEnabled} />

                <label htmlFor={"guest-lastname-" + i}>Last Name</label>
                <input type="text" name="lastname" id={"guest-lastname-" + i} defaultValue={thisGuest.lname} disabled={!isEnabled} />

                <label htmlFor={"guest-email-" + i}>Email</label>
                <input type="email" name="email" id={"guest-email-" + i} defaultValue={thisGuest.email} disabled={!isEnabled} />

                <label htmlFor={"guest-attendance-" + i}>Planning on Attending</label>
                <input type="checkbox" name="attendance" id={"guest-attendance-" + i} checked={isEnabled} onChange={() => {
                    setIsEnabled(!isEnabled)
                }}/>

                <label htmlFor={"guest-diet-" + i}>Dietary Restrictions / Allergens</label>
                <input type="textarea" name="dietary-restrictions" id={"guest-diet-" + i} disabled={!isEnabled} />

            </Collapsible>
        </div>
    )
}

function QuickView(props: any) {
    const { guest } = props
    return (
        <div className="quickview">
            <span> 
                {guest.fname} {guest.lname} <input type="checkbox" />
            </span>
            
        </div>
    )
}

// function AddGuest(props: any) {
//     const {guestCapacity, guests} = props
//     console.log(props)
//     // if (guests.length() < guestCapacity) {
//     //     return <button type="button" onClick={() => {}}>Add another guest</button>
//     // }

//     return <></>
// }
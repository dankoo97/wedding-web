import { Form, useLocation } from "react-router-dom";

export default function GustCode() {
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const message = query.get("message");

    return (
        <div className="rsvp-form">
            <Form method="get" action="/rsvp">
                <label htmlFor="guestID">Enter your code</label>
                <input type="text" name="guestID" id="guestID" placeholder="123..."  />
                <MessageBox message={message} />

                <input type="submit" value="Submit Guest Code" />
            </Form>
        </div>
    );
}

function MessageBox(props: any) {
    console.log(props)
    if (props.message != null) {
        switch (props.message) {
            case "InvalidID":
                return <span className="error-message">Invalid guest ID. If this issue persists, please reach out.</span>
            case "NoGuestWithID":
                return <span className="error-message">No guest exists with that ID. If this issue persists, please reach out.</span>
            default:
                return <span className="error-message">Unkown Error. If this issue persists, please reach out.</span>
        }
        
    }
    return <></>
}
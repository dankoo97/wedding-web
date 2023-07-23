import "../css/wedding-info.css";

export default function WeddingInfo() {
    return (
        <>
        <div className="wedding-info">
            <table>
                <tbody>
                    <tr>
                        <th>Date:</th>
                        <td>June 8, 2024</td>
                    </tr>

                    <tr>
                        <th>Time:</th>
                        <td>TBD</td>
                    </tr>

                    <tr>
                        <th>Location:</th>
                        <td>1129 Hull Street <br />Richmond, VA 23224</td>
                    </tr>

                    <tr>
                        <th>Parking:</th>
                        <td>Parking is available behind the venue</td>
                    </tr>

                    <tr>
                        <th>Venue:</th>
                        <td><a href="https://www.copperhallrva.com">Copper Hall</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}
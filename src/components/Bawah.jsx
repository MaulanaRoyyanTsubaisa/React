import React from "react";

class Bawah extends React.Component {
    render() {
        return(
            <footer>
                <h3 className="font-extrabold">Ini adalah footer</h3>
                <p>{this.props.pesan}</p>
            </footer>
        )
    }
}
export default Bawah;
import { useState } from "react";

function Footer(props) {
    const [name, setName] = useState("");
    const [point, SetPoint] = useState("");

    const hanldChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setName(value);
    }
    const hanldeSubmit = (e) => {
        e.preventDefault(); 
        props.onPush(name);
        setName("");
    }

    return (

        <div className='content-h3'>
            <form className="input-group" style={{ width: "700px" }} onSubmit={hanldeSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name player..."
                    name="name"
                    onChange={hanldChange}
                    value={name}
                    style={{backgroundColor:"rgba(14,166,170,255)"}}
                />
                <button
                    style={{ marginLeft: "10px"}}
                    className="btn btn-light"
                    type="submit"
                    id="button-addon2"


                >
                    Add Player
                </button>
            </form>
        </div>
    )
}

export default Footer;
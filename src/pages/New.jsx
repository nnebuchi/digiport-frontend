import React, { useState } from 'react';

const New = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input1 === input2) {
            alert('The inputs match!');
            setInput1('');
            setInput2('');
            setError('');
        } else {
            setError('No you get this abi .');
        }
    };

    return (
        <div style={{ display: "flex", minHeight: "600px" }}>
            <div style={{ width: "100%", backgroundColor: "#f0f0f5" }}>
                <h4 style={{ margin: "30px 30px", width: "60%", color: "#1e2270", fontWeight: "600" }}>Digiport.</h4>
                <div style={{ align: "center", width: "800px", marginLeft: "18%", justifyContent: "center", alignItems: "center" }}>
                    <h1 className="mb-5" style={{ textAlign: "center" }}>Enter your new password below</h1>
                    <div style={{ marginLeft: "15%" }} className="form-group">
                        <form onSubmit={handleSubmit}>
                            <h5><label htmlFor="input1">New password</label></h5>
                            <input
                                type="password"
                                id="input1"
                                value={input1}
                                onChange={(e) => setInput1(e.target.value)}
                                style={{ width: "500px", height: "50px", marginBottom: "20px", outline: "none" }}
                                className="form-control"
                            />
                            <h5><label htmlFor="input2">Confirm new password</label></h5>
                            <input
                                type="password"
                                id="input2"
                                value={input2}
                                onChange={(e) => setInput2(e.target.value)}
                                style={{ width: "500px", height: "50px", marginBottom: "20px", outline: "none" }}
                                className="form-control"
                            />
                            {error && <span className="error" style={{ color: "red" }}>{error}</span>}
                            <div>
                                <button
                                    type="submit"
                                    style={{ width: "10%", marginTop: "20px", backgroundColor: "#1e2270", marginBottom: "20px", color: "white", borderRadius: "10px", marginLeft: "80%", fontWeight: "700" }}
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default New;

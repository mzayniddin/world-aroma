import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./AdminTable.scss";
import axios from "axios";

// BASE URL
const BASE_URL = "https://world-aroma.com/api/v1/apps";

const AdminTable = () => {
    const [clientsList, setClientsList] = useState([]);

    useEffect(() => {
        (async () => {
            const RESPONSE = await axios.get(`${BASE_URL}/client/list`);
            if (RESPONSE.status === 200) setClientsList(RESPONSE.data);
            else alert("Something went wrong!");
        })();
    }, []);

    console.log(clientsList);

    return (
        <table className="admin-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                {clientsList?.length ? (
                    clientsList.map(
                        ({ id, fullname, phone, email, comment }) => (
                            <tr key={uuidv4()}>
                                <td>{id}</td>
                                <td>{fullname}</td>
                                <td>{phone}</td>
                                <td>{email}</td>
                                <td>{comment}</td>
                            </tr>
                        )
                    )
                ) : (
                    <></>
                )}
            </tbody>
        </table>
    );
};

export default AdminTable;

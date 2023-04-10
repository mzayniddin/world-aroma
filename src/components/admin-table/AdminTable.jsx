import { useEffect } from "react";
import "./AdminTable.scss";
import axios from "axios";

// BASE URL
const BASE_URL = "https://alltravel.uz/api/apps";

const AdminTable = () => {
    useEffect(async () => {
        await axios.get("");
    }, []);

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
            <tbody></tbody>
        </table>
    );
};

export default AdminTable;

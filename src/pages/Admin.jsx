import { useState } from "react";
import AdminTable from "../components/admin-table/AdminTable";
import LoginModal from "../components/login-modal/LoginModal";

const Admin = () => {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <main>
            <LoginModal isLogged={isLogged} setIsLogged={setIsLogged} />
            {isLogged ? <AdminTable /> : <></>}
        </main>
    );
};

export default Admin;


import { GlobalContext } from "../../context"
import { useContext } from "react";
import {Button} from "@mui/material"

export const Navbar = () => {
    const { showModal } = useContext(GlobalContext);

    return (
        <div className='navbar py-3 px-lg-0 px-md-0 px-sm-0 px-3 shadow fixed-top bg-white'>
            <div className="container p-0 d-flex flex-row justify-content-between">
                <h2 className='fw-bold mb-0'>Expense Tracker</h2>
                <Button type="submit" variant="outlined" color="primary" className={`mt-2 d-lg-block d-md-block d-sm-block d-none py-2 fs-6 rounded-pill custom-btn`} onClick={showModal}>
                Add New Transaction
                </Button>

                <Button type="submit" variant="outlined" color="primary" className={`mt-2 d-lg-none d-md-none d-sm-none d-block py-2 rounded-pill custom-btn`} onClick={showModal}>
                <i className="bi bi-plus fs-1"></i>
                </Button>
                {/* <button className="btn btn-sm border-1 rounded-pill text-white">
                    <span className='d-lg-block d-md-block d-sm-block d-none'onClick={showModal}>Add New Transaction</span>
                    <span className='d-lg-none d-md-none d-sm-none d-block' onClick={showModal}><i className="bi bi-plus"></i></span>
                </button> */}
            </div>
        </div>
    )
}

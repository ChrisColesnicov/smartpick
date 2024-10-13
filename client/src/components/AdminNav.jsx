import { Link } from "react-router-dom"

export default function AdminNav() {
    return (
        <div className="admin-nav">
            <Link to="/admin/add">Add phone</Link>
            <Link to="/admin/edit">Edit phone</Link>
        </div>
    )
}
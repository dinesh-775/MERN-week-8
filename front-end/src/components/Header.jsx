import { NavLink } from "react-router";
function Header() {
    return (
        <div className="flex bg-black text-white justify-between items-center pr-10  ">
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQXjKCEQw9pb4LaNJzpBhDZzZi1KI5LIcMGA&s" alt="Logo"  className="w-20 h-20 rounded-[50%] p-2 "/>
            </div>
            <div>
                <nav>
                    <ul className="flex gap-20 text-[18px]">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="adduser">AddUsers</NavLink>
                        </li>
                        <li>
                            <NavLink to="userslist">UsersList</NavLink>
                        </li>
                    </ul>

                </nav>
            </div>
        </div>
    )
}
export default Header;
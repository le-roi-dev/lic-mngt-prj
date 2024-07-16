import { NavLink, useLocation } from 'react-router-dom';

interface NavItemProps {
    title: string,
    url: string,
    icon: React.ReactNode
}


const NavItem = ({ title, url, icon }: NavItemProps) => {
    const location = useLocation();
    const { pathname } = location;

    return (
        <li>
            <NavLink
                to={`/${url}`}
                className={`rounded-md group relative flex items-center gap-2.5 py-2 px-4 font-medium  duration-300 ease-in-out hover:bg-new-blue-1 hover:text-new-blue-2 dark:hover:bg-meta-4 
                    ${pathname.includes(url) &&'bg-new-blue-1 text-new-blue-2'}`
                }
            >
                {icon}
                {title}
            </NavLink>
        </li>
    );
}

export default NavItem;
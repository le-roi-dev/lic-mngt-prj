import { NavLink, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

interface NavItemChild {
    title: string,
    url: string
}

interface NavItemWithChildsProps {
    title: string,
    url: string,
    icon: React.ReactNode,
    childs: NavItemChild[],
    sidebarExpanded: boolean,
    setSidebarExpanded: (expanded: boolean) => void
}


const NavItemWithChilds = ({ title, url, icon, childs, sidebarExpanded, setSidebarExpanded }: NavItemWithChildsProps) => {
    const location = useLocation();
    const { pathname } = location;
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = () => {
        setOpen(!open);
    };
    useEffect(() => {
        setOpen(pathname === `/${url}` || pathname.includes(url));
    }, [location, url]);

    return (
        <React.Fragment>
            <NavLink
                to="#"
                className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium duration-300 ease-in-out hover:bg-new-blue-1 hover:text-new-blue-2 ${(pathname === '/transaction' ||
                    pathname.includes(url)) && 'bg-new-blue-1 text-new-blue-2'
                    }`}
                onClick={(e) => {
                    e.preventDefault();
                    sidebarExpanded
                        ? handleClick()
                        : setSidebarExpanded(true);
                }}
            >
                {icon}
                {title}
                <svg
                    className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'
                        }`}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                        fill=""
                    />
                </svg>
            </NavLink>
            {/* <!-- Dropdown Menu Start --> */}
            <div
                // className={`translate transform overflow-hidden ${!open && 'hidden'}`}
                className={`dropdown ${open ? 'dropdown-open' : ''}`}
            >
                <ul className="mt-3 mb-3 flex flex-col gap-2.5 pl-6">
                    {
                        childs.map(child => (
                            <li key={child.url}>
                                <NavLink
                                    to={`/${url}/${child.url}`}
                                    className={({ isActive }) =>
                                        'group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-slate-600 duration-300 ease-in-out hover:text-new-blue-2 ' +
                                        (isActive && '!text-new-blue-2')
                                    }
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" className='fill-current' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="none" className='fill-current'></path> </g></svg>
                                    {child.title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* <!-- Dropdown Menu End --> */}
        </React.Fragment>
    );
}

export default NavItemWithChilds;
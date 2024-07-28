import { CalendarIcon, HomeIcon, HospitalIcon, LogOutIcon, LucideProps, UserIcon } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";

type LucideIcon = React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

interface DoctorNavLink {
  to: string;
  icon: LucideIcon; 
}

const primaryNavLinks: DoctorNavLink[] = [
  {
    to: "/doctor",
    icon: HomeIcon,
  },
  {
    to: "/doctor/appointments",
    icon: CalendarIcon,
  },
  {
    to: "/doctor/patients",
    icon: HospitalIcon,
  },
  {
    to: "/doctor/account",
    icon: UserIcon,
  },
];

export default function DoctorNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex flex-col justify-between items-center rounded-md shadow-md p-4 bg-white gap-6">
      <Link to="/">
        <img src="/logoChainMed.svg" alt="" className='size-8'/>
      </Link>

      <div className="flex flex-col justify-start items-center gap-6">
        {primaryNavLinks.map((link) => {
          const NavIcon = link.icon;
          return (
            <NavLink
              to={link.to}
              end={link.to === "/doctor"}
              className={({ isActive }) => `
                size-12 flex justify-center items-center rounded-md 
                ${isActive ? 'bg-accent' : ''}
              `}
              key={`link-${link.to}`}
            >
              {({ isActive }) => (
                <NavIcon size={32} className={`${isActive ? 'text-white' : 'text-black'}`}/>
              )}
              {/* <div className="size-8 bg-gray-400 rounded-full" /> */}
            </NavLink>
          )
        })}
      </div>

      <div className="flex flex-col justify-end items-center gap-6">
        <button 
          className="size-12 flex justify-center items-center"
          onClick={() => {
            // TODO: Implement logout
            navigate("/");
          }}
        >
          <LogOutIcon size={32} />
        </button>
      </div>
    </nav>
  );
}
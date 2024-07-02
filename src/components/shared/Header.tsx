import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="navbar bg-base-100 fixed z-10">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Главная
        </Link>
      </div>
      <div className="flex-1">
        <ul className="menu menu-horizontal px-1">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </ul>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/players">Игроки</Link>
          </li>
          <li>
            <Link to="/tournaments">Турниры</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

import Link from "next/link";

export default function Nav() {
  return (
    <div className="navbar bg-base-300">
      <div className="max-w-7xl w-full mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Recipe App</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

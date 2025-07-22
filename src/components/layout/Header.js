import Menu from "@/modules/Menu";
import LoginButton from "@/ui/LoginButton";

function Header() {
  return (
    <header className="shadow-[0px_1px_4px_0px_#00000029] sticky top-0 z-50 bg-white">
      <div className="container m-auto flex justify-between items-center px-8 xl:px-8 py-4">
        <div>
          <Menu />
        </div>
        <div>
          <LoginButton />
        </div>
      </div>
    </header>
  );
}

export default Header;

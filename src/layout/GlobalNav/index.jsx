import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlinePlusSquare,
  AiOutlineUser,
  AiOutlineMore,
} from "react-icons/ai";
import { MdOutlineExplore, MdOndemandVideo } from "react-icons/md";
import NavItem from "../../components/NavItem";

const GlobalNav = () => {
  return (
    <div>
      <nav className="w-[335px] fixed min-h-screen flex flex-col px-4 border-r-2">
        <img
          className="w-[103px] h-[29px] mt-10 ml-2"
          src="/images/logo_instagram.png"
          alt="logo"
        />
        <div className="h-nav-list-height flex flex-col justify-between">
          <ul className="mt-10">
            <NavItem icon={<AiOutlineHome />} text={"홈"} />
            <NavItem icon={<AiOutlineSearch />} text={"검색"} />
            <NavItem icon={<MdOutlineExplore />} text={"탐색 탭"} />
            <NavItem icon={<MdOndemandVideo />} text={"릴스"} />
            <NavItem icon={<AiOutlineMessage />} text={"메시지"} />
            <NavItem icon={<AiOutlineHeart />} text={"알림"} />
            <NavItem icon={<AiOutlinePlusSquare />} text={"만들기"} />
            <NavItem icon={<AiOutlineUser />} text={"프로필"} />
          </ul>
          <div className="mt-10">
            <NavItem icon={<AiOutlineMore />} text={"더보기"} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default GlobalNav;

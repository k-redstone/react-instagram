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
import { Link } from "react-router-dom";


const GlobalNav = () => {
  return(
    <nav className="hidden md:flex md:w-[72px] lg:w-[220px] xl:w-[335px] fixed min-h-screen  flex-col px-4 border-r-2 ">
      <Link to={'/'}>
        <img
          className="w-[103px] h-[29px] mt-10 ml-2"
          src="/images/logo_instagram.png"
          alt="logo"
        />
      </Link>
      <div className="h-nav-list-height flex flex-col justify-between">
        <ul className="mt-10">
          <NavItem icon={<AiOutlineHome />} text={"홈"} url={'/'}/>
          <NavItem icon={<AiOutlineSearch />} text={"검색"} url={'/'} />
          <NavItem icon={<MdOutlineExplore />} text={"탐색 탭"} url={'/'} />
          <NavItem icon={<MdOndemandVideo />} text={"릴스"} url={'/'}  />
          <NavItem icon={<AiOutlineMessage />} text={"메시지"} url={'/'}  />
          <NavItem icon={<AiOutlineHeart />} text={"알림"} url={'/'}  />
          <NavItem icon={<AiOutlinePlusSquare />} text={"만들기"} url={'/'}  />
          <NavItem icon={<AiOutlineUser />} text={"프로필"} url={'/profile'}  />
        </ul>
        <div className="mt-10">
          <NavItem icon={<AiOutlineMore />} text={"더보기"} />
        </div>
      </div>
    </nav>

  )
}

export default GlobalNav
import PropTypes from "prop-types";

const NavItem = ({ icon, text }) => {
  return (
    <li className="group flex items-center justify-start py-4 rounded-md pl-2 hover:bg-gray-200 hover:cursor-pointer">
      <div className="box-border text-2xl mr-5 group-hover:scale-110 group-hover:transition-all">
        {icon}
      </div>
      <span className="peer text-base">{text}</span>
    </li>
  );
};

NavItem.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavItem;

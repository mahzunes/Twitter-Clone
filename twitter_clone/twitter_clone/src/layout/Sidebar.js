import React, { useState } from "react";
import {
  BookmarksIcon,
  ExploreIcon,
  HomeIcon,
  ListsIcon,
  MessagesIcon,
  MoreIcon,
  NotificationsIcon,
  ProfileIcon,
} from "../icons/Icon";
import twitter from "../images/twitter.png";
import SideLink from "../components/SideLink";
import UserBox from "../components/UserBox";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

function Sidebar() {
  const [active, setActive] = useState("Home");
  function handleMenuItemClick(name) {
    setActive(name);
  }

  return (
    <div className="h-screen sticky top-0 w-72 px-2 flex flex-col justify-between">
      <div>
        <div className=" mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest ">
          {" "}
          <img src={twitter} alt="Twitter Logo" className="w-9 h-9 " />
        </div>

        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <SideLink
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              ></SideLink>
            ))}
            <button className="bg-primary-base hover:bg-primary-dark w-11/12 shadow-lg text-primary-light rounded-full py-3 px-8 transform transition-colors duration-200">
              Tweet
            </button>
          </ul>
        </nav>
      </div>

      <UserBox></UserBox>
    </div>
  );
}

export default Sidebar;

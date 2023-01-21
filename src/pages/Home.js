import React from "react";
import { useSelector } from "react-redux";
import Blocklist from "../components/Blocklist";
import Container from "../components/Container";
import FriendList from "../components/FriendList";
import Friendrequest from "../components/Friendrequest";
import GroupList from "../components/GroupList";
import Mygroups from "../components/Mygroups";
import Userlist from "../components/Userlist";

const Home = () => {
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 px-2  sm:px-4 md:gap-4 md:px-4 lg:grid-cols-2 lg:gap-8 lg:px-4 xl:grid-cols-3 xl:px-0">
        <GroupList />
        <FriendList />
        <Userlist />
        <Friendrequest />
        <Mygroups />
        <Blocklist />
      </div>
    </Container>
  );
};

export default Home;

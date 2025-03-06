import Balancer from "react-wrap-balancer";

import Earth from "./earth";
import UTC8Clock from "./utc-clock";

const Geo = () => {
  return (
    <div className="flex flex-col md:mt-32 md:flex-row md:space-x-12 justify-center items-center  ">
      <UTC8Clock className="md:hidden" />
      <Earth />
      <div>
        <Balancer>
          If you don’t know where Mumbai is, here’s a little reference for you,
          I live here :)
        </Balancer>

        <UTC8Clock className="mt-6 hidden md:block" />
      </div>
    </div>
  );
};

export default Geo;

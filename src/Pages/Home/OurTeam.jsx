import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";
import team3 from "../../assets/team3.jpg";
import team4 from "../../assets/team4.jpg";
import team5 from "../../assets/team5.jpg";
import team6 from "../../assets/team6.jpg";
import team7 from "../../assets/team7.jpg";
import team8 from "../../assets/team8.jpg";
const OurTeam = () => {
  return (
    <div className="my-20">
      <h1 className="text-2xl font-bold text-center mb-3">Team Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto :mx-0 lg:grid-cols-4 gap-3">
        <div>
          <img
            src={team1}
            alt=""
            className="rounded-xl h-[200px] mx-auto lg:mx-0"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold">Naimul</h2>
            <p>CEO</p>
          </div>
        </div>
        <div>
          <img
            src={team2}
            alt=""
            className="rounded-xl h-[200px] mx-auto lg:mx-0"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold">Nadimul</h2>
            <p>Manager</p>
          </div>
        </div>
        <div>
          <img
            src={team3}
            alt=""
            className="rounded-xl h-[200px] mx-auto lg:mx-0"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold">Soriul</h2>
            <p>Service Provider</p>
          </div>
        </div>
        <div>
          <img
            src={team4}
            alt=""
            className="rounded-xl h-[200px] mx-auto lg:mx-0"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold">Monirul Islam</h2>
            <p>Service Provider</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto lg:mx-0 lg:grid-cols-4 gap-3 mt-4">
        <div>
          <img
            src={team5}
            alt=""
            className="rounded-xl h-[200px] mx-auto lg:mx-0"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold">Sarika</h2>
            <p>Service Provider</p>
          </div>
        </div>
        <div>
          <img
            src={team6}
            alt=""
            className="rounded-xl h-[200px] mx-auto lg:mx-0"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold">Nadimul</h2>
            <p>Service Provider</p>
          </div>
        </div>
        <div>
          <img
            src={team7}
            alt=""
            className="rounded-xl h-[200px] mx-auto lg:mx-0"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold">Soriul</h2>
            <p>Service Provider</p>
          </div>
        </div>
        <div>
          <img
            src={team8}
            alt=""
            className="rounded-xl h-[200px] mx-auto lg:mx-0"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold">Monirul Islam</h2>
            <p>Service Provider</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

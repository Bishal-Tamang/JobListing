import "../App.css";

const Job = ({
  logo,
  title,
  subtitle,
  time,
  location,
  contract,
  newJob,
  featured,
}: {
  logo: string;
  title: string;
  subtitle: string;
  time: string;
  location: string;
  contract: string;
  newJob: boolean;
  featured: boolean;
}) => {
  return (
    <div className="w-full bg-white drop-shadow-xl p-4 flex justify-between rounded-lg mb-6">
      <div className="left-container">
        <div className="img--container rounded-full flex gap-3 2xl:gap-6 items-center">
          <img src={logo} alt="" />

          <div className="job--description--section">
            <div className="sub--title--section flex items-center gap-2">
              {/* <h1 className="subtitle--container text-[#A7C6D1] font-leaguespartan font-bold"> */}
              <h1 className="subtitle--container">{subtitle}</h1>
              {/* <button className="bg-[#A7C6D1] rounded-2xl text-white p-2 font-leaguespartan font-bold text-sm"> */}
              {newJob ? (
                <button className="new--btn--container">NEW!</button>
              ) : null}
              {/* <button className="bg-[#334D5C] text-white rounded-2xl p-2 font-leaguespartan font-bold text-sm"> */}
              {featured ? (
                <button className="featured--btn--container">FEATURED</button>
              ) : null}
            </div>

            <div>
              <h1 className="text-[#334D5C] font-leaguespartan font-bold mt-1 text-xl">
                {title}
              </h1>
            </div>

            <div className="status--section flex gap-8">
              <p className="text-[#334D5C] font-leaguespartan opacity-70">
                {time} ago
              </p>

              <p className="text-[#334D5C] font-leaguespartan opacity-70">
                {contract}
              </p>

              <p className="text-[#334D5C] font-leaguespartan opacity-70">
                {location}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="category--container flex items-center gap-4">
        <button className="rounded-lg font-leaguespartan bg-[#D0E7F3] cursor-pointer text-[#334D5C] p-2">
          Frontend
        </button>

        <button className="rounded-lg font-leaguespartan bg-[#D0E7F3] cursor-pointer text-[#334D5C] p-2">
          Senior
        </button>

        <button className="rounded-lg font-leaguespartan bg-[#D0E7F3] cursor-pointer text-[#334D5C] p-2">
          HTML
        </button>

        <button className="rounded-lg font-leaguespartan bg-[#D0E7F3] cursor-pointer text-[#334D5C] p-2">
          CSS
        </button>

        <button className="rounded-lg font-leaguespartan bg-[#D0E7F3] cursor-pointer text-[#334D5C] p-2">
          JavaScript
        </button>
      </div>
    </div>
  );
};

export default Job;

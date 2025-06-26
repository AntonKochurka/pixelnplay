import { FaGamepad, FaNewspaper, FaTrophy, FaUsers } from "react-icons/fa6";
import hero from "@src/assets/images/hero.png";

const info = [
  {
    title: "News",
    description:
      "Stay updated with the freshest esports headlines, patch notes, and game-breaking announcements.",
    icon: <FaNewspaper className="text-4xl text-indigo-400" />,
  },
  {
    title: "Teams",
    description:
      "Create or join cyber teams, manage rosters, and collaborate with teammates.",
    icon: <FaUsers className="text-4xl text-pink-400" />,
  },
  {
    title: "Matches",
    description:
      "Watch live games, check results, and analyze detailed stats of pro-level matchups.",
    icon: <FaGamepad className="text-4xl text-green-400" />,
  },
  {
    title: "Tournaments",
    description:
      "Join or host tournaments, compete for glory, and climb the leaderboards.",
    icon: <FaTrophy className="text-4xl text-yellow-400" />,
  },
];

export default function Welcome() {
  return (
    <div className="container p-4">
      <div className="flex flex-col md:flex-row w-full items-center gap-8">
        <div className="flex-1">
          <h1 className="text-5xl font-bold tracking-wide leading-tight mb-6">
            Become <span className="clr-gr-text">a real master</span> of{" "}
            <span className="clr-gr-text">cybersport</span>.
          </h1>
          <p className="text-xl gr-text leading-relaxed">
            <span className="font-medium">Follow the latest news</span>, explore
            new <span className="font-medium">teams</span>, enter{" "}
            <span className="font-medium">tournaments</span>, and never miss a
            moment from the world of competitive gaming — all in{" "}
            <span className="clr-gr-text font-semibold">Pixel&Play</span>, your
            ultimate <span className="font-medium">esports companion</span>.
          </p>
        </div>

    <div className="flex-1 bg-transperent rounded-xl h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <img
        src={hero}
        alt="Esports Hero"
        className="h-full object-cover"
      />
    </div>
      </div>
      <div className="mt-6 h-px bg-zinc-800 w-full" />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {info.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4 bg-zinc-900 p-6 rounded-2xl h-full"
          >
            <div className="p-3 rounded-full bg-zinc-800">{item.icon}</div>
            <h3 className="clr-gr-text text-2xl font-bold">{item.title}</h3>
            <p className="text-sm gr-text font-semibold leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

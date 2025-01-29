import { FaCopyright } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-slate-800 text-white max-w-7xl flex justify-center items-center py-10 rounded-lg">
      <div className="leading-tight">
        <h1>
          <FaCopyright className="inline mr-1" />
          <span className="text-xl font-bold">PRITOM MOHAJON</span>
        </h1>
        <p className="text-lg font-medium">A self learned Web Developer</p>
        <p className="text-lg font-medium">Dept. of CSTE, NSTU</p>
      </div>
    </div>
  );
};

export default Footer;

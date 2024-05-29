import { useEffect } from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  useEffect(() => {
    document.title = "LongCT_'s Toolbox";
  }, []);

  return (
    <div className="mx-2">
      <p className="text-lg mb-4">
        Hello, welcome to my toolbox. I store all of my tools here.
      </p>
      <p className="text-lg mb-2">Tools:</p>
      <ul className="list-disc pl-6">
        <li>
          <Link to="/jp-price" className="text-primary">
            Get Card Price
          </Link>
        </li>
        {/* Add more tools as needed */}
      </ul>
    </div>
  );
};

export default MainPage;

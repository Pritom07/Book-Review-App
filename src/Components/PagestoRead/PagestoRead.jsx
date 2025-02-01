import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getread } from "../localstorage1";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Helmet } from "react-helmet-async";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagestoRead = () => {
  const bookdata = useLoaderData();
  const [readlist, setreadlist] = useState([]);
  useEffect(() => {
    const readingbookid = getread();
    setreadlist(readingbookid);
  }, []);

  const resultentArray = readlist.map((bookid) => {
    const bookobj = bookdata.find((book) => book.bookId === bookid);
    const newbookobj = {
      BookName: bookobj?.bookName,
      Pages: bookobj?.totalPages,
    };
    return newbookobj;
  });

  return (
    <div className="flex justify-center min-h-screen px-4 mt-4 md:mt-2">
      <Helmet>
        <title>Pages to Read</title>
      </Helmet>
      <div className="w-full max-w-7xl">
        <h2 className="text-center text-xl md:text-2xl font-bold mb-4 text-gray-800">
          Pages to Read Per Book
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-3">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={resultentArray}
              margin={{ top: 20, right: 30, left: 10, bottom: 50 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="BookName"
                angle={-15}
                textAnchor="end"
                interval={0}
                height={60}
              />
              <YAxis />
              <Bar
                dataKey="Pages"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {resultentArray.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PagestoRead;

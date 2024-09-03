import { useEffect , useState } from "react";

const Timecheck = ({ data, removeCard }) => {
  const [removeTime, setRemovetime] = useState(15);
  useEffect(() => {
    const interval = setInterval(() => {
      if (removeTime <= 0) {
        removeCard(data.createdAt);
      } else {
        setRemovetime(removeTime - 1);
      }
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [removeTime]);
  return (
    <div
      key={data.createdAt}
      className={`h-40 ml-6 w-36 flex-col flex justify-center items-center rounded-md`}
      style={{
        backgroundColor: data.bg,
        color: data.txtColor,
      }}
    >
      <div className="flex flex-col items-center space-y-4">
  <h1 className="text-2xl font-bold ">{data.txt}</h1>
  <h1 className="text-2xl font-bold ">{removeTime} s</h1>
</div>
    </div>
  );
};

export default Timecheck;

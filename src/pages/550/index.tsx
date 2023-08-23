import axios from "axios";
import { useEffect, useState } from "react";
import { univ } from "../../interface/interface";
import { MyChart } from "../../components";
import { BASE_URL } from "..";

export const FiveHundredData = () => {
  const [univ, setUniv] = useState<univ[] | null>(null);
  const [error, setError] = useState(null);
  const imgUrl =
    "https://logo.clearbit.com/https://svelte.dev?size=50&format=png";
  useEffect(() => {
    axios
      .get(`${BASE_URL}/550`)
      .then((response) => {
        setUniv(response.data);
        console.log(univ);
      })
      .catch((error) => {
        setError(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) return error;

  if (!univ) return null;

  return (
    <>
      <div className=" bg-gray-100 pt-5 flex flex-row gap-5 pb-5 flex-wrap justify-center items-center">
        {univ.map((universities: univ) => (
          <div
            key={universities.name}
            className=" w-96 h-[500] p-5 bg-white hover:bg-slate-200 rounded-md shadow-md flex flex-col items-center align-middle"
          >
            <img
              src={universities.imgUrl}
              onError={(e) => {
                // e.onerror = null;
                e.currentTarget.src = imgUrl;
              }}
              height={"100px"}
              width={"100px"}
            />
            <p className=" pt-3">{universities.name}</p>
            <p>
              {universities.country}({universities.alpha_two_code})
            </p>
            {/* <p className="">
              domains:{" "}
              {universities.domains.map((domains: string) => `${domains} `)}
            </p>
            <p>
              Web Pages:{" "}
              {universities.web_pages.map((web: string) => `${web} `)}
            </p> */}
            <p className="text-justify pt-2">{universities.paragrapgh}</p>
            <MyChart chartData={universities.chartData} />
          </div>
        ))}
      </div>
    </>
  );
};

import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Papa from "papaparse";

const RANKINGHEAD = [
  { title: "Colocação" },
  { title: "Divisão" },
  { title: "Categoria" },
  { title: "Atleta" },
  { title: "Pista 1" },
  { title: "Pista 2" },
  { title: "Total" },
];

export default function Ranking() {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/contexts/ranking/ranking.csv");
      const reader = response.body.getReader();
      const result = await reader.read();

      const text = new TextDecoder().decode(result.value);
      Papa.parse(text, {
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          setData(result.data);
        },
      });
    }

    fetchData();
  }, []);

  const handleSort = (field) => {
    const newData = [...data];
    newData.sort((a, b) => {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    });

    if (sortBy === field) {
      newData.reverse();
      setSortBy(null);
    } else {
      setSortBy(field);
    }

    setData(newData);
  };

  const filteredData = data.filter((item) => {
    const searchText = filterText.toLowerCase();
    return Object.values(item).some((value) => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(searchText);
      }
      return false;
    });
  });

  return (
    <main className="bg-black text-white">
      <Navbar />
      <div className="h-[8em] mt-10 bg-red-800 items-center flex justify-center bg-center bg-blend-multiply bg-opacity-40 bg-[url('/images/clube.jpg')]">
        <h1 className="text-2xl font-bold mb-4 text-[2em]">Ranking</h1>
      </div>

      <div className="p-4">
        <input
          type="text"
          placeholder="Filtrar"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="p-2 border rounded-md mb-4 text-black "
        />

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-gradient-to-l from-neutral-700 to-neutral-900">
              <tr>
                {RANKINGHEAD.map((item, idx) => (
                  <th key={idx} scope="col" className="px-6 py-3">
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => handleSort(item.title)}
                    >
                      {item.title}
                      <svg
                        className="w-3 h-3 ml-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-gradient-to-l text-gray-300 from-neutral-700 to-neutral-900">
              {filteredData.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {item["Colocação"]}
                  </th>
                  <td className="px-6 py-4">{item["Divisão"]}</td>
                  <td className="px-6 py-4">{item["Categoria"]}</td>
                  <td className="px-6 py-4">{item["Atleta"]}</td>
                  <td className="px-6 py-4">{item["Pista 1"]}</td>
                  <td className="px-6 py-4">{item["Pista 2"]}</td>
                  <td className="px-6 py-4">{item["Total"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </main>
  );
}

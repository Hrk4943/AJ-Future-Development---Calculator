import React, { useState } from "react";
import Swal from "sweetalert2";
import Table from "./Table";

export default function Calculator() {
  const [work, setWork] = useState("");
  const [ratio, setRatio] = useState("");
  const [totalVolume, setTotalVolume] = useState("");
  const [volumeInUnits, setVolumeInUnits] = useState("");
  const [cementBags, setCementBags] = useState("");
  const [sand, setSand] = useState("");
  const [metal, setMetal] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  const calculateMaterial = () => {
    const calculatedVolumeInUnits = (parseFloat(totalVolume) / 2.83).toFixed(2);
    const cementUnits = (totalVolume * 6.5).toFixed(2);
    const calculatedSand = (calculatedVolumeInUnits / 2).toFixed(2);
    const calculatedMetal = (calculatedVolumeInUnits * 0.85).toFixed(2);
    setVolumeInUnits(calculatedVolumeInUnits);
    setCementBags(cementUnits);
    setSand(calculatedSand);
    setMetal(calculatedMetal);
    setIsCalculated(true);
  };

  const openPopup = () => {
    Swal.fire({
      title: "Successfully Calculated",
      text: "Your material calculation has been completed.",
      icon: "success",
    });
  }

  return (
    <>
      <div class="flex items-center w-full h-screen bg-white">
        <div class="container flex items-center mb-12 mx-auto my-4 px-4 lg:px-20">
          <div class="w-full p-8 bg-green-100 rounded-2xl shadow-2xl">
            <div class="flex items-center justify-center my-4">
              <h1 class="font-bold uppercase text-4xl">Material Calculator</h1>
            </div>

            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-10">
              <div>
                <label for="work" class="text-gray-600">
                  Work
                </label>
                <input
                  id="work"
                  class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Work"
                  value={work}
                  onChange={(e) => setWork(e.target.value)}
                />
              </div>
              <div>
                <label for="ratio" class="text-gray-600">
                  Ratio
                </label>
                <input
                  id="ratio"
                  class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Ratio"
                  value={ratio}
                  onChange={(e) => setRatio(e.target.value)}
                />
              </div>

              <div>
                <label for="totalVolume" class="text-gray-600">
                  Total Volume
                </label>
                <input
                  id="totalVolume"
                  class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Total Volume"
                  value={totalVolume}
                  onChange={(e) => setTotalVolume(e.target.value)}
                />
              </div>
              <div>
                <label for="volumeInUnits" class="text-gray-600">
                  Volume in Units*
                </label>
                <input
                  id="volumeInUnits"
                  class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Volume in Units*"
                  value={volumeInUnits}
                  onChange={(e) => setVolumeInUnits(e.target.value)}
                />
              </div>
            </div>
            <div class="my-4 flex items-center justify-center">
              <button
                onClick={() => {
                  calculateMaterial();
                  openPopup();
                }}
                class="uppercase text-sm font-bold tracking-wide bg-green-500 text-gray-100 p-3 rounded-lg w-80
          focus:outline-none focus:shadow-outline"
              >
                Calculate
              </button>
            </div>
            {isCalculated && (
              <Table cementBags={cementBags} sand={sand} metal={metal} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function Table({ cementBags, sand, metal }) {
  return (
    <>
     <div className="flex justify-center items-center">
      <div>
        <h2 className="font-bold text-2xl px-8 mb-4">Materials Required</h2>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-8 py-2">Material</th>
              <th className="px-8 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-black px-8 py-2">Cement Bags</td>
              <td className="border-2 border-black px-8 py-2">{cementBags}</td>
            </tr>
            <tr>
              <td className="border-2 border-black px-8 py-2">Sand (units)</td>
              <td className="border-2 border-black px-8 py-2">{sand}</td>
            </tr>
            <tr>
              <td className="border-2 border-black px-8 py-2">Metal (units)</td>
              <td className="border-2 border-black px-8 py-2">{metal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

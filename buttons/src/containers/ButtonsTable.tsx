import { Button } from "../components/Button";

import pointer from "../assets/pointer.svg";
import move from "../assets/move.svg";
import notAllowed from "../assets/not-allowed.svg";
import wait from "../assets/wait.svg";

export const ButtonsTable = () => {
  return (
    <table className="w-full border-spacing-12 border-darkPurple-700 border-8 rounded-2xl my-16 uppercase text-xs table-auto hidden lg:table">
      <thead className="p-12">
        <tr>
          <td className="bg-darkPurple-700 p-6"></td>
          <th className="bg-darkPurple-700 p-6 text-gray-300">Primary</th>
          <th className="bg-darkPurple-700 p-6 text-gray-300">Secondary</th>
          <th className="bg-darkPurple-700 p-6 text-gray-300">Tertiary</th>
          <th className="bg-darkPurple-700 p-6 text-gray-300">Cursor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="bg-darkPurple-700 py-6 px-3 text-gray-300">Default</th>
          <td className="p-7">
            <Button title="Default primary" />
          </td>
          <td>
            <Button title="Default secondary" variant="secondary" />
          </td>
          <td>
            <Button title="Default tertiary" variant="tertiary" />
          </td>
          <td>
            <img src={pointer} alt="" />
          </td>
        </tr>
        <tr>
          <th className="bg-darkPurple-700 py-6 px-3 text-gray-300">Hover</th>
          <td>
            <Button title="Hover primary" className="bg-purple-400" />
          </td>
          <td>
            <Button
              title="Hover secondary"
              variant="secondary"
              className="bg-darkPurple-500"
            />
          </td>
          <td>
            <Button title="Hover tertiary" variant="tertiary" />
          </td>
          <td>
            <img src={pointer} alt="" />
          </td>
        </tr>
        <tr>
          <th className="bg-darkPurple-700 py-6 px-3 text-gray-300">Focus</th>
          <td>
            <Button
              title="Focus primary"
              className="outline outline-2 outline-offset-2"
            />
          </td>
          <td>
            <Button
              title="Focus secondary"
              className="outline outline-2 outline-offset-2"
              variant="secondary"
            />
          </td>
          <td>
            <Button
              title="Focus tertiary"
              className="outline outline-2 outline-offset-2"
              variant="tertiary"
            />
          </td>
          <td>
            <img src={pointer} alt="" />
          </td>
        </tr>
        <tr>
          <th className="bg-darkPurple-700 py-6 px-3 text-gray-300">
            Disabled
          </th>
          <td>
            <Button title="Disabled primary" disabled />
          </td>
          <td>
            <Button title="Disabled secondary" variant="secondary" disabled />
          </td>
          <td>
            <Button title="Disabled tertiary" variant="tertiary" disabled />
          </td>
          <td>
            <img src={notAllowed} alt="" />
          </td>
        </tr>
        <tr>
          <th className="bg-darkPurple-700 py-6 px-3 text-gray-300">Loading</th>
          <td>
            <Button title="Loading primary" isLoading />
          </td>
          <td>
            <Button title="Loading secondary" variant="secondary" isLoading />
          </td>
          <td>
            <Button title="Loading tertiary" variant="tertiary" isLoading />
          </td>
          <td>
            <img src={wait} alt="" />
          </td>
        </tr>
        <tr>
          <th className="bg-darkPurple-700 py-6 px-3 text-gray-300">Movable</th>
          <td>
            <Button title="Movable primary" isDraggable />
          </td>
          <td>
            <Button title="Movable secondary" variant="secondary" isDraggable />
          </td>
          <td>
            <Button title="Movable tertiary" variant="tertiary" isDraggable />
          </td>
          <td>
            <img src={move} alt="" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

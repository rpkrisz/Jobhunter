import {useGetExperiencesQuery} from "../../state/experienceApiSlice.js";
import Infinity from "../../Components/InfinitLoading.jsx";

export default function Profile() {
  const {data, isLoading} = useGetExperiencesQuery();
  console.log(data);

  return (
    <>
      {isLoading ? (
        <Infinity />
      ) : (
        <div className="overflow-x-auto">
          <h2 className="text-xl my-3">Experiences</h2>
          <table className="table table-zebra">
            <tbody>
              {data.map(exp => (
                <tr key={exp.id}>
                  <th>{exp.company}</th>
                  <td>{exp.title}</td>
                  <td>{exp.interval}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

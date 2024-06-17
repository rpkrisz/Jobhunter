import {useGetExperiencesQuery} from "../../state/experienceApiSlice.js";
import Infinity from "../../Components/InfinitLoading.jsx";
import EditExpModal from "../../experinces/EditExpModal";
import {TrashIcon} from "../../Components/FawIcons";
import {useRemoveExperienceMutation} from "../../state/experienceApiSlice.js";
import {useState} from "react";
import Succes from "../../Components/Feedbacks/Succes.jsx";
import Error from "../../Components/Feedbacks/Error.jsx";

export default function Profile() {
  const [removeExp] = useRemoveExperienceMutation();
  const {data, isLoading} = useGetExperiencesQuery();
  const [feedBack, setFeedBack] = useState({error: false, succes: false});

  function closeFeedBack() {
    setFeedBack({error: false, succes: false});
  }

  function handelDelete(id) {
    removeExp(id)
      .then(resp => {
        console.log(resp);
        resp.error
          ? setFeedBack({error: true, succes: false})
          : setFeedBack({error: false, succes: true});
      })
      .then(() => {
        setTimeout(() => {
          closeFeedBack();
        }, 3000);
      });
  }

  return (
    <>
      {isLoading ? (
        <Infinity />
      ) : (
        <>
          {(feedBack.error || feedBack.succes) && (
            <div className="toast toast-end toast-bottom">
              {feedBack.succes && (
                <Succes message="Expetience successfully deleted!" closeFunction={closeFeedBack} />
              )}
              {feedBack.error && (
                <Error message="Something went wrong! Try again!" closeFunction={closeFeedBack} />
              )}
            </div>
          )}
          <EditExpModal data={data} />
          <div className="overflow-x-auto">
            <h2 className="text-xl my-3">Experiences</h2>
            <table className="table table-zebra">
              <tbody>
                {data.map(exp => (
                  <tr key={exp.id}>
                    <th>{exp.company}</th>
                    <td>{exp.title}</td>
                    <td>{exp.interval}</td>
                    <td>
                      <button
                        className="btn btn-error mx-1 tooltip tooltip-error "
                        data-tip="Delete"
                        onClick={() => handelDelete(exp.id)}
                      >
                        <TrashIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}
